/**
 * 多语种 UI 文案
 * 页脚等全局组件通过 currentLang 从此处读取对应语种的标题、简介、链接标签。
 * 语种切换时（URL 从 /en/ 变为 /zh-cn/ 等），BaseLayout 传入的 currentLang 变化，Footer 会重新渲染并读取 ui.footer[currentLang]，从而实现底部栏文本同步切换。
 */

export type Locale = string;

export interface FooterCopy {
  brand: {
    title: string;
    intro: string;
  };
  columns: {
    aiTools: string;
    aiVideo: string;
    aiImage: string;
    company: string;
  };
  links: {
    blog: string;
    about: string;
    privacy: string;
    terms: string;
    // 产品名保持英文，如需多语种可在此扩展
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
}

const en: FooterCopy = {
  brand: {
    title: 'LimaxAI',
    intro: 'LimaxAI, professional AI generation platform. Create stunning videos and images with cutting-edge models.',
  },
  columns: {
    aiTools: 'AI Tools',
    aiVideo: 'AI Video',
    aiImage: 'AI Image',
    company: 'Company',
  },
  links: {
    blog: 'Blog',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
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
};

const zhCN: FooterCopy = {
  brand: {
    title: 'LimaxAI',
    intro: 'LimaxAI，专业 AI 生成平台。使用前沿模型创作精彩视频与图片。',
  },
  columns: {
    aiTools: 'AI 工具',
    aiVideo: 'AI 视频',
    aiImage: 'AI 图像',
    company: '公司',
  },
  links: {
    blog: '博客',
    about: '关于我们',
    privacy: '隐私政策',
    terms: '服务条款',
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
  copyright: '版权所有。',
};

const zhTW: FooterCopy = {
  brand: {
    title: 'LimaxAI',
    intro: 'LimaxAI，專業 AI 生成平台。使用前沿模型創作精彩視頻與圖片。',
  },
  columns: {
    aiTools: 'AI 工具',
    aiVideo: 'AI 視頻',
    aiImage: 'AI 圖像',
    company: '公司',
  },
  links: {
    blog: '部落格',
    about: '關於我們',
    privacy: '隱私政策',
    terms: '服務條款',
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
  copyright: '版權所有。',
};

const footerByLocale: Record<string, FooterCopy> = {
  en,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  es: { ...en, brand: { ...en.brand, intro: 'LimaxAI, plataforma profesional de generación IA. Crea vídeos e imágenes con modelos de vanguardia.' }, columns: { ...en.columns }, links: { ...en.links, blog: 'Blog', about: 'Nosotros', privacy: 'Privacidad', terms: 'Términos' }, copyright: 'Todos los derechos reservados.' },
  ar: { ...en, links: { ...en.links, blog: 'المدونة', about: 'من نحن', privacy: 'الخصوصية', terms: 'الشروط' }, copyright: 'جميع الحقوق محفوظة.' },
  pt: { ...en, brand: { ...en.brand, intro: 'LimaxAI, plataforma profissional de geração por IA. Crie vídeos e imagens com modelos de ponta.' }, links: { ...en.links, blog: 'Blog', about: 'Sobre', privacy: 'Privacidade', terms: 'Termos' }, copyright: 'Todos os direitos reservados.' },
  id: { ...en, links: { ...en.links, blog: 'Blog', about: 'Tentang', privacy: 'Privasi', terms: 'Ketentuan' }, copyright: 'Hak cipta dilindungi.' },
  ms: { ...en, links: { ...en.links, blog: 'Blog', about: 'Perihal', privacy: 'Privasi', terms: 'Terma' }, copyright: 'Hak cipta terpelihara.' },
  fr: { ...en, brand: { ...en.brand, intro: 'LimaxAI, plateforme professionnelle de génération IA. Créez vidéos et images avec des modèles de pointe.' }, links: { ...en.links, blog: 'Blog', about: 'À propos', privacy: 'Confidentialité', terms: 'Conditions' }, copyright: 'Tous droits réservés.' },
  ru: { ...en, links: { ...en.links, blog: 'Блог', about: 'О нас', privacy: 'Конфиденциальность', terms: 'Условия' }, copyright: 'Все права защищены.' },
  hi: { ...en, links: { ...en.links, blog: 'ब्लॉग', about: 'हमारे बारे में', privacy: 'गोपनीयता', terms: 'नियम' }, copyright: 'सर्वाधिकार सुरक्षित.' },
  ja: { ...en, columns: { ...en.columns, aiTools: 'AIツール', aiVideo: 'AI動画', aiImage: 'AI画像', company: '会社' }, links: { ...en.links, blog: 'ブログ', about: '会社概要', privacy: 'プライバシー', terms: '利用規約' }, copyright: 'All rights reserved.' },
  de: { ...en, brand: { ...en.brand, intro: 'LimaxAI, professionelle KI-Generierungsplattform. Erstellen Sie beeindruckende Videos und Bilder mit modernsten Modellen.' }, links: { ...en.links, blog: 'Blog', about: 'Über uns', privacy: 'Datenschutz', terms: 'AGB' }, copyright: 'Alle Rechte vorbehalten.' },
  ko: { ...en, columns: { ...en.columns, aiTools: 'AI 도구', aiVideo: 'AI 비디오', aiImage: 'AI 이미지', company: '회사' }, links: { ...en.links, blog: '블로그', about: '소개', privacy: '개인정보처리방침', terms: '이용약관' }, copyright: 'All rights reserved.' },
  tr: { ...en, links: { ...en.links, blog: 'Blog', about: 'Hakkımızda', privacy: 'Gizlilik', terms: 'Koşullar' }, copyright: 'Tüm hakları saklıdır.' },
  vi: { ...en, links: { ...en.links, blog: 'Blog', about: 'Giới thiệu', privacy: 'Quyền riêng tư', terms: 'Điều khoản' }, copyright: 'Đã bảo lưu mọi quyền.' },
  th: { ...en, links: { ...en.links, blog: 'บล็อก', about: 'เกี่ยวกับเรา', privacy: 'ความเป็นส่วนตัว', terms: 'ข้อกำหนด' }, copyright: 'สงวนลิขสิทธิ์.' },
  it: { ...en, brand: { ...en.brand, intro: 'LimaxAI, piattaforma professionale di generazione AI. Crea video e immagini con modelli all\'avanguardia.' }, links: { ...en.links, blog: 'Blog', about: 'Chi siamo', privacy: 'Privacy', terms: 'Termini' }, copyright: 'Tutti i diritti riservati.' },
  fa: { ...en, links: { ...en.links, blog: 'وبلاگ', about: 'درباره ما', privacy: 'حریم خصوصی', terms: 'شرایط' }, copyright: 'تمامی حقوق محفوظ است.' },
  nl: { ...en, links: { ...en.links, blog: 'Blog', about: 'Over ons', privacy: 'Privacy', terms: 'Voorwaarden' }, copyright: 'Alle rechten voorbehouden.' },
  pl: { ...en, links: { ...en.links, blog: 'Blog', about: 'O nas', privacy: 'Prywatność', terms: 'Regulamin' }, copyright: 'Wszelkie prawa zastrzeżone.' },
  sv: { ...en, links: { ...en.links, blog: 'Blogg', about: 'Om oss', privacy: 'Integritet', terms: 'Villkor' }, copyright: 'Alla rättigheter förbehållna.' },
  uk: { ...en, links: { ...en.links, blog: 'Блог', about: 'Про нас', privacy: 'Конфіденційність', terms: 'Умови' }, copyright: 'Усі права захищені.' },
  ro: { ...en, links: { ...en.links, blog: 'Blog', about: 'Despre noi', privacy: 'Confidențialitate', terms: 'Termeni' }, copyright: 'Toate drepturile rezervate.' },
};

/** 根据语种获取页脚文案，缺省回退到 en */
export function getFooterCopy(locale: Locale): FooterCopy {
  return footerByLocale[locale] ?? en;
}
