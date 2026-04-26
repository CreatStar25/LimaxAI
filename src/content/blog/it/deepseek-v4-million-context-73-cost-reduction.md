---
title: "DeepSeek V4: Contesto di 1 milione di token, riduzione dei costi del 73%"
description: "I modelli della serie DeepSeek V4 sono stati ufficialmente rilasciati, supportano un contesto di 1 milione di token, con un costo di inferenza ridotto del 73% rispetto alla generazione precedente. Includono le versioni Pro e Flash, offrendo opzioni di modelli grandi ad alte prestazioni e convenienti per gli sviluppatori di IA."
tags: ["deepseek v4", "sito ufficiale deepseek", "tutorial deepseek", "prezzo deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "it"
author: "DeepSeek HK"
---

Parole chiave: deepseek v4, sito ufficiale deepseek, tutorial deepseek, prezzo deepseek v4

Data di pubblicazione: 24 aprile 2026

Autore: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/it/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Inizia a usare DeepSeek
  </a>
</div>

![DeepSeek V4: Contesto di 1 milione di token, riduzione dei costi del 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Oggi, DeepSeek ha ufficialmente annunciato il lancio e l'open source della versione di anteprima della serie DeepSeek-V4, il sistema di modello di punta di prossima generazione dopo V3.2. Questo lancio include due modelli: DeepSeek-V4-Pro e DeepSeek-V4-Flash, entrambi adottano l'architettura MoE con scale di parametri totali rispettivamente di 1,6T (49B attivati) e 284B (13B attivati), ed entrambi supportano un contesto massimo di 1 milione di token.

DeepSeek ha anche dichiarato che, limitato dalla potenza di calcolo di fascia alta, il throughput di servizio attuale di DeepSeek-V4-Pro è molto limitato. Si prevede che dopo il lancio massivo dei supernodi Ascend 950 nel secondo semestre dell'anno, il suo prezzo diminuirà significativamente. Inoltre, DeepSeek-V4 ha ricevuto il supporto di adattamento Day 0 di Cambricon, e il codice di adattamento relativo è stato reso open source alla comunità GitHub.

## Differenze nel posizionamento dei modelli
DeepSeek-V4-Pro si concentra sul limite superiore delle prestazioni, confrontandosi con i modelli di punta a codice chiuso; mentre DeepSeek-V4-Flash riduce significativamente la scala dei parametri e la scala di attivazione in cambio di una latenza inferiore e un costo più basso. Rispetto al modello della generazione precedente, ha ottenuto ulteriori miglioramenti nelle capacità di agente, nella conoscenza del mondo e nei compiti di ragionamento complessi, e per la prima volta, il "contesto di 1 milione di token" è stato aperto come capacità predefinita.

### Capacità di agente notevolmente migliorate
Per quanto riguarda le capacità di agente, quelle di DeepSeek-V4-Pro sono state notevolmente migliorate. È entrato nel primo livello dei modelli open source in valutazioni come la codifica agentica. Le valutazioni interne mostrano che la sua qualità di consegna è vicina alla modalità non pensante di Claude Opus 4.6, ma c'è ancora un divario rispetto alla sua modalità pensante.

DeepSeek-V4-Pro ha superato i modelli open source attualmente valutati pubblicamente in compiti ad alta difficoltà come matematica, STEM e codice di competizione, e le sue prestazioni complessive sono vicine o addirittura paragonabili ai principali modelli a codice chiuso come GPT-5.4 e Claude Opus 4.6-Max.

### Costo del contesto lungo notevolmente ridotto
Allo stesso tempo, DeepSeek-V4 ha introdotto una serie di ottimizzazioni più radicali nell'efficienza dei contesti lunghi: negli scenari da 1 milione di token, il calcolo di inferenza per token è solo il 27% di V3.2, e l'uso della cache KV è ridotto a circa il 10%, riducendo significativamente i costi di potenza di calcolo e memoria video per i compiti di collegamento lungo.

## Piano di prezzi API
I prezzi API ufficialmente annunciati per la serie DeepSeek-V4:
- DeepSeek-V4-Pro: 1 yuan / milione di token per input in cache, 12 yuan / milione di token per input non in cache, 24 yuan / milione di token per output
- DeepSeek-V4-Flash: solo 0,2 yuan / milione di token per input in cache, 1 yuan / milione di token per input non in cache, 2 yuan / milione di token per output

Attualmente, la serie DeepSeek-V4 è stata lanciata sul sito ufficiale e sull'app, e le API e i pesi dei modelli sono aperti contemporaneamente.

## Esperienza pratica: Miglioramento completo delle capacità
Abbiamo inizialmente sperimentato le modifiche di DeepSeek-V4, testando principalmente il modello DeepSeek-V4-Pro.

### Capacità di programmazione agentica notevolmente migliorata
Nel caso di sviluppo web front-end in un solo passaggio, DeepSeek-V4-Pro ha mostrato un'elevata efficienza di esecuzione. Poiché i requisiti non erano complessi, il modello ha impiegato solo 5 secondi per pensare, poi ha sviluppato rapidamente, il che differisce significativamente dal modello dei precedenti modelli DeepSeek che sprecano molti token nel pensiero. Dopo essere entrato nel processo di generazione effettivo, la lunghezza dell'output di DeepSeek-V4-Pro è significativamente più lunga di quella degli altri modelli DeepSeek, con una velocità di generazione rapida, fondamentalmente output in unità di 5 righe di codice, e il grado di completamento della pagina web è superiore a quello di DeepSeek-V3.2, con un design più ricco.

Nel test di attività che combina capacità di agente e programmazione, DeepSeek-V4-Pro può eseguire chiamate di strumenti complesse a più round, e il numero di voci di ricerca online è aumentato rispetto ai modelli precedenti, e la raccolta di informazioni è più completa. Il piano di viaggio generato finale è pianificato in modo ragionevole, ed è dotato della posizione di ogni attrazione turistica, che può essere utilizzata direttamente nell'app di navigazione dopo il clic, molto conveniente. Nelle attività di agente, si può osservare che le sue azioni sono molto decise, le chiamate di strumenti e il pensiero vengono risolti in pochi secondi, e l'efficienza dei token è buona.

### Test pratico del contesto di 1 milione di token
I modelli della serie DeepSeek-V4 supportano un contesto di 1 milione di token. Abbiamo caricato la trilogia completa dei "Tre corpi" (in totale circa 540.000 token) per i test, e il modello può individuare rapidamente il contenuto specificato, realizzando con successo il recupero di informazioni in testi molto lunghi.

Il test della data di fine delle conoscenze mostra che la data di fine delle conoscenze di DeepSeek-V4-Pro è ancora nel 2025. Inoltre, questo modello non supporta ancora le capacità visive per il momento. Dopo aver caricato le immagini, eseguirà comunque l'estrazione del testo, e le immagini senza testo mostreranno che non possono essere elaborate.

## Innovazione dell'architettura tecnica
Il cambiamento più diretto di questa generazione V4 è che il "contesto lungo" è diventato una capacità predefinita. A differenza del metodo tradizionale di semplice espansione della finestra, DeepSeek-V4-Pro introduce una nuova architettura di attenzione ibrida, che combina l'attenzione sparsa compressa con l'attenzione ad alta compressione (HCA), e collabora con l'attenzione sparsa DSA per comprimere nella dimensione dei token.

Inoltre, il modello introduce un'iperconnessione vincolata a varietà (mHC) per migliorare le connessioni residue tradizionali, e utilizza l'ottimizzatore Muon per migliorare la velocità di convergenza e la stabilità dell'addestramento. Questa serie di progettazioni consente al modello di controllare efficacemente il costo di calcolo mentre "ricorda più a lungo".

Secondo i dati ufficiali, in un contesto di 1 milione di token, i TFLOP di inferenza per token di DeepSeek-V4-Pro sono diminuiti di circa 3,7 a 9,8 volte rispetto a DeepSeek-V3.2, e l'uso della cache KV è diminuito di 9,5 a 13,7 volte. Ciò significa che le attività di collegamento molto lungo che in passato erano difficili da eseguire effettivamente (come la pianificazione di agenti multi-round, l'elaborazione di documenti lunghi) hanno iniziato a entrare nell'intervallo eseguibile.

## Prestazioni: Nuovo tetto per i modelli open source
Dal punto di vista della struttura delle capacità, il miglioramento di DeepSeek-V4-Pro è il miglioramento simultaneo delle capacità di ragionamento, di conoscenza e di agente:

### Capacità di conoscenza e di ragionamento
Nelle attività di conoscenza e di ragionamento, supera i modelli open source attuali più diffusi in valutazioni come SimpleQA, Apex e Codeforces, e si avvicina a GPT-5.4 e Gemini 3.1 Pro in molte attività. Ad esempio, ha ottenuto 90,2 punti nella lista corta di Apex, superando già i principali modelli a codice chiuso; mantiene anche il livello del primo livello nelle attività di competizione come Codeforces.

### Capacità di agente
Nelle attività relative alle capacità di agente, DeepSeek-V4-Pro ha prestazioni stabili in indicatori come SWE Verified e Terminal Bench. SWE Verified raggiunge 80,6, vicino a Claude Opus 4.6, significativamente più alto della maggior parte dei modelli open source. In Terminal Bench 2.0, le sue prestazioni superano anche modelli come GLM-5.1 Thinking e Kimi K2.6 Thinking.

Nel complesso, DeepSeek-V4-Pro è attualmente il "tetto" dei modelli open source.

## Ottimizzazione speciale per gli scenari di agente
Questa generazione di DeepSeek-V4 rafforza significativamente l'adattamento agli scenari di agente. Ha effettuato ottimizzazioni speciali per i framework di agenti più diffusi come Claude Code, OpenClaw e CodeBuddy, e funziona in modo più stabile nelle attività a più passaggi come la generazione di codice e la generazione di documenti.

Dal punto di vista del posizionamento pratico, DeepSeek-V4-Pro è già utilizzato come modello di codifica agentica all'interno di DeepSeek, concentrandosi sul "completamento delle attività". Per le attività semplici, V4-Flash è già vicino alla versione Pro, ma c'è ancora un divario significativo nelle attività complesse, che fornisce essenzialmente due "marce di potenza di calcolo" per le applicazioni di agente.

## Conclusione
Il rilascio di DeepSeek-V4 non solo dimostra l'accumulo del team nella tecnologia e nell'architettura, ma segna anche la capacità di implementazione concreta dei grandi modelli open source nell'ecosistema di potenza di calcolo nazionale. Dopo l'adattamento e l'ottimizzazione per i chip nazionali come Huawei Ascend e Cambricon, la serie DeepSeek-V4 ha ottenuto un supporto stabile e un'inferenza efficiente per il contesto di 1 milione di token, rendendo possibili le attività di collegamento lungo e l'esecuzione di agenti a più passaggi.

Questa versione implementa il posizionamento differenziato di Pro e Flash, avvicinandosi ai modelli di punta a codice chiuso in termini di prestazioni, e mantenendo un'elevata convenienza economica, offrendo opzioni aperte senza precedenti per gli sviluppatori nazionali. Ancora più importante, questo rilascio mostra che i modelli open source non solo possono affermarsi saldamente nella competizione globale, ma possono anche trasformare il potenziale tecnico in produttività pratica grazie alla potenza di calcolo nazionale e all'architettura ottimizzata.

DeepSeek-V4 potrebbe essere un passo chiave compiuto dalla forza open source cinese nella pista dell'IA ad alte prestazioni, e fornisce anche una guida chiara per l'innovazione e l'implementazione dell'ecosistema di IA nazionale.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/it/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Inizia a usare DeepSeek
  </a>
</div>
