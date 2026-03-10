/**
 * About / Privacy / Terms 页面的多语种标题与正文
 */

const LOCALES = [
  'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru',
  'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl',
  'sv', 'uk', 'ro',
] as const;

export type PageLocale = typeof LOCALES[number];

export interface PageContent {
  title: string;
  body: string;
}

const aboutEn: PageContent = {
  title: 'About',
  body: 'LimaxAI is a professional AI generation platform. We bring together cutting-edge models for video and image creation in one place, so you can create stunning content without managing multiple subscriptions or switching between tools.',
};

const aboutZhCN: PageContent = {
  title: '关于我们',
  body: 'LimaxAI 是专业 AI 生成平台。我们将前沿的视频与图像生成模型汇聚于一体，让您无需管理多个订阅或切换工具即可创作精彩内容。',
};

const aboutZhTW: PageContent = {
  title: '關於我們',
  body: 'LimaxAI 是專業 AI 生成平台。我們將前沿的視頻與圖像生成模型匯聚於一體，讓您無需管理多個訂閱或切換工具即可創作精彩內容。',
};

const privacyEn: PageContent = {
  title: 'Privacy Policy',
  body: 'We respect your privacy. This page describes how we collect, use, and protect your personal information when you use LimaxAI services. We do not sell your data to third parties. For questions, please contact us.',
};

const privacyZhCN: PageContent = {
  title: '隐私政策',
  body: '我们尊重您的隐私。本页说明在使用 LimaxAI 服务时我们如何收集、使用和保护您的个人信息。我们不会向第三方出售您的数据。如有疑问请联系我们。',
};

const privacyZhTW: PageContent = {
  title: '隱私政策',
  body: '我們尊重您的隱私。本頁說明在使用 LimaxAI 服務時我們如何收集、使用與保護您的個人資訊。我們不會向第三方出售您的資料。如有疑問請聯繫我們。',
};

const termsEn: PageContent = {
  title: 'Terms of Service',
  body: 'By using LimaxAI you agree to these terms. You must use the service lawfully and not misuse generated content. We may update these terms from time to time; continued use constitutes acceptance.',
};

const termsZhCN: PageContent = {
  title: '服务条款',
  body: '使用 LimaxAI 即表示您同意本条款。您必须合法使用服务，不得滥用生成内容。我们可能会不时更新本条款，继续使用即视为接受。',
};

const termsZhTW: PageContent = {
  title: '服務條款',
  body: '使用 LimaxAI 即表示您同意本條款。您必須合法使用服務，不得濫用生成內容。我們可能會不時更新本條款，繼續使用即視為接受。',
};

const aboutByLocale: Record<string, PageContent> = {
  en: aboutEn,
  'zh-cn': aboutZhCN,
  'zh-tw': aboutZhTW,
  es: { title: 'Sobre nosotros', body: 'LimaxAI es una plataforma profesional de generación con IA. Reunimos modelos de vanguardia para vídeo e imagen en un solo lugar.' },
  fr: { title: 'À propos', body: 'LimaxAI est une plateforme professionnelle de génération IA. Nous réunissons des modèles de pointe pour la création de vidéos et d\'images.' },
  de: { title: 'Über uns', body: 'LimaxAI ist eine professionelle KI-Generierungsplattform. Wir bündeln modernste Modelle für Video- und Bildcreation.' },
  ja: { title: '会社概要', body: 'LimaxAIはプロのAI生成プラットフォームです。動画・画像生成の最先端モデルを一箇所でご利用いただけます。' },
  ko: { title: '소개', body: 'LimaxAI는 전문 AI 생성 플랫폼입니다. 동영상과 이미지 제작을 위한 최신 모델을 한곳에서 제공합니다.' },
};

const privacyByLocale: Record<string, PageContent> = {
  en: privacyEn,
  'zh-cn': privacyZhCN,
  'zh-tw': privacyZhTW,
  es: { title: 'Política de privacidad', body: 'Respetamos su privacidad. Esta página describe cómo recopilamos, usamos y protegemos su información al usar LimaxAI.' },
  fr: { title: 'Politique de confidentialité', body: 'Nous respectons votre vie privée. Cette page décrit comment nous collectons, utilisons et protégeons vos données.' },
  de: { title: 'Datenschutz', body: 'Wir respektieren Ihre Privatsphäre. Diese Seite beschreibt, wie wir Ihre Daten erfassen, nutzen und schützen.' },
  ja: { title: 'プライバシー', body: '当社はお客様のプライバシーを尊重します。本ページではLimaxAI利用時の個人情報の取り扱いを説明します。' },
  ko: { title: '개인정보처리방침', body: '당사는 귀하의 개인정보를 존중합니다. LimaxAI 이용 시 수집·이용·보호 방침을 안내합니다.' },
};

const termsByLocale: Record<string, PageContent> = {
  en: termsEn,
  'zh-cn': termsZhCN,
  'zh-tw': termsZhTW,
  es: { title: 'Términos de servicio', body: 'Al usar LimaxAI acepta estos términos. Debe usar el servicio de forma legal y no hacer mal uso del contenido generado.' },
  fr: { title: 'Conditions d\'utilisation', body: 'En utilisant LimaxAI vous acceptez ces conditions. Vous devez utiliser le service de manière légale.' },
  de: { title: 'Nutzungsbedingungen', body: 'Mit der Nutzung von LimaxAI akzeptieren Sie diese Bedingungen. Sie müssen den Dienst rechtmäßig nutzen.' },
  ja: { title: '利用規約', body: 'LimaxAIのご利用により本規約に同意したものとみなします。法令に従いご利用ください。' },
  ko: { title: '이용약관', body: 'LimaxAI 이용 시 본 약관에 동의하는 것입니다. 서비스를 법적으로 이용해 주세요.' },
};

function getContent(map: Record<string, PageContent>, locale: string): PageContent {
  return map[locale] ?? map['en'] ?? { title: 'Page', body: '' };
}

export function getAboutContent(locale: string): PageContent {
  return getContent(aboutByLocale, locale);
}

export function getPrivacyContent(locale: string): PageContent {
  return getContent(privacyByLocale, locale);
}

export function getTermsContent(locale: string): PageContent {
  return getContent(termsByLocale, locale);
}

export function getAllLocales(): readonly string[] {
  return LOCALES;
}
