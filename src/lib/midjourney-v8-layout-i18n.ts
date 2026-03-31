/**
 * Midjourney V8 vs Banana 2 教程：除 en/zh-cn/zh-tw/ja 外各语种的表格/列表/图注本地化（SEO + 可读性）。
 * 品牌名、模型名保持原文；提示词结构说明中的英文术语保留。
 */
export type MidjourneyV8ArticleLayout = {
  keywordValues: string;
  methodBullets: string[];
  styleTable: { headers: string[]; rows: string[][] };
  promptBullets: string[];
  scenarioTable: { headers: string[]; rows: string[][] };
  captions: [string, string, string];
};

export const MIDJOURNEY_V8_LAYOUT_I18N: Record<string, MidjourneyV8ArticleLayout> = {
  es: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Ejes: coherencia de estilo, detalle, eficiencia de salida y encaje comercial.',
      'Mismo tema, misma estructura de prompt y mismas restricciones de escena.',
      'Mantén el prompt en inglés; compara solo el comportamiento del modelo.',
    ],
    styleTable: {
      headers: ['Tipo de estilo', 'V8 Alpha', 'Banana 2', 'Nota operativa'],
      rows: [
        ['Realismo tipo producto', 'Capas de material más nítidas', 'Ambiente más suave', 'V8 Alpha para consistencia de SKU'],
        ['Ilustración / concepto', 'Más control de composición', 'Más dispersión de estilo', 'Banana 2 en fase de ideación'],
        ['Póster / imagen clave', 'Mejor espacio para tipografía', 'Mayor variación de humor', 'Fija el layout y luego el estilo'],
      ],
    },
    promptBullets: [
      'Estructura: subject + scene + style + lighting + camera + quality (plantilla en inglés recomendada).',
      'Primero borrador barato, fija composición, luego sube parámetros de calidad.',
      'Al comparar, no cambies el prompt; solo parámetros específicos del modelo.',
    ],
    scenarioTable: {
      headers: ['Escenario', 'Modelo preferido', 'Motivo'],
      rows: [
        ['Imágenes hero e‑commerce', 'V8 Alpha', 'Más consistencia en textura y encuadre'],
        ['Moodboards creativos', 'Banana 2', 'Exploración de estilo y atmósfera más rápida'],
        ['Visuales de campaña', 'Flujo híbrido', 'Banana 2 para explorar, V8 Alpha para cerrar'],
      ],
    },
    captions: ['Comparativa multiestilo A', 'Comparativa multiestilo B', 'Primer plano lado a lado'],
  },
  fr: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Axes : cohérence de style, rendu des détails, efficacité de génération et adéquation business.',
      'Même thème, même structure de prompt, mêmes contraintes de scène.',
      'Gardez le prompt en anglais ; ne comparez que le comportement des modèles.',
    ],
    styleTable: {
      headers: ['Type de style', 'V8 Alpha', 'Banana 2', 'Note opérationnelle'],
      rows: [
        ['Réalisme type produit', 'Couches de matière plus nettes', 'Atmosphère plus douce', 'V8 Alpha pour la cohérence SKU'],
        ['Illustration / concept', 'Meilleur contrôle de composition', 'Plus de dispersion stylistique', 'Banana 2 en phase d’idéation'],
        ['Affiche / visuel clé', 'Meilleur espace typo', 'Plus de variance d’humeur', 'Verrouillez la mise en page puis le style'],
      ],
    },
    promptBullets: [
      'Structure : subject + scene + style + lighting + camera + quality (modèle anglais recommandé).',
      'Ébauche peu coûteuse, figez la composition, puis montez la qualité.',
      'En comparant, ne modifiez pas le prompt, seulement les paramètres propres au modèle.',
    ],
    scenarioTable: {
      headers: ['Cas d’usage', 'Modèle privilégié', 'Raison'],
      rows: [
        ['Visuels e‑commerce', 'V8 Alpha', 'Texture et cadrage plus stables'],
        ['Planches concept', 'Banana 2', 'Exploration style / ambiance plus rapide'],
        ['Visuels campagne', 'Hybride', 'Banana 2 pour explorer, V8 Alpha pour finaliser'],
      ],
    },
    captions: ['Comparaison multi-styles A', 'Comparaison multi-styles B', 'Gros plan côte à côte'],
  },
  de: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Dimensionen: Stilkonsistenz, Detailwiedergabe, Output-Effizienz und Business-Tauglichkeit.',
      'Gleiches Thema, gleiche Prompt-Struktur, gleiche Szenen-Vorgaben.',
      'Prompt-Text auf Englisch lassen; nur Modellverhalten vergleichen.',
    ],
    styleTable: {
      headers: ['Stiltyp', 'V8 Alpha', 'Banana 2', 'Hinweis'],
      rows: [
        ['Produktrealismus', 'Schärfere Materialschichten', 'Weichere Atmosphäre', 'V8 Alpha für SKU-Konsistenz'],
        ['Illustration / Konzept', 'Stärkere Kompositionskontrolle', 'Mehr Stil-Streuung', 'Banana 2 in der Ideenphase'],
        ['Poster / Key Visual', 'Mehr Platz für Typo', 'Stärkere Stimmungsvarianz', 'Layout fixieren, dann Stil feilen'],
      ],
    },
    promptBullets: [
      'Struktur: subject + scene + style + lighting + camera + quality (englische Vorlage empfohlen).',
      'Erst günstigen Entwurf, Komposition fixieren, dann Qualitätsparameter erhöhen.',
      'Beim Vergleich Prompt unverändert lassen, nur modellspezifische Parameter anpassen.',
    ],
    scenarioTable: {
      headers: ['Szenario', 'Bevorzugtes Modell', 'Grund'],
      rows: [
        ['E‑Commerce Hero-Bilder', 'V8 Alpha', 'Stabilere Textur und Rahmung'],
        ['Kreativ-Boards', 'Banana 2', 'Schnellere Stil- und Atmosphären-Exploration'],
        ['Kampagnen-Visuals', 'Hybrid', 'Banana 2 explorieren, V8 Alpha finalisieren'],
      ],
    },
    captions: ['Multi-Stil-Vergleich A', 'Multi-Stil-Vergleich B', 'Nahaufnahme nebeneinander'],
  },
  pt: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Eixos: consistência de estilo, detalhe, eficiência de saída e adequação comercial.',
      'Mesmo tema, mesma estrutura de prompt, mesmas restrições de cena.',
      'Mantenha o prompt em inglês; compare apenas o comportamento do modelo.',
    ],
    styleTable: {
      headers: ['Tipo de estilo', 'V8 Alpha', 'Banana 2', 'Nota'],
      rows: [
        ['Realismo de produto', 'Camadas de material mais nítidas', 'Ambiente mais suave', 'V8 Alpha para consistência de SKU'],
        ['Ilustração / conceito', 'Mais controlo de composição', 'Mais dispersão de estilo', 'Banana 2 na fase de ideação'],
        ['Poster / key visual', 'Melhor espaço para tipografia', 'Maior variação de mood', 'Fixe o layout, depois o estilo'],
      ],
    },
    promptBullets: [
      'Estrutura: subject + scene + style + lighting + camera + quality (modelo em inglês recomendado).',
      'Primeiro rascunho económico, fixe a composição, depois aumente a qualidade.',
      'Ao comparar, não altere o prompt; só parâmetros específicos do modelo.',
    ],
    scenarioTable: {
      headers: ['Cenário', 'Modelo preferido', 'Motivo'],
      rows: [
        ['Imagens hero e‑commerce', 'V8 Alpha', 'Mais consistência em textura e enquadramento'],
        ['Moodboards criativos', 'Banana 2', 'Exploração de estilo mais rápida'],
        ['Visuais de campanha', 'Fluxo híbrido', 'Banana 2 para explorar, V8 Alpha para fechar'],
      ],
    },
    captions: ['Comparação multiestilo A', 'Comparação multiestilo B', 'Close-up lado a lado'],
  },
  ru: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Оси: согласованность стиля, детализация, эффективность и коммерческая применимость.',
      'Одна тема, одна структура промпта, одинаковые ограничения сцены.',
      'Текст промпта на английском; сравниваем только поведение моделей.',
    ],
    styleTable: {
      headers: ['Тип стиля', 'V8 Alpha', 'Banana 2', 'Заметка'],
      rows: [
        ['Реализм «продукт»', 'Чётче слои материала', 'Мягче атмосфера', 'V8 Alpha для единообразия SKU'],
        ['Иллюстрация / концепт', 'Сильнее контроль композиции', 'Больше разброс стиля', 'Banana 2 на этапе идей'],
        ['Постер / KV', 'Удобнее для типографики', 'Сильнее вариации настроения', 'Сначала макет, потом стиль'],
      ],
    },
    promptBullets: [
      'Структура: subject + scene + style + lighting + camera + quality (шаблон на английском).',
      'Сначала дешёвый черновик, фиксируем композицию, затем повышаем качество.',
      'При сравнении не меняйте промпт — только параметры конкретной модели.',
    ],
    scenarioTable: {
      headers: ['Сценарий', 'Модель', 'Почему'],
      rows: [
        ['Hero для e‑commerce', 'V8 Alpha', 'Стабильнее текстура и кадрирование'],
        ['Креативные концепт-доски', 'Banana 2', 'Быстрее исследование стиля'],
        ['Кампейн KV', 'Гибрид', 'Banana 2 — поиск, V8 Alpha — финал'],
      ],
    },
    captions: ['Сравнение стилей A', 'Сравнение стилей B', 'Крупный план рядом'],
  },
  ar: {
    keywordValues: 'midjourney keywords، midjourney prompts، midjourney keywords',
    methodBullets: [
      'محاور التقييم: اتساق الأسلوب، التفاصيل، كفاءة الإخراج، والملاءمة التجارية.',
      'نفس الموضوع، وبنية البرومبت نفسها، وقيود المشهد نفسها.',
      'أبقِ نص البرومبت بالإنجليزية؛ قارن سلوك النموذج فقط.',
    ],
    styleTable: {
      headers: ['نوع الأسلوب', 'V8 Alpha', 'Banana 2', 'ملاحظة تشغيلية'],
      rows: [
        ['واقعية منتج', 'طبقات مادة أوضح', 'أجواء أنعم', 'V8 Alpha لاتساق SKU'],
        ['رسم / مفهوم', 'تحكم أقوى بالتكوين', 'تنوع أسلوبي أكبر', 'Banana 2 لمرحلة الاستكشاف'],
        ['ملصق / صورة رئيسية', 'مساحة أنسب للنص', 'تباين مزاجي أكبر', 'ثبّت التخطيط ثم الضبط الأسلوبي'],
      ],
    },
    promptBullets: [
      'البنية: subject + scene + style + lighting + camera + quality (يُفضّل بالإنجليزية).',
      'مسودة منخفضة التكلفة أولاً، ثبّت التكوين، ثم ارفع معاملات الجودة.',
      'عند المقارنة لا تغيّر البرومبت؛ عدّل معاملات النموذج فقط.',
    ],
    scenarioTable: {
      headers: ['السيناريو', 'النموذج المفضل', 'السبب'],
      rows: [
        ['صور بطل للتجارة الإلكترونية', 'V8 Alpha', 'اتساق أعلى في الملمس والإطار'],
        ['لوحات مفاهيمية', 'Banana 2', 'استكشاف أسلوب وأسرع'],
        ['صور حملات', 'مسار هجين', 'Banana 2 للاستكشاف وV8 Alpha للإنهاء'],
      ],
    },
    captions: ['مقارنة متعددة الأنماط أ', 'مقارنة متعددة الأنماط ب', 'لقطة مقاربة جنبًا إلى جنب'],
  },
  hi: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'आयाम: स्टाइल स्थिरता, डिटेल, आउटपुट दक्षता और व्यावसायिक फिट।',
      'एक ही थीम, एक ही प्रॉम्प्ट संरचना, एक ही सीन बाधाएँ।',
      'प्रॉम्प्ट अंग्रेज़ी में रखें; केवल मॉडल व्यवहार की तुलना करें।',
    ],
    styleTable: {
      headers: ['स्टाइल प्रकार', 'V8 Alpha', 'Banana 2', 'संचालन नोट'],
      rows: [
        ['प्रोडक्ट-जैसा यथार्थ', 'सामग्री परतें तेज़', 'माहौल नरम', 'SKU स्थिरता के लिए V8 Alpha'],
        ['इलस्ट्रेशन / कॉन्सेप्ट', 'कम्पोज़िशन नियंत्रण मजबूत', 'स्टाइल फैलाव अधिक', 'आइडिएशन में Banana 2'],
        ['पोस्टर / की विज़ुअल', 'टाइपोग्राफी के लिए जगह', 'मूड बदलाव अधिक', 'पहले लेआउट लॉक करें'],
      ],
    },
    promptBullets: [
      'संरचना: subject + scene + style + lighting + camera + quality (अंग्रेज़ी टेम्प्लेट)।',
      'पहले सस्ता ड्राफ्ट, कम्पोज़िशन लॉक, फिर क्वालिटी बढ़ाएँ।',
      'तुलना में प्रॉम्प्ट न बदलें; केवल मॉडल-विशिष्ट पैरामीटर।',
    ],
    scenarioTable: {
      headers: ['परिदृश्य', 'पसंदीदा मॉडल', 'कारण'],
      rows: [
        ['ई-कॉमर्स हीरो', 'V8 Alpha', 'टेक्सचर और फ्रेमिंग में स्थिरता'],
        ['क्रिएटिव बोर्ड', 'Banana 2', 'तेज़ स्टाइल खोज'],
        ['कैंपेन विज़ुअल', 'हाइब्रिड', 'Banana 2 खोज, V8 Alpha फाइनल'],
      ],
    },
    captions: ['मल्टी-स्टाइल तुलना A', 'मल्टी-स्टाइल तुलना B', 'साइड-बाय-साइड क्लोज-अप'],
  },
  ko: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      '평가 축: 스타일 일관성, 디테일, 생성 효율, 상업 적합성.',
      '동일 주제·동일 프롬프트 구조·동일 장면 제약.',
      '프롬프트 본문은 영어 유지, 모델 동작만 비교.',
    ],
    styleTable: {
      headers: ['스타일', 'V8 Alpha', 'Banana 2', '운영 팁'],
      rows: [
        ['제품형 리얼리즘', '재질 레이어가 또렷', '분위기는 부드러움', 'SKU 일관성은 V8 Alpha'],
        ['일러스트/컨셉', '구도 제어 강함', '스타일 분산이 큼', '발산 단계는 Banana 2'],
        ['포스터/KV', '타이포 여백 유리', '무드 변화 큼', '레이아웃 고정 후 스타일 조정'],
      ],
    },
    promptBullets: [
      '구조: subject + scene + style + lighting + camera + quality (영어 템플릿 권장).',
      '저비용 러프로 구도 확정 후 품질 파라미터 상향.',
      '비교 시 프롬프트는 고정, 모델 전용 파라미터만 변경.',
    ],
    scenarioTable: {
      headers: ['시나리오', '추천', '이유'],
      rows: [
        ['이커머스 히어로', 'V8 Alpha', '질감·프레이밍 안정성'],
        ['크리에이티브 보드', 'Banana 2', '스타일 탐색 속도'],
        ['캠페인 KV', '하이브리드', 'Banana 2 탐색 + V8 Alpha 확정'],
      ],
    },
    captions: ['멀티 스타일 비교 A', '멀티 스타일 비교 B', '나란히 클로즈업'],
  },
  tr: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Boyutlar: stil tutarlılığı, detay, çıktı verimi ve ticari uyum.',
      'Aynı konu, aynı prompt yapısı, aynı sahne kısıtları.',
      'Prompt metnini İngilizce tutun; yalnızca model davranışını karşılaştırın.',
    ],
    styleTable: {
      headers: ['Stil türü', 'V8 Alpha', 'Banana 2', 'Operasyon notu'],
      rows: [
        ['Ürün gerçekçiliği', 'Daha keskin malzeme katmanları', 'Daha yumuşak atmosfer', 'SKU tutarlılığı için V8 Alpha'],
        ['İllüstrasyon / konsept', 'Daha güçlü kompozisyon', 'Daha fazla stil yayılımı', 'Fikir aşamasında Banana 2'],
        ['Afiş / ana görsel', 'Tipografi için daha iyi alan', 'Daha zengin duygu değişimi', 'Önce düzeni kilitleyin'],
      ],
    },
    promptBullets: [
      'Yapı: subject + scene + style + lighting + camera + quality (İngilizce şablon önerilir).',
      'Önce düşük maliyetli taslak, kompozisyonu kilitleyin, sonra kaliteyi artırın.',
      'Karşılaştırırken promptu değiştirmeyin; yalnızca modele özgü parametreler.',
    ],
    scenarioTable: {
      headers: ['Senaryo', 'Tercih edilen model', 'Neden'],
      rows: [
        ['E‑ticaret hero görselleri', 'V8 Alpha', 'Doku ve kadrajda daha yüksek tutarlılık'],
        ['Yaratıcı konsept panoları', 'Banana 2', 'Daha hızlı stil keşfi'],
        ['Kampanya görselleri', 'Hibrit', 'Banana 2 keşif, V8 Alpha finalize'],
      ],
    },
    captions: ['Çok stilli karşılaştırma A', 'Çok stilli karşılaştırma B', 'Yan yana yakın çekim'],
  },
  vi: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Trục đánh giá: nhất quán phong cách, chi tiết, hiệu suất và phù hợp thương mại.',
      'Cùng chủ đề, cùng cấu trúc prompt, cùng ràng buộc cảnh.',
      'Giữ prompt bằng tiếng Anh; chỉ so sánh hành vi mô hình.',
    ],
    styleTable: {
      headers: ['Kiểu phong cách', 'V8 Alpha', 'Banana 2', 'Ghi chú'],
      rows: [
        ['Hiện thực kiểu sản phẩm', 'Lớp vật liệu sắc hơn', 'Không khí mềm hơn', 'V8 Alpha cho đồng nhất SKU'],
        ['Minh họa / concept', 'Kiểm soát bố cục mạnh hơn', 'Phân tán phong cách lớn hơn', 'Banana 2 giai đoạn ý tưởng'],
        ['Poster / key visual', 'Không gian chữ tốt hơn', 'Biến thiên tâm trạng lớn hơn', 'Khóa layout trước, chỉnh style sau'],
      ],
    },
    promptBullets: [
      'Cấu trúc: subject + scene + style + lighting + camera + quality (khuyên dùng tiếng Anh).',
      'Nháp rẻ trước, khóa bố cục, sau đó tăng tham số chất lượng.',
      'Khi so sánh không đổi prompt; chỉ tham số riêng của từng model.',
    ],
    scenarioTable: {
      headers: ['Kịch bản', 'Model ưu tiên', 'Lý do'],
      rows: [
        ['Ảnh hero e‑commerce', 'V8 Alpha', 'Ổn định chất liệu và khung hình hơn'],
        ['Bảng concept sáng tạo', 'Banana 2', 'Khám phá phong cách nhanh hơn'],
        ['Visual chiến dịch', 'Lai', 'Banana 2 khám phá, V8 Alpha chốt'],
      ],
    },
    captions: ['So sánh đa phong cách A', 'So sánh đa phong cách B', 'Cận cảnh cạnh nhau'],
  },
  th: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'แกนประเมิน: ความสม่ำเสมอของสไตล์ รายละเอียด ประสิทธิภาพ และความเหมาะกับเชิงพาณิชย์',
      'ธีมเดียว โครงสร้างพรอมป์เดียว ข้อจำกัดฉากเดียวกัน',
      'เก็บพรอมป์เป็นภาษาอังกฤษ เปรียบเทียบเฉพาะพฤติกรรมโมเดล',
    ],
    styleTable: {
      headers: ['ประเภทสไตล์', 'V8 Alpha', 'Banana 2', 'หมายเหตุ'],
      rows: [
        ['เรียลแบบสินค้า', 'ชั้นวัสดุคมขึ้น', 'บรรยากาศนุ่มนวลขึ้น', 'V8 Alpha สำหรับความสม่ำเสมอ SKU'],
        ['ภาพประกอบ / คอนเซปต์', 'ควบคุมคอมโพสแข็งแรง', 'กระจายสไตล์มากขึ้น', 'Banana 2 ช่วงไอเดีย'],
        ['โปสเตอร์ / คีย์วิชวล', 'เหมาะกับตัวอักษรมากขึ้น', 'อารมณ์หลากหลายขึ้น', 'ล็อกเลย์เอาต์ก่อนแล้วค่อยจูนสไตล์'],
      ],
    },
    promptBullets: [
      'โครงสร้าง: subject + scene + style + lighting + camera + quality (แนะนำเทมเพลตอังกฤษ)',
      'ร่างราคาต่ำก่อน ล็อกคอมโพส แล้วค่อยเพิ่มพารามิเตอร์คุณภาพ',
      'เปรียบเทียบโดยไม่เปลี่ยนพรอมป์ ปรับเฉพาะพารามิเตอร์ของแต่ละโมเดล',
    ],
    scenarioTable: {
      headers: ['สถานการณ์', 'โมเดลที่แนะนำ', 'เหตุผล'],
      rows: [
        ['ภาพฮีโร่อีคอมเมิร์ซ', 'V8 Alpha', 'ความสม่ำเสมอของพื้นผิวและเฟรมมากขึ้น'],
        ['บอร์ดไอเดีย', 'Banana 2', 'สำรวจสไตล์เร็วขึ้น'],
        ['วิชวลแคมเปญ', 'ไฮบริด', 'Banana 2 สำรวจ V8 Alpha ปิดงาน'],
      ],
    },
    captions: ['เทียบหลายสไตล์ A', 'เทียบหลายสไตล์ B', 'ภาพระยะใกล้คู่ขนาน'],
  },
  it: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Assi: coerenza di stile, dettaglio, efficienza di output e aderenza commerciale.',
      'Stesso tema, stessa struttura del prompt, stessi vincoli di scena.',
      'Mantieni il prompt in inglese; confronta solo il comportamento del modello.',
    ],
    styleTable: {
      headers: ['Tipo di stile', 'V8 Alpha', 'Banana 2', 'Nota operativa'],
      rows: [
        ['Realismo da prodotto', 'Strati di materiale più netti', 'Atmosfera più morbida', 'V8 Alpha per coerenza SKU'],
        ['Illustrazione / concept', 'Controllo compositivo più forte', 'Maggiore dispersione di stile', 'Banana 2 in fase ideazione'],
        ['Poster / key visual', 'Spazio tipografico migliore', 'Maggiore varianza di mood', 'Blocca il layout poi lo stile'],
      ],
    },
    promptBullets: [
      'Struttura: subject + scene + style + lighting + camera + quality (template inglese consigliato).',
      'Prima bozza economica, blocca la composizione, poi alza la qualità.',
      'Nel confronto non cambiare il prompt; solo parametri specifici del modello.',
    ],
    scenarioTable: {
      headers: ['Scenario', 'Modello preferito', 'Motivo'],
      rows: [
        ['Immagini hero e‑commerce', 'V8 Alpha', 'Maggiore coerenza su texture e inquadratura'],
        ['Moodboard creativi', 'Banana 2', 'Esplorazione di stile più veloce'],
        ['Visual di campagna', 'Ibrido', 'Banana 2 esplora, V8 Alpha finalizza'],
      ],
    },
    captions: ['Confronto multi-stile A', 'Confronto multi-stile B', 'Primo piano affiancato'],
  },
  fa: {
    keywordValues: 'midjourney keywords، midjourney prompts، midjourney keywords',
    methodBullets: [
      'محورها: یکپارچگی سبک، جزئیات، کارایی خروجی و تناسب تجاری.',
      'یک موضوع، یک ساختار پرامپت، یک مجموعه محدودیت صحنه.',
      'متن پرامپت را انگلیسی نگه دارید؛ فقط رفتار مدل را مقایسه کنید.',
    ],
    styleTable: {
      headers: ['نوع سبک', 'V8 Alpha', 'Banana 2', 'یادداشت'],
      rows: [
        ['واقع‌گرایی محصول', 'لایه‌های ماده واضح‌تر', 'فضای نرم‌تر', 'V8 Alpha برای یکنواختی SKU'],
        ['تصویرسازی / مفهوم', 'کنترل ترکیب قوی‌تر', 'پراکندگی سبک بیشتر', 'Banana 2 در فاز ایده'],
        ['پوستر / تصویر کلیدی', 'فضای بهتر برای تایپ', 'تنوع حال‌وهوای بیشتر', 'ابتدا چیدمان را قفل کنید'],
      ],
    },
    promptBullets: [
      'ساختار: subject + scene + style + lighting + camera + quality (الگوی انگلیسی).',
      'ابتدا پیش‌نویس ارزان، ترکیب را قفل کنید، سپس کیفیت را بالا ببرید.',
      'در مقایسه پرامپت را تغییر ندهید؛ فقط پارامترهای اختصاصی مدل.',
    ],
    scenarioTable: {
      headers: ['سناریو', 'مدل ترجیحی', 'دلیل'],
      rows: [
        ['تصاویر قهرمان فروشگاه آنلاین', 'V8 Alpha', 'ثبات بیشتر بافت و قاب'],
        ['بردهای مفهومی', 'Banana 2', 'کاوش سبک سریع‌تر'],
        ['بصری کمپین', 'ترکیبی', 'Banana 2 کاوش، V8 Alpha نهایی'],
      ],
    },
    captions: ['مقایسه چندسبکی الف', 'مقایسه چندسبکی ب', 'نمای نزدیک کنارهم'],
  },
  nl: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Assen: stijlconsistentie, detail, output-efficiëntie en commerciële geschiktheid.',
      'Zelfde thema, zelfde promptstructuur, zelfde scènevoorwaarden.',
      'Houd de prompt in het Engels; vergelijk alleen modelgedrag.',
    ],
    styleTable: {
      headers: ['Stijltype', 'V8 Alpha', 'Banana 2', 'Tip'],
      rows: [
        ['Productrealisme', 'Scherpere materiaallagen', 'Zachtere sfeer', 'V8 Alpha voor SKU-consistentie'],
        ['Illustratie / concept', 'Sterkere compositie', 'Meer stijlspreiding', 'Banana 2 in ideatiefase'],
        ['Poster / key visual', 'Meer ruimte voor typografie', 'Meer mood-variatie', 'Eerst layout vastzetten'],
      ],
    },
    promptBullets: [
      'Structuur: subject + scene + style + lighting + camera + quality (Engels sjabloon).',
      'Eerst goedkope schets, compositie vast, dan kwaliteit omhoog.',
      'Bij vergelijken prompt niet wijzigen; alleen modelspecifieke parameters.',
    ],
    scenarioTable: {
      headers: ['Scenario', 'Voorkeursmodel', 'Reden'],
      rows: [
        ['E‑commerce hero-beelden', 'V8 Alpha', 'Stabielere textuur en kadrering'],
        ['Creatieve moodboards', 'Banana 2', 'Snellere stijlexploratie'],
        ['Campagne-visuals', 'Hybride', 'Banana 2 verkennen, V8 Alpha afronden'],
      ],
    },
    captions: ['Multi-stijl vergelijking A', 'Multi-stijl vergelijking B', 'Close-up naast elkaar'],
  },
  pl: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Osie: spójność stylu, detale, wydajność i przydatność komercyjna.',
      'Ten sam temat, ta sama struktura promptu, te same ograniczenia sceny.',
      'Prompt po angielsku; porównuj tylko zachowanie modelu.',
    ],
    styleTable: {
      headers: ['Typ stylu', 'V8 Alpha', 'Banana 2', 'Uwaga'],
      rows: [
        ['Realizm produktowy', 'Wyraźniejsze warstwy materiału', 'Łagodniejsza atmosfera', 'V8 Alpha dla spójności SKU'],
        ['Ilustracja / koncept', 'Silniejsza kontrola kompozycji', 'Większe rozproszenie stylu', 'Banana 2 na etapie ideacji'],
        ['Plakat / key visual', 'Lepsze miejsce na typografię', 'Większa zmienność nastroju', 'Najpierw układ, potem styl'],
      ],
    },
    promptBullets: [
      'Struktura: subject + scene + style + lighting + camera + quality (szablon angielski).',
      'Najpierw tani szkic, zablokuj kompozycję, potem podnoś jakość.',
      'Przy porównaniu nie zmieniaj promptu — tylko parametry modelu.',
    ],
    scenarioTable: {
      headers: ['Scenariusz', 'Preferowany model', 'Powód'],
      rows: [
        ['Obrazy hero e‑commerce', 'V8 Alpha', 'Stabilniejsza tekstura i kadrowanie'],
        ['Tablice koncepcyjne', 'Banana 2', 'Szybsza eksploracja stylu'],
        ['Wizualizacje kampanii', 'Hybryda', 'Banana 2 eksploracja, V8 Alpha finał'],
      ],
    },
    captions: ['Porównanie wielu stylów A', 'Porównanie wielu stylów B', 'Zbliżenie obok siebie'],
  },
  sv: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Axlar: stilkonsistens, detaljer, effektivitet och kommersiell lämplighet.',
      'Samma tema, samma promptstruktur, samma scenbegränsningar.',
      'Behåll prompten på engelska; jämför endast modellbeteende.',
    ],
    styleTable: {
      headers: ['Stiltyp', 'V8 Alpha', 'Banana 2', 'Anteckning'],
      rows: [
        ['Produktrealism', 'Skarpare materialskikt', 'Mjukare atmosfär', 'V8 Alpha för SKU-konsistens'],
        ['Illustration / koncept', 'Starkare kompositionskontroll', 'Mer stilspridning', 'Banana 2 i idéfas'],
        ['Affisch / key visual', 'Bättre utrymme för typografi', 'Större stämningsvariation', 'Lås layout först'],
      ],
    },
    promptBullets: [
      'Struktur: subject + scene + style + lighting + camera + quality (engelsk mall).',
      'Billigt utkast först, lås komposition, höj sedan kvalitet.',
      'Vid jämförelse: ändra inte prompten; bara modellspecifika parametrar.',
    ],
    scenarioTable: {
      headers: ['Scenario', 'Föredraget modell', 'Orsak'],
      rows: [
        ['E‑handels hero-bilder', 'V8 Alpha', 'Stabilare textur och ramning'],
        ['Kreativa moodboards', 'Banana 2', 'Snabbare stilutforskning'],
        ['Kampanjvisuals', 'Hybrid', 'Banana 2 utforskar, V8 Alpha färdigställer'],
      ],
    },
    captions: ['Flerstilsjämförelse A', 'Flerstilsjämförelse B', 'Närbild sida vid sida'],
  },
  uk: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Вісі: узгодженість стилю, деталізація, ефективність і комерційна придатність.',
      'Одна тема, одна структура промпта, однакові обмеження сцени.',
      'Текст промпта англійською; порівнюємо лише поведінку моделей.',
    ],
    styleTable: {
      headers: ['Тип стилю', 'V8 Alpha', 'Banana 2', 'Примітка'],
      rows: [
        ['Продуктовий реалізм', 'Чіткіші шари матеріалу', 'М’якіша атмосфера', 'V8 Alpha для узгодженості SKU'],
        ['Ілюстрація / концепт', 'Сильніший контроль композиції', 'Більший розкид стилю', 'Banana 2 на етапі ідей'],
        ['Постер / KV', 'Краще для типографіки', 'Більша варіація настрою', 'Спочатку макет, потім стиль'],
      ],
    },
    promptBullets: [
      'Структура: subject + scene + style + lighting + camera + quality (шаблон англійською).',
      'Спочатку дешевий чернетка, фіксуємо композицію, потім підвищуємо якість.',
      'Під час порівняння не змінюйте промпт — лише параметри моделі.',
    ],
    scenarioTable: {
      headers: ['Сценарій', 'Модель', 'Чому'],
      rows: [
        ['Hero для e‑commerce', 'V8 Alpha', 'Стабільніша текстура та кадрування'],
        ['Креативні дошки', 'Banana 2', 'Швидше дослідження стилю'],
        ['Кампанійні візуали', 'Гібрид', 'Banana 2 — пошук, V8 Alpha — фінал'],
      ],
    },
    captions: ['Порівняння стилів A', 'Порівняння стилів B', 'Крупний план поруч'],
  },
  ro: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Dimensiuni: consistență stil, detaliu, eficiență output și potrivire comercială.',
      'Aceeași temă, aceeași structură prompt, aceleași constrângeri de scenă.',
      'Păstrați promptul în engleză; comparați doar comportamentul modelului.',
    ],
    styleTable: {
      headers: ['Tip stil', 'V8 Alpha', 'Banana 2', 'Notă'],
      rows: [
        ['Realism produs', 'Straturi de material mai clare', 'Atmosferă mai moale', 'V8 Alpha pentru consistență SKU'],
        ['Ilustrație / concept', 'Control compozițional mai puternic', 'Mai multă dispersie de stil', 'Banana 2 în faza de idei'],
        ['Poster / key visual', 'Spațiu mai bun pentru tipografie', 'Variație de mood mai mare', 'Blocare layout apoi stil'],
      ],
    },
    promptBullets: [
      'Structură: subject + scene + style + lighting + camera + quality (șablon englezesc).',
      'Mai întâi schiță ieftină, fixați compoziția, apoi creșteți calitatea.',
      'La comparare nu schimbați promptul; doar parametrii specifici modelului.',
    ],
    scenarioTable: {
      headers: ['Scenariu', 'Model preferat', 'Motiv'],
      rows: [
        ['Imagini hero e‑commerce', 'V8 Alpha', 'Consistență mai mare la textură și încadrare'],
        ['Moodboard-uri creative', 'Banana 2', 'Explorare stil mai rapidă'],
        ['Vizualuri campanie', 'Hibrid', 'Banana 2 explorează, V8 Alpha finalizează'],
      ],
    },
    captions: ['Comparație multi-stil A', 'Comparație multi-stil B', 'Close-up alăturat'],
  },
  id: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Dimensi: konsistensi gaya, detail, efisiensi output, dan kesesuaian komersial.',
      'Tema sama, struktur prompt sama, batasan adegan sama.',
      'Pertahankan prompt dalam bahasa Inggris; bandingkan hanya perilaku model.',
    ],
    styleTable: {
      headers: ['Jenis gaya', 'V8 Alpha', 'Banana 2', 'Catatan'],
      rows: [
        ['Realisme produk', 'Lapisan material lebih tajam', 'Suasana lebih lembut', 'V8 Alpha untuk konsistensi SKU'],
        ['Ilustrasi / konsep', 'Kontrol komposisi lebih kuat', 'Penyebaran gaya lebih besar', 'Banana 2 di fase ide'],
        ['Poster / key visual', 'Ruang tipografi lebih baik', 'Variasi mood lebih besar', 'Kunci layout dulu'],
      ],
    },
    promptBullets: [
      'Struktur: subject + scene + style + lighting + camera + quality (template Inggris).',
      'Draf murah dulu, kunci komposisi, lalu naikkan kualitas.',
      'Saat membandingkan jangan ubah prompt; hanya parameter spesifik model.',
    ],
    scenarioTable: {
      headers: ['Skenario', 'Model pilihan', 'Alasan'],
      rows: [
        ['Gambar hero e‑commerce', 'V8 Alpha', 'Konsistensi tekstur dan framing lebih tinggi'],
        ['Papan konsep kreatif', 'Banana 2', 'Eksplorasi gaya lebih cepat'],
        ['Visual kampanye', 'Hibrida', 'Banana 2 eksplorasi, V8 Alpha final'],
      ],
    },
    captions: ['Perbandingan multi-gaya A', 'Perbandingan multi-gaya B', 'Close-up berdampingan'],
  },
  ms: {
    keywordValues: 'midjourney keywords, midjourney prompts, midjourney keywords',
    methodBullets: [
      'Dimensi: konsistensi gaya, perincian, kecekapan output dan kesesuaian komersial.',
      'Tema sama, struktur prompt sama, kekangan adegan sama.',
      'Kekalkan prompt dalam bahasa Inggeris; bandingkan hanya tingkah laku model.',
    ],
    styleTable: {
      headers: ['Jenis gaya', 'V8 Alpha', 'Banana 2', 'Nota'],
      rows: [
        ['Realisme produk', 'Lapisan bahan lebih tajam', 'Suasana lebih lembut', 'V8 Alpha untuk konsistensi SKU'],
        ['Ilustrasi / konsep', 'Kawalan komposisi lebih kuat', 'Pencaran gaya lebih besar', 'Banana 2 fasa idea'],
        ['Poster / key visual', 'Ruang tipografi lebih baik', 'Varians mood lebih besar', 'Kunci susun atur dahulu'],
      ],
    },
    promptBullets: [
      'Struktur: subject + scene + style + lighting + camera + quality (templat Inggeris).',
      'Draf murah dahulu, kunci komposisi, kemudian naikkan kualiti.',
      'Semasa membandingkan jangan ubah prompt; hanya parameter khusus model.',
    ],
    scenarioTable: {
      headers: ['Senario', 'Model pilihan', 'Sebab'],
      rows: [
        ['Imej hero e-dagang', 'V8 Alpha', 'Konsistensi tekstur dan bingkai lebih tinggi'],
        ['Papan konsep kreatif', 'Banana 2', 'Penerokaan gaya lebih pantas'],
        ['Visual kempen', 'Hibrid', 'Banana 2 teroka, V8 Alpha muktamad'],
      ],
    },
    captions: ['Perbandingan pelbagai gaya A', 'Perbandingan pelbagai gaya B', 'Close-up bersebelahan'],
  },
};
