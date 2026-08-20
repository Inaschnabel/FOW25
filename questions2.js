// Fragenkatalog FOW25 – Kapitel 2: Grundlagen einer Marketingkonzeption (LG 12.2)
// type: "mc" (kurz, Multiple Choice) oder "freitext" (lang, Freitextantwort)
// Bei "mc" ist genau eine Option isCorrect: true.
// Bei "freitext" dienen "keywords" nur einer groben Selbsteinschätzung der Punktzahl;
// maßgeblich ist die ausführliche Musterlösung ("solution"), die am Ende angezeigt wird.

const QUESTIONS = [
  {
    id: "q1",
    type: "mc",
    topic: "Grundeinstellungen gegenüber dem Markt",
    points: 1,
    prompt: "Was ist bei der Produktionskonzeption der Ausgangspunkt des unternehmerischen Handelns?",
    options: [
      { text: "Die Fertigung des Unternehmens", correct: true },
      { text: "Die Bedürfnisse der Kunden", correct: false },
      { text: "Der Wettbewerb auf dem Zielmarkt", correct: false },
      { text: "Der Vertrieb im Ausland", correct: false },
    ],
    solution:
      "Bei der Produktionskonzeption verläuft die Vorgehensweise von innen nach außen in Materialflussrichtung: Ausgangspunkt ist die Fertigung, Bezugsobjekt sind die Produkte des Unternehmens. Sie bedürfen intensiver Verkaufsunterstützungsmaßnahmen, um durch genügend Umsatz einen Gewinn zu erzielen.",
  },
  {
    id: "q2",
    type: "mc",
    topic: "Grundeinstellungen gegenüber dem Markt",
    points: 1,
    prompt: "Was ist bei der Marketingkonzeption der Ausgangspunkt des unternehmerischen Handelns?",
    options: [
      { text: "Der Absatzmarkt bzw. die Bedürfnisse der Kunden", correct: true },
      { text: "Die Fertigungskapazität des Unternehmens", correct: false },
      { text: "Die Konkurrenzsituation im Ausland", correct: false },
      { text: "Die Beschaffungspreise für Rohstoffe", correct: false },
    ],
    solution:
      "Die Marketingkonzeption verläuft von außen nach innen: Ausgangspunkt ist der Absatzmarkt, Bezugsobjekt sind die Kundenbedürfnisse, die es in allen Unternehmensbereichen zu berücksichtigen gilt, um durch Zufriedenstellung der Kunden einen Gewinn zu erzielen.",
  },
  {
    id: "q3",
    type: "mc",
    topic: "Grundeinstellungen gegenüber dem Markt",
    points: 1,
    prompt: "Welcher Erfolgsmaßstab gilt für die Marketingkonzeption?",
    options: [
      { text: "Gewinn durch genügend Umsatz", correct: false },
      { text: "Gewinn durch zufriedene Kunden", correct: true },
      { text: "Kostenminimierung in der Fertigung", correct: false },
      { text: "Maximale Auslastung der Produktionsanlagen", correct: false },
    ],
    solution:
      "Die Marketingkonzeption betont bei der Durchführung die Koordination von Verkauf und Produkt, orientiert an den Kundenwünschen. Erfolgsmaßstab ist der Gewinn durch zufriedene Kunden.",
  },
  {
    id: "q4",
    type: "mc",
    topic: "Grundeinstellungen gegenüber dem Markt",
    points: 1,
    prompt: "Worauf legt die Produktionskonzeption bei der Durchführung besonderen Wert?",
    options: [
      { text: "Auf Produktion, Verkauf und Verkaufsförderung", correct: true },
      { text: "Auf die Koordination von Verkauf und Produkt", correct: false },
      { text: "Auf die individuellen Kundenbedürfnisse", correct: false },
      { text: "Auf systematische Marktforschung", correct: false },
    ],
    solution:
      "Die Denkrichtung der Produktionskonzeption lautet: Material beschaffen – kostengünstig und mit den geforderten Eigenschaften produzieren – so gut wie möglich verkaufen. Bei der Durchführung stehen deshalb Produktion, Verkauf und Verkaufsförderung im Vordergrund.",
  },
  {
    id: "q5",
    type: "freitext",
    topic: "Grundeinstellungen gegenüber dem Markt",
    points: 4,
    prompt:
      "Erklären Sie in eigenen Worten den Unterschied zwischen Produktionskonzeption und Marketingkonzeption.",
    keywords: [
      { phrase: "produktionskonzeption", weight: 1 },
      { phrase: "innen nach außen", weight: 1 },
      { phrase: "fertigung", weight: 1 },
      { phrase: "marketingkonzeption", weight: 1 },
      { phrase: "außen nach innen", weight: 1 },
      { phrase: "kundenbedürfnisse", weight: 1 },
    ],
    solution:
      "Die Produktionskonzeption geht von innen nach außen vor (Materialflussrichtung): Ausgangspunkt ist die Fertigung des Unternehmens, Bezugsobjekt sind seine Produkte; Ziel ist es, durch Produktion, Verkauf und Verkaufsförderung genügend Umsatz und damit Gewinn zu erzielen. Die Marketingkonzeption geht dagegen von außen nach innen vor: Ausgangspunkt ist der Absatzmarkt, Bezugsobjekt sind die Bedürfnisse der Kunden, die in allen Unternehmensbereichen berücksichtigt werden müssen. Erfolgsmaßstab ist hier der Gewinn durch zufriedene Kunden statt durch reine Verkaufsförderung.",
  },
  {
    id: "q6",
    type: "mc",
    topic: "Vom Verkäufer- zum Käufermarkt",
    points: 1,
    prompt: "Was kennzeichnet einen Verkäufermarkt?",
    options: [
      { text: "Die Nachfrage nach Gütern ist größer als das Angebot – Nachfrageüberhang", correct: true },
      { text: "Das Angebot an Gütern ist größer als die Nachfrage", correct: false },
      { text: "Es gibt auf diesem Markt keinerlei Wettbewerb", correct: false },
      { text: "Die Marktmacht liegt beim Käufer", correct: false },
    ],
    solution:
      "Der Verkäufermarkt ist ein Markt, in dem die Nachfrage nach Gütern größer ist als das Güterangebot. Es besteht ein Nachfrageüberhang; die Marktmacht hat der Verkäufer.",
  },
  {
    id: "q7",
    type: "mc",
    topic: "Vom Verkäufer- zum Käufermarkt",
    points: 1,
    prompt: "Was kennzeichnet einen Käufermarkt?",
    options: [
      { text: "Angebotsüberhang – die Marktmacht liegt beim Käufer", correct: true },
      { text: "Nachfrageüberhang – die Marktmacht liegt beim Verkäufer", correct: false },
      { text: "Ein staatlich reguliertes, festes Preisniveau", correct: false },
      { text: "Ein akuter Mangel an Produzenten", correct: false },
    ],
    solution:
      "Der Käufermarkt ist ein Markt, in dem das Angebot an Gütern größer ist als die Nachfrage nach Gütern. Es besteht ein Angebotsüberhang; die Marktmacht hat der Käufer.",
  },
  {
    id: "q8",
    type: "mc",
    topic: "Vom Verkäufer- zum Käufermarkt",
    points: 1,
    prompt: "Wodurch kommt es laut Lehrbuch zum Wandel vom Verkäufer- zum Käufermarkt?",
    options: [
      { text: "Sättigung der Bedürfnisse, technischer Fortschritt und Liberalisierung der Märkte", correct: true },
      { text: "Rückgang der Weltbevölkerung", correct: false },
      { text: "Verstaatlichung der Industriebetriebe", correct: false },
      { text: "Rückkehr zur reinen Selbstversorgung", correct: false },
    ],
    solution:
      "Durch die zunehmende Sättigung der Bedürfnisse, den technischen Fortschritt und die Liberalisierung der Märkte kommt es derzeit zu einem Überhang des Leistungsangebots – die Märkte entwickeln sich vom Verkäufermarkt zum Käufermarkt.",
  },
  {
    id: "q9",
    type: "mc",
    topic: "Begriff Marketing",
    points: 1,
    prompt: "Was ist das oberste Ziel der Marketingkonzeption?",
    options: [
      { text: "Die Kundenzufriedenheit", correct: true },
      { text: "Die maximale Produktionsmenge", correct: false },
      { text: "Minimale Lagerbestände", correct: false },
      { text: "Kurzfristige Umsatzmaximierung um jeden Preis", correct: false },
    ],
    solution:
      "Marketing ist eine Konzeption, bei der alle Aktivitäten eines Unternehmens konsequent auf die Erfüllung der Kundenbedürfnisse ausgerichtet sind. Ziel der Marketingkonzeption ist die Kundenzufriedenheit.",
  },
  {
    id: "q10",
    type: "freitext",
    topic: "Begriff Marketing",
    points: 4,
    prompt: "Was versteht man unter dem Begriff Marketing – im engeren und im erweiterten Sinne?",
    keywords: [
      { phrase: "kundenbedürfnisse", weight: 1 },
      { phrase: "kundenzufriedenheit", weight: 1 },
      { phrase: "führungskonzeption", weight: 1 },
      { phrase: "umfeld", weight: 1 },
    ],
    solution:
      "Im engeren Sinn ist Marketing eine Konzeption, bei der alle Aktivitäten eines Unternehmens konsequent auf die Erfüllung der Kundenbedürfnisse ausgerichtet werden, um Kundenzufriedenheit zu erreichen. In erweiterter Betrachtung ist Marketing eine marktorientierte Führungskonzeption, die die Beziehungen zwischen dem Unternehmen und seinem gesamten marktwirtschaftlichen Umfeld erfasst und analysiert – dazu zählen neben den Kunden auch Konkurrenten, Absatzmittler und -helfer sowie Lieferer, außerdem die wirtschaftliche und gesellschaftspolitische Lage, der technologische Fortschritt und die Globalisierung der Märkte. Marketing ist damit eine Konzeption des Planens und Handelns, bei der alle Aktivitäten eines Unternehmens zielorientiert auf die gegenwärtigen und künftigen Erfordernisse der Märkte ausgerichtet werden.",
  },
  {
    id: "q11",
    type: "freitext",
    topic: "Begriff Marketing",
    points: 3,
    prompt: "Nennen Sie drei Merkmale, an denen man einen zufriedenen Kunden erkennt.",
    keywords: [
      { phrase: "treu", weight: 1 },
      { phrase: "bevorzugt", weight: 1 },
      { phrase: "spricht gut", weight: 1 },
      { phrase: "neue ideen", weight: 1 },
    ],
    solution:
      "Ein zufriedener Kunde kauft mehr und bleibt länger „treu“, kauft bevorzugt vom gleichen Unternehmen, wenn dieses neue oder verbesserte Produkte bringt, denkt und spricht gut über das Unternehmen und seine Produkte, beachtet Marken-, Werbe- und Preisangebote der Mitbewerber weniger stark und bietet dem Unternehmen gern neue Ideen zu Produkt und Service an.",
  },
  {
    id: "q12",
    type: "mc",
    topic: "Marketingziele",
    points: 1,
    prompt: "Was formulieren Marketingziele?",
    options: [
      { text: "Eine angestrebte künftige Marktposition, vor allem durch absatzpolitische Instrumente erreicht", correct: true },
      { text: "Die aktuellen Produktionskosten eines Unternehmens", correct: false },
      { text: "Die Rechtsform, die ein Unternehmen wählen sollte", correct: false },
      { text: "Den Standort der Unternehmenszentrale", correct: false },
    ],
    solution:
      "Marketingziele formulieren eine angestrebte künftige Marktposition, die vor allem durch den Einsatz der absatzpolitischen Instrumente erreicht werden soll.",
  },
  {
    id: "q13",
    type: "mc",
    topic: "Marketingziele",
    points: 1,
    prompt: "Woraus leiten sich Marketingziele ab?",
    options: [
      { text: "Aus den Unternehmenszielen", correct: true },
      { text: "Aus den Wünschen der Konkurrenz", correct: false },
      { text: "Aus staatlichen Vorgaben zur Preisbildung", correct: false },
      { text: "Ausschließlich aus der Fertigungskapazität", correct: false },
    ],
    solution:
      "Marketingziele leiten sich aus den Unternehmenszielen ab, sind möglichst operationalisiert zu formulieren und müssen stets das Zielsystem als Ganzes berücksichtigen.",
  },
  {
    id: "q14",
    type: "mc",
    topic: "Marketingziele",
    points: 1,
    prompt: "Wie nennt man es, wenn die Umsetzung von Ziel 1 zugleich die Verwirklichung von Ziel 2 fördert?",
    options: [
      { text: "Zielharmonie", correct: true },
      { text: "Zielkonflikt", correct: false },
      { text: "Zielneutralität", correct: false },
      { text: "Zielverzicht", correct: false },
    ],
    solution:
      "Zielharmonie liegt vor, wenn die Umsetzung eines Ziels zugleich die Verwirklichung eines anderen Ziels fördert – z. B. steigert ein positives Firmenimage zugleich Umsatz und Gewinnmaximierung.",
  },
  {
    id: "q15",
    type: "mc",
    topic: "Marketingziele",
    points: 1,
    prompt: "Wie nennt man es, wenn die Erreichung von Ziel 1 zulasten von Ziel 2 geht?",
    options: [
      { text: "Zielkonflikt", correct: true },
      { text: "Zielharmonie", correct: false },
      { text: "Zielidentität", correct: false },
      { text: "Keine Zielbeziehung", correct: false },
    ],
    solution:
      "Ein Zielkonflikt liegt vor, wenn in dem Maß, in dem Ziel 1 erreicht wird, dies zulasten von Ziel 2 geht – z. B. kann das Streben nach technischer Perfektion die Rentabilität zulasten der Werbekosten schmälern.",
  },
  {
    id: "q16",
    type: "mc",
    topic: "Marketingziele",
    points: 1,
    prompt: "Welche Art von Marketingzielen ist rechnerisch bestimmbar?",
    options: [
      { text: "Ökonomische (quantitative) Marketingziele", correct: true },
      { text: "Psychografische (qualitative) Marketingziele", correct: false },
      { text: "Soziale Unternehmensziele", correct: false },
      { text: "Ökologische Unternehmensziele", correct: false },
    ],
    solution:
      "Ökonomische (quantitative) Marketingziele zielen darauf ab, die wirtschaftliche Situation eines Unternehmens zu verbessern, und sind rechnerisch bestimmbar, z. B. Umsatz-, Gewinn-, Wachstums-, Marktanteils- und Kostenziele.",
  },
  {
    id: "q17",
    type: "freitext",
    topic: "Marketingziele",
    points: 4,
    prompt: "Nennen Sie je ein Beispiel für ein ökonomisches und ein psychografisches Marketingziel.",
    keywords: [
      { phrase: "umsatz", weight: 1 },
      { phrase: "marktanteil", weight: 1 },
      { phrase: "bekanntheitsgrad", weight: 1 },
      { phrase: "image", weight: 1 },
      { phrase: "vertrauen", weight: 1 },
    ],
    solution:
      "Ökonomisches (quantitatives) Marketingziel, z. B.: Steigerung des Marktanteils um 2 % pro Jahr oder Umsatzsteigerung um 4 % ohne Erhöhung der Mitarbeiterzahl. Psychografisches (qualitatives) Marketingziel, z. B.: Verbesserung des Bekanntheitsgrads, Stärkung des Vertrauens der Kunden oder Verbesserung des Firmenimages – solche Ziele zielen auf eine Präferenz beim Nachfrager ab und sind rechnerisch nicht bestimmbar.",
  },
  {
    id: "q18",
    type: "freitext",
    topic: "Marketingziele",
    points: 4,
    prompt: "Was bedeutet es, ein Marketingziel zu operationalisieren, und warum ist das wichtig?",
    keywords: [
      { phrase: "inhaltsteil", weight: 1 },
      { phrase: "verhaltensteil", weight: 1 },
      { phrase: "genau", weight: 1 },
      { phrase: "wirksamkeit", weight: 1 },
    ],
    solution:
      "Operationalisiert bedeutet, dass die Zielbeschreibung aus einem Inhalts- und einem Verhaltensteil besteht: Inhalt, Ausmaß und zeitlicher Bezug eines Ziels werden möglichst genau bestimmt (Grundsatz der Operationalisierung). Beispiel: Die Umsatzsteigerung um 10 % (Inhaltsteil) soll durch die Einstellung von zwei neuen Mitarbeitern im Außendienst (Verhaltensteil) erreicht werden. Das ist wichtig, damit die Wirksamkeit der in Betracht gezogenen Maßnahmen später überhaupt beurteilt werden kann.",
  },
  {
    id: "q19",
    type: "mc",
    topic: "Marktpositionierung",
    points: 1,
    prompt: "Was versteht man unter dem relevanten Markt (Zielmarkt)?",
    options: [
      { text: "Die Gesamtheit der möglichen Käufer für ein Produkt", correct: true },
      { text: "Nur die aktuellen Stammkunden eines Unternehmens", correct: false },
      { text: "Den Standort der Produktionsstätte", correct: false },
      { text: "Die gesetzlichen Vorschriften eines Landes", correct: false },
    ],
    solution:
      "Der relevante Markt (Zielmarkt) ist die Gesamtheit der möglichen Käufer für ein Produkt. Ist der Zielmarkt definiert, gilt es, ihn u. a. hinsichtlich Markteintritts- und Marktaustrittsbarrieren zu analysieren.",
  },
  {
    id: "q20",
    type: "mc",
    topic: "Marktpositionierung",
    points: 1,
    prompt: "Was bewirken hohe Markteintrittsschranken für einen Interessenten?",
    options: [
      { text: "Sie erschweren ihm den Markteintritt", correct: true },
      { text: "Sie erleichtern ihm automatisch den Markteintritt", correct: false },
      { text: "Sie senken seine Produktionskosten", correct: false },
      { text: "Sie erhöhen automatisch seine Nachfrage", correct: false },
    ],
    solution:
      "Hohe Markteintrittsbarrieren – z. B. spezifisches Know-how, Patente, hoher Kapitalbedarf für Produktion und/oder Vermarktung, hohe Kundenloyalität, Kontrolle über Beschaffungsmärkte oder Absatzkanäle sowie ein niedriges Preisniveau – erschweren einem Interessenten den Markteintritt.",
  },
  {
    id: "q21",
    type: "mc",
    topic: "Marktpositionierung",
    points: 1,
    prompt:
      "Welche Marktposition hält in der Regel den größten Marktanteil (ca. 40 %) und ist führend bei Preisänderungen und innovativen Produkten?",
    options: [
      { text: "Der Marktführer", correct: true },
      { text: "Der Herausforderer", correct: false },
      { text: "Der Mitläufer", correct: false },
      { text: "Der Nischenbesetzer", correct: false },
    ],
    solution:
      "Der Marktführer hält in der Regel den größten Marktanteil am Zielmarkt (ca. 40 %), ist führend bei Preisänderungen, innovativen Produkten, im Vertriebsnetz und bei der Absatzförderung. Die Konkurrenz orientiert sich an ihm, fordert ihn heraus, kopiert ihn oder meidet ihn.",
  },
  {
    id: "q22",
    type: "mc",
    topic: "Marktpositionierung",
    points: 1,
    prompt: "Wie verhält sich ein Herausforderer typischerweise im Zielmarkt?",
    options: [
      { text: "Er bekämpft den Marktführer oder begnügt sich als Mitläufer mit seiner Stellung", correct: true },
      { text: "Er zieht sich grundsätzlich vollständig vom Markt zurück", correct: false },
      { text: "Er übernimmt automatisch die Marktführerschaft", correct: false },
      { text: "Er verzichtet vollständig auf jede Wachstumsstrategie", correct: false },
    ],
    solution:
      "Der Herausforderer hält den zweitgrößten Marktanteil (ca. 30 %). Er kann entweder den Marktführer bekämpfen – z. B. durch aggressives Streben nach Marktanteilsgewinnen – oder sich als Mitläufer mit seiner Stellung begnügen und gewagte Marketingstrategien vermeiden.",
  },
  {
    id: "q23",
    type: "mc",
    topic: "Marktpositionierung",
    points: 1,
    prompt: "Worauf spezialisiert sich ein Nischenbesetzer?",
    options: [
      { text: "Auf bestimmte Teilmärkte (Nischen), die größere Unternehmen übersehen oder vernachlässigen", correct: true },
      { text: "Auf die direkte Bekämpfung des Marktführers", correct: false },
      { text: "Auf möglichst viele unterschiedliche Zielmärkte gleichzeitig", correct: false },
      { text: "Auf reine Kostenführerschaft im Gesamtmarkt", correct: false },
    ],
    solution:
      "Nischenbesetzer sind kleinere Unternehmen mit einem Marktanteil von ca. 10 %, die sich durch Spezialisierung auf bestimmte Teilmärkte beschränken und dadurch Marktnischen besetzen, die von größeren Unternehmen übersehen oder vernachlässigt werden.",
  },
  {
    id: "q24",
    type: "freitext",
    topic: "Marktpositionierung",
    points: 3,
    prompt: "Nennen Sie zwei Beispiele für hohe Markteintrittsbarrieren.",
    keywords: [
      { phrase: "know-how", weight: 1 },
      { phrase: "patente", weight: 1 },
      { phrase: "kapitalbedarf", weight: 1 },
      { phrase: "kundenloyalität", weight: 1 },
    ],
    solution:
      "Hohe Markteintrittsbarrieren sind z. B. spezifisches Know-how, Patente, ein hoher Kapitalbedarf für die Produktion und/oder Vermarktung, hohe Kundenloyalität, Kontrolle über Beschaffungsmärkte oder Absatzkanäle (spezielles Vertriebssystem) sowie ein niedriges Preisniveau der bereits etablierten Anbieter.",
  },
  {
    id: "q25",
    type: "freitext",
    topic: "Marktpositionierung",
    points: 4,
    prompt: "Welche vier Marktpositionen kann ein Unternehmen im Zielmarkt einnehmen? Nennen Sie die ungefähren Marktanteile.",
    keywords: [
      { phrase: "marktführer", weight: 1 },
      { phrase: "herausforderer", weight: 1 },
      { phrase: "mitläufer", weight: 1 },
      { phrase: "nischenbesetzer", weight: 1 },
    ],
    solution:
      "Ein Unternehmen, das in einen Markt eindringt, kann folgende Marktpositionen anstreben: Marktführer (ca. 40 % Marktanteil), Herausforderer (ca. 30 %), Mitläufer (ca. 20 %) und Nischenbesetzer (ca. 10 %).",
  },
  {
    id: "q26",
    type: "mc",
    topic: "Aufgaben des Marketings",
    points: 1,
    prompt:
      "In welcher Phase des Marketingprozesses wird die gegenwärtige und zukünftige Situation von Unternehmen, Markt und Umfeld systematisch erforscht?",
    options: [
      { text: "Marktforschung", correct: true },
      { text: "Marketing-Controlling", correct: false },
      { text: "Entwicklung einer Marketingkonzeption", correct: false },
      { text: "Planung der Marketingstrategie", correct: false },
    ],
    solution:
      "In der Phase der Marktforschung gilt es, die gegenwärtige und zukünftige Situation des Unternehmens, des Marktes und des Umfelds planmäßig und systematisch zu erforschen.",
  },
  {
    id: "q27",
    type: "mc",
    topic: "Aufgaben des Marketings",
    points: 1,
    prompt:
      "Wie nennt man die konkrete Kombination der vier Marketinginstrumente, die im Rahmen der Marketingkonzeption festgelegt wird?",
    options: [
      { text: "Marketing-Mix", correct: true },
      { text: "Marktsegmentierung", correct: false },
      { text: "Zielgruppenanalyse", correct: false },
      { text: "Produktlebenszyklus", correct: false },
    ],
    solution:
      "Im Rahmen der Entwicklung einer Marketingkonzeption wird festgelegt, wie das absatzpolitische Instrumentarium eingesetzt wird; die jeweilige Kombination der Marketinginstrumente (Produkt-, Kontrahierungs-, Kommunikations- und Distributionspolitik) bezeichnet man als Marketing-Mix.",
  },
  {
    id: "q28",
    type: "mc",
    topic: "Aufgaben des Marketings",
    points: 1,
    prompt: "Welche Aufgabe hat das Marketing-Controlling?",
    options: [
      { text: "Den Grad der Zielerreichung anhand von Kennziffern zu prüfen und weiteren Handlungsbedarf aufzuzeigen", correct: true },
      { text: "Ausschließlich neue Produkte zu entwickeln", correct: false },
      { text: "Die Preise der Konkurrenz verbindlich festzulegen", correct: false },
      { text: "Neues Personal für die Fertigung einzustellen", correct: false },
    ],
    solution:
      "Das Marketing-Controlling liefert der Unternehmensleitung zum einen Informationen über den Grad der Zielverwirklichung anhand von Kennziffern und gibt zum anderen Auskunft über weiteren Planungs- und Handlungsbedarf.",
  },
  {
    id: "q29",
    type: "freitext",
    topic: "Aufgaben des Marketings",
    points: 4,
    prompt: "Nennen Sie die vier Phasen des Marketingprozesses in der richtigen Reihenfolge.",
    keywords: [
      { phrase: "marktforschung", weight: 1 },
      { phrase: "planung", weight: 1 },
      { phrase: "entwicklung", weight: 1 },
      { phrase: "controlling", weight: 1 },
    ],
    solution:
      "Die Bewältigung der Marketingaufgaben ist als Prozess zu verstehen, der sich in folgende Phasen gliedert: (1) Marktforschung, (2) Planung der Marketingstrategie (Kombination der vier Marketing-Instrumentenbündel: Produkt-, Kontrahierungs-, Kommunikations- und Distributionspolitik, abhängig von Produktlebenszyklus und Marktanteil), (3) Entwicklung einer Marketingkonzeption (Marketing-Mix) und (4) Marketing-Controlling.",
  },
  {
    id: "q30",
    type: "freitext",
    topic: "Aufgaben des Marketings & Lernsituation",
    points: 6,
    prompt:
      "Erläutern Sie am Beispiel der Goslarer Büromöbel AG, warum der Wandel vom Verkäufer- zum Käufermarkt eine konsequente Marketingkonzeption notwendig macht.",
    keywords: [
      { phrase: "käufermarkt", weight: 1 },
      { phrase: "konkurrenz", weight: 1 },
      { phrase: "kundenbedürfnisse", weight: 1 },
      { phrase: "wettbewerb", weight: 1 },
      { phrase: "goslarer", weight: 1 },
    ],
    solution:
      "Die Goslarer Büromöbel AG stellte in der Nachkriegszeit auf einem Verkäufermarkt (Nachfrageüberhang, kaum Konkurrenz) nahezu problemlos Schreibtische her und wuchs mit dem einsetzenden Wohlstand der Nachfrage stetig mit. Ende der 1980er-Jahre öffneten sich jedoch die Grenzen nach Osteuropa und Asien, die Transportkosten sanken, und zahlreiche neue, günstigere ausländische Produzenten drängten auf die deutschen Märkte. Dadurch entwickelte sich der Markt zu einem Käufermarkt mit Angebotsüberhang: Die Marktmacht liegt nun beim Käufer, die Goslarer Büromöbel AG konnte ihre Produkte nicht mehr wie gewohnt an vielen Märkten absetzen. Nur wenn sich das Unternehmen konsequent an den individuellen Bedürfnissen und Wünschen der Kunden ausrichtet – statt weiterhin von innen nach außen zu denken (reine Produktionskonzeption) –, kann es sich im verschärften internationalen Wettbewerb behaupten und verlorene Marktanteile zurückerobern bzw. seine Marktposition dauerhaft sichern.",
  },
];
