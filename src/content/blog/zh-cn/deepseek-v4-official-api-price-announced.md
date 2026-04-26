---
title: "DeepSeek V4震撼亮相, 官方api价格公布"
description: "DeepSeek V4系列模型正式发布，官方API价格全面公布，包含Pro和Flash两个版本，支持100万token超长上下文，为开发者提供高性能、高性价比的大模型服务。"
tags: ["deepseek v4", "deepseek 官网", "deepseek教程", "deepseek v4价格"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "zh-cn"
author: "DeepSeek HK"
---

关键词：deepseek v4、deepseek 官网、deepseek教程、deepseek v4价格

发布日期：2026-04-25

作者：DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/zh-cn/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    开始使用deepseek
  </a>
</div>

![DeepSeek V4震撼亮相, 官方api价格公布](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

今日，DeepSeek官方正式公布了全新V4系列模型的API定价方案，标志着这款备受期待的新一代大模型正式面向全球开发者开放商用服务。DeepSeek V4系列包含Flash和Pro两个版本，均支持100万token超长上下文，在性能大幅提升的同时，实现了成本的显著优化，为AI应用开发提供了更具竞争力的选择。

## 模型与定价说明
DeepSeek API定价以每百万token为单位计算，token是模型识别的最小文本单位，可以是一个单词、数字甚至标点符号。费用将根据模型实际处理的输入和输出token总数进行计算。

### 模型详细参数对比
| 特性 | deepseek-v4-flash* | deepseek-v4-pro |
|------|---------------------|------------------|
| BASE URL (OpenAI Format) | https://api.deepseek.com | https://api.deepseek.com |
| BASE URL (Anthropic Format) | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| 模型版本 | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| 思考模式 | 支持非思考和思考（默认）两种模式，详情请参考思考模式切换说明 | 支持非思考和思考（默认）两种模式，详情请参考思考模式切换说明 |
| 上下文长度 | 1M | 1M |
| 最大输出长度 | 最高支持384K | 最高支持384K |
| JSON格式输出 | ✓ | ✓ |
| 工具调用 | ✓ | ✓ |
| 聊天前缀补全（Beta） | ✓ | ✓ |
| FIM补全（Beta） | 仅支持非思考模式 | 仅支持非思考模式 |
| 1M输入token（缓存命中） | $0.028 | $0.145 |
| 1M输入token（缓存未命中） | $0.14 | $1.74 |
| 1M输出token | $0.28 | $3.48 |

* 注：模型名称`deepseek-chat`和`deepseek-reasoner`将在未来逐步淘汰，为保持兼容性，目前这两个名称分别对应`deepseek-v4-flash`的非思考模式和思考模式。

## 费用扣除规则
实际消费金额 = token使用量 × 对应单价。费用将直接从您的充值余额或赠送余额中扣除，当两种余额同时存在时，系统将优先使用赠送余额。

产品价格可能会根据市场情况进行调整，DeepSeek保留价格调整的最终权利。建议开发者根据实际使用需求进行充值，并定期关注官方定价页面获取最新信息。

## 核心优势分析
DeepSeek V4系列在保持高性能的同时，实现了极具竞争力的定价策略，特别适合各类AI应用场景：

### 高性价比的算力选择
deepseek-v4-flash版本以极低的价格提供了出色的性能表现，特别适合高吞吐量、对响应速度要求高的场景，如智能客服、内容生成、常规聊天应用等。其缓存命中时仅需$0.028/百万输入token的价格，大幅降低了大规模应用的运营成本。

### 旗舰级性能体验
deepseek-v4-pro版本针对复杂推理、专业领域任务进行了优化，在数学计算、代码生成、专业知识问答等场景下表现更为出色，适合需要高精度输出的专业应用场景。

### 超长上下文支持
两个版本均支持100万token的超长上下文和最高384K的输出长度，能够处理整本书籍、长篇文档、完整项目代码等超大文本任务，为开发复杂AI应用提供了强大的基础能力。

## 快速上手指南
开始使用DeepSeek V4非常简单：
1. 访问DeepSeek官方网站注册账号
2. 获取API密钥
3. 根据官方文档进行接口调用
4. 开始构建您的AI应用

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/zh-cn/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    开始使用deepseek
  </a>
</div>

DeepSeek V4的发布为AI开发者提供了更丰富的选择，无论是个人开发者还是企业级应用，都能在这套模型体系中找到适合自己的算力方案。随着模型生态的不断完善，我们相信DeepSeek V4将成为AI应用开发的重要基石，推动更多创新产品的诞生。
