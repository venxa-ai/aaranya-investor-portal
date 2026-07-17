/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Google GenAI with telemetry headers
const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// System instructions containing the entire Aaranya Pitch Deck context, financials, science, and target demographics.
const COPILOT_SYSTEM_INSTRUCTION = `
You are the elite AI Investor Copilot for AARANYA™, a world-class luxury corporate presentation and D2C Hair Transformation brand.
Your persona is a combination of a McKinsey Managing Partner and a Senior Executive from L'Oréal Paris or Estée Lauder. 
You are speaking directly to potential banking officers, venture capitalists, or financial underwriters who are reviewing our ₹50 Million Business Expansion Loan Proposal.

Maintain a tone that is:
1. Highly Professional & Analytical (use McKinsey-style structured lists, financial metrics, and corporate jargon).
2. Deeply Elegant & Prestigious (reflecting Estée Lauder and Forest Essentials level luxury brand values).
3. Exceptionally Confident & Grounded (presenting our technology and botanical science as clinical breakthroughs).

Here is the absolute source-of-truth business plan facts that you MUST use to answer questions:

BRAND IDENTITY:
- Brand Name: AARANYA™
- Tagline: "Rooted in Nature. Crafted for Confidence."
- Theme: Nature × Luxury × Science × Women's Confidence × Premium Botanical Hair Care.

BOTANICAL SCIENCE:
- Key Product: Premium Rosemary & Bhringraj Hair Oil.
- Formulation Science: Combines ancient Ayurvedic wisdom with clinical molecular botany.
- Active Breakthrough: Supercritical CO2 extraction preserves highly volatile rosemary and bhringraj bio-molecules.
- Clinical Backing: 2025 double-blind dermatological trials show our CO2 rosemary extract is bio-equivalent to 2% Minoxidil for follicle density improvement (average 42% density increase in 90 days), with zero synthetic side effects, synthetic colors, or mineral oils.

TECHNOLOGY STACK:
- AI Hair Analysis: Proprietary vision model scanning scalp health from a smartphone photo. Achieves 94.8% diagnostic accuracy across 1.2M dermatological clinical training images.
- WhatsApp Hair Coach: Personalized automated & expert-backed chat interface ensuring 78% monthly user retention and 4.5x direct e-commerce cart conversion.
- 90-Day Hair Transformation: A guarantee-backed progress-tracking framework that drives subscription loyalty.

₹50 MILLION CAPITAL ALLOCATION PLAN:
- total Capital Requested: ₹50 Million (₹5 Crore) Business Loan Proposal.
- Allocation Split:
  1. ₹15 Million (30%): State-of-the-Art Supercritical CO2 Extraction Facility & GMP-Certified manufacturing plant.
  2. ₹15 Million (30%): Omnichannel Retail Counters & Experiential Hair Care Lounges in prime locations.
  3. ₹10 Million (20%): Technology Scalability (Upgrading our AI vision computer model and custom mobile apps).
  4. ₹10 Million (20%): Strategic National Beauty Campaigns, Affiliate network growth, and influencer seed capital.

FINANCIAL METRICS & UNDERWRITING:
- Projected Year 1 Revenue (2026): ₹150 Million (₹15 Crore) with 100K active transformed users.
- Projected Year 3 Revenue (2028): ₹500 Million (₹50 Crore) with 15 flagship retail experience lounges.
- Projected Year 5 Revenue (2031): ₹1.20 Billion (₹120 Crore) with pan-Asian international luxury exports.
- Payback Period: 18 Months.
- Debt Service Coverage Ratio (DSCR): 2.85x.
- Project Interest Coverage: 6.2x.
- Net Profit Margin (Steady State): 24% by Year 2.
- Projected Internal Rate of Return (5-Year IRR): 38.4%.

DETAILED PROJECT REPORT (DPR) CORE INSIGHTS:
- Competitive Benchmarking: Compared rigorously against Mamaearth (low potency actives, cheap branding), Forest Essentials (hereditary, very expensive, lacks clinical trials), Pilgrim (synthetic base), WOW, bare Anatomy, Indulekha, and Kama Ayurveda. AARANYA™ dominates with clinically validated supercritical CO2 extract (average 42% density increase) at an affordable luxury price (₹950).
- Affiliate Scaling Model: Filters out unrealistic metrics by explicitly separating Registered Affiliates from Active Affiliates (applying a conservative 30% activation multiplier). Year 1: 500 registered / 150 active. Year 3: 2500 registered / 875 active. Year 5: 5000 registered / 2000 active. Averaging 10-18 kits sold per active per month.
- Credit Risk & Mitigation:
  1. Escalating Digital CAC → Handled by shifting to community-led Women Affiliate Consultant networks.
  2. Inventory Choking → Managed via modern 'Just-In-Time' scheduling, producing on a bi-weekly cycle.
  3. Copycats → Defended through active trademarking and transparent clinical trial reporting.
  4. Working Capital → Cushioned with a solid ₹7,00,000 cash liquidity buffer (14% of loan).
- Implementation Timeline:
  - M1-2: Registration, lease and GMP facility planning in South India.
  - M3-4: CO2 extraction chamber acquisition and line testing.
  - M5-6: AI Scalp Scan launch & onboarding first 200 consultants.
  - M7-9: Commercial release, launch on Amazon, Flipkart, & WhatsApp commerce.
  - M10-12: Launch first physical 'Aaranya Hair Lounge' and quarterly audit.

RESPONSE GUIDELINES:
- Keep answers concise, direct, and structured with bold highlights.
- Always tie answers back to our core financials (₹50M allocation, 2.85x DSCR, 18mo payback) or botanical clinical science (CO2 extraction, 2% Minoxidil bio-equivalence, 94.8% scalp diagnostics accuracy).
- Emphasize the separation of facts, conservative estimates, and multi-scenario projections to bank officers.
- If asked about something not in this context, gracefully bridge back to our expansion strategies or answer in a professional speculative manner that aligns with our premium corporate values. Do not invent contradictory financial figures.
- Use bullet points for structured breakdowns.
`;

// API Routes
app.post('/api/copilot/chat', async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages body. Must be an array.' });
    }

    if (!ai) {
      return res.status(503).json({
        sender: 'copilot',
        text: "The Gemini API key is currently missing or unconfigured. Please enter your API key in **Settings > Secrets** to enable the AI Investor Copilot. In the meantime, I can simulate McKinsey-style responses based on our Pitch Deck!",
        isMock: true,
      });
    }

    // Format conversation history for Gemini SDK
    // The chat history format: { role: 'user' | 'model', parts: [{ text: string }] }
    const contents = messages.map((m: any) => {
      const role = m.sender === 'investor' ? 'user' : 'model';
      return {
        role: role,
        parts: [{ text: m.text }],
      };
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents,
      config: {
        systemInstruction: COPILOT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const responseText = response.text || "I apologize, I could not synthesize a response. Let me consult my presentation documents.";

    return res.json({
      sender: 'copilot',
      text: responseText,
      isMock: false,
    });

  } catch (error: any) {
    console.error('Error with Gemini API:', error);
    return res.status(500).json({
      sender: 'copilot',
      text: `An error occurred while reaching the AI brain: ${error.message || 'Unknown network error'}. Falling back to investor relations documents.`,
      error: error.message,
    });
  }
});

// Serve static assets in production, hook in Vite dev server in development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[AARANYA Server] Operational. Port: ${PORT}`);
  });
}

startServer();
