/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Briefcase, 
  Settings, 
  BookOpen 
} from 'lucide-react';
import { Slide } from '../types';

interface SlideViewerProps {
  slides: Slide[];
  currentSlideIndex: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSelectSlide: (idx: number) => void;
}

export default function SlideViewer({
  slides,
  currentSlideIndex,
  onPrevSlide,
  onNextSlide,
  onSelectSlide
}: SlideViewerProps) {
  const activeSlide = slides[currentSlideIndex];

  // Helper to retrieve category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Science & Product':
        return BookOpen;
      case 'Technology & D2C':
        return Settings;
      case 'Financial Strategy':
        return DollarSign;
      case 'Market Projection':
        return TrendingUp;
      default:
        return Briefcase;
    }
  };

  const CategoryIcon = getCategoryIcon(activeSlide.category);

  return (
    <div className="bg-forest-dark border border-gold/15 rounded-xl shadow-2xl flex flex-col justify-between p-6 sm:p-10 min-h-[500px] text-beige relative overflow-hidden">
      {/* Dynamic background element for luxury feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-radial from-forest-light/10 to-transparent pointer-events-none" />

      {/* Slide Navigation Top bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold/10 pb-4 mb-6 gap-3 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
            <CategoryIcon className="w-4 h-4 text-gold" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">
              Slide {currentSlideIndex + 1} of {slides.length} — {activeSlide.category}
            </span>
            <h3 className="font-serif text-lg text-beige font-semibold">
              {activeSlide.title}
            </h3>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button 
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            className={`w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center transition-all ${
              currentSlideIndex === 0 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:bg-gold/10 hover:border-gold/40 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-gold" />
          </button>
          
          <span className="font-mono text-sm tracking-widest text-gold font-bold px-1">
            {String(currentSlideIndex + 1).padStart(2, '0')}
          </span>

          <button 
            onClick={onNextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className={`w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center transition-all ${
              currentSlideIndex === slides.length - 1 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:bg-gold/10 hover:border-gold/40 active:scale-95'
            }`}
          >
            <ChevronRight className="w-5 h-5 text-gold" />
          </button>
        </div>
      </div>

      {/* Main Content Area with Transitions */}
      <div className="flex-1 z-10 my-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Content column */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-gold-light mb-2">
                  {activeSlide.subtitle}
                </h4>
                <div className="w-12 h-[1px] bg-gold" />
              </div>

              {activeSlide.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h5 className="font-display text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                    {section.heading}
                  </h5>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm text-beige/80 leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}
                  
                  {/* Bullets if any */}
                  {section.bulletPoints && (
                    <ul className="space-y-2 pt-2">
                      {section.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-beige/90 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Right Metric cards column */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <div className="bg-forest p-6 rounded-lg border border-gold/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <ShieldCheck className="w-12 h-12 text-gold" />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Underwriting Evidence</span>
                <p className="font-serif text-sm font-semibold text-beige mt-1">Verified Fact Sheet</p>
                <div className="w-full h-[1px] bg-gold/15 my-3" />
                
                {/* Metric list */}
                {activeSlide.metrics && activeSlide.metrics.length > 0 ? (
                  <div className="space-y-4">
                    {activeSlide.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center group">
                        <div className="max-w-[70%]">
                          <p className="font-sans text-xs text-beige-dark/95 font-medium group-hover:text-gold transition-colors duration-200">
                            {metric.label}
                          </p>
                          {metric.description && (
                            <p className="font-mono text-[9px] text-beige/50 group-hover:text-beige/70 transition-colors duration-200">
                              {metric.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-display text-lg sm:text-xl font-bold text-gold-light tracking-tight">
                            {metric.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-6 text-center text-beige/40 text-xs italic font-mono">
                    Premium Presentation Standard Document
                  </div>
                )}
              </div>
              
              {/* McKinsey Style Summary Badge */}
              <div className="border border-gold/15 bg-forest-dark p-4 rounded-lg flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-gold bg-gold/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0">!</span>
                <p className="text-[11px] leading-tight font-sans text-beige-dark">
                  Approved 2026-2031 Strategic Expansion roadmap for AARANYA™ corporate scaling.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress timeline and quick slides selector */}
      <div className="border-t border-gold/10 pt-4 mt-6 z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlideIndex 
                  ? 'bg-gold w-8' 
                  : 'bg-gold/20 hover:bg-gold/40 w-2'
              }`}
              title={slide.title}
            />
          ))}
        </div>
        
        <span className="font-mono text-[10px] text-beige/40 uppercase tracking-widest">
          AARANYA™ CONFIDENTIAL Presentation Hub
        </span>
      </div>
    </div>
  );
}
