---
title: "15ヶ月の待望のアップデート、DeepSeek V4プレビュー版徹底解説"
description: "DeepSeek V4プレビュー版が正式リリース。ProとFlashの2つのMoEモデルを搭載し、ネイティブで100万トークンのコンテキストをサポート。性能を大幅に向上させながら推論コストを劇的に削減しました。本記事ではDeepSeek V4の技術アーキテクチャ、性能、価格体系を詳しく解説します。"
tags: ["deepseek v4", "deepseek 公式サイト", "deepseek チュートリアル", "deepseek v4 価格"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png"
lang: "ja"
author: "DeepSeek HK"
---

本記事ではDeepSeek V4の技術的特徴、性能、使用ガイドを解説し、この次世代大規模言語モデルのコアアドバンテージを包括的に分析します。コンテンツは技術愛好家から開発者まで幅広く理解できるように平易に記載しています。

キーワード：deepseek v4、deepseek 公式サイト、deepseek チュートリアル、deepseek v4 価格。

発行日：2026年4月25日
著者：DeepSeek HK

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/ja/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    DeepSeekを使い始める
  </a>
</div>

![DeepSeek V4プレビュー版徹底解説](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## 一、DeepSeek V4プレビュー版正式リリース

4月24日、DeepSeekはV4プレビュー版のリリースを正式に発表しました。前世代のV3.2のリリースから15ヶ月を経ての大型アップデートであり、DeepSeekの大規模モデル技術ロードマップにおけるさらなる重要なブレークスルーを示しています。

公式の発表によると、V4シリーズには2つのMoEモデルが含まれています：
- **DeepSeek-V4-Pro**：総パラメータ1.6T、アクティブ化パラメータ49B
- **DeepSeek-V4-Flash**：総パラメータ284B、アクティブ化パラメータ13B

両モデルともネイティブで100万トークンのコンテキストをサポートし、長文処理能力において質的な飛躍を実現しています。特筆すべきは、1Mコンテキスト設定において：
- V4-Proの1トークンあたりの推論FLOPsはV3.2のわずか27%、KVキャッシュはたった10%
- V4-Flashはさらに極限まで削減され、それぞれ10%と7%に抑えられています

これは、コンテキスト長がV3.2の128KからV4の1Mへと約8倍に拡張されたにもかかわらず、1トークンあたりの計算コストが大幅に削減されたことを意味し、長文コンテキスト能力と推論効率の両方でブレークスルーを達成しています。

DeepSeek公式は、V4プレビュー版はインフラストラクチャのアップデートと位置づけられており、主に長文コンテキストのコスト構造を再構築し、次段階のtest-time scalingと長距離タスクへの道を開くことを目的としていると明言しています。現在の能力レベルは依然としてGPT-5.4やGemini-3.1-Proに遅れをとっており、開発トラジェクトリは最先端のクローズドソースモデルより約3〜6ヶ月遅れているとしています。

## 2. 2つのモデル、3つの推論モード：V4の中核機能

### 2.1 モデルパラメータとコスト優位性

V4シリーズ最大のハイライトは、コスト曲線の大幅な最適化です。1Mトークンコンテキスト設定では：
- V4-Pro：1トークンあたり推論FLOPsはV3.2のわずか27%、KV Cacheはわずか10%
- V4-Flash：1トークンあたり推論FLOPsはV3.2のわずか10%、KV Cacheはわずか7%

この効率向上により、100万レベルコンテキストでの推論コストが大きく下がり、長文処理や文書分析などのシナリオに経済的な実用解を提供します。

### 2.2 API価格体系

DeepSeekは一貫した高コストパフォーマンスの価格戦略を継続しています：
- **V4-Pro**：入力100万トークンあたり¥1（キャッシュヒット）または¥12（キャッシュミス）、出力100万トークンあたり¥24
- **V4-Flash**：入力100万トークンあたり¥0.2（キャッシュヒット）または¥1（キャッシュミス）、出力100万トークンあたり¥2

### 2.3 3段階の推論強度レベル

各モデルには、異なるシナリオ要件に対応する3つの推論モードがあります：
1. **Non-think**：直接出力モードで最速応答
2. **Think High**：標準的な深い思考モードで、速度と品質のバランスを取る
3. **Think Max**：強い指示を注入し、コンテキストと出力長を最大化してモデル能力を解放

Maxモードではモデル性能が顕著に向上します。V4-Pro-MaxはHLEテストで34.5から37.7へ、Apex Shortlistテストで85.5から90.2へ上昇しますが、代償として出力トークン数は約2倍になります。

## 3. ベンチマークテスト性能

DeepSeekが公開した公式テストデータによると、V4シリーズは複数の評価で優れた性能を示しています。

### 3.1 知識・推論テスト
- DeepSeek-V4-Pro-Maxは、Apex Shortlist（90.2%）とCodeforces（Rating 3206）という2つのハードコア推論／プログラミングタスクで首位を獲得し、非常に強いロジック能力とアルゴリズム能力を示しています
- Gemini-3.1-Pro-HighはSimpleQA Verified（75.6%）でリード
- ClaudeとGPTは各プロジェクトでそれぞれ強みを示し、全体差は小さい

### 3.2 Agent能力テスト
- SWE Verifiedタスクでは4モデルすべて同等の成績（すべて80.6）
- DeepSeekはTerminal Bench 2.0（67.9%）とToolathlon（51.8%）で優位を示し、複雑指示実行やツール呼び出しシナリオで明確な強みを持つ

公式によると、DeepSeek-V4-ProのAgent能力は前世代比で大幅に向上し、「ユーザー体験はSonnet 4.5を上回り、成果品質はOpus 4.6の非思考モードに近いが、Opus 4.6思考モードとはなお差がある」としています。

### 3.3 世界知識と汎用能力
- V4-Proは世界知識評価で他のオープンソースモデルを大きく上回り、トップのクローズドソースモデルGemini-Pro-3.1にわずかに遅れるのみ
- 数学・STEM・競技コード評価では、V4-Proは現在公開評価されているすべてのオープンソースモデルを上回り、世界トップ級クローズドソースモデル水準に到達
- 経済性重視モデルであるV4-Flashは、Pro版より知識蓄積はやや少ないものの推論能力は近く、より小さいパラメータと有効化値で高速・低コストなAPIサービスを提供
- Agent評価では、V4-Flashは単純タスクでPro版に近い一方、高難度タスクにはなお差がある

## 4. 中核技術革新：Attention機構の書き換え

V4の最も中核的な技術変化はAttention層にあり、長文コンテキスト推論効率の問題を根本から解決しています。

従来のTransformer Attentionでは、各tokenがそれ以前のすべてのtokenとの類似度計算を必要とします。コンテキストが100Kから1Mに拡張されると計算コストは100倍に増え、これが長文コンテキスト普及を妨げる中核ボトルネックでした。

V4は層交互の革新的なデュアルAttention機構を採用しています：
1. **CSA (Compressed Sparse Attention)**：まず4 tokenごとにKV cacheを1つの要約へ統合し、各queryが関連性の高いtop-k要約のみを選択してAttention計算を行うことで、処理対象を圧縮しつつ関連情報へ集中
2. **HCA (Heavy Compressed Attention)**：より強い圧縮を行い、128 tokenごとに1つの要約へ統合した上で、残った要約に対して疎選択なしの密Attentionを実施

2つのAttention機構は交互に積層され、近傍token間の詳細依存を処理するsliding window分岐と組み合わせることで、「粗粒度 + 細粒度、疎 + 密」の複合アプローチを形成します。

技術進化の観点で見ると、DeepSeek V2とV3は主にパラメータ疎化（総パラメータは大きいが、各tokenでは一部expertのみ活性化）の路線でした。V4はその基盤の上で、コンテキスト疎化（KV圧縮、top-k選択、階層圧縮率）という新たな道を切り開きました。これはDeepSeekが初めて「疎化」概念をTransformer中核構造へ適用した事例です。

Attention層に加え、V4には2つの重要なアーキテクチャ改善があります：
1. 従来の残差接続をmHC（Manifold Constrained Hyperconnection）へアップグレードし、数学的制約で深層ネットワークの順伝播・逆伝播をより安定化
2. 多くのモジュールでAdamWをMuon optimizerへ置換し、収束速度向上と学習安定化を実現

これはDeepSeekがTransformerの3つの中核要素（Attention、残差接続、optimizer）を同時に改良した初めてのケースです。

## 5. Post-Trainingパラダイム革新：専門家モデル蒸留

アーキテクチャ変更以上に、V4のPost-Training手法における革新は注目に値します。

V3.2では「混合RL」手法を使い、複数目的を同時に強化学習最適化していました。V4は「まず分化し、次に統合する」という2段階戦略を採用しています：
1. **分化フェーズ**：数学、コード、Agent、指示追従など異なる領域ごとに独立した専門家モデルを訓練。各専門家はまず高品質領域データで教師あり微調整を行い、その後GRPOアルゴリズムで強化学習し、専門領域で最適性能を獲得
2. **統合フェーズ**：On-Policy Distillation（OPD）手法を使い、10以上の領域専門家を単一の学生モデルへ「合成」。学生が回答生成後、「この問題を最も理解している」専門家の出力分布に合わせてlogitレベル整合を行い、専門家能力を吸収

この手法は、複数領域の「トップ学生」の能力を1つのモデルへ蒸留するものと理解できます。10兆超パラメータ級教師モデルを同時ロードする工学的課題を解くため、DeepSeekは教師重みを分散ストレージへ退避し、各教師の最終層hidden stateのみキャッシュ。訓練時にはサンプルを教師インデックス順にソートし、任意時点でGPUメモリに1つの教師ヘッドのみが載るようにしています。

この手法により、従来「混合RL」で起こりやすかった能力干渉問題を回避し、複数領域でトップ性能を達成可能にしています。

## 6. Agent能力の特別最適化

DeepSeek V4は主流Agent製品向けに特化した適応と最適化を行っており、コードタスクや文書生成などのシナリオで性能が向上しています。

V4のAgent能力向け特別最適化は以下の通りです：
1. Post-TrainingでAgentを数学・コードと並ぶ独立専門方向として扱い、個別訓練
2. Tool calling形式をJSONから特殊token付きXML構造へ変更し、escapeエラー率を低減
3. Tool callingシナリオでcross-turn推論トレースを完全保持し、V3.2のように各ターンでクリアしない
4. 自社構築DSec sandboxプラットフォームにより、単一クラスタで数十万規模のsandboxインスタンスを同時管理し、Agent強化学習の訓練・評価を支援

公式は、V4-ProのAgent能力について「Sonnet 4.5より優れ、成果品質はOpus 4.5非思考モードに近いが、Opus 4.6思考モードにはなお差がある」としています。

![DeepSeek V4 Technical Architecture](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-1.png)

## まとめ

DeepSeek V4 Previewは、技術革新が際立つ大規模モデルです。Attention機構の再構築と訓練パラダイム革新により、強い推論能力を維持しつつ長文コンテキスト推論コストを大幅に削減し、100万レベルコンテキストの実用化へ道を開きました。

強い推論能力が必要な専門シナリオでも、コスト効率を重視する大規模アプリケーションでも、V4シリーズは適切な選択肢を提供します。DeepSeek V4の強力な能力を体験したい方は、ぜひ当社プラットフォームで直接お試しください。

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/ja/chat?model=deepseek-v4-flash" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 18px 56px; border-radius: 8px; font-size: 22px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)';">
    DeepSeekを使い始める
  </a>
</div>
