---
title: "Nach 15 Monaten Wartezeit enthüllt DeepSeek endlich V4 Preview: Umfassende Analyse"
description: "DeepSeek V4 Preview wurde offiziell veröffentlicht und stellt zwei MoE-Modelle (Pro und Flash) mit nativem Support für 1 Million Token Kontext vor, die signifikante Leistungsverbesserungen bei gleichzeitig drastisch reduzierten Inferenzkosten bieten. Dieser Artikel bietet eine detaillierte Aufschlüsselung der technischen Architektur, Leistung und Preisgestaltung von DeepSeek V4."
tags: ["deepseek v4", "deepseek offizielle website", "deepseek tutorial", "deepseek v4 preis"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "de"
author: "DeepSeek HK"
---

Dieser Artikel untersucht die technischen Merkmale, die Leistung und die Nutzungsrichtlinien von DeepSeek V4 und bietet eine umfassende Analyse der Kernvorteile dieses neuen großen Sprachmodells. Der Inhalt ist in einem zugänglichen Stil verfasst und eignet sich sowohl für Technikbegeisterte als auch für Entwickler.

Schlüsselwörter: deepseek v4, deepseek offizielle website, deepseek tutorial, deepseek v4 preis.

Veröffentlichungsdatum: 25. April 2026
Autor: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/de/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    DeepSeek jetzt nutzen
  </a>
</div>

![DeepSeek V4 Preview Umfassende Analyse](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview offiziell gestartet

Am 24. April gab DeepSeek offiziell den Start von V4 Preview bekannt. Dieses große Update kommt 15 Monate nach der Veröffentlichung von V3.2 und markiert einen weiteren wichtigen Durchbruch in DeepSeeks Roadmap für große Modelltechnologien.

Laut offizieller Einführung umfasst die V4-Serie zwei MoE-Modelle:
- **DeepSeek-V4-Pro**: 1,6 Billionen Gesamtparameter, 49 Milliarden aktivierte Parameter
- **DeepSeek-V4-Flash**: 284 Milliarden Gesamtparameter, 13 Milliarden aktivierte Parameter

Beide Modelle unterstützen nativ einen Kontext von 1 Million Token, was einen qualitativen Sprung in der Langtextverarbeitungsfähigkeit darstellt. Bemerkenswert unter 1M-Kontexteinstellungen:
- Die Inferenz-FLOPs pro Token von V4-Pro betragen nur 27% von V3.2, der KV-Cache nur 10%
- V4-Flash ist noch extremer und reduziert diese Metriken auf jeweils 10% und 7%

Das bedeutet, dass sich die Kontextlänge von 128K bei V3.2 auf 1M bei V4 fast verachtfacht hat, die Rechenanforderungen pro Token jedoch tatsächlich deutlich gesunken sind, was sowohl bei der Langkontextfähigkeit als auch bei der Inferenzeffizienz einen Durchbruch erreicht.

DeepSeek-Vertreter stellen klar, dass V4 Preview als Infrastruktur-Update positioniert ist, das primär die Kostenstruktur für Langkontexte neu aufbaut, um den Weg für die nächste Stufe der Testzeit-Skalierung und Langstreckenaufgaben zu ebnen. Das derzeitige Leistungsniveau liegt immer noch hinter GPT-5.4 und Gemini-3.1-Pro zurück, mit einer Entwicklungstrajektorie, die etwa 3-6 Monate hinter den modernsten Closed-Source-Modellen liegt.

## 2. Zwei Modelle, drei Inferenzmodi: Kernmerkmale von V4

### 2.1 Modellparameter und Kostenvorteile

Das größte Highlight der V4-Serie ist die signifikante Optimierung der Kostenkurve. Unter 1M-Token-Kontexteinstellungen:
- V4-Pro: Inferenz-FLOPs pro Token betragen nur 27% von V3.2, KV-Cache nur 10%
- V4-Flash: Inferenz-FLOPs pro Token betragen nur 10% von V3.2, KV-Cache nur 7%

Diese Effizienzsteigerung reduziert die Inferenzkosten für Millionen-Level-Kontexte drastisch und bietet eine wirtschaftlich tragfähige Lösung für Szenarien wie Langtextverarbeitung und Dokumentenanalyse.

### 2.2 API-Preissystem

DeepSeek setzt seine bewährte High-Value-Preisstrategie fort:
- **V4-Pro**: ¥1 pro Million Eingabe-Token (Cache-Treffer) oder ¥12 (Cache-Fehler), ¥24 pro Million Ausgabe-Token
- **V4-Flash**: ¥0,2 pro Million Eingabe-Token (Cache-Treffer) oder ¥1 (Cache-Fehler), ¥2 pro Million Ausgabe-Token

### 2.3 Drei Inferenzintensitätsstufen

Jedes Modell bietet drei Inferenzmodi für unterschiedliche Szenarioanforderungen:
1. **Non-think**: Direktausgabemodus, schnellste Antwortgeschwindigkeit
2. **Think High**: Regulärer Tiefdenkmodus, Balance zwischen Geschwindigkeit und Qualität
3. **Think Max**: Injiziert starke Anweisungen, maximiert Kontext und Ausgabelänge, entfesselt die volle Leistungsfähigkeit des Modells

Der Max-Modus verbessert die Modellleistung erheblich: V4-Pro-Max-Scores steigen in HLE-Tests von 34,5 auf 37,7 und in Apex-Shortlist-Tests von 85,5 auf 90,2, auf Kosten einer Verdopplung der Ausgabe-Token-Anzahl.

## 3. Benchmark-Testleistung

Laut den offiziellen Testdaten, die von DeepSeek veröffentlicht wurden, schneidet die V4-Serie in mehreren Bewertungen hervorragend ab:

### 3.1 Wissens- und Reasoning-Tests
- DeepSeek-V4-Pro-Max belegt den ersten Platz bei Apex Shortlist (90,2%) und Codeforces (Bewertung 3206), zwei anspruchsvollen Reasoning-/Programmieraufgaben, und demonstriert extrem starke Logik- und Algorithmusfähigkeiten
- Gemini-3.1-Pro-High führt bei SimpleQA Verified (75,6%)
- Claude und GPT haben ihre jeweiligen Stärken in verschiedenen Projekten, mit insgesamt geringen Unterschieden

### 3.2 Agent-Fähigkeitstests
- Alle vier Modelle schneiden bei SWE Verified-Aufgaben gleich gut ab (alle erreichen 80,6%)
- DeepSeek glänzt bei Terminal Bench 2.0 (67,9%) und Toolathlon (51,8%) und demonstriert klare Vorteile in Szenarien mit komplexer Anweisungsausführung und Tool-Aufruf

Offizielle Vertreter erklären, dass die Agent-Fähigkeiten von DeepSeek-V4-Pro im Vergleich zu früheren Generationen deutlich verbessert wurden und "ein besseres Benutzererlebnis als Sonnet 4.5 bieten, mit einer Auslieferungsqualität nahe dem Opus 4.6 Non-Thinking-Modus, obwohl sie dem Opus 4.6 Thinking-Modus noch in gewissem Maße hinterherhinken."

### 3.3 Weltwissen und allgemeine Fähigkeiten
- V4-Pro übertrifft andere Open-Source-Modelle bei Weltwissensbewertungen deutlich und hinkt dem führenden Closed-Source-Modell Gemini-Pro-3.1 nur geringfügig hinterher
- In Mathematik, STEM und Competitive-Code-Bewertungen übertrifft V4-Pro alle derzeit öffentlich bewerteten Open-Source-Modelle und erreicht das Niveau der weltweit führenden Closed-Source-Modelle
- Als wirtschaftliches Modell hat V4-Flash einen etwas geringeren Wissensschatz als die Pro-Version, aber ähnliche Reasoning-Fähigkeiten. Mit kleineren Parametern und Aktivierungswerten bietet es schnellere, kostengünstigere API-Dienste
- Bei Agent-Bewertungen schneidet V4-Flash bei einfachen Aufgaben vergleichbar mit der Pro-Version ab, weist aber bei hochschwierigen Aufgaben noch Lücken auf

## 4. Kerntechnologische Innovation: Neuschreiben des Attention-Mechanismus

Die wichtigste technische Änderung von V4 liegt auf der Attention-Ebene und löst grundlegend das Effizienzproblem der Langkontext-Inferenz.

Bei traditionellen Transformer-Attention-Mechanismen muss jedes Token die Ähnlichkeit mit allen vorherigen Token berechnen. Wenn sich der Kontext von 100K auf 1M erweitert, steigen die Rechenkosten um das 100-fache, was der Hauptengpass ist, der die breite Einführung von Langkontexten verhindert.

V4 verwendet einen innovativen dualen Attention-Mechanismus mit alternierenden Schichten:
1. **CSA (Compressed Sparse Attention)**: Fasst zunächst den KV-Cache für alle 4 Token zu einer einzigen Zusammenfassung zusammen, erlaubt dann jeder Abfrage, nur die relevantesten top-k Zusammenfassungen für die Attention-Berechnung auszuwählen, komprimiert den zu verarbeitenden Inhalt und konzentriert sich nur auf relevante Informationen
2. **HCA (Heavy Compressed Attention)**: Verwendet eine aggressivere Komprimierung, fasst alle 128 Token zu einer Zusammenfassung zusammen und wendet dann dichte Attention auf die verbleibenden Zusammenfassungen ohne Sparse-Auswahl an

Die beiden Attention-Mechanismen alternieren und stapeln sich, kombiniert mit einem Sliding-Window-Zweig, der detaillierte Abhängigkeiten zwischen nahegelegenen Token verarbeitet, und bilden einen kombinierten Ansatz aus "grobkörnig + feinkörnig, spärlich + dicht".

Aus der Perspektive der technologischen Evolution folgten DeepSeek V2 und V3 hauptsächlich dem Pfad der Parameter-Sparsifizierung (große Gesamtparameter, aber Aktivierung nur partieller Experten pro Token). V4 eröffnet auf dieser Basis einen neuen Pfad der Kontext-Sparsifizierung (KV-Komprimierung, top-k-Auswahl, geschichtete Komprimierungsraten). Dies ist das erste Mal, dass DeepSeek das Konzept der "Sparsifizierung" auf die Kernstruktur von Transformer angewendet hat.

Neben der Attention-Ebene gibt es in V4 zwei weitere wichtige architektonische Verbesserungen:
1. Aktualisierung traditioneller Residualverbindungen auf mHC (Manifold Constrained Hyperconnection), die die Vorwärts- und Rückwärtsausbreitung tiefer Netzwerke durch mathematische Beschränkungen stabiler machen
2. Ersetzen von AdamW durch den Muon-Optimierer für die meisten Module, um schnellere Konvergenz und stabilere Schulung zu erreichen

Dies ist das erste Mal, dass DeepSeek gleichzeitig drei Kernkomponenten von Transformer modifiziert hat: Attention, Residualverbindungen und Optimierer.

## 5. Innovation im Post-Training-Paradigma: Expertenmodell-Distillation

Im Vergleich zu Architekturänderungen ist die Innovation von V4 bei Post-Training-Methoden noch bemerkenswerter.

V3.2 verwendete einen "Mixed-RL"-Ansatz, der gleichzeitig mehrere Ziele mit Reinforcement Learning optimierte. V4 verfolgt eine zweistufige "Differenzieren dann Vereinigen"-Strategie:
1. **Differenzierungsphase**: Für verschiedene Domänen wie Mathematik, Code, Agent und Anweisungsbefolgung wird für jede Domäne ein separater Experte trainiert. Diese Experten durchlaufen zunächst ein überwachtes Feintuning mit hochwertigen Domänendaten, dann Reinforcement Learning mit dem GRPO-Algorithmus, wobei jeder Experte optimale Leistung in seinem Spezialgebiet erreicht
2. **Vereinigungsphase**: Verwendet die On-Policy Distillation (OPD)-Methode, um mehr als zehn Domänenexperten zurück in ein einheitliches Schülermodell zu "synthetisieren". Nachdem der Schüler eine Antwort generiert hat, passt sie die Ausgabeverteilung des Experten an, der "dieses Problem am besten versteht", und absorbiert Expertenfähigkeiten durch Logit-Level-Alignment

Dieser Ansatz kann als Destillation der Fähigkeiten mehrerer Domänen-"Spitzenschüler" in ein einziges Modell verstanden werden. Um die Herausforderung des gleichzeitigen Ladens von mehr als zehn Billionen-Parameter-Lehrermodellen zu lösen, entlädt DeepSeek alle Lehrergewichte in den verteilten Speicher und cached nur den Hidden State der letzten Schicht jedes Lehrers. Während des Trainings werden die Samples nach Lehrerindex sortiert, um sicherzustellen, dass sich zu jedem Zeitpunkt nur ein Lehrer-Head im GPU-Speicher befindet.

Dieser Ansatz vermeidet das bei traditionellem "Mixed-RL" häufige Problem der Fähigkeitsinterferenz und ermöglicht es dem Modell, Top-Level-Leistung in mehreren Domänen zu erreichen.

## 6. Spezialoptimierung der Agent-Fähigkeiten

DeepSeek V4 enthält spezialisierte Anpassungen und Optimierungen für Mainstream-Agent-Produkte mit verbesserter Leistung in Codeszenarien, Dokumentengenerierung und anderen Anwendungsfällen.

Die speziellen Optimierungen von V4 für Agent-Fähigkeiten umfassen:
1. Während des Post-Trainings wird Agent als unabhängige Expertenrichtung neben Mathematik und Code behandelt, mit separatem Training
2. Das Tool-Calling-Format wurde von JSON in eine XML-Struktur mit Spezialtoken geändert, was Escape-Fehlerraten reduziert
3. Cross-Turn-Reasoning-Spuren werden in Tool-Calling-Szenarien vollständig beibehalten und nicht mehr wie bei V3.2 jeden Turn gelöscht
4. Selbstgebaute DSec-Sandbox-Plattform, bei der ein einzelner Cluster gleichzeitig Hunderttausende von Sandbox-Instanzen verwalten kann und Agent-Reinforcement-Learning-Training und -Evaluierung unterstützt

Offizielle Vertreter erklären, dass die Agent-Fähigkeiten von V4-Pro "besser als Sonnet 4.5 sind, mit einer Auslieferungsqualität nahe dem Opus 4.5 Non-Thinking-Modus, obwohl sie dem Opus 4.6 Thinking-Modus noch in gewissem Maße hinterherhinken."

![DeepSeek V4 Technische Architektur](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Zusammenfassung

DeepSeek V4 Preview ist ein großes Modell mit herausragenden technologischen Innovationen. Durch den Wiederaufbau des Attention-Mechanismus und die Innovation im Schulungsparadigma behält es starke Reasoning-Fähigkeiten bei und reduziert gleichzeitig die Langkontext-Inferenzkosten drastisch, was den Weg für praktische Anwendungen von Millionen-Level-Kontexten ebnet.

Ob für professionelle Szenarien, die starke Reasoning-Fähigkeiten erfordern, oder für groß angelegte Anwendungen, die Kosteneffizienz anstreben, die V4-Serie bietet passende Optionen. Wenn Sie die leistungsstarken Fähigkeiten von DeepSeek V4 erleben möchten, nutzen Sie sie direkt über unsere Plattform.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/de/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    DeepSeek jetzt nutzen
  </a>
</div>