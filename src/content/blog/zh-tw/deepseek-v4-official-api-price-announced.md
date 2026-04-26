---
title: "DeepSeek V4 震撼亮相，官方 API 價格公布"
description: "DeepSeek V4 系列模型正式發布，官方 API 價格全面公布，包含 Pro 和 Flash 兩個版本，支援 100 萬 token 超長上下文，為開發者提供高效能、高性價比的大模型服務。"
tags: ["deepseek v4", "deepseek 官網", "deepseek 教學", "deepseek v4 價格"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "zh-tw"
author: "DeepSeek HK"
---

關鍵字：deepseek v4、deepseek 官網、deepseek 教學、deepseek v4 價格

發布日期：2026-04-25

作者：DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/zh-tw/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    開始使用 deepseek
  </a>
</div>

![DeepSeek V4 震撼亮相，官方 API 價格公布](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

今日，DeepSeek 官方正式公布了全新 V4 系列模型的 API 定價方案，標誌著這款備受期待的新一代大模型正式面向全球開發者開放商用服務。DeepSeek V4 系列包含 Flash 和 Pro 兩個版本，均支援 100 萬 token 超長上下文，在性能大幅提升的同時，實現了成本的顯著優化，為 AI 應用開發提供了更具競爭力的選擇。

## 模型與定價說明
DeepSeek API 定價以每百萬 token 為單位計算，token 是模型識別的最小文本單位，可以是一個單詞、數字甚至標點符號。費用將根據模型實際處理的輸入和輸出 token 總數進行計算。

### 模型詳細參數對比
| 特性 | deepseek-v4-flash* | deepseek-v4-pro |
|------|---------------------|------------------|
| BASE URL (OpenAI Format) | https://api.deepseek.com | https://api.deepseek.com |
| BASE URL (Anthropic Format) | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| 模型版本 | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| 思考模式 | 支援非思考和思考（預設）兩種模式，詳情請參考思考模式切換說明 | 支援非思考和思考（預設）兩種模式，詳情請參考思考模式切換說明 |
| 上下文長度 | 1M | 1M |
| 最大輸出長度 | 最高支援 384K | 最高支援 384K |
| JSON 格式輸出 | ✓ | ✓ |
| 工具調用 | ✓ | ✓ |
| 聊天前綴補全（Beta） | ✓ | ✓ |
| FIM 補全（Beta） | 僅支援非思考模式 | 僅支援非思考模式 |
| 1M 輸入 token（快取命中） | $0.028 | $0.145 |
| 1M 輸入 token（快取未命中） | $0.14 | $1.74 |
| 1M 輸出 token | $0.28 | $3.48 |

* 註：模型名稱 `deepseek-chat` 和 `deepseek-reasoner` 將在未來逐步淘汰，為保持相容性，目前這兩個名稱分別對應 `deepseek-v4-flash` 的非思考模式和思考模式。

## 費用扣除規則
實際消費金額 = token 使用量 × 對應單價。費用將直接從您的充值餘額或贈送餘額中扣除，當兩種餘額同時存在時，系統將優先使用贈送餘額。

產品價格可能會根據市場情況進行調整，DeepSeek 保留價格調整的最終權利。建議開發者根據實際使用需求進行充值，並定期關注官方定價頁面獲取最新資訊。

## 核心優勢分析
DeepSeek V4 系列在保持高性能的同時，實現了極具競爭力的定價策略，特別適合各類 AI 應用場景：

### 高性價比的算力選擇
deepseek-v4-flash 版本以極低的價格提供了出色的性能表現，特別適合高吞吐量、對回應速度要求高的場景，如智慧客服、內容生成、常規聊天應用等。其快取命中時僅需 $0.028/百萬輸入 token 的價格，大幅降低了大規模應用的運營成本。

### 旗艦級性能體驗
deepseek-v4-pro 版本針對複雜推理、專業領域任務進行了優化，在數學計算、程式碼生成、專業知識問答等場景下表現更為出色，適合需要高精度輸出的專業應用場景。

### 超長上下文支援
兩個版本均支援 100 萬 token 的超長上下文和最高 384K 的輸出長度，能夠處理整本書籍、長篇文件、完整專案程式碼等超大文本任務，為開發複雜 AI 應用提供了強大的基礎能力。

## 快速上手指南
開始使用 DeepSeek V4 非常簡單：
1. 訪問 DeepSeek 官方網站註冊帳號
2. 獲取 API 金鑰
3. 根據官方文件進行介面呼叫
4. 開始構建您的 AI 應用

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/zh-tw/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    開始使用 deepseek
  </a>
</div>

DeepSeek V4 的發布為 AI 開發者提供了更豐富的選擇，無論是個人開發者還是企業級應用，都能在這套模型體系中找到適合自己的算力方案。隨著模型生態的不斷完善，我們相信 DeepSeek V4 將成為 AI 應用開發的重要基石，推動更多創新產品的誕生。
