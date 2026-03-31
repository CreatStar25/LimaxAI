import { MIDJOURNEY_V8_LAYOUT_I18N } from './midjourney-v8-layout-i18n';

export type MidjourneyV8Locale =
  | 'en' | 'zh-cn' | 'zh-tw' | 'es' | 'ar' | 'pt' | 'id' | 'ms' | 'fr' | 'ru'
  | 'hi' | 'ja' | 'de' | 'ko' | 'tr' | 'vi' | 'th' | 'it' | 'fa' | 'nl' | 'pl'
  | 'sv' | 'uk' | 'ro';

export type MidjourneyV8Article = {
  slug: string;
  title: string;
  intro: string;
  sections: Array<{
    id: string;
    title: string;
    blocks: Array<
      | { type: 'paragraph'; text: string }
      | { type: 'list'; items: string[] }
      | { type: 'table'; headers: string[]; rows: string[][] }
      | { type: 'image'; src?: string; alt: string; caption?: string }
      | { type: 'cta'; text: string; url: string }
    >;
  }>;
};

const SLUG = 'midjourney-v8-alpha-vs-banana2-multistyle-review';
const PUB_DATE = '2026-03-27';
const CTA_URL = 'https://www.limaxai.com/generate/image-tools/mjpro';

const IMG_1 = 'https://img.limaxai.com/aiweb/limaxai-midjourney-1.png';
const IMG_1A = 'https://img.limaxai.com/aiweb/limaxai-midjourney-1a.png';
const IMG_2 = 'https://img.limaxai.com/aiweb/limaxai-midjourney-2.png';

type Copy = {
  title: string;
  intro: string;
  dateLabel: string;
  keywordLabel: string;
  setupTitle: string;
  setupText: string;
  /** 若提供则用于方法小节多段说明（SEO 更易读） */
  setupParagraphs?: string[];
  styleTitle: string;
  styleText: string;
  promptTitle: string;
  promptText: string;
  scenarioTitle: string;
  scenarioText: string;
  finalTitle: string;
  finalText: string;
  ctaText: string;
};

/** 列表、表格、配图说明：与语言强相关；提示词示例仍保持英文结构说明 */
type ArticleLayout = {
  keywordValues: string;
  methodBullets: string[];
  styleTable: { headers: string[]; rows: string[][] };
  promptBullets: string[];
  scenarioTable: { headers: string[]; rows: string[][] };
  captions: [string, string, string];
};

const layoutEn: ArticleLayout = {
  keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
  methodBullets: [
    'Test dimensions: style consistency, detail rendering, output efficiency, and commercial fit.',
    'Same theme, same prompt structure, and same scene constraints.',
    'Keep prompt text in English; compare only model behavior changes.',
  ],
  styleTable: {
    headers: ['Style type', 'V8 Alpha', 'Banana 2', 'Operational note'],
    rows: [
      ['Product-style realism', 'Sharper material layers', 'Softer atmosphere', 'Use V8 Alpha for SKU consistency'],
      ['Illustration / concept', 'Stronger composition control', 'More style spread', 'Use Banana 2 in ideation phase'],
      ['Poster / key visual', 'Better typography-safe space', 'Richer mood variance', 'Lock layout first, then tune style'],
    ],
  },
  promptBullets: [
    'Prompt structure: subject + scene + style + lighting + camera + quality.',
    'Recommended first pass: low-cost draft, lock composition, then increase quality params.',
    'When comparing models, keep prompts unchanged and only adjust model-specific parameters.',
  ],
  scenarioTable: {
    headers: ['Business scenario', 'Preferred model', 'Reason'],
    rows: [
      ['E-commerce hero images', 'V8 Alpha', 'Higher consistency in texture and framing'],
      ['Creative concept boards', 'Banana 2', 'Faster style divergence and atmosphere exploration'],
      ['Campaign key visuals', 'Hybrid workflow', 'Use Banana 2 for exploration and V8 Alpha for final stabilization'],
    ],
  },
  captions: ['Multi-style comparison set A', 'Multi-style comparison set B', 'Side-by-side close-up sample'],
};

const layoutZhCN: ArticleLayout = {
  keywordValues: 'midjourney关键词、midjourney提示词、midjourney关键词',
  methodBullets: [
    '测评维度：风格一致性、细节刻画、出图效率、商业适配。',
    '统一主题、统一提示词结构、统一场景约束，保证可复现。',
    '提示词正文保持英文，仅对比模型行为差异（不改动提示词原文）。',
  ],
  styleTable: {
    headers: ['风格类型', 'V8 Alpha', 'Banana 2', '实操建议'],
    rows: [
      ['商业/写实质感', '材质层次更清晰', '整体氛围更柔和', 'SKU 一致性优先选 V8 Alpha'],
      ['插画/概念', '构图控制更强', '风格发散更大', '发散阶段优先 Banana 2'],
      ['海报/主视觉', '更利于文字与留白', '情绪起伏更大', '先锁定版式，再微调风格'],
    ],
  },
  promptBullets: [
    '提示词结构：subject + scene + style + lighting + camera + quality（示例为英文结构，便于跨模型复用）。',
    '建议流程：先做低成本小样锁定构图，再逐步提高质量相关参数。',
    '对比模型时保持提示词不变，只调整各模型特有参数。',
  ],
  scenarioTable: {
    headers: ['业务场景', '优先模型', '原因'],
    rows: [
      ['电商主图/详情图', 'V8 Alpha', '材质与构图稳定性更高，利于批量生产'],
      ['创意概念板', 'Banana 2', '风格与氛围探索更快'],
      ['Campaign 主视觉', '混合流程', 'Banana 2 发散 + V8 Alpha 定稿'],
    ],
  },
  captions: ['多风格对比样本 A', '多风格对比样本 B', '并列放大对比示例'],
};

const layoutZhTW: ArticleLayout = {
  keywordValues: 'midjourney關鍵詞、midjourney提示詞、midjourney關鍵詞',
  methodBullets: [
    '測評面向：風格一致性、細節刻畫、出圖效率、商業適配。',
    '統一主題、統一提示詞結構、統一場景限制，確保可重現。',
    '提示詞正文維持英文，只比較模型行為差異（不更動提示詞原文）。',
  ],
  styleTable: {
    headers: ['風格類型', 'V8 Alpha', 'Banana 2', '實務建議'],
    rows: [
      ['商業/寫實質感', '材質層次更清晰', '整體氛圍更柔和', 'SKU 一致性優先選 V8 Alpha'],
      ['插畫/概念', '構圖控制更強', '風格發散更大', '發散階段優先 Banana 2'],
      ['海報/主視覺', '更利於文字與留白', '情緒起伏更大', '先鎖定版式，再微調風格'],
    ],
  },
  promptBullets: [
    '提示詞結構：subject + scene + style + lighting + camera + quality（示例為英文結構，利於跨模型重用）。',
    '建議流程：先做低成本小樣鎖定構圖，再逐步提高品質相關參數。',
    '比較模型時保持提示詞不變，只調整各模型特有參數。',
  ],
  scenarioTable: {
    headers: ['業務場景', '優先模型', '原因'],
    rows: [
      ['電商主圖/詳情圖', 'V8 Alpha', '材質與構圖穩定性較高，利於批量產出'],
      ['創意概念板', 'Banana 2', '風格與氛圍探索較快'],
      ['Campaign 主視覺', '混合流程', 'Banana 2 發散 + V8 Alpha 定稿'],
    ],
  },
  captions: ['多風格對比樣本 A', '多風格對比樣本 B', '並列放大對比示例'],
};

const layoutJa: ArticleLayout = {
  keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
  methodBullets: [
    '評価軸：スタイル一貫性、ディテール、生成効率、商用適合。',
    '同一テーマ・同一プロンプト構造・同一シーン制約で再現性を担保。',
    'プロンプト本文は英語のまま、モデル挙動の差のみを比較します。',
  ],
  styleTable: {
    headers: ['スタイル', 'V8 Alpha', 'Banana 2', '運用メモ'],
    rows: [
      ['プロダクト/リアル', '質感レイヤーが明瞭', '雰囲気が柔らかい', 'SKU統一は V8 Alpha 優先'],
      ['イラスト/コンセプト', '構図コントロールが強い', 'スタイル拡散が大きい', '発散は Banana 2'],
      ['ポスター/KV', '文字余白を取りやすい', 'ムード差が大きい', 'まずレイアウト固定→スタイル調整'],
    ],
  },
  promptBullets: [
    '構造: subject + scene + style + lighting + camera + quality（英語テンプレのままが安定）。',
    'まず低コストでラフ→構図確定→品質系パラメータを上げる。',
    '比較時はプロンプト固定、モデル固有パラメータのみ変更。',
  ],
  scenarioTable: {
    headers: ['シーン', '推奨', '理由'],
    rows: [
      ['ECヒーロー画像', 'V8 Alpha', '質感とフレーミングの一貫性が高い'],
      ['コンセプトボード', 'Banana 2', 'スタイル探索が速い'],
      ['キャンペーンKV', 'ハイブリッド', 'Banana 2で探索→V8 Alphaで確定'],
    ],
  },
  captions: ['マルチスタイル比較 A', 'マルチスタイル比較 B', '並列拡大サンプル'],
};

function getArticleLayout(locale: string): ArticleLayout {
  if (locale === 'zh-cn') return layoutZhCN;
  if (locale === 'zh-tw') return layoutZhTW;
  if (locale === 'ja') return layoutJa;
  const extra = MIDJOURNEY_V8_LAYOUT_I18N[locale];
  if (extra) return extra;
  return layoutEn;
}

const copyByLocale: Record<MidjourneyV8Locale, Copy> = {
  'zh-cn': {
    title: 'Midjourney V8 Alpha 对比 Banana 2，多风格测评来喽',
    intro: '这是一篇围绕 midjourney关键词 与 midjourney提示词 的实测教程。我们对 Midjourney V8 Alpha 与 Banana 2 做同题多风格测试，重点看风格控制、细节稳定性、出图效率与商业适配。',
    dateLabel: '发布日期',
    keywordLabel: '关键词',
    setupTitle: '一、测评范围与方法',
    setupText: '本次测评统一使用同一主题，不做无关营销内容，仅保留与模型能力相关的结论。我们从摄影、插画、海报和电商视觉四类场景进行对比，确保可复现。',
    setupParagraphs: [
      '本次测评统一使用同一主题，去掉与主题无关的软文、引流与广告信息，只保留与模型能力相关的结论与可复现步骤。',
      '覆盖摄影写实、插画概念、海报主视觉与电商详情四类常见工作流；同一套 midjourney提示词 结构下，对比 Midjourney V8 Alpha 与 Banana 2 在「可控性—发散性」光谱上的差异。',
      '阅读本文可系统了解 midjourney关键词 的组织方式，以及如何在稳定量产与创意探索之间切换策略。',
    ],
    styleTitle: '二、多风格结果对比（V8 Alpha vs Banana 2）',
    styleText: '在同一语义下，V8 Alpha 在构图与材质细节上更稳定；Banana 2 在风格发散与氛围表达上更灵活。实际选型建议按“稳定生产”与“创意探索”两类任务拆分。',
    promptTitle: '三、Midjourney 提示词结构与参数技巧',
    promptText: '提示词建议使用“主体 + 场景 + 风格 + 光线 + 镜头 + 质量参数”结构。提示词原文建议保持英文，便于跨模型复用与稳定控制。',
    scenarioTitle: '四、使用场景与选型建议',
    scenarioText: '如果你要做批量商业图，优先考虑稳定性；如果要做概念图和风格探索，可提高风格变量。下面给出场景决策表，方便直接套用。',
    finalTitle: '五、结论与实操入口',
    finalText: '综合实测：V8 Alpha 更适合稳定生产链路，Banana 2 更适合创意扩散阶段。建议先用统一提示词做小样，再按业务目标微调参数并放量。',
    ctaText: '立刻使用Midjourney',
  },
  'zh-tw': {
    title: 'Midjourney V8 Alpha 對比 Banana 2，多風格實測來了',
    intro: '這是一篇圍繞 midjourney關鍵詞 與 midjourney提示詞 的實測教學。我們對 Midjourney V8 Alpha 與 Banana 2 做同題多風格測試，重點比較風格控制、細節穩定性、出圖效率與商業適配。',
    dateLabel: '發布日期',
    keywordLabel: '關鍵詞',
    setupTitle: '一、測評範圍與方法',
    setupText: '本次測評統一使用同一主題，不保留無關引流內容，只保留與模型能力有關的結論。從攝影、插畫、海報與電商視覺四類場景進行對比，確保可重現。',
    styleTitle: '二、多風格結果對比（V8 Alpha vs Banana 2）',
    styleText: '在相同語義下，V8 Alpha 在構圖與材質細節上更穩；Banana 2 在風格發散與氛圍表達上更靈活。建議按「穩定生產」與「創意探索」兩類任務拆分選型。',
    promptTitle: '三、Midjourney 提示詞結構與參數技巧',
    promptText: '提示詞建議使用「主體 + 場景 + 風格 + 光線 + 鏡頭 + 品質參數」結構。提示詞原文建議保留英文，以便跨模型重用與穩定控制。',
    scenarioTitle: '四、使用場景與選型建議',
    scenarioText: '若要做批量商業圖，優先穩定性；若做概念圖與風格探索，可提高風格變量。下方提供場景決策表可直接套用。',
    finalTitle: '五、結論與實作入口',
    finalText: '綜合實測：V8 Alpha 更適合穩定生產鏈路，Banana 2 更適合創意擴散階段。建議先用統一提示詞做小樣，再依業務目標微調參數與放量。',
    ctaText: '立刻使用Midjourney',
  },
  en: {
    title: 'Midjourney V8 Alpha vs Banana 2: Multi-style Benchmark Review',
    intro: 'This tutorial focuses on midjourney keywords and midjourney prompts. We run same-topic multi-style tests on Midjourney V8 Alpha and Banana 2, comparing style control, detail stability, generation efficiency, and commercial usability.',
    dateLabel: 'Published',
    keywordLabel: 'Keywords',
    setupTitle: '1) Test Scope and Method',
    setupText: 'We keep the benchmark task-focused and remove unrelated promotional content. The same brief is tested across photography, illustration, poster, and e-commerce visuals for reproducible conclusions.',
    styleTitle: '2) Multi-style Output Comparison (V8 Alpha vs Banana 2)',
    styleText: 'Under the same semantics, V8 Alpha is more stable on composition and material detail, while Banana 2 is more flexible for stylistic divergence and atmosphere. Choose based on stable production vs creative exploration.',
    promptTitle: '3) Midjourney Prompt Structure and Parameter Tips',
    promptText: 'Use a structured prompt format: subject + scene + style + lighting + camera + quality parameters. Keep prompt text in English for cross-model reuse and more stable output control.',
    scenarioTitle: '4) Scenarios and Model Selection Advice',
    scenarioText: 'For batch commercial assets, prioritize consistency. For concept and style exploration, increase style variance. Use the decision table below as a practical shortcut.',
    finalTitle: '5) Final Verdict and Action Path',
    finalText: 'In practical tests, V8 Alpha is stronger for stable production pipelines, while Banana 2 is better for ideation and style spread. Start with small-batch prompt validation, then scale with parameter tuning.',
    ctaText: 'Use Midjourney Now',
  },
  es: { title: 'Midjourney V8 Alpha vs Banana 2: prueba multestilo', intro: 'Tutorial práctico sobre midjourney keywords y midjourney prompts. Comparamos Midjourney V8 Alpha y Banana 2 en pruebas multestilo para evaluar control, detalle, eficiencia y ajuste comercial.', dateLabel: 'Publicado', keywordLabel: 'Palabras clave', setupTitle: '1) Alcance y método', setupText: 'La comparación elimina contenido comercial irrelevante y mantiene solo criterios técnicos. Usamos la misma consigna en fotografía, ilustración, póster y e-commerce para resultados repetibles.', styleTitle: '2) Comparativa multestilo', styleText: 'Con la misma semántica, V8 Alpha ofrece mayor estabilidad en composición y textura; Banana 2 destaca en expansión de estilo y atmósfera.', promptTitle: '3) Estructura de prompt y parámetros', promptText: 'Estructura recomendada: sujeto + escena + estilo + luz + cámara + calidad. Mantén el prompt en inglés para mejor reutilización y control.', scenarioTitle: '4) Escenarios y selección', scenarioText: 'Para producción comercial por lotes, prioriza estabilidad. Para exploración creativa, incrementa variables de estilo.', finalTitle: '5) Conclusión', finalText: 'V8 Alpha encaja mejor en pipelines estables; Banana 2 en exploración visual. Valida con lotes pequeños y luego escala.', ctaText: 'Usar Midjourney ahora' },
  ar: { title: 'مقارنة Midjourney V8 Alpha مع Banana 2: اختبار متعدد الأنماط', intro: 'دليل عملي حول midjourney keywords وmidjourney prompts. نقارن Midjourney V8 Alpha وBanana 2 عبر اختبارات متعددة الأنماط لقياس التحكم، ثبات التفاصيل، الكفاءة، والملاءمة التجارية.', dateLabel: 'تاريخ النشر', keywordLabel: 'الكلمات المفتاحية', setupTitle: '1) نطاق الاختبار والمنهجية', setupText: 'تم حذف المحتوى التسويقي غير المرتبط والتركيز على تقييم قدرة النموذج فقط. نستخدم نفس الوصف عبر التصوير والرسوم والبوسترات والتجارة الإلكترونية لضمان قابلية التكرار.', styleTitle: '2) مقارنة النتائج متعددة الأنماط', styleText: 'مع نفس المعنى، يقدّم V8 Alpha ثباتًا أعلى في التكوين والخامات، بينما يمنح Banana 2 مرونة أكبر في التنويع الأسلوبي والأجواء.', promptTitle: '3) بنية البرومبت ونصائح المعلمات', promptText: 'التركيب المقترح: موضوع + مشهد + أسلوب + إضاءة + كاميرا + جودة. يفضل إبقاء البرومبت بالإنجليزية لثبات أفضل عبر النماذج.', scenarioTitle: '4) سيناريوهات الاستخدام واختيار النموذج', scenarioText: 'للإنتاج التجاري الكثيف، اختر الثبات. للاستكشاف الإبداعي، زد متغيرات الأسلوب.', finalTitle: '5) الخلاصة', finalText: 'V8 Alpha أفضل لسير إنتاج مستقر، وBanana 2 أفضل لمرحلة الاستكشاف. ابدأ بعينات صغيرة ثم وسّع.', ctaText: 'استخدم Midjourney الآن' },
  pt: { title: 'Midjourney V8 Alpha vs Banana 2: teste multestilo', intro: 'Tutorial prático com foco em midjourney keywords e midjourney prompts. Comparamos Midjourney V8 Alpha e Banana 2 em vários estilos para avaliar controle, detalhe, eficiência e uso comercial.', dateLabel: 'Publicado em', keywordLabel: 'Palavras-chave', setupTitle: '1) Escopo e método', setupText: 'Removemos partes promocionais e mantemos apenas avaliação técnica. A mesma proposta é testada em fotografia, ilustração, cartaz e e-commerce.', styleTitle: '2) Comparação multestilo', styleText: 'Com a mesma semântica, V8 Alpha é mais estável em composição e textura; Banana 2 é mais flexível para variação de estilo e clima.', promptTitle: '3) Estrutura de prompt e parâmetros', promptText: 'Estrutura recomendada: sujeito + cena + estilo + luz + câmera + qualidade. Manter prompts em inglês ajuda na consistência entre modelos.', scenarioTitle: '4) Cenários e escolha', scenarioText: 'Para produção comercial em lote, priorize estabilidade. Para exploração criativa, aumente variáveis de estilo.', finalTitle: '5) Conclusão', finalText: 'V8 Alpha funciona melhor para pipeline estável; Banana 2 para exploração criativa. Valide em lote pequeno e escale.', ctaText: 'Usar Midjourney agora' },
  id: { title: 'Midjourney V8 Alpha vs Banana 2: ulasan multi-gaya', intro: 'Tutorial ini membahas midjourney keywords dan midjourney prompts. Kami membandingkan Midjourney V8 Alpha dan Banana 2 dalam banyak gaya untuk menilai kontrol gaya, stabilitas detail, efisiensi, dan kecocokan komersial.', dateLabel: 'Dipublikasikan', keywordLabel: 'Kata kunci', setupTitle: '1) Ruang lingkup dan metode', setupText: 'Konten promosi yang tidak relevan dihapus, fokus pada kemampuan model. Brief yang sama diuji di fotografi, ilustrasi, poster, dan visual e-commerce.', styleTitle: '2) Perbandingan hasil multi-gaya', styleText: 'Dengan semantik yang sama, V8 Alpha lebih stabil dalam komposisi dan tekstur; Banana 2 lebih fleksibel untuk eksplorasi gaya dan atmosfer.', promptTitle: '3) Struktur prompt dan tips parameter', promptText: 'Struktur prompt: subjek + adegan + gaya + pencahayaan + kamera + kualitas. Prompt tetap berbahasa Inggris untuk reuse lintas model.', scenarioTitle: '4) Skenario penggunaan', scenarioText: 'Untuk produksi komersial batch, utamakan konsistensi. Untuk eksplorasi konsep, tingkatkan variabel gaya.', finalTitle: '5) Kesimpulan', finalText: 'V8 Alpha lebih cocok untuk pipeline stabil, Banana 2 lebih cocok untuk eksplorasi kreatif. Mulai dari batch kecil lalu scale.', ctaText: 'Gunakan Midjourney sekarang' },
  ms: { title: 'Midjourney V8 Alpha vs Banana 2: ulasan pelbagai gaya', intro: 'Tutorial ini memfokuskan midjourney keywords dan midjourney prompts. Kami membandingkan Midjourney V8 Alpha dengan Banana 2 melalui ujian pelbagai gaya untuk menilai kawalan gaya, kestabilan butiran, kecekapan, dan kesesuaian komersial.', dateLabel: 'Diterbitkan', keywordLabel: 'Kata kunci', setupTitle: '1) Skop dan kaedah', setupText: 'Bahagian promosi yang tidak berkaitan dibuang dan hanya analisis teknikal dikekalkan. Taklimat yang sama diuji dalam fotografi, ilustrasi, poster dan e-dagang.', styleTitle: '2) Perbandingan hasil pelbagai gaya', styleText: 'Dengan semantik yang sama, V8 Alpha lebih stabil pada komposisi dan tekstur; Banana 2 lebih fleksibel untuk variasi gaya dan suasana.', promptTitle: '3) Struktur prompt dan tip parameter', promptText: 'Struktur disyorkan: subjek + adegan + gaya + pencahayaan + kamera + kualiti. Kekalkan prompt dalam bahasa Inggeris untuk penggunaan silang model.', scenarioTitle: '4) Senario penggunaan', scenarioText: 'Untuk pengeluaran komersial berkelompok, utamakan kestabilan. Untuk eksplorasi kreatif, tingkatkan pemboleh ubah gaya.', finalTitle: '5) Rumusan', finalText: 'V8 Alpha lebih sesuai untuk pipeline stabil, Banana 2 lebih sesuai untuk penerokaan kreatif. Uji batch kecil dahulu kemudian skala.', ctaText: 'Guna Midjourney sekarang' },
  fr: { title: 'Midjourney V8 Alpha vs Banana 2 : benchmark multi-styles', intro: 'Tutoriel axé sur midjourney keywords et midjourney prompts. Nous comparons Midjourney V8 Alpha et Banana 2 sur plusieurs styles pour évaluer contrôle, stabilité des détails, efficacité et adaptation business.', dateLabel: 'Publié le', keywordLabel: 'Mots-clés', setupTitle: '1) Périmètre et méthode', setupText: 'Nous retirons la partie promotionnelle non liée et conservons uniquement l’analyse technique. Même brief testé en photo, illustration, affiche et e-commerce.', styleTitle: '2) Comparaison multi-styles', styleText: 'À sémantique identique, V8 Alpha est plus stable en composition et matière ; Banana 2 est plus souple pour l’exploration de style et d’ambiance.', promptTitle: '3) Structure de prompt et paramètres', promptText: 'Structure recommandée : sujet + scène + style + lumière + caméra + qualité. Conservez le prompt en anglais pour une meilleure réutilisation.', scenarioTitle: '4) Scénarios et choix', scenarioText: 'Pour la production commerciale en lot, privilégiez la stabilité. Pour l’idéation, augmentez les variables de style.', finalTitle: '5) Conclusion', finalText: 'V8 Alpha convient mieux aux pipelines stables ; Banana 2 à l’exploration créative. Validez en petit lot, puis montez en charge.', ctaText: 'Utiliser Midjourney maintenant' },
  ru: { title: 'Midjourney V8 Alpha vs Banana 2: мультистилевой разбор', intro: 'Практический туториал по midjourney keywords и midjourney prompts. Сравниваем Midjourney V8 Alpha и Banana 2 в разных стилях: контроль, детализация, скорость и коммерческая применимость.', dateLabel: 'Опубликовано', keywordLabel: 'Ключевые слова', setupTitle: '1) Область теста и методика', setupText: 'Удалены рекламные блоки, оставлена только техническая часть. Один и тот же бриф тестируется в фото, иллюстрации, постере и e-commerce визуалах.', styleTitle: '2) Сравнение результатов по стилям', styleText: 'При одинаковой семантике V8 Alpha стабильнее по композиции и материалам, Banana 2 гибче в стилевых отклонениях и атмосфере.', promptTitle: '3) Структура промпта и параметры', promptText: 'Рекомендуемая структура: объект + сцена + стиль + свет + камера + качество. Текст промпта лучше оставлять на английском для стабильности.', scenarioTitle: '4) Сценарии применения', scenarioText: 'Для массовой коммерческой графики — приоритет стабильности. Для концептов и стилистического поиска — больше стилевых переменных.', finalTitle: '5) Вывод', finalText: 'V8 Alpha лучше для стабильного продакшн-пайплайна, Banana 2 — для креативного поиска. Начинайте с малого батча и масштабируйте.', ctaText: 'Использовать Midjourney сейчас' },
  hi: { title: 'Midjourney V8 Alpha बनाम Banana 2: मल्टी-स्टाइल समीक्षा', intro: 'यह ट्यूटोरियल midjourney keywords और midjourney prompts पर केंद्रित है। Midjourney V8 Alpha और Banana 2 का मल्टी-स्टाइल परीक्षण करके नियंत्रण, डिटेल स्थिरता, दक्षता और बिज़नेस उपयोगिता की तुलना की गई है।', dateLabel: 'प्रकाशित', keywordLabel: 'कीवर्ड', setupTitle: '1) टेस्ट स्कोप और मेथड', setupText: 'गैर-जरूरी प्रचार सामग्री हटाकर केवल मॉडल क्षमता पर फोकस रखा गया है। एक ही ब्रीफ को फोटोग्राफी, इलस्ट्रेशन, पोस्टर और ई-कॉमर्स विजुअल में टेस्ट किया गया।', styleTitle: '2) मल्टी-स्टाइल आउटपुट तुलना', styleText: 'एक ही सेमांटिक इनपुट पर V8 Alpha कम्पोज़िशन और मटीरियल डिटेल में अधिक स्थिर है, जबकि Banana 2 स्टाइल एक्सप्लोरेशन में अधिक लचीला है।', promptTitle: '3) प्रॉम्प्ट संरचना और पैरामीटर टिप्स', promptText: 'सुझाया गया ढांचा: subject + scene + style + lighting + camera + quality. क्रॉस-मॉडल स्थिरता के लिए प्रॉम्प्ट टेक्स्ट अंग्रेज़ी में रखें।', scenarioTitle: '4) उपयोग परिदृश्य', scenarioText: 'बैच कमर्शियल प्रोडक्शन के लिए स्थिरता को प्राथमिकता दें। क्रिएटिव एक्सप्लोरेशन के लिए स्टाइल वेरिएबल बढ़ाएँ।', finalTitle: '5) निष्कर्ष', finalText: 'V8 Alpha स्थिर प्रोडक्शन पाइपलाइन में बेहतर है, Banana 2 रचनात्मक विस्तार में। छोटे बैच से सत्यापन कर स्केल करें।', ctaText: 'Midjourney अभी उपयोग करें' },
  ja: { title: 'Midjourney V8 Alpha と Banana 2 の多スタイル比較レビュー', intro: 'midjourneyキーワード と midjourneyプロンプト を軸に、Midjourney V8 Alpha と Banana 2 を同一課題・多スタイルで比較した実践チュートリアルです。', dateLabel: '公開日', keywordLabel: 'キーワード', setupTitle: '1) 検証範囲と方法', setupText: '無関係な広告要素を除き、モデル能力に関する情報だけを整理。写真・イラスト・ポスター・EC ビジュアルで同一ブリーフ比較を行います。', styleTitle: '2) 多スタイル出力比較', styleText: '同一セマンティクスでは、V8 Alpha は構図と質感の安定性が高く、Banana 2 はスタイル拡張と空気感表現に強みがあります。', promptTitle: '3) プロンプト構造とパラメータ運用', promptText: '推奨構造は「subject + scene + style + lighting + camera + quality」。クロスモデル運用のため、プロンプト本文は英語のまま維持してください。', scenarioTitle: '4) 利用シーンと選定', scenarioText: '量産系の商用制作は安定性優先、コンセプト探索はスタイル変数を増やすのが有効です。', finalTitle: '5) まとめ', finalText: '安定運用なら V8 Alpha、発想拡張なら Banana 2。まず小ロット検証し、目的別にパラメータを最適化して拡張しましょう。', ctaText: '今すぐMidjourneyを使う' },
  de: { title: 'Midjourney V8 Alpha vs Banana 2: Multi-Style-Praxistest', intro: 'Dieses Tutorial zu midjourney keywords und midjourney prompts vergleicht Midjourney V8 Alpha und Banana 2 in mehreren Stilen: Steuerbarkeit, Detailstabilität, Effizienz und kommerzielle Eignung.', dateLabel: 'Veröffentlicht', keywordLabel: 'Schlüsselwörter', setupTitle: '1) Testumfang und Methode', setupText: 'Irrelevante Werbeteile wurden entfernt, Fokus liegt auf modellrelevanten Erkenntnissen. Der gleiche Brief wird in Foto, Illustration, Poster und E-Commerce getestet.', styleTitle: '2) Multi-Style-Ausgabe im Vergleich', styleText: 'Bei gleicher Semantik ist V8 Alpha stabiler bei Komposition und Materialdetails; Banana 2 ist flexibler bei Stilvariation und Stimmung.', promptTitle: '3) Prompt-Struktur und Parameter-Tipps', promptText: 'Empfohlene Struktur: subject + scene + style + lighting + camera + quality. Prompttext für stabile Ergebnisse möglichst auf Englisch belassen.', scenarioTitle: '4) Einsatzszenarien und Auswahl', scenarioText: 'Für kommerzielle Batch-Produktion zählt Konsistenz. Für Konzept- und Stilforschung sind mehr Stilvariablen sinnvoll.', finalTitle: '5) Fazit', finalText: 'V8 Alpha passt besser in stabile Produktionspipelines, Banana 2 besser in kreative Explorationsphasen. Erst klein testen, dann skalieren.', ctaText: 'Midjourney jetzt nutzen' },
  ko: { title: 'Midjourney V8 Alpha vs Banana 2 멀티 스타일 실전 비교', intro: 'midjourney 키워드와 midjourney 프롬프트 중심의 실전 튜토리얼입니다. Midjourney V8 Alpha와 Banana 2를 동일 주제로 다중 스타일 비교해 제어력, 디테일 안정성, 효율, 상업 적합성을 점검합니다.', dateLabel: '게시일', keywordLabel: '키워드', setupTitle: '1) 테스트 범위와 방법', setupText: '불필요한 광고성 내용을 제외하고 모델 성능 분석만 유지했습니다. 동일 브리프를 사진, 일러스트, 포스터, 이커머스 비주얼에 적용했습니다.', styleTitle: '2) 멀티 스타일 결과 비교', styleText: '동일 의미 입력에서 V8 Alpha는 구도/재질 디테일이 더 안정적이고, Banana 2는 스타일 확장과 분위기 표현이 더 유연합니다.', promptTitle: '3) 프롬프트 구조와 파라미터 팁', promptText: '권장 구조: subject + scene + style + lighting + camera + quality. 크로스 모델 재사용을 위해 프롬프트 본문은 영어 유지가 유리합니다.', scenarioTitle: '4) 사용 시나리오', scenarioText: '배치 상업 제작은 안정성 우선, 콘셉트 탐색은 스타일 변수 확대가 효과적입니다.', finalTitle: '5) 결론', finalText: '안정 생산에는 V8 Alpha, 창의 확장에는 Banana 2가 유리합니다. 소량 검증 후 파라미터를 고정해 확장하세요.', ctaText: '지금 Midjourney 사용하기' },
  tr: { title: 'Midjourney V8 Alpha vs Banana 2: çok tarzlı inceleme', intro: 'Bu eğitim, midjourney keywords ve midjourney prompts odağında Midjourney V8 Alpha ile Banana 2’yi karşılaştırır. Stil kontrolü, detay kararlılığı, üretim verimi ve ticari uygunluk birlikte değerlendirilir.', dateLabel: 'Yayın tarihi', keywordLabel: 'Anahtar kelimeler', setupTitle: '1) Test kapsamı ve yöntem', setupText: 'Konu dışı reklam/akış bölümleri çıkarıldı, yalnızca model performansı bırakıldı. Aynı brief fotoğraf, illüstrasyon, afiş ve e-ticaret görsellerinde test edildi.', styleTitle: '2) Çok tarzlı çıktı karşılaştırması', styleText: 'Aynı semantik girdide V8 Alpha kompozisyon ve malzeme detayında daha stabil, Banana 2 ise stil yayılımı ve atmosferde daha esnek.', promptTitle: '3) Prompt yapısı ve parametre ipuçları', promptText: 'Önerilen yapı: subject + scene + style + lighting + camera + quality. Modeller arası tutarlılık için prompt metnini İngilizce tutmak faydalıdır.', scenarioTitle: '4) Kullanım senaryoları', scenarioText: 'Toplu ticari üretimde istikrarı önceleyin. Konsept ve stil keşfinde stil değişkenlerini artırın.', finalTitle: '5) Sonuç', finalText: 'V8 Alpha istikrarlı üretim hattında güçlü, Banana 2 yaratıcı keşifte avantajlıdır. Küçük örnekle doğrulayıp sonra ölçekleyin.', ctaText: 'Midjourney’i şimdi kullan' },
  vi: { title: 'Midjourney V8 Alpha vs Banana 2: đánh giá đa phong cách', intro: 'Bài hướng dẫn này tập trung vào midjourney keywords và midjourney prompts. Chúng tôi so sánh Midjourney V8 Alpha và Banana 2 bằng cùng đề bài đa phong cách để đánh giá mức kiểm soát, độ ổn định chi tiết, hiệu suất và tính thương mại.', dateLabel: 'Ngày đăng', keywordLabel: 'Từ khóa', setupTitle: '1) Phạm vi và phương pháp', setupText: 'Loại bỏ phần quảng cáo không liên quan, chỉ giữ nội dung kỹ thuật. Cùng một brief được test ở ảnh chụp, minh họa, poster và visual e-commerce.', styleTitle: '2) So sánh kết quả đa phong cách', styleText: 'Với cùng ngữ nghĩa, V8 Alpha ổn định hơn về bố cục và chất liệu; Banana 2 linh hoạt hơn ở biến thiên phong cách và bầu không khí.', promptTitle: '3) Cấu trúc prompt và mẹo tham số', promptText: 'Cấu trúc khuyến nghị: subject + scene + style + lighting + camera + quality. Nên giữ prompt bằng tiếng Anh để tái sử dụng tốt hơn giữa các model.', scenarioTitle: '4) Kịch bản sử dụng', scenarioText: 'Sản xuất thương mại hàng loạt ưu tiên ổn định; giai đoạn khám phá sáng tạo tăng biến phong cách.', finalTitle: '5) Kết luận', finalText: 'V8 Alpha phù hợp pipeline ổn định, Banana 2 phù hợp khám phá sáng tạo. Hãy thử batch nhỏ rồi mở rộng.', ctaText: 'Dùng Midjourney ngay' },
  th: { title: 'เทียบ Midjourney V8 Alpha กับ Banana 2 แบบหลายสไตล์', intro: 'บทความสอนใช้งานนี้โฟกัสที่ midjourney keywords และ midjourney prompts โดยเทียบ Midjourney V8 Alpha กับ Banana 2 ในโจทย์เดียวหลายสไตล์ เพื่อดูการควบคุม รายละเอียด ความเร็ว และความเหมาะกับงานเชิงพาณิชย์', dateLabel: 'วันที่เผยแพร่', keywordLabel: 'คีย์เวิร์ด', setupTitle: '1) ขอบเขตและวิธีทดสอบ', setupText: 'ตัดเนื้อหาเชิงโฆษณาที่ไม่เกี่ยวข้องออก เหลือเฉพาะสาระด้านความสามารถโมเดล ใช้โจทย์เดียวกับงานภาพถ่าย ภาพประกอบ โปสเตอร์ และอีคอมเมิร์ซ', styleTitle: '2) เปรียบเทียบผลลัพธ์หลายสไตล์', styleText: 'ภายใต้ความหมายเดียวกัน V8 Alpha เสถียรกว่าในองค์ประกอบและวัสดุ ส่วน Banana 2 ยืดหยุ่นกว่าในโทนและบรรยากาศ', promptTitle: '3) โครงสร้างพรอมป์และการตั้งค่า', promptText: 'โครงสร้างแนะนำ: subject + scene + style + lighting + camera + quality ควรรักษา prompt เป็นภาษาอังกฤษเพื่อให้ควบคุมผลลัพธ์ได้สม่ำเสมอ', scenarioTitle: '4) สถานการณ์ใช้งานและการเลือกโมเดล', scenarioText: 'งานเชิงพาณิชย์แบบเป็นชุดให้เน้นความเสถียร งานสำรวจสไตล์ให้เพิ่มตัวแปรสไตล์', finalTitle: '5) สรุป', finalText: 'V8 Alpha เหมาะกับสายการผลิตที่ต้องเสถียร ส่วน Banana 2 เหมาะกับช่วงทดลองไอเดีย เริ่มจากตัวอย่างเล็กแล้วค่อยขยาย', ctaText: 'ใช้ Midjourney ทันที' },
  it: { title: 'Midjourney V8 Alpha vs Banana 2: test multi-stile', intro: 'Tutorial pratico su midjourney keywords e midjourney prompts. Confrontiamo Midjourney V8 Alpha e Banana 2 su più stili per valutare controllo, stabilità del dettaglio, efficienza e aderenza commerciale.', dateLabel: 'Data di pubblicazione', keywordLabel: 'Parole chiave', setupTitle: '1) Ambito e metodo', setupText: 'Rimossi i contenuti promozionali non pertinenti, mantenuta solo l’analisi tecnica. Stesso brief testato su fotografia, illustrazione, poster ed e-commerce.', styleTitle: '2) Confronto multi-stile', styleText: 'A parità semantica, V8 Alpha è più stabile su composizione e materiali; Banana 2 è più flessibile su variazione stilistica e atmosfera.', promptTitle: '3) Struttura prompt e parametri', promptText: 'Struttura consigliata: subject + scene + style + lighting + camera + quality. Meglio mantenere il prompt in inglese per riuso cross-model.', scenarioTitle: '4) Scenari d’uso', scenarioText: 'Per produzione commerciale in batch, priorità alla stabilità. Per esplorazione creativa, aumentare le variabili di stile.', finalTitle: '5) Conclusione', finalText: 'V8 Alpha è più adatto a pipeline stabili, Banana 2 a fasi esplorative. Validare su piccoli batch e poi scalare.', ctaText: 'Usa Midjourney ora' },
  fa: { title: 'مقایسه Midjourney V8 Alpha و Banana 2 با تست چندسبکی', intro: 'این آموزش روی midjourney keywords و midjourney prompts تمرکز دارد. Midjourney V8 Alpha و Banana 2 را با یک موضوع و چند سبک مقایسه می‌کنیم تا کنترل، پایداری جزئیات، سرعت و کاربرد تجاری را بسنجیم.', dateLabel: 'تاریخ انتشار', keywordLabel: 'کلمات کلیدی', setupTitle: '۱) دامنه و روش ارزیابی', setupText: 'بخش‌های تبلیغاتی نامرتبط حذف شده و فقط تحلیل فنی باقی مانده است. یک بریف ثابت در عکاسی، تصویرسازی، پوستر و ای‌کامرس آزمون شده است.', styleTitle: '۲) مقایسه خروجی چندسبکی', styleText: 'با معنای یکسان، V8 Alpha در ترکیب‌بندی و جنس متریال پایدارتر است؛ Banana 2 در تنوع سبک و حال‌وهوا انعطاف بیشتری دارد.', promptTitle: '۳) ساختار پرامپت و نکات پارامتر', promptText: 'ساختار پیشنهادی: subject + scene + style + lighting + camera + quality. بهتر است متن پرامپت برای پایداری بیشتر به انگلیسی بماند.', scenarioTitle: '۴) سناریوهای استفاده', scenarioText: 'برای تولید تجاری انبوه، پایداری را اولویت دهید. برای اکتشاف خلاقانه، متغیرهای سبک را بیشتر کنید.', finalTitle: '۵) جمع‌بندی', finalText: 'V8 Alpha برای خط تولید پایدار مناسب‌تر است و Banana 2 برای مرحله ایده‌پردازی. ابتدا با نمونه کوچک تست و سپس مقیاس‌دهی کنید.', ctaText: 'همین حالا Midjourney را استفاده کن' },
  nl: { title: 'Midjourney V8 Alpha vs Banana 2: multi-style review', intro: 'Deze tutorial over midjourney keywords en midjourney prompts vergelijkt Midjourney V8 Alpha en Banana 2 op meerdere stijlen: controle, detailstabiliteit, efficiëntie en commerciële inzetbaarheid.', dateLabel: 'Publicatiedatum', keywordLabel: 'Trefwoorden', setupTitle: '1) Scope en methode', setupText: 'Niet-relevante promo-inhoud is verwijderd; alleen modelprestaties blijven over. Dezelfde briefing is getest op fotografie, illustratie, poster en e-commerce visual.', styleTitle: '2) Multi-style vergelijking', styleText: 'Bij dezelfde semantiek is V8 Alpha stabieler in compositie en materiaaldetail; Banana 2 is flexibeler in stijlvariatie en sfeer.', promptTitle: '3) Promptstructuur en parameters', promptText: 'Aanbevolen structuur: subject + scene + style + lighting + camera + quality. Houd de prompt in het Engels voor hergebruik over modellen heen.', scenarioTitle: '4) Toepassingsscenario’s', scenarioText: 'Voor commerciële batchproductie staat consistentie voorop. Voor conceptverkenning verhoog je stijlvariabelen.', finalTitle: '5) Conclusie', finalText: 'V8 Alpha past beter bij stabiele productiepijplijnen, Banana 2 bij creatieve verkenning. Start klein en schaal daarna op.', ctaText: 'Gebruik Midjourney nu' },
  pl: { title: 'Midjourney V8 Alpha vs Banana 2: test wielu stylów', intro: 'Ten poradnik o midjourney keywords i midjourney prompts porównuje Midjourney V8 Alpha oraz Banana 2 pod kątem kontroli stylu, stabilności detalu, wydajności i użyteczności komercyjnej.', dateLabel: 'Data publikacji', keywordLabel: 'Słowa kluczowe', setupTitle: '1) Zakres i metoda', setupText: 'Usunięto treści reklamowe niezwiązane z tematem, pozostawiono wyłącznie część techniczną. Ten sam brief testujemy w fotografii, ilustracji, plakacie i e-commerce.', styleTitle: '2) Porównanie wyników wielostylowych', styleText: 'Przy tej samej semantyce V8 Alpha jest stabilniejszy w kompozycji i materiałach, a Banana 2 bardziej elastyczny w wariacjach stylu i klimatu.', promptTitle: '3) Struktura promptu i parametry', promptText: 'Zalecana struktura: subject + scene + style + lighting + camera + quality. Warto pozostawić prompt po angielsku dla stabilności między modelami.', scenarioTitle: '4) Scenariusze użycia', scenarioText: 'Dla produkcji komercyjnej w batchu priorytetem jest stabilność. Dla eksploracji kreatywnej zwiększ zmienne stylu.', finalTitle: '5) Wniosek', finalText: 'V8 Alpha lepiej sprawdza się w stabilnym pipeline, Banana 2 w fazie eksploracji. Zacznij od małej próbki i skaluj.', ctaText: 'Użyj Midjourney teraz' },
  sv: { title: 'Midjourney V8 Alpha vs Banana 2: flerstilstest', intro: 'Den här guiden om midjourney keywords och midjourney prompts jämför Midjourney V8 Alpha och Banana 2 i flera stilar för att bedöma kontroll, detaljstabilitet, effektivitet och kommersiell passform.', dateLabel: 'Publicerad', keywordLabel: 'Nyckelord', setupTitle: '1) Omfattning och metod', setupText: 'Icke-relevant reklaminnehåll har tagits bort och fokus ligger på modellkapacitet. Samma brief testas i foto, illustration, poster och e-handel.', styleTitle: '2) Jämförelse av flerstilsresultat', styleText: 'Med samma semantik är V8 Alpha mer stabil i komposition och materialdetalj, medan Banana 2 är mer flexibel i stilvariation och stämning.', promptTitle: '3) Promptstruktur och parametertips', promptText: 'Rekommenderad struktur: subject + scene + style + lighting + camera + quality. Behåll prompten på engelska för bättre återanvändning mellan modeller.', scenarioTitle: '4) Användningsscenarier', scenarioText: 'För kommersiell batchproduktion: prioritera stabilitet. För kreativ utforskning: öka stilvariabler.', finalTitle: '5) Slutsats', finalText: 'V8 Alpha passar bättre för stabil produktion, Banana 2 för kreativ utforskning. Börja med liten batch och skala upp.', ctaText: 'Använd Midjourney nu' },
  uk: { title: 'Midjourney V8 Alpha проти Banana 2: багатостильовий огляд', intro: 'Цей туторіал про midjourney keywords і midjourney prompts порівнює Midjourney V8 Alpha та Banana 2 у багатьох стилях: контроль, стабільність деталей, ефективність і комерційна придатність.', dateLabel: 'Опубліковано', keywordLabel: 'Ключові слова', setupTitle: '1) Обсяг і методика', setupText: 'Прибрано нерелевантні рекламні фрагменти, залишено лише технічний аналіз. Один і той самий бриф протестовано в фото, ілюстрації, постерах та e-commerce візуалах.', styleTitle: '2) Порівняння багатостильових результатів', styleText: 'За однакової семантики V8 Alpha стабільніший у композиції та матеріалах, а Banana 2 гнучкіший у стилістичних варіаціях та атмосфері.', promptTitle: '3) Структура промпту і параметри', promptText: 'Рекомендована структура: subject + scene + style + lighting + camera + quality. Текст промпту краще лишати англійською для кращої стабільності між моделями.', scenarioTitle: '4) Сценарії використання', scenarioText: 'Для масового комерційного продакшену пріоритет — стабільність. Для креативного пошуку — більше стильових змінних.', finalTitle: '5) Висновок', finalText: 'V8 Alpha краще підходить для стабільного виробничого контуру, Banana 2 — для етапу креативного пошуку. Починайте з малого батчу й масштабуйте.', ctaText: 'Використати Midjourney зараз' },
  ro: { title: 'Midjourney V8 Alpha vs Banana 2: evaluare multi-stil', intro: 'Acest tutorial despre midjourney keywords și midjourney prompts compară Midjourney V8 Alpha și Banana 2 în mai multe stiluri: control, stabilitate a detaliului, eficiență și potrivire comercială.', dateLabel: 'Publicat', keywordLabel: 'Cuvinte cheie', setupTitle: '1) Domeniu și metodă', setupText: 'Conținutul promoțional nerelevant a fost eliminat, păstrând doar analiza tehnică. Același brief este testat pe fotografie, ilustrație, poster și e-commerce.', styleTitle: '2) Comparație multi-stil', styleText: 'La aceeași semantică, V8 Alpha este mai stabil pe compoziție și materiale, iar Banana 2 este mai flexibil pe variație stilistică și atmosferă.', promptTitle: '3) Structură prompt și parametri', promptText: 'Structură recomandată: subject + scene + style + lighting + camera + quality. Menține promptul în engleză pentru reutilizare mai bună între modele.', scenarioTitle: '4) Scenarii de utilizare', scenarioText: 'Pentru producție comercială în lot, prioritizează stabilitatea. Pentru explorare creativă, crește variabilele de stil.', finalTitle: '5) Concluzie', finalText: 'V8 Alpha este mai potrivit pentru pipeline stabil, Banana 2 pentru explorare creativă. Începe cu lot mic și scalează.', ctaText: 'Folosește Midjourney acum' },
};

function getCopy(locale: string): Copy {
  return (copyByLocale as Record<string, Copy>)[locale] ?? copyByLocale.en;
}

export function getMidjourneyV8Banana2Article(locale: string): MidjourneyV8Article {
  const c = getCopy(locale);
  const L = getArticleLayout(locale);
  const setupBlocks: MidjourneyV8Article['sections'][number]['blocks'] = [
    { type: 'paragraph', text: `${c.dateLabel}：${PUB_DATE}` },
    { type: 'paragraph', text: `${c.keywordLabel}：${L.keywordValues}` },
    ...(c.setupParagraphs?.length
      ? c.setupParagraphs.map((t) => ({ type: 'paragraph' as const, text: t }))
      : [{ type: 'paragraph' as const, text: c.setupText }]),
    { type: 'list', items: L.methodBullets },
  ];
  return {
    slug: SLUG,
    title: c.title,
    intro: c.intro,
    sections: [
      {
        id: 'method',
        title: c.setupTitle,
        blocks: setupBlocks,
      },
      {
        id: 'style-review',
        title: c.styleTitle,
        blocks: [
          { type: 'paragraph', text: c.styleText },
          { type: 'image', src: IMG_1, alt: c.title, caption: L.captions[0] },
          {
            type: 'table',
            headers: L.styleTable.headers,
            rows: L.styleTable.rows,
          },
          { type: 'image', src: IMG_1A, alt: c.title, caption: L.captions[1] },
        ],
      },
      {
        id: 'prompt-guide',
        title: c.promptTitle,
        blocks: [
          { type: 'paragraph', text: c.promptText },
          {
            type: 'list',
            items: L.promptBullets,
          },
        ],
      },
      {
        id: 'scenarios',
        title: c.scenarioTitle,
        blocks: [
          { type: 'paragraph', text: c.scenarioText },
          {
            type: 'table',
            headers: L.scenarioTable.headers,
            rows: L.scenarioTable.rows,
          },
        ],
      },
      {
        id: 'final',
        title: c.finalTitle,
        blocks: [
          { type: 'paragraph', text: c.finalText },
          { type: 'image', src: IMG_2, alt: c.title, caption: L.captions[2] },
          { type: 'cta', text: c.ctaText, url: CTA_URL },
        ],
      },
    ],
  };
}

