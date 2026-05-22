---
title: "OpenAI publiceert officiële GPT 5.5-promptgids: 7 belangrijke wijzigingen"
description: "De officiële GPT-5.5-gids verschuift van proces- naar resultaatgerichte prompts. 7 wijzigingen, 7-delig skelet, stopregels en vergelijkingstabel voor ChatGPT-prompts."
tags: ["chatgpt", "gpt 5.5", "gpt tutorial"]
pubDate: "2026-05-22"
heroImage: "https://img.limaxai.com/aiweb/chatgpt-260522-1.png"
lang: "nl"
author: "LimaxAI Team"
---

OpenAI publiceerde de officiële GPT-5.5-promptgids. Stap-voor-stap-prompts van oudere modellen kunnen prestaties beperken. Zeven belangrijke wijzigingen.

Trefwoorden: chatgpt, gpt 5.5, gpt tutorial.

Gepubliceerd: 22 mei 2026

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/nl/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    GPT gaan gebruiken
  </a>
</div>

![GPT 5.5 promptgids OpenAI](https://img.limaxai.com/aiweb/chatgpt-260522-1.png)

## Achtergrond: waarom opnieuw schrijven

Oude prompts **specificeren het proces te veel**. Bij GPT-5.5 is dat ruis—**schrijf opnieuw**.

Django-medegrondlegger Simon Willison merkte op dat OpenAI adviseert **from scratch te herschrijven**. Bij GPT-5.5 (of LimaxAI) is prompts een nieuw productontwerp.

## Wijziging 1: van proces naar resultaat

**Oude stijl (proces eerst):**

> Check A, dan B, vergelijk velden, redeneer over uitzonderingen, kies een tool en leg alles uit.

**Nieuwe stijl (resultaat eerst):**

> Los het probleem volledig op. Gebruik beleid en accountdata; rapporteer gedaan en openstaand. Eén kritische vraag bij ontbrekende info.

**Beschrijf de bestemming, niet elke stap.**

## Wijziging 2: minder absoluten

GPT-5.5 is gevoelig voor moet/altijd; tegenstrijdige regels falen.

| Situatie | Stijl |
| --- | --- |
| Veiligheid, verplichte velden | altijd/nooit |
| Zoeken of vragen | voorwaarden |

Vervang «moet zoeken» door «antwoord zonder zoeken als context volstaat».

## Wijziging 3: korte rol

**Rol** in 1–2 zinnen; **persoonlijkheid** = toon en samenwerking.

- **Steady:** reliable collaborator—calm, direct; advance without unnecessary check-ins.
- **Expressive:** conversational, curious; ask when ambiguous, decide when context is enough.

## Wijziging 4: preambule

Vóór tools: 1–2 zichtbare zinnen over ontvangst en eerste actie.

Producten zoals Codex gebruiken dit patroon al (bijv. codebase analyseren, beginnend met tests) voor API en lange ChatGPT-taken.

## Wijziging 5: stopregels

Alleen «zoek en antwoord» zonder stop kan zoekloops geven.

1. **Zoekbudget:** standaard één ronde.
2. **Loopstop:** stop als bewijs de kernvraag beantwoordt.

## Wijziging 6: zevendelig skelet

| Deel | Doel |
| --- | --- |
| Rol | Functie |
| Persoonlijkheid | Toon |
| Doel | Output |
| Succes | Klaar |
| Beperkingen | Grenzen |
| Output | Formaat |
| Stop | Wanneer stoppen |

Eenvoudige Q&A: vaak Doel + Output. OpenAI developer console also offers **Optimize** to reshape prompts to this structure.

## Wijziging 7: formaat

GPT-5.5 is standaard beknopt. API: `text.verbosity`, **Structured Outputs**.

> Natuurlijke alinea's standaard.

> Behoud structuur, lengte en stem bij herschrijven.

## Migratie: reasoning laag

Herzie `reasoning.effort`; vaak volstaat low.

## Samenvatting

**Zeg wat je wilt—niet elke stap.**

| Dimensie | Voorheen | GPT-5.5 |
| --- | --- | --- |
| Proces | Stappen | Resultaat |
| Toon | Absoluten | Alleen rode lijnen |
| Rol | Lang | Kort |
| Multi-step | Direct | Preambule |
| Stop | Ontbreekt | Expliciet |
| Structuur | Vrij | 7 delen |
| Formaat | Default | API+prompt |

Test op echte taken en probeer GPT via LimaxAI.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/nl/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    GPT gaan gebruiken
  </a>
</div>
