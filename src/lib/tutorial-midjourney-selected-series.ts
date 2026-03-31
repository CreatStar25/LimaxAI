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

const DATE = '2026-03-31';
const CTA_URL = 'https://www.limaxai.com/generate/image-tools/mjpro';

const IMAGE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'https://img.limaxai.com/aiweb/limaxai-midjourney-11.png',
  'midjourney-selected-prompts-2': 'https://img.limaxai.com/aiweb/limaxai-midjourney-12.png',
  'midjourney-selected-prompts-3': 'https://img.limaxai.com/aiweb/limaxai-midjourney-13.png',
  'midjourney-selected-prompts-4': 'https://img.limaxai.com/aiweb/limaxai-midjourney-14.png',
  'midjourney-selected-prompts-5': 'https://img.limaxai.com/aiweb/limaxai-midjourney-15.png',
};

const ZH_TITLE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'Midjourney官方精选Prompt分享：女武神、卷心菜美女、科技数字人、指尖上的公鸡、科幻猎鹰、巫师猫、汉服、机械企鹅',
  'midjourney-selected-prompts-2': 'Midjourney官方精选Prompt分享：迷雾森林、古怪厨房、雨云油画、外星部落、美洲虎、蓝色变形虫、流浪城市、狮鹫、独行者',
  'midjourney-selected-prompts-3': 'Midjourney官方精选Prompt分享：熔岩狮子、蜘蛛、怪兽入侵、智慧能量、翡翠雕塑、蘑菇、熊猫、科幻插画、蜂鸟、移动城市',
  'midjourney-selected-prompts-4': 'Midjourney官方精选Prompt分享：火山喷发、虚空骏马、抽象画、雨滴、末日骑士、巨浪、小女孩、传奇都市、怪兽飞艇',
  'midjourney-selected-prompts-5': 'Midjourney官方精选Prompt分享：企鹅、日出、龙宝宝、鼠人、冰淇淋城市、九尾狐、齿轮动物、蛇女、小蜜蜂、柚子城',
};

const ZH_TW_TITLE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'Midjourney官方精選Prompt分享：女武神、捲心菜美女、科技數位人、指尖上的公雞、科幻獵鷹、巫師貓、漢服、機械企鵝',
  'midjourney-selected-prompts-2': 'Midjourney官方精選Prompt分享：迷霧森林、古怪廚房、雨雲油畫、外星部落、美洲虎、藍色變形蟲、流浪城市、獅鷲、獨行者',
  'midjourney-selected-prompts-3': 'Midjourney官方精選Prompt分享：熔岩獅子、蜘蛛、怪獸入侵、智慧能量、翡翠雕塑、蘑菇、熊貓、科幻插畫、蜂鳥、移動城市',
  'midjourney-selected-prompts-4': 'Midjourney官方精選Prompt分享：火山噴發、虛空駿馬、抽象畫、雨滴、末日騎士、巨浪、小女孩、傳奇都市、怪獸飛艇',
  'midjourney-selected-prompts-5': 'Midjourney官方精選Prompt分享：企鵝、日出、龍寶寶、鼠人、冰淇淋城市、九尾狐、齒輪動物、蛇女、小蜜蜂、柚子城',
};

const EN_TITLE_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'Midjourney Official Prompt Picks: Valkyrie, Cabbage Beauty, Tech Digital Human, Fingertip Rooster, Sci‑fi Falcon, Wizard Cat, Hanfu, Mecha Penguin',
  'midjourney-selected-prompts-2': 'Midjourney Official Prompt Picks: Misty Forest, Quirky Kitchen, Rain-Cloud Oil Painting, Alien Tribe, Jaguar, Blue Amoeba, Wandering City, Griffin, Lone Wanderer',
  'midjourney-selected-prompts-3': 'Midjourney Official Prompt Picks: Lava Lion, Spider, Monster Invasion, Intelligent Energy, Jade Sculpture, Mushroom, Panda, Sci‑fi Illustration, Hummingbird, Mobile City',
  'midjourney-selected-prompts-4': 'Midjourney Official Prompt Picks: Volcanic Eruption, Void Steed, Abstract Art, Raindrops, Doomsday Knight, Giant Waves, Little Girl, Legendary Metropolis, Monster Airship',
  'midjourney-selected-prompts-5': 'Midjourney Official Prompt Picks: Penguin, Sunrise, Baby Dragon, Ratfolk, Ice Cream City, Nine‑Tailed Fox, Gear Animals, Snake Woman, Little Bee, Pomelo City',
};

const EN_ITEMS_BY_SLUG: Record<SeriesSlug, string> = {
  'midjourney-selected-prompts-1': 'Valkyrie, Cabbage Beauty, Tech Digital Human, Fingertip Rooster, Sci‑fi Falcon, Wizard Cat, Hanfu, Mecha Penguin',
  'midjourney-selected-prompts-2': 'Misty Forest, Quirky Kitchen, Rain-Cloud Oil Painting, Alien Tribe, Jaguar, Blue Amoeba, Wandering City, Griffin, Lone Wanderer',
  'midjourney-selected-prompts-3': 'Lava Lion, Spider, Monster Invasion, Intelligent Energy, Jade Sculpture, Mushroom, Panda, Sci‑fi Illustration, Hummingbird, Mobile City',
  'midjourney-selected-prompts-4': 'Volcanic Eruption, Void Steed, Abstract Art, Raindrops, Doomsday Knight, Giant Waves, Little Girl, Legendary Metropolis, Monster Airship',
  'midjourney-selected-prompts-5': 'Penguin, Sunrise, Baby Dragon, Ratfolk, Ice Cream City, Nine‑Tailed Fox, Gear Animals, Snake Woman, Little Bee, Pomelo City',
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
  const rowsBySlug: Record<SeriesSlug, string[][]> = {
    'midjourney-selected-prompts-1': [
      ['女武神 / Valkyrie', 'valkyrie warrior, silver armor, norse mythology, cinematic lighting, ultra detailed, dramatic sky, epic composition --ar 3:4 --stylize 300', '神话战士海报、游戏角色概念设定'],
      ['卷心菜美女 / Cabbage Beauty', 'fashion portrait of a woman made of layered cabbage leaves, editorial photography, soft rim light, surreal beauty, high detail --ar 2:3', '创意时尚视觉、品牌海报'],
      ['科技数字人 / Tech Digital Human', 'futuristic digital human, holographic UI, neon blue glow, cyber city backdrop, realistic skin detail --ar 16:9', '科技产品 KV、AI 品牌首页头图'],
      ['指尖上的公鸡 / Fingertip Rooster', 'tiny rooster standing on fingertip, macro shot, shallow depth of field, golden sunlight, photorealistic --ar 3:2', '社媒吸睛图、趣味封面图'],
      ['科幻猎鹰 / Sci-fi Falcon', 'mecha falcon, metallic feathers, high-speed dive, volumetric fog, cinematic sci-fi art --ar 21:9', '科幻插画、视频分镜概念图'],
      ['巫师猫 / Wizard Cat', 'wizard cat in starry robe, magical library, glowing spell circle, fantasy illustration --ar 4:5', 'IP 角色设计、故事型配图'],
      ['汉服 / Hanfu Portrait', 'hanfu portrait, flowing silk, classical chinese courtyard, elegant posture, soft natural light --ar 3:4', '国风品牌视觉、节日专题图'],
      ['机械企鹅 / Mecha Penguin', 'mechanical penguin, arctic base, hard-surface design, cinematic backlight, highly detailed --ar 16:9', '科幻产品页、模型创意展示'],
    ],
    'midjourney-selected-prompts-2': [
      ['迷雾森林 / Misty Forest', 'misty pine forest, morning haze, soft sunlight rays, fantasy matte painting, high detail --ar 16:9', '环境概念图、小说封面背景'],
      ['古怪厨房 / Quirky Kitchen', 'quirky retro kitchen, colorful tiles, odd props, wide-angle photography, cinematic color grading --ar 3:2', '生活方式内容、创意广告场景'],
      ['雨云油画 / Rain-Cloud Oil Painting', 'storm cloud above old town, expressive oil painting texture, moody palette, brushstroke rich --ar 4:3', '艺术风格实验、展览海报'],
      ['外星部落 / Alien Tribe', 'alien tribe gathering, bioluminescent skin patterns, ceremonial masks, sci-fi concept art --ar 16:9', '世界观设定、影视前期概念'],
      ['美洲虎 / Jaguar', 'jaguar close-up, rainforest bokeh, wet fur detail, wildlife photography style --ar 3:2', '动物摄影风、自然主题视觉'],
      ['蓝色变形虫 / Blue Amoeba', 'abstract blue amoeba shape, translucent texture, fluid motion, macro abstract render --ar 1:1', '抽象背景图、科技材料视觉'],
      ['流浪城市 / Wandering City', 'walking city on mechanical legs, post-apocalyptic desert, atmospheric perspective --ar 21:9', '科幻世界观、游戏场景概念'],
      ['狮鹫 / Griffin', 'majestic griffin on cliff, sunset backlight, fantasy realism, ultra detailed --ar 3:4', '奇幻海报、角色设定图'],
      ['独行者 / Lone Wanderer', 'lone wanderer in vast wasteland, long coat, cinematic composition, moody color --ar 2:1', '叙事型封面、短片分镜参考'],
    ],
    'midjourney-selected-prompts-3': [
      ['熔岩狮子 / Lava Lion', 'lava lion roaring, molten cracks, volcanic smoke, high contrast fantasy realism --ar 16:9', '高冲击力主视觉、活动海报'],
      ['蜘蛛 / Spider Macro', 'macro spider portrait, dew droplets, dramatic side light, ultra detailed texture --ar 3:2', '微距生物视觉、科普配图'],
      ['怪兽入侵 / Monster Invasion', 'giant monsters invading modern city, cinematic destruction scene, wide shot --ar 21:9', '电影感宣传图、剧情设定图'],
      ['智慧能量 / Intelligent Energy', 'abstract intelligent energy core, glowing particles, sci-fi laboratory environment --ar 1:1', 'AI 概念图、科技品牌 KV'],
      ['翡翠雕塑 / Jade Sculpture', 'emerald jade sculpture, museum lighting, polished stone texture, elegant composition --ar 4:5', '文化艺术视觉、展陈海报'],
      ['蘑菇 / Fantasy Mushroom', 'bioluminescent giant mushrooms, mystical forest floor, dreamy lighting --ar 4:3', '童话场景、治愈系插画'],
      ['熊猫 / Panda Portrait', 'panda portrait in bamboo mist, cinematic wildlife photography, gentle mood --ar 3:4', '动物主题封面、公益宣传图'],
      ['科幻插画 / Sci-fi Illustration', 'futuristic metropolis skyline, flying vehicles, neon atmosphere, concept illustration --ar 16:9', '科技内容配图、栏目头图'],
      ['蜂鸟 / Hummingbird', 'hummingbird in flight, frozen motion, vibrant feathers, macro photography style --ar 3:2', '自然摄影风、高细节展示图'],
      ['移动城市 / Mobile City', 'mobile city fortress traversing desert, colossal scale, cinematic dust lighting --ar 21:9', '末世题材设定、游戏场景图'],
    ],
    'midjourney-selected-prompts-4': [
      ['火山喷发 / Volcanic Eruption', 'volcanic eruption at night, lava fountain, ash cloud, cinematic landscape --ar 16:9', '自然灾害视觉、纪录片封面'],
      ['虚空骏马 / Void Steed', 'void steed with cosmic mane, starfield backdrop, fantasy character art --ar 3:4', '奇幻角色图、故事封面'],
      ['抽象画 / Abstract Painting', 'bold abstract painting, geometric fragments, expressive brush strokes, gallery style --ar 1:1', '艺术设计灵感图、社媒方图'],
      ['雨滴 / Raindrops Macro', 'raindrops on glass, city bokeh reflection, macro photography, cinematic mood --ar 4:5', '情绪化封面、音乐视觉配图'],
      ['末日骑士 / Doomsday Knight', 'doomsday knight in ruined cathedral, heavy armor, dramatic backlight --ar 2:3', '暗黑题材海报、角色概念图'],
      ['巨浪 / Giant Wave', 'gigantic ocean wave, tiny ship silhouette, stormy sky, high drama realism --ar 21:9', '冲击性横幅图、场景概念图'],
      ['小女孩 / Little Girl Story Frame', 'little girl with red scarf in old alley, cinematic storytelling shot --ar 3:2', '叙事型插图、剧情短片分镜'],
      ['传奇都市 / Legendary Metropolis', 'legendary metropolis with floating towers, golden dusk, epic worldbuilding --ar 16:9', '世界观展示图、栏目头图'],
      ['怪兽飞艇 / Monster Airship', 'monster-shaped airship above steampunk city, clouds and sun rays, concept art --ar 16:9', '蒸汽朋克视觉、海报主图'],
    ],
    'midjourney-selected-prompts-5': [
      ['企鹅 / Penguin Character', 'cute penguin explorer, snow field, soft lighting, stylized 3d illustration --ar 3:4', '吉祥物形象、儿童向内容配图'],
      ['日出 / Sunrise Landscape', 'sunrise over mountain sea, warm golden rays, peaceful cinematic landscape --ar 16:9', '治愈系封面、旅行内容头图'],
      ['龙宝宝 / Baby Dragon', 'baby dragon hatching from crystal egg, fantasy cave lighting, ultra cute --ar 4:5', '奇幻 IP 形象、故事插图'],
      ['鼠人 / Ratfolk', 'ratfolk rogue character, medieval alley, detailed costume, concept art --ar 2:3', '角色卡设定、游戏素材图'],
      ['冰淇淋城市 / Ice Cream City', 'ice cream city architecture, pastel palette, whimsical fantasy, clean render --ar 1:1', '品牌活动视觉、甜品主题海报'],
      ['九尾狐 / Nine-Tailed Fox', 'nine-tailed fox in moonlit forest, ethereal glow, mythic fantasy illustration --ar 3:4', '东方奇幻主视觉、节庆内容图'],
      ['齿轮动物 / Gear Animals', 'animals made of brass gears, steampunk style, mechanical details, studio light --ar 3:2', '工业创意图、科技艺术混搭图'],
      ['蛇女 / Snake Woman', 'snake woman sorceress, ancient temple ruins, dramatic shadows, fantasy realism --ar 2:3', '暗黑奇幻题材、角色主视觉'],
      ['小蜜蜂 / Little Bee Macro', 'little bee collecting nectar, macro lens, shallow depth, vivid flower colors --ar 3:2', '自然科普图、产品素材背景'],
      ['柚子城 / Pomelo City', 'pomelo-inspired city design, citrus textures, bright fantasy world, isometric style --ar 1:1', '品牌创意图、社媒传播图'],
    ],
  };
  const zhRows = rowsBySlug[slug];
  if (locale === 'zh-cn' || locale === 'zh-tw') return zhRows;
  return zhRows.map(([name, prompt]) => [name, prompt, 'Use for tutorial visuals, campaign creatives, social media assets, and concept exploration.']);
}

function ctaTextByLocale(locale: string): string {
  if (locale === 'zh-cn') return '立刻使用Midjourney';
  if (locale === 'zh-tw') return '立刻使用Midjourney';
  return locale === 'es' ? 'Usar Midjourney ahora'
    : locale === 'ar' ? 'استخدم Midjourney الآن'
    : locale === 'pt' ? 'Usar Midjourney agora'
    : locale === 'id' ? 'Gunakan Midjourney sekarang'
    : locale === 'ms' ? 'Guna Midjourney sekarang'
    : locale === 'fr' ? 'Utiliser Midjourney maintenant'
    : locale === 'ru' ? 'Использовать Midjourney сейчас'
    : locale === 'hi' ? 'Midjourney अभी उपयोग करें'
    : locale === 'ja' ? '今すぐMidjourneyを使う'
    : locale === 'de' ? 'Midjourney jetzt nutzen'
    : locale === 'ko' ? '지금 Midjourney 사용하기'
    : locale === 'tr' ? "Midjourney'i şimdi kullan"
    : locale === 'vi' ? 'Dùng Midjourney ngay'
    : locale === 'th' ? 'ใช้ Midjourney ทันที'
    : locale === 'it' ? 'Usa Midjourney ora'
    : locale === 'fa' ? 'همین حالا Midjourney را استفاده کن'
    : locale === 'nl' ? 'Gebruik Midjourney nu'
    : locale === 'pl' ? 'Użyj Midjourney teraz'
    : locale === 'sv' ? 'Använd Midjourney nu'
    : locale === 'uk' ? 'Використати Midjourney зараз'
    : locale === 'ro' ? 'Folosește Midjourney acum'
    : 'Use Midjourney Now';
}

function localizedExtraTitle(locale: string, slug: SeriesSlug): string {
  const prefix = locale === 'es' ? 'Selección oficial de prompts de Midjourney'
    : locale === 'ar' ? 'مختارات Midjourney الرسمية من الـ prompts'
    : locale === 'pt' ? 'Seleção oficial de prompts do Midjourney'
    : locale === 'id' ? 'Prompt pilihan resmi Midjourney'
    : locale === 'ms' ? 'Prompt pilihan rasmi Midjourney'
    : locale === 'fr' ? 'Sélection officielle de prompts Midjourney'
    : locale === 'ru' ? 'Официальная подборка prompt Midjourney'
    : locale === 'hi' ? 'Midjourney के आधिकारिक चयनित prompts'
    : locale === 'ja' ? 'Midjourney公式厳選Prompt'
    : locale === 'de' ? 'Offizielle Midjourney Prompt-Auswahl'
    : locale === 'ko' ? 'Midjourney 공식 선정 Prompt'
    : locale === 'tr' ? 'Midjourney resmi prompt seçkisi'
    : locale === 'vi' ? 'Prompt tuyển chọn chính thức của Midjourney'
    : locale === 'th' ? 'Prompt คัดสรรอย่างเป็นทางการของ Midjourney'
    : locale === 'it' ? 'Selezione ufficiale di prompt Midjourney'
    : locale === 'fa' ? 'اشتراک‌گذاری promptهای منتخب رسمی Midjourney'
    : locale === 'nl' ? 'Officiële Midjourney promptselectie'
    : locale === 'pl' ? 'Oficjalny wybór promptów Midjourney'
    : locale === 'sv' ? 'Midjourney officiella prompturval'
    : locale === 'uk' ? 'Офіційна добірка prompt Midjourney'
    : locale === 'ro' ? 'Selecție oficială de prompturi Midjourney'
    : 'Midjourney Official Prompt Picks';
  return `${prefix}: ${EN_ITEMS_BY_SLUG[slug]}`;
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
          { type: 'cta', text: ctaTextByLocale(locale), url: CTA_URL },
        ],
      },
    ],
  };
}

export const midjourneySelectedSeriesTitlesZhCN: Record<SeriesSlug, string> = ZH_TITLE_BY_SLUG;
export const midjourneySelectedSeriesTitlesZhTW: Record<SeriesSlug, string> = ZH_TW_TITLE_BY_SLUG;
export const midjourneySelectedSeriesTitlesEn: Record<SeriesSlug, string> = EN_TITLE_BY_SLUG;

export function getMidjourneySelectedSeriesArticle(slug: string, locale: string): SeriesTutorialArticle | null {
  if (!MIDJOURNEY_SELECTED_SERIES_SLUGS.includes(slug as SeriesSlug)) return null;
  const s = slug as SeriesSlug;
  if (locale === 'zh-cn') return buildBaseArticle(locale, s, ZH_TITLE_BY_SLUG[s]);
  if (locale === 'zh-tw') return buildBaseArticle(locale, s, ZH_TW_TITLE_BY_SLUG[s]);
  if (locale === 'en') return buildBaseArticle(locale, s, EN_TITLE_BY_SLUG[s]);
  if (EXTRA_LOCALES.includes(locale as (typeof EXTRA_LOCALES)[number])) {
    return buildBaseArticle(locale, s, localizedExtraTitle(locale, s));
  }
  return buildBaseArticle('en', s, EN_TITLE_BY_SLUG[s]);
}
