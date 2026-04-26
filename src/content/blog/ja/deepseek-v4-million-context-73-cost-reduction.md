---
title: "DeepSeek V4：100万トークンコンテキスト、コスト73%削減"
description: "DeepSeek V4シリーズのモデルが正式リリースされ、100万トークンのコンテキストをサポート。前世代比で推論コストを73%削減しました。Pro版とFlash版を含み、AI開発者に高性能かつ高コスト効率な大規模モデルの選択肢を提供します。"
tags: ["deepseek v4", "deepseek公式サイト", "deepseekチュートリアル", "deepseek v4価格"]
pubDate: "2026-04-24"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png"
lang: "ja"
author: "DeepSeek HK"
---

キーワード：deepseek v4、deepseek公式サイト、deepseekチュートリアル、deepseek v4価格

公開日：2026年4月24日

著者：DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/ja/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    DeepSeekの使用を開始する
  </a>
</div>

![DeepSeek V4：100万トークンコンテキスト、コスト73%削減](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-2.png)

本日、DeepSeekはV3.2に続く次世代フラッグシップモデルシステムとして、DeepSeek-V4シリーズのプレビュー版を正式に公開・オープンソース化しました。今回のリリースには、DeepSeek-V4-ProとDeepSeek-V4-Flashの2モデルが含まれ、どちらもMoEアーキテクチャを採用。総パラメータ規模はそれぞれ1.6T（有効化49B）と284B（有効化13B）で、いずれも最大100万トークンのコンテキストをサポートします。

DeepSeek公式はまた、ハイエンド計算リソースの制約により、現時点でDeepSeek-V4-Proのサービススループットは非常に限定的だと述べています。今年後半にAscend 950スーパー・ノードが大規模展開されれば、価格は大幅に引き下げられる見込みです。さらに、DeepSeek-V4はCambriconのDay 0適応サポートを獲得しており、関連する適応コードもGitHubコミュニティにオープンソース公開されています。

## モデルのポジショニングの違い
DeepSeek-V4-Proは性能上限の追求を重視し、クローズドソースのフラッグシップモデルに対抗する位置づけです。一方、DeepSeek-V4-Flashは低レイテンシと低コストを実現するため、パラメータ規模と有効化規模を大幅に抑えています。前世代モデルと比べて、Agent能力、世界知識、複雑推論タスクでさらに向上し、初めて「100万トークンコンテキスト」がデフォルト能力として開放されました。

### Agent能力を大幅強化
Agent能力の面では、DeepSeek-V4-ProのAgent能力は大幅に強化されています。Agentic Codingなどの評価でオープンソースの第一線に入りました。内部評価によると、成果物の品質はClaude Opus 4.6の非思考モードに近い一方、思考モードとはなお差があります。

DeepSeek-V4-Proは、数学・STEM・競技プログラミングといった高難度タスクで、現在公開評価されているオープンソースモデルを上回っています。総合性能はGPT-5.4やClaude Opus 4.6-Maxなど、トップクラスのクローズドソースモデルに迫る、あるいは同等レベルに達しています。

### 長文コンテキストのコストを大幅削減
同時に、DeepSeek-V4は長文コンテキスト効率において、より大胆な最適化群を導入しました。100万トークンのシナリオでは、1トークンあたりの推論計算量はV3.2のわずか27%、KV Cache使用量は約10%まで削減され、長連鎖タスクに必要な計算資源とビデオメモリコストを大幅に低減します。

## API価格プラン
公式はDeepSeek-V4シリーズのAPI価格を次の通り発表しました：
- DeepSeek-V4-Pro：キャッシュ入力 1元 / 100万トークン、非キャッシュ入力 12元 / 100万トークン、出力 24元 / 100万トークン
- DeepSeek-V4-Flash：キャッシュ入力はわずか 0.2元 / 100万トークン、非キャッシュ入力 1元 / 100万トークン、出力 2元 / 100万トークン

現在、DeepSeek-V4シリーズは公式サイトとAppで利用可能になっており、APIとモデル重みも同時に公開されています。

## 実機体験：総合能力の底上げ
私たちはDeepSeek-V4の変化を初期体験し、主にDeepSeek-V4-Proモデルをテストしました。

### Agenticプログラミング能力が顕著に向上
フロントエンドWebのワンショットケースでは、DeepSeek-V4-Proは高い実行効率を示しました。要求がそれほど複雑でなかったため、モデルの思考時間は5秒程度で、その後すぐに開発へ移行しました。これは、従来のDeepSeekモデルが思考で大量トークンを消費しがちだった挙動と明確に異なります。実際の生成フェーズに入ると、DeepSeek-V4-Proの出力長は他のDeepSeekモデルより明らかに長く、生成速度も速く、ほぼ5行単位でコードを出力しました。完成したWebページの完成度はDeepSeek-V3.2より高く、デザインもより豊かです。

Agent能力とプログラミングを組み合わせたタスクテストでも、DeepSeek-V4-Proは複雑なマルチラウンドのツール呼び出しを実行でき、オンライン検索エントリー数も従来モデルより増加し、情報収集がより包括的でした。最終生成された旅行プランは計画が合理的で、各観光地の位置情報も付与され、クリック後にナビゲーションAppで直接利用できるため非常に便利です。Agentタスクでは、行動判断が非常に決断的で、ツール呼び出しと思考が数秒以内に処理され、トークン効率も良好であることが確認できました。

### 100万トークンコンテキストの実測
DeepSeek-V4シリーズは100万トークンコンテキストをサポートしています。私たちは「三体」三部作の完全版（合計約54万トークン）をアップロードしてテストし、モデルは指定内容を迅速に特定でき、超長文における情報検索を成功裏に実現しました。

知識カットオフ日テストでは、DeepSeek-V4-Proの知識カットオフは依然として2025年であることが示されました。また、現時点では視覚能力は未対応です。画像をアップロードしてもテキスト抽出が行われ、文字を含まない画像は処理不可として表示されます。

## 技術アーキテクチャの革新
今回のV4で最も直接的な変化は、「長文コンテキスト」がデフォルト能力になった点です。単純にウィンドウを拡張する従来方式とは異なり、DeepSeek-V4-Proは新しいハイブリッド注意アーキテクチャを導入し、Compressed Sparse AttentionとHigh Compression Attention（HCA）を組み合わせ、さらにDSA疎注意と協調してトークン次元で圧縮を行います。

さらに、モデルは従来の残差接続を強化するためにmanifold constrained hyperconnection（mHC）を導入し、Muonオプティマイザを使って収束速度と学習安定性を高めています。こうした一連の設計により、モデルは「より長く記憶する」ことと計算コスト制御を両立しています。

公式データによると、100万トークンコンテキストでは、DeepSeek-V4-Proの1トークンあたり推論TFLOPsはDeepSeek-V3.2比で約3.7倍〜9.8倍低下し、KV Cache使用量は9.5倍〜13.7倍低下しました。これは、過去には実運用が難しかった超長連鎖タスク（マルチラウンドAgent計画、長文書処理など）が、実行可能レンジに入り始めたことを意味します。

## 性能：オープンソースモデルの新たな天井
能力構造の観点では、DeepSeek-V4-Proの向上は、推論・知識・Agent能力の同時強化として現れています。

### 知識と推論能力
知識・推論タスクでは、SimpleQA、Apex、Codeforcesなどの評価で現行主流のオープンソースモデルを上回り、多くのタスクでGPT-5.4やGemini 3.1 Proに迫っています。たとえばApex Shortlistでは90.2点を記録し、すでにトップ級クローズドソースモデルを上回っています。Codeforcesなどの競技タスクでも第一線レベルを維持しています。

### Agent能力
Agent関連タスクでは、DeepSeek-V4-ProはSWE VerifiedやTerminal Benchなどの指標で安定した性能を示します。SWE Verifiedは80.6に達し、Claude Opus 4.6に接近しつつ、ほとんどのオープンソースモデルを大きく上回っています。Terminal Bench 2.0でも、GLM-5.1 ThinkingやKimi K2.6 Thinkingを超える成績です。

総合すると、DeepSeek-V4-Proは現時点でオープンソースモデルの「天井」です。

## Agentシナリオ向けの特別最適化
今回のDeepSeek-V4はAgentシナリオへの適応を大幅に強化しています。Claude Code、OpenClaw、CodeBuddyなど主流Agentフレームワーク向けに特別最適化を実施し、コード生成や文書生成などの多段タスクでより安定して動作します。

実際のポジショニングとして、DeepSeek-V4-ProはDeepSeek内部でAgentic Codingモデルとして利用され、「タスク完了」を重視しています。単純タスクではV4-FlashでもPro版に近いものの、複雑タスクでは依然として有意な差があり、Agentアプリケーションに本質的に2つの「計算資源ギア」を提供しています。

## まとめ
DeepSeek-V4のリリースは、チームの技術・アーキテクチャ蓄積を示すだけでなく、国内計算資源エコシステムの下でオープンソース大規模モデルが実運用に着地する能力を示すものです。Huawei AscendやCambriconなど国内チップへの適応と最適化を経て、DeepSeek-V4シリーズは100万トークンコンテキストに対する安定サポートと高効率推論を実現し、長連鎖タスクと多段Agent実行を可能にしました。

本バージョンはProとFlashの異なるポジショニングを実装し、性能面ではクローズドソースのフラッグシップモデルに迫りつつ、コスト面では高い費用対効果を維持し、国内開発者に前例のないオープンな選択肢を提供しています。さらに重要なのは、今回のリリースが、オープンソースモデルがグローバル競争で足場を築くだけでなく、国内計算資源と最適化アーキテクチャを活かして技術ポテンシャルを実用的生産力へ転換できることを示した点です。

DeepSeek-V4は、中国のオープンソース勢力が高性能AIトラックで踏み出した重要な一歩であり、国内AIエコシステムの革新と実装に明確な指針を提供するものになるかもしれません。

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/ja/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    DeepSeekの使用を開始する
  </a>
</div>
