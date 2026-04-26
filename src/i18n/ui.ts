/**
 * src/i18n/ui.ts
 * 全站点通用 UI 文本（与具体页面无关）
 * 仅包含：导航栏、底部栏、通用按钮、通用提示、通用标签。
 * 语种：en, zh-cn, zh-tw, es, ar, pt, id, ms, fr, ru, hi, ja, de, ko, tr, vi, th, it, fa, nl, pl, sv, uk, ro（共 24 种）
 */

export const LOCALES = [
  'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru',
  'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl',
  'sv', 'uk', 'ro',
] as const;

export type Locale = (typeof LOCALES)[number];

export interface UiCopy {
  navbar: {
    home: string;
    blog: string;
    tutorial: string;
    about: string;
    api: string;
    startCreate: string;
    features: string;
    pricing: string;
    faq: string;
    contactUs: string;
    logoText: string;
    languageSwitcher: string;
  };
  footer: {
    brand: { title: string; intro: string };
    columns: { aiImage: string; aiVideo: string; aiMusic: string; aiTools: string; company: string };
    links: {
      blog: string;
      about: string;
      privacy: string;
      terms: string;
      api: string;
      midjourney: string;
      nanoBananaPro: string;
      nanoBanana2: string;
      nanoBanana3: string;
      seedance20: string;
      seedance15: string;
      veo3: string;
      happyHorse1: string;
      happyHorse2: string;
      suno: string;
      sunoHK: string;
      udio: string;
      limaxai: string;
      deepseek4: string;
      notebooklm: string;
      openclaw: string;
      gemini30: string;
      geminiWatermarkErase: string;
    };
    copyright: string;
  };
  buttons: {
    getStarted: string;
    learnMore: string;
    viewDetails: string;
    submit: string;
    back: string;
  };
  common: {
    loading: string;
    success: string;
    pleaseEnter: string;
  };
  labels: {
    search: string;
    filter: string;
    pagination: string;
  };
  meta: {
    readTime: string;
    updatedAt: string;
    redirecting: string;
    loadingInspiration: string;
    articleSection: string;
  };
}

const en: UiCopy = {
  navbar: {
    home: 'Home',
    blog: 'Blog',
    tutorial: 'Tutorial',
    about: 'About',
    api: 'API',
    startCreate: 'Start creating',
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    contactUs: 'Contact Us',
    logoText: 'LimaxAI',
    languageSwitcher: 'Language',
  },
  footer: {
    brand: {
      title: 'LimaxAI',
      intro: 'LimaxAI, professional AI generation platform. Create stunning videos and images with cutting-edge models.',
    },
    columns: { aiImage: 'AI Image', aiVideo: 'AI Video', aiMusic: 'AI Music', aiTools: 'AI Tools', company: 'Company' },
    links: {
      blog: 'Blog',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      api: 'API',
      midjourney: 'Midjourney',
      nanoBananaPro: 'Nano Banana Pro',
      nanoBanana2: 'Nano Banana 2',
      nanoBanana3: 'Nano Banana 3',
      seedance20: 'Seedance 2.0',
      seedance15: 'Seedance 1.5',
      veo3: 'Veo 3',
      happyHorse1: 'HappyHorse1.0',
      happyHorse2: 'HappyHorse2.0',
      suno: 'Suno',
      sunoHK: 'SunoHK',
      udio: 'Udio',
      limaxai: 'LimaxAI',
      deepseek4: 'deepseek 4',
      notebooklm: 'Notebooklm',
      openclaw: 'Openclaw',
      gemini30: 'Gemini 3.0',
      geminiWatermarkErase: 'Gemini Watermark Erase',
    },
    copyright: 'All rights reserved.',
  },
  buttons: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    submit: 'Submit',
    back: 'Back',
  },
  common: {
    loading: 'Loading...',
    success: 'Success',
    pleaseEnter: 'Please enter',
  },
  labels: {
    search: 'Search',
    filter: 'Filter',
    pagination: 'Pagination',
  },
  meta: {
    readTime: '{minutes} min read',
    updatedAt: 'Updated at:',
    redirecting: 'Redirecting to tutorials...',
    loadingInspiration: 'Loading your inspiration...',
    articleSection: 'AI Tutorials',
  },
};

function withEnFallback<T extends Partial<UiCopy>>(overrides: T): UiCopy {
  return {
    navbar: { ...en.navbar, ...overrides.navbar },
    footer: {
      brand: { ...en.footer.brand, ...overrides.footer?.brand },
      columns: { ...en.footer.columns, ...overrides.footer?.columns },
      links: { ...en.footer.links, ...overrides.footer?.links },
      copyright: overrides.footer?.copyright ?? en.footer.copyright,
    },
    buttons: { ...en.buttons, ...overrides.buttons },
    common: { ...en.common, ...overrides.common },
    labels: { ...en.labels, ...overrides.labels },
    meta: { ...en.meta, ...overrides.meta },
  } as UiCopy;
}

const zhCN: UiCopy = withEnFallback({
  navbar: {
    home: '首页',
    blog: '博客',
    tutorial: '使用教程',
    about: '关于',
    api: 'API接口',
    startCreate: '开始创作',
    features: '功能',
    pricing: '定价',
    faq: '常见问题',
    contactUs: '联系我们',
    logoText: 'LimaxAI',
    languageSwitcher: '语言',
  },
  footer: {
    brand: { title: 'LimaxAI', intro: 'LimaxAI，专业 AI 生成平台。使用前沿模型创作精彩视频与图片。' },
    columns: { aiImage: 'AI 图像', aiVideo: 'AI 视频', aiMusic: 'AI 音乐', aiTools: 'AI 工具', company: '公司' },
    links: { blog: '博客', about: '关于我们', privacy: '隐私政策', terms: '服务条款', api: 'API接口', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' },
    copyright: '版权所有。',
  },
  buttons: { getStarted: '立即开始', learnMore: '了解更多', viewDetails: '查看详情', submit: '提交', back: '返回' },
  common: { loading: '加载中...', success: '操作成功', pleaseEnter: '请输入' },
  labels: { search: '搜索', filter: '筛选', pagination: '页码' },
});

const zhTW: UiCopy = withEnFallback({
  navbar: {
    home: '首頁',
    blog: '部落格',
    tutorial: '使用教程',
    about: '關於',
    api: 'API 介面',
    startCreate: '開始創作',
    features: '功能',
    pricing: '定價',
    faq: '常見問題',
    contactUs: '聯絡我們',
    logoText: 'LimaxAI',
    languageSwitcher: '語言',
  },
  footer: {
    brand: { title: 'LimaxAI', intro: 'LimaxAI，專業 AI 生成平台。使用前沿模型創作精彩視頻與圖片。' },
    columns: { aiImage: 'AI 圖像', aiVideo: 'AI 視頻', aiMusic: 'AI 音樂', aiTools: 'AI 工具', company: '公司' },
    links: { blog: '部落格', about: '關於我們', privacy: '隱私政策', terms: '服務條款', api: 'API 介面', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' },
    copyright: '版權所有。',
  },
  buttons: { getStarted: '立即開始', learnMore: '了解更多', viewDetails: '查看詳情', submit: '提交', back: '返回' },
  common: { loading: '載入中...', success: '操作成功', pleaseEnter: '請輸入' },
  labels: { search: '搜尋', filter: '篩選', pagination: '頁碼' },
});

const es: UiCopy = withEnFallback({
  navbar: { home: 'Inicio', blog: 'Blog', tutorial: 'Tutorial', about: 'Acerca de', api: 'API', startCreate: 'Empezar', features: 'Funciones', pricing: 'Precios', faq: 'FAQ', contactUs: 'Contacto', logoText: 'LimaxAI', languageSwitcher: 'Idioma' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, plataforma profesional de generación IA. Crea vídeos e imágenes con modelos de vanguardia.' }, columns: { aiImage: 'Imagen IA', aiVideo: 'Vídeo IA', aiMusic: 'Música IA', aiTools: 'Herramientas IA', company: 'Empresa' }, links: { blog: 'Blog', about: 'Nosotros', privacy: 'Privacidad', terms: 'Términos', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Todos los derechos reservados.' },
  buttons: { getStarted: 'Empezar', learnMore: 'Saber más', viewDetails: 'Ver detalles', submit: 'Enviar', back: 'Volver' },
  common: { loading: 'Cargando...', success: 'Éxito', pleaseEnter: 'Por favor introduzca' },
  labels: { search: 'Buscar', filter: 'Filtrar', pagination: 'Paginación' },
  meta: { readTime: '{minutes} min de lectura', updatedAt: 'Actualizado el:', redirecting: 'Redirigiendo a tutoriales...', loadingInspiration: 'Cargando tu inspiración...', articleSection: 'Tutoriales de IA' },
});

const ar: UiCopy = withEnFallback({
  navbar: { home: 'الرئيسية', blog: 'المدونة', tutorial: 'دروس', about: 'من نحن', api: 'API', startCreate: 'ابدأ', features: 'الميزات', pricing: 'الأسعار', faq: 'الأسئلة الشائعة', contactUs: 'اتصل بنا', logoText: 'LimaxAI', languageSwitcher: 'اللغة' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI، منصة احترافية لتوليد الذكاء الاصطناعي. أنشئ فيديوهات وصوراً بجودة عالية باستخدام أحدث النماذج.' }, columns: { aiImage: 'صور بالذكاء الاصطناعي', aiVideo: 'فيديو بالذكاء الاصطناعي', aiMusic: 'موسيقى بالذكاء الاصطناعي', aiTools: 'أدوات الذكاء الاصطناعي', company: 'الشركة' }, links: { blog: 'المدونة', about: 'من نحن', privacy: 'الخصوصية', terms: 'الشروط', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'جميع الحقوق محفوظة.' },
  buttons: { getStarted: 'ابدأ', learnMore: 'اعرف المزيد', viewDetails: 'عرض التفاصيل', submit: 'إرسال', back: 'رجوع' },
  common: { loading: 'جاري التحميل...', success: 'تم بنجاح', pleaseEnter: 'يرجى الإدخال' },
  labels: { search: 'بحث', filter: 'تصفية', pagination: 'ترقيم الصفحات' },
  meta: { readTime: 'دقيقة قراءة', updatedAt: 'آخر تحديث:', redirecting: 'جارٍ التوجيه إلى الدروس...', loadingInspiration: 'جارٍ تحميل إلهامك...', articleSection: 'دروس الذكاء الاصطناعي' },
});

const pt: UiCopy = withEnFallback({
  navbar: { home: 'Início', blog: 'Blog', tutorial: 'Tutorial', about: 'Sobre', api: 'API', startCreate: 'Começar', features: 'Recursos', pricing: 'Preços', faq: 'FAQ', contactUs: 'Contato', logoText: 'LimaxAI', languageSwitcher: 'Idioma' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, plataforma profissional de geração por IA. Crie vídeos e imagens com modelos de ponta.' }, columns: { aiImage: 'Imagem IA', aiVideo: 'Vídeo IA', aiMusic: 'Música IA', aiTools: 'Ferramentas IA', company: 'Empresa' }, links: { blog: 'Blog', about: 'Sobre', privacy: 'Privacidade', terms: 'Termos', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Todos os direitos reservados.' },
  buttons: { getStarted: 'Começar', learnMore: 'Saiba mais', viewDetails: 'Ver detalhes', submit: 'Enviar', back: 'Voltar' },
  common: { loading: 'Carregando...', success: 'Sucesso', pleaseEnter: 'Por favor insira' },
  labels: { search: 'Pesquisar', filter: 'Filtrar', pagination: 'Paginação' },
  meta: { readTime: '{minutes} min de leitura', updatedAt: 'Atualizado em:', redirecting: 'Redirecionando para tutoriais...', loadingInspiration: 'Carregando sua inspiração...', articleSection: 'Tutoriais de IA' },
});

const id: UiCopy = withEnFallback({
  navbar: { home: 'Beranda', blog: 'Blog', tutorial: 'Tutorial', about: 'Tentang', api: 'API', startCreate: 'Mulai', features: 'Fitur', pricing: 'Harga', faq: 'FAQ', contactUs: 'Hubungi Kami', logoText: 'LimaxAI', languageSwitcher: 'Bahasa' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, platform generasi AI profesional. Buat video dan gambar berkualitas dengan model terdepan.' }, columns: { aiImage: 'Gambar AI', aiVideo: 'Video AI', aiMusic: 'Musik AI', aiTools: 'Alat AI', company: 'Perusahaan' }, links: { blog: 'Blog', about: 'Tentang', privacy: 'Privasi', terms: 'Ketentuan', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Hak cipta dilindungi.' },
  buttons: { getStarted: 'Mulai', learnMore: 'Pelajari Lebih Lanjut', viewDetails: 'Lihat Detail', submit: 'Kirim', back: 'Kembali' },
  common: { loading: 'Memuat...', success: 'Berhasil', pleaseEnter: 'Silakan masukkan' },
  labels: { search: 'Cari', filter: 'Filter', pagination: 'Halaman' },
  meta: { readTime: '{minutes} menit membaca', updatedAt: 'Diperbarui:', redirecting: 'Mengalihkan ke tutorial...', loadingInspiration: 'Memuat inspirasimu...', articleSection: 'Tutorial AI' },
});

const ms: UiCopy = withEnFallback({
  navbar: { home: 'Laman Utama', blog: 'Blog', tutorial: 'Tutorial', about: 'Perihal', api: 'API', startCreate: 'Mula', features: 'Ciri', pricing: 'Harga', faq: 'FAQ', contactUs: 'Hubungi Kami', logoText: 'LimaxAI', languageSwitcher: 'Bahasa' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, platform penjanaan AI profesional. Cipta video dan imej berkualiti dengan model terkini.' }, columns: { aiImage: 'Imej AI', aiVideo: 'Video AI', aiMusic: 'Muzik AI', aiTools: 'Alat AI', company: 'Syarikat' }, links: { blog: 'Blog', about: 'Perihal', privacy: 'Privasi', terms: 'Terma', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Hak cipta terpelihara.' },
  buttons: { getStarted: 'Mula', learnMore: 'Ketahui Lebih Lanjut', viewDetails: 'Lihat Butiran', submit: 'Hantar', back: 'Kembali' },
  common: { loading: 'Memuatkan...', success: 'Berjaya', pleaseEnter: 'Sila masukkan' },
  labels: { search: 'Cari', filter: 'Tapis', pagination: 'Halaman' },
  meta: { readTime: '{minutes} min bacaan', updatedAt: 'Dikemaskini:', redirecting: 'Mengalih ke tutorial...', loadingInspiration: 'Memuat inspirasi anda...', articleSection: 'Tutorial AI' },
});

const fr: UiCopy = withEnFallback({
  navbar: { home: 'Accueil', blog: 'Blog', tutorial: 'Tutoriel', about: 'À propos', api: 'API', startCreate: 'Créer', features: 'Fonctionnalités', pricing: 'Tarifs', faq: 'FAQ', contactUs: 'Nous contacter', logoText: 'LimaxAI', languageSwitcher: 'Langue' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, plateforme professionnelle de génération IA. Créez vidéos et images avec des modèles de pointe.' }, columns: { aiImage: 'Image IA', aiVideo: 'Vidéo IA', aiMusic: 'Musique IA', aiTools: 'Outils IA', company: 'Entreprise' }, links: { blog: 'Blog', about: 'À propos', privacy: 'Confidentialité', terms: 'Conditions', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Tous droits réservés.' },
  buttons: { getStarted: 'Commencer', learnMore: 'En savoir plus', viewDetails: 'Voir les détails', submit: 'Envoyer', back: 'Retour' },
  common: { loading: 'Chargement...', success: 'Succès', pleaseEnter: 'Veuillez entrer' },
  labels: { search: 'Rechercher', filter: 'Filtrer', pagination: 'Pagination' },
  meta: { readTime: '{minutes} min de lecture', updatedAt: 'Mis à jour le:', redirecting: 'Redirection vers les tutoriels...', loadingInspiration: 'Chargement de votre inspiration...', articleSection: 'Tutoriels IA' },
});

const ru: UiCopy = withEnFallback({
  navbar: { home: 'Главная', blog: 'Блог', tutorial: 'Руководства', about: 'О нас', api: 'API', startCreate: 'Начать', features: 'Возможности', pricing: 'Цены', faq: 'Вопросы и ответы', contactUs: 'Связаться', logoText: 'LimaxAI', languageSwitcher: 'Язык' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI — профессиональная платформа генерации ИИ. Создавайте видео и изображения с передовыми моделями.' }, columns: { aiImage: 'ИИ-изображения', aiVideo: 'ИИ-видео', aiMusic: 'ИИ-музыка', aiTools: 'ИИ-инструменты', company: 'Компания' }, links: { blog: 'Блог', about: 'О нас', privacy: 'Конфиденциальность', terms: 'Условия', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Все права защищены.' },
  buttons: { getStarted: 'Начать', learnMore: 'Подробнее', viewDetails: 'Подробности', submit: 'Отправить', back: 'Назад' },
  common: { loading: 'Загрузка...', success: 'Успешно', pleaseEnter: 'Пожалуйста, введите' },
  labels: { search: 'Поиск', filter: 'Фильтр', pagination: 'Страницы' },
  meta: { readTime: '{minutes} мин чтения', updatedAt: 'Обновлено:', redirecting: 'Перенаправление на руководства...', loadingInspiration: 'Загружаем ваше вдохновение...', articleSection: 'Руководства по ИИ' },
});

const hi: UiCopy = withEnFallback({
  navbar: { home: 'होम', blog: 'ब्लॉग', tutorial: 'ट्यूटोरियल', about: 'हमारे बारे में', api: 'API', startCreate: 'शुरू करें', features: 'विशेषताएं', pricing: 'मूल्य निर्धारण', faq: 'सामान्य प्रश्न', contactUs: 'संपर्क करें', logoText: 'LimaxAI', languageSwitcher: 'भाषा' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, पेशेवर AI जनरेशन प्लेटफॉर्म। अत्याधुनिक मॉडल से शानदार वीडियो और इमेज बनाएं।' }, columns: { aiImage: 'AI इमेज', aiVideo: 'AI वीडियो', aiMusic: 'AI संगीत', aiTools: 'AI टूल्स', company: 'कंपनी' }, links: { blog: 'ब्लॉग', about: 'हमारे बारे में', privacy: 'गोपनीयता', terms: 'नियम', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'सर्वाधिकार सुरक्षित.' },
  buttons: { getStarted: 'शुरू करें', learnMore: 'और जानें', viewDetails: 'विवरण देखें', submit: 'जमा करें', back: 'वापस' },
  common: { loading: 'लोड हो रहा है...', success: 'सफल', pleaseEnter: 'कृपया दर्ज करें' },
  labels: { search: 'खोज', filter: 'फ़िल्टर', pagination: 'पृष्ठ संख्या' },
  meta: { readTime: '{minutes} मिनट पठन', updatedAt: 'अपडेट:', redirecting: 'ट्यूटोरियल पर रीडायरेक्ट हो रहा है...', loadingInspiration: 'आपकी प्रेरणा लोड हो रही है...', articleSection: 'AI ट्यूटोरियल' },
});

const ja: UiCopy = withEnFallback({
  navbar: { home: 'ホーム', blog: 'ブログ', tutorial: 'チュートリアル', about: '会社概要', api: 'API', startCreate: '創作開始', features: '機能', pricing: '料金', faq: 'よくある質問', contactUs: 'お問い合わせ', logoText: 'LimaxAI', languageSwitcher: '言語' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAIは、最先端のAIモデルを使って動画・画像を生成するプロフェッショナルなプラットフォームです。' }, columns: { aiImage: 'AI画像', aiVideo: 'AI動画', aiMusic: 'AI音楽', aiTools: 'AIツール', company: '会社' }, links: { blog: 'ブログ', about: '会社概要', privacy: 'プライバシー', terms: '利用規約', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: '全著作権所有。' },
  buttons: { getStarted: '始める', learnMore: '詳しく見る', viewDetails: '詳細を見る', submit: '送信', back: '戻る' },
  common: { loading: '読み込み中...', success: '成功', pleaseEnter: '入力してください' },
  labels: { search: '検索', filter: 'フィルター', pagination: 'ページ' },
  meta: { readTime: '読了時間 {minutes}分', updatedAt: '更新日:', redirecting: 'チュートリアルにリダイレクト中...', loadingInspiration: 'インスピレーションを読み込み中...', articleSection: 'AI チュートリアル' },
});

const de: UiCopy = withEnFallback({
  navbar: { home: 'Startseite', blog: 'Blog', tutorial: 'Tutorial', about: 'Über uns', api: 'API', startCreate: 'Loslegen', features: 'Funktionen', pricing: 'Preise', faq: 'FAQ', contactUs: 'Kontakt', logoText: 'LimaxAI', languageSwitcher: 'Sprache' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, professionelle KI-Generierungsplattform. Erstellen Sie beeindruckende Videos und Bilder mit modernsten Modellen.' }, columns: { aiImage: 'KI-Bilder', aiVideo: 'KI-Video', aiMusic: 'KI-Musik', aiTools: 'KI-Tools', company: 'Unternehmen' }, links: { blog: 'Blog', about: 'Über uns', privacy: 'Datenschutz', terms: 'AGB', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Alle Rechte vorbehalten.' },
  buttons: { getStarted: 'Loslegen', learnMore: 'Mehr erfahren', viewDetails: 'Details anzeigen', submit: 'Absenden', back: 'Zurück' },
  common: { loading: 'Laden...', success: 'Erfolg', pleaseEnter: 'Bitte eingeben' },
  labels: { search: 'Suchen', filter: 'Filter', pagination: 'Seiten' },
  meta: { readTime: '{minutes} Min. Lesedauer', updatedAt: 'Aktualisiert am:', redirecting: 'Weiterleitung zu Tutorials...', loadingInspiration: 'Inspiration wird geladen...', articleSection: 'KI-Tutorials' },
});

const ko: UiCopy = withEnFallback({
  navbar: { home: '홈', blog: '블로그', tutorial: '튜토리얼', about: '소개', api: 'API', startCreate: '시작하기', features: '기능', pricing: '가격', faq: '자주 묻는 질문', contactUs: '문의하기', logoText: 'LimaxAI', languageSwitcher: '언어' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI는 최신 AI 모델로 고품질 영상과 이미지를 제작하는 전문 AI 생성 플랫폼입니다.' }, columns: { aiImage: 'AI 이미지', aiVideo: 'AI 비디오', aiMusic: 'AI 음악', aiTools: 'AI 도구', company: '회사' }, links: { blog: '블로그', about: '소개', privacy: '개인정보처리방침', terms: '이용약관', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: '모든 권리 보유.' },
  buttons: { getStarted: '시작하기', learnMore: '자세히 보기', viewDetails: '상세 보기', submit: '제출', back: '뒤로' },
  common: { loading: '로딩 중...', success: '성공', pleaseEnter: '입력해 주세요' },
  labels: { search: '검색', filter: '필터', pagination: '페이지' },
  meta: { readTime: '읽는 데 {minutes}분', updatedAt: '업데이트:', redirecting: '튜토리얼로 이동 중...', loadingInspiration: '영감을 불러오는 중...', articleSection: 'AI 튜토리얼' },
});

const tr: UiCopy = withEnFallback({
  navbar: { home: 'Ana Sayfa', blog: 'Blog', tutorial: 'Eğitim', about: 'Hakkımızda', api: 'API', startCreate: 'Başlayın', features: 'Özellikler', pricing: 'Fiyatlandırma', faq: 'SSS', contactUs: 'İletişim', logoText: 'LimaxAI', languageSwitcher: 'Dil' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, profesyonel AI üretim platformu. Son teknoloji modellerle video ve görsel oluşturun.' }, columns: { aiImage: 'AI Görsel', aiVideo: 'AI Video', aiMusic: 'AI Müzik', aiTools: 'AI Araçları', company: 'Şirket' }, links: { blog: 'Blog', about: 'Hakkımızda', privacy: 'Gizlilik', terms: 'Koşullar', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Tüm hakları saklıdır.' },
  buttons: { getStarted: 'Başlayın', learnMore: 'Daha Fazla', viewDetails: 'Detayları Gör', submit: 'Gönder', back: 'Geri' },
  common: { loading: 'Yükleniyor...', success: 'Başarılı', pleaseEnter: 'Lütfen girin' },
  labels: { search: 'Ara', filter: 'Filtrele', pagination: 'Sayfalar' },
  meta: { readTime: '{minutes} dk okuma', updatedAt: 'Güncelleme:', redirecting: 'Eğitimlere yönlendiriliyor...', loadingInspiration: 'İlhamınız yükleniyor...', articleSection: 'AI Eğitimleri' },
});

const vi: UiCopy = withEnFallback({
  navbar: { home: 'Trang chủ', blog: 'Blog', tutorial: 'Hướng dẫn', about: 'Giới thiệu', api: 'API', startCreate: 'Bắt đầu', features: 'Tính năng', pricing: 'Giá', faq: 'FAQ', contactUs: 'Liên hệ', logoText: 'LimaxAI', languageSwitcher: 'Ngôn ngữ' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, nền tảng tạo nội dung AI chuyên nghiệp. Tạo video và hình ảnh với các mô hình tiên tiến.' }, columns: { aiImage: 'Ảnh AI', aiVideo: 'Video AI', aiMusic: 'Nhạc AI', aiTools: 'Công cụ AI', company: 'Công ty' }, links: { blog: 'Blog', about: 'Giới thiệu', privacy: 'Quyền riêng tư', terms: 'Điều khoản', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Đã bảo lưu mọi quyền.' },
  buttons: { getStarted: 'Bắt đầu', learnMore: 'Tìm hiểu thêm', viewDetails: 'Xem chi tiết', submit: 'Gửi', back: 'Quay lại' },
  common: { loading: 'Đang tải...', success: 'Thành công', pleaseEnter: 'Vui lòng nhập' },
  labels: { search: 'Tìm kiếm', filter: 'Lọc', pagination: 'Trang' },
  meta: { readTime: '{minutes} phút đọc', updatedAt: 'Cập nhật:', redirecting: 'Đang chuyển đến hướng dẫn...', loadingInspiration: 'Đang tải cảm hứng...', articleSection: 'Hướng dẫn AI' },
});

const th: UiCopy = withEnFallback({
  navbar: { home: 'หน้าแรก', blog: 'บล็อก', tutorial: 'บทช่วยสอน', about: 'เกี่ยวกับเรา', api: 'API', startCreate: 'เริ่มสร้าง', features: 'ฟีเจอร์', pricing: 'ราคา', faq: 'คำถามที่พบบ่อย', contactUs: 'ติดต่อเรา', logoText: 'LimaxAI', languageSwitcher: 'ภาษา' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI แพลตฟอร์มสร้างสรรค์ AI ระดับมืออาชีพ สร้างวิดีโอและภาพด้วยโมเดลล้ำสมัย' }, columns: { aiImage: 'ภาพ AI', aiVideo: 'วิดีโอ AI', aiMusic: 'ดนตรี AI', aiTools: 'เครื่องมือ AI', company: 'บริษัท' }, links: { blog: 'บล็อก', about: 'เกี่ยวกับเรา', privacy: 'ความเป็นส่วนตัว', terms: 'ข้อกำหนด', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'สงวนลิขสิทธิ์.' },
  buttons: { getStarted: 'เริ่มต้น', learnMore: 'เรียนรู้เพิ่มเติม', viewDetails: 'ดูรายละเอียด', submit: 'ส่ง', back: 'กลับ' },
  common: { loading: 'กำลังโหลด...', success: 'สำเร็จ', pleaseEnter: 'กรุณาใส่' },
  labels: { search: 'ค้นหา', filter: 'กรอง', pagination: 'หน้า' },
  meta: { readTime: 'อ่าน {minutes} นาที', updatedAt: 'อัปเดตเมื่อ:', redirecting: 'กำลังไปที่บทช่วยสอน...', loadingInspiration: 'กำลังโหลดแรงบันดาลใจ...', articleSection: 'บทช่วยสอน AI' },
});

const it: UiCopy = withEnFallback({
  navbar: { home: 'Home', blog: 'Blog', tutorial: 'Tutorial', about: 'Chi siamo', api: 'API', startCreate: 'Inizia', features: 'Funzionalità', pricing: 'Prezzi', faq: 'FAQ', contactUs: 'Contattaci', logoText: 'LimaxAI', languageSwitcher: 'Lingua' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, piattaforma professionale di generazione AI. Crea video e immagini con modelli all\'avanguardia.' }, columns: { aiImage: 'Immagine AI', aiVideo: 'Video AI', aiMusic: 'Musica AI', aiTools: 'Strumenti AI', company: 'Azienda' }, links: { blog: 'Blog', about: 'Chi siamo', privacy: 'Privacy', terms: 'Termini', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Tutti i diritti riservati.' },
  buttons: { getStarted: 'Inizia', learnMore: 'Scopri di più', viewDetails: 'Dettagli', submit: 'Invia', back: 'Indietro' },
  common: { loading: 'Caricamento...', success: 'Successo', pleaseEnter: 'Inserisci' },
  labels: { search: 'Cerca', filter: 'Filtra', pagination: 'Pagine' },
  meta: { readTime: '{minutes} min di lettura', updatedAt: 'Aggiornato il:', redirecting: 'Reindirizzamento ai tutorial...', loadingInspiration: 'Caricamento della tua ispirazione...', articleSection: 'Tutorial AI' },
});

const fa: UiCopy = withEnFallback({
  navbar: { home: 'خانه', blog: 'وبلاگ', tutorial: 'آموزش‌ها', about: 'درباره ما', api: 'API', startCreate: 'شروع', features: 'امکانات', pricing: 'قیمت', faq: 'سوالات متداول', contactUs: 'تماس با ما', logoText: 'LimaxAI', languageSwitcher: 'زبان' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI، پلتفرم حرفه‌ای تولید محتوا با هوش مصنوعی. ویدیو و تصویر بسازید با مدل‌های پیشرفته.' }, columns: { aiImage: 'تصویر AI', aiVideo: 'ویدیو AI', aiMusic: 'موسیقی AI', aiTools: 'ابزارهای AI', company: 'شرکت' }, links: { blog: 'وبلاگ', about: 'درباره ما', privacy: 'حریم خصوصی', terms: 'شرایط', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'تمامی حقوق محفوظ است.' },
  buttons: { getStarted: 'شروع', learnMore: 'بیشتر بدانید', viewDetails: 'جزئیات', submit: 'ارسال', back: 'بازگشت' },
  common: { loading: 'در حال بارگذاری...', success: 'موفق', pleaseEnter: 'لطفا وارد کنید' },
  labels: { search: 'جستجو', filter: 'فیلتر', pagination: 'صفحه' },
  meta: { readTime: '{minutes} دقیقه مطالعه', updatedAt: 'به‌روزرسانی:', redirecting: 'در حال انتقال به آموزش‌ها...', loadingInspiration: 'در حال بارگذاری الهام شما...', articleSection: 'آموزش‌های هوش مصنوعی' },
});

const nl: UiCopy = withEnFallback({
  navbar: { home: 'Home', blog: 'Blog', tutorial: 'Tutorial', about: 'Over ons', api: 'API', startCreate: 'Aan de slag', features: 'Functies', pricing: 'Prijzen', faq: 'FAQ', contactUs: 'Contact', logoText: 'LimaxAI', languageSwitcher: 'Taal' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, professioneel AI-generatieplatform. Maak video\'s en afbeeldingen met geavanceerde modellen.' }, columns: { aiImage: 'AI-afbeelding', aiVideo: 'AI-video', aiMusic: 'AI-muziek', aiTools: 'AI-tools', company: 'Bedrijf' }, links: { blog: 'Blog', about: 'Over ons', privacy: 'Privacy', terms: 'Voorwaarden', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Alle rechten voorbehouden.' },
  buttons: { getStarted: 'Aan de slag', learnMore: 'Meer info', viewDetails: 'Details bekijken', submit: 'Verzenden', back: 'Terug' },
  common: { loading: 'Laden...', success: 'Gelukt', pleaseEnter: 'Vul in' },
  labels: { search: 'Zoeken', filter: 'Filter', pagination: 'Pagina' },
  meta: { readTime: '{minutes} min leestijd', updatedAt: 'Bijgewerkt:', redirecting: 'Doorsturen naar tutorials...', loadingInspiration: 'Inspiratie wordt geladen...', articleSection: 'AI-tutorials' },
});

const pl: UiCopy = withEnFallback({
  navbar: { home: 'Strona główna', blog: 'Blog', tutorial: 'Samouczek', about: 'O nas', api: 'API', startCreate: 'Rozpocznij', features: 'Funkcje', pricing: 'Cennik', faq: 'FAQ', contactUs: 'Kontakt', logoText: 'LimaxAI', languageSwitcher: 'Język' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, profesjonalna platforma generowania AI. Twórz wideo i obrazy za pomocą zaawansowanych modeli.' }, columns: { aiImage: 'Obraz AI', aiVideo: 'Wideo AI', aiMusic: 'Muzyka AI', aiTools: 'Narzędzia AI', company: 'Firma' }, links: { blog: 'Blog', about: 'O nas', privacy: 'Prywatność', terms: 'Regulamin', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Wszelkie prawa zastrzeżone.' },
  buttons: { getStarted: 'Rozpocznij', learnMore: 'Dowiedz się więcej', viewDetails: 'Szczegóły', submit: 'Wyślij', back: 'Wstecz' },
  common: { loading: 'Ładowanie...', success: 'Sukces', pleaseEnter: 'Proszę wpisać' },
  labels: { search: 'Szukaj', filter: 'Filtruj', pagination: 'Strony' },
  meta: { readTime: '{minutes} min czytania', updatedAt: 'Zaktualizowano:', redirecting: 'Przekierowanie do samouczków...', loadingInspiration: 'Ładowanie inspiracji...', articleSection: 'Samouczki AI' },
});

const sv: UiCopy = withEnFallback({
  navbar: { home: 'Hem', blog: 'Blogg', tutorial: 'Guider', about: 'Om oss', api: 'API', startCreate: 'Kom igång', features: 'Funktioner', pricing: 'Priser', faq: 'FAQ', contactUs: 'Kontakt', logoText: 'LimaxAI', languageSwitcher: 'Språk' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, professionell AI-genereringsplattform. Skapa video och bilder med toppmoderna modeller.' }, columns: { aiImage: 'AI-bild', aiVideo: 'AI-video', aiMusic: 'AI-musik', aiTools: 'AI-verktyg', company: 'Företag' }, links: { blog: 'Blogg', about: 'Om oss', privacy: 'Integritet', terms: 'Villkor', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Alla rättigheter förbehållna.' },
  buttons: { getStarted: 'Kom igång', learnMore: 'Läs mer', viewDetails: 'Se detaljer', submit: 'Skicka', back: 'Tillbaka' },
  common: { loading: 'Laddar...', success: 'Lyckat', pleaseEnter: 'Ange' },
  labels: { search: 'Sök', filter: 'Filtrera', pagination: 'Sidor' },
  meta: { readTime: '{minutes} min läsning', updatedAt: 'Uppdaterad:', redirecting: 'Omdirigerar till guider...', loadingInspiration: 'Laddar din inspiration...', articleSection: 'AI-guider' },
});

const uk: UiCopy = withEnFallback({
  navbar: { home: 'Головна', blog: 'Блог', tutorial: 'Туторіали', about: 'Про нас', api: 'API', startCreate: 'Почати', features: 'Можливості', pricing: 'Ціни', faq: 'Питання та відповіді', contactUs: 'Контакти', logoText: 'LimaxAI', languageSwitcher: 'Мова' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI — професійна платформа генерації AI. Створюйте відео та зображення з передовими моделями.' }, columns: { aiImage: 'AI-зображення', aiVideo: 'AI-відео', aiMusic: 'AI-музика', aiTools: 'AI-інструменти', company: 'Компанія' }, links: { blog: 'Блог', about: 'Про нас', privacy: 'Конфіденційність', terms: 'Умови', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Усі права захищені.' },
  buttons: { getStarted: 'Почати', learnMore: 'Детальніше', viewDetails: 'Деталі', submit: 'Надіслати', back: 'Назад' },
  common: { loading: 'Завантаження...', success: 'Успішно', pleaseEnter: 'Будь ласка, введіть' },
  labels: { search: 'Пошук', filter: 'Фільтр', pagination: 'Сторінки' },
  meta: { readTime: '{minutes} хв читання', updatedAt: 'Оновлено:', redirecting: 'Перенаправлення на туторіали...', loadingInspiration: 'Завантаження натхнення...', articleSection: 'Туторіали з AI' },
});

const ro: UiCopy = withEnFallback({
  navbar: { home: 'Acasă', blog: 'Blog', tutorial: 'Tutoriale', about: 'Despre noi', api: 'API', startCreate: 'Începe', features: 'Funcționalități', pricing: 'Prețuri', faq: 'Întrebări frecvente', contactUs: 'Contact', logoText: 'LimaxAI', languageSwitcher: 'Limbă' },
  footer: { brand: { title: 'LimaxAI', intro: 'LimaxAI, platformă profesională de generare AI. Creați videoclipuri și imagini cu modele de ultimă generație.' }, columns: { aiImage: 'Imagine AI', aiVideo: 'Video AI', aiMusic: 'Muzică AI', aiTools: 'Instrumente AI', company: 'Companie' }, links: { blog: 'Blog', about: 'Despre noi', privacy: 'Confidențialitate', terms: 'Termeni', api: 'API', midjourney: 'Midjourney', nanoBananaPro: 'Nano Banana Pro', nanoBanana2: 'Nano Banana 2', nanoBanana3: 'Nano Banana 3', seedance20: 'Seedance 2.0', seedance15: 'Seedance 1.5', veo3: 'Veo 3', happyHorse1: 'HappyHorse1.0', happyHorse2: 'HappyHorse2.0', suno: 'Suno', sunoHK: 'SunoHK', udio: 'Udio', limaxai: 'LimaxAI', deepseek4: 'deepseek 4', notebooklm: 'Notebooklm', openclaw: 'Openclaw', gemini30: 'Gemini 3.0', geminiWatermarkErase: 'Gemini Watermark Erase' }, copyright: 'Toate drepturile rezervate.' },
  buttons: { getStarted: 'Începe', learnMore: 'Află mai multe', viewDetails: 'Detalii', submit: 'Trimite', back: 'Înapoi' },
  common: { loading: 'Se încarcă...', success: 'Succes', pleaseEnter: 'Introduceți' },
  labels: { search: 'Căutare', filter: 'Filtru', pagination: 'Pagini' },
  meta: { readTime: '{minutes} min de citire', updatedAt: 'Actualizat:', redirecting: 'Redirecționare către tutoriale...', loadingInspiration: 'Se încarcă inspirația ta...', articleSection: 'Tutoriale AI' },
});

const uiByLocale: Record<Locale, UiCopy> = {
  en,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  es,
  ar,
  pt,
  id,
  ms,
  fr,
  ru,
  hi,
  ja,
  de,
  ko,
  tr,
  vi,
  th,
  it,
  fa,
  nl,
  pl,
  sv,
  uk,
  ro,
};

/** 各语种在语言切换器中的显示名（原生语言） */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  es: 'Español',
  ar: 'العربية',
  pt: 'Português',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu',
  fr: 'Français',
  ru: 'Русский',
  hi: 'हिन्दी',
  ja: '日本語',
  de: 'Deutsch',
  ko: '한국어',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  it: 'Italiano',
  fa: 'فارسی',
  nl: 'Nederlands',
  pl: 'Polski',
  sv: 'Svenska',
  uk: 'Українська',
  ro: 'Română',
};

/** 根据语种获取全站通用 UI 文案，缺省回退到 en 并输出控制台警告 */
export function getUi(locale: string): UiCopy {
  const ui = uiByLocale[locale as Locale];
  if (!ui) {
    console.warn(`[i18n] Missing UI copy for locale "${locale}", falling back to en.`);
    return en;
  }
  return ui;
}

export const ui = uiByLocale;
