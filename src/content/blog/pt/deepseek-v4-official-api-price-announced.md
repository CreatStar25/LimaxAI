---
title: "DeepSeek V4 lançado oficialmente, preços oficiais da API anunciados"
description: "Os modelos da série DeepSeek V4 foram lançados oficialmente, com preços de API oficiais completos anunciados. Incluem as versões Pro e Flash, suportam contexto ultra-longo de 1 milhão de tokens e fornecem serviços de modelos grandes de alto desempenho e econômicos para desenvolvedores."
tags: ["deepseek v4", "site oficial deepseek", "tutorial deepseek", "preço deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "pt"
author: "DeepSeek HK"
---

Palavras-chave: deepseek v4, site oficial deepseek, tutorial deepseek, preço deepseek v4

Data de publicação: 25 de abril de 2026

Autor: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/pt/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Comece a usar o DeepSeek
  </a>
</div>

![DeepSeek V4 lançado oficialmente, preços oficiais da API anunciados](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

Hoje, a DeepSeek anunciou oficialmente o plano de preços da API para os novos modelos da série V4, marcando o lançamento comercial oficial desse grande modelo de próxima geração muito aguardado por desenvolvedores de todo o mundo. A série DeepSeek V4 inclui duas versões: Flash e Pro, ambas suportam contexto ultra-longo de 1 milhão de tokens. Enquanto o nível de desempenho foi significativamente melhorado, a eficiência de custos também foi otimizada, oferecendo uma opção mais competitiva para o desenvolvimento de aplicativos de IA.

## Descrição do modelo e preços
Os preços da API DeepSeek são calculados por milhão de tokens. Um token é a menor unidade de texto reconhecida pelo modelo, que pode ser uma palavra, um número ou até mesmo um sinal de pontuação. As taxas são calculadas com base no número total de tokens de entrada e saída efetivamente processados pelo modelo.

### Comparação detalhada dos parâmetros do modelo
| Recurso | deepseek-v4-flash* | deepseek-v4-pro |
|---------|---------------------|------------------|
| URL base (formato OpenAI) | https://api.deepseek.com | https://api.deepseek.com |
| URL base (formato Anthropic) | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| Versão do modelo | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| Modo de pensamento | Suporta tanto o modo sem pensamento quanto o modo de pensamento (padrão). Consulte a página do Modo de Pensamento para instruções de alternância | Suporta tanto o modo sem pensamento quanto o modo de pensamento (padrão). Consulte a página do Modo de Pensamento para instruções de alternância |
| Comprimento do contexto | 1 milhão | 1 milhão |
| Comprimento máximo de saída | Até 384 mil | Até 384 mil |
| Saída JSON | ✓ | ✓ |
| Chamadas de ferramentas | ✓ | ✓ |
| Preenchimento de prefixo de chat (Beta) | ✓ | ✓ |
| Preenchimento FIM (Beta) | Apenas modo sem pensamento | Apenas modo sem pensamento |
| 1 milhão de tokens de entrada (acerto no cache) | $0,028 | $0,145 |
| 1 milhão de tokens de entrada (erro no cache) | $0,14 | $1,74 |
| 1 milhão de tokens de saída | $0,28 | $3,48 |

* Nota: Os nomes dos modelos "deepseek-chat" e "deepseek-reasoner" serão gradualmente descontinuados no futuro. Para compatibilidade, esses dois nomes correspondem atualmente, respectivamente, ao modo sem pensamento e ao modo de pensamento do "deepseek-v4-flash".

## Regras de dedução de taxas
Valor do consumo real = uso de tokens × preço unitário correspondente. As taxas serão deduzidas diretamente do saldo de recarga ou do saldo de presente. Quando ambos os saldos existirem, o sistema priorizará o uso do saldo de presente.

Os preços dos produtos podem ser ajustados de acordo com as condições de mercado, e a DeepSeek reserva-se o direito final de ajuste de preços. Os desenvolvedores são aconselhados a recarregar de acordo com suas necessidades reais de uso e a verificar regularmente a página oficial de preços para obter as informações mais recentes.

## Análise dos benefícios principais
Mantendo o alto desempenho, a série DeepSeek V4 aplica uma estratégia de preços extremamente competitiva, que é especialmente adequada para vários cenários de aplicativos de IA:

### Opção de poder computacional econômica
A versão deepseek-v4-flash oferece excelente desempenho a um preço extremamente baixo, especialmente adequada para cenários com alta taxa de transferência e altos requisitos de velocidade de resposta, como atendimento ao cliente inteligente, geração de conteúdo, aplicativos de bate-papo regulares, etc. Seu preço de apenas $0,028 por milhão de tokens de entrada quando há acerto no cache reduz significativamente os custos operacionais de aplicativos em larga escala.

### Experiência de desempenho de ponta
A versão deepseek-v4-pro é otimizada para tarefas de raciocínio complexo e campos profissionais, e tem desempenho melhor em cenários como cálculos matemáticos, geração de código, perguntas de conhecimento profissional, adequada para cenários de aplicativos profissionais que exigem saída de alta precisão.

### Suporte de contexto ultra-longo
Ambas as versões suportam contexto ultra-longo de 1 milhão de tokens e comprimento máximo de saída de 384 mil tokens, e podem lidar com tarefas de texto de tamanho muito grande, como livros completos, documentos longos, código de projeto completo, fornecendo uma base sólida para o desenvolvimento de aplicativos de IA complexos.

## Guia de início rápido
Começar a usar o DeepSeek V4 é muito simples:
1. Acesse o site oficial da DeepSeek para registrar uma conta
2. Obtenha a chave de API
3. Faça chamadas de interface de acordo com a documentação oficial
4. Comece a construir seu aplicativo de IA

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/pt/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Comece a usar o DeepSeek
  </a>
</div>

O lançamento do DeepSeek V4 oferece mais opções para os desenvolvedores. Seja você um desenvolvedor individual ou um aplicativo de nível empresarial, você pode encontrar uma solução de poder computacional que atenda às suas necessidades nesse sistema de modelos. Com a melhoria contínua do ecossistema de modelos, acreditamos que o DeepSeek V4 se tornará uma pedra angular importante para o desenvolvimento de aplicativos de IA, promovendo o nascimento de mais produtos inovadores.
