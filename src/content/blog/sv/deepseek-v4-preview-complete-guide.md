---
title: "Efter 15 månaders väntan avslöjar DeepSeek äntligen V4 Preview: omfattande analys"
description: "DeepSeek V4 Preview har officiellt släppts, med två MoE-modeller (Pro och Flash) med inbyggt stöd för en kontext på 1 miljon token, som ger betydande prestandaförbättringar samtidigt som inferenskostnaderna drastiskt sänks. Denna artikel ger en detaljerad genomgång av DeepSeek V4:s tekniska arkitektur, prestanda och prissättning."
tags: ["deepseek v4", "deepseeks officiella webbplats", "deepseek handledning", "deepseek v4 pris"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "sv"
author: "DeepSeek HK"
---

Denna artikel utforskar DeepSeek V4:s tekniska funktioner, prestanda och användningsriktlinjer, och ger en omfattande analys av fördelarna med denna nya generations stora språkmodell. Innehållet är skrivet i en tillgänglig stil som passar både teknikentusiaster och utvecklare.

Nyckelord: deepseek v4, deepseeks officiella webbplats, deepseek handledning, deepseek v4 pris.

Publiceringsdatum: 25 april 2026
Författare: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/sv/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Börja använda DeepSeek
  </a>
</div>

![Omfattande analys av DeepSeek V4 Preview](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview officiellt lanserad

Den 24 april meddelade DeepSeek officiellt lanseringen av V4 Preview. Denna stora uppdatering kommer 15 månader efter släppet av V3.2, och markerar ytterligare ett viktigt genombrott i DeepSeeks teknologiska färdplan för stora modeller.

Enligt den officiella introduktionen innehåller V4-serien två MoE-modeller:
- **DeepSeek-V4-Pro**: 1,6T totala parametrar, 49B aktiverade parametrar
- **DeepSeek-V4-Flash**: 284B totala parametrar, 13B aktiverade parametrar

Båda modellerna har inbyggt stöd för en kontext på 1 miljon token, vilket representerar ett kvalitativt språng i förmågan att bearbeta långa texter. Noterbart är att under 1M-kontextinställningar:
- V4-Pros inferens-FLOPs per token endast är 27 % av V3.2, med KV Cache på endast 10 %
- V4-Flash är ännu mer extrem och reducerar dessa mätvärden till 10 % respektive 7 %

Detta innebär att även om kontextlängden har utökats nästan 8 gånger från 128K i V3.2 till 1M i V4, så har beräkningskraven per token faktiskt minskat avsevärt, vilket uppnår både lång kontext-förmåga och genombrott i inferenseffektivitet.

Företrädare för DeepSeek konstaterar tydligt att V4 Preview är positionerad som en infrastrukturuppdatering, främst för att bygga om kostnadsstrukturen för lång kontext för att bana väg för nästa fas av test-time scaling och uppgifter på långt håll. Dess nuvarande kapacitetsnivå ligger fortfarande efter GPT-5.4 och Gemini-3.1-Pro, med en utvecklingsbana som ligger ungefär 3–6 månader efter de ledande slutna modellerna.

## 2. Två modeller, tre inferenslägen: kärnfunktioner i V4

### 2.1 Modellparametrar och kostnadsfördelar

Den största höjdpunkten i V4-serien är den betydande optimeringen av kostnadskurvan. Under inställningar för 1 miljon token-kontext:
- V4-Pro: Inferens-FLOPs per token är endast 27 % av V3.2, KV Cache endast 10 %
- V4-Flash: Inferens-FLOPs per token är endast 10 % av V3.2, KV Cache endast 7 %

Denna effektivitetsförbättring sänker drastiskt inferenskostnaden för kontext på miljonnivå och ger en ekonomiskt genomförbar lösning för lång textbearbetning, dokumentanalys och andra scenarier.

### 2.2 API-prissättningssystem

DeepSeek fortsätter sin konsekventa prissättningsstrategi med högt värde:
- **V4-Pro**: 1 yuan per miljon ingående token (cacheträff) eller 12 (cachemiss), 24 yuan per miljon utgående token
- **V4-Flash**: 0,2 yuan per miljon ingående token (cacheträff) eller 1 (cachemiss), 2 yuan per miljon utgående token

### 2.3 Tre inferensintensitetsnivåer

Varje modell erbjuder tre inferenslägen för att möta olika scenariokrav:
1. **Non-think**: Direkt utmatningsläge, snabbast svarstid
2. **Think High**: Vanligt djuptänkarläge, balanserar hastighet och kvalitet
3. **Think Max**: Injicerar starka instruktioner, maximerar kontext och utmatningslängd, frigör modellens fulla kapacitet

Max-läget förbättrar modellens prestanda avsevärt: V4-Pro-Max-poängen ökar från 34,5 till 37,7 i HLE-tester, och från 85,5 till 90,2 i Apex Shortlist-tester, till priset av att antalet utgående token fördubblas.

## 3. Benchmarktestprestanda

Enligt officiella testdata som publicerats av DeepSeek presterar V4-serien utmärkt i flera utvärderingar:

### 3.1 Kunskaps- och resonemangstester
- DeepSeek-V4-Pro-Max rankas först i Apex Shortlist (90,2 %) och Codeforces (Rating 3206), två hardcore-reasoning-/programmeringsuppgifter, vilket visar extremt stark logisk och algoritmisk förmåga
- Gemini-3.1-Pro-High leder i SimpleQA Verified (75,6 %)
- Claude och GPT har sina respektive styrkor i olika projekt, med överlag små skillnader

### 3.2 Agentförmågetester
- Alla fyra modeller presterar lika i SWE Verified-uppgifter (alla når 80,6 %)
- DeepSeek utmärker sig i Terminal Bench 2.0 (67,9 %) och Toolathlon (51,8 %), och visar tydliga fördelar i scenarier för komplex instruktionsutförande och verktygsanrop

Företrädare konstaterar att DeepSeek-V4-Pros agentförmågor har förbättrats avsevärt jämfört med tidigare generationer, "och erbjuder en bättre användarupplevelse än Sonnet 4.5, med leveranskvalitet nära Opus 4.6:s icke-tänkande läge, även om den fortfarande i viss utsträckning ligger efter Opus 4.6:s tänkande läge."

### 3.3 Världskunskap och allmänna förmågor
- V4-Pro presterar avsevärt bättre än andra öppna modeller i världskunskapsutvärderingar, och ligger endast något efter den ledande slutna modellen Gemini-Pro-3.1
- Inom matematik, STEM och tävlingskodsutvärderingar överträffar V4-Pro alla för närvarande offentligt utvärderade öppna modeller, och når nivån hos världens ledande slutna modeller
- Som ekonomisk modell har V4-Flash något mindre kunskapsreserver än Pro-versionen, men liknande resonemangsförmågor. Med mindre parametrar och aktiveringsvärden ger den snabbare och mer kostnadseffektiva API-tjänster
- I agentutvärderingar presterar V4-Flash jämförbart med Pro-versionen vid enkla uppgifter, men det finns fortfarande skillnader vid högsvårighetsuppgifter

## 4. Kärn teknologisk innovation: omskrivning av uppmärksamhetsmekanismen

V4:s mest centrala tekniska förändring finns i uppmärksamhetslagret, som i grunden löser effektivitetsproblemet med inferens för lång kontext.

I traditionella Transformer-uppmärksamhetsmekanismer måste varje token beräkna likhet med alla tidigare token. När kontexten utökas från 100K till 1M ökar beräkningskostnaden 100 gånger, vilket är den centrala flaskhalsen som förhindrar att lång kontext används i stor skala.

V4 använder en innovativ dubbel uppmärksamhetsmekanism med växlande lager:
1. **CSA (Compressed Sparse Attention)**: Sammanfogar först KV-cache för varje 4 token till en enda sammanfattning, och låter sedan varje fråga endast välja de mest relevanta top-k-sammanfattningarna för uppmärksamhetsberäkning, vilket både komprimerar innehållet som ska bearbetas och endast fokuserar på relevant information
2. **HCA (Heavy Compressed Attention)**: Använder mer aggressiv komprimering, sammanfogar varje 128 token till en sammanfattning, och tillämpar sedan dense attention på de återstående sammanfattningarna utan gles selektion

De två uppmärksamhetsmekanismerna växlar och staplas, i kombination med ett glidande fönstergren som hanterar detaljberoenden mellan närliggande token, och bildar en kombinerad metod av "grovkornig + finkornig, gles + tät".

Ur ett teknologiskt evolutionärt perspektiv följde DeepSeek V2 och V3 huvudsakligen vägen för parametersparsitet (stor totala parametrar men endast aktivering av partiella experter per token). V4 öppnar en ny väg för kontextsparsitet (KV-komprimering, top-k-selektion, lagrade komprimeringsgrader) på denna grund. Detta är första gången som DeepSeek har tillämpat konceptet "sparsitet" på Transformers kärnstruktur.

Förutom uppmärksamhetslagret har V4 ytterligare två viktiga arkitektoniska förbättringar:
1. Uppgraderar traditionella residualanslutningar till mHC (Manifold Constrained Hyperconnection), vilket gör framåt- och bakåtpropagering i djupa nätverk mer stabila genom matematiska begränsningar
2. Ersätter AdamW med Muon-optimeraren för de flesta moduler, vilket ger snabbare konvergens och mer stabil träning

Detta är första gången som DeepSeek samtidigt har ändrat tre centrala Transformer-komponenter: uppmärksamhet, residualanslutningar och optimerare.

## 5. Post-training paradigminnovation: expertmodellsdestillering

Jämfört med arkitektoniska förändringar är V4:s innovation inom post-training-metoder ännu mer anmärkningsvärd.

V3.2 använde ett "mixed RL"-tillvägagångssätt, som optimerade flera mål samtidigt med förstärkningsinlärning. V4 antar en tvåstegsstrategi av "differentiera sedan förena":
1. **Differentieringsfas**: För olika domäner som matematik, kodning, agent och instruktionsföljning tränas en separat expertmodell för varje domän. Dessa experter genomgår först övervakad finjustering med högkvalitativa domändata, och sedan förstärkningsinlärning med GRPO-algoritmen, där varje expert uppnår optimal prestanda i sin specialiserade domän
2. **Föreningsfas**: Använder metoden On-Policy Distillation (OPD) för att "syntetisera" mer än tio domänexperter tillbaka till en enhetlig elev-modell. Efter att eleven har genererat ett svar matchar den utdatafördelningen från experten som "bäst förstår detta problem", och absorberar expertförmågor genom logit-nivåinriktning

Detta tillvägagångssätt kan förstås som att destillera förmågorna hos flera domänens "toppstudenter" till en enda modell. För att lösa den tekniska utmaningen med att samtidigt ladda mer än tio triljonparameters lärarmodeller, lossar DeepSeek alla lärarvikter till distribuerad lagring, och cachelagrar endast det dolda tillståndet för varje lärares sista lager. Under träning sorteras prover efter lärarindex, vilket säkerställer att endast en lärarhuvud finns i GPU-minne vid varje tillfälle.

Detta tillvägagångssätt undviker det vanliga förmågestörningsproblemet i traditionellt "mixed RL", och låter modellen uppnå toppnivåprestanda över flera domäner.

## 6. Särskild optimering av agentförmågor

DeepSeek V4 inkluderar specialiserade anpassningar och optimeringar för ledande agentprodukter, med förbättrad prestanda i koduppgifter, dokumentgenerering och andra scenarier.

V4:s särskilda optimeringar för agentförmågor inkluderar:
1. Under post-training behandlas agent som en oberoende expertriktning vid sidan av matematik och kodning, med separat träning
2. Verktygsanropsformat ändrat från JSON till XML-struktur med specialtoken, vilket minskar escape-felfrekvenser
3. Tvärvändningsresonemangsspår behålls fullständigt i verktygsanropsscenarier, och rensas inte längre vid varje tur som i V3.2
4. Självbyggd DSec-sandboxplattform, där ett enda kluster kan hantera hundratusentals sandbox-instanser samtidigt, och stödja agentförstärkningsinlärning och utvärdering

Företrädare konstaterar att V4-Pros agentförmågor "är bättre än Sonnet 4.5, med leveranskvalitet nära Opus 4.5 icke-tänkande läge, även om den fortfarande i viss utsträckning ligger efter Opus 4.6 tänkande läge."

![DeepSeek V4 teknisk arkitektur](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Sammanfattning

DeepSeek V4 Preview är en stor modell med framstående teknologiska innovationer. Genom ombyggnad av uppmärksamhetsmekanismen och innovations i träningsparadigmet behåller den starka resonemangsförmågor samtidigt som den drastiskt sänker inferenskostnaderna för lång kontext, och banar väg för praktiska tillämpningar av kontext på miljonnivå.

Oavsett om det gäller professionella scenarier som kräver starka resonemangsförmågor eller storskaliga tillämpningar som strävar efter kostnadseffektivitet, ger V4-serien lämpliga alternativ. Om du vill uppleva de kraftfulla förmågorna hos DeepSeek V4 är du välkommen att använda den direkt via vår plattform.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/sv/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Börja använda DeepSeek
  </a>
</div>
