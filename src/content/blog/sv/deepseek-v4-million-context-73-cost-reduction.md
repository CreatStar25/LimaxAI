---
title: "DeepSeek V4: Kontext på 1 miljon token, 73% lägre kostnader"
description: "Modellerna i DeepSeek V4-serien har släppts officiellt och stödjer en kontext på 1 miljon token, med en inferenskostnad som är 73% lägre jämfört med föregående generation. Inkluderar versionerna Pro och Flash, som ger högpresterande och kostnadseffektiva stora modellalternativ för AI-utvecklare."
tags: ["deepseek v4", "deepseeks officiella webbplats", "deepseek handledning", "deepseek v4 pris"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "sv"
author: "DeepSeek HK"
---

Nyckelord: deepseek v4, deepseeks officiella webbplats, deepseek handledning, deepseek v4 pris

Publiceringsdatum: 24 april 2026

Författare: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/sv/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Börja använda DeepSeek
  </a>
</div>

![DeepSeek V4: Kontext på 1 miljon token, 73% lägre kostnader](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Idag meddelade DeepSeek officiellt lanseringen och öppen källkod för förhandsversionen av DeepSeek-V4-serien, nästa generations flaggskeppssystem efter V3.2. Denna version inkluderar två modeller: DeepSeek-V4-Pro och DeepSeek-V4-Flash, båda använder MoE-arkitektur med totala parameterval på 1,6T (49B aktiverade) respektive 284B (13B aktiverade), och båda stödjer maximal kontext på 1 miljon token.

DeepSeek uppgav också att på grund av begränsningar i högpresterande beräkningskraft är den nuvarande servicegenomströmningen för DeepSeek-V4-Pro mycket begränsad. Förväntningarna är att efter masslanseringen av Ascend 950-supernoder under andra halvan av året kommer priset att minska avsevärt. Dessutom har DeepSeek-V4 fått Day 0-anpassningsstöd från Cambricon, och den relevanta anpassningskoden har gjorts tillgänglig som öppen källkod till GitHub-gemenskapen.

## Skillnader i modellpositionering
DeepSeek-V4-Pro fokuserar på prestandaövre gräns och jämför sig med flaggskeppsmodeller med stängd källkod; medan DeepSeek-V4-Flash minskar parameterval och aktiveringsskala avsevärt för att få lägre latens och lägre kostnad. Jämfört med föregående generations modell har den förbättrats ytterligare inom agentförmåga, världskunskap och komplexa resonemangsuppgifter, och för första gången har "kontext på 1 miljon token" öppnats som standardfunktion.

### Betydligt förbättrade agentförmågor
När det gäller agentförmågor har DeepSeek-V4-Pros agentförmågor förbättrats avsevärt. Den har gått in i den första nivån av öppen källkod i bedömningar som agentisk kodning. Interna utvärderingar visar att leveranskvaliteten är nära Claude Opus 4.6:s icke-tänkande läge, men det finns fortfarande en klyfta jämfört med dess tänkande läge.

DeepSeek-V4-Pro har överträffat de nuvarande offentligt utvärderade öppen källkodsmodellerna i uppgifter med hög svårighetsgrad som matematik, STEM och tävlingskod, och den totala prestandan är nära eller till och med jämförbar med toppmodeller med stängd källkod som GPT-5.4 och Claude Opus 4.6-Max.

### Betydligt lägre kostnad för lång kontext
Samtidigt har DeepSeek-V4 introducerat en rad mer radikala optimeringar av långkontextseffektiviteten: i scenarier med 1 miljon token är inferensberäkningen per token endast 27% av V3.2, och användningen av KV-cache minskas till cirka 10%, vilket avsevärt minskar kostnaderna för beräkningskraft och videominne för uppgifter med långa länkar.

## API-prisplan
De officiellt meddelade API-priserna för DeepSeek-V4-serien:
- DeepSeek-V4-Pro: 1 yuan / miljon token för cachad indata, 12 yuan / miljon token för icke-cachad indata, 24 yuan / miljon token för utdata
- DeepSeek-V4-Flash: endast 0,2 yuan / miljon token för cachad indata, 1 yuan / miljon token för icke-cachad indata, 2 yuan / miljon token för utdata

För närvarande har DeepSeek-V4-serien lanserats på den officiella webbplatsen och i appen, och API:er och modellvikter öppnas samtidigt.

## Praktisk erfarenhet: Omfattande förbättring av förmågor
Vi har initialt testat förändringarna i DeepSeek-V4, främst testat modellen DeepSeek-V4-Pro.

### Betydligt förbättrad agentisk programmeringsförmåga
I fallet med engångsutveckling av webbfrontend visade DeepSeek-V4-Pro hög exekveringseffektivitet. Eftersom kraven inte var komplexa behövde modellen bara 5 sekunder på att tänka, sedan utvecklade den snabbt, vilket skiljer sig avsevärt från mönstret hos tidigare DeepSeek-modeller som slösar många token på att tänka. Efter att ha gått in i den faktiska genereringsprocessen är utdatalängden för DeepSeek-V4-Pro avsevärt längre än för andra DeepSeek-modeller, med snabb genereringshastighet, i huvudsak genereras i enheter på 5 kodrader, och slutförandegraden för webbsidan är högre än för DeepSeek-V3.2, med rikare design.

I uppgiftstestet som kombinerar agentförmågor och programmering kan DeepSeek-V4-Pro utföra komplexa fleromgångsverktygsanrop, och antalet sökningar online har också ökat jämfört med tidigare modeller, och informationsinsamlingen är mer omfattande. Den slutligt genererade reseplanen är rimligt planerad och utrustad med platsen för varje turistattraktion, som kan användas direkt i navigationsappen efter klick, vilket är mycket bekvämt. I agentuppgifter kan man observera att dess handlingar är mycket beslutsamma, verktygsanrop och tänkande löses på några sekunder, och token effektiviteten är bra.

### Praktiskt test av kontext på 1M token
Modellerna i DeepSeek-V4-serien stödjer kontext på 1 miljon token. Vi laddade upp den kompletta trilogin "Tre kroppar" (totalt cirka 540 000 token) för test, och modellen kan snabbt lokalisera det angivna innehållet, vilket framgångsrikt möjliggör informationshämtning i mycket långa texter.

Testet av kunskapsgränsdatum visar att kunskapsgränsdatumet för DeepSeek-V4-Pro fortfarande är 2025. Dessutom stödjer denna modell för närvarande inte visuella förmågor. Efter att ha laddat upp bilder kommer den fortfarande att utföra textextraktion, och bilder utan text kommer att visa att de inte kan bearbetas.

## Teknisk arkitekturinnovation
Den mest direkt förändringen i denna V4-generation är att "lång kontext" har blivit en standardfunktion. Till skillnad från den traditionella metoden att helt enkelt utöka fönstret introducerar DeepSeek-V4-Pro en ny hybrid uppmärksamhetsarkitektur som kombinerar komprimerad gles uppmärksamhet med högkomprimerad uppmärksamhet (HCA) och samarbetar med DSA gles uppmärksamhet för att komprimera i tokendimensionen.

Dessutom introducerar modellen en mångfaldsbegränsad hyperanslutning (mHC) för att förbättra traditionella restanslutningar, och använder Muon-optimering för att förbättra konvergenshastigheten och träningsstabiliteten. Denna serie av design gör det möjligt för modellen att effektivt styra beräkningskostnaden samtidigt som den "kommer ihop längre".

Enligt officiella uppgifter har inferens-TFLOP per token för DeepSeek-V4-Pro minskat med cirka 3,7 till 9,8 gånger jämfört med DeepSeek-V3.2 i en kontext på 1 miljon token, och användningen av KV-cache har minskat med 9,5 till 13,7 gånger. Detta betyder att uppgifter med mycket långa länkar som tidigare var svåra att köra i praktiken (som fleromgångsagentplanering, bearbetning av långa dokument) har börjat falla inom det genomförbara området.

## Prestanda: Ny takhöjd för öppen källkodsmodeller
Ur ett förmågsstrukturperspektiv är förbättringen av DeepSeek-V4-Pro en samtidig förbättring av resonemangsförmåga, kunskap och agentförmåga:

### Kunskaps- och resonemangsförmågor
I kunskaps- och resonemangsuppgifter överträffar den nuvarande mainstream-öppen källkodsmodellerna i bedömningar som SimpleQA, Apex och Codeforces, och är nära GPT-5.4 och Gemini 3.1 Pro i många uppgifter. Till exempel fick den 90,2 poäng på Apex-kortlistan, och har redan överträffat toppmodeller med stängd källkod; den håller också nivån i den första nivån i tävlingsuppgifter som Codeforces.

### Agentförmågor
I uppgifter relaterade till agentförmåga presterar DeepSeek-V4-Pro stabilt på indikatorer som SWE Verified och Terminal Bench. SWE Verified når 80,6, nära Claude Opus 4.6, betydligt högre än de flesta öppen källkodsmodeller. I Terminal Bench 2.0 överträffar dess prestanda också modeller som GLM-5.1 Thinking och Kimi K2.6 Thinking.

Övergripande är DeepSeek-V4-Pro för närvarande "takhöjden" för öppen källkodsmodeller.

## Särskild optimering för agentscenarier
Denna generation av DeepSeek-V4 stärker avsevärt anpassningen till agentscenarier. Den har gjort särskilda optimeringar för mainstream-agentramverk som Claude Code, OpenClaw och CodeBuddy, och fungerar mer stabilt i flerstegsuppgifter som kodgenerering och dokumentgenerering.

Ur ett praktisk positioneringsperspektiv används DeepSeek-V4-Pro redan som en agentisk kodningsmodell inom DeepSeek, med fokus på att "slutföra uppgifter". För enkla uppgifter är V4-Flash redan nära Pro-versionen, men det finns fortfarande en betydande klyfta i komplexa uppgifter, vilket i huvudsak ger två "beräkningskraftsväxlar" för agentapplikationer.

## Slutsats
Lanseringen av DeepSeek-V4 visar inte bara teamets ackumulering inom teknik och arkitektur, utan markerar också den faktiska implementeringsförmågan för stora öppen källkodsmodeller inom den nationella beräkningskraftsekosystemet. Efter anpassning och optimering för nationella chip som Huawei Ascend och Cambricon har DeepSeek-V4-serien uppnått stabilt stöd och effektiv inferens för kontext på 1 miljon token, vilket gör uppgifter med långa länkar och flerstegsagentexekvering möjliga.

Denna version implementerar den differentierade positioneringen av Pro och Flash, närmar sig flaggskeppsmodeller med stängd källkod vad gäller prestanda och håller en hög kostnadseffektivitet vad gäller kostnad, vilket ger oöverträffade öppna alternativ för nationella utvecklare. Ännu viktigare är att denna lansering visar att öppen källkodsmodeller inte bara kan få en fast fotfäste i global konkurrens, utan också kan omvandla teknisk potential till praktisk produktivitet med hjälp av nationell beräkningskraft och optimerad arkitektur.

DeepSeek-V4 kan vara ett viktigt steg som den kinesiska öppen källkordsstyrkan har tagit inom högpresterande AI, och ger också tydliga riktlinjer för innovation och implementering av det nationella AI-ekosystemet.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/sv/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Börja använda DeepSeek
  </a>
</div>
