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
  es: {
    title: 'Sobre nosotros',
    sections: [
      { paragraphs: ['Somos el equipo detrás de LimaxAI. Creamos una plataforma para unificar herramientas de IA en un solo flujo de trabajo y reducir costes de suscripción.'] },
      { heading: 'Nuestra misión', paragraphs: ['Con una sola membresía, puedes usar modelos líderes para texto, imagen, audio y video. Queremos que creadores y equipos se enfoquen en resultados, no en cambiar entre plataformas.'] },
    ],
  },
  ar: {
    title: 'من نحن',
    sections: [
      { paragraphs: ['نحن فريق LimaxAI. بنينا منصة تجمع أدوات الذكاء الاصطناعي في مسار عمل واحد وتقلل تكاليف الاشتراكات المتعددة.'] },
      { heading: 'رسالتنا', paragraphs: ['باشتراك واحد يمكنك استخدام نماذج رائدة للنصوص والصور والصوت والفيديو. هدفنا أن يركز المبدعون على الإنتاج بدلاً من التنقل بين أدوات متفرقة.'] },
    ],
  },
  pt: {
    title: 'Sobre',
    sections: [
      { paragraphs: ['Somos a equipe por trás da LimaxAI. Construímos uma plataforma para unificar ferramentas de IA em um fluxo único e reduzir custos.'] },
      { heading: 'Nossa missão', paragraphs: ['Com uma única assinatura, você acessa modelos líderes para texto, imagem, áudio e vídeo. Queremos que criadores foquem em resultado, não em trocar de plataforma.'] },
    ],
  },
  id: {
    title: 'Tentang',
    sections: [
      { paragraphs: ['Kami adalah tim di balik LimaxAI. Kami membangun platform yang menyatukan alat AI dalam satu alur kerja agar lebih efisien dan hemat biaya.'] },
      { heading: 'Misi kami', paragraphs: ['Dengan satu langganan, Anda dapat memakai model AI terbaik untuk teks, gambar, audio, dan video tanpa pindah-pindah layanan.'] },
    ],
  },
  ms: {
    title: 'Perihal',
    sections: [
      { paragraphs: ['Kami ialah pasukan di sebalik LimaxAI. Kami menyatukan pelbagai alat AI dalam satu aliran kerja bagi memudahkan penciptaan.'] },
      { heading: 'Misi kami', paragraphs: ['Dengan satu langganan, anda boleh guna model AI utama untuk teks, imej, audio dan video tanpa bertukar platform.'] },
    ],
  },
  fr: {
    title: 'À propos',
    sections: [
      { paragraphs: ['Nous sommes l’équipe de LimaxAI. Nous avons créé une plateforme qui unifie les outils IA dans un flux unique et réduit la complexité opérationnelle.'] },
      { heading: 'Notre mission', paragraphs: ['Avec un seul abonnement, vous accédez aux meilleurs modèles pour texte, image, audio et vidéo, sans fragmentation des outils.'] },
    ],
  },
  ru: {
    title: 'О нас',
    sections: [
      { paragraphs: ['Мы команда LimaxAI. Наша платформа объединяет разрозненные AI-инструменты в единый рабочий контур и снижает стоимость использования.'] },
      { heading: 'Наша цель', paragraphs: ['Одна подписка открывает доступ к ведущим моделям для текста, изображений, аудио и видео, чтобы вы фокусировались на результате.'] },
    ],
  },
  hi: {
    title: 'हमारे बारे में',
    sections: [
      { paragraphs: ['हम LimaxAI की टीम हैं। हमने अलग-अलग AI टूल्स को एक वर्कफ़्लो में जोड़ने के लिए यह प्लेटफ़ॉर्म बनाया है।'] },
      { heading: 'हमारा लक्ष्य', paragraphs: ['एक सदस्यता से आप टेक्स्ट, इमेज, ऑडियो और वीडियो के लिए प्रमुख मॉडल इस्तेमाल कर सकते हैं और काम को तेज़ बना सकते हैं।'] },
    ],
  },
  ja: {
    title: '会社概要',
    sections: [
      { paragraphs: ['私たちは LimaxAI の開発チームです。分散した AI ツールを1つのワークフローに統合し、制作効率を高めるためにこのプラットフォームを作りました。'] },
      { heading: 'ミッション', paragraphs: ['1つのサブスクリプションで、テキスト・画像・音声・動画の主要モデルを利用でき、創作に集中できます。'] },
    ],
  },
  de: {
    title: 'Über uns',
    sections: [
      { paragraphs: ['Wir sind das Team hinter LimaxAI. Unsere Plattform bündelt verschiedene KI-Tools in einem Workflow und reduziert Aufwand sowie Kosten.'] },
      { heading: 'Unsere Mission', paragraphs: ['Mit einem Abo erhalten Sie Zugang zu führenden Modellen für Text, Bild, Audio und Video – ohne Tool-Wechsel.'] },
    ],
  },
  ko: {
    title: '소개',
    sections: [
      { paragraphs: ['우리는 LimaxAI 팀입니다. 분산된 AI 도구를 하나의 워크플로로 통합해 창작 효율을 높이기 위해 플랫폼을 만들었습니다.'] },
      { heading: '우리의 미션', paragraphs: ['하나의 구독으로 텍스트, 이미지, 오디오, 비디오의 주요 모델을 사용해 더 빠르게 결과를 만들 수 있습니다.'] },
    ],
  },
  tr: {
    title: 'Hakkımızda',
    sections: [
      { paragraphs: ['Biz LimaxAI ekibiyiz. Farklı yapay zeka araçlarını tek bir üretim akışında birleştiren bir platform geliştirdik.'] },
      { heading: 'Misyonumuz', paragraphs: ['Tek abonelikle metin, görsel, ses ve video için önde gelen modellere erişmenizi sağlayarak üretimi hızlandırıyoruz.'] },
    ],
  },
  vi: {
    title: 'Giới thiệu',
    sections: [
      { paragraphs: ['Chúng tôi là đội ngũ LimaxAI. Nền tảng được xây dựng để hợp nhất nhiều công cụ AI vào một quy trình làm việc duy nhất.'] },
      { heading: 'Sứ mệnh', paragraphs: ['Một gói đăng ký giúp bạn dùng các mô hình hàng đầu cho văn bản, hình ảnh, âm thanh và video mà không cần đổi nền tảng.'] },
    ],
  },
  th: {
    title: 'เกี่ยวกับเรา',
    sections: [
      { paragraphs: ['เราเป็นทีม LimaxAI โดยสร้างแพลตฟอร์มที่รวมเครื่องมือ AI หลายตัวไว้ในเวิร์กโฟลว์เดียว เพื่อให้ทำงานได้เร็วและคุ้มค่าขึ้น'] },
      { heading: 'พันธกิจของเรา', paragraphs: ['สมัครสมาชิกครั้งเดียวเพื่อใช้งานโมเดลชั้นนำด้านข้อความ ภาพ เสียง และวิดีโอ โดยไม่ต้องสลับหลายแพลตฟอร์ม'] },
    ],
  },
  it: {
    title: 'Chi siamo',
    sections: [
      { paragraphs: ['Siamo il team di LimaxAI. Abbiamo creato una piattaforma che unifica strumenti AI diversi in un unico flusso operativo.'] },
      { heading: 'Missione', paragraphs: ['Con un solo abbonamento accedi ai migliori modelli per testo, immagini, audio e video, riducendo tempi e costi di produzione.'] },
    ],
  },
  fa: {
    title: 'درباره ما',
    sections: [
      { paragraphs: ['ما تیم LimaxAI هستیم. این پلتفرم را ساختیم تا ابزارهای پراکنده هوش مصنوعی را در یک جریان کاری یکپارچه کنیم.'] },
      { heading: 'ماموریت ما', paragraphs: ['با یک اشتراک، به مدل‌های برتر متن، تصویر، صوت و ویدیو دسترسی دارید و بدون جابه‌جایی بین سرویس‌ها تولید می‌کنید.'] },
    ],
  },
  nl: {
    title: 'Over ons',
    sections: [
      { paragraphs: ['Wij zijn het team achter LimaxAI. Ons platform brengt meerdere AI-tools samen in één workflow voor hogere productiviteit.'] },
      { heading: 'Onze missie', paragraphs: ['Met één abonnement gebruikt u toonaangevende modellen voor tekst, beeld, audio en video zonder versnipperde tools.'] },
    ],
  },
  pl: {
    title: 'O nas',
    sections: [
      { paragraphs: ['Jesteśmy zespołem LimaxAI. Stworzyliśmy platformę, która łączy wiele narzędzi AI w jeden spójny workflow.'] },
      { heading: 'Nasza misja', paragraphs: ['Jedna subskrypcja daje dostęp do modeli dla tekstu, obrazu, audio i wideo, aby przyspieszyć pracę twórczą.'] },
    ],
  },
  sv: {
    title: 'Om oss',
    sections: [
      { paragraphs: ['Vi är teamet bakom LimaxAI. Vi byggde en plattform som samlar flera AI-verktyg i ett enhetligt arbetsflöde.'] },
      { heading: 'Vårt uppdrag', paragraphs: ['Med en prenumeration får du tillgång till ledande modeller för text, bild, ljud och video utan onödiga verktygsbyten.'] },
    ],
  },
  uk: {
    title: 'Про нас',
    sections: [
      { paragraphs: ['Ми команда LimaxAI. Наша платформа об’єднує різні AI-інструменти в один зрозумілий робочий процес.'] },
      { heading: 'Наша місія', paragraphs: ['Одна підписка відкриває доступ до провідних моделей для тексту, зображень, аудіо та відео, щоб прискорити створення контенту.'] },
    ],
  },
  ro: {
    title: 'Despre noi',
    sections: [
      { paragraphs: ['Suntem echipa LimaxAI. Platforma noastră unifică instrumente AI diferite într-un singur flux de lucru eficient.'] },
      { heading: 'Misiunea noastră', paragraphs: ['Cu un singur abonament folosești modele de top pentru text, imagine, audio și video, fără fragmentarea procesului de creație.'] },
    ],
  },
};

const privacyByLocale: Record<string, PageContent> = {
  en: privacyEn,
  'zh-cn': privacyZhCN,
  'zh-tw': privacyZhTW,
  es: { title: 'Política de privacidad', body: 'Respetamos su privacidad. Esta página describe cómo recopilamos, usamos y protegemos su información al usar LimaxAI.' },
  ar: { title: 'سياسة الخصوصية', body: 'نحترم خصوصيتك. توضح هذه الصفحة كيفية جمع بياناتك واستخدامها وحمايتها عند استخدام خدمات LimaxAI.' },
  pt: { title: 'Política de Privacidade', body: 'Respeitamos sua privacidade. Esta página descreve como coletamos, usamos e protegemos seus dados ao usar o LimaxAI.' },
  id: { title: 'Kebijakan Privasi', body: 'Kami menghormati privasi Anda. Halaman ini menjelaskan cara kami mengumpulkan, menggunakan, dan melindungi data saat Anda memakai LimaxAI.' },
  ms: { title: 'Dasar Privasi', body: 'Kami menghormati privasi anda. Halaman ini menerangkan cara kami mengumpul, menggunakan dan melindungi data semasa menggunakan LimaxAI.' },
  fr: { title: 'Politique de confidentialité', body: 'Nous respectons votre vie privée. Cette page décrit comment nous collectons, utilisons et protégeons vos données.' },
  ru: { title: 'Политика конфиденциальности', body: 'Мы уважаем вашу конфиденциальность. На этой странице описано, как LimaxAI собирает, использует и защищает персональные данные.' },
  hi: { title: 'गोपनीयता नीति', body: 'हम आपकी गोपनीयता का सम्मान करते हैं। यह पेज बताता है कि LimaxAI उपयोग करते समय आपका डेटा कैसे एकत्र, उपयोग और सुरक्षित किया जाता है।' },
  de: { title: 'Datenschutz', body: 'Wir respektieren Ihre Privatsphäre. Diese Seite beschreibt, wie wir Ihre Daten erfassen, nutzen und schützen.' },
  ja: { title: 'プライバシー', body: '当社はお客様のプライバシーを尊重します。本ページではLimaxAI利用時の個人情報の取り扱いを説明します。' },
  ko: { title: '개인정보처리방침', body: '당사는 귀하의 개인정보를 존중합니다. LimaxAI 이용 시 수집·이용·보호 방침을 안내합니다.' },
  tr: { title: 'Gizlilik Politikası', body: 'Gizliliğinize saygı duyuyoruz. Bu sayfa, LimaxAI kullanırken verilerin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.' },
  vi: { title: 'Chính sách quyền riêng tư', body: 'Chúng tôi tôn trọng quyền riêng tư của bạn. Trang này mô tả cách LimaxAI thu thập, sử dụng và bảo vệ dữ liệu cá nhân.' },
  th: { title: 'นโยบายความเป็นส่วนตัว', body: 'เราเคารพความเป็นส่วนตัวของคุณ หน้านี้อธิบายวิธีที่ LimaxAI เก็บ ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ' },
  it: { title: 'Informativa sulla privacy', body: 'Rispettiamo la tua privacy. Questa pagina descrive come LimaxAI raccoglie, utilizza e protegge i tuoi dati personali.' },
  fa: { title: 'حریم خصوصی', body: 'ما به حریم خصوصی شما احترام می‌گذاریم. این صفحه توضیح می‌دهد LimaxAI چگونه داده‌های شما را جمع‌آوری، استفاده و محافظت می‌کند.' },
  nl: { title: 'Privacybeleid', body: 'Wij respecteren uw privacy. Op deze pagina leest u hoe LimaxAI persoonsgegevens verzamelt, gebruikt en beschermt.' },
  pl: { title: 'Polityka prywatności', body: 'Szanujemy Twoją prywatność. Ta strona opisuje, jak LimaxAI gromadzi, wykorzystuje i chroni dane osobowe.' },
  sv: { title: 'Integritetspolicy', body: 'Vi respekterar din integritet. Den här sidan förklarar hur LimaxAI samlar in, använder och skyddar personuppgifter.' },
  uk: { title: 'Політика конфіденційності', body: 'Ми поважаємо вашу конфіденційність. На цій сторінці описано, як LimaxAI збирає, використовує та захищає персональні дані.' },
  ro: { title: 'Politica de confidențialitate', body: 'Respectăm confidențialitatea ta. Această pagină explică modul în care LimaxAI colectează, utilizează și protejează datele personale.' },
};

const termsByLocale: Record<string, PageContent> = {
  en: termsEn,
  'zh-cn': termsZhCN,
  'zh-tw': termsZhTW,
  es: { title: 'Términos de servicio', body: 'Al usar LimaxAI acepta estos términos. Debe usar el servicio de forma legal y no hacer mal uso del contenido generado.' },
  ar: { title: 'شروط الخدمة', body: 'باستخدام LimaxAI فإنك توافق على هذه الشروط. يجب استخدام الخدمة بشكل قانوني وعدم إساءة استخدام المحتوى المُنشأ.' },
  pt: { title: 'Termos de Serviço', body: 'Ao usar o LimaxAI, você concorda com estes termos. Use o serviço de forma legal e sem uso indevido do conteúdo gerado.' },
  id: { title: 'Ketentuan Layanan', body: 'Dengan menggunakan LimaxAI, Anda menyetujui ketentuan ini. Gunakan layanan secara legal dan jangan menyalahgunakan konten yang dihasilkan.' },
  ms: { title: 'Terma Perkhidmatan', body: 'Dengan menggunakan LimaxAI, anda bersetuju dengan terma ini. Gunakan perkhidmatan secara sah dan jangan menyalahgunakan kandungan yang dijana.' },
  fr: { title: 'Conditions d\'utilisation', body: 'En utilisant LimaxAI vous acceptez ces conditions. Vous devez utiliser le service de manière légale.' },
  ru: { title: 'Условия использования', body: 'Используя LimaxAI, вы соглашаетесь с этими условиями. Сервис должен использоваться законно и без злоупотребления сгенерированным контентом.' },
  hi: { title: 'सेवा की शर्तें', body: 'LimaxAI का उपयोग करके आप इन शर्तों से सहमत होते हैं। सेवा का उपयोग कानूनी रूप से करें और जनरेटेड सामग्री का दुरुपयोग न करें।' },
  de: { title: 'Nutzungsbedingungen', body: 'Mit der Nutzung von LimaxAI akzeptieren Sie diese Bedingungen. Sie müssen den Dienst rechtmäßig nutzen.' },
  ja: { title: '利用規約', body: 'LimaxAIのご利用により本規約に同意したものとみなします。法令に従いご利用ください。' },
  ko: { title: '이용약관', body: 'LimaxAI 이용 시 본 약관에 동의하는 것입니다. 서비스를 법적으로 이용해 주세요.' },
  tr: { title: 'Hizmet Şartları', body: 'LimaxAI kullanarak bu şartları kabul etmiş olursunuz. Hizmeti yasal çerçevede kullanmalı ve üretilen içeriği kötüye kullanmamalısınız.' },
  vi: { title: 'Điều khoản dịch vụ', body: 'Khi sử dụng LimaxAI, bạn đồng ý với các điều khoản này. Bạn phải sử dụng dịch vụ hợp pháp và không lạm dụng nội dung được tạo ra.' },
  th: { title: 'ข้อกำหนดการให้บริการ', body: 'เมื่อใช้ LimaxAI ถือว่าคุณยอมรับข้อกำหนดนี้ คุณต้องใช้บริการอย่างถูกต้องตามกฎหมายและไม่ใช้เนื้อหาที่สร้างขึ้นในทางที่ผิด' },
  it: { title: 'Termini di servizio', body: 'Utilizzando LimaxAI accetti questi termini. Devi usare il servizio in modo legale e non abusare dei contenuti generati.' },
  fa: { title: 'شرایط استفاده از خدمات', body: 'با استفاده از LimaxAI با این شرایط موافقت می‌کنید. استفاده از سرویس باید قانونی باشد و محتوای تولیدشده نباید سوءاستفاده شود.' },
  nl: { title: 'Servicevoorwaarden', body: 'Door LimaxAI te gebruiken gaat u akkoord met deze voorwaarden. Gebruik de dienst op legale wijze en misbruik gegenereerde content niet.' },
  pl: { title: 'Regulamin świadczenia usług', body: 'Korzystając z LimaxAI akceptujesz te warunki. Usługę należy używać zgodnie z prawem i bez nadużywania wygenerowanych treści.' },
  sv: { title: 'Användarvillkor', body: 'Genom att använda LimaxAI godkänner du dessa villkor. Tjänsten ska användas lagligt och genererat innehåll får inte missbrukas.' },
  uk: { title: 'Умови користування', body: 'Використовуючи LimaxAI, ви погоджуєтеся з цими умовами. Сервіс потрібно використовувати законно та без зловживань згенерованим контентом.' },
  ro: { title: 'Termeni de utilizare', body: 'Prin utilizarea LimaxAI accepți acești termeni. Serviciul trebuie folosit legal, fără utilizarea abuzivă a conținutului generat.' },
};

const autoDebitAgreementByLocale: Record<string, AgreementContent> = {
  en: autoDebitAgreementEn,
  'zh-cn': autoDebitAgreementZhCN,
  'zh-tw': autoDebitAgreementZhTW,
  es: {
    title: 'Acuerdo de débito automático',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Este acuerdo regula la renovación automática de suscripciones en LimaxAI. Al activarla, autorizas el cobro recurrente por ciclo.',
    sections: [{ heading: 'Alcance y cancelación', paragraphs: ['Puedes cancelar la renovación automática en cualquier momento desde tu cuenta o proveedor de pago.', 'Para evitar el siguiente cobro, cancela al menos 24 horas antes del vencimiento.'] }],
  },
  ar: {
    title: 'اتفاقية الخصم التلقائي',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'تنظّم هذه الاتفاقية التجديد التلقائي لاشتراكات LimaxAI. عند التفعيل، أنت تفوّض الخصم الدوري لكل دورة.',
    sections: [{ heading: 'النطاق والإلغاء', paragraphs: ['يمكنك إلغاء التجديد التلقائي في أي وقت من إعدادات الحساب أو عبر مزوّد الدفع.', 'لتجنب الخصم للدورة القادمة، ألغِ قبل 24 ساعة على الأقل من موعد الانتهاء.'] }],
  },
  pt: {
    title: 'Acordo de débito automático',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Este acordo regula a renovação automática da assinatura no LimaxAI. Ao ativar, você autoriza cobranças recorrentes por ciclo.',
    sections: [{ heading: 'Escopo e cancelamento', paragraphs: ['Você pode cancelar a renovação automática a qualquer momento nas configurações da conta ou no provedor de pagamento.', 'Para evitar a próxima cobrança, cancele com pelo menos 24 horas de antecedência.'] }],
  },
  id: {
    title: 'Perjanjian auto-debit',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Perjanjian ini mengatur perpanjangan otomatis langganan LimaxAI. Dengan mengaktifkan, Anda memberi otorisasi penagihan berulang tiap periode.',
    sections: [{ heading: 'Cakupan dan pembatalan', paragraphs: ['Anda dapat menonaktifkan perpanjangan otomatis kapan saja dari pengaturan akun atau penyedia pembayaran.', 'Untuk menghindari tagihan berikutnya, batalkan minimal 24 jam sebelum jatuh tempo.'] }],
  },
  ms: {
    title: 'Perjanjian auto-debit',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Perjanjian ini mengawal pembaharuan automatik langganan LimaxAI. Dengan pengaktifan, anda membenarkan caj berulang setiap kitaran.',
    sections: [{ heading: 'Skop dan pembatalan', paragraphs: ['Anda boleh menutup pembaharuan automatik pada bila-bila masa melalui tetapan akaun atau penyedia pembayaran.', 'Untuk mengelak caj seterusnya, batalkan sekurang-kurangnya 24 jam sebelum tamat tempoh.'] }],
  },
  fr: {
    title: 'Accord de prélèvement automatique',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Cet accord encadre le renouvellement automatique des abonnements LimaxAI. En l’activant, vous autorisez un prélèvement récurrent à chaque cycle.',
    sections: [{ heading: 'Portée et annulation', paragraphs: ['Vous pouvez désactiver le renouvellement automatique à tout moment depuis votre compte ou votre moyen de paiement.', 'Pour éviter le prochain prélèvement, annulez au moins 24 heures avant l’échéance.'] }],
  },
  ru: {
    title: 'Соглашение об автосписании',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Это соглашение регулирует автопродление подписки LimaxAI. Включая его, вы разрешаете регулярное списание оплаты по циклам.',
    sections: [{ heading: 'Область действия и отмена', paragraphs: ['Отключить автопродление можно в любой момент в настройках аккаунта или у платежного провайдера.', 'Чтобы избежать следующего списания, отмените автопродление минимум за 24 часа до окончания периода.'] }],
  },
  hi: {
    title: 'ऑटो-डेबिट समझौता',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'यह समझौता LimaxAI सदस्यता के ऑटो-रिन्यूअल को नियंत्रित करता है। इसे चालू करने पर आप प्रत्येक बिलिंग चक्र के लिए स्वतः भुगतान की अनुमति देते हैं।',
    sections: [{ heading: 'दायरा और रद्द करना', paragraphs: ['आप खाते की सेटिंग्स या पेमेंट प्रदाता से किसी भी समय ऑटो-रिन्यूअल बंद कर सकते हैं।', 'अगले शुल्क से बचने के लिए समाप्ति से कम से कम 24 घंटे पहले रद्द करें।'] }],
  },
  ja: {
    title: '自動引き落とし同意書',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: '本同意書は LimaxAI の自動更新課金に関する条件を定めます。自動更新を有効化すると、各請求周期で自動決済が行われます。',
    sections: [{ heading: '適用範囲と解約', paragraphs: ['自動更新はアカウント設定または決済プロバイダ側でいつでも停止できます。', '次回請求を回避するには、満了時刻の24時間前までに停止してください。'] }],
  },
  de: {
    title: 'Vereinbarung zum automatischen Einzug',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Diese Vereinbarung regelt die automatische Verlängerung von LimaxAI-Abos. Mit Aktivierung autorisieren Sie wiederkehrende Abbuchungen je Abrechnungszyklus.',
    sections: [{ heading: 'Geltungsbereich und Kündigung', paragraphs: ['Sie können die automatische Verlängerung jederzeit in den Kontoeinstellungen oder beim Zahlungsanbieter deaktivieren.', 'Um die nächste Abbuchung zu vermeiden, kündigen Sie mindestens 24 Stunden vor Ablauf.'] }],
  },
  ko: {
    title: '자동 결제 동의서',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: '본 동의서는 LimaxAI 구독의 자동 갱신 결제를 규정합니다. 자동 갱신을 켜면 각 결제 주기마다 자동 청구에 동의하게 됩니다.',
    sections: [{ heading: '적용 범위 및 해지', paragraphs: ['자동 갱신은 계정 설정 또는 결제 제공업체에서 언제든지 해지할 수 있습니다.', '다음 결제를 피하려면 만료 24시간 전까지 해지하세요.'] }],
  },
  tr: {
    title: 'Otomatik tahsilat sözleşmesi',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Bu sözleşme LimaxAI aboneliğinin otomatik yenilemesini düzenler. Etkinleştirildiğinde her dönem için tekrar eden tahsilatı onaylamış olursunuz.',
    sections: [{ heading: 'Kapsam ve iptal', paragraphs: ['Otomatik yenilemeyi hesap ayarlarından veya ödeme sağlayıcısından dilediğiniz zaman kapatabilirsiniz.', 'Bir sonraki tahsilatı önlemek için en az 24 saat önce iptal edin.'] }],
  },
  vi: {
    title: 'Thỏa thuận ghi nợ tự động',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Thỏa thuận này quy định gia hạn tự động cho gói LimaxAI. Khi bật, bạn ủy quyền trừ tiền định kỳ theo chu kỳ thanh toán.',
    sections: [{ heading: 'Phạm vi và hủy', paragraphs: ['Bạn có thể tắt gia hạn tự động bất cứ lúc nào trong cài đặt tài khoản hoặc tại nhà cung cấp thanh toán.', 'Để tránh lần trừ tiền tiếp theo, hãy hủy trước ít nhất 24 giờ.'] }],
  },
  th: {
    title: 'ข้อตกลงการหักเงินอัตโนมัติ',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'ข้อตกลงนี้กำหนดการต่ออายุอัตโนมัติของสมาชิก LimaxAI เมื่อเปิดใช้งานถือว่าคุณยินยอมให้เรียกเก็บเงินซ้ำตามรอบบิล',
    sections: [{ heading: 'ขอบเขตและการยกเลิก', paragraphs: ['คุณสามารถยกเลิกการต่ออายุอัตโนมัติได้ทุกเมื่อจากบัญชีหรือผู้ให้บริการชำระเงิน', 'เพื่อหลีกเลี่ยงการเรียกเก็บรอบถัดไป กรุณายกเลิกก่อนหมดอายุอย่างน้อย 24 ชั่วโมง'] }],
  },
  it: {
    title: 'Accordo di addebito automatico',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Questo accordo regola il rinnovo automatico degli abbonamenti LimaxAI. Attivandolo autorizzi addebiti ricorrenti per ciascun ciclo.',
    sections: [{ heading: 'Ambito e annullamento', paragraphs: ['Puoi disattivare il rinnovo automatico in qualsiasi momento dalle impostazioni account o dal provider di pagamento.', 'Per evitare il prossimo addebito, annulla almeno 24 ore prima della scadenza.'] }],
  },
  fa: {
    title: 'توافق‌نامه برداشت خودکار',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'این توافق‌نامه تمدید خودکار اشتراک LimaxAI را تنظیم می‌کند. با فعال‌سازی، برداشت دوره‌ای در هر چرخه پرداخت را مجاز می‌کنید.',
    sections: [{ heading: 'دامنه و لغو', paragraphs: ['می‌توانید تمدید خودکار را هر زمان از تنظیمات حساب یا ارائه‌دهنده پرداخت غیرفعال کنید.', 'برای جلوگیری از برداشت بعدی، حداقل ۲۴ ساعت قبل از انقضا لغو کنید.'] }],
  },
  nl: {
    title: 'Automatische incasso-overeenkomst',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Deze overeenkomst regelt automatische verlenging van LimaxAI-abonnementen. Bij activering geeft u toestemming voor periodieke afschrijving per facturatiecyclus.',
    sections: [{ heading: 'Toepassing en annulering', paragraphs: ['U kunt automatische verlenging op elk moment uitschakelen via accountinstellingen of uw betaalprovider.', 'Om de volgende afschrijving te voorkomen, annuleer ten minste 24 uur voor afloop.'] }],
  },
  pl: {
    title: 'Umowa automatycznego obciążenia',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Umowa reguluje automatyczne odnawianie subskrypcji LimaxAI. Włączenie funkcji oznacza zgodę na cykliczne obciążenia płatnicze.',
    sections: [{ heading: 'Zakres i anulowanie', paragraphs: ['Automatyczne odnawianie można wyłączyć w dowolnym momencie w ustawieniach konta lub u operatora płatności.', 'Aby uniknąć kolejnego obciążenia, anuluj co najmniej 24 godziny przed wygaśnięciem.'] }],
  },
  sv: {
    title: 'Avtal om automatisk debitering',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Detta avtal reglerar automatisk förnyelse av LimaxAI-prenumerationer. När funktionen aktiveras godkänner du återkommande debitering per period.',
    sections: [{ heading: 'Omfattning och uppsägning', paragraphs: ['Du kan när som helst stänga av automatisk förnyelse i kontoinställningar eller hos betalningsleverantören.', 'För att undvika nästa debitering, avbryt minst 24 timmar före periodens slut.'] }],
  },
  uk: {
    title: 'Угода про автосписання',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Ця угода регулює автоматичне продовження підписки LimaxAI. Після активації ви дозволяєте регулярне списання коштів за кожний платіжний цикл.',
    sections: [{ heading: 'Сфера дії та скасування', paragraphs: ['Автопродовження можна вимкнути в будь-який час у налаштуваннях акаунта або у платіжного провайдера.', 'Щоб уникнути наступного списання, скасуйте функцію щонайменше за 24 години до завершення періоду.'] }],
  },
  ro: {
    title: 'Acord de debitare automată',
    updatedAt: autoDebitAgreementZhCN.updatedAt,
    intro: 'Acest acord reglementează reînnoirea automată a abonamentului LimaxAI. Activarea înseamnă autorizarea debitărilor recurente pentru fiecare ciclu.',
    sections: [{ heading: 'Domeniu și anulare', paragraphs: ['Poți dezactiva reînnoirea automată oricând din setările contului sau prin furnizorul de plată.', 'Pentru a evita debitarea următoare, anulează cu cel puțin 24 de ore înainte de expirare.'] }],
  },
};

function getContent(map: Record<string, PageContent>, locale: string): PageContent {
  const content = map[locale];
  if (content) return content;
  if (map.en) {
    console.warn(`[pages] Missing localized content for locale: "${locale}", falling back to en.`);
    return map.en;
  }
  throw new Error(`[pages] Missing localized content for locale: ${locale}`);
}

function getAboutPageContent(locale: string): AboutPageContent {
  const content = aboutByLocale[locale];
  if (content) return content;
  console.warn(`[pages] Missing about content for locale: "${locale}", falling back to en.`);
  return aboutEn;
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
  const content = autoDebitAgreementByLocale[locale];
  if (content) return content;
  console.warn(`[pages] Missing auto debit agreement content for locale: "${locale}", falling back to en.`);
  return autoDebitAgreementEn;
}

export function getAllLocales(): readonly string[] {
  return LOCALES;
}
