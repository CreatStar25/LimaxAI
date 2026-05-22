---
title: "OpenAI veröffentlicht den GPT-5.5-Prompt-Leitfaden: 7 zentrale Änderungen"
description: "Der offizielle GPT-5.5-Leitfaden setzt auf ergebnisorientierte Prompts. 7 Änderungen, 7-teiliges Gerüst, Stoppregeln und Vergleichstabelle für ChatGPT-Prompts."
tags: ["chatgpt", "gpt 5.5", "gpt tutorial"]
pubDate: "2026-05-22"
heroImage: "https://img.limaxai.com/aiweb/chatgpt-260522-1.png"
lang: "de"
author: "LimaxAI Team"
---

When GPT-5.5 launched, OpenAI published an official prompting guide. If you still write step-by-step "micromanagement" prompts from older models, you may be narrowing what the model can do. This article turns the seven most important shifts into practical guidance.

Keywords: chatgpt, gpt 5.5, gpt tutorial.

Published: May 22, 2026

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/de/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    GPT jetzt nutzen
  </a>
</div>

![OpenAI GPT 5.5 prompt guide seven key changes](https://img.limaxai.com/aiweb/chatgpt-260522-1.png)

## Background: why legacy prompts need a rewrite



Django-Mitgründer Simon Willison wies darauf hin, dass OpenAI empfiehlt, **von Grund auf neu zu schreiben**, statt anzunehmen, dass getunte Legacy-Prompts noch funktionieren. Wenn Sie zu GPT-5.5 wechseln (oder ähnliche Fähigkeiten auf LimaxAI testen), behandeln Sie Prompts als neues Produktdesign—not a model swap.

## Change 1: from hand-holding to outcome-first

**Alter Stil (Prozess zuerst):**

> Prüfe A, dann B, vergleiche Felder einzeln, durchdenke alle Ausnahmen, wähle ein Tool und erkläre danach den gesamten Ablauf.

**Neuer Stil (Ergebnis zuerst):**

> Löse das Anliegen des Nutzers vollständig. Nutze Richtlinien und Kontodaten, um die Priorität zu setzen, berichte, was erledigt ist und was offen bleibt. Stelle bei fehlenden Infos nur die wichtigste Frage.

**Beschreibe das Ziel, nicht jeden Schritt auf der Karte.** GPT-5.5 plant den Weg selbst; ein starres Skript blockiert bessere Routen.

## Change 2: fewer absolutes—reserve them for real red lines

Guardrails like "always JSON," "never exceed 500 words," or "must search before answering" were common. GPT-5.5 is **highly sensitive to absolutes**—when two conflicting "must" rules appear, the model may try to satisfy both and fail both.

| Situation | Recommended style |
| --- | --- |
| Safety rules, required fields, hard bans | Use always/never |
| Whether to search or ask the user | Use conditional rules |

Example: replace "must search before answering" with "After receiving the question, check whether existing context is enough to answer; if yes, reply directly without searching."

## Change 3: roles return—but stay short



- **Steady:** reliable collaborator—calm, direct; advance without unnecessary check-ins.
- **Expressive:** conversational, curious; ask when ambiguous, decide when context is enough.

## Change 4: acknowledge multi-step work before executing



Produkte wie Codex nutzen dieses Muster bereits (z. B. «Analysiere deine Codebasis, beginne mit Testdateien») für API und lange ChatGPT-Aufgaben.

## Change 5: define stop conditions

Wenn nur «suche relevante Informationen und antworte» steht, ohne Stopp, kann das Modell in Suchschleifen geraten.

Zwei gängige Strategien:

1. **Suchbudget:** standardmäßig eine Runde bei normaler Q&A; antworten, wenn Seite eins reicht. Zweite Runde nur ohne Antwort auf Seite eins, fehlende Schlüsseldaten oder Wunsch nach Vollständigkeit.
2. **Schleifenstopp:** nach jeder Tool-Runde prüfen, ob die vorhandenen Belege die Kernfrage beantworten; wenn ja, stoppen.

## Change 6: the official seven-part prompt skeleton

| Section | Purpose |
| --- | --- |
| Role | 1–2 sentences: function and context |
| Personality | Tone, style, collaboration |
| Goal | User-visible deliverable |
| Success | Definition of done |
| Constraints | Safety, business, evidence, side effects |
| Output | Format, length, voice |
| Stop rules | When to retry, escalate, refuse, ask, or stop |

OpenAI developer console also offers **Optimize** to reshape prompts to this structure.

## Change 7: format control and concise defaults

GPT-5.5 antwortet standardmäßig knapp und direkt. API: `text.verbosity` (Standard `medium`, kürzer mit `low`); komplexe Formate über **Structured Outputs**.

Beispiel für Layout:

> Standardmäßig natürliche Absätze; Überschriften, Fett und Listen nur bei Mehrwert für Verständnis.

Bei Umschreibungen zuerst **was bleibt**, dann **wie editieren**:

> Struktur, Länge und Stimme beibehalten; nur Klarheit verbessern—keine neuen Behauptungen oder Absätze ohne Nutzerwunsch.

Ohne Erhaltungsregeln expandiert das Modell oft standardmäßig.

## Migration tip: tune reasoning effort from the low end

Beyond prompts, re-evaluate **`reasoning.effort`**. GPT-5.5 defaults to `medium`; many tasks work at `low`. Higher is not automatically better—conflicting instructions or weak stop rules plus high effort can mean over-searching and detours. Run A/B tests on a fixed eval set; start with `low` / `medium`, then move to `high` / `xhigh` only when quality gains justify latency and cost.

## Summary: one line to remember

**Say what you want—not how to do every step.**

| Dimension | GPT-5.4 and earlier | GPT-5.5 |
| --- | --- | --- |
| Process | Detailed steps | Outcomes only |
| Tone | Many absolutes | Absolutes for red lines; conditionals elsewhere |
| Role | Long background | 1–2 sentences + personality |
| Multi-step | Execute immediately | Preamble first |
| Stopping | Often omitted | Should be explicit |
| Structure | Free-form | Seven-part skeleton (trim as needed) |
| Format | Defaults | API params + prompt guidance |

After rewriting, run side-by-side tests on real tasks. To try GPT in chat, use the button below on LimaxAI with your preferred model.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/de/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    GPT jetzt nutzen
  </a>
</div>
