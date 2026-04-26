---
title: "DeepSeek V4：百万上下文，成本暴降73%"
description: "DeepSeek V4系列模型正式发布，支持100万token上下文，推理成本相比上一代降低73%，包含Pro和Flash两个版本，为AI开发者提供高性能、高性价比的大模型选择。"
tags: ["deepseek v4", "deepseek 官网", "deepseek教程", "deepseek v4价格"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "zh-cn"
author: "DeepSeek HK"
---

关键词：deepseek v4、deepseek 官网、deepseek教程、deepseek v4价格

发布日期：2026-04-24

作者：DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/zh-cn/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    开始使用deepseek
  </a>
</div>

![DeepSeek V4：百万上下文，成本暴降73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

今日，DeepSeek正式发布并开源DeepSeek-V4系列预览版本，这是其继V3.2之后的新一代旗舰模型体系。本次发布包含两款模型：DeepSeek-V4-Pro与DeepSeek-V4-Flash，分别采用MoE架构，总参数规模达到1.6T（激活49B）与284B（激活13B），并统一支持最长100万token上下文。

DeepSeek官方同时说明，受限于高端算力，目前DeepSeek-V4-Pro的服务吞吐十分有限，预计下半年昇腾950超节点批量上市后，其价格会大幅下调。此外，DeepSeek-V4已获得寒武纪Day 0适配支持，相关适配代码已开源至GitHub社区。

## 模型定位差异
DeepSeek-V4-Pro主打性能上限，对标闭源旗舰模型；而DeepSeek-V4-Flash则在参数规模与激活规模上大幅缩小，换取更低延迟与更低成本。相比上一代模型，其在Agent能力、世界知识与复杂推理任务上进一步抬升，并首次将“百万上下文”作为默认能力开放。

### Agent能力大幅增强
在Agent能力方面，DeepSeek-V4-Pro的Agent能力显著增强。其在Agentic Coding等评测中进入开源第一梯队，内部评测显示交付质量已接近Claude Opus 4.6非思考模式，但与其思考模式仍存在差距。

DeepSeek-V4-Pro在数学、STEM及竞赛型代码等高难度任务中已超过当前已公开评测的开源模型，整体表现接近甚至比肩GPT-5.4、Claude Opus 4.6-Max等顶级闭源模型。

### 长上下文成本显著降低
与此同时，DeepSeek-V4在长上下文效率上给出了一组更激进的优化：在100万token场景下，其单token推理计算量仅为V3.2的27%，KV Cache占用降至约10%，显著降低长链路任务的算力与显存成本。

## API定价方案
官方公布了DeepSeek-V4系列的API定价：
- DeepSeek-V4-Pro：输入命中缓存1元/百万tokens，输入未命中缓存12元/百万tokens，输出24元/百万tokens
- DeepSeek-V4-Flash：输入命中缓存仅0.2元/百万tokens，未命中输入1元/百万tokens，输出2元/百万tokens

目前，DeepSeek-V4系列已上线官网与App，并同步开放API与模型权重。

## 实测体验：能力全面提升
我们初步感受了下DeepSeek-V4的变化，主要测试的模型是DeepSeek-V4-Pro。

### Agentic编程能力提升明显
在前端网页one-shot案例中，DeepSeek-V4-Pro展现出很高的执行效率。由于需求不复杂，模型仅用了5秒钟进行思考，之后迅速进行开发，这与之前DeepSeek模型在思考上浪费很多token的模式明显不同。进入到实际生成过程后，DeepSeek-V4-Pro的输出长度要明显长于其他DeepSeek模型，生成速度较快，基本能做到以5行代码为单位输出，网页的完成度要比DeepSeek-V3.2高一些，设计更为丰富。

在结合Agent能力与编程的任务测试中，DeepSeek-V4-Pro可以进行复杂多轮工具调用，联网搜索的条目数量也和之前模型的数量相比有增加，信息收集得更为全面。最终生成的旅行方案规划合理，并且配上了每个景点的定位，点开后就可以直接在导航App里使用，十分便捷。在Agent任务中，可以观察到它的行动十分果断，工具调用、思考都在几秒钟内解决，token效率不错。

### 百万上下文能力实测
DeepSeek-V4系列模型支持100万token上下文，我们上传了完整的《三体》三部曲（总计约54万token）进行测试，模型能够迅速定位指定的内容，成功实现超长文本中的信息检索。

知识截止日期测试显示，DeepSeek-V4-Pro的知识截止日期目前仍然停在2025年。此外，这一模型暂时还不支持视觉能力，上传图像后还是会进行文字提取，没有文字的图像会显示无法处理。

## 技术架构创新
这一代V4最直接的变化，是把“长上下文”变成默认能力。不同于传统通过简单扩展窗口的方式，DeepSeek-V4-Pro引入了全新的混合注意力架构，将Compressed Sparse Attention与高压缩注意力（HCA）结合，同时配合DSA稀疏注意力，在token维度进行压缩。

此外，模型引入了流形约束超连接（mHC）增强传统残差连接，并使用Muon优化器提升收敛速度和训练稳定性。这一系列设计，使得模型在“记得更长”的同时，有效控制计算成本。

从官方给出的数据来看，在100万token上下文下，DeepSeek-V4-Pro单token推理TFLOPs相比DeepSeek-V3.2下降约3.7倍至9.8倍区间，KV Cache占用下降9.5倍至13.7倍。这意味着，过去难以实际运行的超长链路任务（如多轮Agent规划、长文档处理），开始进入可执行范围。

## 能力表现：开源模型新天花板
从能力结构来看，DeepSeek-V4-Pro的提升是推理、知识与Agent能力的同步抬升：

### 知识与推理能力
在知识与推理类任务中，其在SimpleQA、Apex、Codeforces等评测中均超过当前主流开源模型，并在多项任务上接近GPT-5.4与Gemini 3.1 Pro。例如在Apex Shortlist中达到90.2分，已经超越顶级闭源模型；在Codeforces等竞赛类任务中，也维持在第一梯队水平。

### Agent能力
在Agent能力相关任务中，DeepSeek-V4-Pro在SWE Verified、Terminal Bench等指标上表现稳定，SWE Verified达到80.6，接近Claude Opus 4.6，明显高于多数开源模型。在Terminal Bench 2.0中，其表现同样超过GLM-5.1 Thinking、Kimi K2.6 Thinking等模型。

整体来看，DeepSeek-V4-Pro已是目前开源模型的“天花板”。

## Agent场景专项优化
这一代DeepSeek-V4明显强化了对Agent场景的适配。其针对Claude Code、OpenClaw、CodeBuddy等主流Agent框架进行了专项优化，在代码生成、文档生成等多步骤任务中表现更稳定。

从实际定位来看，DeepSeek-V4-Pro已经被DeepSeek内部作为Agentic Coding模型使用，侧重点在于“完成任务”。在简单任务上，V4-Flash已可与Pro版本接近，而在复杂任务中仍存在明显差距，本质上是在为Agent应用提供两种“算力档位”。

## 结语
DeepSeek-V4的发布不仅展现了团队在技术和架构上的积淀，也标志着开源大模型在国产算力生态下的实际落地能力。经过对华为昇腾、寒武纪等国产芯片的适配优化，DeepSeek-V4系列实现了百万token上下文的稳定支持和高效推理，使长链路任务与多步Agent执行成为可能。

这一版本将Pro与Flash的不同定位落到实处，在性能上逼近闭源旗舰模型，在成本上保持高性价比，为国内开发者提供了前所未有的开放选项。更重要的是，这次发布显示出开源模型不仅能在全球竞争中站稳脚跟，也能够借助国产算力和优化架构，将技术潜力转化为实际可用的生产力。

DeepSeek-V4或许是中国开源力量在高性能AI赛道上迈出的关键一步，也为国内AI生态的创新和落地提供了明确指引。

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/zh-cn/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    开始使用deepseek
  </a>
</div>
