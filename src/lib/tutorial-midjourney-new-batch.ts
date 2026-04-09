export type MidjourneyBatchLocale =
  | 'en' | 'zh-cn' | 'zh-tw' | 'es' | 'ar' | 'pt' | 'id' | 'ms' | 'fr' | 'ru'
  | 'hi' | 'ja' | 'de' | 'ko' | 'tr' | 'vi' | 'th' | 'it' | 'fa' | 'nl' | 'pl'
  | 'sv' | 'uk' | 'ro';

export type MidjourneyBatchArticle = {
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

export const MIDJOURNEY_NEW_BATCH_SLUGS = [
  'midjourney-prompts-chinese-architecture-poster',
  'midjourney-prompts-fashion-style',
  'midjourney-aesthetic-national-autumn-poster',
  'midjourney-aesthetic-minimal-oriental-architecture',
  'ai-face-lighting-logic-adjustment',
] as const;

type BatchSlug = (typeof MIDJOURNEY_NEW_BATCH_SLUGS)[number];

const DATE = '2026-04-09';
const CTA_URL = 'https://www.limaxai.com/generate/image-tools/mjpro';

const IMAGE_BY_SLUG: Record<BatchSlug, string> = {
  'midjourney-prompts-chinese-architecture-poster': 'https://img.limaxai.com/aiweb/limaxai-midjourney-16.png',
  'midjourney-prompts-fashion-style': 'https://img.limaxai.com/aiweb/limaxai-midjourney-17.png',
  'midjourney-aesthetic-national-autumn-poster': 'https://img.limaxai.com/aiweb/limaxai-midjourney-18.png',
  'midjourney-aesthetic-minimal-oriental-architecture': 'https://img.limaxai.com/aiweb/limaxai-midjourney-19.png',
  'ai-face-lighting-logic-adjustment': 'https://img.limaxai.com/aiweb/limaxai-midjourney-20.png',
};

type LocalePack = {
  titleTemplate: string;
  introTemplate: string;
  dateLabel: string;
  publishedPrefix: string;
  keywordsLabel: string;
  featuresTitle: string;
  promptTitle: string;
  tipsTitle: string;
  imageTitle: string;
  ctaTitle: string;
  ctaP: string;
  featureItems: [string, string, string];
  tipsItems: [string, string, string];
  tableHeaders: [string, string, string];
  imageCaption: string;
};

const PACK_ZH_CN: LocalePack = {
  titleTemplate: 'Midjourney提示词——{topic}',
  introTemplate: '本教程围绕「{topic}」展开，系统讲解模型能力、提示词结构、实操技巧与应用场景，帮助你稳定产出可发布内容。',
  dateLabel: '发布日期',
  publishedPrefix: '发布于：',
  keywordsLabel: '关键词',
  featuresTitle: '模型能力与适用场景',
  promptTitle: '提示词模板与结构',
  tipsTitle: '实操技巧与避坑',
  imageTitle: '示例配图',
  ctaTitle: '在 LimaxAI 立刻实操',
  ctaP: '将下方提示词直接粘贴到 Midjourney 工作流中，先低成本出草图，再按构图和光影逐步精修。',
  featureItems: [
    '支持多风格、多镜头语言和多构图约束，适合海报、主视觉、社媒封面。',
    '在同一主题下可批量迭代，便于做系列内容与商业化生产。',
    '通过主体、场景、材质、光线、镜头词组合，能显著提高稳定性与可控性。',
  ],
  tipsItems: [
    '提示词建议按 subject + scene + style + lighting + camera + quality 组织。',
    '先锁定构图和主色调，再补充材质、细节、氛围词，避免一次性堆叠过多形容词。',
    '做批量内容时固定核心风格词，仅替换场景变量，可提升系列一致性。',
  ],
  tableHeaders: ['模块', '提示词建议', '用途'],
  imageCaption: '教程示例配图',
};

const PACK_ZH_TW: LocalePack = {
  titleTemplate: 'Midjourney提示詞——{topic}',
  introTemplate: '本教學圍繞「{topic}」展開，系統說明模型能力、提示詞結構、實作技巧與應用場景，幫助你穩定產出可發布內容。',
  dateLabel: '發布日期',
  publishedPrefix: '發布於：',
  keywordsLabel: '關鍵詞',
  featuresTitle: '模型能力與適用場景',
  promptTitle: '提示詞模板與結構',
  tipsTitle: '實作技巧與避坑',
  imageTitle: '示例配圖',
  ctaTitle: '在 LimaxAI 立刻實作',
  ctaP: '將下方提示詞直接貼到 Midjourney 工作流中，先低成本出草圖，再按構圖與光影逐步精修。',
  featureItems: [
    '支援多風格、多鏡頭語言與多構圖約束，適合海報、主視覺、社群封面。',
    '在同一主題下可批量迭代，便於做系列內容與商業化產出。',
    '透過主體、場景、材質、光線、鏡頭詞組合，可顯著提升穩定性與可控性。',
  ],
  tipsItems: [
    '提示詞建議按 subject + scene + style + lighting + camera + quality 組織。',
    '先鎖定構圖和主色調，再補充材質、細節、氛圍詞，避免一次堆疊過多形容詞。',
    '做批量內容時固定核心風格詞，只替換場景變數，可提升系列一致性。',
  ],
  tableHeaders: ['模組', '提示詞建議', '用途'],
  imageCaption: '教學示例配圖',
};

const PACK_EN: LocalePack = {
  titleTemplate: 'Midjourney Prompts: {topic}',
  introTemplate: 'This tutorial focuses on "{topic}", covering model capabilities, prompt structure, practical techniques, and use cases for production-ready output.',
  dateLabel: 'Publish Date',
  publishedPrefix: 'Published:',
  keywordsLabel: 'Keywords',
  featuresTitle: 'Model Capabilities and Use Cases',
  promptTitle: 'Prompt Templates and Structure',
  tipsTitle: 'Practical Tips and Pitfalls',
  imageTitle: 'Reference Image',
  ctaTitle: 'Use on LimaxAI Now',
  ctaP: 'Paste the prompts into Midjourney workflow on LimaxAI, create low-cost drafts first, then refine composition and lighting step by step.',
  featureItems: [
    'Supports multi-style, camera language, and composition constraints for posters, key visuals, and social covers.',
    'Batch iteration under one theme helps you produce coherent series for commercial delivery.',
    'Combining subject, scene, material, lighting, and camera words improves stability and control.',
  ],
  tipsItems: [
    'Use a structured prompt: subject + scene + style + lighting + camera + quality.',
    'Lock composition and color direction first, then add material and atmosphere details.',
    'For batch output, keep style core fixed and only replace scene variables.',
  ],
  tableHeaders: ['Module', 'Prompt Suggestion', 'Use'],
  imageCaption: 'Tutorial reference image',
};

const EXTRA_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
type ExtraLocale = (typeof EXTRA_LOCALES)[number];

const EXTRA_PACKS: Record<ExtraLocale, LocalePack> = {
  es: { ...PACK_EN, titleTemplate: 'Prompts de Midjourney: {topic}', introTemplate: 'Este tutorial trata "{topic}" y explica capacidades del modelo, estructura de prompts, técnicas y escenarios de uso para producción.', dateLabel: 'Fecha de publicación', publishedPrefix: 'Publicado:', keywordsLabel: 'Palabras clave', featuresTitle: 'Capacidades del modelo y casos de uso', promptTitle: 'Plantillas y estructura de prompt', tipsTitle: 'Consejos prácticos y errores comunes', imageTitle: 'Imagen de referencia', ctaTitle: 'Usar en LimaxAI ahora', ctaP: 'Pega estos prompts en Midjourney dentro de LimaxAI, crea borradores rápidos y luego ajusta composición y luz.', tableHeaders: ['Módulo', 'Sugerencia de prompt', 'Uso'], imageCaption: 'Imagen de referencia del tutorial' },
  ar: { ...PACK_EN, titleTemplate: 'مطالبات Midjourney: {topic}', introTemplate: 'يركّز هذا الدليل على "{topic}" ويشرح قدرات النموذج وبنية الـ Prompt والتقنيات العملية وسيناريوهات الاستخدام.', dateLabel: 'تاريخ النشر', publishedPrefix: 'نُشر في:', keywordsLabel: 'الكلمات المفتاحية', featuresTitle: 'قدرات النموذج وحالات الاستخدام', promptTitle: 'قوالب الـ Prompt وبنيته', tipsTitle: 'نصائح عملية وأخطاء شائعة', imageTitle: 'صورة مرجعية', ctaTitle: 'استخدمه الآن على LimaxAI', ctaP: 'انسخ هذه الـ Prompts إلى Midjourney على LimaxAI، أنشئ مسودات سريعة ثم حسّن التكوين والإضاءة.', tableHeaders: ['الوحدة', 'اقتراح Prompt', 'الاستخدام'], imageCaption: 'صورة مرجعية للدليل' },
  pt: { ...PACK_EN, titleTemplate: 'Prompts Midjourney: {topic}', introTemplate: 'Este tutorial aborda "{topic}" e explica capacidades do modelo, estrutura de prompt, técnicas práticas e cenários de uso.', dateLabel: 'Data de publicação', publishedPrefix: 'Publicado:', keywordsLabel: 'Palavras-chave', featuresTitle: 'Capacidades do modelo e cenários', promptTitle: 'Modelos e estrutura de prompt', tipsTitle: 'Dicas práticas e armadilhas', imageTitle: 'Imagem de referência', ctaTitle: 'Usar no LimaxAI agora', ctaP: 'Cole os prompts no Midjourney via LimaxAI, gere rascunhos e refine composição e luz em etapas.', tableHeaders: ['Módulo', 'Sugestão de prompt', 'Uso'], imageCaption: 'Imagem de referência do tutorial' },
  id: { ...PACK_EN, titleTemplate: 'Prompt Midjourney: {topic}', introTemplate: 'Tutorial ini membahas "{topic}" serta kemampuan model, struktur prompt, teknik praktik, dan skenario penggunaan.', dateLabel: 'Tanggal terbit', publishedPrefix: 'Terbit:', keywordsLabel: 'Kata kunci', featuresTitle: 'Kemampuan model dan skenario', promptTitle: 'Template dan struktur prompt', tipsTitle: 'Tips praktik dan jebakan', imageTitle: 'Gambar referensi', ctaTitle: 'Gunakan di LimaxAI sekarang', ctaP: 'Tempel prompt ke Midjourney di LimaxAI, buat draft cepat, lalu haluskan komposisi dan pencahayaan.', tableHeaders: ['Modul', 'Saran prompt', 'Penggunaan'], imageCaption: 'Gambar referensi tutorial' },
  ms: { ...PACK_EN, titleTemplate: 'Prompt Midjourney: {topic}', introTemplate: 'Tutorial ini memfokuskan "{topic}" serta menerangkan keupayaan model, struktur prompt, teknik praktikal dan senario penggunaan.', dateLabel: 'Tarikh terbit', publishedPrefix: 'Diterbitkan:', keywordsLabel: 'Kata kunci', featuresTitle: 'Keupayaan model dan senario', promptTitle: 'Templat dan struktur prompt', tipsTitle: 'Tip praktikal dan perangkap', imageTitle: 'Imej rujukan', ctaTitle: 'Guna di LimaxAI sekarang', ctaP: 'Tampal prompt ke Midjourney di LimaxAI, hasilkan draf pantas lalu perhalusi komposisi dan cahaya.', tableHeaders: ['Modul', 'Cadangan prompt', 'Penggunaan'], imageCaption: 'Imej rujukan tutorial' },
  fr: { ...PACK_EN, titleTemplate: 'Prompts Midjourney : {topic}', introTemplate: 'Ce tutoriel porte sur "{topic}" et détaille les capacités du modèle, la structure de prompt, les techniques et les cas d’usage.', dateLabel: 'Date de publication', publishedPrefix: 'Publié :', keywordsLabel: 'Mots-clés', featuresTitle: 'Capacités du modèle et cas d’usage', promptTitle: 'Modèles et structure de prompt', tipsTitle: 'Conseils pratiques et pièges', imageTitle: 'Image de référence', ctaTitle: 'Utiliser sur LimaxAI maintenant', ctaP: 'Collez les prompts dans Midjourney via LimaxAI, créez des brouillons puis affinez composition et lumière.', tableHeaders: ['Module', 'Suggestion de prompt', 'Usage'], imageCaption: 'Image de référence du tutoriel' },
  ru: { ...PACK_EN, titleTemplate: 'Промпты Midjourney: {topic}', introTemplate: 'Этот туториал посвящён теме "{topic}" и объясняет возможности модели, структуру prompt, практические техники и сценарии использования.', dateLabel: 'Дата публикации', publishedPrefix: 'Опубликовано:', keywordsLabel: 'Ключевые слова', featuresTitle: 'Возможности модели и сценарии', promptTitle: 'Шаблоны и структура prompt', tipsTitle: 'Практика и частые ошибки', imageTitle: 'Референс', ctaTitle: 'Использовать в LimaxAI сейчас', ctaP: 'Вставьте prompt в Midjourney через LimaxAI, сделайте черновики и поэтапно доработайте композицию и свет.', tableHeaders: ['Модуль', 'Рекомендация prompt', 'Применение'], imageCaption: 'Референс из туториала' },
  hi: { ...PACK_EN, titleTemplate: 'Midjourney प्रॉम्प्ट: {topic}', introTemplate: 'यह ट्यूटोरियल "{topic}" पर केंद्रित है और मॉडल क्षमताएं, प्रॉम्प्ट संरचना, व्यावहारिक तकनीकें और उपयोग परिदृश्य समझाता है।', dateLabel: 'प्रकाशन तिथि', publishedPrefix: 'प्रकाशित:', keywordsLabel: 'कीवर्ड', featuresTitle: 'मॉडल क्षमता और उपयोग परिदृश्य', promptTitle: 'प्रॉम्प्ट टेम्पलेट और संरचना', tipsTitle: 'व्यावहारिक टिप्स और सावधानियां', imageTitle: 'संदर्भ चित्र', ctaTitle: 'LimaxAI पर अभी उपयोग करें', ctaP: 'इन प्रॉम्प्ट को LimaxAI के Midjourney वर्कफ़्लो में पेस्ट करें, पहले ड्राफ्ट बनाएं फिर कंपोजिशन और लाइटिंग सुधारें।', tableHeaders: ['मॉड्यूल', 'प्रॉम्प्ट सुझाव', 'उपयोग'], imageCaption: 'ट्यूटोरियल संदर्भ चित्र' },
  ja: { ...PACK_EN, titleTemplate: 'Midjourneyプロンプト：{topic}', introTemplate: '本チュートリアルは「{topic}」をテーマに、モデル機能、プロンプト構造、実践テクニック、活用シーンを解説します。', dateLabel: '公開日', publishedPrefix: '公開：', keywordsLabel: 'キーワード', featuresTitle: 'モデル機能と活用シーン', promptTitle: 'プロンプト構造とテンプレート', tipsTitle: '実践のコツと注意点', imageTitle: '参考画像', ctaTitle: 'LimaxAIで今すぐ使う', ctaP: 'Midjourneyワークフローに貼り付け、下書き生成後に構図と光を段階的に調整します。', tableHeaders: ['モジュール', 'プロンプト提案', '用途'], imageCaption: 'チュートリアル参考画像' },
  de: { ...PACK_EN, titleTemplate: 'Midjourney-Prompts: {topic}', introTemplate: 'Dieses Tutorial zu "{topic}" erklärt Modellfunktionen, Prompt-Struktur, Praxistechniken und Einsatzszenarien für produktionsreife Ergebnisse.', dateLabel: 'Veröffentlichungsdatum', publishedPrefix: 'Veröffentlicht:', keywordsLabel: 'Keywords', featuresTitle: 'Modellfunktionen und Einsatzszenarien', promptTitle: 'Prompt-Struktur und Vorlagen', tipsTitle: 'Praxis-Tipps und Fehlerquellen', imageTitle: 'Referenzbild', ctaTitle: 'Jetzt auf LimaxAI nutzen', ctaP: 'Prompts in Midjourney auf LimaxAI einfügen, zunächst Entwürfe erstellen und dann Komposition und Licht verfeinern.', tableHeaders: ['Modul', 'Prompt-Empfehlung', 'Einsatz'], imageCaption: 'Tutorial-Referenzbild' },
  ko: { ...PACK_EN, titleTemplate: 'Midjourney 프롬프트: {topic}', introTemplate: '이 튜토리얼은 "{topic}"를 중심으로 모델 기능, 프롬프트 구조, 실전 기법, 활용 시나리오를 설명합니다.', dateLabel: '게시일', publishedPrefix: '게시:', keywordsLabel: '키워드', featuresTitle: '모델 기능과 활용 시나리오', promptTitle: '프롬프트 구조와 템플릿', tipsTitle: '실전 팁과 주의점', imageTitle: '참고 이미지', ctaTitle: 'LimaxAI에서 지금 사용', ctaP: '프롬프트를 Midjourney 워크플로에 붙여넣고 초안을 만든 뒤 구도와 조명을 단계적으로 다듬으세요.', tableHeaders: ['모듈', '프롬프트 제안', '용도'], imageCaption: '튜토리얼 참고 이미지' },
  tr: { ...PACK_EN, titleTemplate: 'Midjourney promptları: {topic}', introTemplate: 'Bu eğitim "{topic}" konusuna odaklanır; model yetenekleri, prompt yapısı, pratik teknikler ve kullanım senaryolarını açıklar.', dateLabel: 'Yayın tarihi', publishedPrefix: 'Yayınlandı:', keywordsLabel: 'Anahtar kelimeler', featuresTitle: 'Model özellikleri ve kullanım alanları', promptTitle: 'Prompt yapısı ve şablonlar', tipsTitle: 'Pratik ipuçları ve hatalar', imageTitle: 'Referans görsel', ctaTitle: "LimaxAI'de şimdi kullan", ctaP: "Prompt'u LimaxAI üzerindeki Midjourney akışına yapıştırın, taslak üretin ve kompozisyon ile ışığı adım adım iyileştirin.", tableHeaders: ['Modül', 'Prompt önerisi', 'Kullanım'], imageCaption: 'Eğitim referans görseli' },
  vi: { ...PACK_EN, titleTemplate: 'Prompt Midjourney: {topic}', introTemplate: 'Hướng dẫn này tập trung vào "{topic}", trình bày năng lực mô hình, cấu trúc prompt, kỹ thuật thực hành và tình huống sử dụng.', dateLabel: 'Ngày xuất bản', publishedPrefix: 'Xuất bản:', keywordsLabel: 'Từ khóa', featuresTitle: 'Năng lực mô hình và tình huống sử dụng', promptTitle: 'Mẫu và cấu trúc prompt', tipsTitle: 'Mẹo thực hành và lỗi thường gặp', imageTitle: 'Ảnh tham chiếu', ctaTitle: 'Dùng ngay trên LimaxAI', ctaP: 'Dán prompt vào Midjourney trên LimaxAI, tạo bản nháp trước rồi tinh chỉnh bố cục và ánh sáng.', tableHeaders: ['Mô-đun', 'Gợi ý prompt', 'Mục đích'], imageCaption: 'Ảnh tham chiếu hướng dẫn' },
  th: { ...PACK_EN, titleTemplate: 'พรอมต์ Midjourney: {topic}', introTemplate: 'บทช่วยสอนนี้เน้นหัวข้อ "{topic}" และอธิบายความสามารถของโมเดล โครงสร้างพรอมต์ เทคนิคปฏิบัติ และกรณีใช้งานจริง', dateLabel: 'วันที่เผยแพร่', publishedPrefix: 'เผยแพร่:', keywordsLabel: 'คีย์เวิร์ด', featuresTitle: 'ความสามารถของโมเดลและการใช้งาน', promptTitle: 'โครงสร้างและเทมเพลตพรอมต์', tipsTitle: 'เทคนิคใช้งานและข้อควรระวัง', imageTitle: 'ภาพอ้างอิง', ctaTitle: 'ใช้งานบน LimaxAI ตอนนี้', ctaP: 'วางพรอมต์ใน Midjourney บน LimaxAI สร้างดราฟก่อน แล้วค่อยปรับองค์ประกอบและแสงทีละขั้น', tableHeaders: ['โมดูล', 'คำแนะนำพรอมต์', 'การใช้งาน'], imageCaption: 'ภาพอ้างอิงบทช่วยสอน' },
  it: { ...PACK_EN, titleTemplate: 'Prompt Midjourney: {topic}', introTemplate: 'Questo tutorial su "{topic}" spiega capacità del modello, struttura dei prompt, tecniche pratiche e scenari d’uso.', dateLabel: 'Data di pubblicazione', publishedPrefix: 'Pubblicato:', keywordsLabel: 'Parole chiave', featuresTitle: 'Capacità del modello e scenari', promptTitle: 'Template e struttura del prompt', tipsTitle: 'Suggerimenti pratici e errori comuni', imageTitle: 'Immagine di riferimento', ctaTitle: 'Usa ora su LimaxAI', ctaP: 'Incolla i prompt nel workflow Midjourney su LimaxAI, genera bozze e rifinisci composizione e luce.', tableHeaders: ['Modulo', 'Suggerimento prompt', 'Uso'], imageCaption: 'Immagine di riferimento tutorial' },
  fa: { ...PACK_EN, titleTemplate: 'پرامپت Midjourney: {topic}', introTemplate: 'این آموزش روی «{topic}» تمرکز دارد و قابلیت‌های مدل، ساختار پرامپت، تکنیک‌های عملی و سناریوهای استفاده را توضیح می‌دهد.', dateLabel: 'تاریخ انتشار', publishedPrefix: 'منتشر شده:', keywordsLabel: 'کلیدواژه‌ها', featuresTitle: 'قابلیت‌های مدل و سناریوهای استفاده', promptTitle: 'الگو و ساختار پرامپت', tipsTitle: 'نکات عملی و خطاهای رایج', imageTitle: 'تصویر مرجع', ctaTitle: 'اکنون در LimaxAI استفاده کنید', ctaP: 'پرامپت را در Midjourney داخل LimaxAI قرار دهید، ابتدا پیش‌نویس بگیرید و سپس ترکیب‌بندی و نور را اصلاح کنید.', tableHeaders: ['ماژول', 'پیشنهاد پرامپت', 'کاربرد'], imageCaption: 'تصویر مرجع آموزش' },
  nl: { ...PACK_EN, titleTemplate: 'Midjourney-prompts: {topic}', introTemplate: 'Deze tutorial over "{topic}" behandelt modelmogelijkheden, promptstructuur, praktische technieken en gebruiksscenario’s.', dateLabel: 'Publicatiedatum', publishedPrefix: 'Gepubliceerd:', keywordsLabel: 'Trefwoorden', featuresTitle: 'Modelmogelijkheden en scenario’s', promptTitle: 'Promptstructuur en sjablonen', tipsTitle: 'Praktische tips en valkuilen', imageTitle: 'Referentiebeeld', ctaTitle: 'Nu gebruiken op LimaxAI', ctaP: 'Plak de prompts in Midjourney op LimaxAI, maak eerst schetsen en verfijn daarna compositie en licht.', tableHeaders: ['Module', 'Promptsuggestie', 'Gebruik'], imageCaption: 'Referentiebeeld van tutorial' },
  pl: { ...PACK_EN, titleTemplate: 'Prompty Midjourney: {topic}', introTemplate: 'Ten tutorial o "{topic}" wyjaśnia możliwości modelu, strukturę promptów, techniki praktyczne i scenariusze użycia.', dateLabel: 'Data publikacji', publishedPrefix: 'Opublikowano:', keywordsLabel: 'Słowa kluczowe', featuresTitle: 'Możliwości modelu i zastosowania', promptTitle: 'Struktura i szablony promptów', tipsTitle: 'Wskazówki praktyczne i pułapki', imageTitle: 'Obraz referencyjny', ctaTitle: 'Użyj teraz w LimaxAI', ctaP: 'Wklej prompty do Midjourney w LimaxAI, wygeneruj szkice i dopracuj kompozycję oraz światło.', tableHeaders: ['Moduł', 'Sugestia promptu', 'Zastosowanie'], imageCaption: 'Obraz referencyjny tutorialu' },
  sv: { ...PACK_EN, titleTemplate: 'Midjourney-promptar: {topic}', introTemplate: 'Den här guiden om "{topic}" går igenom modellens funktioner, promptstruktur, praktiska tekniker och användningsscenarier.', dateLabel: 'Publiceringsdatum', publishedPrefix: 'Publicerad:', keywordsLabel: 'Nyckelord', featuresTitle: 'Modellens funktioner och användning', promptTitle: 'Promptstruktur och mallar', tipsTitle: 'Praktiska tips och fallgropar', imageTitle: 'Referensbild', ctaTitle: 'Använd på LimaxAI nu', ctaP: 'Klistra in promptarna i Midjourney på LimaxAI, skapa utkast och förfina sedan komposition och ljus.', tableHeaders: ['Modul', 'Promptförslag', 'Användning'], imageCaption: 'Referensbild för handledning' },
  uk: { ...PACK_EN, titleTemplate: 'Промпти Midjourney: {topic}', introTemplate: 'Цей туторіал про "{topic}" пояснює можливості моделі, структуру prompt, практичні техніки та сценарії використання.', dateLabel: 'Дата публікації', publishedPrefix: 'Опубліковано:', keywordsLabel: 'Ключові слова', featuresTitle: 'Можливості моделі та сценарії', promptTitle: 'Структура і шаблони prompt', tipsTitle: 'Практичні поради та помилки', imageTitle: 'Референс-зображення', ctaTitle: 'Використати в LimaxAI зараз', ctaP: 'Вставте prompt у Midjourney на LimaxAI, створіть чернетки та поступово покращуйте композицію і світло.', tableHeaders: ['Модуль', 'Рекомендація prompt', 'Застосування'], imageCaption: 'Референс із туторіалу' },
  ro: { ...PACK_EN, titleTemplate: 'Prompturi Midjourney: {topic}', introTemplate: 'Acest tutorial despre "{topic}" explică capabilitățile modelului, structura prompturilor, tehnicile practice și scenariile de utilizare.', dateLabel: 'Data publicării', publishedPrefix: 'Publicat:', keywordsLabel: 'Cuvinte cheie', featuresTitle: 'Capabilități model și scenarii', promptTitle: 'Structură și șabloane de prompt', tipsTitle: 'Sfaturi practice și capcane', imageTitle: 'Imagine de referință', ctaTitle: 'Folosește acum pe LimaxAI', ctaP: 'Lipește prompturile în Midjourney pe LimaxAI, generează schițe și rafinează compoziția și lumina.', tableHeaders: ['Modul', 'Sugestie prompt', 'Utilizare'], imageCaption: 'Imagine de referință tutorial' },
};

type ArticleSeed = {
  slug: BatchSlug;
  titleByLocale: Record<'zh-cn' | 'zh-tw' | 'en', string>;
  topicByLocale: Record<'zh-cn' | 'zh-tw' | 'en', string>;
  keywordsByLocale: Record<'zh-cn' | 'zh-tw' | 'en', string>;
  introByLocale: Record<'zh-cn' | 'zh-tw' | 'en', string>;
  rows: [string, string, string][];
};

const SEEDS: ArticleSeed[] = [
  {
    slug: 'midjourney-prompts-chinese-architecture-poster',
    titleByLocale: {
      'zh-cn': 'Midjourney提示词——中式建筑海报',
      'zh-tw': 'Midjourney提示詞——中式建築海報',
      en: 'Midjourney Prompts: Chinese Architecture Posters',
    },
    topicByLocale: {
      'zh-cn': '中式建筑海报',
      'zh-tw': '中式建築海報',
      en: 'Chinese Architecture Posters',
    },
    keywordsByLocale: {
      'zh-cn': 'midjourney关键词、midjourney提示词、midjourney关键词',
      'zh-tw': 'midjourney關鍵詞、midjourney提示詞、midjourney關鍵詞',
      en: 'midjourney keywords, midjourney prompts, midjourney keywords',
    },
    introByLocale: {
      'zh-cn': '本教程围绕中式建筑海报拆解 Midjourney 提示词逻辑：从构图层次、建筑材质到光影氛围，给出可复用模板与场景化建议，便于快速产出可投放海报。',
      'zh-tw': '本教學圍繞中式建築海報拆解 Midjourney 提示詞邏輯：從構圖層次、建築材質到光影氛圍，提供可複用模板與場景化建議，便於快速產出可投放海報。',
      en: 'This tutorial explains how to craft Midjourney prompts for Chinese architecture posters, from composition hierarchy and material language to lighting mood and delivery-ready outputs.',
    },
    rows: [
      ['主体定义', 'Chinese architecture poster, Tang dynasty palace, layered eaves, carved beams, monumental facade', '锁定建筑类型与时代感'],
      ['构图与镜头', 'symmetrical composition, low-angle wide shot, strong foreground-middle-background depth', '提升海报视觉冲击'],
      ['材质与光线', 'weathered wood, glazed tiles, golden sunset rim light, volumetric mist', '强化质感与氛围'],
      ['成片质量', 'ultra-detailed, cinematic color grading, poster-ready, typography-safe negative space', '用于商业发布与排版'],
    ],
  },
  {
    slug: 'midjourney-prompts-fashion-style',
    titleByLocale: {
      'zh-cn': 'Midjourney提示词——时尚风格',
      'zh-tw': 'Midjourney提示詞——時尚風格',
      en: 'Midjourney Prompts: Fashion Style',
    },
    topicByLocale: {
      'zh-cn': '时尚风格',
      'zh-tw': '時尚風格',
      en: 'Fashion Style',
    },
    keywordsByLocale: {
      'zh-cn': 'midjourney关键词、midjourney提示词、midjourney关键词',
      'zh-tw': 'midjourney關鍵詞、midjourney提示詞、midjourney關鍵詞',
      en: 'midjourney keywords, midjourney prompts, midjourney keywords',
    },
    introByLocale: {
      'zh-cn': '本教程聚焦时尚风格出图，讲解如何通过服装廓形、材质描述、妆造语义与摄影语言，稳定产出杂志感与商业感并存的 Midjourney 画面。',
      'zh-tw': '本教學聚焦時尚風格出圖，說明如何透過服裝輪廓、材質描述、妝造語義與攝影語言，穩定產出兼具雜誌感與商業感的 Midjourney 畫面。',
      en: 'This tutorial focuses on fashion-style generation and shows how outfit silhouette, material cues, styling words, and camera language create editorial-quality Midjourney visuals.',
    },
    rows: [
      ['造型设定', 'high-fashion editorial look, tailored silhouette, layered accessories, luxury styling', '建立时尚主视觉基调'],
      ['摄影语言', 'studio portrait, 85mm lens look, softbox key light, subtle rim light, clean backdrop', '获得杂志摄影质感'],
      ['情绪控制', 'confident expression, poised posture, modern chic atmosphere', '统一品牌风格表达'],
      ['输出策略', 'high detail skin texture, crisp fabric folds, print-ready color grading', '适配海报封面与社媒投放'],
    ],
  },
  {
    slug: 'midjourney-aesthetic-national-autumn-poster',
    titleByLocale: {
      'zh-cn': 'Midjourney审美绝了！大美国风秋色海报',
      'zh-tw': 'Midjourney審美絕了！大美國風秋色海報',
      en: 'Midjourney Aesthetics: Grand Chinese Autumn Posters',
    },
    topicByLocale: {
      'zh-cn': '国风秋色海报',
      'zh-tw': '國風秋色海報',
      en: 'Chinese Autumn Posters',
    },
    keywordsByLocale: {
      'zh-cn': 'nanobanana关键词、nanobanana提示词、limaxai',
      'zh-tw': 'nanobanana關鍵詞、nanobanana提示詞、limaxai',
      en: 'nanobanana keywords, nanobanana prompts, limaxai',
    },
    introByLocale: {
      'zh-cn': '本教程以“国风秋色海报”为主题，重点讲解色彩组合、留白与意境词的搭配逻辑，帮助你做出兼具东方审美与商业传播力的海报画面。',
      'zh-tw': '本教學以「國風秋色海報」為主題，重點說明色彩組合、留白與意境詞的搭配邏輯，幫助你做出兼具東方審美與商業傳播力的海報畫面。',
      en: 'This tutorial breaks down Chinese autumn poster aesthetics, including color pairing, poetic negative space, and atmosphere wording for high-converting visual campaigns.',
    },
    rows: [
      ['色彩框架', 'maple red, ginkgo gold, ink-wash gray, low-saturation cinematic palette', '形成统一秋色调性'],
      ['意象元素', 'misty mountains, pavilion corners, distant geese, flowing river haze', '强化国风叙事感'],
      ['版式留白', 'poster layout, large negative space for title and subtitle', '便于后期排版加字'],
      ['细节增强', 'fine brush texture, layered clouds, soft volumetric light, high-detail output', '提升成片质感与完成度'],
    ],
  },
  {
    slug: 'midjourney-aesthetic-minimal-oriental-architecture',
    titleByLocale: {
      'zh-cn': 'Midjourney审美绝了！极简风东方意境的古建之美',
      'zh-tw': 'Midjourney審美絕了！極簡風東方意境的古建之美',
      en: 'Midjourney Aesthetics: Minimal Oriental Ancient Architecture',
    },
    topicByLocale: {
      'zh-cn': '极简东方古建',
      'zh-tw': '極簡東方古建',
      en: 'Minimal Oriental Ancient Architecture',
    },
    keywordsByLocale: {
      'zh-cn': 'nanobanana关键词、nanobanana提示词、limaxai',
      'zh-tw': 'nanobanana關鍵詞、nanobanana提示詞、limaxai',
      en: 'nanobanana keywords, nanobanana prompts, limaxai',
    },
    introByLocale: {
      'zh-cn': '本教程讲解“极简东方古建”画面的提示词策略，重点在留白比例、线条秩序、轻雾光影与材质克制，让作品更具高级感与治愈气质。',
      'zh-tw': '本教學說明「極簡東方古建」畫面的提示詞策略，重點在留白比例、線條秩序、輕霧光影與材質克制，讓作品更具高級感與療癒氣質。',
      en: 'This tutorial explains prompt strategy for minimal oriental architecture visuals, focusing on whitespace ratio, linear order, misty lighting, and restrained materials.',
    },
    rows: [
      ['构图秩序', 'minimal composition, centered symmetry, broad negative space, clean horizon line', '打造极简与稳定感'],
      ['建筑语汇', 'ancient chinese courtyard, dark timber frame, white walls, calm stone texture', '保留东方古建辨识度'],
      ['光影氛围', 'soft morning fog, diffused light, low-contrast cinematic mood', '形成宁静治愈氛围'],
      ['质感控制', 'subtle details, restrained color palette, premium fine-art finish', '避免过度堆砌，保持高级感'],
    ],
  },
  {
    slug: 'ai-face-lighting-logic-adjustment',
    titleByLocale: {
      'zh-cn': 'ai生成的人脸，像标准AI脸怎么办？—— 调整光影逻辑',
      'zh-tw': 'AI生成的人臉，像標準AI臉怎麼辦？—— 調整光影邏輯',
      en: 'AI Faces Look Too Generic? Fix with Lighting Logic',
    },
    topicByLocale: {
      'zh-cn': 'AI人脸光影逻辑',
      'zh-tw': 'AI人臉光影邏輯',
      en: 'AI Face Lighting Logic',
    },
    keywordsByLocale: {
      'zh-cn': 'nanobanana关键词、nanobanana提示词、limaxai',
      'zh-tw': 'nanobanana關鍵詞、nanobanana提示詞、limaxai',
      en: 'nanobanana keywords, nanobanana prompts, limaxai',
    },
    introByLocale: {
      'zh-cn': '本教程针对“AI 脸同质化”问题，拆解人像光影逻辑：主光方向、明暗层次、肤质细节与镜头语言，帮助你生成更自然、真实、有辨识度的人像。',
      'zh-tw': '本教學針對「AI 臉同質化」問題，拆解人像光影邏輯：主光方向、明暗層次、膚質細節與鏡頭語言，幫助你生成更自然、真實、有辨識度的人像。',
      en: 'This tutorial solves the “generic AI face” issue by refining portrait lighting logic: key light direction, tonal layering, skin detail realism, and lens-aware prompt control.',
    },
    rows: [
      ['主光方向', 'single key light from 45 degrees, soft shadow transition, natural facial volume', '避免平光导致脸部模板化'],
      ['肤质细节', 'natural skin texture, subtle pores, realistic micro-contrast, no plastic smoothing', '减少假脸与蜡像感'],
      ['镜头与景深', '85mm portrait lens feel, shallow depth of field, sharp eyes, gentle bokeh', '提升摄影真实感'],
      ['后期风格', 'editorial color grading, balanced highlights, controlled shadows', '增强商业可用的人像完成度'],
    ],
  },
];

function getPack(locale: MidjourneyBatchLocale): LocalePack {
  if (locale === 'zh-cn') return PACK_ZH_CN;
  if (locale === 'zh-tw') return PACK_ZH_TW;
  if (locale === 'en') return PACK_EN;
  return EXTRA_PACKS[locale as ExtraLocale] ?? PACK_EN;
}

function getLocaleText(seed: ArticleSeed, locale: MidjourneyBatchLocale) {
  if (locale === 'zh-cn' || locale === 'zh-tw' || locale === 'en') {
    return {
      title: seed.titleByLocale[locale],
      keywords: seed.keywordsByLocale[locale],
      intro: seed.introByLocale[locale],
    };
  }
  const pack = getPack(locale);
  return {
    title: pack.titleTemplate.replace('{topic}', seed.topicByLocale.en),
    keywords: seed.keywordsByLocale.en,
    intro: pack.introTemplate.replace('{topic}', seed.topicByLocale.en),
  };
}

function localizeRows(rows: [string, string, string][], locale: MidjourneyBatchLocale): [string, string, string][] {
  if (locale === 'zh-cn' || locale === 'zh-tw') return rows;
  return rows.map(([m, p, u]) => {
    const moduleMap: Record<string, string> = {
      '主体定义': 'Subject Setup',
      '构图与镜头': 'Composition and Camera',
      '材质与光线': 'Material and Lighting',
      '成片质量': 'Output Quality',
      '造型设定': 'Styling Setup',
      '摄影语言': 'Photography Language',
      '情绪控制': 'Mood Control',
      '输出策略': 'Output Strategy',
      '色彩框架': 'Color Framework',
      '意象元素': 'Imagery Elements',
      '版式留白': 'Layout Whitespace',
      '细节增强': 'Detail Enhancement',
      '构图秩序': 'Composition Order',
      '建筑语汇': 'Architectural Vocabulary',
      '光影氛围': 'Light Atmosphere',
      '质感控制': 'Texture Control',
      '主光方向': 'Key Light Direction',
      '肤质细节': 'Skin Detail',
      '镜头与景深': 'Lens and Depth',
      '后期风格': 'Post Style',
    };
    const useMap: Record<string, string> = {
      '锁定建筑类型与时代感': 'Lock architecture type and era style',
      '提升海报视觉冲击': 'Improve poster impact',
      '强化质感与氛围': 'Strengthen texture and mood',
      '用于商业发布与排版': 'Ready for commercial publishing',
      '建立时尚主视觉基调': 'Set fashion visual tone',
      '获得杂志摄影质感': 'Get editorial photography feel',
      '统一品牌风格表达': 'Keep brand expression consistent',
      '适配海报封面与社媒投放': 'Fit covers and social campaigns',
      '形成统一秋色调性': 'Build unified autumn palette',
      '强化国风叙事感': 'Enhance oriental storytelling',
      '便于后期排版加字': 'Keep space for typography',
      '提升成片质感与完成度': 'Improve finish and polish',
      '打造极简与稳定感': 'Create minimal and stable look',
      '保留东方古建辨识度': 'Preserve oriental architecture identity',
      '形成宁静治愈氛围': 'Create calm healing mood',
      '避免过度堆砌，保持高级感': 'Avoid clutter and keep premium feel',
      '避免平光导致脸部模板化': 'Avoid flat light and generic faces',
      '减少假脸与蜡像感': 'Reduce fake and waxy skin look',
      '提升摄影真实感': 'Increase photographic realism',
      '增强商业可用的人像完成度': 'Improve commercial portrait finish',
    };
    return [moduleMap[m] ?? m, p, useMap[u] ?? u];
  });
}

function buildArticle(seed: ArticleSeed, locale: MidjourneyBatchLocale): MidjourneyBatchArticle {
  const pack = getPack(locale);
  const localeText = getLocaleText(seed, locale);
  const image = IMAGE_BY_SLUG[seed.slug];
  const rows = localizeRows(seed.rows, locale);
  return {
    slug: seed.slug,
    title: localeText.title,
    intro: localeText.intro,
    sections: [
      {
        id: 'meta',
        title: pack.featuresTitle,
        blocks: [
          { type: 'paragraph', text: localeText.intro },
          { type: 'paragraph', text: `${pack.keywordsLabel}：${localeText.keywords}` },
          { type: 'paragraph', text: `${pack.publishedPrefix} ${DATE}` },
          { type: 'list', items: [...pack.featureItems] },
        ],
      },
      {
        id: 'prompts',
        title: pack.promptTitle,
        blocks: [
          { type: 'table', headers: [...pack.tableHeaders], rows },
        ],
      },
      {
        id: 'tips',
        title: pack.tipsTitle,
        blocks: [
          { type: 'list', items: [...pack.tipsItems] },
        ],
      },
      {
        id: 'visual',
        title: pack.imageTitle,
        blocks: [
          { type: 'image', src: image, alt: localeText.title, caption: pack.imageCaption },
        ],
      },
      {
        id: 'cta',
        title: pack.ctaTitle,
        blocks: [
          { type: 'paragraph', text: pack.ctaP },
          { type: 'cta', text: 'Use Midjourney Now', url: CTA_URL },
        ],
      },
    ],
  };
}

export function getMidjourneyNewBatchArticle(
  slug: string,
  locale: MidjourneyBatchLocale,
): MidjourneyBatchArticle | null {
  const seed = SEEDS.find((s) => s.slug === slug);
  if (!seed) return null;
  return buildArticle(seed, locale);
}

