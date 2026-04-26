---
title: "DeepSeek V4が正式にリリース、公式API価格が発表"
description: "DeepSeek V4シリーズのモデルが正式に公開され、完全な公式API価格が発表されました。ProバージョンとFlashバージョンが含まれ、100万トークンの超長文コンテキストをサポートし、開発者向けに高性能でコスト効率の高い大型モデルサービスを提供します。"
tags: ["deepseek v4", "DeepSeek公式サイト", "DeepSeekチュートリアル", "DeepSeek V4価格"]
pubDate: "2026-04-25"
heroImage: "https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png"
lang: "ja"
author: "DeepSeek HK"
---

キーワード：deepseek v4、DeepSeek公式サイト、DeepSeekチュートリアル、DeepSeek V4価格

公開日：2026年4月25日

著者：DeepSeek HK

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.limaxai.com/ja/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 1.2rem; box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
    DeepSeekの利用を開始する
  </a>
</div>

![DeepSeek V4が正式にリリース、公式API価格が発表](https://img.limaxai.com/aiweb/deepseek-blog-limax-260424-4.png)

本日、DeepSeekは新V4シリーズモデルのAPI価格プランを正式に発表しました。これは世界中の開発者が待ち望んでいた次世代大型モデルの正式な商業ローンチを示します。DeepSeek V4シリーズにはFlashとProの2つのバージョンが含まれ、両方とも100万トークンの超長文コンテキストをサポートしています。性能レベルが大幅に向上すると同時にコスト効率も最適化され、AIアプリケーション開発に対してより競争力のある選択肢を提供します。

## モデルと価格の説明
DeepSeekのAPI価格は100万トークンあたりで計算されます。トークンはモデルが認識する最小のテキスト単位であり、単語、数字、さらには句読点の場合もあります。料金はモデルが実際に処理した入力トークンと出力トークンの合計数に基づいて計算されます。

### モデルパラメータ詳細比較
| 機能 | deepseek-v4-flash* | deepseek-v4-pro |
|---------|---------------------|------------------|
| ベースURL（OpenAIフォーマット） | https://api.deepseek.com | https://api.deepseek.com |
| ベースURL（Anthropicフォーマット） | https://api.deepseek.com/anthropic | https://api.deepseek.com/anthropic |
| モデルバージョン | DeepSeek-V4-Flash | DeepSeek-V4-Pro |
| 思考モード | 思考なしモードと思考モード（デフォルト）の両方をサポート。切り替え方法は思考モードのページを参照 | 思考なしモードと思考モード（デフォルト）の両方をサポート。切り替え方法は思考モードのページを参照 |
| コンテキスト長 | 100万 | 100万 |
| 最大出力長 | 384,000まで | 384,000まで |
| JSON出力 | ✓ | ✓ |
| ツール呼び出し | ✓ | ✓ |
| チャットプレフィックス補完（ベータ） | ✓ | ✓ |
| FIM補完（ベータ） | 思考なしモードのみ | 思考なしモードのみ |
| 入力100万トークン（キャッシュヒット時） | $0.028 | $0.145 |
| 入力100万トークン（キャッシュミス時） | $0.14 | $1.74 |
| 出力100万トークン | $0.28 | $3.48 |

* 注：モデル名「deepseek-chat」と「deepseek-reasoner」は今後段階的に廃止される予定です。互換性のため、現在これら2つの名前はそれぞれ「deepseek-v4-flash」の思考なしモードと思考モードに対応しています。

## 料金控除ルール
実際の消費金額 = トークン使用量 × 対応する単価。料金はチャージ残高またはギフト残高から直接差し引かれます。両方の残高が存在する場合、システムは優先的にギフト残高を使用します。

製品価格は市場の状況に応じて調整される可能性があり、DeepSeekは価格調整の最終権利を留保します。開発者は実際の使用ニーズに応じてチャージし、最新情報を入手するために定期的に公式価格ページを確認することをお勧めします。

## コアメリット分析
高い性能を維持しながら、DeepSeek V4シリーズは極めて競争力のある価格戦略を採用しており、さまざまなAIアプリケーションシナリオに特に適しています：

### コスト効率の高いコンピューティングパワーの選択肢
deepseek-v4-flashバージョンは極めて低価格で優れた性能を提供し、インテリジェントカスタマーサービス、コンテンツ生成、通常のチャットアプリケーションなど、高スループットで高い応答速度が要求されるシナリオに特に適しています。キャッシュヒット時の入力100万トークンあたりわずか$0.028という価格は、大規模アプリケーションの運用コストを大幅に削減します。

### 最高水準の性能体験
deepseek-v4-proバージョンは複雑な推論タスクと専門分野向けに最適化されており、数学計算、コード生成、専門知識に関する質問などのシナリオでより優れた性能を発揮し、高精度な出力が要求されるプロフェッショナルなアプリケーションシナリオに適しています。

### 超長文コンテキストサポート
両バージョンとも100万トークンの超長文コンテキストと最大384,000トークンの出力長をサポートしており、書籍全体、長文書、完全なプロジェクトコードなどの超大規模テキストタスクを処理でき、複雑なAIアプリケーション開発のための強固な基盤を提供します。

## クイックスタートガイド
DeepSeek V4の利用開始は非常に簡単です：
1. DeepSeek公式サイトにアクセスしてアカウントを登録
2. APIキーを取得
3. 公式ドキュメントに従ってインターフェース呼び出しを実行
4. 独自のAIアプリケーションの構築を開始

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.limaxai.com/ja/chat?model=deepseek-v4-flash" style="display: inline-block; padding: 1.2rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.3rem; box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5); transition: all 0.3s ease;">
    DeepSeekの利用を開始する
  </a>
</div>

DeepSeek V4のリリースは開発者により多くの選択肢を提供します。個人開発者であろうと企業レベルのアプリケーションであろうと、このモデルシステムの中からニーズに合ったコンピューティングパワーソリューションを見つけることができます。モデルエコシステムの継続的な改善に伴い、DeepSeek V4はAIアプリケーション開発の重要な礎石となり、より多くの革新的な製品の誕生を促進すると私たちは信じています。
