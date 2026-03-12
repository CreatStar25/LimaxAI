/**
 * 教程页面：文档列表与文章内容
 * 支持多语种，按 locale 返回左侧列表与当前文章详情；右侧 TOC 由文章 sections 生成。
 */

export interface TutorialLink {
  url: string;
  text: string;
  desc?: string;
}

export type TutorialBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'links'; items: TutorialLink[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'image'; src?: string; alt: string; caption?: string }
  | { type: 'cta'; text: string; url: string }

export interface TutorialSection {
  id: string;
  title: string;
  blocks: TutorialBlock[];
}

export interface TutorialArticle {
  slug: string;
  title: string;
  intro: string;
  sections: TutorialSection[];
}

export interface TutorialListEntry {
  slug: string;
  title: string;
}

const LOCALES = ['en', 'zh-cn', 'zh-tw'] as const;
type TutorialLocale = typeof LOCALES[number];

/** 默认教程列表（slug + 标题），多语种 */
const listZhCN: TutorialListEntry[] = [
  { slug: 'limaxai-guide', title: 'LimaxAI 使用指南' },
  { slug: 'midjourney-tutorial', title: 'Midjourney 使用教程' },
  { slug: 'midjourney-animal-photography', title: 'Midjourney提示词——动物摄影（附公式）' },
  { slug: 'ai-video-guide', title: 'AI 视频生成入门' },
];

const listZhTW: TutorialListEntry[] = [
  { slug: 'limaxai-guide', title: 'LimaxAI 使用指南' },
  { slug: 'midjourney-tutorial', title: 'Midjourney 使用教程' },
  { slug: 'midjourney-animal-photography', title: 'Midjourney提示詞——動物攝影（附公式）' },
  { slug: 'ai-video-guide', title: 'AI 視頻生成入門' },
];

const listEn: TutorialListEntry[] = [
  { slug: 'limaxai-guide', title: 'LimaxAI User Guide' },
  { slug: 'midjourney-tutorial', title: 'Midjourney Tutorial' },
  { slug: 'midjourney-animal-photography', title: 'Midjourney Animal Photography Prompts' },
  { slug: 'ai-video-guide', title: 'AI Video Generation Guide' },
];

const listByLocale: Record<string, TutorialListEntry[]> = {
  en: listEn,
  'zh-cn': listZhCN,
  'zh-tw': listZhTW,
  es: listEn,
  ar: listEn,
  pt: listEn,
  id: listEn,
  ms: listEn,
  fr: listEn,
  ru: listEn,
  hi: listEn,
  ja: listEn,
  de: listEn,
  ko: listEn,
  tr: listEn,
  vi: listEn,
  th: listEn,
  it: listEn,
  fa: listEn,
  nl: listEn,
  pl: listEn,
  sv: listEn,
  uk: listEn,
  ro: listEn,
};

/** 文章详情：按 slug + locale */
const articleLimaxaiZhCN: TutorialArticle = {
  slug: 'limaxai-guide',
  title: 'LimaxAI 使用指南',
  intro: '欢迎来到 LimaxAI 使用指南专区！这里汇集了关于 LimaxAI 的全面教程、使用技巧与最佳实践。',
  sections: [
    {
      id: 'quick-access',
      title: '快速访问通道',
      blocks: [
        {
          type: 'links',
          items: [
            { url: 'https://www.limaxai.com/', text: 'LimaxAI 官网', desc: '一站式 AI 创作平台，支持 Midjourney、Sora、Veo 等' },
            { url: 'https://api.limaxai.com/', text: 'API 文档', desc: '开发者接口，低成本接入顶尖 AI 能力' },
          ],
        },
      ],
    },
    {
      id: 'latest',
      title: '🌟 最新文章',
      blocks: [
        {
          type: 'paragraph',
          text: '以下为博客中与 LimaxAI 相关的最新内容，涵盖国内可用入口、使用教程与技巧。',
        },
        {
          type: 'list',
          items: [
            '国内直连访问方式',
            'Midjourney / Sora / Veo 完整体验',
            '一个会员打通图文音视频创作',
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: '💡 使用提示',
      blocks: [
        {
          type: 'paragraph',
          text: '建议先注册 LimaxAI 账号并选择适合的套餐，即可在同一个工作台内切换不同 AI 模型，无需在多个工具间来回切换。',
        },
      ],
    },
  ],
};

const articleLimaxaiZhTW: TutorialArticle = {
  slug: 'limaxai-guide',
  title: 'LimaxAI 使用指南',
  intro: '歡迎來到 LimaxAI 使用指南專區！這裡匯集了關於 LimaxAI 的全面教程、使用技巧與最佳實踐。',
  sections: [
    {
      id: 'quick-access',
      title: '快速訪問通道',
      blocks: [
        {
          type: 'links',
          items: [
            { url: 'https://www.limaxai.com/', text: 'LimaxAI 官網', desc: '一站式 AI 創作平台，支援 Midjourney、Sora、Veo 等' },
            { url: 'https://api.limaxai.com/', text: 'API 文檔', desc: '開發者接口，低成本接入頂尖 AI 能力' },
          ],
        },
      ],
    },
    {
      id: 'latest',
      title: '🌟 最新文章',
      blocks: [
        { type: 'paragraph', text: '以下為部落格中與 LimaxAI 相關的最新內容，涵蓋國內可用入口、使用教程與技巧。' },
        { type: 'list', items: ['國內直連訪問方式', 'Midjourney / Sora / Veo 完整體驗', '一個會員打通圖文音視頻創作'] },
      ],
    },
    {
      id: 'tips',
      title: '💡 使用提示',
      blocks: [
        { type: 'paragraph', text: '建議先註冊 LimaxAI 帳號並選擇適合的套餐，即可在同一個工作台內切換不同 AI 模型，無需在多個工具間來回切換。' },
      ],
    },
  ],
};

const articleLimaxaiEn: TutorialArticle = {
  slug: 'limaxai-guide',
  title: 'LimaxAI User Guide',
  intro: 'Welcome to the LimaxAI user guide! Here you will find tutorials, tips, and best practices for using LimaxAI.',
  sections: [
    {
      id: 'quick-access',
      title: 'Quick access',
      blocks: [
        {
          type: 'links',
          items: [
            { url: 'https://www.limaxai.com/', text: 'LimaxAI', desc: 'All-in-one AI creation platform: Midjourney, Sora, Veo, and more.' },
            { url: 'https://api.limaxai.com/', text: 'API docs', desc: 'Developer API to access top AI models at low cost.' },
          ],
        },
      ],
    },
    {
      id: 'latest',
      title: '🌟 Latest posts',
      blocks: [
        { type: 'paragraph', text: 'Check our blog for the latest guides and tips on LimaxAI.' },
        { type: 'list', items: ['Direct access options', 'Full experience with Midjourney / Sora / Veo', 'One subscription for text, image, audio, and video'] },
      ],
    },
    {
      id: 'tips',
      title: '💡 Tips',
      blocks: [
        { type: 'paragraph', text: 'Sign up for LimaxAI and choose a plan to use multiple AI models in one workspace without switching between tools.' },
      ],
    },
  ],
};

const articleMidjourneyZhCN: TutorialArticle = {
  slug: 'midjourney-tutorial',
  title: 'Midjourney 使用教程',
  intro: '本教程介绍如何在 LimaxAI 中使用 Midjourney 进行图像创作，包括提示词技巧与工作流。',
  sections: [
    { id: 'basics', title: '基础用法', blocks: [{ type: 'paragraph', text: '在 LimaxAI 工作台选择「Midjourney」模型，在输入框中输入描述性提示词即可生成图像。支持比例、风格等参数。' }] },
    { id: 'tips', title: '💡 使用提示', blocks: [{ type: 'list', items: ['使用具体、具象的描述', '可注明画风如「电影感」「赛博朋克」', '多试几次以找到满意结果'] }] },
  ],
};

const articleMidjourneyEn: TutorialArticle = {
  slug: 'midjourney-tutorial',
  title: 'Midjourney Tutorial',
  intro: 'Learn how to use Midjourney on LimaxAI for image creation, including prompt tips and workflow.',
  sections: [
    { id: 'basics', title: 'Basics', blocks: [{ type: 'paragraph', text: 'Select the Midjourney model in the LimaxAI workspace, enter a descriptive prompt, and generate. Aspect ratio and style parameters are supported.' }] },
    { id: 'tips', title: '💡 Tips', blocks: [{ type: 'list', items: ['Use concrete, specific descriptions', 'Specify style (e.g. cinematic, cyberpunk)', 'Try multiple times to get the best result'] }] },
  ],
};

const articleAiVideoZhCN: TutorialArticle = {
  slug: 'ai-video-guide',
  title: 'AI 视频生成入门',
  intro: '介绍如何使用 LimaxAI 中的 Seedance、Veo、Sora 等模型生成视频，从文案到成片。',
  sections: [
    { id: 'models', title: '可用模型', blocks: [{ type: 'paragraph', text: 'LimaxAI 集成 Seedance、Veo、Sora 等视频模型，一个会员即可在平台内切换使用，无需分别订阅。' }] },
    { id: 'workflow', title: '基本流程', blocks: [{ type: 'list', items: ['输入画面描述或上传参考图', '选择时长与比例', '生成并下载或继续编辑'] }] },
  ],
};

const articleAiVideoEn: TutorialArticle = {
  slug: 'ai-video-guide',
  title: 'AI Video Generation Guide',
  intro: 'How to use Seedance, Veo, Sora and other video models on LimaxAI, from prompt to final clip.',
  sections: [
    { id: 'models', title: 'Available models', blocks: [{ type: 'paragraph', text: 'LimaxAI integrates Seedance, Veo, Sora and more. One subscription lets you switch between them without separate sign-ups.' }] },
    { id: 'workflow', title: 'Basic workflow', blocks: [{ type: 'list', items: ['Enter a scene description or upload a reference image', 'Choose duration and aspect ratio', 'Generate and download or edit further'] }] },
  ],
};

/** 动物摄影提示词表格：动物 | 英文提示词 | 场景描述 */
const animalTableRowsZh: string[][] = [
  ['猫', 'a fluffy white cat wearing a pastel pink knitted cardigan, lounging on a sunlit balcony chair with soft cushions, surrounded by flowers, in the style of realistic photography, natural lighting, shallow depth of field', '一只毛茸茸的白猫穿着粉色针织开衫，慵懒地躺在阳光照耀的阳台椅上，四周是花朵，风格是自然光真实摄影。'],
  ['熊', 'a large brown bear wearing a classic woolen coat and round glasses, sitting peacefully by a river in a forest, morning mist surrounding, realistic wildlife photography style with cinematic lighting', '一只棕熊穿着复古毛呢大衣和圆眼镜，安静地坐在森林河畔，晨雾环绕，仿佛电影场景的真实摄影。'],
  ['狗', 'a golden retriever wearing a striped beach shirt and sunglasses, sitting on the sand near the waves, bright summer vibe, realistic photography with warm tones and soft shadows', '一只金毛穿着条纹沙滩衫和墨镜，坐在海边沙滩上，阳光明媚，夏日氛围浓厚，真实摄影风格。'],
  ['鸽', 'a pigeon wearing a tailored grey suit and small bow tie, standing on a city railing with blurred skyscraper background, realistic street photography style, natural light', '一只穿着灰色西装和领结的鸽子站在城市栏杆上，背景是模糊摩天楼，街头摄影般真实。'],
  ['狐狸', 'a red fox wearing a knitted blue scarf and wool cap, sitting on snowy ground surrounded by frosty trees, soft winter sunlight, realistic wildlife photography', '一只红狐穿着蓝色围巾与羊毛帽，坐在雪地里，被冰霜树木环绕，冬日柔光，自然写实摄影。'],
  ['羊', 'a fluffy sheep wearing a vintage floral dress, sitting beside a wooden fence on a green pasture, afternoon sunlight, realistic countryside photography', '一只毛绒绒的羊穿着复古碎花裙，坐在绿草地旁的栅栏边，午后阳光下，乡村风真实摄影。'],
  ['猫头鹰', 'an owl wearing a tweed jacket and tiny reading glasses, standing on an old stump in misty forest, natural daylight, cinematic wildlife photography', '一只猫头鹰穿着粗呢外套和小眼镜，站在雾气弥漫的树桩上，自然光线下如电影般的摄影感。'],
  ['骆驼', 'a camel wearing a light linen travel jacket and explorer hat, standing under the desert sunset, dust in the air, realistic adventure photography, warm tones', '一只骆驼穿着浅色亚麻旅行外套、探险帽，站在沙漠落日下，空气中有黄沙，冒险摄影般真实。'],
  ['鸭', 'a duck wearing a beige trench coat and scarf, sitting beside a calm lake with reflections, autumn colors, realistic photography with cinematic composition', '一只穿着米色风衣与围巾的鸭子坐在宁静湖边，秋色斑斓，摄影构图电影感十足。'],
  ['兔', 'a rabbit wearing a soft denim shirt and straw hat, sitting on a wooden stool in a garden, holding a small guitar, warm morning light, realistic lifestyle photography', '一只穿着牛仔衬衫和草帽的兔子坐在花园的木凳上，抱着小吉他，早晨柔光下生活摄影风格。'],
];

const articleAnimalZhCN: TutorialArticle = {
  slug: 'midjourney-animal-photography',
  title: 'Midjourney提示词——动物摄影（附公式）',
  intro: '用 Midjourney 生成动物摄影风格图片时，只需遵循「动物 + 服装与场景 + 真实摄影风格」的公式即可。下面以 LimaxAI 创作者身份整理一批可直接使用的提示词与通用公式，供你在 LimaxAI 上一键出图。',
  sections: [
    {
      id: 'overview',
      title: '概述',
      blocks: [
        { type: 'paragraph', text: '动物摄影类提示词通常包含：主体动物、服装/道具、动作与场景、光线与风格。掌握通用公式后，可自由替换动物和场景，快速生成高质量效果。' },
      ],
    },
    {
      id: 'examples',
      title: '动物摄影提示词示例',
      blocks: [
        { type: 'paragraph', text: '以下为 10 组可直接使用的英文提示词及对应场景描述，可在 LimaxAI 的 Midjourney 中直接输入使用。' },
        { type: 'table', headers: ['动物', '英文提示词', '场景描述'], rows: animalTableRowsZh },
      ],
    },
    {
      id: 'formula',
      title: '通用公式',
      blocks: [
        { type: 'paragraph', text: '英文公式：a [animal] wearing a [clothing style] [clothing item], [doing something idle or relaxing] in [environment/background], in the style of realistic photography, natural lighting, [optional: cinematic tone/color]' },
        { type: 'paragraph', text: '中文对应：一只[动物]穿着[服装风格][具体服装]，[处于某个悠闲或放松的动作]，在[背景环境]中，风格为真实摄影、自然光线，[可选：电影质感或色调]。' },
      ],
    },
    {
      id: 'images',
      title: '效果图',
      blocks: [
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-1.webp', alt: '动物摄影效果图 1 猫', caption: '图1 猫' },
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-2.webp', alt: '动物摄影效果图 2 熊', caption: '图2 熊' },
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-3.webp', alt: '动物摄影效果图 3 狗', caption: '图3 狗' },
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-4.webp', alt: '动物摄影效果图 4 鸽', caption: '图4 鸽' },
      ],
    },
    {
      id: 'start',
      title: '开始创作',
      blocks: [
        { type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成动物摄影风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' },
        { type: 'cta', text: '开始创作', url: 'https://limaxai.com' },
      ],
    },
  ],
};

const articleAnimalZhTW: TutorialArticle = {
  slug: 'midjourney-animal-photography',
  title: 'Midjourney提示詞——動物攝影（附公式）',
  intro: '用 Midjourney 生成動物攝影風格圖片時，只需遵循「動物 + 服裝與場景 + 真實攝影風格」的公式即可。下面以 LimaxAI 創作者身份整理一批可直接使用的提示詞與通用公式，供你在 LimaxAI 上一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '動物攝影類提示詞通常包含：主體動物、服裝/道具、動作與場景、光線與風格。掌握通用公式後，可自由替換動物和場景，快速生成高質量效果。' }] },
    { id: 'examples', title: '動物攝影提示詞示例', blocks: [{ type: 'paragraph', text: '以下為 10 組可直接使用的英文提示詞及對應場景描述，可在 LimaxAI 的 Midjourney 中直接輸入使用。' }, { type: 'table', headers: ['動物', '英文提示詞', '場景描述'], rows: animalTableRowsZh }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：a [animal] wearing a [clothing style] [clothing item], [doing something idle or relaxing] in [environment/background], in the style of realistic photography, natural lighting, [optional: cinematic tone/color]' }, { type: 'paragraph', text: '中文對應：一隻[動物]穿著[服裝風格][具體服裝]，[處於某個悠閒或放鬆的動作]，在[背景環境]中，風格為真實攝影、自然光線，[可選：電影質感或色調]。' }] },
    { id: 'images', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-1.webp', alt: '動物攝影效果圖 1 貓', caption: '圖1 貓' }, { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-2.webp', alt: '動物攝影效果圖 2 熊', caption: '圖2 熊' }, { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-3.webp', alt: '動物攝影效果圖 3 狗', caption: '圖3 狗' }, { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-4.webp', alt: '動物攝影效果圖 4 鴿', caption: '圖4 鴿' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成動物攝影風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const animalTableRowsEn: string[][] = [
  ['Cat', 'a fluffy white cat wearing a pastel pink knitted cardigan, lounging on a sunlit balcony chair with soft cushions, surrounded by flowers, in the style of realistic photography, natural lighting, shallow depth of field', 'White cat in pink cardigan on a sunny balcony with flowers; natural light, realistic photography.'],
  ['Bear', 'a large brown bear wearing a classic woolen coat and round glasses, sitting peacefully by a river in a forest, morning mist surrounding, realistic wildlife photography style with cinematic lighting', 'Brown bear in coat and glasses by a forest river; morning mist; cinematic wildlife style.'],
  ['Dog', 'a golden retriever wearing a striped beach shirt and sunglasses, sitting on the sand near the waves, bright summer vibe, realistic photography with warm tones and soft shadows', 'Golden retriever in beach shirt and sunglasses on the sand; summer vibe; warm, realistic photography.'],
  ['Pigeon', 'a pigeon wearing a tailored grey suit and small bow tie, standing on a city railing with blurred skyscraper background, realistic street photography style, natural light', 'Pigeon in grey suit and bow tie on city railing; blurred skyscrapers; street photography.'],
  ['Fox', 'a red fox wearing a knitted blue scarf and wool cap, sitting on snowy ground surrounded by frosty trees, soft winter sunlight, realistic wildlife photography', 'Red fox in blue scarf and wool cap in snowy woods; soft winter light; wildlife photography.'],
  ['Sheep', 'a fluffy sheep wearing a vintage floral dress, sitting beside a wooden fence on a green pasture, afternoon sunlight, realistic countryside photography', 'Sheep in vintage floral dress by a fence on green pasture; afternoon sun; countryside photography.'],
  ['Owl', 'an owl wearing a tweed jacket and tiny reading glasses, standing on an old stump in misty forest, natural daylight, cinematic wildlife photography', 'Owl in tweed jacket and glasses on stump in misty forest; natural light; cinematic wildlife.'],
  ['Camel', 'a camel wearing a light linen travel jacket and explorer hat, standing under the desert sunset, dust in the air, realistic adventure photography, warm tones', 'Camel in linen jacket and explorer hat at desert sunset; dust in air; adventure photography.'],
  ['Duck', 'a duck wearing a beige trench coat and scarf, sitting beside a calm lake with reflections, autumn colors, realistic photography with cinematic composition', 'Duck in beige trench coat by a calm lake; autumn colors; cinematic composition.'],
  ['Rabbit', 'a rabbit wearing a soft denim shirt and straw hat, sitting on a wooden stool in a garden, holding a small guitar, warm morning light, realistic lifestyle photography', 'Rabbit in denim and straw hat on garden stool with small guitar; morning light; lifestyle photography.'],
];

const articleAnimalEn: TutorialArticle = {
  slug: 'midjourney-animal-photography',
  title: 'Midjourney Animal Photography Prompts (with Formula)',
  intro: 'To get animal photography-style images with Midjourney, follow the pattern: animal + clothing & scene + realistic photography style. Below we share ready-to-use prompts and a general formula so you can create on LimaxAI in one click.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Animal photography prompts usually include: the animal subject, clothing or props, pose and setting, and lighting/style. Once you know the formula, you can swap animals and scenes to get strong results quickly.' }] },
    { id: 'examples', title: 'Example prompts', blocks: [{ type: 'paragraph', text: 'Here are 10 English prompts and short scene descriptions you can use directly in Midjourney on LimaxAI.' }, { type: 'table', headers: ['Animal', 'English prompt', 'Scene description'], rows: animalTableRowsEn }] },
    { id: 'formula', title: 'General formula', blocks: [{ type: 'paragraph', text: 'English: a [animal] wearing a [clothing style] [clothing item], [doing something idle or relaxing] in [environment/background], in the style of realistic photography, natural lighting, [optional: cinematic tone/color]' }, { type: 'paragraph', text: 'Pattern: one [animal] in [style][garment], [relaxing or idle action] in [setting], realistic photography, natural light, [optional: cinematic look or color].' }] },
    { id: 'images', title: 'Sample images', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-1.webp', alt: 'Animal photography sample 1 Cat', caption: 'Fig.1 Cat' }, { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-2.webp', alt: 'Animal photography sample 2 Bear', caption: 'Fig.2 Bear' }, { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-3.webp', alt: 'Animal photography sample 3 Dog', caption: 'Fig.3 Dog' }, { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-4.webp', alt: 'Animal photography sample 4 Pigeon', caption: 'Fig.4 Pigeon' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

const articlesBySlugAndLocale: Record<string, Record<string, TutorialArticle>> = {
  'limaxai-guide': { en: articleLimaxaiEn, 'zh-cn': articleLimaxaiZhCN, 'zh-tw': articleLimaxaiZhTW },
  'midjourney-tutorial': { en: articleMidjourneyEn, 'zh-cn': articleMidjourneyZhCN, 'zh-tw': articleMidjourneyZhCN },
  'midjourney-animal-photography': { en: articleAnimalEn, 'zh-cn': articleAnimalZhCN, 'zh-tw': articleAnimalZhTW },
  'ai-video-guide': { en: articleAiVideoEn, 'zh-cn': articleAiVideoZhCN, 'zh-tw': articleAiVideoZhCN },
};

function getList(locale: string): TutorialListEntry[] {
  return listByLocale[locale] ?? listEn;
}

function getArticle(slug: string, locale: string): TutorialArticle | null {
  const byLocale = articlesBySlugAndLocale[slug];
  if (!byLocale) return null;
  return byLocale[locale] ?? byLocale['en'] ?? null;
}

export function getTutorialList(locale: string): TutorialListEntry[] {
  return getList(locale);
}

export function getTutorialArticle(slug: string, locale: string): TutorialArticle | null {
  return getArticle(slug, locale);
}

export function getFirstTutorialSlug(locale: string): string {
  const list = getList(locale);
  return list[0]?.slug ?? 'limaxai-guide';
}

const labelsZhCN = { articleList: '文章列表', pageNav: '页面导航' };
const labelsZhTW = { articleList: '文章列表', pageNav: '頁面導航' };
const labelsEn = { articleList: 'Article list', pageNav: 'On this page' };
const labelsByLocale: Record<string, { articleList: string; pageNav: string }> = {
  en: labelsEn,
  'zh-cn': labelsZhCN,
  'zh-tw': labelsZhTW,
  es: labelsEn,
  ar: labelsEn,
  pt: labelsEn,
  id: labelsEn,
  ms: labelsEn,
  fr: labelsEn,
  ru: labelsEn,
  hi: labelsEn,
  ja: labelsEn,
  de: labelsEn,
  ko: labelsEn,
  tr: labelsEn,
  vi: labelsEn,
  th: labelsEn,
  it: labelsEn,
  fa: labelsEn,
  nl: labelsEn,
  pl: labelsEn,
  sv: labelsEn,
  uk: labelsEn,
  ro: labelsEn,
};

export function getTutorialLabels(locale: string) {
  return labelsByLocale[locale] ?? labelsEn;
}
