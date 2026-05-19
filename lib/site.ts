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
  "Business Analytics Egypt"
];

export const services = [
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
];

export const industries = [
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
];

export const tools = [
  "Financial Health Score",
  "Cash Flow Calculator",
  "Growth Readiness Score",
  "Profitability Calculator",
  "Pricing Health Checker"
];

export const faqs = [
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
];

export function localizedPath(locale: Locale, path = "") {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleaned === "/" ? "" : cleaned}`;
}
