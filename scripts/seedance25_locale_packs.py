# Complete native section packs for Seedance 2.5 blog (parity with zh-cn).
# Each pack overrides all body fields for one locale.


def _duration_table(en: bool, **h) -> str:
    if en:
        return (
            "| Reference type | Suggested count | Role |\n"
            "| --- | --- | --- |\n"
            "| Character identity | 3–8 images | Lock face, hair, wardrobe colors |\n"
            "| Product / logo | 2–5 images | Keep packaging ratio and marks clear |\n"
            "| Framing / storyboard | 5–15 images | Key camera angles and shot sizes |\n"
            "| Style / grade | 1–3 sets | Film look, contrast, forbidden elements |\n"
            "| Flexible reserve | remaining slots | Props and scene details as needed |"
        )
    return (
        f"| {h['t1']} | {h['c']} | {h['r']} |\n"
        f"| --- | --- | --- |\n"
        f"| {h['r1']} | 3–8 | {h['d1']} |\n"
        f"| {h['r2']} | 2–5 | {h['d2']} |\n"
        f"| {h['r3']} | 5–15 | {h['d3']} |\n"
        f"| {h['r4']} | 1–3 | {h['d4']} |\n"
        f"| {h['r5']} | {h['rest']} | {h['d5']} |"
    )


def _audio_table(en: bool, **h) -> str:
    if en:
        return (
            "| Capability | What it does |\n"
            "| --- | --- |\n"
            "| Phoneme lip sync | Dialogue and mouth shape aligned in one render pass |\n"
            "| Ambient SFX | Action-matched effects and background beds |\n"
            "| Native 4K | Direct 4K output, not upscale-only |\n"
            "| Multi-shot logic | Scene cuts orchestrated inside the model, not stitched in post |"
        )
    return (
        f"| {h['t1']} | {h['t2']} |\n"
        f"| --- | --- |\n"
        f"| {h['a1']} | {h['d1']} |\n"
        f"| {h['a2']} | {h['d2']} |\n"
        f"| {h['a3']} | {h['d3']} |\n"
        f"| {h['a4']} | {h['d4']} |"
    )


def _sum_table(en: bool, **h) -> str:
    if en:
        return (
            "| Item | Seedance 2.5 |\n"
            "| --- | --- |\n"
            "| Native length | 30 seconds, single pass |\n"
            "| References | Up to 50 multimodal assets |\n"
            "| Resolution | Native 4K |\n"
            "| Editing | Localized multi-shot controls |\n"
            "| Audio | Lip sync + ambient SFX in one pass |\n"
            "| Rollout | Enterprise pilots; wider access early July 2026 |\n"
            "| Next step | Draft shots in ChatGPT; try GPT on LimaxAI |"
        )
    rows = h["rows"]
    return (
        f"| {h['t1']} | Seedance 2.5 |\n"
        f"| --- | --- |\n" + "\n".join(f"| {a} | {b} |" for a, b in rows)
    )


# fmt: off
PACKS: dict[str, dict[str, str]] = {}
# fmt: on


def _register(lang: str, **fields: str) -> None:
    PACKS[lang] = fields


# --- English (full) ---
_dur_en = _duration_table(True)
_aud_en = _audio_table(True)
_sum_en = _sum_table(True)
_register(
    "en",
    intro="On June 23, 2026, ByteDance's Volcano Engine unveiled **Seedance 2.5** at its enterprise conference. Three numbers sum up the upgrade: **30-second native one-take clips**, **native 4K output**, and up to **50 multimodal reference assets** (characters, products, framing, brand colors, style layers) in a single generation.",
    keywords="Keywords: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    published="Published: June 23, 2026",
    img_alt="Seedance 2.5 launch 30s one-take native 4K 50 references",
    h_upgrade="Seedance 2.5 vs 2.0: what changed",
    upgrade_intro="Many AI video tools still cap a single generation at 5–15 seconds. Stretch the timeline and visuals drift—faces morph, lighting jumps, product shapes warp. Seedance 2.5 pushes the usable baseline forward:",
    compare_table="| Version | Native clip length | Reference assets | Max resolution |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 seconds | Up to 12 | 1080p |\n| Seedance 2.5 | **30 seconds** | **Up to 50** | **Native 4K** |",
    upgrade_note="Volcano Engine also upgraded the **Seedance 2.0 base** to native 4K, so existing users get sharper output while 2.5 focuses on longer multi-shot stories and denser reference input.",
    h_duration="30-second native clips + 50 references: keeping one-take stable",
    duration=(
        "**30 seconds in one pass** is the headline spec. For ads, product demos, and short drama beats, half a minute is often the minimum usable length—shorter clips force awkward cuts in post.\n\n"
        "To hold a 30-second timeline steady, 2.5 accepts up to **50 reference assets** in one run: character sheets, product shots, brand palettes, storyboard frames, even style layers from brand guidelines. More precise anchors mean less drift over time.\n\n"
        "Suggested slot allocation:\n\n" + _dur_en + "\n\n"
        "Write prompts on a **timeline**, e.g. \"0–5s establish scene, 5–20s main action, 20–30s product hero\"—more effective than stacking adjectives."
    ),
    h_multishot="Multi-shot editing and local control: fewer re-rolls",
    multishot=(
        "Anyone making AI video knows the pain: tweak one detail and you regenerate the whole clip. Seedance 2.5 adds **localized editing**, closer to \"fix this storyboard panel\":\n\n"
        "- **Persistent continuity** — swap wardrobe, props, or a character while keeping background light, physics, and composition.\n"
        "- **Director-grade camera** — tracking, pans, dolly moves, and speed curves as workflow parameters, not prompt lottery.\n\n"
        "For ads and e-commerce teams, A/B testing SKUs or copy no longer means rolling from zero every time."
    ),
    h_audio="Native AV sync, physics simulation, and 4K pipeline",
    audio=(
        "Longer timelines pushed Volcano Engine to rework **physics simulation** and the diffusion stack. Key AV changes in Seedance 2.5:\n\n" + _aud_en + "\n\n"
        "Enterprise pilots are live now; broader developer and creator access is expected in **early July 2026**."
    ),
    h_demo="Demo video",
    demo_caption="Sample Seedance 2.5 output—about 30 seconds of continuous multi-shot camera work:",
    h_gpt="GPT tutorial: write storyboards in ChatGPT, then generate in Seedance",
    gpt=(
        "Video models need structured input. **ChatGPT** (today **GPT-5.4 / GPT-5.5**, with **GPT-5.6** coming) fits Seedance 2.5 pre-production well:\n\n"
        "1. **Shot list first** — split 30 seconds into 6–8 beats with shot size, camera verbs, and timing.\n"
        "2. **Reference manifest** — map all 50 slots to character, product, palette, or framing roles.\n"
        "3. **Lock style vocabulary** — one block on lens, grade, and forbidden elements, reused every run.\n"
        "4. **Iterate in text** — polish script and boards in ChatGPT before spending GPU time on video.\n\n"
        "If you already use GPT for copy and task breakdown, carry the same **gpt tutorial** habits into video prep.\n\n"
        "Click the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they land)."
    ),
    h_sum="Summary",
    sum_table=_sum_en,
    sum_line="Seedance 2.5 nudges AI video from \"short clip toy\" toward **usable half-minute takes**. A disciplined **GPT** pre-production flow beats chasing every new model name.",
)

# --- zh-cn (full, canonical) ---
_register(
    "zh-cn",
    intro="2026 年 6 月 23 日，字节跳动火山引擎在企业大会上发布了新一代 AI 视频模型 **Seedance 2.5**。和上一代相比，三个数字最好记：**原生 30 秒一镜到底**、**原生 4K 输出**、单次生成最多喂入 **50 路多模态参考素材**（人物、产品、构图、品牌色、风格层等）。",
    keywords="关键词：chatgpt、GPT-5.6、gpt教程、seedance 2.5。",
    published="发布日期：2026年6月23日",
    img_alt="Seedance 2.5发布 30秒一镜到底 原生4K 50个参考素材",
    h_upgrade="Seedance 2.5 对比 2.0：升级点一览",
    upgrade_intro="行业里不少 AI 视频模型仍把单次生成卡在 5–15 秒。时间拉长后，画面容易「飘」——人脸变形、光线跳变、产品轮廓走样。Seedance 2.5 把可用基线往前推了一大步：",
    compare_table="| 版本 | 原生片段时长 | 参考素材上限 | 最高分辨率 |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 秒 | 最多 12 路 | 1080p |\n| Seedance 2.5 | **30 秒** | **最多 50 路** | **原生 4K** |",
    upgrade_note="火山引擎还同步把 **Seedance 2.0 底座** 升级到原生 4K，老用户能直接拿到更清晰的成片；2.5 则主攻更长的多镜头叙事和更高密度的参考输入。",
    h_duration="30 秒原生时长 + 50 路参考：一镜到底怎么稳住",
    duration=(
        "「**30 秒单次生成**」是这次最醒目的指标。对广告片、产品演示、短剧单场次来说，半分钟往往是能直接用的下限——再短就得在后期硬切，节奏会碎。\n\n"
        "为了撑住 30 秒时间轴，2.5 架构支持一次最多 **50 路参考素材**同时参与推理：角色设定图、产品白底图、品牌色板、分镜构图、甚至品牌规范转成的风格层都可以塞进去。参考越多、越精准，画面越不容易随时间漂移。\n\n"
        "实操上建议这样分配 50 个槽位：\n\n"
        "| 参考类型 | 建议数量 | 作用 |\n| --- | --- | --- |\n"
        "| 人物/角色身份 | 3–8 张 | 锁脸、锁发型与服装主色 |\n"
        "| 产品/Logo | 2–5 张 | 保持包装比例与标识清晰 |\n"
        "| 构图/分镜 | 5–15 张 | 标注关键机位与景别 |\n"
        "| 风格/调色 | 1–3 组 | 统一胶片感、对比度、禁忌元素 |\n"
        "| 留白机动 | 其余槽位 | 按需补道具、场景细节 |\n\n"
        "提示词最好按 **时间轴** 写，例如：「0–5 秒建立场景，5–20 秒主体动作，20–30 秒产品特写收尾。」比堆形容词更有效。"
    ),
    h_multishot="多镜头编辑与局部控制：少抽几次签",
    multishot=(
        "做 AI 视频的人都有同感：改一个小细节，往往得整段重生成。Seedance 2.5 加了 **局部编辑** 能力，更接近分镜表里「只改这一格」：\n\n"
        "- **持续一致性（Persistent Continuity）** — 换服装、换道具或替换角色，背景光线、物理运动和整体构图可以保持不变。\n"
        "- **导演级运镜（Director-Grade Camera）** — 跟拍、平移、推轨、升降和速度曲线可以作为正式参数写进工作流，而不是赌提示词能不能猜对。\n\n"
        "对广告和电商团队来说，这意味着 A/B 测试不同 SKU 或文案时，不必每次从零开始 roll。"
    ),
    h_audio="原生音画同步、物理模拟与 4K 管线",
    audio=(
        "拉长时间轴的同时，火山引擎也重做了 **物理模拟** 和底层扩散管线。Seedance 2.5 在音画一侧的主要变化：\n\n"
        "| 能力 | 说明 |\n| --- | --- |\n"
        "| 音素级对嘴 | 台词与口型在同一次渲染里对齐，减少后期配音贴脸 |\n"
        "| 环境音效 | 按画面动作自动匹配 SFX 和背景氛围 |\n"
        "| 原生 4K | 直接输出 4K，不靠纯后期放大糊弄清晰度 |\n"
        "| 多镜头逻辑 | 更长片段里的场景切换由模型内部编排，而非简单拼接 |\n\n"
        "目前企业客户已在试点接入；面向更广泛开发者与创作团队的开放，预计在 **2026 年 7 月初**。"
    ),
    h_demo="演示视频",
    demo_caption="下方为 Seedance 2.5 示例输出，展示约 30 秒连续镜头与多镜头运镜：",
    h_gpt="GPT 教程：先用 ChatGPT 写分镜，再进 Seedance",
    gpt=(
        "视频模型吃的是结构化输入。**ChatGPT**（当前常用 **GPT-5.4 / GPT-5.5**，**GPT-5.6** 也在路上）很适合做 Seedance 2.5 的前期：\n\n"
        "1. **先出镜头表** — 让 GPT 把 30 秒拆成 6–8 个节拍，每个节拍写清景别、运镜动词和时长。\n"
        "2. **列参考素材清单** — 对照 50 个槽位，标明哪些放角色、产品、色板、构图。\n"
        "3. **锁风格词** — 写一段镜头焦段、调色倾向、禁止出现的元素，每次生成都贴上。\n"
        "4. **在文字里迭代** — 脚本和分镜改顺了再开 GPU 做视频，比盲目重抽省钱。\n\n"
        "如果你平时也用 GPT 写文案、拆需求，可以把同一套习惯迁移过来：先 **gpt教程** 式地把任务拆清，再交给 Seedance 执行。\n\n"
        "想先在浏览器里练分镜提示词，可以点下方按钮进入 LimaxAI 聊天页（当前入口 **gpt-5.4**，后续可在模型列表切换新版本）。"
    ),
    h_sum="小结",
    sum_table=(
        "| 项目 | Seedance 2.5 |\n| --- | --- |\n"
        "| 原生时长 | 30 秒，单次生成 |\n| 参考素材 | 最多 50 路多模态 |\n| 分辨率 | 原生 4K |\n"
        "| 编辑 | 多镜头局部控制 |\n| 音画 | 对嘴 + 环境音同次渲染 |\n"
        "| 开放节奏 | 企业试点中；7 月初更广开放 |\n| 搭配工具 | ChatGPT 写分镜；LimaxAI 体验 GPT |"
    ),
    sum_line="Seedance 2.5 把 AI 视频从「短片段玩具」往 **能用的半分钟成片** 推了一步。配上规范的 **GPT** 前期流程，少重抽几次，往往比追新模型名更划算。",
)

# --- zh-tw (full) ---
_dur_tw = _duration_table(
    False,
    t1="參考類型", c="建議數量", r="作用",
    r1="人物/角色身份", d1="鎖臉、鎖髮型與服裝主色",
    r2="產品/Logo", d2="保持包裝比例與標識清晰",
    r3="構圖/分鏡", d3="標註關鍵機位與景別",
    r4="風格/調色", d4="統一膠片感、對比度、禁忌元素",
    r5="留白機動", rest="其餘槽位", d5="按需補道具、場景細節",
)
_aud_tw = _audio_table(
    False,
    t1="能力", t2="說明",
    a1="音素級對嘴", d1="臺詞與口型在同一次渲染裡對齊，減少後期配音貼臉",
    a2="環境音效", d2="依畫面動作自動匹配 SFX 和背景氛圍",
    a3="原生 4K", d3="直接輸出 4K，不靠純後期放大糊弄清晰度",
    a4="多鏡頭邏輯", d4="更長片段裡的場景切換由模型內部編排，而非簡單拼接",
)
_sum_tw = _sum_table(
    False, t1="項目",
    rows=[
        ("原生時長", "30 秒，單次生成"),
        ("參考素材", "最多 50 路多模態"),
        ("解析度", "原生 4K"),
        ("編輯", "多鏡頭局部控制"),
        ("音畫", "對嘴 + 環境音同次渲染"),
        ("開放節奏", "企業試用中；7 月初更廣開放"),
        ("搭配工具", "ChatGPT 寫分鏡；LimaxAI 體驗 GPT"),
    ],
)
_register(
    "zh-tw",
    intro="2026 年 6 月 23 日，字節跳動火山引擎在企業大會上發布了新一代 AI 影片模型 **Seedance 2.5**。和上一代相比，三個數字最好記：**原生 30 秒一鏡到底**、**原生 4K 輸出**、單次生成最多餵入 **50 路多模態參考素材**（人物、產品、構圖、品牌色、風格層等）。",
    keywords="關鍵字：chatgpt、GPT-5.6、gpt教程、seedance 2.5。",
    published="發布日期：2026年6月23日",
    img_alt="Seedance 2.5 發布 30秒一鏡到底 原生4K 50個參考素材",
    h_upgrade="Seedance 2.5 對比 2.0：升級點一覽",
    upgrade_intro="業界裡不少 AI 影片模型仍把單次生成卡在 5–15 秒。時間拉長後，畫面容易「飄」——人臉變形、光線跳變、產品輪廓走樣。Seedance 2.5 把可用基線往前推了一大步：",
    compare_table="| 版本 | 原生片段時長 | 參考素材上限 | 最高解析度 |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 秒 | 最多 12 路 | 1080p |\n| Seedance 2.5 | **30 秒** | **最多 50 路** | **原生 4K** |",
    upgrade_note="火山引擎還同步把 **Seedance 2.0 底座** 升級到原生 4K，老用戶能直接拿到更清晰的成片；2.5 則主攻更長的多鏡頭敘事和更高密度的參考輸入。",
    h_duration="30 秒原生時長 + 50 路參考：一鏡到底怎麼穩住",
    duration=(
        "「**30 秒單次生成**」是這次最醒目的指標。對廣告片、產品演示、短劇單場次來說，半分鐘往往是能直接用的下限——再短就得在後期硬切，節奏會碎。\n\n"
        "為了撐住 30 秒時間軸，2.5 架構支援一次最多 **50 路參考素材**同時參與推理：角色設定圖、產品白底圖、品牌色板、分鏡構圖、甚至品牌規範轉成的風格層都可以塞進去。參考越多、越精準，畫面越不容易隨時間漂移。\n\n"
        "實操上建議這樣分配 50 個槽位：\n\n" + _dur_tw + "\n\n"
        "提示詞最好按 **時間軸** 寫，例如：「0–5 秒建立場景，5–20 秒主體動作，20–30 秒產品特寫收尾。」比堆形容詞更有效。"
    ),
    h_multishot="多鏡頭編輯與局部控制：少抽幾次籤",
    multishot=(
        "做 AI 影片的人都有同感：改一個小細節，往往得整段重生成。Seedance 2.5 加了 **局部編輯** 能力，更接近分鏡表裡「只改這一格」：\n\n"
        "- **持續一致性（Persistent Continuity）** — 換服裝、換道具或替換角色，背景光線、物理運動和整體構圖可以保持不變。\n"
        "- **導演級運鏡（Director-Grade Camera）** — 跟拍、平移、推軌、升降和速度曲線可以作為正式參數寫進工作流，而不是賭提示詞能不能猜對。\n\n"
        "對廣告和電商團隊來說，這意味著 A/B 測試不同 SKU 或文案時，不必每次從零開始 roll。"
    ),
    h_audio="原生音畫同步、物理模擬與 4K 管線",
    audio=(
        "拉長時間軸的同時，火山引擎也重做了 **物理模擬** 和底層擴散管線。Seedance 2.5 在音畫一側的主要變化：\n\n" + _aud_tw + "\n\n"
        "目前企業客戶已在試點接入；面向更廣泛開發者與創作團隊的開放，預計在 **2026 年 7 月初**。"
    ),
    h_demo="演示影片",
    demo_caption="下方為 Seedance 2.5 範例輸出，展示約 30 秒連續鏡頭與多鏡頭運鏡：",
    h_gpt="GPT 教程：先用 ChatGPT 寫分鏡，再進 Seedance",
    gpt=(
        "影片模型吃的是結構化輸入。**ChatGPT**（目前常用 **GPT-5.4 / GPT-5.5**，**GPT-5.6** 也在路上）很適合做 Seedance 2.5 的前期：\n\n"
        "1. **先出鏡頭表** — 讓 GPT 把 30 秒拆成 6–8 個節拍，每個節拍寫清景別、運鏡動詞和時長。\n"
        "2. **列參考素材清單** — 對照 50 個槽位，標明哪些放角色、產品、色板、構圖。\n"
        "3. **鎖風格詞** — 寫一段鏡頭焦段、調色傾向、禁止出現的元素，每次生成都貼上。\n"
        "4. **在文字裡迭代** — 腳本和分鏡改順了再開 GPU 做影片，比盲目重抽省錢。\n\n"
        "如果你平時也用 GPT 寫文案、拆需求，可以把同一套習慣遷移過來：先 **gpt教程** 式地把任務拆清，再交給 Seedance 執行。\n\n"
        "想先在瀏覽器裡練分鏡提示詞，可以點下方按鈕進入 LimaxAI 聊天頁（目前入口 **gpt-5.4**，後續可在模型列表切換新版本）。"
    ),
    h_sum="小結",
    sum_table=_sum_tw,
    sum_line="Seedance 2.5 把 AI 影片從「短片段玩具」往 **能用的半分鐘成片** 推了一步。配上規範的 **GPT** 前期流程，少重抽幾次，往往比追新模型名更划算。",
)


def _build_ja() -> dict:
    d = _duration_table(
        False, t1="参照タイプ", c="推奨数", r="役割",
        r1="人物/キャラ身份", d1="顔・髪型・衣装の主色を固定",
        r2="製品/Logo", d2="パッケージ比率とマークを維持",
        r3="構図/絵コンテ", d3="主要カメラ位置とショットサイズ",
        r4="スタイル/グレード", d4="フィルム感・コントラスト・禁止要素",
        r5="予備スロット", rest="残り", d5="小道具・シーン詳細を補完",
    )
    a = _audio_table(
        False, t1="機能", t2="説明",
        a1="音素レベルリップシンク", d1="台詞と口形を同一レンダーで同期",
        a2="環境音効", d2="画面動作に合わせたSFXと雰囲気",
        a3="ネイティブ4K", d3="アップスケールのみに頼らない4K出力",
        a4="マルチショット論理", d4="長尺カット内の場面切替をモデル内で編成",
    )
    s = _sum_table(
        False, t1="項目",
        rows=[
            ("ネイティブ尺", "30秒・単一生成"),
            ("参照素材", "最大50件マルチモーダル"),
            ("解像度", "ネイティブ4K"),
            ("編集", "マルチショット局部制御"),
            ("音画", "リップシンク+環境音同次"),
            ("公開", "企業試用中；7月初旬拡大"),
            ("次の一手", "ChatGPTで絵コンテ；LimaxAIでGPT"),
        ],
    )
    return {
        "intro": "2026年6月23日、ByteDanceの火山引擎（Volcano Engine）が企業向けカンファレンスでAI動画モデル **Seedance 2.5** を発表しました。覚えるべき3つの数字は **ネイティブ30秒ワンテイク**、**ネイティブ4K**、1回の生成で最大 **50件のマルチモーダル参照素材**（人物・製品・構図・ブランド色・スタイル層）です。",
        "keywords": "キーワード：chatgpt、GPT-5.6、gptチュートリアル、seedance 2.5。",
        "published": "公開日：2026年6月23日",
        "img_alt": "Seedance 2.5 30秒ワンテイク ネイティブ4K 50参照",
        "h_upgrade": "Seedance 2.5 対 2.0：アップグレード一覧",
        "upgrade_intro": "多くのAI動画ツールは単一生成を5〜15秒で頭打ちにします。時間を伸ばすと顔の崩れや光の跳ね、製品形状の歪みが起きやすい。Seedance 2.5は実用基準を大きく引き上げます：",
        "compare_table": "| バージョン | ネイティブ尺 | 参照上限 | 最大解像度 |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15秒 | 最大12件 | 1080p |\n| Seedance 2.5 | **30秒** | **最大50件** | **ネイティブ4K** |",
        "upgrade_note": "火山引擎は **Seedance 2.0** ベースもネイティブ4Kにアップグレード。既存ユーザーはより鮮明な出力を得られ、2.5は長尺マルチショットと高密度参照入力を担当します。",
        "h_duration": "30秒ネイティブ + 50参照：ワンテイクを安定させる",
        "duration": (
            "「**30秒単一生成**」が今回の看板スペックです。広告・商品デモ・短編ドラマの1場面では、30秒が実用下限になることが多く、それより短いと後工程で無理なカットが増えます。\n\n"
            "30秒のタイムラインを支えるため、2.5は最大 **50件の参照素材**を同時投入できます：キャラ設定、商品カット、ブランドパレット、絵コンテ構図、ガイドライン由来のスタイル層など。アンカーが多く正確ほど、時間経過によるドリフトが減ります。\n\n"
            "50スロットの配分例：\n\n" + d + "\n\n"
            "プロンプトは **タイムライン** で書くのが有効です。例：「0–5秒で場面確立、5–20秒で主体アクション、20–30秒で商品ヒーロー」。"
        ),
        "h_multishot": "マルチショット編集と局部制御：再生成を減らす",
        "multishot": (
            "AI動画制作者なら誰もが経験します：細部を直すたびに全体を再生成。Seedance 2.5は **局部編集** を追加し、絵コンテの「このコマだけ直す」に近づきます：\n\n"
            "- **持続的一貫性** — 衣装・小道具・キャラを差し替えても背景光・物理・構図を維持\n"
            "- **監督級カメラ** — トラッキング、パン、ドリー、速度曲線をワークフロー引数として指定\n\n"
            "広告・ECチームはSKUやコピーのA/Bテストで、毎回ゼロからロールする必要が減ります。"
        ),
        "h_audio": "ネイティブAV同期・物理シミュレーション・4Kパイプライン",
        "audio": "長尺化に伴い火山引擎は **物理シミュレーション** と拡散スタックを刷新。Seedance 2.5の主な音画変更：\n\n" + a + "\n\n企業パイロット稼働中。**2026年7月初旬**に開発者・クリエイター向け拡大が見込まれます。",
        "h_demo": "デモ動画",
        "demo_caption": "Seedance 2.5のサンプル出力—約30秒の連続マルチショット：",
        "h_gpt": "GPTチュートリアル：ChatGPTで絵コンテを書いてからSeedanceへ",
        "gpt": (
            "動画モデルは構造化入力が前提です。**ChatGPT**（現行 **GPT-5.4/5.5**、**GPT-5.6** も間近）がSeedance 2.5のプリプロダクションに向きます：\n\n"
            "1. **ショットリスト優先** — 30秒を6〜8ビートに分割し、景別・カメラ動詞・時間を明記\n"
            "2. **参照マニフェスト** — 50スロットをキャラ・商品・パレット・構図に割当\n"
            "3. **スタイル語彙を固定** — レンズ・グレード・禁止要素を毎回貼る\n"
            "4. **テキストで反復** — GPUを使う前に脚本と絵コンテをChatGPTで磨く\n\n"
            "普段GPTで文案や要件分解をしているなら、同じ **gptチュートリアル** 習慣を動画準備に移せます。\n\n"
            "下のボタンからLimaxAIチャット（**gpt-5.4**）を開き、絵コンテ用プロンプトを練習してください。"
        ),
        "h_sum": "まとめ",
        "sum_table": s,
        "sum_line": "Seedance 2.5はAI動画を「短尺おもちゃ」から **使える30秒の完成度** へ押し上げます。規律ある **GPT** 前工程が、新モデル名を追いかけるより実用的です。",
    }


PACKS["ja"] = _build_ja()

# For remaining locales: build from template using locale-specific strings
# Each uses same structure as ja with native translations


def _make_pack(
    lang: str,
    intro: str,
    keywords: str,
    published: str,
    img_alt: str,
    h_upgrade: str,
    upgrade_intro: str,
    compare_table: str,
    upgrade_note: str,
    h_duration: str,
    duration_p1: str,
    duration_p2: str,
    duration_table_hdr: tuple,
    duration_rows: list,
    duration_tail: str,
    h_multishot: str,
    multishot_intro: str,
    multishot_b1: str,
    multishot_b2: str,
    multishot_close: str,
    h_audio: str,
    audio_intro: str,
    audio_rows: list,
    audio_close: str,
    h_demo: str,
    demo_caption: str,
    h_gpt: str,
    gpt_steps: list,
    gpt_extra: str,
    gpt_close: str,
    h_sum: str,
    sum_rows: list,
    sum_line: str,
) -> dict:
    t1, c, r = duration_table_hdr
    dur_table = (
        f"| {t1} | {c} | {r} |\n| --- | --- | --- |\n"
        + "\n".join(f"| {a} | {b} | {d}|" for a, b, d in duration_rows)
    )
    aud_table = (
        f"| {audio_rows[0][0]} | {audio_rows[0][1]} |\n| --- | --- |\n"
        + "\n".join(f"| {a} | {d}|" for a, d, _ in audio_rows[1:])
    )
    sum_table = (
        f"| {sum_rows[0][0]} | Seedance 2.5 |\n| --- | --- |\n"
        + "\n".join(f"| {a} | {b} |" for a, b in sum_rows[1:])
    )
    gpt_body = "\n".join(f"{i}. **{t}** — {d}" for i, (t, d) in enumerate(gpt_steps, 1))
    return {
        "intro": intro,
        "keywords": keywords,
        "published": published,
        "img_alt": img_alt,
        "h_upgrade": h_upgrade,
        "upgrade_intro": upgrade_intro,
        "compare_table": compare_table,
        "upgrade_note": upgrade_note,
        "h_duration": h_duration,
        "duration": f"{duration_p1}\n\n{duration_p2}\n\n{dur_table}\n\n{duration_tail}",
        "h_multishot": h_multishot,
        "multishot": f"{multishot_intro}\n\n- {multishot_b1}\n- {multishot_b2}\n\n{multishot_close}",
        "h_audio": h_audio,
        "audio": f"{audio_intro}\n\n{aud_table}\n\n{audio_close}",
        "h_demo": h_demo,
        "demo_caption": demo_caption,
        "h_gpt": h_gpt,
        "gpt": f"{gpt_body}\n\n{gpt_extra}\n\n{gpt_close}",
        "h_sum": h_sum,
        "sum_table": sum_table,
        "sum_line": sum_line,
    }


# Shared compare table patterns per language family - register remaining locales
_COMPARE = {
    "ko": "| 버전 | 네이티브 길이 | 참조 상한 | 최대 해상도 |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15초 | 최대 12개 | 1080p |\n| Seedance 2.5 | **30초** | **최대 50개** | **네이티브 4K** |",
    "de": "| Version | Native Länge | Referenzen | Auflösung |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Bis 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Bis 50** | **Nativ 4K** |",
    "es": "| Versión | Duración nativa | Referencias | Resolución |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Hasta 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Hasta 50** | **4K nativo** |",
    "fr": "| Version | Durée native | Références | Résolution |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Jusqu'à 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Jusqu'à 50** | **4K natif** |",
    "pt": "| Versão | Duração nativa | Referências | Resolução |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Até 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Até 50** | **4K nativo** |",
    "it": "| Versione | Durata nativa | Riferimenti | Risoluzione |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Fino a 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Fino a 50** | **4K nativo** |",
    "ru": "| Версия | Нативная длина | Референсы | Разрешение |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 с | До 12 | 1080p |\n| Seedance 2.5 | **30 с** | **До 50** | **Нативное 4K** |",
    "uk": "| Версія | Нативна довжина | Референси | Роздільність |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 с | До 12 | 1080p |\n| Seedance 2.5 | **30 с** | **До 50** | **Нативне 4K** |",
    "pl": "| Wersja | Natywna długość | Referencje | Rozdzielczość |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Do 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Do 50** | **Natywne 4K** |",
    "nl": "| Versie | Native lengte | Referenties | Resolutie |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Tot 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Tot 50** | **Native 4K** |",
    "sv": "| Version | Native längd | Referenser | Upplösning |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Upp till 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Upp till 50** | **Native 4K** |",
    "ro": "| Versiune | Durată nativă | Referințe | Rezoluție |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 s | Până la 12 | 1080p |\n| Seedance 2.5 | **30 s** | **Până la 50** | **4K nativ** |",
    "ar": "| الإصدار | المدة الأصلية | المراجع | الدقة |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 ث | حتى 12 | 1080p |\n| Seedance 2.5 | **30 ث** | **حتى 50** | **4K أصلي** |",
    "id": "| Versi | Durasi native | Referensi | Resolusi |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 dtk | Hingga 12 | 1080p |\n| Seedance 2.5 | **30 dtk** | **Hingga 50** | **4K native** |",
    "ms": "| Versi | Durasi native | Rujukan | Resolusi |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 saat | Sehingga 12 | 1080p |\n| Seedance 2.5 | **30 saat** | **Sehingga 50** | **4K native** |",
    "vi": "| Phiên bản | Độ dài native | Tham chiếu | Độ phân giải |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 giây | Tối đa 12 | 1080p |\n| Seedance 2.5 | **30 giây** | **Tối đa 50** | **4K native** |",
    "th": "| เวอร์ชัน | ความยาว native | อ้างอิง | ความละเอียด |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 วิ | สูงสุด 12 | 1080p |\n| Seedance 2.5 | **30 วิ** | **สูงสุด 50** | **4K native** |",
    "tr": "| Sürüm | Native süre | Referans | Çözünürlük |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 sn | En fazla 12 | 1080p |\n| Seedance 2.5 | **30 sn** | **En fazla 50** | **Native 4K** |",
    "hi": "| संस्करण | नेटिव लंबाई | संदर्भ | रिज़ॉल्यूशन |\n| --- | --- | --- | --- |\n| Seedance 2.0 | 15 सेक | अधिकतम 12 | 1080p |\n| Seedance 2.5 | **30 सेक** | **अधिकतम 50** | **नेटिव 4K** |",
    "fa": "| نسخه | طول بومی | مراجع | وضوح |\n| --- | --- | --- | --- |\n| Seedance 2.0 | ۱۵ ث | تا ۱۲ | 1080p |\n| Seedance 2.5 | **۳۰ ث** | **تا ۵۰** | **4K بومی** |",
}

# Remaining locales via _make_pack (native translations)
PACK_DATA: dict[str, dict] = {}

# --- Korean (expanded to en/zh-cn parity) ---
PACK_DATA["ko"] = {
    "intro": (
        "2026년 6월 23일, ByteDance 화산엔진(Volcano Engine)이 기업 컨퍼런스에서 AI 영상 모델 "
        "**Seedance 2.5**를 공개했습니다. 이번 업그레이드를 기억하기 쉬운 숫자 세 가지: "
        "**네이티브 30초 원테이크**, **네이티브 4K 출력**, 단일 생성에 최대 **50개 멀티모달 참조 자료**"
        "(캐릭터, 제품, 구도, 브랜드 색, 스타일 레이어 등)."
    ),
    "keywords": "키워드: chatgpt, GPT-5.6, gpt 튜토리얼, seedance 2.5.",
    "published": "게시일: 2026년 6월 23일",
    "img_alt": "Seedance 2.5 공개 30초 원테이크 네이티브 4K 50개 참조",
    "h_upgrade": "Seedance 2.5 vs 2.0: 무엇이 바뀌었나",
    "upgrade_intro": (
        "업계의 많은 AI 영상 도구는 단일 생성을 5–15초에 머뭅니다. 시간을 늘리면 얼굴이 변형되고 "
        "조명이 튀며 제품 형태가 흔들리는 등 시각적 드리프트가 생깁니다. Seedance 2.5는 실사용 기준선을 "
        "앞당깁니다:"
    ),
    "upgrade_note": (
        "화산엔진은 **Seedance 2.0 베이스**도 네이티브 4K로 업그레이드해 기존 사용자에게 더 선명한 "
        "출력을 제공하고, 2.5는 더 긴 멀티샷 스토리와 고밀도 참조 입력에 집중합니다."
    ),
    "h_duration": "30초 네이티브 + 50개 참조: 원테이크를 안정적으로 유지",
    "duration_p1": (
        "**30초 단일 패스**가 이번 핵심 스펙입니다. 광고, 제품 데모, 단편 드라마 한 장면에서 "
        "30초는 종종 실사용 가능한 최소 길이입니다—더 짧으면 후반 작업에서 어색한 컷이 늘어납니다."
    ),
    "duration_p2": (
        "30초 타임라인을 지탱하기 위해 2.5는 한 번에 최대 **50개 참조 자료**를 받습니다: "
        "캐릭터 시트, 제품 컷, 브랜드 팔레트, 스토리보드 프레임, 브랜드 가이드라인에서 추출한 "
        "스타일 레이어까지. 앵커가 많고 정확할수록 시간 경과에 따른 드리프트가 줄어듭니다.\n\n"
        "50개 슬롯 배분 예시:"
    ),
    "duration_table_hdr": ("참조 유형", "권장 수", "역할"),
    "duration_rows": [
        ("캐릭터/신원", "3–8", "얼굴·헤어·의상 주색 고정"),
        ("제품/Logo", "2–5", "패키징 비율과 마크 선명도 유지"),
        ("구도/스토리보드", "5–15", "핵심 카메라 각도와 샷 사이즈"),
        ("스타일/그레이드", "1–3", "필름 룩·대비·금지 요소 통일"),
        ("여유 슬롯", "나머지", "소품·장면 디테일 보충"),
    ],
    "duration_tail": (
        "프롬프트는 **타임라인**으로 작성하세요. 예: 「0–5초 장면 설정, 5–20초 주요 액션, "
        "20–30초 제품 히어로」—형용사를 나열하는 것보다 효과적입니다."
    ),
    "h_multishot": "멀티샷 편집과 국소 제어: 재생성 횟수 줄이기",
    "multishot_intro": (
        "AI 영상을 만드는 사람이라면 공감할 겁니다: 작은 디테일을 고치면 전체 클립을 다시 생성해야 "
        "합니다. Seedance 2.5는 **국소 편집**을 추가해 스토리보드에서 「이 컷만 수정」에 가깝게 "
        "만듭니다:"
    ),
    "multishot_b1": (
        "**지속적 일관성(Persistent Continuity)** — 의상·소품·캐릭터를 바꿔도 배경광, 물리, "
        "전체 구도는 유지"
    ),
    "multishot_b2": (
        "**감독급 카메라(Director-Grade Camera)** — 트래킹·팬·돌리·속도 곡선을 프롬프트 "
        "추측이 아닌 워크플로 파라미터로 지정"
    ),
    "multishot_close": (
        "광고·이커머스 팀은 SKU나 카피 A/B 테스트 시 매번 처음부터 롤할 필요 없이 "
        "변경을 국소적으로 적용할 수 있습니다."
    ),
    "h_audio": "네이티브 AV 동기화, 물리 시뮬레이션, 4K 파이프라인",
    "audio_intro": (
        "긴 타임라인에 맞춰 화산엔진은 **물리 시뮬레이션**과 확산 스택을 재설계했습니다. "
        "Seedance 2.5의 주요 AV 변화:"
    ),
    "audio_rows": [
        ("기능", "설명"),
        ("음소급 립싱크", "대사와 입모양을 한 번의 렌더에서 정렬", ""),
        ("환경 음향", "화면 동작에 맞는 SFX와 배경 분위기", ""),
        ("네이티브 4K", "업스케일만이 아닌 직접 4K 출력", ""),
        ("멀티샷 로직", "장면 전환을 모델 내부에서 편성, 후반 단순 이어붙이기 아님", ""),
    ],
    "audio_close": (
        "기업 파일럿이 진행 중이며, 개발자·크리에이터 대상 확대는 **2026년 7월 초** 예정입니다."
    ),
    "h_demo": "데모 영상",
    "demo_caption": (
        "아래는 Seedance 2.5 샘플 출력—약 30초 연속 멀티샷 카메라 워크:"
    ),
    "h_gpt": "GPT 튜토리얼: ChatGPT로 스토리보드 작성 후 Seedance 생성",
    "gpt_steps": [
        ("샷리스트 우선", "30초를 6–8비트로 나누고 샷 사이즈·카메라 동사·타이밍 명시"),
        ("참조 매니페스트", "50개 슬롯을 캐릭터·제품·팔레트·구도 역할에 매핑"),
        ("스타일 어휘 고정", "렌즈·그레이드·금지 요소 블록을 매 실행마다 재사용"),
        ("텍스트에서 반복", "GPU를 쓰기 전 ChatGPT에서 대본·보드를 다듬기"),
    ],
    "gpt_extra": (
        "평소 **ChatGPT**(**GPT-5.4 / GPT-5.5**, **GPT-5.6** 출시 예정)로 카피·요구사항을 "
        "나눈다면 같은 **gpt 튜토리얼** 습관을 영상 준비에 옮기세요."
    ),
    "gpt_close": (
        "아래 버튼을 눌러 LimaxAI 채팅(**gpt-5.4**; 신규 모델은 목록에서 선택)을 열고 "
        "스토리보드 프롬프트를 연습하세요."
    ),
    "h_sum": "요약",
    "sum_rows": [
        ("항목", ""),
        ("네이티브 길이", "30초, 단일 패스"),
        ("참조", "최대 50개 멀티모달"),
        ("해상도", "네이티브 4K"),
        ("편집", "국소 멀티샷 제어"),
        ("오디오", "립싱크 + 환경음 동시 렌더"),
        ("출시", "기업 파일럿; 7월 초 확대"),
        ("다음 단계", "ChatGPT로 샷 작성; LimaxAI에서 GPT 체험"),
    ],
    "sum_line": (
        "Seedance 2.5는 AI 영상을 「짧은 클립 장난감」에서 **쓸 만한 30초 원테이크**로 "
        "밀어 올립니다. 규율 있는 **GPT** 전처리가 새 모델명을 쫓는 것보다 실용적입니다."
    ),
}

# --- German ---
PACK_DATA["de"] = {
    "intro": (
        "Am 23. Juni 2026 stellte ByteDances Volcano Engine auf einer Unternehmenskonferenz "
        "**Seedance 2.5** vor. Drei Zahlen fassen das Upgrade zusammen: **native 30-Sekunden-Einzelfahrt**, "
        "**native 4K-Ausgabe** und bis zu **50 multimodale Referenz-Assets** (Charaktere, Produkte, "
        "Framing, Markenfarben, Stil-Layer) in einer Generation."
    ),
    "keywords": "Schlüsselwörter: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Veröffentlicht: 23. Juni 2026",
    "img_alt": "Seedance 2.5 Launch 30s One-Take nativ 4K 50 Referenzen",
    "h_upgrade": "Seedance 2.5 vs 2.0: Was sich geändert hat",
    "upgrade_intro": (
        "Viele AI-Video-Tools begrenzen eine einzelne Generation auf 5–15 Sekunden. Verlängert man "
        "die Timeline, driftet das Bild—Gesichter verformen sich, Licht springt, Produktformen "
        "verzerren sich. Seedance 2.5 hebt die nutzbare Basis deutlich an:"
    ),
    "upgrade_note": (
        "Volcano Engine hat auch die **Seedance-2.0-Basis** auf natives 4K angehoben, sodass "
        "Bestandsnutzer schärfere Outputs erhalten, während 2.5 längere Multishot-Narrative und "
        "dichtere Referenzeingaben übernimmt."
    ),
    "h_duration": "30 Sekunden nativ + 50 Referenzen: One-Take stabil halten",
    "duration_p1": (
        "**30 Sekunden in einem Durchlauf** sind das Leitmerkmal. Für Werbespots, Produktdemos "
        "und kurze Dramenbeats ist eine halbe Minute oft die minimale nutzbare Länge—kürzer "
        "erzwingt harte Schnitte in der Postproduktion."
    ),
    "duration_p2": (
        "Um eine 30-Sekunden-Timeline stabil zu halten, akzeptiert 2.5 bis zu **50 Referenz-Assets** "
        "gleichzeitig: Charakter-Sheets, Produktaufnahmen, Markenpaletten, Storyboard-Frames, "
        "sogar Stil-Layer aus Brand Guidelines. Präzisere Anker bedeuten weniger Drift über die Zeit.\n\n"
        "Empfohlene Slot-Verteilung:"
    ),
    "duration_table_hdr": ("Referenztyp", "Empfohlene Anzahl", "Rolle"),
    "duration_rows": [
        ("Charakteridentität", "3–8", "Gesicht, Haar, Kleidungsfarben fixieren"),
        ("Produkt/Logo", "2–5", "Verpackungsverhältnis und Markenzeichen klar halten"),
        ("Framing/Storyboard", "5–15", "Wichtige Kamerawinkel und Shotgrößen"),
        ("Stil/Grade", "1–3", "Filmlook, Kontrast, verbotene Elemente"),
        ("Flexible Reserve", "restliche Slots", "Requisiten und Szenendetails nach Bedarf"),
    ],
    "duration_tail": (
        "Prompts am besten als **Timeline** schreiben, z. B. „0–5 s Szene etablieren, 5–20 s "
        "Hauptaktion, 20–30 s Produkt-Hero“—effektiver als Adjektiv-Stapel."
    ),
    "h_multishot": "Multishot-Bearbeitung und lokale Steuerung: weniger Re-Rolls",
    "multishot_intro": (
        "Wer AI-Video produziert, kennt das Problem: Ein Detail ändern, ganzen Clip neu generieren. "
        "Seedance 2.5 fügt **lokalisierte Bearbeitung** hinzu, näher an „nur dieses Storyboard-Panel "
        "fixen“:"
    ),
    "multishot_b1": (
        "**Persistente Kontinuität (Persistent Continuity)** — Kleidung, Requisiten oder Charakter "
        "tauschen, während Hintergrundlicht, Physik und Komposition bleiben"
    ),
    "multishot_b2": (
        "**Regie-Kamera (Director-Grade Camera)** — Tracking, Schwenks, Dolly-Fahrten und "
        "Geschwindigkeitskurven als Workflow-Parameter, nicht als Prompt-Lotterie"
    ),
    "multishot_close": (
        "Für Werbe- und E-Commerce-Teams bedeutet A/B-Tests mit SKUs oder Copy nicht mehr, "
        "jedes Mal bei null anzufangen."
    ),
    "h_audio": "Native AV-Synchronisation, Physiksimulation und 4K-Pipeline",
    "audio_intro": (
        "Längere Timelines veranlassten Volcano Engine, **Physiksimulation** und Diffusions-Stack "
        "neu zu gestalten. Wichtige AV-Änderungen in Seedance 2.5:"
    ),
    "audio_rows": [
        ("Fähigkeit", "Funktion"),
        ("Phonem-Lippensync", "Dialog und Mundform in einem Render-Durchlauf ausgerichtet", ""),
        ("Umgebungs-SFX", "Aktionsgematchte Effekte und Hintergrund-Beds", ""),
        ("Natives 4K", "Direkte 4K-Ausgabe, nicht nur Upscale", ""),
        ("Multishot-Logik", "Szenenschnitte im Modell orchestriert, nicht in Post zusammengeklebt", ""),
    ],
    "audio_close": (
        "Enterprise-Piloten laufen; breiterer Zugang für Entwickler und Creator wird für "
        "**Anfang Juli 2026** erwartet."
    ),
    "h_demo": "Demo-Video",
    "demo_caption": (
        "Beispiel-Output von Seedance 2.5—etwa 30 Sekunden kontinuierliche Multishot-Kameraführung:"
    ),
    "h_gpt": "GPT-Tutorial: Storyboards in ChatGPT, dann Seedance",
    "gpt_steps": [
        ("Shotliste zuerst", "30 Sekunden in 6–8 Beats mit Shotgröße, Kamera-Verben und Timing teilen"),
        ("Referenz-Manifest", "Alle 50 Slots Charakter, Produkt, Palette oder Framing zuordnen"),
        ("Stil-Vokabular fixieren", "Ein Block zu Objektiv, Grade und verbotenen Elementen, jedes Mal wiederverwenden"),
        ("In Text iterieren", "Skript und Boards in ChatGPT polieren, bevor GPU-Zeit für Video fließt"),
    ],
    "gpt_extra": (
        "Wer **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** in Sicht) für Copy und "
        "Aufgabenzerlegung nutzt, kann dieselben **gpt tutorial**-Gewohnheiten in die "
        "Videovorbereitung übertragen."
    ),
    "gpt_close": (
        "Klicken Sie unten, um LimaxAI-Chat (**gpt-5.4**; neuere Modelle in der Liste wählen) "
        "zu öffnen und Storyboard-Prompts zu üben."
    ),
    "h_sum": "Zusammenfassung",
    "sum_rows": [
        ("Punkt", ""),
        ("Native Länge", "30 Sekunden, ein Durchlauf"),
        ("Referenzen", "Bis zu 50 multimodale Assets"),
        ("Auflösung", "Natives 4K"),
        ("Bearbeitung", "Lokalisierte Multishot-Steuerung"),
        ("Audio", "Lippensync + Umgebungs-SFX in einem Durchlauf"),
        ("Rollout", "Enterprise-Piloten; breiterer Zugang Anfang Juli 2026"),
        ("Nächster Schritt", "Shots in ChatGPT entwerfen; GPT auf LimaxAI testen"),
    ],
    "sum_line": (
        "Seedance 2.5 schiebt AI-Video vom „Kurzclip-Spielzeug“ zu **nutzbaren 30-Sekunden-Takes**. "
        "Ein disziplinierter **GPT**-Pre-Production-Flow schlägt das Jagen jedes neuen Modellnamens."
    ),
}

# --- Spanish ---
PACK_DATA["es"] = {
    "intro": (
        "El 23 de junio de 2026, Volcano Engine de ByteDance presentó **Seedance 2.5** en su "
        "conferencia empresarial. Tres cifras resumen la mejora: **30 segundos nativos en un solo "
        "pase**, **salida 4K nativa** y hasta **50 activos de referencia multimodales** (personajes, "
        "productos, encuadre, colores de marca, capas de estilo) en una sola generación."
    ),
    "keywords": "Palabras clave: chatgpt, GPT-5.6, tutorial gpt, seedance 2.5.",
    "published": "Publicado: 23 de junio de 2026",
    "img_alt": "Lanzamiento Seedance 2.5 30s plano secuencia 4K nativo 50 referencias",
    "h_upgrade": "Seedance 2.5 frente a 2.0: qué cambió",
    "upgrade_intro": (
        "Muchas herramientas de vídeo con IA siguen limitando una generación a 5–15 segundos. "
        "Al alargar el tiempo, la imagen se desvía: rostros se deforman, la luz salta, los productos "
        "cambian de forma. Seedance 2.5 empuja la línea base utilizable:"
    ),
    "upgrade_note": (
        "Volcano Engine también actualizó la **base Seedance 2.0** a 4K nativo, así los usuarios "
        "actuales obtienen mayor nitidez mientras 2.5 se centra en narrativas multishot más largas "
        "y referencias más densas."
    ),
    "h_duration": "30 segundos nativos + 50 referencias: mantener estable el plano secuencia",
    "duration_p1": (
        "**30 segundos en un solo pase** es la especificación estrella. Para anuncios, demos de "
        "producto y escenas cortas, medio minuto suele ser la duración mínima usable—más corto "
        "obliga a cortes incómodos en postproducción."
    ),
    "duration_p2": (
        "Para sostener una línea de tiempo de 30 segundos, 2.5 acepta hasta **50 activos de "
        "referencia** a la vez: fichas de personaje, tomas de producto, paletas de marca, "
        "fotogramas de storyboard, incluso capas de estilo de guías de marca. Más anclas precisas "
        "significan menos deriva con el tiempo.\n\n"
        "Asignación sugerida de los 50 slots:"
    ),
    "duration_table_hdr": ("Tipo de referencia", "Cantidad sugerida", "Función"),
    "duration_rows": [
        ("Identidad de personaje", "3–8", "Fijar rostro, cabello y colores del vestuario"),
        ("Producto/Logo", "2–5", "Mantener proporción del empaque y marcas claras"),
        ("Encuadre/Storyboard", "5–15", "Ángulos de cámara y planos clave"),
        ("Estilo/Grade", "1–3", "Look cinematográfico, contraste, elementos prohibidos"),
        ("Reserva flexible", "slots restantes", "Atrezzo y detalles de escena según necesidad"),
    ],
    "duration_tail": (
        "Escriba los prompts como **línea de tiempo**, p. ej. «0–5 s establecer escena, 5–20 s "
        "acción principal, 20–30 s héroe de producto»—más efectivo que acumular adjetivos."
    ),
    "h_multishot": "Edición multishot y control local: menos re-generaciones",
    "multishot_intro": (
        "Quien hace vídeo con IA conoce el dolor: cambiar un detalle y regenerar todo el clip. "
        "Seedance 2.5 añade **edición localizada**, más cerca de «arreglar solo este panel del "
        "storyboard»:"
    ),
    "multishot_b1": (
        "**Continuidad persistente (Persistent Continuity)** — cambiar ropa, atrezzo o personaje "
        "manteniendo luz de fondo, física y composición"
    ),
    "multishot_b2": (
        "**Cámara de nivel director (Director-Grade Camera)** — travelling, panorámicas, dolly "
        "y curvas de velocidad como parámetros de flujo, no como lotería de prompts"
    ),
    "multishot_close": (
        "Para equipos de publicidad y e-commerce, probar SKUs o copy en A/B ya no implica "
        "empezar de cero cada vez."
    ),
    "h_audio": "Sincronización AV nativa, simulación física y pipeline 4K",
    "audio_intro": (
        "Las líneas de tiempo más largas llevaron a Volcano Engine a rediseñar la **simulación "
        "física** y la pila de difusión. Cambios AV clave en Seedance 2.5:"
    ),
    "audio_rows": [
        ("Capacidad", "Qué hace"),
        ("Sincronización labial por fonemas", "Diálogo y forma de boca alineados en un solo render", ""),
        ("SFX ambientales", "Efectos y ambientes acordes a la acción en pantalla", ""),
        ("4K nativo", "Salida 4K directa, no solo upscale", ""),
        ("Lógica multishot", "Cortes de escena orquestados dentro del modelo, no pegados en post", ""),
    ],
    "audio_close": (
        "Pilotos empresariales en marcha; acceso más amplio para desarrolladores y creadores "
        "previsto para **principios de julio de 2026**."
    ),
    "h_demo": "Vídeo demo",
    "demo_caption": (
        "Salida de ejemplo de Seedance 2.5—unos 30 segundos de trabajo de cámara multishot continuo:"
    ),
    "h_gpt": "Tutorial GPT: storyboard en ChatGPT, luego Seedance",
    "gpt_steps": [
        ("Lista de planos primero", "Dividir 30 s en 6–8 beats con plano, verbos de cámara y timing"),
        ("Manifiesto de referencias", "Asignar los 50 slots a personaje, producto, paleta o encuadre"),
        ("Vocabulario de estilo fijo", "Un bloque de lente, grade y elementos prohibidos reutilizado"),
        ("Iterar en texto", "Pulir guion y storyboard en ChatGPT antes de gastar GPU en vídeo"),
    ],
    "gpt_extra": (
        "Si ya usa **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** en camino) para copy y "
        "desglose de tareas, lleve los mismos hábitos de **tutorial gpt** a la preparación de vídeo."
    ),
    "gpt_close": (
        "Pulse el botón inferior para abrir el chat de LimaxAI (**gpt-5.4**; elija modelos nuevos "
        "en la lista) y practique prompts de storyboard."
    ),
    "h_sum": "Resumen",
    "sum_rows": [
        ("Elemento", ""),
        ("Duración nativa", "30 segundos, un solo pase"),
        ("Referencias", "Hasta 50 activos multimodales"),
        ("Resolución", "4K nativo"),
        ("Edición", "Controles multishot localizados"),
        ("Audio", "Sincronización labial + SFX ambientales en un pase"),
        ("Despliegue", "Pilotos empresariales; acceso amplio principios julio 2026"),
        ("Siguiente paso", "Borrador de planos en ChatGPT; probar GPT en LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 acerca el vídeo con IA del «juguete de clip corto» a **tomas útiles de "
        "medio minuto**. Un flujo de preproducción **GPT** disciplinado supera perseguir cada "
        "nombre de modelo nuevo."
    ),
}

# --- French ---
PACK_DATA["fr"] = {
    "intro": (
        "Le 23 juin 2026, Volcano Engine (ByteDance) a dévoilé **Seedance 2.5** lors de sa "
        "conférence entreprise. Trois chiffres résument la montée en gamme : **30 secondes natives "
        "en un seul passage**, **sortie 4K native** et jusqu'à **50 assets de référence multimodaux** "
        "(personnages, produits, cadrage, couleurs de marque, couches de style) en une génération."
    ),
    "keywords": "Mots-clés : chatgpt, GPT-5.6, tutoriel gpt, seedance 2.5.",
    "published": "Publié le 23 juin 2026",
    "img_alt": "Lancement Seedance 2.5 30s plan séquence 4K natif 50 références",
    "h_upgrade": "Seedance 2.5 vs 2.0 : ce qui a changé",
    "upgrade_intro": (
        "Beaucoup d'outils vidéo IA plafonnent encore une génération à 5–15 secondes. Allonger la "
        "timeline fait dériver l'image—visages qui se déforment, lumière qui saute, produits qui "
        "se tordent. Seedance 2.5 repousse la base utilisable :"
    ),
    "upgrade_note": (
        "Volcano Engine a aussi upgradé la **base Seedance 2.0** en 4K natif : les utilisateurs "
        "existants gagnent en netteté tandis que 2.5 se concentre sur des récits multishot plus "
        "longs et des références plus denses."
    ),
    "h_duration": "30 secondes natives + 50 références : stabiliser le plan séquence",
    "duration_p1": (
        "**30 secondes en un passage** est la spec phare. Pour la pub, les démos produit et les "
        "beats de court-métrage, une demi-minute est souvent la durée minimale exploitable—plus "
        "court impose des coupes maladroites en post."
    ),
    "duration_p2": (
        "Pour tenir une timeline de 30 secondes, 2.5 accepte jusqu'à **50 assets de référence** "
        "d'un coup : fiches personnage, plans produit, palettes de marque, frames de storyboard, "
        "même couches de style issues des chartes. Plus d'ancres précises, moins de dérive dans le temps.\n\n"
        "Répartition suggérée des 50 slots :"
    ),
    "duration_table_hdr": ("Type de référence", "Nombre suggéré", "Rôle"),
    "duration_rows": [
        ("Identité personnage", "3–8", "Fixer visage, cheveux, couleurs de tenue"),
        ("Produit/Logo", "2–5", "Garder ratio packaging et marques lisibles"),
        ("Cadrage/Storyboard", "5–15", "Angles caméra et tailles de plan clés"),
        ("Style/Grade", "1–3", "Look film, contraste, éléments interdits"),
        ("Réserve flexible", "slots restants", "Accessoires et détails de scène au besoin"),
    ],
    "duration_tail": (
        "Rédigez les prompts en **timeline**, ex. « 0–5 s établir la scène, 5–20 s action "
        "principale, 20–30 s héros produit »—plus efficace qu'une pile d'adjectifs."
    ),
    "h_multishot": "Montage multishot et contrôle local : moins de re-générations",
    "multishot_intro": (
        "Tout créateur vidéo IA connaît la galère : corriger un détail, tout régénérer. Seedance 2.5 "
        "ajoute l'**édition localisée**, plus proche de « corriger ce panneau de storyboard » :"
    ),
    "multishot_b1": (
        "**Continuité persistante (Persistent Continuity)** — changer tenue, accessoires ou "
        "personnage en gardant lumière de fond, physique et composition"
    ),
    "multishot_b2": (
        "**Caméra niveau réalisateur (Director-Grade Camera)** — travelling, panoramiques, "
        "dolly et courbes de vitesse comme paramètres de workflow, pas comme loterie de prompt"
    ),
    "multishot_close": (
        "Pour la pub et l'e-commerce, tester SKU ou copy en A/B ne signifie plus repartir de "
        "zéro à chaque fois."
    ),
    "h_audio": "Sync AV native, simulation physique et pipeline 4K",
    "audio_intro": (
        "Des timelines plus longues ont poussé Volcano Engine à refondre la **simulation physique** "
        "et la stack de diffusion. Changements AV clés de Seedance 2.5 :"
    ),
    "audio_rows": [
        ("Capacité", "Fonction"),
        ("Sync labiale phonémique", "Dialogue et forme de bouche alignés en un seul render", ""),
        ("SFX ambiants", "Effets et fonds sonores calés sur l'action à l'écran", ""),
        ("4K natif", "Sortie 4K directe, pas upscale seul", ""),
        ("Logique multishot", "Coupes de scène orchestrées dans le modèle, pas collées en post", ""),
    ],
    "audio_close": (
        "Pilotes entreprise en cours ; accès élargi développeurs et créateurs attendu **début "
        "juillet 2026**."
    ),
    "h_demo": "Vidéo démo",
    "demo_caption": (
        "Exemple de sortie Seedance 2.5—environ 30 secondes de travail caméra multishot continu :"
    ),
    "h_gpt": "Tutoriel GPT : storyboard dans ChatGPT, puis Seedance",
    "gpt_steps": [
        ("Shot list d'abord", "Découper 30 s en 6–8 beats avec taille de plan, verbes caméra et timing"),
        ("Manifeste de références", "Mapper les 50 slots vers personnage, produit, palette ou cadrage"),
        ("Vocabulaire de style verrouillé", "Un bloc objectif, grade et éléments interdits réutilisé"),
        ("Itérer en texte", "Polir script et boards dans ChatGPT avant de brûler du GPU vidéo"),
    ],
    "gpt_extra": (
        "Si vous utilisez déjà **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** en approche) pour "
        "copy et découpage de tâches, reportez les mêmes habitudes de **tutoriel gpt** en prépa vidéo."
    ),
    "gpt_close": (
        "Cliquez le bouton ci-dessous pour ouvrir le chat LimaxAI (**gpt-5.4** ; choisissez les "
        "nouveaux modèles dans la liste) et entraînez vos prompts storyboard."
    ),
    "h_sum": "Synthèse",
    "sum_rows": [
        ("Élément", ""),
        ("Durée native", "30 secondes, un passage"),
        ("Références", "Jusqu'à 50 assets multimodaux"),
        ("Résolution", "4K natif"),
        ("Montage", "Contrôles multishot localisés"),
        ("Audio", "Sync labiale + SFX ambiants en un passage"),
        ("Déploiement", "Pilotes entreprise ; accès élargi début juillet 2026"),
        ("Prochaine étape", "Brouillon de plans dans ChatGPT ; essayer GPT sur LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 pousse la vidéo IA du « jouet de clip court » vers des **prises d'une "
        "demi-minute exploitables**. Un flux de préproduction **GPT** discipliné bat la course "
        "aux nouveaux noms de modèles."
    ),
}

# --- Portuguese ---
PACK_DATA["pt"] = {
    "intro": (
        "Em 23 de junho de 2026, a Volcano Engine da ByteDance apresentou o **Seedance 2.5** na "
        "conferência empresarial. Três números resumem a evolução: **30 segundos nativos em um "
        "único take**, **saída 4K nativa** e até **50 ativos de referência multimodais** "
        "(personagens, produtos, enquadramento, cores de marca, camadas de estilo) numa geração."
    ),
    "keywords": "Palavras-chave: chatgpt, GPT-5.6, tutorial gpt, seedance 2.5.",
    "published": "Publicado: 23 de junho de 2026",
    "img_alt": "Lançamento Seedance 2.5 30s one-take 4K nativo 50 referências",
    "h_upgrade": "Seedance 2.5 vs 2.0: o que mudou",
    "upgrade_intro": (
        "Muitas ferramentas de vídeo IA ainda limitam uma geração a 5–15 segundos. Estender o "
        "tempo traz deriva visual—rostos deformam, luz salta, produtos mudam de forma. "
        "Seedance 2.5 empurra a linha de base utilizável:"
    ),
    "upgrade_note": (
        "A Volcano Engine também atualizou a **base Seedance 2.0** para 4K nativo, então "
        "usuários atuais ganham saída mais nítida enquanto o 2.5 foca narrativas multishot "
        "mais longas e referências mais densas."
    ),
    "h_duration": "30 segundos nativos + 50 referências: estabilizar o one-take",
    "duration_p1": (
        "**30 segundos em um passe** é a especificação principal. Para anúncios, demos de "
        "produto e cenas curtas, meio minuto costuma ser o mínimo utilizável—mais curto "
        "força cortes incômodos na pós."
    ),
    "duration_p2": (
        "Para sustentar uma linha do tempo de 30 segundos, o 2.5 aceita até **50 ativos de "
        "referência** de uma vez: fichas de personagem, fotos de produto, paletas de marca, "
        "frames de storyboard, até camadas de estilo de guidelines. Âncoras mais precisas "
        "significam menos deriva ao longo do tempo.\n\n"
        "Alocação sugerida dos 50 slots:"
    ),
    "duration_table_hdr": ("Tipo de referência", "Quantidade sugerida", "Função"),
    "duration_rows": [
        ("Identidade do personagem", "3–8", "Fixar rosto, cabelo e cores do figurino"),
        ("Produto/Logo", "2–5", "Manter proporção da embalagem e marcas claras"),
        ("Enquadramento/Storyboard", "5–15", "Ângulos de câmera e tamanhos de plano"),
        ("Estilo/Grade", "1–3", "Look cinematográfico, contraste, elementos proibidos"),
        ("Reserva flexível", "slots restantes", "Adereços e detalhes de cena conforme necessário"),
    ],
    "duration_tail": (
        "Escreva prompts em **linha do tempo**, ex.: «0–5 s estabelecer cena, 5–20 s ação "
        "principal, 20–30 s hero do produto»—mais eficaz que acumular adjetivos."
    ),
    "h_multishot": "Edição multishot e controle local: menos re-gerações",
    "multishot_intro": (
        "Quem faz vídeo com IA conhece a dor: ajustar um detalhe e regenerar o clip inteiro. "
        "Seedance 2.5 adiciona **edição localizada**, mais perto de «corrigir só este painel "
        "do storyboard»:"
    ),
    "multishot_b1": (
        "**Continuidade persistente (Persistent Continuity)** — trocar roupa, adereços ou "
        "personagem mantendo luz de fundo, física e composição"
    ),
    "multishot_b2": (
        "**Câmera nível diretor (Director-Grade Camera)** — tracking, panorâmicas, dolly "
        "e curvas de velocidade como parâmetros de workflow, não loteria de prompt"
    ),
    "multishot_close": (
        "Para equipes de publicidade e e-commerce, testar SKUs ou copy em A/B não exige "
        "recomeçar do zero toda vez."
    ),
    "h_audio": "Sincronização AV nativa, simulação física e pipeline 4K",
    "audio_intro": (
        "Linhas do tempo mais longas levaram a Volcano Engine a refazer a **simulação física** "
        "e a stack de difusão. Principais mudanças AV no Seedance 2.5:"
    ),
    "audio_rows": [
        ("Capacidade", "O que faz"),
        ("Sincronização labial por fonemas", "Diálogo e formato da boca alinhados num render", ""),
        ("SFX ambientais", "Efeitos e camadas de fundo casados com a ação", ""),
        ("4K nativo", "Saída 4K direta, não só upscale", ""),
        ("Lógica multishot", "Cortes de cena orquestrados no modelo, não colados na pós", ""),
    ],
    "audio_close": (
        "Pilotos empresariais em andamento; acesso mais amplo para desenvolvedores e criadores "
        "previsto para **início de julho de 2026**."
    ),
    "h_demo": "Vídeo demo",
    "demo_caption": (
        "Saída de exemplo do Seedance 2.5—cerca de 30 segundos de trabalho de câmera multishot contínuo:"
    ),
    "h_gpt": "Tutorial GPT: storyboard no ChatGPT, depois Seedance",
    "gpt_steps": [
        ("Lista de planos primeiro", "Dividir 30 s em 6–8 beats com plano, verbos de câmera e timing"),
        ("Manifesto de referências", "Mapear os 50 slots para personagem, produto, paleta ou enquadramento"),
        ("Vocabulário de estilo fixo", "Bloco de lente, grade e elementos proibidos reutilizado"),
        ("Iterar em texto", "Polir roteiro e boards no ChatGPT antes de gastar GPU em vídeo"),
    ],
    "gpt_extra": (
        "Se já usa **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** a caminho) para copy e "
        "quebra de tarefas, leve os mesmos hábitos de **tutorial gpt** para a preparação de vídeo."
    ),
    "gpt_close": (
        "Clique no botão abaixo para abrir o chat LimaxAI (**gpt-5.4**; escolha modelos novos "
        "na lista) e pratique prompts de storyboard."
    ),
    "h_sum": "Resumo",
    "sum_rows": [
        ("Item", ""),
        ("Duração nativa", "30 segundos, um passe"),
        ("Referências", "Até 50 ativos multimodais"),
        ("Resolução", "4K nativo"),
        ("Edição", "Controles multishot localizados"),
        ("Áudio", "Sincronização labial + SFX ambientais num passe"),
        ("Lançamento", "Pilotos empresariais; acesso amplo início julho 2026"),
        ("Próximo passo", "Rascunhar planos no ChatGPT; experimentar GPT no LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 empurra o vídeo IA de «brinquedo de clip curto» para **takes úteis de "
        "meio minuto**. Um fluxo de pré-produção **GPT** disciplinado supera correr atrás de "
        "cada nome de modelo novo."
    ),
}

# --- Italian ---
PACK_DATA["it"] = {
    "intro": (
        "Il 23 giugno 2026, Volcano Engine di ByteDance ha svelato **Seedance 2.5** alla "
        "conferenza enterprise. Tre numeri riassumono l'upgrade: **30 secondi nativi in un "
        "unico take**, **output 4K nativo** e fino a **50 asset di riferimento multimodali** "
        "(personaggi, prodotti, inquadratura, colori del brand, layer di stile) in una generazione."
    ),
    "keywords": "Parole chiave: chatgpt, GPT-5.6, tutorial gpt, seedance 2.5.",
    "published": "Pubblicato: 23 giugno 2026",
    "img_alt": "Lancio Seedance 2.5 30s one-take 4K nativo 50 riferimenti",
    "h_upgrade": "Seedance 2.5 vs 2.0: cosa è cambiato",
    "upgrade_intro": (
        "Molti strumenti video IA limitano ancora una generazione a 5–15 secondi. Allungare la "
        "timeline fa derivare l'immagine—volti che si deformano, luce che salta, prodotti che "
        "cambiano forma. Seedance 2.5 spinge avanti la baseline utilizzabile:"
    ),
    "upgrade_note": (
        "Volcano Engine ha anche aggiornato la **base Seedance 2.0** al 4K nativo, così gli "
        "utenti esistenti ottengono output più nitidi mentre 2.5 si concentra su narrative "
        "multishot più lunghe e input di riferimento più densi."
    ),
    "h_duration": "30 secondi nativi + 50 riferimenti: stabilizzare l'one-take",
    "duration_p1": (
        "**30 secondi in un passaggio** è la specifica principale. Per spot, demo prodotto e "
        "beat drammatici brevi, mezzo minuto è spesso la lunghezza minima utilizzabile—più "
        "corto impone tagli scomodi in post."
    ),
    "duration_p2": (
        "Per tenere stabile una timeline di 30 secondi, 2.5 accetta fino a **50 asset di "
        "riferimento** in un colpo: character sheet, scatti prodotto, palette brand, frame "
        "storyboard, persino layer di stile da brand guidelines. Ancoraggi più precisi "
        "significano meno drift nel tempo.\n\n"
        "Allocazione suggerita dei 50 slot:"
    ),
    "duration_table_hdr": ("Tipo di riferimento", "Quantità suggerita", "Ruolo"),
    "duration_rows": [
        ("Identità personaggio", "3–8", "Bloccare volto, capelli, colori del costume"),
        ("Prodotto/Logo", "2–5", "Mantenere proporzioni packaging e marchi chiari"),
        ("Inquadratura/Storyboard", "5–15", "Angoli camera e dimensioni piano chiave"),
        ("Stile/Grade", "1–3", "Look film, contrasto, elementi vietati"),
        ("Riserva flessibile", "slot rimanenti", "Props e dettagli scena secondo necessità"),
    ],
    "duration_tail": (
        "Scrivete i prompt come **timeline**, es. «0–5 s stabilire scena, 5–20 s azione "
        "principale, 20–30 s hero prodotto»—più efficace che accumulare aggettivi."
    ),
    "h_multishot": "Editing multishot e controllo locale: meno re-generazioni",
    "multishot_intro": (
        "Chi fa video IA conosce il problema: correggere un dettaglio e rigenerare tutto il clip. "
        "Seedance 2.5 aggiunge **editing localizzato**, più vicino a «sistemare solo questo "
        "pannello storyboard»:"
    ),
    "multishot_b1": (
        "**Continuità persistente (Persistent Continuity)** — cambiare abiti, props o personaggio "
        "mantenendo luce di fondo, fisica e composizione"
    ),
    "multishot_b2": (
        "**Camera da regista (Director-Grade Camera)** — tracking, pan, dolly e curve di "
        "velocità come parametri di workflow, non lotteria di prompt"
    ),
    "multishot_close": (
        "Per team pub e e-commerce, test A/B su SKU o copy non significa più ripartire da zero "
        "ogni volta."
    ),
    "h_audio": "Sync AV nativa, simulazione fisica e pipeline 4K",
    "audio_intro": (
        "Timeline più lunghe hanno spinto Volcano Engine a rifare **simulazione fisica** e "
        "stack di diffusione. Cambiamenti AV chiave in Seedance 2.5:"
    ),
    "audio_rows": [
        ("Capacità", "Cosa fa"),
        ("Lip sync fonemico", "Dialogo e forma bocca allineati in un render", ""),
        ("SFX ambientali", "Effetti e bed sonori abbinati all'azione", ""),
        ("4K nativo", "Output 4K diretto, non solo upscale", ""),
        ("Logica multishot", "Tagli scena orchestrati nel modello, non incollati in post", ""),
    ],
    "audio_close": (
        "Pilot enterprise attivi; accesso più ampio per developer e creator atteso **inizio "
        "luglio 2026**."
    ),
    "h_demo": "Video demo",
    "demo_caption": (
        "Output di esempio Seedance 2.5—circa 30 secondi di lavoro camera multishot continuo:"
    ),
    "h_gpt": "Tutorial GPT: storyboard in ChatGPT, poi Seedance",
    "gpt_steps": [
        ("Shot list prima", "Dividere 30 s in 6–8 beat con piano, verbi camera e timing"),
        ("Manifesto riferimenti", "Mappare i 50 slot su personaggio, prodotto, palette o inquadratura"),
        ("Vocabolario stile bloccato", "Blocco su lente, grade ed elementi vietati riutilizzato"),
        ("Iterare in testo", "Rifinire script e board in ChatGPT prima di bruciare GPU video"),
    ],
    "gpt_extra": (
        "Se già usate **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** in arrivo) per copy e "
        "scomposizione task, portate le stesse abitudini da **tutorial gpt** alla prep video."
    ),
    "gpt_close": (
        "Cliccate il pulsante sotto per aprire la chat LimaxAI (**gpt-5.4**; scegliete nuovi "
        "modelli dalla lista) e esercitate prompt storyboard."
    ),
    "h_sum": "Riepilogo",
    "sum_rows": [
        ("Voce", ""),
        ("Lunghezza nativa", "30 secondi, un passaggio"),
        ("Riferimenti", "Fino a 50 asset multimodali"),
        ("Risoluzione", "4K nativo"),
        ("Editing", "Controlli multishot localizzati"),
        ("Audio", "Lip sync + SFX ambientali in un passaggio"),
        ("Rollout", "Pilot enterprise; accesso ampio inizio luglio 2026"),
        ("Prossimo passo", "Bozza piani in ChatGPT; provare GPT su LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 spinge il video IA da «giocattolo clip corto» verso **take utili di mezzo "
        "minuto**. Un flusso di pre-produzione **GPT** disciplinato batte inseguire ogni nuovo "
        "nome modello."
    ),
}

# --- Russian ---
PACK_DATA["ru"] = {
    "intro": (
        "23 июня 2026 года Volcano Engine (ByteDance) представила на корпоративной конференции "
        "**Seedance 2.5**. Три цифры описывают апгрейд: **нативные 30 секунд одним дублем**, "
        "**нативный вывод 4K** и до **50 мультимодальных референсов** (персонажи, продукты, "
        "кадрирование, цвета бренда, стилевые слои) за одну генерацию."
    ),
    "keywords": "Ключевые слова: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Опубликовано: 23 июня 2026",
    "img_alt": "Запуск Seedance 2.5 30с одним дублем нативный 4K 50 референсов",
    "h_upgrade": "Seedance 2.5 vs 2.0: что изменилось",
    "upgrade_intro": (
        "Многие AI-видеоинструменты по-прежнему ограничивают одну генерацию 5–15 секундами. "
        "При удлинении таймлайна картинка «уплывает»—лица меняются, свет скачет, форма "
        "продукта искажается. Seedance 2.5 сдвигает рабочую базу вперёд:"
    ),
    "upgrade_note": (
        "Volcano Engine также обновила **базу Seedance 2.0** до нативного 4K, так что "
        "существующие пользователи получают более чёткий вывод, а 2.5 фокусируется на "
        "длинных multishot-историях и плотных референсах."
    ),
    "h_duration": "30 секунд нативно + 50 референсов: стабильный one-take",
    "duration_p1": (
        "**30 секунд за один проход** — главная спецификация. Для рекламы, демо продукта "
        "и коротких драматических сцен полминуты часто минимальная рабочая длина—короче "
        "приходится резать в постпродакшене."
    ),
    "duration_p2": (
        "Чтобы удержать 30-секундный таймлайн, 2.5 принимает до **50 референс-ассетов** "
        "за раз: character sheet, продуктовые кадры, палитры бренда, кадры storyboard, "
        "даже стилевые слои из brand guidelines. Точнее якоря — меньше дрейфа со временем.\n\n"
        "Рекомендуемое распределение 50 слотов:"
    ),
    "duration_table_hdr": ("Тип референса", "Рекомендуемое число", "Роль"),
    "duration_rows": [
        ("Идентичность персонажа", "3–8", "Фиксация лица, волос, цветов костюма"),
        ("Продукт/Logo", "2–5", "Сохранение пропорций упаковки и чёткости знаков"),
        ("Кадрирование/Storyboard", "5–15", "Ключевые углы камеры и размеры планов"),
        ("Стиль/Grade", "1–3", "Плёночный look, контраст, запрещённые элементы"),
        ("Гибкий резерв", "остальные слоты", "Реквизит и детали сцены по необходимости"),
    ],
    "duration_tail": (
        "Пишите промпты как **таймлайн**, напр.: «0–5 с установка сцены, 5–20 с основное "
        "действие, 20–30 с hero продукта»—эффективнее, чем набор прилагательных."
    ),
    "h_multishot": "Multishot-монтаж и локальный контроль: меньше перегенераций",
    "multishot_intro": (
        "Кто делает AI-видео, знает боль: поправил деталь — перегенерируй весь клип. "
        "Seedance 2.5 добавляет **локальное редактирование**, ближе к «исправить только "
        "эту панель storyboard»:"
    ),
    "multishot_b1": (
        "**Устойчивая непрерывность (Persistent Continuity)** — смена одежды, реквизита "
        "или персонажа при сохранении фонового света, физики и композиции"
    ),
    "multishot_b2": (
        "**Камера режиссёрского уровня (Director-Grade Camera)** — tracking, pan, dolly "
        "и кривые скорости как параметры workflow, а не лотерея промпта"
    ),
    "multishot_close": (
        "Для рекламных и e-commerce-команд A/B-тест SKU или текста больше не означает "
        "каждый раз начинать с нуля."
    ),
    "h_audio": "Нативная AV-синхронизация, физика и 4K-пайплайн",
    "audio_intro": (
        "Более длинные таймлайны заставили Volcano Engine переработать **физическую "
        "симуляцию** и diffusion-стек. Ключевые AV-изменения Seedance 2.5:"
    ),
    "audio_rows": [
        ("Возможность", "Описание"),
        ("Фонемный lip sync", "Диалог и форма рта выровнены в одном рендере", ""),
        ("Ambient SFX", "Эффекты и фон, согласованные с действием на экране", ""),
        ("Нативный 4K", "Прямой вывод 4K, не только upscale", ""),
        ("Multishot-логика", "Смены сцен внутри модели, а не склейка в посте", ""),
    ],
    "audio_close": (
        "Корпоративные пилоты идут; более широкий доступ для разработчиков и креаторов "
        "ожидается **в начале июля 2026**."
    ),
    "h_demo": "Демо-видео",
    "demo_caption": (
        "Пример вывода Seedance 2.5—около 30 секунд непрерывной multishot-камеры:"
    ),
    "h_gpt": "GPT-туториал: storyboard в ChatGPT, затем Seedance",
    "gpt_steps": [
        ("Сначала shot list", "Разбить 30 с на 6–8 битов с планом, глаголами камеры и таймингом"),
        ("Манифест референсов", "Распределить 50 слотов на персонажа, продукт, палитру, кадрирование"),
        ("Зафиксировать стиль", "Блок про объектив, grade и запрещённые элементы на каждый запуск"),
        ("Итерации в тексте", "Отполировать сценарий и boards в ChatGPT до траты GPU на видео"),
    ],
    "gpt_extra": (
        "Если вы уже используете **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** на подходе) "
        "для копирайта и декомпозиции задач, перенесите те же привычки **gpt tutorial** "
        "в подготовку видео."
    ),
    "gpt_close": (
        "Нажмите кнопку ниже, чтобы открыть чат LimaxAI (**gpt-5.4**; новые модели — в списке) "
        "и потренировать storyboard-промпты."
    ),
    "h_sum": "Итог",
    "sum_rows": [
        ("Пункт", ""),
        ("Нативная длина", "30 секунд, один проход"),
        ("Референсы", "До 50 мультимодальных ассетов"),
        ("Разрешение", "Нативное 4K"),
        ("Монтаж", "Локализованный multishot-контроль"),
        ("Аудио", "Lip sync + ambient SFX за один проход"),
        ("Rollout", "Корпоративные пилоты; шире — начало июля 2026"),
        ("Следующий шаг", "Черновик планов в ChatGPT; GPT на LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 сдвигает AI-видео от «игрушки для коротких клипов» к **рабочим "
        "полуминутным дублям**. Дисциплинированный **GPT**-pre-production полезнее погони "
        "за каждым новым именем модели."
    ),
}

# --- Ukrainian ---
PACK_DATA["uk"] = {
    "intro": (
        "23 червня 2026 року Volcano Engine (ByteDance) представила на корпоративній конференції "
        "**Seedance 2.5**. Три цифри описують апгрейд: **нативні 30 секунд одним дублем**, "
        "**нативний вивід 4K** і до **50 мультимодальних референсів** (персонажі, продукти, "
        "кадрування, кольори бренду, стилеві шари) за одну генерацію."
    ),
    "keywords": "Ключові слова: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Опубліковано: 23 червня 2026",
    "img_alt": "Запуск Seedance 2.5 30с one-take нативний 4K 50 референсів",
    "h_upgrade": "Seedance 2.5 vs 2.0: що змінилося",
    "upgrade_intro": (
        "Багато AI-відеоінструментів досі обмежують одну генерацію 5–15 секундами. "
        "Коли таймлайн подовжують, зображення «пливе»—обличчя змінюються, світло стрибає, "
        "форма продукту спотворюється. Seedance 2.5 зсуває робочу базу вперед:"
    ),
    "upgrade_note": (
        "Volcano Engine також оновила **базу Seedance 2.0** до нативного 4K, тож "
        "існуючі користувачі отримують чіткіший вивід, а 2.5 фокусується на довших "
        "multishot-історіях і щільніших референсах."
    ),
    "h_duration": "30 секунд нативно + 50 референсів: стабільний one-take",
    "duration_p1": (
        "**30 секунд за один прохід** — головна специфікація. Для реклами, демо продукту "
        "і коротких драматичних сцен півхвилини часто мінімальна робоча довжина—коротше "
        "доводиться різати в постпродакшені."
    ),
    "duration_p2": (
        "Щоб утримати 30-секундний таймлайн, 2.5 приймає до **50 референс-асетів** "
        "одразу: character sheet, продуктові кадри, палітри бренду, кадри storyboard, "
        "навіть стилеві шари з brand guidelines. Точніші якорі — менше дрейфу з часом.\n\n"
        "Рекомендований розподіл 50 слотів:"
    ),
    "duration_table_hdr": ("Тип референса", "Рекомендована кількість", "Роль"),
    "duration_rows": [
        ("Ідентичність персонажа", "3–8", "Фіксація обличчя, волосся, кольорів костюма"),
        ("Продукт/Logo", "2–5", "Збереження пропорцій упаковки та чіткості знаків"),
        ("Кадрування/Storyboard", "5–15", "Ключові кути камери та розміри планів"),
        ("Стиль/Grade", "1–3", "Плівковий look, контраст, заборонені елементи"),
        ("Гнучкий резерв", "решта слотів", "Реквізит і деталі сцени за потреби"),
    ],
    "duration_tail": (
        "Пишіть промпти як **таймлайн**, напр.: «0–5 с встановлення сцени, 5–20 с основна "
        "дія, 20–30 с hero продукту»—ефективніше, ніж набори прикметників."
    ),
    "h_multishot": "Multishot-монтаж і локальний контроль: менше перегенерацій",
    "multishot_intro": (
        "Хто робить AI-відео, знає біль: виправив деталь — перегенеруй увесь кліп. "
        "Seedance 2.5 додає **локальне редагування**, ближче до «виправити лише цю панель "
        "storyboard»:"
    ),
    "multishot_b1": (
        "**Стійка безперервність (Persistent Continuity)** — зміна одягу, реквізиту "
        "або персонажа зі збереженням фонового світла, фізики та композиції"
    ),
    "multishot_b2": (
        "**Камера режисерського рівня (Director-Grade Camera)** — tracking, pan, dolly "
        "і криві швидкості як параметри workflow, а не лотерея промпта"
    ),
    "multishot_close": (
        "Для рекламних і e-commerce-команд A/B-тест SKU чи тексту більше не означає "
        "кожного разу починати з нуля."
    ),
    "h_audio": "Нативна AV-синхронізація, фізика та 4K-пайплайн",
    "audio_intro": (
        "Довші таймлайни змусили Volcano Engine переробити **фізичну симуляцію** "
        "і diffusion-стек. Ключові AV-зміни Seedance 2.5:"
    ),
    "audio_rows": [
        ("Можливість", "Опис"),
        ("Фонемний lip sync", "Діалог і форма рота вирівняні в одному рендері", ""),
        ("Ambient SFX", "Ефекти та фон, узгоджені з дією на екрані", ""),
        ("Нативний 4K", "Прямий вивід 4K, не лише upscale", ""),
        ("Multishot-логіка", "Зміни сцен всередині моделі, а не склейка в пості", ""),
    ],
    "audio_close": (
        "Корпоративні пілоти тривають; ширший доступ для розробників і креаторів "
        "очікується **на початку липня 2026**."
    ),
    "h_demo": "Демо-відео",
    "demo_caption": (
        "Приклад виводу Seedance 2.5—близько 30 секунд безперервної multishot-камери:"
    ),
    "h_gpt": "GPT-туторіал: storyboard у ChatGPT, потім Seedance",
    "gpt_steps": [
        ("Спочатку shot list", "Розбити 30 с на 6–8 бітів з планом, дієсловами камери та таймінгом"),
        ("Маніфест референсів", "Розподілити 50 слотів на персонажа, продукт, палітру, кадрування"),
        ("Зафіксувати стиль", "Блок про об'єктив, grade і заборонені елементи на кожен запуск"),
        ("Ітерації в тексті", "Відполірувати сценарій і boards у ChatGPT до GPU на відео"),
    ],
    "gpt_extra": (
        "Якщо ви вже використовуєте **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** "
        "на підході) для копірайту та декомпозиції задач, перенесіть ті самі звички "
        "**gpt tutorial** у підготовку відео."
    ),
    "gpt_close": (
        "Натисніть кнопку нижче, щоб відкрити чат LimaxAI (**gpt-5.4**; нові моделі — "
        "у списку) і потренувати storyboard-промпти."
    ),
    "h_sum": "Підсумок",
    "sum_rows": [
        ("Пункт", ""),
        ("Нативна довжина", "30 секунд, один прохід"),
        ("Референси", "До 50 мультимодальних ассетів"),
        ("Роздільність", "Нативне 4K"),
        ("Монтаж", "Локалізований multishot-контроль"),
        ("Аудіо", "Lip sync + ambient SFX за один прохід"),
        ("Rollout", "Корпоративні пілоти; ширше — початок липня 2026"),
        ("Наступний крок", "Чернетка планів у ChatGPT; GPT на LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 зсуває AI-відео від «іграшки для коротких кліпів» до **робочих "
        "півхвилинних дублів**. Дисциплінований **GPT**-pre-production корисніший за "
        "полювання на кожну нову назву моделі."
    ),
}

# --- Polish ---
PACK_DATA["pl"] = {
    "intro": (
        "23 czerwca 2026 r. Volcano Engine (ByteDance) zaprezentowała na konferencji "
        "enterprise **Seedance 2.5**. Trzy liczby podsumowują upgrade: **natywne 30 sekund "
        "one-take**, **natywne wyjście 4K** i do **50 multimodalnych assetów referencyjnych** "
        "(postacie, produkty, kadrowanie, kolory marki, warstwy stylu) w jednej generacji."
    ),
    "keywords": "Słowa kluczowe: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Opublikowano: 23 czerwca 2026",
    "img_alt": "Premiera Seedance 2.5 30s one-take natywne 4K 50 referencji",
    "h_upgrade": "Seedance 2.5 vs 2.0: co się zmieniło",
    "upgrade_intro": (
        "Wiele narzędzi wideo AI nadal ogranicza pojedynczą generację do 5–15 sekund. "
        "Przy wydłużeniu timeline obraz „pływa”—twarze się deformują, światło skacze, "
        "kształty produktów się wypaczają. Seedance 2.5 przesuwa użyteczną linię bazową:"
    ),
    "upgrade_note": (
        "Volcano Engine zaktualizowała też **bazę Seedance 2.0** do natywnego 4K, więc "
        "obecni użytkownicy dostają ostrzejszy output, a 2.5 skupia się na dłuższych "
        "narracjach multishot i gęstszych referencjach."
    ),
    "h_duration": "30 sekund natywnie + 50 referencji: stabilny one-take",
    "duration_p1": (
        "**30 sekund w jednym przebiegu** to główna specyfikacja. Dla reklam, demo produktu "
        "i krótkich scen dramatycznych pół minuty to często minimalna użyteczna długość—"
        "krócej wymusza niezręczne cięcia w postprodukcji."
    ),
    "duration_p2": (
        "Aby utrzymać 30-sekundowy timeline, 2.5 przyjmuje do **50 assetów referencyjnych** "
        "naraz: character sheet, ujęcia produktu, palety marki, klatki storyboard, nawet "
        "warstwy stylu z brand guidelines. Precyzyjniejsze kotwice = mniej dryfu w czasie.\n\n"
        "Sugerowany podział 50 slotów:"
    ),
    "duration_table_hdr": ("Typ referencji", "Sugerowana liczba", "Rola"),
    "duration_rows": [
        ("Tożsamość postaci", "3–8", "Blokada twarzy, włosów, kolorów stroju"),
        ("Produkt/Logo", "2–5", "Zachowanie proporcji opakowania i czytelnych znaków"),
        ("Kadrowanie/Storyboard", "5–15", "Kluczowe kąty kamery i wielkości planów"),
        ("Styl/Grade", "1–3", "Look filmowy, kontrast, zakazane elementy"),
        ("Elastyczna rezerwa", "pozostałe sloty", "Rekwizyty i detale sceny wg potrzeb"),
    ],
    "duration_tail": (
        "Pisz prompty jako **timeline**, np. „0–5 s ustalenie sceny, 5–20 s główna akcja, "
        "20–30 s hero produktu”—skuteczniej niż stos przymiotników."
    ),
    "h_multishot": "Edycja multishot i kontrola lokalna: mniej re-rolli",
    "multishot_intro": (
        "Kto robi wideo AI, zna ból: poprawiasz detal i regenerujesz cały klip. Seedance 2.5 "
        "dodaje **lokalną edycję**, bliżej „napraw tylko ten panel storyboard”:"
    ),
    "multishot_b1": (
        "**Trwała ciągłość (Persistent Continuity)** — zmiana stroju, rekwizytów lub postaci "
        "przy zachowaniu światła tła, fizyki i kompozycji"
    ),
    "multishot_b2": (
        "**Kamera reżyserska (Director-Grade Camera)** — tracking, pan, dolly i krzywe "
        "prędkości jako parametry workflow, nie loteria promptów"
    ),
    "multishot_close": (
        "Dla zespołów reklamowych i e-commerce testy A/B SKU lub copy nie wymagają "
        "startu od zera za każdym razem."
    ),
    "h_audio": "Natywna synchronizacja AV, symulacja fizyki i pipeline 4K",
    "audio_intro": (
        "Dłuższe timeline skłoniły Volcano Engine do przebudowy **symulacji fizyki** "
        "i stosu dyfuzyjnego. Kluczowe zmiany AV w Seedance 2.5:"
    ),
    "audio_rows": [
        ("Możliwość", "Opis"),
        ("Lip sync fonemowy", "Dialog i kształt ust wyrównane w jednym renderze", ""),
        ("Ambient SFX", "Efekty i tło dopasowane do akcji na ekranie", ""),
        ("Natywne 4K", "Bezpośrednie wyjście 4K, nie tylko upscale", ""),
        ("Logika multishot", "Cięcia scen w modelu, nie sklejane w poście", ""),
    ],
    "audio_close": (
        "Piloty enterprise trwają; szerszy dostęp dla developerów i twórców spodziewany "
        "**na początku lipca 2026**."
    ),
    "h_demo": "Wideo demo",
    "demo_caption": (
        "Przykładowy output Seedance 2.5—około 30 sekund ciągłej pracy kamery multishot:"
    ),
    "h_gpt": "Tutorial GPT: storyboard w ChatGPT, potem Seedance",
    "gpt_steps": [
        ("Najpierw shot list", "Podziel 30 s na 6–8 beatów z planem, czasownikami kamery i timingiem"),
        ("Manifest referencji", "Przypisz 50 slotów do postaci, produktu, palety lub kadrowania"),
        ("Zablokuj słownictwo stylu", "Blok o obiektywie, grade i zakazanych elementach do każdego runu"),
        ("Iteruj w tekście", "Dopracuj scenariusz i boardy w ChatGPT przed GPU na wideo"),
    ],
    "gpt_extra": (
        "Jeśli używasz **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** w drodze) do copy "
        "i dekompozycji zadań, przenieś te same nawyki **gpt tutorial** do prep wideo."
    ),
    "gpt_close": (
        "Kliknij przycisk poniżej, aby otworzyć czat LimaxAI (**gpt-5.4**; nowsze modele "
        "na liście) i ćwicz prompty storyboard."
    ),
    "h_sum": "Podsumowanie",
    "sum_rows": [
        ("Pozycja", ""),
        ("Natywna długość", "30 sekund, jeden przebieg"),
        ("Referencje", "Do 50 assetów multimodalnych"),
        ("Rozdzielczość", "Natywne 4K"),
        ("Edycja", "Lokalna kontrola multishot"),
        ("Audio", "Lip sync + ambient SFX w jednym przebiegu"),
        ("Rollout", "Piloty enterprise; szerszy dostęp początek lipca 2026"),
        ("Następny krok", "Szkic planów w ChatGPT; GPT na LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 przesuwa wideo AI od „zabawki krótkich klipów” do **użytecznych "
        "30-sekundowych ujęć**. Dyscyplinowany **GPT** pre-production bije gonienie "
        "każdej nowej nazwy modelu."
    ),
}

# --- Dutch ---
PACK_DATA["nl"] = {
    "intro": (
        "Op 23 juni 2026 onthulde ByteDance's Volcano Engine **Seedance 2.5** op een "
        "enterprise-conferentie. Drie cijfers vatten de upgrade samen: **native 30 seconden "
        "one-take**, **native 4K-output** en tot **50 multimodale referentie-assets** "
        "(personages, producten, framing, merkkleuren, stijllagen) in één generatie."
    ),
    "keywords": "Trefwoorden: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Gepubliceerd: 23 juni 2026",
    "img_alt": "Seedance 2.5 launch 30s one-take native 4K 50 referenties",
    "h_upgrade": "Seedance 2.5 vs 2.0: wat is veranderd",
    "upgrade_intro": (
        "Veel AI-videotools beperken één generatie nog steeds tot 5–15 seconden. Verleng "
        "de timeline en beeld drijft af—gezichten vervormen, licht springt, productvormen "
        "verwarren. Seedance 2.5 duwt de bruikbare basis vooruit:"
    ),
    "upgrade_note": (
        "Volcano Engine upgrade ook de **Seedance 2.0-basis** naar native 4K, zodat "
        "bestaande gebruikers scherpere output krijgen terwijl 2.5 focust op langere "
        "multishot-verhalen en dichtere referentie-input."
    ),
    "h_duration": "30 seconden native + 50 referenties: one-take stabiel houden",
    "duration_p1": (
        "**30 seconden in één pass** is de headlinespec. Voor ads, productdemo's en "
        "korte dramascènes is een halve minuut vaak de minimale bruikbare lengte—korter "
        "dwingt onhandige cuts in post."
    ),
    "duration_p2": (
        "Om een 30-seconden-timeline stabiel te houden, accepteert 2.5 tot **50 "
        "referentie-assets** tegelijk: character sheets, productshots, merkpaletten, "
        "storyboardframes, zelfs stijllagen uit brand guidelines. Preciezere ankers "
        "betekenen minder drift over tijd.\n\n"
        "Voorgestelde slotverdeling:"
    ),
    "duration_table_hdr": ("Referentietype", "Aanbevolen aantal", "Rol"),
    "duration_rows": [
        ("Personage-identiteit", "3–8", "Gezicht, haar, kledingkleuren vastzetten"),
        ("Product/Logo", "2–5", "Verpakkingverhouding en merktekens helder houden"),
        ("Framing/Storyboard", "5–15", "Belangrijke camerahoeken en shotgroottes"),
        ("Stijl/Grade", "1–3", "Filmlook, contrast, verboden elementen"),
        ("Flexibele reserve", "overige slots", "Props en scènedetails naar behoefte"),
    ],
    "duration_tail": (
        "Schrijf prompts als **timeline**, bijv. „0–5 s scène opzetten, 5–20 s hoofdactie, "
        "20–30 s producthero”—effectiever dan bijvoeglijke naamwoorden stapelen."
    ),
    "h_multishot": "Multishot-bewerking en lokale controle: minder re-rolls",
    "multishot_intro": (
        "Wie AI-video maakt kent de pijn: één detail aanpassen en de hele clip opnieuw "
        "genereren. Seedance 2.5 voegt **gelokaliseerde bewerking** toe, dichter bij "
        "„alleen dit storyboardpaneel fixen”:"
    ),
    "multishot_b1": (
        "**Persistente continuïteit (Persistent Continuity)** — kleding, props of personage "
        "wisselen terwijl achtergrondlicht, fysica en compositie blijven"
    ),
    "multishot_b2": (
        "**Regie-camera (Director-Grade Camera)** — tracking, pannen, dolly en "
        "snelheidscurves als workflowparameters, geen promptloterij"
    ),
    "multishot_close": (
        "Voor ad- en e-commerceteams betekent A/B-testen van SKU's of copy niet meer "
        "elke keer opnieuw beginnen."
    ),
    "h_audio": "Native AV-sync, fysicasimulatie en 4K-pipeline",
    "audio_intro": (
        "Langere timelines lieten Volcano Engine **fysicasimulatie** en de diffusiestack "
        "herontwerpen. Belangrijkste AV-wijzigingen in Seedance 2.5:"
    ),
    "audio_rows": [
        ("Mogelijkheid", "Functie"),
        ("Fonem-lipsync", "Dialoog en mondshape in één renderpass uitgelijnd", ""),
        ("Ambient SFX", "Actie-gematchte effecten en achtergrondbeds", ""),
        ("Native 4K", "Directe 4K-output, niet alleen upscale", ""),
        ("Multishot-logica", "Scènewissels in het model, niet in post geplakt", ""),
    ],
    "audio_close": (
        "Enterprise-piloten lopen; bredere toegang voor developers en creators verwacht "
        "**begin juli 2026**."
    ),
    "h_demo": "Demovideo",
    "demo_caption": (
        "Voorbeeldoutput Seedance 2.5—ongeveer 30 seconden continue multishot-camerawerk:"
    ),
    "h_gpt": "GPT-tutorial: storyboard in ChatGPT, dan Seedance",
    "gpt_steps": [
        ("Shotlist eerst", "30 s in 6–8 beats met shotgrootte, camera-werkwoorden en timing"),
        ("Referentie-manifest", "Alle 50 slots mappen naar personage, product, palette of framing"),
        ("Stijlvocabulaire vast", "Blok over lens, grade en verboden elementen elke run hergebruiken"),
        ("Itereren in tekst", "Script en boards polijsten in ChatGPT vóór GPU op video"),
    ],
    "gpt_extra": (
        "Gebruik je al **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** onderweg) voor copy "
        "en taakopsplitsing, neem dezelfde **gpt tutorial**-gewoontes mee naar videoprep."
    ),
    "gpt_close": (
        "Klik de knop hieronder voor LimaxAI-chat (**gpt-5.4**; kies nieuwere modellen "
        "in de lijst) en oefen storyboard-prompts."
    ),
    "h_sum": "Samenvatting",
    "sum_rows": [
        ("Item", ""),
        ("Native lengte", "30 seconden, één pass"),
        ("Referenties", "Tot 50 multimodale assets"),
        ("Resolutie", "Native 4K"),
        ("Bewerking", "Gelokaliseerde multishot-controles"),
        ("Audio", "Lipsync + ambient SFX in één pass"),
        ("Rollout", "Enterprise-piloten; breder begin juli 2026"),
        ("Volgende stap", "Shots in ChatGPT; GPT op LimaxAI proberen"),
    ],
    "sum_line": (
        "Seedance 2.5 duwt AI-video van „kort clip-speeltje” naar **bruikbare halve-minuut "
        "takes**. Een gedisciplineerde **GPT** pre-productieflow verslaat achter elk "
        "nieuw modelnaam aanrennen."
    ),
}

# --- Swedish ---
PACK_DATA["sv"] = {
    "intro": (
        "Den 23 juni 2026 presenterade ByteDances Volcano Engine **Seedance 2.5** på "
        "sin företagskonferens. Tre siffror sammanfattar uppgraderingen: **native 30 "
        "sekunder one-take**, **native 4K-output** och upp till **50 multimodala "
        "referensassets** (karaktärer, produkter, inramning, varumärkesfärger, stilager) "
        "i en generation."
    ),
    "keywords": "Nyckelord: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Publicerad: 23 juni 2026",
    "img_alt": "Seedance 2.5 lansering 30s one-take native 4K 50 referenser",
    "h_upgrade": "Seedance 2.5 vs 2.0: vad som ändrats",
    "upgrade_intro": (
        "Många AI-videoverktyg begränsar fortfarande en generation till 5–15 sekunder. "
        "Förläng tidslinjen så driver bilden—ansikten förvrängs, ljuset hoppar, "
        "produktformer förvrids. Seedance 2.5 flyttar den användbara baslinjen:"
    ),
    "upgrade_note": (
        "Volcano Engine uppgraderade också **Seedance 2.0-basen** till native 4K, så "
        "befintliga användare får skarpare output medan 2.5 fokuserar på längre "
        "multishot-berättelser och tätare referensinput."
    ),
    "h_duration": "30 sekunder native + 50 referenser: håll one-take stabil",
    "duration_p1": (
        "**30 sekunder i ett pass** är huvudspecen. För reklam, produktdemo och korta "
        "dramabitar är en halvminut ofta minimilängden—kortare tvingar klumpiga klipp i post."
    ),
    "duration_p2": (
        "För att hålla en 30-sekunders tidslinje stabil tar 2.5 emot upp till **50 "
        "referensassets** samtidigt: karaktärsark, produktbilder, varumärkespaletter, "
        "storyboardrutor, till och med stilager från brand guidelines. Mer precisa "
        "ankare betyder mindre drift över tid.\n\n"
        "Föreslagen slotfördelning:"
    ),
    "duration_table_hdr": ("Referenstyp", "Föreslaget antal", "Roll"),
    "duration_rows": [
        ("Karaktärsidentitet", "3–8", "Lås ansikte, hår, klädfärger"),
        ("Produkt/Logo", "2–5", "Behåll förpackningsratio och tydliga märken"),
        ("Inramning/Storyboard", "5–15", "Viktiga kameravinklar och bildstorlekar"),
        ("Stil/Grade", "1–3", "Filmlook, kontrast, förbjudna element"),
        ("Flexibel reserv", "återstående slots", "Rekvisita och scen detaljer vid behov"),
    ],
    "duration_tail": (
        "Skriv prompts som **tidslinje**, t.ex. „0–5 s etablera scen, 5–20 s huvudaction, "
        "20–30 s produkthjälte”—effektivare än att stapla adjektiv."
    ),
    "h_multishot": "Multishot-redigering och lokal kontroll: färre omkörningar",
    "multishot_intro": (
        "Alla som gör AI-video känner igen smärtan: justera en detalj och generera om "
        "hela klippet. Seedance 2.5 lägger till **lokaliserad redigering**, närmare "
        "„fixa bara den här storyboardpanelen”:"
    ),
    "multishot_b1": (
        "**Beständig kontinuitet (Persistent Continuity)** — byt kläder, rekvisita eller "
        "karaktär med bibehållen bakgrundsbelysning, fysik och komposition"
    ),
    "multishot_b2": (
        "**Regissörskamera (Director-Grade Camera)** — tracking, panorer, dolly och "
        "hastighetskurvor som workflowparametrar, inte promptlotteri"
    ),
    "multishot_close": (
        "För reklam- och e-handelsteam betyder A/B-test av SKU eller copy inte längre "
        "att börja om från noll varje gång."
    ),
    "h_audio": "Native AV-sync, fysiksimulering och 4K-pipeline",
    "audio_intro": (
        "Längre tidslinjer fick Volcano Engine att bygga om **fysiksimulering** och "
        "diffusionsstacken. Viktiga AV-förändringar i Seedance 2.5:"
    ),
    "audio_rows": [
        ("Förmåga", "Funktion"),
        ("Fonem-lipsync", "Dialog och munform i linje i ett renderpass", ""),
        ("Ambient SFX", "Actionmatchade effekter och bakgrundslager", ""),
        ("Native 4K", "Direkt 4K-output, inte bara upscale", ""),
        ("Multishot-logik", "Scenklipp orkestrerade i modellen, inte ihopklippta i post", ""),
    ],
    "audio_close": (
        "Enterprise-piloter pågår; bredare tillgång för utvecklare och kreatörer väntas "
        "**i början av juli 2026**."
    ),
    "h_demo": "Demovideo",
    "demo_caption": (
        "Exempeloutput från Seedance 2.5—cirka 30 sekunder kontinuerlig multishot-kamera:"
    ),
    "h_gpt": "GPT-tutorial: storyboard i ChatGPT, sedan Seedance",
    "gpt_steps": [
        ("Shotlista först", "Dela 30 s i 6–8 beats med bildstorlek, kameraverb och timing"),
        ("Referensmanifest", "Mappa alla 50 slots till karaktär, produkt, palett eller inramning"),
        ("Lås stilordförråd", "Block om objektiv, grade och förbjudna element återanvänds varje körning"),
        ("Iterera i text", "Polera manus och boards i ChatGPT innan GPU på video"),
    ],
    "gpt_extra": (
        "Om du redan använder **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** på gång) "
        "för copy och uppgiftsuppdelning, ta samma **gpt tutorial**-vanor till videoförberedelse."
    ),
    "gpt_close": (
        "Klicka knappen nedan för LimaxAI-chatt (**gpt-5.4**; välj nyare modeller i listan) "
        "och öva storyboard-prompts."
    ),
    "h_sum": "Sammanfattning",
    "sum_rows": [
        ("Post", ""),
        ("Native längd", "30 sekunder, ett pass"),
        ("Referenser", "Upp till 50 multimodala assets"),
        ("Upplösning", "Native 4K"),
        ("Redigering", "Lokaliserade multishot-kontroller"),
        ("Ljud", "Lipsync + ambient SFX i ett pass"),
        ("Rollout", "Enterprise-piloter; bredare början juli 2026"),
        ("Nästa steg", "Skissa shots i ChatGPT; prova GPT på LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 flyttar AI-video från „kortklippsleksak” mot **användbara "
        "halvminutstagningar**. Ett disciplinerat **GPT**-förarbetsflöde slår att jaga "
        "varje nytt modellnamn."
    ),
}

# --- Romanian ---
PACK_DATA["ro"] = {
    "intro": (
        "Pe 23 iunie 2026, Volcano Engine (ByteDance) a prezentat **Seedance 2.5** la "
        "conferința enterprise. Trei cifre rezumă upgrade-ul: **30 de secunde native "
        "one-take**, **output 4K nativ** și până la **50 de asset-uri de referință "
        "multimodale** (personaje, produse, cadru, culori de brand, straturi de stil) "
        "într-o singură generare."
    ),
    "keywords": "Cuvinte cheie: chatgpt, GPT-5.6, tutorial gpt, seedance 2.5.",
    "published": "Publicat: 23 iunie 2026",
    "img_alt": "Lansare Seedance 2.5 30s one-take 4K nativ 50 referințe",
    "h_upgrade": "Seedance 2.5 vs 2.0: ce s-a schimbat",
    "upgrade_intro": (
        "Multe instrumente video AI limitează încă o generare la 5–15 secunde. "
        "Prelungind timeline-ul, imaginea derivă—fețe se deformează, lumina sare, "
        "produsele își schimbă forma. Seedance 2.5 împinge linia de bază utilizabilă:"
    ),
    "upgrade_note": (
        "Volcano Engine a actualizat și **baza Seedance 2.0** la 4K nativ, astfel "
        "utilizatorii existenți obțin output mai clar, iar 2.5 se concentrează pe "
        "narațiuni multishot mai lungi și referințe mai dense."
    ),
    "h_duration": "30 secunde native + 50 referințe: one-take stabil",
    "duration_p1": (
        "**30 de secunde într-un singur pass** este specificația principală. Pentru "
        "reclame, demo-uri de produs și scene scurte, jumătate de minut e adesea "
        "lungimea minimă utilizabilă—mai scurt impune tăieturi stângace în post."
    ),
    "duration_p2": (
        "Pentru a menține un timeline de 30 secunde, 2.5 acceptă până la **50 asset-uri "
        "de referință** deodată: fișe personaj, cadre produs, palete brand, frame-uri "
        "storyboard, chiar straturi de stil din brand guidelines. Ancore mai precise "
        "înseamnă mai puțin drift în timp.\n\n"
        "Alocare sugerată a celor 50 sloturi:"
    ),
    "duration_table_hdr": ("Tip referință", "Număr sugerat", "Rol"),
    "duration_rows": [
        ("Identitate personaj", "3–8", "Fixează față, păr, culori costum"),
        ("Produs/Logo", "2–5", "Păstrează raport ambalaj și mărci clare"),
        ("Cadru/Storyboard", "5–15", "Unghiuri cameră și dimensiuni plan cheie"),
        ("Stil/Grade", "1–3", "Look film, contrast, elemente interzise"),
        ("Rezervă flexibilă", "sloturi rămase", "Props și detalii scenă după nevoie"),
    ],
    "duration_tail": (
        "Scrie prompturi ca **timeline**, ex. „0–5 s stabilește scena, 5–20 s acțiune "
        "principală, 20–30 s hero produs”—mai eficient decât adjective stivuite."
    ),
    "h_multishot": "Editare multishot și control local: mai puține re-generări",
    "multishot_intro": (
        "Cine face video AI știe durerea: ajustezi un detaliu și regenerezi tot clipul. "
        "Seedance 2.5 adaugă **editare localizată**, mai aproape de „repară doar acest "
        "panou storyboard”:"
    ),
    "multishot_b1": (
        "**Continuitate persistentă (Persistent Continuity)** — schimbă haine, props "
        "sau personaj păstrând lumina de fundal, fizica și compoziția"
    ),
    "multishot_b2": (
        "**Cameră de regizor (Director-Grade Camera)** — tracking, pan, dolly și "
        "curbe de viteză ca parametri workflow, nu loterie de prompt"
    ),
    "multishot_close": (
        "Pentru echipe de publicitate și e-commerce, testele A/B pe SKU sau copy "
        "nu mai înseamnă să reîncepi de la zero de fiecare dată."
    ),
    "h_audio": "Sync AV nativ, simulare fizică și pipeline 4K",
    "audio_intro": (
        "Timeline-uri mai lungi au determinat Volcano Engine să refacă **simularea "
        "fizică** și stack-ul de difuzie. Schimbări AV cheie în Seedance 2.5:"
    ),
    "audio_rows": [
        ("Capacitate", "Funcție"),
        ("Lip sync fonemic", "Dialog și formă gură aliniate într-un singur render", ""),
        ("SFX ambient", "Efecte și fundal potrivite acțiunii de pe ecran", ""),
        ("4K nativ", "Output 4K direct, nu doar upscale", ""),
        ("Logică multishot", "Tăieturi scenă orchestrate în model, nu lipite în post", ""),
    ],
    "audio_close": (
        "Pilot enterprise în desfășurare; acces mai larg pentru developeri și creatori "
        "așteptat **începutul lui iulie 2026**."
    ),
    "h_demo": "Video demo",
    "demo_caption": (
        "Output exemplu Seedance 2.5—circa 30 secunde de lucru cameră multishot continuu:"
    ),
    "h_gpt": "Tutorial GPT: storyboard în ChatGPT, apoi Seedance",
    "gpt_steps": [
        ("Shot list mai întâi", "Împarte 30 s în 6–8 beat-uri cu plan, verbe cameră și timing"),
        ("Manifest referințe", "Mapează cele 50 sloturi la personaj, produs, paletă sau cadru"),
        ("Blochează vocabular stil", "Bloc despre obiectiv, grade și elemente interzise reutilizat"),
        ("Iterează în text", "Polizează script și board-uri în ChatGPT înainte de GPU pe video"),
    ],
    "gpt_extra": (
        "Dacă folosești deja **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** pe drum) "
        "pentru copy și descompunere task-uri, transferă aceleași obiceiuri **tutorial gpt** "
        "în prep video."
    ),
    "gpt_close": (
        "Apasă butonul de mai jos pentru chat LimaxAI (**gpt-5.4**; alege modele noi "
        "din listă) și exersează prompturi storyboard."
    ),
    "h_sum": "Rezumat",
    "sum_rows": [
        ("Element", ""),
        ("Lungime nativă", "30 secunde, un pass"),
        ("Referințe", "Până la 50 asset-uri multimodale"),
        ("Rezoluție", "4K nativ"),
        ("Editare", "Controale multishot localizate"),
        ("Audio", "Lip sync + SFX ambient într-un pass"),
        ("Rollout", "Pilot enterprise; acces larg început iulie 2026"),
        ("Pas următor", "Schiță planuri în ChatGPT; încearcă GPT pe LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 împinge video AI de la „jucărie clip scurt” spre **take-uri "
        "utilizabile de jumătate de minut**. Un flux **GPT** de pre-producție disciplinat "
        "bate goana după fiecare nume de model nou."
    ),
}

# --- Arabic ---
PACK_DATA["ar"] = {
    "intro": (
        "في 23 يونيو 2026، كشفت Volcano Engine التابعة لـ ByteDance عن **Seedance 2.5** "
        "في مؤتمرها للمؤسسات. ثلاثة أرقام تلخص الترقية: **30 ثانية أصلية بلقطة واحدة**، "
        "**إخراج 4K أصلي**، وحتى **50 أصل مرجعي متعدد الوسائط** (شخصيات، منتجات، "
        "تأطير، ألوان العلامة، طبقات أسلوب) في توليد واحد."
    ),
    "keywords": "الكلمات المفتاحية: chatgpt، GPT-5.6، gpt tutorial، seedance 2.5.",
    "published": "تاريخ النشر: 23 يونيو 2026",
    "img_alt": "إطلاق Seedance 2.5 30 ثانية لقطة واحدة 4K أصلي 50 مرجع",
    "h_upgrade": "Seedance 2.5 مقابل 2.0: ما الذي تغيّر",
    "upgrade_intro": (
        "لا تزال أدوات الفيديو بالذكاء الاصطناعي تحدّ التوليد الواحد بـ 5–15 ثانية. "
        "عند إطالة الجدول الزمني تنجرف الصورة—الوجوه تتشوه، الضوء يقفز، أشكال المنتجات "
        "تتغير. Seedance 2.5 يدفع خط الأساس القابل للاستخدام:"
    ),
    "upgrade_note": (
        "Volcano Engine رقّت أيضاً **قاعدة Seedance 2.0** إلى 4K أصلي، فيحصل المستخدمون "
        "الحاليون على مخرجات أوضح بينما يركز 2.5 على سرد multishot أطول ومراجع أكثر كثافة."
    ),
    "h_duration": "30 ثانية أصلية + 50 مرجع: استقرار اللقطة الواحدة",
    "duration_p1": (
        "**30 ثانية في مرور واحد** هي المواصفة الرئيسية. للإعلانات وعروض المنتجات "
        "ومشاهد الدراما القصيرة، نصف دقيقة غالباً الحد الأدنى القابل للاستخدام—أقصر "
        "من ذلك يفرض قصات غير مريحة في ما بعد الإنتاج."
    ),
    "duration_p2": (
        "لتثبيت جدول 30 ثانية، يقبل 2.5 حتى **50 أصل مرجعي** دفعة واحدة: أوراق الشخصية، "
        "لقطات المنتج، لوحات العلامة، إطارات storyboard، حتى طبقات أسلوب من إرشادات "
        "العلامة. مراسي أدق تعني انجرافاً أقل مع الوقت.\n\n"
        "توزيع مقترح للـ 50 خانة:"
    ),
    "duration_table_hdr": ("نوع المرجع", "العدد المقترح", "الدور"),
    "duration_rows": [
        ("هوية الشخصية", "3–8", "تثبيت الوجه والشعر وألوان الملابس"),
        ("منتج/Logo", "2–5", "الحفاظ على نسبة التغليف ووضوح العلامات"),
        ("تأطير/Storyboard", "5–15", "زوايا الكاميرا وأحجام اللقطات الرئيسية"),
        ("أسلوب/Grade", "1–3", "مظهر سينمائي، تباين، عناصر ممنوعة"),
        ("احتياطي مرن", "الخانات المتبقية", "ديكور وتفاصيل المشهد حسب الحاجة"),
    ],
    "duration_tail": (
        "اكتب المطالبات كـ **جدول زمني**، مثلاً: «0–5 ث إعداد المشهد، 5–20 ث الحركة "
        "الرئيسية، 20–30 ث بطل المنتج»—أكثر فعالية من تكديس الصفات."
    ),
    "h_multishot": "تحرير multishot والتحكم المحلي: إعادة توليد أقل",
    "multishot_intro": (
        "من يصنع فيديو بالذكاء الاصطناعي يعرف الألم: تعديل تفصيل واحد وإعادة توليد "
        "المقطع كاملاً. Seedance 2.5 يضيف **تحريراً محلياً**، أقرب إلى «إصلاح هذه "
        "لوحة storyboard فقط»:"
    ),
    "multishot_b1": (
        "**استمرارية دائمة (Persistent Continuity)** — تبديل الملابس أو الديكور أو "
        "الشخصية مع الحفاظ على إضاءة الخلفية والفيزياء والتكوين"
    ),
    "multishot_b2": (
        "**كاميرا بمستوى المخرج (Director-Grade Camera)** — تتبع، pan، dolly "
        "ومنحنيات السرعة كمعاملات workflow وليس يانصيب prompt"
    ),
    "multishot_close": (
        "لفرق الإعلان والتجارة الإلكترونية، اختبار A/B لـ SKU أو النص لا يعني "
        "البدء من الصفر في كل مرة."
    ),
    "h_audio": "مزامنة AV أصلية، محاكاة فيزيائية وخط 4K",
    "audio_intro": (
        "الجداول الأطول دفعت Volcano Engine لإعادة تصميم **المحاكاة الفيزيائية** "
        "ومكدس الانتشار. التغييرات AV الرئيسية في Seedance 2.5:"
    ),
    "audio_rows": [
        ("القدرة", "الوظيفة"),
        ("مزامنة شفاه بالفونيمات", "الحوار وشكل الفم متوافقان في render واحد", ""),
        ("SFX محيطة", "مؤثرات وخلفيات متوافقة مع الحركة على الشاشة", ""),
        ("4K أصلي", "إخراج 4K مباشر وليس upscale فقط", ""),
        ("منطق multishot", "قصات المشهد داخل النموذج وليس لصقاً في ما بعد", ""),
    ],
    "audio_close": (
        "تجارب المؤسسات جارية؛ وصول أوسع للمطورين والمبدعين متوقع **أوائل يوليو 2026**."
    ),
    "h_demo": "فيديو تجريبي",
    "demo_caption": (
        "مخرجات نموذجية من Seedance 2.5—حوالي 30 ثانية من عمل كاميرا multishot متواصل:"
    ),
    "h_gpt": "دليل GPT: storyboard في ChatGPT ثم Seedance",
    "gpt_steps": [
        ("قائمة اللقطات أولاً", "قسّم 30 ث إلى 6–8 beats مع حجم اللقطة وأفعال الكاميرا والتوقيت"),
        ("بيان المراجع", "وزّع الـ 50 خانة على شخصية، منتج، لوحة ألوان أو تأطير"),
        ("ثبّت مفردات الأسلوب", "كتلة عن العدسة والgrade والعناصر الممنوعة تُعاد كل مرة"),
        ("كرّر في النص", "صقل السيناريو والـ boards في ChatGPT قبل GPU للفيديو"),
    ],
    "gpt_extra": (
        "إذا كنت تستخدم **ChatGPT** (**GPT-5.4 / GPT-5.5**، **GPT-5.6** قادم) للنصوص "
        "وتقسيم المهام، انقل عادات **gpt tutorial** نفسها إلى تحضير الفيديو."
    ),
    "gpt_close": (
        "اضغط الزر أدناه لفتح دردشة LimaxAI (**gpt-5.4**؛ اختر نماذج أحدث من القائمة) "
        "وتدرّب على مطالبات storyboard."
    ),
    "h_sum": "ملخص",
    "sum_rows": [
        ("البند", ""),
        ("الطول الأصلي", "30 ثانية، مرور واحد"),
        ("المراجع", "حتى 50 أصل multimodal"),
        ("الدقة", "4K أصلي"),
        ("التحرير", "تحكم multishot محلي"),
        ("الصوت", "مزامنة شفاه + SFX محيطة في مرور واحد"),
        ("الإطلاق", "تجارب مؤسسات؛ أوسع أوائل يوليو 2026"),
        ("الخطوة التالية", "مسودة لقطات في ChatGPT؛ جرّب GPT على LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 يدفع فيديو الذكاء الاصطناعي من «لعبة مقاطع قصيرة» نحو **لقطات "
        "نصف دقيقة قابلة للاستخدام**. تدفق **GPT** منضبط في ما قبل الإنتاج أفضل من "
        "مطاردة كل اسم نموذج جديد."
    ),
}

# --- Indonesian ---
PACK_DATA["id"] = {
    "intro": (
        "Pada 23 Juni 2026, Volcano Engine ByteDance meluncurkan **Seedance 2.5** di "
        "konferensi enterprise. Tiga angka merangkum upgrade: **30 detik native one-take**, "
        "**output 4K native**, dan hingga **50 aset referensi multimodal** (karakter, "
        "produk, framing, warna brand, lapisan gaya) dalam satu generasi."
    ),
    "keywords": "Kata kunci: chatgpt, GPT-5.6, tutorial gpt, seedance 2.5.",
    "published": "Diterbitkan: 23 Juni 2026",
    "img_alt": "Peluncuran Seedance 2.5 30dtk one-take 4K native 50 referensi",
    "h_upgrade": "Seedance 2.5 vs 2.0: apa yang berubah",
    "upgrade_intro": (
        "Banyak alat video AI masih membatasi satu generasi ke 5–15 detik. Perpanjang "
        "timeline dan visual drift—wajah berubah, cahaya loncat, bentuk produk melengkung. "
        "Seedance 2.5 mendorong baseline yang bisa dipakai:"
    ),
    "upgrade_note": (
        "Volcano Engine juga meng-upgrade **basis Seedance 2.0** ke 4K native, sehingga "
        "pengguna lama dapat output lebih tajam sementara 2.5 fokus pada cerita multishot "
        "lebih panjang dan input referensi lebih padat."
    ),
    "h_duration": "30 detik native + 50 referensi: stabilkan one-take",
    "duration_p1": (
        "**30 detik dalam satu pass** adalah spesifikasi utama. Untuk iklan, demo produk, "
        "dan adegan drama pendek, setengah menit sering batas minimum yang bisa dipakai—"
        "lebih pendek memaksa potongan canggung di post."
    ),
    "duration_p2": (
        "Untuk menahan timeline 30 detik, 2.5 menerima hingga **50 aset referensi** "
        "sekaligus: character sheet, foto produk, palet brand, frame storyboard, bahkan "
        "lapisan gaya dari brand guidelines. Jangkar lebih presisi berarti drift lebih "
        "sedikit seiring waktu.\n\n"
        "Alokasi slot 50 yang disarankan:"
    ),
    "duration_table_hdr": ("Jenis referensi", "Jumlah disarankan", "Peran"),
    "duration_rows": [
        ("Identitas karakter", "3–8", "Kunci wajah, rambut, warna kostum"),
        ("Produk/Logo", "2–5", "Jaga proporsi kemasan dan tanda jelas"),
        ("Framing/Storyboard", "5–15", "Sudut kamera dan ukuran shot utama"),
        ("Gaya/Grade", "1–3", "Look film, kontras, elemen terlarang"),
        ("Cadangan fleksibel", "slot tersisa", "Properti dan detail adegan sesuai kebutuhan"),
    ],
    "duration_tail": (
        "Tulis prompt sebagai **timeline**, mis. «0–5 dtk bangun adegan, 5–20 dtk aksi "
        "utama, 20–30 dtk hero produk»—lebih efektif daripada menumpuk kata sifat."
    ),
    "h_multishot": "Editing multishot dan kontrol lokal: lebih sedikit re-roll",
    "multishot_intro": (
        "Siapa pun yang buat video AI paham sakitnya: ubah satu detail, generate ulang "
        "seluruh klip. Seedance 2.5 menambah **editing terlokalisasi**, lebih dekat ke "
        "«perbaiki panel storyboard ini saja»:"
    ),
    "multishot_b1": (
        "**Kontinuitas persisten (Persistent Continuity)** — ganti pakaian, properti, "
        "atau karakter sambil menjaga cahaya latar, fisika, dan komposisi"
    ),
    "multishot_b2": (
        "**Kamera tingkat sutradara (Director-Grade Camera)** — tracking, pan, dolly "
        "dan kurva kecepatan sebagai parameter workflow, bukan lotre prompt"
    ),
    "multishot_close": (
        "Untuk tim iklan dan e-commerce, uji A/B SKU atau copy tidak lagi berarti "
        "mulai dari nol setiap kali."
    ),
    "h_audio": "Sinkron AV native, simulasi fisika, dan pipeline 4K",
    "audio_intro": (
        "Timeline lebih panjang mendorong Volcano Engine merancang ulang **simulasi fisika** "
        "dan stack difusi. Perubahan AV utama Seedance 2.5:"
    ),
    "audio_rows": [
        ("Kemampuan", "Fungsi"),
        ("Lip sync fonem", "Dialog dan bentuk mulut selaras dalam satu render", ""),
        ("SFX ambient", "Efek dan bed latar sesuai aksi di layar", ""),
        ("4K native", "Output 4K langsung, bukan upscale saja", ""),
        ("Logika multishot", "Potong adegan diorkestrasi dalam model, bukan tempel di post", ""),
    ],
    "audio_close": (
        "Pilot enterprise berjalan; akses lebih luas untuk developer dan kreator diharapkan "
        "**awal Juli 2026**."
    ),
    "h_demo": "Video demo",
    "demo_caption": (
        "Contoh output Seedance 2.5—sekitar 30 detik kerja kamera multishot berkelanjutan:"
    ),
    "h_gpt": "Tutorial GPT: storyboard di ChatGPT, lalu Seedance",
    "gpt_steps": [
        ("Shot list dulu", "Bagi 30 dtk jadi 6–8 beat dengan ukuran shot, kata kerja kamera, timing"),
        ("Manifest referensi", "Petakan 50 slot ke karakter, produk, palet, atau framing"),
        ("Kunci kosakata gaya", "Blok lensa, grade, elemen terlarang dipakai ulang setiap run"),
        ("Iterasi dalam teks", "Poles skrip dan board di ChatGPT sebelum GPU untuk video"),
    ],
    "gpt_extra": (
        "Jika sudah pakai **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** segera) untuk "
        "copy dan pemecahan tugas, bawa kebiasaan **tutorial gpt** yang sama ke prep video."
    ),
    "gpt_close": (
        "Klik tombol di bawah untuk buka chat LimaxAI (**gpt-5.4**; pilih model baru "
        "di daftar) dan latih prompt storyboard."
    ),
    "h_sum": "Ringkasan",
    "sum_rows": [
        ("Item", ""),
        ("Panjang native", "30 detik, satu pass"),
        ("Referensi", "Hingga 50 aset multimodal"),
        ("Resolusi", "4K native"),
        ("Editing", "Kontrol multishot terlokalisasi"),
        ("Audio", "Lip sync + SFX ambient dalam satu pass"),
        ("Rollout", "Pilot enterprise; akses luas awal Juli 2026"),
        ("Langkah berikutnya", "Draft shot di ChatGPT; coba GPT di LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 mendorong video AI dari «mainan klip pendek» menuju **take setengah "
        "menit yang bisa dipakai**. Alur pre-produksi **GPT** disiplin mengalahkan "
        "mengejar setiap nama model baru."
    ),
}

# --- Malay ---
PACK_DATA["ms"] = {
    "intro": (
        "Pada 23 Jun 2026, Volcano Engine ByteDance melancarkan **Seedance 2.5** di "
        "persidangan enterprise. Tiga nombor merumuskan naik taraf: **30 saat native "
        "one-take**, **output 4K native**, dan sehingga **50 aset rujukan multimodal** "
        "(watak, produk, framing, warna jenama, lapisan gaya) dalam satu generasi."
    ),
    "keywords": "Kata kunci: chatgpt, GPT-5.6, tutorial gpt, seedance 2.5.",
    "published": "Diterbitkan: 23 Jun 2026",
    "img_alt": "Pelancaran Seedance 2.5 30s one-take 4K native 50 rujukan",
    "h_upgrade": "Seedance 2.5 vs 2.0: apa yang berubah",
    "upgrade_intro": (
        "Banyak alat video AI masih hadkan satu generasi kepada 5–15 saat. Panjangkan "
        "timeline dan visual drift—muka berubah, cahaya melompat, bentuk produk herot. "
        "Seedance 2.5 tolak garis asas boleh guna ke hadapan:"
    ),
    "upgrade_note": (
        "Volcano Engine juga naik taraf **asas Seedance 2.0** ke 4K native, jadi pengguna "
        "sedia ada dapat output lebih tajam manakala 2.5 fokus cerita multishot lebih "
        "panjang dan input rujukan lebih padat."
    ),
    "h_duration": "30 saat native + 50 rujukan: kekalkan one-take stabil",
    "duration_p1": (
        "**30 saat dalam satu pass** ialah spesifikasi utama. Untuk iklan, demo produk "
        "dan adegan drama pendek, separuh minit selalunya panjang minimum boleh guna—"
        "lebih pendek memaksa potongan janggal dalam post."
    ),
    "duration_p2": (
        "Untuk kekalkan timeline 30 saat, 2.5 terima sehingga **50 aset rujukan** "
        "serentak: character sheet, gambar produk, palet jenama, bingkai storyboard, "
        "malah lapisan gaya dari brand guidelines. Sauh lebih tepat bermakna drift "
        "kurang mengikut masa.\n\n"
        "Peruntukan slot 50 yang dicadangkan:"
    ),
    "duration_table_hdr": ("Jenis rujukan", "Kuantiti dicadang", "Peranan"),
    "duration_rows": [
        ("Identiti watak", "3–8", "Kunci muka, rambut, warna pakaian"),
        ("Produk/Logo", "2–5", "Kekalkan nisbah pembungkusan dan tanda jelas"),
        ("Framing/Storyboard", "5–15", "Sudut kamera dan saiz shot utama"),
        ("Gaya/Grade", "1–3", "Look filem, kontras, elemen dilarang"),
        ("Rizab fleksibel", "slot baki", "Prop dan butiran adegan mengikut keperluan"),
    ],
    "duration_tail": (
        "Tulis prompt sebagai **timeline**, cth. «0–5 s bina adegan, 5–20 s aksi utama, "
        "20–30 s hero produk»—lebih berkesan daripada timbun adjektif."
    ),
    "h_multishot": "Suntingan multishot dan kawalan tempatan: kurang re-roll",
    "multishot_intro": (
        "Sesiapa buat video AI faham kesakitan: ubah satu butiran, jana semula seluruh "
        "klip. Seedance 2.5 tambah **suntingan terlokalisasi**, lebih hampir «betulkan "
        "panel storyboard ini sahaja»:"
    ),
    "multishot_b1": (
        "**Kesinambungan kekal (Persistent Continuity)** — tukar pakaian, prop atau "
        "watak sambil kekalkan cahaya latar, fizik dan komposisi"
    ),
    "multishot_b2": (
        "**Kamera aras pengarah (Director-Grade Camera)** — tracking, pan, dolly "
        "dan lengkung kelajuan sebagai parameter workflow, bukan loteri prompt"
    ),
    "multishot_close": (
        "Untuk pasukan iklan dan e-dagang, ujian A/B SKU atau copy tidak lagi bermaksud "
        "mula dari sifar setiap kali."
    ),
    "h_audio": "Segerak AV native, simulasi fizik dan pipeline 4K",
    "audio_intro": (
        "Timeline lebih panjang mendorong Volcano Engine reka semula **simulasi fizik** "
        "dan stack difusi. Perubahan AV utama Seedance 2.5:"
    ),
    "audio_rows": [
        ("Keupayaan", "Fungsi"),
        ("Lip sync fonem", "Dialog dan bentuk mulut selari dalam satu render", ""),
        ("SFX ambien", "Kesan dan bed latar sepadan aksi skrin", ""),
        ("4K native", "Output 4K terus, bukan upscale sahaja", ""),
        ("Logik multishot", "Potong adegan diorkestra dalam model, bukan tampal di post", ""),
    ],
    "audio_close": (
        "Pilot enterprise berjalan; akses lebih luas untuk pembangun dan pencipta dijangka "
        "**awal Julai 2026**."
    ),
    "h_demo": "Video demo",
    "demo_caption": (
        "Output contoh Seedance 2.5—kira-kira 30 saat kerja kamera multishot berterusan:"
    ),
    "h_gpt": "Tutorial GPT: storyboard dalam ChatGPT, kemudian Seedance",
    "gpt_steps": [
        ("Shot list dulu", "Bahagikan 30 s kepada 6–8 beat dengan saiz shot, kata kerja kamera, timing"),
        ("Manifest rujukan", "Petakan 50 slot ke watak, produk, palet atau framing"),
        ("Kunci kosa kata gaya", "Blok lensa, grade, elemen dilarang diguna semula setiap run"),
        ("Ulang dalam teks", "Polish skrip dan board dalam ChatGPT sebelum GPU untuk video"),
    ],
    "gpt_extra": (
        "Jika sudah guna **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** akan datang) "
        "untuk copy dan pecahan tugas, bawa tabiat **tutorial gpt** sama ke prep video."
    ),
    "gpt_close": (
        "Klik butang di bawah untuk buka chat LimaxAI (**gpt-5.4**; pilih model baharu "
        "dalam senarai) dan latih prompt storyboard."
    ),
    "h_sum": "Ringkasan",
    "sum_rows": [
        ("Item", ""),
        ("Panjang native", "30 saat, satu pass"),
        ("Rujukan", "Sehingga 50 aset multimodal"),
        ("Resolusi", "4K native"),
        ("Suntingan", "Kawalan multishot terlokalisasi"),
        ("Audio", "Lip sync + SFX ambien dalam satu pass"),
        ("Rollout", "Pilot enterprise; akses luas awal Julai 2026"),
        ("Langkah seterusnya", "Draf shot dalam ChatGPT; cuba GPT di LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 tolak video AI dari «mainan klip pendek» ke **take separuh minit "
        "boleh guna**. Aliran pre-produksi **GPT** berdisiplin mengatasi kejar setiap "
        "nama model baharu."
    ),
}

# --- Vietnamese ---
PACK_DATA["vi"] = {
    "intro": (
        "Ngày 23 tháng 6 năm 2026, Volcano Engine của ByteDance ra mắt **Seedance 2.5** "
        "tại hội nghị doanh nghiệp. Ba con số tóm tắt nâng cấp: **30 giây native one-take**, "
        "**xuất 4K native**, và tối đa **50 tài sản tham chiếu đa phương thức** (nhân vật, "
        "sản phẩm, khung hình, màu thương hiệu, lớp phong cách) trong một lần tạo."
    ),
    "keywords": "Từ khóa: chatgpt, GPT-5.6, hướng dẫn gpt, seedance 2.5.",
    "published": "Xuất bản: 23 tháng 6 năm 2026",
    "img_alt": "Ra mắt Seedance 2.5 30s one-take 4K native 50 tham chiếu",
    "h_upgrade": "Seedance 2.5 so với 2.0: thay đổi gì",
    "upgrade_intro": (
        "Nhiều công cụ video AI vẫn giới hạn một lần tạo ở 5–15 giây. Kéo dài timeline "
        "thì hình ảnh trôi—khuôn mặt biến dạng, ánh sáng nhảy, hình sản phẩm méo. "
        "Seedance 2.5 đẩy baseline khả dụng lên:"
    ),
    "upgrade_note": (
        "Volcano Engine cũng nâng cấp **nền Seedance 2.0** lên 4K native, người dùng hiện "
        "tại có output sắc nét hơn trong khi 2.5 tập trung câu chuyện multishot dài hơn "
        "và input tham chiếu dày hơn."
    ),
    "h_duration": "30 giây native + 50 tham chiếu: giữ one-take ổn định",
    "duration_p1": (
        "**30 giây một pass** là thông số chính. Với quảng cáo, demo sản phẩm và cảnh "
        "phim ngắn, nửa phút thường là độ dài tối thiểu dùng được—ngắn hơn buộc cắt "
        "vụng về ở hậu kỳ."
    ),
    "duration_p2": (
        "Để giữ timeline 30 giây, 2.5 nhận tối đa **50 tài sản tham chiếu** cùng lúc: "
        "character sheet, ảnh sản phẩm, bảng màu thương hiệu, khung storyboard, thậm chí "
        "lớp phong cách từ brand guidelines. Neo chính xác hơn nghĩa là ít drift theo thời gian.\n\n"
        "Phân bổ 50 slot đề xuất:"
    ),
    "duration_table_hdr": ("Loại tham chiếu", "Số lượng đề xuất", "Vai trò"),
    "duration_rows": [
        ("Danh tính nhân vật", "3–8", "Khóa mặt, tóc, màu trang phục"),
        ("Sản phẩm/Logo", "2–5", "Giữ tỷ lệ bao bì và dấu hiệu rõ"),
        ("Khung hình/Storyboard", "5–15", "Góc máy và cỡ shot chính"),
        ("Phong cách/Grade", "1–3", "Look phim, tương phản, yếu tố cấm"),
        ("Dự trữ linh hoạt", "slot còn lại", "Đạo cụ và chi tiết cảnh theo nhu cầu"),
    ],
    "duration_tail": (
        "Viết prompt theo **timeline**, vd. «0–5 giây dựng cảnh, 5–20 giây hành động chính, "
        "20–30 giây hero sản phẩm»—hiệu quả hơn chồng tính từ."
    ),
    "h_multishot": "Chỉnh sửa multishot và điều khiển cục bộ: ít re-roll hơn",
    "multishot_intro": (
        "Ai làm video AI đều biết nỗi đau: sửa một chi tiết phải tạo lại cả clip. "
        "Seedance 2.5 thêm **chỉnh sửa cục bộ**, gần với «sửa panel storyboard này thôi»:"
    ),
    "multishot_b1": (
        "**Liên tục bền vững (Persistent Continuity)** — đổi trang phục, đạo cụ hoặc "
        "nhân vật mà giữ ánh sáng nền, vật lý và bố cục"
    ),
    "multishot_b2": (
        "**Máy quay cấp đạo diễn (Director-Grade Camera)** — tracking, pan, dolly "
        "và đường cong tốc độ làm tham số workflow, không phải xổ số prompt"
    ),
    "multishot_close": (
        "Với team quảng cáo và thương mại điện tử, A/B test SKU hay copy không còn "
        "nghĩa là bắt đầu từ đầu mỗi lần."
    ),
    "h_audio": "Đồng bộ AV native, mô phỏng vật lý và pipeline 4K",
    "audio_intro": (
        "Timeline dài hơn khiến Volcano Engine thiết kế lại **mô phỏng vật lý** "
        "và stack diffusion. Thay đổi AV chính của Seedance 2.5:"
    ),
    "audio_rows": [
        ("Khả năng", "Chức năng"),
        ("Lip sync theo phoneme", "Thoại và hình miệng khớp trong một lần render", ""),
        ("SFX ambient", "Hiệu ứng và nền khớp hành động trên màn hình", ""),
        ("4K native", "Xuất 4K trực tiếp, không chỉ upscale", ""),
        ("Logic multishot", "Cắt cảnh điều phối trong model, không dán ở hậu kỳ", ""),
    ],
    "audio_close": (
        "Pilot doanh nghiệp đang chạy; truy cập rộng hơn cho developer và creator dự kiến "
        "**đầu tháng 7 năm 2026**."
    ),
    "h_demo": "Video demo",
    "demo_caption": (
        "Output mẫu Seedance 2.5—khoảng 30 giây máy quay multishot liên tục:"
    ),
    "h_gpt": "Hướng dẫn GPT: storyboard trong ChatGPT, rồi Seedance",
    "gpt_steps": [
        ("Shot list trước", "Chia 30 giây thành 6–8 beat với cỡ shot, động từ máy quay, timing"),
        ("Manifest tham chiếu", "Gán 50 slot cho nhân vật, sản phẩm, palette hoặc khung hình"),
        ("Khóa từ vựng phong cách", "Khối ống kính, grade, yếu tố cấm tái dùng mỗi lần chạy"),
        ("Lặp trong văn bản", "Chỉnh kịch bản và board trong ChatGPT trước khi dùng GPU cho video"),
    ],
    "gpt_extra": (
        "Nếu đã dùng **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** sắp ra) cho copy "
        "và chia nhỏ task, chuyển thói quen **hướng dẫn gpt** sang prep video."
    ),
    "gpt_close": (
        "Nhấn nút bên dưới mở chat LimaxAI (**gpt-5.4**; chọn model mới trong danh sách) "
        "và luyện prompt storyboard."
    ),
    "h_sum": "Tóm tắt",
    "sum_rows": [
        ("Hạng mục", ""),
        ("Độ dài native", "30 giây, một pass"),
        ("Tham chiếu", "Tối đa 50 tài sản multimodal"),
        ("Độ phân giải", "4K native"),
        ("Chỉnh sửa", "Điều khiển multishot cục bộ"),
        ("Âm thanh", "Lip sync + SFX ambient một pass"),
        ("Triển khai", "Pilot doanh nghiệp; rộng hơn đầu tháng 7/2026"),
        ("Bước tiếp", "Phác shot trong ChatGPT; thử GPT trên LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 đẩy video AI từ «đồ chơi clip ngắn» sang **take nửa phút dùng được**. "
        "Quy trình pre-prod **GPT** có kỷ luật hơn đuổi theo từng tên model mới."
    ),
}

# --- Thai ---
PACK_DATA["th"] = {
    "intro": (
        "เมื่อ 23 มิถุนายน 2026 Volcano Engine ของ ByteDance เปิดตัว **Seedance 2.5** "
        "ในงานประชุมองค์กร ตัวเลขสามข้อสรุปการอัปเกรด: **30 วินาที native one-take**, "
        "**เอาต์พุต 4K native** และสูงสุด **50 แอสเซ็ตอ้างอิง multimodal** "
        "(ตัวละคร ผลิตภัณฑ์ การจัดเฟรม สีแบรนด์ ชั้นสไตล์) ในการสร้างครั้งเดียว"
    ),
    "keywords": "คำสำคัญ: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "เผยแพร่: 23 มิถุนายน 2026",
    "img_alt": "เปิดตัว Seedance 2.5 30วิ one-take 4K native 50 อ้างอิง",
    "h_upgrade": "Seedance 2.5 vs 2.0: อะไรเปลี่ยน",
    "upgrade_intro": (
        "เครื่องมือวิดีโอ AI หลายตัวยังจำกัดการสร้างครั้งเดียวที่ 5–15 วินาที "
        "ยืด timeline แล้วภาพ drift—ใบหน้าเพี้ยน แสงกระโดด รูปทรงผลิตภัณฑ์บิด "
        "Seedance 2.5 ผลัก baseline ที่ใช้ได้จริงไปข้างหน้า:"
    ),
    "upgrade_note": (
        "Volcano Engine อัปเกรด **ฐาน Seedance 2.0** เป็น 4K native ด้วย "
        "ผู้ใช้เดิมได้ภาพคมชัดขึ้น ส่วน 2.5 โฟกัสเรื่อง multishot ยาวและอ้างอิงหนาแน่น"
    ),
    "h_duration": "30 วินาที native + 50 อ้างอิง: คง one-take ให้มั่นคง",
    "duration_p1": (
        "**30 วินาที single pass** คือสเปกหลัก สำหรับโฆษณา เดโมผลิตภัณฑ์ "
        "และฉากละครสั้น ครึ่งนาทีมักเป็นความยาวขั้นต่ำที่ใช้ได้—สั้นกว่านั้น "
        "ต้องตัดต่อแบบงอๆ ใน post"
    ),
    "duration_p2": (
        "เพื่อคุม timeline 30 วินาที 2.5 รับได้สูงสุด **50 แอสเซ็ตอ้างอิง** "
        "พร้อมกัน: character sheet ภาพผลิตภัณฑ์ พาเลตแบรนด์ เฟรม storyboard "
        "แม้ชั้นสไตล์จาก brand guidelines สมอดที่แม่นยำขึ้น หมายถึง drift น้อยลงตามเวลา\n\n"
        "การจัดสรร 50 สล็อตที่แนะนำ:"
    ),
    "duration_table_hdr": ("ประเภทอ้างอิง", "จำนวนแนะนำ", "บทบาท"),
    "duration_rows": [
        ("ตัวตนตัวละคร", "3–8", "ล็อกใบหน้า ผม สีชุด"),
        ("ผลิตภัณฑ์/Logo", "2–5", "คงสัดส่วนบรรจุภัณฑ์และเครื่องหมายชัด"),
        ("เฟรม/Storyboard", "5–15", "มุมกล้องและขนาดช็อตหลัก"),
        ("สไตล์/Grade", "1–3", "ลุคฟิล์ม คอนทราสต์ องค์ประกอบต้องห้าม"),
        ("สำรองยืดหยุ่น", "สล็อตที่เหลือ", "พร็อพและรายละเอียดฉากตามต้องการ"),
    ],
    "duration_tail": (
        "เขียน prompt เป็น **timeline** เช่น «0–5 วิ ตั้งฉาก 5–20 วิ แอ็กชันหลัก "
        "20–30 วิ hero ผลิตภัณฑ์»—ได้ผลกว่ากองคำคุณศัพท์"
    ),
    "h_multishot": "ตัดต่อ multishot และควบคุมเฉพาะจุด: re-roll น้อยลง",
    "multishot_intro": (
        "ใครทำวิดีโอ AI รู้ดี: แก้รายละเอียดเล็กน้อยต้องสร้างคลิปใหม่ทั้งก้อน "
        "Seedance 2.5 เพิ่ม **การแก้เฉพาะจุด** ใกล้กับ «แก้แค่แผง storyboard นี้»:"
    ),
    "multishot_b1": (
        "**ความต่อเนื่องถาวร (Persistent Continuity)** — เปลี่ยนชุด พร็อพ หรือตัวละคร "
        "โดยคงแสงพื้นหลัง ฟิสิกส์ และองค์ประกอบ"
    ),
    "multishot_b2": (
        "**กล้องระดับผู้กำกับ (Director-Grade Camera)** — tracking pan dolly "
        "และเส้นโค้งความเร็วเป็นพารามิเตอร์ workflow ไม่ใช่ลอตเตอรี่ prompt"
    ),
    "multishot_close": (
        "ทีมโฆษณาและอีคอมmerce ทดสอบ A/B SKU หรือคำโฆษณาไม่ต้องเริ่มจากศูนย์ทุกครั้ง"
    ),
    "h_audio": "ซิงค์ AV native จำลองฟิสิกส์ และ pipeline 4K",
    "audio_intro": (
        "timeline ยาวขึ้นทำให้ Volcano Engine ออกแบบ **การจำลองฟิสิกส์** "
        "และ diffusion stack ใหม่ การเปลี่ยน AV หลักของ Seedance 2.5:"
    ),
    "audio_rows": [
        ("ความสามารถ", "หน้าที่"),
        ("Lip sync ระดับ phoneme", "บทสนทนาและรูปปากตรงกันใน render เดียว", ""),
        ("SFX แวดล้อม", "เอฟเฟกต์และเบดพื้นหลังตามแอ็กชันบนจอ", ""),
        ("4K native", "เอาต์พุต 4K ตรง ไม่ใช่แค่ upscale", ""),
        ("ตรรกะ multishot", "ตัดฉากภายในโมเดล ไม่ใช่ต่อใน post", ""),
    ],
    "audio_close": (
        "พilot องค์กรกำลังดำเนินการ การเปิดกว้างสำหรับ developer และ creator "
        "คาด **ต้นเดือนกรกฎาคม 2026**"
    ),
    "h_demo": "วิดีโอเดโม",
    "demo_caption": (
        "ตัวอย่างเอาต์พุต Seedance 2.5—ประมาณ 30 วินาทีกล้อง multishot ต่อเนื่อง:"
    ),
    "h_gpt": "บทเรียน GPT: storyboard ใน ChatGPT แล้ว Seedance",
    "gpt_steps": [
        ("Shot list ก่อน", "แบ่ง 30 วิ เป็น 6–8 beats พร้อมขนาดช็อต คำกริยากล้อง timing"),
        ("Manifest อ้างอิง", "แมป 50 สล็อตไปตัวละคร ผลิตภัณฑ์ พาเลต หรือเฟรม"),
        ("ล็อกคำศัพท์สไตล์", "บล็อกเลนส์ grade องค์ประกอบต้องห้ามใช้ซ้ำทุก run"),
        ("วนซ้ำในข้อความ", "ขัดเกลาสคริปต์และ board ใน ChatGPT ก่อนใช้ GPU วิดีโอ"),
    ],
    "gpt_extra": (
        "หากใช้ **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** กำลังมา) สำหรับ copy "
        "และแยกงาน ย้ายนิสัย **gpt tutorial** เดิมมา prep วิดีโอ"
    ),
    "gpt_close": (
        "คลิกปุ่มด้านล่างเปิดแชท LimaxAI (**gpt-5.4**; เลือกโมเดลใหม่ในรายการ) "
        "และฝึก prompt storyboard"
    ),
    "h_sum": "สรุป",
    "sum_rows": [
        ("รายการ", ""),
        ("ความยาว native", "30 วินาที single pass"),
        ("อ้างอิง", "สูงสุด 50 แอสเซ็ต multimodal"),
        ("ความละเอียด", "4K native"),
        ("การตัดต่อ", "ควบคุม multishot เฉพาะจุด"),
        ("เสียง", "Lip sync + SFX แวดล้อมใน pass เดียว"),
        ("Rollout", "Pilot องค์กร; เปิดกว้างต้นก.ค. 2026"),
        ("ขั้นถัดไป", "ร่าง shot ใน ChatGPT; ลอง GPT บน LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 ผลักวิดีโอ AI จาก «ของเล่นคลิปสั้น» สู่ **take ครึ่งนาทีที่ใช้ได้จริง** "
        "flow pre-prod **GPT** ที่มีวินัยชนะการไล่ทุกชื่อโมเดลใหม่"
    ),
}

# --- Turkish ---
PACK_DATA["tr"] = {
    "intro": (
        "23 Haziran 2026'da ByteDance'in Volcano Engine'i kurumsal konferansında **Seedance 2.5**'i "
        "tanıttı. Yükseltmeyi özetleyen üç rakam: **native 30 saniye one-take**, **native 4K çıktı** "
        "ve tek üretimde **50 multimodal referans varlığına** (karakterler, ürünler, kadraj, "
        "marka renkleri, stil katmanları) kadar destek."
    ),
    "keywords": "Anahtar kelimeler: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "Yayın tarihi: 23 Haziran 2026",
    "img_alt": "Seedance 2.5 lansman 30sn one-take native 4K 50 referans",
    "h_upgrade": "Seedance 2.5 vs 2.0: ne değişti",
    "upgrade_intro": (
        "Birçok AI video aracı tek üretimi hâlâ 5–15 saniyede sınırlıyor. Zaman çizelgesini "
        "uzatmak görüntü kaymasına yol açar—yüzler bozulur, ışık sıçrar, ürün şekilleri "
        "deforme olur. Seedance 2.5 kullanılabilir tabanı ileri taşır:"
    ),
    "upgrade_note": (
        "Volcano Engine **Seedance 2.0 tabanını** da native 4K'ya yükseltti; mevcut kullanıcılar "
        "daha keskin çıktı alırken 2.5 daha uzun multishot anlatılar ve yoğun referans girdisine "
        "odaklanır."
    ),
    "h_duration": "30 saniye native + 50 referans: one-take'i sabitlemek",
    "duration_p1": (
        "**30 saniye tek geçişte** başlıca spesifikasyon. Reklamlar, ürün demoları ve kısa "
        "drama sahneleri için yarım dakika genelde minimum kullanılabilir süre—daha kısa "
        "post'ta garip kesimler gerektirir."
    ),
    "duration_p2": (
        "30 saniyelik zaman çizelgesini sabit tutmak için 2.5 tek seferde **50 referans "
        "varlığı** kabul eder: karakter sayfaları, ürün çekimleri, marka paletleri, storyboard "
        "kareleri, hatta brand guidelines'dan stil katmanları. Daha hassas çapalar zamanla "
        "daha az kayma demektir.\n\n"
        "Önerilen 50 slot dağılımı:"
    ),
    "duration_table_hdr": ("Referans türü", "Önerilen sayı", "Rol"),
    "duration_rows": [
        ("Karakter kimliği", "3–8", "Yüz, saç, kostüm renklerini kilitle"),
        ("Ürün/Logo", "2–5", "Ambalaj oranı ve işaretleri net tut"),
        ("Kadraj/Storyboard", "5–15", "Ana kamera açıları ve plan boyutları"),
        ("Stil/Grade", "1–3", "Film görünümü, kontrast, yasak öğeler"),
        ("Esnek rezerv", "kalan slotlar", "Prop ve sahne detayları gerektiğinde"),
    ],
    "duration_tail": (
        "Promptları **zaman çizelgesi** olarak yazın, örn. «0–5 sn sahne kur, 5–20 sn ana "
        "aksiyon, 20–30 sn ürün hero»—sıfat yığmaktan daha etkili."
    ),
    "h_multishot": "Multishot düzenleme ve yerel kontrol: daha az yeniden üretim",
    "multishot_intro": (
        "AI video yapan herkes bilir: bir detayı düzelt, tüm klibi yeniden üret. Seedance 2.5 "
        "**yerelleştirilmiş düzenleme** ekler, storyboard'da «sadece bu paneli düzelt»e "
        "daha yakın:"
    ),
    "multishot_b1": (
        "**Kalıcı süreklilik (Persistent Continuity)** — kıyafet, prop veya karakter "
        "değiştirirken arka plan ışığı, fizik ve kompozisyonu koru"
    ),
    "multishot_b2": (
        "**Yönetmen seviyesi kamera (Director-Grade Camera)** — tracking, pan, dolly "
        "ve hız eğrileri workflow parametresi, prompt piyangosu değil"
    ),
    "multishot_close": (
        "Reklam ve e-ticaret ekipleri için SKU veya metin A/B testi artık her seferinde "
        "sıfırdan başlamak anlamına gelmiyor."
    ),
    "h_audio": "Native AV senkronizasyonu, fizik simülasyonu ve 4K pipeline",
    "audio_intro": (
        "Daha uzun zaman çizelgeleri Volcano Engine'i **fizik simülasyonu** ve difüzyon "
        "yığınını yeniden tasarlamaya itti. Seedance 2.5'teki temel AV değişiklikleri:"
    ),
    "audio_rows": [
        ("Yetenek", "İşlev"),
        ("Fonem dudak senkronu", "Diyalog ve ağız şekli tek render geçişinde hizalı", ""),
        ("Ortam SFX", "Ekran aksiyonuna uygun efektler ve arka plan katmanları", ""),
        ("Native 4K", "Doğrudan 4K çıktı, sadece upscale değil", ""),
        ("Multishot mantığı", "Sahne kesimleri model içinde, post'ta yapıştırma değil", ""),
    ],
    "audio_close": (
        "Kurumsal pilotlar sürüyor; geliştirici ve yaratıcılar için daha geniş erişim "
        "**Temmuz 2026 başı** bekleniyor."
    ),
    "h_demo": "Demo video",
    "demo_caption": (
        "Seedance 2.5 örnek çıktı—yaklaşık 30 saniye sürekli multishot kamera çalışması:"
    ),
    "h_gpt": "GPT eğitimi: ChatGPT'de storyboard, sonra Seedance",
    "gpt_steps": [
        ("Önce shot list", "30 sn'yi 6–8 beat'e böl, plan boyutu, kamera fiilleri ve timing"),
        ("Referans manifestosu", "50 slotu karakter, ürün, palet veya kadraja eşle"),
        ("Stil sözcük dağarcığını kilitle", "Lens, grade, yasak öğeler bloğunu her çalıştırmada kullan"),
        ("Metinde yinele", "GPU harcamadan önce senaryo ve board'ları ChatGPT'de cilala"),
    ],
    "gpt_extra": (
        "Zaten **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** yolda) ile copy ve görev "
        "ayrıştırması yapıyorsanız aynı **gpt tutorial** alışkanlıklarını video hazırlığına taşıyın."
    ),
    "gpt_close": (
        "LimaxAI sohbetini (**gpt-5.4**; listeden yeni modelleri seçin) açmak için "
        "aşağıdaki düğmeye tıklayın ve storyboard promptları pratik yapın."
    ),
    "h_sum": "Özet",
    "sum_rows": [
        ("Madde", ""),
        ("Native süre", "30 saniye, tek geçiş"),
        ("Referanslar", "50'ye kadar multimodal varlık"),
        ("Çözünürlük", "Native 4K"),
        ("Düzenleme", "Yerelleştirilmiş multishot kontrolleri"),
        ("Ses", "Dudak senkronu + ortam SFX tek geçişte"),
        ("Yayın", "Kurumsal pilotlar; Temmuz başı geniş erişim"),
        ("Sonraki adım", "ChatGPT'de plan taslakla; LimaxAI'de GPT dene"),
    ],
    "sum_line": (
        "Seedance 2.5 AI videoyu «kısa klip oyuncağı»ndan **kullanılabilir yarım dakikalık "
        "take'lere** taşır. Disiplinli **GPT** ön prodüksiyon akışı her yeni model adını "
        "kovalamaktan iyidir."
    ),
}

# --- Hindi ---
PACK_DATA["hi"] = {
    "intro": (
        "23 जून 2026 को ByteDance के Volcano Engine ने अपने एंटरप्राइज़ कॉन्फ़्रेंस में "
        "**Seedance 2.5** पेश किया। अपग्रेड को तीन संख्याएँ समेटती हैं: **नेटिव 30 सेकंड "
        "one-take**, **नेटिव 4K आउटपुट**, और एक जनरेशन में **50 मल्टीमोडल रेफ़रेंस "
        "असेट** (कैरेक्टर, प्रोडक्ट, फ्रेमिंग, ब्रांड रंग, स्टाइल लेयर) तक।"
    ),
    "keywords": "कीवर्ड: chatgpt, GPT-5.6, gpt tutorial, seedance 2.5.",
    "published": "प्रकाशित: 23 जून 2026",
    "img_alt": "Seedance 2.5 लॉन्च 30s one-take नेटिव 4K 50 रेफ़रेंस",
    "h_upgrade": "Seedance 2.5 vs 2.0: क्या बदला",
    "upgrade_intro": (
        "कई AI वीडियो टूल अभी भी एक जनरेशन को 5–15 सेकंड तक सीमित रखते हैं। टाइमलाइन "
        "बढ़ाने पर विज़ुअल drift होता है—चेहरे बिगड़ते हैं, रोशनी कूदती है, प्रोडक्ट "
        "आकार बदलते हैं। Seedance 2.5 उपयोगी baseline आगे धकेलता है:"
    ),
    "upgrade_note": (
        "Volcano Engine ने **Seedance 2.0 बेस** को भी नेटिव 4K में अपग्रेड किया, ताकि "
        "मौजूदा यूज़र्स को तेज़ आउटपुट मिले और 2.5 लंबी multishot कहानियों व घने "
        "रेफ़रेंस इनपुट पर फोकस करे।"
    ),
    "h_duration": "30 सेकंड नेटिव + 50 रेफ़रेंस: one-take स्थिर रखें",
    "duration_p1": (
        "**30 सेकंड single pass** मुख्य स्पेक है। ऐड, प्रोडक्ट डेमो और छोटे ड्रामा "
        "बीट्स के लिए आधा मिनट अक्सर न्यूनतम उपयोगी लंबाई है—छोटा हो तो पोस्ट में "
        "अजीब कट लगते हैं।"
    ),
    "duration_p2": (
        "30 सेकंड की टाइमलाइन स्थिर रखने के लिए 2.5 एक बार में **50 रेफ़रेंस असेट** "
        "लेता है: कैरेक्टर शीट, प्रोडक्ट शॉट, ब्रांड पैलेट, storyboard फ्रेम, brand "
        "guidelines से स्टाइल लेयर तक। सटीक एंकर का मतलब समय के साथ कम drift।\n\n"
        "50 स्लॉट का सुझावित बँटवारा:"
    ),
    "duration_table_hdr": ("रेफ़रेंस प्रकार", "सुझावित संख्या", "भूमिका"),
    "duration_rows": [
        ("कैरेक्टर पहचान", "3–8", "चेहरा, बाल, कपड़ों के रंग लॉक"),
        ("प्रोडक्ट/Logo", "2–5", "पैकेजिंग अनुपात और निशान साफ"),
        ("फ्रेमिंग/Storyboard", "5–15", "मुख्य कैमरा कोण और शॉट साइज"),
        ("स्टाइल/Grade", "1–3", "फ़िल्म लुक, कंट्रास्ट, वर्जित तत्व"),
        ("लचीला रिज़र्व", "बाकी स्लॉट", "ज़रूरत अनुसार props और सीन विवरण"),
    ],
    "duration_tail": (
        "प्रॉम्प्ट **टाइमलाइन** में लिखें, जैसे «0–5s सीन सेट, 5–20s मुख्य एक्शन, "
        "20–30s प्रोडक्ट hero»—विशेषण ढेर लगाने से बेहतर।"
    ),
    "h_multishot": "Multishot एडिटिंग और लोकल कंट्रोल: कम re-roll",
    "multishot_intro": (
        "AI वीडियो बनाने वाले जानते हैं: एक डिटेल बदलो, पूरा क्लिप दोबारा जनरेट। "
        "Seedance 2.5 **लोकलाइज़्ड एडिटिंग** जोड़ता है, storyboard में «सिर्फ यह "
        "पैनल ठीक करो» जैसा:"
    ),
    "multishot_b1": (
        "**स्थायी निरंतरता (Persistent Continuity)** — कपड़े, props या कैरेक्टर "
        "बदलें, बैकग्राउंड लाइट, फिज़िक्स और कंपोज़िशन रखें"
    ),
    "multishot_b2": (
        "**डायरेक्टर-ग्रेड कैमरा (Director-Grade Camera)** — tracking, pan, dolly "
        "और स्पीड कर्व workflow पैरामीटर, prompt लॉटरी नहीं"
    ),
    "multishot_close": (
        "ऐड और ई-कॉमर्स टीमों के लिए SKU या कॉपी A/B टेस्ट अब हर बार शून्य से "
        "शुरू नहीं मतलब।"
    ),
    "h_audio": "नेटिव AV सिंक, फिज़िक्स सिमुलेशन और 4K पाइपलाइन",
    "audio_intro": (
        "लंबी टाइमलाइन ने Volcano Engine को **फिज़िक्स सिमुलेशन** और diffusion "
        "स्टैक फिर से डिज़ाइन कराया। Seedance 2.5 में मुख्य AV बदलाव:"
    ),
    "audio_rows": [
        ("क्षमता", "कार्य"),
        ("फोनेम lip sync", "डायलॉग और मुंह का आकार एक render में aligned", ""),
        ("Ambient SFX", "स्क्रीन एक्शन से मेल खाते इफ़ेक्ट और बैकग्राउंड", ""),
        ("नेटिव 4K", "सीधा 4K आउटपुट, सिर्फ upscale नहीं", ""),
        ("Multishot लॉजिक", "सीन कट मॉडल के अंदर, पोस्ट में चिपकाना नहीं", ""),
    ],
    "audio_close": (
        "एंटरप्राइज़ पायलट चल रहे हैं; डेवलपर और क्रिएटर्स के लिए व्यापक एक्सेस "
        "**जुलाई 2026 की शुरुआत** में अपेक्षित।"
    ),
    "h_demo": "डेमो वीडियो",
    "demo_caption": (
        "Seedance 2.5 नमूना आउटपुट—लगभग 30 सेकंड लगातार multishot कैमरा वर्क:"
    ),
    "h_gpt": "GPT ट्यूटोरियल: ChatGPT में storyboard, फिर Seedance",
    "gpt_steps": [
        ("पहले shot list", "30s को 6–8 beats में बाँटें, शॉट साइज, कैमरा क्रिया, timing"),
        ("रेफ़रेंस मैनिफेस्ट", "50 स्लॉट को कैरेक्टर, प्रोडक्ट, पैलेट या फ्रेमिंग में मैप"),
        ("स्टाइल शब्दावली लॉक", "लेंस, grade, वर्जित तत्व ब्लॉक हर रन में दोहराएँ"),
        ("टेक्स्ट में iterate", "GPU से पहले ChatGPT में स्क्रिप्ट और बोर्ड पॉलिश"),
    ],
    "gpt_extra": (
        "अगर आप पहले से **ChatGPT** (**GPT-5.4 / GPT-5.5**, **GPT-5.6** आ रहा) से "
        "copy और टास्क ब्रेकडाउन करते हैं, वही **gpt tutorial** आदतें वीडियो prep में लाएँ।"
    ),
    "gpt_close": (
        "नीचे बटन से LimaxAI चैट (**gpt-5.4**; सूची से नए मॉडल चुनें) खोलें और "
        "storyboard प्रॉम्प्ट अभ्यास करें।"
    ),
    "h_sum": "सारांश",
    "sum_rows": [
        ("आइटम", ""),
        ("नेटिव लंबाई", "30 सेकंड, single pass"),
        ("रेफ़रेंस", "50 multimodal असेट तक"),
        ("रिज़ॉल्यूशन", "नेटिव 4K"),
        ("एडिटिंग", "लोकलाइज़्ड multishot कंट्रोल"),
        ("ऑडियो", "Lip sync + ambient SFX एक pass में"),
        ("रोलआउट", "एंटरप्राइज़ पायलट; जुलाई शुरुआत में व्यापक"),
        ("अगला कदम", "ChatGPT में शॉट ड्राफ्ट; LimaxAI पर GPT आज़माएँ"),
    ],
    "sum_line": (
        "Seedance 2.5 AI वीडियो को «छोटे क्लिप खिलौने» से **उपयोगी आधे मिनट के take** "
        "की ओर धकेलता है। अनुशासित **GPT** pre-production हर नए मॉडल नाम के पीछे "
        "भागने से बेहतर है।"
    ),
}

# --- Persian ---
PACK_DATA["fa"] = {
    "intro": (
        "در ۲۳ ژوئن ۲۰۲۶، Volcano Engine بایت‌دنس **Seedance 2.5** را در کنفرانس "
        "سازمانی خود رونمایی کرد. سه عدد ارتقا را خلاصه می‌کنند: **۳۰ ثانیه بومی "
        "one-take**، **خروجی ۴K بومی** و تا **۵۰ دارایی مرجع چندوجهی** (شخصیت، "
        "محصول، قاب‌بندی، رنگ برند، لایه‌های سبک) در یک تولید."
    ),
    "keywords": "کلمات کلیدی: chatgpt، GPT-5.6، gpt tutorial، seedance 2.5.",
    "published": "منتشر شده: ۲۳ ژوئن ۲۰۲۶",
    "img_alt": "رونمایی Seedance 2.5 30ث one-take 4K بومی 50 مرجع",
    "h_upgrade": "Seedance 2.5 در برابر 2.0: چه تغییر کرد",
    "upgrade_intro": (
        "بسیاری از ابزارهای ویدیوی AI هنوز یک تولید را به ۵–۱۵ ثانیه محدود می‌کنند. "
        "با طولانی‌تر کردن timeline تصویر drift می‌کند—چهره‌ها deform، نور می‌پرد، "
        "شکل محصولات عوض می‌شود. Seedance 2.5 خط پایه قابل‌استفاده را جلو می‌برد:"
    ),
    "upgrade_note": (
        "Volcano Engine **پایه Seedance 2.0** را هم به 4K بومی ارتقا داد؛ کاربران فعلی "
        "خروجی واضح‌تر می‌گیرند و 2.5 روی روایت multishot طولانی‌تر و ورودی مرجع "
        "متراکم‌تر تمرکز دارد."
    ),
    "h_duration": "۳۰ ثانیه بومی + ۵۰ مرجع: one-take پایدار",
    "duration_p1": (
        "**۳۰ ثانیه در یک pass** مشخصه اصلی است. برای تبلیغ، دمو محصول و صحنه‌های "
        "درام کوتاه، نیم دقیقه اغلب حداقل طول قابل‌استفاده است—کوتاه‌تر برش‌های "
        "ناجور در post می‌خواهد."
    ),
    "duration_p2": (
        "برای نگه‌داشتن timeline 30 ثانیه، 2.5 تا **۵۰ دارایی مرجع** یک‌جا می‌پذیرد: "
        "character sheet، عکس محصول، پالت برند، فریم storyboard، حتی لایه سبک از "
        "brand guidelines. لنگر دقیق‌تر یعنی drift کمتر در طول زمان.\n\n"
        "تخصیص پیشنهادی 50 اسلات:"
    ),
    "duration_table_hdr": ("نوع مرجع", "تعداد پیشنهادی", "نقش"),
    "duration_rows": [
        ("هویت شخصیت", "۳–۸", "قفل صورت، مو، رنگ لباس"),
        ("محصول/Logo", "۲–۵", "حفظ نسبت بسته‌بندی و نشان‌های واضح"),
        ("قاب‌بندی/Storyboard", "۵–۱۵", "زوایای کلیدی دوربین و اندازه شات"),
        ("سبک/Grade", "۱–۳", "look فیلم، کنتراست، عناصر ممنوع"),
        ("ذخیره انعطاف‌پذیر", "اسلات باقی‌مانده", "props و جزئیات صحنه در صورت نیاز"),
    ],
    "duration_tail": (
        "promptها را **timeline** بنویسید، مثلاً «۰–۵ث صحنه، ۵–۲۰ث اکشن اصلی، "
        "۲۰–۳۰ث hero محصول»—مؤثرتر از انباشت صفت."
    ),
    "h_multishot": "ویرایش multishot و کنترل محلی: re-roll کمتر",
    "multishot_intro": (
        "هر کس ویدیوی AI می‌سازد درد را می‌داند: یک جزئیات را عوض کن، کل کلیپ را "
        "دوباره تولید کن. Seedance 2.5 **ویرایش محلی** اضافه می‌کند، نزدیک‌تر به "
        "«فقط این پنل storyboard را درست کن»:"
    ),
    "multishot_b1": (
        "**تداوم پایدار (Persistent Continuity)** — لباس، prop یا شخصیت را عوض "
        "کنید، نور پس‌زمینه، فیزیک و ترکیب‌بندی بماند"
    ),
    "multishot_b2": (
        "**دوربین سطح کارگردان (Director-Grade Camera)** — tracking، pan، dolly "
        "و منحنی سرعت به‌عنوان پارامتر workflow، نه قرعه‌کشی prompt"
    ),
    "multishot_close": (
        "برای تیم‌های تبلیغ و e-commerce، A/B تست SKU یا copy دیگر هر بار "
        "شروع از صفر نیست."
    ),
    "h_audio": "همگام‌سازی AV بومی، شبیه‌سازی فیزیک و pipeline 4K",
    "audio_intro": (
        "timelineهای طولانی‌تر Volcano Engine را به بازطراحی **شبیه‌سازی فیزیک** "
        "و stack diffusion واداشت. تغییرات AV کلیدی Seedance 2.5:"
    ),
    "audio_rows": [
        ("قابلیت", "عملکرد"),
        ("lip sync فونمی", "دیالوگ و شکل دهان در یک render هم‌تراز", ""),
        ("SFX محیطی", "افکت و bed پس‌زمینه متناسب با اکشن روی صفحه", ""),
        ("4K بومی", "خروجی مستقیم 4K، نه فقط upscale", ""),
        ("منطق multishot", "برش صحنه در مدل، نه چسباندن در post", ""),
    ],
    "audio_close": (
        "پایلوت‌های سازمانی در جریان؛ دسترسی گسترده‌تر برای توسعه‌دهندگان و "
        "خالقان **اوایل ژوئیه ۲۰۲۶** انتظار می‌رود."
    ),
    "h_demo": "ویدیوی دمو",
    "demo_caption": (
        "نمونه خروجی Seedance 2.5—حدود ۳۰ ثانیه کار دوربین multishot پیوسته:"
    ),
    "h_gpt": "آموزش GPT: storyboard در ChatGPT، سپس Seedance",
    "gpt_steps": [
        ("ابتدا shot list", "30ث را به 6–8 beat با اندازه شات، افعال دوربین و timing تقسیم کنید"),
        ("مانیفست مرجع", "50 اسلات را به شخصیت، محصول، پالت یا قاب‌بندی نگاشت کنید"),
        ("واژگان سبک قفل", "بلوک لنز، grade و عناصر ممنوع در هر run تکرار"),
        ("تکرار در متن", "قبل از GPU، سناریو و board را در ChatGPT صیقل دهید"),
    ],
    "gpt_extra": (
        "اگر از **ChatGPT** (**GPT-5.4 / GPT-5.5**، **GPT-5.6** در راه) برای copy "
        "و تفکیک وظایف استفاده می‌کنید، همان عادات **gpt tutorial** را به prep "
        "ویدیو منتقل کنید."
    ),
    "gpt_close": (
        "دکمه زیر را بزنید تا چت LimaxAI (**gpt-5.4**؛ مدل‌های جدید را از فهرست "
        "انتخاب کنید) باز شود و promptهای storyboard تمرین کنید."
    ),
    "h_sum": "خلاصه",
    "sum_rows": [
        ("مورد", ""),
        ("طول بومی", "۳۰ ثانیه، یک pass"),
        ("مراجع", "تا ۵۰ دارایی multimodal"),
        ("وضوح", "4K بومی"),
        ("ویرایش", "کنترل multishot محلی"),
        ("صدا", "Lip sync + SFX محیطی در یک pass"),
        ("رول‌اوت", "پایلوت سازمانی؛ گسترش اوایل ژوئیه ۲۰۲۶"),
        ("گام بعد", "پیش‌نویس shot در ChatGPT؛ GPT در LimaxAI"),
    ],
    "sum_line": (
        "Seedance 2.5 ویدیوی AI را از «اسباب‌بازی کلیپ کوتاه» به **take نیم‌دقیقه‌ای "
        "قابل‌استفاده** می‌برد. جریان pre-production **GPT** منضبط از تعقیب هر "
        "نام مدل جدید بهتر است."
    ),
}

_REQUIRED_KEYS = {
    "intro", "keywords", "published", "img_alt", "h_upgrade", "upgrade_intro",
    "compare_table", "upgrade_note", "h_duration", "duration", "h_multishot",
    "multishot", "h_audio", "audio", "h_demo", "demo_caption", "h_gpt", "gpt",
    "h_sum", "sum_table", "sum_line",
}

for _lang, _data in PACK_DATA.items():
    PACKS[_lang] = _make_pack(_lang, compare_table=_COMPARE[_lang], **_data)

_ALL_LOCALES = (
    "en", "zh-cn", "zh-tw", "ja", "ko", "de", "es", "fr", "pt", "it", "ru", "uk",
    "pl", "nl", "sv", "ro", "ar", "id", "ms", "vi", "th", "tr", "hi", "fa",
)
assert set(PACKS) == set(_ALL_LOCALES), f"PACKS locales mismatch: {set(PACKS) ^ set(_ALL_LOCALES)}"
for _loc, _pack in PACKS.items():
    missing = _REQUIRED_KEYS - set(_pack)
    assert not missing, f"{_loc} missing keys: {missing}"
