# Full section translations for OpenAI third-phase blog.
# Used by generate_openai_third_phase_blog.py for locales except zh-cn and en.


def _en():
    return {
        "intro": "It has been three and a half years since **ChatGPT** brought generative AI into the mainstream. On June 9, 2026, CEO Sam Altman and Chief Scientist Jakub Pachocki published a joint blog post saying OpenAI has entered its **third development phase**. The central question is how to make advanced AI **abundant, affordable, safe, practical, and easy to use** for individuals and organizations.",
        "keywords": "Keywords: chatgpt, GPT-5.6, gpt tutorial.",
        "published": "Published: June 9, 2026",
        "img_alt": "OpenAI third development phase accessible easy safe AI",
        "h_phases": "Three phases: from R&D to broad adoption",
        "phases_intro": "Altman and Pachocki recap OpenAI’s path and frame the work ahead in three stages:",
        "phases_table": "| Phase | Focus | Key actions |\n| --- | --- | --- |\n| Phase 1 | AGI research and development | Foundational science, training, capability breakthroughs |\n| Phase 2 | Global product rollout | Ship ChatGPT and related products; study real usage |\n| Phase 3 (now) | Accessible, easy, safe AI | Expand supply, cut cost, turn capability into everyday tools |",
        "phases_note": "They write that the economy is reshaping around AI. Top-tier model scores are only part of the story—the harder part is turning technology into **useful tools** that help people get things done.",
        "h_goals": "Three core goals for phase three",
        "goals_intro": "OpenAI lists three long-term directions:",
        "goals_table": "| Goal | What it means |\n| --- | --- |\n| Build automated AI researchers | Systems that can push science and engineering forward on their own |\n| Accelerate economic growth | Embed AI in production, services, and innovation with measurable impact |\n| Personal AGI for everyone | Intelligence assistants available to people, teams, and countries—not just a few labs |",
        "goals_note": "These goals reinforce one another: better research improves products, while adoption depends on safety and accessibility.",
        "h_safety": "Safety and governance: no rush to full automation",
        "safety": "OpenAI repeats its **safety floor** throughout the post:\n\n- Powerful systems must **align with human intent** and stay **under human control**.\n- The company does **not** pursue a fully automated future—one that would erode human agency and carry systemic risk.\n- AI should **help people pursue their goals**, not run outside human oversight.\n\nThey also call again for **international coordination**—including institutions that can slow frontier work when risks outpace safeguards and society needs time to catch up.",
        "h_ipo": "IPO filing on the same day",
        "ipo": "On the day the roadmap dropped, OpenAI said it had **confidentially filed for an initial public offering (IPO)**. It cautioned that a public listing is still a long way off, with no firm timeline shared.\n\nPhase three will demand massive compute, talent, and safety investment. An IPO process running in parallel signals OpenAI wants broader capital access while pursuing “AI for everyone, safely.”",
        "h_industry": "Industry context: Anthropic on slowing the frontier",
        "industry": "The post arrives as **Anthropic** researchers argue frontier AI may be moving too fast. Last week they wrote that the world should keep the option to **pause or temporarily halt** cutting-edge development so alignment work and social infrastructure can keep pace.\n\nThe framing differs—OpenAI stresses access plus safety; Anthropic stresses pacing—but both agree: **the next chapter is not only benchmark scores; it is governance that scales with capability.**",
        "h_guide": "GPT tutorial: master ChatGPT while phase three rolls out",
        "guide": "Phase three is still mostly roadmap for everyday users. The practical step today is getting more from **ChatGPT**. Before **GPT-5.6** is everywhere, practice on **GPT-5.4 / GPT-5.5**:\n\n1. **Bound the task**—inputs, output format, and “do not change” sections.\n2. **Outline long docs first**—headings plus one-line goals per section, then expand.\n3. **Treat AI as a collaborator**—split hard problems across turns; one sub-problem per turn.\n4. **Keep a fixed eval set**—same prompts across models or reasoning tiers; log quality and latency for comparisons when new releases land.\n\nUse the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they appear).",
        "h_sum": "Summary",
        "sum_table": "| Item | Takeaway |\n| --- | --- |\n| Phase | OpenAI enters phase three: access, ease, safety |\n| Goals | Automated AI researchers, economic acceleration, personal AGI |\n| Safety | Human control, no full-automation end state, global coordination |\n| Capital | Confidential IPO filing the same day |\n| Industry | Leading labs pair capability expansion with pacing debate |\n| Next step | Clarify tasks in ChatGPT; try GPT on LimaxAI |",
        "sum_line": "Phase three is about turning “models that work” into “tools everyone can afford and trust.” Until then, getting more from the **ChatGPT** you already have beats chasing every new name.",
    }


def _zh_tw():
    e = _en()
    return {
        **e,
        "intro": "距離 **ChatGPT** 把生成式 AI 帶進大眾視野，已經過去三年半。當地時間 6 月 9 日，OpenAI 執行長山姆·奧爾特曼與首席科學家雅各布·帕霍茨基聯合發布博文，宣布公司正式進入 **第三發展階段**——核心命題是：如何讓先進 AI **供給充足、成本親民、安全實用、上手簡單**，讓個人與組織都能真正用起來。",
        "keywords": "關鍵字：chatgpt、GPT-5.6、gpt教程。",
        "published": "發布日期：2026年6月9日",
        "img_alt": "OpenAI 宣布進入第三發展階段 讓 AI 普及易用且安全",
        "h_phases": "三個發展階段：從技術研發到普及落地",
        "phases_intro": "奧爾特曼和帕霍茨基在文中回顧了 OpenAI 走過的路徑，並把未來工作框在三個階段裡：",
        "phases_table": "| 階段 | 重點 | 關鍵動作 |\n| --- | --- | --- |\n| 第一階段 | 通用人工智慧（AGI）技術研發 | 基礎研究、模型訓練、能力突破 |\n| 第二階段 | 全球產品落地 | 推出 ChatGPT 等產品，研究真實使用場景 |\n| 第三階段（當前） | AI 普及、易用、安全可靠 | 擴大供給、降低成本、把能力變成日常工具 |",
        "phases_note": "他們寫道：「經濟格局正圍繞人工智慧重塑。頂尖模型能力只是一部分，更重要的是把技術變成能幫人做事的 **實用工具**。」",
        "h_goals": "第三階段的三大核心目標",
        "goals_intro": "OpenAI 在博文中列出了三項長期方向：",
        "goals_table": "| 目標 | 具體含義 |\n| --- | --- |\n| 打造自動化 AI 研究員 | 讓 AI 系統能自主推進科研與工程迭代 |\n| 推動經濟提速發展 | 把 AI 嵌入生產、服務與創新鏈條 |\n| 為每個人配備專屬 AGI | 個人、團隊乃至國家都能調用的智能助手 |",
        "goals_note": "這三項目標彼此關聯：更強的研究能力帶來更好的產品，產品落地又需要安全與可及性作為前提。",
        "h_safety": "安全與治理：不追求全面自動化",
        "safety": "OpenAI 在文中多次強調 **安全底線**：\n\n- 強大系統必須 **契合人類意願**，並 **始終處於人類管控之下**。\n- 公司 **不追求全面自動化的未來**——那樣的社會既缺少人的價值，也潛藏系統性風險。\n- AI 應當 **幫助人追逐理想**，而不是脫離人類掌控自行運轉。\n\n與此同時，OpenAI 再次呼籲 **各國協同合作**，必要時成立國際機構，在風險可控的前提下協調前沿模型研發節奏。",
        "h_ipo": "同日遞交 IPO 申請",
        "ipo": "規劃發布當天，OpenAI 還宣布已 **秘密提交首次公開募股（IPO）申請**。公司坦言，股票正式上市仍需等待較長時間，具體時間表尚未對外披露。\n\n第三階段需要大量算力、人才與安全投入；IPO 籌備與「讓 AI 普及且安全」的長期目標並行，也反映出 OpenAI 希望在更大範圍內調配資源。",
        "h_industry": "行業背景：Anthropic 呼籲給社會「踩剎車」",
        "industry": "OpenAI 這篇規劃讓人聯想到另一家頭部 AI 公司 **Anthropic**。上週，Anthropic 研究人員發文稱，前沿 AI 迭代速度可能過快，全球需要保留 **暫緩或臨時叫停前沿研發** 的選項，以便安全對齊與社會配套機制跟上技術步伐。\n\n兩家公司的表述角度不同——OpenAI 強調普及與安全並行，Anthropic 更突出節奏控制——但共同點是：**下一階段競爭不只看模型榜單，還要看治理框架是否跟得上。**",
        "h_guide": "GPT 教程：在第三階段落地前，先把 ChatGPT 用熟",
        "guide": "OpenAI 描繪的第三階段，對普通用戶來說還遠未完全到來；眼下最實在的一步，是把 **ChatGPT** 用到日常工作和學習裡。在 **GPT-5.6** 全面開放之前，建議先用 **GPT-5.4 / GPT-5.5** 練這幾件事：\n\n1. **任務寫清邊界**：說明輸入是什麼、輸出要什麼格式、哪些內容不能改。\n2. **長文件先給結構**：先列目錄和每節目標，再讓模型展開，減少跑偏。\n3. **把 AI 當協作夥伴**：複雜問題拆成多輪對話，每輪只解決一個子問題。\n4. **固定樣本做對比**：同一組提示在不同模型或推理檔位各跑一遍，記錄品質與耗時。\n\n想先在瀏覽器體驗 GPT，可點下方按鈕進入 LimaxAI（目前 **gpt-5.4**，上新後可在模型列表切換）。",
        "h_sum": "小結",
        "sum_table": "| 項目 | 要點 |\n| --- | --- |\n| 階段定位 | OpenAI 進入第三階段：普及、易用、安全 |\n| 核心目標 | 自動化 AI 研究員、經濟提速、人人專屬 AGI |\n| 安全立場 | 人類管控、不追求全面自動化、國際協同 |\n| 資本動作 | 同日秘密提交 IPO 申請 |\n| 行業信號 | 頭部實驗室同時談能力擴張與節奏治理 |\n| 你的下一步 | 用 ChatGPT 練清需求與提示，再在 LimaxAI 體驗 GPT |",
        "sum_line": "AI 的第三階段，本質上是把「能用的模型」變成「人人用得起的工具」。在那之前，把手上的 **ChatGPT** 用熟，往往比追逐每一個新名詞更實在。",
    }


def _patch(lang: str, **kwargs) -> dict:
    base = _en().copy()
    base.update(kwargs)
    return base


_LOCALE_OVERRIDES: dict[str, dict[str, str]] = {
    "ja": _patch(
        "ja",
        intro="**ChatGPT** が生成AIを一般に広めてから3年半。2026年6月9日、CEOサム・アルトマンと首席科学者ヤコブ・パホツキが共同ブログで、OpenAIが **第三開発段階** に入ったと宣言しました。焦点は「モデルはどこまで強くなるか」から、先進AIを **供給十分・低コスト・安全・実用的・使いやすく** 届けることへ移っています。",
        keywords="キーワード：chatgpt、GPT-5.6、gptチュートリアル。",
        published="公開日：2026年6月9日",
        img_alt="OpenAI 第三開発段階 AI普及 易用 安全",
        h_phases="三つの段階：研究開発から普及へ",
        phases_intro="アルトマンとパホツキはOpenAIの歩みを振り返り、今後を三段階で整理しています：",
        phases_table="| 段階 | 重点 | 主な取り組み |\n| --- | --- | --- |\n| 第1段階 | AGIの研究開発 | 基礎研究、学習、能力向上 |\n| 第2段階 | グローバル製品展開 | ChatGPT等の提供、利用実態の研究 |\n| 第3段階（現在） | 普及・易用・安全 | 供給拡大、コスト低減、日常ツール化 |",
        phases_note="経済はAIを中心に再編されつつある、と述べています。最高性能だけでなく、技術を **実用的なツール** に変えることが課題です。",
        h_goals="第三段階の三つの核心目標",
        goals_intro="OpenAIは長期方向を三つ挙げています：",
        goals_table="| 目標 | 意味 |\n| --- | --- |\n| 自動化AI研究者の構築 | 科学・工学を自律的に前進させるシステム |\n| 経済成長の加速 | 生産・サービス・イノベーションへの組み込み |\n| 誰もが専属AGIを持つ | 少数機関ではなく個人・組織・国が使える助手 |",
        goals_note="研究→製品→普及は相互に依存し、安全とアクセスが前提になります。",
        h_safety="安全とガバナンス：全面自動化は目指さない",
        safety="**安全の下限** を繰り返し強調：\n\n- 強力なシステムは **人間の意図に沿い**、**人間の管理下** にあること。\n- **全面自動化の未来** は追求しない——人間の主体性を損ない、系統リスクを招く。\n- AIは **人の目標を支援** し、監督外で動くべきではない。\n\n**国際協調** も再度呼びかけ——リスクが安全策を上回る場合、前沿開発を一時停止できる枠組みが必要、としています。",
        h_ipo="同日にIPO申請",
        ipo="ロードマップ公開日、OpenAIは **機密IPO申請** を提出したと発表。上場までにはまだ時間がかかるとし、具体的日程は非公開です。\n\n第三段階には計算資源・人材・安全投資が不可欠。IPO準備は「安全にAIを普及させる」長期目標と並行して進んでいます。",
        h_industry="業界背景：Anthropicの「ペース調整」論",
        industry="**Anthropic** の研究者は、前沿AIの進みが速すぎる可能性を指摘。先週の論文では、整合性研究と社会インフラが追いつくまで **前沿開発を一時停止する選択肢** を残すべきだと述べました。\n\nOpenAIは普及＋安全、Anthropicはペース重視——角度は違うものの、**次の章はベンチマークだけでなく、能力に見合うガバナンス** だという点では一致しています。",
        h_guide="GPTチュートリアル：第三段階の前にChatGPTを使いこなす",
        guide="第三段階はまだロードマップ段階。今できることは **ChatGPT** を日常に組み込むこと。**GPT-5.6** 前に **GPT-5.4/5.5** で：\n\n1. **タスクの境界を明示**（入力・出力形式・変更禁止箇所）\n2. **長文は目次＋各節の一行目標から**\n3. **協働相手として使う**——難問はターンごとに分割\n4. **固定evalセット**で品質・遅延を記録\n\n下のボタンからLimaxAI（**gpt-5.4**）へ。",
        h_sum="まとめ",
        sum_table="| 項目 | 要点 |\n| --- | --- |\n| 段階 | 第三段階：普及・易用・安全 |\n| 目標 | 自動AI研究者、経済加速、個人AGI |\n| 安全 | 人間管理、全面自動化なし、国際協調 |\n| 資本 | 同日IPO申請 |\n| 業界 | 能力拡張とペース論の並立 |\n| 次 | ChatGPT→LimaxAI |",
        sum_line="第三段階は「動くモデル」を「誰もが信頼して使えるツール」に変える段階。まず手元の **ChatGPT** を使いこなすのが現実的です。",
    ),
    "ko": _patch(
        "ko",
        intro="**ChatGPT** 가 생성형 AI를 대중에 알린 지 3년 반. 2026년 6월 9일, CEO 샘 알트먼과 수석 과학자 야쿠브 파호츠키가 공동 블로그에서 OpenAI가 **제3개발 단계** 에 진입했다고 발표했습니다. 핵심 질문은 고급 AI를 **공급 충분·저렴·안전·실용·쉬운 사용** 으로 만드는 것입니다.",
        keywords="키워드: chatgpt, GPT-5.6, gpt 튜토리얼",
        published="게시일: 2026년 6월 9일",
        img_alt="OpenAI 3단계 AI 보급 쉬운 사용 안전",
        h_phases="세 단계: R&D에서 보급까지",
        phases_intro="알트man과 파호츠키는 OpenAI의 여정을 세 단계로 정리합니다:",
        phases_table="| 단계 | 초점 | 주요 행동 |\n| --- | --- | --- |\n| 1단계 | AGI 연구개발 | 기초과학, 학습, 능력 돌파 |\n| 2단계 | 글로벌 제품 출시 | ChatGPT 등 배포, 실사용 연구 |\n| 3단계(현재) | 접근·쉬움·안전 | 공급 확대, 비용 절감, 일상 도구화 |",
        phases_note="경제가 AI 중심으로 재편되고 있다고 씁니다. 최고 성능만이 아니라 기술을 **실용 도구** 로 바꾸는 것이 과제입니다.",
        h_goals="3단계 핵심 목표 세 가지",
        goals_intro="OpenAI는 장기 방향을 세 가지로 제시합니다:",
        goals_table="| 목표 | 의미 |\n| --- | --- |\n| 자동화 AI 연구원 | 과학·공학을 스스로 밀어가는 시스템 |\n| 경제 성장 가속 | 생산·서비스·혁신에 AI 내재화 |\n| 모두를 위한 개인 AGI | 소수 연구소가 아닌 개인·팀·국가의 조수 |",
        goals_note="연구→제품→보급은 상호 의존하며, 안전과 접근성이 전제입니다.",
        h_safety="안전과 거버넌스: 완전 자동화는 추구하지 않음",
        safety="**안전 하한선** 을 반복 강조:\n\n- 강력한 시스템은 **인간 의도에 부합** 하고 **인간 통제 하** 에 있어야 합니다.\n- **완전 자동화 미래** 는 추구하지 않습니다.\n- AI는 **사람의 목표를 돕** 고, 감독 밖에서 돌아가면 안 됩니다.\n\n**국제 협력** 도 다시 촉구——위험이 안전장치를 앞지를 때 전沿 개발을 늦출 수 있는 체계가 필요합니다.",
        h_ipo="같은 날 IPO 신청",
        ipo="로드맵 공개일 OpenAI는 **기밀 IPO 신청** 을 제출했다고 밝혔습니다. 상장까지는 시간이 걸리며 구체 일정은 미공개입니다.\n\n3단계에는 막대한 연산·인재·안전 투자가 필요합니다.",
        h_industry="업계 배경: Anthropic의 속도 조절 논의",
        industry="**Anthropic** 연구자들은 전沿 AI가 너무 빠를 수 있다고 주장합니다. 지난주 **전沿 개발 일시 중단** 옵션을 남겨야 한다고 썼습니다.\n\nOpenAI는 접근+안전, Anthropic은 속도——각도는 다르지만 **다음 장은 벤치마크만이 아니라 거버넌스** 라는 점에서 일치합니다.",
        h_guide="GPT 튜토리얼: 3단계 전 ChatGPT 익히기",
        guide="3단계는 아직 로드맵입니다. 지금은 **ChatGPT** 를 일상에 쓰는 것이 현실적입니다. **GPT-5.6** 전 **GPT-5.4/5.5** 로:\n\n1. **작업 경계 명시**\n2. **긴 문서는 목차+절별 목표 먼저**\n3. **협업 파트너로 사용**——턴당 하위 문제 하나\n4. **고정 eval 세트**로 품질·지연 기록\n\n아래 LimaxAI(**gpt-5.4**) 버튼.",
        h_sum="요약",
        sum_table="| 항목 | 요점 |\n| --- | --- |\n| 단계 | 3단계: 접근·쉬움·안전 |\n| 목표 | 자동 AI 연구원, 경제 가속, 개인 AGI |\n| 안전 | 인간 통제, 완전 자동화 아님, 국제 협력 |\n| 자본 | 당일 IPO 신청 |\n| 업계 | 능력 확장+속도 논쟁 |\n| 다음 | ChatGPT→LimaxAI |",
        sum_line="3단계는 '작동하는 모델'을 '모두가 믿고 쓸 도구'로 바꾸는 단계입니다. 우선 **ChatGPT** 를 익히세요.",
    ),
}

_ES = _patch(
    "es",
    intro="Han pasado tres años y medio desde que **ChatGPT** llevó la IA generativa al gran público. El 9 de junio de 2026, Sam Altman y el científico jefe Jakub Pachocki anunciaron que OpenAI entra en su **tercera fase de desarrollo**: hacer la IA avanzada **abundante, asequible, segura, práctica y fácil de usar**.",
    keywords="Palabras clave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Publicado: 9 de junio de 2026",
    img_alt="OpenAI tercera fase IA accesible fácil segura",
    h_phases="Tres fases: de I+D a adopción masiva",
    phases_intro="Altman y Pachocki repasan el camino de OpenAI en tres etapas:",
    phases_table="| Fase | Enfoque | Acciones clave |\n| --- | --- | --- |\n| Fase 1 | I+D de AGI | Ciencia base, entrenamiento, avances |\n| Fase 2 | Lanzamiento global | ChatGPT y productos; estudio de uso real |\n| Fase 3 (ahora) | IA accesible, fácil y segura | Más oferta, menos coste, herramientas cotidianas |",
    phases_note="La economía se reconfigura en torno a la IA. No basta el rendimiento del modelo: hay que convertir la tecnología en **herramientas útiles**.",
    h_goals="Tres objetivos centrales de la fase tres",
    goals_intro="OpenAI enumera tres direcciones a largo plazo:",
    goals_table="| Objetivo | Significado |\n| --- | --- |\n| Investigadores de IA automatizados | Sistemas que avancen ciencia e ingeniería por sí solos |\n| Acelerar el crecimiento económico | Integrar IA en producción, servicios e innovación |\n| AGI personal para todos | Asistentes para personas, equipos y países, no solo unos pocos laboratorios |",
    goals_note="Investigación, producto y adopción se refuerzan mutuamente; la seguridad y el acceso son premisas.",
    h_safety="Seguridad y gobernanza: sin prisa hacia la automatización total",
    safety="OpenAI insiste en su **suelo de seguridad**:\n\n- Los sistemas potentes deben **alinearse con la intención humana** y permanecer **bajo control humano**.\n- **No** persigue un futuro totalmente automatizado.\n- La IA debe **ayudar a las personas**, no operar fuera de la supervisión.\n\nTambién pide **coordinación internacional** para frenar el trabajo de frontera cuando los riesgos superen las salvaguardas.",
    h_ipo="Solicitud de IPO el mismo día",
    ipo="El día del roadmap, OpenAI dijo haber **presentado confidencialmente una IPO**. Advirtió que la salida a bolsa tardará y no dio calendario.\n\nLa fase tres exige computación, talento e inversión en seguridad a gran escala.",
    h_industry="Contexto: Anthropic pide frenar la frontera",
    industry="Investigadores de **Anthropic** argumentan que la IA de frontera avanza demasiado rápido. La semana pasada pidieron mantener la opción de **pausar o detener temporalmente** el desarrollo de vanguardia.\n\nOpenAI enfatiza acceso y seguridad; Anthropic, el ritmo. Ambos coinciden: **el siguiente capítulo no son solo benchmarks, sino gobernanza a la altura de la capacidad.**",
    h_guide="Tutorial GPT: domina ChatGPT mientras llega la fase tres",
    guide="La fase tres sigue siendo hoja de ruta para la mayoría. Lo práctico hoy es sacar más de **ChatGPT**. Antes de **GPT-5.6**, practica con **GPT-5.4/5.5**:\n\n1. **Delimita la tarea**—entradas, formato, zonas intocables.\n2. **Esquema primero** en documentos largos.\n3. **Colaborador, no oráculo**—un subproblema por turno.\n4. **Eval fijo**—mismos prompts, registra calidad y latencia.\n\nBotón abajo a LimaxAI (**gpt-5.4**).",
    h_sum="Resumen",
    sum_table="| Ítem | Idea clave |\n| --- | --- |\n| Fase | Tercera fase: acceso, facilidad, seguridad |\n| Objetivos | Investigadores IA, aceleración económica, AGI personal |\n| Seguridad | Control humano, sin automatización total, coordinación global |\n| Capital | IPO confidencial el mismo día |\n| Industria | Capacidad y debate de ritmo |\n| Siguiente | ChatGPT + LimaxAI |",
    sum_line="La fase tres convierte «modelos que funcionan» en «herramientas asequibles y confiables». Mientras tanto, exprime el **ChatGPT** que ya tienes.",
)

_LOCALE_OVERRIDES["es"] = _ES

_LOCALE_OVERRIDES["fr"] = _patch(
    "fr",
    intro="Trois ans et demi après **ChatGPT**, Sam Altman et le directeur scientifique Jakub Pachocki annoncent la **troisième phase** d’OpenAI : rendre l’IA avancée **abondante, abordable, sûre, pratique et simple**.",
    keywords="Mots-clés : chatgpt, GPT-5.6, tutoriel gpt.",
    published="Publié le 9 juin 2026",
    img_alt="OpenAI troisième phase IA accessible simple sûre",
    h_phases="Trois phases : de la R&D à l’adoption large",
    phases_intro="Altman et Pachocki retracent le parcours en trois étapes :",
    phases_table="| Phase | Focus | Actions clés |\n| --- | --- | --- |\n| Phase 1 | R&D AGI | Science, entraînement, percées |\n| Phase 2 | Déploiement mondial | ChatGPT et produits ; usages réels |\n| Phase 3 (maintenant) | IA accessible, simple, sûre | Offre, coût, outils du quotidien |",
    phases_note="L’économie se recompose autour de l’IA. Il faut transformer la technologie en **outils utiles**, pas seulement des scores de modèles.",
    h_goals="Trois objectifs centraux de la phase 3",
    goals_intro="OpenAI liste trois directions long terme :",
    goals_table="| Objectif | Sens |\n| --- | --- |\n| Chercheurs IA automatisés | Systèmes qui font avancer science et ingénierie |\n| Accélérer l’économie | Intégrer l’IA dans production, services, innovation |\n| AGI personnelle pour tous | Assistants pour personnes, équipes, pays |",
    goals_note="Recherche, produit et adoption s’entretiennent ; sécurité et accessibilité sont des prérequis.",
    h_safety="Sécurité et gouvernance : pas de course à l’automatisation totale",
    safety="OpenAI rappelle son **plancher de sécurité** :\n\n- Alignement avec l’intention humaine et **contrôle humain**.\n- **Pas** de futur entièrement automatisé.\n- L’IA **aide les gens**, ne tourne pas hors supervision.\n\nAppel à une **coordination internationale** pour ralentir le travail de frontière si les risques dépassent les garde-fous.",
    h_ipo="Dépôt IPO le même jour",
    ipo="Le jour de la feuille de route, OpenAI a **déposé confidentiellement une IPO**. La cotation publique reste lointaine, sans calendrier précis.\n\nLa phase 3 exige compute, talents et investissement sécurité massifs.",
    h_industry="Contexte : Anthropic sur le rythme de la frontière",
    industry="Des chercheurs **Anthropic** estiment que l’IA de frontière va trop vite. Ils demandent l’option de **pause ou arrêt temporaire** du développement de pointe.\n\nOpenAI : accès + sécurité ; Anthropic : rythme. Accord commun : **gouvernance à la hauteur des capacités.**",
    h_guide="Tutoriel GPT : maîtriser ChatGPT avant la phase 3",
    guide="La phase 3 reste surtout une feuille de route. Aujourd’hui, tirez parti de **ChatGPT**. Avant **GPT-5.6**, entraînez-vous sur **GPT-5.4/5.5** :\n\n1. **Bornes de la tâche**\n2. **Plan avant longs documents**\n3. **Collaborateur**—un sous-problème par tour\n4. **Eval fixe**—qualité et latence\n\nBouton LimaxAI (**gpt-5.4**) ci-dessous.",
    h_sum="Synthèse",
    sum_table="| Élément | Point clé |\n| --- | --- |\n| Phase | Troisième phase : accès, simplicité, sécurité |\n| Objectifs | Chercheurs IA, économie, AGI personnelle |\n| Sécurité | Contrôle humain, pas d’automatisation totale |\n| Capital | IPO confidentielle le même jour |\n| Industrie | Capacité et débat de rythme |\n| Suite | ChatGPT + LimaxAI |",
    sum_line="La phase 3 transforme « modèles qui marchent » en « outils abordables et fiables ». En attendant, exploitez le **ChatGPT** actuel.",
)

_LOCALE_OVERRIDES["de"] = _patch(
    "de",
    intro="Dreieinhalb Jahre nach **ChatGPT** verkünden Sam Altman und Chief Scientist Jakub Pachocki die **dritte Entwicklungsphase** von OpenAI: fortgeschrittene KI **reichlich, bezahlbar, sicher, praktisch und einfach** nutzbar machen.",
    keywords="Schlagwörter: chatgpt, GPT-5.6, gpt tutorial.",
    published="Veröffentlicht: 9. Juni 2026",
    img_alt="OpenAI Phase 3 KI zugänglich einfach sicher",
    h_phases="Drei Phasen: von F&E bis breiter Adoption",
    phases_intro="Altman und Pachocki ordnen den Weg in drei Stufen:",
    phases_table="| Phase | Fokus | Schlüsselaktionen |\n| --- | --- | --- |\n| Phase 1 | AGI-Forschung | Grundlagen, Training, Durchbrüche |\n| Phase 2 | Globaler Rollout | ChatGPT & Produkte; echte Nutzung |\n| Phase 3 (jetzt) | Zugängliche, einfache, sichere KI | Angebot, Kosten, Alltagswerkzeuge |",
    phases_note="Die Wirtschaft formt sich um KI. Entscheidend ist, Technologie in **nützliche Werkzeuge** zu verwandeln.",
    h_goals="Drei Kernziele der Phase 3",
    goals_intro="OpenAI nennt drei Langfristziele:",
    goals_table="| Ziel | Bedeutung |\n| --- | --- |\n| Automatisierte KI-Forscher | Systeme, die Wissenschaft und Technik vorantreiben |\n| Wirtschaft beschleunigen | KI in Produktion, Dienstleistungen, Innovation |\n| Persönliche AGI für alle | Assistenten für Menschen, Teams, Länder |",
    goals_note="Forschung, Produkt und Adoption hängen zusammen; Sicherheit und Zugang sind Voraussetzungen.",
    h_safety="Sicherheit und Governance: kein Vollautomatisierungs-Ziel",
    safety="OpenAI betont den **Sicherheitsboden**:\n\n- **Ausrichtung auf menschliche Absicht** und **menschliche Kontrolle**.\n- **Kein** vollautomatisiertes Endbild.\n- KI **hilft Menschen**, läuft nicht außerhalb der Aufsicht.\n\nErneuter Appell an **internationale Koordination**, Frontier-Arbeit zu verlangsamen, wenn Risiken die Schutzmaßnahmen überholen.",
    h_ipo="IPO-Antrag am selben Tag",
    ipo="Am Tag der Roadmap meldete OpenAI eine **vertrauliche IPO-Einreichung**. Börsengang dauert noch; kein festes Datum.\n\nPhase 3 braucht massiv Compute, Talente und Sicherheitsinvestition.",
    h_industry="Branchenkontext: Anthropic zur Frontier-Geschwindigkeit",
    industry="**Anthropic**-Forscher warnen, Frontier-KI könnte zu schnell sein. Sie fordern die Option, Entwicklung **zu pausieren oder vorübergehend zu stoppen**.\n\nOpenAI: Zugang + Sicherheit; Anthropic: Tempo. Gemeinsam: **Governance muss mit Fähigkeit skalieren.**",
    h_guide="GPT-Tutorial: ChatGPT nutzen, während Phase 3 kommt",
    guide="Phase 3 ist noch Roadmap. Praktisch heute: mehr aus **ChatGPT**. Vor **GPT-5.6** mit **GPT-5.4/5.5** üben:\n\n1. **Aufgabengrenzen**\n2. **Gliederung vor Langdokumenten**\n3. **Als Partner**—ein Teilproblem pro Runde\n4. **Festes Eval-Set**\n\nLimaxAI-Button (**gpt-5.4**) unten.",
    h_sum="Kurzfassung",
    sum_table="| Punkt | Kernaussage |\n| --- | --- |\n| Phase | Dritte Phase: Zugang, Einfachheit, Sicherheit |\n| Ziele | KI-Forscher, Wirtschaft, persönliche AGI |\n| Sicherheit | Menschliche Kontrolle, keine Vollautomatisierung |\n| Kapital | Vertrauliche IPO am selben Tag |\n| Branche | Fähigkeit und Tempo-Debatte |\n| Nächster Schritt | LimaxAI |",
    sum_line="Phase 3 macht aus «funktionierenden Modellen» «bezahlbare, vertrauenswürdige Werkzeuge». Nutzen Sie zuerst **ChatGPT**.",
)

_LOCALE_OVERRIDES["pt"] = _patch(
    "pt",
    intro="Três anos e meio depois de **ChatGPT**, Sam Altman e o cientista-chefe Jakub Pachocki anunciam a **terceira fase** da OpenAI: tornar a IA avançada **abundante, acessível, segura, prática e fácil de usar**.",
    keywords="Palavras-chave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Publicado: 9 de junho de 2026",
    img_alt="OpenAI terceira fase IA acessível fácil segura",
    h_phases="Três fases: de P&D à adoção ampla",
    phases_intro="Altman e Pachocki recapitulam o percurso em três etapas:",
    phases_table="| Fase | Foco | Ações-chave |\n| --- | --- | --- |\n| Fase 1 | P&D de AGI | Ciência, treino, avanços |\n| Fase 2 | Lançamento global | ChatGPT e produtos; uso real |\n| Fase 3 (agora) | IA acessível, fácil e segura | Oferta, custo, ferramentas do dia a dia |",
    phases_note="A economia se reorganiza em torno da IA. O desafio é transformar tecnologia em **ferramentas úteis**.",
    h_goals="Três objetivos centrais da fase três",
    goals_intro="A OpenAI lista três direções de longo prazo:",
    goals_table="| Objetivo | Significado |\n| --- | --- |\n| Pesquisadores de IA automatizados | Sistemas que avancem ciência e engenharia |\n| Acelerar a economia | Integrar IA em produção, serviços e inovação |\n| AGI pessoal para todos | Assistentes para pessoas, equipes e países |",
    goals_note="Pesquisa, produto e adoção reforçam-se; segurança e acesso são premissas.",
    h_safety="Segurança e governança: sem corrida à automação total",
    safety="A OpenAI reforça o **piso de segurança**:\n\n- Alinhamento com a intenção humana e **controle humano**.\n- **Não** busca um futuro totalmente automatizado.\n- A IA **ajuda as pessoas**, não opera fora da supervisão.\n\nPedido de **coordenação internacional** para desacelerar trabalho de fronteira quando riscos superam salvaguardas.",
    h_ipo="Pedido de IPO no mesmo dia",
    ipo="No dia do roadmap, a OpenAI **protocolou confidencialmente um IPO**. A listagem pública ainda leva tempo; sem cronograma fixo.\n\nA fase três exige computação, talento e investimento em segurança em grande escala.",
    h_industry="Contexto: Anthropic sobre o ritmo da fronteira",
    industry="Pesquisadores da **Anthropic** dizem que a IA de fronteira pode estar rápida demais. Pedem opção de **pausar ou interromper temporariamente** o desenvolvimento de ponta.\n\nOpenAI: acesso + segurança; Anthropic: ritmo. Acordo: **governança à altura da capacidade.**",
    h_guide="Tutorial GPT: domine o ChatGPT enquanto a fase três chega",
    guide="A fase três ainda é roadmap. Hoje, extraia mais do **ChatGPT**. Antes do **GPT-5.6**, pratique com **GPT-5.4/5.5**:\n\n1. **Limites da tarefa**\n2. **Esboço antes de docs longos**\n3. **Colaborador**—um subproblema por turno\n4. **Eval fixo**\n\nBotão LimaxAI (**gpt-5.4**) abaixo.",
    h_sum="Resumo",
    sum_table="| Item | Ideia-chave |\n| --- | --- |\n| Fase | Terceira fase: acesso, facilidade, segurança |\n| Objetivos | Pesquisadores IA, economia, AGI pessoal |\n| Segurança | Controle humano, sem automação total |\n| Capital | IPO confidencial no mesmo dia |\n| Indústria | Capacidade e debate de ritmo |\n| Próximo | ChatGPT + LimaxAI |",
    sum_line="A fase três transforma «modelos que funcionam» em «ferramentas acessíveis e confiáveis». Enquanto isso, use o **ChatGPT** que já tem.",
)

_LOCALE_OVERRIDES["it"] = _patch(
    "it",
    intro="A tre anni e mezzo da **ChatGPT**, Sam Altman e il chief scientist Jakub Pachocki annunciano la **terza fase** di OpenAI: rendere l’IA avanzata **abbondante, conveniente, sicura, pratica e semplice**.",
    keywords="Parole chiave: chatgpt, GPT-5.6, tutorial gpt.",
    published="Pubblicato: 9 giugno 2026",
    img_alt="OpenAI terza fase IA accessibile facile sicura",
    h_phases="Tre fasi: da R&S all’adozione diffusa",
    phases_intro="Altman e Pachocki ripercorrono il percorso in tre tappe:",
    phases_table="| Fase | Focus | Azioni chiave |\n| --- | --- | --- |\n| Fase 1 | R&S AGI | Scienza, training, breakthrough |\n| Fase 2 | Rollout globale | ChatGPT e prodotti; uso reale |\n| Fase 3 (ora) | IA accessibile, facile, sicura | Offerta, costo, strumenti quotidiani |",
    phases_note="L’economia si riorganizza intorno all’IA. Serve trasformare la tecnologia in **strumenti utili**.",
    h_goals="Tre obiettivi centrali della fase tre",
    goals_intro="OpenAI elenca tre direzioni a lungo termine:",
    goals_table="| Obiettivo | Significato |\n| --- | --- |\n| Ricercatori IA automatizzati | Sistemi che fanno avanzare scienza e ingegneria |\n| Accelerare l’economia | Integrare l’IA in produzione, servizi, innovazione |\n| AGI personale per tutti | Assistenti per persone, team, paesi |",
    goals_note="Ricerca, prodotto e adozione si rafforzano a vicenda; sicurezza e accesso sono premesse.",
    h_safety="Sicurezza e governance: niente corsa all’automazione totale",
    safety="OpenAI ribadisce il **pavimento di sicurezza**:\n\n- Allineamento all’intento umano e **controllo umano**.\n- **Non** punta a un futuro totalmente automatizzato.\n- L’IA **aiuta le persone**, non opera fuori supervisione.\n\nAppello alla **coordinazione internazionale** per rallentare il lavoro di frontiera quando i rischi superano le salvaguardie.",
    h_ipo="Deposito IPO lo stesso giorno",
    ipo="Il giorno della roadmap, OpenAI ha **depositato confidentialmente un IPO**. La quotazione pubblica è ancora lontana; nessuna data fissa.\n\nLa fase tre richiede compute, talenti e investimenti in sicurezza massicci.",
    h_industry="Contesto: Anthropic sul ritmo della frontiera",
    industry="Ricercatori **Anthropic** sostengono che l’IA di frontiera procede troppo velocemente. Chiedono l’opzione di **pausa o stop temporaneo** dello sviluppo all’avanguardia.\n\nOpenAI: accesso + sicurezza; Anthropic: ritmo. Accordo: **governance all’altezza delle capacità.**",
    h_guide="Tutorial GPT: padroneggia ChatGPT mentre arriva la fase tre",
    guide="La fase tre è ancora roadmap. Oggi, sfrutta di più **ChatGPT**. Prima di **GPT-5.6**, esercitati su **GPT-5.4/5.5**:\n\n1. **Confini del compito**\n2. **Schema prima dei documenti lunghi**\n3. **Collaboratore**—un sottoproblema per turno\n4. **Eval fisso**\n\nPulsante LimaxAI (**gpt-5.4**) sotto.",
    h_sum="Sintesi",
    sum_table="| Elemento | Punto chiave |\n| --- | --- |\n| Fase | Terza fase: accesso, semplicità, sicurezza |\n| Obiettivi | Ricercatori IA, economia, AGI personale |\n| Sicurezza | Controllo umano, niente automazione totale |\n| Capitale | IPO confidenziale lo stesso giorno |\n| Industria | Capacità e dibattito sul ritmo |\n| Prossimo | ChatGPT + LimaxAI |",
    sum_line="La fase tre trasforma «modelli che funzionano» in «strumenti accessibili e affidabili». Nel frattempo, usa il **ChatGPT** che hai.",
)

try:
    from openai_third_phase_locales_remaining import REMAINING_FULL
except ImportError:
    from scripts.openai_third_phase_locales_remaining import REMAINING_FULL  # type: ignore

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
