const impulses = [
    {
        text: "Stell dir vor, du möchtest deine pädagogische Praxis im Umgang mit Künstlicher Intelligenz (KI) vertiefen und suchst nach neuen Impulsen. Der Blogbeitrag 'KI und Lernen: Fünf Mal tiefer gebohrt!' bietet genau das: Er teilt fünf persönliche Erkenntnisse der Autorin zum Einsatz von KI im Bildungsbereich. Besonders spannend ist die Idee, KI nicht nur als Werkzeug zur Vereinfachung zu sehen, sondern als Herausforderung für aktives Denken und Lernen. Lass dich von diesen Einsichten inspirieren und entdecke neue Wege, KI sinnvoll in deinem Unterricht einzusetzen!",
        url: "https://ebildungslabor.de/blog/ki-und-lernen-fuenf-mal-tiefer-gebohrt/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) im Unterricht einsetzen und fragst dich, wie das pädagogisch sinnvoll gelingt. Der Blogbeitrag 'Pädagogische Einordnung von KI-Nutzung: zwischen Kreation und Reproduktion' bietet dazu ein hilfreiches Koordinatensystem. Er unterscheidet zwischen asynchroner und synchroner Nutzung sowie zwischen kreativen und reproduktiven Lernprozessen. Besonders spannend ist die Idee, KI als 'Spielpartner*in' einzusetzen, um durch direkte Interaktion kreatives Denken bei Lernenden zu fördern. Lass dich von diesen Ansätzen inspirieren und entdecke neue Wege, KI kreativ und effektiv in deinem Unterricht zu integrieren!",
        url: "https://ebildungslabor.de/blog/paedagogische-einordnung-von-ki-nutzung-zwischen-kreation-und-reproduktion/"
    },
    {
        text: "Stell dir vor, du setzt Künstliche Intelligenz (KI) in deinem Unterricht ein und fragst dich, wie das nachhaltig und sinnvoll gelingen kann. Der Blogbeitrag 'Regenerative KI-Nutzung auf der Mikro-Ebene' bietet dazu wertvolle Einblicke. Er beleuchtet, wie KI-Nutzung auf inhaltlicher, individueller und sozialer Ebene gestaltet werden kann, um nicht nur effizient, sondern auch regenerativ zu sein. Besonders spannend ist die Idee, KI so einzusetzen, dass sie nicht nur Arbeit abnimmt, sondern auch die Kreativität und Zusammenarbeit fördert. Lass dich von diesen Ansätzen inspirieren und entdecke neue Wege, KI nachhaltig und bereichernd in deinem Unterricht zu integrieren!",
        url: "https://ebildungslabor.de/blog/regenerative-ki-nutzung-auf-der-mikro-ebene/"
    },
    {
        text: "Stell dir vor, du arbeitest mit Kolleg*innen zusammen und fragst dich, wie Künstliche Intelligenz (KI) eure Kommunikation beeinflusst. Der Blogbeitrag 'KI in der Zusammenarbeit mitdenken: Ich weiß, dass du weißt, dass ich KI nutze …' geht genau dieser Frage nach. Er untersucht, wie sich menschliche Zusammenarbeit verändert, wenn KI ins Spiel kommt, und betont die Bedeutung von Pre-Empathie – also dem Bewusstsein, dass beide Seiten möglicherweise KI nutzen. Besonders spannend ist die Erkenntnis, dass E-Mails von KI oft als empathischer wahrgenommen werden, aber negativ bewertet werden, wenn bekannt ist, dass sie von einer Maschine stammen. Lass dich von diesen Einsichten inspirieren und reflektiere, wie du KI bewusst und transparent in deiner Zusammenarbeit einsetzen kannst!",
        url: "https://ebildungslabor.de/blog/ki-in-der-zusammenarbeit-mitdenken-ich-weiss-dass-du-weisst-dass-ich-ki-nutze/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) nicht nur oberflächlich in deinen Unterricht integrieren, sondern wirklich verstehen, wie sie Bildung grundlegend verändern kann. Der Blogbeitrag 'Kalte Dusche in der KI-Debatte – ein erster Schritt!' regt genau dazu an. Er fordert dazu auf, tiefer über die Rolle von KI in der Bildung nachzudenken und stellt fünf zentrale Bereiche vor, in denen es sich lohnt, genauer hinzuschauen: von der Reflexion über Bildungsziele in einer KI-geprägten Welt bis hin zur Förderung digitaler Mündigkeit. Besonders spannend ist die Idee, KI nicht nur als zusätzliches Werkzeug zu sehen, sondern als Anlass, die gesamte Lernkultur zu überdenken und zu transformieren. Lass dich von diesen Denkanstößen inspirieren und wage den Sprung ins kalte Wasser, um Bildung mit KI neu zu denken!",
        url: "https://ebildungslabor.de/blog/kalte-dusche-in-der-ki-debatte-ein-erster-schritt/"
    },
    {
        text: "Stell dir vor, du möchtest die Ergebnisse deiner Workshops effizient und nachhaltig festhalten, ohne dich durch unübersichtliche Fotoprotokolle kämpfen zu müssen. Der Blogbeitrag 'Mensch-Maschine-Dokumentation von Veranstaltungen: Vergiss Fotokolle, nutze Transkripte!' stellt eine innovative Methode vor, bei der du die gesammelten Materialien nach der Veranstaltung per Audio aufnimmst und anschließend mit Hilfe von KI-Tools in schriftliche Transkripte umwandelst. Besonders spannend ist die Idee, diese Transkripte weiter von KI-Sprachmodellen aufbereiten zu lassen, um sie optimal für die Weiterarbeit zu nutzen. Probiere diese Methode aus und erlebe, wie sie deine Dokumentationsarbeit erleichtern und bereichern kann! ",
        url: "https://ebildungslabor.de/blog/mensch-maschine-dokumentation-von-veranstaltungen-vergiss-fotokolle-nutze-transkripte/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) in deinem Unterricht einführen und suchst nach einem erprobten Konzept für eine Fortbildung. Der Blogbeitrag 'Fortbildungskonzept für einen KI-Einstieg an Schulen' stellt ein praxisnahes Modell vor, das bereits mehrfach erfolgreich umgesetzt wurde. Es umfasst interaktive Methoden wie einen Kennenlern-Kartenaustausch, einen Murmelrunden-Vortrag und Stationenlernen, um Lehrkräften einen umfassenden Einstieg in die Thematik zu bieten. Besonders spannend ist die kollaborative Kugellager-Stimmungs-Abfrage, bei der alle Teilnehmenden in Bewegung kommen und sich austauschen. Lass dich von diesem Konzept inspirieren und gestalte deinen eigenen KI-Fortbildungstag!",
        url: "https://ebildungslabor.de/blog/ki-fortbildungstag/"
    },
    {
        text: "Stell dir vor, du möchtest die Inhalte deiner Online-Vorträge für ein breiteres Publikum zugänglicher machen, ohne dabei aufwendige Videoaufzeichnungen zu erstellen. Der Blogbeitrag 'Experiment: Lässt sich ein Online-Vortrag mithilfe von KI-Tools zugänglicher machen?' beschreibt einen innovativen Ansatz: Die Autorin nahm lediglich das Audio ihres Vortrags auf, erstellte daraus ein Transkript und nutzte anschließend ein KI-Sprachmodell, um dieses in eine gut lesbare Textfassung zu überführen. Besonders spannend ist die Erkenntnis, dass diese Methode nicht nur den Aufwand reduziert, sondern auch die Hemmschwelle für Teilnehmende senkt, aktiv mitzuwirken, da keine Videoaufzeichnung erfolgt. Probiere diese Technik aus und entdecke, wie du mit Hilfe von KI-Tools deine Bildungsinhalte effizienter und ansprechender gestalten kannst!",
        url: "https://ebildungslabor.de/blog/experiment-laesst-sich-ein-online-vortrag-mithilfe-von-ki-tools-zugaenglicher-machen/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) im Unterricht einsetzen, um die Kreativität deiner Schüler*innen zu fördern. Der Blogbeitrag 'Open Prompting' stellt einen Ansatz vor, bei dem bewusst offene Eingaben an KI-Modelle genutzt werden, um neue Ideen und unerwartete Perspektiven zu entdecken. Besonders spannend ist die Idee, KI nicht nur für präzise Antworten zu nutzen, sondern als Werkzeug für kreatives Denken und spielerisches Experimentieren einzusetzen. Lass dich von diesem Konzept inspirieren und probiere aus, wie Open Prompting deinen Unterricht bereichern kann!",
        url: "https://ebildungslabor.de/blog/open-prompting/"
    },
    {
        text: "Stell dir vor, du nutzt KI-Sprachmodelle im Unterricht und fragst dich, wie neutral ihre Antworten wirklich sind. Der Blogbeitrag 'KI-Sprachmodelle sind nicht neutral (vor allem nicht, wenn es um die Bewertung generativer KI geht)' geht dieser Frage nach. Die Autorin führte ein Experiment durch, bei dem sie verschiedene KI-Modelle bat, kritische Aussagen über generative KI in ihre 'persönliche Meinung' umzuwandeln. Dabei zeigte sich, dass die Modelle tendenziell kritische Aussagen abschwächen oder positiv umformulieren. Besonders spannend ist die Erkenntnis, dass KI-Modelle nicht neutral sind, sondern durch ihre Trainingsdaten und Programmierung beeinflusst werden. Diese Einsicht regt dazu an, den Einsatz von KI im Bildungsbereich kritisch zu reflektieren und die Lernenden für mögliche Verzerrungen zu sensibilisieren.",
        url: "https://ebildungslabor.de/blog/ki-sprachmodelle-sind-nicht-neutral-vor-allem-nicht-wenn-es-um-die-bewertung-generativer-ki-geht/"
    },
    {
        text: "Stell dir vor, du fragst dich, warum wir in Zeiten von Künstlicher Intelligenz (KI) überhaupt noch lernen sollten. Der Blogbeitrag 'Bildung und KI: Wozu noch lernen?' setzt sich genau mit dieser Frage auseinander. Er kritisiert das Konzept der 'Bankiers-Erziehung', bei dem Wissen wie Geld auf ein Konto eingezahlt wird, um später davon zu profitieren. Stattdessen betont der Beitrag, dass Lernen mehr ist als nur das Ansammeln von Wissen: Es fördert Freude, soziale Resonanz und persönliche Entwicklung. Besonders spannend ist die Erkenntnis, dass gutes Lernen uns nicht nur Wissen vermittelt, sondern uns als Menschen wachsen lässt und unsere Gesellschaft stärkt. Lass dich von diesen Gedanken inspirieren und entdecke, wie wertvoll Lernen auch in einer KI-geprägten Welt ist!",
        url: "https://ebildungslabor.de/blog/bildung-und-ki-wozu-noch-lernen/"
    },
    {
        text: "Stell dir vor, du möchtest bestehende Lernmaterialien mit Hilfe von KI-Sprachmodellen weiterentwickeln, um deinen Unterricht noch effektiver zu gestalten. Der Blogbeitrag 'Pädagogisch kluge Weiternutzung von offenen Inhalten unter Nutzung von KI-Sprachmodellen' zeigt dir fünf praktische Szenarien, wie du vorhandene Inhalte sinnvoll einsetzen kannst: von der Vorbereitung auf neue Themen über die Transformation von Texten bis hin zur Erstellung von Selbstlernübungen. Besonders spannend ist die Idee, Lernende mit KI-Sprachmodellen interaktiv bestehende Inhalte erkunden zu lassen, um so das Verständnis zu vertiefen. Lass dich von diesen Ansätzen inspirieren und entdecke, wie du KI nutzen kannst, um auf vorhandenen Materialien aufzubauen und deinen Unterricht zu bereichern!",
        url: "https://ebildungslabor.de/blog/ki-sprachmodelle-mit-bestehenden-inhalten-lernen-und-guten-output-generieren/"
    },
    {
        text: "Stell dir vor, du liest einen Artikel und fragst dich, ob und wie Künstliche Intelligenz (KI) bei dessen Erstellung eingesetzt wurde. Der Blogbeitrag 'Welchen Anspruch habe ich bei mir und anderen an veröffentlichte Inhalte in Hinblick auf die KI-Nutzung?' setzt sich genau mit dieser Frage auseinander. Er diskutiert drei zentrale Forderungen an KI-generierte Inhalte: Transparenz über den Einsatz von KI, die Sicherstellung inhaltlicher Korrektheit und die Wahrung von Authentizität. Besonders spannend ist die Erkenntnis, dass es nicht immer einfach ist, klare Grenzen zwischen menschlicher und KI-generierter Arbeit zu ziehen, da oft beide eng miteinander verwoben sind. Lass dich von diesen Überlegungen inspirieren und reflektiere, wie du selbst mit KI in deiner pädagogischen Praxis umgehen möchtest!",
        url: "https://ebildungslabor.de/blog/welchen-anspruch-habe-ich-bei-mir-und-anderen-an-veroeffentlichte-inhalte-in-hinblick-auf-die-ki-nutzung/"
    },
    {
        text: "Stell dir vor, du setzt Künstliche Intelligenz (KI) in deinem Unterricht ein und fragst dich, welche Fallstricke dabei lauern könnten. Der Blogbeitrag 'Meine KI-Fails und Learnings daraus' teilt offen die persönlichen Erfahrungen der Autorin mit typischen Stolpersteinen bei der KI-Nutzung. Besonders spannend ist die Erkenntnis, dass der übermäßige Einsatz von KI zu einer Entfremdung vom eigenen kreativen Prozess führen kann. Lass dich von diesen ehrlichen Einblicken inspirieren und reflektiere, wie du KI bewusst und sinnvoll in deinem pädagogischen Alltag integrieren kannst!",
        url: "https://ebildungslabor.de/blog/meine-ki-fails/"
    },
    {
        text: "Stell dir vor, du möchtest deine pädagogische Haltung reflektieren und suchst nach einem praktischen Werkzeug dafür. Der Blogbeitrag 'Mit dem Wertequadrat die eigene Haltung reflektieren' stellt ein Modell vor, das dir dabei hilft, verschiedene Tugenden in Balance zu halten. Anhand des Beispiels 'Offenheit für Neues' und 'kritische Reflexion' zeigt der Beitrag, wie man diese Werte ausbalanciert, um nicht in 'naive Euphorie' oder 'pauschale Ablehnung' zu verfallen. Besonders spannend ist die Idee, das Wertequadrat nicht nur individuell, sondern auch im Team zu nutzen, um gemeinsam über pädagogische Haltungen nachzudenken. Probiere dieses Instrument aus und entdecke neue Perspektiven für deine pädagogische Praxis!",
        url: "https://ebildungslabor.de/blog/mit-dem-wertequadrat-die-eigene-haltung-reflektieren/"
    },
    {
        text: "Stell dir vor, du möchtest komplexe Inhalte besser verstehen und suchst nach Methoden, die dir dabei helfen. Der Blogbeitrag 'Programmheft, Reiseführer und KI-Sprachmodelle' vergleicht KI-Sprachmodelle mit Programmheften im Theater oder Reiseführern: Sie bieten Zusammenfassungen und Hintergrundinformationen, die das Verständnis vertiefen. Besonders spannend ist die Erkenntnis, dass KI-Sprachmodelle nicht als Abkürzung dienen sollten, sondern dazu beitragen können, sich intensiver mit einem Thema auseinanderzusetzen. Lass dich von diesem Vergleich inspirieren und entdecke, wie KI-Sprachmodelle dein Lernen bereichern können!",
        url: "https://ebildungslabor.de/blog/programmheft-reisefuehrer-und-ki-sprachmodelle/"
    },
    {
        text: "Stell dir vor, du setzt Künstliche Intelligenz (KI) im Unterricht ein und fragst dich, ob das Ziel darin besteht, Lernprozesse zu automatisieren und zu vereinfachen. Der Blogbeitrag 'Automatisieren und Vereinfachen ist nicht das Ziel von Bildung!' argumentiert, dass Bildung vielmehr darauf abzielt, Lernende zu befähigen, eigenständig zu denken und zu handeln. Besonders spannend ist die Erkenntnis, dass KI als Werkzeug dienen kann, um offene Lernprozesse zu fördern, bei denen Lernende Verantwortung für ihr eigenes Lernen übernehmen. Lass dich von diesen Gedanken inspirieren und reflektiere, wie du KI nutzen kannst, um die Selbstständigkeit und Kreativität deiner Schüler*innen zu stärken!",
        url: "https://ebildungslabor.de/blog/automatisieren-und-vereinfachen-ist-nicht-das-ziel-von-bildung/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) im Unterricht einsetzen und fragst dich, wie du durch präzises Prompting mögliche Verzerrungen (Bias) vermeiden kannst. Der Blogbeitrag 'Besseres Prompting hilft nur bedingt gegen Bias!' zeigt anhand von Experimenten mit Bildgenerierungstools, dass selbst bewusst formulierte Eingaben nicht immer zu den gewünschten vielfältigen Darstellungen führen. Besonders spannend ist die Erkenntnis, dass KI-Modelle oft bestehende gesellschaftliche Stereotype reproduzieren, da sie auf historischen Daten basieren. Diese Einsicht unterstreicht die Bedeutung, Lernende für die Grenzen von KI zu sensibilisieren und gemeinsam kritisch zu reflektieren, wie KI-Tools eingesetzt werden können, ohne unbeabsichtigt Vorurteile zu verstärken.",
        url: "https://ebildungslabor.de/blog/besseres-prompting-hilft-nur-bedingt-gegen-bias/"
    },
    {
        text: "Stell dir vor, du überlegst, ob eine umfassende Einführung von Künstlicher Intelligenz (KI) die Bildung wirklich verbessert. Der Blogbeitrag 'Brauchen wir eine KI-Revolution in der Bildung?' regt dazu an, diese Frage kritisch zu hinterfragen. Er betont, dass der bloße Einsatz von KI nicht automatisch zu besserer Bildung führt und dass klare Ziele wie mehr Demokratie, Selbstbestimmung und Gleichheit im Bildungssystem wichtig sind. Besonders spannend ist die Erkenntnis, dass die aktuelle KI-Entwicklung oft nicht gemeinwohlorientiert ist und daher eine bewusste Ausrichtung auf gute Bildung erforderlich ist. Lass dich von diesen Gedanken inspirieren und reflektiere, wie KI sinnvoll und zielgerichtet in der Bildung eingesetzt werden kann!",
        url: "https://ebildungslabor.de/blog/brauchen-wir-eine-ki-revolution-in-der-bildung/"
    },
    {
        text: "Stell dir vor, du möchtest deinen Schüler*innen Künstliche Intelligenz (KI) näherbringen, ohne dabei in mystifizierende Darstellungen zu verfallen. Der Blogbeitrag 'Wie man nicht-mystifizierend über 'KI' sprechen kann' bietet dazu drei wertvolle Hinweise: Erstens, vermeide Spekulationen über KI und konzentriere dich stattdessen auf aktuelle Fakten. Zweitens, vermenschliche KI nicht, sondern betone ihre Funktion als Werkzeug. Drittens, verzichte auf allgemeine KI-Narrative und beleuchte spezifische Anwendungen. Besonders spannend ist die Erkenntnis, dass eine sachliche und differenzierte Darstellung von KI das Verständnis und die kritische Auseinandersetzung bei Lernenden fördert. Lass dich von diesen Ansätzen inspirieren und gestalte deinen Unterricht über KI klar und nachvollziehbar!",
        url: "https://ebildungslabor.de/selbstlernkurse/wie-man-nicht-mystifizierend-ueber-ki-sprechen-kann/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) nicht nur als neues Werkzeug im Unterricht einsetzen, sondern die Lernkultur grundlegend verändern. Der Blogbeitrag 'Wie wir mit KI-Eduhacking eine Veränderung der Lernkultur voranbringen können' stellt das Konzept des KI-Eduhackings vor. Dabei wird KI bewusst genutzt, um traditionelle Bildungsstrukturen zu 'hacken' und Lernende zu mehr Selbstbestimmung zu ermächtigen. Besonders spannend ist die Idee, Prüfungen neu zu denken, indem man von standardisierten Tests zu offenen Reflexionsformaten übergeht, die kritisches Denken fördern. Lass dich von diesen Ansätzen inspirieren und entdecke, wie du mit KI-Eduhacking eine transformative Lernumgebung schaffen kannst!",
        url: "https://ebildungslabor.de/blog/wie-wir-mit-ki-eduhacking-eine-veraenderung-der-lernkultur-voranbringen-koennen/"
    },
    {
        text: "Stell dir vor, du möchtest deine Schüler*innen dazu befähigen, in einer von Künstlicher Intelligenz (KI) geprägten Welt eigenständig und kritisch zu denken. Der Blogbeitrag 'Die Kompetenz des kritischen Denkens – analysiert vor dem Hintergrund der KI-Debatte in der Bildung' bietet dazu wertvolle Einblicke. Er erläutert, dass kritisches Denken nicht nur bedeutet, Dinge zu hinterfragen, sondern auch, Wissen aktiv zu prüfen und eigene Überzeugungen zu entwickeln. Besonders spannend ist die Erkenntnis, dass kritisches Denken sowohl Kenntnisse über Denkprozesse als auch die Fähigkeit zur praktischen Anwendung und die Bereitschaft zur Selbstreflexion erfordert. Lass dich von diesen Gedanken inspirieren und fördere das kritische Denken deiner Schüler*innen, um sie auf die Herausforderungen der digitalen Welt vorzubereiten!",
        url: "https://ebildungslabor.de/blog/die-kompetenz-des-kritischen-denkens-analysiert-vor-dem-hintergrund-der-ki-debatte-in-der-bildung/"
    },
    {
        text: "Stell dir vor, du planst deinen Unterricht bis ins Detail, um den Lernenden den bestmöglichen Weg vorzugeben. Der Blogbeitrag 'Adler steigen keine Treppen! (Auch keine intelligenten Treppen)' erzählt die Geschichte eines Pädagogen, der eine perfekt durchdachte 'Wissenstreppe' für seine Schüler*innen entwirft. Doch anstatt diese wie vorgesehen zu nutzen, finden die Kinder eigene, kreative Wege, um ans Ziel zu gelangen. Besonders spannend ist die Frage, ob wir nicht eine Pädagogik brauchen, die den individuellen Lernwegen der Schüler*innen mehr Raum gibt und sie ermutigt, ihre eigenen Pfade zu entdecken. Lass dich von dieser Geschichte inspirieren und überlege, wie du in deinem Unterricht mehr Freiheit für kreative Lernwege schaffen kannst!",
        url: "https://ebildungslabor.de/blog/adler-steigen-keine-treppen/"
    },
    {
        text: "Stell dir vor, du möchtest mit deinen Kolleg*innen oder Schüler*innen über Künstliche Intelligenz (KI) sprechen und suchst nach einer kreativen Methode, um unterschiedliche Vorstellungen und Bilder von KI zu erkunden. Der Blogbeitrag 'Interaktive Übung zur Reflexion von KI' stellt eine solche Methode vor: Die Teilnehmenden entwickeln in Kleingruppen sogenannte 'Prompts' – kurze Textbeschreibungen, die ihre persönlichen Bilder und Assoziationen zu KI widerspiegeln. Diese Prompts können anschließend genutzt werden, um mit KI-Bildgeneratoren visuelle Darstellungen zu erstellen, die als Grundlage für weitere Diskussionen dienen. Besonders spannend ist die Vielfalt der entstandenen Prompts, die von einer 'bunten Krake, die sich viele Informationen von überall holt' bis zu einem 'Roboter, der durch eine Datenbank rennt und aus Blackboxen Daten zieht' reichen. Probiere diese Übung aus und entdecke, wie sie den Austausch über KI auf kreative Weise fördern kann!",
        url: "https://ebildungslabor.de/blog/interaktive-uebung-zur-reflexion-von-ki/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) wie ChatGPT in deinem Unterricht einsetzen und fragst dich, wie du präzise und hilfreiche Antworten erhältst. Der Blogbeitrag 'Kontext-Prompting: Wer x mag, dem könnte auch y gefallen!' bietet dazu praktische Tipps. Er zeigt, wie wichtig es ist, beim Formulieren von Eingaben (Prompts) den richtigen Kontext zu liefern, um passende Ergebnisse zu erzielen. Besonders spannend ist die Methode, eigene Schlüsselwörter oder Beispiele vorzugeben, um die KI in die gewünschte Richtung zu lenken. Lass dich von diesen Ansätzen inspirieren und entdecke, wie du durch geschicktes Kontextualisieren das Potenzial von KI in deinem Unterricht voll ausschöpfen kannst!",
        url: "https://ebildungslabor.de/blog/kontext-prompting-wer-x-mag-dem-koennte-auch-y-gefallen/"
    },
    {
        text: "Stell dir vor, du möchtest Künstliche Intelligenz (KI) in deinem Unterricht veranschaulichen und suchst nach passenden Bildern, die weder klischeehaft noch irreführend sind. Der Blogbeitrag 'Wie lässt sich 'KI' gut illustrieren?' thematisiert genau dieses Anliegen. Er kritisiert gängige Darstellungen von KI, die oft Roboter oder futuristische Szenarien zeigen, und stellt die Initiative 'Better Images of AI' vor, die authentischere und menschlichere Illustrationen anbietet. Besonders spannend ist die Idee, Bilder zu verwenden, die Menschen bei der Arbeit an KI-Technologien zeigen, um den menschlichen Einfluss und die Gestaltbarkeit von KI zu betonen. Lass dich von diesen Ansätzen inspirieren und wähle bewusst Illustrationen, die ein realistisches Bild von KI vermitteln!",
        url: "https://ebildungslabor.de/blog/wie-laesst-sich-ki-gut-illustrieren/"
    },
    {
        text: "Stell dir vor, du fühlst dich von der aktuellen Begeisterung rund um Künstliche Intelligenz (KI) mitgerissen und suchst nach einer pädagogischen Orientierung. Der Blogbeitrag 'Pädagogische Orientierung im KI-Hype' bietet dazu wertvolle Impulse. Er reflektiert kritisch den eigenen Umgang mit dem KI-Hype und formuliert fünf Leitlinien für die pädagogische Praxis: von der Entmystifizierung des Begriffs \"KI\" über die Betonung menschlicher Klugheit gegenüber menschenähnlichen Maschinen bis hin zur Anerkennung der menschengemachten Natur von Technologie. Besonders spannend ist die Erkenntnis, dass es wichtig ist, den Begriff \"KI\" präzise zu verwenden und die dahinterstehenden menschlichen Interessen und Gestaltungen zu hinterfragen. Lass dich von diesen Gedanken anregen und finde deinen eigenen reflektierten Weg im Umgang mit KI in der Bildung!",
        url: "https://ebildungslabor.de/blog/paedagogische-orientierung-im-ki-hype/"
    },
    {
        text: "Stell dir vor, du fühlst dich von der aktuellen Begeisterung rund um Künstliche Intelligenz (KI) mitgerissen und suchst nach einer pädagogischen Orientierung. Der Blogbeitrag 'Pädagogische Orientierung im KI-Hype' bietet dazu wertvolle Impulse. Er reflektiert kritisch den eigenen Umgang mit dem KI-Hype und formuliert fünf Leitlinien für die pädagogische Praxis: von der Entmystifizierung des Begriffs \"KI\" über die Betonung menschlicher Klugheit gegenüber menschenähnlichen Maschinen bis hin zur Anerkennung der menschengemachten Natur von Technologie. Besonders spannend ist die Erkenntnis, dass es wichtig ist, den Begriff \"KI\" präzise zu verwenden und die dahinterstehenden menschlichen Interessen und Gestaltungen zu hinterfragen. Lass dich von diesen Gedanken anregen und finde deinen eigenen reflektierten Weg im Umgang mit KI in der Bildung!",
        url: "https://ebildungslabor.de/blog/paedagogische-orientierung-im-ki-hype/"
    }
];
let currentImpulseIndex = 0; // Start bei 0

// Funktion zur Auswahl des nächsten Impulses in der Reihenfolge
function getNextImpulse() {
    const impulse = impulses[currentImpulseIndex];
    currentImpulseIndex = (currentImpulseIndex + 1) % impulses.length; // Zum Anfang springen, wenn am Ende
    return impulse;
}

// Funktion zum Aktualisieren des Impuls-Textes
function updateImpulse() {
    const impulse = getNextImpulse();
    
    const impulseTextElement = document.getElementById("impulseText");
    const readMoreButton = document.getElementById("readMoreButton");

    if (!impulseTextElement || !readMoreButton) {
        console.error("Fehlende Elemente in HTML: Kann Impulse nicht aktualisieren.");
        return;
    }

    impulseTextElement.textContent = impulse.text;
    readMoreButton.onclick = function () {
        window.location.href = impulse.url;
    };
}

// Sobald die Seite geladen ist, initialisiere die Event Listener
document.addEventListener("DOMContentLoaded", function () {
    updateImpulse(); // Zeigt den ersten Impuls an

    const nextImpulseButton = document.getElementById("nextImpulseButton");
    if (nextImpulseButton) {
        nextImpulseButton.addEventListener("click", updateImpulse);
    } else {
        console.error("Element mit ID 'nextImpulseButton' wurde nicht gefunden.");
    }
});

