---
title: "OpenAI a publicat ghidul oficial de prompturi GPT 5.5: 7 schimbări cheie"
description: "Ghidul oficial GPT-5.5 trece de la prompturi bazate pe proces la cele orientate spre rezultat. 7 schimbări, schelet în 7 părți, reguli de oprire și tabel comparativ."
tags: ["chatgpt", "gpt 5.5", "tutorial gpt"]
pubDate: "2026-05-22"
heroImage: "https://img.limaxai.com/aiweb/chatgpt-260522-1.png"
lang: "ro"
author: "LimaxAI Team"
---

OpenAI a publicat ghidul oficial de prompturi GPT-5.5. Prompturile pas cu pas ale modelelor vechi pot limita performanța. 7 schimbări cheie.

Cuvinte cheie: chatgpt, gpt 5.5, tutorial gpt.

Publicat: 22 mai 2026

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/ro/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    Începe să folosești GPT
  </a>
</div>

![Ghid prompturi GPT 5.5](https://img.limaxai.com/aiweb/chatgpt-260522-1.png)

## Context: de ce rescrii

Prompturile vechi **supraspecifică procesul**. Cu GPT-5.5 e zgomot — **rescrie de la zero**.

Co-fondatorul Django Simon Willison a observat că OpenAI recomandă **rescriere de la zero**. La GPT-5.5 (sau LimaxAI), prompturile sunt un produs nou.

## Schimbarea 1: de la proces la rezultat

**Stil vechi (proces):**

> Verifică A, apoi B, compară câmpuri, gestionează excepții, alege tool-ul și explică tot.

**Stil nou (rezultat):**

> Rezolvă complet problema utilizatorului. Folosește politica și datele; raportează ce s-a făcut și ce rămâne. O singură întrebare critică.

**Descrie destinația, nu fiecare pas.**

## Schimbarea 2: mai puține absolute

GPT-5.5 e sensibil la trebuie/întotdeauna; reguli conflictuale eșuează.

| Situație | Stil |
| --- | --- |
| Siguranță, câmpuri obligatorii | mereu/niciodată |
| Căutare sau întrebare | condițional |

Înlocuie «trebuie să caute» cu «răspunde fără căutare dacă contextul ajunge».

## Schimbarea 3: rol scurt

**Rol** 1–2 propoziții; **personalitate** = ton și colaborare.

- **Steady:** reliable collaborator—calm, direct; advance without unnecessary check-ins.
- **Expressive:** conversational, curious; ask when ambiguous, decide when context is enough.

## Schimbarea 4: preamble

Înainte de tool-uri: 1–2 propoziții vizibile despre primire și primul pas.

Produse precum Codex folosesc deja acest model (ex. analizez codebase-ul, încep cu testele) pentru API și sarcini ChatGPT lungi.

## Schimbarea 5: reguli de oprire

Doar «caută și răspunde» fără oprire poate crea bucle.

1. **Buget căutare:** o rundă implicit.
2. **Oprire buclă:** oprește când dovada răspunde.

## Schimbarea 6: schelet în 7 părți

| Parte | Rol |
| --- | --- |
| Rol | Funcție |
| Personalitate | Ton |
| Obiectiv | Livrabil |
| Succes | Gata |
| Constrângeri | Limite |
| Output | Format |
| Stop | Când oprești |

Q&A simplu: adesea Obiectiv + Output. OpenAI developer console also offers **Optimize** to reshape prompts to this structure.

## Schimbarea 7: format

GPT-5.5 e concis implicit. API: `text.verbosity`, **Structured Outputs**.

> Paragrafe naturale implicit.

> Păstrează structura, lungimea și vocea.

## Migrație: reasoning jos

Reevaluează `reasoning.effort`; low e des suficient.

## Rezumat

**Spune ce vrei—nu fiecare pas.**

| Dimensiune | Înainte | GPT-5.5 |
| --- | --- | --- |
| Proces | Pași | Rezultat |
| Ton | Absolut | Linii roșii |
| Rol | Lung | Scurt |
| Multi-pas | Imediat | Preamble |
| Stop | Omis | Explicit |
| Structură | Liber | 7 părți |
| Format | Default | API+prompt |

Testează pe sarcini reale și încearcă GPT pe LimaxAI.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/ro/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    Începe să folosești GPT
  </a>
</div>
