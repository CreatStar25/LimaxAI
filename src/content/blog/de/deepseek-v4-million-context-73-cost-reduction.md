---
title: "DeepSeek V4: 1M Token Kontext, 73% Kostenreduzierung"
description: "Die Modelle der DeepSeek V4-Serie wurden offiziell veröffentlicht, unterstützen einen Kontext von 1 Million Token und bieten im Vergleich zur Vorgängergeneration eine um 73% reduzierte Inferenzkosten. Die Serie umfasst Pro- und Flash-Versionen und bietet AI-Entwicklern leistungsstarke und kostengünstige Optionen für große Modelle."
tags: ["deepseek v4", "deepseek offizielle Website", "deepseek Tutorial", "deepseek v4 Preis"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "de"
author: "DeepSeek HK"
---

Schlüsselwörter: deepseek v4, deepseek offizielle Website, deepseek Tutorial, deepseek v4 Preis

Veröffentlichungsdatum: 24. April 2026

Autor: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/de/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    DeepSeek jetzt verwenden
  </a>
</div>

![DeepSeek V4: 1M Token Kontext, 73% Kostenreduzierung](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Heute hat DeepSeek offiziell die Vorschauversion der DeepSeek-V4-Serie veröffentlicht und quelloffen gemacht, das Flaggschiffmodellsystem der nächsten Generation nach V3.2. Diese Veröffentlichung umfasst zwei Modelle: DeepSeek-V4-Pro und DeepSeek-V4-Flash, beide basieren auf der MoE-Architektur mit insgesamt 1,6T Parametern (49B aktiviert) bzw. 284B Parametern (13B aktiviert) und unterstützen beide maximal 1 Million Token Kontext.

DeepSeek gab zudem an, dass der aktuelle Service-Durchsatz von DeepSeek-V4-Pro aufgrund der Begrenzung durch Hochleistungsrechenleistung sehr begrenzt ist. Es wird erwartet, dass nach der Masseneinführung von Ascend 950 Superknoten in der zweiten Jahreshälfte der Preis deutlich sinken wird. Darüber hinaus hat DeepSeek-V4 die Cambricon Day 0 Adaptionsunterstützung erhalten und der entsprechende Adaptionscode wurde quelloffen an die GitHub-Community weitergegeben.

## Unterschiede in der Modellpositionierung
DeepSeek-V4-Pro konzentriert sich auf die Leistungsgrenze und benchmarkt sich gegen geschlossene Flaggschiffmodelle; DeepSeek-V4-Flash reduziert hingegen die Parameter- und Aktivierungsgröße deutlich, um geringere Latenz und niedrigere Kosten zu erreichen. Im Vergleich zum Vorgängermodell wurden die Agentenfähigkeiten, das Weltwissen und die Leistung bei komplexen Schlussfolgerungsaufgaben weiter verbessert, und erstmals wurde der "1 Million Token Kontext" als Standardfunktion freigegeben.

### Deutlich verbesserte Agentenfähigkeiten
Im Bereich der Agentenfähigkeiten wurden die Agentenfähigkeiten von DeepSeek-V4-Pro deutlich verbessert. In Bewertungen wie Agentic Coding hat es die erste Liga der Open-Source-Modelle erreicht. Interne Bewertungen zeigen, dass die Lieferqualität nahe am nicht-denkenden Modus von Claude Opus 4.6 liegt, im Vergleich zum Denkmodus besteht jedoch noch eine Lücke.

DeepSeek-V4-Pro hat die derzeit öffentlich bewerteten Open-Source-Modelle bei schwierigen Aufgaben wie Mathematik, STEM und Wettbewerbscode übertroffen, und seine Gesamtleistung liegt nahe oder ist sogar vergleichbar mit Top-Modellen mit geschlossenem Quellcode wie GPT-5.4 und Claude Opus 4.6-Max.

### Deutlich reduzierte Kosten für langen Kontext
Gleichzeitig hat DeepSeek-V4 eine Reihe radikalerer Optimierungen für die Effizienz von langen Kontexten eingeführt: In Szenarien mit 1 Million Token beträgt die Inferenzberechnung pro Token nur 27% von V3.2, und die KV-Cache-Nutzung wurde auf ca. 10% reduziert, was die Rechen- und Videospeicherkosten von Langzeitaufgaben deutlich senkt.

## API-Preisplan
Die offiziell angekündigten API-Preise für die DeepSeek-V4-Serie:
- DeepSeek-V4-Pro: 1 Yuan / Million Token für zwischengespeicherte Eingaben, 12 Yuan / Million Token für nicht zwischengespeicherte Eingaben, 24 Yuan / Million Token für Ausgaben
- DeepSeek-V4-Flash: Nur 0,2 Yuan / Million Token für zwischengespeicherte Eingaben, 1 Yuan / Million Token für nicht zwischengespeicherte Eingaben, 2 Yuan / Million Token für Ausgaben

Derzeit wurde die DeepSeek-V4-Serie auf der offiziellen Website und in der App eingeführt, und APIs sowie Modellgewichte werden gleichzeitig freigegeben.

## Praktische Erfahrung: Umfassende Leistungssteigerung
Wir haben die Änderungen von DeepSeek-V4 erstmals getestet, wobei wir hauptsächlich das DeepSeek-V4-Pro-Modell untersucht haben.

### Deutlich verbesserte Agentische Programmierfähigkeit
Bei der Frontend-Web-Ein-Schuss-Anwendung zeigte DeepSeek-V4-Pro hohe Ausführungseffizienz. Da die Anforderungen nicht komplex waren, benötigte das Modell nur 5 Sekunden zum Denken und entwickelte dann schnell, was sich deutlich von dem Muster früherer DeepSeek-Modelle unterscheidet, bei dem viele Token für das Denken verschwendet werden. Nach dem Eintritt in den eigentlichen Generierungsprozess ist die Ausgabelänge von DeepSeek-V4-Pro deutlich länger als bei anderen DeepSeek-Modellen, mit schneller Generierungsgeschwindigkeit, wobei im Grunde genommen Blöcke von 5 Codezeilen ausgegeben werden. Der Fertigstellungsgrad der Webseite ist höher als bei DeepSeek-V3.2, mit reichhaltigerem Design.

Bei Aufgabentests, die Agentenfähigkeiten und Programmierung kombinieren, kann DeepSeek-V4-Pro komplexe mehrstufige Toolaufrufe durchführen, und die Anzahl der Online-Sucheinträge hat im Vergleich zu früheren Modellen zugenommen, sodass die Informationssammlung umfassender ist. Der endgültig generierte Reiseplan ist vernünftig geplant und mit dem Standort jeder Sehenswürdigkeit ausgestattet, der nach dem Klicken direkt in der Navigations-App verwendet werden kann, was sehr praktisch ist. Bei Agentenaufgaben ist zu beobachten, dass seine Aktionen sehr entschlossen sind, Toolaufrufe und Denken werden innerhalb weniger Sekunden erledigt, und die Token-Effizienz ist gut.

### Praxistest für 1M Token Kontext
Die Modelle der DeepSeek-V4-Serie unterstützen einen Kontext von 1 Million Token. Wir haben die komplette "Drei Körper"-Trilogie (insgesamt ca. 540.000 Token) hochgeladen und getestet, wobei das Modell den angegebenen Inhalt schnell lokalisieren konnte und erfolgreich die Informationssuche in ultralangen Texten realisierte.

Der Test zum Wissenscutoff-Datum zeigt, dass das Wissenscutoff-Datum von DeepSeek-V4-Pro noch im Jahr 2025 liegt. Darüber hinaus unterstützt dieses Modell vorübergehend keine visuellen Fähigkeiten. Nach dem Hochladen von Bildern wird weiterhin eine Textextraktion durchgeführt, und bei Bildern ohne Text wird angezeigt, dass sie nicht verarbeitet werden können.

## Innovation der technischen Architektur
Die direkteste Änderung bei dieser V4-Generation ist, dass "langer Kontext" zu einer Standardfunktion geworden ist. Anders als die traditionelle Methode der einfachen Erweiterung des Fensters führt DeepSeek-V4-Pro eine neue hybride Aufmerksamkeitsarchitektur ein, die Compressed Sparse Attention mit High Compression Attention (HCA) kombiniert und zusammen mit DSA Sparse Attention in der Token-Dimension komprimiert.

Darüber hinaus führt das Modell eine manifold begrenzte Hyperverbindung (mHC) ein, um traditionelle Restverbindungen zu verbessern, und verwendet den Muon-Optimierer, um die Konvergenzgeschwindigkeit und Trainingsstabilität zu verbessern. Diese Reihe von Konstruktionen ermöglicht es dem Modell, die Rechenkosten effektiv zu kontrollieren, während es "sich länger erinnert".

Laut offiziellen Daten sank die TFLOP-Zahl pro Token-Inferenz von DeepSeek-V4-Pro bei einem Kontext von 1 Million Token im Vergleich zu DeepSeek-V3.2 um ca. 3,7- bis 9,8-fach, und die KV-Cache-Nutzung sank um das 9,5- bis 13,7-fache. Dies bedeutet, dass ultralange Aufgaben, die in der Vergangenheit kaum praktisch ausgeführt werden konnten (wie mehrstufige Agentenplanung, lange Dokumentenverarbeitung), jetzt zunehmend im ausführbaren Bereich liegen.

## Leistung: Neue Obergrenze für Open-Source-Modelle
Aus Sicht der Fähigkeitsstruktur ist die Verbesserung von DeepSeek-V4-Pro die gleichzeitige Verbesserung der Schlussfolgerungs-, Wissens- und Agentenfähigkeiten:

### Wissens- und Schlussfolgerungsfähigkeiten
Bei Wissens- und Schlussfolgerungsaufgaben übertrifft es die aktuellen gängigen Open-Source-Modelle in Bewertungen wie SimpleQA, Apex und Codeforces und liegt bei vielen Aufgaben nahe an GPT-5.4 und Gemini 3.1 Pro. Beispielsweise erzielte es 90,2 Punkte in der Apex Shortlist und hat damit bereits Top-Modelle mit geschlossenem Quellcode übertroffen; auch bei Wettbewerbsaufgaben wie Codeforces hält es das Niveau der ersten Liga.

### Agentenfähigkeiten
Bei Aufgaben im Zusammenhang mit Agentenfähigkeiten zeigt DeepSeek-V4-Pro stabile Leistung bei Indikatoren wie SWE Verified und Terminal Bench. SWE Verified erreicht 80,6, nahe an Claude Opus 4.6, deutlich höher als die meisten Open-Source-Modelle. Bei Terminal Bench 2.0 übertrifft seine Leistung auch Modelle wie GLM-5.1 Thinking und Kimi K2.6 Thinking.

Insgesamt ist DeepSeek-V4-Pro derzeit die "Obergrenze" von Open-Source-Modellen.

## Spezielle Optimierung für Agentenszenarien
Diese Generation von DeepSeek-V4 stärkt deutlich die Anpassung an Agentenszenarien. Es wurden spezielle Optimierungen für gängige Agentenframeworks wie Claude Code, OpenClaw und CodeBuddy durchgeführt, sodass es bei mehrstufigen Aufgaben wie Codegenerierung und Dokumentgenerierung stabiler arbeitet.

Aus der tatsächlichen Positionierung wird DeepSeek-V4-Pro bereits innerhalb von DeepSeek als Agentic Coding-Modell verwendet, das sich auf die "Aufgabenerfüllung" konzentriert. Bei einfachen Aufgaben ist V4-Flash bereits nahe an der Pro-Version, bei komplexen Aufgaben besteht jedoch noch eine deutliche Lücke, was im Grunde zwei "Rechenleistungsstufen" für Agentenanwendungen bietet.

## Fazit
Die Veröffentlichung von DeepSeek-V4 zeigt nicht nur die Akkumulation des Teams in Technologie und Architektur, sondern markiert auch die tatsächliche Implementierungsfähigkeit von quelloffenen großen Modellen im Ökosystem der heimischen Rechenleistung. Nach Anpassung und Optimierung für heimische Chips wie Huawei Ascend und Cambricon hat die DeepSeek-V4-Serie eine stabile Unterstützung und effiziente Inferenz für einen Kontext von 1 Million Token erreicht, sodass Langzeitaufgaben und mehrstufige Agentenausführung möglich werden.

Diese Version implementiert die unterschiedliche Positionierung von Pro und Flash, nähert sich in der Leistung geschlossenen Flaggschiffmodellen an und behält eine hohe Kosteneffizienz bei, wodurch heimischen Entwicklern beispiellose offene Optionen geboten werden. Noch wichtiger ist, dass diese Veröffentlichung zeigt, dass quelloffene Modelle nicht nur in der globalen Konkurrenz Fuß fassen können, sondern auch technisches Potenzial mit Hilfe der heimischen Rechenleistung und optimierter Architektur in praktische Produktivität umwandeln können.

DeepSeek-V4 könnte ein wichtiger Schritt der chinesischen Open-Source-Community im Hochleistungs-AI-Bereich sein und zudem klare Orientierung für Innovation und Implementierung des heimischen KI-Ökosystems bieten.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/de/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    DeepSeek jetzt verwenden
  </a>
</div>
