---
title: "DeepSeek V4: Contexto de 1 milhão de tokens, redução de custos de 73%"
description: "Os modelos da série DeepSeek V4 foram oficialmente lançados, suportando contexto de 1 milhão de tokens, com custo de inferência reduzido em 73% em comparação com a geração anterior. Inclui as versões Pro e Flash, oferecendo opções de modelos grandes de alto desempenho e custo-benefício para desenvolvedores de IA."
tags: ["deepseek v4", "site oficial da deepseek", "tutorial deepseek", "preço deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "pt"
author: "DeepSeek HK"
---

Palavras-chave: deepseek v4, site oficial da deepseek, tutorial deepseek, preço deepseek v4

Data de publicação: 24 de abril de 2026

Autor: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/pt/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Comece a usar o DeepSeek
  </a>
</div>

![DeepSeek V4: Contexto de 1 milhão de tokens, redução de custos de 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Hoje, a DeepSeek anunciou oficialmente o lançamento e o código aberto da versão de prévia da série DeepSeek-V4, o sistema de modelo flagship da próxima geração após o V3.2. Este lançamento inclui dois modelos: DeepSeek-V4-Pro e DeepSeek-V4-Flash, ambos adotam a arquitetura MoE com escalas de parâmetros totais de 1,6T (49B ativados) e 284B (13B ativados) respectivamente, e ambos suportam um contexto máximo de 1 milhão de tokens.

A DeepSeek também declarou que, limitado pelo poder de computação de alta performance, a vazão de serviço atual do DeepSeek-V4-Pro é muito limitada. Espera-se que após o lançamento em massa dos supernós Ascend 950 no segundo semestre do ano, seu preço seja reduzido significativamente. Além disso, o DeepSeek-V4 recebeu suporte de adaptação Day 0 da Cambricon, e o código de adaptação relevante foi disponibilizado como código aberto para a comunidade do GitHub.

## Diferenças no posicionamento dos modelos
O DeepSeek-V4-Pro se concentra no limite superior de desempenho, comparando-se aos modelos flagship de código fechado; enquanto o DeepSeek-V4-Flash reduz significativamente a escala de parâmetros e a escala de ativação em troca de menor latência e menor custo. Comparado ao modelo da geração anterior, ele foi ainda mais aprimorado nas capacidades de agente, conhecimento do mundo e tarefas de raciocínio complexo, e pela primeira vez, o "contexto de 1 milhão de tokens" foi disponibilizado como uma capacidade padrão.

### Capacidades de agente significativamente aprimoradas
Em termos de capacidades de agente, as capacidades de agente do DeepSeek-V4-Pro foram significativamente aprimoradas. Ele entrou no primeiro nível de código aberto em avaliações como codificação agentica. Avaliações internas mostram que sua qualidade de entrega está próxima do modo não pensante do Claude Opus 4.6, mas ainda há uma lacuna em comparação com seu modo pensante.

O DeepSeek-V4-Pro superou os modelos de código aberto atualmente avaliados publicamente em tarefas de alta dificuldade como matemática, STEM e código de competição, e seu desempenho geral está próximo ou mesmo comparável aos principais modelos de código fechado como o GPT-5.4 e o Claude Opus 4.6-Max.

### Custo de contexto longo significativamente reduzido
Ao mesmo tempo, o DeepSeek-V4 introduziu um conjunto de otimizações mais radicais na eficiência de contexto longo: em cenários de 1 milhão de tokens, seu cálculo de inferência por token é apenas 27% do V3.2, e o uso de cache KV é reduzido para cerca de 10%, reduzindo significativamente os custos de poder de computação e memória de vídeo das tarefas de link longo.

## Plano de preços da API
Os preços da API oficialmente anunciados para a série DeepSeek-V4:
- DeepSeek-V4-Pro: 1 yuan / milhão de tokens para entrada em cache, 12 yuan / milhão de tokens para entrada sem cache, 24 yuan / milhão de tokens para saída
- DeepSeek-V4-Flash: apenas 0,2 yuan / milhão de tokens para entrada em cache, 1 yuan / milhão de tokens para entrada sem cache, 2 yuan / milhão de tokens para saída

Atualmente, a série DeepSeek-V4 foi lançada no site oficial e no aplicativo, e as APIs e os pesos dos modelos são abertos simultaneamente.

## Experiência prática: Melhoria abrangente das capacidades
Nós inicialmente experimentamos as mudanças do DeepSeek-V4, testando principalmente o modelo DeepSeek-V4-Pro.

### Capacidade de programação agentica significativamente aprimorada
No caso de desenvolvimento web front-end de uma só vez, o DeepSeek-V4-Pro mostrou alta eficiência de execução. Como os requisitos não eram complexos, o modelo levou apenas 5 segundos para pensar, depois desenvolveu rapidamente, o que difere significativamente do padrão dos modelos DeepSeek anteriores que desperdiçam muitos tokens no pensamento. Depois de entrar no processo de geração real, o comprimento da saída do DeepSeek-V4-Pro é significativamente maior do que o de outros modelos DeepSeek, com velocidade de geração rápida, basicamente gerando em unidades de 5 linhas de código, e o grau de conclusão da página web é maior do que o do DeepSeek-V3.2, com design mais rico.

No teste de tarefa que combina capacidades de agente e programação, o DeepSeek-V4-Pro pode executar chamadas de ferramentas complexas de várias rodadas, e o número de entradas de pesquisa online também aumentou em comparação com modelos anteriores, e a coleta de informações é mais abrangente. O plano de viagem gerado final é planejado de forma razoável, e é equipado com a localização de cada atração turística, que pode ser usada diretamente no aplicativo de navegação após o clique, muito conveniente. Nas tarefas de agente, pode-se observar que suas ações são muito decisivas, as chamadas de ferramentas e o pensamento são resolvidos em poucos segundos, e a eficiência dos tokens é boa.

### Teste prático de contexto de 1 milhão de tokens
Os modelos da série DeepSeek-V4 suportam contexto de 1 milhão de tokens. Nós carregamos a trilogia completa dos "Três Corpos" (cerca de 540.000 tokens no total) para teste, e o modelo pode localizar rapidamente o conteúdo especificado, realizando com sucesso a recuperação de informações em textos muito longos.

O teste da data de corte de conhecimento mostra que a data de corte de conhecimento do DeepSeek-V4-Pro ainda está em 2025. Além disso, este modelo não suporta capacidades visuais por enquanto. Depois de carregar imagens, ele ainda executará a extração de texto, e as imagens sem texto mostrarão que não podem ser processadas.

## Inovação da arquitetura técnica
A mudança mais direta desta geração V4 é que o "contexto longo" se tornou uma capacidade padrão. Ao contrário do método tradicional de simplesmente expandir a janela, o DeepSeek-V4-Pro introduz uma nova arquitetura de atenção híbrida, combinando atenção esparsa comprimida com atenção de alta compressão (HCA), e colaborando com a atenção esparsa DSA para comprimir na dimensão dos tokens.

Além disso, o modelo introduz uma hiperconexão restrita por variedade (mHC) para melhorar as conexões residuais tradicionais, e usa o otimizador Muon para melhorar a velocidade de convergência e a estabilidade do treinamento. Esta série de projetos permite que o modelo controle efetivamente o custo de computação enquanto "lembra por mais tempo".

De acordo com dados oficiais, no contexto de 1 milhão de tokens, os TFLOPs de inferência por token do DeepSeek-V4-Pro foram reduzidos em cerca de 3,7 a 9,8 vezes em comparação com o DeepSeek-V3.2, e o uso de cache KV foi reduzido em 9,5 a 13,7 vezes. Isso significa que as tarefas de link muito longo que eram difíceis de serem executadas na prática no passado (como planejamento de agente de várias rodadas, processamento de documentos longos) começaram a entrar no intervalo executável.

## Desempenho: Novo teto para modelos de código aberto
Do ponto de vista da estrutura de capacidades, a melhoria do DeepSeek-V4-Pro é a melhoria simultânea das capacidades de raciocínio, conhecimento e agente:

### Capacidades de conhecimento e raciocínio
Em tarefas de conhecimento e raciocínio, ele supera os modelos de código aberto principais atuais em avaliações como SimpleQA, Apex e Codeforces, e está próximo do GPT-5.4 e do Gemini 3.1 Pro em muitas tarefas. Por exemplo, ele marcou 90,2 pontos na lista curta do Apex, já superando os principais modelos de código fechado; ele também mantém o nível do primeiro escalão em tarefas de competição como Codeforces.

### Capacidades de agente
Em tarefas relacionadas à capacidade de agente, o DeepSeek-V4-Pro tem desempenho estável em indicadores como SWE Verified e Terminal Bench. O SWE Verified atinge 80,6, próximo ao Claude Opus 4.6, significativamente mais alto que a maioria dos modelos de código aberto. No Terminal Bench 2.0, seu desempenho também supera modelos como GLM-5.1 Thinking e Kimi K2.6 Thinking.

No geral, o DeepSeek-V4-Pro é atualmente o "teto" dos modelos de código aberto.

## Otimização especial para cenários de agente
Esta geração do DeepSeek-V4 fortalece significativamente a adaptação aos cenários de agente. Ele realizou otimizações especiais para frameworks de agente principais como Claude Code, OpenClaw e CodeBuddy, e funciona de forma mais estável em tarefas de várias etapas como geração de código e geração de documentos.

Do ponto de vista do posicionamento prático, o DeepSeek-V4-Pro já é usado como modelo de codificação agentica dentro da DeepSeek, com foco na "conclusão de tarefas". Para tarefas simples, o V4-Flash já está próximo da versão Pro, mas ainda há uma lacuna significativa em tarefas complexas, o que essencialmente fornece duas "marchas de poder de computação" para aplicações de agente.

## Conclusão
O lançamento do DeepSeek-V4 não apenas demonstra a acumulação da equipe em tecnologia e arquitetura, mas também marca a capacidade de implantação real dos grandes modelos de código aberto no ecossistema de poder de computação nacional. Após adaptação e otimização para chips nacionais como Huawei Ascend e Cambricon, a série DeepSeek-V4 alcançou suporte estável e inferência eficiente para o contexto de 1 milhão de tokens, tornando possíveis as tarefas de link longo e a execução de agente de várias etapas.

Esta versão implementa o posicionamento diferenciado do Pro e do Flash, aproximando-se dos modelos flagship de código fechado em desempenho e mantendo alta custo-benefício em custo, oferecendo opções abertas sem precedentes para desenvolvedores nacionais. Mais importante ainda, este lançamento mostra que os modelos de código aberto não só podem se firmar na competição global, mas também podem transformar o potencial técnico em produtividade prática com a ajuda do poder de computação nacional e da arquitetura otimizada.

O DeepSeek-V4 pode ser um passo fundamental dado pela força de código aberto chinesa na área de IA de alto desempenho, e também fornece orientação clara para a inovação e implantação do ecossistema de IA nacional.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/pt/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Comece a usar o DeepSeek
  </a>
</div>
