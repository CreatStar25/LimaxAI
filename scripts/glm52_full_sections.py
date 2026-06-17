# Full section translations for GLM-5.2 blog.
# Used by generate_glm52_blog.py for locales except zh-cn and en.


def _en():
    return {
        "intro": "On June 17, 2026, Zhipu AI officially launched and open-sourced its new flagship **GLM-5.2**. Compared with GLM-5.1, the upgrade is less about one-shot benchmark scores and more about making **coding** and **long-horizon tasks** actually work—1M lossless context, stronger engineering execution, MIT license, and Day 0 support on multiple domestic compute platforms.",
        "keywords": "Keywords: chatgpt, GPT-5.6, gpt tutorial.",
        "published": "Published: June 17, 2026",
        "img_alt": "GLM-5.2 intro coding long-horizon tasks",
        "h_focus": "What GLM-5.2 is for: coding first, finish long jobs",
        "focus_intro": "GLM-5.2 targets two high-frequency workflows:",
        "focus_table": "| Scenario | Need | GLM-5.2 response |\n| --- | --- | --- |\n| Engineering coding | Multi-file edits, debug, tests | Stronger code generation and agent execution |\n| Long-horizon tasks | Plan → build → verify across turns | 1M context that holds the whole project |",
        "focus_note": "Zhipu positions GLM-5.2 as a long-horizon flagship: the win is not a single clever answer, but **one task running start to delivery without context collapse**.",
        "h_context": "1M context: room for an entire codebase",
        "context": "GLM-5.2 ships a usable **1M-token context** (GLM-5.1 was around 200K). That means:\n\n- Mid-size monorepos can be analyzed in **one session** without constant chunking.\n- Docs, implementation, and tests can sit in the same window—fewer \"the model forgot what it wrote\" moments.\n- Long agent loops (plan → code → debug → regression) get a much larger working memory.\n\nIn an official stress test, the model delivered a full app spanning **web, mobile, and mini-program** in one run—about **880K tokens** processed, nearly filling the 1M window. Without enough context, humans end up stitching history by hand; throughput drops fast.",
        "h_bench": "Benchmarks: top open model, closing in on Claude Opus 4.8",
        "bench_intro": "On major coding evals, GLM-5.2 ranks as the **strongest open-weight model**, within single-digit points of closed frontier models:",
        "bench_table": "| Benchmark | GLM-5.2 | Reference |\n| --- | --- | --- |\n| Code Arena (frontend blind test) | #1 among available models | Millions of user votes |\n| FrontierSWE | ~1% behind Claude Opus 4.8 | Ahead of GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 was 63.5 (+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 was 58.4 |",
        "bench_note": "The jump from 63.5 to 81.0 on Terminal-Bench is the clearest signal—gains show up in **terminal/agent execution**, not just static completion.",
        "h_arch": "Architecture: IndexShare and MTP",
        "arch": "Two engineering changes matter for builders:\n\n**IndexShare (sparse attention)**: at 1M context, per-token FLOPs drop about **2.9×**. Long windows are useless if inference cost explodes; IndexShare makes \"1M available\" closer to \"1M affordable.\"\n\n**Improved MTP (speculative decoding)**: acceptance length rises up to **20%**, speeding long outputs—especially large code generations.\n\nGLM-5.2 also offers **high / max** reasoning effort tiers so teams can trade latency for depth, similar to other frontier models.",
        "h_open": "Open weights, APIs, and domestic compute",
        "open": "GLM-5.2 is **MIT-licensed**, with weights on Hugging Face and ModelScope—download, deploy, and commercial use allowed. APIs are live on BigModel and Z.ai.\n\nDay 0 inference support includes:\n\n- Huawei Ascend, T-Head, Moore Threads, Cambricon\n- Kunlunxin, MetaX, Hygon, Biren\n\nFor teams needing **on-prem** or **domestic GPU** inference, that matters. GLM Coding Plan users already have access.",
        "h_guide": "GPT tutorial: great coding model—but ChatGPT still runs your day",
        "guide": "GLM-5.2 is built for engineering agents; daily drafting, brainstorming, and quick Q&A still flow through **ChatGPT**. Before **GPT-5.6** is everywhere, practice on **GPT-5.4 / GPT-5.5**:\n\n1. **Split tasks**—goal → subtasks → acceptance criteria, same mindset as agent workflows.\n2. **Manage context**—give directory layout and key files before deep edits; don't waste the window.\n3. **Fixed test prompts**—run the same coding asks across models/tiers; log pass rate and latency.\n4. **Compare reasoning tiers**—like GLM-5.2 high/max, ChatGPT has fast vs deep modes; learn which fits which job.\n\nUse the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they appear).",
        "h_sum": "Summary",
        "sum_table": "| Item | Takeaway |\n| --- | --- |\n| Focus | Coding + long-horizon flagship |\n| Context | 1M tokens for whole projects |\n| Benchmarks | Terminal-Bench 81.0; top open model |\n| Architecture | IndexShare + MTP speculative decoding |\n| License | MIT; Hugging Face / ModelScope |\n| Compute | Day 0 on 8 domestic platforms |\n| Next step | Practice task splitting in ChatGPT; try GPT on LimaxAI |",
        "sum_line": "GLM-5.2 raises the open coding ceiling again. Whether you run long agents on GLM or keep **ChatGPT** for daily work, getting task design and context hygiene right beats chasing every new model name.",
    }


def _zh_tw():
    e = _en()
    return {
        **e,
        "intro": "6 月 17 日，智譜 AI 正式上線並開源新一代旗艦模型 **GLM-5.2**。和前代 GLM-5.1 相比，這次升級的核心不是「刷榜分數」，而是把 **Coding 能力** 和 **長程任務** 做紮實——1M 無損上下文、更強的工程執行、MIT 開源，Day 0 適配多家國產算力平台。",
        "keywords": "關鍵字：chatgpt、GPT-5.6、gpt教程。",
        "published": "發布日期：2026年6月17日",
        "img_alt": "GLM-5.2 介紹 專注 Coding 與長程任務",
        "h_focus": "GLM-5.2 定位：Coding 優先，長程任務能跑完",
        "focus_intro": "GLM-5.2 面向兩類高頻場景：",
        "focus_table": "| 場景 | 具體需求 | GLM-5.2 的應對 |\n| --- | --- | --- |\n| 工程 Coding | 多檔案改動、除錯、跑測試 | 強化程式生成與 Agent 執行 |\n| 長程任務 | 跨多輪規劃、實作、驗收 | 1M 上下文穩定承載完整工程 |",
        "focus_note": "官方把 GLM-5.2 定義為「長程任務旗艦」：不是單次問答更強，而是 **一個任務從開始到交付，上下文不斷檔**。",
        "h_context": "1M 上下文：能裝下整個軟體工程",
        "context": "GLM-5.2 實現了真正可用的 **1M token 上下文**（前代 GLM-5.1 約 200K）。這意味著：\n\n- 中大型 monorepo 可以在 **單次對話** 裡完成分析，不必頻繁切分檔案。\n- 文件 + 實作 + 測試用例可以同時放進上下文，減少「模型忘了前面寫了什麼」的問題。\n- 長程 Agent 工作流（規劃 → 編碼 → 除錯 → 回歸）有更大的「工作記憶」。\n\n官方實測案例：模型一次性交付覆蓋 **Web、行動端與小程序** 的完整應用，累計處理約 **88 萬 tokens**，幾乎用滿 1M 視窗。",
        "h_bench": "評測表現：開源第一，逼近 Claude Opus 4.8",
        "bench_intro": "在多個權威 Coding 評測裡，GLM-5.2 是目前 **排名最高的開源模型**：",
        "bench_table": "| 評測 | GLM-5.2 | 對比參考 |\n| --- | --- | --- |\n| Code Arena（前端盲測） | 全球可用模型第一 | 百萬用戶參與 |\n| FrontierSWE | 僅比 Claude Opus 4.8 低約 1% | 超過 GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 為 63.5（+17.5） |\n| SWE-bench Pro | **62.1** | GLM-5.1 為 58.4 |",
        "bench_note": "Terminal-Bench 從 63.5 跳到 81.0，是這次升級最直觀的數據——說明模型在 **終端/Agent 執行** 類任務上進步明顯。",
        "h_arch": "架構升級：IndexShare 與 MTP",
        "arch": "GLM-5.2 在架構上做了兩項關鍵優化：\n\n**IndexShare（稀疏注意力優化）**：在 1M 上下文長度下，每 token 計算量降低約 **2.9 倍**。\n\n**MTP 層改進（推測解碼）**：多 token 預測層的接受長度提升最高約 **20%**。\n\n此外，GLM-5.2 提供 **high / max** 兩檔推理強度，開發者可以在「速度」和「深度思考」之間切換。",
        "h_open": "開源、API 與國產算力適配",
        "open": "GLM-5.2 採用 **MIT 協議** 開源，權重已上線 Hugging Face 與 ModelScope。API 同步上線 BigModel 開放平台與 Z.ai。\n\n線上推理 **Day 0** 完成與華為昇騰、平頭哥、摩爾執行緒、寒武紀、崑崙芯、沐曦、海光、壁仞等國產算力平台適配。模型也已向 GLM Coding Plan 全量用戶開放。",
        "h_guide": "GPT 教程：Coding 模型很強，日常仍離不開 ChatGPT",
        "guide": "GLM-5.2 專攻工程與長程 Agent，但日常寫文件、腦力激盪、快速問答，**ChatGPT** 仍是最高頻入口。在 **GPT-5.6** 全面開放前，建議先用 **GPT-5.4 / GPT-5.5** 練這幾件事：\n\n1. **任務拆步**：長程 Coding 前先列「目標 → 子任務 → 驗收標準」。\n2. **上下文管理**：大專案先給目錄結構和關鍵檔案清單，再讓模型深入。\n3. **固定測試樣本**：同一組 Coding 提示在不同模型/檔位各跑一遍。\n4. **推理檔位對照**：類似 GLM-5.2 的 high/max，ChatGPT 也有不同 reasoning 檔位。\n\n想先在瀏覽器體驗 GPT，可點下方按鈕進入 LimaxAI（目前 **gpt-5.4**）。",
        "h_sum": "小結",
        "sum_table": "| 項目 | 要點 |\n| --- | --- |\n| 定位 | Coding + 長程任務旗艦 |\n| 上下文 | 1M token，可承載完整工程 |\n| 評測 | Terminal-Bench 81.0；開源模型第一 |\n| 架構 | IndexShare + MTP 推測解碼 |\n| 開源 | MIT；Hugging Face / ModelScope |\n| 算力 | Day 0 適配 8 家國產平台 |\n| 你的下一步 | 用 ChatGPT 練任務拆分與提示，再在 LimaxAI 體驗 GPT |",
        "sum_line": "GLM-5.2 把開源 Coding 模型的天花板又抬高了一檔。無論你用它跑長程 Agent，還是繼續用 **ChatGPT** 處理日常協作，先把「任務怎麼拆、上下文怎麼管」練熟，比追每一個新模型名更實在。",
    }


def _patch(lang: str, **kwargs) -> dict:
    base = _en().copy()
    base.update(kwargs)
    return base


_LOCALE_OVERRIDES: dict[str, dict[str, str]] = {
    "ja": _patch(
        "ja",
        intro="2026年6月17日、智譜AI（Zhipu AI）が新フラッグシップ **GLM-5.2** を正式リリースしオープンソース化。**Coding** と **長期タスク** に特化——1Mコンテキスト、MITライセンス、国産GPU Day 0対応。",
        keywords="キーワード：chatgpt、GPT-5.6、gptチュートリアル。",
        published="公開日：2026年6月17日",
        img_alt="GLM-5.2 Coding 長期タスク",
        h_focus="GLM-5.2の位置づけ：Coding優先、長期タスク完走",
        focus_intro="GLM-5.2は2つの高頻度シナリオ向け：",
        focus_table="| シナリオ | ニーズ | GLM-5.2 |\n| --- | --- | --- |\n| エンジニアリング | 複数ファイル編集・デバッグ・テスト | コード生成とAgent実行強化 |\n| 長期タスク | 計画→実装→検証 | 1Mコンテキストで工程全体を保持 |",
        focus_note="単発回答より **開始から納品までコンテキストが切れない** 長期タスク旗艦。",
        h_context="1Mコンテキスト：コードベース全体を載せる",
        context="**1M token**（GLM-5.1は約200K）。中規模monorepoを **1セッション** で分析、ドキュメント+実装+テストを同一ウィンドウに。公式ストレステスト：**Web・モバイル・ミニプログラム** を一括納品、約 **88万 tokens** 処理。",
        h_bench="ベンチマーク：オープンソース首位、Opus 4.8に接近",
        bench_intro="主要Coding評価で **最強オープンウェイト**：",
        bench_table="| ベンチ | GLM-5.2 | 参考 |\n| --- | --- | --- |\n| Code Arena（フロント） | 利用可能モデル第1 | 百万ユーザー盲測 |\n| FrontierSWE | Opus 4.8より約1%低 | GPT-5.5超 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5（+17.5） |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
        bench_note="Terminal-Bench 63.5→81.0は **ターミナル/Agent実行** の伸びを示す。",
        h_arch="アーキテクチャ：IndexShareとMTP",
        arch="**IndexShare**：1MでFLOPs約 **2.9倍** 削減。**MTP** 改善で推測デコード受容長 **最大20%** 向上。**high/max** 推論強度2段階。",
        h_open="オープンウェイト・API・国産GPU",
        open="**MIT**、Hugging Face/ModelScope。BigModel・Z.ai API。**Day 0** 昇騰・平頭哥・Moore Threads・Cambricon・崑崙芯・沐曦・海光・壁仞対応。GLM Coding Plan全ユーザー向け。",
        h_guide="GPTチュートリアル：Codingモデルと並行してChatGPTを",
        guide="日常は **ChatGPT**。**GPT-5.6** 前に **GPT-5.4/5.5** で：\n\n1. **タスク分割**\n2. **コンテキスト管理**\n3. **固定テストプロンプト**\n4. **推論強度比較**\n\n下のボタンからLimaxAI（**gpt-5.4**）。",
        h_sum="まとめ",
        sum_table="| 項目 | 要点 |\n| --- | --- |\n| 焦点 | Coding+長期タスク |\n| コンテキスト | 1M token |\n| ベンチ | Terminal-Bench 81.0 |\n| 構成 | IndexShare+MTP |\n| ライセンス | MIT |\n| GPU | 国産8社Day 0 |\n| 次 | ChatGPT→LimaxAI |",
        sum_line="GLM-5.2はオープンCodingの上限を引き上げ。**ChatGPT** のタスク設計を先に固めるのが現実的。",
    ),
    "ko": _patch(
        "ko",
        intro="2026년 6월 17일, 智谱 AI(Zhipu AI)가 **GLM-5.2** 플래그십을 공식 출시하고 오픈소스화했습니다. **Coding** 과 **장기 작업** 에 특화—1M 컨텍스트, MIT 라이선스, 국산 GPU Day 0 지원.",
        keywords="키워드: chatgpt, GPT-5.6, gpt 튜토리얼",
        published="게시일: 2026년 6월 17일",
        img_alt="GLM-5.2 Coding 장기 작업",
        h_focus="GLM-5.2 포지션: Coding 우선, 장기 작업 완주",
        focus_intro="GLM-5.2는 두 가지 고빈도 시나리오를 겨냥합니다:",
        focus_table="| 시나리오 | 필요 | GLM-5.2 |\n| --- | --- | --- |\n| 엔지니어링 Coding | 다중 파일 편집, 디버그, 테스트 | 코드 생성·Agent 실행 강화 |\n| 장기 작업 | 계획→구현→검증 | 1M 컨텍스트로 전체 공정 유지 |",
        focus_note="한 번의 답변이 아니라 **시작부터 납품까지 컨텍스트가 끊기지 않는** 장기 작업 플래그십.",
        h_context="1M 컨텍스트: 코드베이스 전체 수용",
        context="**1M token** (GLM-5.1 약 200K). 중형 monorepo를 **한 세션** 에 분석, 문서+구현+테스트 동시 적재. 공식 스트레스 테스트: **웹·모바일·미니프로그램** 일괄 납품, 약 **88만 tokens** 처리.",
        h_bench="벤치마크: 오픈소스 1위, Opus 4.8에 근접",
        bench_intro="주요 Coding 평가에서 **최강 오픈웨이트**:",
        bench_table="| 벤치 | GLM-5.2 | 참고 |\n| --- | --- | --- |\n| Code Arena(프론트) | 이용 가능 모델 1위 | 백만 사용자 |\n| FrontierSWE | Opus 4.8 대비 ~1% | GPT-5.5 초과 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5(+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
        bench_note="Terminal-Bench 63.5→81.0은 **터미널/Agent 실행** 개선을 보여줍니다.",
        h_arch="아키텍처: IndexShare와 MTP",
        arch="**IndexShare**: 1M에서 FLOPs 약 **2.9배** 감소. **MTP** 개선으로 추측 디코딩 수용 길이 **최대 20%** 향상. **high/max** 추론 강도 2단계.",
        h_open="오픈웨이트·API·국산 GPU",
        open="**MIT**, Hugging Face/ModelScope. BigModel·Z.ai API. **Day 0** 昇腾·平头哥·Moore Threads·Cambricon·昆仑芯·沐曦·海光·壁仞 지원.",
        h_guide="GPT 튜토리얼: Coding 모델과 함께 ChatGPT 익히기",
        guide="일상은 **ChatGPT**. **GPT-5.6** 전 **GPT-5.4/5.5** 로:\n\n1. **작업 분할**\n2. **컨텍스트 관리**\n3. **고정 테스트 프롬프트**\n4. **추론 강도 비교**\n\n아래 LimaxAI(**gpt-5.4**).",
        h_sum="요약",
        sum_table="| 항목 | 요점 |\n| --- | --- |\n| 초점 | Coding+장기 작업 |\n| 컨텍스트 | 1M token |\n| 벤치 | Terminal-Bench 81.0 |\n| 구조 | IndexShare+MTP |\n| 라이선스 | MIT |\n| GPU | 국산 8社 Day 0 |\n| 다음 | ChatGPT→LimaxAI |",
        sum_line="GLM-5.2는 오픈 Coding 상한을 올립니다. **ChatGPT** 작업 설계를 먼저 익히세요.",
    ),
}

_ES = _patch(
    "es",
    intro="El 17 de junio de 2026, Zhipu AI lanzó y open-sourceó su nuevo flagship **GLM-5.2**. Frente a GLM-5.1, el salto va a **coding** y **tareas de largo horizonte**—contexto 1M, MIT y soporte Day 0 en plataformas domésticas.",
    keywords="Palabras clave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Publicado: 17 de junio de 2026",
    img_alt="GLM-5.2 Coding tareas largo horizonte",
    h_focus="Para qué sirve GLM-5.2: coding primero, terminar trabajos largos",
    focus_intro="GLM-5.2 apunta a dos flujos frecuentes:",
    focus_table="| Escenario | Necesidad | GLM-5.2 |\n| --- | --- | --- |\n| Coding de ingeniería | Ediciones multi-archivo, debug, tests | Generación de código y ejecución agente |\n| Tareas largas | Plan → build → verificar | Contexto 1M para todo el proyecto |",
    focus_note="No es una respuesta brillante aislada, sino **una tarea de inicio a entrega sin colapsar el contexto**.",
    h_context="Contexto 1M: cabe un codebase entero",
    context="**1M tokens** (GLM-5.1 ~200K). Monorepos medianos en **una sesión**; docs + implementación + tests juntos. Prueba oficial: app **web, móvil y mini-programa** en una corrida—~**880K tokens**.",
    h_bench="Benchmarks: top open, cerca de Claude Opus 4.8",
    bench_intro="En evals de coding, GLM-5.2 es el **modelo open más fuerte**:",
    bench_table="| Benchmark | GLM-5.2 | Referencia |\n| --- | --- | --- |\n| Code Arena (frontend) | #1 modelos disponibles | Millones de votos |\n| FrontierSWE | ~1% detrás de Opus 4.8 | Por delante de GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5 (+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
    bench_note="De 63.5 a 81.0 en Terminal-Bench muestra ganancias en **ejecución terminal/agente**.",
    h_arch="Arquitectura: IndexShare y MTP",
    arch="**IndexShare**: FLOPs ~**2.9×** menos a 1M. **MTP** mejora decodificación especulativa hasta **20%**. Niveles **high/max** de esfuerzo de razonamiento.",
    h_open="Pesos abiertos, APIs y compute doméstico",
    open="Licencia **MIT**; Hugging Face/ModelScope. APIs en BigModel y Z.ai. **Day 0**: Ascend, T-Head, Moore Threads, Cambricon, Kunlunxin, MetaX, Hygon, Biren.",
    h_guide="Tutorial GPT: gran modelo de coding, pero ChatGPT sigue el día a día",
    guide="GLM-5.2 para agentes; el borrador diario sigue en **ChatGPT**. Antes de **GPT-5.6**, practica en **GPT-5.4/5.5**:\n\n1. **Divide tareas**\n2. **Gestiona contexto**\n3. **Prompts de prueba fijos**\n4. **Compara niveles de razonamiento**\n\nBotón LimaxAI (**gpt-5.4**) abajo.",
    h_sum="Resumen",
    sum_table="| Ítem | Idea |\n| --- | --- |\n| Foco | Coding + largo horizonte |\n| Contexto | 1M tokens |\n| Benchmarks | Terminal-Bench 81.0 |\n| Arquitectura | IndexShare + MTP |\n| Licencia | MIT |\n| Compute | 8 plataformas Day 0 |\n| Siguiente | ChatGPT + LimaxAI |",
    sum_line="GLM-5.2 sube el techo open de coding. Diseña bien tareas en **ChatGPT** antes de perseguir cada nombre nuevo.",
)

_LOCALE_OVERRIDES["es"] = _ES

_LOCALE_OVERRIDES["fr"] = _patch(
    "fr",
    intro="Le 17 juin 2026, Zhipu AI a lancé et open-sourcé son flagship **GLM-5.2**—focus **coding** et **tâches longues** : contexte 1M, MIT, support Day 0 sur GPU domestiques.",
    keywords="Mots-clés : chatgpt, GPT-5.6, tutoriel gpt.",
    published="Publié le 17 juin 2026",
    img_alt="GLM-5.2 Coding tâches longues",
    h_focus="GLM-5.2 : coding d'abord, finir les longues tâches",
    focus_intro="Deux scénarios fréquents :",
    focus_table="| Scénario | Besoin | GLM-5.2 |\n| --- | --- | --- |\n| Coding ingénierie | Multi-fichiers, debug, tests | Génération code + agent |\n| Tâches longues | Plan → build → vérif | Contexte 1M pour tout le projet |",
    focus_note="Une tâche **du début à la livraison sans effondrement du contexte**.",
    h_context="Contexte 1M : place pour tout un codebase",
    context="**1M tokens** (GLM-5.1 ~200K). Monorepos moyens en **une session**. Test officiel : app **web, mobile, mini-programme**—~**880K tokens**.",
    h_bench="Benchmarks : top open, proche de Claude Opus 4.8",
    bench_intro="GLM-5.2 = **modèle open le plus fort** sur les evals coding :",
    bench_table="| Bench | GLM-5.2 | Réf. |\n| --- | --- | --- |\n| Code Arena (frontend) | #1 modèles dispo | Millions de votes |\n| FrontierSWE | ~1% derrière Opus 4.8 | Devant GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5 (+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
    bench_note="63.5 → 81.0 sur Terminal-Bench = gains **exécution terminal/agent**.",
    h_arch="Architecture : IndexShare et MTP",
    arch="**IndexShare** : FLOPs ~**2.9×** moins à 1M. **MTP** : +**20%** longueur d'acceptation. Niveaux **high/max**.",
    h_open="Poids ouverts, APIs, compute domestique",
    open="Licence **MIT** ; Hugging Face/ModelScope. APIs BigModel et Z.ai. **Day 0** : Ascend, T-Head, Moore Threads, Cambricon, Kunlunxin, MetaX, Hygon, Biren.",
    h_guide="Tutoriel GPT : bon modèle coding, ChatGPT pour le quotidien",
    guide="GLM-5.2 pour les agents ; **ChatGPT** pour le brouillon daily. Avant **GPT-5.6**, entraînez-vous sur **GPT-5.4/5.5** :\n\n1. **Découper les tâches**\n2. **Gérer le contexte**\n3. **Prompts de test fixes**\n4. **Comparer les niveaux de raisonnement**\n\nBouton LimaxAI (**gpt-5.4**).",
    h_sum="Synthèse",
    sum_table="| Élément | Point |\n| --- | --- |\n| Focus | Coding + long horizon |\n| Contexte | 1M tokens |\n| Bench | Terminal-Bench 81.0 |\n| Archi | IndexShare + MTP |\n| Licence | MIT |\n| Compute | 8 plateformes Day 0 |\n| Suite | ChatGPT + LimaxAI |",
    sum_line="GLM-5.2 relève le plafond open du coding. Maîtrisez d'abord la conception de tâches dans **ChatGPT**.",
)

_LOCALE_OVERRIDES["de"] = _patch(
    "de",
    intro="Am 17. Juni 2026 hat Zhipu AI **GLM-5.2** als neues Flaggschiff gestartet und open-source gemacht—Fokus **Coding** und **Langzeit-Aufgaben**: 1M Kontext, MIT, Day 0 auf heimischen GPUs.",
    keywords="Schlagwörter: chatgpt, GPT-5.6, gpt tutorial.",
    published="Veröffentlicht: 17. Juni 2026",
    img_alt="GLM-5.2 Coding Langzeit-Aufgaben",
    h_focus="GLM-5.2: Coding zuerst, lange Jobs zu Ende bringen",
    focus_intro="Zwei häufige Workflows:",
    focus_table="| Szenario | Bedarf | GLM-5.2 |\n| --- | --- | --- |\n| Engineering-Coding | Multi-Datei, Debug, Tests | Stärkere Code-Gen + Agent |\n| Langzeit-Aufgaben | Plan → Build → Verify | 1M Kontext für ganzes Projekt |",
    focus_note="Nicht ein brillanter Einzelshot, sondern **eine Aufgabe von Start bis Lieferung ohne Kontext-Kollaps**.",
    h_context="1M Kontext: Platz für eine ganze Codebase",
    context="**1M Tokens** (GLM-5.1 ~200K). Mittlere Monorepos in **einer Session**. Offizieller Test: **Web, Mobile, Mini-Programm**—~**880K Tokens**.",
    h_bench="Benchmarks: top open, nahe Claude Opus 4.8",
    bench_intro="GLM-5.2 = **stärkstes Open-Weight-Modell** bei Coding-Evals:",
    bench_table="| Benchmark | GLM-5.2 | Referenz |\n| --- | --- | --- |\n| Code Arena (Frontend) | #1 verfügbare Modelle | Millionen Stimmen |\n| FrontierSWE | ~1% hinter Opus 4.8 | Vor GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5 (+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
    bench_note="63.5 → 81.0 bei Terminal-Bench = **Terminal/Agent-Ausführung**.",
    h_arch="Architektur: IndexShare und MTP",
    arch="**IndexShare**: FLOPs ~**2.9×** weniger bei 1M. **MTP**: bis **20%** längere Akzeptanz. **high/max** Reasoning-Stufen.",
    h_open="Open Weights, APIs, heimische Compute",
    open="**MIT**; Hugging Face/ModelScope. APIs BigModel und Z.ai. **Day 0**: Ascend, T-Head, Moore Threads, Cambricon, Kunlunxin, MetaX, Hygon, Biren.",
    h_guide="GPT-Tutorial: starkes Coding-Modell, ChatGPT für den Alltag",
    guide="GLM-5.2 für Agenten; **ChatGPT** für Daily Drafts. Vor **GPT-5.6** mit **GPT-5.4/5.5** üben:\n\n1. **Aufgaben teilen**\n2. **Kontext managen**\n3. **Feste Test-Prompts**\n4. **Reasoning-Stufen vergleichen**\n\nLimaxAI-Button (**gpt-5.4**).",
    h_sum="Kurzfassung",
    sum_table="| Punkt | Kernaussage |\n| --- | --- |\n| Fokus | Coding + Langzeit |\n| Kontext | 1M Tokens |\n| Bench | Terminal-Bench 81.0 |\n| Architektur | IndexShare + MTP |\n| Lizenz | MIT |\n| Compute | 8 Plattformen Day 0 |\n| Nächster Schritt | ChatGPT + LimaxAI |",
    sum_line="GLM-5.2 hebt die Open-Coding-Decke. Task-Design in **ChatGPT** zuerst meistern.",
)

_LOCALE_OVERRIDES["pt"] = _patch(
    "pt",
    intro="A 17 de junho de 2026, a Zhipu AI lançou e open-sourceou o flagship **GLM-5.2**—foco em **Coding** e **tarefas longas**: contexto 1M, MIT, Day 0 em GPUs domésticas.",
    keywords="Palavras-chave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Publicado: 17 de junho de 2026",
    img_alt="GLM-5.2 Coding tarefas longas",
    h_focus="GLM-5.2: Coding primeiro, concluir tarefas longas",
    focus_intro="Dois fluxos frequentes:",
    focus_table="| Cenário | Necessidade | GLM-5.2 |\n| --- | --- | --- |\n| Coding de engenharia | Multi-arquivo, debug, testes | Geração de código + agente |\n| Tarefas longas | Plan → build → verificar | Contexto 1M para todo o projeto |",
    focus_note="Uma tarefa **do início à entrega sem colapsar o contexto**.",
    h_context="Contexto 1M: cabe um codebase inteiro",
    context="**1M tokens** (GLM-5.1 ~200K). Monorepos médios em **uma sessão**. Teste oficial: app **web, mobile, mini-programa**—~**880K tokens**.",
    h_bench="Benchmarks: top open, perto de Claude Opus 4.8",
    bench_intro="GLM-5.2 = **modelo open mais forte** em evals de coding:",
    bench_table="| Benchmark | GLM-5.2 | Referência |\n| --- | --- | --- |\n| Code Arena (frontend) | #1 modelos disponíveis | Milhões de votos |\n| FrontierSWE | ~1% atrás de Opus 4.8 | À frente de GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5 (+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
    bench_note="63.5 → 81.0 no Terminal-Bench = ganhos em **execução terminal/agente**.",
    h_arch="Arquitetura: IndexShare e MTP",
    arch="**IndexShare**: FLOPs ~**2.9×** menos a 1M. **MTP**: até **20%** mais aceitação. Níveis **high/max**.",
    h_open="Pesos abertos, APIs e compute doméstico",
    open="Licença **MIT**; Hugging Face/ModelScope. APIs BigModel e Z.ai. **Day 0**: Ascend, T-Head, Moore Threads, Cambricon, Kunlunxin, MetaX, Hygon, Biren.",
    h_guide="Tutorial GPT: ótimo para coding, ChatGPT no dia a dia",
    guide="GLM-5.2 para agentes; **ChatGPT** para rascunhos diários. Antes do **GPT-5.6**, pratique em **GPT-5.4/5.5**:\n\n1. **Dividir tarefas**\n2. **Gerir contexto**\n3. **Prompts de teste fixos**\n4. **Comparar níveis de raciocínio**\n\nBotão LimaxAI (**gpt-5.4**).",
    h_sum="Resumo",
    sum_table="| Item | Ideia |\n| --- | --- |\n| Foco | Coding + longo horizonte |\n| Contexto | 1M tokens |\n| Bench | Terminal-Bench 81.0 |\n| Arquitetura | IndexShare + MTP |\n| Licença | MIT |\n| Compute | 8 plataformas Day 0 |\n| Próximo | ChatGPT + LimaxAI |",
    sum_line="GLM-5.2 eleva o teto open de coding. Domine design de tarefas no **ChatGPT** primeiro.",
)

_LOCALE_OVERRIDES["it"] = _patch(
    "it",
    intro="Il 17 giugno 2026 Zhipu AI ha lanciato e open-sourcato il flagship **GLM-5.2**—focus **Coding** e **compiti a lungo orizzonte**: contesto 1M, MIT, Day 0 su GPU domestiche.",
    keywords="Parole chiave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Pubblicato: 17 giugno 2026",
    img_alt="GLM-5.2 Coding compiti lunghi",
    h_focus="GLM-5.2: coding prima, finire compiti lunghi",
    focus_intro="Due flussi frequenti:",
    focus_table="| Scenario | Esigenza | GLM-5.2 |\n| --- | --- | --- |\n| Coding ingegneria | Multi-file, debug, test | Generazione codice + agente |\n| Compiti lunghi | Plan → build → verify | Contesto 1M per tutto il progetto |",
    focus_note="Un compito **dall'inizio alla consegna senza collasso del contesto**.",
    h_context="Contesto 1M: spazio per un intero codebase",
    context="**1M token** (GLM-5.1 ~200K). Monorepo medi in **una sessione**. Test ufficiale: app **web, mobile e mini-programma**—~**880K token**.",
    h_bench="Benchmark: top open, vicino a Claude Opus 4.8",
    bench_intro="GLM-5.2 = **modello open più forte** negli eval coding:",
    bench_table="| Benchmark | GLM-5.2 | Riferimento |\n| --- | --- | --- |\n| Code Arena (frontend) | #1 modelli disponibili | Milioni di voti |\n| FrontierSWE | ~1% dietro Opus 4.8 | Davanti a GPT-5.5 |\n| Terminal-Bench 2.1 | **81.0** | GLM-5.1 63.5 (+17.5) |\n| SWE-bench Pro | **62.1** | GLM-5.1 58.4 |",
    bench_note="63.5 → 81.0 su Terminal-Bench = guadagni **esecuzione terminal/agent**.",
    h_arch="Architettura: IndexShare e MTP",
    arch="**IndexShare**: FLOPs ~**2.9×** in meno a 1M. **MTP**: fino al **20%** accettazione. Livelli **high/max**.",
    h_open="Pesi aperti, API e compute domestico",
    open="Licenza **MIT**; Hugging Face/ModelScope. API BigModel e Z.ai. **Day 0**: Ascend, T-Head, Moore Threads, Cambricon, Kunlunxin, MetaX, Hygon, Biren.",
    h_guide="Tutorial GPT: ottimo per coding, ChatGPT per il quotidiano",
    guide="GLM-5.2 per agenti; **ChatGPT** per bozze daily. Prima di **GPT-5.6**, esercitati su **GPT-5.4/5.5**:\n\n1. **Suddividere compiti**\n2. **Gestire contesto**\n3. **Prompt di test fissi**\n4. **Confrontare livelli di ragionamento**\n\nPulsante LimaxAI (**gpt-5.4**).",
    h_sum="Sintesi",
    sum_table="| Elemento | Punto |\n| --- | --- |\n| Focus | Coding + lungo orizzonte |\n| Contesto | 1M token |\n| Bench | Terminal-Bench 81.0 |\n| Architettura | IndexShare + MTP |\n| Licenza | MIT |\n| Compute | 8 piattaforme Day 0 |\n| Prossimo | ChatGPT + LimaxAI |",
    sum_line="GLM-5.2 alza il tetto open del coding. Padroneggia prima il design dei compiti in **ChatGPT**.",
)

try:
    from glm52_locales_remaining import REMAINING_FULL
except ImportError:
    from scripts.glm52_locales_remaining import REMAINING_FULL  # type: ignore

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
