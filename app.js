(function () {
  "use strict";

  // ---------- Theme ----------
  var toggleBtn = document.getElementById("themeToggle");
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }
  function updateIcon() {
    var isLight = currentTheme() === "light";
    toggleBtn.textContent = isLight ? "🌙" : "☀️";
    toggleBtn.setAttribute(
      "aria-label",
      isLight ? "Dunkelmodus aktivieren" : "Hellmodus aktivieren"
    );
  }
  toggleBtn.addEventListener("click", function () {
    var next = currentTheme() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("fow25-theme", next);
    updateIcon();
  });
  updateIcon();

  // ---------- State ----------
  var order = [];
  var answers = {}; // id -> selected option index (mc) or text (freitext)

  var introView = document.getElementById("intro-view");
  var quizView = document.getElementById("quiz-view");
  var resultView = document.getElementById("result-view");
  var questionsWrap = document.getElementById("questions-wrap");
  var reviewWrap = document.getElementById("review-wrap");
  var progressFill = document.getElementById("progress-fill");
  var progressLabel = document.getElementById("progress-label");

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function startQuiz() {
    order = shuffle(QUESTIONS);
    answers = {};
    renderQuestions();
    introView.classList.add("hidden");
    resultView.classList.add("hidden");
    quizView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateProgress();
  }

  function renderQuestions() {
    questionsWrap.innerHTML = "";
    order.forEach(function (q, idx) {
      var card = document.createElement("div");
      card.className = "card";
      card.dataset.qid = q.id;

      var topicTag = document.createElement("span");
      topicTag.className = "topic-tag";
      topicTag.textContent = q.topic;
      card.appendChild(topicTag);

      var fieldset = document.createElement("fieldset");

      var legend = document.createElement("legend");
      legend.className = "q-legend";
      var badge = document.createElement("span");
      badge.className = "badge " + (q.type === "mc" ? "kurz" : "lang");
      badge.textContent = q.type === "mc" ? "kurz" : "lang";
      var qText = document.createElement("span");
      qText.innerHTML =
        '<span class="q-index">' + (idx + 1) + ".</span> " + escapeHtml(q.prompt);
      var pts = document.createElement("span");
      pts.className = "q-points";
      pts.textContent = "(" + q.points + (q.points === 1 ? " Punkt" : " Punkte") + ")";
      legend.appendChild(badge);
      legend.appendChild(qText);
      legend.appendChild(pts);
      fieldset.appendChild(legend);

      if (q.type === "mc") {
        var optWrap = document.createElement("div");
        optWrap.className = "options";
        var optOrder = shuffle(q.options.map(function (o, i) { return i; }));
        optOrder.forEach(function (origIdx) {
          var opt = q.options[origIdx];
          var label = document.createElement("label");
          label.className = "option-label";
          var input = document.createElement("input");
          input.type = "radio";
          input.name = "q_" + q.id;
          input.value = String(origIdx);
          input.addEventListener("change", function () {
            answers[q.id] = origIdx;
            Array.prototype.forEach.call(
              optWrap.querySelectorAll(".option-label"),
              function (l) { l.classList.remove("picked"); }
            );
            label.classList.add("picked");
            updateProgress();
          });
          var span = document.createElement("span");
          span.textContent = opt.text;
          label.appendChild(input);
          label.appendChild(span);
          optWrap.appendChild(label);
        });
        fieldset.appendChild(optWrap);
      } else {
        var textarea = document.createElement("textarea");
        textarea.className = "freitext-input";
        textarea.placeholder = "Ihre Antwort...";
        textarea.addEventListener("input", function () {
          answers[q.id] = textarea.value;
          updateProgress();
        });
        fieldset.appendChild(textarea);
      }

      card.appendChild(fieldset);
      questionsWrap.appendChild(card);
    });
  }

  function answeredCount() {
    return order.reduce(function (n, q) {
      var a = answers[q.id];
      if (q.type === "mc") return n + (typeof a === "number" ? 1 : 0);
      return n + (a && a.trim().length > 0 ? 1 : 0);
    }, 0);
  }

  function updateProgress() {
    var done = answeredCount();
    var total = order.length;
    progressFill.style.width = (total ? (done / total) * 100 : 0) + "%";
    progressLabel.textContent = done + " von " + total + " beantwortet";
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[.,;:!?()„“"']/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function scoreFreitext(q, answerText) {
    var norm = normalize(answerText);
    if (!norm) return 0;
    var seenGroups = {};
    var hits = 0;
    var totalWeight = 0;
    q.keywords.forEach(function (k) { totalWeight += k.weight; });
    q.keywords.forEach(function (k) {
      var group = k.synonymGroup || k.phrase;
      if (seenGroups[group]) return;
      if (norm.indexOf(k.phrase.toLowerCase()) !== -1) {
        hits += k.weight;
        seenGroups[group] = true;
      }
    });
    if (totalWeight === 0) return 0;
    var ratio = Math.min(1, hits / totalWeight);
    return Math.round(ratio * q.points * 10) / 10;
  }

  function submitQuiz() {
    var totalScore = 0;
    var maxScore = 0;
    var results = [];

    order.forEach(function (q) {
      maxScore += q.points;
      var a = answers[q.id];
      var awarded = 0;
      if (q.type === "mc") {
        var correctIdx = q.options.findIndex(function (o) { return o.correct; });
        var isCorrect = typeof a === "number" && a === correctIdx;
        awarded = isCorrect ? q.points : 0;
        results.push({
          q: q, awarded: awarded, yourAnswer: typeof a === "number" ? q.options[a].text : null,
          correctAnswer: q.options[correctIdx].text, status: isCorrect ? "ok" : (a === undefined ? "no" : "no"),
        });
      } else {
        awarded = scoreFreitext(q, a);
        var status = awarded >= q.points ? "ok" : awarded > 0 ? "partial" : "no";
        results.push({ q: q, awarded: awarded, yourAnswer: a || null, status: status });
      }
      totalScore += awarded;
    });

    renderResults(totalScore, maxScore, results);
    quizView.classList.add("hidden");
    resultView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderResults(totalScore, maxScore, results) {
    var scoreCard = document.getElementById("score-card");
    var pct = maxScore ? Math.round((totalScore / maxScore) * 100) : 0;
    scoreCard.innerHTML =
      '<h2>Dein Ergebnis</h2>' +
      '<div class="score-hero"><span class="score-num">' +
      (Math.round(totalScore * 10) / 10) +
      '</span><span class="score-max">/ ' + maxScore + ' Punkte (' + pct + ' %)</span></div>' +
      '<p style="margin-top:0.6rem;">Bei den Freitextfragen wurde die Punktzahl automatisch anhand erwarteter Stichwörter grob geschätzt – ' +
      'die ausführlichen Musterlösungen unten zeigen dir, worauf es inhaltlich ankommt. Vergleiche deine Antworten selbst noch einmal genau damit.</p>';

    reviewWrap.innerHTML = "";
    results.forEach(function (r, idx) {
      var q = r.q;
      var item = document.createElement("div");
      item.className = "card accent-purple review-item";

      var statusLabel = r.status === "ok" ? "richtig" : r.status === "partial" ? "teilweise" : "falsch/offen";
      var html = '<span class="topic-tag">' + escapeHtml(q.topic) + '</span>';
      html += '<p><strong>' + (idx + 1) + ". " + escapeHtml(q.prompt) + '</strong>';
      html += '<span class="status ' + r.status + '">' + statusLabel + " · " + (Math.round(r.awarded * 10) / 10) + "/" + q.points + " Pkt.</span></p>";

      if (q.type === "mc") {
        html += '<div class="review-your-answer">Deine Antwort: ' + (r.yourAnswer ? escapeHtml(r.yourAnswer) : "<em>keine Antwort ausgewählt</em>") + "</div>";
      } else {
        html += '<div class="review-your-answer">Deine Antwort: ' + (r.yourAnswer ? escapeHtml(r.yourAnswer) : "<em>keine Antwort eingegeben</em>") + "</div>";
      }

      html += '<div class="review-solution"><strong>Musterlösung:</strong><br>' + escapeHtml(q.solution) + "</div>";

      item.innerHTML = html;
      reviewWrap.appendChild(item);
    });
  }

  document.getElementById("start-btn").addEventListener("click", startQuiz);
  document.getElementById("submit-btn").addEventListener("click", submitQuiz);
  document.getElementById("retry-btn").addEventListener("click", startQuiz);
  document.getElementById("retry-btn-2").addEventListener("click", function () {
    resultView.classList.add("hidden");
    introView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
