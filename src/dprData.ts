/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DPRSection {
  id: string;
  title: string;
  subtitle: string;
  category: 'Strategic' | 'Market' | 'Operational' | 'Financial' | 'Risk';
  content: string[];
  tables?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  }[];
  bulletPoints?: string[];
  insights?: string[];
}

export const AARANYA_DPR_DATA: DPRSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    subtitle: "DPR & Bank Loan Proposal Underwriting Dossier",
    category: "Strategic",
    content: [
      "AARANYA™ is a premium, technology-enabled direct-to-consumer (D2C) Hair Transformation venture designed to address the highly underserved premium botanical scalp and hair health segment in India. Operating at the intersection of supercritical clinical botany and advanced computer vision diagnostics, the brand provides safe, scientifically validated, and highly personalized alternatives to synthetic hair treatments.",
      "The promoter, a first-generation entrepreneur with strong business acumen and access to a world-class advisory board of Ayurvedic doctors, cosmetic chemists, and digital marketers, is seeking an INR 50,00,000 (INR 5.0 Million / Fifty Lakhs) Business Expansion Term Loan. This credit facility will fund high-yield supercritical extraction capital expenditure, inventory scaling, proprietary scalp analysis technology, and localized omnichannel beauty lounges.",
      "Unlike standard e-commerce brands, AARANYA™ enforces a multi-channel ecosystem featuring our flagship Rosemary & Bhringraj Hair Oil, an automated AI Scalp Analysis scan, custom WhatsApp Hair Coaching, and a localized community-led affiliate program. This report provides conservative, multi-scenario financial forecasts, rigorous competitor comparisons, and direct risk-mitigation metrics designed to provide Indian banking officers with a low-risk, collateral-secure underwriting landscape."
    ],
    bulletPoints: [
      "Total Loan Request: INR 50,00,000 (Fifty Lakhs) under Term Loan & Cash Credit guidelines.",
      "Key Collateral & Coverage: GMP-certified machinery, CO₂ extraction chambers, and solid corporate guarantees.",
      "Target Segment: Women aged 22-45 in Urban Tier-1 and Tier-2 Indian cities seeking clean luxury solutions.",
      "Principal Amortization Schedule: 18 Months conservative payback with a steady-state Debt Service Coverage Ratio (DSCR) of 2.85x."
    ],
    insights: [
      "Financial Conservatism: All projections discount high-volume speculation, relying on an initial customer acquisition cost (CAC) of INR 650 with a lifetime value (LTV) multiple of 4.5x.",
      "Underwriting Viability: Interest coverage ratio sits comfortably at 6.2x, insulating the facility against unexpected operational overheads."
    ]
  },
  {
    id: "company-overview",
    title: "2. Corporate & Brand Architecture",
    subtitle: "Mission, Vision & Core Strategic Objectives",
    category: "Strategic",
    content: [
      "AARANYA™ is legally constituted as a high-growth consumer products enterprise. The brand's foundational ethos is encapsulated in its corporate tagline: 'Rooted in Nature. Crafted for Confidence.'",
      "Our corporate mission is to dismantle the 'one-size-fits-all' model of mass hair care by delivering clinical botanical elixirs validated by advanced artificial intelligence, while actively fostering financial independence among Indian women through our Certified Consultant Affiliate Network.",
      "Our long-term 10-year vision is to position AARANYA™ as India's premier global luxury export in modern wellness—representing the botanical equivalence of Estée Lauder and the structural execution of a modern consumer technology platform."
    ],
    bulletPoints: [
      "Vision: To achieve pan-Asian market leadership in the clean premium beauty sector by 2031, capturing a 4.5% share of India's premium hair care segment.",
      "Mission: Combining supercritical carbon dioxide (CO₂) botanical extraction with real-time smartphone scalp analysis, ensuring transparent, clinical, synthetic-free transformations.",
      "Short-Term Objective (12-18 Months): Secure production facilities, achieve GMP certification, complete 10,000 verified 90-day patient hair transformations, and achieve operational break-even.",
      "Long-Term Objective (36-60 Months): Build a robust, conservative network of 5,000 certified affiliates, establish 15 retail experience lounges, and initiate international exports to UAE and Southeast Asia."
    ]
  },
  {
    id: "industry-analysis",
    title: "3. Industry & Market Landscape Research",
    subtitle: "Traction Metrics of India's Premium Hair Care Sector",
    category: "Market",
    content: [
      "The Indian hair care market is currently valued at approximately INR 28,000 Crores (USD 3.4 Billion) and is expanding at a Compound Annual Growth Rate (CAGR) of 8.2%. Within this broader market, the 'Premium Clean Cosmetics & Hair Therapeutics' sub-segment is growing at an unprecedented CAGR of 21.4%, driven by rapid urban premiumization, escalating disposable incomes, and a sharp consumer migration away from paraben-heavy synthetic formulas.",
      "Macroeconomic drivers reveal that modern urban consumers are suffering from increased scalp conditions and telogen effluvium (hair thinning) due to environmental stress, hard water, and aggressive heat styling. However, the existing market remains polarized: on one end, mass-market herbal hair oils offer low-efficacy, greasy formulas; on the other, premium international clinic treatments remain financially inaccessible and chemically intense.",
      "This creates a massive market vacuum for a scientifically-grounded, premium natural option that provides clinical-grade results at an accessible luxury price point. AARANYA™ directly captures this market gap."
    ],
    tables: [
      {
        headers: ["Market Segment", "Annual Value (INR)", "Projected 5-Yr CAGR", "Primary Consumer Pain Point"],
        rows: [
          ["Mass-Market Herbal Oils", "INR 12,000 Crores", "4.1%", "Low active ingredient potency, greasy feel, cheap branding"],
          ["Synthetic Anti-Hairfall Shampoos", "INR 9,500 Crores", "6.5%", "Harsh sulfates, scalp dehydration, temporary chemical coating"],
          ["Premium Clean Hair Care (D2C)", "INR 4,500 Crores", "21.4%", "Lack of scientific backing, inconsistent personalization"],
          ["Clinical Scalp Treatments", "INR 2,000 Crores", "15.0%", "Extremely high cost, synthetic ingredients, clinic visits required"]
        ],
        caption: "Table 3.1: Segmented Analysis of the Indian Hair Care Industry (Source: Industry Estimates / KPMG Beauty Reports)"
      }
    ]
  },
  {
    id: "competitor-analysis",
    title: "4. Competitive Landscape & Market Differentiation",
    subtitle: "Rigorously Benchmarked against Major Indian Players",
    category: "Market",
    content: [
      "AARANYA™'s competitive strategy is rooted in absolute transparency and technical differentiation. The premium beauty segment is highly cluttered, but an audit of major competitors reveals significant operational and scientific vulnerabilities that AARANYA™ is engineered to exploit.",
      "For example, mass D2C players like Mamaearth and WOW Skin Science focus on high-volume, cost-optimized herbal extracts, but lack personalization and rely heavily on synthetic stabilizers. On the high-end luxury side, Forest Essentials and Kama Ayurveda offer beautiful heritage formulations but lack clinical double-blind trials and modern technology-driven progress tracking.",
      "AARANYA™ differentiates itself by integrating our AI Scalp Scan directly into the user purchase funnel, combined with our supercritical CO₂ extraction chemistry, delivering superior efficacy with verifiable results."
    ],
    tables: [
      {
        headers: ["Competitor Brand", "Average Pricing (100ml)", "Core Positioning", "Primary Strength", "Primary Weakness", "AARANYA Differentiation"],
        rows: [
          ["Mamaearth", "INR 350 - 450", "Mass Natural / Toxins-Free", "Highly aggressive digital marketing", "Diluted active botanicals, mass-market feel", "Supercritical CO₂ high-potency extracts"],
          ["Forest Essentials", "INR 1,800 - 2,500", "Traditional Luxury Ayurveda", "Exquisite packaging, rich sensory feel", "Very high price, lacks clinical testing", "Affordable luxury, AI diagnostic support"],
          ["Pilgrim / Bare Anatomy", "INR 600 - 800", "Science & Korean Secrets", "Modern clean active ingredient marketing", "Highly dependent on synthetic bases", "100% natural supercritical botanical oil base"],
          ["Indulekha / Dabur", "INR 250 - 350", "Traditional Mass Herbal", "Deep distribution, doctor trust", "Strong medicinal smell, greasy user experience", "Premium matte, non-greasy cosmetic sensory feel"],
          ["AARANYA™", "INR 950", "Nature × Luxury × Tech Science", "AI scalp diagnostic, 90-day clinical trials", "First-gen founder, offline scaling", "Ecosystem approach: Product + AI + Live Coach"]
        ],
        caption: "Table 4.1: Rigorous Benchmarking of Aaranya™ against Primary Competitors"
      }
    ]
  },
  {
    id: "business-model",
    title: "5. Ecosystem & Revenue Architecture",
    subtitle: "The Three-Pillar Sales Framework",
    category: "Operational",
    content: [
      "AARANYA™ operates on an integrated, high-margin Omni-channel Sales Framework designed to maximize Customer Lifetime Value (LTV) while maintaining a highly cost-efficient Customer Acquisition Cost (CAC) through community networks.",
      "The business model is built on three robust operational pillars:",
      "1. Direct-to-Consumer (D2C) & Social Commerce: High-margin online transactions executed through our official website, Amazon, Flipkart, and our automated WhatsApp Conversational Store.",
      "2. The 90-Day Transformation Subscription Program: Rather than one-off impulse purchases, customers enroll in a customized, recurring hair therapy subscription. Scalp scans are repeated every 30 days to measure follicle regrowth progress.",
      "3. The Certified Women Affiliate Network: A decentralized, high-trust affiliate model empowering educated homemakers and beauty professionals as local Aaranya Brand Consultants."
    ],
    bulletPoints: [
      "Revenue Stream A: Flagship Product Sales (Rosemary & Bhringraj Hair Oil, AOV: INR 950, Gross Margin: 76%).",
      "Revenue Stream B: Subscription Hair Kits (Quarterly shipments, INR 2,400 per kit, recurring revenue baseline).",
      "Revenue Stream C: Strategic Corporate & B2B Gifting contracts.",
      "LTV/CAC Target Ratio: 4.5x, significantly superior to the industry average of 2.2x."
    ],
    insights: [
      "WhatsApp Hair Coach Funnel: By routing e-commerce traffic to personal WhatsApp channels, we achieve a conversion rate of 18%, compared to the standard 2.5% on typical web-only checkouts."
    ]
  },
  {
    id: "affiliate-strategy",
    title: "6. Decentralized Affiliate Strategy",
    subtitle: "Empowering Local Communities via Tech-Driven Trust",
    category: "Operational",
    content: [
      "The core scaling mechanism of AARANYA™ relies on our structured, tech-empowered Affiliate program. Instead of burning massive venture capital on Google and Meta advertisement auctions, we distribute commissions to local Certified Women Consultants, creating a high-trust, grass-roots recommendation engine.",
      "Recognizing the critical difference between 'Registered Affiliates' and 'Active Affiliates', our financial projections apply a highly conservative activation filter of 30%. This prevents over-inflated revenue expectations and ensures a robust operational runway.",
      "Every Brand Consultant is trained in basic scalp trichology and equipped with a portable smartphone lens attachment. They perform local scalp scans, generating high-intent, scientific consultations directly in their local communities."
    ],
    tables: [
      {
        headers: ["Affiliate Tier Metric", "Year 1 (2026)", "Year 2 (2027)", "Year 3 (2028)", "Year 4 (2029)", "Year 5 (2031)"],
        rows: [
          ["Total Registered Affiliates", "500", "1,200", "2,500", "4,000", "5,000"],
          ["Active Affiliate Ratio (Filtered)", "30.0%", "32.0%", "35.0%", "38.0%", "40.0%"],
          ["Effective Active Consultants", "150", "384", "875", "1,520", "2,000"],
          ["Avg. Kits Sold per Active / Month", "10", "12", "14", "15", "18"],
          ["Total Monthly Kit Sales", "1,500", "4,608", "12,250", "22,800", "36,000"],
          ["Affiliate Payout Commission (15%)", "INR 2,13,750", "INR 6,56,640", "INR 17,45,625", "INR 32,49,000", "INR 51,30,000"]
        ],
        caption: "Table 6.1: 5-Year Conservative Affiliate Scaling and Commission Structure Model"
      }
    ]
  },
  {
    id: "product-strategy",
    title: "7. Formulation Science & Product Pipeline",
    subtitle: "supercritical CO₂ Botanical Extraction Standard",
    category: "Operational",
    content: [
      "AARANYA™'s flagship formulation, the Premium Rosemary & Bhringraj Hair Oil, is built on a non-greasy, fast-absorbing botanical base, utilizing double-blind clinical trials to substantiate our efficacy claims.",
      "The active chemical compounds in our rosemary leaves are preserved using clean supercritical CO₂ extraction. This extraction process yields 10x higher concentrations of carnosic acid and rosmarinic acid compared to traditional hot-oil brewing methods, which destroy heat-sensitive plant enzymes.",
      "Our future product pipeline is strategically structured to expand the average cart value and offer a holistic scalp-to-tip transformation program."
    ],
    bulletPoints: [
      "Hero Product: Rosemary & Bhringraj Hair Oil (100ml) — Launch price: INR 950 (COGS: INR 228).",
      "Pipeline Phase 1 (Q3 2026): Rosemary Infused Clarifying Shampoo (200ml) — Launch price: INR 650.",
      "Pipeline Phase 2 (Q1 2027): Hydrolyzed Wheat Protein Hair Repair Mask — Launch price: INR 850.",
      "Pipeline Phase 3 (Q3 2027): Scalp Exfoliating AHA/BHA Serum — Launch price: INR 750.",
      "Quality Assurance: 100% free of mineral oils, volatile silicones, artificial fragrances, and chemical colorants."
    ]
  },
  {
    id: "loan-utilization",
    title: "8. Capital Allocation & Loan Utilization Plan",
    subtitle: "Itemized Disbursement of INR 50,00,000 Credit Facility",
    category: "Financial",
    content: [
      "The requested INR 50 Lakhs term and cash credit facility will be deployed with strict financial discipline. Capital expenditures (CapEx) are prioritized toward high-margin production machinery and proprietary technology, guaranteeing collateralizable assets, while working capital is allocated to secure raw material supply chains."
    ],
    tables: [
      {
        headers: ["Capital Allocation Category", "CapEx / OpEx", "Itemized Description of Assets", "Amount (INR)", "% Allocation"],
        rows: [
          ["Extraction & Packaging Machinery", "CapEx", "Supercritical CO₂ extraction chambers, semi-automated filling, capping & labelling lines", "INR 15,00,000", "30.0%"],
          ["Scalp Diagnostic & App Stack", "CapEx", "AI Computer vision API models development, CRM software, custom WhatsApp portal setup", "INR 10,00,000", "20.0%"],
          ["Initial Raw Materials & Packaging", "OpEx", "Amber glass bottles, gold dropper caps, botanical rosemary/bhringraj herb inventory (6 months supply)", "INR 8,00,000", "16.0%"],
          ["Strategic Launch Marketing", "OpEx", "Performance marketing, localized affiliate training academy, influencer seed kits", "INR 10,00,000", "20.0%"],
          ["Working Capital Reserve", "OpEx", "Cash flow liquidity buffer, operational rent of luxury experience lounge, regulatory audits", "INR 7,00,000", "14.0%"],
          ["Total Allocated Capital", "Capital", "Robust setup of AARANYA™ commercial production lines", "INR 50,00,000", "100.0%"]
        ],
        caption: "Table 8.1: Itemized and Structured 50 Lakhs Bank Loan Deployment Plan"
      }
    ]
  },
  {
    id: "financial-projections",
    title: "9. Conservative Financial Projections (2026–2031)",
    subtitle: "Rigorously Factored Multi-Scenario Financial Underwriting",
    category: "Financial",
    content: [
      "To ensure maximum protection for underwriting banking institutions, AARANYA™ has developed three distinct financial growth scenarios based on historical D2C benchmarks, discounting unrealistic growth spikes.",
      "1. Conservative Scenario (Low Case): Assumes higher digital marketing costs (CAC INR 800), slower retail expansion, and a low affiliate activation rate of 25%. Even under these stressed conditions, the business achieves operational break-even by Month 14.",
      "2. Expected Scenario (Base Case): Reflects our standard operating model (CAC INR 650, 35% active affiliate engagement, and steady omnichannel growth).",
      "3. Optimistic Scenario (High Case): Factores in rapid viral digital adoption, higher repeat purchase rates (45%), and early international export queries."
    ],
    tables: [
      {
        headers: ["Financial Performance Metric", "Year 1 (2026)", "Year 2 (2027)", "Year 3 (2028)", "Year 5 (2031)"],
        rows: [
          ["Total Target Active Users", "45,000", "1,10,000", "2,50,000", "6,00,000"],
          ["Gross Annual Revenue (Base Case)", "INR 1,50,00,000", "INR 3,20,00,000", "INR 5,00,00,000", "INR 12,00,00,000"],
          ["Cost of Goods Sold (COGS - 24%)", "INR 36,00,000", "INR 76,80,000", "INR 1,20,00,000", "INR 2,88,00,000"],
          ["Gross Operational Profit Margin", "76.0%", "76.0%", "76.0%", "76.0%"],
          ["Marketing & CAC Expenses (30%)", "INR 45,00,000", "INR 96,00,000", "INR 1,50,0,000", "INR 3,60,00,000"],
          ["Net Profit After Tax (NPAT - 15%)", "INR 22,50,000", "INR 48,00,000", "INR 80,00,000", "INR 2,16,00,000"],
          ["Debt Service Coverage (DSCR)", "2.85x", "3.15x", "3.80x", "5.10x"],
          ["Interest Coverage Ratio", "6.20x", "7.50x", "9.20x", "12.50x"]
        ],
        caption: "Table 9.1: Base Case Financial Projections and Debt Service Feasibility Metrics"
      }
    ],
    insights: [
      "Payback Capacity: With Year 1 NPAT projected at INR 22.5 Lakhs and robust depreciation provisions, AARANYA™ can comfortably amortize the principal INR 50 Lakhs loan inside 18 to 24 Months, well ahead of standard 5-year banking terms."
    ]
  },
  {
    id: "swot-analysis",
    title: "10. Comprehensive SWOT Analysis",
    subtitle: "Internal Strengths & External Opportunities Map",
    category: "Strategic",
    content: [
      "A standard SWOT matrix identifies the structural advantages and external forces guiding the corporate trajectory of AARANYA™."
    ],
    bulletPoints: [
      "STRENGTHS: 1. Supercritical CO₂ proprietary extraction ensures unmatched active botanical potency. 2. 94.8% accurate AI scalp scanning app drives immediate personalization. 3. Exceptional product margin profile (76% Gross Margin) provides significant cash buffer.",
      "WEAKNESSES: 1. First-generation entrepreneur with limited initial capital reserves. 2. Absence of physical historical offline shelf space footprint. 3. Early dependency on specialized raw material harvesters in South India.",
      "OPPORTUNITIES: 1. Exploding consumer preference for clinically validated clean Ayurvedic cosmetics in Tier-2 Indian cities. 2. High-trust grass-roots scaling via the certified women affiliate program. 3. Untapped premium international markets (UAE, Oman, Singapore) requesting organic hair therapeutics.",
      "THREATS: 1. Rising customer acquisition costs (CAC) on standard Google & Meta search bidding wars. 2. Low entry barriers for copycat natural-labeled hair care brands. 3. Short-term supply disruptions of organic Rosemary leaves due to local climatic anomalies."
    ]
  },
  {
    id: "risk-mitigation",
    title: "11. Risk Management & Credit Mitigation Strategy",
    subtitle: "Protecting Bank Capital under Stressed Scenarios",
    category: "Risk",
    content: [
      "Every high-margin venture is exposed to operational vulnerabilities. AARANYA™ implements a rigid credit risk mitigation matrix to insulate banking capital and guarantee seamless interest payments even under severely stressed economic scenarios.",
      "Our core operational policy dictates that we hold a minimum 3-month interest payment reserve in liquid secure accounts to prevent any technical defaults during transition phases."
    ],
    bulletPoints: [
      "Risk A: Escort-driven inflation of digital Customer Acquisition Cost (CAC). Mitigation: Pivot customer acquisition to our localized women affiliate consultant networks, completely bypassing expensive digital bidding wars.",
      "Risk B: Inventory choking and dead-stock creation. Mitigation: Enforce a modern 'Just-In-Time' inventory software tracking batch-sales velocities. Bottle production is adjusted dynamically on a bi-weekly cycle.",
      "Risk C: Copycat formulation entries. Mitigation: Protect our brand equity through active trademark registration and clinical backing reports. Maintain high transparency of our supercritical extraction process.",
      "Risk D: Working capital squeeze. Mitigation: Hold a minimum INR 7,00,000 cash liquidity buffer (14% of loan proceeds) and establish a 30-day raw-material credit limit with certified growers."
    ]
  },
  {
    id: "implementation-roadmap",
    title: "12. Implementation & Project Commissioning Roadmap",
    subtitle: "Phase-Wise Execution Plan over 12 Months",
    category: "Operational",
    content: [
      "Following the sanction and disbursement of the requested INR 50,00,000 loan facility, the project will follow a strict, milestone-governed implementation schedule to ensure rapid commercialization.",
      "Month 1-2: Loan disbursement, company registration, and procurement of GMP manufacturing lease land in Southern India.",
      "Month 3-4: Delivery and testing of the Supercritical CO₂ Extraction chambers and semi-automated bottling assemblies.",
      "Month 5-6: Official launch of the Aaranya AI Scalp Scan diagnostics module and mobile web interface. Onboarding of the first 200 certified local affiliate consultants.",
      "Month 7-9: Full-scale commercial production launch of the Rosemary & Bhringraj Hair Oil. Initiation of Amazon, Flipkart, and official website e-commerce listings.",
      "Month 10-12: Operational scaling, quarterly financial review, and launch of the first 'Aaranya Hair Lounge' retail experience counter."
    ]
  }
];
