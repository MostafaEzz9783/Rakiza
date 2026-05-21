export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const baseUrl = "https://rakiza.co";

export const seoKeywords = [
  "Financial Advisory Egypt",
  "Fractional CFO Egypt",
  "FP&A Consultant Egypt",
  "SME Financial Advisory",
  "Startup Finance Advisory",
  "Financial Modeling Egypt",
  "Business Valuation Egypt",
  "CFO services for SMEs",
  "Cash Flow Management Egypt",
  "Pricing Strategy Consulting",
  "Business Analytics Egypt",
  "الاستشارات المالية مصر",
  "مدير مالي جزئي مصر",
  "النمذجة المالية للشركات",
  "تقييم الشركات في مصر والخليج"
];

export const services = {
  en: [
    {
      slug: "fractional-cfo",
      title: "Fractional CFO",
      short: "Executive financial leadership without the overhead of a full-time CFO.",
      outcome: "Cash visibility, board-level reporting, decision rhythm, and tighter control.",
      search: "Fractional CFO Egypt",
      bullets: ["Financial operating cadence", "Cash flow governance", "Founder and board reporting"]
    },
    {
      slug: "fpa-consulting",
      title: "FP&A Consulting",
      short: "Forecasting, budgeting, variance analysis, and management reporting systems.",
      outcome: "A planning engine that connects commercial activity to margin and cash.",
      search: "FP&A Consultant Egypt",
      bullets: ["Budget architecture", "Rolling forecasts", "Variance and scenario analysis"]
    },
    {
      slug: "financial-modeling",
      title: "Financial Modeling",
      short: "Investor-grade models for growth, debt, fundraising, expansion, and control.",
      outcome: "Decisions backed by scenarios, assumptions, sensitivity, and unit economics.",
      search: "Financial Modeling Egypt",
      bullets: ["3-statement models", "Unit economics", "Scenario and sensitivity logic"]
    },
    {
      slug: "startup-finance",
      title: "Startup Finance",
      short: "Finance systems for fundraising, runway, pricing, hiring, and growth planning.",
      outcome: "A finance foundation that lets founders scale with investor confidence.",
      search: "Startup Finance Advisory",
      bullets: ["Runway planning", "Investor reporting", "Fundraising finance packs"]
    },
    {
      slug: "financial-valuation",
      title: "Financial Valuation",
      short: "Valuation support for startups, SMEs, M&A, investment rounds, and strategic planning.",
      outcome: "A defensible view of company value with clear assumptions and market logic.",
      search: "Business Valuation Egypt",
      bullets: ["DCF and comparables", "Investment memos", "Valuation narratives"]
    },
    {
      slug: "pricing-intelligence",
      title: "Pricing Intelligence",
      short: "Pricing diagnostics, elasticity thinking, margin protection, and revenue architecture.",
      outcome: "Better pricing decisions without sacrificing growth or customer trust.",
      search: "Pricing Strategy Consulting",
      bullets: ["Margin leakage maps", "Package design", "Pricing performance dashboards"]
    },
    {
      slug: "business-analytics",
      title: "Business Analytics",
      short: "BI dashboards and strategic reporting systems that turn financial data into action.",
      outcome: "Leadership teams see the business clearly before problems become expensive.",
      search: "Business Analytics Egypt",
      bullets: ["KPI architecture", "Executive dashboards", "Data quality controls"]
    },
    {
      slug: "accounting-systems",
      title: "Accounting Systems",
      short: "Accounting and financial infrastructure built for clean reporting and scale.",
      outcome: "Reliable numbers, faster closes, and fewer manual reporting bottlenecks.",
      search: "Accounting & Financial Infrastructure",
      bullets: ["Chart of accounts design", "Close process", "Reporting infrastructure"]
    }
  ],
  ar: [
    {
      slug: "fractional-cfo",
      title: "المدير المالي الاستشاري (Fractional CFO)",
      short: "قيادة مالية تنفيذية عليا دون تحمل التكاليف الباهظة لتعيين مدير مالي بدوام كامل.",
      outcome: "رؤية كاملة للسيولة، تقارير جاهزة لمجلس الإدارة والمستثمرين، وضبط مالي صارم.",
      search: "مدير مالي جزئي بمصر والخليج",
      bullets: ["إيقاع وتيرة العمل المالي", "حوكمة تدفقات النقدية ورقابتها", "تقارير المؤسسين وأعضاء الإدارة"]
    },
    {
      slug: "fpa-consulting",
      title: "استشارات التخطيط والتحليل المالي (FP&A)",
      short: "أنظمة التنبؤ المالي، إعداد الموازنات، تحليل الانحرافات، وتقارير الإدارة القيادية.",
      outcome: "محرك تخطيط متكامل يربط نشاطك التجاري والبيعي مباشرة بالهوامش والسيولة النقدية.",
      search: "استشاري FP&A في مصر",
      bullets: ["تأسيس هيكلية الموازنات المحددة", "تطوير نماذج التنبؤ المستمر", "تحليل الانحرافات والسيناريوهات البديلة"]
    },
    {
      slug: "financial-modeling",
      title: "النمذجة المالية التفاعلية (Financial Modeling)",
      short: "نماذج مالية احترافية تدعم جولات الاستثمار والتمويل البنكي والتوسع وإدارة الرقابة.",
      outcome: "قرارات استراتيجية مبنية على محاكاة السيناريوهات الحساسة واقتصاديات الوحدة الدقيقة.",
      search: "إعداد النماذج المالية بمصر",
      bullets: ["تأسيس القوائم المالية الثلاث الحيوية", "تحليل اقتصاديات الوحدة والربحية", "محاكاة السيناريوهات واختبار الحساسية"]
    },
    {
      slug: "startup-finance",
      title: "إدارة المالية للشركات الناشئة (Startup Finance)",
      short: "أنظمة مالية لتنظيم جولات الاستثمار، إدارة فترة الأمان المالي (Runway)، وهيكلة التسعير.",
      outcome: "تأسيس بنية مالية متينة تمنح مؤسسي الشركات القدرة على التوسع بثقة مطلقة أمام المستثمرين.",
      search: "استشارات مالية للشركات الناشئة",
      bullets: ["تخطيط فترة الأمان المالي (Runway)", "تقارير مستثمري الجولات التمويلية", "تجهيز حزم البيانات المالية للمستثمرين"]
    },
    {
      slug: "financial-valuation",
      title: "تقييم الشركات وحصص الاستثمار (Valuation)",
      short: "تقييم الشركات للاندماج والاستحواذ (M&A)، وجولات التمويل، والتخطيط الاستراتيجي العالي.",
      outcome: "تقدير عادل ومبرهن لقيمة المنشأة مبني على سيناريوهات تدفقات مبرهنة ومعايير السوق.",
      search: "تقييم الشركات والأصول بمصر",
      bullets: ["التقييم بخصم التدفقات (DCF) والمقارنات", "إعداد مذكرات الاستثمار الرسمية", "صياغة سرديات القيمة وتأكيد الفرضيات"]
    },
    {
      slug: "pricing-intelligence",
      title: "ذكاء واستراتيجيات التسعير (Pricing Intelligence)",
      short: "تشخيص مرونة الأسعار، حماية هوامش الربحية من التضخم، وهيكلة تعظيم الإيرادات المباشرة.",
      outcome: "تحسين قرارات التسعير لرفع الأرباح الصافية دون المخاطرة بنمو المبيعات أو ثقة عملائك.",
      search: "استشاري استراتيجيات تسعير بمصر",
      bullets: ["رسم خرائط تسرب الأرباح وهوامشها", "تصميم باقات الخدمات والمنتجات الاستراتيجية", "لوحات مراقبة كفاءة قرارات التسعير"]
    },
    {
      slug: "business-analytics",
      title: "تحليلات الأعمال وتقارير الـ BI",
      short: "لوحات تحليلات تفاعلية وأنظمة تقارير تحول البيانات المالية المعقدة إلى توجيهات عملية فورية.",
      outcome: "تمكين فريق القيادة من رؤية كفاءة أعمالهم بوضوح واستباق المشاكل قبل أن تصبح مكلفة.",
      search: "تحليل الأعمال والبيانات بمصر والخليج",
      bullets: ["تصميم وهيكلة مؤشرات الأداء (KPIs)", "تأسيس لوحات التحكم القيادية الحية", "ضوابط وتكامل جودة البيانات المالية"]
    },
    {
      slug: "accounting-systems",
      title: "تأسيس وهيكلة الأنظمة المحاسبية",
      short: "تطوير البنية التحتية المحاسبية للشركة لضمان تقارير نظيفة وسريعة وقابلة للتدقيق والتوسع.",
      outcome: "بيانات محاسبية خالية من الأخطاء، وإغلاقات شهرية سريعة، وتقليل المعاملات اليدوية البطيئة.",
      search: "هيكلة وتأسيس الأنظمة المحاسبية",
      bullets: ["تصميم وهيكلة دليل الحسابات المتكامل", "تنظيم وتسريع عملية الإغلاق المالي", "تأسيس وتطوير البنية التحتية للتقارير"]
    }
  ]
};

export const industries = {
  en: [
    {
      slug: "real-estate",
      title: "Real Estate",
      challenge: "Projects scale faster than cash controls, collections, and margin visibility.",
      focus: ["Project cash flow", "Unit profitability", "Sales velocity reporting"]
    },
    {
      slug: "fmcg",
      title: "FMCG",
      challenge: "Distribution complexity and pricing pressure can hide true channel profitability.",
      focus: ["SKU margin", "Trade spend control", "Channel analytics"]
    },
    {
      slug: "f-and-b",
      title: "F&B",
      challenge: "Growth across branches can weaken cost control, pricing discipline, and working capital.",
      focus: ["Branch economics", "Menu engineering", "Inventory and cash cycle"]
    },
    {
      slug: "startups",
      title: "Startups",
      challenge: "Founders need runway clarity, investor-grade reporting, and scalable finance systems.",
      focus: ["Runway", "Fundraising models", "Board reporting"]
    },
    {
      slug: "smes",
      title: "SMEs",
      challenge: "Mature revenue often runs on immature financial infrastructure.",
      focus: ["Profitability", "Cash control", "Management reporting"]
    }
  ],
  ar: [
    {
      slug: "real-estate",
      title: "العقارات والمقاولات",
      challenge: "تتوسع المشاريع بشكل أسرع من وتيرة الرقابة على النقدية، والتحصيلات، ووضوح هوامش الأرباح.",
      focus: ["التدفق النقدي للمشاريع", "ربحية الوحدات العقارية الفردية", "تقارير سرعة المبيعات والتحصيلات"]
    },
    {
      slug: "fmcg",
      title: "السلع الاستهلاكية (FMCG)",
      challenge: "قد تتسبب تعقيدات سلاسل التوزيع وضغوط الأسعار المتنافسة في إخفاء الربحية الفعلية للمنتجات والقنوات.",
      focus: ["ربحية السلعة الفردية (SKU Margin)", "ضبط وتوجيه نفقات وحوافز التوزيع", "تحليلات كفاءة قنوات البيع"]
    },
    {
      slug: "f-and-b",
      title: "الأغذية والمشروبات (F&B)",
      challenge: "التوسع السريع للفروع قد يؤدي إلى إضعاف الرقابة على التكاليف، وانضباط تسعير الأغذية، ودورة رأس المال.",
      focus: ["الجدوى الاقتصادية لكل فرع", "تحليل وهندسة قائمة المأكولات والمشروبات", "إدارة دورة المخزون والنقدية"]
    },
    {
      slug: "startups",
      title: "الشركات الناشئة (Startups)",
      challenge: "المؤسسون بحاجة ماسة لرؤية واضحة لفترة الأمان المالي، وتقارير جاهزة للمستثمرين، وأنظمة مالية للتوسع.",
      focus: ["إدارة وتخطيط فترة الأمان المالي (Runway)", "إعداد نماذج ومستندات جولات التمويل", "صياغة تقارير واجتماعات مجلس الإدارة"]
    },
    {
      slug: "smes",
      title: "الشركات المتوسطة والمنشآت (SMEs)",
      challenge: "الإيرادات الكبيرة والناضجة غالباً ما تدار وتعمل ببنية تحتية محاسبية ومالية قديمة ومحدودة القدرات.",
      focus: ["تحليل وضبط مستويات الربحية الإجمالية", "مراقبة والتحكم في السيولة النقدية", "تطوير تقارير الإدارة الاستراتيجية الفورية"]
    }
  ]
};

export const tools = [
  "Financial Health Score",
  "Cash Flow Calculator",
  "Growth Readiness Score",
  "Profitability Calculator",
  "Pricing Health Checker"
];

export const faqs = {
  en: [
    {
      question: "What does Rakiza do?",
      answer:
        "Rakiza is a Growth & Financial Advisory firm helping SMEs and growth-stage companies build financial systems, improve profitability, optimize pricing, and gain strategic visibility."
    },
    {
      question: "Is Rakiza an accounting office?",
      answer:
        "No. Rakiza can strengthen accounting infrastructure, but the core work is strategic finance: CFO-as-a-Service, FP&A, valuation, financial modeling, business analytics, and growth systems."
    },
    {
      question: "Who is Rakiza best suited for?",
      answer:
        "Rakiza is built for SMEs above roughly 20M EGP in annual revenue, founder-led companies, and growth-stage startups across Egypt, GCC, and MENA."
    },
    {
      question: "What is the SME Financial Health Check?",
      answer:
        "It is a diagnostic lead magnet that scores cash visibility, reporting maturity, pricing discipline, profitability, and growth readiness, then recommends the next advisory path."
    }
  ],
  ar: [
    {
      question: "ما الذي تقوم به ركيزة للاستشارات تحديداً؟",
      answer:
        "ركيزة هي شركة استشارات مالية وتطوير أنظمة نمو، تساعد الشركات المتوسطة والناشئة في مرحلة التوسع على بناء أنظمتها المالية، ورفع الربحية، وتحسين التسعير، والحصول على رؤية استراتيجية واضحة."
    },
    {
      question: "هل ركيزة مكتب محاسبة أو مراجعة حسابات؟",
      answer:
        "لا. نحن نقوم بتأسيس وتطوير البنية التحتية المحاسبية للشركات، ولكن جوهر عملنا يتركز في المالية الاستراتيجية: إدارة الإدارة المالية الاستشارية (CFO-as-a-Service)، والتخطيط FP&A، والتقييم، والنمذجة، واستخبارات التسعير."
    },
    {
      question: "من هم العملاء المثاليون لركيزة؟",
      answer:
        "صُممت خدمات ركيزة للشركات المتوسطة التي تتجاوز إيراداتها السنوية حوالي 20 مليون جنيه مصري، والشركات التي يقودها المؤسسون، والشركات الناشئة في مراحل النمو المتقدم في مصر، والخليج العربي، والشرق الأوسط."
    },
    {
      question: "ما هو الفحص المالي للشركات (SME Financial Health Check)؟",
      answer:
        "هو نظام تشخيصي متقدم يقيس نضج ووضوح التدفق النقدي، وجودة التقارير المرفوعة للقيادة، وانضباط التسعير، وإدارة رأس المال، ومن ثم يقدم خطة عمل وتوصيات مباشرة للمسار الاستشاري الأنسب."
    }
  ]
};

export function localizedPath(locale: Locale, path = "") {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleaned === "/" ? "" : cleaned}`;
}
