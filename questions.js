// Fragenkatalog FOW25 – Kapitel 1: Marktorientierte Unternehmenssteuerung (LG 12.2)
// type: "mc" (kurz, Multiple Choice) oder "freitext" (lang, Freitextantwort)
// Bei "mc" ist genau eine Option isCorrect: true.
// Bei "freitext" dienen "keywords" nur einer groben Selbsteinschätzung der Punktzahl;
// maßgeblich ist die ausführliche Musterlösung ("solution"), die am Ende angezeigt wird.

const QUESTIONS = [
  {
    id: "q1",
    type: "mc",
    topic: "Begriff Markt",
    points: 1,
    prompt: "Was versteht man ökonomisch unter dem Begriff „Markt“?",
    options: [
      { text: "Den Ort, an dem Angebot und Nachfrage aufeinandertreffen.", correct: true },
      { text: "Eine staatliche Behörde zur Preisfestlegung.", correct: false },
      { text: "Die Gesamtheit aller Produktionsstätten eines Unternehmens.", correct: false },
      { text: "Ein Vertrag zwischen zwei Unternehmen.", correct: false },
    ],
    solution:
      "Ökonomisch betrachtet versteht man unter Markt den Ort, an dem Angebot und Nachfrage aufeinandertreffen. Der Markt ermöglicht den Anbietern, ihre Güter entsprechend ihrer Zielvorstellungen anzubieten, und den Nachfragern, sich über das Angebot zu informieren und ihre Kaufentscheidung unter Berücksichtigung der Nutzenmaximierung zu treffen.",
  },
  {
    id: "q2",
    type: "mc",
    topic: "Begriff Markt",
    points: 1,
    prompt: "Wonach streben Anbieter auf dem Markt in erster Linie?",
    options: [
      { text: "Nutzenmaximierung", correct: false },
      { text: "Gewinnmaximierung", correct: true },
      { text: "Kostenminimierung ohne Absatzziel", correct: false },
      { text: "Marktaustritt", correct: false },
    ],
    solution:
      "Anbieter versuchen auf dem Markt, ihre Absatzpläne zu verwirklichen. Dabei streben sie nach Gewinnmaximierung – sie wollen ihre Güter möglichst vorteilhaft absetzen.",
  },
  {
    id: "q3",
    type: "mc",
    topic: "Begriff Markt",
    points: 1,
    prompt: "Wonach streben Nachfrager auf dem Markt in erster Linie?",
    options: [
      { text: "Gewinnmaximierung", correct: false },
      { text: "Marktanteilsvergrößerung", correct: false },
      { text: "Nutzenmaximierung", correct: true },
      { text: "Prestige und Macht", correct: false },
    ],
    solution:
      "Nachfrager versuchen auf dem Markt, ihre Nachfragepläne zu verwirklichen. Sie informieren sich über das Angebot und treffen ihre Kaufentscheidung unter Berücksichtigung der Nutzenmaximierung – sie wollen also mit ihrem Geld den größtmöglichen persönlichen Nutzen erzielen.",
  },
  {
    id: "q4",
    type: "mc",
    topic: "Begriff Markt",
    points: 1,
    prompt:
      "Wie nennt man den Preis, der sich als Ergebnis des Ausgleichs zwischen Angebot und Nachfrage bildet?",
    options: [
      { text: "Festpreis", correct: false },
      { text: "Gleichgewichtspreis", correct: true },
      { text: "Mindestpreis", correct: false },
      { text: "Kalkulationspreis", correct: false },
    ],
    solution:
      "Über den Markt erfolgt ein Ausgleich zwischen den entgegengesetzten Interessen von Anbietern und Nachfragern. Als Ergebnis des Marktgeschehens bildet sich ein Preis – der sogenannte Gleichgewichtspreis –, über den die unterschiedlichen Zielsetzungen der Marktteilnehmer „ausbalanciert“ werden. Man spricht deshalb auch vom Selbststeuerungsmechanismus des Marktes.",
  },
  {
    id: "q5",
    type: "freitext",
    topic: "Begriff Markt",
    points: 3,
    prompt:
      "Erklären Sie in eigenen Worten, was mit dem „Selbststeuerungsmechanismus des Marktes“ gemeint ist.",
    keywords: [
      { phrase: "gleichgewichtspreis", weight: 1 },
      { phrase: "ausgleich", weight: 1 },
      { phrase: "anbieter", weight: 1 },
      { phrase: "nachfrager", weight: 1 },
    ],
    solution:
      "Anbieter verfolgen mit ihrem Angebot das Ziel der Gewinnmaximierung, Nachfrager mit ihrer Nachfrage das Ziel der Nutzenmaximierung. Diese beiden Zielsetzungen stehen sich zunächst entgegengesetzt gegenüber. Der Markt gleicht diesen Interessengegensatz jedoch ganz ohne eine zentrale, steuernde Instanz aus: Über das Zusammenspiel von Angebot und Nachfrage bildet sich ein Preis – der Gleichgewichtspreis –, zu dem beide Seiten bereit sind, Geschäfte abzuschließen. Steigt z. B. die Nachfrage bei gleichbleibendem Angebot, steigt der Preis, was wiederum mehr Anbieter anlockt bzw. die Nachfrage dämpft, bis sich ein neues Gleichgewicht einstellt. Diese automatische, sich selbst regulierende Anpassung von Angebot, Nachfrage und Preis wird als Selbststeuerungsmechanismus des Marktes bezeichnet.",
  },
  {
    id: "q6",
    type: "mc",
    topic: "Liberalisierung & Globalisierung",
    points: 1,
    prompt: "Welche Folge hat die zunehmende Liberalisierung der Märkte laut Kapitel 1?",
    options: [
      {
        text: "Weniger Wettbewerb und einheitlichere Produkte",
        correct: false,
      },
      {
        text: "Erhebliche Intensivierung des Wettbewerbs, differenziertere Produkte, niedrigere Preise und höhere Innovationsdynamik",
        correct: true,
      },
      { text: "Rückkehr zu regional geschützten Monopolen", correct: false },
      { text: "Sinkende Innovationsgeschwindigkeit", correct: false },
    ],
    solution:
      "Die zunehmende Liberalisierung der Märkte führt zu einer erheblichen Intensivierung des Wettbewerbs, zu einem Markt mit differenzierten Produkten, niedrigeren Preisen und – als Folge hiervon – zu einer hohen Innovationsdynamik bei Produkten und Dienstleistungen, die auf Kundenforderungen ausgerichtet ist. Liberalisierung meint dabei die Festsetzung von Preisen, Beschränkung regionaler Angebote und Ausschluss oder Beschränkung von Wettbewerb durch staatlich geschützte Monopole – deren Aufhebung reglementierender Marktstrukturen.",
  },
  {
    id: "q7",
    type: "mc",
    topic: "Liberalisierung & Globalisierung",
    points: 1,
    prompt: "Was kennzeichnet die Globalisierungstendenz der Märkte?",
    options: [
      {
        text: "Die erdweite Ausdehnung durchbricht nationale und regionale Grenzen; nationale/regionale Marktanteile sinken zusehends an Bedeutung.",
        correct: true,
      },
      { text: "Unternehmen konzentrieren sich ausschließlich auf regionale Märkte.", correct: false },
      { text: "Zölle und Handelsschranken werden systematisch erhöht.", correct: false },
      { text: "Der Wettbewerb bleibt auf einzelne Länder begrenzt.", correct: false },
    ],
    solution:
      "Die Globalisierungstendenz der Märkte durchbricht in vielen Branchen alle bisher bestehenden nationalen und regionalen Grenzen. Der Wert von nationalen und regionalen Marktanteilen sinkt deswegen zusehends – Wettbewerb findet zunehmend weltweit statt (Globus = erdweite Ausdehnung).",
  },
  {
    id: "q8",
    type: "mc",
    topic: "Liberalisierung & Globalisierung",
    points: 1,
    prompt:
      "Welche Auswirkung hat die steigende Innovationsgeschwindigkeit auf die Produktlebenszyklen?",
    options: [
      { text: "Produktlebenszyklen verlängern sich deutlich.", correct: false },
      { text: "Produktlebenszyklen verkürzen sich dramatisch.", correct: true },
      { text: "Produktlebenszyklen bleiben unverändert.", correct: false },
      { text: "Produktlebenszyklen verschwinden vollständig.", correct: false },
    ],
    solution:
      "Aufgrund der Innovationsgeschwindigkeit in vielen Technologien verkürzen sich die Produktlebenszyklen dramatisch. Es wird deshalb mehr denn je erforderlich, sich mit einer innovativen Produktentwicklung diesem Trend anzupassen und die Zeitspanne zwischen Entdeckung/Erfindung und marktfähiger Anwendung (time-to-market) zu verkürzen.",
  },
  {
    id: "q9",
    type: "mc",
    topic: "Liberalisierung & Globalisierung",
    points: 1,
    prompt: "Was ist mit „Marktveränderungen“ im Sinne des auseinanderbrechenden Marktes gemeint?",
    options: [
      {
        text: "Konsumentenwünsche lassen sich nicht mehr eindeutig abgrenzen; der Wert einer führenden Marktposition sinkt.",
        correct: true,
      },
      { text: "Alle Kunden verfolgen zunehmend identische Bedürfnisse.", correct: false },
      { text: "Marktführer sichern sich dauerhaft ihre Position.", correct: false },
      { text: "Grundfaktoren der Märkte werden eindeutiger zurechenbar.", correct: false },
    ],
    solution:
      "Die Märkte brechen zusehends auseinander, da sich auch Konsumentenwünsche nicht mehr eindeutig abgrenzen und einigen Grundfaktoren zurechnen lassen. Der Wert, eine führende Position in einem Markt zu besitzen, sinkt deswegen ebenso.",
  },
  {
    id: "q10",
    type: "mc",
    topic: "Liberalisierung & Globalisierung",
    points: 1,
    prompt:
      "Was versteht man unter der „Unternehmenskonzentration“ als Gegenpol zum Auseinanderbrechen der Märkte?",
    options: [
      {
        text: "Die weltweite Konzentrationstendenz nimmt zu – große Forschungs- und Entwicklungsvorhaben können oft nur noch von großen Konzernen oder Konsortien bewältigt werden.",
        correct: true,
      },
      { text: "Unternehmen ziehen sich vollständig aus dem internationalen Wettbewerb zurück.", correct: false },
      { text: "Kleine Betriebe übernehmen zunehmend die Marktführerschaft.", correct: false },
      { text: "Die Wettbewerbsintensität sinkt dadurch dauerhaft.", correct: false },
    ],
    solution:
      "Als Gegenpol zum Auseinanderbrechen der Märkte nimmt die weltweite Konzentrationstendenz immer noch zu. Große Forschungs- und Entwicklungsvorhaben in Technologiebranchen können nur noch von großen Konzernen oder Konsortien (Zusammenschlüssen von Personen oder Unternehmen zur Durchführung eines Sondergeschäfts) bewältigt werden. Die Wettbewerbsintensität steigt damit weiter.",
  },
  {
    id: "q11",
    type: "freitext",
    topic: "Liberalisierung & Globalisierung",
    points: 4,
    prompt:
      "Nennen Sie zwei Konsequenzen, die Liberalisierung und Globalisierung für betroffene Unternehmen haben, und machen Sie jeweils einen Lösungsvorschlag.",
    keywords: [
      { phrase: "wettbewerb", weight: 1 },
      { phrase: "innovat", weight: 1 },
      { phrase: "kundenorient", weight: 1 },
      { phrase: "kosten", weight: 1 },
    ],
    solution:
      "Mögliche Konsequenzen und Lösungsansätze (zwei genügen, Beispiele):\n" +
      "1) Steigender Wettbewerbsdruck durch mehr und differenziertere Anbieter → Lösung: klare strategische Ausrichtung auf ein Kerngeschäft mit ressourcen- und kompetenzbasiertem Geschäftsfokus, um sich als kompetenter Problemlöser zu profilieren statt breit zu diversifizieren.\n" +
      "2) Sinkende Preise und höherer Kostendruck → Lösung: markt- und kostenorientierter Leistungserstellungsprozess, z. B. Prüfung der Fertigungstiefe (Make-or-Buy-Analyse) und Kostenmanagement.\n" +
      "3) Höhere Innovationsgeschwindigkeit/kürzere Produktlebenszyklen → Lösung: konsequentes Innovationsmanagement, das den ständigen Strom kleiner und großer Innovationen fördert und die time-to-market verkürzt.\n" +
      "4) Uneinheitlichere, weniger abgrenzbare Kundenwünsche → Lösung: Marketing und Kundenbetreuung konsequent auf die tatsächlichen und zukünftigen Bedürfnisse der Abnehmer ausrichten (Marktorientierung statt Technikorientierung).",
  },
  {
    id: "q12",
    type: "freitext",
    topic: "Liberalisierung & Globalisierung",
    points: 3,
    prompt:
      "Erläutern Sie, warum Konsortien und große Konzerne in Technologiebranchen an Bedeutung gewinnen.",
    keywords: [
      { phrase: "forschung", weight: 1 },
      { phrase: "entwicklung", weight: 1 },
      { phrase: "konsortium", weight: 1 },
      { phrase: "kapital", weight: 1 },
    ],
    solution:
      "In vielen Technologiebranchen sind Forschungs- und Entwicklungsvorhaben so aufwendig, kapitalintensiv und risikoreich geworden, dass einzelne kleinere Unternehmen sie allein nicht mehr stemmen können. Große Konzerne verfügen über die notwendigen finanziellen und personellen Ressourcen, um solche Vorhaben zu bewältigen. Wo selbst das nicht ausreicht, schließen sich mehrere Unternehmen zu einem Konsortium zusammen, um ein gemeinsames (Forschungs-)Vorhaben durchzuführen und Kosten sowie Risiko zu teilen. Als Folge steigt die Wettbewerbsintensität in diesen Branchen weiter, da die verbleibenden großen Akteure ihre Marktmacht ausbauen können.",
  },
  {
    id: "q13",
    type: "mc",
    topic: "Strategische Ausrichtung",
    points: 1,
    prompt:
      "Was ist mit einem „ressourcen- und kompetenzbasierten Geschäftsfokus“ gemeint?",
    options: [
      {
        text: "Ein Geschäftsfeld, das mit dem Fähigkeitsprofil des Unternehmens (Kerngeschäft, Produktionsmittel, Fähigkeiten der Belegschaft) übereinstimmt.",
        correct: true,
      },
      { text: "Eine wahllose Ausweitung des Produktprogramms auf möglichst viele Branchen.", correct: false },
      { text: "Der vollständige Verzicht auf eigene Produktionsmittel.", correct: false },
      { text: "Die Konzentration auf den jeweils billigsten Zulieferer.", correct: false },
    ],
    solution:
      "Im Zuge der vielfältigen Strömungen von technologischen Entwicklungen und sich verändernden Marktverhältnissen muss die Unternehmensleitung ein aussichtsreiches Geschäftsfeld besetzen, das mit dem Fähigkeitsprofil des Unternehmens übereinstimmt. Man spricht hier von einem ressourcen- und kompetenzbasierten Geschäftsfokus, d. h. einem Kerngeschäft, das mit geeigneten Produktionsmitteln und besonderen Fähigkeiten der Belegschaft ausgestattet ist.",
  },
  {
    id: "q14",
    type: "mc",
    topic: "Strategische Ausrichtung",
    points: 1,
    prompt: "Was zeigt das Beispiel Daimler-Benz (Edzard Reuter) im Lehrbuch?",
    options: [
      {
        text: "Der Versuch, aus einem Automobilbauer einen integrierten Technologiekonzern mit mehreren Sparten zu schaffen, scheiterte – die Rückkehr zum Kerngeschäft Auto war erfolgreich.",
        correct: true,
      },
      { text: "Die Diversifikation in Luftfahrt, Haushaltsgeräte und Telekommunikation war dauerhaft erfolgreich.", correct: false },
      { text: "Daimler-Benz hat nie in andere Branchen investiert.", correct: false },
      { text: "Die technologische Führerschaft wurde auf allen neuen Geschäftsfeldern erreicht.", correct: false },
    ],
    solution:
      "Der ehemalige Vorstandschef der Daimler-Benz AG, Edzard Reuter, versuchte in den 1990er-Jahren, aus dem Automobilbauer einen integrierten Technologiekonzern mit mehreren Sparten zu schaffen (u. a. Dornier, AEG, debitel). Die Vision der Integration misslang jedoch und führte zur Verzettelung mit einem unklaren Unternehmensbild – auf keinem der neuen Gebiete gelang die technologische Führerschaft. Inzwischen ist die Rückkehr auf das ursprüngliche Kerngeschäft mit Autos längst vollzogen, und der Mercedes-Stern erstrahlt wieder in neuem Glanz.",
  },
  {
    id: "q15",
    type: "freitext",
    topic: "Strategische Ausrichtung",
    points: 3,
    prompt:
      "Erläutern Sie anhand des Daimler-Benz-Beispiels, warum sich Unternehmen eher auf ein klar profiliertes Kerngeschäft konzentrieren sollten, statt breit zu diversifizieren.",
    keywords: [
      { phrase: "kerngeschäft", weight: 1 },
      { phrase: "diversifi", weight: 1 },
      { phrase: "wettbewerbsvorteil", weight: 1 },
      { phrase: "profil", weight: 1 },
    ],
    solution:
      "Mit einem spezialisierten Produktprogramm etabliert sich ein Unternehmen als klar profilierter, kompetenter Problemlöser auf seinem Markt und erlangt dadurch eine strategische Überlegenheit im Wettbewerb, die den langfristigen Unternehmenserfolg sichert. Strategien mit breit diversifizierten Produktsparten haben sich dagegen im Allgemeinen nicht behaupten können: Beim Beispiel Daimler-Benz führte der Versuch, aus einem Automobilbauer einen integrierten Technologiekonzern mit den Sparten Luft-/Raumfahrt (Dornier), Haushaltsgeräte (AEG) und Telekommunikation (debitel) zu schaffen, zu einer Verzettelung. Das Unternehmensbild wurde unklar, und auf keinem der neuen Gebiete gelang die technologische Führerschaft – Ressourcen und Managementaufmerksamkeit wurden über zu viele, fachfremde Bereiche verteilt. Erst die Rückkehr auf das ursprüngliche Kerngeschäft Auto führte wieder zu einem klaren, erfolgreichen Unternehmensbild (Mercedes-Stern).",
  },
  {
    id: "q16",
    type: "mc",
    topic: "Strategische Ausrichtung",
    points: 1,
    prompt: "Was bezeichnet man als Outsourcing?",
    options: [
      {
        text: "Die Ausgliederung von Geschäftsbereichen, die nicht zum Kerngeschäft gehören, und deren Fremdvergabe an andere Betriebe.",
        correct: true,
      },
      { text: "Die Erweiterung des Kerngeschäfts um völlig neue Branchen.", correct: false },
      { text: "Den Einkauf von Rohstoffen im Ausland.", correct: false },
      { text: "Die Automatisierung sämtlicher Fertigungsschritte.", correct: false },
    ],
    solution:
      "Wenn sich ein Unternehmen auf sein Kerngeschäft konzentriert und übrige Geschäfte ausgliedert und von anderen Betrieben ausführen lässt, spricht man von Outsourcing. Dies hängt eng mit der Frage der Fertigungstiefe (Wertschöpfung) und der Make-or-Buy-Analyse zusammen: Soll eine Leistung selbst erstellt oder fremdbezogen werden?",
  },
  {
    id: "q17",
    type: "mc",
    topic: "Organisation & Geschäftsprozesse",
    points: 1,
    prompt: "Woran muss sich der Organisationsaufbau eines Unternehmens laut Kapitel 1 ausrichten?",
    options: [
      {
        text: "Auftrags- und kundenorientiert statt vorrangig an unternehmensinternen Aufgaben.",
        correct: true,
      },
      { text: "Ausschließlich an den internen Abteilungsgrenzen.", correct: false },
      { text: "An der Anzahl der Führungsebenen.", correct: false },
      { text: "An den Interessen der Anteilseigner allein.", correct: false },
    ],
    solution:
      "Der organisatorische Aufbau eines Unternehmens muss auf die strategischen Ziele ausgerichtet und mit den angetroffenen Marktprozessen abgestimmt sein, d. h. der Organisationsaufbau eines Unternehmens muss auftrags- und kundenorientiert sein und sich weniger stark an den unternehmensinternen Aufgaben orientieren.",
  },
  {
    id: "q18",
    type: "mc",
    topic: "Organisation & Geschäftsprozesse",
    points: 1,
    prompt: "Wofür stehen ERP-gestützte Informationssysteme im Kontext der Geschäftsprozesse?",
    options: [
      {
        text: "Informationstechnisch vernetzte Systeme, die betriebliche Abläufe vom Vorlieferanten bis zum Endkunden gliedern und steuern.",
        correct: true,
      },
      { text: "Systeme ausschließlich für die Finanzbuchhaltung ohne Verbindung zu anderen Bereichen.", correct: false },
      { text: "Papierbasierte Karteikartensysteme.", correct: false },
      { text: "Systeme, die nur der externen Kommunikation mit Kunden dienen.", correct: false },
    ],
    solution:
      "Es gilt, die vom Markt ausgelösten Unternehmensaufgaben (z. B. Auftragserteilung eines Kunden, Angebotsabgabe durch den Verkäufer) in zusammenhängende Folgen von Tätigkeiten (Geschäftsprozesse) zu gliedern. Damit soll eine marktorientierte Unternehmensorganisation geschaffen werden, die die Funktionsabläufe vom Vorlieferanten bis zum Endkunden in sinnvolle, sich wiederholende betriebliche Abläufe gliedert (Konzept der Geschäftsprozesse) und informationstechnisch vernetzt, z. B. durch ERP-gestützte Informationssysteme.",
  },
  {
    id: "q19",
    type: "freitext",
    topic: "Organisation & Geschäftsprozesse",
    points: 3,
    prompt: "Was versteht man unter dem „Konzept der Geschäftsprozesse“, und welches Ziel verfolgt es?",
    keywords: [
      { phrase: "auftrag", weight: 1 },
      { phrase: "kunde", weight: 1 },
      { phrase: "gliedern", weight: 1 },
      { phrase: "vernetz", weight: 1 },
    ],
    solution:
      "Das Konzept der Geschäftsprozesse gliedert die vom Markt ausgelösten Unternehmensaufgaben – z. B. die Auftragserteilung eines Kunden oder die Abgabe eines Angebots durch den Verkäufer – in zusammenhängende Folgen von Tätigkeiten (z. B. Auftrag abwickeln, Material beschaffen). Ziel ist es, eine marktorientierte Unternehmensorganisation zu schaffen, die die Funktionsabläufe vom Vorlieferanten bis zum Endkunden in sinnvolle, sich wiederholende betriebliche Abläufe gliedert und diese informationstechnisch vernetzt, z. B. durch ERP-gestützte Informationssysteme. So orientiert sich die gesamte Organisation nicht mehr an starren internen Abteilungsgrenzen, sondern konsequent am Kunden- und Auftragsprozess.",
  },
  {
    id: "q20",
    type: "mc",
    topic: "Leistungssteigerung",
    points: 1,
    prompt: "Was ist das Ziel des Innovationsmanagements?",
    options: [
      {
        text: "Sich ständig mit verbesserten Produkten und Dienstleistungen neu auf die sich wandelnden Kundenanforderungen einzustellen und besser zu sein als die Wettbewerber.",
        correct: true,
      },
      { text: "Das Produktprogramm dauerhaft unverändert zu lassen.", correct: false },
      { text: "Ausschließlich die Produktionskosten zu senken.", correct: false },
      { text: "Neue Produkte möglichst spät auf den Markt zu bringen.", correct: false },
    ],
    solution:
      "Ziel des Innovationsmanagements ist es, sich auf die Anforderungen der Kunden, die sich im Zeitablauf wandeln, mit verbesserten Produkten und Dienstleistungen ständig neu einzustellen. „Besser zu sein als die Wettbewerber“ lautet die Maxime. Dafür reicht es nicht aus, eine Innovationsabteilung einzurichten – Management und alle Mitarbeiter müssen akzeptieren, dass es zu ihren Aufgaben gehört, ständig einen Strom von großen und kleinen Innovationen hervorzubringen.",
  },
  {
    id: "q21",
    type: "mc",
    topic: "Leistungssteigerung",
    points: 1,
    prompt: "Was bezeichnet man als „time-to-market“?",
    options: [
      { text: "Die Zeitspanne zwischen Entdeckung/Erfindung und der Anwendung in marktfähigen Produkten.", correct: true },
      { text: "Die Öffnungszeiten eines Marktplatzes.", correct: false },
      { text: "Die Dauer einer Werbekampagne.", correct: false },
      { text: "Die gesetzliche Gewährleistungsfrist eines Produkts.", correct: false },
    ],
    solution:
      "Die Zunahme des Innovationswettbewerbs wird u. a. durch die Verkürzung der Zeitspanne zwischen Entdeckung/Erfindung und Anwendung in marktfähigen Produkten und Dienstleistungen charakterisiert – diese Zeitspanne nennt man time-to-market. Je kürzer sie ist, desto schneller kann ein Unternehmen Innovationen wirtschaftlich nutzen.",
  },
  {
    id: "q22",
    type: "mc",
    topic: "Leistungssteigerung",
    points: 1,
    prompt:
      "Worin unterscheidet sich die Marktorientierung von der Technikorientierung im Marketing?",
    options: [
      {
        text: "Marktorientierung richtet alle Unternehmensfaktoren auf die tatsächlichen und zukünftigen Bedürfnisse der Abnehmer aus, statt vorrangig Produktion und Produktgestaltung in den Mittelpunkt zu stellen.",
        correct: true,
      },
      { text: "Technikorientierung stellt den Kundennutzen konsequent in den Mittelpunkt.", correct: false },
      { text: "Beide Begriffe bedeuten dasselbe.", correct: false },
      { text: "Marktorientierung betrifft nur die Preisgestaltung.", correct: false },
    ],
    solution:
      "Die Entwicklung des Marktes, den Nutzen des Käufers in den Mittelpunkt unternehmerischen Handelns zu stellen, führt dazu, dass weniger die Produktion und ihre Gestaltung (Technikorientierung), sondern der Absatz der erzeugten Produkte zur Hauptaufgabe der Unternehmen wird. Dies erfordert für das Erreichen der Unternehmensziele zunehmend die Ausrichtung aller Unternehmensfaktoren auf die tatsächlichen und zukünftigen Bedürfnisse der Abnehmer (Marktorientierung). Die Konzeption, die alles Planen und Handeln konsequent auf die gegenwärtigen und zukünftigen Erfordernisse der Märkte ausrichtet, bezeichnet man als Marketing.",
  },
  {
    id: "q23",
    type: "freitext",
    topic: "Leistungssteigerung",
    points: 3,
    prompt:
      "Erklären Sie den Begriff „Fertigungstiefe“ (Wertschöpfung) und nennen Sie ein wichtiges Kriterium für die Make-or-Buy-Entscheidung.",
    keywords: [
      { phrase: "fertigungstiefe", weight: 1 },
      { phrase: "wertschöpfung", weight: 1 },
      { phrase: "know-how", weight: 1 },
      { phrase: "kosten", weight: 1 },
    ],
    solution:
      "Die Fertigungstiefe (auch Wertschöpfung genannt) beschreibt, in welchem Umfang Leistungen im eigenen Unternehmen selbst erstellt werden, statt sie von Zulieferern zu beziehen. Die Entscheidung darüber, ob eine Leistung – z. B. eine Baugruppe – selbst produziert oder fremdbezogen werden soll, nennt man Make-or-Buy-Analyse. Für diese strategisch bedeutsame Entscheidung sind neben Kosten-/Nutzen-Relationen auch strategische Aspekte zu berücksichtigen: Es ist zu analysieren, inwieweit die betreffende Baugruppe eine wichtige Quelle für die Erringung von Wettbewerbsvorteilen ist und daher selbst produziert werden sollte. Zudem stellt sich die Frage, ob mit der Fremdvergabe ein Know-how-Verlust verbunden sein könnte – ein zentrales Kriterium ist also, ob die betroffene Leistung zu den Kernkompetenzen des Unternehmens zählt und ausgerichtet an einer auf Kernfähigkeiten ausgerichteten Strategie bleiben sollte.",
  },
  {
    id: "q24",
    type: "mc",
    topic: "Leistungssteigerung",
    points: 1,
    prompt: "Was ist ein wichtiges Risiko bei der Fremdvergabe (Buy) von Leistungen?",
    options: [
      { text: "Ein möglicher Know-how-Verlust für das eigene Unternehmen.", correct: true },
      { text: "Automatisch steigende Fertigungstiefe.", correct: false },
      { text: "Ein garantierter Wettbewerbsvorteil.", correct: false },
      { text: "Der vollständige Wegfall von Qualitätsanforderungen.", correct: false },
    ],
    solution:
      "Bei der Entscheidung über die Höhe der Fertigungstiefe (Make-or-Buy-Analyse) ist zu analysieren, inwieweit z. B. eine Baugruppe eine wichtige Quelle für die Erringung von Wettbewerbsvorteilen ist und daher selbst produziert werden sollte. Weiterhin stellt sich die Frage, ob mit der Fremdvergabe ein Know-how-Verlust verbunden sein könnte. Die Frage der Höhe der Wertschöpfung ist daher ein zentrales Element bei einer auf Kernfähigkeiten ausgerichteten Strategie.",
  },
  {
    id: "q25",
    type: "freitext",
    topic: "Leistungssteigerung",
    points: 3,
    prompt:
      "Nennen Sie zwei Fragen, die ein Unternehmen im Rahmen eines markt- und kostenorientierten Leistungserstellungsprozesses beantworten sollte.",
    keywords: [
      { phrase: "leistungsprozess", weight: 1 },
      { phrase: "produkt", weight: 1 },
      { phrase: "zulieferer", weight: 1 },
      { phrase: "gestalt", weight: 1 },
    ],
    solution:
      "Um den ständigen Änderungen der Marktanforderungen begegnen zu können, muss das Unternehmen auf Basis von Marktanalysen Kernkompetenzen aufbauen, die im Bereich der Leistungserstellung zu einer langfristigen Quelle von Wettbewerbsvorteilen werden. Dabei sind insbesondere folgende Fragen zu beantworten (zwei genügen):\n" +
      "• Wie können die Leistungsprozesse optimal gestaltet werden?\n" +
      "• Welche produktionsspezifischen Leistungsfaktoren bestimmen den Markterfolg eines Produktes?\n" +
      "• Welche Produkte, Dienstleistungen und Vorleistungen müssen selbst hergestellt werden, um am Markt bestehen zu können?\n" +
      "• Auf welcher Basis soll mit den Zulieferern zusammengearbeitet werden?",
  },
  {
    id: "q26",
    type: "mc",
    topic: "Leistungssteigerung",
    points: 1,
    prompt: "Was versteht man unter einem flexiblen Fertigungssystem?",
    options: [
      {
        text: "Mehrere elektronisch verbundene Bearbeitungszentren (z. B. Industrieroboter), die von einem übergeordneten Informations- und Steuerungssystem gelenkt werden und unterschiedliche Aufträge automatisch fertigen können.",
        correct: true,
      },
      { text: "Eine einzelne, starr programmierte Maschine für genau ein Produkt.", correct: false },
      { text: "Ein rein manuelles Fertigungsverfahren ohne Automatisierung.", correct: false },
      { text: "Ein System, das nur nachts betrieben werden darf.", correct: false },
    ],
    solution:
      "Unter flexiblen Fertigungssystemen versteht man mehrere Bearbeitungszentren (z. B. Industrieroboter), die über ein elektronisch gesteuertes Transportsystem miteinander verbunden sind und von einem übergeordneten Informations- und Steuerungssystem gelenkt werden. Flexible Fertigungssysteme sind in der Lage, unterschiedliche Aufträge (z. B. verschiedene Gerätetypen) automatisch zu fertigen. Damit soll das Spannungsverhältnis zwischen Leistungserstellung und Absatz gemildert werden.",
  },
  {
    id: "q27",
    type: "mc",
    topic: "Unternehmensziele",
    points: 1,
    prompt: "Was beschreiben Unternehmensziele?",
    options: [
      {
        text: "Einen zukünftigen, erstrebenswerten Zustand des Unternehmens, den der zuständige Entscheidungsträger anzustreben hat.",
        correct: true,
      },
      { text: "Ausschließlich vergangene Geschäftsergebnisse.", correct: false },
      { text: "Gesetzliche Vorschriften ohne unternehmerischen Gestaltungsspielraum.", correct: false },
      { text: "Rein private Absichten der Geschäftsführung ohne Bezug zum Betrieb.", correct: false },
    ],
    solution:
      "Unternehmensziele beschreiben einen zukünftigen, erstrebenswerten Zustand des Unternehmens, den der zuständige Entscheidungsträger anzustreben hat. Sie geben der Unternehmensleitung, den Bereichs- und Gruppenleitern bzw. den Mitarbeitern eine Orientierung für die Steuerung und Kontrolle der betrieblichen Prozesse.",
  },
  {
    id: "q28",
    type: "freitext",
    topic: "Unternehmensziele",
    points: 5,
    prompt:
      "Erläutern Sie die SMART-Formel für Unternehmensziele: Nennen Sie alle fünf Buchstaben mit der zugehörigen Eigenschaft und je einer kurzen Erklärung.",
    keywords: [
      { phrase: "spezifisch", weight: 1 },
      { phrase: "messbar", weight: 1 },
      { phrase: "akzeptiert", weight: 1 },
      { phrase: "realistisch", weight: 1 },
      { phrase: "terminiert", weight: 1 },
    ],
    solution:
      "Die Zielformel SMART fasst kompakt und einprägsam zusammen, welche Eigenschaften Unternehmensziele haben sollen:\n" +
      "S – spezifisch, simpel: Das Ziel soll genau beschrieben, einfach formuliert und für alle nachvollziehbar sein.\n" +
      "M – messbar: Festgelegte Kennzahlen müssen es erlauben, dass die Erreichung des Ziels gemessen werden kann.\n" +
      "A – akzeptiert: Das formulierte Ziel muss mit den Wertvorstellungen des Unternehmens übereinstimmen.\n" +
      "R – realistisch: Das Ziel darf nicht utopisch und damit demotivierend sein; die Mitarbeiter müssen das Gefühl haben, dass das Ziel erreichbar ist.\n" +
      "T – terminiert: Der Zeithorizont, in welchem das Ziel zu erreichen ist, muss festgelegt sein.",
  },
  {
    id: "q29",
    type: "mc",
    topic: "Unternehmensziele",
    points: 1,
    prompt:
      "Welcher Buchstabe der SMART-Formel verlangt, dass ein Ziel mit den Wertvorstellungen des Unternehmens übereinstimmt?",
    options: [
      { text: "S – spezifisch", correct: false },
      { text: "M – messbar", correct: false },
      { text: "A – akzeptiert", correct: true },
      { text: "T – terminiert", correct: false },
    ],
    solution:
      "Das A in SMART steht für „akzeptiert“: Das formulierte Ziel muss mit den Wertvorstellungen des Unternehmens übereinstimmen. Nur dann wird es von den Entscheidungsträgern und Mitarbeitenden mitgetragen.",
  },
  {
    id: "q30",
    type: "freitext",
    topic: "Arten von Unternehmenszielen & Lernsituation",
    points: 6,
    prompt:
      "Nennen Sie je ein Beispiel für ein ökonomisches, ein ökologisches und ein soziales Unternehmensziel und begründen Sie kurz Ihre Zuordnung. Gehen Sie außerdem mit Bezug zur Lernsituation Weber Metallbau GmbH darauf ein, welche Managementfehler das Unternehmen im Vergleich zu insolventen Betrieben offensichtlich vermieden hat.",
    keywords: [
      { phrase: "ökonomisch", weight: 1 },
      { phrase: "ökologisch", weight: 1 },
      { phrase: "sozial", weight: 1 },
      { phrase: "weber", weight: 1 },
      { phrase: "stammbelegschaft", weight: 1 },
    ],
    solution:
      "Unternehmen sind gleichzeitig ökonomisch, ökologisch und sozial verantwortlich handelnde Systeme. Beispiele:\n" +
      "• Ökonomisches Ziel (Ertragsziel): Steigerung der Umsatzrentabilität um 5 % – dient dem Gewinnstreben als Wesensmerkmal unternehmerischer Tätigkeit in der Marktwirtschaft.\n" +
      "• Ökologisches Ziel: Sparsamer Einsatz nicht regenerierbarer Ressourcen und Einsatz abfallarmer Stoffe (Recyclingwirtschaft) – dient der Schonung der natürlichen Umwelt und ist Aufgabe eines „ökologieorientierten“ Marketings, das umweltgerechte Produkte erfolgreich am Markt durchsetzt.\n" +
      "• Soziales Ziel: Gewährung freiwilliger Sozialleistungen wie Urlaubsgeld oder Jubiläumsgeschenke sowie die Einhaltung des Arbeitsschutzrechts – dient der wirtschaftlichen Besserstellung und dem Schutz der Mitarbeitenden.\n\n" +
      "Bezug zur Lernsituation: Die Weber Metallbau GmbH hat sich von einem traditionellen Huf- und Wagenschmiedebetrieb erfolgreich zu einem florierenden Werkstatt- und Montagebetrieb mit eigenem Produktprogramm, eigenen konstruktionstechnischen Entwicklungen und Exporten in den nahen Euroraum entwickelt. Anders als bei den häufigsten Ursachen für Unternehmensinsolvenzen (z. B. fehlendes Controlling, Finanzierungslücken, unzureichendes Forderungsmanagement, autoritäre/rigide Führung, ungenügende Transparenz und Kommunikation) hat die Weber Metallbau GmbH offensichtlich eine strategisch handelnde Unternehmensführung: Sie hat sich nicht auf die anonyme industrielle Massenfertigung, sondern auf ihre handwerklichen Stärken und eine kundenspezifische Fertigung besonnen. Das wichtigste „Kapital“ des Unternehmens ist dabei die Verlässlichkeit auf eine qualifizierte Stammbelegschaft – also gerade keine autoritäre Führung mit hoher Fluktuation, sondern eine Belegschaft mit gewachsenem Know-how, auf die sich das Unternehmen bei seiner strategischen Neuausrichtung stützen kann.",
  },
];
