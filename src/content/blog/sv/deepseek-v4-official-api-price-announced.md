---
title: "DeepSeek V4 officiellt lanserad, officiella API-priser tillkännagivna"
description: "Modellerna i DeepSeek V4-serien har officiellt släppts, med fullständiga officiella API-priser tillkännagivna. Inkluderar Pro- och Flash-versioner, stödjer en ultralång kontext på 1 miljon token och tillhandahåller högpresterande, kostnadseffektiva stora modelltjänster för utvecklare."
tags: ["deepseek v4", "DeepSeek officiella webbplats", "DeepSeek handledning", "DeepSeek V4 pris"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "sv"
author: "DeepSeek HK"
---

Nyckelord: deepseek v4, DeepSeek officiella webbplats, DeepSeek handledning, DeepSeek V4 pris

Publiceringsdatum: 25 april 2026

Författare: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/sv/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Börja använda DeepSeek
  </a>
</div>

![DeepSeek V4 officiellt lanserad, officiella API-priser tillkännagivna](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

Idag tillkännagav DeepSeek officiellt prisplanen för API:et för de nya modellerna i V4-serien, vilket markerar den officiella kommersiella lanseringen av denna mycket efterlängtade stora nästa generations modell för utvecklare över hela världen. DeepSeek V4-serien inkluderar två versioner: Flash och Pro, båda stödjer en ultralång kontext på 1 miljon token. Medan prestandanivån har förbättrats avsevärt, har även kostnadseffektiviteten optimerats, vilket ger en mer konkurrenskraftig option för utveckling av AI-applikationer.

## Modell- och prisbeskrivning
API-priserna för DeepSeek beräknas per miljon token. En token är den minsta textenhet som modellen känner igen och kan vara ett ord, ett nummer eller till och med ett skiljetecken. Avgifterna beräknas baserat på det totala antalet inmatnings- och utmatningstoken som faktiskt bearbetas av modellen.

### Detaljerad jämförelse av modellparametrar
| Funktion | deepseek-v4-flash* | deepseek-v4-pro |
|---------|---------------------|------------------|
| Bas-URL (OpenAI-format) | https://api.deepseek.com | https://api.deepseek.com |
| Bas-URL (Anthropic-format) | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| Modellversion | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| Tankeläge | Stödjer både icke-tänkande läge och tänkeläge (standard). Se Tankeläge för växlingsinstruktioner | Stödjer både icke-tänkande läge och tänkeläge (standard). Se Tankeläge för växlingsinstruktioner |
| Kontextlängd | 1 miljon | 1 miljon |
| Maximal utmatningslängd | Upp till 384 tusen | Upp till 384 tusen |
| JSON-utmatning | ✓ | ✓ |
| Verktygsanrop | ✓ | ✓ |
| Chat-prefix komplettering (Beta) | ✓ | ✓ |
| FIM komplettering (Beta) | Endast icke-tänkande läge | Endast icke-tänkande läge |
| 1 miljon inmatningstoken (cacheträff) | $0,028 | $0,145 |
| 1 miljon inmatningstoken (cachemiss) | $0,14 | $1,74 |
| 1 miljon utmatningstoken | $0,28 | $3,48 |

* Anteckning: Modellnamnen "deepseek-chat" och "deepseek-reasoner" kommer att fasas ut gradvis i framtiden. För kompatibilitet motsvarar dessa två namn för närvarande icke-tänkande läge respektive tänkeläge för "deepseek-v4-flash".

## Regler för avgiftsdraget
Faktisk förbrukningsbelopp = tokenanvändning × motsvarande enhetspris. Avgifterna dras direkt från ditt uppladdningssaldo eller gåvosaldo. När båda saldon finns kommer systemet att prioritera användningen av gåvosaldot först.

Produktpriser kan justeras enligt marknadsförhållanden, och DeepSeek förbehåller sig den slutliga rätten till prisjusteringar. Utvecklare rekommenderas att ladda upp enligt sina faktiska användningsbehov och att regelbundet kontrollera den officiella prissidan för den senaste informationen.

## Analys av kärnfördelar
Medan hög prestanda bibehålls tillämpar DeepSeek V4-serien en extremt konkurrenskraftig prisstrategi som är särskilt lämplig för olika AI-applikationsscenarier:

### Kostnadseffektiv alternativ för beräkningskraft
Versionen deepseek-v4-flash erbjuder utmärkt prestanda till ett extremt lågt pris, särskilt lämplig för scenarier med hög genomströmning och höga krav på responstid, som intelligent kundtjänst, innehållsgenerering, vanliga chattapplikationer, etc. Dess pris på endast $0,028 per miljon inmatningstoken vid cacheträff minskar drastiskt driftskostnaderna för storskaliga applikationer.

### Flaggskeppsprestanda upplevelse
Versionen deepseek-v4-pro är optimerad för komplexa resonemangsuppgifter och yrkesområden, och presterar bättre i scenarier som matematiska beräkningar, kodgenerering, frågor om professionell kunskap, lämplig för professionella applikationsscenarier som kräver högprecisionsutmatningar.

### Stöd för ultralång kontext
Båda versionerna stödjer en ultralång kontext på 1 miljon token och maximal utmatningslängd på 384 tusen token, och kan hantera mycket stora textuppgifter som hela böcker, långa dokument, fullständig projektkod, vilket ger en stark grund för utveckling av komplexa AI-applikationer.

## Snabbstartsguide
Att börja använda DeepSeek V4 är mycket enkelt:
1. Besök DeepSeeks officiella webbplats för att registrera ett konto
2. Skaffa API-nyckeln
3. Utför gränssnittsanrop enligt den officiella dokumentationen
4. Börja bygga din AI-applikation

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/sv/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Börja använda DeepSeek
  </a>
</div>

Lanseringen av DeepSeek V4 ger utvecklare fler alternativ. Oavsett om du är en enskild utvecklare eller en företagsapplikation kan du hitta en beräkningskraftslösning som passar dina behov i detta modellsystem. Med den kontinuerliga förbättringen av modellekosystemet tror vi att DeepSeek V4 kommer att bli en viktig hörnsten för utvecklingen av AI-applikationer och främja födelsen av fler innovativa produkter.
