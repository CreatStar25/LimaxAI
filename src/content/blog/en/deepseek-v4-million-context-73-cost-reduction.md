---
title: "DeepSeek V4: 1M Token Context, 73% Cost Reduction"
description: "DeepSeek V4 series models officially released, supporting 1 million token context, with inference cost reduced by 73% compared to the previous generation. Includes Pro and Flash versions, providing high-performance, cost-effective large model options for AI developers."
tags: ["deepseek v4", "deepseek official website", "deepseek tutorial", "deepseek v4 price"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "en"
author: "DeepSeek HK"
---

Keywords: deepseek v4, deepseek official website, deepseek tutorial, deepseek v4 price

Publication Date: 2026-04-24

Author: DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/en/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    Start Using DeepSeek
  </a>
</div>

![DeepSeek V4: 1M Token Context, 73% Cost Reduction](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

Today, DeepSeek officially released and open-sourced the DeepSeek-V4 series preview version, the next generation flagship model system following V3.2. This release includes two models: DeepSeek-V4-Pro and DeepSeek-V4-Flash, both adopting MoE architecture with total parameter scales of 1.6T (49B activated) and 284B (13B activated) respectively, and both supporting a maximum of 1 million token context.

DeepSeek official also stated that limited by high-end computing power, the current service throughput of DeepSeek-V4-Pro is very limited. It is expected that after the mass launch of Ascend 950 super nodes in the second half of the year, its price will be significantly reduced. In addition, DeepSeek-V4 has received Cambricon Day 0 adaptation support, and the relevant adaptation code has been open-sourced to the GitHub community.

## Model Positioning Differences
DeepSeek-V4-Pro focuses on performance上限, benchmarking against closed-source flagship models; while DeepSeek-V4-Flash significantly reduces parameter scale and activation scale in exchange for lower latency and lower cost. Compared with the previous generation model, it has further improved in Agent capabilities, world knowledge, and complex reasoning tasks, and for the first time, "1 million token context" is opened as a default capability.

### Significantly Enhanced Agent Capabilities
In terms of Agent capabilities, DeepSeek-V4-Pro's Agent capabilities have been significantly enhanced. It has entered the first tier of open source in evaluations such as Agentic Coding. Internal evaluations show that its delivery quality is close to Claude Opus 4.6 non-thinking mode, but there is still a gap compared with its thinking mode.

DeepSeek-V4-Pro has surpassed currently publicly evaluated open source models in high-difficulty tasks such as mathematics, STEM, and competition code, and its overall performance is close to or even comparable to top closed-source models such as GPT-5.4 and Claude Opus 4.6-Max.

### Significantly Reduced Long Context Cost
At the same time, DeepSeek-V4 has introduced a set of more radical optimizations in long context efficiency: in 1 million token scenarios, its single-token inference computation is only 27% of V3.2, and KV Cache usage is reduced to about 10%, significantly reducing the computing power and video memory cost of long-link tasks.

## API Pricing Plan
The official announced API pricing for the DeepSeek-V4 series:
- DeepSeek-V4-Pro: 1 yuan / million tokens for cached input, 12 yuan / million tokens for uncached input, 24 yuan / million tokens for output
- DeepSeek-V4-Flash: only 0.2 yuan / million tokens for cached input, 1 yuan / million tokens for uncached input, 2 yuan / million tokens for output

Currently, the DeepSeek-V4 series has been launched on the official website and App, and APIs and model weights are open simultaneously.

## Practical Experience: Comprehensive Capability Improvement
We initially experienced the changes of DeepSeek-V4, mainly testing the DeepSeek-V4-Pro model.

### Agentic Programming Capability Improved Significantly
In the front-end web one-shot case, DeepSeek-V4-Pro showed high execution efficiency. Since the requirements were not complex, the model only took 5 seconds to think, and then quickly developed, which is significantly different from the previous DeepSeek model's pattern of wasting a lot of tokens on thinking. After entering the actual generation process, DeepSeek-V4-Pro's output length is significantly longer than other DeepSeek models, with fast generation speed, basically outputting in units of 5 lines of code, and the completion degree of the web page is higher than that of DeepSeek-V3.2, with richer design.

In the task test combining Agent capabilities and programming, DeepSeek-V4-Pro can perform complex multi-round tool calls, and the number of online search entries has also increased compared with previous models, and information collection is more comprehensive. The final generated travel plan is reasonably planned, and is equipped with the location of each attraction, which can be directly used in the navigation App after clicking, which is very convenient. In Agent tasks, it can be observed that its actions are very decisive, tool calls and thinking are solved within a few seconds, and token efficiency is good.

### 1M Token Context Practical Test
The DeepSeek-V4 series models support 1 million token context. We uploaded the complete "Three-Body" trilogy (about 540,000 tokens in total) for testing, and the model can quickly locate the specified content, successfully realizing information retrieval in ultra-long text.

The knowledge cutoff date test shows that DeepSeek-V4-Pro's knowledge cutoff date is still in 2025. In addition, this model does not support visual capabilities for the time being. After uploading images, it will still perform text extraction, and images without text will show that they cannot be processed.

## Technical Architecture Innovation
The most direct change of this generation V4 is that "long context" has become a default capability. Different from the traditional way of simply expanding the window, DeepSeek-V4-Pro introduces a new hybrid attention architecture, combining Compressed Sparse Attention with High Compression Attention (HCA), and cooperating with DSA sparse attention to compress in the token dimension.

In addition, the model introduces manifold constrained hyperconnection (mHC) to enhance traditional residual connections, and uses the Muon optimizer to improve convergence speed and training stability. This series of designs enables the model to effectively control the calculation cost while "remembering longer".

According to official data, in 1 million token context, DeepSeek-V4-Pro's single-token inference TFLOPs decreased by about 3.7 times to 9.8 times compared with DeepSeek-V3.2, and KV Cache usage decreased by 9.5 times to 13.7 times. This means that ultra-long link tasks that were difficult to actually run in the past (such as multi-round Agent planning, long document processing) have begun to enter the executable range.

## Performance: New Ceiling for Open Source Models
From the perspective of capability structure, the improvement of DeepSeek-V4-Pro is the simultaneous improvement of reasoning, knowledge and Agent capabilities:

### Knowledge and Reasoning Capabilities
In knowledge and reasoning tasks, it surpasses current mainstream open source models in evaluations such as SimpleQA, Apex, and Codeforces, and is close to GPT-5.4 and Gemini 3.1 Pro in many tasks. For example, it scored 90.2 points in the Apex Shortlist, already surpassing top closed-source models; it also maintains the first tier level in competition tasks such as Codeforces.

### Agent Capabilities
In Agent capability-related tasks, DeepSeek-V4-Pro performs stably in indicators such as SWE Verified and Terminal Bench. SWE Verified reaches 80.6, close to Claude Opus 4.6, significantly higher than most open source models. In Terminal Bench 2.0, its performance also surpasses models such as GLM-5.1 Thinking and Kimi K2.6 Thinking.

Overall, DeepSeek-V4-Pro is currently the "ceiling" of open source models.

## Special Optimization for Agent Scenarios
This generation of DeepSeek-V4 significantly strengthens the adaptation to Agent scenarios. It has carried out special optimization for mainstream Agent frameworks such as Claude Code, OpenClaw, and CodeBuddy, and performs more stably in multi-step tasks such as code generation and document generation.

From the actual positioning point of view, DeepSeek-V4-Pro has been used as an Agentic Coding model within DeepSeek, focusing on "completing tasks". For simple tasks, V4-Flash is already close to the Pro version, but there is still a significant gap in complex tasks, which essentially provides two "computing power gears" for Agent applications.

## Conclusion
The release of DeepSeek-V4 not only demonstrates the team's accumulation in technology and architecture, but also marks the actual landing capability of open source large models under the domestic computing power ecosystem. After adaptation and optimization for domestic chips such as Huawei Ascend and Cambricon, the DeepSeek-V4 series has achieved stable support and efficient reasoning for 1 million token context, making long-link tasks and multi-step Agent execution possible.

This version implements the different positioning of Pro and Flash, approaching closed-source flagship models in performance, and maintaining high cost-effectiveness in cost, providing unprecedented open options for domestic developers. More importantly, this release shows that open source models can not only gain a firm foothold in global competition, but also transform technical potential into practical productivity with the help of domestic computing power and optimized architecture.

DeepSeek-V4 may be a key step taken by China's open source force in the high-performance AI track, and also provides clear guidance for the innovation and landing of the domestic AI ecosystem.

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/en/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    Start Using DeepSeek
  </a>
</div>
