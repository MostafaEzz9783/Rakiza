import { Locale } from "./site";

export const translations = {
  en: {
    nav: {
      approach: "Approach",
      advisory: "Advisory",
      industries: "Industries",
      insights: "Insights",
      foundingAccess: "Founding Access",
      strategyCall: "Strategy Call",
      langSwitch: "AR"
    },
    hero: {
      badge: "Financial Intelligence · Cairo — Dubai — Riyadh",
      title: "Clarity is a competitive advantage.",
      subtitle: "Most businesses don't fail from lack of growth. They fail from lack of visibility.",
      metrics: [
        "Close Cycle · 18 days -> 6 days",
        "Forecast Accuracy · 61% -> 94%",
        "Cash Visibility · 30 days ahead"
      ],
      ctaFounding: "Founding Client Access",
      ctaStrategy: "Strategy Call"
    },
    signalBar: "Serving scaling companies across Egypt, GCC & MENA ——— EGP 20M+ Revenue · Growth-Stage · Founder-Led",
    problem: {
      title: "You're growing. But you're flying without instruments.",
      badge: "No real-time cash position · Reporting arrives 3 weeks late · P&L doesn't match decisions",
      para1: "Cash flow is estimated. Pricing is instinct. Margins are unclear until the quarter closes. Your reporting arrives weeks after the decisions that needed it.",
      para2: "You have revenue. You have momentum. What you don't have is the financial infrastructure to see, control, and compound it. That gap widens every month you scale."
    },
    osPanel: {
      badge: "Financial Visibility Infrastructure",
      title: "Rakiza turns fragmented financial data into clear leadership intelligence.",
      subtitle: "Not reports. Not spreadsheets. A living financial operating system - built for how your business actually scales.",
      systemTitle: "Rakiza Intelligence OS",
      statusLive: "Live · Updated 07:42 UTC",
      cols: {
        label: "Label",
        current: "Current",
        prior: "Prior",
        delta: "Delta",
        status: "Status"
      },
      rows: {
        "Cash Conversion Cycle": "Cash Conversion Cycle",
        "Forecast Confidence": "Forecast Confidence",
        "Gross Margin Target": "Gross Margin Target",
        "Reporting Latency": "Reporting Latency",
        "Pricing Leakage Risk": "Pricing Leakage Risk",
        "Monthly Close Day": "Monthly Close Day",
        "Working Capital Ratio": "Working Capital Ratio",
        "Runway": "Runway",
        "days": "days",
        "months": "months",
        "improved": "IMPROVED",
        "onTarget": "ON TARGET",
        "abovePlan": "ABOVE PLAN",
        "resolved": "RESOLVED",
        "monitored": "MONITORED",
        "controlled": "CONTROLLED",
        "accelerated": "ACCELERATED",
        "healthy": "HEALTHY",
        "extended": "EXTENDED",
        "low": "LOW",
        "elevated": "ELEVATED"
      }
    },
    servicesSection: {
      badge: "What We Build",
      title: "Financial infrastructure for the decisions ahead."
    },
    intelligence: {
      badge: "Financial Control Metrics",
      title: "Your business already generates the data. We build the systems that make it speak.",
      para1: "Most scaling companies are not short on information. They are short on the infrastructure to transform that information into leadership signal.",
      para2: "Rakiza builds the layer between your operations and your decision-making - so that every financial metric arrives with context, not noise.",
      cols: {
        metric: "Metric",
        status: "Status",
        signal: "Signal"
      },
      rows: {
        "Forecast Accuracy": "Forecast Accuracy",
        "Gross Margin": "Gross Margin",
        "Monthly Close": "Monthly Close",
        "priorQuarter": "▼ -8 vs prior quarter",
        "threshold90": "▲ Above 90% threshold",
        "benchmark": "● Sector benchmark: 58-65%",
        "from11days": "▲ From 11 days at intake",
        "monitoredWeekly": "██ Monitored weekly",
        "within5days": "✓ Within 5-day target",
        "healthyThreshold": "● Healthy threshold: >1.5x",
        "extendedFrom7": "▲ Extended from 7 months"
      }
    },
    controlStatement: {
      title: "We don't deliver reports. We build your financial operating rhythm.",
      para1: "The difference between a growing company and a scaling company is financial control.",
      para2: "Not spreadsheets. Not monthly PDFs sent on the 15th. A living system of visibility, forecasting, and strategic clarity that runs before decisions are made - not after.",
      para3: "When financial infrastructure is in place, leadership stops reacting to the past and starts positioning for the future."
    },
    scalingArc: {
      "01": "Visibility Without Control",
      "01Copy": "Is Just Awareness.",
      "02": "Control Without Intelligence",
      "02Copy": "Is Just Process.",
      "03": "Intelligence With Systems",
      "03Copy": "Is Compounding Advantage."
    },
    foundingAccess: {
      badge: "Founding Client Access · By Qualification",
      title: "Built for businesses ready to be seen clearly.",
      para1: "Rakiza accepts a limited number of founding clients each quarter.",
      para2: "Founding access includes a private Financial Control Readiness diagnostic, an advisory path recommendation, and direct access to the founding team - not an account manager.",
      para3: "This is not a subscription. This is not a demo. This is the beginning of operational clarity.",
      stageTitle: "Company stage",
      challengeTitle: "Primary financial challenge",
      emailLabel: "Executive email",
      emailPlaceholder: "Your business email",
      cta: "Request Diagnostic Access",
      note: "Applications are reviewed personally. Founding client positions are limited per quarter.",
      stages: [
        "Growth-stage startup",
        "Established SME (EGP 20M+ revenue)",
        "Real Estate / FMCG / F&B operator",
        "Other"
      ],
      challenges: [
        "No visibility into cash flow or runway",
        "Forecasts exist but aren't trusted by leadership",
        "Pricing feels disconnected from actual margins",
        "Reporting is slow and not board-ready",
        "Preparing for fundraise or valuation"
      ]
    },
    diagnosticForm: {
      badge: "Financial Control Readiness",
      title: "Private advisory intake",
      subtitle: "A qualification flow for companies that need financial visibility before the next stage of scale.",
      scoreLabel: "Score",
      stageLabel: "Company stage",
      stageValue: "Established SME (20M+ EGP revenue)",
      challengeLabel: "Primary challenge",
      challengeValue: "Cash flow, forecasting, pricing, reporting",
      companyNameLabel: "Company name",
      companyNamePlaceholder: "Company legal or trade name",
      emailLabel: "Executive email",
      emailPlaceholder: "name@company.com",
      fields: {
        cash: "Cash visibility",
        reporting: "Reporting maturity",
        pricing: "Pricing discipline",
        profit: "Profitability control",
        growth: "Growth readiness"
      },
      ctaDefault: "Request Diagnostic Access",
      ctaSubmitted: "Access Request Captured",
      successNote: "Your request has been captured. All submissions are reviewed personally by Rakiza principals."
    },
    toolsPage: {
      title: "Financial diagnostics before advisory.",
      subtitle: "Rakiza tools turn early conversations into structured financial intelligence. Each tool can feed a CRM, email automation, and advisory qualification workflow."
    },
    bookCallPage: {
      title: "Book a Strategy Call.",
      subtitle: "Book a strategy call with Rakiza to discuss CFO-as-a-Service, FP&A, financial systems, valuation, pricing, and growth advisory.",
      calendlySlot: "Calendly Integration Slot",
      calendlyTitle: "Strategy Call Calendar",
      calendlyDesc: "Replace this surface with the official Calendly inline widget when the scheduling URL is available."
    },
    insightsPage: {
      title: "Insights built for executives and answer engines.",
      subtitle: "Clear, structured thinking for founders and leadership teams: definitions, frameworks, diagnostics, and practical decision rules.",
      badge: "Rakiza Insight",
      cta: "Apply for a Financial Health Check"
    },
    servicesPage: {
      title: "Financial advisory services built as growth infrastructure.",
      subtitle: "Rakiza connects strategic finance, analytics, and operating cadence so leadership teams can manage cash, pricing, profitability, and growth with fewer blind spots.",
      outcomeLabel: "What this unlocks",
      engagementTitle: "Engagement structure",
      steps: ["Diagnostic", "System Design", "Operating Cadence"],
      stepDesc: "A focused advisory stage that turns financial ambiguity into practical decisions.",
      ctaWaitingList: "Join the Waiting List",
      viewService: "View service"
    },
    footer: {
      tagline: "Financial Intelligence for Scaling Companies.",
      services: "Services",
      presence: "Presence",
      contact: "Contact",
      cities: "Cairo · Dubai · Riyadh",
      call: "Strategy Call",
      rights: "© 2025 Rakiza. All rights reserved."
    }
  },
  ar: {
    nav: {
      approach: "نهجنا",
      advisory: "الخدمات الاستشارية",
      industries: "القطاعات",
      insights: "التحليلات",
      foundingAccess: "دخول الشركاء المؤسسين",
      strategyCall: "مكالمة استراتيجية",
      langSwitch: "EN"
    },
    hero: {
      badge: "الذكاء المالي · القاهرة — دبي — الرياض",
      title: "الوضوح ميزة تنافسية.",
      subtitle: "معظم الشركات لا تفشل بسبب نقص النمو. بل تفشل بسبب غياب الرؤية والرقابة المالية.",
      metrics: [
        "دورة الإغلاق · 18 يوماً -> 6 أيام",
        "دقة التنبؤ · 61% -> 94%",
        "رؤية السيولة النقدية · 30 يوماً مقدماً"
      ],
      ctaFounding: "دخول الشركاء المؤسسين",
      ctaStrategy: "مكالمة استراتيجية"
    },
    signalBar: "نخدم الشركات النامية في مصر والخليج والشرق الأوسط ——— إيرادات +20 مليون جم · مرحلة نمو · بقيادة المؤسسين",
    problem: {
      title: "أنت تنمو بسرعة، لكنك تحلق بدون مؤشرات قياس.",
      badge: "لا توجد رؤية فورية للسيولة · التقارير تتأخر 3 أسابيع · الأرباح والخسائر لا تطابق القرارات الحية",
      para1: "التدفق النقدي يعتمد على التقديرات التقريبية. التسعير مبني على الحدس والغريزة. هوامش الربح الحقيقية غير واضحة حتى إغلاق الربع المالي. تصل تقاريرك بعد أسابيع من القرارات المصيرية التي كانت بحاجة إليها.",
      para2: "لديك إيرادات، ولديك زخم قوي. لكن ما تفتقر إليه هو البنية التحتية المالية لرصد هذا الزخم، والتحكم فيه، ومضاعفته. وهذه الفجوة تتسع مع كل شهر تتوسع فيه أعمالك."
    },
    osPanel: {
      badge: "البنية التحتية للرؤية المالية",
      title: "ركيزة تحول البيانات المالية المشتتة إلى معلومات ذكاء قيادية واضحة.",
      subtitle: "ليست مجرد تقارير أو جداول بيانات ميتة. بل نظام تشغيل مالي حي ونشط - صُمم خصيصاً لطبيعة نمو شركتك الحقيقي.",
      systemTitle: "نظام تشغيل ركيزة المالي (Rakiza OS)",
      statusLive: "مباشر · تحديث 07:42 UTC",
      cols: {
        label: "المؤشر المالي",
        current: "الحالي",
        prior: "السابق",
        delta: "التغير",
        status: "الحالة"
      },
      rows: {
        "Cash Conversion Cycle": "دورة تحويل النقدية",
        "Forecast Confidence": "موثوقية التنبؤات المادية",
        "Gross Margin Target": "مستهدف هامش الربح الإجمالي",
        "Reporting Latency": "تأخر إعداد التقارير المالية",
        "Pricing Leakage Risk": "مخاطر تسرب أرباح التسعير",
        "Monthly Close Day": "يوم الإغلاق الشهري",
        "Working Capital Ratio": "نسبة رأس المال العامل",
        "Runway": "فترة الأمان المالي (Runway)",
        "days": "يوم",
        "months": "أشهر",
        "improved": "تم التحسين",
        "onTarget": "على المستهدف",
        "abovePlan": "فوق الخطة",
        "resolved": "تم الحل",
        "monitored": "تحت المراقبة",
        "controlled": "مسيطر عليه",
        "accelerated": "تم التسريع",
        "healthy": "صحي وآمن",
        "extended": "تم التمديد",
        "low": "منخفض",
        "elevated": "مرتفع"
      }
    },
    servicesSection: {
      badge: "ما نقوم ببنائه وتأسيسه",
      title: "بنية تحتية مالية للقرارات الاستراتيجية القادمة."
    },
    intelligence: {
      badge: "مؤشرات الرقابة والتحكم المالي",
      title: "عملك يولد البيانات بالفعل. نحن نبني الأنظمة المتقدمة التي تجعلها تتحدث بوضوح.",
      para1: "معظم الشركات النامية لا تعاني من نقص المعلومات؛ بل تفتقر إلى البنية التحتية القادرة على تحويل تلك المعلومات الكثيفة إلى إشارات قيادية واضحة لصناعة القرار.",
      para2: "تبني ركيزة الطبقة الفاصلة والذكية بين عملياتك اليومية وقمة قيادة الشركة - بحيث تصلك كل المؤشرات المالية بسياقها الكامل والهادف، دون تشويش.",
      cols: {
        metric: "مؤشر القياس",
        status: "الحالة",
        signal: "الإشارة القيادية"
      },
      rows: {
        "Forecast Accuracy": "دقة التوقعات",
        "Gross Margin": "هامش الربح الإجمالي",
        "Monthly Close": "الإغلاق الشهري",
        "priorQuarter": "▼ -8 أيام مقارنة بالربع السابق",
        "threshold90": "▲ فوق الحد الأدنى المستهدف 90%",
        "benchmark": "● المعيار القطاعي: 58-65%",
        "from11days": "▲ تم التقليص من 11 يوماً عند التأسيس",
        "monitoredWeekly": "██ يراقب أسبوعياً بدقة",
        "within5days": "✓ ضمن مستهدف الـ 5 أيام",
        "healthyThreshold": "● النطاق الآمن: أكبر من 1.5x",
        "extendedFrom7": "▲ تم التمديد والتأمين من 7 أشهر"
      }
    },
    controlStatement: {
      title: "نحن لا نرسل تقارير جامدة. نحن نؤسس إيقاع تشغيلك المالي الحي.",
      para1: "الفرق الحقيقي بين الشركة التي تعيش مجرد نمو عشوائي وتلك التي تتوسع بنظام مؤسسي هو الرقابة المالية الصارمة.",
      para2: "ليست مجرد جداول أرقام إكسل أو ملفات PDF ترسل في منتصف الشهر. بل نظام حي متكامل للرؤية الفورية، والتنبؤ المالي، والوضوح الاستراتيجي الذي يعمل قبل اتخاذ القرارات - لا بعدها.",
      para3: "عندما تكتمل البنية التحتية المالية لشركتك، يتوقف فريق القيادة عن ردود الأفعال تجاه الماضي ويبدأ في توجيه دفة المستقبل."
    },
    scalingArc: {
      "01": "الرؤية بدون رقابة",
      "01Copy": "هي مجرد إدراك متأخر.",
      "02": "الرقابة بدون ذكاء مالي",
      "02Copy": "هي مجرد إجراءات روتينية.",
      "03": "الذكاء المالي المدعوم بالأنظمة",
      "03Copy": "هو ميزة تنافسية مضاعفة ومستمرة."
    },
    foundingAccess: {
      badge: "دخول الشركاء المؤسسين · بناءً على التأهيل والاستحقاق",
      title: "صُمم خصيصاً للشركات الجاهزة للرؤية بوضوح متناهٍ.",
      para1: "تقبل شركة ركيزة عدداً محدوداً ومختاراً بعناية من الشركاء المؤسسين في كل ربع عام.",
      para2: "يشمل الدخول كشريك مؤسس تشخيصاً خاصاً ودقيقاً لمدى جاهزية الرقابة المالية لشركتك، وتوصية بمسار الاستشارات المناسب، وتواصلاً مباشراً مع فريق الشركاء المؤسسين لركيزة - وليس مجرد مدير حسابات تقليدي.",
      para3: "هذا ليس اشتراكاً شهرياً، وليس مجرد عرض توضيحي. هذه هي البداية الحقيقية للوضوح التشغيلي والتحكم الكامل في أرقامك.",
      stageTitle: "مرحلة الشركة الحالية",
      challengeTitle: "التحدي المالي الرئيسي لشركتك",
      emailLabel: "البريد الإلكتروني للتنفيذي",
      emailPlaceholder: "البريد الإلكتروني للعمل",
      cta: "طلب دخول التشخيص المالي الخاص",
      note: "تتم مراجعة الطلبات شخصياً وبدقة عالية. مقاعد الشركاء المؤسسين محدودة للغاية في كل ربع عام.",
      stages: [
        "شركة ناشئة في مرحلة نمو متسارع",
        "شركة متوسطة قائمة (عوائد +20 مليون جنيه)",
        "مشغل قطاع (عقارات / سلع استهلاكية / أغذية ومشروبات)",
        "أخرى"
      ],
      challenges: [
        "غياب الرؤية الكاملة للتدفق النقدي وفترة الأمان المالي",
        "التوقعات المالية موجودة ولكنها غير موثوقة للقيادة",
        "التسعير الحالي يبدو منفصلاً تماماً عن الهوامش الحقيقية",
        "التقارير المالية بطيئة وغير جاهزة للعرض على مجلس الإدارة",
        "الاستعداد لجولة تمويلية قريبة أو تقييم مالي استراتيجي"
      ]
    },
    diagnosticForm: {
      badge: "جاهزية الرقابة والتحكم المالي",
      title: "طلب الانضمام الاستشاري الخاص",
      subtitle: "نموذج تأهيل مخصص للشركات القيادية التي تحتاج إلى رؤية مالية ثاقبة قبل الانتقال إلى المرحلة التالية من التوسع والنمو.",
      scoreLabel: "النتيجة",
      stageLabel: "مرحلة الشركة",
      stageValue: "شركة قائمة ومستقرة (عوائد +20 مليون جم)",
      challengeLabel: "التحدي الرئيسي",
      challengeValue: "التدفق النقدي، التنبؤ، التسعير، إعداد التقارير",
      companyNameLabel: "اسم الشركة",
      companyNamePlaceholder: "الاسم القانوني أو التجاري للمنشأة",
      emailLabel: "البريد الإلكتروني للتنفيذي",
      emailPlaceholder: "name@company.com",
      fields: {
        cash: "رؤية ومراقبة السيولة النقدية",
        reporting: "نضج وجودة التقارير المالية",
        pricing: "انضباط سياسة التسعير",
        profit: "التحكم في هوامش الربحية",
        growth: "جاهزية البنية التحتية للنمو"
      },
      ctaDefault: "طلب تشخيص الجاهزية والاتصال",
      ctaSubmitted: "تم استلام طلب التشخيص بنجاح",
      successNote: "لقد تم تسجيل طلبك بنجاح. تتم مراجعة جميع الطلبات بعناية وبشكل شخصي ومباشر من قبل شركاء ركيزة."
    },
    toolsPage: {
      title: "التشخيص والتحليل المالي قبل الاستشارة.",
      subtitle: "أدوات ركيزة التفاعلية تحول محادثاتنا الأولى إلى ذكاء مالي مهيكل. كل أداة صممت لتتكامل مع قاعدة البيانات، أتمتة الرسائل، ومسارات التأهيل الاستشاري لعملائنا الكبار."
    },
    bookCallPage: {
      title: "احجز مكالمتك الاستراتيجية الآن.",
      subtitle: "احجز مكالمة عمل استراتيجية مباشرة مع ركيزة لمناقشة خدمات CFO-as-a-Service، وهيكلة FP&A، والأنظمة المالية، والتقييم الاستراتيجي، والتسعير الذكي.",
      calendlySlot: "مساحة تكامل تطبيق Calendly",
      calendlyTitle: "جدول المكالمات الاستراتيجية المباشر",
      calendlyDesc: "سيتم استبدال هذه المساحة فوراً بنافذة Calendly التفاعلية المباشرة بمجرد تزويدنا برابط جدول المواعيد الرسمي الخاص بكم."
    },
    insightsPage: {
      title: "تحليلات عميقة صيغت للتنفيذيين ومحركات الإجابة الذكية.",
      subtitle: "أفكار وأطر عمل واضحة ومهيكلة للمؤسسين وفرق القيادة: تعريفات استراتيجية، أدوات تشخيصية، وقواعد عملية لصناعة القرار المالي الجريء.",
      badge: "تحليلات ركيزة",
      cta: "قدم الآن للحصول على فحص مالي شامل لشركتك"
    },
    servicesPage: {
      title: "خدمات استشارية مالية صممت كبنية تحتية للنمو والتوسع المأمون.",
      subtitle: "تربط ركيزة التمويل الاستراتيجي، والتحليلات المتقدمة، وإيقاع التشغيل المستمر لتمكين فرق القيادة من إدارة النقد، والتسعير، والربحية بأقل قدر من النقاط العمياء.",
      outcomeLabel: "ما تفتحه وتضمنه هذه الخدمة لشركتك",
      engagementTitle: "هيكل وآلية العمل الاستشاري معنا",
      steps: ["التشخيص والتقييم المالي", "تأسيس وتصميم النظام المالي", "إيقاع التشغيل والمتابعة المستمرة"],
      stepDesc: "مرحلة استشارية مركزة تحول الغموض المالي والتشويش إلى قرارات عملية قاطعة.",
      ctaWaitingList: "انضم إلى قائمة الانتظار للشركاء",
      viewService: "تفاصيل الخدمة الاستشارية"
    },
    footer: {
      tagline: "الذكاء المالي الرائد للشركات النامية والمتوسعة.",
      services: "الخدمات الاستشارية",
      presence: "التواجد والانتشار",
      contact: "الاتصال والتواصل",
      cities: "القاهرة · دبي · الرياض",
      call: "مكالمة استراتيجية مباشرة",
      rights: "© 2025 ركيزة للاستشارات المالية. جميع الحقوق محفوظة."
    }
  }
};

export function getDictionary(locale: Locale) {
  return translations[locale] || translations.en;
}
