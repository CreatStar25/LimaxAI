---
title: "Dopo 15 mesi di attesa, DeepSeek svela finalmente V4 Preview: analisi completa"
description: "DeepSeek V4 Preview è stato rilasciato ufficialmente, con due modelli MoE (Pro e Flash) con supporto nativo per un contesto di 1 milione di token, offrendo miglioramenti significativi delle prestazioni riducendo drasticamente i costi di inferenza. Questo articolo fornisce una panoramica dettagliata dell'architettura tecnica, delle prestazioni e dei prezzi di DeepSeek V4."
tags: ["deepseek v4", "sito ufficiale deepseek", "tutorial deepseek", "prezzo deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "it"
author: "DeepSeek HK"
---

Questo articolo esplora le caratteristiche tecniche, le prestazioni e le linee guida per l'uso di DeepSeek V4, fornendo un'analisi completa dei vantaggi fondamentali di questo nuovo modello di linguaggio di grandi dimensioni. Il contenuto è scritto in uno stile accessibile, adatto sia agli appassionati di tecnologia che agli sviluppatori.

Parole chiave: deepseek v4, sito ufficiale deepseek, tutorial deepseek, prezzo deepseek v4.

Data di pubblicazione: 25 aprile 2026
Autore: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/it/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Inizia a usare DeepSeek
  </a>
</div>

![DeepSeek V4 Preview analisi completa](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview lanciato ufficialmente

Il 24 aprile, DeepSeek ha annunciato ufficialmente il lancio di V4 Preview. Questo importante aggiornamento arriva 15 mesi dopo il rilascio di V3.2, segnando un'altra importante svolta nella roadmap tecnologica dei modelli di grandi dimensioni di DeepSeek.

Secondo la presentazione ufficiale, la serie V4 include due modelli MoE:
- **DeepSeek-V4-Pro**: 1.6T parametri totali, 49B parametri attivati
- **DeepSeek-V4-Flash**: 284B parametri totali, 13B parametri attivati

Entrambi i modelli supportano nativamente un contesto di 1 milione di token, rappresentando un salto qualitativo nelle capacità di elaborazione di testi lunghi. In particolare, con impostazioni di contesto 1M:
- I FLOPs di inferenza per token di V4-Pro sono solo il 27% di V3.2, con KV Cache solo al 10%
- V4-Flash è ancora più estremo, riducendo queste metriche rispettivamente al 10% e al 7%

Ciò significa che, sebbene la lunghezza del contesto si sia espansa da 128K di V3.2 a 1M di V4, quasi 8 volte, i requisiti di calcolo per token sono in realtà diminuiti in modo significativo, ottenendo sia la capacità di contesto lungo che la svolta nell'efficienza di inferenza.

I funzionari di DeepSeek affermano chiaramente che V4 Preview è posizionato come un aggiornamento delle infrastrutture, principalmente per ricostruire la struttura dei costi del contesto lungo e aprire la strada alla fase successiva di test-time scaling e task a lungo raggio. Il suo attuale livello di capacità è ancora inferiore a GPT-5.4 e Gemini-3.1-Pro, con una traiettoria di sviluppo che è all'incirca 3-6 mesi dietro i modelli closed-source all'avanguardia.

## 2. Due modelli, tre modalità di inferenza: caratteristiche fondamentali di V4

### 2.1 Parametri del modello e vantaggi di costo

Il punto saliente più importante della serie V4 è l'ottimizzazione significativa della curva dei costi. Con impostazioni di contesto di 1 milione di token:
- V4-Pro: I FLOPs di inferenza per token sono solo il 27% di V3.2, KV Cache solo il 10%
- V4-Flash: I FLOPs di inferenza per token sono solo il 10% di V3.2, KV Cache solo il 7%

Questo miglioramento dell'efficienza riduce drasticamente il costo di inferenza per contesti di livello milionario, fornendo una soluzione economicamente valida per l'elaborazione di testi lunghi, l'analisi di documenti e altri scenari.

### 2.2 Sistema di prezzi API

DeepSeek continua la sua coerente strategia di prezzi ad alto valore:
- **V4-Pro**: ¥1 per milione di token di input (cache hit) o ¥12 (cache miss), ¥24 per milione di token di output
- **V4-Flash**: ¥0.2 per milione di token di input (cache hit) o ¥1 (cache miss), ¥2 per milione di token di output

### 2.3 Tre livelli di intensità di inferenza

Ogni modello offre tre modalità di inferenza per soddisfare le esigenze di diversi scenari:
1. **Non-think**: Modalità di output diretto, velocità di risposta più rapida
2. **Think High**: Modalità di ragionamento profondo normale, bilanciando velocità e qualità
3. **Think Max**: Inietta istruzioni forti, massimizza il contesto e la lunghezza dell'output, libera le piene capacità del modello

La modalità Max migliora significativamente le prestazioni del modello: i punteggi di V4-Pro-Max aumentano da 34.5 a 37.7 nei test HLE, e da 85.5 a 90.2 nei test Apex Shortlist, a costo di raddoppiare il numero di token di output.

## 3. Prestazioni nei test benchmark

Secondo i dati di test ufficiali rilasciati da DeepSeek, la serie V4 ottiene ottimi risultati in più valutazioni:

### 3.1 Test di conoscenza e ragionamento
- DeepSeek-V4-Pro-Max si classifica primo in Apex Shortlist (90.2%) e Codeforces (Rating 3206), due task hardcore di ragionamento/programmazione, dimostrando capacità di logica e algoritmi estremamente forti
- Gemini-3.1-Pro-High è in testa in SimpleQA Verified (75.6%)
- Claude e GPT hanno i loro rispettivi punti di forza in diversi progetti, con gap complessivamente piccoli

### 3.2 Test di capacità agent
- I quattro modelli si equivalgono nei task SWE Verified (tutti raggiungendo l'80.6%)
- DeepSeek eccelle in Terminal Bench 2.0 (67.9%) e Toolathlon (51.8%), dimostrando vantaggi chiari in scenari di esecuzione di istruzioni complesse e chiamata di strumenti

I funzionari affermano che le capacità agent di DeepSeek-V4-Pro sono migliorate significativamente rispetto alle generazioni precedenti, "offrendo un'esperienza utente migliore di Sonnet 4.5, con una qualità di consegna vicina alla modalità non-thinking di Opus 4.6, sebbene sia ancora in qualche misura inferiore alla modalità thinking di Opus 4.6."

### 3.3 Conoscenza del mondo e capacità generali
- V4-Pro supera significativamente altri modelli open source nelle valutazioni della conoscenza del mondo, seguendo di poco solo il top model closed-source Gemini-Pro-3.1
- In matematica, STEM e valutazioni di codice competitivo, V4-Pro supera tutti i modelli open source attualmente valutati pubblicamente, raggiungendo il livello dei top model closed-source mondiali
- In quanto modello economico, V4-Flash ha una riserva di conoscenza leggermente inferiore alla versione Pro, ma capacità di ragionamento simili. Con parametri e valori di attivazione più piccoli, fornisce servizi API più veloci e convenienti
- Nelle valutazioni agent, V4-Flash ha prestazioni paragonabili alla versione Pro su task semplici, ma presenta ancora gap su task ad alta difficoltà

## 4. Innovazione tecnologica fondamentale: riscrittura del meccanismo di attention

Il cambiamento tecnico più fondamentale di V4 è nel livello di attention, risolvendo fondamentalmente il problema dell'efficienza dell'inferenza su contesti lunghi.

Nei meccanismi di attention Transformer tradizionali, ogni token deve calcolare la somiglianza con tutti i token precedenti. Quando il contesto si espande da 100K a 1M, il costo computazionale aumenta di 100 volte, ed è questo il collo di bottiglia fondamentale che impedisce l'adozione diffusa di contesti lunghi.

V4 adotta un innovativo meccanismo di attention duale con livelli alternati:
1. **CSA (Compressed Sparse Attention)**: Per prima cosa unisce la cache KV per ogni 4 token in un unico riepilogo, poi permette a ogni query di selezionare solo i top-k riepiloghi più pertinenti per il calcolo dell'attention, comprimendo sia il contenuto da elaborare che concentrandosi solo sulle informazioni rilevanti
2. **HCA (Heavy Compressed Attention)**: Utilizza una compressione più aggressiva, unendo ogni 128 token in un riepilogo, poi applica dense attention sui riepiloghi rimanenti senza selezione sparsa

I due meccanismi di attention si alternano e si sovrappongono, combinati con un ramo sliding window che gestisce le dipendenze di dettaglio tra token vicini, formando un approccio combinato "coarse-grained + fine-grained, sparse + dense".

Dal punto di vista dell'evoluzione tecnologica, DeepSeek V2 e V3 hanno principalmente seguito la rotta della sparsificazione dei parametri (parametri totali elevati ma attivazione solo di esperti parziali per token). V4 apre un nuovo percorso di sparsificazione del contesto (compressione KV, selezione top-k, tassi di compressione stratificati) su questa base. Questa è la prima volta che DeepSeek applica il concetto di "sparsification" alla struttura fondamentale del Transformer.

Oltre al livello di attention, V4 ha altri due importanti miglioramenti architetturali:
1. Aggiorna le connessioni residual tradizionali a mHC (Manifold Constrained Hyperconnection), rendendo la propagazione in avanti e all'indietro delle reti profonde più stabile attraverso vincoli matematici
2. Sostituisce AdamW con l'ottimizzatore Muon per la maggior parte dei moduli, ottenendo una convergenza più rapida e un addestramento più stabile

Questa è la prima volta che DeepSeek modifica simultaneamente tre componenti fondamentali del Transformer: attention, connessioni residual e ottimizzatore.

## 5. Innovazione del paradigma post-training: Expert Model Distillation

Rispetto ai cambiamenti architetturali, l'innovazione di V4 nei metodi post-training è ancora più degna di nota.

V3.2 utilizzava un approccio "mixed RL", ottimizzando simultaneamente più obiettivi con reinforcement learning. V4 adotta una strategia in due fasi "differenzia poi unifica":
1. **Fase di differenziazione**: Per diversi domini come matematica, codice, agent e instruction following, addestra un modello esperto separato per ogni dominio. Questi esperti subiscono prima il fine-tuning supervisionato con dati di dominio di alta qualità, poi il reinforcement learning con l'algoritmo GRPO, ogni esperto raggiungendo prestazioni ottimali nel suo dominio specializzato
2. **Fase di unificazione**: Utilizza il metodo On-Policy Distillation (OPD) per "sintetizzare" più di una decina di esperti di dominio in un unico modello studente. Dopo che lo studente genera una risposta, abbina la distribuzione dell'output dell'esperto che "capisce meglio questo problema", assorbendo le capacità degli esperti attraverso l'allineamento a livello di logit

Questo approccio può essere inteso come la distillazione delle capacità di più "studenti top" di diversi domini in un unico modello. Per risolvere la sfida ingegneristica del caricamento simultaneo di più di una decina di modelli teacher con trilioni di parametri, DeepSeek scarica tutti i pesi teacher su storage distribuito, memorizzando nella cache solo lo stato nascosto dell'ultimo livello di ogni teacher. Durante l'addestramento, i campioni sono ordinati per indice teacher, assicurando che solo una testa teacher risieda nella memoria GPU in qualsiasi momento.

Questo approccio evita il problema dell'interferenza delle capacità comune nel "mixed RL" tradizionale, permettendo al modello di raggiungere prestazioni di livello top in più domini.

## 6. Ottimizzazione speciale delle capacità agent

DeepSeek V4 include adattamenti e ottimizzazioni specializzate per i prodotti agent mainstream, con prestazioni migliorate in scenari di task di codice, generazione di documenti e altro.

Le ottimizzazioni speciali di V4 per le capacità agent includono:
1. Durante il post-training, l'agent è trattato come una direzione esperto indipendente insieme a matematica e codice, con addestramento separato
2. Il formato di chiamata strumenti è cambiato da JSON a struttura XML con token speciali, riducendo i tassi di errore di escape
3. Le tracce di ragionamento cross-turn sono completamente conservate negli scenari di chiamata strumenti, non più cancellate ad ogni turno come in V3.2
4. Piattaforma sandbox DSec self-built, con un singolo cluster in grado di gestire simultaneamente centinaia di migliaia di istanze sandbox, supportando l'addestramento e la valutazione reinforcement learning degli agent

I funzionari affermano che le capacità agent di V4-Pro "sono migliori di Sonnet 4.5, con una qualità di consegna vicina alla modalità non-thinking di Opus 4.5, sebbene sia ancora in qualche misura inferiore alla modalità thinking di Opus 4.6."

![Architettura tecnica DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Riepilogo

DeepSeek V4 Preview è un modello di grandi dimensioni con innovazioni tecnologiche eccezionali. Attraverso la ricostruzione del meccanismo di attention e l'innovazione del paradigma di addestramento, mantiene forti capacità di ragionamento riducendo drasticamente i costi di inferenza su contesti lunghi, aprendo la strada all'applicazione pratica di contesti di livello milionario.

Sia per scenari professionali che richiedono forti capacità di ragionamento che per applicazioni su larga scala che perseguono convenienza economica, la serie V4 offre opzioni adatte. Se vuoi sperimentare le potenti capacità di DeepSeek V4, sei il benvenuto a utilizzarlo direttamente attraverso la nostra piattaforma.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/it/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Inizia a usare DeepSeek
  </a>
</div>
