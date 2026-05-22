---
title: "OpenAI publica la guía de prompts de GPT 5.5: 7 cambios clave"
description: "La guía oficial de GPT-5.5 pasa de prompts por procesos a prompts orientados a resultados. 7 cambios, estructura en 7 partes, reglas de parada y tabla comparativa."
tags: ["chatgpt", "gpt 5.5", "tutorial gpt"]
pubDate: "2026-05-22"
heroImage: "https://img.limaxai.com/aiweb/chatgpt-260522-1.png"
lang: "es"
author: "LimaxAI Team"
---

When GPT-5.5 launched, OpenAI published an official prompting guide. If you still write step-by-step "micromanagement" prompts from older models, you may be narrowing what the model can do. This article turns the seven most important shifts into practical guidance.

Keywords: chatgpt, gpt 5.5, gpt tutorial.

Published: May 22, 2026

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/es/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    Empezar a usar GPT
  </a>
</div>

![OpenAI GPT 5.5 prompt guide seven key changes](https://img.limaxai.com/aiweb/chatgpt-260522-1.png)

## Background: why legacy prompts need a rewrite



Django co-creator Simon Willison noted that OpenAI recommends **rewriting from scratch** rather than assuming tuned legacy prompts still work. If you are moving to GPT-5.5 (or trying similar capabilities on LimaxAI), treat prompts as a new product design—not a model-name swap.

## Change 1: from hand-holding to outcome-first

**Estilo antiguo (proceso primero):**

> Comprueba A, luego B, compara campos uno a uno, razona cada excepción, decide qué herramienta llamar y explica todo el proceso al usuario.

**Estilo nuevo (resultado primero):**

> Resuelve por completo el problema del usuario. Usa política y datos de cuenta para decidir qué hacer primero; informa qué se hizo y qué queda. Si falta información, haz solo la pregunta más crítica.

**Describe el destino, no cada giro del mapa.** GPT-5.5 planifica su propio camino; un guion rígido puede bloquear mejores rutas.

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



Products like Codex already use this pattern (e.g. "Analyzing your codebase, starting with test files") for APIs and long ChatGPT tasks alike.

## Change 5: define stop conditions

Si solo dices «busca información relevante y responde» sin definir cuándo parar, el modelo puede entrar en bucles de recuperación.

Dos estrategias habituales:

1. **Presupuesto de búsqueda:** una ronda por defecto en Q&A normal; responde si la evidencia de la primera página basta. Segunda ronda solo si la primera no tiene la respuesta, faltan datos clave o el usuario pide cobertura exhaustiva.
2. **Parada de bucle:** tras cada ronda de herramientas, pregúntate si la evidencia actual responde la pregunta central; si sí, para.

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

GPT-5.5 responde de forma concisa y directa por defecto. En la API usa `text.verbosity` (`medium` por defecto; prueba `low` para respuestas más cortas); para formatos complejos prioriza **Structured Outputs**.

Ejemplo:

> Por defecto párrafos naturales; títulos, negrita y listas solo cuando ayuden a comprender.

En reescrituras, indica **qué conservar** antes de **cómo editar**:

> Conserva estructura, longitud y voz originales; mejora solo la claridad—sin nuevas afirmaciones o párrafos salvo petición del usuario.

Sin reglas de conservación, el modelo suele expandir y reestructurar por defecto.

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
  <a href="https://www.limaxai.com/es/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    Empezar a usar GPT
  </a>
</div>
