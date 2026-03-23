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
    columns: { aiTools: string; aiVideo: string; aiImage: string; company: string };
    links: {
      blog: string;
      about: string;
      privacy: string;
      terms: string;
      autoDebitAgreement: string;
      api: string;
      limaxai: string;
      suno: string;
      deepseek4: string;
      notebooklm: string;
      openclaw: string;
      gemini30: string;
      seedance20: string;
      seedance15: string;
      veo31: string;
      veo3: string;
      sora: string;
      sora2: string;
      midjourney: string;
      nanoBanana2: string;
      nanoBananaPro: string;
      nanoBanana3: string;
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
    columns: { aiTools: 'AI Tools', aiVideo: 'AI Video', aiImage: 'AI Image', company: 'Company' },
    links: {
      blog: 'Blog',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      autoDebitAgreement: 'Auto-Debit Agreement',
      api: 'API',
      limaxai: 'LimaxAI',
      suno: 'Suno',
      deepseek4: 'deepseek 4',
      notebooklm: 'Notebooklm',
      openclaw: 'Openclaw',
      gemini30: 'Gemini 3.0',
      seedance20: 'Seedance 2.0',
      seedance15: 'Seedance 1.5',
      veo31: 'Veo 3.1',
      veo3: 'Veo 3',
      sora: 'Sora',
      sora2: 'Sora 2',
      midjourney: 'Midjourney',
      nanoBanana2: 'Nano Banana 2',
      nanoBananaPro: 'Nano Banana Pro',
      nanoBanana3: 'Nano Banana 3',
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
    brand: { intro: 'LimaxAI，专业 AI 生成平台。使用前沿模型创作精彩视频与图片。' },
    columns: { aiTools: 'AI 工具', aiVideo: 'AI 视频', aiImage: 'AI 图像', company: '公司' },
    links: { blog: '博客', about: '关于我们', privacy: '隐私政策', terms: '服务条款', autoDebitAgreement: '用户开通代扣协议', api: 'API接口' },
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
    brand: { intro: 'LimaxAI，專業 AI 生成平台。使用前沿模型創作精彩視頻與圖片。' },
    columns: { aiTools: 'AI 工具', aiVideo: 'AI 視頻', aiImage: 'AI 圖像', company: '公司' },
    links: { blog: '部落格', about: '關於我們', privacy: '隱私政策', terms: '服務條款', autoDebitAgreement: '用戶開通代扣協議', api: 'API 介面' },
    copyright: '版權所有。',
  },
  buttons: { getStarted: '立即開始', learnMore: '了解更多', viewDetails: '查看詳情', submit: '提交', back: '返回' },
  common: { loading: '載入中...', success: '操作成功', pleaseEnter: '請輸入' },
  labels: { search: '搜尋', filter: '篩選', pagination: '頁碼' },
});

const es: UiCopy = withEnFallback({
  navbar: { home: 'Inicio', blog: 'Blog', features: 'Funciones', pricing: 'Precios', faq: 'FAQ', contactUs: 'Contacto', logoText: 'LimaxAI', languageSwitcher: 'Idioma' },
  footer: { brand: { intro: 'LimaxAI, plataforma profesional de generación IA. Crea vídeos e imágenes con modelos de vanguardia.' }, links: { blog: 'Blog', about: 'Nosotros', privacy: 'Privacidad', terms: 'Términos' }, copyright: 'Todos los derechos reservados.' },
  buttons: { getStarted: 'Empezar', learnMore: 'Saber más', viewDetails: 'Ver detalles', submit: 'Enviar', back: 'Volver' },
  common: { loading: 'Cargando...', success: 'Éxito', pleaseEnter: 'Por favor introduzca' },
  labels: { search: 'Buscar', filter: 'Filtrar', pagination: 'Paginación' },
});

const ar: UiCopy = withEnFallback({
  navbar: { home: 'الرئيسية', blog: 'المدونة', features: 'الميزات', pricing: 'الأسعار', faq: 'الأسئلة الشائعة', contactUs: 'اتصل بنا', logoText: 'LimaxAI', languageSwitcher: 'اللغة' },
  footer: { links: { blog: 'المدونة', about: 'من نحن', privacy: 'الخصوصية', terms: 'الشروط' }, copyright: 'جميع الحقوق محفوظة.' },
  buttons: { getStarted: 'ابدأ', learnMore: 'اعرف المزيد', viewDetails: 'عرض التفاصيل', submit: 'إرسال', back: 'رجوع' },
  common: { loading: 'جاري التحميل...', success: 'تم بنجاح', pleaseEnter: 'يرجى الإدخال' },
  labels: { search: 'بحث', filter: 'تصفية', pagination: 'ترقيم الصفحات' },
});

const pt: UiCopy = withEnFallback({
  navbar: { home: 'Início', blog: 'Blog', features: 'Recursos', pricing: 'Preços', faq: 'FAQ', contactUs: 'Contato', logoText: 'LimaxAI', languageSwitcher: 'Idioma' },
  footer: { brand: { intro: 'LimaxAI, plataforma profissional de geração por IA. Crie vídeos e imagens com modelos de ponta.' }, links: { blog: 'Blog', about: 'Sobre', privacy: 'Privacidade', terms: 'Termos' }, copyright: 'Todos os direitos reservados.' },
  buttons: { getStarted: 'Começar', learnMore: 'Saiba mais', viewDetails: 'Ver detalhes', submit: 'Enviar', back: 'Voltar' },
  common: { loading: 'Carregando...', success: 'Sucesso', pleaseEnter: 'Por favor insira' },
  labels: { search: 'Pesquisar', filter: 'Filtrar', pagination: 'Paginação' },
});

const id: UiCopy = withEnFallback({
  navbar: { home: 'Beranda', blog: 'Blog', features: 'Fitur', pricing: 'Harga', faq: 'FAQ', contactUs: 'Hubungi Kami', logoText: 'LimaxAI', languageSwitcher: 'Bahasa' },
  footer: { links: { blog: 'Blog', about: 'Tentang', privacy: 'Privasi', terms: 'Ketentuan' }, copyright: 'Hak cipta dilindungi.' },
  buttons: { getStarted: 'Mulai', learnMore: 'Pelajari Lebih Lanjut', viewDetails: 'Lihat Detail', submit: 'Kirim', back: 'Kembali' },
  common: { loading: 'Memuat...', success: 'Berhasil', pleaseEnter: 'Silakan masukkan' },
  labels: { search: 'Cari', filter: 'Filter', pagination: 'Halaman' },
});

const ms: UiCopy = withEnFallback({
  navbar: { home: 'Laman Utama', blog: 'Blog', features: 'Ciri', pricing: 'Harga', faq: 'FAQ', contactUs: 'Hubungi Kami', logoText: 'LimaxAI', languageSwitcher: 'Bahasa' },
  footer: { links: { blog: 'Blog', about: 'Perihal', privacy: 'Privasi', terms: 'Terma' }, copyright: 'Hak cipta terpelihara.' },
  buttons: { getStarted: 'Mula', learnMore: 'Ketahui Lebih Lanjut', viewDetails: 'Lihat Butiran', submit: 'Hantar', back: 'Kembali' },
  common: { loading: 'Memuatkan...', success: 'Berjaya', pleaseEnter: 'Sila masukkan' },
  labels: { search: 'Cari', filter: 'Tapis', pagination: 'Halaman' },
});

const fr: UiCopy = withEnFallback({
  navbar: { home: 'Accueil', blog: 'Blog', features: 'Fonctionnalités', pricing: 'Tarifs', faq: 'FAQ', contactUs: 'Nous contacter', logoText: 'LimaxAI', languageSwitcher: 'Langue' },
  footer: { brand: { intro: 'LimaxAI, plateforme professionnelle de génération IA. Créez vidéos et images avec des modèles de pointe.' }, links: { blog: 'Blog', about: 'À propos', privacy: 'Confidentialité', terms: 'Conditions' }, copyright: 'Tous droits réservés.' },
  buttons: { getStarted: 'Commencer', learnMore: 'En savoir plus', viewDetails: 'Voir les détails', submit: 'Envoyer', back: 'Retour' },
  common: { loading: 'Chargement...', success: 'Succès', pleaseEnter: 'Veuillez entrer' },
  labels: { search: 'Rechercher', filter: 'Filtrer', pagination: 'Pagination' },
});

const ru: UiCopy = withEnFallback({
  navbar: { home: 'Главная', blog: 'Блог', features: 'Возможности', pricing: 'Цены', faq: 'Вопросы и ответы', contactUs: 'Связаться', logoText: 'LimaxAI', languageSwitcher: 'Язык' },
  footer: { links: { blog: 'Блог', about: 'О нас', privacy: 'Конфиденциальность', terms: 'Условия' }, copyright: 'Все права защищены.' },
  buttons: { getStarted: 'Начать', learnMore: 'Подробнее', viewDetails: 'Подробности', submit: 'Отправить', back: 'Назад' },
  common: { loading: 'Загрузка...', success: 'Успешно', pleaseEnter: 'Пожалуйста, введите' },
  labels: { search: 'Поиск', filter: 'Фильтр', pagination: 'Страницы' },
});

const hi: UiCopy = withEnFallback({
  navbar: { home: 'होम', blog: 'ब्लॉग', features: 'विशेषताएं', pricing: 'मूल्य निर्धारण', faq: 'सामान्य प्रश्न', contactUs: 'संपर्क करें', logoText: 'LimaxAI', languageSwitcher: 'भाषा' },
  footer: { links: { blog: 'ब्लॉग', about: 'हमारे बारे में', privacy: 'गोपनीयता', terms: 'नियम' }, copyright: 'सर्वाधिकार सुरक्षित.' },
  buttons: { getStarted: 'शुरू करें', learnMore: 'और जानें', viewDetails: 'विवरण देखें', submit: 'जमा करें', back: 'वापस' },
  common: { loading: 'लोड हो रहा है...', success: 'सफल', pleaseEnter: 'कृपया दर्ज करें' },
  labels: { search: 'खोज', filter: 'फ़िल्टर', pagination: 'पृष्ठ संख्या' },
});

const ja: UiCopy = withEnFallback({
  navbar: { home: 'ホーム', blog: 'ブログ', features: '機能', pricing: '料金', faq: 'よくある質問', contactUs: 'お問い合わせ', logoText: 'LimaxAI', languageSwitcher: '言語' },
  footer: { columns: { aiTools: 'AIツール', aiVideo: 'AI動画', aiImage: 'AI画像', company: '会社' }, links: { blog: 'ブログ', about: '会社概要', privacy: 'プライバシー', terms: '利用規約' }, copyright: 'All rights reserved.' },
  buttons: { getStarted: '始める', learnMore: '詳しく見る', viewDetails: '詳細を見る', submit: '送信', back: '戻る' },
  common: { loading: '読み込み中...', success: '成功', pleaseEnter: '入力してください' },
  labels: { search: '検索', filter: 'フィルター', pagination: 'ページ' },
});

const de: UiCopy = withEnFallback({
  navbar: { home: 'Startseite', blog: 'Blog', features: 'Funktionen', pricing: 'Preise', faq: 'FAQ', contactUs: 'Kontakt', logoText: 'LimaxAI', languageSwitcher: 'Sprache' },
  footer: { brand: { intro: 'LimaxAI, professionelle KI-Generierungsplattform. Erstellen Sie beeindruckende Videos und Bilder mit modernsten Modellen.' }, links: { blog: 'Blog', about: 'Über uns', privacy: 'Datenschutz', terms: 'AGB' }, copyright: 'Alle Rechte vorbehalten.' },
  buttons: { getStarted: 'Loslegen', learnMore: 'Mehr erfahren', viewDetails: 'Details anzeigen', submit: 'Absenden', back: 'Zurück' },
  common: { loading: 'Laden...', success: 'Erfolg', pleaseEnter: 'Bitte eingeben' },
  labels: { search: 'Suchen', filter: 'Filter', pagination: 'Seiten' },
});

const ko: UiCopy = withEnFallback({
  navbar: { home: '홈', blog: '블로그', features: '기능', pricing: '가격', faq: '자주 묻는 질문', contactUs: '문의하기', logoText: 'LimaxAI', languageSwitcher: '언어' },
  footer: { columns: { aiTools: 'AI 도구', aiVideo: 'AI 비디오', aiImage: 'AI 이미지', company: '회사' }, links: { blog: '블로그', about: '소개', privacy: '개인정보처리방침', terms: '이용약관' }, copyright: 'All rights reserved.' },
  buttons: { getStarted: '시작하기', learnMore: '자세히 보기', viewDetails: '상세 보기', submit: '제출', back: '뒤로' },
  common: { loading: '로딩 중...', success: '성공', pleaseEnter: '입력해 주세요' },
  labels: { search: '검색', filter: '필터', pagination: '페이지' },
});

const tr: UiCopy = withEnFallback({
  navbar: { home: 'Ana Sayfa', blog: 'Blog', features: 'Özellikler', pricing: 'Fiyatlandırma', faq: 'SSS', contactUs: 'İletişim', logoText: 'LimaxAI', languageSwitcher: 'Dil' },
  footer: { links: { blog: 'Blog', about: 'Hakkımızda', privacy: 'Gizlilik', terms: 'Koşullar' }, copyright: 'Tüm hakları saklıdır.' },
  buttons: { getStarted: 'Başlayın', learnMore: 'Daha Fazla', viewDetails: 'Detayları Gör', submit: 'Gönder', back: 'Geri' },
  common: { loading: 'Yükleniyor...', success: 'Başarılı', pleaseEnter: 'Lütfen girin' },
  labels: { search: 'Ara', filter: 'Filtrele', pagination: 'Sayfalar' },
});

const vi: UiCopy = withEnFallback({
  navbar: { home: 'Trang chủ', blog: 'Blog', features: 'Tính năng', pricing: 'Giá', faq: 'FAQ', contactUs: 'Liên hệ', logoText: 'LimaxAI', languageSwitcher: 'Ngôn ngữ' },
  footer: { links: { blog: 'Blog', about: 'Giới thiệu', privacy: 'Quyền riêng tư', terms: 'Điều khoản' }, copyright: 'Đã bảo lưu mọi quyền.' },
  buttons: { getStarted: 'Bắt đầu', learnMore: 'Tìm hiểu thêm', viewDetails: 'Xem chi tiết', submit: 'Gửi', back: 'Quay lại' },
  common: { loading: 'Đang tải...', success: 'Thành công', pleaseEnter: 'Vui lòng nhập' },
  labels: { search: 'Tìm kiếm', filter: 'Lọc', pagination: 'Trang' },
});

const th: UiCopy = withEnFallback({
  navbar: { home: 'หน้าแรก', blog: 'บล็อก', features: 'ฟีเจอร์', pricing: 'ราคา', faq: 'คำถามที่พบบ่อย', contactUs: 'ติดต่อเรา', logoText: 'LimaxAI', languageSwitcher: 'ภาษา' },
  footer: { links: { blog: 'บล็อก', about: 'เกี่ยวกับเรา', privacy: 'ความเป็นส่วนตัว', terms: 'ข้อกำหนด' }, copyright: 'สงวนลิขสิทธิ์.' },
  buttons: { getStarted: 'เริ่มต้น', learnMore: 'เรียนรู้เพิ่มเติม', viewDetails: 'ดูรายละเอียด', submit: 'ส่ง', back: 'กลับ' },
  common: { loading: 'กำลังโหลด...', success: 'สำเร็จ', pleaseEnter: 'กรุณาใส่' },
  labels: { search: 'ค้นหา', filter: 'กรอง', pagination: 'หน้า' },
});

const it: UiCopy = withEnFallback({
  navbar: { home: 'Home', blog: 'Blog', features: 'Funzionalità', pricing: 'Prezzi', faq: 'FAQ', contactUs: 'Contattaci', logoText: 'LimaxAI', languageSwitcher: 'Lingua' },
  footer: { brand: { intro: 'LimaxAI, piattaforma professionale di generazione AI. Crea video e immagini con modelli all\'avanguardia.' }, links: { blog: 'Blog', about: 'Chi siamo', privacy: 'Privacy', terms: 'Termini' }, copyright: 'Tutti i diritti riservati.' },
  buttons: { getStarted: 'Inizia', learnMore: 'Scopri di più', viewDetails: 'Dettagli', submit: 'Invia', back: 'Indietro' },
  common: { loading: 'Caricamento...', success: 'Successo', pleaseEnter: 'Inserisci' },
  labels: { search: 'Cerca', filter: 'Filtra', pagination: 'Pagine' },
});

const fa: UiCopy = withEnFallback({
  navbar: { home: 'خانه', blog: 'وبلاگ', features: 'امکانات', pricing: 'قیمت', faq: 'سوالات متداول', contactUs: 'تماس با ما', logoText: 'LimaxAI', languageSwitcher: 'زبان' },
  footer: { links: { blog: 'وبلاگ', about: 'درباره ما', privacy: 'حریم خصوصی', terms: 'شرایط' }, copyright: 'تمامی حقوق محفوظ است.' },
  buttons: { getStarted: 'شروع', learnMore: 'بیشتر بدانید', viewDetails: 'جزئیات', submit: 'ارسال', back: 'بازگشت' },
  common: { loading: 'در حال بارگذاری...', success: 'موفق', pleaseEnter: 'لطفا وارد کنید' },
  labels: { search: 'جستجو', filter: 'فیلتر', pagination: 'صفحه' },
});

const nl: UiCopy = withEnFallback({
  navbar: { home: 'Home', blog: 'Blog', features: 'Functies', pricing: 'Prijzen', faq: 'FAQ', contactUs: 'Contact', logoText: 'LimaxAI', languageSwitcher: 'Taal' },
  footer: { links: { blog: 'Blog', about: 'Over ons', privacy: 'Privacy', terms: 'Voorwaarden' }, copyright: 'Alle rechten voorbehouden.' },
  buttons: { getStarted: 'Aan de slag', learnMore: 'Meer info', viewDetails: 'Details bekijken', submit: 'Verzenden', back: 'Terug' },
  common: { loading: 'Laden...', success: 'Gelukt', pleaseEnter: 'Vul in' },
  labels: { search: 'Zoeken', filter: 'Filter', pagination: 'Pagina' },
});

const pl: UiCopy = withEnFallback({
  navbar: { home: 'Strona główna', blog: 'Blog', features: 'Funkcje', pricing: 'Cennik', faq: 'FAQ', contactUs: 'Kontakt', logoText: 'LimaxAI', languageSwitcher: 'Język' },
  footer: { links: { blog: 'Blog', about: 'O nas', privacy: 'Prywatność', terms: 'Regulamin' }, copyright: 'Wszelkie prawa zastrzeżone.' },
  buttons: { getStarted: 'Rozpocznij', learnMore: 'Dowiedz się więcej', viewDetails: 'Szczegóły', submit: 'Wyślij', back: 'Wstecz' },
  common: { loading: 'Ładowanie...', success: 'Sukces', pleaseEnter: 'Proszę wpisać' },
  labels: { search: 'Szukaj', filter: 'Filtruj', pagination: 'Strony' },
});

const sv: UiCopy = withEnFallback({
  navbar: { home: 'Hem', blog: 'Blogg', features: 'Funktioner', pricing: 'Priser', faq: 'FAQ', contactUs: 'Kontakt', logoText: 'LimaxAI', languageSwitcher: 'Språk' },
  footer: { links: { blog: 'Blogg', about: 'Om oss', privacy: 'Integritet', terms: 'Villkor' }, copyright: 'Alla rättigheter förbehållna.' },
  buttons: { getStarted: 'Kom igång', learnMore: 'Läs mer', viewDetails: 'Se detaljer', submit: 'Skicka', back: 'Tillbaka' },
  common: { loading: 'Laddar...', success: 'Lyckat', pleaseEnter: 'Ange' },
  labels: { search: 'Sök', filter: 'Filtrera', pagination: 'Sidor' },
});

const uk: UiCopy = withEnFallback({
  navbar: { home: 'Головна', blog: 'Блог', features: 'Можливості', pricing: 'Ціни', faq: 'Питання та відповіді', contactUs: 'Контакти', logoText: 'LimaxAI', languageSwitcher: 'Мова' },
  footer: { links: { blog: 'Блог', about: 'Про нас', privacy: 'Конфіденційність', terms: 'Умови' }, copyright: 'Усі права захищені.' },
  buttons: { getStarted: 'Почати', learnMore: 'Детальніше', viewDetails: 'Деталі', submit: 'Надіслати', back: 'Назад' },
  common: { loading: 'Завантаження...', success: 'Успішно', pleaseEnter: 'Будь ласка, введіть' },
  labels: { search: 'Пошук', filter: 'Фільтр', pagination: 'Сторінки' },
});

const ro: UiCopy = withEnFallback({
  navbar: { home: 'Acasă', blog: 'Blog', features: 'Funcționalități', pricing: 'Prețuri', faq: 'Întrebări frecvente', contactUs: 'Contact', logoText: 'LimaxAI', languageSwitcher: 'Limbă' },
  footer: { links: { blog: 'Blog', about: 'Despre noi', privacy: 'Confidențialitate', terms: 'Termeni' }, copyright: 'Toate drepturile rezervate.' },
  buttons: { getStarted: 'Începe', learnMore: 'Află mai multe', viewDetails: 'Detalii', submit: 'Trimite', back: 'Înapoi' },
  common: { loading: 'Se încarcă...', success: 'Succes', pleaseEnter: 'Introduceți' },
  labels: { search: 'Căutare', filter: 'Filtru', pagination: 'Pagini' },
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

/** 根据语种获取全站通用 UI 文案，缺省回退到 en */
export function getUi(locale: string): UiCopy {
  return uiByLocale[locale as Locale] ?? en;
}

export const ui = uiByLocale;
