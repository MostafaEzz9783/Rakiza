import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { articleSchema, createMetadata } from "@/lib/seo";
import { Locale, localizedPath } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

const articlesData = {
  "financial-visibility-for-smes": {
    en: {
      title: "What financial visibility means for SMEs above 20M EGP revenue",
      description: "A practical framework for cash flow, profitability, reporting maturity, and leadership cadence.",
      category: "Rakiza Financial Intelligence",
      metrics: {
        stage: "EGP 20M+ Scale",
        entity: "Mid-Market SME",
        risk: "Low Cash Visibility",
        horizon: "30-90 Days Rolling"
      },
      metricsLabels: {
        stage: "Target Stage",
        entity: "Organization",
        risk: "Critical Risk",
        horizon: "Focus Horizon"
      },
      sections: [
        {
          heading: "1. Executive Definition: Beyond Bank Balances",
          content: "At 20M EGP annual revenue, a business transitions from a simple owner-managed trade to a complex operational engine. Financial visibility is no longer just \"knowing your bank balance\" at the end of the day. It is the real-time structure of your cash conversion cycle, the exact unit-level gross margins across multiple services or products, and a rolling 13-week cash flow forecast that leadership trusts to make capital allocation decisions."
        },
        {
          heading: "2. Why it Matters: The Growth-Induced Cash Crunch",
          content: "SMEs at this stage frequently fail not from a lack of growth, but from a growth-induced cash crunch. When you scale, your working capital requirements expand rapidly. Without instrumentation, you might see rising revenues on paper while your bank account is constantly depleted due to extended collection cycles, inventory build-ups, or unbilled work. Profitability does not equal liquidity."
        },
        {
          heading: "3. What to Measure: Key Financial Instruments",
          content: "To build true visibility, leadership must monitor three core instruments:\n\n• Cash Conversion Cycle (CCC): The exact number of days capital is tied up in operations.\n• Unit Profitability: Net-margin tracking per service after accounting for all direct labor and overhead allocations.\n• Forecast Accuracy: Maintaining a rolling variance of less than 6% between predicted and actual weekly cash balances."
        },
        {
          heading: "4. How Rakiza Approaches It: Designing Living Systems",
          content: "We don't deliver passive, monthly PDF reports that arrive after the fact. Rakiza designs and installs a custom, living financial operating system. We bridge the gap between your accounting data and strategic planning. By establishing rigorous weekly review cadences and building automated forecasting tools, we empower founder-led companies to transition from retrospective reporting to proactive market positioning."
        }
      ]
    },
    ar: {
      title: "ماذا تعني الرؤية والرقابة المالية للشركات المتوسطة التي تتجاوز إيراداتها 20 مليون جنيه",
      description: "إطار عمل عملي لإدارة التدفقات النقدية، وضبط ربحية المنشأة، ونضج التقارير المالية للقيادة.",
      category: "استخبارات ركيزة المالية",
      metrics: {
        stage: "عوائد +20 مليون جم",
        entity: "منشأة متوسطة",
        risk: "ضعف رؤية السيولة",
        horizon: "30-90 يوماً متجددة"
      },
      metricsLabels: {
        stage: "المرحلة المستهدفة",
        entity: "شكل المنشأة",
        risk: "الخطر الحرج",
        horizon: "أفق التركيز"
      },
      sections: [
        {
          heading: "١. التعريف التنفيذي: ما وراء الحسابات البنكية اليومية",
          content: "عندما تتجاوز الإيرادات السنوية للمنشأة حاجز الـ 20 مليون جنيه مصري، فإنها تنتقل من مجرد تجارة بسيطة يديرها المالك إلى محرك تشغيلي معقد. في هذه المرحلة، لا تعني الرؤية المالية مجرد معرفة رصيد الحساب البنكي في نهاية اليوم، بل تعني الفهم الدقيق والديناميكي لدورة تحويل النقدية، وهوامش الربح الإجمالية الحقيقية على مستوى الوحدة للمنتجات والخدمات، ووجود توقع تدفق نقدي متجدد لمدة 13 أسبوعاً تعتمد عليه الإدارة في اتخاذ قرارات تخصيص رأس المال."
        },
        {
          heading: "٢. لماذا يمثل هذا الأمر أهمية قصوى؟ فخ السيولة الناتج عن النمو",
          content: "تفشل الشركات المتوسطة في هذه المرحلة غالباً ليس بسبب نقص المبيعات أو النمو، بل بسبب أزمة سيولة ناتجة عن التوسع السريع. عندما تتوسع، تزداد متطلبات رأس المال العامل بشكل حاد. وبدون لوحة قيادة مالية واضحة، قد ترى أرقام مبيعات ممتازة على الورق بينما يعاني حسابك البنكي من جفاف مستمر بسبب فترات التحصيل الطويلة أو المخزون المتراكم. الربحية المحاسبية لا تعني بالضرورة توفر السيولة."
        },
        {
          heading: "٣. المؤشرات الحيوية التي يجب قياسها: أدوات التحكم المالية",
          content: "لبناء رؤية مالية حقيقية، يجب على الإدارة مراقبة ثلاثة مؤشرات رئيسية:\n\n• دورة تحويل النقدية (CCC): قياس عدد الأيام التي يظل فيها رأس المال محتجزاً في العمليات التشغيلية والعملاء.\n• ربحية الوحدة الحقيقية: احتساب هامش الربح الصافي الفعلي بعد توزيع تكاليف العمالة المباشرة والمصاريف الإدارية والعمومية بدقة.\n• دقة التنبؤ المالي أسبوعياً: السعي للوصول بتباين التوقعات إلى أقل من 6% مقارنة بالواقع الفعلي لتأمين العمليات."
        },
        {
          heading: "٤. منهجية ركيزة في المعالجة: بناء أنظمة تشغيلية حية",
          content: "نحن لا نكتفي بإرسال تقارير PDF جامدة تصلك بعد فوات الأوان. ركيزة تصمم وتؤسس نظام تشغيل ورقابة مالية حياً ومستداماً لعملك. نردم الفجوة بين البيانات المحاسبية التقليدية وصناعة القرار الاستراتيجي. من خلال رسم إيقاع أسبوعي للمتابعة وبناء أدوات تنبؤ تفاعلية، نؤهل الشركات المتوسطة للانتقال من موقع الدفاع ورد الفعل إلى الهجوم وتوجيه السوق."
        }
      ]
    }
  },
  "fractional-cfo-egypt-guide": {
    en: {
      title: "Fractional CFO in Egypt: when founder-led companies need one",
      description: "How to identify the moment where finance leadership becomes a growth constraint.",
      category: "Fractional CFO Leadership",
      metrics: {
        stage: "Growth EGP 20M - 100M",
        entity: "Founder-Led Scaleup",
        risk: "Macro & Pricing Friction",
        horizon: "Multi-Year Capital Path"
      },
      metricsLabels: {
        stage: "Target Stage",
        entity: "Organization",
        risk: "Critical Risk",
        horizon: "Focus Horizon"
      },
      sections: [
        {
          heading: "1. Executive Definition: Elite Finance on Demand",
          content: "A Fractional CFO is a highly experienced finance executive who provides strategic leadership, financial modeling, capital structuring, and board-ready governance to a growing business on a part-time or advisory basis. Unlike an accountant or a traditional controller, a Fractional CFO does not just record history—they actively shape the future financial trajectory of the business, aligning operations with investor or banking requirements."
        },
        {
          heading: "2. Why it Matters: Macro Headwinds and Intuition Gaps",
          content: "Founder-led companies in Egypt and the region face unique macroeconomic headwinds, including high inflation and currency fluctuations. At a certain scale (usually EGP 20M to EGP 100M), the founder's financial intuition is no longer sufficient, yet the company cannot justify the EGP 150K+ monthly compensation of a top-tier full-time CFO. A fractional model bridges this gap, giving founders elite financial intelligence at a fraction of the cost."
        },
        {
          heading: "3. What to Measure: Strategic Metrics",
          content: "A Fractional CFO introduces institutional discipline by focusing on key indicators:\n\n• Pricing Resiliency: Dynamic pricing models that adjust to inflation rates and currency shifts to protect margins.\n• Working Capital Efficiency: Optimization of cash reserves by reducing inventory holding times and DSO.\n• Capital Structure: Determining the lowest cost of capital by balancing equity financing with bank debt or vendor facilities."
        },
        {
          heading: "4. How Rakiza Approaches It: Embedded Advisory",
          content: "We embed seasoned financial strategists directly into your operations. We don't act as passive advisors; we join your executive meetings, design your multi-year financial forecasts, restructure your pricing models to fight inflation, and lead negotiations with banks or prospective investors, giving you the strategic leverage of an enterprise-grade finance department."
        }
      ]
    },
    ar: {
      title: "المدير المالي الاستشاري الجزئي في مصر: متى تحتاجه الشركات التي يقودها المؤسسون؟",
      description: "كيف تحدد اللحظة التي تصبح فيها الإدارة المالية الحالية لشركتك عائقاً حقيقياً أمام التوسع والنمو.",
      category: "القيادة المالية الاستشارية",
      metrics: {
        stage: "نمو 20 - 100 مليون جم",
        entity: "شركة بقيادة المؤسسين",
        risk: "تقلبات العملة والتضخم",
        horizon: "هيكلة رأس المال طويل المدى"
      },
      metricsLabels: {
        stage: "المرحلة المستهدفة",
        entity: "شكل المنشأة",
        risk: "الخطر الحرج",
        horizon: "أفق التركيز"
      },
      sections: [
        {
          heading: "١. التعريف التنفيذي: قيادة مالية نخبوية عند الطلب",
          content: "المدير المالي الاستشاري الجزئي (Fractional CFO) هو قيادي مالي رفيع المستوى ذو خبرة استراتيجية واسعة، يقود التخطيط المالي، وهيكلة رأس المال، وإعداد التقارير لمجلس الإدارة لصالح الشركات النامية على أساس جزئي أو استشاري. وعلى عكس المحاسب التقليدي أو رئيس الحسابات الذي يسجل الماضي فقط، فإن المدير المالي الجزئي يوجه ويبني المستقبل المالي للمنشأة بقرارات استباقية تربط العمليات التشغيلية بمتطلبات البنوك والمستثمرين."
        },
        {
          heading: "٢. لماذا يمثل هذا الأمر أهمية قصوى؟ فجوة الحدس في مواجهة التضخم الكلي",
          content: "تواجه الشركات التي يقودها المؤسسون في مصر والمنطقة تحديات اقتصادية وتضخمية استثنائية. عند حجم أعمال معين (بين 20 مليون إلى 100 مليون جنيه)، لا يكفي حدس المؤسس بمفرده لإدارة المخاطر المالية والتقلبات، وفي الوقت ذاته لا تستطيع ميزانية الشركة تحمل الراتب الضخم لمدير مالي متفرغ بمستوى رفيع (والذي قد يتجاوز 150 ألف جنيه شهرياً). يوفر النموذج الاستشاري الجزئي هذا الذكاء المالي النخبوي بتكلفة مرنة واقتصادية."
        },
        {
          heading: "٣. المؤشرات الحيوية التي يجب قياسها: الانضباط الاستراتيجي",
          content: "يدخل المدير المالي الجزئي الانضباط المؤسسي لشركتك بالتركيز على مؤشرات حساسة:\n\n• مرونة واستجابة التسعير: نماذج تسعير ديناميكية تتكيف فوراً مع التضخم وتغيرات أسعار الصرف لحماية الأرباح الصافية.\n• كفاءة رأس المال العامل: تسريع دورة السيولة المحتجزة في فواتير العملاء المتأخرة وتقليص فترات بقاء البضائع بالمخازن.\n• هيكلة مصادر التمويل: موازنة مصادر التمويل الذاتي والقروض البنكية والائتمان التجاري للوصول لأدنى تكلفة للتمويل المتاح."
        },
        {
          heading: "٤. منهجية ركيزة في المعالجة: العمل الاستشاري المندمج",
          content: "نحن ندمج خبراء واستراتيجيين ماليين مخضرمين في صميم فريق عملك. لا نعمل كمستشارين خارجيين يكتفون بكتابة الملاحظات، بل نشارك في اجتماعاتك القيادية، ونصمم نماذج التوقعات المالية متعددة السنوات، ونعيد هيكلة نماذج التسعير الخاصة بك لمواجهة التضخم، ونقود المفاوضات مع البنوك والمستثمرين لتمكينك من اتخاذ قرارات تضمن استدامة أعمالك."
        }
      ]
    }
  },
  "pricing-intelligence-margin-growth": {
    en: {
      title: "Pricing intelligence for growth without margin erosion",
      description: "A calm approach to price architecture, margin leakage, and customer trust.",
      category: "Revenue & Pricing Optimization",
      metrics: {
        stage: "Service/Product Growth",
        entity: "High-Margin Scaleup",
        risk: "Margin Erosion & Inflation",
        horizon: "Immediate Profit Capture"
      },
      metricsLabels: {
        stage: "Target Stage",
        entity: "Organization",
        risk: "Critical Risk",
        horizon: "Focus Horizon"
      },
      sections: [
        {
          heading: "1. Executive Definition: Margin Capture, Not Volume Chasing",
          content: "Pricing Intelligence is the disciplined process of aligning your pricing architecture with the value delivered, customer segment willingness-to-pay, and the dynamic cost environment. Rather than relying on simple cost-plus formulas or copycat competitor pricing, pricing intelligence leverages data-driven insights to capture maximum margin on every contract and identify leakage points."
        },
        {
          heading: "2. Why it Matters: Static Pricing is a Slow-Death Sentence",
          content: "In high-inflation environments like Egypt, static pricing is a slow-death sentence. If your costs rise by 30% but your prices remain flat or are updated too late, you are effectively subsidizing your customers with your own net margins. Growth without pricing intelligence is dangerous: you may add customers and increase revenues while actually bleeding cash and accelerating your path to insolvency."
        },
        {
          heading: "3. What to Measure: Margin Health Analytics",
          content: "To build dynamic control over pricing, Rakiza focuses on three core performance vectors:\n\n• Margin Contribution by Client: Tracking which clients generate high volume but zero net profit due to hidden custom service overhead.\n• Pricing Realization Rate: The percentage of your theoretical list price actually captured after discounts, write-offs, and delayed billings.\n• Price Elasticity of Demand: Segment-level testing of strategic price adjustments to optimize yield."
        },
        {
          heading: "4. How Rakiza Approaches It: Protecting Net Cash Flow",
          content: "We audit your active client database to map out margin leakage points. We design tiered pricing engines that protect your core margins while giving sales teams clean boundaries for negotiation, and we implement dynamic indexation formulas that protect long-term contracts from macroeconomic swings. You build customer trust while locking in clear gross profit."
        }
      ]
    },
    ar: {
      title: "استخبارات تسعير الخدمات: كيف تحقق النمو دون الإضرار بهوامش الربح الصافية؟",
      description: "منهجية هادئة لهيكلة الأسعار وحماية أرباحك الصافية من تقلبات العملة وبناء ثقة مستدامة مع عملائك.",
      category: "تحسين الإيرادات والتسعير",
      metrics: {
        stage: "نمو الخدمات والمنتجات",
        entity: "منشآت سريعة النمو",
        risk: "تآكل الأرباح بسبب التضخم",
        horizon: "حماية الربحية الفورية"
      },
      metricsLabels: {
        stage: "المرحلة المستهدفة",
        entity: "شكل المنشأة",
        risk: "الخطر الحرج",
        horizon: "أفق التركيز"
      },
      sections: [
        {
          heading: "١. التعريف التنفيذي: اقتناص الأرباح وليس مطاردة المبيعات العشوائية",
          content: "استخبارات تسعير الخدمات (Pricing Intelligence) هي الممارسة المنضبطة لمواءمة هيكل أسعارك مع القيمة الفعلية المقدمة للعميل، واستعداد الفئات المختلفة لدفع قيمتها، مع التكيف الفوري مع المتغيرات الاقتصادية وتكاليف التشغيل الديناميكية. وبدلاً من الاعتماد على معادلات التكلفة البسيطة أو محاكاة أسعار المنافسين بشكل أعمى، تعتمد استخبارات التسعير على تحليل البيانات لاقتناص أقصى هامش ربح ممكن في كل تعاقد وتحديد نقاط التسرب."
        },
        {
          heading: "٢. لماذا يمثل هذا الأمر أهمية قصوى؟ التسعير الثابت بمثابة حكم بطيء بالإعدام",
          content: "في الأسواق ذات التضخم المرتفع، يعد التسعير الثابت بمثابة حكم بطيء بالإعدام على المنشأة. إذا ارتفعت تكاليف تشغيلك بنسبة 30% بينما ظلت أسعارك ثابتة أو تم تحديثها بعد فوات الأوان، فأنت تقوم عملياً بدعم عملائك من صافي أرباحك الخاصة. النمو بدون استخبارات تسعير هو فخ خطير: قد تزداد مبيعاتك وحجم عملائك على الورق بينما تنزف السيولة نقدياً وتقترب شركتك من التعثر."
        },
        {
          heading: "٣. المؤشرات الحيوية التي يجب قياسها: تحليلات صحة هوامش الأرباح",
          content: "لبناء تحكم ديناميكي في التسعير، تركز ركيزة على ثلاثة محاور رئيسية للأداء:\n\n• مساهمة هامش الربح لكل عميل: فرز وتحليل أي العملاء يولد إيرادات مرتفعة ولكن بصافي ربح منعدم بسبب التكاليف الخدمية المخفية.\n• معدل تحقق السعر الفعلي: النسبة المئوية للسعر الافتراضي الذي تحصل عليه فعلياً بعد استبعاد الخصومات والإعفاءات غير المخطط لها.\n• مرونة الطلب السعرية: اختبار رد فعل شرائح العملاء المختلفة على التعديلات السعرية الاستراتيجية لتحقيق أقصى عائد مالي."
        },
        {
          heading: "٤. منهجية ركيزة في المعالجة: حماية صافي التدفق النقدي للشركة",
          content: "نقوم بفحص دقيق ومفصل لقاعدة بيانات عملائك وعقودك النشطة لتحديد نقاط تسرب الأرباح بدقة. نصمم محركات تسعير مرنة ومتدرجة تحمي هامش ربحك الأساسي مع إعطاء فريق المبيعات حدوداً واضحة للتفاوض، ونطور صيغاً ديناميكية لربط العقود طويلة الأجل بمؤشرات التضخم الكلية، لبناء ثقة مستدامة مع عملائك وحماية ربحية أعمالك."
        }
      ]
    }
  }
};

export function generateStaticParams() {
  return [
    { locale: "en", slug: "financial-visibility-for-smes" },
    { locale: "en", slug: "fractional-cfo-egypt-guide" },
    { locale: "en", slug: "pricing-intelligence-margin-growth" },
    { locale: "ar", slug: "financial-visibility-for-smes" },
    { locale: "ar", slug: "fractional-cfo-egypt-guide" },
    { locale: "ar", slug: "pricing-intelligence-margin-growth" }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const articleKey = slug as keyof typeof articlesData;
  const article = articlesData[articleKey];
  if (!article) return {};
  const localizedArticle = article[locale] || article.en;
  return createMetadata({
    locale,
    path: `/insights/${slug}`,
    title: `${localizedArticle.title} | Rakiza Insights`,
    description: localizedArticle.description
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  
  const articleKey = slug as keyof typeof articlesData;
  const article = articlesData[articleKey];
  if (!article) notFound();

  const localizedArticle = article[locale] || article.en;

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen pt-32 text-left rtl:text-right">
      <JsonLd data={articleSchema(localizedArticle.title, localizedArticle.description, `/${locale}/insights/${slug}`)} />
      
      <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="font-data text-xs text-[var(--gold-primary)] uppercase tracking-wider">
            {localizedArticle.category}
          </p>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] sm:text-6xl tracking-[-0.03em]">
            {localizedArticle.title}
          </h1>
          <p className="mt-8 text-lg font-light leading-8 text-[var(--text-secondary)] border-b border-[var(--border-faint)] pb-8">
            {localizedArticle.description}
          </p>
        </Reveal>

        {/* Executive Info Box */}
        <Reveal delay={0.05}>
          <div className="outer-shell mt-10">
            <div className="inner-core p-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-data text-xs">
              <div>
                <p className="text-[var(--text-tertiary)] uppercase tracking-wider">{localizedArticle.metricsLabels.stage}</p>
                <p className="mt-2 text-[var(--text-primary)] font-medium">{localizedArticle.metrics.stage}</p>
              </div>
              <div>
                <p className="text-[var(--text-tertiary)] uppercase tracking-wider">{localizedArticle.metricsLabels.entity}</p>
                <p className="mt-2 text-[var(--text-primary)] font-medium">{localizedArticle.metrics.entity}</p>
              </div>
              <div>
                <p className="text-[var(--text-tertiary)] uppercase tracking-wider">{localizedArticle.metricsLabels.risk}</p>
                <p className="mt-2 text-[var(--gold-primary)] font-medium">{localizedArticle.metrics.risk}</p>
              </div>
              <div>
                <p className="text-[var(--text-tertiary)] uppercase tracking-wider">{localizedArticle.metricsLabels.horizon}</p>
                <p className="mt-2 text-[var(--text-primary)] font-medium">{localizedArticle.metrics.horizon}</p>
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* Prose Section */}
        <div className="mt-14 space-y-12">
          {localizedArticle.sections.map((section, idx) => (
            <Reveal key={idx} delay={0.1 + idx * 0.05}>
              <section className="border-t border-[var(--border-faint)] pt-8">
                <h2 className="font-display text-2xl font-light text-[var(--text-primary)] tracking-[-0.02em] sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 text-[var(--text-secondary)] leading-8 font-light text-base whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* CTA section */}
        <Reveal delay={0.35} className="mt-16 border-t border-[var(--border-faint)] pt-12 flex flex-col items-center text-center">
          <p className="text-sm text-[var(--text-secondary)] font-light max-w-lg mb-8">
            {locale === "ar"
              ? "هل أنت مستعد لقياس وتحديد الجاهزية المالية لشركتك وتأمين أرقامك الاستراتيجية للمرحلة القادمة؟"
              : "Ready to diagnose your company's financial readiness and secure your strategic cash flow for the next stage of growth?"}
          </p>
          <Link 
            href={localizedPath(locale, "/tools")} 
            className="border border-[var(--gold-primary)] bg-[var(--gold-whisper)] text-[var(--gold-primary)] hover:bg-[var(--gold-primary)] hover:text-[var(--bg-void)] px-8 py-4 text-sm font-medium rounded-full transition duration-300 font-data uppercase tracking-wider"
          >
            {dict.insightsPage.cta}
          </Link>
        </Reveal>
      </article>
    </main>
  );
}
