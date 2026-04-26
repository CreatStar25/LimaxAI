---
title: "DeepSeek V4: Context de 1 milion de tokenuri, reducere a costurilor cu 73%"
description: "Modelele din seria DeepSeek V4 au fost lansate oficial, suportând un context de 1 milion de tokenuri, cu o reducere a costurilor de inferență cu 73% în comparație cu generația anterioară. Include versiunile Pro și Flash, oferind opțiuni de modele mari de înaltă performanță și rentabile pentru dezvoltatorii AI."
tags: ["deepseek v4", "site oficial deepseek", "tutorial deepseek", "preț deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "ro"
author: "DeepSeek HK"
---

Cuvinte cheie: deepseek v4, site oficial deepseek, tutorial deepseek, preț deepseek v4

Data publicării: 24 aprilie 2026

Autor: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/ro/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Începeți să folosiți DeepSeek
  </a>
</div>

![DeepSeek V4: Context de 1 milion de tokenuri, reducere a costurilor cu 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Astăzi, DeepSeek a anunțat oficial lansarea și deschiderea codului sursă al versiunii preview a seriei DeepSeek-V4, sistemul de modele flagship de generație următoare după V3.2. Această lansare include două modele: DeepSeek-V4-Pro și DeepSeek-V4-Flash, ambele adoptă arhitectura MoE cu scale de parametri totale de 1,6T (49B activați) și 284B (13B activați) respectiv, și ambele suportă un context maxim de 1 milion de tokenuri.

Reprezentanții DeepSeek au declarat, de asemenea, că, din cauza limitării puterii de calcul de înaltă performanță, debitul de serviciu actual al DeepSeek-V4-Pro este foarte limitat. Se așteaptă că după lansarea în masă a supernodurilor Ascend 950 în a doua jumătate a anului, prețul acestuia se va reduce semnificativ. În plus, DeepSeek-V4 a primit suport de adaptare Day 0 de la Cambricon, iar codul de adaptare relevant a fost făcut public ca sursă deschisă către comunitatea GitHub.

## Diferențe în poziționarea modelelor
DeepSeek-V4-Pro se concentrează pe limita superioară de performanță, comparându-se cu modelele flagship cu sursă închisă; în timp ce DeepSeek-V4-Flash reduce semnificativ scara parametrilor și scara de activare în schimbul unei latențe mai mici și a unui cost mai mic. În comparație cu modelul din generația anterioară, acesta a fost îmbunătățit și mai mult în capabilitățile de agent, cunoștințe despre lume și sarcini de raționament complex, și pentru prima dată, "contextul de 1 milion de tokenuri" a fost deschis ca capacitate implicită.

### Capabilități de agent îmbunătățite semnificativ
În ceea ce privește capabilitățile de agent, capabilitățile de agent ale DeepSeek-V4-Pro au fost îmbunătățite semnificativ. A intrat în primul nivel al surselor deschise în evaluări precum codarea agentică. Evaluările interne arată că calitatea livrării este apropiată de modul non-gânditor al Claude Opus 4.6, dar există încă o diferență în comparație cu modul său gânditor.

DeepSeek-V4-Pro a depășit modelele cu sursă deschisă evaluate public în prezent în sarcini de dificultate ridicată, cum ar fi matematică, STEM și cod de concurs, iar performanța sa generală este apropiată sau chiar comparabilă cu modelele de top cu sursă închisă precum GPT-5.4 și Claude Opus 4.6-Max.

### Cost al contextului lung redus semnificativ
În același timp, DeepSeek-V4 a introdus un set de optimizări mai radicale în eficiența contextului lung: în scenarii cu 1 milion de tokenuri, calculul de inferență per token este doar 27% din cel al V3.2, iar utilizarea cache-ului KV este redusă la aproximativ 10%, reducând semnificativ costurile de putere de calcul și memorie video ale sarcinilor cu legături lungi.

## Plan de prețuri API
Prețurile API anunțate oficial pentru seria DeepSeek-V4:
- DeepSeek-V4-Pro: 1 yuan / milion de tokenuri pentru intrare în cache, 12 yuan / milion de tokenuri pentru intrare fără cache, 24 yuan / milion de tokenuri pentru ieșire
- DeepSeek-V4-Flash: doar 0,2 yuan / milion de tokenuri pentru intrare în cache, 1 yuan / milion de tokenuri pentru intrare fără cache, 2 yuan / milion de tokenuri pentru ieșire

În prezent, seria DeepSeek-V4 a fost lansată pe site-ul oficial și în aplicație, iar API-urile și ponderile modelelor sunt deschise simultan.

## Experiență practică: Îmbunătățire cuprinzătoare a capabilităților
Am experimentat inițial schimbările aduse de DeepSeek-V4, testând în principal modelul DeepSeek-V4-Pro.

### Capacitate de programare agentică îmbunătățită semnificativ
În cazul dezvoltării web front-end într-o singură etapă, DeepSeek-V4-Pro a demonstrat o eficiență ridicată de execuție. Deoarece cerințele nu erau complexe, modelul a avut nevoie de doar 5 secunde pentru a gândi, apoi a dezvoltat rapid, ceea ce diferă semnificativ de modelul modelelor DeepSeek anterioare care risipă multe tokenuri în gândire. După intrarea în procesul de generare real, lungimea ieșirii lui DeepSeek-V4-Pro este semnificativ mai lungă decât cea a altor modele DeepSeek, cu o viteză de generare rapidă, generând în principiu în unități de 5 linii de cod, iar gradul de finalizare al paginii web este mai mare decât cel al DeepSeek-V3.2, cu un design mai bogat.

În testul de sarcină care combină capabilități de agent și programare, DeepSeek-V4-Pro poate efectua apeluri complexe de unelte în mai multe runde, iar numărul de intrări de căutare online a crescut, de asemenea, în comparație cu modelele anterioare, iar colectarea de informații este mai cuprinzătoare. Planul de călătorie generat final este planificat în mod rezonabil și este echipat cu locația fiecărei atracții turistice, care poate fi utilizată direct în aplicația de navigație după clic, fiind foarte convenabil. În sarcinile de agent, se poate observa că acțiunile sale sunt foarte hotărâte, apelurile de unelte și gândirea sunt rezolvate în câteva secunde, iar eficiența tokenurilor este bună.

### Test practic al contextului de 1M de tokenuri
Modelele din seria DeepSeek-V4 suportă context de 1 milion de tokenuri. Am încărcat trilogia completă a "Trei Corpuri" (în total aproximativ 540.000 de tokenuri) pentru testare, iar modelul poate localiza rapid conținutul specificat, realizând cu succes recuperarea de informații în texte foarte lungi.

Testul datei limită a cunoștințelor arată că data limită a cunoștințelor lui DeepSeek-V4-Pro este încă în 2025. În plus, acest model nu suportă încă capabilități vizuale pentru moment. După încărcarea imaginilor, va efectua în continuare extragere de text, iar imaginile fără text vor afișa că nu pot fi procesate.

## Inovație în arhitectura tehnică
Cea mai directă schimbare a acestei generații V4 este că "contextul lung" a devenit o capacitate implicită. Spre deosebire de metoda tradițională de simplă extindere a ferestrei, DeepSeek-V4-Pro introduce o nouă arhitectură de atenție hibridă, combinând atenție rară comprimată cu atenție de înaltă compresie (HCA) și colaborând cu atenția rară DSA pentru comprimare în dimensiunea tokenurilor.

În plus, modelul introduce o hiperconexiune restricționată de varietate (mHC) pentru a îmbunătăți conexiunile reziduale tradiționale și folosește optimizatorul Muon pentru a îmbunătăți viteza de convergență și stabilitatea antrenamentului. Această serie de designuri îi permite modelului să controleze eficient costul de calcul în timp ce "își aminte mai mult timp".

Conform datelor oficiale, în contextul de 1 milion de tokenuri, TFLOP-urile de inferență per token ale lui DeepSeek-V4-Pro s-au redus cu aproximativ 3,7 până la 9,8 ori în comparație cu DeepSeek-V3.2, iar utilizarea cache-ului KV s-a redus cu 9,5 până la 13,7 ori. Aceasta înseamnă că sarcinile cu legături foarte lungi care erau dificil de rulat practic în trecut (cum ar fi planificarea agenților în mai multe runde, procesarea documentelor lungi) au început să intre în domeniul executabil.

## Performanță: Noul plafon pentru modelele cu sursă deschisă
Din perspectiva structurii capabilităților, îmbunătățirea lui DeepSeek-V4-Pro este îmbunătățirea simultană a capabilităților de raționament, cunoștințe și agent:

### Capabilități de cunoștință și raționament
În sarcinile de cunoștință și raționament, depășește modelele actuale mainstream cu sursă deschisă în evaluări precum SimpleQA, Apex și Codeforces și este apropiat de GPT-5.4 și Gemini 3.1 Pro în multe sarcini. De exemplu, a obținut 90,2 puncte pe lista scurtă Apex, depășind deja modelele de top cu sursă închisă; de asemenea, menține nivelul primului eșalon în sarcinile de concurs precum Codeforces.

### Capabilități de agent
În sarcinile legate de capacitatea de agent, DeepSeek-V4-Pro are performanțe stabile la indicatori precum SWE Verified și Terminal Bench. SWE Verified atinge 80,6, aproape de Claude Opus 4.6, semnificativ mai mare decât majoritatea modelelor cu sursă deschisă. În Terminal Bench 2.0, performanța sa depășește, de asemenea, modele precum GLM-5.1 Thinking și Kimi K2.6 Thinking.

În general, DeepSeek-V4-Pro este în prezent "plafonul" modelelor cu sursă deschisă.

## Optimizare specială pentru scenariile de agent
Această generație de DeepSeek-V4 întărește semnificativ adaptarea la scenariile de agent. A efectuat optimizări speciale pentru cadrele de agent mainstream precum Claude Code, OpenClaw și CodeBuddy și funcționează mai stabil în sarcinile în mai multe etape precum generarea de cod și generarea de documente.

Din perspectiva poziționării practice, DeepSeek-V4-Pro este deja folosit ca model de codare agentică în interiorul DeepSeek, concentrându-se pe "finalizarea sarcinilor". Pentru sarcinile simple, V4-Flash este deja aproape de versiunea Pro, dar există încă o diferență semnificativă în sarcinile complexe, ceea ce oferă în esență două "viteze de putere de calcul" pentru aplicațiile de agent.

## Concluzie
Lansarea lui DeepSeek-V4 demonstrează nu doar acumularea echipei în tehnologie și arhitectură, ci și marchează capacitatea de implementare reală a modelelor mari cu sursă deschisă în ecosistemul de putere de calcul național. După adaptare și optimizare pentru cipurile naționale precum Huawei Ascend și Cambricon, seria DeepSeek-V4 a obținut suport stabil și inferență eficientă pentru contextul de 1 milion de tokenuri, făcând posibilă sarcinile cu legături lungi și execuția agenților în mai multe etape.

Această versiune implementează poziționarea diferențiată a Pro și Flash, apropiindu-se de modelele flagship cu sursă închisă în materie de performanță și menținând o rentabilitate ridicată în materie de costuri, oferind opțiuni deschise fără precedent pentru dezvoltatorii naționali. Mai important, această lansare arată că modelele cu sursă deschisă nu numai că se pot stabili ferm în competiția globală, dar pot și transforma potențialul tehnic în productivitate practică cu ajutorul puterii de calcul naționale și a arhitecturii optimizate.

DeepSeek V4 ar putea fi un pas cheie făcut de forța open source chineză pe piața inteligenței artificiale de înaltă performanță și oferă, de asemenea, orientări clare pentru inovarea și implementarea ecosistemului național de AI.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/ro/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Începeți să folosiți DeepSeek
  </a>
</div>
