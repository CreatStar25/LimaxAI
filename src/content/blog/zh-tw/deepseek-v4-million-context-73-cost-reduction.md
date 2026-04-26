---
title: "DeepSeek V4：百萬上下文，成本驟降73%"
description: "DeepSeek V4系列模型正式發布，支援100萬token上下文，推理成本相比上一代降低73%，包含Pro和Flash兩個版本，為AI開發者提供高效能、高性價比的大模型選擇。"
tags: ["deepseek v4", "deepseek 官網", "deepseek教學", "deepseek v4價格"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "zh-tw"
author: "DeepSeek HK"
---

關鍵字：deepseek v4、deepseek 官網、deepseek教學、deepseek v4價格

發布日期：2026-04-24

作者：DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/zh-tw/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    開始使用deepseek
  </a>
</div>

![DeepSeek V4：百萬上下文，成本驟降73%](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

今日，DeepSeek正式發布並開源DeepSeek-V4系列預覽版本，這是其繼V3.2之後的新一代旗艦模型體系。本次發布包含兩款模型：DeepSeek-V4-Pro與DeepSeek-V4-Flash，分別採用MoE架構，總參數規模達到1.6T（啟用49B）與284B（啟用13B），並統一支援最長100萬token上下文。

DeepSeek官方同時說明，受限於高端運算能力，目前DeepSeek-V4-Pro的服務吞吐量十分有限，預計下半年昇騰950超節點批量上市後，其價格會大幅調降。此外，DeepSeek-V4已獲得寒武紀Day 0適配支援，相關適配程式碼已開源至GitHub社群。

## 模型定位差異
DeepSeek-V4-Pro主打效能上限，對標閉源旗艦模型；而DeepSeek-V4-Flash則在參數規模與啟用規模上大幅縮小，換取更低延遲與更低成本。相比上一代模型，其在Agent能力、世界知識與複雜推理任務上進一步提升，並首次將「百萬上下文」做為預設能力開放。

### Agent能力大幅增強
在Agent能力方面，DeepSeek-V4-Pro的Agent能力顯著增強。其在Agentic Coding等評測中進入開源第一梯隊，內部評測顯示交付品質已接近Claude Opus 4.6非思考模式，但與其思考模式仍存在差距。

DeepSeek-V4-Pro在數學、STEM及競賽型程式碼等高難度任務中已超過目前已公開評測的開源模型，整體表現接近甚至比肩GPT-5.4、Claude Opus 4.6-Max等頂級閉源模型。

### 長上下文成本顯著降低
與此同時，DeepSeek-V4在長上下文效率上給出了一組更激進的優化：在100萬token場景下，其單token推理計算量僅為V3.2的27%，KV Cache占用降至約10%，顯著降低長鏈路任務的算力與顯存成本。

## API定價方案
官方公布了DeepSeek-V4系列的API定價：
- DeepSeek-V4-Pro：輸入命中快取1元/百萬tokens，輸入未命中快取12元/百萬tokens，輸出24元/百萬tokens
- DeepSeek-V4-Flash：輸入命中快取僅0.2元/百萬tokens，未命中輸入1元/百萬tokens，輸出2元/百萬tokens

目前，DeepSeek-V4系列已上線官網與App，並同步開放API與模型權重。

## 實測體驗：能力全面提升
我們初步體驗了DeepSeek-V4的變化，主要測試的模型是DeepSeek-V4-Pro。

### Agentic程式設計能力提升明顯
在前端網頁one-shot案例中，DeepSeek-V4-Pro展現出很高的執行效率。由於需求不複雜，模型僅用了5秒鐘進行思考，之後迅速進行開發，這與之前DeepSeek模型在思考上浪費很多token的模式明顯不同。進入到實際生成過程後，DeepSeek-V4-Pro的輸出長度要明顯長於其他DeepSeek模型，生成速度較快，基本能做到以5行程式碼為單位輸出，網頁的完成度要比DeepSeek-V3.2高一些，設計更為豐富。

在結合Agent能力與程式設計的任務測試中，DeepSeek-V4-Pro可以進行複雜多輪工具呼叫，聯網搜尋的條目數量也和之前模型的數量相比有增加，資訊收集得更為全面。最終生成的旅行方案規劃合理，並且配上了每個景點的定位，點開後就可以直接在導航App裡使用，十分便捷。在Agent任務中，可以觀察到它的行動十分果斷，工具呼叫、思考都在幾秒鐘內解決，token效率不錯。

### 百萬上下文能力實測
DeepSeek-V4系列模型支援100萬token上下文，我們上傳了完整的《三體》三部曲（總計約54萬token）進行測試，模型能夠迅速定位指定的內容，成功實現超長文字中的資訊檢索。

知識截止日期測試顯示，DeepSeek-V4-Pro的知識截止日期目前仍然停在2025年。此外，這一模型暫時還不支援視覺能力，上傳影像後還是會進行文字提取，沒有文字的影像會顯示無法處理。

## 技術架構創新
這一代V4最直接的變化，是把「長上下文」變成預設能力。不同於傳統透過簡單擴展視窗的方式，DeepSeek-V4-Pro引入了全新的混合注意力架構，將Compressed Sparse Attention與高壓縮注意力（HCA）結合，同時配合DSA稀疏注意力，在token維度進行壓縮。

此外，模型引入了流形約束超連接（mHC）增強傳統殘差連接，並使用Muon最佳化器提升收斂速度和訓練穩定性。這一系列設計，使得模型在「記得更長」的同時，有效控制計算成本。

從官方給出的數據來看，在100萬token上下文下，DeepSeek-V4-Pro單token推理TFLOPs相比DeepSeek-V3.2下降約3.7倍至9.8倍區間，KV Cache占用下降9.5倍至13.7倍。這意味著，過去難以實際執行的超長鏈路任務（如多輪Agent規劃、長文件處理），開始進入可執行範圍。

## 能力表現：開源模型新天花板
從能力結構來看，DeepSeek-V4-Pro的提升是推理、知識與Agent能力的同步提升：

### 知識與推理能力
在知識與推理類任務中，其在SimpleQA、Apex、Codeforces等評測中均超過當前主流開源模型，並在多項任務上接近GPT-5.4與Gemini 3.1 Pro。例如在Apex Shortlist中達到90.2分，已經超越頂級閉源模型；在Codeforces等競賽類任務中，也維持在第一梯隊水準。

### Agent能力
在Agent能力相關任務中，DeepSeek-V4-Pro在SWE Verified、Terminal Bench等指標上表現穩定，SWE Verified達到80.6，接近Claude Opus 4.6，明顯高於多數開源模型。在Terminal Bench 2.0中，其表現同樣超過GLM-5.1 Thinking、Kimi K2.6 Thinking等模型。

整體來看，DeepSeek-V4-Pro已是目前開源模型的「天花板」。

## Agent場景專項優化
這一代DeepSeek-V4明顯強化了對Agent場景的適配。其針對Claude Code、OpenClaw、CodeBuddy等主流Agent框架進行了專項優化，在程式碼生成、文件生成等多步驟任務中表現更穩定。

從實際定位來看，DeepSeek-V4-Pro已經被DeepSeek內部做為Agentic Coding模型使用，側重點在於「完成任務」。在簡單任務上，V4-Flash已可與Pro版本接近，而在複雜任務中仍存在明顯差距，本質上是在為Agent應用提供兩種「算力檔位」。

## 結語
DeepSeek-V4的發布不僅展現了團隊在技術和架構上的積累，也標誌著開源大模型在國產算力生態下的實際落地能力。經過對華為昇騰、寒武紀等國產晶片的適配最佳化，DeepSeek-V4系列實現了百萬token上下文的穩定支援和高效推理，使長鏈路任務與多步Agent執行成為可能。

這一版本將Pro與Flash的不同定位落到實處，在效能上逼近閉源旗艦模型，在成本上保持高性價比，為國內開發者提供了前所未有的開放選項。更重要的是，這次發布顯示出開源模型不僅能在全球競爭中站穩腳跟，也能夠借助國產算力和優化架構，將技術潛力轉化為實際可用的生產力。

DeepSeek-V4或許是中國開源力量在高效能AI賽道上邁出的關鍵一步，也為國內AI生態的創新和落地提供了明確指引。

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/zh-tw/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    開始使用deepseek
  </a>
</div>
