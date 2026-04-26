---
title: "DeepSeek V4 : Contexte de 1 million de tokens, réduction des coûts de 73%"
description: "Les modèles de la série DeepSeek V4 ont été officiellement lancés, prenant en charge un contexte de 1 million de tokens, avec une réduction des coûts d'inférence de 73% par rapport à la génération précédente. La gamme inclut les versions Pro et Flash, offrant des options de grands modèles performants et rentables pour les développeurs d'IA."
tags: ["deepseek v4", "site officiel deepseek", "tutoriel deepseek", "prix deepseek v4"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "fr"
author: "DeepSeek HK"
---

Mots-clés : deepseek v4, site officiel deepseek, tutoriel deepseek, prix deepseek v4

Date de publication : 24 avril 2026

Auteur : DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/fr/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Commencer à utiliser DeepSeek
  </a>
</div>

![DeepSeek V4 : Contexte de 1 million de tokens, réduction des coûts de 73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Aujourd'hui, DeepSeek a officiellement annoncé le lancement et l'open source de la version préliminaire de la série DeepSeek-V4, le système de modèle phare de nouvelle génération succédant au V3.2. Cette sortie comprend deux modèles : DeepSeek-V4-Pro et DeepSeek-V4-Flash, tous deux adoptant l'architecture MoE avec des échelles de paramètres totales de 1,6T (49B activés) et 284B (13B activés) respectivement, et prenant tous deux en charge un contexte maximum de 1 million de tokens.

DeepSeek a également indiqué qu'en raison de la limitation de la puissance de calcul haut de gamme, le débit de service actuel de DeepSeek-V4-Pro est très limité. Il est prévu qu'après le déploiement massif des supernœuds Ascend 950 au second semestre de l'année, son prix sera considérablement réduit. De plus, DeepSeek-V4 bénéficie du support d'adaptation Day 0 de Cambricon, et le code d'adaptation correspondant a été mis en open source sur la communauté GitHub.

## Différences de positionnement des modèles
DeepSeek-V4-Pro se concentre sur les limites de performance, se comparant aux modèles phares à code source fermé ; tandis que DeepSeek-V4-Flash réduit considérablement l'échelle des paramètres et l'échelle d'activation en échange d'une latence plus faible et d'un coût réduit. Par rapport au modèle de génération précédente, il a encore amélioré ses capacités d'agent, ses connaissances mondiales et ses performances dans les tâches de raisonnement complexes, et pour la première fois, le "contexte de 1 million de tokens" est ouvert en tant que fonctionnalité par défaut.

### Capacités d'agent considérablement améliorées
En termes de capacités d'agent, celles de DeepSeek-V4-Pro ont été significativement améliorées. Il a rejoint le premier échelon des modèles open source dans des évaluations comme le codage agentique. Les évaluations internes montrent que sa qualité de livraison est proche du mode non réfléchissant de Claude Opus 4.6, mais il reste encore un écart par rapport à son mode réfléchissant.

DeepSeek-V4-Pro a dépassé les modèles open source actuellement évalués publiquement dans des tâches à haute difficulté comme les mathématiques, les STEM et le code de compétition, et ses performances globales sont proches ou même comparables aux principaux modèles à code source fermé comme GPT-5.4 et Claude Opus 4.6-Max.

### Réduction considérable du coût de contexte long
Parallèlement, DeepSeek-V4 a introduit un ensemble d'optimisations plus radicales sur l'efficacité des contextes longs : dans les scénarios de 1 million de tokens, le calcul d'inférence par token ne représente que 27% de celui du V3.2, et l'utilisation du cache KV est réduite à environ 10%, réduisant considérablement les coûts de puissance de calcul et de mémoire vidéo des tâches à liens longs.

## Plan de tarification API
Les tarifs API officiellement annoncés pour la série DeepSeek-V4 :
- DeepSeek-V4-Pro : 1 yuan / million de tokens pour les entrées mises en cache, 12 yuan / million de tokens pour les entrées non mises en cache, 24 yuan / million de tokens pour les sorties
- DeepSeek-V4-Flash : seulement 0,2 yuan / million de tokens pour les entrées mises en cache, 1 yuan / million de tokens pour les entrées non mises en cache, 2 yuan / million de tokens pour les sorties

Actuellement, la série DeepSeek-V4 est disponible sur le site officiel et l'application, et les API ainsi que les poids des modèles sont ouverts simultanément.

## Expérience pratique : Amélioration globale des capacités
Nous avons initialement testé les évolutions de DeepSeek-V4, en évaluant principalement le modèle DeepSeek-V4-Pro.

### Capacité de programmation agentique considérablement améliorée
Dans le cas de développement web frontal en une seule fois, DeepSeek-V4-Pro a montré une haute efficacité d'exécution. Comme les exigences n'étaient pas complexes, le modèle n'a mis que 5 secondes pour réfléchir, puis a développé rapidement, ce qui diffère significativement du schéma des anciens modèles DeepSeek qui gaspillent beaucoup de tokens dans la réflexion. Après être entré dans le processus de génération réel, la longueur de sortie de DeepSeek-V4-Pro est nettement plus longue que celle des autres modèles DeepSeek, avec une vitesse de génération rapide, générant essentiellement par blocs de 5 lignes de code, et le degré d'achèvement de la page web est supérieur à celui de DeepSeek-V3.2, avec un design plus riche.

Dans les tests de tâches combinant capacités d'agent et programmation, DeepSeek-V4-Pro peut effectuer des appels d'outils complexes sur plusieurs rounds, et le nombre d'entrées de recherche en ligne a également augmenté par rapport aux modèles précédents, la collecte d'informations étant plus complète. Le plan de voyage généré final est raisonnablement planifié, et est équipé de l'emplacement de chaque attraction touristique, qui peut être utilisé directement dans l'application de navigation après un clic, ce qui est très pratique. Dans les tâches d'agent, on peut observer que ses actions sont très décidées, les appels d'outils et la réflexion sont résolus en quelques secondes, et l'efficacité des tokens est bonne.

### Test pratique de contexte de 1 million de tokens
Les modèles de la série DeepSeek-V4 prennent en charge un contexte de 1 million de tokens. Nous avons téléchargé la trilogie complète du "Problème à trois corps" (environ 540 000 tokens au total) pour les tests, et le modèle peut localiser rapidement le contenu spécifié, réalisant avec succès la récupération d'informations dans des textes très longs.

Le test de date de coupure des connaissances montre que la date de coupure des connaissances de DeepSeek-V4-Pro est toujours en 2025. De plus, ce modèle ne prend pas encore en charge les capacités visuelles pour le moment. Après le téléchargement d'images, il effectue toujours une extraction de texte, et les images sans texte indiqueront qu'elles ne peuvent pas être traitées.

## Innovation de l'architecture technique
Le changement le plus direct de cette génération V4 est que le "contexte long" est devenu une fonctionnalité par défaut. Contrairement à la méthode traditionnelle qui consiste simplement à agrandir la fenêtre, DeepSeek-V4-Pro introduit une nouvelle architecture d'attention hybride, combinant l'attention éparse comprimée avec l'attention à haute compression (HCA), et coopère avec l'attention éparse DSA pour compresser dans la dimension des tokens.

De plus, le modèle introduit une hyperconnexion contrainte par variété (mHC) pour améliorer les connexions résiduelles traditionnelles, et utilise l'optimiseur Muon pour améliorer la vitesse de convergence et la stabilité de l'entraînement. Cette série de conceptions permet au modèle de contrôler efficacement le coût de calcul tout en "se souvenant plus longtemps".

Selon les données officielles, dans un contexte de 1 million de tokens, les TFLOP d'inférence par token de DeepSeek-V4-Pro ont diminué d'environ 3,7 à 9,8 fois par rapport à DeepSeek-V3.2, et l'utilisation du cache KV a diminué de 9,5 à 13,7 fois. Cela signifie que les tâches à liens très longs qui étaient difficiles à exécuter concrètement par le passé (comme la planification d'agent sur plusieurs rounds, le traitement de documents longs) commencent à entrer dans la plage exécutable.

## Performances : Nouveau plafond pour les modèles open source
Du point de vue de la structure des capacités, l'amélioration de DeepSeek-V4-Pro réside dans l'amélioration simultanée des capacités de raisonnement, de connaissances et d'agent :

### Capacités de connaissances et de raisonnement
Dans les tâches de connaissances et de raisonnement, il surpasse les modèles open source courants actuels dans des évaluations comme SimpleQA, Apex et Codeforces, et est proche de GPT-5.4 et Gemini 3.1 Pro dans de nombreuses tâches. Par exemple, il a obtenu 90,2 points dans la liste courte Apex, dépassant déjà les principaux modèles à code source fermé ; il maintient également le niveau du premier échelon dans les tâches de compétition comme Codeforces.

### Capacités d'agent
Dans les tâches liées aux capacités d'agent, DeepSeek-V4-Pro affiche des performances stables sur des indicateurs comme SWE Verified et Terminal Bench. SWE Verified atteint 80,6, proche de Claude Opus 4.6, nettement supérieur à la plupart des modèles open source. Dans Terminal Bench 2.0, ses performances dépassent également des modèles comme GLM-5.1 Thinking et Kimi K2.6 Thinking.

Globalement, DeepSeek-V4-Pro est actuellement le "plafond" des modèles open source.

## Optimisation spéciale pour les scénarios d'agent
Cette génération de DeepSeek-V4 renforce considérablement l'adaptation aux scénarios d'agent. Il a effectué des optimisations spéciales pour les frameworks d'agent courants comme Claude Code, OpenClaw et CodeBuddy, et fonctionne de manière plus stable dans les tâches à plusieurs étapes comme la génération de code et la génération de documents.

Du point de vue du positionnement pratique, DeepSeek-V4-Pro est déjà utilisé comme modèle de codage agentique au sein de DeepSeek, se concentrant sur la "réalisation des tâches". Pour les tâches simples, V4-Flash est déjà proche de la version Pro, mais il reste encore un écart significatif dans les tâches complexes, ce qui fournit essentiellement deux "vitesses de puissance de calcul" pour les applications d'agent.

## Conclusion
La sortie de DeepSeek-V4 démontre non seulement l'accumulation de l'équipe en matière de technologie et d'architecture, mais marque également la capacité de déploiement concrète des grands modèles open source dans l'écosystème de puissance de calcul national. Après adaptation et optimisation pour les puces nationales comme Huawei Ascend et Cambricon, la série DeepSeek-V4 a obtenu un support stable et une inférence efficace pour le contexte de 1 million de tokens, rendant possibles les tâches à liens longs et l'exécution d'agent sur plusieurs étapes.

Cette version implémente le positionnement différentiel de Pro et Flash, se rapprochant des modèles phares à code source fermé en termes de performances, tout en maintenant une haute rentabilité, offrant des options ouvertes sans précédent aux développeurs nationaux. Plus important encore, cette sortie montre que les modèles open source peuvent non seulement s'implanter solidement dans la concurrence mondiale, mais aussi transformer le potentiel technique en productivité pratique grâce à la puissance de calcul nationale et à l'architecture optimisée.

DeepSeek-V4 pourrait être une étape clé franchie par la force open source chinoise sur la piste de l'IA haute performance, et fournit également une orientation claire pour l'innovation et le déploiement de l'écosystème d'IA national.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/fr/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Commencer à utiliser DeepSeek
  </a>
</div>
