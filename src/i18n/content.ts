/**
 * src/i18n/content.ts
 * 仅首页专属业务内容（Hero、功能介绍、评论区、定价、FAQ、CTA 等）。
 * 不包含全站通用 UI 文本，通用文本见 ui.ts。
 * 语种：与 ui.ts 一致，共 24 种。
 */

import type { Locale } from './ui';

export type { Locale };

export interface ContentCopy {
  blog: {
    title: string;
    subtitle: string;
    noPosts: string;
    checkBackLater: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: {
    sectionTitle: string;
    items: Array<{ name: string; description: string }>;
  };
  testimonials: {
    sectionTitle: string;
    items: Array<{ quote: string; author: string; role: string }>;
  };
  pricing: {
    sectionTitle: string;
    plans: Array<{
      name: string;
      description: string;
      price: string;
      features: string[];
    }>;
  };
  faq: {
    sectionTitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const blogEn = {
  title: 'Blog',
  subtitle: 'Discover AI art tutorials, best prompts, and creative inspiration.',
  noPosts: 'No posts found',
  checkBackLater: 'Check back later for updates in this language.',
};

const heroEn = {
  title: 'Professional AI Generation Platform',
  subtitle: 'Create stunning videos and images with cutting-edge models.',
  description: 'One platform for Midjourney, Sora, Keling, Nano Banana and more. Start creating in minutes.',
};

const featuresEn = {
  sectionTitle: 'Features',
  items: [
    { name: 'AI Image', description: 'Generate high-quality images with leading models.' },
    { name: 'AI Video', description: 'Create stunning video content with state-of-the-art tools.' },
  ],
};

const testimonialsEn = {
  sectionTitle: 'What users say',
  items: [
    { quote: 'LimaxAI brings all my favorite AI tools in one place.', author: 'Creator', role: 'Designer' },
  ],
};

const pricingEn = {
  sectionTitle: 'Pricing',
  plans: [
    { name: 'Pro', description: 'For professionals', price: 'From $X/mo', features: ['All AI tools', 'Priority support'] },
  ],
};

const faqEn = {
  sectionTitle: 'FAQ',
  items: [
    { question: 'What is LimaxAI?', answer: 'A professional AI generation platform for images and videos.' },
    { question: 'How do I get started?', answer: 'Sign up and choose a plan to start creating.' },
  ],
};

const ctaEn = {
  title: 'Ready to create?',
  description: 'Join thousands of creators using LimaxAI.',
  buttonText: 'Start creating now',
};

const en: ContentCopy = {
  blog: blogEn,
  hero: heroEn,
  features: featuresEn,
  testimonials: testimonialsEn,
  pricing: pricingEn,
  faq: faqEn,
  cta: ctaEn,
};

function withEnContentFallback(overrides: Partial<ContentCopy>): ContentCopy {
  return {
    blog: { ...en.blog, ...overrides.blog },
    hero: { ...en.hero, ...overrides.hero },
    features: overrides.features ?? en.features,
    testimonials: overrides.testimonials ?? en.testimonials,
    pricing: overrides.pricing ?? en.pricing,
    faq: overrides.faq ?? en.faq,
    cta: { ...en.cta, ...overrides.cta },
  };
}

const zhCN: ContentCopy = withEnContentFallback({
  blog: {
    title: '博客',
    subtitle: '发现 AI 绘画教程、优质提示词与创作灵感。',
    noPosts: '暂无文章',
    checkBackLater: '该语言暂无更新，请稍后再看。',
  },
  hero: {
    title: '专业 AI 生成平台',
    subtitle: '使用前沿模型创作精彩视频与图片。',
    description: '一站集成 Midjourney、Sora、可灵、Nano Banana 等，几分钟即可开始创作。',
  },
  features: {
    sectionTitle: '核心功能',
    items: [
      { name: 'AI 图像', description: '使用领先模型生成高质量图像。' },
      { name: 'AI 视频', description: '使用前沿工具创作精彩视频内容。' },
    ],
  },
  testimonials: { sectionTitle: '用户评价', items: [{ quote: 'LimaxAI 把我常用的 AI 工具都放在了一起。', author: '创作者', role: '设计师' }] },
  pricing: { sectionTitle: '定价', plans: [{ name: '专业版', description: '面向专业用户', price: '¥X/月起', features: ['全部 AI 工具', '优先支持'] }] },
  faq: {
    sectionTitle: '常见问题',
    items: [
      { question: 'LimaxAI 是什么？', answer: '面向图像与视频的专业 AI 生成平台。' },
      { question: '如何开始使用？', answer: '注册并选择套餐即可开始创作。' },
    ],
  },
  cta: { title: '准备好创作了吗？', description: '与众多创作者一起使用 LimaxAI。', buttonText: '立即开始创作' },
});

const zhTW: ContentCopy = withEnContentFallback({
  blog: {
    title: '部落格',
    subtitle: '發現 AI 繪圖教學、優質提示詞與創作靈感。',
    noPosts: '暫無文章',
    checkBackLater: '該語言暫無更新，請稍後再看。',
  },
  hero: {
    title: '專業 AI 生成平台',
    subtitle: '使用前沿模型創作精彩視頻與圖片。',
    description: '一站整合 Midjourney、Sora、可靈、Nano Banana 等，幾分鐘即可開始創作。',
  },
  features: {
    sectionTitle: '核心功能',
    items: [
      { name: 'AI 圖像', description: '使用領先模型生成高質量圖像。' },
      { name: 'AI 視頻', description: '使用前沿工具創作精彩視頻內容。' },
    ],
  },
  testimonials: { sectionTitle: '用戶評價', items: [{ quote: 'LimaxAI 把我常用的 AI 工具都放在了一起。', author: '創作者', role: '設計師' }] },
  pricing: { sectionTitle: '定價', plans: [{ name: '專業版', description: '面向專業用戶', price: '¥X/月起', features: ['全部 AI 工具', '優先支援'] }] },
  faq: {
    sectionTitle: '常見問題',
    items: [
      { question: 'LimaxAI 是什麼？', answer: '面向圖像與視頻的專業 AI 生成平台。' },
      { question: '如何開始使用？', answer: '註冊並選擇方案即可開始創作。' },
    ],
  },
  cta: { title: '準備好創作了嗎？', description: '與眾多創作者一起使用 LimaxAI。', buttonText: '立即開始創作' },
});

const es: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Descubre tutoriales de arte IA, mejores prompts e inspiración creativa.', noPosts: 'No hay entradas', checkBackLater: 'Vuelve más tarde para ver actualizaciones en este idioma.' },
  hero: { title: 'Plataforma profesional de generación IA', subtitle: 'Crea vídeos e imágenes con modelos de vanguardia.', description: 'Una plataforma para Midjourney, Sora, Keling, Nano Banana y más. Empieza en minutos.' },
  features: { sectionTitle: 'Funciones', items: [{ name: 'Imagen IA', description: 'Genera imágenes de alta calidad con modelos líderes.' }, { name: 'Vídeo IA', description: 'Crea contenido de vídeo con herramientas punteras.' }] },
  testimonials: { sectionTitle: 'Lo que dicen los usuarios', items: [{ quote: 'LimaxAI reúne todas mis herramientas IA favoritas.', author: 'Creador', role: 'Diseñador' }] },
  pricing: { sectionTitle: 'Precios', plans: [{ name: 'Pro', description: 'Para profesionales', price: 'Desde X €/mes', features: ['Todas las herramientas IA', 'Soporte prioritario'] }] },
  faq: { sectionTitle: 'FAQ', items: [{ question: '¿Qué es LimaxAI?', answer: 'Una plataforma profesional de generación IA para imágenes y vídeos.' }, { question: '¿Cómo empiezo?', answer: 'Regístrate y elige un plan para empezar a crear.' }] },
  cta: { title: '¿Listo para crear?', description: 'Únete a miles de creadores que usan LimaxAI.', buttonText: 'Empezar a crear ahora' },
});

const ar: ContentCopy = withEnContentFallback({
  blog: { title: 'المدونة', subtitle: 'اكتشف دروس فن الذكاء الاصطناعي وأفضل التلميحات والإلهام الإبداعي.', noPosts: 'لا توجد منشورات', checkBackLater: 'تحقق لاحقاً للحصول على تحديثات بهذه اللغة.' },
  hero: { title: 'منصة احترافية لتوليد الذكاء الاصطناعي', subtitle: 'أنشئ فيديوهات وصوراً مذهلة بنماذج متطورة.', description: 'منصة واحدة لـ Midjourney وSora والمزيد. ابدأ خلال دقائق.' },
  features: { sectionTitle: 'الميزات', items: [{ name: 'صورة بالذكاء الاصطناعي', description: 'ولّد صوراً عالية الجودة بنماذج رائدة.' }, { name: 'فيديو بالذكاء الاصطناعي', description: 'أنشئ محتوى فيديو بأدوات حديثة.' }] },
  testimonials: { sectionTitle: 'آراء المستخدمين', items: [{ quote: 'LimaxAI يجمع كل أدوات الذكاء الاصطناعي المفضلة لدي في مكان واحد.', author: 'مبدع', role: 'مصمم' }] },
  pricing: { sectionTitle: 'الأسعار', plans: [{ name: 'Pro', description: 'للمحترفين', price: 'من X $/شهر', features: ['جميع أدوات الذكاء الاصطناعي', 'دعم ذو أولوية'] }] },
  faq: { sectionTitle: 'الأسئلة الشائعة', items: [{ question: 'ما هو LimaxAI؟', answer: 'منصة احترافية لتوليد الذكاء الاصطناعي للصور والفيديوهات.' }, { question: 'كيف أبدأ؟', answer: 'سجّل واختر خطة للبدء في الإنشاء.' }] },
  cta: { title: 'هل أنت مستعد للإنشاء؟', description: 'انضم إلى آلاف المبدعين الذين يستخدمون LimaxAI.', buttonText: 'ابدأ الإنشاء الآن' },
});

const pt: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Descubra tutoriais de arte IA, melhores prompts e inspiração criativa.', noPosts: 'Nenhum post encontrado', checkBackLater: 'Volte mais tarde para atualizações neste idioma.' },
  hero: { title: 'Plataforma profissional de geração por IA', subtitle: 'Crie vídeos e imagens com modelos de ponta.', description: 'Uma plataforma para Midjourney, Sora, Keling, Nano Banana e mais. Comece em minutos.' },
  features: { sectionTitle: 'Recursos', items: [{ name: 'Imagem IA', description: 'Gere imagens de alta qualidade com modelos líderes.' }, { name: 'Vídeo IA', description: 'Crie conteúdo em vídeo com ferramentas de ponta.' }] },
  testimonials: { sectionTitle: 'O que dizem os usuários', items: [{ quote: 'LimaxAI reúne todas as minhas ferramentas IA favoritas em um só lugar.', author: 'Criador', role: 'Designer' }] },
  pricing: { sectionTitle: 'Preços', plans: [{ name: 'Pro', description: 'Para profissionais', price: 'De X $/mês', features: ['Todas as ferramentas IA', 'Suporte prioritário'] }] },
  faq: { sectionTitle: 'FAQ', items: [{ question: 'O que é LimaxAI?', answer: 'Uma plataforma profissional de geração IA para imagens e vídeos.' }, { question: 'Como começar?', answer: 'Registre-se e escolha um plano para começar a criar.' }] },
  cta: { title: 'Pronto para criar?', description: 'Junte-se a milhares de criadores que usam LimaxAI.', buttonText: 'Começar a criar agora' },
});

const id: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Temukan tutorial seni AI, prompt terbaik, dan inspirasi kreatif.', noPosts: 'Tidak ada postingan', checkBackLater: 'Periksa nanti untuk pembaruan dalam bahasa ini.' },
  hero: { title: 'Platform generasi AI profesional', subtitle: 'Buat video dan gambar dengan model terkini.', description: 'Satu platform untuk Midjourney, Sora, Keling, Nano Banana, dan lainnya. Mulai dalam hitungan menit.' },
  features: { sectionTitle: 'Fitur', items: [{ name: 'Gambar AI', description: 'Hasilkan gambar berkualitas tinggi dengan model unggulan.' }, { name: 'Video AI', description: 'Buat konten video dengan alat mutakhir.' }] },
  testimonials: { sectionTitle: 'Kata pengguna', items: [{ quote: 'LimaxAI menyatukan semua alat AI favorit saya di satu tempat.', author: 'Kreator', role: 'Desainer' }] },
  pricing: { sectionTitle: 'Harga', plans: [{ name: 'Pro', description: 'Untuk profesional', price: 'Dari X $/bulan', features: ['Semua alat AI', 'Dukungan prioritas'] }] },
  faq: { sectionTitle: 'FAQ', items: [{ question: 'Apa itu LimaxAI?', answer: 'Platform generasi AI profesional untuk gambar dan video.' }, { question: 'Bagaimana cara memulai?', answer: 'Daftar dan pilih paket untuk mulai membuat.' }] },
  cta: { title: 'Siap membuat?', description: 'Bergabung dengan ribuan kreator yang menggunakan LimaxAI.', buttonText: 'Mulai membuat sekarang' },
});

const ms: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Temui tutorial seni AI, prompt terbaik dan inspirasi kreatif.', noPosts: 'Tiada siaran', checkBackLater: 'Semak kemudian untuk kemas kini dalam bahasa ini.' },
  hero: { title: 'Platform penjanaan AI profesional', subtitle: 'Cipta video dan imej dengan model canggih.', description: 'Satu platform untuk Midjourney, Sora, Keling, Nano Banana dan lain-lain. Mula dalam beberapa minit.' },
  features: { sectionTitle: 'Ciri', items: [{ name: 'Imej AI', description: 'Hasilkan imej berkualiti tinggi dengan model terkemuka.' }, { name: 'Video AI', description: 'Cipta kandungan video dengan alat terkini.' }] },
  testimonials: { sectionTitle: 'Apa kata pengguna', items: [{ quote: 'LimaxAI menghimpunkan semua alat AI kegemaran saya di satu tempat.', author: 'Pencipta', role: 'Pereka' }] },
  pricing: { sectionTitle: 'Harga', plans: [{ name: 'Pro', description: 'Untuk profesional', price: 'Dari X $/bulan', features: ['Semua alat AI', 'Sokongan keutamaan'] }] },
  faq: { sectionTitle: 'Soalan Lazim', items: [{ question: 'Apa itu LimaxAI?', answer: 'Platform penjanaan AI profesional untuk imej dan video.' }, { question: 'Bagaimana untuk bermula?', answer: 'Daftar dan pilih pelan untuk mula mencipta.' }] },
  cta: { title: 'Sedia untuk mencipta?', description: 'Sertai ribuan pencipta yang menggunakan LimaxAI.', buttonText: 'Mula mencipta sekarang' },
});

const fr: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Découvrez les tutoriels d\'art IA, les meilleurs prompts et l\'inspiration créative.', noPosts: 'Aucun article', checkBackLater: 'Revenez plus tard pour des mises à jour dans cette langue.' },
  hero: { title: 'Plateforme professionnelle de génération IA', subtitle: 'Créez des vidéos et images avec des modèles de pointe.', description: 'Une plateforme pour Midjourney, Sora, Keling, Nano Banana et plus. Commencez en quelques minutes.' },
  features: { sectionTitle: 'Fonctionnalités', items: [{ name: 'Image IA', description: 'Générez des images de qualité avec les meilleurs modèles.' }, { name: 'Vidéo IA', description: 'Créez des vidéos avec des outils performants.' }] },
  cta: { title: 'Prêt à créer ?', description: 'Rejoignez des milliers de créateurs qui utilisent LimaxAI.', buttonText: 'Commencer à créer' },
});

const ru: ContentCopy = withEnContentFallback({
  blog: { title: 'Блог', subtitle: 'Обучающие материалы по ИИ-арту, лучшие промпты и идеи для творчества.', noPosts: 'Записей не найдено', checkBackLater: 'Загляните позже для обновлений на этом языке.' },
  hero: { title: 'Профессиональная платформа генерации ИИ', subtitle: 'Создавайте видео и изображения с передовыми моделями.', description: 'Одна платформа для Midjourney, Sora, Keling, Nano Banana и других. Начните за минуты.' },
  features: { sectionTitle: 'Возможности', items: [{ name: 'ИИ-изображения', description: 'Генерируйте качественные изображения с ведущими моделями.' }, { name: 'ИИ-видео', description: 'Создавайте видео с современными инструментами.' }] },
  cta: { title: 'Готовы создавать?', description: 'Присоединяйтесь к тысячам авторов на LimaxAI.', buttonText: 'Начать создавать' },
});

const hi: ContentCopy = withEnContentFallback({
  blog: { title: 'ब्लॉग', subtitle: 'AI कला ट्यूटोरियल, बेहतरीन प्रॉम्प्ट और रचनात्मक प्रेरणा खोजें।', noPosts: 'कोई पोस्ट नहीं मिला', checkBackLater: 'इस भाषा में अपडेट के लिए बाद में देखें।' },
  hero: { title: 'पेशेवर AI जनरेशन प्लेटफॉर्म', subtitle: 'अत्याधुनिक मॉडल के साथ शानदार वीडियो और इमेज बनाएं।', description: 'Midjourney, Sora, Keling, Nano Banana और अधिक के लिए एक प्लेटफॉर्म। मिनटों में शुरू करें।' },
  features: { sectionTitle: 'विशेषताएं', items: [{ name: 'AI इमेज', description: 'अग्रणी मॉडल के साथ उच्च गुणवत्ता की छवियां बनाएं।' }, { name: 'AI वीडियो', description: 'अत्याधुनिक टूल से वीडियो कंटेंट बनाएं।' }] },
  cta: { title: 'बनाने के लिए तैयार?', description: 'हजारों क्रिएटर्स के साथ LimaxAI इस्तेमाल करें।', buttonText: 'अभी बनाना शुरू करें' },
});

const ja: ContentCopy = withEnContentFallback({
  blog: { title: 'ブログ', subtitle: 'AIアートのチュートリアル、おすすめプロンプト、創作のヒントをご紹介。', noPosts: '投稿がありません', checkBackLater: 'この言語の更新は後でご確認ください。' },
  hero: { title: 'プロのAI生成プラットフォーム', subtitle: '最先端モデルで動画・画像を制作。', description: 'Midjourney、Sora、Keling、Nano Bananaなどを一つのプラットフォームで。数分で始められます。' },
  features: { sectionTitle: '機能', items: [{ name: 'AI画像', description: '一流モデルで高品質な画像を生成。' }, { name: 'AI動画', description: '最新ツールで動画コンテンツを制作。' }] },
  testimonials: { sectionTitle: 'ユーザーの声', items: [{ quote: 'LimaxAIでお気に入りのAIツールが一箇所に。', author: 'クリエイター', role: 'デザイナー' }] },
  pricing: { sectionTitle: '料金', plans: [{ name: 'Pro', description: 'プロ向け', price: 'X円/月〜', features: ['全AIツール', '優先サポート'] }] },
  faq: { sectionTitle: 'よくある質問', items: [{ question: 'LimaxAIとは？', answer: '画像・動画のためのプロ向けAI生成プラットフォームです。' }, { question: '始め方は？', answer: '登録してプランを選ぶだけで創作を始められます。' }] },
  cta: { title: '創作を始めませんか？', description: '多くのクリエイターがLimaxAIを利用しています。', buttonText: '今すぐ創作を始める' },
});

const de: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Tutorials für KI-Kunst, beste Prompts und kreative Inspiration.', noPosts: 'Keine Beiträge gefunden', checkBackLater: 'Schauen Sie später für Updates in dieser Sprache vorbei.' },
  hero: { title: 'Professionelle KI-Generierungsplattform', subtitle: 'Erstellen Sie Videos und Bilder mit modernsten Modellen.', description: 'Eine Plattform für Midjourney, Sora, Keling, Nano Banana und mehr. In Minuten starten.' },
  features: { sectionTitle: 'Funktionen', items: [{ name: 'KI-Bilder', description: 'Erzeugen Sie hochwertige Bilder mit führenden Modellen.' }, { name: 'KI-Video', description: 'Erstellen Sie Videoinhalte mit modernsten Tools.' }] },
  cta: { title: 'Bereit zum Erstellen?', description: 'Tausende Kreative nutzen LimaxAI.', buttonText: 'Jetzt erstellen' },
});

const ko: ContentCopy = withEnContentFallback({
  blog: { title: '블로그', subtitle: 'AI 아트 튜토리얼, 추천 프롬프트, 창작 영감을 만나보세요.', noPosts: '게시물이 없습니다', checkBackLater: '이 언어의 업데이트는 나중에 확인해 주세요.' },
  hero: { title: '전문 AI 생성 플랫폼', subtitle: '최신 모델로 동영상과 이미지를 제작하세요.', description: 'Midjourney, Sora, Keling, Nano Banana 등을 한 곳에서. 몇 분 만에 시작할 수 있습니다.' },
  features: { sectionTitle: '기능', items: [{ name: 'AI 이미지', description: '선도적인 모델로 고품질 이미지를 생성하세요.' }, { name: 'AI 비디오', description: '최신 도구로 동영상 콘텐츠를 만드세요.' }] },
  cta: { title: '창작을 시작할 준비가 되셨나요?', description: '수많은 크리에이터가 LimaxAI를 사용합니다.', buttonText: '지금 창작 시작하기' },
});

const tr: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'AI sanat eğitimleri, en iyi promptlar ve yaratıcı ilham keşfedin.', noPosts: 'Gönderi bulunamadı', checkBackLater: 'Bu dilde güncellemeler için daha sonra tekrar bakın.' },
  hero: { title: 'Profesyonel AI üretim platformu', subtitle: 'Son teknoloji modellerle video ve görsel oluşturun.', description: 'Midjourney, Sora, Keling, Nano Banana ve daha fazlası için tek platform. Dakikalar içinde başlayın.' },
  features: { sectionTitle: 'Özellikler', items: [{ name: 'AI Görsel', description: 'Lider modellerle yüksek kaliteli görseller üretin.' }, { name: 'AI Video', description: 'Son teknoloji araçlarla video içeriği oluşturun.' }] },
  cta: { title: 'Oluşturmaya hazır mısınız?', description: 'Binlerce içerik üreticisi LimaxAI kullanıyor.', buttonText: 'Şimdi oluşturmaya başla' },
});

const vi: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Khám phá hướng dẫn nghệ thuật AI, prompt hay và cảm hứng sáng tạo.', noPosts: 'Chưa có bài viết', checkBackLater: 'Quay lại sau để xem cập nhật bằng ngôn ngữ này.' },
  hero: { title: 'Nền tảng tạo nội dung AI chuyên nghiệp', subtitle: 'Tạo video và hình ảnh với các mô hình tiên tiến.', description: 'Một nền tảng cho Midjourney, Sora, Keling, Nano Banana và hơn thế. Bắt đầu trong vài phút.' },
  features: { sectionTitle: 'Tính năng', items: [{ name: 'Ảnh AI', description: 'Tạo ảnh chất lượng cao với các mô hình hàng đầu.' }, { name: 'Video AI', description: 'Tạo nội dung video bằng công cụ hiện đại.' }] },
  cta: { title: 'Sẵn sàng tạo?', description: 'Hàng nghìn người sáng tạo đang dùng LimaxAI.', buttonText: 'Bắt đầu tạo ngay' },
});

const th: ContentCopy = withEnContentFallback({
  blog: { title: 'บล็อก', subtitle: 'ค้นพบบทช่วยสอนศิลปะ AI พรอมป์ที่ดีที่สุด และแรงบันดาลใจในการสร้างสรรค์.', noPosts: 'ไม่พบโพสต์', checkBackLater: 'ตรวจสอบอีกครั้งในภายหลังสำหรับการอัปเดตในภาษานี้.' },
  hero: { title: 'แพลตฟอร์มสร้างสรรค์ AI ระดับมืออาชีพ', subtitle: 'สร้างวิดีโอและภาพด้วยโมเดลล้ำสมัย.', description: 'หนึ่งแพลตฟอร์มสำหรับ Midjourney, Sora, Keling, Nano Banana และอื่นๆ เริ่มในไม่กี่นาที.' },
  features: { sectionTitle: 'ฟีเจอร์', items: [{ name: 'ภาพ AI', description: 'สร้างภาพคุณภาพสูงด้วยโมเดลชั้นนำ.' }, { name: 'วิดีโอ AI', description: 'สร้างเนื้อหาวิดีโอด้วยเครื่องมือล่าสุด.' }] },
  cta: { title: 'พร้อมสร้างสรรค์หรือยัง?', description: 'ร่วมกับผู้สร้างหลายพันคนที่ใช้ LimaxAI.', buttonText: 'เริ่มสร้างเลย' },
});

const it: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Scopri tutorial di arte AI, i migliori prompt e ispirazione creativa.', noPosts: 'Nessun articolo', checkBackLater: 'Torna più tardi per aggiornamenti in questa lingua.' },
  hero: { title: 'Piattaforma professionale di generazione AI', subtitle: 'Crea video e immagini con modelli all\'avanguardia.', description: 'Una piattaforma per Midjourney, Sora, Keling, Nano Banana e altro. Inizia in pochi minuti.' },
  features: { sectionTitle: 'Funzionalità', items: [{ name: 'Immagine AI', description: 'Genera immagini di alta qualità con modelli leader.' }, { name: 'Video AI', description: 'Crea contenuti video con strumenti all\'avanguardia.' }] },
  cta: { title: 'Pronto a creare?', description: 'Unisciti a migliaia di creatori che usano LimaxAI.', buttonText: 'Inizia a creare ora' },
});

const fa: ContentCopy = withEnContentFallback({
  blog: { title: 'وبلاگ', subtitle: 'آموزش هنر هوش مصنوعی، بهترین پرامپت‌ها و الهام خلاق را کشف کنید.', noPosts: 'پستی یافت نشد', checkBackLater: 'بعداً برای به‌روزرسانی به این زبان مراجعه کنید.' },
  hero: { title: 'پلتفرم حرفه‌ای تولید با هوش مصنوعی', subtitle: 'با مدل‌های پیشرفته ویدیو و تصویر بسازید.', description: 'یک پلتفرم برای Midjourney، Sora، Keling، Nano Banana و بیشتر. در چند دقیقه شروع کنید.' },
  features: { sectionTitle: 'امکانات', items: [{ name: 'تصویر AI', description: 'با مدل‌های پیشرو تصاویر با کیفیت تولید کنید.' }, { name: 'ویدیو AI', description: 'با ابزارهای پیشرفته محتوای ویدیویی بسازید.' }] },
  cta: { title: 'آماده ساخت؟', description: 'به هزاران سازنده LimaxAI بپیوندید.', buttonText: 'همین حالا شروع کنید' },
});

const nl: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Ontdek AI-kunsttutorials, de beste prompts en creatieve inspiratie.', noPosts: 'Geen berichten gevonden', checkBackLater: 'Kom later terug voor updates in deze taal.' },
  hero: { title: 'Professioneel AI-generatieplatform', subtitle: 'Maak video\'s en afbeeldingen met geavanceerde modellen.', description: 'Eén platform voor Midjourney, Sora, Keling, Nano Banana en meer. Binnen minuten aan de slag.' },
  features: { sectionTitle: 'Functies', items: [{ name: 'AI-afbeelding', description: 'Genereer afbeeldingen van hoge kwaliteit met toonaangevende modellen.' }, { name: 'AI-video', description: 'Maak videocontent met geavanceerde tools.' }] },
  cta: { title: 'Klaar om te maken?', description: 'Sluit je aan bij duizenden makers die LimaxAI gebruiken.', buttonText: 'Nu beginnen' },
});

const pl: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Odkryj tutoriale sztuki AI, najlepsze prompty i inspiracje twórcze.', noPosts: 'Brak postów', checkBackLater: 'Sprawdź później, czy są aktualizacje w tym języku.' },
  hero: { title: 'Profesjonalna platforma generowania AI', subtitle: 'Twórz wideo i obrazy z zaawansowanymi modelami.', description: 'Jedna platforma dla Midjourney, Sora, Keling, Nano Banana i innych. Zacznij w kilka minut.' },
  features: { sectionTitle: 'Funkcje', items: [{ name: 'Obraz AI', description: 'Generuj obrazy wysokiej jakości z czołowymi modelami.' }, { name: 'Wideo AI', description: 'Twórz treści wideo za pomocą nowoczesnych narzędzi.' }] },
  cta: { title: 'Gotowy do tworzenia?', description: 'Dołącz do tysięcy twórców korzystających z LimaxAI.', buttonText: 'Zacznij tworzyć' },
});

const sv: ContentCopy = withEnContentFallback({
  blog: { title: 'Blogg', subtitle: 'Upptäck AI-konsttutorials, bästa prompts och kreativ inspiration.', noPosts: 'Inga inlägg hittades', checkBackLater: 'Kom tillbaka senare för uppdateringar på detta språk.' },
  hero: { title: 'Professionell AI-genereringsplattform', subtitle: 'Skapa video och bilder med toppmodeller.', description: 'En plattform för Midjourney, Sora, Keling, Nano Banana och mer. Kom igång på minuter.' },
  features: { sectionTitle: 'Funktioner', items: [{ name: 'AI-bild', description: 'Generera bilder av hög kvalitet med ledande modeller.' }, { name: 'AI-video', description: 'Skapa videoinnehåll med moderna verktyg.' }] },
  cta: { title: 'Redo att skapa?', description: 'Gå med tusentals skapare som använder LimaxAI.', buttonText: 'Börja skapa nu' },
});

const uk: ContentCopy = withEnContentFallback({
  blog: { title: 'Блог', subtitle: 'Навчальні матеріали з AI-мистецтва, кращі промпти та ідеї для творчості.', noPosts: 'Записів не знайдено', checkBackLater: 'Перевірте пізніше оновлення цією мовою.' },
  hero: { title: 'Професійна платформа генерації AI', subtitle: 'Створюйте відео та зображення з передовими моделями.', description: 'Одна платформа для Midjourney, Sora, Keling, Nano Banana та інших. Почніть за хвилини.' },
  features: { sectionTitle: 'Можливості', items: [{ name: 'AI-зображення', description: 'Генеруйте якісні зображення з провідними моделями.' }, { name: 'AI-відео', description: 'Створюйте відеоконтент сучасними інструментами.' }] },
  cta: { title: 'Готові створювати?', description: 'Приєднуйтесь до тисяч авторів на LimaxAI.', buttonText: 'Почати створювати' },
});

const ro: ContentCopy = withEnContentFallback({
  blog: { title: 'Blog', subtitle: 'Descoperiți tutoriale de artă AI, cele mai bune prompturi și inspirație creativă.', noPosts: 'Nicio postare', checkBackLater: 'Reveniți mai târziu pentru actualizări în acest limbaj.' },
  hero: { title: 'Platformă profesională de generare AI', subtitle: 'Creați videoclipuri și imagini cu modele de vârf.', description: 'O platformă pentru Midjourney, Sora, Keling, Nano Banana și altele. Începeți în câteva minute.' },
  features: { sectionTitle: 'Funcționalități', items: [{ name: 'Imagine AI', description: 'Generați imagini de înaltă calitate cu modele de top.' }, { name: 'Video AI', description: 'Creați conținut video cu instrumente moderne.' }] },
  cta: { title: 'Gata să creați?', description: 'Alăturați-vă miilor de creatori care folosesc LimaxAI.', buttonText: 'Începeți acum' },
});

const contentByLocale: Record<Locale, ContentCopy> = {
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

/** 根据语种获取首页专属内容，缺省回退到 en 并输出控制台警告 */
export function getContent(locale: string): ContentCopy {
  const c = contentByLocale[locale as Locale];
  if (!c) {
    console.warn(`[i18n] Missing content for locale "${locale}", falling back to en.`);
    return en;
  }
  return c;
}

export const content = contentByLocale;
