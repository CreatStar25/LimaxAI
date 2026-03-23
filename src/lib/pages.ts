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

export interface AgreementSection {
  heading: string;
  paragraphs: string[];
}

export interface AgreementContent {
  title: string;
  updatedAt: string;
  intro: string;
  sections: AgreementSection[];
}

/** 关于我们页面：支持多段落与小节标题 */
export interface AboutSection {
  heading?: string;
  paragraphs: string[];
}

export interface AboutPageContent {
  title: string;
  sections: AboutSection[];
}

const aboutEn: AboutPageContent = {
  title: 'About',
  sections: [
    {
      paragraphs: [
        'We are the team behind LimaxAI — a group of young people who love technology and hate friction. In an era when AI tools are everywhere yet fragmented, we grew tired of subscribing to a dozen different services just to meet different creative needs: Midjourney for design, ChatGPT for copy, other platforms for video and music. The cost adds up, and it fragments the creative flow.',
        'So we built LimaxAI. Our goal is simple: let everyone "use all kinds of AI tools as they wish" with one subscription that unlocks every creative scenario.',
      ],
    },
    {
      heading: 'All-in-one AI creation platform',
      paragraphs: [
        'Limaxai.com is an all-in-one AI creation platform that brings together top global AI capabilities: from large language models (ChatGPT, Claude, Gemini) to image models (Midjourney), from video generation (Seedance, Veo) to music (Suno), covering text, image, audio, and video. No more switching between tools or paying for overlapping features — one subscription unlocks the latest, strongest AI models and keeps your workflow smooth and costs under control.',
      ],
    },
    {
      heading: 'Developer ecosystem',
      paragraphs: [
        'Beyond the all-in-one platform for individual creators, we also focus on the developer ecosystem. api.limaxai.com offers affordable, stable API services, opening the AI capabilities we integrate to all developers. Whether you’re building your own product or improving existing workflows, you can access leading AI technology at low cost and lower the barrier to development.',
      ],
    },
    {
      paragraphs: [
        'We believe the value of AI tools is "simplifying complexity and unleashing creativity." We will keep integrating more cutting-edge models and improving both the product experience and API services, so every creator and developer can focus on ideas and innovation, without being weighed down by tooling.',
      ],
    },
  ],
};

const aboutZhCN: AboutPageContent = {
  title: '关于我们',
  sections: [
    {
      paragraphs: [
        '我们是 LimaxAI 的开发者 —— 一群热爱技术、拒绝繁琐的年轻人。在这个 AI 工具遍地开花却各自为战的时代，我们厌倦了为满足不同创作需求，被迫订阅一堆零散工具的麻烦：想做设计要开 Midjourney 会员，写文案要充 ChatGPT 套餐，剪视频、做音乐又得切换多个平台，不仅成本高昂，还割裂了创作灵感。',
        '于是，LimaxAI 应运而生。我们的初心很简单：让每个人都能「随心所欲地使用各类 AI 工具」，用一个会员打通所有创作场景。',
      ],
    },
    {
      heading: '一站式 AI 创作平台',
      paragraphs: [
        'Limaxai.com 作为一站式 AI 创作平台，整合了全球最顶尖的 AI 能力：从大语言模型（ChatGPT、Claude、Gemini）到绘画模型（Midjourney），从视频生成（Seedance、Veo）到音乐创作（Suno），覆盖文字、图像、音频、视频全场景创作需求。不用在多个工具间来回切换，不用为重复功能付费，一个会员就能解锁最新、最强的 AI 模型，让创作流程更顺畅、成本更可控。',
      ],
    },
    {
      heading: '开发者生态',
      paragraphs: [
        '除了面向个人创作者的一站式平台，我们也关注开发者生态。api.limaxai.com 提供价格合理、稳定可靠的 API 接口服务，将我们整合的优质 AI 能力开放给所有开发者，无论是搭建自有产品，还是优化现有业务流程，都能以低成本接入顶尖 AI 技术，降低开发门槛。',
      ],
    },
    {
      paragraphs: [
        '我们始终相信，AI 工具的价值在于「简化复杂，释放创造力」。未来，我们会持续整合更多前沿 AI 模型，优化使用体验与 API 服务，让每一位创作者、开发者都能专注于灵感与创新，无需被工具的繁琐所困扰。',
      ],
    },
  ],
};

const aboutZhTW: AboutPageContent = {
  title: '關於我們',
  sections: [
    {
      paragraphs: [
        '我們是 LimaxAI 的開發者 —— 一群熱愛技術、拒絕繁瑣的年輕人。在這個 AI 工具遍地開花卻各自為戰的時代，我們厭倦了為滿足不同創作需求，被迫訂閱一堆零散工具的麻煩：想做設計要開 Midjourney 會員，寫文案要充 ChatGPT 套餐，剪視頻、做音樂又得切換多個平台，不僅成本高昂，還割裂了創作靈感。',
        '於是，LimaxAI 應運而生。我們的初心很簡單：讓每個人都能「隨心所欲地使用各類 AI 工具」，用一個會員打通所有創作場景。',
      ],
    },
    {
      heading: '一站式 AI 創作平台',
      paragraphs: [
        'Limaxai.com 作為一站式 AI 創作平台，整合了全球最頂尖的 AI 能力：從大語言模型（ChatGPT、Claude、Gemini）到繪畫模型（Midjourney），從視頻生成（Seedance、Veo）到音樂創作（Suno），覆蓋文字、圖像、音頻、視頻全場景創作需求。不用在多個工具間來回切換，不用為重複功能付費，一個會員就能解鎖最新、最強的 AI 模型，讓創作流程更順暢、成本更可控。',
      ],
    },
    {
      heading: '開發者生態',
      paragraphs: [
        '除了面向個人創作者的一站式平台，我們也關注開發者生態。api.limaxai.com 提供價格合理、穩定可靠的 API 接口服務，將我們整合的優質 AI 能力開放給所有開發者，無論是搭建自有產品，還是優化現有業務流程，都能以低成本接入頂尖 AI 技術，降低開發門檻。',
      ],
    },
    {
      paragraphs: [
        '我們始終相信，AI 工具的價值在於「簡化複雜，釋放創造力」。未來，我們會持續整合更多前沿 AI 模型，優化使用體驗與 API 服務，讓每一位創作者、開發者都能專注於靈感與創新，無需被工具的繁瑣所困擾。',
      ],
    },
  ],
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

const autoDebitAgreementZhCN: AgreementContent = {
  title: '用户开通代扣协议',
  updatedAt: '2026-03-10',
  intro: '欢迎您使用 LimaxAI 提供的周期订阅服务。为便于您持续使用服务，您可选择开通自动代扣（自动续费）能力。请在开通前仔细阅读本协议。您点击“同意并开通”或以其他方式确认，即视为您已充分理解并同意本协议全部内容。',
  sections: [
    {
      heading: '一、协议适用范围',
      paragraphs: [
        '1. 本协议适用于您在 LimaxAI 平台购买周期订阅服务并授权第三方支付渠道进行自动代扣的场景。',
        '2. 本协议是《服务条款》《隐私政策》的组成部分；未约定事项，按前述协议及平台公示规则执行。',
      ],
    },
    {
      heading: '二、自动代扣与自动续费说明',
      paragraphs: [
        '1. 自动代扣是指在您当前订阅周期届满前后，系统按照您已授权的支付方式自动扣取下一周期费用，以延续会员权益。',
        '2. 开通后，如您未在当前周期到期前主动关闭自动续费，系统将视为您同意在每个续费周期按当时有效价格自动扣款。',
        '3. 扣款成功后，订阅周期将顺延；如扣款失败，您可能无法继续享受对应会员权益。',
      ],
    },
    {
      heading: '三、费用与价格规则',
      paragraphs: [
        '1. 续费价格以续费当时页面展示、订单确认页或相关活动规则为准；促销到期后可能恢复原价。',
        '2. 如因税费、汇率、渠道费率或产品策略调整导致价格变更，平台将通过站内页面、订单页或其他合理方式提示。',
        '3. 您理解并同意：不同支付渠道、地区或币种可能导致实际扣款金额存在合理差异（含汇率换算及手续费）。',
      ],
    },
    {
      heading: '四、扣款时间与失败处理',
      paragraphs: [
        '1. 系统通常会在当前周期到期日前后发起扣款（具体时间以支付渠道处理时间为准）。',
        '2. 若首次扣款失败，平台可能在合理期限内进行补扣或再次尝试扣款。',
        '3. 因账户余额不足、银行卡/支付账户状态异常、风控拦截、网络故障等导致扣款失败的，相关责任由您与支付渠道按规则处理。',
      ],
    },
    {
      heading: '五、取消自动续费',
      paragraphs: [
        '1. 您可随时在 LimaxAI 账户设置或对应支付渠道管理页关闭自动续费。',
        '2. 为避免临近周期边界产生扣款，建议您至少在当前订阅周期到期前 24 小时完成取消操作。',
        '3. 取消生效后，不影响您在当前已支付周期内继续使用服务；到期后将不再自动扣款。',
      ],
    },
    {
      heading: '六、退款与例外',
      paragraphs: [
        '1. 除法律法规另有规定或平台另行承诺外，已扣取的订阅费用原则上不支持按已使用周期进行部分退款。',
        '2. 如因系统错误导致重复扣款或明显计费异常，经核实后平台将按规则退款或提供等值补偿。',
        '3. 通过第三方应用商店（如适用）支付的订单，退款路径和规则以该渠道政策为准。',
      ],
    },
    {
      heading: '七、用户授权与义务',
      paragraphs: [
        '1. 您确认提交的支付账户信息真实、有效，并有权进行本协议项下授权。',
        '2. 您应妥善保管账户、设备及支付验证信息；因您保管不善导致的损失由您自行承担。',
        '3. 如支付账户、手机号、邮箱等信息变更，您应及时更新，以免影响扣款通知和服务连续性。',
      ],
    },
    {
      heading: '八、平台权利与责任限制',
      paragraphs: [
        '1. 平台有权在法律允许范围内基于业务变化调整订阅档位、权益内容、价格或续费规则，并提前以合理方式通知。',
        '2. 因不可抗力、支付渠道异常、网络故障、系统维护等非平台可控原因导致的扣款延迟或失败，平台不承担超出法律规定范围的责任。',
      ],
    },
    {
      heading: '九、协议变更与终止',
      paragraphs: [
        '1. 平台可根据法律法规、监管要求或业务变化对本协议进行更新，更新内容将通过页面公示等方式发布。',
        '2. 若您不同意更新内容，可停止使用并关闭自动续费；继续使用或未关闭自动续费视为接受更新后的协议。',
      ],
    },
    {
      heading: '十、法律适用与争议解决',
      paragraphs: [
        '1. 本协议的订立、生效、解释、履行及争议解决，适用中华人民共和国法律（不含冲突规范）。',
        '2. 因本协议产生的争议，双方应先友好协商；协商不成的，任一方可向平台运营主体所在地有管辖权的人民法院提起诉讼。',
      ],
    },
    {
      heading: '十一、联系方式',
      paragraphs: [
        '如您对本协议或自动续费有疑问，可通过 LimaxAI 官方客服渠道与我们联系。',
      ],
    },
  ],
};

const autoDebitAgreementZhTW: AgreementContent = {
  title: '用戶開通代扣協議',
  updatedAt: autoDebitAgreementZhCN.updatedAt,
  intro: autoDebitAgreementZhCN.intro,
  sections: autoDebitAgreementZhCN.sections,
};

const autoDebitAgreementEn: AgreementContent = {
  title: 'Auto-Debit Agreement',
  updatedAt: autoDebitAgreementZhCN.updatedAt,
  intro: 'This agreement governs your authorization for recurring subscription auto-debit on LimaxAI. By enabling auto-renewal, you agree that we may automatically charge your selected payment method at each billing cycle unless you cancel before renewal.',
  sections: [
    {
      heading: 'Scope',
      paragraphs: [
        'This agreement applies to recurring subscription purchases and auto-renewal authorization on LimaxAI.',
        'It supplements the Terms of Service and Privacy Policy.',
      ],
    },
    {
      heading: 'Renewal and Charges',
      paragraphs: [
        'If auto-renewal is enabled and not canceled before the current term ends, the next billing cycle will be charged automatically at the then-effective price.',
        'Charge timing and processing depend on the payment channel.',
      ],
    },
    {
      heading: 'Cancellation',
      paragraphs: [
        'You can cancel auto-renewal anytime in account settings or through your payment provider.',
        'To avoid renewal on the next cycle, please cancel at least 24 hours before expiration.',
      ],
    },
    {
      heading: 'Refunds and Liability',
      paragraphs: [
        'Refunds follow applicable laws and platform/channel policies.',
        'For duplicate or abnormal charges caused by system errors, we will verify and process correction or refund.',
      ],
    },
  ],
};

const aboutByLocale: Record<string, AboutPageContent> = {
  en: aboutEn,
  'zh-cn': aboutZhCN,
  'zh-tw': aboutZhTW,
  es: aboutEn,
  ar: aboutEn,
  pt: aboutEn,
  id: aboutEn,
  ms: aboutEn,
  fr: aboutEn,
  ru: aboutEn,
  hi: aboutEn,
  ja: aboutEn,
  de: aboutEn,
  ko: aboutEn,
  tr: aboutEn,
  vi: aboutEn,
  th: aboutEn,
  it: aboutEn,
  fa: aboutEn,
  nl: aboutEn,
  pl: aboutEn,
  sv: aboutEn,
  uk: aboutEn,
  ro: aboutEn,
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

const autoDebitAgreementByLocale: Record<string, AgreementContent> = {
  en: autoDebitAgreementEn,
  'zh-cn': autoDebitAgreementZhCN,
  'zh-tw': autoDebitAgreementZhTW,
  es: autoDebitAgreementEn,
  ar: autoDebitAgreementEn,
  pt: autoDebitAgreementEn,
  id: autoDebitAgreementEn,
  ms: autoDebitAgreementEn,
  fr: autoDebitAgreementEn,
  ru: autoDebitAgreementEn,
  hi: autoDebitAgreementEn,
  ja: autoDebitAgreementEn,
  de: autoDebitAgreementEn,
  ko: autoDebitAgreementEn,
  tr: autoDebitAgreementEn,
  vi: autoDebitAgreementEn,
  th: autoDebitAgreementEn,
  it: autoDebitAgreementEn,
  fa: autoDebitAgreementEn,
  nl: autoDebitAgreementEn,
  pl: autoDebitAgreementEn,
  sv: autoDebitAgreementEn,
  uk: autoDebitAgreementEn,
  ro: autoDebitAgreementEn,
};

function getContent(map: Record<string, PageContent>, locale: string): PageContent {
  return map[locale] ?? map['en'] ?? { title: 'Page', body: '' };
}

function getAboutPageContent(locale: string): AboutPageContent {
  return aboutByLocale[locale] ?? aboutEn;
}

export function getAboutContent(locale: string): AboutPageContent {
  return getAboutPageContent(locale);
}

export function getPrivacyContent(locale: string): PageContent {
  return getContent(privacyByLocale, locale);
}

export function getTermsContent(locale: string): PageContent {
  return getContent(termsByLocale, locale);
}

export function getAutoDebitAgreementContent(locale: string): AgreementContent {
  return autoDebitAgreementByLocale[locale] ?? autoDebitAgreementEn;
}

export function getAllLocales(): readonly string[] {
  return LOCALES;
}
