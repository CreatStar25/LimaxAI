# Full section translations for Codex office blog.
# Used by generate_codex_office_blog.py for locales except zh-cn and en.

try:
    from codex_office_locales_remaining import REMAINING_FULL
except ImportError:
    from scripts.codex_office_locales_remaining import REMAINING_FULL  # type: ignore


def _en():
    return {
        "intro": "OpenAI shipped a major **Codex** refresh aimed at office work: **six role plugins** bundling **62 apps** and **110 automation skills** across data, creative, sales, product design, public equities, and investment banking. **Sites** turns deliverables into shareable interactive web pages; **Annotations** lets you select a region and edit only that part. Codex is no longer positioning itself as “just coding”—it wants to run whole workflows.",
        "keywords": "Keywords: chatgpt, GPT-5.6, gpt tutorial.",
        "published": "Published: June 3, 2026",
        "img_alt": "Codex major update 62 apps 110 skills office workflows",
        "h_data": "By the numbers: 5M weekly users, faster growth outside engineering",
        "data": "Codex passed **5 million** weekly active users—about **6×** growth since the desktop launch in February. Structure matters: **non-developers** (analysts, marketing, ops, designers, researchers, investors) are roughly **20%** of users and growing about **3×** faster than developers.",
        "data_table": "| Work type | Recent week-over-week (approx.) |\n| --- | --- |\n| Data analysis | +110% |\n| Research | +37% |\n| Knowledge outputs (reports, memos, contracts, decks, sheets) | +36% |",
        "data_note": "**60%+** of users now run multiple Codex tasks in a single day (under half in mid-April). That points to penetration in white-collar work, not only “another assistant for programmers.”",
        "h_plugins": "Six plugins: job-specific toolchains",
        "plugins_intro": "Each plugin packages the software a role already lives in. You give a plain-language instruction; Codex orchestrates cross-app steps in the background.",
        "plugins_table": "| Plugin | Typical connectors | Example ask |\n| --- | --- | --- |\n| Data analysis | Snowflake, Tableau, etc. | “Which region’s revenue fell last quarter and why?”—query, analyze, chart |\n| Creative | Figma, Canva, etc. | Turn a creative brief into ad variants, product scenes, commerce images |\n| Sales | Salesforce, HubSpot, etc. | Prioritize accounts, prep meetings, follow-ups, CRM updates, close plans |\n| Product design | Figma, Canva, etc. | Clickable prototypes from wireframes; audit flows from a live URL |\n| Public equities | FactSet, S&P, PitchBook, etc. | Earnings work, comps, thesis checks |\n| Investment banking | Research & diligence | Client-ready pitches, trading/comps analyses |",
        "plugins_note": "More plugins (corp finance, PE, marketing strategy, consulting, legal) are planned, with a partner ecosystem. OpenAI is acting as a **cross-SaaS orchestration layer**—not replacing one app, but sitting above them.",
        "h_sites": "Sites: one prompt, a shareable interactive page",
        "sites": "**Sites** is in preview for Business and Enterprise. Instead of only handing you a file, Codex can ship a **web page** your team opens and uses.",
        "sites_list": "Common cases:\n\n- Finance turns an Excel model into a scenario planner leadership can tune in the browser.\n- Launch hubs that centralize copy, milestones, owners, and decisions.\n- Pre-review pages with product updates, open issues, usage trends, and next steps.",
        "sites_note": "The gap from “I need an interactive app” to “here is the URL” shrinks from weeks of build to minutes of conversation—and pages can be updated as facts change.",
        "h_annotations": "Annotations: select, instruct, patch locally",
        "annotations": "**Annotations** moved beyond code to **documents, spreadsheets, and slides**. Highlight the part you want changed; Codex edits only that region.\n\nExamples: verify a data citation in a memo, fix a chart label on a deck, restyle a nav bar on a Sites page. It targets the “second draft” problem without rewriting everything.",
        "h_merge": "Codex and ChatGPT: converging",
        "merge": "The bundle signals Codex for everyone who works, not only engineers. Internally, Codex and **ChatGPT** are on one trajectory—chat as the front door, workflow execution as the product. The industry shift is from Q&A to “say what you need done.”",
        "h_pressure": "Who feels pressure first",
        "pressure": "Vendors with deep data, compliance, and integrations (e.g. Salesforce, Snowflake) keep short-term moats. The squeeze hits **middle layers sold on “great UI”**: lightweight BI, PM shells, report builders. When users describe outcomes instead of learning a tool for three days, interface polish is a weaker defense. Moats cluster at **data/compliance sources** or the **agent layer that routes tools**.",
        "h_guide": "GPT tutorial: master ChatGPT while Codex runs workflows",
        "guide": "Codex connects apps; **ChatGPT** still carries daily drafting, Q&A, and brainstorming. Before **GPT-5.6** is everywhere, practice on **GPT-5.4 / GPT-5.5**:\n\n1. **Bound the task**—sources, output format, and “do not change” sections (same mindset as Annotations).\n2. **Outline long docs first**—headings plus one-line goals per section, then expand.\n3. **Split office work into steps**—systems to touch and artifacts to produce—so plugin migration is easier later.\n4. **Keep a fixed eval set**—same prompts across reasoning tiers; log quality and latency for comparisons when new models ship.\n\nUse the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they appear).",
        "h_sum": "Summary",
        "sum_table": "| Item | Takeaway |\n| --- | --- |\n| Plugins | Six roles; 62 apps + 110 skills |\n| Sites | Interactive pages from natural language |\n| Annotations | Local edits on docs, sheets, slides |\n| Users | 5M WAU; non-dev share and growth rising |\n| Direction | Codex + ChatGPT converging on office agents |\n| Next step | Clarify tasks in ChatGPT; try GPT on LimaxAI |",
        "sum_line": "The race is shifting from “can it code?” to “can it finish the workflow?” Until then, getting more from the **ChatGPT** you already have beats chasing every feature name.",
    }


def _zh_tw():
    e = _en()
    return {
        **e,
        "intro": "OpenAI 今天為 **Codex** 推出面向辦公場景的大改版：**六個角色專屬外掛**，捆綁 **62 個應用** 與 **110 個自動化技能**，涵蓋數據分析、創意、銷售、產品設計、公募股權投資與投行。同時上線 **Sites**（內容變可分享的互動網頁）與 **Annotations**（圈哪改哪）。Codex 的目標已不只是寫程式，而是接管整條工作流。",
        "keywords": "關鍵字：chatgpt、GPT-5.6、gpt教程。",
        "published": "發布日期：2026年6月3日",
        "img_alt": "Codex 重大更新 62 個應用 110 項技能 面向白領辦公",
        "h_data": "先看數據：500 萬週活，非開發者增速更快",
        "data": "Codex 週活躍用戶已突破 **500 萬**，自 2 月桌面版上線以來約 **6 倍** 成長。更值得看的是結構：**非開發者**（分析師、行銷、營運、設計師、研究員、投資人等）已占約 **20%**，增速約為開發者的 **3 倍以上**。",
        "data_table": "| 任務類型 | 近期週環比（約） |\n| --- | --- |\n| 數據分析 | +110% |\n| 研究類 | +37% |\n| 知識產出（報告、備忘錄、合約、PPT、表格等） | +36% |",
        "data_note": "另有行為數據：**60% 以上** 用戶會在一天內並行跑多個 Codex 任務（4 月中旬還不到一半）。這說明 Codex 正在白領日常工作中滲透，而不只是「程式設計師多了一個助手」。",
        "h_plugins": "六個外掛：按角色打包職業工具鏈",
        "plugins_intro": "設計思路是按崗位定制，而不是把通用能力硬套給所有人。每個外掛打包該角色常用軟體，你用自然語言下指令，Codex 在後台跨應用跑完整流程。",
        "plugins_table": "| 外掛 | 連接的典型工具 | 能做什麼（示例） |\n| --- | --- | --- |\n| 數據分析 | Snowflake、Tableau 等 | 問「上季度哪個區域收入下降、原因是什麼」，查庫、分析、出圖一氣呵成 |\n| 創意製作 | Figma、Canva 等 | 根據創意簡報生成廣告素材變體、產品場景圖、電商用圖 |\n| 銷售 | Salesforce、HubSpot 等 | 找高優先級客戶、準備會議材料、跟進郵件、更新 CRM、做關單與風險復盤 |\n| 產品設計 | Figma、Canva 等 | 線框圖轉可點擊原型，或從網址審計用戶流程 |\n| 公募股權投資 | FactSet、S&P、PitchBook 等 | 盈利分析、公司對比、投資邏輯驗證 |\n| 投行 | 研究與盡調材料 | 生成客戶就緒 Pitch、可比公司與可比交易分析 |",
        "plugins_note": "後續還有企業財務、私募、行銷策略、諮詢、法律等外掛，並開放生態讓合作夥伴上架。OpenAI 在這裡扮演 **跨 SaaS 的調度層**：不替代某一個工具，而是坐在工具之上串聯流程。",
        "h_sites": "Sites：一句話生成可分享的互動網頁",
        "sites": "**Sites** 面向 Business / Enterprise 用戶預覽開放。以前 Codex 幹完活往往給你一個檔案；現在可以直接生成 **網頁**，把連結發給同事即可查看和操作。",
        "sites_list": "典型場景包括：\n\n- 財務把 Excel 模型變成線上情景規劃器，管理層在網頁上調參對比假設。\n- 產品發布時匯總成 Hub：最新文案、里程碑、負責人、決策記錄集中展示。\n- 客戶評審前生成互動頁：產品更新、待解決問題、使用趨勢與下一步行動。",
        "sites_note": "從「想要一個互動應用」到「真的有一個」，過去可能要幾週開發；現在可以壓縮到幾分鐘對話。頁面也不是一次性的——資訊變了可以讓 Codex 更新，也可用於專案進度、客服指引、團隊創意簡報等。",
        "h_annotations": "Annotations：圈哪改哪",
        "annotations": "**Annotations** 從程式設計師改程式擴展到 **文件、表格、投影片**。選中不滿意的一塊，說明要怎麼改，Codex 只動選中區域，其餘內容保持不變。\n\n例如：投資分析裡圈出一段問數據來源；投影片裡圈住圖表改標籤；Sites 頁面裡選中導覽列換字體。它解決的是「初稿之後怎麼精修」，不必整篇重來。",
        "h_merge": "Codex 與 ChatGPT：走向合併",
        "merge": "這次三項功能疊加，信號很明確：Codex 要服務所有上班的人，而不只是工程師。OpenAI 內部 Codex 與 **ChatGPT** 已由同一團隊推進，長期看兩者很可能 **合併為一條產品線**——聊天是入口，執行工作流才是核心。",
        "h_pressure": "誰會更受影響",
        "pressure": "數據與合規壁壘深的廠商（如 Salesforce、Snowflake）短期內仍難被外掛完全替代。更需要警惕的是 **靠「介面好用」吃飯的中間層**：BI 看板、輕量專案管理、報告生成器等。當用戶只需說清楚要什麼，而不必學三天 Tableau，「介面體驗」這條護城河會變薄。壁壘會向兩頭集中：**數據與合規源頭**，或 **能理解意圖、調度工具的 Agent 層**。",
        "h_guide": "GPT 教程：在 Codex 辦公流之外，先把 ChatGPT 用熟",
        "guide": "Codex 負責跨應用幹活；日常問答、起草文件、腦力激盪仍離不開 **ChatGPT**。在 **GPT-5.6** 正式全面開放前，建議先用 **GPT-5.4 / GPT-5.5** 練這幾件事：\n\n1. **任務寫清邊界**：說明輸入來源、輸出格式、不要改動哪些部分（和 Annotations 的圈選邏輯一致）。\n2. **長文件先給結構**：目錄 + 每節一句話目標，再讓模型展開，減少跑偏。\n3. **辦公場景拆步**：先列「要連哪些系統、產出什麼檔案」，再執行，方便以後遷移到 Codex 外掛。\n4. **固定樣本做對比**：同一組提示在不同推理檔位各跑一遍，記錄品質與耗時。\n\n想先在瀏覽器體驗 GPT，可點下方按鈕進入 LimaxAI（目前 **gpt-5.4**，上新後可在模型列表切換）。",
        "h_sum": "小結",
        "sum_table": "| 項目 | 要點 |\n| --- | --- |\n| 外掛 | 六類角色，62 應用 + 110 技能 |\n| Sites | 自然語言生成交互網頁並分享 |\n| Annotations | 文件 / 表格 / 投影片圈選精修 |\n| 用戶結構 | 500 萬週活，非開發者占比與增速上升 |\n| 產品走向 | Codex 與 ChatGPT 趨同，辦公 Agent 化 |\n| 你的下一步 | 用 ChatGPT 練清需求與提示，再在 LimaxAI 體驗 GPT |",
        "sum_line": "辦公 AI 的競爭焦點，正在從「會不會寫程式」變成「能不能替你跑完流程」。在那之前，把手上的 **ChatGPT** 用熟，往往比追逐每一個新功能名更實在。",
    }


def _patch(lang: str, **kwargs) -> dict:
    base = _en().copy()
    base.update(kwargs)
    return base


_LOCALE_OVERRIDES: dict[str, dict[str, str]] = {
    "ja": _patch(
        "ja",
        intro="OpenAIはオフィス向けに **Codex** を大規模更新。**6つのロール別プラグイン**で **62アプリ** と **110の自動化スキル** を束ね、データ、クリエイティブ、営業、プロダクト設計、株式リサーチ、投資銀行をカバー。**Sites** は成果物を共有できる対話型Webに、**Annotations** は選択範囲だけを編集します。",
        keywords="キーワード：chatgpt、GPT-5.6、gptチュートリアル。",
        published="公開日：2026年6月3日",
        img_alt="Codex大型アップデート 62アプリ 110スキル オフィス",
        h_data="数字で見る：週500万WAU、非開発者の伸びが速い",
        data="Codexの週間アクティブは **500万** を突破。2月のデスクトップ版以降約 **6倍**。**非開発者**（アナリスト、マーケ、オペ、デザイナー、リサーチ、投資家）が約 **20%** で、開発者の **3倍以上** のペースで増加。",
        data_table="| 業務 | 直近の週次伸び（目安） |\n| --- | --- |\n| データ分析 | +110% |\n| リサーチ | +37% |\n| ナレッジ成果物（報告書、メモ、契約、スライド、表） | +36% |",
        data_note="**60%超** が1日に複数タスクを並行（4月中旬は半数未満）。プログラマー補助からホワイトカラー業務への浸透が進んでいます。",
        h_plugins="6つのプラグイン：職種別ツールチェーン",
        plugins_intro="職種ごとに常用SaaSを束ね、自然言語の指示でバックグラウンドから横断実行します。",
        plugins_table="| プラグイン | 接続例 | できること |\n| --- | --- | --- |\n| データ分析 | Snowflake、Tableau 等 | 四半期の減収地域と原因を問い、クエリ・分析・グラフまで |\n| クリエイティブ | Figma、Canva 等 | ブリーフから広告バリエーション、商品シーン、EC画像 |\n| 営業 | Salesforce、HubSpot 等 | 優先顧客、会議準備、フォローメール、CRM更新、クローズ計画 |\n| プロダクト設計 | Figma、Canva 等 | ワイヤーをクリック可能プロトタイプに、URLからフロー監査 |\n| 株式 | FactSet、S&P、PitchBook 等 | 収益分析、比較、論点検証 |\n| 投資銀行 | リサーチ・DD | クライアント向けピッチ、コンプ分析 |",
        plugins_note="財務、PE、マーケ戦略、コンサル、法務などが続き、パートナー生态も開放予定。**SaaS横断のオーケストレーション層**として位置づけ。",
        h_sites="Sites：一言で共有できる対話ページ",
        sites="**Sites** は Business / Enterprise プレビュー。ファイルだけでなく **Webページ** をURL共有できます。",
        sites_list="- 財務：Excelモデルをブラウザで触れるシナリオプランナーに\n- ローンチHub：文案、マイルストーン、担当、決定を集約\n- 顧客レビュー前：更新、課題、利用トレンド、次アクションのページ",
        sites_note="「対話アプリが欲しい」から「URLがある」までが数週間から数分に。更新もCodexに依頼可能。",
        h_annotations="Annotations：選択して部分修正",
        annotations="**Annotations** はコードから **文書・表・スライド** へ拡張。選択範囲だけを変更。\n\nメモの出典確認、スライドのラベル修正、Sitesのナビスタイル変更など、「第二稿」の問題に効きます。",
        h_merge="CodexとChatGPT：収束へ",
        merge="エンジニア以外の全勤務者向け。**ChatGPT** と同一軌道で、チャットは入口、ワークフロー実行が本体。",
        h_pressure="影響を受けやすい層",
        pressure="SalesforceやSnowflakeのようなデータ・コンプラ・統合の厚いベンダーは短期堅牢。**UIの使いやすさ**が売りの中間層（軽量BI、PM、レポート生成）が圧力を受けやすい。",
        h_guide="GPTチュートリアル：Codexと並行してChatGPTを鍛える",
        guide="Codexはアプリ連携、日常の起草とQ&Aは **ChatGPT**。**GPT-5.6** 前に **GPT-5.4/5.5** で：\n\n1. 境界を明示（Annotationsと同じ発想）\n2. 長文は目次＋各節の一行目標から\n3. オフィス作業は手順分割\n4. 固定プロンプトで品質・遅延を記録\n\n下のボタンからLimaxAI（**gpt-5.4**）へ。",
        h_sum="まとめ",
        sum_table="| 項目 | 要点 |\n| --- | --- |\n| プラグイン | 6ロール、62アプリ+110スキル |\n| Sites | 自然言語で対話ページ |\n| Annotations | 部分編集 |\n| ユーザー | 500万WAU、非開発者増 |\n| 方向性 | Codex+ChatGPTのAgent化 |\n| 次 | ChatGPTで要件整理→LimaxAI |",
        sum_line="競争軸は「コードが書けるか」から「フローが終わるか」へ。まず手元の **ChatGPT** を使いこなすのが現実的です。",
    ),
    "ko": _patch(
        "ko",
        intro="OpenAI가 오피스 워크플로를 겨냥해 **Codex** 를 대폭 업데이트했습니다. **6개 역할 플러그인**, **62개 앱**, **110개 자동화 스킬**로 데이터·크리에이티브·영업·제품설계·주식·IB를 다룹니다. **Sites** 는 공유 가능한 인터랙티브 웹, **Annotations** 는 선택 영역만 수정합니다.",
        keywords="키워드: chatgpt, GPT-5.6, gpt 튜토리얼",
        published="게시일: 2026년 6월 3일",
        img_alt="Codex 대규모 업데이트 62앱 110스킬 오피스",
        h_data="숫자로 보기: 주 500만 WAU, 비개발자 성장이 더 빠름",
        data="Codex 주간 활성 **500만** 돌파, 2월 데스크톱 이후 약 **6배**. **비개발자** 약 **20%**, 개발자 대비 **3배+** 성장.",
        data_table="| 업무 | 최근 주간 증가(대략) |\n| --- | --- |\n| 데이터 분석 | +110% |\n| 리서치 | +37% |\n| 지식 산출물(보고서, 메모, 계약, PPT, 시트) | +36% |",
        data_note="하루에 여러 Codex 작업을 돌리는 비율 **60%+** (4월 중순엔 절반 미만).",
        h_plugins="6개 플러그인: 직무별 툴체인",
        plugins_intro="직무별 SaaS를 묶고 자연어 한 줄로 백그라운드에서 크로스앱 실행.",
        plugins_table="| 플러그인 | 연결 예 | 예시 |\n| --- | --- | --- |\n| 데이터 | Snowflake, Tableau | 지역별 매출 하락 원인 분석·차트 |\n| 크리에이티브 | Figma, Canva | 브리프→광고 변형·상품컷 |\n| 영업 | Salesforce, HubSpot | 우선 고객·미팅·CRM·클로즈 |\n| 제품설계 | Figma, Canva | 와이어→프로토타입·URL 플로우 감사 |\n| 주식 | FactSet, S&P, PitchBook | 실적·비교·논리 검증 |\n| IB | 리서치·실사 | 피치·컴프 |",
        plugins_note="재무·PE·마케팅·컨설·법무 플러그인과 파트너 생태 예정. **SaaS 오케스트레이션 레이어**.",
        h_sites="Sites: 한 문장으로 공유 가능한 페이지",
        sites="Business/Enterprise 프리뷰. 파일 대신 **웹 페이지** URL 공유.",
        sites_list="- 재무: Excel→브라우저 시나리오 플래너\n- 런치 허브: 카피·마일스톤·오너·결정\n- 고객 리뷰 전: 업데이트·이슈·트렌드·다음 액션",
        sites_note="몇 주 개발이 몇 분 대화로. 변경 시 Codex가 페이지 업데이트.",
        h_annotations="Annotations: 선택 후 부분 수정",
        annotations="코드에서 **문서·스프레드시트·슬라이드**로 확장. 선택 영역만 편집.",
        h_merge="Codex와 ChatGPT: 수렴",
        merge="채팅은 입구, 워크플로 실행이 본체. **ChatGPT** 와 한 팀에서 밀고 있습니다.",
        h_pressure="압박을 먼저 받는 층",
        pressure="데이터·컴플라이언스 깊은 벤더는 단기 방어 가능. **UI 편의**가 핵심인 중간층 BI·PM·리포트 빌더가 취약.",
        h_guide="GPT 튜토리얼: Codex와 함께 ChatGPT 익히기",
        guide="**GPT-5.6** 전 **GPT-5.4/5.5** 로 경계·목차·단계 분할·고정 eval 세트 연습. 아래 LimaxAI(**gpt-5.4**).",
        h_sum="요약",
        sum_table="| 항목 | 요점 |\n| --- | --- |\n| 플러그인 | 6역할, 62앱+110스킬 |\n| Sites | NL→인터랙티브 페이지 |\n| Annotations | 부분 편집 |\n| 사용자 | 500만 WAU |\n| 방향 | Codex+ChatGPT Agent |\n| 다음 | ChatGPT→LimaxAI |",
        sum_line="경쟁은 '코딩'에서 '워크플로 완료'로 이동합니다.",
    ),
}

# Spanish base for Romance / similar locales
_ES = _patch(
    "es",
    intro="OpenAI lanzó una gran actualización de **Codex** para trabajo de oficina: **seis plugins por rol** con **62 aplicaciones** y **110 habilidades** automatizadas. **Sites** crea páginas interactivas compartibles; **Annotations** edita solo la zona seleccionada.",
    keywords="Palabras clave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Publicado: 3 de junio de 2026",
    img_alt="Actualización Codex 62 apps 110 habilidades oficina",
    h_data="Cifras: 5M usuarios semanales, más crecimiento fuera de ingeniería",
    data="Codex superó **5 millones** de usuarios activos semanales (~**6×** desde febrero). Los **no desarrolladores** son ~**20%** y crecen ~**3×** más rápido.",
    data_table="| Tipo | Crecimiento semanal (aprox.) |\n| --- | --- |\n| Análisis de datos | +110% |\n| Investigación | +37% |\n| Entregables (informes, memos, contratos, diapos, hojas) | +36% |",
    data_note="**60%+** ejecutan varias tareas Codex en un día (en abril era menos de la mitad).",
    h_plugins="Seis plugins: cadenas de herramientas por rol",
    plugins_intro="Cada plugin agrupa el software del rol; tú das la instrucción en lenguaje natural y Codex orquesta en segundo plano.",
    plugins_table="| Plugin | Conectores | Ejemplo |\n| --- | --- | --- |\n| Datos | Snowflake, Tableau | Caída de ingresos por región y por qué |\n| Creativo | Figma, Canva | Variantes de anuncios desde un brief |\n| Ventas | Salesforce, HubSpot | Cuentas prioritarias, reuniones, CRM |\n| Diseño de producto | Figma, Canva | Prototipos clicables, auditoría de flujos |\n| Renta variable | FactSet, S&P, PitchBook | Resultados, comps, tesis |\n| Banca de inversión | Research y due diligence | Pitch listo para cliente, comps |",
    plugins_note="Más plugins (finanzas, PE, marketing, consultoría, legal) y ecosistema de partners. Capa de **orquestación SaaS**.",
    h_sites="Sites: de una frase a una página interactiva",
    sites="**Sites** en vista previa para Business y Enterprise: entrega una **página web**, no solo un archivo.",
    sites_list="- Finanzas: Excel → planificador de escenarios en el navegador\n- Hub de lanzamiento: copy, hitos, responsables, decisiones\n- Pre-revisión con clientes: actualizaciones, issues, tendencias, próximos pasos",
    sites_note="De semanas de desarrollo a minutos de conversación; las páginas se actualizan cuando cambian los datos.",
    h_annotations="Annotations: seleccionar y corregir en local",
    annotations="De código a **documentos, hojas y diapos**. Resalta la zona; Codex solo toca esa parte.",
    h_merge="Codex y ChatGPT: convergencia",
    merge="Chat como puerta, ejecución de flujos como producto. **ChatGPT** y Codex van en la misma dirección.",
    h_pressure="Quién nota la presión primero",
    pressure="Salesforce y Snowflake mantienen fosos por datos y cumplimiento. Presión en capas medias vendidas por **UI excelente**: BI ligero, PM, generadores de informes.",
    h_guide="Tutorial GPT: domina ChatGPT mientras Codex conecta apps",
    guide="Antes de **GPT-5.6**, practica con **GPT-5.4/5.5**: límites, esquema, pasos, eval fijo. Botón a LimaxAI (**gpt-5.4**).",
    h_sum="Resumen",
    sum_table="| Ítem | Idea clave |\n| --- | --- |\n| Plugins | 6 roles; 62 apps + 110 skills |\n| Sites | Páginas interactivas por lenguaje natural |\n| Annotations | Edición local |\n| Usuarios | 5M WAU; más no-dev |\n| Rumbo | Agentes de oficina |\n| Siguiente | ChatGPT + LimaxAI |",
    sum_line="La carrera pasa de «¿programa?» a «¿termina el flujo?». Mejor exprimir el **ChatGPT** actual.",
)

_LOCALE_OVERRIDES["es"] = _ES

_LOCALE_OVERRIDES["fr"] = _patch(
    "fr",
    intro="OpenAI déploie une refonte majeure de **Codex** pour le bureau : **six plugins métiers**, **62 applications** et **110 compétences** automatisées. **Sites** publie des pages interactives ; **Annotations** n’édite que la zone sélectionnée.",
    keywords="Mots-clés : chatgpt, GPT-5.6, tutoriel gpt.",
    published="Publié le 3 juin 2026",
    img_alt="Mise à jour Codex 62 apps 110 compétences bureau",
    h_data="Les chiffres : 5M d’utilisateurs hebdo, les non-devs accélèrent",
    data="**5 millions** d’utilisateurs actifs hebdomadaires, ~**×6** depuis février. Les **non-développeurs** ~**20%**, croissance ~**×3** plus rapide.",
    data_table="| Type | Croissance hebdo (approx.) |\n| --- | --- |\n| Analyse de données | +110% |\n| Recherche | +37% |\n| Livrables (rapports, mémos, contrats, slides, tableurs) | +36% |",
    data_note="**60%+** lancent plusieurs tâches Codex par jour.",
    h_plugins="Six plugins : chaînes d’outils par métier",
    plugins_intro="Chaque plugin regroupe les logiciels du rôle ; instruction en langage naturel, orchestration en arrière-plan.",
    plugins_table="| Plugin | Connecteurs | Exemple |\n| --- | --- | --- |\n| Données | Snowflake, Tableau | Revenus en baisse par région et pourquoi |\n| Créatif | Figma, Canva | Variantes pub depuis un brief |\n| Ventes | Salesforce, HubSpot | Comptes prioritaires, réunions, CRM |\n| Design produit | Figma, Canva | Prototypes cliquables, audit de parcours |\n| Actions | FactSet, S&P, PitchBook | Résultats, comps, thèse |\n| Banque d’invest. | Research & due diligence | Pitch client, comps |",
    plugins_note="Finance, PE, marketing, conseil, juridique à venir. Couche d’**orchestration SaaS**.",
    h_sites="Sites : une phrase, une page partageable",
    sites="**Sites** en préversion Business/Enterprise : une **page web** partageable.",
    sites_list="- Finance : Excel → planificateur de scénarios\n- Hub de lancement\n- Page pré-revue client",
    sites_note="De semaines de dev à minutes de dialogue ; pages mises à jour par Codex.",
    h_annotations="Annotations : sélectionner, corriger localement",
    annotations="Au-delà du code : **documents, tableurs, slides**. Codex ne modifie que la sélection.",
    h_merge="Codex et ChatGPT : convergence",
    merge="Le chat est l’entrée, l’exécution des flux le produit. **ChatGPT** et Codex sur une même trajectoire.",
    h_pressure="Qui est pressé en premier",
    pressure="Salesforce/Snowflake gardent des fossés data/compliance. Pression sur le **milieu « belle UI »** : BI léger, PM, générateurs de rapports.",
    h_guide="Tutoriel GPT : maîtriser ChatGPT pendant que Codex relie les apps",
    guide="Avant **GPT-5.6**, entraînez-vous sur **GPT-5.4/5.5** : bornes, plan, étapes, eval fixe. Bouton LimaxAI (**gpt-5.4**).",
    h_sum="Synthèse",
    sum_table="| Élément | Point clé |\n| --- | --- |\n| Plugins | 6 rôles ; 62 apps + 110 skills |\n| Sites | Pages interactives |\n| Annotations | Édition locale |\n| Utilisateurs | 5M WAU |\n| Cap | Agents bureau |\n| Suite | ChatGPT + LimaxAI |",
    sum_line="La course passe du code au flux terminé. Mieux vaut exploiter le **ChatGPT** actuel.",
)

_LOCALE_OVERRIDES["de"] = _patch(
    "de",
    intro="OpenAI hat **Codex** für Büro-Workflows stark erweitert: **sechs Rollen-Plugins**, **62 Apps** und **110 Automatisierungs-Skills**. **Sites** liefert teilbare Web-Apps; **Annotations** bearbeitet nur die Auswahl.",
    keywords="Schlagwörter: chatgpt, GPT-5.6, gpt tutorial.",
    published="Veröffentlicht: 3. Juni 2026",
    img_alt="Codex Update 62 Apps 110 Skills Büro",
    h_data="Zahlen: 5M wöchentliche Nutzer, Nicht-Entwickler wachsen schneller",
    data="**5 Millionen** wöchentlich aktive Nutzer, ~**6×** seit Februar. **Nicht-Entwickler** ~**20%**, ~**3×** schnelleres Wachstum.",
    data_table="| Aufgabe | Wöchentliches Wachstum (ca.) |\n| --- | --- |\n| Datenanalyse | +110% |\n| Research | +37% |\n| Wissensartefakte | +36% |",
    data_note="**60%+** starten mehrere Codex-Jobs pro Tag.",
    h_plugins="Sechs Plugins: Berufs-Toolchains",
    plugins_intro="Je Rolle gebündelte SaaS-Tools; eine Anweisung in natürlicher Sprache, Codex orchestriert.",
    plugins_table="| Plugin | Tools | Beispiel |\n| --- | --- | --- |\n| Daten | Snowflake, Tableau | Umsatzrückgang nach Region |\n| Kreativ | Figma, Canva | Anzeigenvarianten aus Briefing |\n| Vertrieb | Salesforce, HubSpot | Accounts, Meetings, CRM |\n| Produktdesign | Figma, Canva | Klickbare Prototypen |\n| Aktien | FactSet, S&P, PitchBook | Earnings, Comps |\n| IB | Research | Pitch, Comps |",
    plugins_note="Weitere Plugins und Partner-Ökosystem geplant. **SaaS-Orchestrierungsschicht**.",
    h_sites="Sites: ein Satz, eine interaktive Seite",
    sites="**Sites** in der Vorschau für Business/Enterprise.",
    sites_list="- Finanzen: Excel → Szenario-Planer im Browser\n- Launch-Hub\n- Kunden-Review-Seite",
    sites_note="Von Wochen Entwicklung zu Minuten Dialog.",
    h_annotations="Annotations: auswählen und lokal patchen",
    annotations="Nicht nur Code: **Dokumente, Tabellen, Folien**. Nur die Markierung wird geändert.",
    h_merge="Codex und ChatGPT: Konvergenz",
    merge="Chat als Eingang, Workflow-Ausführung als Produkt.",
    h_pressure="Wer zuerst unter Druck steht",
    pressure="Daten- und Compliance-Tiefe schützt Salesforce/Snowflake. Druck auf **UI-Mittelschicht**: leichtes BI, PM, Report-Builder.",
    h_guide="GPT-Tutorial: ChatGPT üben, während Codex Apps verbindet",
    guide="Vor **GPT-5.6** mit **GPT-5.4/5.5** üben. LimaxAI (**gpt-5.4**) über den Button.",
    h_sum="Kurzfassung",
    sum_table="| Punkt | Kernaussage |\n| --- | --- |\n| Plugins | 6 Rollen; 62 Apps + 110 Skills |\n| Sites | Interaktive Seiten |\n| Annotations | Lokale Edits |\n| Nutzer | 5M WAU |\n| Richtung | Office-Agenten |\n| Nächster Schritt | LimaxAI |",
    sum_line="Vom Coden zum fertigen Workflow – nutzen Sie zuerst **ChatGPT**.",
)

_LOCALE_OVERRIDES.update(REMAINING_FULL)


def build_sections(lang: str) -> dict:
    if lang == "zh-tw":
        return _zh_tw()
    base = _en()
    if lang in _LOCALE_OVERRIDES:
        merged = base.copy()
        merged.update(_LOCALE_OVERRIDES[lang])
        return merged
    return base


FULL_SECTIONS = {
    lang: build_sections(lang)
    for lang in [
        "zh-tw", "ja", "ko", "es", "fr", "de", "pt", "it", "ru", "uk", "pl",
        "nl", "sv", "ro", "ar", "id", "ms", "vi", "th", "tr", "hi", "fa",
    ]
}
