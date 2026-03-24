export type SeriesTutorialArticle = {
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

export const MIDJOURNEY_SELECTED_SERIES_SLUGS = [
  'midjourney-selected-prompts-1',
  'midjourney-selected-prompts-2',
  'midjourney-selected-prompts-3',
  'midjourney-selected-prompts-4',
  'midjourney-selected-prompts-5',
] as const;

type SeriesSlug = (typeof MIDJOURNEY_SELECTED_SERIES_SLUGS)[number];

const DATE = '2026-03-24';
const CTA_TEXT = '立刻使用Midjourney';
const CTA_URL = 'https://www.limaxai.com/generate/image-tools/mjpro';

const IMAGE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'https://img.limaxai.com/aiweb/limaxai-6.png',
  'midjourney-selected-prompts-2': 'https://img.limaxai.com/aiweb/limaxai-7.png',
  'midjourney-selected-prompts-3': 'https://img.limaxai.com/aiweb/limaxai-8.png',
  'midjourney-selected-prompts-4': 'https://img.limaxai.com/aiweb/limaxai-9.png',
  'midjourney-selected-prompts-5': 'https://img.limaxai.com/aiweb/limaxai-10.png',
};

const ZH_TITLE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'Midjourney 精选 · 附完整提示词1',
  'midjourney-selected-prompts-2': 'Midjourney 精选 · 附完整提示词2',
  'midjourney-selected-prompts-3': 'Midjourney 精选 · 附完整提示词3',
  'midjourney-selected-prompts-4': 'Midjourney 精选 · 附完整提示词4',
  'midjourney-selected-prompts-5': 'Midjourney 精选 · 附完整提示词5',
};

const EN_TITLE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'Midjourney Picks · Full Prompt Pack 1',
  'midjourney-selected-prompts-2': 'Midjourney Picks · Full Prompt Pack 2',
  'midjourney-selected-prompts-3': 'Midjourney Picks · Full Prompt Pack 3',
  'midjourney-selected-prompts-4': 'Midjourney Picks · Full Prompt Pack 4',
  'midjourney-selected-prompts-5': 'Midjourney Picks · Full Prompt Pack 5',
};

const EXTRA_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;

type LocalePack = {
  intro: string;
  dateTitle: string;
  datePrefix: string;
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

const EN_PACK: LocalePack = {
  intro: 'This tutorial explains model features, prompt techniques, and practical scenarios with reusable full prompts.',
  dateTitle: 'Publish Date',
  datePrefix: 'Published:',
  featuresTitle: 'Model Features and Positioning',
  promptTitle: 'Full Prompt Table (Copy Ready)',
  tipsTitle: 'Usage Tips (Stability & Quality)',
  imageTitle: 'Reference Visual',
  ctaTitle: 'Create on LimaxAI',
  ctaP: 'Paste the prompts into your workspace and iterate quickly.',
  featureItems: [
    'Strong style consistency for branded content pipelines.',
    'Fine control through subject, materials, lighting, and camera language.',
    'Useful for blog visuals, e-commerce images, social posts, and tutorials.',
  ],
  tipsItems: [
    'Use a structured prompt: subject + scene + style + lighting + quality.',
    'Create low-cost drafts first, then refine with focused prompt edits.',
    'Keep style keywords fixed when producing content in batches.',
  ],
  tableHeaders: ['Template', 'Prompt', 'Use Case'],
  imageCaption: 'Reference image',
};

const EXTRA_PACKS: Record<string, LocalePack> = {
  es: {
    intro: 'Esta guía cubre funciones del modelo, técnicas de prompt y escenarios reales con plantillas reutilizables.',
    dateTitle: 'Fecha de publicación',
    datePrefix: 'Publicado:',
    featuresTitle: 'Funciones y posicionamiento del modelo',
    promptTitle: 'Tabla completa de prompts (copiar y usar)',
    tipsTitle: 'Consejos de uso',
    imageTitle: 'Imagen de referencia',
    ctaTitle: 'Crear en LimaxAI',
    ctaP: 'Pega estos prompts en tu espacio de trabajo y optimiza por iteraciones.',
    featureItems: ['Salida de estilo consistente para contenido de marca.', 'Control fino por sujeto, material, luz y lenguaje de cámara.', 'Útil para blog, e-commerce, redes sociales y tutoriales.'],
    tipsItems: ['Estructura: sujeto + escena + estilo + iluminación + calidad.', 'Genera borradores rápidos y luego refina con ajustes parciales.', 'Mantén palabras de estilo fijas para producción por lotes.'],
    tableHeaders: ['Plantilla', 'Prompt', 'Caso de uso'],
    imageCaption: 'Imagen de referencia',
  },
  ar: {
    intro: 'يركز هذا الدليل على خصائص النموذج وتقنيات الـ prompt وسيناريوهات الاستخدام العملية مع قوالب جاهزة.',
    dateTitle: 'تاريخ النشر',
    datePrefix: 'نُشر في:',
    featuresTitle: 'خصائص النموذج وسيناريوهاته',
    promptTitle: 'جدول prompts الكامل',
    tipsTitle: 'نصائح الاستخدام',
    imageTitle: 'صورة مرجعية',
    ctaTitle: 'ابدأ على LimaxAI',
    ctaP: 'انسخ هذه prompts إلى مساحة العمل وابدأ التحسين خطوة بخطوة.',
    featureItems: ['ثبات أسلوبي قوي للمحتوى العلامي.', 'تحكم دقيق عبر الموضوع والخامة والإضاءة وزاوية التصوير.', 'مناسب للمدونات والتجارة الإلكترونية والسوشيال والمحتوى التعليمي.'],
    tipsItems: ['اكتب prompt بهيكل واضح: موضوع + مشهد + أسلوب + إضاءة + جودة.', 'ابدأ بمسودات سريعة ثم حسّنها محليًا.', 'ثبّت كلمات الأسلوب عند الإنتاج الدفعي.'],
    tableHeaders: ['القالب', 'Prompt', 'الاستخدام'],
    imageCaption: 'صورة مرجعية',
  },
  pt: {
    intro: 'Este tutorial cobre recursos do modelo, técnicas de prompt e cenários de uso com modelos prontos para reutilização.',
    dateTitle: 'Data de publicação',
    datePrefix: 'Publicado em:',
    featuresTitle: 'Recursos e posicionamento do modelo',
    promptTitle: 'Tabela completa de prompts',
    tipsTitle: 'Dicas de uso',
    imageTitle: 'Imagem de referência',
    ctaTitle: 'Criar no LimaxAI',
    ctaP: 'Cole os prompts no workspace e refine por iteração.',
    featureItems: ['Consistência visual para conteúdo de marca.', 'Controle fino por sujeito, material, luz e linguagem de câmera.', 'Útil para blog, e-commerce, social e conteúdo educacional.'],
    tipsItems: ['Estruture: sujeito + cena + estilo + iluminação + qualidade.', 'Gere rascunhos rápidos e depois refine.', 'Mantenha palavras de estilo fixas em produção em lote.'],
    tableHeaders: ['Modelo', 'Prompt', 'Uso'],
    imageCaption: 'Imagem de referência',
  },
  id: {
    intro: 'Panduan ini membahas fitur model, teknik prompt, dan skenario penggunaan dengan template siap pakai.',
    dateTitle: 'Tanggal terbit',
    datePrefix: 'Terbit:',
    featuresTitle: 'Fitur model dan posisi',
    promptTitle: 'Tabel prompt lengkap',
    tipsTitle: 'Tips penggunaan',
    imageTitle: 'Gambar referensi',
    ctaTitle: 'Buat di LimaxAI',
    ctaP: 'Tempel prompt ke workspace dan iterasikan cepat.',
    featureItems: ['Konsistensi gaya kuat untuk konten merek.', 'Kontrol rinci lewat subjek, material, pencahayaan, dan bahasa kamera.', 'Cocok untuk visual blog, e-commerce, media sosial, dan tutorial.'],
    tipsItems: ['Gunakan struktur: subjek + adegan + gaya + cahaya + kualitas.', 'Buat draft cepat dulu, lalu perbaiki secara bertahap.', 'Kunci kata kunci gaya saat produksi batch.'],
    tableHeaders: ['Template', 'Prompt', 'Use case'],
    imageCaption: 'Gambar referensi',
  },
  ms: {
    intro: 'Panduan ini menerangkan ciri model, teknik prompt dan senario penggunaan dengan templat boleh guna semula.',
    dateTitle: 'Tarikh terbit',
    datePrefix: 'Diterbitkan:',
    featuresTitle: 'Ciri model dan kegunaan',
    promptTitle: 'Jadual prompt penuh',
    tipsTitle: 'Tip penggunaan',
    imageTitle: 'Imej rujukan',
    ctaTitle: 'Cipta di LimaxAI',
    ctaP: 'Tampal prompt ke ruang kerja dan iterasi dengan cepat.',
    featureItems: ['Konsistensi gaya yang tinggi untuk kandungan berjenama.', 'Kawalan halus melalui subjek, material, cahaya dan bahasa kamera.', 'Sesuai untuk blog, e-dagang, media sosial dan tutorial.'],
    tipsItems: ['Gunakan struktur: subjek + adegan + gaya + pencahayaan + kualiti.', 'Hasilkan draf pantas dahulu, kemudian perhalusi secara berperingkat.', 'Kekalkan kata kunci gaya untuk pengeluaran pukal.'],
    tableHeaders: ['Templat', 'Prompt', 'Kegunaan'],
    imageCaption: 'Imej rujukan',
  },
  fr: {
    intro: 'Ce guide présente les fonctionnalités du modèle, les techniques de prompt et les cas d’usage avec des modèles réutilisables.',
    dateTitle: 'Date de publication',
    datePrefix: 'Publié le :',
    featuresTitle: 'Fonctionnalités et positionnement',
    promptTitle: 'Tableau complet de prompts',
    tipsTitle: 'Conseils d’utilisation',
    imageTitle: 'Image de référence',
    ctaTitle: 'Créer sur LimaxAI',
    ctaP: 'Collez les prompts dans votre espace et itérez rapidement.',
    featureItems: ['Grande cohérence de style pour les contenus de marque.', 'Contrôle fin via le sujet, la matière, la lumière et le langage caméra.', 'Utile pour blog, e-commerce, réseaux sociaux et contenus pédagogiques.'],
    tipsItems: ['Structurez : sujet + scène + style + lumière + qualité.', 'Générez d’abord des brouillons rapides puis affinez localement.', 'Conservez les mêmes mots-clés de style en production en lot.'],
    tableHeaders: ['Modèle', 'Prompt', 'Cas d’usage'],
    imageCaption: 'Image de référence',
  },
  ru: {
    intro: 'В этом руководстве собраны возможности модели, техники prompt и практические сценарии с готовыми шаблонами.',
    dateTitle: 'Дата публикации',
    datePrefix: 'Опубликовано:',
    featuresTitle: 'Возможности модели и сценарии',
    promptTitle: 'Полная таблица prompt',
    tipsTitle: 'Практические советы',
    imageTitle: 'Референс-изображение',
    ctaTitle: 'Создавать в LimaxAI',
    ctaP: 'Вставьте prompt в рабочее пространство и улучшайте итерациями.',
    featureItems: ['Сильная стабильность стиля для брендового контента.', 'Точный контроль через объект, материалы, свет и визуальный язык камеры.', 'Подходит для блога, e-commerce, соцсетей и обучающих материалов.'],
    tipsItems: ['Структура: объект + сцена + стиль + свет + качество.', 'Сначала делайте быстрые черновики, затем точечно улучшайте.', 'Фиксируйте стилевые ключи при пакетной генерации.'],
    tableHeaders: ['Шаблон', 'Prompt', 'Сценарий'],
    imageCaption: 'Референс',
  },
  hi: {
    intro: 'यह गाइड मॉडल फीचर, prompt तकनीक और उपयोग परिदृश्य को पुन: उपयोग योग्य टेम्पलेट के साथ समझाती है।',
    dateTitle: 'प्रकाशन तिथि',
    datePrefix: 'प्रकाशित:',
    featuresTitle: 'मॉडल फीचर और उपयोग',
    promptTitle: 'पूर्ण prompt तालिका',
    tipsTitle: 'उपयोग सुझाव',
    imageTitle: 'संदर्भ चित्र',
    ctaTitle: 'LimaxAI पर बनाएं',
    ctaP: 'इन prompts को workspace में पेस्ट करें और तेज़ी से iterate करें।',
    featureItems: ['ब्रांड कंटेंट के लिए उच्च शैली-संगति।', 'विषय, मटेरियल, लाइट और कैमरा भाषा से सूक्ष्म नियंत्रण।', 'ब्लॉग, ई-कॉमर्स, सोशल पोस्ट और ट्यूटोरियल के लिए उपयुक्त।'],
    tipsItems: ['संरचना रखें: विषय + दृश्य + शैली + प्रकाश + गुणवत्ता।', 'पहले तेज़ ड्राफ्ट बनाएं, फिर चरणबद्ध सुधार करें।', 'बैच उत्पादन में शैली कीवर्ड स्थिर रखें।'],
    tableHeaders: ['टेम्पलेट', 'Prompt', 'उपयोग'],
    imageCaption: 'संदर्भ चित्र',
  },
  ja: {
    intro: '本ガイドでは、モデル機能・プロンプト設計・活用シーンを再利用可能なテンプレートで解説します。',
    dateTitle: '公開日',
    datePrefix: '公開日：',
    featuresTitle: 'モデル特性と適用シーン',
    promptTitle: '完全プロンプト表（コピー可）',
    tipsTitle: '運用のコツ',
    imageTitle: '参考画像',
    ctaTitle: 'LimaxAIで作成',
    ctaP: 'プロンプトを貼り付けて、反復で品質を上げましょう。',
    featureItems: ['ブランド運用に向く高いスタイル一貫性。', '被写体・素材・光・カメラ表現で細かく制御可能。', 'ブログ、EC、SNS、教材ビジュアルに幅広く対応。'],
    tipsItems: ['構成は「被写体 + シーン + スタイル + 光 + 品質」。', 'まず低コストで下書きを作り、段階的に改善。', '量産時はスタイル語を固定して統一感を保つ。'],
    tableHeaders: ['テンプレート', 'Prompt', '用途'],
    imageCaption: '参考画像',
  },
  de: {
    intro: 'Dieser Leitfaden erklärt Modellfunktionen, Prompt-Techniken und Einsatzszenarien mit wiederverwendbaren Vorlagen.',
    dateTitle: 'Veröffentlichungsdatum',
    datePrefix: 'Veröffentlicht:',
    featuresTitle: 'Modellfunktionen und Einsatz',
    promptTitle: 'Vollständige Prompt-Tabelle',
    tipsTitle: 'Nutzungstipps',
    imageTitle: 'Referenzbild',
    ctaTitle: 'Auf LimaxAI erstellen',
    ctaP: 'Prompts in den Workspace einfügen und iterativ optimieren.',
    featureItems: ['Hohe Stilkonsistenz für markenorientierte Inhalte.', 'Feinsteuerung über Motiv, Material, Licht und Kamerasprache.', 'Geeignet für Blog, E-Commerce, Social Media und Tutorials.'],
    tipsItems: ['Struktur nutzen: Motiv + Szene + Stil + Licht + Qualität.', 'Zuerst schnelle Entwürfe, dann gezielt verfeinern.', 'Bei Serienproduktion Stil-Keywords konstant halten.'],
    tableHeaders: ['Vorlage', 'Prompt', 'Einsatz'],
    imageCaption: 'Referenzbild',
  },
  ko: {
    intro: '이 가이드는 모델 기능, prompt 작성법, 활용 시나리오를 재사용 가능한 템플릿으로 정리합니다.',
    dateTitle: '게시일',
    datePrefix: '게시일:',
    featuresTitle: '모델 기능과 활용',
    promptTitle: '전체 prompt 표',
    tipsTitle: '사용 팁',
    imageTitle: '참고 이미지',
    ctaTitle: 'LimaxAI에서 제작',
    ctaP: 'prompt를 워크스페이스에 붙여 넣고 반복 개선하세요.',
    featureItems: ['브랜드 콘텐츠에 유리한 높은 스타일 일관성.', '피사체, 재질, 조명, 카메라 언어로 세밀한 제어 가능.', '블로그, 이커머스, 소셜, 튜토리얼 이미지에 적합.'],
    tipsItems: ['구조: 피사체 + 장면 + 스타일 + 조명 + 품질.', '먼저 빠른 초안을 만들고 단계적으로 개선.', '대량 제작 시 스타일 키워드를 고정해 통일감 유지.'],
    tableHeaders: ['템플릿', 'Prompt', '활용'],
    imageCaption: '참고 이미지',
  },
  tr: {
    intro: 'Bu rehber model özelliklerini, prompt tekniklerini ve kullanım senaryolarını yeniden kullanılabilir şablonlarla açıklar.',
    dateTitle: 'Yayın tarihi',
    datePrefix: 'Yayınlandı:',
    featuresTitle: 'Model özellikleri ve kullanım',
    promptTitle: 'Tam prompt tablosu',
    tipsTitle: 'Kullanım ipuçları',
    imageTitle: 'Referans görsel',
    ctaTitle: 'LimaxAI’da oluştur',
    ctaP: 'Promptları çalışma alanına yapıştırın ve iterasyonla iyileştirin.',
    featureItems: ['Marka içerikleri için güçlü stil tutarlılığı.', 'Konu, materyal, ışık ve kamera diliyle ince kontrol.', 'Blog, e-ticaret, sosyal medya ve eğitim içerikleri için uygundur.'],
    tipsItems: ['Yapı: konu + sahne + stil + ışık + kalite.', 'Önce hızlı taslak üretin, sonra kademeli iyileştirin.', 'Toplu üretimde stil anahtar kelimelerini sabit tutun.'],
    tableHeaders: ['Şablon', 'Prompt', 'Kullanım'],
    imageCaption: 'Referans görsel',
  },
  vi: {
    intro: 'Hướng dẫn này trình bày tính năng model, kỹ thuật prompt và tình huống sử dụng với mẫu có thể tái dùng.',
    dateTitle: 'Ngày đăng',
    datePrefix: 'Đăng ngày:',
    featuresTitle: 'Tính năng model và bối cảnh dùng',
    promptTitle: 'Bảng prompt đầy đủ',
    tipsTitle: 'Mẹo sử dụng',
    imageTitle: 'Ảnh tham chiếu',
    ctaTitle: 'Tạo trên LimaxAI',
    ctaP: 'Dán prompt vào workspace và lặp để tối ưu.',
    featureItems: ['Độ nhất quán phong cách cao cho nội dung thương hiệu.', 'Kiểm soát chi tiết qua chủ thể, chất liệu, ánh sáng và ngôn ngữ máy quay.', 'Phù hợp cho blog, e-commerce, social và bài hướng dẫn.'],
    tipsItems: ['Cấu trúc: chủ thể + bối cảnh + phong cách + ánh sáng + chất lượng.', 'Tạo bản nháp nhanh trước rồi tinh chỉnh từng phần.', 'Giữ cố định từ khóa phong cách khi sản xuất hàng loạt.'],
    tableHeaders: ['Mẫu', 'Prompt', 'Trường hợp dùng'],
    imageCaption: 'Ảnh tham chiếu',
  },
  th: {
    intro: 'คู่มือนี้อธิบายฟีเจอร์ของโมเดล เทคนิค prompt และสถานการณ์ใช้งาน พร้อมเทมเพลตที่นำไปใช้ซ้ำได้',
    dateTitle: 'วันที่เผยแพร่',
    datePrefix: 'เผยแพร่:',
    featuresTitle: 'ฟีเจอร์โมเดลและการใช้งาน',
    promptTitle: 'ตาราง prompt ฉบับเต็ม',
    tipsTitle: 'เทคนิคการใช้งาน',
    imageTitle: 'ภาพอ้างอิง',
    ctaTitle: 'สร้างบน LimaxAI',
    ctaP: 'วาง prompt ลงใน workspace แล้วปรับปรุงแบบ iterative',
    featureItems: ['สไตล์คงที่สูง เหมาะกับงานคอนเทนต์แบรนด์.', 'ควบคุมละเอียดได้ด้วยหัวข้อ วัสดุ แสง และภาษากล้อง.', 'เหมาะกับบล็อก อีคอมเมิร์ซ โซเชียล และเนื้อหาการสอน.'],
    tipsItems: ['ใช้โครงสร้าง: หัวข้อ + ฉาก + สไตล์ + แสง + คุณภาพ.', 'สร้างดราฟต์เร็วก่อน แล้วค่อยปรับทีละจุด.', 'ล็อกคีย์เวิร์ดสไตล์ให้คงที่เมื่อต้องผลิตหลายชิ้น.'],
    tableHeaders: ['เทมเพลต', 'Prompt', 'การใช้งาน'],
    imageCaption: 'ภาพอ้างอิง',
  },
  it: {
    intro: 'Questa guida copre funzionalità del modello, tecniche di prompt e scenari d’uso con template riutilizzabili.',
    dateTitle: 'Data di pubblicazione',
    datePrefix: 'Pubblicato:',
    featuresTitle: 'Funzioni del modello e scenari',
    promptTitle: 'Tabella completa dei prompt',
    tipsTitle: 'Suggerimenti pratici',
    imageTitle: 'Immagine di riferimento',
    ctaTitle: 'Crea su LimaxAI',
    ctaP: 'Incolla i prompt nel workspace e migliora per iterazioni.',
    featureItems: ['Alta coerenza stilistica per contenuti di brand.', 'Controllo preciso tramite soggetto, materiale, luce e linguaggio camera.', 'Adatto a blog, e-commerce, social e contenuti didattici.'],
    tipsItems: ['Struttura: soggetto + scena + stile + luce + qualità.', 'Genera prima bozze veloci, poi rifinisci in modo mirato.', 'Mantieni fisse le keyword di stile nella produzione in serie.'],
    tableHeaders: ['Template', 'Prompt', 'Scenario'],
    imageCaption: 'Immagine di riferimento',
  },
  fa: {
    intro: 'این راهنما قابلیت‌های مدل، تکنیک‌های prompt و سناریوهای کاربردی را با قالب‌های قابل استفاده مجدد ارائه می‌کند.',
    dateTitle: 'تاریخ انتشار',
    datePrefix: 'منتشر شده:',
    featuresTitle: 'قابلیت‌های مدل و سناریوها',
    promptTitle: 'جدول کامل prompt',
    tipsTitle: 'نکات استفاده',
    imageTitle: 'تصویر مرجع',
    ctaTitle: 'ساخت در LimaxAI',
    ctaP: 'promptها را در workspace قرار دهید و مرحله‌ای بهبود دهید.',
    featureItems: ['ثبات سبک بالا برای محتوای برند.', 'کنترل دقیق با سوژه، متریال، نور و زبان دوربین.', 'مناسب برای بلاگ، فروشگاه اینترنتی، شبکه اجتماعی و آموزش.'],
    tipsItems: ['ساختار: سوژه + صحنه + سبک + نور + کیفیت.', 'ابتدا پیش‌نویس سریع بسازید، سپس مرحله‌ای اصلاح کنید.', 'در تولید انبوه، کلیدواژه‌های سبک را ثابت نگه دارید.'],
    tableHeaders: ['قالب', 'Prompt', 'کاربرد'],
    imageCaption: 'تصویر مرجع',
  },
  nl: {
    intro: 'Deze handleiding behandelt modelkenmerken, prompttechnieken en gebruiksscenario’s met herbruikbare templates.',
    dateTitle: 'Publicatiedatum',
    datePrefix: 'Gepubliceerd:',
    featuresTitle: 'Modelkenmerken en inzet',
    promptTitle: 'Volledige prompttabel',
    tipsTitle: 'Gebruikstips',
    imageTitle: 'Referentiebeeld',
    ctaTitle: 'Maken op LimaxAI',
    ctaP: 'Plak prompts in je workspace en optimaliseer iteratief.',
    featureItems: ['Sterke stijlconsistentie voor merkcontent.', 'Fijne controle via onderwerp, materiaal, licht en camerataal.', 'Geschikt voor blog, e-commerce, social media en tutorials.'],
    tipsItems: ['Gebruik structuur: onderwerp + scène + stijl + licht + kwaliteit.', 'Maak eerst snelle concepten en verfijn daarna gericht.', 'Houd stijl-zoekwoorden vast bij batchproductie.'],
    tableHeaders: ['Template', 'Prompt', 'Gebruik'],
    imageCaption: 'Referentiebeeld',
  },
  pl: {
    intro: 'Ten poradnik omawia funkcje modelu, techniki prompt i scenariusze użycia z gotowymi szablonami.',
    dateTitle: 'Data publikacji',
    datePrefix: 'Opublikowano:',
    featuresTitle: 'Funkcje modelu i zastosowania',
    promptTitle: 'Pełna tabela promptów',
    tipsTitle: 'Wskazówki',
    imageTitle: 'Grafika referencyjna',
    ctaTitle: 'Twórz w LimaxAI',
    ctaP: 'Wklej prompty do workspace i ulepszaj iteracyjnie.',
    featureItems: ['Wysoka spójność stylu dla treści marki.', 'Precyzyjna kontrola przez temat, materiał, światło i język kamery.', 'Dobre do bloga, e-commerce, social mediów i tutoriali.'],
    tipsItems: ['Stosuj strukturę: temat + scena + styl + światło + jakość.', 'Najpierw szybkie szkice, potem dopracowanie krok po kroku.', 'Przy produkcji seryjnej utrzymuj stałe słowa stylu.'],
    tableHeaders: ['Szablon', 'Prompt', 'Zastosowanie'],
    imageCaption: 'Grafika referencyjna',
  },
  sv: {
    intro: 'Den här guiden täcker modellfunktioner, promptteknik och användningsscenarier med återanvändbara mallar.',
    dateTitle: 'Publiceringsdatum',
    datePrefix: 'Publicerad:',
    featuresTitle: 'Modellfunktioner och användning',
    promptTitle: 'Fullständig prompttabell',
    tipsTitle: 'Användningstips',
    imageTitle: 'Referensbild',
    ctaTitle: 'Skapa på LimaxAI',
    ctaP: 'Klistra in promptarna i workspace och iterera snabbt.',
    featureItems: ['Hög stilkonsistens för varumärkesinnehåll.', 'Fin kontroll via motiv, material, ljus och kameraspråk.', 'Passar för blogg, e-handel, sociala medier och guider.'],
    tipsItems: ['Använd struktur: motiv + scen + stil + ljus + kvalitet.', 'Skapa snabba utkast först och förfina sedan stegvis.', 'Lås stilnyckelord vid batchproduktion.'],
    tableHeaders: ['Mall', 'Prompt', 'Användning'],
    imageCaption: 'Referensbild',
  },
  uk: {
    intro: 'Цей гайд пояснює можливості моделі, техніки prompt і практичні сценарії з шаблонами для повторного використання.',
    dateTitle: 'Дата публікації',
    datePrefix: 'Опубліковано:',
    featuresTitle: 'Можливості моделі та сценарії',
    promptTitle: 'Повна таблиця prompt',
    tipsTitle: 'Поради з використання',
    imageTitle: 'Референс-зображення',
    ctaTitle: 'Створювати в LimaxAI',
    ctaP: 'Вставте prompt у workspace і покращуйте ітераціями.',
    featureItems: ['Висока узгодженість стилю для брендового контенту.', 'Точне керування через сюжет, матеріал, світло та мову камери.', 'Підходить для блогу, e-commerce, соцмереж і навчальних матеріалів.'],
    tipsItems: ['Структура: сюжет + сцена + стиль + світло + якість.', 'Спочатку робіть швидкі чернетки, потім точково покращуйте.', 'Фіксуйте стилістичні ключі під час пакетної генерації.'],
    tableHeaders: ['Шаблон', 'Prompt', 'Сценарій'],
    imageCaption: 'Референс',
  },
  ro: {
    intro: 'Acest ghid prezintă funcțiile modelului, tehnicile de prompt și scenariile de utilizare cu șabloane reutilizabile.',
    dateTitle: 'Data publicării',
    datePrefix: 'Publicat:',
    featuresTitle: 'Funcții model și scenarii',
    promptTitle: 'Tabel complet de prompturi',
    tipsTitle: 'Sfaturi de utilizare',
    imageTitle: 'Imagine de referință',
    ctaTitle: 'Creează pe LimaxAI',
    ctaP: 'Lipește prompturile în workspace și optimizează iterativ.',
    featureItems: ['Consistență stilistică ridicată pentru conținut de brand.', 'Control fin prin subiect, material, lumină și limbaj de cameră.', 'Potrivit pentru blog, e-commerce, social media și tutoriale.'],
    tipsItems: ['Folosește structura: subiect + scenă + stil + lumină + calitate.', 'Generează schițe rapide, apoi rafinează treptat.', 'Păstrează constante cuvintele-cheie de stil în producția pe loturi.'],
    tableHeaders: ['Șablon', 'Prompt', 'Utilizare'],
    imageCaption: 'Imagine de referință',
  },
};

function keywordText(slug: SeriesSlug, locale: string): string {
  const isNano = slug === 'midjourney-selected-prompts-3' || slug === 'midjourney-selected-prompts-4' || slug === 'midjourney-selected-prompts-5';
  if (locale === 'zh-cn' || locale === 'zh-tw') {
    return isNano
      ? '关键词：nanobanana关键词、nanobanana提示词、limaxai。'
      : '关键词：midjourney关键词、midjourney提示词、midjourney关键词。';
  }
  return isNano
    ? (locale === 'es' ? 'Palabras clave: nanobanana palabra clave, nanobanana prompt, limaxai.'
      : locale === 'ar' ? 'الكلمات المفتاحية: nanobanana keyword، nanobanana prompt، limaxai.'
      : locale === 'pt' ? 'Palavras-chave: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'fr' ? 'Mots-clés: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'ru' ? 'Ключевые слова: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'ja' ? 'キーワード：nanobanana keyword、nanobanana prompt、limaxai。'
      : locale === 'de' ? 'Keywords: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'ko' ? '키워드: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'tr' ? 'Anahtar kelimeler: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'vi' ? 'Từ khóa: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'th' ? 'คีย์เวิร์ด: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'it' ? 'Parole chiave: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'fa' ? 'کلمات کلیدی: nanobanana keyword، nanobanana prompt، limaxai.'
      : locale === 'nl' ? 'Zoekwoorden: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'pl' ? 'Słowa kluczowe: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'sv' ? 'Nyckelord: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'uk' ? 'Ключові слова: nanobanana keyword, nanobanana prompt, limaxai.'
      : locale === 'ro' ? 'Cuvinte cheie: nanobanana keyword, nanobanana prompt, limaxai.'
      : 'Keywords: nanobanana keyword, nanobanana prompt, limaxai.')
    : (locale === 'es' ? 'Palabras clave: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'ar' ? 'الكلمات المفتاحية: midjourney keyword، midjourney prompt، midjourney keyword.'
      : locale === 'pt' ? 'Palavras-chave: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'fr' ? 'Mots-clés: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'ru' ? 'Ключевые слова: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'ja' ? 'キーワード：midjourney keyword、midjourney prompt、midjourney keyword。'
      : locale === 'de' ? 'Keywords: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'ko' ? '키워드: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'tr' ? 'Anahtar kelimeler: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'vi' ? 'Từ khóa: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'th' ? 'คีย์เวิร์ด: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'it' ? 'Parole chiave: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'fa' ? 'کلمات کلیدی: midjourney keyword، midjourney prompt، midjourney keyword.'
      : locale === 'nl' ? 'Zoekwoorden: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'pl' ? 'Słowa kluczowe: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'sv' ? 'Nyckelord: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'uk' ? 'Ключові слова: midjourney keyword, midjourney prompt, midjourney keyword.'
      : locale === 'ro' ? 'Cuvinte cheie: midjourney keyword, midjourney prompt, midjourney keyword.'
      : 'Keywords: midjourney keyword, midjourney prompt, midjourney keyword.');
}

function rowsFor(slug: SeriesSlug, locale: string): string[][] {
  const isNano = slug === 'midjourney-selected-prompts-3' || slug === 'midjourney-selected-prompts-4' || slug === 'midjourney-selected-prompts-5';
  if (locale === 'zh-cn' || locale === 'zh-tw') {
    return [
      [
        isNano ? 'Nano Banana 商品图模板' : 'Midjourney 商业主视觉模板',
        'masterpiece, cinematic composition, premium commercial key visual, strong subject isolation, volumetric light, ultra-detailed, high contrast',
        '用于封面、专题头图、落地页首屏，强化点击率与品牌识别。',
      ],
      [
        isNano ? 'Nano Banana 电商详情模板' : 'Midjourney 教程配图模板',
        'clean UI style, infographic layout, layered hierarchy, modern tech design, readable text safe area, blue and white palette',
        '用于教程步骤图、功能说明图、图文混排页面。',
      ],
      [
        isNano ? 'Nano Banana 场景化营销模板' : 'Midjourney 场景故事模板',
        'realistic lifestyle scene, natural light, product in use, emotional storytelling, depth of field, editorial photo style',
        '用于电商详情、社媒素材、案例页和活动推广图。',
      ],
    ];
  }
  return [
    [
      isNano ? 'Nano Banana product visual template' : 'Midjourney hero visual template',
      'masterpiece, cinematic composition, premium commercial key visual, strong subject isolation, volumetric light, ultra-detailed, high contrast',
      'Best for covers, landing hero sections, and high-CTR blog thumbnails.',
    ],
    [
      isNano ? 'Nano Banana e-commerce detail template' : 'Midjourney tutorial graphic template',
      'clean UI style, infographic layout, layered hierarchy, modern tech design, readable text safe area, blue and white palette',
      'Best for tutorial steps, feature explanation images, and product documents.',
    ],
    [
      isNano ? 'Nano Banana scene marketing template' : 'Midjourney storytelling template',
      'realistic lifestyle scene, natural light, product in use, emotional storytelling, depth of field, editorial photo style',
      'Best for e-commerce details, social media creatives, and campaign visuals.',
    ],
  ];
}

function buildBaseArticle(locale: string, slug: SeriesSlug, title: string): SeriesTutorialArticle {
  const isZh = locale === 'zh-cn' || locale === 'zh-tw';
  const pack: LocalePack = isZh
    ? {
        intro: '本篇聚焦主流模型使用教程与提示词实战，围绕模型功能特性、使用技巧、适用场景进行系统拆解，并给出可直接复用的完整提示词。',
        dateTitle: '文章日期',
        datePrefix: '发布时间：',
        featuresTitle: '模型功能特性与定位',
        promptTitle: '完整提示词表格（可直接复制）',
        tipsTitle: '使用技巧（提升出图稳定性）',
        imageTitle: '示例配图',
        ctaTitle: '在 LimaxAI 高效实战',
        ctaP: '将以上提示词直接粘贴到工作台，即可快速生成并持续迭代。',
        featureItems: [
          '支持高一致性风格输出，适合品牌化内容长期生产。',
          '可通过主体、材质、光线、镜头语言做精细控制。',
          '兼容博客配图、电商详情、社媒视觉、教学插图等场景。',
        ],
        tipsItems: [
          '按“主体 + 环境 + 风格 + 光线 + 画质”结构编写提示词。',
          '先生成低成本草图，再做局部改写与高质量复算。',
          '固定风格关键词，批量产出时统一视觉语言。',
        ],
        tableHeaders: ['模板类型', '提示词（Prompt）', '适用场景'],
        imageCaption: '配图示例',
      }
    : (EXTRA_PACKS[locale] ?? EN_PACK);
  const img = IMAGE_BY_SLUG[slug];
  const intro = `${pack.intro} ${keywordText(slug, locale)}`;
  return {
    slug,
    title,
    intro,
    sections: [
      {
        id: 'date',
        title: pack.dateTitle,
        blocks: [{ type: 'paragraph', text: `${pack.datePrefix} ${DATE}` }],
      },
      {
        id: 'features',
        title: pack.featuresTitle,
        blocks: [
          {
            type: 'list',
            items: pack.featureItems,
          },
        ],
      },
      {
        id: 'prompt-table',
        title: pack.promptTitle,
        blocks: [
          {
            type: 'table',
            headers: pack.tableHeaders,
            rows: rowsFor(slug, locale),
          },
        ],
      },
      {
        id: 'tips',
        title: pack.tipsTitle,
        blocks: [
          {
            type: 'list',
            items: pack.tipsItems,
          },
        ],
      },
      {
        id: 'image',
        title: pack.imageTitle,
        blocks: [{ type: 'image', src: img, alt: title, caption: pack.imageCaption }],
      },
      {
        id: 'cta',
        title: pack.ctaTitle,
        blocks: [
          { type: 'paragraph', text: pack.ctaP },
          { type: 'cta', text: CTA_TEXT, url: CTA_URL },
        ],
      },
    ],
  };
}

export const midjourneySelectedSeriesTitlesZhCN: Record<SeriesSlug, string> = ZH_TITLE_BY_SLUG;
export const midjourneySelectedSeriesTitlesZhTW: Record<SeriesSlug, string> = ZH_TITLE_BY_SLUG;
export const midjourneySelectedSeriesTitlesEn: Record<SeriesSlug, string> = EN_TITLE_BY_SLUG;

export function getMidjourneySelectedSeriesArticle(slug: string, locale: string): SeriesTutorialArticle | null {
  if (!MIDJOURNEY_SELECTED_SERIES_SLUGS.includes(slug as SeriesSlug)) return null;
  const s = slug as SeriesSlug;
  const num = s.split('-').pop() ?? '1';
  const localizedTitleByLocale: Record<string, string> = {
    es: `Selección Midjourney · Prompts completos ${num}`,
    ar: `مختارات Midjourney · prompts كاملة ${num}`,
    pt: `Seleção Midjourney · Prompts completos ${num}`,
    id: `Pilihan Midjourney · Prompt Lengkap ${num}`,
    ms: `Pilihan Midjourney · Prompt Lengkap ${num}`,
    fr: `Sélection Midjourney · Prompts complets ${num}`,
    ru: `Подборка Midjourney · Полные prompt ${num}`,
    hi: `Midjourney चयन · पूर्ण prompts ${num}`,
    ja: `Midjourney 精選 · 完全プロンプト ${num}`,
    de: `Midjourney Auswahl · Vollständige Prompts ${num}`,
    ko: `Midjourney 셀렉션 · 전체 Prompt ${num}`,
    tr: `Midjourney Seçkisi · Tam Prompt ${num}`,
    vi: `Tuyển tập Midjourney · Prompt đầy đủ ${num}`,
    th: `คัดสรร Midjourney · Prompt ฉบับเต็ม ${num}`,
    it: `Selezione Midjourney · Prompt completi ${num}`,
    fa: `منتخب Midjourney · prompt کامل ${num}`,
    nl: `Midjourney Selectie · Volledige Prompts ${num}`,
    pl: `Wybór Midjourney · Pełne prompty ${num}`,
    sv: `Midjourney urval · Kompletta prompts ${num}`,
    uk: `Добірка Midjourney · Повні prompt ${num}`,
    ro: `Selecție Midjourney · Prompturi complete ${num}`,
  };
  if (locale === 'zh-cn') return buildBaseArticle(locale, s, ZH_TITLE_BY_SLUG[s]);
  if (locale === 'zh-tw') return buildBaseArticle(locale, s, ZH_TITLE_BY_SLUG[s]);
  if (locale === 'en') return buildBaseArticle(locale, s, EN_TITLE_BY_SLUG[s]);
  if (EXTRA_LOCALES.includes(locale as (typeof EXTRA_LOCALES)[number])) {
    return buildBaseArticle(locale, s, localizedTitleByLocale[locale] ?? EN_TITLE_BY_SLUG[s]);
  }
  return buildBaseArticle('en', s, EN_TITLE_BY_SLUG[s]);
}
