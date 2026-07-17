/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Crown, 
  Sparkles, 
  Presentation, 
  HelpCircle, 
  SlidersHorizontal, 
  X, 
  CornerRightDown, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Activity,
  Maximize2,
  FileText,
  FileCode
} from 'lucide-react';

import { DEFAULT_PRESENTATION_DATA } from './data';
import { CoverSettings, CopilotMessage } from './types';

// Asset references
import logoImg from './assets/images/aaranya_logo_gold_1784221398768.jpg';

// Custom modular components
import CoverSlide from './components/CoverSlide';
import SlideViewer from './components/SlideViewer';
import InvestorCopilot from './components/InvestorCopilot';
import CustomizerPanel from './components/CustomizerPanel';
import DetailedProjectReport from './components/DetailedProjectReport';
import HostingerExporter from './components/HostingerExporter';

export default function App() {
  // 1. Presentation States
  const [settings, setSettings] = useState<CoverSettings>(DEFAULT_PRESENTATION_DATA.cover);
  const [useGoldFoil, setUseGoldFoil] = useState(true);
  const [backgroundTheme, setBackgroundTheme] = useState<'forest' | 'beige' | 'marble'>('forest');
  
  // 2. Active View Management
  const [viewMode, setViewMode] = useState<'cover' | 'deck' | 'dpr' | 'hostinger'>('cover');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);

  // 3. AI Chat Messages Store
  const [messages, setMessages] = useState<CopilotMessage[]>([
    {
      id: 'welcome',
      sender: 'copilot',
      text: `### Welcome, Underwriting Officer & Potential Investor:

I am the **AARANYA™ Executive Advisory Copilot**. 

We are presenting this highly confidential corporate expansion proposal targeting a **₹50 Million Business Development Facility** to fund our next 5 years of exponential growth (2026–2031).

- **Botanical Science:** Clinical bio-equivalence to 2% Minoxidil through CO₂-extracted Rosemary.
- **Diagnostics Tech:** Computer vision scalp diagnostics achieving 94.8% accuracy.
- **Financial Return:** High Debt Service Coverage Ratio (DSCR) of 2.85x and a rapid 18-month principal payback.

*Please feel free to ask me any questions regarding our financial underwritings, extraction capital expenditures, scalp computer vision pipelines, or retail expansion strategies.*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);

  // Handlers
  const handleUpdateSettings = (newSettings: Partial<CoverSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const handleAddCopilotMessage = (msg: CopilotMessage) => {
    setMessages(prev => [...prev, msg]);
  };

  const handleNextSlide = () => {
    if (currentSlideIndex < DEFAULT_PRESENTATION_DATA.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleResetDefaults = () => {
    setSettings(DEFAULT_PRESENTATION_DATA.cover);
    setUseGoldFoil(true);
    setBackgroundTheme('forest');
    setCurrentSlideIndex(0);
  };

  const triggerCopilotResponse = async (currentMessages: CopilotMessage[]) => {
    const typingId = 'typing-' + Math.random();
    const typingMsg: CopilotMessage = {
      id: typingId,
      sender: 'copilot',
      text: 'Analyzing report segment against our financial model and clinical datasets... ⏳',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, typingMsg]);
    
    try {
      const response = await fetch('/api/copilot/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: currentMessages.map(m => ({ sender: m.sender, text: m.text })) }),
      });
      
      setMessages(prev => prev.filter(m => m.id !== typingId));
      
      if (!response.ok) {
        throw new Error('Network response error');
      }
      
      const data = await response.json();
      
      const copilotMsg: CopilotMessage = {
        id: Math.random().toString(),
        sender: 'copilot',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prev => [...prev, copilotMsg]);
    } catch (err: any) {
      setMessages(prev => prev.filter(m => m.id !== typingId));
      
      // Smart offline fallback response
      const lastUserMsg = currentMessages[currentMessages.length - 1]?.text || '';
      let fallbackText = "I have appraised this segment. Our supercritical rosemary formulation is scientifically equivalent to 2% Minoxidil and provides an impressive 76% Gross Margin. Would you like to review our Year 1 balance sheet or the ₹1.5 Crore revenue breakdown?";
      
      if (lastUserMsg.toLowerCase().includes('executive')) {
        fallbackText = "### Executive Appraisal Summary:\nAARANYA™ presents a highly viable low-risk funding opportunity with a **Debt Service Coverage Ratio (DSCR) of 2.85x** and an amortized payback period of just **18 Months**. The collateralized CO₂ extraction plant guarantees solid asset coverage for the bank manager.";
      } else if (lastUserMsg.toLowerCase().includes('projection') || lastUserMsg.toLowerCase().includes('financial')) {
        fallbackText = "### Financial Appraisal Summary:\nUnder stressed conservative conditions, our Year 1 gross revenue hits **₹1.5 Crores**, leaving a **₹22.5 Lakhs Net Profit After Tax (NPAT)**. This provides an **Interest Coverage of 6.2x**, which protects the lender against technical defaults.";
      } else if (lastUserMsg.toLowerCase().includes('affiliate')) {
        fallbackText = "### Affiliate Strategy & Trust Model:\nWe filter out risk by applying a **30% activation threshold** (150 active out of 500 registered in Year 1). Each active consultant drives **10-18 kit sales per month** at high direct gross margins (76%), avoiding expensive digital customer acquisition costs.";
      }
      
      const copilotMsg: CopilotMessage = {
        id: Math.random().toString(),
        sender: 'copilot',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, copilotMsg]);
    }
  };

  const handleAskCopilotFromReport = (text: string) => {
    const investorMsg: CopilotMessage = {
      id: Math.random().toString(),
      sender: 'investor',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => {
      const updated = [...prev, investorMsg];
      triggerCopilotResponse(updated);
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-forest select-none font-sans overflow-x-hidden pb-12">
      
      {/* 1. TOP STATS RAIL HEADER (McKinsey & Estée Lauder Editorial Standard) */}
      <header className="bg-forest border-b border-gold/25 py-3.5 px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-3 relative z-30 text-beige">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-gold/40 flex items-center justify-center overflow-hidden shadow-gold-glow p-0.5">
            <img 
              src={logoImg} 
              alt="Aaranya Brand Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-sm font-semibold tracking-widest text-gold-light uppercase">AARANYA™</span>
              <span className="text-[9px] font-mono tracking-widest text-gold/80 border border-gold/35 px-1.5 py-0.2 rounded uppercase">Corporate Room</span>
            </div>
            <p className="text-[10px] text-beige-dark/70 font-sans tracking-wide">
              {settings.tagline}
            </p>
          </div>
        </div>

        {/* Presentation controls & switcher */}
        <div className="flex items-center gap-3">
          <div className="flex bg-forest-light/60 p-1 rounded-lg border border-gold/20">
            <button
              onClick={() => { setViewMode('cover'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                viewMode === 'cover' 
                  ? 'bg-gold-gradient text-forest-dark font-bold shadow-md' 
                  : 'text-beige/75 hover:text-beige'
              }`}
            >
              Cover Slide
            </button>
            <button
              onClick={() => { setViewMode('deck'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                viewMode === 'deck' 
                  ? 'bg-gold-gradient text-forest-dark font-bold shadow-md' 
                  : 'text-beige/75 hover:text-beige'
              }`}
            >
              Pitch Deck Slides
            </button>
            <button
              onClick={() => { setViewMode('dpr'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                viewMode === 'dpr' 
                  ? 'bg-gold-gradient text-forest-dark font-bold shadow-md' 
                  : 'text-beige/75 hover:text-beige'
              }`}
            >
              Detailed Project Report (DPR)
            </button>
            <button
              onClick={() => { setViewMode('hostinger'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                viewMode === 'hostinger' 
                  ? 'bg-gold-gradient text-forest-dark font-bold shadow-md' 
                  : 'text-beige/75 hover:text-beige'
              }`}
            >
              Hostinger Portal Exporter
            </button>
          </div>

          <button
            onClick={() => setShowCustomizer(!showCustomizer)}
            className={`p-2 rounded-lg border transition-all ${
              showCustomizer 
                ? 'bg-gold/30 border-gold text-gold-light' 
                : 'bg-forest-light/50 border-gold/20 hover:border-gold/40 text-beige/90'
            }`}
            title="Toggle Cover Customizer Panel"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. DYNAMIC BUSINESS SUMMARY INFO BANNER */}
      <section className="bg-white py-3 px-6 sm:px-12 border-b border-gold/20 flex flex-wrap gap-4 sm:gap-8 justify-center items-center text-[10px] tracking-wider uppercase font-mono text-forest/90">
        <span className="flex items-center gap-1.5 font-medium"><Activity className="w-3.5 h-3.5 text-gold" /> SECURE LOAN PROPOSAL</span>
        <span className="hidden sm:inline text-gold/30">|</span>
        <span className="flex items-center gap-1.5 font-medium"><TrendingUp className="w-3.5 h-3.5 text-gold" /> ₹50M FACILITY LIMIT</span>
        <span className="hidden sm:inline text-gold/30">|</span>
        <span className="flex items-center gap-1.5 font-medium"><BookOpen className="w-3.5 h-3.5 text-gold" /> 2026-2031 ROADMAP</span>
        <span className="hidden sm:inline text-gold/30">|</span>
        <span className="flex items-center gap-1.5 font-medium"><Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" /> 94.8% AI DIAGNOSTIC TRUTH</span>
      </section>

      {/* 3. MAIN DASHBOARD SPLIT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN (7/12 Width): Premium Presentation Visual */}
        <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-serif text-lg sm:text-xl text-forest font-semibold tracking-wide flex items-center gap-2">
              {viewMode === 'dpr' ? (
                <FileText className="w-5 h-5 text-gold" />
              ) : viewMode === 'hostinger' ? (
                <FileCode className="w-5 h-5 text-gold" />
              ) : (
                <Presentation className="w-5 h-5 text-gold" />
              )} 
              {viewMode === 'cover' && 'Presentation Cover Preview'}
              {viewMode === 'deck' && 'Interactive Pitch Deck Slides'}
              {viewMode === 'dpr' && 'Detailed Project Report (DPR)'}
              {viewMode === 'hostinger' && 'Hostinger HTML Portal'}
            </h2>
            
            {viewMode === 'cover' && (
              <button
                onClick={() => setIsFullscreen(true)}
                className="text-[10px] font-mono tracking-widest text-forest hover:text-gold uppercase bg-white px-2.5 py-1.5 rounded border border-gold/30 shadow-sm transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-gold" /> Fullscreen Cover
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'cover' ? (
              <motion.div
                key="cover-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full relative shadow-gold-glow rounded-xl overflow-hidden"
              >
                <CoverSlide 
                  settings={settings}
                  useGoldFoil={useGoldFoil}
                  backgroundTheme={backgroundTheme}
                />
              </motion.div>
            ) : viewMode === 'deck' ? (
              <motion.div
                key="deck-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <SlideViewer 
                  slides={DEFAULT_PRESENTATION_DATA.slides}
                  currentSlideIndex={currentSlideIndex}
                  onPrevSlide={handlePrevSlide}
                  onNextSlide={handleNextSlide}
                  onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
                />
              </motion.div>
            ) : viewMode === 'dpr' ? (
              <motion.div
                key="dpr-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <DetailedProjectReport onAskCopilot={handleAskCopilotFromReport} />
              </motion.div>
            ) : (
              <motion.div
                key="hostinger-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <HostingerExporter />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Underwriter Advisory Note */}
          <div className="bg-white border border-gold/30 p-4 rounded-xl shadow-sm flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-serif text-xs font-semibold text-forest">Presentation Pitch Advice</span>
              <p className="text-xs text-forest/75 leading-relaxed font-sans">
                Aaranya™ combines clinical hair transformations with high e-commerce margins. Leverage the <span className="text-gold font-semibold">AI Hair Analysis accuracy (94.8%)</span> and <span className="text-gold font-semibold">supercritical botanical extraction efficiency</span> when pitching to traditional credit risk underwriters.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (4/12 or 5/12 depending on panel): Investor Chat or Editor Customizer */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {showCustomizer ? (
              <motion.div
                key="customizer-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <CustomizerPanel 
                  settings={settings}
                  onUpdateSettings={handleUpdateSettings}
                  useGoldFoil={useGoldFoil}
                  onToggleGoldFoil={() => setUseGoldFoil(!useGoldFoil)}
                  backgroundTheme={backgroundTheme}
                  onChangeTheme={(t) => setBackgroundTheme(t)}
                  onReset={handleResetDefaults}
                  onFullscreenCover={() => setIsFullscreen(true)}
                />
              </motion.div>
            ) : (
              <motion.div
                key="copilot-panel"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <InvestorCopilot 
                  messages={messages}
                  setMessages={setMessages}
                  onAddMessage={handleAddCopilotMessage}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Switcher banner under the sidebar */}
          <button
            onClick={() => setShowCustomizer(!showCustomizer)}
            className="w-full bg-forest hover:bg-forest-light border border-gold/25 rounded-lg p-3 text-xs tracking-wider text-center text-gold-light font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.99] shadow-md"
          >
            {showCustomizer ? (
              <>
                <X className="w-3.5 h-3.5" /> Close Editor, Open Chat Copilot
              </>
            ) : (
              <>
                <SlidersHorizontal className="w-3.5 h-3.5 animate-pulse" /> Live Customizer Panel
              </>
            )}
          </button>
        </div>

      </main>

      {/* 4. FULLSCREEN COVER PREVIEW MODAL */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#07140e] z-50 flex flex-col justify-center items-center p-4 sm:p-8"
          >
            {/* Close fullscreen controls */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-widest text-beige/40 uppercase">
                AARANYA™ High-Definition Mode
              </span>
              <button 
                onClick={() => setIsFullscreen(false)}
                className="w-10 h-10 rounded-full bg-gold/10 hover:bg-gold/20 border border-gold/40 flex items-center justify-center text-gold transition-transform hover:rotate-90 active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scale adjusted cover page */}
            <div className="w-full max-w-6xl max-h-[90vh] aspect-[16/10] overflow-hidden rounded-xl shadow-2xl border border-gold/30">
              <CoverSlide 
                settings={settings}
                useGoldFoil={useGoldFoil}
                backgroundTheme={backgroundTheme}
              />
            </div>

            {/* Tip overlay */}
            <div className="mt-4 text-[10px] font-mono tracking-wider text-beige/50 text-center">
              Press <span className="text-gold font-bold">ESC</span> or click close to return to the interactive dashboard.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
