/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PresentationData } from './types';

export const DEFAULT_PRESENTATION_DATA: PresentationData = {
  cover: {
    brandName: 'AARANYA™',
    tagline: 'Rooted in Nature. Crafted for Confidence.',
    businessPlanTitle: 'BUSINESS PLAN',
    businessPlanSubtitle: 'Premium Hair Transformation Company',
    preparedForLabel: 'Prepared For',
    loanTitle: 'Bank Loan Proposal',
    loanAmount: '₹50 Million Business Expansion',
    confidentialLabel: 'Confidential Business Proposal',
    growthYears: '2026–2031 Growth Strategy',
  },
  slides: [
    {
      id: 1,
      title: 'BUSINESS PLAN',
      subtitle: 'Premium Hair Transformation Cover',
      category: 'Overview',
      sections: [
        {
          heading: 'Executive Summary',
          paragraphs: [
            'AARANYA™ is a world-class, premium D2C Hair Transformation brand blending the timeless secrets of ancient Ayurveda with cutting-edge medical botany and AI-driven personalization.',
            'This business plan outlines our transition from a hyper-growth online brand to a multi-channel Indian luxury giant, funded by a secure ₹50 Million expansion facility.'
          ]
        }
      ],
      visualType: 'cover'
    },
    {
      id: 2,
      title: 'Botanical Science & Formulations',
      subtitle: 'Ancient Wisdom × Clinical Potency',
      category: 'Science & Product',
      sections: [
        {
          heading: 'The Gold-Standard Actives',
          paragraphs: [
            'Our flagship product, the Premium Rosemary & Bhringraj Hair Oil, utilizes supercritical CO2 extraction to preserve the highly volatile active molecules of Rosemary leaves and Bhringraj roots.',
            'Clinical trials conducted in 2025 demonstrate that our proprietary rosemary extract is bio-equivalent to 2% Minoxidil for stimulating hair follicle growth over 90 days, with zero synthetic side effects.',
            'Combined with cold-pressed black sesame oil, amla, and curry leaves, this elixir activates dormant hair roots, improves scalp blood circulation, and forms a protective breathable layer.'
          ],
          bulletPoints: [
            '100% Pure Supercritical Rosemary extract: Clinically proven follicular catalyst.',
            'Traditional Bhringraj extract: Root nourishment and melanin retention.',
            'Zero Mineral Oils, Silicones, Parabens, or Synthetic Fragrances.'
          ]
        }
      ],
      metrics: [
        { label: 'Hair Density Improvement', value: '+42%', description: 'Measured in 90-day double-blind clinical trials' },
        { label: 'Active Botanical Potency', value: '10x', description: 'Compared to standard hot-brewed hair oils' },
        { label: 'Organic Certification', value: '100%', description: 'Sourced from sustainable bio-farms in India' }
      ],
      visualType: 'story'
    },
    {
      id: 3,
      title: 'The AI Hair Analysis Ecosystem',
      subtitle: 'Premium Tech-Driven Personalization',
      category: 'Technology & D2C',
      sections: [
        {
          heading: 'Revolutionary Scalp Diagnostics',
          paragraphs: [
            'AARANYA™ does not sell generic products. Our tech stack establishes a customized digital hair clinic directly on the customer\'s smartphone.',
            'Through our proprietary AI Hair Analysis API, customers upload high-resolution photos of their crown and parting. Our computer vision model segments hair thinning, scalp hydration, sebum level, and follicle density.',
            'Following analysis, the user is automatically matched with a personal human-backed WhatsApp Hair Coach to guide their 90-Day Hair Transformation.'
          ],
          bulletPoints: [
            'Computer Vision Scan: Instant customized scalp health index rating.',
            'WhatsApp Triage Funnel: Seamless D2C cart conversion and expert coaching.',
            'Loyalty Engine: Dynamic subscription model tracking monthly growth.'
          ]
        }
      ],
      metrics: [
        { label: 'Scalp Analysis Accuracy', value: '94.8%', description: 'Trained on 1.2M dermatological clinical images' },
        { label: 'Customer Retention Rate', value: '78%', description: 'Driven by personalized WhatsApp coaching loops' },
        { label: 'Direct Cart Conversion', value: '4.5x', description: 'Compared to standard e-commerce landing pages' }
      ],
      visualType: 'tech'
    },
    {
      id: 4,
      title: '₹50 Million Capital Allocation Plan',
      subtitle: 'Strategic Funding for Exponential Growth',
      category: 'Financial Strategy',
      sections: [
        {
          heading: 'High-Yield Expenditure Architecture',
          paragraphs: [
            'We are seeking a ₹50 Million Bank Loan facility to scale our production capabilities, expand our tech proprietary systems, and launch regional offline experiential wellness counters.',
            'This capital will be rigidly managed across four primary growth divisions, ensuring a high debt-service coverage ratio (DSCR) and robust return on investment.'
          ],
          bulletPoints: [
            '₹15 Million (30%): Supercritical CO2 Extraction & GMP-Certified Plant Setup.',
            '₹15 Million (30%): Omnichannel Retail Counters & Experiential Hair Lounges.',
            '₹10 Million (20%): Proprietary AI Vision & WhatsApp Coach Chatbot Platform.',
            '₹10 Million (20%): Strategic National Beauty Campaigns & Influencer Affiliate Seed Capital.'
          ]
        }
      ],
      metrics: [
        { label: 'Capital Payback Period', value: '18 Months', description: 'With secure interest coverage of 6.2x' },
        { label: 'Projected IRR (5-Year)', value: '38.4%', description: 'Highly conservative financial underwriting' },
        { label: 'Debt Service Coverage (DSCR)', value: '2.85x', description: 'Ensuring maximum collateral and bank security' }
      ],
      visualType: 'finance'
    },
    {
      id: 5,
      title: 'Growth Strategy (2026–2031)',
      subtitle: 'From Indian Premium D2C to International Household Luxury',
      category: 'Market Projection',
      sections: [
        {
          heading: 'Five-Year Operational Milestones',
          paragraphs: [
            'AARANYA™ is set to capture a dominant share of India’s ₹180 Billion premium hair care segment through our hyper-efficient affiliate model and retail footprints.',
            'By empowering 5,000+ local Certified Hair Consultants (affiliates) with our AI Scalp Scan diagnostics tools, we establish an unstoppable localized network effect.',
            'Over the next 5 years, we project a 10x revenue multiple while expanding our high-margin subscription base.'
          ],
          bulletPoints: [
            'Phase 1 (2026-2027): Complete extraction facility, achieve ₹150M Annual Revenue.',
            'Phase 2 (2028-2029): Scale to 15 Premium Retail Lounges, ₹500M Revenue.',
            'Phase 3 (2030-2031): International expansion in UAE & South East Asia, ₹1.2B Revenue.'
          ]
        }
      ],
      metrics: [
        { label: 'Year 1 (2026) Target', value: '₹150M', description: '100K active transformed users' },
        { label: 'Year 3 (2028) Target', value: '₹500M', description: '300K subscriptions + 15 retail sites' },
        { label: 'Year 5 (2031) Target', value: '₹1.20B', description: 'Pan-Asian luxury brand market presence' }
      ],
      visualType: 'growth'
    }
  ]
};
