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
  { slug: 'midjourney-flower-wallpaper', title: 'Midjourney提示词——鲜花壁纸（附公式）' },
  { slug: 'midjourney-gufeng-figure', title: 'Midjourney提示词——古风人物工笔画（附公式）' },
  { slug: 'midjourney-texture-12', title: 'Midjourney提示词——12种不同质感（附公式）' },
  { slug: 'midjourney-zelda-style', title: 'Midjourney提示词——塞尔达风格（附公式）' },
  { slug: 'midjourney-red-alert', title: 'Midjourney提示词——红色警戒（附公式）' },
  { slug: 'midjourney-composition-20', title: 'Midjourney提示词——20种不同构图方式' },
  { slug: 'midjourney-selected-prompts', title: '【AI 绘画】Midjourney 精选 · 附完整提示词与中文翻译' },
  { slug: 'midjourney-pen-wash-ink', title: 'Midjourney提示词—钢笔淡彩水墨风格' },
  { slug: 'midjourney-selected-styles', title: 'Midjourney提示词—精选风格' },
  { slug: 'ai-video-guide', title: 'AI 视频生成入门' },
];

const listZhTW: TutorialListEntry[] = [
  { slug: 'limaxai-guide', title: 'LimaxAI 使用指南' },
  { slug: 'midjourney-tutorial', title: 'Midjourney 使用教程' },
  { slug: 'midjourney-animal-photography', title: 'Midjourney提示詞——動物攝影（附公式）' },
  { slug: 'midjourney-flower-wallpaper', title: 'Midjourney提示詞——鮮花壁紙（附公式）' },
  { slug: 'midjourney-gufeng-figure', title: 'Midjourney提示詞——古風人物工筆畫（附公式）' },
  { slug: 'midjourney-texture-12', title: 'Midjourney提示詞——12種不同質感（附公式）' },
  { slug: 'midjourney-zelda-style', title: 'Midjourney提示詞——塞爾達風格（附公式）' },
  { slug: 'midjourney-red-alert', title: 'Midjourney提示詞——紅色警戒（附公式）' },
  { slug: 'midjourney-composition-20', title: 'Midjourney提示詞——20種不同構圖方式' },
  { slug: 'midjourney-selected-prompts', title: '【AI 繪畫】Midjourney 精選 · 附完整提示詞與中文翻譯' },
  { slug: 'midjourney-pen-wash-ink', title: 'Midjourney提示詞—鋼筆淡彩水墨風格' },
  { slug: 'midjourney-selected-styles', title: 'Midjourney提示詞—精選風格' },
  { slug: 'ai-video-guide', title: 'AI 視頻生成入門' },
];

const listEn: TutorialListEntry[] = [
  { slug: 'limaxai-guide', title: 'LimaxAI User Guide' },
  { slug: 'midjourney-tutorial', title: 'Midjourney Tutorial' },
  { slug: 'midjourney-animal-photography', title: 'Midjourney Animal Photography Prompts' },
  { slug: 'midjourney-flower-wallpaper', title: 'Midjourney Flower Wallpaper Prompts' },
  { slug: 'midjourney-gufeng-figure', title: 'Midjourney Ancient-Style Figure Painting Prompts' },
  { slug: 'midjourney-texture-12', title: 'Midjourney: 12 Textures (with Formula)' },
  { slug: 'midjourney-zelda-style', title: 'Midjourney: Zelda-Style Prompts (with Formula)' },
  { slug: 'midjourney-red-alert', title: 'Midjourney: Red Alert Prompts (with Formula)' },
  { slug: 'midjourney-composition-20', title: 'Midjourney: 20 Composition Types (with Prompts)' },
  { slug: 'midjourney-selected-prompts', title: 'Midjourney Selected Prompts (Full Text & Chinese Translation)' },
  { slug: 'midjourney-pen-wash-ink', title: 'Midjourney: Pen-and-Wash Ink Style Prompts' },
  { slug: 'midjourney-selected-styles', title: 'Midjourney: Selected Styles (Prompts & Translation)' },
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

/** 鲜花壁纸提示词表格：花名 | 英文提示词 | 场景描述 */
const flowerTableRowsZh: string[][] = [
  ['白牡丹', 'Colorful illustration, a large white peony on a background of dark purple and blue patterns with gold accents, text "No. 57 Capybara Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, highly detailed illustrations, detailed floral arrangements, dark violet background, hyper-detailed illustrations, hyper-realistic, high definition, super detailed.', '深紫与蓝色图案背景上的白色牡丹，金色点缀，奇幻艺术风格，中国传统纹样壁纸。'],
  ['白昙花', 'Colorful illustration, a luminous white epiphyllum (queen of the night) blooming at center, midnight indigo and ink-black background with Chinese cloud patterns and thin gold filigree, subtle moon halo glow, text "No. 08 Night Bloom Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic petals, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, hyper-realistic, high definition, super detailed.', '画面中心发光白色昙花，午夜靛蓝墨黑背景、祥云纹与金色细丝，月晕光环。'],
  ['蓝鸢尾', 'Colorful illustration, a tall sapphire-blue iris with luminous edges, smoky violet background with Chinese wave patterns and gold dust gradients, elegant ink-wash mist effect, text "No. 33 Iris Tide Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic veining on petals, ultra detailed illustration, ornate floral arrangement, dark violet background, hyper-detailed, hyper-realistic, high definition, super detailed.', '宝石蓝鸢尾边缘泛光，烟雾紫背景、中国水波纹与金粉渐变，水墨薄雾效果。'],
  ['粉樱花', 'Colorful illustration, clusters of soft pink cherry blossoms with sparkling highlights, deep navy background with Chinese plum-blossom lattice patterns and gold foil accents, floating petals like stardust, text "No. 12 Sakura Stardust Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, highly detailed illustrations, detailed floral arrangements, dark background, hyper-detailed, high definition, super detailed.', '成簇柔粉樱花带闪烁高光，深海军蓝背景、梅花窗棂纹与金箔，花瓣如星尘。'],
  ['金莲花', 'Colorful illustration, a vibrant orange nasturtium with translucent, glassy petals, dark purple-to-black gradient background with Chinese flame motifs and gold linework, glowing rim light, text "No. 41 Glass Flame Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, hyper-realistic, high definition, super detailed.', '明艳橙色金莲花瓣半透明如琉璃，深紫到墨黑渐变、中国火焰纹与金色线描。'],
  ['赤山茶', 'Colorful illustration, a bold crimson camellia with dew highlights, deep teal and royal blue brocade background with gold accents and enamel-like shine, Chinese traditional pattern wallpaper design with geometric key-fret borders, text "No. 19 Camellia Emblem Wallpaper," rich colors, fantasy art style, high resolution, hyper-realistic details, highly detailed illustrations, detailed floral arrangements, dark background, hyper-detailed, high definition, super detailed.', '浓烈赤红山茶带露珠高光，深青绿与皇家蓝锦缎背景、金色点缀与珐琅光泽、回纹边框。'],
  ['蓝绣球花', 'Colorful illustration, a large hydrangea bloom in cosmic blues and purples, dark violet background with Chinese star-map inspired patterns and gold speckles, tiny nebula gradients within petals, text "No. 27 Galaxy Hydrangea Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic micro-petal details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', '蓝紫星河绣球花，深紫背景、中国风星图纹样与金色星点，花瓣内星云渐变。'],
  ['红玫瑰', 'Colorful illustration, a large velvety red rose with crystal dew, dark burgundy and midnight blue background with Chinese brocade patterns and gold foil accents, dramatic rim light, text "No. 11 Rose Brocade Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic petal texture, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', '丝绒大红玫瑰带水晶露珠，深酒红与午夜蓝背景、中国锦缎纹样与金箔，轮廓光。'],
  ['向日葵', 'Colorful illustration, a radiant sunflower with luminous pollen dust, deep navy and charcoal background with Chinese sun-ray motifs and gold accents, soft morning haze glow, text "No. 24 Sunflower Dawn Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic seed spiral details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', '明耀向日葵带发光花粉，深海军蓝与炭黑背景、中国日辉纹与金色点缀，晨雾柔光。'],
  ['白百合', 'Colorful illustration, elegant white lilies with porcelain-like glow, deep cobalt and indigo background with Chinese cloud-and-crane patterns and thin gold linework, calm luminous highlights, text "No. 06 Lily Moonwhite Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic stamens and pollen, highly detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', '优雅白百合瓷釉般光泽，深钴蓝与靛蓝背景、中国云鹤纹与金色细线描。'],
];

const articleFlowerZhCN: TutorialArticle = {
  slug: 'midjourney-flower-wallpaper',
  title: 'Midjourney提示词——鲜花壁纸（附公式）',
  intro: '用 Midjourney 生成鲜花壁纸时，可遵循「色彩插画 + 主体花卉 + 深色中国风背景 + 金色元素 + 统一风格后缀」的公式。下面以 LimaxAI 创作者身份整理 10 组可直接使用的提示词与通用公式，并在文中穿插效果图，供你在 LimaxAI 上一键出图。',
  sections: [
    {
      id: 'overview',
      title: '概述',
      blocks: [
        { type: 'paragraph', text: '鲜花壁纸类提示词通常包含：主体花卉、主色与质感、深色背景与中国传统纹样、金色点缀、特殊光效，以及统一的风格与分辨率描述。掌握通用公式后，可替换花卉与主题快速生成高质量壁纸。' },
      ],
    },
    {
      id: 'examples',
      title: '鲜花壁纸提示词示例',
      blocks: [
        { type: 'paragraph', text: '以下为 10 组可直接使用的英文提示词及对应场景描述，可在 LimaxAI 的 Midjourney 中直接输入使用。' },
        { type: 'table', headers: ['花卉', '英文提示词', '场景描述'], rows: flowerTableRowsZh },
      ],
    },
    {
      id: 'image1',
      title: '效果图',
      blocks: [
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-5.webp', alt: '鲜花壁纸效果图 1', caption: '效果图 1' },
      ],
    },
    {
      id: 'formula',
      title: '通用公式',
      blocks: [
        { type: 'paragraph', text: '英文公式：Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.' },
        { type: 'paragraph', text: '中文对应：色彩丰富的插画，一朵/一簇[花朵]（主色为[主色]）置于带有[深色背景配色]纹样的背景上，点缀[金色元素]，[特殊效果]，文字「No. [编号] [主题] 壁纸」，色彩浓郁，奇幻艺术风格，中国传统纹样壁纸设计，高分辨率，超写实细节，超细节插画，华丽花卉构图，深色背景，超精细，高清，超级细致。' },
      ],
    },
    {
      id: 'image2',
      title: '效果图',
      blocks: [
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-6.webp', alt: '鲜花壁纸效果图 2', caption: '效果图 2' },
      ],
    },
    {
      id: 'image3',
      title: '效果图',
      blocks: [
        { type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-7.webp', alt: '鲜花壁纸效果图 3', caption: '效果图 3' },
      ],
    },
    {
      id: 'start',
      title: '开始创作',
      blocks: [
        { type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成鲜花壁纸风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' },
        { type: 'cta', text: '开始创作', url: 'https://limaxai.com' },
      ],
    },
  ],
};

const articleFlowerZhTW: TutorialArticle = {
  slug: 'midjourney-flower-wallpaper',
  title: 'Midjourney提示詞——鮮花壁紙（附公式）',
  intro: '用 Midjourney 生成鮮花壁紙時，可遵循「色彩插畫 + 主體花卉 + 深色中國風背景 + 金色元素 + 統一風格後綴」的公式。下面以 LimaxAI 創作者身份整理 10 組可直接使用的提示詞與通用公式，並在文中穿插效果圖，供你在 LimaxAI 上一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '鮮花壁紙類提示詞通常包含：主體花卉、主色與質感、深色背景與中國傳統紋樣、金色點綴、特殊光效，以及統一的風格與解析度描述。掌握通用公式後，可替換花卉與主題快速生成高質量壁紙。' }] },
    { id: 'examples', title: '鮮花壁紙提示詞示例', blocks: [{ type: 'paragraph', text: '以下為 10 組可直接使用的英文提示詞及對應場景描述，可在 LimaxAI 的 Midjourney 中直接輸入使用。' }, { type: 'table', headers: ['花卉', '英文提示詞', '場景描述'], rows: flowerTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-5.webp', alt: '鮮花壁紙效果圖 1', caption: '效果圖 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.' }, { type: 'paragraph', text: '中文對應：色彩豐富的插畫，一朵/一簇[花朵]（主色為[主色]）置於帶有[深色背景配色]紋樣的背景上，點綴[金色元素]，[特殊效果]，文字「No. [編號] [主題] 壁紙」，色彩濃郁，奇幻藝術風格，中國傳統紋樣壁紙設計，高解析度，超寫實細節，超細節插畫，華麗花卉構圖，深色背景，超精細，高清，超級細緻。' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-6.webp', alt: '鮮花壁紙效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-7.webp', alt: '鮮花壁紙效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成鮮花壁紙風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const flowerTableRowsEn: string[][] = [
  ['White peony', 'Colorful illustration, a large white peony on a background of dark purple and blue patterns with gold accents, text "No. 57 Capybara Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, highly detailed illustrations, detailed floral arrangements, dark violet background, hyper-detailed illustrations, hyper-realistic, high definition, super detailed.', 'White peony on dark purple/blue pattern background with gold; fantasy, Chinese traditional wallpaper.'],
  ['Night-blooming cereus', 'Colorful illustration, a luminous white epiphyllum (queen of the night) blooming at center, midnight indigo and ink-black background with Chinese cloud patterns and thin gold filigree, subtle moon halo glow, text "No. 08 Night Bloom Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic petals, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, hyper-realistic, high definition, super detailed.', 'Luminous white night-bloom at center; indigo/black background, Chinese clouds and gold filigree.'],
  ['Blue iris', 'Colorful illustration, a tall sapphire-blue iris with luminous edges, smoky violet background with Chinese wave patterns and gold dust gradients, elegant ink-wash mist effect, text "No. 33 Iris Tide Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic veining on petals, ultra detailed illustration, ornate floral arrangement, dark violet background, hyper-detailed, hyper-realistic, high definition, super detailed.', 'Sapphire-blue iris with luminous edges; smoky violet, Chinese waves and gold dust, ink-wash mist.'],
  ['Pink cherry blossom', 'Colorful illustration, clusters of soft pink cherry blossoms with sparkling highlights, deep navy background with Chinese plum-blossom lattice patterns and gold foil accents, floating petals like stardust, text "No. 12 Sakura Stardust Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, highly detailed illustrations, detailed floral arrangements, dark background, hyper-detailed, high definition, super detailed.', 'Soft pink cherry clusters; deep navy, plum-blossom lattice and gold foil, stardust petals.'],
  ['Nasturtium', 'Colorful illustration, a vibrant orange nasturtium with translucent, glassy petals, dark purple-to-black gradient background with Chinese flame motifs and gold linework, glowing rim light, text "No. 41 Glass Flame Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, hyper-realistic, high definition, super detailed.', 'Vibrant orange nasturtium, glassy petals; purple-to-black gradient, Chinese flame motifs and gold.'],
  ['Camellia', 'Colorful illustration, a bold crimson camellia with dew highlights, deep teal and royal blue brocade background with gold accents and enamel-like shine, Chinese traditional pattern wallpaper design with geometric key-fret borders, text "No. 19 Camellia Emblem Wallpaper," rich colors, fantasy art style, high resolution, hyper-realistic details, highly detailed illustrations, detailed floral arrangements, dark background, hyper-detailed, high definition, super detailed.', 'Crimson camellia with dew; teal and royal blue brocade, gold and enamel shine, key-fret borders.'],
  ['Hydrangea', 'Colorful illustration, a large hydrangea bloom in cosmic blues and purples, dark violet background with Chinese star-map inspired patterns and gold speckles, tiny nebula gradients within petals, text "No. 27 Galaxy Hydrangea Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic micro-petal details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', 'Cosmic blue-purple hydrangea; dark violet, star-map patterns and gold speckles, nebula in petals.'],
  ['Red rose', 'Colorful illustration, a large velvety red rose with crystal dew, dark burgundy and midnight blue background with Chinese brocade patterns and gold foil accents, dramatic rim light, text "No. 11 Rose Brocade Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic petal texture, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', 'Velvety red rose with crystal dew; burgundy and midnight blue, Chinese brocade and gold foil.'],
  ['Sunflower', 'Colorful illustration, a radiant sunflower with luminous pollen dust, deep navy and charcoal background with Chinese sun-ray motifs and gold accents, soft morning haze glow, text "No. 24 Sunflower Dawn Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic seed spiral details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', 'Radiant sunflower with luminous pollen; navy and charcoal, Chinese sun-ray motifs, morning haze.'],
  ['White lily', 'Colorful illustration, elegant white lilies with porcelain-like glow, deep cobalt and indigo background with Chinese cloud-and-crane patterns and thin gold linework, calm luminous highlights, text "No. 06 Lily Moonwhite Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic stamens and pollen, highly detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.', 'Elegant white lilies, porcelain glow; cobalt and indigo, cloud-and-crane patterns and gold linework.'],
];

const articleFlowerEn: TutorialArticle = {
  slug: 'midjourney-flower-wallpaper',
  title: 'Midjourney Flower Wallpaper Prompts (with Formula)',
  intro: 'To get flower wallpaper-style images with Midjourney, follow the pattern: colorful illustration + main flower + dark Chinese-style background + gold accents + unified style suffix. Below we share 10 ready-to-use prompts and a general formula, with sample images, so you can create on LimaxAI in one click.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Flower wallpaper prompts usually include: the main flower, main color and texture, dark background with Chinese traditional patterns, gold accents, special lighting, and a unified style/resolution tail. Once you know the formula, you can swap flowers and themes for strong results.' }] },
    { id: 'examples', title: 'Example prompts', blocks: [{ type: 'paragraph', text: 'Here are 10 English prompts and short scene descriptions you can use directly in Midjourney on LimaxAI.' }, { type: 'table', headers: ['Flower', 'English prompt', 'Scene description'], rows: flowerTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-5.webp', alt: 'Flower wallpaper sample 1', caption: 'Sample 1' }] },
    { id: 'formula', title: 'General formula', blocks: [{ type: 'paragraph', text: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.' }, { type: 'paragraph', text: 'Pattern: Colorful illustration, one or more [flowers] in [main color] on [dark background] patterns with [gold accents], [special effect], text "No. [number] [theme] Wallpaper," then the shared style tail.' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-6.webp', alt: 'Flower wallpaper sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-7.webp', alt: 'Flower wallpaper sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 古风人物工笔画提示词表格：人物 | 英文提示词 | 场景描述 */
const gufengTableRowsZh: string[][] = [
  ['剑客', 'A painting of a wandering sword saint in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing a weathered azure robe and a narrow leather belt. The background is light beige. A crimson plum-blossom seal appears on one side of him. His expression exudes calm resolve or silent pride as he looks forward towards the viewer. He has dark eyes and carries a simple sheathed sword with jade ornaments.', '中国古代绘画艺术中的流浪剑圣，青袍皮带，赤红梅花印章，沉静决断。'],
  ['术士', 'A painting of a celestial cartographer sorcerer in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing layered ink-black silk and bronze clasps. The background is light beige. A pale gold star-chart emblem appears on one side of him. His expression exudes inquisitive focus or prophetic serenity as he looks forward towards the viewer. He has dark eyes and holds a rolled parchment marked with constellations.', '星图术士，墨黑丝衣青铜扣，淡金星图徽记，手持星宿羊皮卷。'],
  ['将军', 'A painting of a frontier frost-armored general in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing silver lamellar armor with deep blue tassels. The background is light beige. A vermilion war-banner insignia appears on one side of him. His expression exudes heroic determination or steadfast discipline as he looks forward towards the viewer. He has dark eyes and wears a fur-trimmed cloak clasped at the shoulder.', '霜甲将军，银色札甲深蓝流苏，朱红战旗徽记，毛边斗篷。'],
  ['医生', 'A painting of a bamboo-shadow physician in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing pale green robes and a sash of woven hemp. The background is light beige. A delicate gourd-and-herb emblem appears on one side of him. His expression exudes gentle compassion or confident precision as he looks forward towards the viewer. He has dark eyes and holds a lacquered medicine case with fine needles inside.', '竹影医者，浅绿长袍麻编束带，葫芦与草药徽记，漆盒药匣。'],
  ['琴师', 'A painting of a cloud-terrace qin musician in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing white silk sleeves and a midnight-blue outer garment. The background is light beige. A small ink-painted soundwave motif appears on one side of him. His expression exudes elegant melancholy or tranquil joy as he looks forward towards the viewer. He has dark eyes and cradles a guqin with carved phoenix patterns.', '云台琴客，白丝袖靛蓝外衫，水墨声纹图腾，凤纹古琴。'],
  ['金匠', 'A painting of a gilded master smith in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing soot-stained brown garments and a leather apron. The background is light beige. A molten-gold hammer emblem appears on one side of him. His expression exudes proud craftsmanship or unwavering focus as he looks forward towards the viewer. He has dark eyes and holds tongs gripping a glowing ingot.', '鎏金匠王，棕袍皮革围裙，熔金铁锤徽记，铁钳金属锭。'],
  ['船长', 'A painting of an ocean-chart captain in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing teal robes and a cloak pinned with shell buttons. The background is light beige. A navy-blue wave crest appears on one side of him. His expression exudes fearless confidence or adventurous curiosity as he looks forward towards the viewer. He has dark eyes and holds a compass with a pearl inlay.', '海图船长，青绿衣袍贝壳扣披风，海军蓝浪纹徽记，珍珠罗盘。'],
  ['大内密探', 'A painting of a snow-temple covert agent in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing charcoal-gray layers and a scarf that covers part of his neck. The background is light beige. A white snowflake seal appears on one side of him. His expression exudes watchful restraint or cold precision as he looks forward towards the viewer. He has dark eyes and wears subtle hidden blades at his sleeves.', '雪寺密探，炭灰层衣围巾，白色雪花印记，袖藏暗刃。'],
  ['幻术师', 'A painting of an ink-illusion painter mage in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing flowing black-and-red robes splashed like brushstrokes. The background is light beige. A vivid koi-fish emblem appears on one side of him. His expression exudes playful mastery or mysterious composure as he looks forward towards the viewer. He has dark eyes and holds a brush whose tip drips shimmering ink.', '丹青幻术师，黑红泼墨长袍，锦鲤徽记，毛笔滴墨。'],
  ['护卫', 'A painting of a mountain oath-guardian in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing rugged stone-gray armor with moss-green accents. The background is light beige. A jade mountain sigil appears on one side of him. His expression exudes steadfast protection or solemn honor as he looks forward towards the viewer. He has dark eyes and wears prayer beads carved from river stones.', '山岳守誓者，石灰护甲苔绿纹理，玉色山形符印，河石念珠。'],
];

const articleGufengZhCN: TutorialArticle = {
  slug: 'midjourney-gufeng-figure',
  title: 'Midjourney提示词——古风人物工笔画（附公式）',
  intro: '用 Midjourney 生成古风人物工笔画时，可遵循「中国古代绘画艺术 + 人物原型 + 服饰与徽记 + 浅米色背景 + 情绪与道具」的公式。下面以 LimaxAI 创作者身份整理 10 组可直接使用的提示词与通用公式，并在文中穿插效果图，供你在 LimaxAI 上一键出图。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '古风人物工笔画类提示词通常包含：人物/原型、服饰或盔甲、浅米色背景、一侧的彩色徽记/印章、表情与气质、标志性道具。统一使用 Ancient Chinese Painting Art 与 light beige background，再替换人物与徽记即可快速出图。' }] },
    { id: 'examples', title: '古风人物工笔画提示词示例', blocks: [{ type: 'paragraph', text: '以下为 10 组可直接使用的英文提示词及对应场景描述，可在 LimaxAI 的 Midjourney 中直接输入使用。文中出图版本可为 niji 等。' }, { type: 'table', headers: ['人物', '英文提示词', '场景描述'], rows: gufengTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-8.webp', alt: '古风人物工笔画效果图 1', caption: '效果图 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].' }, { type: 'paragraph', text: '中文对应：中国古代绘画艺术中的[人物/原型]，留着优雅的胡子和长发，身穿[服饰/盔甲]。背景是浅米色的。他的一侧出现了[颜色][徽记/图腾]。当他展望观众时，他的表情流露出[情绪/气质]。他有一双黑眼睛，并手持/佩戴[标志性道具/细节]。' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-9.webp', alt: '古风人物工笔画效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-10.webp', alt: '古风人物工笔画效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成古风人物工笔画风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleGufengZhTW: TutorialArticle = {
  slug: 'midjourney-gufeng-figure',
  title: 'Midjourney提示詞——古風人物工筆畫（附公式）',
  intro: '用 Midjourney 生成古風人物工筆畫時，可遵循「中國古代繪畫藝術 + 人物原型 + 服飾與徽記 + 淺米色背景 + 情緒與道具」的公式。下面以 LimaxAI 創作者身份整理 10 組可直接使用的提示詞與通用公式，並在文中穿插效果圖，供你在 LimaxAI 上一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '古風人物工筆畫類提示詞通常包含：人物/原型、服飾或盔甲、淺米色背景、一側的彩色徽記/印章、表情與氣質、標誌性道具。統一使用 Ancient Chinese Painting Art 與 light beige background，再替換人物與徽記即可快速出圖。' }] },
    { id: 'examples', title: '古風人物工筆畫提示詞示例', blocks: [{ type: 'paragraph', text: '以下為 10 組可直接使用的英文提示詞及對應場景描述，可在 LimaxAI 的 Midjourney 中直接輸入使用。文中出圖版本可為 niji 等。' }, { type: 'table', headers: ['人物', '英文提示詞', '場景描述'], rows: gufengTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-8.webp', alt: '古風人物工筆畫效果圖 1', caption: '效果圖 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].' }, { type: 'paragraph', text: '中文對應：中國古代繪畫藝術中的[人物/原型]，留著優雅的鬍子和長髮，身穿[服飾/盔甲]。背景是淺米色的。他的一側出現了[顏色][徽記/圖騰]。當他展望觀眾時，他的表情流露出[情緒/氣質]。他有一雙黑眼睛，並手持/佩戴[標誌性道具/細節]。' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-9.webp', alt: '古風人物工筆畫效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-10.webp', alt: '古風人物工筆畫效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成古風人物工筆畫風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const gufengTableRowsEn: string[][] = [
  ['Sword saint', 'A painting of a wandering sword saint in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing a weathered azure robe and a narrow leather belt. The background is light beige. A crimson plum-blossom seal appears on one side of him. His expression exudes calm resolve or silent pride as he looks forward towards the viewer. He has dark eyes and carries a simple sheathed sword with jade ornaments.', 'Wandering sword saint, azure robe, plum-blossom seal, calm resolve.'],
  ['Sorcerer', 'A painting of a celestial cartographer sorcerer in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing layered ink-black silk and bronze clasps. The background is light beige. A pale gold star-chart emblem appears on one side of him. His expression exudes inquisitive focus or prophetic serenity as he looks forward towards the viewer. He has dark eyes and holds a rolled parchment marked with constellations.', 'Celestial sorcerer, ink-black silk, star-chart emblem, parchment with constellations.'],
  ['General', 'A painting of a frontier frost-armored general in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing silver lamellar armor with deep blue tassels. The background is light beige. A vermilion war-banner insignia appears on one side of him. His expression exudes heroic determination or steadfast discipline as he looks forward towards the viewer. He has dark eyes and wears a fur-trimmed cloak clasped at the shoulder.', 'Frost-armored general, silver lamellar, war-banner insignia, fur-trimmed cloak.'],
  ['Physician', 'A painting of a bamboo-shadow physician in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing pale green robes and a sash of woven hemp. The background is light beige. A delicate gourd-and-herb emblem appears on one side of him. His expression exudes gentle compassion or confident precision as he looks forward towards the viewer. He has dark eyes and holds a lacquered medicine case with fine needles inside.', 'Bamboo-shadow physician, pale green robes, gourd-and-herb emblem, medicine case.'],
  ['Qin musician', 'A painting of a cloud-terrace qin musician in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing white silk sleeves and a midnight-blue outer garment. The background is light beige. A small ink-painted soundwave motif appears on one side of him. His expression exudes elegant melancholy or tranquil joy as he looks forward towards the viewer. He has dark eyes and cradles a guqin with carved phoenix patterns.', 'Cloud-terrace qin musician, white silk and midnight-blue, soundwave motif, guqin with phoenix.'],
  ['Master smith', 'A painting of a gilded master smith in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing soot-stained brown garments and a leather apron. The background is light beige. A molten-gold hammer emblem appears on one side of him. His expression exudes proud craftsmanship or unwavering focus as he looks forward towards the viewer. He has dark eyes and holds tongs gripping a glowing ingot.', 'Gilded master smith, brown garments and apron, hammer emblem, tongs and ingot.'],
  ['Captain', 'A painting of an ocean-chart captain in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing teal robes and a cloak pinned with shell buttons. The background is light beige. A navy-blue wave crest appears on one side of him. His expression exudes fearless confidence or adventurous curiosity as he looks forward towards the viewer. He has dark eyes and holds a compass with a pearl inlay.', 'Ocean-chart captain, teal robes and shell buttons, wave crest, pearl compass.'],
  ['Covert agent', 'A painting of a snow-temple covert agent in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing charcoal-gray layers and a scarf that covers part of his neck. The background is light beige. A white snowflake seal appears on one side of him. His expression exudes watchful restraint or cold precision as he looks forward towards the viewer. He has dark eyes and wears subtle hidden blades at his sleeves.', 'Snow-temple covert agent, charcoal-gray and scarf, snowflake seal, hidden blades.'],
  ['Illusion mage', 'A painting of an ink-illusion painter mage in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing flowing black-and-red robes splashed like brushstrokes. The background is light beige. A vivid koi-fish emblem appears on one side of him. His expression exudes playful mastery or mysterious composure as he looks forward towards the viewer. He has dark eyes and holds a brush whose tip drips shimmering ink.', 'Ink-illusion mage, black-and-red robes, koi-fish emblem, brush with dripping ink.'],
  ['Oath-guardian', 'A painting of a mountain oath-guardian in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing rugged stone-gray armor with moss-green accents. The background is light beige. A jade mountain sigil appears on one side of him. His expression exudes steadfast protection or solemn honor as he looks forward towards the viewer. He has dark eyes and wears prayer beads carved from river stones.', 'Mountain oath-guardian, stone-gray armor, jade mountain sigil, river-stone beads.'],
];

const articleGufengEn: TutorialArticle = {
  slug: 'midjourney-gufeng-figure',
  title: 'Midjourney Ancient-Style Figure Painting Prompts (with Formula)',
  intro: 'To get ancient Chinese painting–style figure art with Midjourney, follow the pattern: Ancient Chinese Painting Art + character archetype + clothing/armor + light beige background + emblem + mood and prop. Below we share 10 ready-to-use prompts and a general formula, with sample images, so you can create on LimaxAI in one click.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Ancient-style figure prompts usually include: character/archetype, clothing or armor, light beige background, a colored emblem or seal on one side, expression and mood, and a signature prop. Use Ancient Chinese Painting Art and light beige background consistently, then swap character and emblem for fast results.' }] },
    { id: 'examples', title: 'Example prompts', blocks: [{ type: 'paragraph', text: 'Here are 10 English prompts and short scene descriptions you can use directly in Midjourney on LimaxAI. Output can use niji or similar.' }, { type: 'table', headers: ['Character', 'English prompt', 'Scene description'], rows: gufengTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-8.webp', alt: 'Ancient-style figure sample 1', caption: 'Sample 1' }] },
    { id: 'formula', title: 'General formula', blocks: [{ type: 'paragraph', text: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].' }, { type: 'paragraph', text: 'Pattern: [Character] in Ancient Chinese Painting Art, mustache and long hair, [clothing], light beige background, [color] [emblem] on one side, [mood], dark eyes, [prop].' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-9.webp', alt: 'Ancient-style figure sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-10.webp', alt: 'Ancient-style figure sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 12种质感提示词表格：质感类型 | 英文提示词 | 场景描述 */
const textureTableRowsZh: string[][] = [
  ['亚光质感', 'Matte texture vintage camera, with soft, non-reflective surfaces and subtle grain details, featuring minimalist silver accents and matte lenses, set on a wooden table, surrounded by soft ambient light and a gentle fog, cinematic soft light, ultra detailed, 8k', '亚光质感复古相机，柔和无反光表面与细腻颗粒纹理，简约银色细节与亚光镜头，木桌、柔光与轻雾，电影级柔光，8K'],
  ['珍珠质感', 'Pearl texture luxury necklace, featuring smooth, lustrous pearls with a soft iridescent glow, adorned with shimmering diamond-like clasps, resting on an elegant velvet background, soft glowing light reflecting off the pearls, ultra detailed, 8k', '珍珠质感奢华项链，光滑润泽珍珠与柔和彩虹光泽，钻石般扣件，天鹅绒背景，柔光反射，8K'],
  ['绸缎质感', 'Satin texture luxury dress, with smooth flowing fabric and soft sheen, adorned with intricate lace details and shimmering beads, set in a soft, illuminated studio with floating fabric, cinematic lighting, ultra detailed, 8k', '绸缎质感奢华礼服，光滑流动布料与柔和光泽，蕾丝与珠饰，柔光棚拍与飘动布料，电影级光效，8K'],
  ['毛绒质感', 'Plush texture teddy bear figurine, with soft, fluffy fur in a pastel color palette, adorned with a small knitted scarf and a cute bowtie, set against a snowy winter backdrop with gentle light reflections, ultra detailed, 8k', '毛绒质感泰迪熊手办，柔软蓬松毛发淡雅色调，针织围巾与领结，雪景冬日背景柔光，8K'],
  ['水波纹质感', 'Water ripple texture futuristic hoverboard, with sleek, flowing design and smooth reflective surfaces, rippling light effects across the board, glowing antlers at the front, set against a glowing cityscape at dusk, ultra detailed, 8k', '水波纹质感未来悬浮滑板，流线型与光滑反射面，滑板水波光效与前端发光鹿角，暮光城市背景，8K'],
  ['石墨质感', 'Graphite texture futuristic helmet, with a sleek, industrial matte finish and sharp, angular details, adorned with metal accents and illuminated lines, set in a high-tech laboratory environment with neon lighting, ultra detailed, 8k', '石墨质感未来头盔，工业亚光与锐利棱角，金属点缀与发光线条，高科技实验室霓虹光，8K'],
  ['金属质感', 'Polished metal robot arm, with smooth chrome finish and intricate mechanical joints, glowing light accents along the arm, set against a futuristic lab with neon lights and high-tech equipment, ultra detailed, 8k', '金属质感机器人手臂，光滑铬面与复杂机械关节，手臂发光点缀，未来实验室霓虹与设备，8K'],
  ['玻璃质感', 'Glass texture luxury perfume bottle, with a translucent and polished surface, soft light refraction creating ethereal reflections, adorned with a delicate glass stopper and silver accents, set on a soft velvet background, ultra detailed, 8k', '玻璃质感奢华香水瓶，透明光滑表面柔光折射，玻璃瓶塞与银色点缀，天鹅绒背景，8K'],
  ['皮革质感', 'Leather texture futuristic backpack, with sleek, smooth leather surfaces and visible stitching, adorned with metal zippers and high-end detailing, placed on a polished wooden desk, cinematic lighting, ultra detailed, 8k', '皮革质感未来背包，光滑皮革与明显缝线，金属拉链与高端细节，光滑木桌电影级光效，8K'],
  ['陶瓷质感', 'Ceramic texture luxury teapot, with smooth glazed surface and delicate hand-painted floral patterns, adorned with a polished ceramic handle, set in a minimalist tea room with soft, diffused light, ultra detailed, 8k', '陶瓷质感奢华茶壶，光滑釉面与手绘花卉，陶瓷把手，简约茶室柔和漫射光，8K'],
  ['古铜质感', 'Aged bronze texture movie prop sword, with weathered metallic surface, intricate patina details along the blade, adorned with antique bronze hilt, set against a misty, medieval battle backdrop with dramatic lighting, ultra detailed, 8k', '古铜质感电影道具剑，做旧金属表面与刀刃锈迹细节，复古青铜剑柄，雾气中世纪战斗背景强烈光影，8K'],
  ['粘土质感', 'Clay texture hand-crafted pottery, with rough, earthy surface and visible sculpting marks, adorned with natural clay patterns, resting on a wooden table in a cozy artisan studio, soft ambient lighting, ultra detailed, 8k', '粘土质感手工陶艺，粗糙泥土表面与雕刻痕迹，自然粘土图案，木桌温馨手工艺工作室柔光，8K'],
];

const articleTextureZhCN: TutorialArticle = {
  slug: 'midjourney-texture-12',
  title: 'Midjourney提示词——12种不同质感（附公式）',
  intro: '用 Midjourney 生成不同质感画面时，可遵循「主体 + 材质 + 纹理细节 + 装饰与背景 + 电影级光效」的公式。下面以 LimaxAI 创造者身份整理 12 组可直接使用的提示词与通用公式，并在文中穿插效果图，供你在 LimaxAI 上一键出图。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '质感类提示词通常包含：主体/物品、材质描述、纹理细节、装饰元素、背景与光线。统一使用 cinematic lighting, ultra detailed, 8k 等结尾，再替换主体与材质即可快速出图。本文出图版本可为 v7 等。' }] },
    { id: 'examples', title: '12种质感提示词示例', blocks: [{ type: 'paragraph', text: '以下为 12 组可直接使用的英文提示词及对应场景描述，可在 LimaxAI 的 Midjourney 中直接输入使用。' }, { type: 'table', headers: ['质感类型', '英文提示词', '场景描述'], rows: textureTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-11.webp', alt: '质感效果图 1', caption: '效果图 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：[Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k' }, { type: 'paragraph', text: '中文对应：[主体]由[材质]制成，具有[纹理细节]，装饰[装饰元素]，佩戴[配饰]，置于[背景]之中，电影级光效，超精细，8K。' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-12.webp', alt: '质感效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-13.webp', alt: '质感效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成不同质感风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleTextureZhTW: TutorialArticle = {
  slug: 'midjourney-texture-12',
  title: 'Midjourney提示詞——12種不同質感（附公式）',
  intro: '用 Midjourney 生成不同質感畫面時，可遵循「主體 + 材質 + 紋理細節 + 裝飾與背景 + 電影級光效」的公式。下面以 LimaxAI 創作者身份整理 12 組可直接使用的提示詞與通用公式，並在文中穿插效果圖，供你在 LimaxAI 上一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '質感類提示詞通常包含：主體/物品、材質描述、紋理細節、裝飾元素、背景與光線。統一使用 cinematic lighting, ultra detailed, 8k 等結尾，再替換主體與材質即可快速出圖。文中出圖版本可為 v7 等。' }] },
    { id: 'examples', title: '12種質感提示詞示例', blocks: [{ type: 'paragraph', text: '以下為 12 組可直接使用的英文提示詞及對應場景描述，可在 LimaxAI 的 Midjourney 中直接輸入使用。' }, { type: 'table', headers: ['質感類型', '英文提示詞', '場景描述'], rows: textureTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-11.webp', alt: '質感效果圖 1', caption: '效果圖 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：[Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k' }, { type: 'paragraph', text: '中文對應：[主體]由[材質]製成，具有[紋理細節]，裝飾[裝飾元素]，佩戴[配飾]，置於[背景]之中，電影級光效，超精細，8K。' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-12.webp', alt: '質感效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-13.webp', alt: '質感效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成不同質感風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const textureTableRowsEn: string[][] = [
  ['Matte', 'Matte texture vintage camera, with soft, non-reflective surfaces and subtle grain details, featuring minimalist silver accents and matte lenses, set on a wooden table, surrounded by soft ambient light and a gentle fog, cinematic soft light, ultra detailed, 8k', 'Vintage camera, matte surfaces, wooden table, soft fog, cinematic light.'],
  ['Pearl', 'Pearl texture luxury necklace, featuring smooth, lustrous pearls with a soft iridescent glow, adorned with shimmering diamond-like clasps, resting on an elegant velvet background, soft glowing light reflecting off the pearls, ultra detailed, 8k', 'Luxury necklace, pearls, velvet background, soft reflections.'],
  ['Satin', 'Satin texture luxury dress, with smooth flowing fabric and soft sheen, adorned with intricate lace details and shimmering beads, set in a soft, illuminated studio with floating fabric, cinematic lighting, ultra detailed, 8k', 'Luxury dress, lace and beads, studio lighting.'],
  ['Plush', 'Plush texture teddy bear figurine, with soft, fluffy fur in a pastel color palette, adorned with a small knitted scarf and a cute bowtie, set against a snowy winter backdrop with gentle light reflections, ultra detailed, 8k', 'Teddy bear, pastel fur, scarf and bowtie, winter backdrop.'],
  ['Water ripple', 'Water ripple texture futuristic hoverboard, with sleek, flowing design and smooth reflective surfaces, rippling light effects across the board, glowing antlers at the front, set against a glowing cityscape at dusk, ultra detailed, 8k', 'Hoverboard, rippling light, cityscape at dusk.'],
  ['Graphite', 'Graphite texture futuristic helmet, with a sleek, industrial matte finish and sharp, angular details, adorned with metal accents and illuminated lines, set in a high-tech laboratory environment with neon lighting, ultra detailed, 8k', 'Futuristic helmet, graphite finish, neon lab.'],
  ['Polished metal', 'Polished metal robot arm, with smooth chrome finish and intricate mechanical joints, glowing light accents along the arm, set against a futuristic lab with neon lights and high-tech equipment, ultra detailed, 8k', 'Robot arm, chrome and joints, neon lab.'],
  ['Glass', 'Glass texture luxury perfume bottle, with a translucent and polished surface, soft light refraction creating ethereal reflections, adorned with a delicate glass stopper and silver accents, set on a soft velvet background, ultra detailed, 8k', 'Perfume bottle, glass and silver, velvet background.'],
  ['Leather', 'Leather texture futuristic backpack, with sleek, smooth leather surfaces and visible stitching, adorned with metal zippers and high-end detailing, placed on a polished wooden desk, cinematic lighting, ultra detailed, 8k', 'Backpack, leather and stitching, wooden desk.'],
  ['Ceramic', 'Ceramic texture luxury teapot, with smooth glazed surface and delicate hand-painted floral patterns, adorned with a polished ceramic handle, set in a minimalist tea room with soft, diffused light, ultra detailed, 8k', 'Teapot, glaze and floral patterns, tea room.'],
  ['Aged bronze', 'Aged bronze texture movie prop sword, with weathered metallic surface, intricate patina details along the blade, adorned with antique bronze hilt, set against a misty, medieval battle backdrop with dramatic lighting, ultra detailed, 8k', 'Prop sword, patina and bronze hilt, medieval backdrop.'],
  ['Clay', 'Clay texture hand-crafted pottery, with rough, earthy surface and visible sculpting marks, adorned with natural clay patterns, resting on a wooden table in a cozy artisan studio, soft ambient lighting, ultra detailed, 8k', 'Hand-crafted pottery, clay patterns, artisan studio.'],
];

const articleTextureEn: TutorialArticle = {
  slug: 'midjourney-texture-12',
  title: 'Midjourney: 12 Textures (with Formula)',
  intro: 'To get different texture styles with Midjourney, follow the pattern: subject + material + texture details + decor and background + cinematic lighting. Below we share 12 ready-to-use prompts and a general formula, with sample images, so you can create on LimaxAI in one click.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Texture prompts usually include: subject/item, material, texture details, decor, and background/lighting. End with cinematic lighting, ultra detailed, 8k consistently, then swap subject and material for fast results. Output can use v7 or similar.' }] },
    { id: 'examples', title: 'Example prompts', blocks: [{ type: 'paragraph', text: 'Here are 12 English prompts and short scene descriptions you can use directly in Midjourney on LimaxAI.' }, { type: 'table', headers: ['Texture', 'English prompt', 'Scene description'], rows: textureTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-11.webp', alt: 'Texture sample 1', caption: 'Sample 1' }] },
    { id: 'formula', title: 'General formula', blocks: [{ type: 'paragraph', text: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k' }, { type: 'paragraph', text: 'Pattern: [Subject] + [material], [texture details], [decor], [background], cinematic lighting, ultra detailed, 8k.' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-12.webp', alt: 'Texture sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-13.webp', alt: 'Texture sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 塞尔达风格提示词表格：角色/场景 | 英文提示词 | 场景描述 */
const zeldaTableRowsZh: string[][] = [
  ['勇者', 'Link from the video game The Legend of Zelda, front-facing centered portrait, blonde hair gently tousled, green adventurer tunic and leather straps, soft morning mist forest background with sunbeams, fantasy art oil painting, delicate brushstrokes, warm light, high detail.', '来自《塞尔达传说》的林克，正面居中肖像，金发微乱，绿色冒险者短袍与皮革绑带，清晨薄雾森林与阳光光束背景，奇幻油画风，细腻笔触，暖光，高细节。'],
  ['古代遗迹', 'Zelda from the video game The Legend of Zelda, front-facing symmetrical portrait, flowing golden hair, luminous tiara, royal fantasy armor with subtle filigree, mossy ancient stone ruins with faint glowing glyphs behind, fantasy art oil painting, cinematic atmosphere, fine detail.', '来自《塞尔达传说》的塞尔达，正面对称肖像，金发飘逸，发光王冠，带精细纹饰的王族奇幻盔甲，身后覆苔古代石质遗迹与微弱发光符文，奇幻油画风，电影感氛围，精细刻画。'],
  ['旅途之眼', 'Link from the video game The Legend of Zelda, front-facing portrait, calm gaze, blonde hair, blue sailcloth cloak over fantasy armor, sea-cliff background with distant ships and sparkling waves, fantasy art oil painting, airy palette, soft highlights, ultra detailed.', '来自《塞尔达传说》的林克，正面肖像，目光平静，金发，蓝色帆布披风覆于奇幻盔甲之上，海崖背景远处帆船与闪光海浪，奇幻油画风，通透配色，柔和高光，超高细节。'],
  ['夜行者', 'Zelda from the video game The Legend of Zelda, front-facing centered portrait, soft glowing eyes, long blonde hair, celestial embroidered armor-dress, starlit grassland background with fireflies and crescent moon, fantasy art oil painting, glowing rim light, magical mood.', '来自《塞尔达传说》的塞尔达，正面居中肖像，眼神柔亮，长金发，星纹刺绣的盔甲礼裙，星光草原背景含萤火虫与新月，奇幻油画风，发光轮廓光，魔法氛围。'],
  ['雪原篝火', 'Link from the video game The Legend of Zelda, front-facing portrait, blonde hair with frost tips, fur-trimmed fantasy armor, snowy mountains background and a small campfire glow, fantasy art oil painting, strong warm-cold contrast, textured brushwork, high realism detail.', '来自《塞尔达传说》的林克，正面肖像，金发带霜尖，毛绒镶边奇幻盔甲，雪山背景与小小篝火暖光，奇幻油画风，冷暖强对比，厚涂质感笔触，高写实细节。'],
  ['炭治郎', 'Tanjiro Kamado from the anime Demon Slayer, front-facing centered portrait, kind determined eyes, checkered haori reimagined with fantasy fabric texture and subtle armor pieces, background of misty cedar forest with faint water-like light trails, in the style of Zelda-like fantasy art oil painting, cinematic light, crisp detail.', '来自动画《鬼灭之刃》的灶门炭治郎，正面居中肖像，温柔而坚定的眼神，格纹羽织以奇幻布料质感与轻甲细节重绘，薄雾杉林背景与水纹般微光轨迹，塞尔达风奇幻油画风，电影感光照，清晰细节。'],
  ['林克', 'Link from the video game The Legend of Zelda, front-facing portrait, gentle smile, blonde hair, light fantasy armor with a small floral charm, vast wildflower field background with drifting petals, fantasy art oil painting, pastel yet vivid colors, soft depth of field.', '来自《塞尔达传说》的林克，正面肖像，微笑温柔，金发，轻型奇幻盔甲配小花饰，辽阔花海背景与飘散花瓣，奇幻油画风，粉彩但鲜明的色彩，柔和景深。'],
  ['熔岩之境', 'Zelda from the video game The Legend of Zelda, front-facing symmetrical portrait, golden hair with ember-like highlights, heat-resistant fantasy armor with volcanic motifs, lava canyon background with glowing cracks and ash, fantasy art oil painting, intense warm palette, dramatic contrast, high detail.', '来自《塞尔达传说》的塞尔达，正面对称肖像，金发带余烬般高光，火山纹样的耐热奇幻盔甲，熔岩峡谷背景含发光裂隙与灰烬，奇幻油画风，强烈暖色调，戏剧对比，高细节。'],
  ['艾莎', 'Elsa from the animated film Frozen, front-facing symmetrical portrait, platinum blonde braid, ice-themed fantasy armor-dress with crystalline details, background of an aurora sky and shimmering ice architecture, in the style of Zelda-like fantasy art oil painting, cool luminous glow, blue-cyan palette, ultra refined detail.', '来自动画电影《冰雪奇缘》的艾莎，正面对称肖像，铂金金发编辫，冰晶细节的冰系奇幻盔甲礼裙，极光天空与闪耀冰宫建筑背景，塞尔达风奇幻油画风，冷色发光氛围，蓝青配色，超精致细节。'],
  ['路飞', 'Monkey D. Luffy from the anime One Piece, front-facing centered portrait, straw hat and confident grin, pirate outfit redesigned as fantasy seafarer armor-cloth mix, background of a sunlit harbor with sails and sparkling water, in the style of Zelda-like fantasy art oil painting, warm highlights, lively composition, high detail.', '来自动画《海贼王》的蒙奇·D·路飞，正面居中肖像，草帽与自信笑容，海盗装束改写为海行者风的布甲混搭奇幻服饰，阳光港口背景与帆影、闪光水面，塞尔达风奇幻油画风，暖色高光，灵动构图，高细节。'],
];

const articleZeldaZhCN: TutorialArticle = {
  slug: 'midjourney-zelda-style',
  title: 'Midjourney提示词——塞尔达风格（附公式）',
  intro: '用 Midjourney 生成塞尔达风格角色肖像时，可遵循「角色来源 + 正面肖像 + 发型与服装 + 背景场景 + 奇幻油画风与光照细节」的公式。下面以 LimaxAI 创造者身份整理 10 组可直接使用的提示词与通用公式，并在文中穿插效果图，供你在 LimaxAI 上一键出图。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '塞尔达风格提示词通常包含：角色（来自《塞尔达传说》或其它 IP 再以塞尔达风重绘）、正面/对称肖像、发型发色与服装盔甲、背景场景、fantasy art oil painting 及光照与细节等级。统一使用油画质感与高细节结尾，再替换角色与场景即可快速出图。文中出图版本可为 --v 7 等。' }] },
    { id: 'examples', title: '塞尔达风格提示词示例', blocks: [{ type: 'paragraph', text: '以下为 10 组可直接使用的英文提示词及对应场景描述，可在 LimaxAI 的 Midjourney 中直接输入使用。' }, { type: 'table', headers: ['角色/场景', '英文提示词', '场景描述'], rows: zeldaTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-14.webp', alt: '塞尔达风格效果图 1', caption: '效果图 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：[Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].' }, { type: 'paragraph', text: '中文对应：[角色]来自《塞尔达传说》，[情绪氛围]肖像，具有[发型/发色]与[服装/盔甲]，[背景/场景]，奇幻艺术绘画风格，油画质感，[光照]，[配色]，[细节程度]。' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-15.webp', alt: '塞尔达风格效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-16.webp', alt: '塞尔达风格效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成塞尔达风格角色图，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleZeldaZhTW: TutorialArticle = {
  slug: 'midjourney-zelda-style',
  title: 'Midjourney提示詞——塞爾達風格（附公式）',
  intro: '用 Midjourney 生成塞爾達風格角色肖像時，可遵循「角色來源 + 正面肖像 + 髮型與服裝 + 背景場景 + 奇幻油畫風與光照細節」的公式。下面以 LimaxAI 創作者身份整理 10 組可直接使用的提示詞與通用公式，並在文中穿插效果圖，供你在 LimaxAI 上一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '塞爾達風格提示詞通常包含：角色（來自《塞爾達傳說》或其它 IP 再以塞爾達風重繪）、正面/對稱肖像、髮型髮色與服裝盔甲、背景場景、fantasy art oil painting 及光照與細節等級。統一使用油畫質感與高細節結尾，再替換角色與場景即可快速出圖。文中出圖版本可為 --v 7 等。' }] },
    { id: 'examples', title: '塞爾達風格提示詞示例', blocks: [{ type: 'paragraph', text: '以下為 10 組可直接使用的英文提示詞及對應場景描述，可在 LimaxAI 的 Midjourney 中直接輸入使用。' }, { type: 'table', headers: ['角色/場景', '英文提示詞', '場景描述'], rows: zeldaTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-14.webp', alt: '塞爾達風格效果圖 1', caption: '效果圖 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：[Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].' }, { type: 'paragraph', text: '中文對應：[角色]來自《塞爾達傳說》，[情緒氛圍]肖像，具有[髮型/髮色]與[服裝/盔甲]，[背景/場景]，奇幻藝術繪畫風格，油畫質感，[光照]，[配色]，[細節程度]。' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-15.webp', alt: '塞爾達風格效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-16.webp', alt: '塞爾達風格效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成塞爾達風格角色圖，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const zeldaTableRowsEn: string[][] = [
  ['Hero (Link)', 'Link from the video game The Legend of Zelda, front-facing centered portrait, blonde hair gently tousled, green adventurer tunic and leather straps, soft morning mist forest background with sunbeams, fantasy art oil painting, delicate brushstrokes, warm light, high detail.', 'Link, blonde, green tunic, mist forest, sunbeams, oil painting.'],
  ['Ancient ruins (Zelda)', 'Zelda from the video game The Legend of Zelda, front-facing symmetrical portrait, flowing golden hair, luminous tiara, royal fantasy armor with subtle filigree, mossy ancient stone ruins with faint glowing glyphs behind, fantasy art oil painting, cinematic atmosphere, fine detail.', 'Zelda, golden hair, tiara, royal armor, ancient ruins, glyphs.'],
  ['Voyager (Link)', 'Link from the video game The Legend of Zelda, front-facing portrait, calm gaze, blonde hair, blue sailcloth cloak over fantasy armor, sea-cliff background with distant ships and sparkling waves, fantasy art oil painting, airy palette, soft highlights, ultra detailed.', 'Link, blue cloak, sea-cliff, ships and waves.'],
  ['Night traveler (Zelda)', 'Zelda from the video game The Legend of Zelda, front-facing centered portrait, soft glowing eyes, long blonde hair, celestial embroidered armor-dress, starlit grassland background with fireflies and crescent moon, fantasy art oil painting, glowing rim light, magical mood.', 'Zelda, celestial armor, starlit grassland, fireflies.'],
  ['Snow campfire (Link)', 'Link from the video game The Legend of Zelda, front-facing portrait, blonde hair with frost tips, fur-trimmed fantasy armor, snowy mountains background and a small campfire glow, fantasy art oil painting, strong warm-cold contrast, textured brushwork, high realism detail.', 'Link, frost tips, fur armor, snowy mountains, campfire.'],
  ['Tanjiro (Zelda-style)', 'Tanjiro Kamado from the anime Demon Slayer, front-facing centered portrait, kind determined eyes, checkered haori reimagined with fantasy fabric texture and subtle armor pieces, background of misty cedar forest with faint water-like light trails, in the style of Zelda-like fantasy art oil painting, cinematic light, crisp detail.', 'Tanjiro, checkered haori, cedar forest, Zelda-style oil painting.'],
  ['Link (wildflowers)', 'Link from the video game The Legend of Zelda, front-facing portrait, gentle smile, blonde hair, light fantasy armor with a small floral charm, vast wildflower field background with drifting petals, fantasy art oil painting, pastel yet vivid colors, soft depth of field.', 'Link, floral charm, wildflower field, pastel colors.'],
  ['Lava realm (Zelda)', 'Zelda from the video game The Legend of Zelda, front-facing symmetrical portrait, golden hair with ember-like highlights, heat-resistant fantasy armor with volcanic motifs, lava canyon background with glowing cracks and ash, fantasy art oil painting, intense warm palette, dramatic contrast, high detail.', 'Zelda, volcanic armor, lava canyon.'],
  ['Elsa (Zelda-style)', 'Elsa from the animated film Frozen, front-facing symmetrical portrait, platinum blonde braid, ice-themed fantasy armor-dress with crystalline details, background of an aurora sky and shimmering ice architecture, in the style of Zelda-like fantasy art oil painting, cool luminous glow, blue-cyan palette, ultra refined detail.', 'Elsa, ice armor-dress, aurora and ice architecture, Zelda-style.'],
  ['Luffy (Zelda-style)', 'Monkey D. Luffy from the anime One Piece, front-facing centered portrait, straw hat and confident grin, pirate outfit redesigned as fantasy seafarer armor-cloth mix, background of a sunlit harbor with sails and sparkling water, in the style of Zelda-like fantasy art oil painting, warm highlights, lively composition, high detail.', 'Luffy, straw hat, seafarer armor, harbor, Zelda-style.'],
];

const articleZeldaEn: TutorialArticle = {
  slug: 'midjourney-zelda-style',
  title: 'Midjourney: Zelda-Style Prompts (with Formula)',
  intro: 'To get Zelda-style character portraits with Midjourney, follow the pattern: character source + front-facing portrait + hair and outfit + background scene + fantasy oil painting and lighting. Below we share 10 ready-to-use prompts and a general formula, with sample images, so you can create on LimaxAI in one click.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Zelda-style prompts usually include: character (from The Legend of Zelda or other IP reimagined in Zelda style), front-facing or symmetrical portrait, hair and outfit/armor, background scene, fantasy art oil painting, and lighting/detail level. Use oil painting and high detail consistently, then swap character and scene for fast results. Output can use --v 7 or similar.' }] },
    { id: 'examples', title: 'Example prompts', blocks: [{ type: 'paragraph', text: 'Here are 10 English prompts and short scene descriptions you can use directly in Midjourney on LimaxAI.' }, { type: 'table', headers: ['Character/Scene', 'English prompt', 'Scene description'], rows: zeldaTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-14.webp', alt: 'Zelda-style sample 1', caption: 'Sample 1' }] },
    { id: 'formula', title: 'General formula', blocks: [{ type: 'paragraph', text: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].' }, { type: 'paragraph', text: 'Pattern: [Character] + [mood] portrait, [hair], [outfit], [background], fantasy art oil painting, [lighting], [palette], [detail].' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-15.webp', alt: 'Zelda-style sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-16.webp', alt: 'Zelda-style sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 红色警戒提示词表格：兵种/单位 | 英文提示词 | 场景描述 */
const redAlertTableRowsZh: string[][] = [
  ['美国大兵', 'Red Alert, an American Soldier with an assault rifle in a combat stance, standing in a war-torn city, photograph, 16K, modern military, camouflaged uniform, urban warfare, intense atmosphere, action-packed, detailed textures, vibrant color scheme, ultra-detailed, best quality', '持突击步枪的美国大兵，战火城市，迷彩制服，城市战斗，16K照片。'],
  ['重装大兵', 'Red Alert, a Heavy Infantryman wearing a bulky armored suit, ready for battle, standing in the middle of a destroyed battlefield, photograph, 16K, industrial military, reinforced armor, mechanical details, dark color tones, action-ready, strong presence, ultra-detailed, best quality', '厚重装甲重装大兵，被毁战场中央，工业军事风格，16K。'],
  ['工程师', 'Red Alert, an Engineer with a repair tool and a construction helmet, standing beside a damaged vehicle, photograph, 16K, steampunk style, mechanic aesthetic, practical tools, industrial elements, muted tones, detailed textures, ultra-detailed, best quality', '修理工具与施工头盔，损坏车辆旁，蒸汽朋克风格，16K。'],
  ['火箭飞行兵', 'Red Alert, a Rocket Flying Soldier with a jetpack, flying over a burning battlefield, photograph, 16K, futuristic military, jet propulsion, aerial warfare, vibrant explosions, high-tech details, intense motion, ultra-detailed, best quality', '喷气背包火箭飞行兵，飞越燃烧战场，未来军事，16K。'],
  ['海豹部队', 'Red Alert, a Navy SEAL Soldier in full tactical gear, underwater with a rifle, in a submerged base, photograph, 16K, stealth military, dark water tones, high-tech weaponry, tactical precision, intense focus, ultra-detailed, best quality', '全副武装海豹部队，水下持枪，水下基地，隐秘军事，16K。'],
  ['超时空军团兵', 'Red Alert, a Temporal Soldier with advanced futuristic armor, standing in a warping dimension, photograph, 16K, sci-fi military, time travel technology, glowing effects, dark and vibrant colors, intense atmosphere, ultra-detailed, best quality', '未来盔甲超时空军团兵，扭曲时空，科幻军事，16K。'],
  ['动员兵', 'Red Alert, a Mobilization Soldier with basic combat gear, running through a battlefield, photograph, 16K, modern military, rapid deployment, urban conflict, tactical readiness, motion blur effects, vibrant colors, ultra-detailed, best quality', '简易装备动员兵，奔跑穿越战场，现代军事，动态模糊，16K。'],
  ['防空步兵', 'Red Alert, an Anti-Air Infantryman with a missile launcher, aiming at an incoming aircraft, photograph, 16K, modern military, defensive posture, air defense systems, clear sky backdrop, powerful weaponry, ultra-detailed, best quality', '导弹发射器防空步兵，瞄准来袭飞机，天空背景，16K。'],
  ['磁暴步兵', 'Red Alert, a Magnetic Storm Infantryman with a magnetic field weapon, surrounded by sparks and debris, photograph, 16K, futuristic military, magnetic energy, destructive force, vibrant sparks, intense atmosphere, ultra-detailed, best quality', '磁场武器磁暴步兵，火花与碎片环绕，未来军事，16K。'],
  ['辐射工兵', 'Red Alert, a Radiation Engineer with a Radiation gun standing around while surrounded by some buildings, photograph, 16K, steampunk, mimicking ruined materials, green and gray, clockpunk, flicker effects, nonrepresentational, Detailed color details, complex details, best quality, ultra detailed, super detailed', '辐射枪辐射工兵，废墟建筑间，蒸汽朋克绿灰色调，16K。'],
  ['恐怖机器人', 'Red Alert, a Terror Robot with menacing features, walking through a burning city, photograph, 16K, industrial design, robotic weapons, dark colors, fiery explosion background, menacing posture, ultra-detailed, best quality', '威胁外形恐怖机器人，走过燃烧城市，工业设计，16K。'],
  ['尤里新兵', 'Red Alert, a Yuri New Recruit with a mind control device, standing in a dark laboratory, photograph, 16K, psychic military, futuristic weaponry, eerie atmosphere, glowing mind-control effects, ultra-detailed, best quality', '心灵控制装置尤里新兵，昏暗实验室，心灵军事风格，16K。'],
  ['狂兽人', 'Red Alert, a Beastman with muscular build and fur, wielding a large club, charging through a forest, photograph, 16K, barbaric military, primal energy, intense action, earthy tones, ultra-detailed, best quality', '肌肉皮毛狂兽人，巨棒冲锋森林，野蛮军事，16K。'],
  ['病毒狙击手', 'Red Alert, a Virus Sniper with a long-range rifle, aiming from a high vantage point, photograph, 16K, stealth military, deadly precision, viral atmosphere, dark and green tones, ultra-detailed, best quality', '长程狙击枪病毒狙击手，高处瞄准，隐秘军事，16K。'],
  ['尤里X', 'Red Alert, a Yuri X Soldier with psychic powers, wearing futuristic armor, walking through a war-torn city, photograph, 16K, psychic warfare, high-tech armor, glowing energy effects, intense atmosphere, ultra-detailed, best quality', '心灵力量尤里X，未来盔甲，战火城市，心灵战争，16K。'],
  ['多功能步兵车', 'Red Alert, a Multi-Function Infantry Vehicle rolling through a battlefield, photograph, 16K, military vehicle, versatile design, armored protection, off-road capabilities, dusty background, ultra-detailed, best quality', '多功能步兵车穿越战场，军事车辆，尘土背景，16K。'],
  ['幻影坦克', 'Red Alert, a Phantom TK with cloaking abilities, standing in a shadowy alley, photograph, 16K, stealth technology, invisible silhouette, dark tactical armor, mysterious ambiance, ultra-detailed, best quality', '隐形能力幻影坦克，阴影小巷，隐秘技术，16K。'],
  ['天启坦克', 'Red Alert, an Apocalypse TK with a heavy cannon, standing in a ruined city, photograph, 16K, apocalyptic military, devastating weapons, fiery background, intense battle aura, ultra-detailed, best quality', '重型加农炮天启坦克，废墟城市，末日军事，16K。'],
  ['磁能坦克', 'Red Alert, a Magnetic TK with a powerful magnet weapon, levitating metallic debris, photograph, 16K, futuristic military, magnetic energy, levitation effects, intense motion, ultra-detailed, best quality', '磁场武器磁能坦克，悬浮金属碎片，未来军事，16K。'],
  ['基洛夫飞艇', 'Red Alert, a Kirov Airship soaring over a battlefield, photograph, 16K, heavy airship, armored structure, sky warfare, explosive clouds, intense air combat, ultra-detailed, best quality', '基洛夫飞艇翱翔战场上空，重型飞艇，空战，16K。'],
  ['自爆卡车', 'Red Alert, a Suicide Truck loaded with explosives, driving towards an enemy base, photograph, 16K, chaotic warfare, deadly impact, fiery explosions, heavy machinery, ultra-detailed, best quality', '载满爆炸物自爆卡车驶向敌方基地，混乱战争，16K。'],
];

const articleRedAlertZhCN: TutorialArticle = {
  slug: 'midjourney-red-alert',
  title: 'Midjourney提示词——红色警戒（附公式）',
  intro: '用 Midjourney 生成红色警戒风格画面时，可遵循「Red Alert + 兵种 + 装备与姿态 + 场景 + photograph 16K + 风格与细节」的公式。下面以 LimaxAI 身份整理 21 组可直接使用的提示词与通用公式，并在文中穿插效果图，供你在 LimaxAI 上一键出图。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '红色警戒类提示词通常以 Red Alert 开头，包含兵种/单位、装备描述、动作或姿态、场景（战场、城市、实验室等）、photograph 与 16K 分辨率，以及风格关键词（现代军事、蒸汽朋克、科幻等）和 ultra-detailed, best quality 结尾。文中出图版本可为 v7；因 MJ 未专门训练该 IP，画面为模型根据描述理解生成。' }] },
    { id: 'examples', title: '红色警戒提示词示例', blocks: [{ type: 'paragraph', text: '以下为 21 组可直接使用的英文提示词及对应场景描述，可在 LimaxAI 的 Midjourney 中直接输入使用。' }, { type: 'table', headers: ['兵种/单位', '英文提示词', '场景描述'], rows: redAlertTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-20.webp', alt: '红色警戒效果图 1', caption: '效果图 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：Red Alert, a [兵种] with [装备], [描述], photograph, 16K, [风格], [细节], [特效], [配色], ultra-detailed, best quality' }, { type: 'paragraph', text: '中文对应：红色警戒，一个[兵种]带有[装备]，[动作/场景描述]，照片，16K，[风格]，[细节]，[特效]，[配色]，超高清，最佳画质。' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-21.webp', alt: '红色警戒效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-22.webp', alt: '红色警戒效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成红色警戒风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleRedAlertZhTW: TutorialArticle = {
  slug: 'midjourney-red-alert',
  title: 'Midjourney提示詞——紅色警戒（附公式）',
  intro: '用 Midjourney 生成紅色警戒風格畫面時，可遵循「Red Alert + 兵種 + 裝備與姿態 + 場景 + photograph 16K + 風格與細節」的公式。下面以 LimaxAI 身份整理 21 組可直接使用的提示詞與通用公式，並在文中穿插效果圖，供你在 LimaxAI 上一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '紅色警戒類提示詞通常以 Red Alert 開頭，包含兵種/單位、裝備描述、動作或姿態、場景（戰場、城市、實驗室等）、photograph 與 16K 解析度，以及風格關鍵詞（現代軍事、蒸汽朋克、科幻等）和 ultra-detailed, best quality 結尾。文中出圖版本可為 v7；因 MJ 未專門訓練該 IP，畫面為模型根據描述理解生成。' }] },
    { id: 'examples', title: '紅色警戒提示詞示例', blocks: [{ type: 'paragraph', text: '以下為 21 組可直接使用的英文提示詞及對應場景描述，可在 LimaxAI 的 Midjourney 中直接輸入使用。' }, { type: 'table', headers: ['兵種/單位', '英文提示詞', '場景描述'], rows: redAlertTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-20.webp', alt: '紅色警戒效果圖 1', caption: '效果圖 1' }] },
    { id: 'formula', title: '通用公式', blocks: [{ type: 'paragraph', text: '英文公式：Red Alert, a [兵種] with [裝備], [描述], photograph, 16K, [風格], [細節], [特效], [配色], ultra-detailed, best quality' }, { type: 'paragraph', text: '中文對應：紅色警戒，一個[兵種]帶有[裝備]，[動作/場景描述]，照片，16K，[風格]，[細節]，[特效]，[配色]，超高清，最佳畫質。' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-21.webp', alt: '紅色警戒效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-22.webp', alt: '紅色警戒效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成紅色警戒風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const redAlertTableRowsEn: string[][] = [
  ['American Soldier', 'Red Alert, an American Soldier with an assault rifle in a combat stance, standing in a war-torn city, photograph, 16K, modern military, camouflaged uniform, urban warfare, intense atmosphere, action-packed, detailed textures, vibrant color scheme, ultra-detailed, best quality', 'Assault rifle, war-torn city, camouflaged, 16K.'],
  ['Heavy Infantryman', 'Red Alert, a Heavy Infantryman wearing a bulky armored suit, ready for battle, standing in the middle of a destroyed battlefield, photograph, 16K, industrial military, reinforced armor, mechanical details, dark color tones, action-ready, strong presence, ultra-detailed, best quality', 'Bulky armor, destroyed battlefield, 16K.'],
  ['Engineer', 'Red Alert, an Engineer with a repair tool and a construction helmet, standing beside a damaged vehicle, photograph, 16K, steampunk style, mechanic aesthetic, practical tools, industrial elements, muted tones, detailed textures, ultra-detailed, best quality', 'Repair tool, damaged vehicle, steampunk, 16K.'],
  ['Rocket Flying Soldier', 'Red Alert, a Rocket Flying Soldier with a jetpack, flying over a burning battlefield, photograph, 16K, futuristic military, jet propulsion, aerial warfare, vibrant explosions, high-tech details, intense motion, ultra-detailed, best quality', 'Jetpack over burning battlefield, 16K.'],
  ['Navy SEAL', 'Red Alert, a Navy SEAL Soldier in full tactical gear, underwater with a rifle, in a submerged base, photograph, 16K, stealth military, dark water tones, high-tech weaponry, tactical precision, intense focus, ultra-detailed, best quality', 'Underwater, submerged base, 16K.'],
  ['Temporal Soldier', 'Red Alert, a Temporal Soldier with advanced futuristic armor, standing in a warping dimension, photograph, 16K, sci-fi military, time travel technology, glowing effects, dark and vibrant colors, intense atmosphere, ultra-detailed, best quality', 'Warping dimension, sci-fi, 16K.'],
  ['Mobilization Soldier', 'Red Alert, a Mobilization Soldier with basic combat gear, running through a battlefield, photograph, 16K, modern military, rapid deployment, urban conflict, tactical readiness, motion blur effects, vibrant colors, ultra-detailed, best quality', 'Running through battlefield, motion blur, 16K.'],
  ['Anti-Air Infantryman', 'Red Alert, an Anti-Air Infantryman with a missile launcher, aiming at an incoming aircraft, photograph, 16K, modern military, defensive posture, air defense systems, clear sky backdrop, powerful weaponry, ultra-detailed, best quality', 'Missile launcher, aiming at aircraft, 16K.'],
  ['Magnetic Storm Infantryman', 'Red Alert, a Magnetic Storm Infantryman with a magnetic field weapon, surrounded by sparks and debris, photograph, 16K, futuristic military, magnetic energy, destructive force, vibrant sparks, intense atmosphere, ultra-detailed, best quality', 'Magnetic weapon, sparks and debris, 16K.'],
  ['Radiation Engineer', 'Red Alert, a Radiation Engineer with a Radiation gun standing around while surrounded by some buildings, photograph, 16K, steampunk, mimicking ruined materials, green and gray, clockpunk, flicker effects, nonrepresentational, Detailed color details, complex details, best quality, ultra detailed, super detailed', 'Radiation gun, ruined buildings, steampunk, 16K.'],
  ['Terror Robot', 'Red Alert, a Terror Robot with menacing features, walking through a burning city, photograph, 16K, industrial design, robotic weapons, dark colors, fiery explosion background, menacing posture, ultra-detailed, best quality', 'Menacing robot, burning city, 16K.'],
  ['Yuri New Recruit', 'Red Alert, a Yuri New Recruit with a mind control device, standing in a dark laboratory, photograph, 16K, psychic military, futuristic weaponry, eerie atmosphere, glowing mind-control effects, ultra-detailed, best quality', 'Mind control device, dark lab, 16K.'],
  ['Beastman', 'Red Alert, a Beastman with muscular build and fur, wielding a large club, charging through a forest, photograph, 16K, barbaric military, primal energy, intense action, earthy tones, ultra-detailed, best quality', 'Large club, charging through forest, 16K.'],
  ['Virus Sniper', 'Red Alert, a Virus Sniper with a long-range rifle, aiming from a high vantage point, photograph, 16K, stealth military, deadly precision, viral atmosphere, dark and green tones, ultra-detailed, best quality', 'Long-range rifle, high vantage, 16K.'],
  ['Yuri X Soldier', 'Red Alert, a Yuri X Soldier with psychic powers, wearing futuristic armor, walking through a war-torn city, photograph, 16K, psychic warfare, high-tech armor, glowing energy effects, intense atmosphere, ultra-detailed, best quality', 'Psychic powers, futuristic armor, war-torn city, 16K.'],
  ['Multi-Function Infantry Vehicle', 'Red Alert, a Multi-Function Infantry Vehicle rolling through a battlefield, photograph, 16K, military vehicle, versatile design, armored protection, off-road capabilities, dusty background, ultra-detailed, best quality', 'Vehicle rolling through battlefield, 16K.'],
  ['Phantom TK', 'Red Alert, a Phantom TK with cloaking abilities, standing in a shadowy alley, photograph, 16K, stealth technology, invisible silhouette, dark tactical armor, mysterious ambiance, ultra-detailed, best quality', 'Cloaking, shadowy alley, 16K.'],
  ['Apocalypse TK', 'Red Alert, an Apocalypse TK with a heavy cannon, standing in a ruined city, photograph, 16K, apocalyptic military, devastating weapons, fiery background, intense battle aura, ultra-detailed, best quality', 'Heavy cannon, ruined city, 16K.'],
  ['Magnetic TK', 'Red Alert, a Magnetic TK with a powerful magnet weapon, levitating metallic debris, photograph, 16K, futuristic military, magnetic energy, levitation effects, intense motion, ultra-detailed, best quality', 'Magnet weapon, levitating debris, 16K.'],
  ['Kirov Airship', 'Red Alert, a Kirov Airship soaring over a battlefield, photograph, 16K, heavy airship, armored structure, sky warfare, explosive clouds, intense air combat, ultra-detailed, best quality', 'Airship over battlefield, 16K.'],
  ['Suicide Truck', 'Red Alert, a Suicide Truck loaded with explosives, driving towards an enemy base, photograph, 16K, chaotic warfare, deadly impact, fiery explosions, heavy machinery, ultra-detailed, best quality', 'Explosives truck toward enemy base, 16K.'],
];

const articleRedAlertEn: TutorialArticle = {
  slug: 'midjourney-red-alert',
  title: 'Midjourney: Red Alert Prompts (with Formula)',
  intro: 'To get Red Alert–style images with Midjourney, follow the pattern: Red Alert + unit type + gear and pose + scene + photograph 16K + style and details. Below we share 21 ready-to-use prompts and a general formula, with sample images, so you can create on LimaxAI in one click.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Red Alert prompts usually start with Red Alert, then include unit type, gear description, action or pose, scene (battlefield, city, lab, etc.), photograph and 16K resolution, plus style keywords (modern military, steampunk, sci-fi, etc.) and end with ultra-detailed, best quality. Output can use v7; since MJ has not been trained on this IP specifically, images are generated from the description.' }] },
    { id: 'examples', title: 'Example prompts', blocks: [{ type: 'paragraph', text: 'Here are 21 English prompts and short scene descriptions you can use directly in Midjourney on LimaxAI.' }, { type: 'table', headers: ['Unit', 'English prompt', 'Scene description'], rows: redAlertTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-20.webp', alt: 'Red Alert sample 1', caption: 'Sample 1' }] },
    { id: 'formula', title: 'General formula', blocks: [{ type: 'paragraph', text: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality' }, { type: 'paragraph', text: 'Pattern: Red Alert + [unit], [gear], [action/scene], photograph, 16K, [style], [details], [effects], [colors], ultra-detailed, best quality.' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-21.webp', alt: 'Red Alert sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-22.webp', alt: 'Red Alert sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 20种构图方式：构图类型 | 英文提示词 | 中文说明 */
const composition20TableRowsZh: string[][] = [
  ['仰视构图', 'Iron Man standing tall in low-angle composition, dynamic perspective, glowing arc reactor, cinematic lighting, bold hand‑drawn comic style, clean background, muted tones', '钢铁侠仰视构图，低角度视角，动态透视，胸口方舟反应炉发光，电影光影，手绘漫画风格，粗线条，干净背景，柔和色调'],
  ['正面居中构图', 'Captain America centered portrait, direct gaze, soft cinematic lighting, minimal background, bold outlines, hand‑drawn comic style', '美国队长正面居中肖像，直视镜头，柔和电影光影，简约背景，粗线条手绘漫画风格'],
  ['逆光剪影构图', 'Thor heroic silhouette against golden sunset, glowing outline, strong contrast, painterly texture, clean minimal background', '雷神托尔逆光剪影构图，金色夕阳背景，发光轮廓，强烈光影对比，手绘质感，简洁背景'],
  ['俯视透视构图', 'Spider‑Man seen from above the city, dynamic perspective, sense of height, motion blur, bold comic lines, cinematic palette, white background', '蜘蛛侠城市俯视视角，动态透视，高空感，动作模糊，手绘漫画粗线条，电影色调，白色背景'],
  ['三分法特写', 'Black Widow close-up framed by rule of thirds, subtle expression, cinematic focus depth, bold contour lines, clean white background, soft muted tones', '黑寡妇三分法特写，神情细腻，电影景深，粗线条轮廓，干净白色背景，柔和色调'],
  ['镜面反射构图', 'Doctor Strange looking into reflective mirror portal, symmetrical reflection, glowing mystical rune patterns, bold outlines, cinematic palette, clean composition', '奇异博士凝视魔法镜面之门，对称反射，发光符文图案，粗线条，电影色调，干净构图'],
  ['动态模糊构图', 'Quicksilver running in side‑angle dynamic pose, motion blur trails, glowing energy lines, bold outlines, minimal cinematic palette, clean backdrop', '快银侧面奔跑姿势，动态模糊能量轨迹，发光能量线条，粗线条漫画风，简洁电影色调背景'],
  ['环境取景构图', 'Hulk framed by broken architecture, rubble forming natural frame, bold comic line art, muted green cinematic palette, clean atmospheric background', '浩克被破碎建筑包裹成框景，自然取景构图，漫画粗线条，绿色电影色调，干净氛围背景'],
  ['极简留白构图', 'Scarlet Witch small figure in vast white negative space, subtle red aura, soft cinematic light, minimalist comic style', '猩红女巫置于大量白色留白中，细微红色能量光环，柔和电影光影，极简漫画风格'],
  ['对角引导线构图', 'Black Panther dynamic diagonal composition, posing along slanted lighting ray, metallic reflections, bold outlines, cinematic palette, clean dramatic framing', '黑豹沿对角光线摆姿势，对角线构图，金属反光质感，粗线条，电影色调，干净戏剧化构图'],
  ['英雄背光半身构图', 'Iron Man half‑length portrait with strong backlight glow, subtle rim lighting, cinematic composition, bold comic lines, clean white background', '钢铁侠背光半身构图，强烈背光与轮廓光，电影构图，漫画粗线条，干净白色背景'],
  ['英雄局部细节构图', 'Captain America close crop of shield and hand, detailed textures, cinematic macro style, bold outlines, clean minimalist backdrop', '美国队长盾牌与手的特写，细节质感丰富，电影微距风格，粗线条，简洁背景'],
  ['英雄悬浮中心构图', 'Doctor Strange levitating at center, swirling magic energy around, radial composition, bold hand‑drawn style, clean bright background', '奇异博士悬浮于画面中心，魔法能量环绕，放射式构图，手绘漫画风，明亮干净背景'],
  ['英雄对角俯冲构图', 'Spider‑Man diving diagonally across frame, motion perspective, dynamic composition, bold comic lines, cinematic palette, clean white space', '蜘蛛侠沿对角线俯冲，动态透视，动感构图，漫画粗线条，电影色调，干净留白空间'],
  ['光影遮蔽构图', 'Black Widow half face in shadow, high contrast cinematic lighting, moody hand‑drawn comic style, clean minimal background', '黑寡妇半张脸隐于阴影，高对比电影光影，情绪化漫画风格，干净简约背景'],
  ['英雄俯身地面构图', 'Thor kneeling with hammer touching ground, low dramatic composition, cinematic shadows, bold comic line art, clean atmospheric backdrop', '雷神托尔跪地，雷锤触地，低角度戏剧性构图，电影暗影，漫画粗线条，干净氛围背景'],
  ['英雄透框构图', 'Captain Marvel viewed through circular frame of glowing energy, centered composition, vivid light ring, bold outlines, clean background', '惊奇队长通过发光能量环框取景，居中构图，鲜亮光环，漫画粗线条，干净背景'],
  ['英雄侧背视构图', 'Black Panther seen from back with turned head, elegant posture, cinematic rim light, bold comic style, white clear backdrop', '黑豹背面视角，头部轻微转向，姿态优雅，电影轮廓光，漫画风格，白色干净背景'],
  ['英雄低饱和广景构图', 'Hulk in vast misty field, small figure composition, muted green palette, cinematic atmosphere, bold outlines, clean airy space', '浩克站在广阔迷雾原野，小人物构图，低饱和绿色色调，电影氛围，漫画粗线条，清新留白空间'],
  ['英雄镜头近距凝视构图', 'Scarlet Witch intense eye contact close‑up, focused lighting, cinematic blur, hand‑drawn comic expression, clean white background', '猩红女巫近距离凝视特写，聚焦光效，电影虚化，手绘漫画表情，白色干净背景'],
];

const composition20TableRowsEn: string[][] = [
  ['Low-angle', 'Iron Man standing tall in low-angle composition, dynamic perspective, glowing arc reactor, cinematic lighting, bold hand‑drawn comic style, clean background, muted tones', 'Low angle, dynamic perspective, arc reactor glow, cinematic lighting, comic style.'],
  ['Centered portrait', 'Captain America centered portrait, direct gaze, soft cinematic lighting, minimal background, bold outlines, hand‑drawn comic style', 'Centered portrait, direct gaze, soft lighting, minimal background, comic style.'],
  ['Silhouette backlight', 'Thor heroic silhouette against golden sunset, glowing outline, strong contrast, painterly texture, clean minimal background', 'Silhouette against golden sunset, glowing outline, strong contrast.'],
  ['Bird\'s-eye view', 'Spider‑Man seen from above the city, dynamic perspective, sense of height, motion blur, bold comic lines, cinematic palette, white background', 'View from above city, height, motion blur, comic lines, cinematic palette.'],
  ['Rule of thirds close-up', 'Black Widow close-up framed by rule of thirds, subtle expression, cinematic focus depth, bold contour lines, clean white background, soft muted tones', 'Close-up, rule of thirds, subtle expression, cinematic depth.'],
  ['Mirror reflection', 'Doctor Strange looking into reflective mirror portal, symmetrical reflection, glowing mystical rune patterns, bold outlines, cinematic palette, clean composition', 'Mirror portal, symmetrical reflection, rune patterns, clean composition.'],
  ['Motion blur', 'Quicksilver running in side‑angle dynamic pose, motion blur trails, glowing energy lines, bold outlines, minimal cinematic palette, clean backdrop', 'Side-angle run, motion blur trails, energy lines, comic style.'],
  ['Framed by environment', 'Hulk framed by broken architecture, rubble forming natural frame, bold comic line art, muted green cinematic palette, clean atmospheric background', 'Framed by broken architecture, natural frame, green cinematic palette.'],
  ['Negative space', 'Scarlet Witch small figure in vast white negative space, subtle red aura, soft cinematic light, minimalist comic style', 'Small figure in vast white space, red aura, minimalist comic style.'],
  ['Diagonal leading line', 'Black Panther dynamic diagonal composition, posing along slanted lighting ray, metallic reflections, bold outlines, cinematic palette, clean dramatic framing', 'Diagonal composition, slanted light, metallic reflections, dramatic framing.'],
  ['Backlit half-length', 'Iron Man half‑length portrait with strong backlight glow, subtle rim lighting, cinematic composition, bold comic lines, clean white background', 'Half-length, backlight glow, rim lighting, comic lines.'],
  ['Detail close crop', 'Captain America close crop of shield and hand, detailed textures, cinematic macro style, bold outlines, clean minimalist backdrop', 'Close crop shield and hand, macro style, detailed textures.'],
  ['Floating center', 'Doctor Strange levitating at center, swirling magic energy around, radial composition, bold hand‑drawn style, clean bright background', 'Levitating center, swirling magic, radial composition.'],
  ['Diagonal dive', 'Spider‑Man diving diagonally across frame, motion perspective, dynamic composition, bold comic lines, cinematic palette, clean white space', 'Diagonal dive, motion perspective, dynamic composition.'],
  ['Half-face shadow', 'Black Widow half face in shadow, high contrast cinematic lighting, moody hand‑drawn comic style, clean minimal background', 'Half face in shadow, high contrast, moody comic style.'],
  ['Low kneeling', 'Thor kneeling with hammer touching ground, low dramatic composition, cinematic shadows, bold comic line art, clean atmospheric backdrop', 'Kneeling, hammer on ground, low angle, dramatic shadows.'],
  ['Circular frame', 'Captain Marvel viewed through circular frame of glowing energy, centered composition, vivid light ring, bold outlines, clean background', 'Viewed through circular energy frame, vivid light ring.'],
  ['Back view with turn', 'Black Panther seen from back with turned head, elegant posture, cinematic rim light, bold comic style, white clear backdrop', 'Back view, turned head, rim light, elegant posture.'],
  ['Wide desaturated', 'Hulk in vast misty field, small figure composition, muted green palette, cinematic atmosphere, bold outlines, clean airy space', 'Small figure in vast misty field, muted green, atmospheric.'],
  ['Extreme close-up gaze', 'Scarlet Witch intense eye contact close‑up, focused lighting, cinematic blur, hand‑drawn comic expression, clean white background', 'Intense eye contact close-up, focused lighting, cinematic blur.'],
];

const articleComposition20ZhCN: TutorialArticle = {
  slug: 'midjourney-composition-20',
  title: 'Midjourney提示词——20种不同构图方式',
  intro: '本文整理用 Midjourney 生成 20 种不同构图方式的提示词。为区分视觉效果，构图中人物统一为漫威超级英雄，出图比例统一 9:16，版本 V7。以下提示词可在 LimaxAI 的 Midjourney 中直接使用。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '构图决定了画面的视角、重心与氛围。掌握多种构图方式能让 AI 出图更稳定、风格更可控。本文按「构图类型 + 英文提示词 + 中文说明」整理 20 组可直接使用的 Midjourney 提示词，便于你在 LimaxAI 上一键出图。' }] },
    { id: 'examples', title: '20 种构图提示词', blocks: [{ type: 'paragraph', text: '下表为 20 种构图方式对应的英文提示词及简要说明，可直接复制到 LimaxAI 的 Midjourney 中使用。' }, { type: 'table', headers: ['构图方式', '英文提示词', '中文说明'], rows: composition20TableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-23.webp', alt: 'Midjourney 构图效果图 1', caption: '效果图 1' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-24.webp', alt: 'Midjourney 构图效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-25.webp', alt: 'Midjourney 构图效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成各类构图画面，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleComposition20ZhTW: TutorialArticle = {
  slug: 'midjourney-composition-20',
  title: 'Midjourney提示詞——20種不同構圖方式',
  intro: '本文整理用 Midjourney 生成 20 種不同構圖方式的提示詞。為區分視覺效果，構圖中人物統一為漫威超級英雄，出圖比例統一 9:16，版本 V7。以下提示詞可在 LimaxAI 的 Midjourney 中直接使用。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '構圖決定了畫面的視角、重心與氛圍。掌握多種構圖方式能讓 AI 出圖更穩定、風格更可控。本文按「構圖類型 + 英文提示詞 + 中文說明」整理 20 組可直接使用的 Midjourney 提示詞，便於你在 LimaxAI 上一鍵出圖。' }] },
    { id: 'examples', title: '20 種構圖提示詞', blocks: [{ type: 'paragraph', text: '下表為 20 種構圖方式對應的英文提示詞及簡要說明，可直接複製到 LimaxAI 的 Midjourney 中使用。' }, { type: 'table', headers: ['構圖方式', '英文提示詞', '中文說明'], rows: composition20TableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-23.webp', alt: 'Midjourney 構圖效果圖 1', caption: '效果圖 1' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-24.webp', alt: 'Midjourney 構圖效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-25.webp', alt: 'Midjourney 構圖效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成各類構圖畫面，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const articleComposition20En: TutorialArticle = {
  slug: 'midjourney-composition-20',
  title: 'Midjourney: 20 Composition Types (with Prompts)',
  intro: 'This guide lists Midjourney prompts for 20 different composition types. For consistency, all figures use Marvel superheroes, aspect ratio 9:16, and version V7. You can use these prompts directly in Midjourney on LimaxAI.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'Composition defines perspective, focus, and mood. Mastering multiple composition types helps you get more consistent and controllable AI images. Below are 20 ready-to-use Midjourney prompts by composition type, so you can create on LimaxAI in one click.' }] },
    { id: 'examples', title: '20 composition prompts', blocks: [{ type: 'paragraph', text: 'The table below lists 20 composition types with English prompts and short descriptions. Copy and paste into Midjourney on LimaxAI to try them.' }, { type: 'table', headers: ['Composition', 'English prompt', 'Description'], rows: composition20TableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-23.webp', alt: 'Midjourney composition sample 1', caption: 'Sample 1' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-24.webp', alt: 'Midjourney composition sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-25.webp', alt: 'Midjourney composition sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 20种构图教程各语种文案（其余语种用英文表格） */
interface Composition20ArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string, string];
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const composition20CopyByLocale: Record<string, Composition20ArticleCopy> = {
  es: { title: 'Midjourney: 20 tipos de composición (con prompts)', intro: 'Esta guía recopila prompts de Midjourney para 20 tipos de composición. Para coherencia, las figuras usan superhéroes Marvel, relación 9:16 y versión V7. Puedes usar estos prompts en Midjourney en LimaxAI.', overviewTitle: 'Resumen', overviewText: 'La composición define perspectiva, foco y ambiente. Dominar varios tipos ayuda a obtener imágenes más consistentes. Aquí tienes 20 prompts listos por tipo de composición para crear en LimaxAI.', examplesTitle: '20 prompts de composición', examplesIntro: 'La tabla lista 20 tipos con prompts en inglés y descripción breve. Cópialos en Midjourney en LimaxAI.', tableHeaders: ['Composición', 'Prompt en inglés', 'Descripción'], imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN, una cuenta para varias herramientas.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: 20 نوع تركيب (مع أوامر)', intro: 'هذا الدليل يجمع أوامر Midjourney لـ 20 نوع تركيب. للاتساق، الشخصيات من مارفل، نسبة 9:16 وإصدار V7. يمكنك استخدام هذه الأوامر في Midjourney على LimaxAI.', overviewTitle: 'نظرة عامة', overviewText: 'التركيب يحدد المنظور والتركيز والمزاج. إتقان أنواع متعددة يساعد في الحصول على صور أكثر اتساقاً. فيما يلي 20 أمراً جاهزاً حسب نوع التركيب.', examplesTitle: '20 أمر تركيب', examplesIntro: 'الجدول يدرج 20 نوعاً مع أوامر إنجليزية ووصف قصير. انسخها في Midjourney على LimaxAI.', tableHeaders: ['التركيب', 'الأمر بالإنجليزية', 'الوصف'], imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN، حساب واحد لأدوات متعددة.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: 20 tipos de composição (com prompts)', intro: 'Este guia lista prompts do Midjourney para 20 tipos de composição. Para consistência, as figuras usam super-heróis Marvel, proporção 9:16 e versão V7. Use estes prompts no Midjourney no LimaxAI.', overviewTitle: 'Visão geral', overviewText: 'Composição define perspectiva, foco e clima. Dominar vários tipos ajuda a obter imagens mais consistentes. Abaixo, 20 prompts prontos por tipo de composição.', examplesTitle: '20 prompts de composição', examplesIntro: 'A tabela lista 20 tipos com prompts em inglês e descrição. Copie no Midjourney no LimaxAI.', tableHeaders: ['Composição', 'Prompt em inglês', 'Descrição'], imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN, uma conta para várias ferramentas.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: 20 jenis komposisi (dengan prompt)', intro: 'Panduan ini berisi prompt Midjourney untuk 20 jenis komposisi. Untuk konsistensi, figur memakai superhero Marvel, rasio 9:16, versi V7. Gunakan prompt ini di Midjourney di LimaxAI.', overviewTitle: 'Ringkasan', overviewText: 'Komposisi menentukan perspektif, fokus, dan suasana. Menguasai berbagai jenis membantu hasil gambar AI lebih konsisten. Berikut 20 prompt siap pakai per jenis komposisi.', examplesTitle: '20 prompt komposisi', examplesIntro: 'Tabel berikut berisi 20 jenis dengan prompt bahasa Inggris dan deskripsi singkat. Salin ke Midjourney di LimaxAI.', tableHeaders: ['Komposisi', 'Prompt bahasa Inggris', 'Deskripsi'], imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akun untuk banyak alat.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: 20 jenis komposisi (dengan prompt)', intro: 'Panduan ini menyenaraikan prompt Midjourney untuk 20 jenis komposisi. Untuk konsistensi, figura menggunakan superhero Marvel, nisbah 9:16, versi V7. Guna prompt ini dalam Midjourney di LimaxAI.', overviewTitle: 'Gambaran', overviewText: 'Komposisi menentukan perspektif, fokus dan suasana. Menguasai pelbagai jenis membantu imej AI lebih konsisten. Berikut 20 prompt sedia per jenis komposisi.', examplesTitle: '20 prompt komposisi', examplesIntro: 'Jadual menyenaraikan 20 jenis dengan prompt Inggeris dan penerangan ringkas. Salin ke Midjourney di LimaxAI.', tableHeaders: ['Komposisi', 'Prompt Inggeris', 'Penerangan'], imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akaun untuk pelbagai alat.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney : 20 types de composition (avec prompts)', intro: 'Ce guide liste des prompts Midjourney pour 20 types de composition. Pour la cohérence, les personnages sont des super-héros Marvel, ratio 9:16, version V7. Utilisez ces prompts dans Midjourney sur LimaxAI.', overviewTitle: 'Aperçu', overviewText: 'La composition définit la perspective, le focus et l\'ambiance. Maîtriser plusieurs types aide à obtenir des images plus cohérentes. Voici 20 prompts prêts par type de composition.', examplesTitle: '20 prompts de composition', examplesIntro: 'Le tableau liste 20 types avec des prompts en anglais et une courte description. Copiez dans Midjourney sur LimaxAI.', tableHeaders: ['Composition', 'Prompt en anglais', 'Description'], imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN, un compte pour plusieurs outils.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: 20 типов композиции (с промптами)', intro: 'В этом руководстве — промпты Midjourney для 20 типов композиции. Для единообразия использованы супергерои Marvel, соотношение 9:16, версия V7. Используйте эти промпты в Midjourney на LimaxAI.', overviewTitle: 'Обзор', overviewText: 'Композиция задаёт перспективу, фокус и настроение. Освоение разных типов помогает получать более предсказуемые изображения. Ниже 20 готовых промптов по типам композиции.', examplesTitle: '20 промптов композиции', examplesIntro: 'В таблице — 20 типов с английскими промптами и кратким описанием. Копируйте в Midjourney на LimaxAI.', tableHeaders: ['Композиция', 'Англ. промпт', 'Описание'], imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN, один аккаунт для нескольких инструментов.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: 20 कंपोज़िशन प्रकार (प्रॉम्प्ट के साथ)', intro: 'यह गाइड 20 अलग कंपोज़िशन प्रकारों के लिए Midjourney प्रॉम्प्ट सूचीबद्ध करता है। एकरूपता के लिए मार्वल सुपरहीरो, अनुपात 9:16, वर्जन V7। LimaxAI पर Midjourney में इन प्रॉम्प्ट का उपयोग करें।', overviewTitle: 'अवलोकन', overviewText: 'कंपोज़िशन परिप्रेक्ष्य, फोकस और मूड तय करता है। कई प्रकार सीखने से AI इमेज ज़्यादा संगत होती हैं। नीचे 20 तैयार प्रॉम्प्ट कंपोज़िशन प्रकार के अनुसार।', examplesTitle: '20 कंपोज़िशन प्रॉम्प्ट', examplesIntro: 'तालिका में 20 प्रकार, अंग्रेज़ी प्रॉम्प्ट और संक्षिप्त विवरण। LimaxAI पर Midjourney में कॉपी करें।', tableHeaders: ['कंपोज़िशन', 'अंग्रेज़ी प्रॉम्प्ट', 'विवरण'], imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें—VPN की ज़रूरत नहीं।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: 20種類の構図（プロンプト付き）', intro: 'このガイドは20種類の構図用Midjourneyプロンプトをまとめたものです。統一感のためマーベルスーパーヒーロー、アスペクト比9:16、バージョンV7。LimaxAIのMidjourneyでそのまま使えます。', overviewTitle: '概要', overviewText: '構図は視点・焦点・雰囲気を決めます。複数の構図を覚えるとAI画像がより安定します。以下、構図タイプ別のすぐ使えるプロンプト20個。', examplesTitle: '20の構図プロンプト', examplesIntro: '下表は20種類の構図と英語プロンプト・短い説明。LimaxAIのMidjourneyにコピペして試せます。', tableHeaders: ['構図', '英語プロンプト', '説明'], imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他のモデルでLimaxAIで使用—VPN不要、1アカウントで複数ツール。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: 20 Kompositionstypen (mit Prompts)', intro: 'Diese Anleitung listet Midjourney-Prompts für 20 Kompositionstypen. Zur Einheitlichkeit: Marvel-Superhelden, Seitenverhältnis 9:16, Version V7. Nutzen Sie diese Prompts direkt in Midjourney auf LimaxAI.', overviewTitle: 'Überblick', overviewText: 'Komposition bestimmt Perspektive, Fokus und Stimmung. Mehrere Typen zu beherrschen sorgt für konsistentere AI-Bilder. Unten 20 fertige Prompts nach Kompositionstyp.', examplesTitle: '20 Kompositions-Prompts', examplesIntro: 'Die Tabelle listet 20 Typen mit englischen Prompts und Kurzbeschreibung. In Midjourney auf LimaxAI einfügen.', tableHeaders: ['Komposition', 'Engl. Prompt', 'Beschreibung'], imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN, ein Konto für mehrere Tools.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: 20가지 구도 유형 (프롬프트 포함)', intro: '이 가이드는 20가지 구도 유형에 대한 Midjourney 프롬프트를 정리한 것입니다. 통일감을 위해 마블 슈퍼히어로, 비율 9:16, 버전 V7. LimaxAI의 Midjourney에서 바로 사용할 수 있습니다.', overviewTitle: '개요', overviewText: '구도는 시점, 초점, 분위기를 결정합니다. 여러 구도를 익히면 AI 이미지가 더 일관됩니다. 아래는 구도 유형별 즉시 사용 가능한 프롬프트 20개입니다.', examplesTitle: '20가지 구도 프롬프트', examplesIntro: '아래 표는 20가지 구도와 영어 프롬프트, 짧은 설명을 담고 있습니다. LimaxAI의 Midjourney에 복사해 사용하세요.', tableHeaders: ['구도', '영어 프롬프트', '설명'], imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요, 하나의 계정으로 여러 도구 이용.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: 20 kompozisyon türü (promptlarla)', intro: 'Bu rehber 20 farklı kompozisyon türü için Midjourney promptlarını listeler. Tutarlılık için Marvel süper kahramanları, 9:16 oran, V7 sürümü. Bu promptları LimaxAI\'da Midjourney\'de kullanabilirsiniz.', overviewTitle: 'Genel bakış', overviewText: 'Kompozisyon perspektifi, odağı ve havayı belirler. Birden fazla türde ustalaşmak daha tutarlı AI görselleri sağlar. Aşağıda 20 hazır prompt kompozisyon türüne göre.', examplesTitle: '20 kompozisyon promptu', examplesIntro: 'Tablo 20 türü İngilizce prompt ve kısa açıklamayla listeler. LimaxAI\'da Midjourney\'e kopyalayın.', tableHeaders: ['Kompozisyon', 'İngilizce prompt', 'Açıklama'], imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez, birden fazla araç için tek hesap.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: 20 kiểu bố cục (có prompt)', intro: 'Hướng dẫn này liệt kê prompt Midjourney cho 20 kiểu bố cục. Để thống nhất dùng siêu anh hùng Marvel, tỷ lệ 9:16, phiên bản V7. Bạn có thể dùng các prompt này trong Midjourney trên LimaxAI.', overviewTitle: 'Tổng quan', overviewText: 'Bố cục quyết định góc nhìn, tiêu điểm và không khí. Thành thạo nhiều kiểu giúp ảnh AI ổn định hơn. Dưới đây 20 prompt sẵn theo từng kiểu bố cục.', examplesTitle: '20 prompt bố cục', examplesIntro: 'Bảng liệt kê 20 kiểu kèm prompt tiếng Anh và mô tả ngắn. Sao chép vào Midjourney trên LimaxAI.', tableHeaders: ['Bố cục', 'Prompt tiếng Anh', 'Mô tả'], imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN, một tài khoản cho nhiều công cụ.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: 20 ประเภทการจัดองค์ประกอบ (พร้อมพรอมป์)', intro: 'คู่มือนี้รวบรวมพรอมป์ Midjourney สำหรับ 20 ประเภทการจัดองค์ประกอบ เพื่อความสอดคล้องใช้ซูเปอร์ฮีโร่มาร์เวล อัตราส่วน 9:16 เวอร์ชัน V7 ใช้พรอมป์เหล่านี้ใน Midjourney บน LimaxAI ได้เลย', overviewTitle: 'ภาพรวม', overviewText: 'การจัดองค์ประกอบกำหนดมุมมอง จุดโฟกัส และอารมณ์ การเชี่ยวชาญหลายประเภทช่วยให้ได้ภาพ AI ที่สม่ำเสมอกัน ด้านล่างคือพรอมป์พร้อมใช้ 20 รายการแยกตามประเภท', examplesTitle: '20 พรอมป์การจัดองค์ประกอบ', examplesIntro: 'ตารางแสดง 20 ประเภทพร้อมพรอมป์ภาษาอังกฤษและคำอธิบายสั้นๆ คัดลอกไปใช้ใน Midjourney บน LimaxAI', tableHeaders: ['การจัดองค์ประกอบ', 'พรอมป์ภาษาอังกฤษ', 'คำอธิบาย'], imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN บัญชีเดียวสำหรับหลายเครื่องมือ', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: 20 tipi di composizione (con prompt)', intro: 'Questa guida elenca prompt Midjourney per 20 tipi di composizione. Per coerenza: supereroi Marvel, rapporto 9:16, versione V7. Usa questi prompt in Midjourney su LimaxAI.', overviewTitle: 'Panoramica', overviewText: 'La composizione definisce prospettiva, focus e atmosfera. Padroneggiare più tipi aiuta a ottenere immagini AI più coerenti. Ecco 20 prompt pronti per tipo di composizione.', examplesTitle: '20 prompt di composizione', examplesIntro: 'La tabella elenca 20 tipi con prompt in inglese e descrizione breve. Copia in Midjourney su LimaxAI.', tableHeaders: ['Composizione', 'Prompt in inglese', 'Descrizione'], imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN, un account per più strumenti.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: ۲۰ نوع ترکیب‌بندی (با پرامپت)', intro: 'این راهنما پرامپت‌های Midjourney را برای ۲۰ نوع ترکیب‌بندی فهرست می‌کند. برای یکدستی از سوپرپ قهرمانان مارول، نسبت ۹:۱۶، نسخه V7 استفاده شده. این پرامپت‌ها را در Midjourney روی LimaxAI استفاده کنید.', overviewTitle: 'خلاصه', overviewText: 'ترکیب‌بندی دید، کانون و حالوهوا را تعیین می‌کند. تسلط بر چند نوع به تصاویر یکدست‌تر کمک می‌کند. در زیر ۲۰ پرامپت آماده به تفکیک نوع ترکیب‌بندی.', examplesTitle: '۲۰ پرامپت ترکیب‌بندی', examplesIntro: 'جدول ۲۰ نوع را با پرامپت انگلیسی و توضیح کوتاه فهرست می‌کند. در Midjourney روی LimaxAI کپی کنید.', tableHeaders: ['ترکیب‌بندی', 'پرامپت انگلیسی', 'توضیح'], imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN، یک اکانت برای چند ابزار.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: 20 compositietypen (met prompts)', intro: 'Deze gids somt Midjourney-prompts op voor 20 compositietypen. Voor consistentie: Marvel-superhelden, verhouding 9:16, versie V7. Gebruik deze prompts in Midjourney op LimaxAI.', overviewTitle: 'Overzicht', overviewText: 'Compositie bepaalt perspectief, focus en sfeer. Meerdere typen beheersen levert consistentere AI-beelden op. Hier 20 kant-en-klare prompts per compositietype.', examplesTitle: '20 compositie-prompts', examplesIntro: 'De tabel somt 20 typen op met Engelse prompts en korte beschrijving. Kopieer in Midjourney op LimaxAI.', tableHeaders: ['Compositie', 'Engelse prompt', 'Beschrijving'], imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig, één account voor meerdere tools.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: 20 typów kompozycji (z promptami)', intro: 'Ten przewodnik zawiera prompty Midjourney dla 20 typów kompozycji. Dla spójności: superbohaterowie Marvela, proporcja 9:16, wersja V7. Użyj tych promptów w Midjourney na LimaxAI.', overviewTitle: 'Przegląd', overviewText: 'Kompozycja określa perspektywę, focus i nastrój. Opanowanie wielu typów daje bardziej spójne obrazy AI. Poniżej 20 gotowych promptów według typu kompozycji.', examplesTitle: '20 promptów kompozycji', examplesIntro: 'Tabela listuje 20 typów z angielskimi promptami i krótkim opisem. Skopiuj do Midjourney na LimaxAI.', tableHeaders: ['Kompozycja', 'Prompt po angielsku', 'Opis'], imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN, jedno konto do wielu narzędzi.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: 20 kompositionstyper (med prompter)', intro: 'Denna guide listar Midjourney-prompter för 20 kompositionstyper. För konsistens: Marvel-superhjältar, bildförhållande 9:16, version V7. Använd dessa prompter i Midjourney på LimaxAI.', overviewTitle: 'Översikt', overviewText: 'Komposition bestämmer perspektiv, fokus och stämning. Att behärska flera typer ger mer konsekventa AI-bilder. Här 20 färdiga prompter per kompositionstyp.', examplesTitle: '20 kompositionsprompter', examplesIntro: 'Tabellen listar 20 typer med engelska prompter och kort beskrivning. Kopiera till Midjourney på LimaxAI.', tableHeaders: ['Komposition', 'Engelsk prompt', 'Beskrivning'], imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs, ett konto för flera verktyg.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: 20 типів композиції (з промптами)', intro: 'У цьому посібнику — промпти Midjourney для 20 типів композиції. Для єдності використано супергероїв Marvel, співвідношення 9:16, версія V7. Використовуйте ці промпти в Midjourney на LimaxAI.', overviewTitle: 'Огляд', overviewText: 'Композиція задає перспективу, фокус і настрій. Оволодіння різними типами допомагає отримувати передбачувані зображення. Нижче 20 готових промптів за типами композиції.', examplesTitle: '20 промптів композиції', examplesIntro: 'У таблиці — 20 типів з англійськими промптами та коротким описом. Копіюйте в Midjourney на LimaxAI.', tableHeaders: ['Композиція', 'Англ. промпт', 'Опис'], imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN, один обліковий запис для кількох інструментів.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: 20 tipuri de compoziție (cu prompturi)', intro: 'Acest ghid listează prompturi Midjourney pentru 20 tipuri de compoziție. Pentru consistență: supereroi Marvel, raport 9:16, versiune V7. Folosiți aceste prompturi în Midjourney pe LimaxAI.', overviewTitle: 'Prezentare', overviewText: 'Compoziția definește perspectiva, focusul și atmosfera. Stăpânirea mai multor tipuri ajută la imagini AI mai consistente. Mai jos 20 prompturi gata de folosit per tip de compoziție.', examplesTitle: '20 prompturi de compoziție', examplesIntro: 'Tabelul listează 20 tipuri cu prompturi în engleză și descriere scurtă. Copiați în Midjourney pe LimaxAI.', tableHeaders: ['Compoziție', 'Prompt în engleză', 'Descriere'], imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN, un cont pentru mai multe instrumente.', ctaText: 'Începe crearea' },
};

function makeComposition20Article(locale: string): TutorialArticle {
  const c = composition20CopyByLocale[locale];
  if (!c) return articleComposition20En;
  return {
    slug: 'midjourney-composition-20',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: composition20TableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-23.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-24.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-25.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const COMPOSITION_20_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleComposition20ByLocale: Record<string, TutorialArticle> = {
  en: articleComposition20En,
  'zh-cn': articleComposition20ZhCN,
  'zh-tw': articleComposition20ZhTW,
  ...Object.fromEntries(COMPOSITION_20_LOCALES.map((loc) => [loc, makeComposition20Article(loc)])),
};

/** Midjourney 精选 20 张：英文提示词 | 中文翻译 */
const selectedPromptsTableRowsZh: string[][] = [
  ['cartoon style, a cat, aggressive, Try to avoid an outstretched hand.', '卡通风格，一只猫，具有攻击性，尽量避免伸出手。'],
  ['Chinese ink painting of a dynamic fox in motion with a angle feather wing, mid-leap with a graceful curved body, black and orange ink tones, expressive flowing brushstrokes, strong sense of movement and elegance, long sweeping tail with lively ink texture, soft ink gradients and dry-brush details, clean sharp silhouette, traditional ink wash aesthetic, minimal and uncluttered composition, pure white background', '中国水墨画，一只动感的狐狸，角羽翼，中跃，身躯优美弯曲，黑橙墨色，笔触流畅，动感飘逸，长尾扫动，水墨质感活泼，水墨渐变和干笔细节，轮廓干净利落，传统水墨美学，构图极简整洁，纯白背景'],
  ['Boho summer girl clipart, a boho girl sitting on a picnic blanket with wildflowers, full body, vibrant summer palette with blue accent, loose wavy hair, layered bohemian jewelry, gentle smile, rounded cute proportions, soft watercolor shading with delicate hand-drawn outlines, minimal clean clipart style, isolated on pure white background, centered composition, high resolution PNG, light and airy summer mood', '波西米亚夏季女孩剪贴画，波西米亚女孩坐在野花野餐毯上，全身，充满活力的夏季调色板，蓝色口音，宽松的波浪发，分层波西米亚珠宝，温柔的微笑，圆润可爱的比例，柔和的水彩底纹与精致的手绘轮廓，极简干净剪贴画风格，纯白背景，居中构图，高分辨率 PNG，轻盈夏日心情'],
  ['the profile of a woman facing left, a silhouette with in the woman\'s head a forest with a waterfall, behind the woman a beautiful sunset, over all texture, no white background, have blue sky with puffy clouds, surreal, photorealistic, ultra-detailed, high-resolution photography style, very realistic, very sharp, S raw, S 750', '一个女人朝左的侧面，剪影中头部是带瀑布的森林，身后是美丽日落，整体纹理，无白底，蓝天与蓬松云朵，超现实、写实、超详细、高分辨率摄影风格，非常锐利。'],
  ['figure kneeling with lifted hands toward a distant christian temple, centered composition, very large empty white space, minimal lines, black ink illustration, ink on textured hammer paper, simple brush strokes', '人物举起双手跪向一座遥远的基督教寺庙，居中构图，大量留白，极简线条，黑色墨水插图，纹理锤纸上的墨水，简单笔触'],
  ['Soul photography double exposure depicting an ethereal wispy transparent and otherworldly luminescent nymph leans against a gnarled yew tree on a basalt outcropping. Full screen image. In the style of Chuck Close HDR 8K 3D hyper detailed hyper realistic masterpiece', '灵魂摄影双重曝光，飘逸透明的发光仙女靠在玄武岩上的紫杉树。全屏图像，Chuck Close 风格 HDR 8K 3D 超细节超现实杰作'],
  ['An Ice Boy formed of translucent crystals and soft blue frost gently embraces a Fire Girl glowing with warm flames under a starry Valentine\'s night sky. As he holds her, icy mist and soft firelight blend into a delicate halo of steam and shimmer. Dreamy romantic mood, soft focus, cinematic lighting, magical atmosphere', '由半透明水晶与柔和蓝霜组成的冰男孩在情人节星空下拥抱发光的火女孩；冰雾与火光交织成蒸汽与微光的光环，梦幻浪漫、柔焦、电影光效、魔幻氛围'],
  ['Toile de Jouy griffin', 'Toile de Jouy 格里芬'],
  ['Low view. A whimsical mouse lies in a hammock made of spiderwebs, suspended from gigantic mushrooms. Patchwork blanket. Starry night. Comfy. realistic illustration style. By E.H. Shepard. Cinematic. 3d. Hyper-detailed. High resolution. Masterpiece. Dreamy', '低视角。古怪老鼠躺在蜘蛛网吊床里，吊床挂在巨型蘑菇上，拼布毯、星夜、舒适，E.H.谢泼德写实插画风格，电影感、3D、超细节、高分辨率、梦幻杰作'],
  ['gold line drawing of lotus flowers and leaves, vector illustration, black background, simple design, simple lines, golden outline lines, in the style of chinese style, ancient art patterns, simple strokes, flat illustration, flat design, in the style of chinese ink painting, minimalism, vector graphics, flat illustrations, black solid color background, high-definition details, clean sharp focus, high resolution, best quality.', '莲花与叶子的金线画，矢量图，黑底，简约线条与金色轮廓，中国风、古代艺术图案、水墨画风格、极简、平面插画、高清细节、高分辨率、最佳品质'],
  ['A full body render young woman with black and gold glyphs all over her skin. Black eyes, pale skin, curly white waist-length hair. She has six wings across her back with black eyes all over them.', '全身渲染年轻女子，皮肤布满黑金符文，黑眼、苍白皮肤、齐腰白色卷发，背上六翼且布满黑眼'],
  ['A dreamy twilight fantasy illustration of an elven girl bending to smell a softly glowing wildflower as a fox sits beside her, looking up with admiration. Her reddish curls shimmer with sunset highlights, pointed ears adorned with tiny petals. Background features lavender twilight haze, floating sparkles, and soft meadow foliage. Textures include luminous flower glow, soft fox fur detailing, and lace-like dress embroidery. Style is dreamy woodland fairytale with painterly digital realism and a tender emotional tone.', '梦幻暮光奇幻插画：精灵女孩弯腰闻发光野花，狐狸在旁仰望；红卷发与夕阳高光，尖耳饰小花瓣；薰衣草暮色、漂浮闪光与柔和的草地；发光花朵、狐狸毛发与蕾丝裙刺绣，梦幻林地童话与绘画式数字现实主义'],
  ['in the deep forest, sunlight shines through the leaves and falls on an eagle flying in mid-air. the scene is surrounded by dense trees with light rays shining down from above. high-definition photography style. in contrast to the dark green of the surrounding foliage, the sky appears blue or gray. an owl hovers over its head, adding mystery to the scene.', '森林深处，阳光穿过树叶照在半空飞翔的鹰身上；密林与自上而下的光线，高清摄影风格；深绿树叶对比下天空呈蓝或灰，猫头鹰在头顶盘旋增添神秘感'],
  ['Illustration of a flying whale with a lighthouse on top', '顶部有灯塔的飞行鲸鱼插图'],
  ['shinkai makoto style, hyper-realistic anime, a futuristic young woman skateboarding at extremely high speed downhill on a winding mountain road, a breathtaking futuristic cityscape and vast sparkling turquoise ocean far ahead under a brilliant, clear blue daytime sky with a radiant sun, bright, semi-transparent holographic billboards floating in the air, a whirlwind of sunlit cherry blossom petals and shimmering heat haze, bright, vibrant cinematic lighting with sun-drenched highlights and soft lens flares, ultra low-angle fixed camera behind the woman, face not visible, camera never pans or cuts, natural skateboarding posture arms spread, knees bent, long hair and a light, futuristic windbreaker blown wildly by the wind, reflective road surface, glowing edges on her skateboard, sense of immense speed and scale.', '新海诚风格超写实动漫：未来感少女在蜿蜒山路极速滑板下坡，前方是未来都市与碧海、蓝天艳阳；半透明全息广告牌、樱花与热浪；阳光感电影光效与镜头光晕；超低角固定机位在身后、不露脸、不摇不切；自然滑板姿态、长发与未来风衣被风吹动、反光路面与滑板发光边，强烈速度与规模感'],
  ['Japandi digital painting, japanese element, japan graphic, contemplative', 'Japandi 数字绘画、日本元素、日本图形、沉思'],
  ['A panoramic view shows a round cartoon cloud leisurely enjoying its vacation under a clear, panoramic sky. It (maintaining its cloud shape, its body connected to the surrounding clouds, revealing a portion of the sky) comfortably half-closes its eyes, a slight smile playing on its lips. A pale yellow straw hat sits askew on its head, and a pair of round sunglasses almost completely obscures half its face. It holds a glass of chilled juice, with a rainbow-colored umbrella inserted inside. It is completely immersed in this carefree summer day. (3D Disney animation style, bright colors)', '全景中圆形卡通云在晴朗天空下悠闲度假；保持云形与周围云相连、露出部分天空；半闭眼、浅笑，淡黄草帽与圆墨镜遮住半脸，手持插彩虹伞的冰镇果汁，沉浸于无忧夏日；（3D 迪士尼动画风格，明亮色彩）'],
  ['Small fairytale mushroom palace, red cap with turrets, flowers on the balcony, romantic watercolor illustration. CRUCIAL: The entire image must be enclosed in a sharp, crisp, clean-cut outline. No soft feathered edges, no transparent gradients at the borders. Background is 100% solid white. Professional clipart quality with definitive borders for instant background removal.', '童话小蘑菇宫殿，红帽带塔楼、阳台鲜花，浪漫水彩插画。关键：整图须有清晰利落轮廓，无羽化、无边界透明渐变；背景 100% 纯白，专业剪贴画质量便于去底'],
  ['an illustration in a stop-motion style of a cute easter bunny holding a bouqet of tulips, handcrafted clay look, cozy parchment background, cinematic lighting, handmade animation aesthetic, Laika-style influence, tactile realism, clay and fabric materials, warm pastel colors, soft browns, dusty beige, gentle shadow tones, islolated on white background', '定格动画风格插画：可爱复活节兔子捧郁金香花束，手工黏土感、舒适羊皮纸背景、电影光效、莱卡风格、触觉写实、黏土与织物、温暖粉彩与柔和棕米色、柔和阴影，白底隔离'],
  ['high-contrast black and white tiger drawing portrait, ultra detailed fur, bold inked contours with thick and thin strokes, subtle halftone shading in selected areas. The lion portrait noticeably reduced in scale within the frame, centered with large clean white margins surrounding it, strong negative space, gallery poster layout. Layered multicolored graffiti typography across the tiger\'s face and partially extending into the white space. Vibrant street palette including red, blue, neon yellow, green, purple, orange and cyan. Varied lettering styles, bold tags mixed with calligraphic strokes, spray paint textures, stencil marks, halftone spray dots, paint drips, splashes, hand-drawn crowns, arrows, stars, urban symbols and street art icons. Balanced composition where the graffiti enhances the expression without covering the eyes completely. Pure white background, clean poster aesthetic, by Mr. Brainwash, by Anthony Lister, by JonOne, contemporary pop art meets street art realism, sharp graphic edges combined with raw spray effects, print-ready design, ultra crisp detail, strong contrast, striking and beautiful composition, high resolution', '高对比黑白老虎肖像、超细毛发、粗细墨线轮廓、局部半调阴影；画面中肖像缩小、大留白居中、强烈负空间、画廊海报布局；虎脸分层彩色涂鸦字体延伸至留白，红蓝霓虹黄绿紫橙青等街头配色，多种字体与喷漆纹理、皇冠箭头星星等；涂鸦增强表情但不完全遮眼；纯白底、干净海报美学，Mr. Brainwash / Anthony Lister / JonOne 风格，当代波普与街头写实、锐利图形与喷漆效果、印刷级高分辨率'],
];

const selectedPromptsTableRowsEn: string[][] = [
  ['cartoon style, a cat, aggressive, Try to avoid an outstretched hand.', 'Cartoon cat, aggressive pose, avoid outstretched hand.'],
  ['Chinese ink painting of a dynamic fox in motion with a angle feather wing, mid-leap with a graceful curved body, black and orange ink tones, expressive flowing brushstrokes, strong sense of movement and elegance, long sweeping tail with lively ink texture, soft ink gradients and dry-brush details, clean sharp silhouette, traditional ink wash aesthetic, minimal and uncluttered composition, pure white background', 'Chinese ink painting, dynamic fox mid-leap, black and orange ink, flowing brushstrokes, white background.'],
  ['Boho summer girl clipart, a boho girl sitting on a picnic blanket with wildflowers, full body, vibrant summer palette with blue accent, loose wavy hair, layered bohemian jewelry, gentle smile, rounded cute proportions, soft watercolor shading with delicate hand-drawn outlines, minimal clean clipart style, isolated on pure white background, centered composition, high resolution PNG, light and airy summer mood', 'Boho summer girl on picnic blanket, watercolor clipart, white background.'],
  ['the profile of a woman facing left, a silhouette with in the woman\'s head a forest with a waterfall, behind the woman a beautiful sunset, over all texture, no white background, have blue sky with puffy clouds, surreal, photorealistic, ultra-detailed, high-resolution photography style, very realistic, very sharp, S raw, S 750', 'Woman profile, silhouette with forest and waterfall in head, sunset, surreal photorealistic.'],
  ['figure kneeling with lifted hands toward a distant christian temple, centered composition, very large empty white space, minimal lines, black ink illustration, ink on textured hammer paper, simple brush strokes', 'Figure kneeling toward distant temple, minimal black ink, large white space.'],
  ['Soul photography double exposure depicting an ethereal wispy transparent and otherworldly luminescent nymph leans against a gnarled yew tree on a basalt outcropping. Full screen image. In the style of Chuck Close HDR 8K 3D hyper detailed hyper realistic masterpiece', 'Double exposure, luminescent nymph by yew tree, Chuck Close style HDR 8K.'],
  ['An Ice Boy formed of translucent crystals and soft blue frost gently embraces a Fire Girl glowing with warm flames under a starry Valentine\'s night sky. As he holds her, icy mist and soft firelight blend into a delicate halo of steam and shimmer. Dreamy romantic mood, soft focus, cinematic lighting, magical atmosphere', 'Ice Boy and Fire Girl embrace, Valentine night, dreamy romantic, cinematic.'],
  ['Toile de Jouy griffin', 'Toile de Jouy griffin.'],
  ['Low view. A whimsical mouse lies in a hammock made of spiderwebs, suspended from gigantic mushrooms. Patchwork blanket. Starry night. Comfy. realistic illustration style. By E.H. Shepard. Cinematic. 3d. Hyper-detailed. High resolution. Masterpiece. Dreamy', 'Mouse in spiderweb hammock, giant mushrooms, E.H. Shepard style.'],
  ['gold line drawing of lotus flowers and leaves, vector illustration, black background, simple design, simple lines, golden outline lines, in the style of chinese style, ancient art patterns, simple strokes, flat illustration, flat design, in the style of chinese ink painting, minimalism, vector graphics, flat illustrations, black solid color background, high-definition details, clean sharp focus, high resolution, best quality.', 'Gold line lotus on black, Chinese ink style, vector, minimal.'],
  ['A full body render young woman with black and gold glyphs all over her skin. Black eyes, pale skin, curly white waist-length hair. She has six wings across her back with black eyes all over them.', 'Full body woman, black and gold glyphs, six wings with eyes.'],
  ['A dreamy twilight fantasy illustration of an elven girl bending to smell a softly glowing wildflower as a fox sits beside her, looking up with admiration. Her reddish curls shimmer with sunset highlights, pointed ears adorned with tiny petals. Background features lavender twilight haze, floating sparkles, and soft meadow foliage. Textures include luminous flower glow, soft fox fur detailing, and lace-like dress embroidery. Style is dreamy woodland fairytale with painterly digital realism and a tender emotional tone.', 'Elven girl and fox, twilight wildflower, dreamy woodland fairytale.'],
  ['in the deep forest, sunlight shines through the leaves and falls on an eagle flying in mid-air. the scene is surrounded by dense trees with light rays shining down from above. high-definition photography style. in contrast to the dark green of the surrounding foliage, the sky appears blue or gray. an owl hovers over its head, adding mystery to the scene.', 'Deep forest, eagle in flight, sunlight through leaves, owl, HD photography.'],
  ['Illustration of a flying whale with a lighthouse on top', 'Flying whale with lighthouse on top.'],
  ['shinkai makoto style, hyper-realistic anime, a futuristic young woman skateboarding at extremely high speed downhill on a winding mountain road, a breathtaking futuristic cityscape and vast sparkling turquoise ocean far ahead under a brilliant, clear blue daytime sky with a radiant sun, bright, semi-transparent holographic billboards floating in the air, a whirlwind of sunlit cherry blossom petals and shimmering heat haze, bright, vibrant cinematic lighting with sun-drenched highlights and soft lens flares, ultra low-angle fixed camera behind the woman, face not visible, camera never pans or cuts, natural skateboarding posture arms spread, knees bent, long hair and a light, futuristic windbreaker blown wildly by the wind, reflective road surface, glowing edges on her skateboard, sense of immense speed and scale.', 'Shinkai Makoto style, woman skateboarding downhill, futuristic city and ocean, cherry blossoms.'],
  ['Japandi digital painting, japanese element, japan graphic, contemplative', 'Japandi digital painting, Japanese elements, contemplative.'],
  ['A panoramic view shows a round cartoon cloud leisurely enjoying its vacation under a clear, panoramic sky. It (maintaining its cloud shape, its body connected to the surrounding clouds, revealing a portion of the sky) comfortably half-closes its eyes, a slight smile playing on its lips. A pale yellow straw hat sits askew on its head, and a pair of round sunglasses almost completely obscures half its face. It holds a glass of chilled juice, with a rainbow-colored umbrella inserted inside. It is completely immersed in this carefree summer day. (3D Disney animation style, bright colors)', 'Cartoon cloud on vacation, straw hat, sunglasses, juice, 3D Disney style.'],
  ['Small fairytale mushroom palace, red cap with turrets, flowers on the balcony, romantic watercolor illustration. CRUCIAL: The entire image must be enclosed in a sharp, crisp, clean-cut outline. No soft feathered edges, no transparent gradients at the borders. Background is 100% solid white. Professional clipart quality with definitive borders for instant background removal.', 'Fairytale mushroom palace, watercolor, white background, clipart quality.'],
  ['an illustration in a stop-motion style of a cute easter bunny holding a bouqet of tulips, handcrafted clay look, cozy parchment background, cinematic lighting, handmade animation aesthetic, Laika-style influence, tactile realism, clay and fabric materials, warm pastel colors, soft browns, dusty beige, gentle shadow tones, islolated on white background', 'Stop-motion Easter bunny with tulips, clay look, Laika-style, white background.'],
  ['high-contrast black and white tiger drawing portrait, ultra detailed fur, bold inked contours with thick and thin strokes, subtle halftone shading in selected areas. The lion portrait noticeably reduced in scale within the frame, centered with large clean white margins surrounding it, strong negative space, gallery poster layout. Layered multicolored graffiti typography across the tiger\'s face and partially extending into the white space. Vibrant street palette including red, blue, neon yellow, green, purple, orange and cyan. Varied lettering styles, bold tags mixed with calligraphic strokes, spray paint textures, stencil marks, halftone spray dots, paint drips, splashes, hand-drawn crowns, arrows, stars, urban symbols and street art icons. Balanced composition where the graffiti enhances the expression without covering the eyes completely. Pure white background, clean poster aesthetic, by Mr. Brainwash, by Anthony Lister, by JonOne, contemporary pop art meets street art realism, sharp graphic edges combined with raw spray effects, print-ready design, ultra crisp detail, strong contrast, striking and beautiful composition, high resolution', 'B&W tiger portrait, graffiti typography, street art, Mr. Brainwash / JonOne style, white background.'],
];

const articleSelectedPromptsZhCN: TutorialArticle = {
  slug: 'midjourney-selected-prompts',
  title: '【AI 绘画】Midjourney 精选 · 附完整提示词与中文翻译',
  intro: '本期整理 20 张 Midjourney 作品，每张都附上原始英文提示词与中文翻译，方便参考与二创。在 LimaxAI 上可直接使用 Midjourney 等模型，无需翻墙，一键出图。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '以下 20 组提示词涵盖卡通、水墨、剪贴画、双重曝光、奇幻、插画等多种风格，每行均为「英文提示词 + 中文翻译」，可直接复制到 LimaxAI 的 Midjourney 中使用与改编。' }] },
    { id: 'examples', title: '20 组精选提示词', blocks: [{ type: 'paragraph', text: '下表为 20 组完整英文提示词及对应中文翻译，便于理解与二次创作。' }, { type: 'table', headers: ['英文提示词', '中文翻译'], rows: selectedPromptsTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-26.webp', alt: 'Midjourney 精选效果图 1', caption: '效果图 1' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-27.webp', alt: 'Midjourney 精选效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-28.webp', alt: 'Midjourney 精选效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成图片，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleSelectedPromptsZhTW: TutorialArticle = {
  slug: 'midjourney-selected-prompts',
  title: '【AI 繪畫】Midjourney 精選 · 附完整提示詞與中文翻譯',
  intro: '本期整理 20 張 Midjourney 作品，每張都附上原始英文提示詞與中文翻譯，方便參考與二創。在 LimaxAI 上可直接使用 Midjourney 等模型，無需翻牆，一鍵出圖。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '以下 20 組提示詞涵蓋卡通、水墨、剪貼畫、雙重曝光、奇幻、插畫等多種風格，每行均為「英文提示詞 + 中文翻譯」，可直接複製到 LimaxAI 的 Midjourney 中使用與改編。' }] },
    { id: 'examples', title: '20 組精選提示詞', blocks: [{ type: 'paragraph', text: '下表為 20 組完整英文提示詞及對應中文翻譯，便於理解與二次創作。' }, { type: 'table', headers: ['英文提示詞', '中文翻譯'], rows: selectedPromptsTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-26.webp', alt: 'Midjourney 精選效果圖 1', caption: '效果圖 1' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-27.webp', alt: 'Midjourney 精選效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-28.webp', alt: 'Midjourney 精選效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const articleSelectedPromptsEn: TutorialArticle = {
  slug: 'midjourney-selected-prompts',
  title: 'Midjourney Selected Prompts (Full Text & Chinese Translation)',
  intro: 'This guide collects 20 Midjourney images, each with the full English prompt and Chinese translation for reference and remix. Use them directly in Midjourney on LimaxAI—no VPN, one-click generation.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'The 20 prompts below cover cartoon, ink painting, clipart, double exposure, fantasy, and illustration styles. Each row gives the full English prompt plus a short description; copy and adapt them in Midjourney on LimaxAI.' }] },
    { id: 'examples', title: '20 selected prompts', blocks: [{ type: 'paragraph', text: 'The table lists 20 full English prompts with descriptions for understanding and remix.' }, { type: 'table', headers: ['English prompt', 'Description'], rows: selectedPromptsTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-26.webp', alt: 'Midjourney selected sample 1', caption: 'Sample 1' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-27.webp', alt: 'Midjourney selected sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-28.webp', alt: 'Midjourney selected sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 钢笔淡彩水墨风格：场景 | 文生图提示词 */
const penWashInkTableRowsZh: string[][] = [
  ['邮差少年', '钢笔淡彩水墨，对角线构图，纸船连缀成水上小径，Q 版小邮差戴超圆雨帽、深海军蓝斗篷配橄榄绿短裤，夸张比例 + 潦草速写线条，背牛皮纸邮袋踮脚踩纸船，2 只雏鸭随行，灰黄极简调大留白，粗钢笔勾勒 + 清晰纸张纤维 + 粗颗粒质感，无多余元素'],
  ['采花小童', '钢笔淡彩水墨风，对角式构图，花瓣叠成的花间小径，Q 版小花童戴软边布艺帽、浅紫短斗篷搭米白灯笼裤，速写粗线条 + 夸张比例，提藤编花筐踮脚踩花瓣前行，4 只蝴蝶尾随，米紫极简色调大篇幅留白，粗钢笔勾边 + 清晰纸纤维 + 粗颗粒感，无多余装饰元素'],
  ['石板小径下的文具店员', '钢笔淡彩水墨风，对角式构图，城市老弄堂的石板小径，Q 版小文具店员戴宽边布帽、藏青工装斗篷配米白短裤，速写粗线条 + 夸张比例，背帆布文具袋踮脚踩石板前行，4 只流浪小猫尾随，灰白极简色调大篇幅留白，粗钢笔勾边 + 清晰纸纤维 + 粗颗粒感，无多余装饰元素'],
];

const penWashInkTableRowsEn: string[][] = [
  ['Young postman', 'Pen-and-wash ink style, diagonal composition, paper boats forming a path on water, Q-version young postman in round rain hat, navy cloak, olive green shorts, exaggerated proportions and sketchy lines, canvas mail bag, tiptoeing on paper boats with 2 ducklings, gray-yellow minimal palette with large negative space, bold pen outline, visible paper fiber, coarse grain texture, no clutter'],
  ['Flower-gathering child', 'Pen-and-wash ink style, diagonal composition, path of overlapping petals, Q-version child in soft fabric hat, lavender short cape, beige pants, sketchy bold lines and exaggerated proportions, wicker flower basket, tiptoeing on petals with 4 butterflies following, beige-purple minimal tone with large negative space, bold pen outline, clear paper fiber, coarse grain, no extra decoration'],
  ['Stationery clerk on stone path', 'Pen-and-wash ink style, diagonal composition, old alley stone path in the city, Q-version stationery clerk in wide brim hat, navy work cloak, beige shorts, sketchy bold lines and exaggerated proportions, canvas stationery bag, tiptoeing on stones with 4 stray cats following, gray-white minimal tone with large negative space, bold pen outline, clear paper fiber, coarse grain, no extra decoration'],
];

const articlePenWashInkZhCN: TutorialArticle = {
  slug: 'midjourney-pen-wash-ink',
  title: 'Midjourney提示词—钢笔淡彩水墨风格',
  intro: '钢笔淡彩水墨风格结合粗钢笔线条与淡彩、留白，画面简洁有质感。以下三组文生图提示词分别对应「邮差少年」「采花小童」「石板小径下的文具店员」场景，可直接在 LimaxAI 的 Midjourney 中使用。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '钢笔淡彩水墨风强调对角线构图、Q 版人物、速写粗线条与夸张比例，配合灰黄/米紫/灰白等极简色调与大留白，粗钢笔勾边、清晰纸纤维与粗颗粒感可增强手绘质感。' }] },
    { id: 'examples', title: '三组提示词', blocks: [{ type: 'paragraph', text: '下表为三组钢笔淡彩水墨风格的完整提示词，可直接复制到 LimaxAI 的 Midjourney 中生成。' }, { type: 'table', headers: ['场景', '文生图提示词'], rows: penWashInkTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-29.webp', alt: '钢笔淡彩水墨效果图 1', caption: '效果图 1' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-30.webp', alt: '钢笔淡彩水墨效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-31.webp', alt: '钢笔淡彩水墨效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成钢笔淡彩水墨风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articlePenWashInkZhTW: TutorialArticle = {
  slug: 'midjourney-pen-wash-ink',
  title: 'Midjourney提示詞—鋼筆淡彩水墨風格',
  intro: '鋼筆淡彩水墨風格結合粗鋼筆線條與淡彩、留白，畫面簡潔有質感。以下三組文生圖提示詞分別對應「郵差少年」「採花小童」「石板小徑下的文具店員」場景，可直接在 LimaxAI 的 Midjourney 中使用。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '鋼筆淡彩水墨風強調對角線構圖、Q 版人物、速寫粗線條與誇張比例，配合灰黃/米紫/灰白等極簡色調與大留白，粗鋼筆勾邊、清晰紙纖維與粗顆粒感可增強手繪質感。' }] },
    { id: 'examples', title: '三組提示詞', blocks: [{ type: 'paragraph', text: '下表為三組鋼筆淡彩水墨風格的完整提示詞，可直接複製到 LimaxAI 的 Midjourney 中生成。' }, { type: 'table', headers: ['場景', '文生圖提示詞'], rows: penWashInkTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-29.webp', alt: '鋼筆淡彩水墨效果圖 1', caption: '效果圖 1' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-30.webp', alt: '鋼筆淡彩水墨效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-31.webp', alt: '鋼筆淡彩水墨效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成鋼筆淡彩水墨風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const articlePenWashInkEn: TutorialArticle = {
  slug: 'midjourney-pen-wash-ink',
  title: 'Midjourney: Pen-and-Wash Ink Style Prompts',
  intro: 'Pen-and-wash ink style combines bold pen lines with light wash and negative space for a clean, tactile look. Below are three prompt sets for "young postman," "flower-gathering child," and "stationery clerk on stone path"—use them directly in Midjourney on LimaxAI.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'This style uses diagonal composition, Q-version characters, sketchy bold lines, and exaggerated proportions, with minimal gray-yellow, beige-purple, or gray-white palettes and large negative space. Bold pen outlines, visible paper fiber, and coarse grain add a hand-drawn feel.' }] },
    { id: 'examples', title: 'Three prompt sets', blocks: [{ type: 'paragraph', text: 'The table below lists three full prompts for pen-and-wash ink style. Copy them into Midjourney on LimaxAI to generate images.' }, { type: 'table', headers: ['Scene', 'Prompt'], rows: penWashInkTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-29.webp', alt: 'Pen-and-wash ink sample 1', caption: 'Sample 1' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-30.webp', alt: 'Pen-and-wash ink sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-31.webp', alt: 'Pen-and-wash ink sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 钢笔淡彩水墨教程各语种文案（其余语种用英文表格） */
interface PenWashInkArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string];
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const penWashInkCopyByLocale: Record<string, PenWashInkArticleCopy> = {
  es: { title: 'Midjourney: estilo tinta y lavado (prompts)', intro: 'El estilo tinta y lavado combina líneas de pluma gruesas con lavado suave y espacio negativo. Tres conjuntos de prompts para "joven cartero", "niño recolector de flores" y "empleado de papelería en camino de piedra"—úsalos en Midjourney en LimaxAI.', overviewTitle: 'Resumen', overviewText: 'Este estilo usa composición diagonal, personajes Q, líneas gruesas de boceto y proporciones exageradas, con paletas mínimas y mucho espacio negativo. Contornos de pluma, fibra de papel visible y grano grueso.', examplesTitle: 'Tres conjuntos de prompts', examplesIntro: 'La tabla lista tres prompts completos. Cópialos en Midjourney en LimaxAI.', tableHeaders: ['Escena', 'Prompt'], imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: أسلوب الحبر والغسيل (أوامر)', intro: 'أسلوب الحبر والغسيل يجمع خطوط القلم الغليظة مع الغسيل الخفيف والمساحة السلبية. ثلاثة مجموعات أوامر لـ "ساعي شاب" و"طفل جامع الزهور" و"موظف قرطاسية على طريق حجري"—استخدمها في Midjourney على LimaxAI.', overviewTitle: 'نظرة عامة', overviewText: 'هذا الأسلوب يستخدم تركيباً قطرياً وشخصيات Q وخطوطاً خشنة وبنى مبالغاً فيها، مع لوحات لونية بسيطة ومساحة سلبية كبيرة.', examplesTitle: 'ثلاث مجموعات أوامر', examplesIntro: 'الجدول يدرج ثلاثة أوامر كاملة. انسخها في Midjourney على LimaxAI.', tableHeaders: ['المشهد', 'الأمر'], imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: estilo tinta e lavagem (prompts)', intro: 'Estilo tinta e lavagem combina linhas de caneta grossas com lavagem suave e espaço negativo. Três conjuntos de prompts para "carteiro jovem", "criança colhedor de flores" e "balconista de papelaria no caminho de pedra"—use no Midjourney no LimaxAI.', overviewTitle: 'Visão geral', overviewText: 'Este estilo usa composição diagonal, personagens Q, linhas grossas de esboço e proporções exageradas, com paletas mínimas e muito espaço negativo.', examplesTitle: 'Três conjuntos de prompts', examplesIntro: 'A tabela lista três prompts completos. Copie no Midjourney no LimaxAI.', tableHeaders: ['Cena', 'Prompt'], imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: gaya tinta dan wash (prompt)', intro: 'Gaya tinta dan wash menggabungkan garis pena tebal dengan wash ringan dan ruang negatif. Tiga set prompt untuk "tukang pos muda", "anak pengumpul bunga", dan "petugas toko alat tulis di jalan batu"—gunakan di Midjourney di LimaxAI.', overviewTitle: 'Ringkasan', overviewText: 'Gaya ini memakai komposisi diagonal, karakter Q, garis sketsa tebal, dan proporsi berlebihan, dengan palet minimal dan ruang negatif besar.', examplesTitle: 'Tiga set prompt', examplesIntro: 'Tabel berisi tiga prompt lengkap. Salin ke Midjourney di LimaxAI.', tableHeaders: ['Adegan', 'Prompt'], imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: gaya dakwat dan sapuan (prompt)', intro: 'Gaya dakwat dan sapuan menggabungkan garisan pen tebal dengan sapuan ringan dan ruang negatif. Tiga set prompt untuk "posmen muda", "kanak-kanak pengutip bunga", "pekerja kedai alat tulis di jalan batu"—guna dalam Midjourney di LimaxAI.', overviewTitle: 'Gambaran', overviewText: 'Gaya ini guna komposisi pepenjuru, watak Q, garisan sketsa tebal dan proporsi berlebihan, dengan palet minimal dan ruang negatif besar.', examplesTitle: 'Tiga set prompt', examplesIntro: 'Jadual menyenaraikan tiga prompt penuh. Salin ke Midjourney di LimaxAI.', tableHeaders: ['Adegan', 'Prompt'], imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney : style encre et lavis (prompts)', intro: 'Le style encre et lavis associe traits de plume marqués, lavis léger et mise en page aérée. Trois jeux de prompts pour « jeune facteur », « enfant cueilleur de fleurs » et « vendeur de papeterie sur chemin de pierre »—à utiliser dans Midjourney sur LimaxAI.', overviewTitle: 'Aperçu', overviewText: 'Ce style privilégie la composition en diagonale, des personnages type Q, des traits de croquis épais et des proportions exagérées, avec des palettes minimales et beaucoup de vide.', examplesTitle: 'Trois jeux de prompts', examplesIntro: 'Le tableau liste trois prompts complets. Copiez dans Midjourney sur LimaxAI.', tableHeaders: ['Scène', 'Prompt'], imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: стиль тушь и размывка (промпты)', intro: 'Стиль тушь и размывка сочетает чёткие линии пера, лёгкую размывку и воздушную композицию. Три набора промптов: «юный почтальон», «ребёнок с цветами», «продавец канцтоваров на каменной тропе»—используйте в Midjourney на LimaxAI.', overviewTitle: 'Обзор', overviewText: 'Стиль использует диагональную композицию, Q-персонажей, грубые контуры и преувеличенные пропорции, минимальную палитру и много пустого пространства.', examplesTitle: 'Три набора промптов', examplesIntro: 'В таблице — три полных промпта. Копируйте в Midjourney на LimaxAI.', tableHeaders: ['Сцена', 'Промпт'], imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: पेन-एंड-वॉश इंक स्टाइल (प्रॉम्प्ट)', intro: 'पेन-एंड-वॉश इंक स्टाइल में मोटी कलम लाइनें, हल्का वॉश और नेगेटिव स्पेस होता है। तीन प्रॉम्प्ट सेट: "यंग पोस्टमैन", "फूल बटोरने वाला बच्चा", "पत्थर रास्ते पर स्टेशनरी क्लर्क"—LimaxAI पर Midjourney में इस्तेमाल करें।', overviewTitle: 'अवलोकन', overviewText: 'यह स्टाइल डायगोनल कंपोज़िशन, Q कैरेक्टर, स्केची बोल्ड लाइन्स और एक्सैजरेटेड प्रोपोर्शन इस्तेमाल करता है।', examplesTitle: 'तीन प्रॉम्प्ट सेट', examplesIntro: 'तालिका में तीन पूर्ण प्रॉम्प्ट। LimaxAI पर Midjourney में कॉपी करें।', tableHeaders: ['दृश्य', 'प्रॉम्प्ट'], imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: ペン・アンド・ウォッシュインク風（プロンプト）', intro: 'ペン・アンド・ウォッシュインクは太いペン線と淡いウォッシュ、余白で構成。三組のプロンプト：「郵便少年」「花摘みの子」「石畳の文具店員」—LimaxAIのMidjourneyでそのまま使えます。', overviewTitle: '概要', overviewText: '対角線構図、Q版キャラ、スケッチ風の太い線と誇張したプロポーション、ミニマルな色調と大胆な余白が特徴。', examplesTitle: '三組のプロンプト', examplesIntro: '下表は三組のプロンプト全文。LimaxAIのMidjourneyにコピーして使用。', tableHeaders: ['シーン', 'プロンプト'], imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他モデルでLimaxAIで使用—VPN不要。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: Feder- und Lavierstil (Prompts)', intro: 'Feder- und Lavierstil verbindet kräftige Federlinien mit leichtem Lavieren und Negativraum. Drei Prompt-Sets für „jungen Postboten“, „blumensammelndes Kind“ und „Schreibwarenverkäufer auf Steinweg“—direkt in Midjourney auf LimaxAI nutzen.', overviewTitle: 'Überblick', overviewText: 'Diagonale Komposition, Q-Figuren, skizzenhafte kräftige Linien und überzeichnete Proportionen, minimale Farbpalette und viel Weißraum.', examplesTitle: 'Drei Prompt-Sets', examplesIntro: 'Die Tabelle listet drei vollständige Prompts. In Midjourney auf LimaxAI einfügen.', tableHeaders: ['Szene', 'Prompt'], imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: 펜·워시 잉크 스타일 (프롬프트)', intro: '펜·워시 잉크 스타일은 굵은 펜 선과 옅은 워시, 여백으로 정리된 구도. 세 가지 프롬프트 세트: "어린 우편배달부", "꽃 꾸미는 아이", "돌길 문구점 점원"—LimaxAI의 Midjourney에서 바로 사용하세요.', overviewTitle: '개요', overviewText: '대각선 구도, Q판 캐릭터, 스케치 굵은 선과 과장된 비율, 미니멀 톤과 큰 여백이 특징입니다.', examplesTitle: '세 가지 프롬프트 세트', examplesIntro: '아래 표는 세 가지 프롬프트 전문입니다. LimaxAI의 Midjourney에 복사해 사용하세요.', tableHeaders: ['장면', '프롬프트'], imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: kalem ve yıkama mürekkep stili (promptlar)', intro: 'Kalem ve yıkama mürekkep stili kalın kalem çizgileri, hafif yıkama ve negatif alan birleştirir. Üç prompt seti: "genç postacı", "çiçek toplayan çocuk", "taş yoldaki kırtasiyeci"—LimaxAI\'da Midjourney\'de kullanın.', overviewTitle: 'Genel bakış', overviewText: 'Bu stil diyagonal kompozisyon, Q karakterler, eskiz kalın çizgiler ve abartılı oranlar kullanır.', examplesTitle: 'Üç prompt seti', examplesIntro: 'Tablo üç tam prompt listeler. LimaxAI\'da Midjourney\'e kopyalayın.', tableHeaders: ['Sahne', 'Prompt'], imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: phong cách mực bút và rửa (prompt)', intro: 'Phong cách mực bút và rửa kết hợp nét bút đậm với rửa nhạt và không gian âm. Ba bộ prompt cho "bưu tá trẻ", "bé hái hoa", "nhân viên văn phòng phẩm trên đường đá"—dùng trong Midjourney trên LimaxAI.', overviewTitle: 'Tổng quan', overviewText: 'Phong cách dùng bố cục chéo, nhân vật Q, nét phác đậm và tỷ lệ phóng đại, bảng màu tối giản và nhiều khoảng trống.', examplesTitle: 'Ba bộ prompt', examplesIntro: 'Bảng liệt kê ba prompt đầy đủ. Sao chép vào Midjourney trên LimaxAI.', tableHeaders: ['Cảnh', 'Prompt'], imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: สไตล์หมึกปากกาและล้าง (พรอมป์)', intro: 'สไตล์หมึกปากกาและล้างรวมเส้นปากกาหนากับการล้างเบาและพื้นที่ว่าง สามชุดพรอมป์สำหรับ "เด็กไปรษณีย์", "เด็กเก็บดอกไม้", "พนักงานร้านเครื่องเขียนบนทางหิน"—ใช้ใน Midjourney บน LimaxAI', overviewTitle: 'ภาพรวม', overviewText: 'สไตล์นี้ใช้การจัดองค์ประกอบแนวทแยง ตัวละคร Q เส้นสเก็ตช์หนาและสัดส่วนเกินจริง พร้อมพาเลทมินิมอลและพื้นที่ว่างมาก', examplesTitle: 'สามชุดพรอมป์', examplesIntro: 'ตารางแสดงพรอมป์เต็มสามชุด คัดลอกไปใช้ใน Midjourney บน LimaxAI', tableHeaders: ['ฉาก', 'พรอมป์'], imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: stile inchiostro e lavaggio (prompt)', intro: 'Lo stile inchiostro e lavaggio combina tratti di penna marcati, lavaggio leggero e spazio negativo. Tre set di prompt per "giovane postino", "bambino che raccoglie fiori", "commesso di cartoleria su sentiero di pietra"—usali in Midjourney su LimaxAI.', overviewTitle: 'Panoramica', overviewText: 'Questo stile usa composizione diagonale, personaggi Q, tratti di schizzo marcati e proporzioni esagerate, palette minimali e molto spazio vuoto.', examplesTitle: 'Tre set di prompt', examplesIntro: 'La tabella elenca tre prompt completi. Copia in Midjourney su LimaxAI.', tableHeaders: ['Scena', 'Prompt'], imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: سبک مرکب قلم و شستشو (پرامپت)', intro: 'سبک مرکب قلم و شستشو خطوط قلم ضخیم را با شستشوی ملایم و فضای منفی ترکیب می‌کند. سه مجموعه پرامپت برای «پستچی جوان»، «کودک گل‌چین»، «فروشنده لوازم‌التحریر در pathway سنگ»—در Midjourney روی LimaxAI استفاده کنید.', overviewTitle: 'خلاصه', overviewText: 'این سبک از ترکیب‌بندی مورب، شخصیت‌های Q، خطوط ضخیم اسکیس و نسبت‌های اغراق‌آمیز استفاده می‌کند.', examplesTitle: 'سه مجموعه پرامپت', examplesIntro: 'جدول سه پرامپت کامل فهرست می‌کند. در Midjourney روی LimaxAI کپی کنید.', tableHeaders: ['صحنه', 'پرامپت'], imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: pen-en-wash inktstijl (prompts)', intro: 'Pen-en-wash inktstijl combineert dikke penlijnen met lichte wash en negatieve ruimte. Drie promptsets voor "jonge postbode", "bloemen plukkend kind", "kantoorverkoper op stenen pad"—gebruik in Midjourney op LimaxAI.', overviewTitle: 'Overzicht', overviewText: 'Deze stijl gebruikt diagonale compositie, Q-personages, schetsachtige dikke lijnen en overdreven verhoudingen.', examplesTitle: 'Drie promptsets', examplesIntro: 'De tabel somt drie volledige prompts op. Kopieer in Midjourney op LimaxAI.', tableHeaders: ['Scène', 'Prompt'], imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: styl pióro i lawowanie (prompty)', intro: 'Styl pióro i lawowanie łączy grube kreski pióra z lekkim lawowaniem i pustą przestrzenią. Trzy zestawy promptów: "młody listonosz", "dziecko zbierające kwiaty", "sprzedawca w sklepie papierniczym na kamiennej ścieżce"—użyj w Midjourney na LimaxAI.', overviewTitle: 'Przegląd', overviewText: 'Ten styl wykorzystuje kompozycję diagonalną, postacie Q, grube kreski szkicowe i wyolbrzymione proporcje.', examplesTitle: 'Trzy zestawy promptów', examplesIntro: 'Tabela listuje trzy pełne prompty. Skopiuj do Midjourney na LimaxAI.', tableHeaders: ['Scena', 'Prompt'], imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: penna och lavör stil (prompter)', intro: 'Penna och lavör stil kombinerar tjocka pennlinjer med lätt lavör och negativ space. Tre promptset: "ung brevbärare", "blomsterplockande barn", "pappershandelsmedarbetare på stentig"—använd i Midjourney på LimaxAI.', overviewTitle: 'Översikt', overviewText: 'Stilen använder diagonal komposition, Q-figurer, skissartade tjocka linjer och överdrivna proportioner.', examplesTitle: 'Tre promptset', examplesIntro: 'Tabellen listar tre fullständiga prompter. Kopiera till Midjourney på LimaxAI.', tableHeaders: ['Scen', 'Prompt'], imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: стиль перо і відмивка (промпти)', intro: 'Стиль перо і відмивка поєднує чіткі лінії пера, легку відмивку та повітряну композицію. Три набори промптів: «юний поштальйон», «дитина з квітами», «продавець канцтоварів на кам\'яній стежці»—використовуйте в Midjourney на LimaxAI.', overviewTitle: 'Огляд', overviewText: 'Стиль використовує діагональну композицію, Q-персонажів, грубі контури та перебільшені пропорції.', examplesTitle: 'Три набори промптів', examplesIntro: 'У таблиці — три повних промпти. Копіюйте в Midjourney на LimaxAI.', tableHeaders: ['Сцена', 'Промпт'], imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: stil cerneală și spălare (prompturi)', intro: 'Stilul cerneală și spălare combină linii de peniță groase cu spălare ușoară și spațiu negativ. Trei seturi de prompturi pentru "poștaș tânăr", "copil culegător de flori", "vânzător papetărie pe potecă de piatră"—folosiți în Midjourney pe LimaxAI.', overviewTitle: 'Prezentare', overviewText: 'Acest stil folosește compoziție diagonală, personaje Q, linii de schiță groase și proporții exagerate.', examplesTitle: 'Trei seturi de prompturi', examplesIntro: 'Tabelul listează trei prompturi complete. Copiați în Midjourney pe LimaxAI.', tableHeaders: ['Scenă', 'Prompt'], imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN.', ctaText: 'Începe crearea' },
};

function makePenWashInkArticle(locale: string): TutorialArticle {
  const c = penWashInkCopyByLocale[locale];
  if (!c) return articlePenWashInkEn;
  return {
    slug: 'midjourney-pen-wash-ink',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: penWashInkTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-29.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-30.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-31.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const PEN_WASH_INK_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articlePenWashInkByLocale: Record<string, TutorialArticle> = {
  en: articlePenWashInkEn,
  'zh-cn': articlePenWashInkZhCN,
  'zh-tw': articlePenWashInkZhTW,
  ...Object.fromEntries(PEN_WASH_INK_LOCALES.map((loc) => [loc, makePenWashInkArticle(loc)])),
};

/** 精选风格：英文提示词 | 中文翻译（20 组） */
const selectedStylesTableRowsZh: string[][] = [
  ['A zero-additive concept scene, pure and natural atmosphere, top part is a clear soft sky, bottom part is a cherry blossom grassland, the grassland filled with many pink cherry blossoms and a few small cherries scattered naturally, a large floating number "0" hovering above the grassland, the number 0 is entirely composed of delicate cherry blossoms, a narrow winding stream cuts diagonally through the center of the cherry blossom grassland, minimalistic composition, no extra elements, no text, no props, C4D modeling, ultra-realistic 3D scene, Octane render, photorealistic lighting, soft global illumination, cinematic depth of field, soft pink color palette, clean and fresh, high-end commercial visual style, extreme detail, ultra fine texture, 8K resolution, realistic photography quality', '零相加的概念场景，纯净自然的氛围，顶部是晴朗柔和的天空，底部是樱花草原，草原上长满粉红色樱花与自然散落的小樱桃，巨大漂浮数字「0」由精致樱花组成，狭窄蜿蜒小溪斜切穿过草原中心，极简构图，C4D 建模，Octane 渲染，8K 分辨率，逼真摄影品质'],
  ['a worms home inside a chees, walls of carved into the cheese, cave architecture, in the style of a stopmotion film set', '奶酪内的蠕虫之家，雕刻在奶酪中的墙壁，洞穴建筑，定格动画电影布景风格'],
  ['A wide-angle, high-altitude, oblique-angled panoramic shot from above, featuring an Eastern fairy style, with ultra-realistic CG rendering, gilded morning light and shadows. An Eastern fairy (back view, full body, clear outline, wearing a classical high bun hairstyle, wearing a plain white long-sleeved dress, the sleeves fluttering with each step, walking slowly down the white jade steps of the fairy palace, located at the center of the steps) The foreground is a thousand-step wide white jade fairy staircase (the staircase surface is inlaid with pale gold cloud patterns, the two sides have red lacquer railings carved with scroll-shaped fairy patterns, extending in depth), the background is a majestic gilded palace main hall (the eaves and gables soar straight into the clouds, the red walls are covered with glazed tiles), on both sides of the staircase, there are faint blue clouds swirling, below the sea of clouds is surging， and among the clouds， dark green peaks are jutting out here and there. The overall atmosphere is majestic and ethereal， with bright gilded tones. 32K ultra-high-definition quality， ultra-realistic CG style， Eastern fantasy aesthetics， fine quality， clear details without noise points.', '广角高空斜角俯视全景，东方仙女风格，超写实 CG 渲染，镀金晨光。东方仙子背影全身走下仙宫白玉台阶，前景千步宽白玉仙梯镶淡金云纹、红漆栏杆，背景鎏金宫殿红墙琉璃瓦，两侧淡蓝云朵与云海墨绿山峰，32K 超高清，东方奇幻美学'],
  ['A vivid bengal tiger swimming forward in clear turquoise water, viewed from above. The tiger fur is bright with orange and black stripes, realistic fur texture. Elegant powerful movement, front paws reaching forward, water ripples and light reflections around the body. Crystal-clear water with shimmering caustics, cinematic luxury fashion photography style. High realism, sharp details, premium advertising look.', '从上方观看，生动的孟加拉虎在清澈碧绿水中向前游动，橙黑条纹逼真毛发，优雅有力，前爪前伸，水波纹与光反射，水晶般清澈与焦散，电影级奢华时尚摄影风格'],
  ['a cartoon style crab. made of computer chips and wires. Pink accents. Black accents. Simple. Plain. No fluff. Minimalistic. White background', '卡通风格螃蟹，由计算机芯片和电线制成，粉红与黑色点缀，简约白底'],
  ['a symbolic flower in full bloom, petals forming an abstract feminine anatomy shape, purely botanical and non-sexual, inspired by orchids and lotus flowers, soft organic symmetry, deep inner glow at the center, delicate textures, macro photography style, ultra-detailed petals, cinematic soft lighting, dark neutral background, high contrast, negative space around the flower, feeling of dignity, protection, and resilience, ultra realistic, 8k, shallow depth of field', '盛开的象征性花朵，花瓣形成抽象女性解剖形状，纯植物性，灵感来自兰花与莲花，柔和有机对称，中心深邃内发光，微距摄影风格，8k 浅景深'],
  ['1970s vintage science fiction illustration, massive crescent alien planet dominating red sky, retro starship gliding over jagged mountains and misty valley, bold garish colors, saturated orange and magenta palette, airbrushed paperback cover style, analogue texture, soft grain, dramatic scale, Moebius atmosphere, in the style of Michael Whelan, John Berkey, John Harris, Pascal Blanch, classic sci-fi art, retro futurism, cinematic composition', '1970 年代复古科幻插图，巨大新月外星行星主宰红色天空，复古星舰滑翔于锯齿山脉与迷雾山谷，饱和橙洋红，喷枪平装封面风格，莫比乌斯气氛，经典科幻艺术'],
  ['realistic diet ingredients flying left and right for a cover background', '现实的饮食成分左右飞行作为封面背景'],
  ['Surreal desert landscape viewed through a massive swirling sandstone vortex tunnel, dramatic spiral rock formation with layered golden brown and amber textures creating concentric circular patterns, the vortex frames an oval opening to deep blue twilight sky, full moon centered in the upper portion of the opening, silhouette of a single palm tree against the sky, caravan of three camels with riders in black silhouette walking along the bottom edge of the frame, warm sandy ochre tones contrasting with cool blue night sky, dreamlike Arabian Nights atmosphere, dramatic natural framing composition, the spiral draws the eye inward toward the moonlit scene, painterly texture with visible brushstroke-like striations in the rock surface, mystical surrealism, vertical composition', '通过巨大旋转砂岩漩涡隧道观看超现实沙漠景观，螺旋岩层金棕琥珀纹理同心圆，漩涡框出深蓝暮色天空与满月，棕榈树剪影，三只骆驼与骑手沿底边行走，沙赭与冷蓝夜空对比，天方夜谭氛围，垂直构图'],
  ['A breathtaking wallpaper, top 30% as clean gradient sky for display. Below: The moment of a gigantic sun rising from a sea of molten lava or crimson clouds, casting blazing rays, in strictly red, orange and gold monochromatic palette. Epic, majestic, divine light, ultra detailed, 8k.', '令人惊叹的壁纸，上 30% 干净渐变天空，下方巨大太阳从熔岩海或深红云中升起，红橙金单色炽热光芒，史诗神圣光效，8k 超细节'],
  ['mysterious masked black ninja holding a silver sword facing a huge glass monster scorpion enormous scary glass water scorpion made of splashing water, high end concrete zen background, modern high end environment', '神秘蒙面黑忍者持银剑面对巨大玻璃怪物蝎子，溅水制成的玻璃水蝎子，高端混凝土禅宗背景'],
  ['Food photography of cute, cat-shaped doughnuts with white icing and a pink flower on the side, next to a coffee cup, in the style of a stock photo, with White pastel pallet , in high resolution.', '可爱的猫形甜甜圈食品摄影，白糖霜与粉色花朵，旁有咖啡杯，白色柔和调色，高分辨率'],
  ['3D rendering of an owl, a cute cartoon character.', '猫头鹰的 3D 渲染，可爱卡通角色'],
  ['top view, flat lay of an open book and a bouquet of flowers placed on a blue picnic mat on green grass, bright natural daylight, fresh spring atmosphere, soft shadows, aesthetic lifestyle photography, vibrant yet soft colors, clean composition, high detail, editorial style', '顶视图，平躺一本打开的书与一束鲜花放在绿草上的蓝色野餐垫，明亮自然光，清新春日，审美生活方式摄影，编辑风格'],
  ['a marble statue of an angel with spread wings in the center, rising from behind and above a wave-like cloud that forms around it. the background is ornate architecture, with people walking by on all sides. photorealistic style, hyperrealism, high resolution, in the style of a classical renaissance.', '中央张开翅膀的大理石天使雕像，从周围波浪状云朵后方升起，背景华丽建筑与行人，照片写实，古典文艺复兴风格'],
  ['a tiny girl wearing a red coat standing before a glowing forest portal, ancient trees forming surreal natural illusion rings, bioluminescent moss and soft magical light, dreamlike mystical forest atmosphere, symbol of memory and inner world, premium fantasy surreal wall art', '穿红色外套的小女孩站在发光森林门户前，古树形成超现实自然幻觉环，生物发光苔藓与柔和魔光，梦幻神秘森林，高级幻想超现实壁艺'],
  ['Oval gold frame surrounded by pink roses, inside the oval is a pink disco room, outside the oval pink sky and clouds in the background, fields of pink roses below, pink fantasy style.', '椭圆形金框环绕粉色玫瑰，框内粉色迪斯科房间，框外粉色天空云朵与下方玫瑰田，粉色梦幻风格'],
  ['Showcase sandwich in a visually appealing finished form--sliced, plated, or portioned--floating slightly in perspective or angled view. Arrange ingredients, steps, and tips around the dish in a dynamic editorial layout. Ingredients Section: Include icons or mini illustrations for each ingredient with quantities. Steps Section: Show preparation steps with numbered panels, arrows, or lines. Visual Style: Editorial infographic meets lifestyle food photography. Vibrant, natural food colors, subtle drop shadows, clean vector icons. Composition: Finished meal as hero visual. Lighting: Soft, natural studio lighting. Output: 1080×1080, ultra-crisp, social-feed optimized.', '以视觉吸引的成品形式展示三明治（切片/装盘/分份），透视或角度略浮。围绕主菜动态编排食材、步骤与贴士，配料带图标与用量，步骤用编号面板与箭头。编辑信息图结合生活方式食品摄影，1080×1080 超清晰社交优化'],
  ['split screen, left side is red background with fire and devil theme, right side is blue background with ice and angel theme, 3d render, hyper realistic, high quality, cinematic lighting', '分屏，左侧红色背景火与魔鬼主题，右侧蓝色背景冰与天使主题，3D 渲染，超现实，电影灯光'],
  ['photograph of the interior of a real RANGE ROVER L332, with lush green forest like grass, mushrooms and forest flowers throughout the scene. the interior is decorated with PINK velvet seats and forest on all sides. in front, there\'s an old-fashioned, european-style window. a photorealistic image designed to look realistic. Wide view of the car, standing in the middle of mushroom forest', '真实路虎揽胜 L332 内饰照片，场景中郁郁葱葱的绿草、蘑菇与森林花朵，粉色天鹅绒座椅与四周森林，前有老式欧式窗，逼真图像，蘑菇林中央宽视野'],
];

const selectedStylesTableRowsEn: string[][] = [
  ['A zero-additive concept scene, pure and natural atmosphere, cherry blossom grassland, large floating number "0" composed of cherry blossoms, narrow winding stream, minimalistic composition, C4D modeling, Octane render, 8K resolution, realistic photography quality', 'Zero-additive scene, cherry blossom grassland and number 0, C4D, 8K.'],
  ['a worms home inside a chees, walls of carved into the cheese, cave architecture, in the style of a stopmotion film set', 'Worm home in cheese, cave architecture, stop-motion film set style.'],
  ['A wide-angle, high-altitude, oblique-angled panoramic shot from above, featuring an Eastern fairy style, with ultra-realistic CG rendering, gilded morning light. An Eastern fairy (back view, full body) walking slowly down the white jade steps of the fairy palace. The foreground is a thousand-step wide white jade fairy staircase, the background is a majestic gilded palace main hall. 32K ultra-high-definition quality, Eastern fantasy aesthetics.', 'Eastern fairy on white jade steps, gilded palace, 32K CG.'],
  ['A vivid bengal tiger swimming forward in clear turquoise water, viewed from above. The tiger fur is bright with orange and black stripes. Crystal-clear water with shimmering caustics, cinematic luxury fashion photography style.', 'Bengal tiger swimming from above, turquoise water, luxury fashion style.'],
  ['a cartoon style crab. made of computer chips and wires. Pink accents. Black accents. Simple. Minimalistic. White background', 'Cartoon crab from chips and wires, pink and black, white background.'],
  ['a symbolic flower in full bloom, petals forming an abstract feminine anatomy shape, inspired by orchids and lotus flowers, macro photography style, ultra realistic, 8k, shallow depth of field', 'Symbolic flower, orchid and lotus inspired, macro, 8k.'],
  ['1970s vintage science fiction illustration, massive crescent alien planet dominating red sky, retro starship gliding over jagged mountains, saturated orange and magenta palette, airbrushed paperback cover style, Moebius atmosphere, classic sci-fi art, retro futurism', '1970s sci-fi illustration, alien planet, retro starship, Moebius style.'],
  ['realistic diet ingredients flying left and right for a cover background', 'Diet ingredients flying for cover background.'],
  ['Surreal desert landscape viewed through a massive swirling sandstone vortex tunnel, full moon, palm tree silhouette, caravan of camels, warm sandy ochre contrasting with cool blue night sky, Arabian Nights atmosphere, vertical composition', 'Desert through vortex tunnel, moon, camels, Arabian Nights.'],
  ['A breathtaking wallpaper, top 30% clean gradient sky. Below: gigantic sun rising from lava or crimson clouds, strictly red, orange and gold palette. Epic, majestic, 8k.', 'Wallpaper, sun rising from lava/crimson clouds, red-orange-gold, 8k.'],
  ['mysterious masked black ninja holding a silver sword facing a huge glass monster scorpion made of splashing water, high end concrete zen background', 'Black ninja vs glass water scorpion, zen concrete background.'],
  ['Food photography of cute, cat-shaped doughnuts with white icing and pink flower, next to coffee cup, white pastel palette, high resolution.', 'Cat-shaped doughnuts food photo, coffee cup, pastel.'],
  ['3D rendering of an owl, a cute cartoon character.', '3D cute cartoon owl.'],
  ['top view, flat lay of an open book and a bouquet of flowers on blue picnic mat on green grass, bright natural daylight, fresh spring atmosphere, aesthetic lifestyle photography, editorial style', 'Flat lay book and flowers on picnic mat, spring, editorial.'],
  ['a marble statue of an angel with spread wings in the center, rising from wave-like cloud, ornate architecture background, people walking by, photorealistic, classical renaissance style.', 'Marble angel with wings, cloud, renaissance style.'],
  ['a tiny girl wearing a red coat standing before a glowing forest portal, ancient trees forming surreal natural illusion rings, bioluminescent moss, dreamlike mystical forest, premium fantasy surreal wall art', 'Girl in red coat before glowing forest portal, bioluminescent moss.'],
  ['Oval gold frame surrounded by pink roses, inside pink disco room, outside pink sky and clouds, fields of pink roses below, pink fantasy style.', 'Oval gold frame, pink disco room inside, pink roses outside.'],
  ['Showcase sandwich in finished form floating in perspective. Arrange ingredients, steps, tips around the dish in dynamic editorial layout. Editorial infographic meets lifestyle food photography. 1080×1080, ultra-crisp.', 'Sandwich showcase, editorial infographic, ingredients and steps, 1080×1080.'],
  ['split screen, left red background fire and devil theme, right blue background ice and angel theme, 3d render, hyper realistic, cinematic lighting', 'Split screen fire/devil vs ice/angel, 3D, cinematic.'],
  ['photograph of the interior of a real RANGE ROVER L332, lush green forest grass, mushrooms and forest flowers, PINK velvet seats, forest on all sides, old-fashioned european-style window, standing in mushroom forest', 'Range Rover L332 interior in mushroom forest, pink velvet, forest.'],
];

const articleSelectedStylesZhCN: TutorialArticle = {
  slug: 'midjourney-selected-styles',
  title: 'Midjourney提示词—精选风格',
  intro: '本期整理 20 张 Midjourney 作品，涵盖概念场景、东方仙侠、野生动物、复古科幻、沙漠漩涡、壁纸、忍者与蝎子、美食与生活方式、天使雕像、森林门户、分屏与车内森林等多样风格，每张附英文提示词与中文翻译，可在 LimaxAI 的 Midjourney 中直接使用。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '以下 20 组提示词涵盖 3D/C4D、定格动画、超写实 CG、微距摄影、复古插画、超现实主义、食品与生活方式摄影、文艺复兴风格等多种视觉风格，便于参考与二创。' }] },
    { id: 'examples', title: '20 组精选风格提示词', blocks: [{ type: 'paragraph', text: '下表为 20 组完整英文提示词及对应中文翻译，可直接复制到 LimaxAI 的 Midjourney 中使用。' }, { type: 'table', headers: ['英文提示词', '中文翻译'], rows: selectedStylesTableRowsZh }] },
    { id: 'image1', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-32.webp', alt: '精选风格效果图 1', caption: '效果图 1' }] },
    { id: 'image2', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-33.webp', alt: '精选风格效果图 2', caption: '效果图 2' }] },
    { id: 'image3', title: '效果图', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-34.webp', alt: '精选风格效果图 3', caption: '效果图 3' }] },
    { id: 'start', title: '开始创作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示词与 Midjourney 等模型生成各类风格图片，无需翻墙，一个账号即可体验多种 AI 模型。' }, { type: 'cta', text: '开始创作', url: 'https://limaxai.com' }] },
  ],
};

const articleSelectedStylesZhTW: TutorialArticle = {
  slug: 'midjourney-selected-styles',
  title: 'Midjourney提示詞—精選風格',
  intro: '本期整理 20 張 Midjourney 作品，涵蓋概念場景、東方仙俠、野生動物、復古科幻、沙漠漩渦、壁紙、忍者與蠍子、美食與生活方式、天使雕像、森林門戶、分屏與車內森林等多樣風格，每張附英文提示詞與中文翻譯，可在 LimaxAI 的 Midjourney 中直接使用。',
  sections: [
    { id: 'overview', title: '概述', blocks: [{ type: 'paragraph', text: '以下 20 組提示詞涵蓋 3D/C4D、定格動畫、超寫實 CG、微距攝影、復古插畫、超現實主義、食品與生活方式攝影、文藝復興風格等多種視覺風格，便於參考與二創。' }] },
    { id: 'examples', title: '20 組精選風格提示詞', blocks: [{ type: 'paragraph', text: '下表為 20 組完整英文提示詞及對應中文翻譯，可直接複製到 LimaxAI 的 Midjourney 中使用。' }, { type: 'table', headers: ['英文提示詞', '中文翻譯'], rows: selectedStylesTableRowsZh }] },
    { id: 'image1', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-32.webp', alt: '精選風格效果圖 1', caption: '效果圖 1' }] },
    { id: 'image2', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-33.webp', alt: '精選風格效果圖 2', caption: '效果圖 2' }] },
    { id: 'image3', title: '效果圖', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-34.webp', alt: '精選風格效果圖 3', caption: '效果圖 3' }] },
    { id: 'start', title: '開始創作', blocks: [{ type: 'paragraph', text: '在 LimaxAI 上可直接使用上述提示詞與 Midjourney 等模型生成各類風格圖片，無需翻牆，一個帳號即可體驗多種 AI 模型。' }, { type: 'cta', text: '開始創作', url: 'https://limaxai.com' }] },
  ],
};

const articleSelectedStylesEn: TutorialArticle = {
  slug: 'midjourney-selected-styles',
  title: 'Midjourney: Selected Styles (Prompts & Translation)',
  intro: 'This guide collects 20 Midjourney images across concept scenes, Eastern fantasy, wildlife, vintage sci-fi, desert vortex, wallpapers, ninja vs scorpion, food and lifestyle, angel statue, forest portal, split screen, and car-in-forest styles. Each has full English prompt and Chinese translation—use them directly in Midjourney on LimaxAI.',
  sections: [
    { id: 'overview', title: 'Overview', blocks: [{ type: 'paragraph', text: 'The 20 prompts below cover 3D/C4D, stop-motion, hyper-realistic CG, macro photography, vintage illustration, surrealism, food and lifestyle photography, and Renaissance-style visuals for reference and remix.' }] },
    { id: 'examples', title: '20 selected style prompts', blocks: [{ type: 'paragraph', text: 'The table lists 20 full English prompts with short descriptions. Copy them into Midjourney on LimaxAI to generate images.' }, { type: 'table', headers: ['English prompt', 'Description'], rows: selectedStylesTableRowsEn }] },
    { id: 'image1', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-32.webp', alt: 'Selected styles sample 1', caption: 'Sample 1' }] },
    { id: 'image2', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-33.webp', alt: 'Selected styles sample 2', caption: 'Sample 2' }] },
    { id: 'image3', title: 'Sample image', blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-34.webp', alt: 'Selected styles sample 3', caption: 'Sample 3' }] },
    { id: 'start', title: 'Start creating', blocks: [{ type: 'paragraph', text: 'Use these prompts with Midjourney and other models on LimaxAI—no VPN needed, one account for multiple AI tools.' }, { type: 'cta', text: 'Start creating', url: 'https://limaxai.com' }] },
  ],
};

/** 精选风格教程各语种文案（其余语种用英文表格） */
interface SelectedStylesArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string];
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const selectedStylesCopyByLocale: Record<string, SelectedStylesArticleCopy> = {
  es: { title: 'Midjourney: estilos seleccionados (prompts y traducción)', intro: '20 imágenes Midjourney: escenas conceptuales, fantasía oriental, vida salvaje, sci-fi vintage, vortex desértico, wallpapers, ninja vs escorpión, comida y lifestyle, ángel, portal forestal, split screen, coche en bosque. Usa los prompts en Midjourney en LimaxAI.', overviewTitle: 'Resumen', overviewText: 'Los 20 prompts cubren 3D/C4D, stop-motion, CG hiperrealista, macro, ilustración vintage, surrealismo, fotografía food y lifestyle, estilo renacimiento.', examplesTitle: '20 prompts de estilos seleccionados', examplesIntro: 'La tabla lista 20 prompts completos en inglés con descripción.', tableHeaders: ['Prompt en inglés', 'Descripción'], imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: أنماط مختارة (أوامر وترجمة)', intro: '20 صورة Midjourney بأنماط متنوعة. استخدم الأوامر في Midjourney على LimaxAI.', overviewTitle: 'نظرة عامة', overviewText: '20 أمراً يغطي 3D/C4D وstop-motion وCG واقعي وماكرو ورسوم قديمة وسريالية وتصوير طعام وحياة.', examplesTitle: '20 أمر أنماط مختارة', examplesIntro: 'الجدول يدرج 20 أمراً إنجليزياً كاملاً مع وصف.', tableHeaders: ['الأمر بالإنجليزية', 'الوصف'], imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: estilos selecionados (prompts e tradução)', intro: '20 imagens Midjourney em estilos diversos. Use os prompts no Midjourney no LimaxAI.', overviewTitle: 'Visão geral', overviewText: 'Os 20 prompts cobrem 3D/C4D, stop-motion, CG hiperrealista, macro, ilustração vintage, surrealismo, fotografia de comida e lifestyle.', examplesTitle: '20 prompts de estilos selecionados', examplesIntro: 'A tabela lista 20 prompts em inglês com descrição.', tableHeaders: ['Prompt em inglês', 'Descrição'], imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: gaya pilihan (prompt & terjemahan)', intro: '20 gambar Midjourney dalam berbagai gaya. Gunakan prompt di Midjourney di LimaxAI.', overviewTitle: 'Ringkasan', overviewText: '20 prompt mencakup 3D/C4D, stop-motion, CG hiperrealistis, makro, ilustrasi vintage, surealisme, fotografi makanan dan gaya hidup.', examplesTitle: '20 prompt gaya pilihan', examplesIntro: 'Tabel berisi 20 prompt bahasa Inggris lengkap dengan deskripsi.', tableHeaders: ['Prompt bahasa Inggris', 'Deskripsi'], imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: gaya terpilih (prompt & terjemahan)', intro: '20 imej Midjourney dalam pelbagai gaya. Guna prompt dalam Midjourney di LimaxAI.', overviewTitle: 'Gambaran', overviewText: '20 prompt merangkumi 3D/C4D, stop-motion, CG hiperrealistik, makro, ilustrasi vintage, surealisme, fotografi makanan dan gaya hidup.', examplesTitle: '20 prompt gaya terpilih', examplesIntro: 'Jadual menyenaraikan 20 prompt Inggeris penuh dengan penerangan.', tableHeaders: ['Prompt Inggeris', 'Penerangan'], imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney : styles sélectionnés (prompts et traduction)', intro: '20 images Midjourney dans des styles variés. Utilisez les prompts dans Midjourney sur LimaxAI.', overviewTitle: 'Aperçu', overviewText: 'Les 20 prompts couvrent 3D/C4D, stop-motion, CG hyperréaliste, macro, illustration vintage, surréalisme, photo food et lifestyle.', examplesTitle: '20 prompts de styles sélectionnés', examplesIntro: 'Le tableau liste 20 prompts en anglais avec description.', tableHeaders: ['Prompt en anglais', 'Description'], imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: избранные стили (промпты и перевод)', intro: '20 изображений Midjourney в разных стилях. Используйте промпты в Midjourney на LimaxAI.', overviewTitle: 'Обзор', overviewText: '20 промптов охватывают 3D/C4D, stop-motion, гиперреалистичный CG, макро, винтажную иллюстрацию, сюрреализм, фуд- и лайфстайл-фото.', examplesTitle: '20 промптов избранных стилей', examplesIntro: 'В таблице — 20 полных английских промптов с описанием.', tableHeaders: ['Англ. промпт', 'Описание'], imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: चयनित स्टाइल (प्रॉम्प्ट और अनुवाद)', intro: '20 Midjourney छवियाँ विविध स्टाइल में। LimaxAI पर Midjourney में प्रॉम्प्ट इस्तेमाल करें।', overviewTitle: 'अवलोकन', overviewText: '20 प्रॉम्प्ट में 3D/C4D, स्टॉप-मोशन, हाइपररियलिस्टिक CG, मैक्रो, विंटेज इलस्ट्रेशन, सरियलिज़्म, फूड व लाइफस्टाइल फोटोग्राफी।', examplesTitle: '20 चयनित स्टाइल प्रॉम्प्ट', examplesIntro: 'तालिका में 20 पूर्ण अंग्रेज़ी प्रॉम्प्ट और विवरण।', tableHeaders: ['अंग्रेज़ी प्रॉम्प्ट', 'विवरण'], imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: セレクトスタイル（プロンプト・訳付き）', intro: '20点のMidjourney画像、コンセプト・東方幻想・野生・ヴィンテージSF・砂漠渦・壁紙・忍者とサソリ・料理・天使・森の門・スプリット・車内森など。LimaxAIのMidjourneyでそのまま使えます。', overviewTitle: '概要', overviewText: '20個のプロンプトは3D/C4D、ストップモーション、超写実CG、マクロ、ヴィンテージイラスト、シュルレアリスム、フード・ライフスタイル写真などをカバー。', examplesTitle: '20のセレクトスタイルプロンプト', examplesIntro: '下表は英文プロンプト全文と短い説明です。', tableHeaders: ['英語プロンプト', '説明'], imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他モデルでLimaxAIで使用—VPN不要。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: ausgewählte Stile (Prompts & Übersetzung)', intro: '20 Midjourney-Bilder in verschiedenen Stilen. Nutzen Sie die Prompts in Midjourney auf LimaxAI.', overviewTitle: 'Überblick', overviewText: 'Die 20 Prompts decken 3D/C4D, Stop-Motion, hyperrealistischen CG, Makro, Vintage-Illustration, Surrealismus, Food- und Lifestyle-Fotografie ab.', examplesTitle: '20 Prompts ausgewählter Stile', examplesIntro: 'Die Tabelle listet 20 vollständige englische Prompts mit Beschreibung.', tableHeaders: ['Engl. Prompt', 'Beschreibung'], imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: 선별 스타일 (프롬프트·번역)', intro: '20장의 Midjourney 이미지, 컨셉·동방 판타지·야생·레트로 SF·사막 소용돌이·벽지·닌자와 전갈·푸드·천사·숲 포털·스플릿·차량 숲 등. LimaxAI의 Midjourney에서 바로 사용하세요.', overviewTitle: '개요', overviewText: '20개 프롬프트는 3D/C4D, 스톱모션, 초사실 CG, 매크로, 빈티지 일러스트, 초현실주의, 푸드·라이프스타일 사진 등을 다룹니다.', examplesTitle: '20선 스타일 프롬프트', examplesIntro: '아래 표는 영문 프롬프트 전문과 짧은 설명입니다.', tableHeaders: ['영어 프롬프트', '설명'], imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: seçilmiş stiller (promptlar ve çeviri)', intro: '20 Midjourney görseli, çeşitli stiller. LimaxAI\'da Midjourney\'de promptları kullanın.', overviewTitle: 'Genel bakış', overviewText: '20 prompt 3D/C4D, stop-motion, hipergerçekçi CG, makro, vintage illüstrasyon, sürrealizm, yemek ve yaşam tarzı fotoğrafçılığını kapsar.', examplesTitle: '20 seçilmiş stil promptu', examplesIntro: 'Tablo 20 tam İngilizce prompt ve açıklama listeler.', tableHeaders: ['İngilizce prompt', 'Açıklama'], imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: phong cách chọn lọc (prompt và bản dịch)', intro: '20 ảnh Midjourney đa phong cách. Dùng prompt trong Midjourney trên LimaxAI.', overviewTitle: 'Tổng quan', overviewText: '20 prompt gồm 3D/C4D, stop-motion, CG siêu thực, macro, minh họa vintage, siêu thực, nhiếp ảnh đồ ăn và lối sống.', examplesTitle: '20 prompt phong cách chọn lọc', examplesIntro: 'Bảng liệt kê 20 prompt tiếng Anh đầy đủ và mô tả.', tableHeaders: ['Prompt tiếng Anh', 'Mô tả'], imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: สไตล์เลือก (พรอมป์และคำแปล)', intro: '20 ภาพ Midjourney หลายสไตล์ ใช้พรอมป์ใน Midjourney บน LimaxAI', overviewTitle: 'ภาพรวม', overviewText: '20 พรอมป์ครอบคลุม 3D/C4D สต็อปโมชัน CG เหมือนจริงมาก มาโคร ภาพวาดวินเทจ สюрเรียลลิสม์ ภาพถ่ายอาหารและไลฟ์สไตล์', examplesTitle: '20 พรอมป์สไตล์เลือก', examplesIntro: 'ตารางแสดงพรอมป์ภาษาอังกฤษเต็ม 20 รายการพร้อมคำอธิบาย', tableHeaders: ['พรอมป์ภาษาอังกฤษ', 'คำอธิบาย'], imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: stili selezionati (prompt e traduzione)', intro: '20 immagini Midjourney in stili vari. Usa i prompt in Midjourney su LimaxAI.', overviewTitle: 'Panoramica', overviewText: 'I 20 prompt coprono 3D/C4D, stop-motion, CG iperrealistico, macro, illustrazione vintage, surrealismo, fotografia food e lifestyle.', examplesTitle: '20 prompt di stili selezionati', examplesIntro: 'La tabella elenca 20 prompt in inglese completi con descrizione.', tableHeaders: ['Prompt in inglese', 'Descrizione'], imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: سبک‌های برگزیده (پرامپت و ترجمه)', intro: '۲۰ تصویر Midjourney در سبک‌های متنوع. در Midjourney روی LimaxAI از پرامپت استفاده کنید.', overviewTitle: 'خلاصه', overviewText: '۲۰ پرامپت سبک‌های 3D/C4D، استاپ‌موشن، CG فراواقع‌گرا، ماکرو، تصویرسازی وینتیج، سورئالیسم و عکس غذا و سبک زندگی را پوشش می‌دهند.', examplesTitle: '۲۰ پرامپت سبک برگزیده', examplesIntro: 'جدول ۲۰ پرامپت انگلیسی کامل با توضیح فهرست می‌کند.', tableHeaders: ['پرامپت انگلیسی', 'توضیح'], imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: geselecteerde stijlen (prompts en vertaling)', intro: '20 Midjourney-beelden in diverse stijlen. Gebruik de prompts in Midjourney op LimaxAI.', overviewTitle: 'Overzicht', overviewText: 'De 20 prompts beslaan 3D/C4D, stop-motion, hyperrealistische CG, macro, vintage-illustratie, surrealisme, food- en lifestylefotografie.', examplesTitle: '20 prompts geselecteerde stijlen', examplesIntro: 'De tabel somt 20 volledige Engelse prompts met beschrijving op.', tableHeaders: ['Engelse prompt', 'Beschrijving'], imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: wybrane style (prompty i tłumaczenie)', intro: '20 obrazów Midjourney w różnych stylach. Użyj promptów w Midjourney na LimaxAI.', overviewTitle: 'Przegląd', overviewText: '20 promptów obejmuje 3D/C4D, stop-motion, hiperrealistyczny CG, makro, ilustrację vintage, surrealizm, fotografię food i lifestyle.', examplesTitle: '20 promptów wybranych stylów', examplesIntro: 'Tabela listuje 20 pełnych angielskich promptów z opisem.', tableHeaders: ['Prompt po angielsku', 'Opis'], imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: utvalda stilar (prompter och översättning)', intro: '20 Midjourney-bilder i olika stilar. Använd prompterna i Midjourney på LimaxAI.', overviewTitle: 'Översikt', overviewText: '20 prompter täcker 3D/C4D, stop-motion, hyperrealistisk CG, makro, vintage-illustration, surrealism, mat- och livsstilsfotografi.', examplesTitle: '20 prompter utvalda stilar', examplesIntro: 'Tabellen listar 20 fullständiga engelska prompter med beskrivning.', tableHeaders: ['Engelsk prompt', 'Beskrivning'], imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: обрані стилі (промпти та переклад)', intro: '20 зображень Midjourney у різних стилях. Використовуйте промпти в Midjourney на LimaxAI.', overviewTitle: 'Огляд', overviewText: '20 промптів охоплюють 3D/C4D, stop-motion, гіперреалістичний CG, макро, вінтидж-ілюстрацію, сюрреалізм, фуд- та лайфстайл-фото.', examplesTitle: '20 промптів обраних стилів', examplesIntro: 'У таблиці — 20 повних англійських промптів з описом.', tableHeaders: ['Англ. промпт', 'Опис'], imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: stiluri selectate (prompturi și traducere)', intro: '20 imagini Midjourney în stiluri variate. Folosiți prompturile în Midjourney pe LimaxAI.', overviewTitle: 'Prezentare', overviewText: 'Cele 20 prompturi acoperă 3D/C4D, stop-motion, CG hiperrealist, macro, ilustrație vintage, suprarealism, fotografie food și lifestyle.', examplesTitle: '20 prompturi stiluri selectate', examplesIntro: 'Tabelul listează 20 prompturi complete în engleză cu descriere.', tableHeaders: ['Prompt în engleză', 'Descriere'], imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI.', ctaText: 'Începe crearea' },
};

function makeSelectedStylesArticle(locale: string): TutorialArticle {
  const c = selectedStylesCopyByLocale[locale];
  if (!c) return articleSelectedStylesEn;
  return {
    slug: 'midjourney-selected-styles',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: selectedStylesTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-32.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-33.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-34.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const SELECTED_STYLES_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleSelectedStylesByLocale: Record<string, TutorialArticle> = {
  en: articleSelectedStylesEn,
  'zh-cn': articleSelectedStylesZhCN,
  'zh-tw': articleSelectedStylesZhTW,
  ...Object.fromEntries(SELECTED_STYLES_LOCALES.map((loc) => [loc, makeSelectedStylesArticle(loc)])),
};

/** 精选提示词教程各语种文案（其余语种用英文表格） */
interface SelectedPromptsArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string];
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const selectedPromptsCopyByLocale: Record<string, SelectedPromptsArticleCopy> = {
  es: { title: 'Midjourney: 20 prompts seleccionados (texto completo y traducción)', intro: 'Recopilación de 20 imágenes Midjourney con prompt en inglés y traducción al chino para referencia y remix. Úsalos en Midjourney en LimaxAI sin VPN.', overviewTitle: 'Resumen', overviewText: 'Los 20 prompts cubren estilos cartoon, tinta, clipart, doble exposición, fantasía e ilustración. Cada fila incluye el prompt completo y descripción; cópialos en Midjourney en LimaxAI.', examplesTitle: '20 prompts seleccionados', examplesIntro: 'La tabla lista 20 prompts completos en inglés con descripción.', tableHeaders: ['Prompt en inglés', 'Descripción'], imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN, una cuenta para varias herramientas.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: 20 أمراً مختاراً (نص كامل وترجمة)', intro: 'مجموعة 20 صورة Midjourney مع الأمر بالإنجليزية والترجمة الصينية للمرجعية وإعادة الاستخدام. استخدمها في Midjourney على LimaxAI بدون VPN.', overviewTitle: 'نظرة عامة', overviewText: 'الأوامر العشرون تغطي رسوم كارتوون، حبر، كليب آرت، تعريض مزدوج، فانتازيا ورسوم. انسخها في Midjourney على LimaxAI.', examplesTitle: '20 أمراً مختاراً', examplesIntro: 'الجدول يدرج 20 أمراً إنجليزياً كاملاً مع وصف.', tableHeaders: ['الأمر بالإنجليزية', 'الوصف'], imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: 20 prompts selecionados (texto completo e tradução)', intro: 'Coleção de 20 imagens Midjourney com prompt em inglês e tradução para chinês. Use no Midjourney no LimaxAI sem VPN.', overviewTitle: 'Visão geral', overviewText: 'Os 20 prompts cobrem cartoon, pintura em tinta, clipart, dupla exposição, fantasia e ilustração. Copie no Midjourney no LimaxAI.', examplesTitle: '20 prompts selecionados', examplesIntro: 'A tabela lista 20 prompts em inglês com descrição.', tableHeaders: ['Prompt em inglês', 'Descrição'], imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: 20 prompt pilihan (teks lengkap & terjemahan)', intro: 'Kumpulan 20 gambar Midjourney dengan prompt bahasa Inggris dan terjemahan Cina. Gunakan di Midjourney di LimaxAI tanpa VPN.', overviewTitle: 'Ringkasan', overviewText: '20 prompt mencakup gaya kartun, tinta, clipart, double exposure, fantasi, dan ilustrasi. Salin ke Midjourney di LimaxAI.', examplesTitle: '20 prompt pilihan', examplesIntro: 'Tabel berisi 20 prompt bahasa Inggris lengkap dengan deskripsi.', tableHeaders: ['Prompt bahasa Inggris', 'Deskripsi'], imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: 20 prompt terpilih (teks penuh & terjemahan)', intro: 'Koleksi 20 imej Midjourney dengan prompt Inggeris dan terjemahan Cina. Guna dalam Midjourney di LimaxAI tanpa VPN.', overviewTitle: 'Gambaran', overviewText: '20 prompt merangkumi gaya kartun, dakwat, klip art, pendedahan berganda, fantasi dan ilustrasi. Salin ke Midjourney di LimaxAI.', examplesTitle: '20 prompt terpilih', examplesIntro: 'Jadual menyenaraikan 20 prompt Inggeris penuh dengan penerangan.', tableHeaders: ['Prompt Inggeris', 'Penerangan'], imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney : 20 prompts sélectionnés (texte complet et traduction)', intro: '20 images Midjourney avec prompt en anglais et traduction chinoise. Utilisez-les dans Midjourney sur LimaxAI sans VPN.', overviewTitle: 'Aperçu', overviewText: 'Les 20 prompts couvrent cartoon, encre, clipart, double exposition, fantaisie et illustration. Copiez dans Midjourney sur LimaxAI.', examplesTitle: '20 prompts sélectionnés', examplesIntro: 'Le tableau liste 20 prompts en anglais avec description.', tableHeaders: ['Prompt en anglais', 'Description'], imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: 20 избранных промптов (полный текст и перевод)', intro: 'Подборка 20 изображений Midjourney с английским промптом и китайским переводом. Используйте в Midjourney на LimaxAI без VPN.', overviewTitle: 'Обзор', overviewText: '20 промптов охватывают стили: мультфильм, тушь, клипарт, двойная экспозиция, фэнтези, иллюстрация. Копируйте в Midjourney на LimaxAI.', examplesTitle: '20 избранных промптов', examplesIntro: 'В таблице — 20 полных английских промптов с описанием.', tableHeaders: ['Англ. промпт', 'Описание'], imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: 20 चयनित प्रॉम्प्ट (पूर्ण पाठ और अनुवाद)', intro: '20 Midjourney छवियों का संग्रह, अंग्रेज़ी प्रॉम्प्ट और चीनी अनुवाद के साथ। LimaxAI पर Midjourney में बिना VPN इस्तेमाल करें।', overviewTitle: 'अवलोकन', overviewText: '20 प्रॉम्प्ट कार्टून, स्याही, क्लिप आर्ट, डबल एक्सपोज़र, फ़ंतासी और इलस्ट्रेशन कवर करते हैं। LimaxAI पर Midjourney में कॉपी करें।', examplesTitle: '20 चयनित प्रॉम्प्ट', examplesIntro: 'तालिका में 20 पूर्ण अंग्रेज़ी प्रॉम्प्ट और विवरण।', tableHeaders: ['अंग्रेज़ी प्रॉम्प्ट', 'विवरण'], imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: 20選プロンプト（全文・中国語訳付き）', intro: 'Midjourney画像20点を収録。各英文プロンプトと中国語訳付き。LimaxAIのMidjourneyでVPN不要でそのまま使えます。', overviewTitle: '概要', overviewText: '20個のプロンプトはカートゥーン、水墨、クリップアート、二重露出、ファンタジー、イラストなど。LimaxAIのMidjourneyにコピーして使用・改変できます。', examplesTitle: '20選プロンプト', examplesIntro: '下表は英文プロンプト全文と短い説明です。', tableHeaders: ['英語プロンプト', '説明'], imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他モデルでLimaxAIで使用—VPN不要。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: 20 ausgewählte Prompts (Volltext & Übersetzung)', intro: '20 Midjourney-Bilder mit englischem Prompt und chinesischer Übersetzung. Direkt in Midjourney auf LimaxAI nutzen—ohne VPN.', overviewTitle: 'Überblick', overviewText: 'Die 20 Prompts decken Cartoon, Tinte, Clipart, Doppelbelichtung, Fantasy und Illustration ab. In Midjourney auf LimaxAI kopieren.', examplesTitle: '20 ausgewählte Prompts', examplesIntro: 'Die Tabelle listet 20 vollständige englische Prompts mit Beschreibung.', tableHeaders: ['Engl. Prompt', 'Beschreibung'], imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: 20선 선별 프롬프트 (전문·중문 번역)', intro: 'Midjourney 이미지 20장, 각각 영문 프롬프트와 중국어 번역 수록. LimaxAI의 Midjourney에서 VPN 없이 바로 사용할 수 있습니다.', overviewTitle: '개요', overviewText: '20개 프롬프트는 카툰, 수묵, 클립아트, 이중노출, 판타지, 일러스트 등 다양한 스타일을 다룹니다. LimaxAI의 Midjourney에 복사해 사용·수정하세요.', examplesTitle: '20선 프롬프트', examplesIntro: '아래 표는 영문 프롬프트 전문과 짧은 설명입니다.', tableHeaders: ['영어 프롬프트', '설명'], imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: 20 seçilmiş prompt (tam metin ve çeviri)', intro: '20 Midjourney görseli, İngilizce prompt ve Çince çeviri ile. LimaxAI\'da Midjourney\'de VPN olmadan kullanın.', overviewTitle: 'Genel bakış', overviewText: '20 prompt çizgi film, mürekkep, klip art, çift pozlama, fantezi ve illüstrasyon stillerini kapsar. LimaxAI\'da Midjourney\'e kopyalayın.', examplesTitle: '20 seçilmiş prompt', examplesIntro: 'Tablo 20 tam İngilizce prompt ve açıklama listeler.', tableHeaders: ['İngilizce prompt', 'Açıklama'], imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: 20 prompt chọn lọc (đầy đủ văn bản và bản dịch)', intro: '20 ảnh Midjourney kèm prompt tiếng Anh và bản dịch tiếng Trung. Dùng trực tiếp trong Midjourney trên LimaxAI, không cần VPN.', overviewTitle: 'Tổng quan', overviewText: '20 prompt gồm phong cách hoạt hình, mực, clipart, double exposure, fantasy và minh họa. Sao chép vào Midjourney trên LimaxAI.', examplesTitle: '20 prompt chọn lọc', examplesIntro: 'Bảng liệt kê 20 prompt tiếng Anh đầy đủ và mô tả ngắn.', tableHeaders: ['Prompt tiếng Anh', 'Mô tả'], imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: 20 พรอมป์เลือก (ข้อความเต็มและคำแปล)', intro: 'รวบรวมภาพ Midjourney 20 รายการ พร้อมพรอมป์ภาษาอังกฤษและคำแปลจีน ใช้ใน Midjourney บน LimaxAI ได้โดยไม่ต้องใช้ VPN', overviewTitle: 'ภาพรวม', overviewText: '20 พรอมป์ครอบคลุมสไตล์การ์ตูน ดินสอ คลิปอาร์ต ดับเบิลเอ็กซโพเชอร์ แฟนตาซี และภาพประกอบ คัดลอกไปใช้ใน Midjourney บน LimaxAI', examplesTitle: '20 พรอมป์เลือก', examplesIntro: 'ตารางแสดงพรอมป์ภาษาอังกฤษเต็ม 20 รายการพร้อมคำอธิบายสั้นๆ', tableHeaders: ['พรอมป์ภาษาอังกฤษ', 'คำอธิบาย'], imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: 20 prompt selezionati (testo completo e traduzione)', intro: '20 immagini Midjourney con prompt in inglese e traduzione cinese. Usale in Midjourney su LimaxAI senza VPN.', overviewTitle: 'Panoramica', overviewText: 'I 20 prompt coprono cartoon, inchiostro, clipart, doppia esposizione, fantasy e illustrazione. Copia in Midjourney su LimaxAI.', examplesTitle: '20 prompt selezionati', examplesIntro: 'La tabella elenca 20 prompt in inglese completi con descrizione.', tableHeaders: ['Prompt in inglese', 'Descrizione'], imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: ۲۰ پرامپت برگزیده (متن کامل و ترجمه)', intro: '۲۰ تصویر Midjourney با پرامپت انگلیسی و ترجمه چینی. در Midjourney روی LimaxAI بدون VPN استفاده کنید.', overviewTitle: 'خلاصه', overviewText: '۲۰ پرامپت سبک‌های کارتون، مرکب، کلیپ آرت، نوردهی دوگانه، فانتزی و تصویرسازی را پوشش می‌دهند. در Midjourney روی LimaxAI کپی کنید.', examplesTitle: '۲۰ پرامپت برگزیده', examplesIntro: 'جدول ۲۰ پرامپت انگلیسی کامل با توضیح کوتاه فهرست می‌کند.', tableHeaders: ['پرامپت انگلیسی', 'توضیح'], imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: 20 geselecteerde prompts (volledige tekst en vertaling)', intro: '20 Midjourney-beelden met Engelse prompt en Chinese vertaling. Gebruik ze in Midjourney op LimaxAI zonder VPN.', overviewTitle: 'Overzicht', overviewText: 'De 20 prompts beslaan cartoon, inkt, clipart, dubbele belichting, fantasy en illustratie. Kopieer in Midjourney op LimaxAI.', examplesTitle: '20 geselecteerde prompts', examplesIntro: 'De tabel somt 20 volledige Engelse prompts met beschrijving op.', tableHeaders: ['Engelse prompt', 'Beschrijving'], imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: 20 wybranych promptów (pełny tekst i tłumaczenie)', intro: '20 obrazów Midjourney z angielskim promptem i chińskim tłumaczeniem. Użyj w Midjourney na LimaxAI bez VPN.', overviewTitle: 'Przegląd', overviewText: '20 promptów obejmuje styl cartoon, tusz, clipart, podwójną ekspozycję, fantasy i ilustrację. Skopiuj do Midjourney na LimaxAI.', examplesTitle: '20 wybranych promptów', examplesIntro: 'Tabela listuje 20 pełnych angielskich promptów z opisem.', tableHeaders: ['Prompt po angielsku', 'Opis'], imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: 20 utvalda prompter (fulltext och översättning)', intro: '20 Midjourney-bilder med engelsk prompt och kinesisk översättning. Använd i Midjourney på LimaxAI utan VPN.', overviewTitle: 'Översikt', overviewText: '20 prompter täcker cartoon, bläck, clipart, dubbel exponering, fantasy och illustration. Kopiera till Midjourney på LimaxAI.', examplesTitle: '20 utvalda prompter', examplesIntro: 'Tabellen listar 20 fullständiga engelska prompter med beskrivning.', tableHeaders: ['Engelsk prompt', 'Beskrivning'], imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: 20 обраних промптів (повний текст і переклад)', intro: '20 зображень Midjourney з англійським промптом та китайським перекладом. Використовуйте в Midjourney на LimaxAI без VPN.', overviewTitle: 'Огляд', overviewText: '20 промптів охоплюють стилі: мультфільм, туш, кліпарт, подвійна експозиція, фентезі, ілюстрація. Копіюйте в Midjourney на LimaxAI.', examplesTitle: '20 обраних промптів', examplesIntro: 'У таблиці — 20 повних англійських промптів з описом.', tableHeaders: ['Англ. промпт', 'Опис'], imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: 20 prompturi selectate (text complet și traducere)', intro: '20 imagini Midjourney cu prompt în engleză și traducere în chineză. Folosiți-le în Midjourney pe LimaxAI fără VPN.', overviewTitle: 'Prezentare', overviewText: 'Cele 20 prompturi acoperă cartoon, cerneală, clipart, dublă expunere, fantezie și ilustrație. Copiați în Midjourney pe LimaxAI.', examplesTitle: '20 prompturi selectate', examplesIntro: 'Tabelul listează 20 prompturi complete în engleză cu descriere.', tableHeaders: ['Prompt în engleză', 'Descriere'], imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN.', ctaText: 'Începe crearea' },
};

function makeSelectedPromptsArticle(locale: string): TutorialArticle {
  const c = selectedPromptsCopyByLocale[locale];
  if (!c) return articleSelectedPromptsEn;
  return {
    slug: 'midjourney-selected-prompts',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: selectedPromptsTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-26.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-27.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-28.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const SELECTED_PROMPTS_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleSelectedPromptsByLocale: Record<string, TutorialArticle> = {
  en: articleSelectedPromptsEn,
  'zh-cn': articleSelectedPromptsZhCN,
  'zh-tw': articleSelectedPromptsZhTW,
  ...Object.fromEntries(SELECTED_PROMPTS_LOCALES.map((loc) => [loc, makeSelectedPromptsArticle(loc)])),
};

/** 鲜花壁纸教程各语种文案（标题、引言、小节标题、段落、CTA），用于生成其余语种文章 */
interface FlowerArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string, string];
  formulaTitle: string;
  formulaEn: string;
  formulaLocal: string;
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const flowerCopyByLocale: Record<string, FlowerArticleCopy> = {
  es: {
    title: 'Midjourney: Fondos de pantalla con flores (con fórmula)',
    intro: 'Para generar fondos de flores con Midjourney, sigue el patrón: ilustración colorida + flor principal + fondo oscuro estilo chino + toques dorados + sufijo de estilo. Aquí tienes 10 prompts listos y una fórmula general, con imágenes de ejemplo, para crear en LimaxAI en un clic.',
    overviewTitle: 'Resumen',
    overviewText: 'Los prompts de fondos florales suelen incluir: la flor principal, color y textura, fondo oscuro con patrones tradicionales chinos, toques dorados, iluminación especial y una cola de estilo/resolución. Con la fórmula puedes cambiar flores y temas para buenos resultados.',
    examplesTitle: 'Ejemplos de prompts',
    examplesIntro: 'Aquí tienes 10 prompts en inglés y descripciones de escena para usar en Midjourney en LimaxAI.',
    tableHeaders: ['Flor', 'Prompt en inglés', 'Descripción de escena'],
    formulaTitle: 'Fórmula general',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Patrón: Ilustración colorida, una o más [flores] en [color principal] sobre patrones de [fondo oscuro] con [toques dorados], [efecto especial], texto "No. [número] [tema] Wallpaper," más la cola de estilo.',
    imageTitle: 'Imagen de ejemplo',
    startTitle: 'Empezar a crear',
    startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI; sin VPN, una cuenta para varias herramientas.',
    ctaText: 'Empezar a crear',
  },
  ar: {
    title: 'Midjourney: خلفيات زهرية (مع صيغة)',
    intro: 'للحصول على صور خلفيات زهرية بـ Midjourney، اتبع النمط: توضيح ملون + زهرة رئيسية + خلفية داكنة بالطراز الصيني + لمسات ذهبية + لاحقة أسلوب. نشارك 10 أوامر جاهزة وصيغة عامة مع صور نموذجية للإنشاء على LimaxAI بنقرة واحدة.',
    overviewTitle: 'نظرة عامة',
    overviewText: 'أوامر الخلفيات الزهرية تتضمن عادة: الزهرة الرئيسية، اللون والملمس، خلفية داكنة مع أنماط صينية تقليدية، لمسات ذهبية، إضاءة خاصة وذيل أسلوب/دقة. بمعرفة الصيغة يمكنك تبديل الزهور والمواضيع.',
    examplesTitle: 'أمثلة أوامر',
    examplesIntro: 'إليك 10 أوامر بالإنجليزية ووصف مشهد للاستخدام المباشر في Midjourney على LimaxAI.',
    tableHeaders: ['زهرة', 'الأمر بالإنجليزية', 'وصف المشهد'],
    formulaTitle: 'الصيغة العامة',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'النمط: توضيح ملون، زهرة أو أكثر [لون رئيسي] على أنماط [خلفية داكنة] مع [لمسات ذهبية]، [تأثير خاص]، نص "No. [رقم] [موضوع] Wallpaper," ثم ذيل الأسلوب.',
    imageTitle: 'صورة نموذج',
    startTitle: 'ابدأ الإنشاء',
    startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN، حساب واحد لأدوات متعددة.',
    ctaText: 'ابدأ الإنشاء',
  },
  pt: {
    title: 'Midjourney: Papéis de parede florais (com fórmula)',
    intro: 'Para obter imagens de papel de parede floral com Midjourney, siga o padrão: ilustração colorida + flor principal + fundo escuro estilo chinês + detalhes dourados + sufixo de estilo. Abaixo compartilhamos 10 prompts prontos e uma fórmula geral, com imagens de exemplo, para criar no LimaxAI em um clique.',
    overviewTitle: 'Visão geral',
    overviewText: 'Prompts de papel de parede floral costumam incluir: a flor principal, cor e textura, fundo escuro com padrões tradicionais chineses, detalhes dourados, iluminação especial e uma cauda de estilo/resolução. Com a fórmula você pode trocar flores e temas.',
    examplesTitle: 'Exemplos de prompts',
    examplesIntro: 'Aqui estão 10 prompts em inglês e descrições de cena para usar diretamente no Midjourney no LimaxAI.',
    tableHeaders: ['Flor', 'Prompt em inglês', 'Descrição da cena'],
    formulaTitle: 'Fórmula geral',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Padrão: Ilustração colorida, uma ou mais [flores] em [cor principal] em padrões de [fundo escuro] com [detalhes dourados], [efeito especial], texto "No. [número] [tema] Wallpaper," depois a cauda de estilo.',
    imageTitle: 'Imagem de exemplo',
    startTitle: 'Começar a criar',
    startText: 'Use esses prompts com Midjourney e outros modelos no LimaxAI—sem VPN, uma conta para várias ferramentas.',
    ctaText: 'Começar a criar',
  },
  id: {
    title: 'Midjourney: Wallpaper Bunga (dengan Rumus)',
    intro: 'Untuk membuat gambar wallpaper bunga dengan Midjourney, ikuti polanya: ilustrasi warna + bunga utama + latar gelap bergaya Tiongkok + aksen emas + sufiks gaya. Berikut 10 prompt siap pakai dan rumus umum, dengan gambar contoh, untuk membuat di LimaxAI dalam satu klik.',
    overviewTitle: 'Ringkasan',
    overviewText: 'Prompt wallpaper bunga biasanya mencakup: bunga utama, warna dan tekstur, latar gelap dengan pola tradisional Tiongkok, aksen emas, pencahayaan khusus, dan ekor gaya/resolusi. Dengan rumus Anda bisa mengganti bunga dan tema.',
    examplesTitle: 'Contoh prompt',
    examplesIntro: 'Berikut 10 prompt bahasa Inggris dan deskripsi adegan untuk digunakan langsung di Midjourney di LimaxAI.',
    tableHeaders: ['Bunga', 'Prompt bahasa Inggris', 'Deskripsi adegan'],
    formulaTitle: 'Rumus umum',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Pola: Ilustrasi warna, satu atau lebih [bunga] dalam [warna utama] pada pola [latar gelap] dengan [aksen emas], [efek khusus], teks "No. [nomor] [tema] Wallpaper," lalu ekor gaya.',
    imageTitle: 'Gambar contoh',
    startTitle: 'Mulai membuat',
    startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akun untuk banyak alat.',
    ctaText: 'Mulai membuat',
  },
  ms: {
    title: 'Midjourney: Kertas dinding bunga (dengan formula)',
    intro: 'Untuk dapat imej kertas dinding bunga dengan Midjourney, ikut corak: ilustrasi berwarna + bunga utama + latar gelap gaya Cina + aksen emas + akhiran gaya. Di bawah kami kongsi 10 prompt siap guna dan formula umum, dengan imej contoh, untuk cipta di LimaxAI dalam satu klik.',
    overviewTitle: 'Gambaran',
    overviewText: 'Prompt kertas dinding bunga biasanya termasuk: bunga utama, warna dan tekstur, latar gelap dengan corak tradisional Cina, aksen emas, pencahayaan khas, dan ekor gaya/resolusi. Dengan formula anda boleh tukar bunga dan tema.',
    examplesTitle: 'Contoh prompt',
    examplesIntro: 'Berikut 10 prompt Inggeris dan perihalan adegan untuk guna terus dalam Midjourney di LimaxAI.',
    tableHeaders: ['Bunga', 'Prompt Inggeris', 'Perihalan adegan'],
    formulaTitle: 'Formula umum',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Corak: Ilustrasi berwarna, satu atau lebih [bunga] dalam [warna utama] pada corak [latar gelap] dengan [aksen emas], [kesan khas], teks "No. [nombor] [tema] Wallpaper," kemudian ekor gaya.',
    imageTitle: 'Imej contoh',
    startTitle: 'Mula cipta',
    startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akaun untuk pelbagai alat.',
    ctaText: 'Mula cipta',
  },
  fr: {
    title: 'Midjourney : Fond d\'écran floral (avec formule)',
    intro: 'Pour obtenir des fonds d\'écran floraux avec Midjourney, suivez le schéma : illustration colorée + fleur principale + fond sombre style chinois + accents dorés + suffixe de style. Voici 10 prompts prêts à l\'emploi et une formule générale, avec des exemples d’images, pour créer sur LimaxAI en un clic.',
    overviewTitle: 'Aperçu',
    overviewText: 'Les prompts de fond floral incluent généralement : la fleur principale, la couleur et la texture, un fond sombre à motifs traditionnels chinois, des accents dorés, un éclairage particulier et une queue de style/résolution. Avec la formule, vous pouvez changer fleurs et thèmes.',
    examplesTitle: 'Exemples de prompts',
    examplesIntro: 'Voici 10 prompts en anglais et des descriptions de scène à utiliser directement dans Midjourney sur LimaxAI.',
    tableHeaders: ['Fleur', 'Prompt en anglais', 'Description de scène'],
    formulaTitle: 'Formule générale',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Schéma : illustration colorée, une ou plusieurs [fleurs] en [couleur principale] sur des motifs [fond sombre] avec [accents dorés], [effet spécial], texte "No. [numéro] [thème] Wallpaper," puis la queue de style.',
    imageTitle: 'Image d\'exemple',
    startTitle: 'Commencer à créer',
    startText: 'Utilisez ces prompts avec Midjourney et d’autres modèles sur LimaxAI—sans VPN, un compte pour plusieurs outils.',
    ctaText: 'Commencer à créer',
  },
  ru: {
    title: 'Midjourney: Цветочные обои (с формулой)',
    intro: 'Чтобы получить цветочные обои с Midjourney, следуйте схеме: красочная иллюстрация + основной цветок + тёмный фон в китайском стиле + золотые акценты + суффикс стиля. Ниже 10 готовых промптов и общая формула с примерами изображений для создания на LimaxAI в один клик.',
    overviewTitle: 'Обзор',
    overviewText: 'Промпты цветочных обоев обычно включают: основной цветок, цвет и текстуру, тёмный фон с традиционными китайскими узорами, золотые акценты, особое освещение и хвост стиля/разрешения. По формуле можно менять цветы и темы.',
    examplesTitle: 'Примеры промптов',
    examplesIntro: 'Вот 10 промптов на английском и краткие описания сцен для использования в Midjourney на LimaxAI.',
    tableHeaders: ['Цветок', 'Промпт на англ.', 'Описание сцены'],
    formulaTitle: 'Общая формула',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Схема: красочная иллюстрация, один или несколько [цветов] в [основном цвете] на узорах [тёмного фона] с [золотыми акцентами], [спецэффект], текст "No. [номер] [тема] Wallpaper," затем хвост стиля.',
    imageTitle: 'Пример изображения',
    startTitle: 'Начать создание',
    startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN, один аккаунт для нескольких инструментов.',
    ctaText: 'Начать создание',
  },
  hi: {
    title: 'Midjourney: फूल वॉलपेपर (सूत्र के साथ)',
    intro: 'Midjourney से फूल वॉलपेपर शैली की छवियां पाने के लिए पैटर्न अपनाएं: रंगीन चित्र + मुख्य फूल + गहरी चीनी शैली पृष्ठभूमि + सोने के एक्सेंट + एकीकृत शैली प्रत्यय। नीचे 10 तैयार प्रॉम्प्ट और एक सामान्य सूत्र, नमूना छवियों के साथ, LimaxAI पर एक क्लिक में बनाने के लिए।',
    overviewTitle: 'अवलोकन',
    overviewText: 'फूल वॉलपेपर प्रॉम्प्ट में आमतौर पर शामिल होते हैं: मुख्य फूल, रंग और बनावट, चीनी पारंपरिक पैटर्न के साथ गहरी पृष्ठभूमि, सोने के एक्सेंट, विशेष प्रकाश और एकीकृत शैली/रिज़ॉल्यूशन टेल। सूत्र से आप फूल और थीम बदल सकते हैं।',
    examplesTitle: 'प्रॉम्प्ट उदाहरण',
    examplesIntro: 'यहां 10 अंग्रेजी प्रॉम्प्ट और दृश्य विवरण हैं जिन्हें LimaxAI पर Midjourney में सीधे इस्तेमाल किया जा सकता है।',
    tableHeaders: ['फूल', 'अंग्रेजी प्रॉम्प्ट', 'दृश्य विवरण'],
    formulaTitle: 'सामान्य सूत्र',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'पैटर्न: रंगीन चित्र, [मुख्य रंग] में एक या अधिक [फूल] [गहरी पृष्ठभूमि] पैटर्न पर [सोने के एक्सेंट], [विशेष प्रभाव], पाठ "No. [संख्या] [थीम] Wallpaper," फिर शैली टेल।',
    imageTitle: 'नमूना छवि',
    startTitle: 'बनाना शुरू करें',
    startText: 'इन प्रॉम्प्ट को Midjourney और LimaxAI पर अन्य मॉडल के साथ इस्तेमाल करें—बिना VPN, कई टूल के लिए एक अकाउंट।',
    ctaText: 'बनाना शुरू करें',
  },
  ja: {
    title: 'Midjourney：花の壁紙（公式付き）',
    intro: 'Midjourneyで花の壁紙風画像を得るには、パターンに従ってください：カラフルなイラスト＋主役の花＋ダークな中国風背景＋金のアクセント＋統一スタイルの接尾辞。以下に10個のすぐ使えるプロンプトと一般公式、サンプル画像付きで、LimaxAIでワンクリック作成できます。',
    overviewTitle: '概要',
    overviewText: '花の壁紙プロンプトには通常、主役の花、色と質感、中国伝統模様のダーク背景、金のアクセント、特殊な光、スタイル・解像度の尾が含まれます。公式を覚えれば花やテーマを入れ替えて良い結果が得られます。',
    examplesTitle: 'プロンプト例',
    examplesIntro: 'LimaxAIのMidjourneyで直接使える英語プロンプト10個とシーンの短い説明です。',
    tableHeaders: ['花', '英語プロンプト', 'シーン説明'],
    formulaTitle: '一般公式',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'パターン：カラフルなイラスト、[主色]の[花]を[ダーク背景]の模様に[金のアクセント]、[特殊効果]、テキスト「No. [番号] [テーマ] Wallpaper」の後にスタイルの尾。',
    imageTitle: 'サンプル画像',
    startTitle: '作成を始める',
    startText: 'これらのプロンプトをMidjourneyや他のモデルでLimaxAI上で使えます。VPN不要、1アカウントで複数ツール。',
    ctaText: '作成を始める',
  },
  de: {
    title: 'Midjourney: Blumen-Tapeten (mit Formel)',
    intro: 'Für Blumen-Tapetenbilder mit Midjourney folgen Sie dem Muster: bunte Illustration + Hauptblume + dunkler China-Stil-Hintergrund + Goldakzente + einheitliches Stil-Suffix. Hier 10 fertige Prompts und eine allgemeine Formel mit Beispielbildern, um auf LimaxAI mit einem Klick zu erstellen.',
    overviewTitle: 'Überblick',
    overviewText: 'Blumen-Tapeten-Prompts enthalten meist: die Hauptblume, Farbe und Textur, dunklen Hintergrund mit chinesischen traditionellen Mustern, Goldakzente, besondere Beleuchtung und ein Stil-/Auflösungs-Ende. Mit der Formel können Sie Blumen und Themen tauschen.',
    examplesTitle: 'Prompt-Beispiele',
    examplesIntro: 'Hier sind 10 englische Prompts und kurze Szenenbeschreibungen zur direkten Verwendung in Midjourney auf LimaxAI.',
    tableHeaders: ['Blume', 'Englischer Prompt', 'Szenenbeschreibung'],
    formulaTitle: 'Allgemeine Formel',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Muster: Bunte Illustration, eine oder mehrere [Blumen] in [Hauptfarbe] auf [dunklem Hintergrund]-Mustern mit [Goldakzenten], [Spezialeffekt], Text "No. [Nummer] [Thema] Wallpaper," dann das Stil-Ende.',
    imageTitle: 'Beispielbild',
    startTitle: 'Erstellen starten',
    startText: 'Nutzen Sie diese Prompts mit Midjourney und anderen Modellen auf LimaxAI—ohne VPN, ein Konto für mehrere Tools.',
    ctaText: 'Erstellen starten',
  },
  ko: {
    title: 'Midjourney: 꽃 벽지 (공식 포함)',
    intro: 'Midjourney로 꽃 벽지 스타일 이미지를 만들려면 패턴을 따르세요: 다채로운 일러스트 + 주인공 꽃 + 어두운 중국풍 배경 + 금색 포인트 + 통일 스타일 접미사. 아래 10개 즉시 사용 가능한 프롬프트와 일반 공식, 샘플 이미지로 LimaxAI에서 한 번에 제작할 수 있습니다.',
    overviewTitle: '개요',
    overviewText: '꽃 벽지 프롬프트에는 보통 주인공 꽃, 색과 질감, 중국 전통 문양의 어두운 배경, 금색 포인트, 특수 조명, 스타일/해상도 꼬리가 포함됩니다. 공식을 알면 꽃과 테마를 바꿔 좋은 결과를 얻을 수 있습니다.',
    examplesTitle: '프롬프트 예시',
    examplesIntro: 'LimaxAI의 Midjourney에서 바로 쓸 수 있는 영어 프롬프트 10개와 장면 설명입니다.',
    tableHeaders: ['꽃', '영어 프롬프트', '장면 설명'],
    formulaTitle: '일반 공식',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: '패턴: 다채로운 일러스트, [주색]의 [꽃] 한 송이 이상을 [어두운 배경] 문양에 [금색 포인트], [특수 효과], 텍스트 "No. [번호] [테마] Wallpaper," 그 다음 스타일 꼬리.',
    imageTitle: '샘플 이미지',
    startTitle: '제작 시작',
    startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요. VPN 불필요, 한 계정으로 여러 도구 이용.',
    ctaText: '제작 시작',
  },
  tr: {
    title: 'Midjourney: Çiçek duvar kağıtları (formüllü)',
    intro: 'Midjourney ile çiçek duvar kağıdı tarzı görseller için deseni izleyin: renkli illüstrasyon + ana çiçek + koyu Çin tarzı arka plan + altın vurgular + birleşik stil soneki. Aşağıda 10 hazır prompt ve genel formül, örnek görsellerle birlikte, LimaxAI\'da tek tıkla oluşturmak için.',
    overviewTitle: 'Genel bakış',
    overviewText: 'Çiçek duvar kağıdı promptları genelde şunları içerir: ana çiçek, renk ve doku, Çin geleneksel desenli koyu arka plan, altın vurgular, özel aydınlatma ve birleşik stil/çözünürlük kuyruğu. Formülle çiçek ve temaları değiştirebilirsiniz.',
    examplesTitle: 'Prompt örnekleri',
    examplesIntro: 'LimaxAI\'da Midjourney\'de doğrudan kullanabileceğiniz 10 İngilizce prompt ve kısa sahne açıklaması.',
    tableHeaders: ['Çiçek', 'İngilizce prompt', 'Sahne açıklaması'],
    formulaTitle: 'Genel formül',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Desen: Renkli illüstrasyon, [koyu arka plan] desenlerinde [altın vurgular], [özel efekt], "No. [numara] [tema] Wallpaper" metni ile [ana renk]te bir veya daha fazla [çiçek], ardından stil kuyruğu.',
    imageTitle: 'Örnek görsel',
    startTitle: 'Oluşturmaya başla',
    startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez, birden fazla araç için tek hesap.',
    ctaText: 'Oluşturmaya başla',
  },
  vi: {
    title: 'Midjourney: Hình nền hoa (có công thức)',
    intro: 'Để có ảnh hình nền hoa với Midjourney, làm theo mẫu: minh họa nhiều màu + hoa chính + nền tối phong cách Trung Quốc + điểm nhấn vàng + hậu tố phong cách. Dưới đây là 10 prompt sẵn dùng và công thức chung, kèm ảnh mẫu, để tạo trên LimaxAI chỉ với một cú nhấp.',
    overviewTitle: 'Tổng quan',
    overviewText: 'Prompt hình nền hoa thường gồm: hoa chính, màu và chất liệu, nền tối với họa tiết truyền thống Trung Quốc, điểm nhấn vàng, ánh sáng đặc biệt và đuôi phong cách/độ phân giải. Biết công thức bạn có thể thay hoa và chủ đề.',
    examplesTitle: 'Ví dụ prompt',
    examplesIntro: 'Đây là 10 prompt tiếng Anh và mô tả cảnh ngắn để dùng trực tiếp trong Midjourney trên LimaxAI.',
    tableHeaders: ['Hoa', 'Prompt tiếng Anh', 'Mô tả cảnh'],
    formulaTitle: 'Công thức chung',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Mẫu: Minh họa nhiều màu, một hoặc nhiều [hoa] mà [màu chính] trên họa tiết [nền tối] với [điểm nhấn vàng], [hiệu ứng đặc biệt], chữ "No. [số] [chủ đề] Wallpaper," rồi đuôi phong cách.',
    imageTitle: 'Ảnh mẫu',
    startTitle: 'Bắt đầu tạo',
    startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN, một tài khoản cho nhiều công cụ.',
    ctaText: 'Bắt đầu tạo',
  },
  th: {
    title: 'Midjourney: วอลเปเปอร์ดอกไม้ (พร้อมสูตร)',
    intro: 'เพื่อให้ได้ภาพวอลเปเปอร์ดอกไม้ด้วย Midjourney ให้ทำตามรูปแบบ: ภาพประกอบสีสัน + ดอกหลัก + พื้นหลังโทนมืดสไตล์จีน + โทนทอง + ปัจจัยต่อท้ายสไตล์ ด้านล่างคือ 10 พรอมป์พร้อมใช้และสูตรทั่วไป พร้อมภาพตัวอย่าง เพื่อสร้างบน LimaxAI ในคลิกเดียว',
    overviewTitle: 'ภาพรวม',
    overviewText: 'พรอมป์วอลเปเปอร์ดอกไม้มักรวม: ดอกหลัก สีและพื้นผิว พื้นหลังมืดกับลวดลายจีนแบบดั้งเดิม โทนทอง แสงพิเศษ และส่วนท้ายสไตล์/ความละเอียด รู้สูตรแล้วสามารถเปลี่ยนดอกและธีมได้',
    examplesTitle: 'ตัวอย่างพรอมป์',
    examplesIntro: 'นี่คือพรอมป์ภาษาอังกฤษ 10 รายการและคำอธิบายฉากสั้นๆ สำหรับใช้โดยตรงใน Midjourney บน LimaxAI',
    tableHeaders: ['ดอกไม้', 'พรอมป์ภาษาอังกฤษ', 'คำอธิบายฉาก'],
    formulaTitle: 'สูตรทั่วไป',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'รูปแบบ: ภาพประกอบสีสัน [ดอกไม้] หนึ่งหรือมากกว่าใน [สีหลัก] บนลวดลาย [พื้นหลังมืด] กับ [โทนทอง] [เอฟเฟกต์พิเศษ] ข้อความ "No. [หมายเลข] [ธีม] Wallpaper" จากนั้นส่วนท้ายสไตล์',
    imageTitle: 'ภาพตัวอย่าง',
    startTitle: 'เริ่มสร้าง',
    startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN บัญชีเดียวสำหรับหลายเครื่องมือ',
    ctaText: 'เริ่มสร้าง',
  },
  it: {
    title: 'Midjourney: Sfondi floreali (con formula)',
    intro: 'Per ottenere sfondi floreali con Midjourney segui lo schema: illustrazione colorata + fiore principale + sfondo scuro stile cinese + accenti dorati + suffisso di stile. Qui 10 prompt pronti e una formula generale, con immagini di esempio, per creare su LimaxAI in un clic.',
    overviewTitle: 'Panoramica',
    overviewText: 'I prompt per sfondi floreali includono di solito: il fiore principale, colore e texture, sfondo scuro con motivi tradizionali cinesi, accenti dorati, illuminazione speciale e una coda stile/risoluzione. Con la formula puoi cambiare fiori e temi.',
    examplesTitle: 'Esempi di prompt',
    examplesIntro: 'Ecco 10 prompt in inglese e brevi descrizioni di scena da usare direttamente in Midjourney su LimaxAI.',
    tableHeaders: ['Fiore', 'Prompt in inglese', 'Descrizione scena'],
    formulaTitle: 'Formula generale',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Schema: Illustrazione colorata, uno o più [fiori] in [colore principale] su motivi [sfondo scuro] con [accenti dorati], [effetto speciale], testo "No. [numero] [tema] Wallpaper," poi la coda di stile.',
    imageTitle: 'Immagine di esempio',
    startTitle: 'Inizia a creare',
    startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN, un account per più strumenti.',
    ctaText: 'Inizia a creare',
  },
  fa: {
    title: 'Midjourney: پس‌زمینه گل (با فرمول)',
    intro: 'برای گرفتن تصاویر پس‌زمینه گل با Midjourney الگو را دنبال کنید: تصویر رنگی + گل اصلی + پس‌زمینه تیره سبک چینی + طلایی + پسوند سبک. در زیر ۱۰ پرامپت آماده و یک فرمول کلی با تصاویر نمونه برای ساخت در LimaxAI با یک کلیک.',
    overviewTitle: 'خلاصه',
    overviewText: 'پرامپت‌های پس‌زمینه گل معمولاً شامل: گل اصلی، رنگ و بافت، پس‌زمینه تیره با الگوهای سنتی چینی، طلایی، نور خاص و دم سبک/وضوح. با فرمول می‌توانید گل و تم را عوض کنید.',
    examplesTitle: 'نمونه پرامپت',
    examplesIntro: 'اینها ۱۰ پرامپت انگلیسی و توضیح صحنه کوتاه برای استفاده مستقیم در Midjourney روی LimaxAI هستند.',
    tableHeaders: ['گل', 'پرامپت انگلیسی', 'توضیح صحنه'],
    formulaTitle: 'فرمول کلی',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'الگو: تصویر رنگی، یک یا چند [گل] در [رنگ اصلی] روی الگوهای [پس‌زمینه تیره] با [طلایی]، [اثر خاص]، متن "No. [شماره] [تم] Wallpaper"، سپس دم سبک.',
    imageTitle: 'تصویر نمونه',
    startTitle: 'شروع ساخت',
    startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN، یک اکانت برای چند ابزار.',
    ctaText: 'شروع ساخت',
  },
  nl: {
    title: 'Midjourney: Bloemenbehang (met formule)',
    intro: 'Voor bloemenbehang-achtige beelden met Midjourney volg het patroon: kleurrijke illustratie + hoofdbloem + donkere Chinese stijl-achtergrond + gouden accenten + stijl-achtervoegsel. Hier 10 kant-en-klare prompts en een algemene formule, met voorbeeldbeelden, om in één klik op LimaxAI te maken.',
    overviewTitle: 'Overzicht',
    overviewText: 'Bloemenbehang-prompts bevatten meestal: de hoofdbloem, kleur en textuur, donkere achtergrond met Chinese traditionele patronen, gouden accenten, speciale belichting en een stijl/resolutie-staart. Met de formule kun je bloemen en thema\'s wisselen.',
    examplesTitle: 'Voorbeelden van prompts',
    examplesIntro: 'Hier zijn 10 Engelse prompts en korte scènebeschrijvingen voor direct gebruik in Midjourney op LimaxAI.',
    tableHeaders: ['Bloem', 'Engelse prompt', 'Scènebeschrijving'],
    formulaTitle: 'Algemene formule',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Patroon: Kleurrijke illustratie, een of meer [bloemen] in [hoofdkleur] op [donkere achtergrond]-patronen met [gouden accenten], [speciaal effect], tekst "No. [nummer] [thema] Wallpaper," dan de stijl-staart.',
    imageTitle: 'Voorbeeldafbeelding',
    startTitle: 'Beginnen met maken',
    startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig, één account voor meerdere tools.',
    ctaText: 'Beginnen met maken',
  },
  pl: {
    title: 'Midjourney: Tapety kwiatowe (ze wzorem)',
    intro: 'Aby uzyskać tapety kwiatowe w Midjourney, stosuj schemat: kolorowa ilustracja + główny kwiat + ciemne tło w stylu chińskim + złote akcenty + sufiks stylu. Poniżej 10 gotowych promptów i ogólny wzór oraz przykładowe obrazy do tworzenia na LimaxAI jednym kliknięciem.',
    overviewTitle: 'Przegląd',
    overviewText: 'Prompty tapet kwiatowych zwykle obejmują: główny kwiat, kolor i fakturę, ciemne tło z tradycyjnymi chińskimi wzorami, złote akcenty, specjalne oświetlenie i ogon stylu/rozdzielczości. Ze wzorem możesz zamieniać kwiaty i motywy.',
    examplesTitle: 'Przykłady promptów',
    examplesIntro: 'Oto 10 promptów po angielsku i krótkie opisy scen do bezpośredniego użycia w Midjourney na LimaxAI.',
    tableHeaders: ['Kwiat', 'Prompt po angielsku', 'Opis sceny'],
    formulaTitle: 'Wzór ogólny',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Schemat: Kolorowa ilustracja, jeden lub więcej [kwiatów] w [głównym kolorze] na wzorach [ciemnego tła] z [złotymi akcentami], [efekt specjalny], tekst "No. [numer] [temat] Wallpaper," potem ogon stylu.',
    imageTitle: 'Obraz przykładowy',
    startTitle: 'Zacznij tworzyć',
    startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN, jedno konto do wielu narzędzi.',
    ctaText: 'Zacznij tworzyć',
  },
  sv: {
    title: 'Midjourney: Blomstapeter (med formel)',
    intro: 'För blomstapetbilder med Midjourney, följ mönstret: färgrik illustration + huvudblomma + mörk kinesisk stilbakgrund + guldaccenter + stiländelse. Här 10 färdiga prompter och en allmän formel med exempelbilder för att skapa på LimaxAI med ett klick.',
    overviewTitle: 'Översikt',
    overviewText: 'Blomstapetprompter inkluderar oftast: huvudblomman, färg och textur, mörk bakgrund med kinesiska traditionella mönster, guldaccenter, speciell belysning och en stil/upplösningssvans. Med formeln kan du byta blommor och teman.',
    examplesTitle: 'Promptexempel',
    examplesIntro: 'Här är 10 engelska prompter och korta scenbeskrivningar för direkt användning i Midjourney på LimaxAI.',
    tableHeaders: ['Blomma', 'Engelsk prompt', 'Scenbeskrivning'],
    formulaTitle: 'Allmän formel',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Mönster: Färgrik illustration, en eller flera [blommor] i [huvudfärg] på [mörk bakgrund]-mönster med [guldaccenter], [specialeffekt], text "No. [nummer] [tema] Wallpaper," sedan stilsvansen.',
    imageTitle: 'Exempelbild',
    startTitle: 'Börja skapa',
    startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs, ett konto för flera verktyg.',
    ctaText: 'Börja skapa',
  },
  uk: {
    title: 'Midjourney: Квіткові шпалери (з формулою)',
    intro: 'Щоб отримати квіткові шпалери з Midjourney, дотримуйтесь схеми: барвиста ілюстрація + основна квітка + темний фон у китайському стилі + золоті акценти + суфікс стилю. Нижче 10 готових промптів і загальна формула з прикладами зображень для створення на LimaxAI в один клік.',
    overviewTitle: 'Огляд',
    overviewText: 'Промпти квіткових шпалер зазвичай включають: основну квітку, колір і текстуру, темний фон з китайськими традиційними візерунками, золоті акценти, особливе освітлення та хвіст стилю/дозволу. За формулою можна змінювати квіти й теми.',
    examplesTitle: 'Приклади промптів',
    examplesIntro: 'Ось 10 англійських промптів і короткі описи сцен для безпосереднього використання в Midjourney на LimaxAI.',
    tableHeaders: ['Квітка', 'Англ. промпт', 'Опис сцени'],
    formulaTitle: 'Загальна формула',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Схема: барвиста ілюстрація, одна або кілька [квітів] у [основному кольорі] на візерунках [темного фону] з [золотими акцентами], [спецефект], текст "No. [номер] [тема] Wallpaper," потім хвіст стилю.',
    imageTitle: 'Приклад зображення',
    startTitle: 'Почати створення',
    startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN, один обліковий запис для кількох інструментів.',
    ctaText: 'Почати створення',
  },
  ro: {
    title: 'Midjourney: Tapet floral (cu formulă)',
    intro: 'Pentru imagini de tapet floral cu Midjourney, urmați modelul: ilustrație colorată + floare principală + fundal întunecat stil chinezesc + accente aurii + sufix de stil. Mai jos 10 prompturi gata de folosit și o formulă generală, cu imagini exemplu, pentru a crea pe LimaxAI într-un clic.',
    overviewTitle: 'Prezentare',
    overviewText: 'Prompturile de tapet floral includ de obicei: floarea principală, culoarea și textura, fundal întunecat cu modele tradiționale chinezești, accente aurii, iluminat special și o coadă de stil/rezo luție. Cu formula puteți schimba florile și temele.',
    examplesTitle: 'Exemple de prompturi',
    examplesIntro: 'Iată 10 prompturi în engleză și descrieri scurte de scenă pentru utilizare directă în Midjourney pe LimaxAI.',
    tableHeaders: ['Floare', 'Prompt în engleză', 'Descriere scenă'],
    formulaTitle: 'Formula generală',
    formulaEn: 'English: Colorful illustration, a large [FLOWER] in [MAIN_COLOR] on a background of [DARK_BACKGROUND_COLORS] patterns with [GOLD_ACCENTS], [SPECIAL_EFFECT], text "No. [NUMBER] [THEME] Wallpaper," rich colors, fantasy art style, Chinese traditional pattern wallpaper design, high resolution, hyper-realistic details, ultra detailed illustration, ornate floral arrangement, dark background, hyper-detailed, high definition, super detailed.',
    formulaLocal: 'Model: Ilustrație colorată, una sau mai multe [flori] în [culoare principală] pe modele [fundal întunecat] cu [accente aurii], [efect special], text "No. [număr] [temă] Wallpaper," apoi coada de stil.',
    imageTitle: 'Imagine exemplu',
    startTitle: 'Începe crearea',
    startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN, un cont pentru mai multe instrumente.',
    ctaText: 'Începe crearea',
  },
};

/** 古风人物工笔画教程各语种文案 */
interface GufengArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string, string];
  formulaTitle: string;
  formulaEn: string;
  formulaLocal: string;
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const gufengCopyByLocale: Record<string, GufengArticleCopy> = {
  es: {
    title: 'Midjourney: Pintura de figuras al estilo antiguo (con fórmula)',
    intro: 'Para obtener pinturas de figuras al estilo chino antiguo con Midjourney, sigue el patrón: Ancient Chinese Painting Art + arquetipo + ropa/armadura + fondo beige claro + emblema + estado de ánimo y accesorio. Aquí 10 prompts listos y una fórmula general, con imágenes de ejemplo, para crear en LimaxAI en un clic.',
    overviewTitle: 'Resumen',
    overviewText: 'Los prompts de figuras al estilo antiguo suelen incluir: personaje/arquetipo, ropa o armadura, fondo beige claro, un emblema o sello de color a un lado, expresión y estado de ánimo, y un accesorio característico. Usa Ancient Chinese Painting Art y fondo beige claro de forma consistente, luego cambia personaje y emblema.',
    examplesTitle: 'Ejemplos de prompts',
    examplesIntro: 'Aquí tienes 10 prompts en inglés y breves descripciones de escena para usar directamente en Midjourney en LimaxAI.',
    tableHeaders: ['Personaje', 'Prompt en inglés', 'Descripción de escena'],
    formulaTitle: 'Fórmula general',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Patrón: [Personaje] en Ancient Chinese Painting Art, bigote y pelo largo, [ropa], fondo beige claro, [color] [emblema] a un lado, [estado de ánimo], ojos oscuros, [accesorio].',
    imageTitle: 'Imagen de ejemplo',
    startTitle: 'Empezar a crear',
    startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN, una cuenta para varias herramientas.',
    ctaText: 'Empezar a crear',
  },
  ar: {
    title: 'Midjourney: رسم شخصيات بالأسلوب القديم (مع معادلة)',
    intro: 'للحصول على رسوم شخصيات بالأسلوب الصيني القديم مع Midjourney، اتبع النمط: Ancient Chinese Painting Art + نموذج الشخصية + الملابس/الدرع + خلفية بيج فاتحة + شعار + المزاج والدعامة. فيما يلي 10 أوامر جاهزة ومعادلة عامة مع صور نموذجية للإنشاء على LimaxAI بنقرة واحدة.',
    overviewTitle: 'نظرة عامة',
    overviewText: 'أوامر شخصيات الأسلوب القديم تتضمن عادة: الشخصية/النموذج، الملابس أو الدرع، خلفية بيج فاتحة، شعار أو ختم ملون على جانب، التعبير والمزاج، ودعامة مميزة. استخدم Ancient Chinese Painting Art وخلفية بيج فاتحة باستمرار ثم بدّل الشخصية والشعار.',
    examplesTitle: 'أمثلة أوامر',
    examplesIntro: 'إليك 10 أوامر بالإنجليزية ووصف قصير للمشهد للاستخدام المباشر في Midjourney على LimaxAI.',
    tableHeaders: ['الشخصية', 'الأمر بالإنجليزية', 'وصف المشهد'],
    formulaTitle: 'المعادلة العامة',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'النمط: [الشخصية] في Ancient Chinese Painting Art، شارب وشعر طويل، [ملابس]، خلفية بيج فاتحة، [لون] [شعار] على جانب، [مزاج]، عينان داكنتان، [دعامة].',
    imageTitle: 'صورة نموذجية',
    startTitle: 'ابدأ الإنشاء',
    startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN، حساب واحد لأدوات متعددة.',
    ctaText: 'ابدأ الإنشاء',
  },
  pt: {
    title: 'Midjourney: Pintura de figuras estilo antigo (com fórmula)',
    intro: 'Para obter pinturas de figuras ao estilo chinês antigo com Midjourney, siga o padrão: Ancient Chinese Painting Art + arquétipo + roupa/armadura + fundo bege claro + emblema + humor e adereço. Abaixo 10 prompts prontos e uma fórmula geral, com imagens de exemplo, para criar no LimaxAI em um clique.',
    overviewTitle: 'Visão geral',
    overviewText: 'Prompts de figuras estilo antigo costumam incluir: personagem/arquétipo, roupa ou armadura, fundo bege claro, um emblema ou selo colorido de um lado, expressão e humor, e um adereço característico. Use Ancient Chinese Painting Art e fundo bege claro de forma consistente, depois troque personagem e emblema.',
    examplesTitle: 'Exemplos de prompts',
    examplesIntro: 'Aqui estão 10 prompts em inglês e breves descrições de cena para usar diretamente no Midjourney no LimaxAI.',
    tableHeaders: ['Personagem', 'Prompt em inglês', 'Descrição da cena'],
    formulaTitle: 'Fórmula geral',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Padrão: [Personagem] em Ancient Chinese Painting Art, bigode e cabelo longo, [roupa], fundo bege claro, [cor] [emblema] de um lado, [humor], olhos escuros, [adereço].',
    imageTitle: 'Imagem de exemplo',
    startTitle: 'Começar a criar',
    startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN, uma conta para várias ferramentas.',
    ctaText: 'Começar a criar',
  },
  id: {
    title: 'Midjourney: Lukisan figur gaya kuno (dengan rumus)',
    intro: 'Untuk lukisan figur bergaya Tiongkok kuno dengan Midjourney, ikuti pola: Ancient Chinese Painting Art + arketipe + pakaian/zirah + latar beige terang + lambang + suasana dan properti. Berikut 10 prompt siap pakai dan rumus umum, dengan gambar contoh, untuk membuat di LimaxAI dalam satu klik.',
    overviewTitle: 'Ringkasan',
    overviewText: 'Prompt figur gaya kuno biasanya mencakup: karakter/arketipe, pakaian atau zirah, latar beige terang, lambang atau stempel berwarna di satu sisi, ekspresi dan suasana, serta properti khas. Gunakan Ancient Chinese Painting Art dan latar beige terang secara konsisten, lalu ganti karakter dan lambang.',
    examplesTitle: 'Contoh prompt',
    examplesIntro: 'Berikut 10 prompt bahasa Inggris dan deskripsi adegan singkat untuk digunakan langsung di Midjourney di LimaxAI.',
    tableHeaders: ['Karakter', 'Prompt bahasa Inggris', 'Deskripsi adegan'],
    formulaTitle: 'Rumus umum',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Pola: [Karakter] dalam Ancient Chinese Painting Art, kumis dan rambut panjang, [pakaian], latar beige terang, [warna] [lambang] di satu sisi, [suasana], mata gelap, [properti].',
    imageTitle: 'Gambar contoh',
    startTitle: 'Mulai membuat',
    startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akun untuk banyak alat.',
    ctaText: 'Mulai membuat',
  },
  ms: {
    title: 'Midjourney: Lukisan figura gaya lama (dengan formula)',
    intro: 'Untuk lukisan figura gaya Cina lama dengan Midjourney, ikuti corak: Ancient Chinese Painting Art + arketip + pakaian/armor + latar beige cerah + emblem + mood dan prop. Di bawah 10 prompt sedia dan formula umum, dengan imej contoh, untuk cipta di LimaxAI dalam satu klik.',
    overviewTitle: 'Gambaran',
    overviewText: 'Prompt figura gaya lama biasanya termasuk: watak/arketip, pakaian atau armor, latar beige cerah, emblem atau cop berwarna di satu sisi, ekspresi dan mood, dan prop signature. Guna Ancient Chinese Painting Art dan latar beige cerah secara konsisten, kemudian tukar watak dan emblem.',
    examplesTitle: 'Contoh prompt',
    examplesIntro: 'Berikut 10 prompt Inggeris dan penerangan adegan ringkas untuk guna terus dalam Midjourney di LimaxAI.',
    tableHeaders: ['Watak', 'Prompt Inggeris', 'Penerangan adegan'],
    formulaTitle: 'Formula umum',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Corak: [Watak] dalam Ancient Chinese Painting Art, misai dan rambut panjang, [pakaian], latar beige cerah, [warna] [emblem] di satu sisi, [mood], mata gelap, [prop].',
    imageTitle: 'Imej contoh',
    startTitle: 'Mula cipta',
    startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akaun untuk pelbagai alat.',
    ctaText: 'Mula cipta',
  },
  fr: {
    title: 'Midjourney: Peinture de personnages style ancien (avec formule)',
    intro: 'Pour obtenir des peintures de personnages style chinois ancien avec Midjourney, suivez le schéma: Ancient Chinese Painting Art + archétype + vêtement/armure + fond beige clair + emblème + humeur et accessoire. Voici 10 prompts prêts à l\'emploi et une formule générale, avec des images exemples, pour créer sur LimaxAI en un clic.',
    overviewTitle: 'Aperçu',
    overviewText: 'Les prompts de personnages style ancien incluent généralement: personnage/archétype, vêtement ou armure, fond beige clair, un emblème ou sceau coloré sur un côté, expression et humeur, et un accessoire signature. Utilisez Ancient Chinese Painting Art et fond beige clair de façon cohérente, puis changez personnage et emblème.',
    examplesTitle: 'Exemples de prompts',
    examplesIntro: 'Voici 10 prompts en anglais et de brèves descriptions de scène pour une utilisation directe dans Midjourney sur LimaxAI.',
    tableHeaders: ['Personnage', 'Prompt en anglais', 'Description de scène'],
    formulaTitle: 'Formule générale',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Schéma: [Personnage] dans Ancient Chinese Painting Art, moustache et longs cheveux, [vêtement], fond beige clair, [couleur] [emblème] d\'un côté, [humeur], yeux sombres, [accessoire].',
    imageTitle: 'Image d\'exemple',
    startTitle: 'Commencer à créer',
    startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN, un compte pour plusieurs outils.',
    ctaText: 'Commencer à créer',
  },
  ru: {
    title: 'Midjourney: Рисунок фигур в старинном стиле (с формулой)',
    intro: 'Чтобы получить изображения фигур в стиле древнекитайской живописи с Midjourney, следуйте схеме: Ancient Chinese Painting Art + архетип + одежда/доспехи + светлый бежевый фон + эмблема + настроение и реквизит. Ниже 10 готовых промптов и общая формула с примерами изображений для создания на LimaxAI в один клик.',
    overviewTitle: 'Обзор',
    overviewText: 'Промпты фигур в старинном стиле обычно включают: персонаж/архетип, одежду или доспехи, светлый бежевый фон, цветную эмблему или печать с одной стороны, выражение и настроение, характерный реквизит. Используйте Ancient Chinese Painting Art и светлый бежевый фон последовательно, затем меняйте персонажа и эмблему.',
    examplesTitle: 'Примеры промптов',
    examplesIntro: 'Вот 10 промптов на английском и краткие описания сцен для прямого использования в Midjourney на LimaxAI.',
    tableHeaders: ['Персонаж', 'Англ. промпт', 'Описание сцены'],
    formulaTitle: 'Общая формула',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Схема: [Персонаж] в Ancient Chinese Painting Art, усы и длинные волосы, [одежда], светлый бежевый фон, [цвет] [эмблема] с одной стороны, [настроение], тёмные глаза, [реквизит].',
    imageTitle: 'Пример изображения',
    startTitle: 'Начать создание',
    startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN, один аккаунт для нескольких инструментов.',
    ctaText: 'Начать создание',
  },
  hi: {
    title: 'Midjourney: प्राचीन शैली चित्र पात्र (सूत्र के साथ)',
    intro: 'Midjourney से प्राचीन चीनी चित्र शैली के पात्र पाने के लिए पैटर्न अपनाएं: Ancient Chinese Painting Art + आदर्श + कपड़े/कवच + हल्का बेज पृष्ठभूमि + प्रतीक + मूड और प्रॉप। नीचे 10 तैयार प्रॉम्प्ट और सामान्य सूत्र, उदाहरण चित्रों के साथ, LimaxAI पर एक क्लिक में बनाने के लिए।',
    overviewTitle: 'अवलोकन',
    overviewText: 'प्राचीन शैली पात्र प्रॉम्प्ट में आमतौर पर शामिल होते हैं: पात्र/आदर्श, कपड़े या कवच, हल्का बेज पृष्ठभूमि, एक तरफ रंगीन प्रतीक या मुहर, भाव और मूड, और सिग्नेचर प्रॉप। Ancient Chinese Painting Art और हल्का बेज पृष्ठभूमि लगातार इस्तेमाल करें, फिर पात्र और प्रतीक बदलें।',
    examplesTitle: 'प्रॉम्प्ट उदाहरण',
    examplesIntro: 'यहाँ 10 अंग्रेज़ी प्रॉम्प्ट और संक्षिप्त दृश्य विवरण Midjourney में LimaxAI पर सीधे उपयोग के लिए।',
    tableHeaders: ['पात्र', 'अंग्रेज़ी प्रॉम्प्ट', 'दृश्य विवरण'],
    formulaTitle: 'सामान्य सूत्र',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'पैटर्न: Ancient Chinese Painting Art में [पात्र], मूंछ और लंबे बाल, [कपड़े], हल्का बेज पृष्ठभूमि, एक तरफ [रंग] [प्रतीक], [मूड], गहरी आँखें, [प्रॉप]।',
    imageTitle: 'उदाहरण चित्र',
    startTitle: 'बनाना शुरू करें',
    startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें—VPN की ज़रूरत नहीं, एक अकाउंट कई टूल के लिए।',
    ctaText: 'बनाना शुरू करें',
  },
  ja: {
    title: 'Midjourney: 古風人物画（公式付き）',
    intro: 'Midjourneyで古風中国画風の人物を出すには、Ancient Chinese Painting Art＋人物タイプ＋衣装/鎧＋薄ベージュ背景＋紋様＋表情と小道具のパターンに従います。以下、10個のすぐ使えるプロンプトと一般公式、サンプル画像付きで、LimaxAIでワンクリック作成。',
    overviewTitle: '概要',
    overviewText: '古風人物プロンプトには通常、人物/アーキタイプ、衣装または鎧、薄ベージュ背景、片側の色付き紋様/印章、表情と雰囲気、特徴的な小道具が含まれます。Ancient Chinese Painting Artと薄ベージュ背景を一貫して使い、人物と紋様を差し替えてください。',
    examplesTitle: 'プロンプト例',
    examplesIntro: 'MidjourneyでLimaxAI上で直接使える英語プロンプト10個と短いシーン説明です。',
    tableHeaders: ['人物', '英語プロンプト', 'シーン説明'],
    formulaTitle: '一般公式',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'パターン: Ancient Chinese Painting Artの[人物]、ひげと長髪、[衣装]、薄ベージュ背景、片側に[色][紋様]、[雰囲気]、黒い瞳、[小道具]。',
    imageTitle: 'サンプル画像',
    startTitle: '作成を始める',
    startText: 'これらのプロンプトをMidjourneyや他のモデルでLimaxAIで使用—VPN不要、1アカウントで複数ツール。',
    ctaText: '作成を始める',
  },
  de: {
    title: 'Midjourney: Figuren im antiken Stil (mit Formel)',
    intro: 'Für Figurenbilder im altchinesischen Malstil mit Midjourney dem Muster folgen: Ancient Chinese Painting Art + Archetyp + Kleidung/Rüstung + hellbeiger Hintergrund + Emblem + Stimmung und Requisit. Unten 10 fertige Prompts und eine allgemeine Formel mit Beispielbildern zum Erstellen auf LimaxAI mit einem Klick.',
    overviewTitle: 'Überblick',
    overviewText: 'Antike Figuren-Prompts enthalten meist: Figur/Archetyp, Kleidung oder Rüstung, hellbeigen Hintergrund, ein farbiges Emblem oder Siegel auf einer Seite, Ausdruck und Stimmung sowie ein markantes Requisit. Ancient Chinese Painting Art und hellbeigen Hintergrund konsequent nutzen, dann Figur und Emblem tauschen.',
    examplesTitle: 'Prompt-Beispiele',
    examplesIntro: 'Hier 10 englische Prompts und kurze Szenenbeschreibungen zur direkten Verwendung in Midjourney auf LimaxAI.',
    tableHeaders: ['Figur', 'Engl. Prompt', 'Szenenbeschreibung'],
    formulaTitle: 'Allgemeine Formel',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Muster: [Figur] in Ancient Chinese Painting Art, Schnurrbart und langes Haar, [Kleidung], hellbeiger Hintergrund, [Farbe] [Emblem] auf einer Seite, [Stimmung], dunkle Augen, [Requisit].',
    imageTitle: 'Beispielbild',
    startTitle: 'Erstellen starten',
    startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN nötig, ein Konto für mehrere Tools.',
    ctaText: 'Erstellen starten',
  },
  ko: {
    title: 'Midjourney: 고풍 인물 공필화 (공식 포함)',
    intro: 'Midjourney로 고풍 중국화 스타일 인물을 만들려면 패턴을 따르세요: Ancient Chinese Painting Art + 인물 유형 + 의상/갑옷 + 연한 베이지 배경 + 문양 + 표정과 소품. 아래 10개의 즉시 사용 가능한 프롬프트와 일반 공식, 샘플 이미지로 LimaxAI에서 한 번에 생성할 수 있습니다.',
    overviewTitle: '개요',
    overviewText: '고풍 인물 프롬프트에는 보통 인물/원형, 의상 또는 갑옷, 연한 베이지 배경, 한쪽의 컬러 문양/인장, 표정과 분위기, 상징적 소품이 포함됩니다. Ancient Chinese Painting Art와 연한 베이지 배경을 일관되게 사용한 뒤 인물과 문양만 바꾸면 됩니다.',
    examplesTitle: '프롬프트 예시',
    examplesIntro: 'LimaxAI의 Midjourney에서 바로 쓸 수 있는 영어 프롬프트 10개와 짧은 장면 설명입니다.',
    tableHeaders: ['인물', '영어 프롬프트', '장면 설명'],
    formulaTitle: '일반 공식',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: '패턴: Ancient Chinese Painting Art의 [인물], 수염과 긴 머리, [의상], 연한 베이지 배경, 한쪽에 [색][문양], [분위기], 검은 눈, [소품].',
    imageTitle: '샘플 이미지',
    startTitle: '제작 시작',
    startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요, 하나의 계정으로 여러 도구 이용.',
    ctaText: '제작 시작',
  },
  tr: {
    title: 'Midjourney: Antik tarz figür resmi (formüllü)',
    intro: 'Midjourney ile antik Çin resim tarzında figürler için deseni izleyin: Ancient Chinese Painting Art + arketip + giysi/zırh + açık bej arka plan + amblem + ruh hali ve aksesuar. Aşağıda 10 hazır prompt ve genel formül, örnek görsellerle birlikte, LimaxAI\'da tek tıkla oluşturmak için.',
    overviewTitle: 'Genel bakış',
    overviewText: 'Antik tarz figür promptları genelde şunları içerir: karakter/arketip, giysi veya zırh, açık bej arka plan, bir yanda renkli amblem veya mühür, ifade ve ruh hali, imza aksesuar. Ancient Chinese Painting Art ve açık bej arka planı tutarlı kullanın, sonra karakter ve amblemi değiştirin.',
    examplesTitle: 'Prompt örnekleri',
    examplesIntro: 'LimaxAI\'da Midjourney\'de doğrudan kullanabileceğiniz 10 İngilizce prompt ve kısa sahne açıklaması.',
    tableHeaders: ['Karakter', 'İngilizce prompt', 'Sahne açıklaması'],
    formulaTitle: 'Genel formül',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Desen: Ancient Chinese Painting Art\'ta [karakter], bıyık ve uzun saç, [giysi], açık bej arka plan, bir yanda [renk] [amblem], [ruh hali], koyu gözler, [aksesuar].',
    imageTitle: 'Örnek görsel',
    startTitle: 'Oluşturmaya başla',
    startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez, birden fazla araç için tek hesap.',
    ctaText: 'Oluşturmaya başla',
  },
  vi: {
    title: 'Midjourney: Tranh nhân vật phong cách cổ (có công thức)',
    intro: 'Để có tranh nhân vật phong cách Trung Hoa cổ với Midjourney, làm theo mẫu: Ancient Chinese Painting Art + nguyên mẫu nhân vật + trang phục/áo giáp + nền be nhạt + huy hiệu + tâm trạng và đạo cụ. Dưới đây 10 prompt sẵn dùng và công thức chung, kèm ảnh mẫu, để tạo trên LimaxAI chỉ với một cú nhấp.',
    overviewTitle: 'Tổng quan',
    overviewText: 'Prompt nhân vật phong cách cổ thường gồm: nhân vật/nguyên mẫu, trang phục hoặc áo giáp, nền be nhạt, huy hiệu hoặc con dấu màu ở một bên, biểu cảm và tâm trạng, đạo cụ đặc trưng. Dùng Ancient Chinese Painting Art và nền be nhạt nhất quán, sau đó thay nhân vật và huy hiệu.',
    examplesTitle: 'Ví dụ prompt',
    examplesIntro: 'Đây là 10 prompt tiếng Anh và mô tả cảnh ngắn để dùng trực tiếp trong Midjourney trên LimaxAI.',
    tableHeaders: ['Nhân vật', 'Prompt tiếng Anh', 'Mô tả cảnh'],
    formulaTitle: 'Công thức chung',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Mẫu: [Nhân vật] trong Ancient Chinese Painting Art, râu và tóc dài, [trang phục], nền be nhạt, [màu] [huy hiệu] một bên, [tâm trạng], mắt đen, [đạo cụ].',
    imageTitle: 'Ảnh mẫu',
    startTitle: 'Bắt đầu tạo',
    startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN, một tài khoản cho nhiều công cụ.',
    ctaText: 'Bắt đầu tạo',
  },
  th: {
    title: 'Midjourney: ภาพคนสไตล์โบราณ (พร้อมสูตร)',
    intro: 'เพื่อให้ได้ภาพคนสไตล์จีนโบราณด้วย Midjourney ให้ทำตามรูปแบบ: Ancient Chinese Painting Art + ตัวละครต้นแบบ + เครื่องแต่งกาย/เกราะ + พื้นหลังเบจอ่อน + ตราสัญลักษณ์ + อารมณ์และพร็อป ด้านล่างคือ 10 พรอมป์พร้อมใช้และสูตรทั่วไป พร้อมภาพตัวอย่าง เพื่อสร้างบน LimaxAI ในคลิกเดียว',
    overviewTitle: 'ภาพรวม',
    overviewText: 'พรอมป์คนสไตล์โบราณมักรวม: ตัวละคร/ต้นแบบ เครื่องแต่งกายหรือเกราะ พื้นหลังเบจอ่อน ตราหรือตราประทับสีด้านหนึ่ง การแสดงออกและอารมณ์ และพร็อปเด่น ใช้ Ancient Chinese Painting Art และพื้นหลังเบจอ่อนอย่างสม่ำเสมอ แล้วเปลี่ยนตัวละครและตรา',
    examplesTitle: 'ตัวอย่างพรอมป์',
    examplesIntro: 'นี่คือพรอมป์ภาษาอังกฤษ 10 รายการและคำอธิบายฉากสั้นๆ สำหรับใช้โดยตรงใน Midjourney บน LimaxAI',
    tableHeaders: ['ตัวละคร', 'พรอมป์ภาษาอังกฤษ', 'คำอธิบายฉาก'],
    formulaTitle: 'สูตรทั่วไป',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'รูปแบบ: [ตัวละคร] ใน Ancient Chinese Painting Art หนวดและผมยาว [เครื่องแต่งกาย] พื้นหลังเบจอ่อน [สี] [ตรา] ด้านหนึ่ง [อารมณ์] ตาเข้ม [พร็อป]',
    imageTitle: 'ภาพตัวอย่าง',
    startTitle: 'เริ่มสร้าง',
    startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN บัญชีเดียวสำหรับหลายเครื่องมือ',
    ctaText: 'เริ่มสร้าง',
  },
  it: {
    title: 'Midjourney: Pittura di figure stile antico (con formula)',
    intro: 'Per ottenere pitture di figure in stile cinese antico con Midjourney segui lo schema: Ancient Chinese Painting Art + archetipo + abbigliamento/armatura + sfondo beige chiaro + emblema + umore e accessorio. Qui 10 prompt pronti e una formula generale, con immagini di esempio, per creare su LimaxAI in un clic.',
    overviewTitle: 'Panoramica',
    overviewText: 'I prompt per figure stile antico includono di solito: personaggio/archetipo, abbigliamento o armatura, sfondo beige chiaro, un emblema o sigillo colorato su un lato, espressione e umore, accessorio distintivo. Usa Ancient Chinese Painting Art e sfondo beige chiaro in modo coerente, poi cambia personaggio e emblema.',
    examplesTitle: 'Esempi di prompt',
    examplesIntro: 'Ecco 10 prompt in inglese e brevi descrizioni di scena da usare direttamente in Midjourney su LimaxAI.',
    tableHeaders: ['Personaggio', 'Prompt in inglese', 'Descrizione scena'],
    formulaTitle: 'Formula generale',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Schema: [Personaggio] in Ancient Chinese Painting Art, baffi e capelli lunghi, [abbigliamento], sfondo beige chiaro, [colore] [emblema] su un lato, [umore], occhi scuri, [accessorio].',
    imageTitle: 'Immagine di esempio',
    startTitle: 'Inizia a creare',
    startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN, un account per più strumenti.',
    ctaText: 'Inizia a creare',
  },
  fa: {
    title: 'Midjourney: نقاشی چهره سبک کهن (با فرمول)',
    intro: 'برای گرفتن نقاشی چهره به سبک چینی کهن با Midjourney الگو را دنبال کنید: Ancient Chinese Painting Art + کهن‌الگو + پوشاک/زره + پس‌زمینه بژ روشن + نماد + حالوهوا و اکسسوری. در زیر ۱۰ پرامپت آماده و یک فرمول کلی با تصاویر نمونه برای ساخت در LimaxAI با یک کلیک.',
    overviewTitle: 'خلاصه',
    overviewText: 'پرامپت‌های چهره سبک کهن معمولاً شامل: شخصیت/کهن‌الگو، پوشاک یا زره، پس‌زمینه بژ روشن، نماد یا مهر رنگی در یک طرف، بیان و حالوهوا و اکسسوری مشخص. Ancient Chinese Painting Art و پس‌زمینه بژ روشن را یکدست استفاده کنید، بعد شخصیت و نماد را عوض کنید.',
    examplesTitle: 'نمونه پرامپت',
    examplesIntro: 'اینها ۱۰ پرامپت انگلیسی و توضیح صحنه کوتاه برای استفاده مستقیم در Midjourney روی LimaxAI هستند.',
    tableHeaders: ['شخصیت', 'پرامپت انگلیسی', 'توضیح صحنه'],
    formulaTitle: 'فرمول کلی',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'الگو: [شخصیت] در Ancient Chinese Painting Art، سبیل و موی بلند، [پوشاک]، پس‌زمینه بژ روشن، [رنگ] [نماد] در یک طرف، [حالوهوا]، چشمان تیره، [اکسسوری].',
    imageTitle: 'تصویر نمونه',
    startTitle: 'شروع ساخت',
    startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN، یک اکانت برای چند ابزار.',
    ctaText: 'شروع ساخت',
  },
  nl: {
    title: 'Midjourney: Figuurschildering oude stijl (met formule)',
    intro: 'Voor figuurschilderingen in oude Chinese schilderstijl met Midjourney volg het patroon: Ancient Chinese Painting Art + archetype + kleding/harnas + lichtbeige achtergrond + embleem + sfeer en rekwisiet. Hier 10 kant-en-klare prompts en een algemene formule, met voorbeeldbeelden, om in één klik op LimaxAI te maken.',
    overviewTitle: 'Overzicht',
    overviewText: 'Prompts voor figuren in oude stijl bevatten meestal: personage/archetype, kleding of harnas, lichtbeige achtergrond, een gekleurd embleem of zegel aan één kant, uitdrukking en sfeer, en een kenmerkend rekwisiet. Gebruik Ancient Chinese Painting Art en lichtbeige achtergrond consequent, wissel dan personage en embleem.',
    examplesTitle: 'Voorbeelden van prompts',
    examplesIntro: 'Hier zijn 10 Engelse prompts en korte scènebeschrijvingen voor direct gebruik in Midjourney op LimaxAI.',
    tableHeaders: ['Personage', 'Engelse prompt', 'Scènebeschrijving'],
    formulaTitle: 'Algemene formule',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Patroon: [Personage] in Ancient Chinese Painting Art, snor en lang haar, [kleding], lichtbeige achtergrond, [kleur] [embleem] aan één kant, [sfeer], donkere ogen, [rekwisiet].',
    imageTitle: 'Voorbeeldafbeelding',
    startTitle: 'Beginnen met maken',
    startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig, één account voor meerdere tools.',
    ctaText: 'Beginnen met maken',
  },
  pl: {
    title: 'Midjourney: Malarstwo postaci w stylu antycznym (ze wzorem)',
    intro: 'Aby uzyskać malarstwo postaci w stylu starożytnego Chin z Midjourney, stosuj schemat: Ancient Chinese Painting Art + archetyp + strój/zbroja + jasnobeżowe tło + emblemat + nastrój i rekwizyt. Poniżej 10 gotowych promptów i ogólny wzór oraz przykładowe obrazy do tworzenia na LimaxAI jednym kliknięciem.',
    overviewTitle: 'Przegląd',
    overviewText: 'Prompty postaci w stylu antycznym zwykle obejmują: postać/archetyp, strój lub zbroję, jasnobeżowe tło, kolorowy emblemat lub pieczęć z jednej strony, wyraz i nastrój oraz charakterystyczny rekwizyt. Używaj Ancient Chinese Painting Art i jasnobeżowego tła konsekwentnie, potem zamieniaj postać i emblemat.',
    examplesTitle: 'Przykłady promptów',
    examplesIntro: 'Oto 10 promptów po angielsku i krótkie opisy scen do bezpośredniego użycia w Midjourney na LimaxAI.',
    tableHeaders: ['Postać', 'Prompt po angielsku', 'Opis sceny'],
    formulaTitle: 'Wzór ogólny',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Schemat: [Postać] w Ancient Chinese Painting Art, wąsy i długie włosy, [strój], jasnobeżowe tło, [kolor] [emblemat] z jednej strony, [nastrój], ciemne oczy, [rekwizyt].',
    imageTitle: 'Obraz przykładowy',
    startTitle: 'Zacznij tworzyć',
    startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN, jedno konto do wielu narzędzi.',
    ctaText: 'Zacznij tworzyć',
  },
  sv: {
    title: 'Midjourney: Figurmålning i antik stil (med formel)',
    intro: 'För figurmålningar i antik kinesisk stil med Midjourney, följ mönstret: Ancient Chinese Painting Art + arketyp + kläder/rustning + ljusbeige bakgrund + emblem + stämning och rekvisita. Här 10 färdiga prompter och en allmän formel med exempelbilder för att skapa på LimaxAI med ett klick.',
    overviewTitle: 'Översikt',
    overviewText: 'Prompter för figurer i antik stil inkluderar oftast: karaktär/arketyp, kläder eller rustning, ljusbeige bakgrund, ett färgat emblem eller sigill på en sida, uttryck och stämning samt en signaturrekvisita. Använd Ancient Chinese Painting Art och ljusbeige bakgrund konsekvent, byt sedan karaktär och emblem.',
    examplesTitle: 'Promptexempel',
    examplesIntro: 'Här är 10 engelska prompter och korta scenbeskrivningar för direkt användning i Midjourney på LimaxAI.',
    tableHeaders: ['Karaktär', 'Engelsk prompt', 'Scenbeskrivning'],
    formulaTitle: 'Allmän formel',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Mönster: [Karaktär] i Ancient Chinese Painting Art, mustasch och långt hår, [kläder], ljusbeige bakgrund, [färg] [emblem] på en sida, [stämning], mörka ögon, [rekvisita].',
    imageTitle: 'Exempelbild',
    startTitle: 'Börja skapa',
    startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs, ett konto för flera verktyg.',
    ctaText: 'Börja skapa',
  },
  uk: {
    title: 'Midjourney: Малюнок фігур у старовинному стилі (з формулою)',
    intro: 'Щоб отримати зображення фігур у стилі давньокитайського живопису з Midjourney, дотримуйтесь схеми: Ancient Chinese Painting Art + архетип + одяг/обладунки + світло-бежевий фон + емблема + настрій і реквізит. Нижче 10 готових промптів і загальна формула з прикладами зображень для створення на LimaxAI в один клік.',
    overviewTitle: 'Огляд',
    overviewText: 'Промпти фігур у старовинному стилі зазвичай включають: персонаж/архетип, одяг або обладунки, світло-бежевий фон, кольорову емблему або печатку з одного боку, вираз і настрій, характерний реквізит. Використовуйте Ancient Chinese Painting Art і світло-бежевий фон послідовно, потім змінюйте персонажа та емблему.',
    examplesTitle: 'Приклади промптів',
    examplesIntro: 'Ось 10 англійських промптів і короткі описи сцен для безпосереднього використання в Midjourney на LimaxAI.',
    tableHeaders: ['Персонаж', 'Англ. промпт', 'Опис сцени'],
    formulaTitle: 'Загальна формула',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Схема: [Персонаж] в Ancient Chinese Painting Art, вуса і довге волосся, [одяг], світло-бежевий фон, [колір] [емблема] з одного боку, [настрій], темні очі, [реквізит].',
    imageTitle: 'Приклад зображення',
    startTitle: 'Почати створення',
    startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN, один обліковий запис для кількох інструментів.',
    ctaText: 'Почати створення',
  },
  ro: {
    title: 'Midjourney: Pictură de figuri în stil antic (cu formulă)',
    intro: 'Pentru picturi de figuri în stil chinezesc antic cu Midjourney, urmați modelul: Ancient Chinese Painting Art + arhetip + îmbrăcăminte/armură + fundal bej deschis + emblemă + dispoziție și accesoriu. Mai jos 10 prompturi gata de folosit și o formulă generală, cu imagini exemplu, pentru a crea pe LimaxAI într-un clic.',
    overviewTitle: 'Prezentare',
    overviewText: 'Prompturile de figuri în stil antic includ de obicei: personaj/arhetip, îmbrăcăminte sau armură, fundal bej deschis, o emblemă sau sigiliu colorat pe o parte, expresie și dispoziție, accesoriu distinctiv. Folosiți Ancient Chinese Painting Art și fundal bej deschis în mod consecvent, apoi schimbați personajul și emblema.',
    examplesTitle: 'Exemple de prompturi',
    examplesIntro: 'Iată 10 prompturi în engleză și descrieri scurte de scenă pentru utilizare directă în Midjourney pe LimaxAI.',
    tableHeaders: ['Personaj', 'Prompt în engleză', 'Descriere scenă'],
    formulaTitle: 'Formula generală',
    formulaEn: 'English: A painting of [CHARACTER/ARCHETYPE] in the Ancient Chinese Painting Art, with an elegant mustache and long hair, wearing [CLOTHING/ARMOR]. The background is light beige. A [COLOR] [EMBLEM/TOTEM] appears on one side of him. His expression exudes [MOOD] as he looks forward towards the viewer. He has dark eyes and holds/wears [SIGNATURE PROP/DETAIL].',
    formulaLocal: 'Model: [Personaj] în Ancient Chinese Painting Art, mustață și păr lung, [îmbrăcăminte], fundal bej deschis, [culoare] [emblemă] pe o parte, [dispoziție], ochi întunecați, [accesoriu].',
    imageTitle: 'Imagine exemplu',
    startTitle: 'Începe crearea',
    startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN, un cont pentru mai multe instrumente.',
    ctaText: 'Începe crearea',
  },
};

/** 12种质感教程各语种文案 */
interface TextureArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string, string];
  formulaTitle: string;
  formulaEn: string;
  formulaLocal: string;
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const textureCopyByLocale: Record<string, TextureArticleCopy> = {
  es: { title: 'Midjourney: 12 texturas (con fórmula)', intro: 'Para obtener distintas texturas con Midjourney sigue el patrón: sujeto + material + detalles de textura + decoración y fondo + luz cinematográfica. Aquí 12 prompts listos y una fórmula general, con imágenes de ejemplo, para crear en LimaxAI en un clic.', overviewTitle: 'Resumen', overviewText: 'Los prompts de textura suelen incluir: sujeto/objeto, material, detalles de textura, decoración y fondo/luz. Termina con cinematic lighting, ultra detailed, 8k de forma consistente, luego cambia sujeto y material.', examplesTitle: 'Ejemplos de prompts', examplesIntro: 'Aquí tienes 12 prompts en inglés y descripciones de escena para usar en Midjourney en LimaxAI.', tableHeaders: ['Textura', 'Prompt en inglés', 'Descripción de escena'], formulaTitle: 'Fórmula general', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Patrón: [Sujeto] + [material], [detalles de textura], [decoración], [fondo], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN, una cuenta para varias herramientas.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: 12 ملمس (مع معادلة)', intro: 'للحصول على ملمس مختلف مع Midjourney اتبع النمط: موضوع + مادة + تفاصيل الملمس + خلفية وإضاءة. فيما يلي 12 أمراً جاهزاً ومعادلة عامة مع صور نموذجية للإنشاء على LimaxAI بنقرة واحدة.', overviewTitle: 'نظرة عامة', overviewText: 'أوامر الملمس تتضمن عادة: الموضوع/العنصر، المادة، تفاصيل الملمس، الزخرفة والخلفية/الإضاءة. أنهِ بـ cinematic lighting, ultra detailed, 8k ثم بدّل الموضوع والمادة.', examplesTitle: 'أمثلة أوامر', examplesIntro: 'إليك 12 أمراً بالإنجليزية ووصف المشهد للاستخدام المباشر في Midjourney على LimaxAI.', tableHeaders: ['الملمس', 'الأمر بالإنجليزية', 'وصف المشهد'], formulaTitle: 'المعادلة العامة', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'النمط: [الموضوع] + [المادة]، [تفاصيل الملمس]، [الخلفية]، cinematic lighting, ultra detailed, 8k.', imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN، حساب واحد لأدوات متعددة.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: 12 texturas (com fórmula)', intro: 'Para obter diferentes texturas com Midjourney siga o padrão: assunto + material + detalhes de textura + decoração e fundo + iluminação cinematográfica. Abaixo 12 prompts prontos e uma fórmula geral, com imagens de exemplo, para criar no LimaxAI em um clique.', overviewTitle: 'Visão geral', overviewText: 'Prompts de textura costumam incluir: assunto/objeto, material, detalhes de textura, decoração e fundo/luz. Termine com cinematic lighting, ultra detailed, 8k de forma consistente, depois troque assunto e material.', examplesTitle: 'Exemplos de prompts', examplesIntro: 'Aqui estão 12 prompts em inglês e descrições de cena para usar diretamente no Midjourney no LimaxAI.', tableHeaders: ['Textura', 'Prompt em inglês', 'Descrição da cena'], formulaTitle: 'Fórmula geral', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Padrão: [Assunto] + [material], [detalhes de textura], [fundo], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN, uma conta para várias ferramentas.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: 12 tekstur (dengan rumus)', intro: 'Untuk mendapatkan berbagai tekstur dengan Midjourney ikuti pola: subjek + material + detail tekstur + dekorasi dan latar + pencahayaan sinematik. Berikut 12 prompt siap pakai dan rumus umum dengan gambar contoh untuk membuat di LimaxAI dalam satu klik.', overviewTitle: 'Ringkasan', overviewText: 'Prompt tekstur biasanya mencakup: subjek/objek, material, detail tekstur, dekorasi dan latar/cahaya. Akhiri dengan cinematic lighting, ultra detailed, 8k secara konsisten, lalu ganti subjek dan material.', examplesTitle: 'Contoh prompt', examplesIntro: 'Berikut 12 prompt bahasa Inggris dan deskripsi adegan untuk digunakan langsung di Midjourney di LimaxAI.', tableHeaders: ['Tekstur', 'Prompt bahasa Inggris', 'Deskripsi adegan'], formulaTitle: 'Rumus umum', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Pola: [Subjek] + [material], [detail tekstur], [latar], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akun untuk banyak alat.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: 12 tekstur (dengan formula)', intro: 'Untuk dapat pelbagai tekstur dengan Midjourney ikuti corak: subjek + bahan + butiran tekstur + hiasan dan latar + pencahayaan sinematik. Di bawah 12 prompt sedia dan formula umum dengan imej contoh untuk cipta di LimaxAI dalam satu klik.', overviewTitle: 'Gambaran', overviewText: 'Prompt tekstur biasanya termasuk: subjek/objek, bahan, butiran tekstur, hiasan dan latar/cahaya. Akhiri dengan cinematic lighting, ultra detailed, 8k secara konsisten, kemudian tukar subjek dan bahan.', examplesTitle: 'Contoh prompt', examplesIntro: 'Berikut 12 prompt Inggeris dan penerangan adegan untuk guna terus dalam Midjourney di LimaxAI.', tableHeaders: ['Tekstur', 'Prompt Inggeris', 'Penerangan adegan'], formulaTitle: 'Formula umum', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Corak: [Subjek] + [bahan], [butiran tekstur], [latar], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akaun untuk pelbagai alat.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney: 12 textures (avec formule)', intro: 'Pour obtenir différentes textures avec Midjourney suivez le schéma: sujet + matériau + détails de texture + décor et fond + éclairage cinématique. Voici 12 prompts prêts et une formule générale, avec des images exemples, pour créer sur LimaxAI en un clic.', overviewTitle: 'Aperçu', overviewText: 'Les prompts de texture incluent généralement: sujet/objet, matériau, détails de texture, décor et fond/éclairage. Terminez par cinematic lighting, ultra detailed, 8k de façon cohérente, puis changez sujet et matériau.', examplesTitle: 'Exemples de prompts', examplesIntro: 'Voici 12 prompts en anglais et de brèves descriptions de scène pour une utilisation directe dans Midjourney sur LimaxAI.', tableHeaders: ['Texture', 'Prompt en anglais', 'Description de scène'], formulaTitle: 'Formule générale', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Schéma: [Sujet] + [matériau], [détails de texture], [fond], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN, un compte pour plusieurs outils.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: 12 текстур (с формулой)', intro: 'Чтобы получить разные текстуры с Midjourney, следуйте схеме: объект + материал + детали текстуры + декор и фон + кинематографический свет. Ниже 12 готовых промптов и общая формула с примерами изображений для создания на LimaxAI в один клик.', overviewTitle: 'Обзор', overviewText: 'Промпты текстур обычно включают: объект/предмет, материал, детали текстуры, декор и фон/освещение. Завершайте cinematic lighting, ultra detailed, 8k последовательно, затем меняйте объект и материал.', examplesTitle: 'Примеры промптов', examplesIntro: 'Вот 12 промптов на английском и краткие описания сцен для прямого использования в Midjourney на LimaxAI.', tableHeaders: ['Текстура', 'Англ. промпт', 'Описание сцены'], formulaTitle: 'Общая формула', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Схема: [Объект] + [материал], [детали текстуры], [фон], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN, один аккаунт для нескольких инструментов.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: 12 बनावट (सूत्र के साथ)', intro: 'Midjourney से अलग बनावट पाने के लिए पैटर्न अपनाएं: विषय + सामग्री + बनावट विवरण + पृष्ठभूमि और रोशनी। नीचे 12 तैयार प्रॉम्प्ट और सामान्य सूत्र, उदाहरण चित्रों के साथ, LimaxAI पर एक क्लिक में बनाने के लिए।', overviewTitle: 'अवलोकन', overviewText: 'बनावट प्रॉम्प्ट में आमतौर पर शामिल: विषय/वस्तु, सामग्री, बनावट विवरण, सजावट और पृष्ठभूमि/रोशनी। cinematic lighting, ultra detailed, 8k से लगातार समाप्त करें, फिर विषय और सामग्री बदलें।', examplesTitle: 'प्रॉम्प्ट उदाहरण', examplesIntro: 'यहाँ 12 अंग्रेज़ी प्रॉम्प्ट और संक्षिप्त दृश्य विवरण Midjourney में LimaxAI पर सीधे उपयोग के लिए।', tableHeaders: ['बनावट', 'अंग्रेज़ी प्रॉम्प्ट', 'दृश्य विवरण'], formulaTitle: 'सामान्य सूत्र', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'पैटर्न: [विषय] + [सामग्री], [बनावट विवरण], [पृष्ठभूमि], cinematic lighting, ultra detailed, 8k।', imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें—VPN की ज़रूरत नहीं, एक अकाउंट कई टूल के लिए।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: 12種類の質感（公式付き）', intro: 'Midjourneyで異なる質感を出すには、主体＋材質＋質感ディテール＋装飾と背景＋シネマティック光のパターンに従います。以下、12個のすぐ使えるプロンプトと一般公式、サンプル画像付きで、LimaxAIでワンクリック作成。', overviewTitle: '概要', overviewText: '質感プロンプトには通常、主体/アイテム、材質、質感ディテール、装飾、背景と光が含まれます。cinematic lighting, ultra detailed, 8kで統一し、主体と材質を差し替えてください。', examplesTitle: 'プロンプト例', examplesIntro: 'MidjourneyでLimaxAI上で直接使える英語プロンプト12個と短いシーン説明です。', tableHeaders: ['質感', '英語プロンプト', 'シーン説明'], formulaTitle: '一般公式', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'パターン: [主体]＋[材質]、[質感ディテール]、[背景]、cinematic lighting, ultra detailed, 8k。', imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他のモデルでLimaxAIで使用—VPN不要、1アカウントで複数ツール。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: 12 Texturen (mit Formel)', intro: 'Für verschiedene Texturen mit Midjourney dem Muster folgen: Motiv + Material + Texturdetails + Dekor und Hintergrund + Filmbeleuchtung. Unten 12 fertige Prompts und eine allgemeine Formel mit Beispielbildern zum Erstellen auf LimaxAI mit einem Klick.', overviewTitle: 'Überblick', overviewText: 'Textur-Prompts enthalten meist: Motiv/Objekt, Material, Texturdetails, Dekor und Hintergrund/Beleuchtung. Einheitlich mit cinematic lighting, ultra detailed, 8k abschließen, dann Motiv und Material tauschen.', examplesTitle: 'Prompt-Beispiele', examplesIntro: 'Hier 12 englische Prompts und kurze Szenenbeschreibungen zur direkten Verwendung in Midjourney auf LimaxAI.', tableHeaders: ['Textur', 'Engl. Prompt', 'Szenenbeschreibung'], formulaTitle: 'Allgemeine Formel', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Muster: [Motiv] + [Material], [Texturdetails], [Hintergrund], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN nötig, ein Konto für mehrere Tools.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: 12가지 질감 (공식 포함)', intro: 'Midjourney로 다양한 질감을 만들려면 패턴을 따르세요: 주체 + 재질 + 질감 디테일 + 장식과 배경 + 시네마틱 조명. 아래 12개의 즉시 사용 가능한 프롬프트와 일반 공식, 샘플 이미지로 LimaxAI에서 한 번에 생성할 수 있습니다.', overviewTitle: '개요', overviewText: '질감 프롬프트에는 보통 주체/아이템, 재질, 질감 디테일, 장식, 배경과 조명이 포함됩니다. cinematic lighting, ultra detailed, 8k로 일관되게 끝낸 뒤 주체와 재질만 바꾸면 됩니다.', examplesTitle: '프롬프트 예시', examplesIntro: 'LimaxAI의 Midjourney에서 바로 쓸 수 있는 영어 프롬프트 12개와 짧은 장면 설명입니다.', tableHeaders: ['질감', '영어 프롬프트', '장면 설명'], formulaTitle: '일반 공식', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: '패턴: [주체]+[재질], [질감 디테일], [배경], cinematic lighting, ultra detailed, 8k.', imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요, 하나의 계정으로 여러 도구 이용.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: 12 doku (formüllü)', intro: 'Midjourney ile farklı dokular için deseni izleyin: konu + malzeme + doku detayları + dekor ve arka plan + sinematik ışık. Aşağıda 12 hazır prompt ve genel formül, örnek görsellerle birlikte, LimaxAI\'da tek tıkla oluşturmak için.', overviewTitle: 'Genel bakış', overviewText: 'Doku promptları genelde şunları içerir: konu/nesne, malzeme, doku detayları, dekor ve arka plan/ışık. Tutarlı şekilde cinematic lighting, ultra detailed, 8k ile bitirin, sonra konu ve malzemeyi değiştirin.', examplesTitle: 'Prompt örnekleri', examplesIntro: 'LimaxAI\'da Midjourney\'de doğrudan kullanabileceğiniz 12 İngilizce prompt ve kısa sahne açıklaması.', tableHeaders: ['Doku', 'İngilizce prompt', 'Sahne açıklaması'], formulaTitle: 'Genel formül', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Desen: [Konu] + [malzeme], [doku detayları], [arka plan], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez, birden fazla araç için tek hesap.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: 12 chất liệu (có công thức)', intro: 'Để có các chất liệu khác nhau với Midjourney, làm theo mẫu: chủ thể + chất liệu + chi tiết chất liệu + trang trí và nền + ánh sáng điện ảnh. Dưới đây 12 prompt sẵn dùng và công thức chung, kèm ảnh mẫu, để tạo trên LimaxAI chỉ với một cú nhấp.', overviewTitle: 'Tổng quan', overviewText: 'Prompt chất liệu thường gồm: chủ thể/vật thể, chất liệu, chi tiết chất liệu, trang trí và nền/ánh sáng. Kết thúc bằng cinematic lighting, ultra detailed, 8k nhất quán, sau đó thay chủ thể và chất liệu.', examplesTitle: 'Ví dụ prompt', examplesIntro: 'Đây là 12 prompt tiếng Anh và mô tả cảnh ngắn để dùng trực tiếp trong Midjourney trên LimaxAI.', tableHeaders: ['Chất liệu', 'Prompt tiếng Anh', 'Mô tả cảnh'], formulaTitle: 'Công thức chung', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Mẫu: [Chủ thể] + [chất liệu], [chi tiết chất liệu], [nền], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN, một tài khoản cho nhiều công cụ.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: 12 พื้นผิว (พร้อมสูตร)', intro: 'เพื่อให้ได้พื้นผิวต่างกันด้วย Midjourney ให้ทำตามรูปแบบ: ตัวแบบ + วัสดุ + รายละเอียดพื้นผิว + พื้นหลังและแสง ด้านล่างคือ 12 พรอมป์พร้อมใช้และสูตรทั่วไป พร้อมภาพตัวอย่าง เพื่อสร้างบน LimaxAI ในคลิกเดียว', overviewTitle: 'ภาพรวม', overviewText: 'พรอมป์พื้นผิวมักรวม: ตัวแบบ/วัตถุ วัสดุ รายละเอียดพื้นผิว การตกแต่งและพื้นหลัง/แสง จบด้วย cinematic lighting, ultra detailed, 8k อย่างสม่ำเสมอ แล้วเปลี่ยนตัวแบบและวัสดุ', examplesTitle: 'ตัวอย่างพรอมป์', examplesIntro: 'นี่คือพรอมป์ภาษาอังกฤษ 12 รายการและคำอธิบายฉากสั้นๆ สำหรับใช้โดยตรงใน Midjourney บน LimaxAI', tableHeaders: ['พื้นผิว', 'พรอมป์ภาษาอังกฤษ', 'คำอธิบายฉาก'], formulaTitle: 'สูตรทั่วไป', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'รูปแบบ: [ตัวแบบ]+[วัสดุ] [รายละเอียดพื้นผิว] [พื้นหลัง] cinematic lighting, ultra detailed, 8k', imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN บัญชีเดียวสำหรับหลายเครื่องมือ', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: 12 texture (con formula)', intro: 'Per ottenere diverse texture con Midjourney segui lo schema: soggetto + materiale + dettagli di texture + decorazione e sfondo + illuminazione cinematografica. Qui 12 prompt pronti e una formula generale, con immagini di esempio, per creare su LimaxAI in un clic.', overviewTitle: 'Panoramica', overviewText: 'I prompt per texture includono di solito: soggetto/oggetto, materiale, dettagli di texture, decorazione e sfondo/illuminazione. Termina con cinematic lighting, ultra detailed, 8k in modo coerente, poi cambia soggetto e materiale.', examplesTitle: 'Esempi di prompt', examplesIntro: 'Ecco 12 prompt in inglese e brevi descrizioni di scena da usare direttamente in Midjourney su LimaxAI.', tableHeaders: ['Texture', 'Prompt in inglese', 'Descrizione scena'], formulaTitle: 'Formula generale', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Schema: [Soggetto] + [materiale], [dettagli di texture], [sfondo], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN, un account per più strumenti.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: ۱۲ بافت (با فرمول)', intro: 'برای گرفتن بافت‌های مختلف با Midjourney الگو را دنبال کنید: موضوع + ماده + جزئیات بافت + پس‌زمینه و نور. در زیر ۱۲ پرامپت آماده و یک فرمول کلی با تصاویر نمونه برای ساخت در LimaxAI با یک کلیک.', overviewTitle: 'خلاصه', overviewText: 'پرامپت‌های بافت معمولاً شامل: موضوع/شیء، ماده، جزئیات بافت، تزئین و پس‌زمینه/نور. با cinematic lighting, ultra detailed, 8k یکدست تمام کنید، بعد موضوع و ماده را عوض کنید.', examplesTitle: 'نمونه پرامپت', examplesIntro: 'اینها ۱۲ پرامپت انگلیسی و توضیح صحنه کوتاه برای استفاده مستقیم در Midjourney روی LimaxAI هستند.', tableHeaders: ['بافت', 'پرامپت انگلیسی', 'توضیح صحنه'], formulaTitle: 'فرمول کلی', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'الگو: [موضوع] + [ماده]، [جزئیات بافت]، [پس‌زمینه]، cinematic lighting, ultra detailed, 8k.', imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN، یک اکانت برای چند ابزار.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: 12 texturen (met formule)', intro: 'Voor verschillende texturen met Midjourney volg het patroon: onderwerp + materiaal + textuurdetails + decor en achtergrond + filmbelichting. Hier 12 kant-en-klare prompts en een algemene formule, met voorbeeldbeelden, om in één klik op LimaxAI te maken.', overviewTitle: 'Overzicht', overviewText: 'Texture-prompts bevatten meestal: onderwerp/object, materiaal, textuurdetails, decor en achtergrond/licht. Eindig consequent met cinematic lighting, ultra detailed, 8k, wissel dan onderwerp en materiaal.', examplesTitle: 'Voorbeelden van prompts', examplesIntro: 'Hier zijn 12 Engelse prompts en korte scènebeschrijvingen voor direct gebruik in Midjourney op LimaxAI.', tableHeaders: ['Textuur', 'Engelse prompt', 'Scènebeschrijving'], formulaTitle: 'Algemene formule', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Patroon: [Onderwerp] + [materiaal], [textuurdetails], [achtergrond], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig, één account voor meerdere tools.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: 12 faktur (ze wzorem)', intro: 'Aby uzyskać różne faktury w Midjourney, stosuj schemat: temat + materiał + szczegóły faktury + dekoracja i tło + oświetlenie filmowe. Poniżej 12 gotowych promptów i ogólny wzór oraz przykładowe obrazy do tworzenia na LimaxAI jednym kliknięciem.', overviewTitle: 'Przegląd', overviewText: 'Prompty faktur zwykle obejmują: temat/obiekt, materiał, szczegóły faktury, dekorację i tło/oświetlenie. Kończ konsekwentnie cinematic lighting, ultra detailed, 8k, potem zamieniaj temat i materiał.', examplesTitle: 'Przykłady promptów', examplesIntro: 'Oto 12 promptów po angielsku i krótkie opisy scen do bezpośredniego użycia w Midjourney na LimaxAI.', tableHeaders: ['Faktura', 'Prompt po angielsku', 'Opis sceny'], formulaTitle: 'Wzór ogólny', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Schemat: [Temat] + [materiał], [szczegóły faktury], [tło], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN, jedno konto do wielu narzędzi.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: 12 texturer (med formel)', intro: 'För olika texturer med Midjourney, följ mönstret: motiv + material + texturdetaljer + dekoration och bakgrund + filmbelysning. Här 12 färdiga prompter och en allmän formel med exempelbilder för att skapa på LimaxAI med ett klick.', overviewTitle: 'Översikt', overviewText: 'Texturprompter inkluderar oftast: motiv/objekt, material, texturdetaljer, dekoration och bakgrund/belysning. Avsluta med cinematic lighting, ultra detailed, 8k konsekvent, byt sedan motiv och material.', examplesTitle: 'Promptexempel', examplesIntro: 'Här är 12 engelska prompter och korta scenbeskrivningar för direkt användning i Midjourney på LimaxAI.', tableHeaders: ['Textur', 'Engelsk prompt', 'Scenbeskrivning'], formulaTitle: 'Allmän formel', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Mönster: [Motiv] + [material], [texturdetaljer], [bakgrund], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs, ett konto för flera verktyg.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: 12 текстур (з формулою)', intro: 'Щоб отримати різні текстури з Midjourney, дотримуйтесь схеми: об\'єкт + матеріал + деталі текстури + декор і фон + кінематографічне світло. Нижче 12 готових промптів і загальна формула з прикладами зображень для створення на LimaxAI в один клік.', overviewTitle: 'Огляд', overviewText: 'Промпти текстур зазвичай включають: об\'єкт/предмет, матеріал, деталі текстури, декор і фон/освітлення. Завершуйте cinematic lighting, ultra detailed, 8k послідовно, потім змінюйте об\'єкт і матеріал.', examplesTitle: 'Приклади промптів', examplesIntro: 'Ось 12 англійських промптів і короткі описи сцен для безпосереднього використання в Midjourney на LimaxAI.', tableHeaders: ['Текстура', 'Англ. промпт', 'Опис сцени'], formulaTitle: 'Загальна формула', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Схема: [Об\'єкт] + [матеріал], [деталі текстури], [фон], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN, один обліковий запис для кількох інструментів.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: 12 texturi (cu formulă)', intro: 'Pentru texturi diferite cu Midjourney urmați modelul: subiect + material + detalii textură + decor și fundal + iluminat cinematografic. Mai jos 12 prompturi gata de folosit și o formulă generală, cu imagini exemplu, pentru a crea pe LimaxAI într-un clic.', overviewTitle: 'Prezentare', overviewText: 'Prompturile de textură includ de obicei: subiect/obiect, material, detalii textură, decor și fundal/iluminat. Terminați cu cinematic lighting, ultra detailed, 8k în mod consecvent, apoi schimbați subiectul și materialul.', examplesTitle: 'Exemple de prompturi', examplesIntro: 'Iată 12 prompturi în engleză și descrieri scurte de scenă pentru utilizare directă în Midjourney pe LimaxAI.', tableHeaders: ['Textură', 'Prompt în engleză', 'Descriere scenă'], formulaTitle: 'Formula generală', formulaEn: 'English: [Subject] made of [Material], featuring [Texture details], adorned with [Decor elements], wearing [Scarf/Accessory], set against [Background], cinematic lighting, ultra detailed, 8k', formulaLocal: 'Model: [Subiect] + [material], [detalii textură], [fundal], cinematic lighting, ultra detailed, 8k.', imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN, un cont pentru mai multe instrumente.', ctaText: 'Începe crearea' },
};

/** 塞尔达风格教程各语种文案 */
interface ZeldaArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string, string];
  formulaTitle: string;
  formulaEn: string;
  formulaLocal: string;
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const zeldaCopyByLocale: Record<string, ZeldaArticleCopy> = {
  es: { title: 'Midjourney: Estilo Zelda (con fórmula)', intro: 'Para retratos al estilo Zelda con Midjourney sigue el patrón: personaje + retrato frontal + pelo y vestuario + escena de fondo + pintura al óleo fantástica. Aquí 10 prompts listos y una fórmula general, con imágenes de ejemplo, para crear en LimaxAI en un clic.', overviewTitle: 'Resumen', overviewText: 'Los prompts estilo Zelda suelen incluir: personaje (de Zelda u otro IP redibujado), retrato frontal/simétrico, pelo y vestuario/armadura, escena de fondo, fantasy art oil painting e iluminación/detalle. Usa óleo y alto detalle de forma consistente, luego cambia personaje y escena.', examplesTitle: 'Ejemplos de prompts', examplesIntro: 'Aquí tienes 10 prompts en inglés y descripciones de escena para usar en Midjourney en LimaxAI.', tableHeaders: ['Personaje/Escena', 'Prompt en inglés', 'Descripción de escena'], formulaTitle: 'Fórmula general', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Patrón: [Personaje] + retrato [ambiente], [pelo], [vestuario], [fondo], fantasy art oil painting, [iluminación], [detalle].', imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN, una cuenta para varias herramientas.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: أسلوب زيلدا (مع معادلة)', intro: 'للحصول على صور شخصيات بأسلوب زيلدا مع Midjourney اتبع النمط: مصدر الشخصية + صورة أمامية + الشعر والملابس + خلفية + رسم زيتي فانتازيا. فيما يلي 10 أوامر جاهزة ومعادلة عامة مع صور نموذجية للإنشاء على LimaxAI بنقرة واحدة.', overviewTitle: 'نظرة عامة', overviewText: 'أوامر أسلوب زيلدا تتضمن عادة: الشخصية (من زيلدا أو IP آخر بإعادة تخيل)، صورة أمامية/متماثلة، الشعر والملابس/الدرع، خلفية، fantasy art oil painting والإضاءة/مستوى التفاصيل. استخدم الزيت والتفاصيل العالية باستمرار ثم بدّل الشخصية والمشهد.', examplesTitle: 'أمثلة أوامر', examplesIntro: 'إليك 10 أوامر بالإنجليزية ووصف المشهد للاستخدام المباشر في Midjourney على LimaxAI.', tableHeaders: ['الشخصية/المشهد', 'الأمر بالإنجليزية', 'وصف المشهد'], formulaTitle: 'المعادلة العامة', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'النمط: [الشخصية] + صورة [المزاج]، [الشعر]، [الملابس]، [الخلفية]، fantasy art oil painting، [الإضاءة]، [التفاصيل].', imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN، حساب واحد لأدوات متعددة.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: Estilo Zelda (com fórmula)', intro: 'Para retratos no estilo Zelda com Midjourney siga o padrão: personagem + retrato frontal + cabelo e roupa + cena de fundo + pintura a óleo fantástica. Abaixo 10 prompts prontos e uma fórmula geral, com imagens de exemplo, para criar no LimaxAI em um clique.', overviewTitle: 'Visão geral', overviewText: 'Prompts estilo Zelda costumam incluir: personagem (de Zelda ou outro IP reimaginado), retrato frontal/simétrico, cabelo e roupa/armadura, cena de fundo, fantasy art oil painting e iluminação/detalhe. Use óleo e alto detalhe de forma consistente, depois troque personagem e cena.', examplesTitle: 'Exemplos de prompts', examplesIntro: 'Aqui estão 10 prompts em inglês e descrições de cena para usar diretamente no Midjourney no LimaxAI.', tableHeaders: ['Personagem/Cena', 'Prompt em inglês', 'Descrição da cena'], formulaTitle: 'Fórmula geral', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Padrão: [Personagem] + retrato [ambiente], [cabelo], [roupa], [fundo], fantasy art oil painting, [iluminação], [detalhe].', imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN, uma conta para várias ferramentas.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: Gaya Zelda (dengan rumus)', intro: 'Untuk potret bergaya Zelda dengan Midjourney ikuti pola: sumber karakter + potret frontal + rambut dan pakaian + adegan latar + lukisan minyak fantasi. Berikut 10 prompt siap pakai dan rumus umum dengan gambar contoh untuk membuat di LimaxAI dalam satu klik.', overviewTitle: 'Ringkasan', overviewText: 'Prompt gaya Zelda biasanya mencakup: karakter (dari Zelda atau IP lain yang diimajinasi ulang), potret frontal/simetris, rambut dan pakaian/zirah, adegan latar, fantasy art oil painting dan pencahayaan/tingkat detail. Gunakan minyak dan detail tinggi secara konsisten, lalu ganti karakter dan adegan.', examplesTitle: 'Contoh prompt', examplesIntro: 'Berikut 10 prompt bahasa Inggris dan deskripsi adegan untuk digunakan langsung di Midjourney di LimaxAI.', tableHeaders: ['Karakter/Adegan', 'Prompt bahasa Inggris', 'Deskripsi adegan'], formulaTitle: 'Rumus umum', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Pola: [Karakter] + potret [suasana], [rambut], [pakaian], [latar], fantasy art oil painting, [pencahayaan], [detail].', imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akun untuk banyak alat.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: Gaya Zelda (dengan formula)', intro: 'Untuk potret bergaya Zelda dengan Midjourney ikuti corak: sumber watak + potret hadapan + rambut dan pakaian + adegan latar + lukisan minyak fantasi. Di bawah 10 prompt sedia dan formula umum dengan imej contoh untuk cipta di LimaxAI dalam satu klik.', overviewTitle: 'Gambaran', overviewText: 'Prompt gaya Zelda biasanya termasuk: watak (dari Zelda atau IP lain diimajinasi semula), potret hadapan/simetri, rambut dan pakaian/zirah, adegan latar, fantasy art oil painting dan pencahayaan/peringkat detail. Guna minyak dan detail tinggi secara konsisten, kemudian tukar watak dan adegan.', examplesTitle: 'Contoh prompt', examplesIntro: 'Berikut 10 prompt Inggeris dan penerangan adegan untuk guna terus dalam Midjourney di LimaxAI.', tableHeaders: ['Watak/Adegan', 'Prompt Inggeris', 'Penerangan adegan'], formulaTitle: 'Formula umum', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Corak: [Watak] + potret [suasana], [rambut], [pakaian], [latar], fantasy art oil painting, [pencahayaan], [detail].', imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akaun untuk pelbagai alat.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney: Style Zelda (avec formule)', intro: 'Pour des portraits style Zelda avec Midjourney suivez le schéma: personnage + portrait de face + cheveux et tenue + scène de fond + peinture à l\'huile fantasy. Voici 10 prompts prêts et une formule générale, avec des images exemples, pour créer sur LimaxAI en un clic.', overviewTitle: 'Aperçu', overviewText: 'Les prompts style Zelda incluent généralement: personnage (de Zelda ou autre IP réinventé), portrait de face/symétrique, cheveux et tenue/armure, scène de fond, fantasy art oil painting et éclairage/niveau de détail. Utilisez huile et haut détail de façon cohérente, puis changez personnage et scène.', examplesTitle: 'Exemples de prompts', examplesIntro: 'Voici 10 prompts en anglais et de brèves descriptions de scène pour une utilisation directe dans Midjourney sur LimaxAI.', tableHeaders: ['Personnage/Scène', 'Prompt en anglais', 'Description de scène'], formulaTitle: 'Formule générale', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Schéma: [Personnage] + portrait [ambiance], [cheveux], [tenue], [fond], fantasy art oil painting, [éclairage], [détail].', imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN, un compte pour plusieurs outils.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: Стиль Zelda (с формулой)', intro: 'Чтобы получить портреты в стиле Zelda с Midjourney, следуйте схеме: персонаж + портрет анфас + причёска и костюм + фоновая сцена + фэнтезийная масляная живопись. Ниже 10 готовых промптов и общая формула с примерами изображений для создания на LimaxAI в один клик.', overviewTitle: 'Обзор', overviewText: 'Промпты в стиле Zelda обычно включают: персонажа (из Zelda или другого IP в переосмыслении), портрет анфас/симметричный, причёску и костюм/доспехи, фоновую сцену, fantasy art oil painting и освещение/уровень детализации. Используйте масло и высокую детализацию последовательно, затем меняйте персонажа и сцену.', examplesTitle: 'Примеры промптов', examplesIntro: 'Вот 10 промптов на английском и краткие описания сцен для прямого использования в Midjourney на LimaxAI.', tableHeaders: ['Персонаж/Сцена', 'Англ. промпт', 'Описание сцены'], formulaTitle: 'Общая формула', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Схема: [Персонаж] + портрет [настроение], [причёска], [костюм], [фон], fantasy art oil painting, [освещение], [детализация].', imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN, один аккаунт для нескольких инструментов.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: ज़ेल्डा स्टाइल (सूत्र के साथ)', intro: 'Midjourney से ज़ेल्डा स्टाइल किरदार पोट्रेट पाने के लिए पैटर्न अपनाएं: किरदार स्रोत + सामने का पोट्रेट + बाल और पोशाक + पृष्ठभूमि दृश्य + फंतासी ऑयल पेंटिंग। नीचे 10 तैयार प्रॉम्प्ट और सामान्य सूत्र, उदाहरण चित्रों के साथ, LimaxAI पर एक क्लिक में बनाने के लिए।', overviewTitle: 'अवलोकन', overviewText: 'ज़ेल्डा स्टाइल प्रॉम्प्ट में आमतौर पर शामिल: किरदार (Zelda या अन्य IP पुनर्कल्पित), सामने/सममित पोट्रेट, बाल और पोशाक/कवच, पृष्ठभूमि दृश्य, fantasy art oil painting और रोशनी/विवरण स्तर। तेल और उच्च विवरण लगातार इस्तेमाल करें, फिर किरदार और दृश्य बदलें।', examplesTitle: 'प्रॉम्प्ट उदाहरण', examplesIntro: 'यहाँ 10 अंग्रेज़ी प्रॉम्प्ट और संक्षिप्त दृश्य विवरण Midjourney में LimaxAI पर सीधे उपयोग के लिए।', tableHeaders: ['किरदार/दृश्य', 'अंग्रेज़ी प्रॉम्प्ट', 'दृश्य विवरण'], formulaTitle: 'सामान्य सूत्र', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'पैटर्न: [किरदार] + [मूड] पोट्रेट, [बाल], [पोशाक], [पृष्ठभूमि], fantasy art oil painting, [रोशनी], [विवरण].', imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें—VPN की ज़रूरत नहीं, एक अकाउंट कई टूल के लिए।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: ゼルダ風（公式付き）', intro: 'Midjourneyでゼルダ風キャラクター肖像を出すには、キャラクター出典＋正面肖像＋髪と衣装＋背景シーン＋ファンタジー油絵のパターンに従います。以下、10個のすぐ使えるプロンプトと一般公式、サンプル画像付きで、LimaxAIでワンクリック作成。', overviewTitle: '概要', overviewText: 'ゼルダ風プロンプトには通常、キャラクター（ゼルダまたは他IPのゼルダ風リメイク）、正面/対称肖像、髪と衣装/鎧、背景シーン、fantasy art oil paintingと光照/ディテールレベルが含まれます。油絵と高ディテールで統一し、キャラとシーンを差し替えてください。', examplesTitle: 'プロンプト例', examplesIntro: 'MidjourneyでLimaxAI上で直接使える英語プロンプト10個と短いシーン説明です。', tableHeaders: ['キャラ/シーン', '英語プロンプト', 'シーン説明'], formulaTitle: '一般公式', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'パターン: [キャラ]＋[雰囲気]肖像、[髪]、[衣装]、[背景]、fantasy art oil painting、[光照]、[ディテール]。', imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他のモデルでLimaxAIで使用—VPN不要、1アカウントで複数ツール。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: Zelda-Stil (mit Formel)', intro: 'Für Zelda-Stil-Charakterporträts mit Midjourney dem Muster folgen: Charakterquelle + Frontporträt + Haare und Outfit + Hintergrundszene + Fantasy-Ölgemälde. Unten 10 fertige Prompts und eine allgemeine Formel mit Beispielbildern zum Erstellen auf LimaxAI mit einem Klick.', overviewTitle: 'Überblick', overviewText: 'Zelda-Stil-Prompts enthalten meist: Charakter (aus Zelda oder anderes IP neu interpretiert), Front-/Symmetrieporträt, Haare und Outfit/Rüstung, Hintergrundszene, fantasy art oil painting und Beleuchtung/Detailstufe. Öl und hohes Detail konsequent nutzen, dann Figur und Szene tauschen.', examplesTitle: 'Prompt-Beispiele', examplesIntro: 'Hier 10 englische Prompts und kurze Szenenbeschreibungen zur direkten Verwendung in Midjourney auf LimaxAI.', tableHeaders: ['Figur/Szene', 'Engl. Prompt', 'Szenenbeschreibung'], formulaTitle: 'Allgemeine Formel', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Muster: [Figur] + [Stimmung]-Porträt, [Haare], [Outfit], [Hintergrund], fantasy art oil painting, [Beleuchtung], [Detail].', imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN nötig, ein Konto für mehrere Tools.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: 젤다 스타일 (공식 포함)', intro: 'Midjourney로 젤다 스타일 캐릭터 초상화를 만들려면 패턴을 따르세요: 캐릭터 출처 + 정면 초상 + 머리와 의상 + 배경 장면 + 판타지 유화. 아래 10개의 즉시 사용 가능한 프롬프트와 일반 공식, 샘플 이미지로 LimaxAI에서 한 번에 생성할 수 있습니다.', overviewTitle: '개요', overviewText: '젤다 스타일 프롬프트에는 보통 캐릭터(젤다 또는 다른 IP를 젤다풍으로 재해석), 정면/대칭 초상, 머리와 의상/갑옷, 배경 장면, fantasy art oil painting 및 조명/디테일 수준이 포함됩니다. 유화와 고디테일로 일관되게 끝낸 뒤 캐릭터와 장면만 바꾸면 됩니다.', examplesTitle: '프롬프트 예시', examplesIntro: 'LimaxAI의 Midjourney에서 바로 쓸 수 있는 영어 프롬프트 10개와 짧은 장면 설명입니다.', tableHeaders: ['캐릭터/장면', '영어 프롬프트', '장면 설명'], formulaTitle: '일반 공식', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: '패턴: [캐릭터]+[분위기] 초상, [머리], [의상], [배경], fantasy art oil painting, [조명], [디테일].', imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요, 하나의 계정으로 여러 도구 이용.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: Zelda tarzı (formüllü)', intro: 'Midjourney ile Zelda tarzı karakter portreleri için deseni izleyin: karakter kaynağı + önden portre + saç ve kıyafet + arka plan sahnesi + fantezi yağlı boya. Aşağıda 10 hazır prompt ve genel formül, örnek görsellerle birlikte, LimaxAI\'da tek tıkla oluşturmak için.', overviewTitle: 'Genel bakış', overviewText: 'Zelda tarzı promptları genelde şunları içerir: karakter (Zelda veya başka IP\'den Zelda tarzı yeniden yorumlama), önden/simetrik portre, saç ve kıyafet/zırh, arka plan sahnesi, fantasy art oil painting ve ışık/detay seviyesi. Yağlı boya ve yüksek detayı tutarlı kullanın, sonra karakter ve sahneyi değiştirin.', examplesTitle: 'Prompt örnekleri', examplesIntro: 'LimaxAI\'da Midjourney\'de doğrudan kullanabileceğiniz 10 İngilizce prompt ve kısa sahne açıklaması.', tableHeaders: ['Karakter/Sahne', 'İngilizce prompt', 'Sahne açıklaması'], formulaTitle: 'Genel formül', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Desen: [Karakter] + [ruh hali] portre, [saç], [kıyafet], [arka plan], fantasy art oil painting, [ışık], [detay].', imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez, birden fazla araç için tek hesap.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: Phong cách Zelda (có công thức)', intro: 'Để có chân dung nhân vật phong cách Zelda với Midjourney, làm theo mẫu: nguồn nhân vật + chân dung chính diện + tóc và trang phục + cảnh nền + tranh sơn dầu fantasy. Dưới đây 10 prompt sẵn dùng và công thức chung, kèm ảnh mẫu, để tạo trên LimaxAI chỉ với một cú nhấp.', overviewTitle: 'Tổng quan', overviewText: 'Prompt phong cách Zelda thường gồm: nhân vật (từ Zelda hoặc IP khác tái tưởng tượng), chân dung chính diện/đối xứng, tóc và trang phục/áo giáp, cảnh nền, fantasy art oil painting và ánh sáng/mức độ chi tiết. Dùng sơn dầu và chi tiết cao nhất quán, sau đó thay nhân vật và cảnh.', examplesTitle: 'Ví dụ prompt', examplesIntro: 'Đây là 10 prompt tiếng Anh và mô tả cảnh ngắn để dùng trực tiếp trong Midjourney trên LimaxAI.', tableHeaders: ['Nhân vật/Cảnh', 'Prompt tiếng Anh', 'Mô tả cảnh'], formulaTitle: 'Công thức chung', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Mẫu: [Nhân vật] + chân dung [tâm trạng], [tóc], [trang phục], [nền], fantasy art oil painting, [ánh sáng], [chi tiết].', imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN, một tài khoản cho nhiều công cụ.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: สไตล์ Zelda (พร้อมสูตร)', intro: 'เพื่อให้ได้ภาพเหมือนตัวละครสไตล์ Zelda ด้วย Midjourney ให้ทำตามรูปแบบ: แหล่งตัวละคร + ภาพเหมือน frontal + ผมและเครื่องแต่งกาย + ฉากพื้นหลัง + ภาพวาดสีน้ำมันแฟนตาซี ด้านล่างคือ 10 พรอมป์พร้อมใช้และสูตรทั่วไป พร้อมภาพตัวอย่าง เพื่อสร้างบน LimaxAI ในคลิกเดียว', overviewTitle: 'ภาพรวม', overviewText: 'พรอมป์สไตล์ Zelda มักรวม: ตัวละคร (จาก Zelda หรือ IP อื่นที่ตีความใหม่), ภาพเหมือน frontal/สมมาตร ผมและเครื่องแต่งกาย/เกราะ ฉากพื้นหลัง fantasy art oil painting และแสง/ระดับรายละเอียด ใช้สีน้ำมันและรายละเอียดสูงอย่างสม่ำเสมอ แล้วเปลี่ยนตัวละครและฉาก', examplesTitle: 'ตัวอย่างพรอมป์', examplesIntro: 'นี่คือพรอมป์ภาษาอังกฤษ 10 รายการและคำอธิบายฉากสั้นๆ สำหรับใช้โดยตรงใน Midjourney บน LimaxAI', tableHeaders: ['ตัวละคร/ฉาก', 'พรอมป์ภาษาอังกฤษ', 'คำอธิบายฉาก'], formulaTitle: 'สูตรทั่วไป', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'รูปแบบ: [ตัวละคร]+ portrait [อารมณ์] [ผม] [เครื่องแต่งกาย] [พื้นหลัง] fantasy art oil painting [แสง] [รายละเอียด]', imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN บัญชีเดียวสำหรับหลายเครื่องมือ', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: Stile Zelda (con formula)', intro: 'Per ritratti in stile Zelda con Midjourney segui lo schema: personaggio + ritratto frontale + capelli e abbigliamento + scena di sfondo + pittura a olio fantasy. Qui 10 prompt pronti e una formula generale, con immagini di esempio, per creare su LimaxAI in un clic.', overviewTitle: 'Panoramica', overviewText: 'I prompt stile Zelda includono di solito: personaggio (da Zelda o altro IP reimmaginato), ritratto frontale/simmetrico, capelli e abbigliamento/armatura, scena di sfondo, fantasy art oil painting e illuminazione/livello dettaglio. Usa olio e alto dettaglio in modo coerente, poi cambia personaggio e scena.', examplesTitle: 'Esempi di prompt', examplesIntro: 'Ecco 10 prompt in inglese e brevi descrizioni di scena da usare direttamente in Midjourney su LimaxAI.', tableHeaders: ['Personaggio/Scena', 'Prompt in inglese', 'Descrizione scena'], formulaTitle: 'Formula generale', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Schema: [Personaggio] + ritratto [umore], [capelli], [abbigliamento], [sfondo], fantasy art oil painting, [illuminazione], [dettaglio].', imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN, un account per più strumenti.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: سبک زلدا (با فرمول)', intro: 'برای پرتره شخصیت به سبک زلدا با Midjourney الگو را دنبال کنید: منبع شخصیت + پرتره روبه‌رو + مو و لباس + صحنه پس‌زمینه + نقاشی روغن فانتزی. در زیر ۱۰ پرامپت آماده و یک فرمول کلی با تصاویر نمونه برای ساخت در LimaxAI با یک کلیک.', overviewTitle: 'خلاصه', overviewText: 'پرامپت‌های سبک زلدا معمولاً شامل: شخصیت (از زلدا یا IP دیگر بازتخیل‌شده)، پرتره روبه‌رو/متقارن، مو و لباس/زره، صحنه پس‌زمینه، fantasy art oil painting و نور/سطح جزئیات. با روغن و جزئیات بالا یکدست تمام کنید، بعد شخصیت و صحنه را عوض کنید.', examplesTitle: 'نمونه پرامپت', examplesIntro: 'اینها ۱۰ پرامپت انگلیسی و توضیح صحنه کوتاه برای استفاده مستقیم در Midjourney روی LimaxAI هستند.', tableHeaders: ['شخصیت/صحنه', 'پرامپت انگلیسی', 'توضیح صحنه'], formulaTitle: 'فرمول کلی', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'الگو: [شخصیت] + پرتره [حالوهوا]، [مو]، [لباس]، [پس‌زمینه]، fantasy art oil painting، [نور]، [جزئیات].', imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN، یک اکانت برای چند ابزار.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: Zelda-stijl (met formule)', intro: 'Voor Zelda-stijl personageportretten met Midjourney volg het patroon: personagebron + frontaal portret + haar en kleding + achtergrondscène + fantasy olieverfschilderij. Hier 10 kant-en-klare prompts en een algemene formule, met voorbeeldbeelden, om in één klik op LimaxAI te maken.', overviewTitle: 'Overzicht', overviewText: 'Zelda-stijl prompts bevatten meestal: personage (uit Zelda of ander IP herbeeld), frontaal/symmetrisch portret, haar en kleding/harnas, achtergrondscène, fantasy art oil painting en belichting/detailniveau. Gebruik olieverf en hoog detail consequent, wissel dan personage en scène.', examplesTitle: 'Voorbeelden van prompts', examplesIntro: 'Hier zijn 10 Engelse prompts en korte scènebeschrijvingen voor direct gebruik in Midjourney op LimaxAI.', tableHeaders: ['Personage/Scène', 'Engelse prompt', 'Scènebeschrijving'], formulaTitle: 'Algemene formule', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Patroon: [Personage] + [sfeer]-portret, [haar], [kleding], [achtergrond], fantasy art oil painting, [belichting], [detail].', imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig, één account voor meerdere tools.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: Styl Zelda (ze wzorem)', intro: 'Aby uzyskać portrety w stylu Zelda z Midjourney stosuj schemat: postać + portret na wprost + włosy i strój + scena w tle + malarstwo olejne fantasy. Poniżej 10 gotowych promptów i ogólny wzór oraz przykładowe obrazy do tworzenia na LimaxAI jednym kliknięciem.', overviewTitle: 'Przegląd', overviewText: 'Prompty w stylu Zelda zwykle obejmują: postać (z Zeldy lub innego IP przeinterpretowanego), portret na wprost/symetryczny, włosy i strój/zbroję, scenę w tle, fantasy art oil painting oraz oświetlenie/poziom szczegółów. Używaj oleju i wysokich szczegółów konsekwentnie, potem zamieniaj postać i scenę.', examplesTitle: 'Przykłady promptów', examplesIntro: 'Oto 10 promptów po angielsku i krótkie opisy scen do bezpośredniego użycia w Midjourney na LimaxAI.', tableHeaders: ['Postać/Scena', 'Prompt po angielsku', 'Opis sceny'], formulaTitle: 'Wzór ogólny', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Schemat: [Postać] + portret [nastrój], [włosy], [strój], [tło], fantasy art oil painting, [oświetlenie], [szczegóły].', imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN, jedno konto do wielu narzędzi.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: Zelda-stil (med formel)', intro: 'För Zelda-stil karaktärsporträtt med Midjourney, följ mönstret: karaktärskälla + porträtt framifrån + hår och outfit + bakgrundsscen + fantasy oljemålning. Här 10 färdiga prompter och en allmän formel med exempelbilder för att skapa på LimaxAI med ett klick.', overviewTitle: 'Översikt', overviewText: 'Zelda-stil prompter inkluderar oftast: karaktär (från Zelda eller annat IP omtolkad), porträtt framifrån/symmetriskt, hår och outfit/rustning, bakgrundsscen, fantasy art oil painting och belysning/detaljnivå. Använd olja och hög detalj konsekvent, byt sedan karaktär och scen.', examplesTitle: 'Promptexempel', examplesIntro: 'Här är 10 engelska prompter och korta scenbeskrivningar för direkt användning i Midjourney på LimaxAI.', tableHeaders: ['Karaktär/Scen', 'Engelsk prompt', 'Scenbeskrivning'], formulaTitle: 'Allmän formel', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Mönster: [Karaktär] + [stämning]-porträtt, [hår], [outfit], [bakgrund], fantasy art oil painting, [belysning], [detalj].', imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs, ett konto för flera verktyg.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: Стиль Zelda (з формулою)', intro: 'Щоб отримати портрети в стилі Zelda з Midjourney, дотримуйтесь схеми: персонаж + портрет анфас + волосся та костюм + фонова сцена + фентезійна олійна живопис. Нижче 10 готових промптів і загальна формула з прикладами зображень для створення на LimaxAI в один клік.', overviewTitle: 'Огляд', overviewText: 'Промпти в стилі Zelda зазвичай включають: персонажа (з Zelda або інший IP переосмислений), портрет анфас/симетричний, волосся та костюм/обладунки, фонову сцену, fantasy art oil painting та освітлення/рівень деталізації. Використовуйте олію та високу деталізацію послідовно, потім змінюйте персонажа та сцену.', examplesTitle: 'Приклади промптів', examplesIntro: 'Ось 10 англійських промптів і короткі описи сцен для безпосереднього використання в Midjourney на LimaxAI.', tableHeaders: ['Персонаж/Сцена', 'Англ. промпт', 'Опис сцени'], formulaTitle: 'Загальна формула', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Схема: [Персонаж] + портрет [настрій], [волосся], [костюм], [фон], fantasy art oil painting, [освітлення], [деталізація].', imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN, один обліковий запис для кількох інструментів.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: Stil Zelda (cu formulă)', intro: 'Pentru portrete în stil Zelda cu Midjourney urmați modelul: personaj + portret frontal + păr și costum + scenă de fundal + pictură în ulei fantasy. Mai jos 10 prompturi gata de folosit și o formulă generală, cu imagini exemplu, pentru a crea pe LimaxAI într-un clic.', overviewTitle: 'Prezentare', overviewText: 'Prompturile în stil Zelda includ de obicei: personaj (din Zelda sau alt IP reimaginat), portret frontal/simetric, păr și costum/armură, scenă de fundal, fantasy art oil painting și iluminat/nivel detaliu. Folosiți ulei și detaliu ridicat în mod consecvent, apoi schimbați personajul și scena.', examplesTitle: 'Exemple de prompturi', examplesIntro: 'Iată 10 prompturi în engleză și descrieri scurte de scenă pentru utilizare directă în Midjourney pe LimaxAI.', tableHeaders: ['Personaj/Scenă', 'Prompt în engleză', 'Descriere scenă'], formulaTitle: 'Formula generală', formulaEn: 'English: [Character] from the video game The Legend of Zelda, a [mood] portrait with [hair] and [outfit/armor], [background/scene], in the style of fantasy art painting, using oil paint, [lighting], [color palette], [detail level].', formulaLocal: 'Model: [Personaj] + portret [dispoziție], [păr], [costum], [fundal], fantasy art oil painting, [iluminat], [detalii].', imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN, un cont pentru mai multe instrumente.', ctaText: 'Începe crearea' },
};

/** 红色警戒教程各语种文案 */
interface RedAlertArticleCopy {
  title: string;
  intro: string;
  overviewTitle: string;
  overviewText: string;
  examplesTitle: string;
  examplesIntro: string;
  tableHeaders: [string, string, string];
  formulaTitle: string;
  formulaEn: string;
  formulaLocal: string;
  imageTitle: string;
  startTitle: string;
  startText: string;
  ctaText: string;
}

const redAlertCopyByLocale: Record<string, RedAlertArticleCopy> = {
  es: { title: 'Midjourney: Red Alert (con fórmula)', intro: 'Para imágenes estilo Red Alert con Midjourney sigue el patrón: Red Alert + tipo de unidad + equipo y pose + escena + photograph 16K + estilo y detalles. Aquí 21 prompts listos y una fórmula general, con imágenes de ejemplo, para crear en LimaxAI en un clic.', overviewTitle: 'Resumen', overviewText: 'Los prompts Red Alert suelen empezar con Red Alert, incluir tipo de unidad, equipo, acción o pose, escena (campo de batalla, ciudad, laboratorio), photograph y 16K, y terminar con ultra-detailed, best quality.', examplesTitle: 'Ejemplos de prompts', examplesIntro: 'Aquí tienes 21 prompts en inglés y descripciones de escena para usar en Midjourney en LimaxAI.', tableHeaders: ['Unidad', 'Prompt en inglés', 'Descripción de escena'], formulaTitle: 'Fórmula general', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Patrón: Red Alert + [unidad], [equipo], [acción/escena], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Imagen de ejemplo', startTitle: 'Empezar a crear', startText: 'Usa estos prompts con Midjourney y otros modelos en LimaxAI—sin VPN, una cuenta para varias herramientas.', ctaText: 'Empezar a crear' },
  ar: { title: 'Midjourney: Red Alert (مع معادلة)', intro: 'للحصول على صور بأسلوب Red Alert مع Midjourney اتبع النمط: Red Alert + نوع الوحدة + المعدات والوضعية + المشهد + photograph 16K + الأسلوب والتفاصيل. فيما يلي 21 أمراً جاهزاً ومعادلة عامة مع صور نموذجية للإنشاء على LimaxAI بنقرة واحدة.', overviewTitle: 'نظرة عامة', overviewText: 'أوامر Red Alert تبدأ عادة بـ Red Alert ثم نوع الوحدة والعتاد والمشهد و photograph 16K وتنتهي بـ ultra-detailed, best quality.', examplesTitle: 'أمثلة أوامر', examplesIntro: 'إليك 21 أمراً بالإنجليزية ووصف المشهد للاستخدام المباشر في Midjourney على LimaxAI.', tableHeaders: ['الوحدة', 'الأمر بالإنجليزية', 'وصف المشهد'], formulaTitle: 'المعادلة العامة', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'النمط: Red Alert + [وحدة]، [عتاد]، [مشهد]، photograph، 16K، ultra-detailed، best quality.', imageTitle: 'صورة نموذجية', startTitle: 'ابدأ الإنشاء', startText: 'استخدم هذه الأوامر مع Midjourney ونماذج أخرى على LimaxAI—بدون VPN، حساب واحد لأدوات متعددة.', ctaText: 'ابدأ الإنشاء' },
  pt: { title: 'Midjourney: Red Alert (com fórmula)', intro: 'Para imagens estilo Red Alert com Midjourney siga o padrão: Red Alert + tipo de unidade + equipamento e pose + cena + photograph 16K + estilo e detalhes. Abaixo 21 prompts prontos e uma fórmula geral, com imagens de exemplo, para criar no LimaxAI em um clique.', overviewTitle: 'Visão geral', overviewText: 'Prompts Red Alert costumam começar com Red Alert, incluir tipo de unidade, equipamento, ação ou pose, cena (campo de batalha, cidade, laboratório), photograph e 16K, e terminar com ultra-detailed, best quality.', examplesTitle: 'Exemplos de prompts', examplesIntro: 'Aqui estão 21 prompts em inglês e descrições de cena para usar diretamente no Midjourney no LimaxAI.', tableHeaders: ['Unidade', 'Prompt em inglês', 'Descrição da cena'], formulaTitle: 'Fórmula geral', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Padrão: Red Alert + [unidade], [equipamento], [cena], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Imagem de exemplo', startTitle: 'Começar a criar', startText: 'Use estes prompts com Midjourney e outros modelos no LimaxAI—sem VPN, uma conta para várias ferramentas.', ctaText: 'Começar a criar' },
  id: { title: 'Midjourney: Red Alert (dengan rumus)', intro: 'Untuk gambar bergaya Red Alert dengan Midjourney ikuti pola: Red Alert + tipe unit + perlengkapan dan pose + adegan + photograph 16K + gaya dan detail. Berikut 21 prompt siap pakai dan rumus umum dengan gambar contoh untuk membuat di LimaxAI dalam satu klik.', overviewTitle: 'Ringkasan', overviewText: 'Prompt Red Alert biasanya dimulai dengan Red Alert, lalu tipe unit, perlengkapan, aksi atau pose, adegan (medan perang, kota, lab), photograph dan 16K, diakhiri ultra-detailed, best quality.', examplesTitle: 'Contoh prompt', examplesIntro: 'Berikut 21 prompt bahasa Inggris dan deskripsi adegan untuk digunakan langsung di Midjourney di LimaxAI.', tableHeaders: ['Unit', 'Prompt bahasa Inggris', 'Deskripsi adegan'], formulaTitle: 'Rumus umum', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Pola: Red Alert + [unit], [perlengkapan], [adegan], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Gambar contoh', startTitle: 'Mulai membuat', startText: 'Gunakan prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akun untuk banyak alat.', ctaText: 'Mulai membuat' },
  ms: { title: 'Midjourney: Red Alert (dengan formula)', intro: 'Untuk imej gaya Red Alert dengan Midjourney ikuti corak: Red Alert + jenis unit + peralatan dan pose + adegan + photograph 16K + gaya dan butiran. Di bawah 21 prompt sedia dan formula umum dengan imej contoh untuk cipta di LimaxAI dalam satu klik.', overviewTitle: 'Gambaran', overviewText: 'Prompt Red Alert biasanya bermula dengan Red Alert, termasuk jenis unit, peralatan, aksi atau pose, adegan (medan perang, bandar, makmal), photograph dan 16K, akhiri dengan ultra-detailed, best quality.', examplesTitle: 'Contoh prompt', examplesIntro: 'Berikut 21 prompt Inggeris dan penerangan adegan untuk guna terus dalam Midjourney di LimaxAI.', tableHeaders: ['Unit', 'Prompt Inggeris', 'Penerangan adegan'], formulaTitle: 'Formula umum', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Corak: Red Alert + [unit], [peralatan], [adegan], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Imej contoh', startTitle: 'Mula cipta', startText: 'Guna prompt ini dengan Midjourney dan model lain di LimaxAI—tanpa VPN, satu akaun untuk pelbagai alat.', ctaText: 'Mula cipta' },
  fr: { title: 'Midjourney: Red Alert (avec formule)', intro: 'Pour des images style Red Alert avec Midjourney suivez le schéma: Red Alert + type d\'unité + équipement et pose + scène + photograph 16K + style et détails. Voici 21 prompts prêts et une formule générale, avec des images exemples, pour créer sur LimaxAI en un clic.', overviewTitle: 'Aperçu', overviewText: 'Les prompts Red Alert commencent généralement par Red Alert, puis type d\'unité, équipement, action ou pose, scène (champ de bataille, ville, labo), photograph et 16K, et se terminent par ultra-detailed, best quality.', examplesTitle: 'Exemples de prompts', examplesIntro: 'Voici 21 prompts en anglais et de brèves descriptions de scène pour une utilisation directe dans Midjourney sur LimaxAI.', tableHeaders: ['Unité', 'Prompt en anglais', 'Description de scène'], formulaTitle: 'Formule générale', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Schéma: Red Alert + [unité], [équipement], [scène], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Image d\'exemple', startTitle: 'Commencer à créer', startText: 'Utilisez ces prompts avec Midjourney et d\'autres modèles sur LimaxAI—sans VPN, un compte pour plusieurs outils.', ctaText: 'Commencer à créer' },
  ru: { title: 'Midjourney: Red Alert (с формулой)', intro: 'Чтобы получить изображения в стиле Red Alert с Midjourney, следуйте схеме: Red Alert + тип юнита + снаряжение и поза + сцена + photograph 16K + стиль и детали. Ниже 21 готовый промпт и общая формула с примерами изображений для создания на LimaxAI в один клик.', overviewTitle: 'Обзор', overviewText: 'Промпты Red Alert обычно начинаются с Red Alert, затем тип юнита, снаряжение, действие или поза, сцена (поле боя, город, лаборатория), photograph и 16K, и заканчиваются ultra-detailed, best quality.', examplesTitle: 'Примеры промптов', examplesIntro: 'Вот 21 промпт на английском и краткие описания сцен для прямого использования в Midjourney на LimaxAI.', tableHeaders: ['Юнит', 'Англ. промпт', 'Описание сцены'], formulaTitle: 'Общая формула', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Схема: Red Alert + [юнит], [снаряжение], [сцена], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Пример изображения', startTitle: 'Начать создание', startText: 'Используйте эти промпты с Midjourney и другими моделями на LimaxAI—без VPN, один аккаунт для нескольких инструментов.', ctaText: 'Начать создание' },
  hi: { title: 'Midjourney: Red Alert (सूत्र के साथ)', intro: 'Midjourney से Red Alert स्टाइल इमेज पाने के लिए पैटर्न अपनाएं: Red Alert + यूनिट प्रकार + गियर और पोज़ + दृश्य + photograph 16K + स्टाइल और डिटेल। नीचे 21 तैयार प्रॉम्प्ट और सामान्य सूत्र, उदाहरण चित्रों के साथ, LimaxAI पर एक क्लिक में बनाने के लिए।', overviewTitle: 'अवलोकन', overviewText: 'Red Alert प्रॉम्प्ट आमतौर पर Red Alert से शुरू होते हैं, फिर यूनिट प्रकार, गियर, एक्शन या पोज़, दृश्य (युद्धक्षेत्र, शहर, लैब), photograph और 16K, और अंत में ultra-detailed, best quality।', examplesTitle: 'प्रॉम्प्ट उदाहरण', examplesIntro: 'यहाँ 21 अंग्रेज़ी प्रॉम्प्ट और संक्षिप्त दृश्य विवरण Midjourney में LimaxAI पर सीधे उपयोग के लिए।', tableHeaders: ['यूनिट', 'अंग्रेज़ी प्रॉम्प्ट', 'दृश्य विवरण'], formulaTitle: 'सामान्य सूत्र', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'पैटर्न: Red Alert + [यूनिट], [गियर], [दृश्य], photograph, 16K, ultra-detailed, best quality।', imageTitle: 'उदाहरण चित्र', startTitle: 'बनाना शुरू करें', startText: 'इन प्रॉम्प्ट को Midjourney और अन्य मॉडल के साथ LimaxAI पर इस्तेमाल करें—VPN की ज़रूरत नहीं, एक अकाउंट कई टूल के लिए।', ctaText: 'बनाना शुरू करें' },
  ja: { title: 'Midjourney: Red Alert（公式付き）', intro: 'MidjourneyでRed Alert風の画像を出すには、Red Alert＋ユニット種類＋装備とポーズ＋シーン＋photograph 16K＋スタイルとディテールのパターンに従います。以下、21個のすぐ使えるプロンプトと一般公式、サンプル画像付きで、LimaxAIでワンクリック作成。', overviewTitle: '概要', overviewText: 'Red Alertプロンプトは通常Red Alertで始め、ユニット種類、装備、アクションやポーズ、シーン（戦場、都市、研究所）、photographと16K、最後にultra-detailed, best qualityで終わります。', examplesTitle: 'プロンプト例', examplesIntro: 'MidjourneyでLimaxAI上で直接使える英語プロンプト21個と短いシーン説明です。', tableHeaders: ['ユニット', '英語プロンプト', 'シーン説明'], formulaTitle: '一般公式', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'パターン: Red Alert + [ユニット]、[装備]、[シーン]、photograph、16K、ultra-detailed、best quality。', imageTitle: 'サンプル画像', startTitle: '作成を始める', startText: 'これらのプロンプトをMidjourneyや他のモデルでLimaxAIで使用—VPN不要、1アカウントで複数ツール。', ctaText: '作成を始める' },
  de: { title: 'Midjourney: Red Alert (mit Formel)', intro: 'Für Red-Alert-Stil-Bilder mit Midjourney dem Muster folgen: Red Alert + Einheitentyp + Ausrüstung und Pose + Szene + photograph 16K + Stil und Details. Unten 21 fertige Prompts und eine allgemeine Formel mit Beispielbildern zum Erstellen auf LimaxAI mit einem Klick.', overviewTitle: 'Überblick', overviewText: 'Red-Alert-Prompts beginnen meist mit Red Alert, dann Einheitentyp, Ausrüstung, Aktion oder Pose, Szene (Schlachtfeld, Stadt, Labor), photograph und 16K, und enden mit ultra-detailed, best quality.', examplesTitle: 'Prompt-Beispiele', examplesIntro: 'Hier 21 englische Prompts und kurze Szenenbeschreibungen zur direkten Verwendung in Midjourney auf LimaxAI.', tableHeaders: ['Einheit', 'Engl. Prompt', 'Szenenbeschreibung'], formulaTitle: 'Allgemeine Formel', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Muster: Red Alert + [Einheit], [Ausrüstung], [Szene], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Beispielbild', startTitle: 'Erstellen starten', startText: 'Diese Prompts mit Midjourney und anderen Modellen auf LimaxAI nutzen—kein VPN nötig, ein Konto für mehrere Tools.', ctaText: 'Erstellen starten' },
  ko: { title: 'Midjourney: Red Alert (공식 포함)', intro: 'Midjourney로 Red Alert 스타일 이미지를 만들려면 패턴을 따르세요: Red Alert + 유닛 유형 + 장비와 포즈 + 장면 + photograph 16K + 스타일과 디테일. 아래 21개의 즉시 사용 가능한 프롬프트와 일반 공식, 샘플 이미지로 LimaxAI에서 한 번에 생성할 수 있습니다.', overviewTitle: '개요', overviewText: 'Red Alert 프롬프트는 보통 Red Alert로 시작하고, 유닛 유형, 장비, 동작 또는 포즈, 장면(전장, 도시, 연구소), photograph와 16K, 끝에 ultra-detailed, best quality를 씁니다.', examplesTitle: '프롬프트 예시', examplesIntro: 'LimaxAI의 Midjourney에서 바로 쓸 수 있는 영어 프롬프트 21개와 짧은 장면 설명입니다.', tableHeaders: ['유닛', '영어 프롬프트', '장면 설명'], formulaTitle: '일반 공식', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: '패턴: Red Alert + [유닛], [장비], [장면], photograph, 16K, ultra-detailed, best quality.', imageTitle: '샘플 이미지', startTitle: '제작 시작', startText: '이 프롬프트를 Midjourney와 다른 모델로 LimaxAI에서 사용하세요—VPN 불필요, 하나의 계정으로 여러 도구 이용.', ctaText: '제작 시작' },
  tr: { title: 'Midjourney: Red Alert (formüllü)', intro: 'Midjourney ile Red Alert tarzı görseller için deseni izleyin: Red Alert + birim türü + teçhizat ve poz + sahne + photograph 16K + stil ve detaylar. Aşağıda 21 hazır prompt ve genel formül, örnek görsellerle birlikte, LimaxAI\'da tek tıkla oluşturmak için.', overviewTitle: 'Genel bakış', overviewText: 'Red Alert promptları genelde Red Alert ile başlar, birim türü, teçhizat, aksiyon veya poz, sahne (savaş alanı, şehir, lab), photograph ve 16K içerir, ultra-detailed, best quality ile biter.', examplesTitle: 'Prompt örnekleri', examplesIntro: 'LimaxAI\'da Midjourney\'de doğrudan kullanabileceğiniz 21 İngilizce prompt ve kısa sahne açıklaması.', tableHeaders: ['Birim', 'İngilizce prompt', 'Sahne açıklaması'], formulaTitle: 'Genel formül', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Desen: Red Alert + [birim], [teçhizat], [sahne], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Örnek görsel', startTitle: 'Oluşturmaya başla', startText: 'Bu promptları Midjourney ve diğer modellerle LimaxAI\'da kullanın—VPN gerekmez, birden fazla araç için tek hesap.', ctaText: 'Oluşturmaya başla' },
  vi: { title: 'Midjourney: Red Alert (có công thức)', intro: 'Để có ảnh phong cách Red Alert với Midjourney, làm theo mẫu: Red Alert + loại đơn vị + trang bị và tư thế + cảnh + photograph 16K + phong cách và chi tiết. Dưới đây 21 prompt sẵn dùng và công thức chung, kèm ảnh mẫu, để tạo trên LimaxAI chỉ với một cú nhấp.', overviewTitle: 'Tổng quan', overviewText: 'Prompt Red Alert thường bắt đầu bằng Red Alert, gồm loại đơn vị, trang bị, hành động hoặc tư thế, cảnh (chiến trường, thành phố, phòng lab), photograph và 16K, kết thúc bằng ultra-detailed, best quality.', examplesTitle: 'Ví dụ prompt', examplesIntro: 'Đây là 21 prompt tiếng Anh và mô tả cảnh ngắn để dùng trực tiếp trong Midjourney trên LimaxAI.', tableHeaders: ['Đơn vị', 'Prompt tiếng Anh', 'Mô tả cảnh'], formulaTitle: 'Công thức chung', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Mẫu: Red Alert + [đơn vị], [trang bị], [cảnh], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Ảnh mẫu', startTitle: 'Bắt đầu tạo', startText: 'Dùng các prompt này với Midjourney và mô hình khác trên LimaxAI—không cần VPN, một tài khoản cho nhiều công cụ.', ctaText: 'Bắt đầu tạo' },
  th: { title: 'Midjourney: Red Alert (พร้อมสูตร)', intro: 'เพื่อให้ได้ภาพสไตล์ Red Alert ด้วย Midjourney ให้ทำตามรูปแบบ: Red Alert + ประเภทหน่วย + อุปกรณ์และท่าทาง + ฉาก + photograph 16K + สไตล์และรายละเอียด ด้านล่างคือ 21 พรอมป์พร้อมใช้และสูตรทั่วไป พร้อมภาพตัวอย่าง เพื่อสร้างบน LimaxAI ในคลิกเดียว', overviewTitle: 'ภาพรวม', overviewText: 'พรอมป์ Red Alert มักขึ้นต้นด้วย Red Alert ตามด้วยประเภทหน่วย อุปกรณ์ การกระทำหรือท่าทาง ฉาก (สนามรบ เมือง ห้อง lab) photograph และ 16K จบด้วย ultra-detailed, best quality', examplesTitle: 'ตัวอย่างพรอมป์', examplesIntro: 'นี่คือพรอมป์ภาษาอังกฤษ 21 รายการและคำอธิบายฉากสั้นๆ สำหรับใช้โดยตรงใน Midjourney บน LimaxAI', tableHeaders: ['หน่วย', 'พรอมป์ภาษาอังกฤษ', 'คำอธิบายฉาก'], formulaTitle: 'สูตรทั่วไป', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'รูปแบบ: Red Alert + [หน่วย] [อุปกรณ์] [ฉาก] photograph 16K ultra-detailed best quality', imageTitle: 'ภาพตัวอย่าง', startTitle: 'เริ่มสร้าง', startText: 'ใช้พรอมป์เหล่านี้กับ Midjourney และโมเดลอื่นบน LimaxAI — ไม่ต้องใช้ VPN บัญชีเดียวสำหรับหลายเครื่องมือ', ctaText: 'เริ่มสร้าง' },
  it: { title: 'Midjourney: Red Alert (con formula)', intro: 'Per immagini in stile Red Alert con Midjourney segui lo schema: Red Alert + tipo di unità + equipaggiamento e posa + scena + photograph 16K + stile e dettagli. Qui 21 prompt pronti e una formula generale, con immagini di esempio, per creare su LimaxAI in un clic.', overviewTitle: 'Panoramica', overviewText: 'I prompt Red Alert di solito iniziano con Red Alert, includono tipo di unità, equipaggiamento, azione o posa, scena (campo di battaglia, città, laboratorio), photograph e 16K, e terminano con ultra-detailed, best quality.', examplesTitle: 'Esempi di prompt', examplesIntro: 'Ecco 21 prompt in inglese e brevi descrizioni di scena da usare direttamente in Midjourney su LimaxAI.', tableHeaders: ['Unità', 'Prompt in inglese', 'Descrizione scena'], formulaTitle: 'Formula generale', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Schema: Red Alert + [unità], [equipaggiamento], [scena], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Immagine di esempio', startTitle: 'Inizia a creare', startText: 'Usa questi prompt con Midjourney e altri modelli su LimaxAI—senza VPN, un account per più strumenti.', ctaText: 'Inizia a creare' },
  fa: { title: 'Midjourney: Red Alert (با فرمول)', intro: 'برای گرفتن تصاویر سبک Red Alert با Midjourney الگو را دنبال کنید: Red Alert + نوع واحد + تجهیزات و پوز + صحنه + photograph 16K + سبک و جزئیات. در زیر ۲۱ پرامپت آماده و یک فرمول کلی با تصاویر نمونه برای ساخت در LimaxAI با یک کلیک.', overviewTitle: 'خلاصه', overviewText: 'پرامپت‌های Red Alert معمولاً با Red Alert شروع می‌شوند، نوع واحد، تجهیزات، اکشن یا پوز، صحنه (میدان جنگ، شهر، آزمایشگاه)، photograph و 16K و در پایان ultra-detailed, best quality.', examplesTitle: 'نمونه پرامپت', examplesIntro: 'اینها ۲۱ پرامپت انگلیسی و توضیح صحنه کوتاه برای استفاده مستقیم در Midjourney روی LimaxAI هستند.', tableHeaders: ['واحد', 'پرامپت انگلیسی', 'توضیح صحنه'], formulaTitle: 'فرمول کلی', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'الگو: Red Alert + [واحد]، [تجهیزات]، [صحنه]، photograph، 16K، ultra-detailed، best quality.', imageTitle: 'تصویر نمونه', startTitle: 'شروع ساخت', startText: 'از این پرامپت‌ها با Midjourney و مدل‌های دیگر روی LimaxAI استفاده کنید—بدون VPN، یک اکانت برای چند ابزار.', ctaText: 'شروع ساخت' },
  nl: { title: 'Midjourney: Red Alert (met formule)', intro: 'Voor Red Alert-stijl beelden met Midjourney volg het patroon: Red Alert + eenheidstype + uitrusting en pose + scène + photograph 16K + stijl en details. Hier 21 kant-en-klare prompts en een algemene formule, met voorbeeldbeelden, om in één klik op LimaxAI te maken.', overviewTitle: 'Overzicht', overviewText: 'Red Alert-prompts beginnen meestal met Red Alert, gevolgd door eenheidstype, uitrusting, actie of pose, scène (slagveld, stad, lab), photograph en 16K, en eindigen met ultra-detailed, best quality.', examplesTitle: 'Voorbeelden van prompts', examplesIntro: 'Hier zijn 21 Engelse prompts en korte scènebeschrijvingen voor direct gebruik in Midjourney op LimaxAI.', tableHeaders: ['Eenheid', 'Engelse prompt', 'Scènebeschrijving'], formulaTitle: 'Algemene formule', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Patroon: Red Alert + [eenheid], [uitrusting], [scène], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Voorbeeldafbeelding', startTitle: 'Beginnen met maken', startText: 'Gebruik deze prompts met Midjourney en andere modellen op LimaxAI—geen VPN nodig, één account voor meerdere tools.', ctaText: 'Beginnen met maken' },
  pl: { title: 'Midjourney: Red Alert (ze wzorem)', intro: 'Aby uzyskać obrazy w stylu Red Alert w Midjourney stosuj schemat: Red Alert + typ jednostki + wyposażenie i poza + scena + photograph 16K + styl i szczegóły. Poniżej 21 gotowych promptów i ogólny wzór oraz przykładowe obrazy do tworzenia na LimaxAI jednym kliknięciem.', overviewTitle: 'Przegląd', overviewText: 'Prompty Red Alert zwykle zaczynają się od Red Alert, obejmują typ jednostki, wyposażenie, akcję lub pozę, scenę (pole bitwy, miasto, laboratorium), photograph i 16K, i kończą ultra-detailed, best quality.', examplesTitle: 'Przykłady promptów', examplesIntro: 'Oto 21 promptów po angielsku i krótkie opisy scen do bezpośredniego użycia w Midjourney na LimaxAI.', tableHeaders: ['Jednostka', 'Prompt po angielsku', 'Opis sceny'], formulaTitle: 'Wzór ogólny', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Schemat: Red Alert + [jednostka], [wyposażenie], [scena], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Obraz przykładowy', startTitle: 'Zacznij tworzyć', startText: 'Użyj tych promptów z Midjourney i innymi modelami na LimaxAI—bez VPN, jedno konto do wielu narzędzi.', ctaText: 'Zacznij tworzyć' },
  sv: { title: 'Midjourney: Red Alert (med formel)', intro: 'För Red Alert-stil bilder med Midjourney, följ mönstret: Red Alert + enhetstyp + utrustning och pose + scen + photograph 16K + stil och detaljer. Här 21 färdiga prompter och en allmän formel med exempelbilder för att skapa på LimaxAI med ett klick.', overviewTitle: 'Översikt', overviewText: 'Red Alert-prompter börjar oftast med Red Alert, inkluderar enhetstyp, utrustning, handling eller pose, scen (slagfält, stad, lab), photograph och 16K, och slutar med ultra-detailed, best quality.', examplesTitle: 'Promptexempel', examplesIntro: 'Här är 21 engelska prompter och korta scenbeskrivningar för direkt användning i Midjourney på LimaxAI.', tableHeaders: ['Enhet', 'Engelsk prompt', 'Scenbeskrivning'], formulaTitle: 'Allmän formel', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Mönster: Red Alert + [enhet], [utrustning], [scen], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Exempelbild', startTitle: 'Börja skapa', startText: 'Använd dessa prompter med Midjourney och andra modeller på LimaxAI—inget VPN behövs, ett konto för flera verktyg.', ctaText: 'Börja skapa' },
  uk: { title: 'Midjourney: Red Alert (з формулою)', intro: 'Щоб отримати зображення в стилі Red Alert з Midjourney, дотримуйтесь схеми: Red Alert + тип підрозділу + спорядження та поза + сцена + photograph 16K + стиль і деталі. Нижче 21 готовий промпт і загальна формула з прикладами зображень для створення на LimaxAI в один клік.', overviewTitle: 'Огляд', overviewText: 'Промпти Red Alert зазвичай починаються з Red Alert, включають тип підрозділу, спорядження, дію або позу, сцену (поле бою, місто, лабораторія), photograph і 16K, і закінчуються ultra-detailed, best quality.', examplesTitle: 'Приклади промптів', examplesIntro: 'Ось 21 англійський промпт і короткі описи сцен для безпосереднього використання в Midjourney на LimaxAI.', tableHeaders: ['Підрозділ', 'Англ. промпт', 'Опис сцени'], formulaTitle: 'Загальна формула', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Схема: Red Alert + [підрозділ], [спорядження], [сцена], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Приклад зображення', startTitle: 'Почати створення', startText: 'Використовуйте ці промпти з Midjourney та іншими моделями на LimaxAI—без VPN, один обліковий запис для кількох інструментів.', ctaText: 'Почати створення' },
  ro: { title: 'Midjourney: Red Alert (cu formulă)', intro: 'Pentru imagini în stil Red Alert cu Midjourney urmați modelul: Red Alert + tip unitate + echipament și poziție + scenă + photograph 16K + stil și detalii. Mai jos 21 prompturi gata de folosit și o formulă generală, cu imagini exemplu, pentru a crea pe LimaxAI într-un clic.', overviewTitle: 'Prezentare', overviewText: 'Prompturile Red Alert încep de obicei cu Red Alert, includ tipul de unitate, echipamentul, acțiunea sau poziția, scena (câmp de luptă, oraș, laborator), photograph și 16K, și se termină cu ultra-detailed, best quality.', examplesTitle: 'Exemple de prompturi', examplesIntro: 'Iată 21 prompturi în engleză și descrieri scurte de scenă pentru utilizare directă în Midjourney pe LimaxAI.', tableHeaders: ['Unitate', 'Prompt în engleză', 'Descriere scenă'], formulaTitle: 'Formula generală', formulaEn: 'English: Red Alert, a [unit type] with [gear], [description], photograph, 16K, [style], [details], [effects], [color palette], ultra-detailed, best quality', formulaLocal: 'Model: Red Alert + [unitate], [echipament], [scenă], photograph, 16K, ultra-detailed, best quality.', imageTitle: 'Imagine exemplu', startTitle: 'Începe crearea', startText: 'Folosiți aceste prompturi cu Midjourney și alte modele pe LimaxAI—fără VPN, un cont pentru mai multe instrumente.', ctaText: 'Începe crearea' },
};

function makeFlowerArticle(locale: string): TutorialArticle {
  const c = flowerCopyByLocale[locale];
  if (!c) return articleFlowerEn;
  return {
    slug: 'midjourney-flower-wallpaper',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: flowerTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-5.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'formula', title: c.formulaTitle, blocks: [{ type: 'paragraph', text: c.formulaEn }, { type: 'paragraph', text: c.formulaLocal }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-6.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-7.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const FLOWER_WALLPAPER_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleFlowerByLocale: Record<string, TutorialArticle> = {
  en: articleFlowerEn,
  'zh-cn': articleFlowerZhCN,
  'zh-tw': articleFlowerZhTW,
  ...Object.fromEntries(FLOWER_WALLPAPER_LOCALES.map((loc) => [loc, makeFlowerArticle(loc)])),
};

function makeGufengArticle(locale: string): TutorialArticle {
  const c = gufengCopyByLocale[locale];
  if (!c) return articleGufengEn;
  return {
    slug: 'midjourney-gufeng-figure',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: gufengTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-8.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'formula', title: c.formulaTitle, blocks: [{ type: 'paragraph', text: c.formulaEn }, { type: 'paragraph', text: c.formulaLocal }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-9.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-10.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const GUFENG_FIGURE_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleGufengByLocale: Record<string, TutorialArticle> = {
  en: articleGufengEn,
  'zh-cn': articleGufengZhCN,
  'zh-tw': articleGufengZhTW,
  ...Object.fromEntries(GUFENG_FIGURE_LOCALES.map((loc) => [loc, makeGufengArticle(loc)])),
};

function makeTextureArticle(locale: string): TutorialArticle {
  const c = textureCopyByLocale[locale];
  if (!c) return articleTextureEn;
  return {
    slug: 'midjourney-texture-12',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: textureTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-11.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'formula', title: c.formulaTitle, blocks: [{ type: 'paragraph', text: c.formulaEn }, { type: 'paragraph', text: c.formulaLocal }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-12.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-13.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const TEXTURE_12_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleTextureByLocale: Record<string, TutorialArticle> = {
  en: articleTextureEn,
  'zh-cn': articleTextureZhCN,
  'zh-tw': articleTextureZhTW,
  ...Object.fromEntries(TEXTURE_12_LOCALES.map((loc) => [loc, makeTextureArticle(loc)])),
};

function makeZeldaArticle(locale: string): TutorialArticle {
  const c = zeldaCopyByLocale[locale];
  if (!c) return articleZeldaEn;
  return {
    slug: 'midjourney-zelda-style',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: zeldaTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-14.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'formula', title: c.formulaTitle, blocks: [{ type: 'paragraph', text: c.formulaEn }, { type: 'paragraph', text: c.formulaLocal }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-15.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjoueney-16.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const ZELDA_STYLE_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleZeldaByLocale: Record<string, TutorialArticle> = {
  en: articleZeldaEn,
  'zh-cn': articleZeldaZhCN,
  'zh-tw': articleZeldaZhTW,
  ...Object.fromEntries(ZELDA_STYLE_LOCALES.map((loc) => [loc, makeZeldaArticle(loc)])),
};

function makeRedAlertArticle(locale: string): TutorialArticle {
  const c = redAlertCopyByLocale[locale];
  if (!c) return articleRedAlertEn;
  return {
    slug: 'midjourney-red-alert',
    title: c.title,
    intro: c.intro,
    sections: [
      { id: 'overview', title: c.overviewTitle, blocks: [{ type: 'paragraph', text: c.overviewText }] },
      { id: 'examples', title: c.examplesTitle, blocks: [{ type: 'paragraph', text: c.examplesIntro }, { type: 'table', headers: c.tableHeaders, rows: redAlertTableRowsEn }] },
      { id: 'image1', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-20.webp', alt: c.imageTitle + ' 1', caption: c.imageTitle + ' 1' }] },
      { id: 'formula', title: c.formulaTitle, blocks: [{ type: 'paragraph', text: c.formulaEn }, { type: 'paragraph', text: c.formulaLocal }] },
      { id: 'image2', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-21.webp', alt: c.imageTitle + ' 2', caption: c.imageTitle + ' 2' }] },
      { id: 'image3', title: c.imageTitle, blocks: [{ type: 'image', src: 'https://img.limaxai.com/aiweb/midjourney-22.webp', alt: c.imageTitle + ' 3', caption: c.imageTitle + ' 3' }] },
      { id: 'start', title: c.startTitle, blocks: [{ type: 'paragraph', text: c.startText }, { type: 'cta', text: c.ctaText, url: 'https://limaxai.com' }] },
    ],
  };
}

const RED_ALERT_LOCALES = ['es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'] as const;
const articleRedAlertByLocale: Record<string, TutorialArticle> = {
  en: articleRedAlertEn,
  'zh-cn': articleRedAlertZhCN,
  'zh-tw': articleRedAlertZhTW,
  ...Object.fromEntries(RED_ALERT_LOCALES.map((loc) => [loc, makeRedAlertArticle(loc)])),
};

const articlesBySlugAndLocale: Record<string, Record<string, TutorialArticle>> = {
  'limaxai-guide': { en: articleLimaxaiEn, 'zh-cn': articleLimaxaiZhCN, 'zh-tw': articleLimaxaiZhTW },
  'midjourney-tutorial': { en: articleMidjourneyEn, 'zh-cn': articleMidjourneyZhCN, 'zh-tw': articleMidjourneyZhCN },
  'midjourney-animal-photography': { en: articleAnimalEn, 'zh-cn': articleAnimalZhCN, 'zh-tw': articleAnimalZhTW },
  'midjourney-flower-wallpaper': articleFlowerByLocale,
  'midjourney-gufeng-figure': articleGufengByLocale,
  'midjourney-texture-12': articleTextureByLocale,
  'midjourney-zelda-style': articleZeldaByLocale,
  'midjourney-red-alert': articleRedAlertByLocale,
  'midjourney-composition-20': articleComposition20ByLocale,
  'midjourney-selected-prompts': articleSelectedPromptsByLocale,
  'midjourney-pen-wash-ink': articlePenWashInkByLocale,
  'midjourney-selected-styles': articleSelectedStylesByLocale,
  'ai-video-guide': { en: articleAiVideoEn, 'zh-cn': articleAiVideoZhCN, 'zh-tw': articleAiVideoZhCN },
};

function getList(locale: string): TutorialListEntry[] {
  const base = listByLocale[locale] ?? listEn;
  const flowerCopy = flowerCopyByLocale[locale];
  const gufengCopy = gufengCopyByLocale[locale];
  const textureCopy = textureCopyByLocale[locale];
  const zeldaCopy = zeldaCopyByLocale[locale];
  const redAlertCopy = redAlertCopyByLocale[locale];
  const composition20Copy = composition20CopyByLocale[locale];
  const selectedPromptsCopy = selectedPromptsCopyByLocale[locale];
  const penWashInkCopy = penWashInkCopyByLocale[locale];
  const selectedStylesCopy = selectedStylesCopyByLocale[locale];
  return base.map((e) => {
    if (e.slug === 'midjourney-flower-wallpaper' && flowerCopy) return { ...e, title: flowerCopy.title };
    if (e.slug === 'midjourney-gufeng-figure' && gufengCopy) return { ...e, title: gufengCopy.title };
    if (e.slug === 'midjourney-texture-12' && textureCopy) return { ...e, title: textureCopy.title };
    if (e.slug === 'midjourney-zelda-style' && zeldaCopy) return { ...e, title: zeldaCopy.title };
    if (e.slug === 'midjourney-red-alert' && redAlertCopy) return { ...e, title: redAlertCopy.title };
    if (e.slug === 'midjourney-composition-20' && composition20Copy) return { ...e, title: composition20Copy.title };
    if (e.slug === 'midjourney-selected-prompts' && selectedPromptsCopy) return { ...e, title: selectedPromptsCopy.title };
    if (e.slug === 'midjourney-pen-wash-ink' && penWashInkCopy) return { ...e, title: penWashInkCopy.title };
    if (e.slug === 'midjourney-selected-styles' && selectedStylesCopy) return { ...e, title: selectedStylesCopy.title };
    return e;
  });
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
