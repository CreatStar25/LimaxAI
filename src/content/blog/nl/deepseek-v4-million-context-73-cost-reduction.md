---
title: "DeepSeek V4: 1M-tokencontext, 73% kostenverlaging"
description: "De modellen van de DeepSeek V4-serie zijn officieel uitgebracht, ondersteunen een context van 1 miljoen tokens, met een inferentiekostenverlaging van 73% ten opzichte van de vorige generatie. Bevat Pro- en Flash-versies, die hoogwaardige, kosteneffectieve grote modelopties bieden voor AI-ontwikkelaars."
tags: ["deepseek v4", "officiële website van deepseek", "deepseek tutorial", "prijs van deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "nl"
author: "DeepSeek HK"
---

Trefwoorden: deepseek v4, officiële website van deepseek, deepseek tutorial, prijs van deepseek v4

Publicatiedatum: 24 april 2026

Auteur: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/nl/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Begin met DeepSeek
  </a>
</div>

![DeepSeek V4: 1M-tokencontext, 73% kostenverlaging](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Vandaag heeft DeepSeek officieel de lancering en open source van de previewversie van de DeepSeek-V4-serie aangekondigd, het vlaggenschipmodelsysteem van de volgende generatie na V3.2. Deze release omvat twee modellen: DeepSeek-V4-Pro en DeepSeek-V4-Flash, beide gebruiken de MoE-architectuur met totale parameterschalen van respectievelijk 1,6T (49B geactiveerd) en 284B (13B geactiveerd), en beide ondersteunen een maximale context van 1 miljoen tokens.

DeepSeek heeft ook aangegeven dat, beperkt door high-end rekenkracht, de huidige service-doorvoer van DeepSeek-V4-Pro zeer beperkt is. Er wordt verwacht dat na de massale lancering van Ascend 950 supernodes in de tweede helft van het jaar, de prijs aanzienlijk zal dalen. Daarnaast heeft DeepSeek-V4 de Day 0-ondersteuning van Cambricon ontvangen, en de bijbehorende aanpassingscode is open source gemaakt naar de GitHub-gemeenschap.

## Verschillen in modelleringspositie
DeepSeek-V4-Pro richt zich op de prestatiegrens, vergelijkbaar met closed-source vlaggenschipmodellen; terwijl DeepSeek-V4-Flash de parameterschaal en activeringsschaal aanzienlijk verlaagt in ruil voor lagere latentie en lagere kosten. Vergeleken met het model van de vorige generatie is het verder verbeterd in agentmogelijkheden, wereldkennis en complexe redeneertaken, en voor het eerst is de "context van 1 miljoen tokens" geopend als standaardmogelijkheid.

### Aanzienlijk verbeterde agentmogelijkheden
Wat betreft agentmogelijkheden zijn de agentmogelijkheden van DeepSeek-V4-Pro aanzienlijk verbeterd. Het is de eerste tier van open source binnengekomen in evaluaties zoals agentische codering. Interne evaluaties tonen aan dat de leveringskwaliteit dicht bij de niet-denkende modus van Claude Opus 4.6 ligt, maar er is nog steeds een kloof in vergelijking met de denkende modus.

DeepSeek-V4-Pro heeft de momenteel openbaar geëvalueerde open-source modellen overtroffen in hoogmoeilijke taken zoals wiskunde, STEM en wedstrijdcode, en de algemene prestaties liggen dicht bij of zelfs vergelijkbaar met top closed-source modellen zoals GPT-5.4 en Claude Opus 4.6-Max.

### Aanzienlijk verlaagde kosten voor lange context
Tegelijkertijd heeft DeepSeek-V4 een reeks radicalere optimalisaties geïntroduceerd op het gebied van lange contextefficiëntie: in scenario's met 1 miljoen tokens bedraagt de inferentieberekening per token slechts 27% van die van V3.2, en het gebruik van KV-cache is teruggebracht tot ongeveer 10%, waardoor de kosten voor rekenkracht en videogeheugen van langelinktaken aanzienlijk worden verlaagd.

## API-prijsplan
De officieel aangekondigde API-prijzen voor de DeepSeek-V4-serie:
- DeepSeek-V4-Pro: 1 yuan / miljoen tokens voor gecachte invoer, 12 yuan / miljoen tokens voor niet-gecachte invoer, 24 yuan / miljoen tokens voor uitvoer
- DeepSeek-V4-Flash: slechts 0,2 yuan / miljoen tokens voor gecachte invoer, 1 yuan / miljoen tokens voor niet-gecachte invoer, 2 yuan / miljoen tokens voor uitvoer

Momenteel is de DeepSeek-V4-serie gelanceerd op de officiële website en app, en API's en modelgewichten worden gelijktijdig geopend.

## Praktische ervaring: Uitgebreide verbetering van mogelijkheden
We hebben de wijzigingen van DeepSeek-V4 aanvankelijk ervaren, voornamelijk het testen van het DeepSeek-V4-Pro-model.

### Aanzienlijk verbeterde agentische programmeercapaciteit
In het geval van front-end web eenmalige ontwikkeling vertoonde DeepSeek-V4-Pro een hoge uitvoeringsefficiëntie. Omdat de vereisten niet complex waren, duurde het model slechts 5 seconden om na te denken, daarna ontwikkelde het snel, wat aanzienlijk verschilt van het patroon van eerdere DeepSeek-modellen die veel tokens verspillen aan nadenken. Na binnenkomst in het daadwerkelijke generatieproces is de uitvoerlengte van DeepSeek-V4-Pro aanzienlijk langer dan die van andere DeepSeek-modellen, met een snelle generatiesnelheid, die in principe wordt uitgevoerd in eenheden van 5 coderegels, en de voltooiingsgraad van de webpagina is hoger dan die van DeepSeek-V3.2, met een rijker ontwerp.

Bij de taaktest die agentmogelijkheden en programmeren combineert, kan DeepSeek-V4-Pro complexe meerstaps toolaanroepen uitvoeren, en het aantal online zoekopdrachten is ook toegenomen in vergelijking met eerdere modellen, en de informatieverzameling is uitgebreider. Het uiteindelijk gegenereerde reisschema is redelijk gepland en bevat de locatie van elke toeristische attractie, die direct kan worden gebruikt in de navigatie-app na te klikken, wat erg handig is. Bij agenttaken kan worden waargenomen dat zijn acties zeer vastberaden zijn, toolaanroepen en nadenken worden binnen enkele seconden opgelost, en de tokenefficiëntie is goed.

### Praktische test van 1M-tokencontext
De modellen van de DeepSeek-V4-serie ondersteunen een context van 1 miljoen tokens. We hebben de complete trilogie van "De Drie Lichamen" (in totaal ongeveer 540.000 tokens) geüpload voor testen, en het model kan de opgegeven inhoud snel lokaliseren, waardoor het ophalen van informatie in zeer lange teksten met succes wordt gerealiseerd.

De test van de kennisafsnijdatum laat zien dat de kennisafsnijdatum van DeepSeek-V4-Pro nog steeds in 2025 ligt. Daarnaast ondersteunt dit model voorlopig geen visuele mogelijkheden. Na het uploaden van afbeeldingen zal het nog steeds tekstextractie uitvoeren, en afbeeldingen zonder tekst zullen aangeven dat ze niet kunnen worden verwerkt.

## Innovatie in technische architectuur
De meest directe verandering van deze V4-generatie is dat "lange context" een standaardmogelijkheid is geworden. In tegenstelling tot de traditionele methode om eenvoudigweg het venster uit te breiden, introduceert DeepSeek-V4-Pro een nieuwe hybride aandachtsarchitectuur, die gecomprimeerde schaarse aandacht combineert met hoogcompressie-aandacht (HCA), en samenwerkt met DSA schaarse aandacht om te comprimeren in de tokendimensie.

Daarnaast introduceert het model een op manifold gebaseerde beperkte hyperverbinding (mHC) om traditionele resterende verbindingen te verbeteren, en gebruikt het de Muon-optimizer om de convergentiesnelheid en trainingsstabiliteit te verbeteren. Deze reeks ontwerpen stelt het model in staat om de berekeningskosten effectief te beheersen terwijl het "langer onthoudt".

Volgens officiële gegevens is in een context van 1 miljoen tokens de inferentie-TFLOP per token van DeepSeek-V4-Pro met ongeveer 3,7 tot 9,8 keer gedaald in vergelijking met DeepSeek-V3.2, en het gebruik van KV-cache is met 9,5 tot 13,7 keer gedaald. Dit betekent dat zeer lange linktaken die in het verleden moeilijk daadwerkelijk konden worden uitgevoerd (zoals meerstaps agentplanning, verwerking van lange documenten) begonnen zijn binnen het uitvoerbare bereik te vallen.

## Prestaties: Nieuw plafond voor open-source modellen
Vanuit het oogpunt van de capaciteitsstructuur is de verbetering van DeepSeek-V4-Pro de gelijktijdige verbetering van redeneercapaciteiten, kennis en agentmogelijkheden:

### Kennis- en redeneercapaciteiten
Bij kennis- en redeneertaken overtreft het de huidige mainstream open-source modellen in evaluaties zoals SimpleQA, Apex en Codeforces, en ligt het in veel taken dicht bij GPT-5.4 en Gemini 3.1 Pro. Het behaalde bijvoorbeeld 90,2 punten in de Apex-Shortlist, waarmee het al de top closed-source modellen heeft overtroffen; het handhaaft ook het niveau van de eerste tier in wedstrijdtaken zoals Codeforces.

### Agentmogelijkheden
Bij taken die verband houden met agentmogelijkheden presteert DeepSeek-V4-Pro stabiel op indicatoren zoals SWE Verified en Terminal Bench. SWE Verified bereikt 80,6, dicht bij Claude Opus 4.6, aanzienlijk hoger dan de meeste open-source modellen. In Terminal Bench 2.0 overtreffen de prestaties ook modellen zoals GLM-5.1 Thinking en Kimi K2.6 Thinking.

Al met al is DeepSeek-V4-Pro momenteel het "plafond" van open-source modellen.

## Speciale optimalisatie voor agentscenario's
Deze generatie van DeepSeek-V4 versterkt de aanpassing aan agentscenario's aanzienlijk. Het heeft speciale optimalisaties uitgevoerd voor mainstream agentframeworks zoals Claude Code, OpenClaw en CodeBuddy, en presteert stabieler in meerstapstaken zoals codegeneratie en documentgeneratie.

Vanuit het oogpunt van praktische positionering wordt DeepSeek-V4-Pro al gebruikt als agentisch coderingsmodel binnen DeepSeek, met de focus op het "voltooien van taken". Voor eenvoudige taken ligt V4-Flash al dicht bij de Pro-versie, maar er is nog steeds een aanzienlijke kloof bij complexe taken, wat in wezen twee "rekenkrachtstanden" biedt voor agenttoepassingen.

## Conclusie
De release van DeepSeek-V4 toont niet alleen de accumulatie van het team op het gebied van technologie en architectuur, maar markeert ook de daadwerkelijke implementatiemogelijkheid van grote open-source modellen binnen het ecosysteem van binnenlandse rekenkracht. Na aanpassing en optimalisatie voor binnenlandse chips zoals Huawei Ascend en Cambricon heeft de DeepSeek-V4-serie stabiele ondersteuning en efficiënte inferentie bereikt voor een context van 1 miljoen tokens, waardoor langelinktaken en meerstaps agentuitvoering mogelijk worden.

Deze versie implementeert de gedifferentieerde positionering van Pro en Flash, nadert closed-source vlaggenschipmodellen op het gebied van prestaties en handhaaft een hoge kosteneffectiviteit op het gebied van kosten, waardoor ongekende open opties worden geboden aan binnenlandse ontwikkelaars. Wat nog belangrijker is, deze release laat zien dat open-source modellen niet alleen een stevige positie kunnen verwerven in de wereldwijde concurrentie, maar ook technisch potentieel kunnen omzetten in praktische productiviteit met behulp van binnenlandse rekenkracht en geoptimaliseerde architectuur.

DeepSeek-V4 zou een belangrijke stap kunnen zijn die de Chinese open-source kracht heeft gezet op het gebied van hoogwaardige AI, en het biedt ook duidelijke richtlijnen voor innovatie en implementatie van het binnenlandse AI-ecosysteem.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/nl/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Begin met DeepSeek
  </a>
</div>
