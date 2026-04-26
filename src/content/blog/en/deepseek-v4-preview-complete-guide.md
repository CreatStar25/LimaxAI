---
title: "After 15 Months of Waiting, DeepSeek Finally Unveils V4 Preview: Comprehensive Analysis"
description: "DeepSeek V4 Preview is officially released, featuring two MoE models (Pro and Flash) with native support for 1 million token context, delivering significant performance improvements while drastically reducing inference costs. This article provides a detailed breakdown of DeepSeek V4's technical architecture, performance, and pricing."
tags: ["deepseek v4", "deepseek official website", "deepseek tutorial", "deepseek v4 price"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "en"
author: "DeepSeek HK"
---

This article explores DeepSeek V4's technical features, performance, and usage guidelines, providing a comprehensive analysis of the core advantages of this new generation large language model. The content is written in an accessible style suitable for both tech enthusiasts and developers.

Keywords: deepseek v4, deepseek official website, deepseek tutorial, deepseek v4 price.

Publication Date: April 25, 2026
Author: DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/en/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Start Using DeepSeek
  </a>
</div>

![DeepSeek V4 Preview Comprehensive Analysis](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 1. DeepSeek V4 Preview Officially Launched

On April 24, DeepSeek officially announced the launch of V4 Preview. This major update comes 15 months after the release of V3.2, marking another important breakthrough in DeepSeek's large model technology roadmap.

According to the official introduction, the V4 series includes two MoE models:
- **DeepSeek-V4-Pro**: 1.6T total parameters, 49B activated parameters
- **DeepSeek-V4-Flash**: 284B total parameters, 13B activated parameters

Both models natively support 1 million token context, representing a qualitative leap in long text processing capabilities. Notably, under 1M context settings:
- V4-Pro's per-token inference FLOPs are only 27% of V3.2, with KV Cache at just 10%
- V4-Flash is even more extreme, reducing these metrics to 10% and 7% respectively

This means that while context length has expanded nearly 8 times from V3.2's 128K to V4's 1M, per-token computing requirements have actually decreased significantly, achieving both long context capability and inference efficiency breakthroughs.

DeepSeek officials clearly state that V4 Preview is positioned as an infrastructure update, primarily重构 long context cost structure to pave the way for the next stage of test-time scaling and long-range tasks. Its current capability level still lags behind GPT-5.4 and Gemini-3.1-Pro, with a development trajectory approximately 3-6 months behind cutting-edge closed-source models.

## 2. Two Models, Three Inference Modes: Core Features of V4

### 2.1 Model Parameters and Cost Advantages

The biggest highlight of the V4 series is the significant optimization of the cost curve. Under 1M token context settings:
- V4-Pro: Per-token inference FLOPs are only 27% of V3.2, KV Cache only 10%
- V4-Flash: Per-token inference FLOPs are only 10% of V3.2, KV Cache only 7%

This efficiency improvement drastically reduces the inference cost for million-level context, providing an economically viable solution for long text processing, document analysis, and other scenarios.

### 2.2 API Pricing System

DeepSeek continues its consistent high-value pricing strategy:
- **V4-Pro**: ¥1 per million input tokens (cache hit) or ¥12 (cache miss), ¥24 per million output tokens
- **V4-Flash**: ¥0.2 per million input tokens (cache hit) or ¥1 (cache miss), ¥2 per million output tokens

### 2.3 Three Inference Intensity Levels

Each model offers three inference modes to meet different scenario requirements:
1. **Non-think**: Direct output mode, fastest response speed
2. **Think High**: Regular deep thinking mode, balancing speed and quality
3. **Think Max**: Injects strong instructions, maximizes context and output length, unleashes the model's full capabilities

The Max mode significantly improves model performance: V4-Pro-Max scores increase from 34.5 to 37.7 in HLE tests, and from 85.5 to 90.2 in Apex Shortlist tests, at the cost of doubling output token count.

## 3. Benchmark Test Performance

According to official test data released by DeepSeek, the V4 series performs excellently in multiple evaluations:

### 3.1 Knowledge and Reasoning Tests
- DeepSeek-V4-Pro-Max ranks first in Apex Shortlist (90.2%) and Codeforces (Rating 3206), two hardcore reasoning/programming tasks, demonstrating extremely strong logic and algorithm capabilities
- Gemini-3.1-Pro-High leads in SimpleQA Verified (75.6%)
- Claude and GPT have their respective strengths across different projects, with overall small gaps

### 3.2 Agent Capability Tests
- All four models perform equally in SWE Verified tasks (all reaching 80.6%)
- DeepSeek excels in Terminal Bench 2.0 (67.9%) and Toolathlon (51.8%), demonstrating clear advantages in complex instruction execution and tool calling scenarios

Officials state that DeepSeek-V4-Pro's Agent capabilities have significantly improved compared to previous generations, "offering better user experience than Sonnet 4.5, with delivery quality close to Opus 4.6 non-thinking mode, though still lagging behind Opus 4.6 thinking mode to some extent."

### 3.3 World Knowledge and General Capabilities
- V4-Pro significantly outperforms other open-source models in world knowledge evaluations, only slightly trailing the top closed-source model Gemini-Pro-3.1
- In mathematics, STEM, and competitive code evaluations, V4-Pro surpasses all currently publicly evaluated open-source models, reaching the level of world's top closed-source models
- As an economical model, V4-Flash has slightly less knowledge reserve than the Pro version, but similar reasoning capabilities. With smaller parameters and activation values, it provides faster, more cost-effective API services
- In Agent evaluations, V4-Flash performs comparably to the Pro version on simple tasks, but still has gaps on high-difficulty tasks

## 4. Core Technological Innovation: Rewriting the Attention Mechanism

V4's most core technical change is in the attention layer, fundamentally solving the efficiency problem of long context inference.

In traditional Transformer attention mechanisms, each token needs to calculate similarity with all previous tokens. When context expands from 100K to 1M, computational cost increases 100 times, which is the core bottleneck preventing long context from being widely adopted.

V4 adopts an innovative dual attention mechanism with alternating layers:
1. **CSA (Compressed Sparse Attention)**: First merges KV cache for every 4 tokens into a single summary, then allows each query to only select the most relevant top-k summaries for attention calculation, both compressing the content to be processed and focusing only on relevant information
2. **HCA (Heavy Compressed Attention)**: Uses more aggressive compression, merging every 128 tokens into one summary, then applies dense attention on the remaining summaries without sparse selection

The two attention mechanisms alternate and stack, combined with a sliding window branch that handles detail dependencies between nearby tokens, forming a "coarse-grained + fine-grained, sparse + dense" combined approach.

From the technology evolution perspective, DeepSeek V2 and V3 mainly followed the parameter sparsification route (large total parameters but only activating partial experts per token). V4 opens up a new path of context sparsification (KV compression, top-k selection, layered compression rates) on this basis. This is the first time DeepSeek has applied the "sparsification" concept to the core structure of Transformer.

In addition to the attention layer, V4 has two other important architectural improvements:
1. Upgrades traditional residual connections to mHC (Manifold Constrained Hyperconnection), making forward and backward propagation of deep networks more stable through mathematical constraints
2. Replaces AdamW with Muon optimizer for most modules, achieving faster convergence and more stable training

This is the first time DeepSeek has simultaneously modified three core Transformer components: attention, residual connections, and optimizer.

## 5. Post-Training Paradigm Innovation: Expert Model Distillation

Compared to architectural changes, V4's innovation in post-training methods is even more noteworthy.

V3.2 used a "mixed RL" approach, optimizing multiple objectives simultaneously with reinforcement learning. V4 adopts a two-step "differentiate then unify" strategy:
1. **Differentiation Phase**: For different domains such as mathematics, code, Agent, and instruction following, train a separate expert model for each domain. These experts first undergo supervised fine-tuning with high-quality domain data, then reinforcement learning with the GRPO algorithm, each expert achieving optimal performance in its specialized domain
2. **Unification Phase**: Uses On-Policy Distillation (OPD) method to "synthesize" more than ten domain experts back into a unified student model. After the student generates an answer, it matches the output distribution of the expert that "best understands this problem", absorbing expert capabilities through logit-level alignment

This approach can be understood as distilling the capabilities of multiple domain "top students" into a single model. To solve the engineering challenge of loading more than ten trillion-parameter teacher models simultaneously, DeepSeek unloads all teacher weights to distributed storage, only caching the hidden state of each teacher's last layer. During training, samples are sorted by teacher index, ensuring only one teacher head resides in GPU memory at any time.

This approach avoids the capability interference problem common in traditional "mixed RL", allowing the model to achieve top-level performance across multiple domains.

## 6. Agent Capability Special Optimization

DeepSeek V4 includes specialized adaptations and optimizations for mainstream Agent products, with improved performance in code tasks, document generation, and other scenarios.

V4's special optimizations for Agent capabilities include:
1. During post-training, Agent is treated as an independent expert direction alongside mathematics and code, with separate training
2. Tool calling format changed from JSON to XML structure with special tokens, reducing escape error rates
3. Cross-turn reasoning traces are fully retained in tool calling scenarios, no longer cleared each turn like in V3.2
4. Self-built DSec sandbox platform, with single cluster capable of concurrently managing hundreds of thousands of sandbox instances, supporting Agent reinforcement learning training and evaluation

Officials state that V4-Pro's Agent capabilities "are better than Sonnet 4.5, with delivery quality close to Opus 4.5 non-thinking mode, though still lagging behind Opus 4.6 thinking mode to some extent."

![DeepSeek V4 Technical Architecture](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## Summary

DeepSeek V4 Preview is a large model with outstanding technological innovations. Through attention mechanism reconstruction and training paradigm innovation, it maintains strong reasoning capabilities while drastically reducing long context inference costs, paving the way for practical applications of million-level context.

Whether for professional scenarios requiring strong reasoning capabilities or large-scale applications pursuing cost-effectiveness, the V4 series provides suitable options. If you want to experience the powerful capabilities of DeepSeek V4, welcome to use it directly through our platform.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/en/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    Start Using DeepSeek
  </a>
</div>
