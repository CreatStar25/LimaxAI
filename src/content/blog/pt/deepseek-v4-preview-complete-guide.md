---
title: "Após 15 Meses de Espera, DeepSeek Finalmente Revela a Prévia do V4: Análise Abrangente"
description: "O DeepSeek V4 Preview é lançado oficialmente, apresentando dois modelos MoE (Pro e Flash) com suporte nativo a contexto de 1 milhão de tokens, oferecendo melhorias significativas de desempenho ao mesmo tempo em que reduz drasticamente os custos de inferência. Este artigo fornece uma análise detalhada da arquitetura técnica, desempenho e preços do DeepSeek V4."
tags: ["deepseek v4", "site oficial deepseek", "tutorial deepseek", "preço deepseek v4"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "pt"
author: "DeepSeek HK"
---

Este artigo explora as características técnicas, desempenho e diretrizes de uso do DeepSeek V4, fornecendo uma análise abrangente das vantagens principais deste novo modelo de linguagem de grande porte. O conteúdo é escrito em um estilo acessível adequado tanto para entusiastas de tecnologia quanto para desenvolvedores.

Palavras-chave: deepseek v4, site oficial deepseek, tutorial deepseek, preço deepseek v4.

Data de publicação: 25 de abril de 2026
Autor: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/pt/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Começar a Usar o DeepSeek
  </a>
</div>

![Análise Abrangente da Prévia do DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. Lançamento Oficial da Prévia do DeepSeek V4

Em 24 de abril, a DeepSeek anunciou oficialmente o lançamento da prévia do V4. Esta atualização importante vem 15 meses após o lançamento do V3.2, marcando outro avanço importante no roteiro de tecnologia de modelos grandes da DeepSeek.

De acordo com a introdução oficial, a série V4 inclui dois modelos MoE:
- **DeepSeek-V4-Pro**: 1,6T parâmetros totais, 49B parâmetros ativados
- **DeepSeek-V4-Flash**: 284B parâmetros totais, 13B parâmetros ativados

Ambos os modelos suportam nativamente contexto de 1 milhão de tokens, representando um salto qualitativo nas capacidades de processamento de textos longos. Notavelmente, sob configurações de contexto de 1M:
- Os FLOPs de inferência por token do V4-Pro são apenas 27% dos do V3.2, com KV Cache em apenas 10%
- O V4-Flash é ainda mais extremo, reduzindo essas métricas para 10% e 7%, respectivamente

Isso significa que, embora o comprimento do contexto tenha se expandido quase 8 vezes dos 128K do V3.2 para os 1M do V4, os requisitos computacionais por token diminuíram significativamente, alcançando avanços tanto na capacidade de contexto longo quanto na eficiência de inferência.

Os funcionários da DeepSeek afirmam claramente que a prévia do V4 é posicionada como uma atualização de infraestrutura, reconstruindo principalmente a estrutura de custos do contexto longo para preparar o caminho para a próxima etapa de escalonamento de tempo de teste e tarefas de longo alcance. Seu nível de capacidade atual ainda fica atrás do GPT-5.4 e do Gemini-3.1-Pro, com uma trajetória de desenvolvimento aproximadamente 3-6 meses atrás dos modelos de código fechado de ponta.

## 2. Dois Modelos, Três Modos de Inferência: Características Principais do V4

### 2.1 Parâmetros do Modelo e Vantagens de Custo

O maior destaque da série V4 é a otimização significativa da curva de custo. Sob configurações de contexto de 1M tokens:
- V4-Pro: Os FLOPs de inferência por token são apenas 27% dos do V3.2, KV Cache apenas 10%
- V4-Flash: Os FLOPs de inferência por token são apenas 10% dos do V3.2, KV Cache apenas 7%

Essa melhoria de eficiência reduz drasticamente o custo de inferência para contexto de nível milhão, fornecendo uma solução economicamente viável para processamento de textos longos, análise de documentos e outros cenários.

### 2.2 Sistema de Preços da API

A DeepSeek continua sua estratégia de precificação consistente de alto valor:
- **V4-Pro**: ¥1 por milhão de tokens de entrada (acerto de cache) ou ¥12 (erro de cache), ¥24 por milhão de tokens de saída
- **V4-Flash**: ¥0,2 por milhão de tokens de entrada (acerto de cache) ou ¥1 (erro de cache), ¥2 por milhão de tokens de saída

### 2.3 Três Níveis de Intensidade de Inferência

Cada modelo oferece três modos de inferência para atender a diferentes requisitos de cenário:
1. **Non-think**: Modo de saída direta, velocidade de resposta mais rápida
2. **Think High**: Modo de pensamento profundo regular, equilibrando velocidade e qualidade
3. **Think Max**: Injeta instruções fortes, maximiza o comprimento do contexto e da saída, liberando as capacidades totais do modelo

O modo Max melhora significativamente o desempenho do modelo: as pontuações do V4-Pro-Max aumentam de 34,5 para 37,7 em testes HLE, e de 85,5 para 90,2 em testes Apex Shortlist, ao custo de dobrar o número de tokens de saída.

## 3. Desempenho em Testes de Referência

De acordo com os dados de teste oficiais divulgados pela DeepSeek, a série V4 se sai excelentemente em múltiplas avaliações:

### 3.1 Testes de Conhecimento e Raciocínio
- O DeepSeek-V4-Pro-Max ocupa o primeiro lugar em Apex Shortlist (90,2%) e Codeforces (Avaliação 3206), duas tarefas de raciocínio/programação hardcore, demonstrando capacidades de lógica e algoritmo extremamente fortes
- O Gemini-3.1-Pro-High lidera em SimpleQA Verified (75,6%)
- Claude e GPT têm suas respectivas forças em diferentes projetos, com pequenas lacunas gerais

### 3.2 Testes de Capacidade de Agente
- Os quatro modelos têm desempenho igual em tarefas SWE Verified (todos alcançando 80,6%)
- A DeepSeek se destaca em Terminal Bench 2.0 (67,9%) e Toolathlon (51,8%), demonstrando vantagens claras em cenários de execução de instruções complexas e chamadas de ferramentas

Os funcionários afirmam que as capacidades de Agente do DeepSeek-V4-Pro melhoraram significativamente em comparação com as gerações anteriores, "oferecendo melhor experiência do usuário que o Sonnet 4.5, com qualidade de entrega próxima ao modo non-thinking do Opus 4.6, embora ainda fique atrás do modo thinking do Opus 4.6 em certa medida."

### 3.3 Conhecimento Mundial e Capacidades Gerais
- O V4-Pro supera significativamente outros modelos de código aberto em avaliações de conhecimento mundial, ficando apenas ligeiramente atrás do modelo de código fechado líder Gemini-Pro-3.1
- Em matemática, STEM e avaliações de código competitivo, o V4-Pro supera todos os modelos de código aberto atualmente avaliados publicamente, atingindo o nível dos modelos de código fechado mais avançados do mundo
- Como modelo econômico, o V4-Flash tem uma reserva de conhecimento ligeiramente menor que a versão Pro, mas capacidades de raciocínio semelhantes. Com parâmetros e valores de ativação menores, fornece serviços de API mais rápidos e econômicos
- Em avaliações de Agente, o V4-Flash tem desempenho comparável à versão Pro em tarefas simples, mas ainda tem lacunas em tarefas de alta dificuldade

## 4. Inovação Tecnológica Central: Reescrevendo o Mecanismo de Atenção

A mudança técnica mais central do V4 está na camada de atenção, resolvendo fundamentalmente o problema de eficiência da inferência de contexto longo.

Nos mecanismos de atenção Transformer tradicionais, cada token precisa calcular a similaridade com todos os tokens anteriores. Quando o contexto se expande de 100K para 1M, o custo computacional aumenta 100 vezes, o que é o gargalo central impedindo a adoção ampla do contexto longo.

O V4 adota um mecanismo de atenção dupla inovador com camadas alternadas:
1. **CSA (Compressed Sparse Attention)**: Primeiro mescla o cache KV para cada 4 tokens em um único resumo, depois permite que cada consulta selecione apenas os top-k resumos mais relevantes para o cálculo da atenção, comprimindo tanto o conteúdo a ser processado quanto focando apenas na informação relevante
2. **HCA (Heavy Compressed Attention)**: Usa compressão mais agressiva, mesclando cada 128 tokens em um resumo, depois aplica atenção densa nos resumos restantes sem seleção esparsa

Os dois mecanismos de atenção alternam e se empilham, combinados com uma ramificação de janela deslizante que lida com dependências de detalhes entre tokens próximos, formando uma abordagem combinada de "grão grosso + grão fino, esparso + denso".

Do ponto de vista da evolução tecnológica, a DeepSeek V2 e V3 seguiram principalmente a rota de esparsificação de parâmetros (grandes parâmetros totais mas ativando apenas especialistas parciais por token). O V4 abre um novo caminho de esparsificação de contexto (compressão KV, seleção top-k, taxas de compressão em camadas) sobre essa base. Esta é a primeira vez que a DeepSeek aplica o conceito de "esparsificação" à estrutura central do Transformer.

Além da camada de atenção, o V4 tem outras duas melhorias arquitetônicas importantes:
1. Atualiza as conexões residuais tradicionais para mHC (Manifold Constrained Hyperconnection), tornando a propagação para frente e para trás de redes profundas mais estável através de restrições matemáticas
2. Substitui o AdamW pelo otimizador Muon para a maioria dos módulos, alcançando convergência mais rápida e treinamento mais estável

Esta é a primeira vez que a DeepSeek modifica simultaneamente três componentes centrais do Transformer: atenção, conexões residuais e otimizador.

## 5. Inovação no Paradigma de Pós-Treinamento: Destilação de Modelos Especialistas

Em comparação com as mudanças arquitetônicas, a inovação do V4 em métodos de pós-treinamento é ainda mais notável.

O V3.2 usou uma abordagem de "RL misto", otimizando múltiplos objetivos simultaneamente com aprendizado por reforço. O V4 adota uma estratégia de duas etapas de "diferenciar depois unificar":
1. **Fase de Diferenciação**: Para diferentes domínios como matemática, código, Agente e seguimento de instruções, treine um modelo especialista separado para cada domínio. Esses especialistas primeiro passam por ajuste fino supervisionado com dados de domínio de alta qualidade, depois aprendizado por reforço com o algoritmo GRPO, cada especialista alcançando desempenho ótimo em seu domínio especializado
2. **Fase de Unificação**: Usa o método On-Policy Distillation (OPD) para "sintetizar" mais de dez especialistas de domínio de volta em um modelo estudante unificado. Depois que o estudante gera uma resposta, ele corresponde à distribuição de saída do especialista que "melhor entende este problema", absorvendo capacidades especialistas através do alinhamento em nível de logits

Essa abordagem pode ser entendida como destilar as capacidades de múltiplos "melhores alunos" de domínio em um único modelo. Para resolver o desafio de engenharia de carregar simultaneamente mais de dez modelos professores de parâmetros trilionários, a DeepSeek descarrega todos os pesos dos professores para o armazenamento distribuído, armazenando em cache apenas o estado oculto da última camada de cada professor. Durante o treinamento, as amostras são ordenadas por índice de professor, garantindo que apenas uma cabeça de professor resida na memória GPU a qualquer momento.

Essa abordagem evita o problema de interferência de capacidades comum no "RL misto" tradicional, permitindo que o modelo alcance desempenho de nível superior em múltiplos domínios.

## 6. Otimização Especial de Capacidades de Agente

O DeepSeek V4 inclui adaptações e otimizações especializadas para produtos de Agente mainstream, com desempenho aprimorado em tarefas de código, geração de documentos e outros cenários.

As otimizações especiais do V4 para capacidades de Agente incluem:
1. Durante o pós-treinamento, o Agente é tratado como uma direção especialista independente ao lado de matemática e código, com treinamento separado
2. O formato de chamada de ferramenta muda de JSON para estrutura XML com tokens especiais, reduzindo as taxas de erro de escape
3. Os rastros de raciocínio entre turnos são totalmente retidos em cenários de chamada de ferramentas, não sendo mais limpos a cada turno como no V3.2
4. Plataforma de sandbox DSec própria, com um único cluster capaz de gerenciar concorrentemente centenas de milhares de instâncias de sandbox, apoiando treinamento e avaliação de aprendizado por reforço de Agente

Os funcionários afirmam que as capacidades de Agente do V4-Pro "são melhores que o Sonnet 4.5, com qualidade de entrega próxima ao modo non-thinking do Opus 4.5, embora ainda fique atrás do modo thinking do Opus 4.6 em certa medida."

![Arquitetura Técnica do DeepSeek V4](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Resumo

O DeepSeek V4 Preview é um modelo grande com inovações tecnológicas excepcionais. Através da reconstrução do mecanismo de atenção e inovação no paradigma de treinamento, mantém fortes capacidades de raciocínio enquanto reduz drasticamente os custos de inferência de contexto longo, preparando o caminho para aplicações práticas de contexto de nível milhão.

Seja para cenários profissionais que exigem fortes capacidades de raciocínio ou aplicações em larga escala que buscam relação custo-benefício, a série V4 fornece opções adequadas. Se você deseja experimentar as poderosas capacidades do DeepSeek V4, seja bem-vindo a usá-lo diretamente através da nossa plataforma.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/pt/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Começar a Usar o DeepSeek
  </a>
</div>
