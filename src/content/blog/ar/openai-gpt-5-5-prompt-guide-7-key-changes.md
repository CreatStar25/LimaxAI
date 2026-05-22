---
title: "OpenAI تنشر دليل مطالبات GPT 5.5 الرسمي: 7 تغييرات أساسية"
description: "دليل GPT-5.5 الرسمي ينتقل من التوجيه خطوة بخطوة إلى مطالبات مبنية على النتائج. 7 تغييرات وهيكل من 7 أجزاء وقواعد إيقاف وجدول مقارنة."
tags: ["chatgpt", "gpt 5.5", "دليل gpt"]
pubDate: "2026-05-22"
heroImage: "https://img.limaxai.com/aiweb/chatgpt-260522-1.png"
lang: "ar"
author: "LimaxAI Team"
---

نشرت OpenAI دليل المطالبات الرسمي مع GPT-5.5. المطالبات خطوة بخطوة للنماذج القديمة قد تحد الأداء. إليك 7 تغييرات عملية.

الكلمات المفتاحية: chatgpt، gpt 5.5، دليل gpt.

تاريخ النشر: 22 مايو 2026

<div style="text-align: center; margin: 32px 0;">
  <a href="https://www.limaxai.com/ar/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    ابدأ استخدام GPT
  </a>
</div>

![دليل مطالبات GPT 5.5 من OpenAI](https://img.limaxai.com/aiweb/chatgpt-260522-1.png)

## الخلفية: لماذا إعادة كتابة المطالبات القديمة

المطالبات القديمة **تحدد العملية أكثر من اللازم**. مع GPT-5.5 يصبح ذلك ضوضاء—**أعد الكتابة من الصفر**.

شارك مؤسس Django Simon Willison في الإشارة إلى أن OpenAI توصي **بإعادة الكتابة من الصفر**. عند GPT-5.5 (أو LimaxAI)، عامل المطالبات كمنتج جديد.

## التغيير 1: من الخطوات إلى النتيجة

**الأسلوب القديم (العملية أولاً):**

> تحقق من A ثم B، قارن الحقول، عالج الاستثناءات، اختر الأداة واشرح كل الخطوات.

**الأسلوب الجديد (النتيجة أولاً):**

> حل مشكلة المستخدم بالكامل. استخدم السياسة والبيانات؛ أبلغ بما تم وما تبقى. سؤال حرج واحد عند النقص.

**صف الوجهة، وليس كل منعطف.**

## التغيير 2: أقل من «يجب» و«ممنوع»

GPT-5.5 حساس للصياغة المطلقة؛ القواعد المتعارضة تفشل.

| الحالة | الأسلوب |
| --- | --- |
| الأمان، الحقول الإلزامية | دائمًا/أبدًا |
| البحث أو السؤال | شروط |

مثال: بدل «يجب البحث قبل الإجابة» — «إن كفى السياق، أجب دون بحث».

## التغيير 3: دور قصير

**الدور** في جملتين؛ **الشخصية** = النبرة وأسلوب التعاون.

- **Steady:** reliable collaborator—calm, direct; advance without unnecessary check-ins.
- **Expressive:** conversational, curious; ask when ambiguous, decide when context is enough.

## التغيير 4: مقدمة قبل التنفيذ

قبل الأدوات: جملتان مرئيتان تؤكدان الاستلام وأول إجراء.

منتجات مثل Codex تستخدم هذا النمط بالفعل (مثل «أحلل قاعدة الشيفرة، أبدأ بملفات الاختبار») لـ API ومهام ChatGPT الطويلة.

## التغيير 5: شروط التوقف

«ابحث ثم أجب» دون توقف قد يخلق حلقات بحث.

1. **ميزانية البحث:** جولة واحدة افتراضياً.
2. **توقف الحلقة:** توقف عند كفاية الأدلة.

## التغيير 6: هيكل من 7 أجزاء

| الجزء | الغرض |
| --- | --- |
| الدور | الوظيفة |
| الشخصية | النبرة |
| الهدف | المخرجات |
| النجاح | الاكتمال |
| القيود | الحدود |
| المخرج | التنسيق |
| التوقف | متى تتوقف |

الأسئلة البسيطة: غالبًا الهدف + المخرج فقط. OpenAI developer console also offers **Optimize** to reshape prompts to this structure.

## التغيير 7: التنسيق والإيجاز

GPT-5.5 مختصر افتراضياً. API: `text.verbosity` و**Structured Outputs**.

> فقرات طبيعية افتراضياً.

> احفظ البنية والطول والصوت عند إعادة الصياغة.

## الترحيل: reasoning منخفض

أعد تقييم `reasoning.effort`؛ غالبًا يكفي low.

## الخلاصة

**قل ماذا تريد—لا كل خطوة تنفيذ.**

| البعد | سابقًا | GPT-5.5 |
| --- | --- | --- |
| العملية | خطوات | نتيجة |
| النبرة | مطلق | خطوط حمراء فقط |
| الدور | طويل | قصير |
| متعدد الخطوات | فوري | مقدمة |
| التوقف | غائب | صريح |
| الهيكل | حر | 7 أجزاء |
| التنسيق | افتراضي | API+prompt |

اختبر على مهام حقيقية ثم جرّب GPT عبر LimaxAI بالزر أدناه.

<div style="text-align: center; margin: 40px 0;">
  <a href="https://www.limaxai.com/ar/chat?model=gpt-5.4" style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';>
    ابدأ استخدام GPT
  </a>
</div>
