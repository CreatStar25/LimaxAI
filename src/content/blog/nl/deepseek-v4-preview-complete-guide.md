---
title: "Na 15 maanden wachten onthult DeepSeek eindelijk V4 Preview: uitgebreide analyse"
description: "DeepSeek V4 Preview is officieel uitgebracht, met twee MoE-modellen (Pro en Flash) met native ondersteuning voor een context van 1 miljoen tokens, die aanzienlijke prestatieverbeteringen biedt en de inferentiekosten drastisch verlaagt. Dit artikel biedt een gedetailleerde uitsplitsing van de technische architectuur, prestaties en prijzen van DeepSeek V4."
tags: ["deepseek v4", "officiële website van deepseek", "deepseek tutorial", "prijs van deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "nl"
author: "DeepSeek HK"
---

Dit artikel verkent de technische kenmerken, prestaties en gebruiksrichtlijnen van DeepSeek V4, en biedt een uitgebreide analyse van de kernvoordelen van dit nieuwe generatie grote taalmodel. De inhoud is geschreven in een toegankelijke stijl die geschikt is voor zowel techliefhebbers als ontwikkelaars.

Trefwoorden: deepseek v4, officiële website van deepseek, deepseek tutorial, prijs van deepseek v4.

Publicatiedatum: 25 april 2026
Auteur: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/nl/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Begin met DeepSeek
  </a>
</div>

![DeepSeek V4 Preview uitgebreide analyse](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview officieel gelanceerd

Op 24 april kondigde DeepSeek officieel de lancering van V4 Preview aan. Deze belangrijke update komt 15 maanden na de release van V3.2, en markeert nog een belangrijke doorbraak in de technologische routekaart van DeepSeek voor grote modellen.

Volgens de officiële introductie omvat de V4-serie twee MoE-modellen:
- **DeepSeek-V4-Pro**: 1,6T totale parameters, 49B geactiveerde parameters
- **DeepSeek-V4-Flash**: 284B totale parameters, 13B geactiveerde parameters

Beide modellen ondersteunen native een context van 1 miljoen tokens, wat een kwalitatieve sprong vertegenwoordigt in mogelijkheden voor lange tekstverwerking. Opvallend is dat onder 1M-contextinstellingen:
- De per-token inferentie-FLOPs van V4-Pro slechts 27% van V3.2 zijn, met KV Cache op slechts 10%
- V4-Flash is nog extremer en reduceert deze metrics respectievelijk tot 10% en 7%

Dit betekent dat, hoewel de contextlengte bijna 8 keer is uitgebreid van 128K van V3.2 naar 1M van V4, de computervereisten per token daadwerkelijk significant zijn afgenomen, waarbij zowel lange-contextmogelijkheden als doorbraken in inferentie-efficiëntie worden bereikt.

DeepSeek-functionarissen stellen duidelijk dat V4 Preview is gepositioneerd als een infrastructuurupdate, voornamelijk om de kostenstructuur voor lange context te herstructureren en de weg te vrijmaken voor de volgende fase van test-time scaling en taken op lange afstand. Het huidige capaciteitsniveau ligt nog steeds achter op GPT-5.4 en Gemini-3.1-Pro, met een ontwikkelingstraject dat ongeveer 3-6 maanden achterloopt op de meest geavanceerde closed-source modellen.

## 2. Twee modellen, drie inferentiemodi: kernfuncties van V4

### 2.1 Modelparameters en kostenvoordelen

Het grootste hoogtepunt van de V4-serie is de significante optimalisatie van de kostencurve. Onder instellingen van 1 miljoen tokens context:
- V4-Pro: Per-token inferentie-FLOPs zijn slechts 27% van V3.2, KV Cache slechts 10%
- V4-Flash: Per-token inferentie-FLOPs zijn slechts 10% van V3.2, KV Cache slechts 7%

Deze efficiëntieverbetering verlaagt de inferentiekosten voor miljoenen-niveau context drastisch, en biedt een economisch haalbare oplossing voor lange tekstverwerking, documentanalyse en andere scenario's.

### 2.2 API-prijssysteem

DeepSeek zet zijn consistente prijsstrategie voor hoge waarde voort:
- **V4-Pro**: ¥1 per miljoen invoertokens (cache hit) of ¥12 (cache miss), ¥24 per miljoen uitvoertokens
- **V4-Flash**: ¥0,2 per miljoen invoertokens (cache hit) of ¥1 (cache miss), ¥2 per miljoen uitvoertokens

### 2.3 Drie inferentie-intensiteitsniveaus

Elk model biedt drie inferentiemodi om aan verschillende scenario-eisen te voldoen:
1. **Non-think**: Directe uitvoermodus, snelste responssnelheid
2. **Think High**: Normale diepgaande denkmodus, balans tussen snelheid en kwaliteit
3. **Think Max**: Injecteert sterke instructies, maximaliseert context en uitvoerlengte, ontketent de volledige mogelijkheden van het model

De Max-modus verbetert de modelprestaties aanzienlijk: V4-Pro-Max-scores stijgen van 34,5 naar 37,7 in HLE-tests, en van 85,5 naar 90,2 in Apex Shortlist-tests, ten koste van een verdubbeling van het aantal uitvoertokens.

## 3. Benchmarktestprestaties

Volgens officiële testgegevens die door DeepSeek zijn vrijgegeven, presteert de V4-serie uitstekend in meerdere evaluaties:

### 3.1 Kennis- en redeneertests
- DeepSeek-V4-Pro-Max staat op de eerste plaats in Apex Shortlist (90,2%) en Codeforces (Rating 3206), twee hardcore redeneer-/programmeertaken, wat extreem sterke logische en algoritmische mogelijkheden aantoont
- Gemini-3.1-Pro-High leidt in SimpleQA Verified (75,6%)
- Claude en GPT hebben hun respectieve sterke punten in verschillende projecten, met over het algemeen kleine gaten

### 3.2 Agentmogelijkheidentests
- Alle vier modellen presteren gelijk in SWE Verified-taken (allemaal 80,6% bereikend)
- DeepSeek blinkt uit in Terminal Bench 2.0 (67,9%) en Toolathlon (51,8%), wat duidelijke voordelen laat zien in scenario's voor complexe instructie-uitvoering en toolaanroep

Functionarissen stellen dat de agentmogelijkheden van DeepSeek-V4-Pro significant zijn verbeterd in vergelijking met eerdere generaties, "een betere gebruikerservaring biedend dan Sonnet 4.5, met een leveringskwaliteit dicht bij de non-thinking modus van Opus 4.6, hoewel nog steeds in zekere mate achterlopend op de thinking modus van Opus 4.6."

### 3.3 Wereldkennis en algemene mogelijkheden
- V4-Pro presteert significant beter dan andere open-source modellen in wereldkennisevaluaties, slechts lichtjes achterop het top closed-source model Gemini-Pro-3.1
- In wiskunde, STEM en competitieve code-evaluaties, overtreft V4-Pro alle momenteel publiek geëvalueerde open-source modellen, en bereikt het niveau van 's werelds top closed-source modellen
- Als economisch model heeft V4-Flash een iets kleinere kennisreserve dan de Pro-versie, maar vergelijkbare redeneermogelijkheden. Met kleinere parameters en activeringswaarden biedt het snellere, kostenefficiëntere API-diensten
- In agentevaluaties presteert V4-Flash vergelijkbaar met de Pro-versie bij eenvoudige taken, maar zijn er nog steeds gaten bij taken met hoge moeilijkheidsgraad

## 4. Kerntechnologische innovatie: herschrijven van het attention-mechanisme

De meest kernachtige technische wijziging van V4 zit in de attention-laag, die fundamenteel het efficiëntieprobleem van lange-contextinferentie oplost.

In traditionele Transformer attention-mechanismen moet elk token de overeenkomst berekenen met alle voorgaande tokens. Wanneer de context uitbreidt van 100K naar 1M, neemt de computatiekosten 100 keer toe, wat de kernflessehals is die voorkomt dat lange context breed wordt toegepast.

V4 adopteert een innovatief dubbel attention-mechanisme met afwisselende lagen:
1. **CSA (Compressed Sparse Attention)**: Voegt eerst de KV-cache voor elke 4 tokens samen in één samenvatting, waarna elke query alleen de meest relevante top-k samenvattingen kan selecteren voor attention-berekening, waarbij zowel de te verwerken inhoud wordt gecomprimeerd als alleen op relevante informatie wordt gefocust
2. **HCA (Heavy Compressed Attention)**: Gebruikt agressievere compressie, waarbij elke 128 tokens worden samengevoegd tot één samenvatting, waarna dense attention wordt toegepast op de overgebleven samenvattingen zonder sparse selectie

De twee attention-mechanismen wisselen elkaar af en stapelen zich op, gecombineerd met een sliding-window-tak die detailafhankelijkheden tussen naburige tokens afhandelt, en vormen een gecombineerde aanpak van "grofkorrelig + fijnkorrelig, sparse + dense".

Vanuit het perspectief van technologische evolutie volgden DeepSeek V2 en V3 voornamelijk de route van parameter-sparsificatie (grote totale parameters maar slechts gedeeltelijke experts per token activeren). V4 opent een nieuw pad van context-sparsificatie (KV-compressie, top-k selectie, gelaagde compressieratio's) op basis hiervan. Dit is de eerste keer dat DeepSeek het concept van "sparsificatie" heeft toegepast op de kernstructuur van de Transformer.

Naast de attention-laag heeft V4 nog twee andere belangrijke architecturale verbeteringen:
1. Upgrade traditionele residuale verbindingen naar mHC (Manifold Constrained Hyperconnection), waardoor voorwaartse en achterwaartse propagatie van diepe netwerken stabieler worden door wiskundige beperkingen
2. Vervangt AdamW door de Muon-optimalisator voor de meeste modules, waardoor snellere convergentie en stabielere training wordt bereikt

Dit is de eerste keer dat DeepSeek gelijktijdig drie kernonderdelen van de Transformer heeft gewijzigd: attention, residuale verbindingen en optimalisator.

## 5. Post-training paradigma-innovatie: Expert Model Distillation

In vergelijking met architecturale veranderingen is de innovatie van V4 in post-training methoden nog opmerkelijker.

V3.2 gebruikte een "mixed RL"-aanpak, waarbij meerdere doelstellingen gelijktijdig werden geoptimaliseerd met reinforcement learning. V4 adopteert een twee-staps "differentieer dan verenig"-strategie:
1. **Differentiatiefase**: Voor verschillende domeinen zoals wiskunde, code, agent en instructievolging, wordt een apart expertmodel voor elk domein getraind. Deze experts ondergaan eerst supervised fine-tuning met hoogwaardige domeindata, gevolgd door reinforcement learning met het GRPO-algoritme, waarbij elke expert optimale prestaties behaalt in zijn gespecialiseerde domein
2. **Verenigingsfase**: Gebruikt de On-Policy Distillation (OPD)-methode om meer dan tien domeinexperts terug te "synthetiseren" in een uniform studentmodel. Nadat de student een antwoord genereert, stemt het overeen met de uitvoerverdeling van de expert die "dit probleem het beste begrijpt", en absorbeert expertmogelijkheden via logit-level uitlijning

Deze aanpak kan worden begrepen als het destilleren van de mogelijkheden van meerdere domein "topscholieren" in één model. Om de technische uitdaging van het gelijktijdig laden van meer dan tien triljoen-parameter teachermodellen op te lossen, lost DeepSeek alle teacher-gewichten uit naar gedistribueerde opslag, waarbij alleen de verborgen staat van de laatste laag van elke teacher wordt gecachet. Tijdens de training worden samples gesorteerd op teacher-index, waarbij wordt gewaarborgd dat slechts één teacher-hoofd tegelijk in GPU-geheugen aanwezig is.

Deze aanpak vermijdt het veelvoorkomende mogelijkheidsinterferentieprobleem in traditionele "mixed RL", waardoor het model top-level prestaties kan behalen in meerdere domeinen.

## 6. Specialisatie-optimalisatie van agentmogelijkheden

DeepSeek V4 bevat gespecialiseerde aanpassingen en optimalisaties voor mainstream agentproducten, met verbeterde prestaties in codetaken, documentgeneratie en andere scenario's.

De speciale optimalisaties van V4 voor agentmogelijkheden omvatten:
1. Tijdens post-training wordt agent behandeld als een onafhankelijke expert richting naast wiskunde en code, met afzonderlijke training
2. Toolaanroepformaat gewijzigd van JSON naar XML-structuur met speciale tokens, waardoor escape-foutpercentages worden verminderd
3. Cross-turn redeneringssporen worden volledig behouden in toolaanroepscenario's, en worden niet meer elke beurt gewist zoals in V3.2
4. Zelfgebouwde DSec-sandboxplatform, waarbij één cluster gelijktijdig honderdduizenden sandbox-instanties kan beheren, ondersteunend agent reinforcement learning training en evaluatie

Functionarissen stellen dat de agentmogelijkheden van V4-Pro "beter zijn dan Sonnet 4.5, met een leveringskwaliteit dicht bij de non-thinking modus van Opus 4.5, hoewel nog steeds in zekere mate achterlopend op de thinking modus van Opus 4.6."

![DeepSeek V4 technische architectuur](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Samenvatting

DeepSeek V4 Preview is een groot model met uitstekende technologische innovaties. Door reconstructie van het attention-mechanisme en innovatie in het trainingsparadigma behoudt het sterke redeneermogelijkheden terwijl het de kosten voor lange-contextinferentie drastisch verlaagt, en opent het de weg voor praktische toepassingen van miljoenen-niveau context.

Of het nu gaat om professionele scenario's die sterke redeneermogelijkheden vereisen of grootschalige toepassingen die kosteneffectiviteit nastreven, de V4-serie biedt geschikte opties. Als je de krachtige mogelijkheden van DeepSeek V4 wilt ervaren, ben je van harte welkom om het direct te gebruiken via ons platform.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/nl/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Begin met DeepSeek
  </a>
</div>
