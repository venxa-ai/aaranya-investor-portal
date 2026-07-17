/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MessageSquare, 
  Calendar, 
  Share2, 
  Users, 
  Cpu, 
  Leaf, 
  Award 
} from 'lucide-react';
import { CoverSettings } from '../types';

// Asset references generated earlier
import logoImg from '../assets/images/aaranya_logo_gold_1784221398768.jpg';
import womanImg from '../assets/images/indian_woman_hair_1784221415035.jpg';
import productImg from '../assets/images/aaranya_hair_oil_1784221430547.jpg';

interface CoverSlideProps {
  settings: CoverSettings;
  useGoldFoil: boolean;
  backgroundTheme: 'forest' | 'beige' | 'marble';
}

export default function CoverSlide({ settings, useGoldFoil, backgroundTheme }: CoverSlideProps) {
  // Determine background styling based on user customizer selections
  const getBackgroundStyle = () => {
    switch (backgroundTheme) {
      case 'beige':
        return 'bg-[#FAF9F6] text-forest border-[12px] border-forest';
      case 'marble':
        return 'bg-marble-texture bg-cover text-beige border-[12px] border-gold';
      case 'forest':
      default:
        return 'bg-gradient-to-br from-[#123524] via-[#0d261a] to-[#07160f] text-white border-[12px] border-[#C5A059]';
    }
  };

  const isDarkTheme = backgroundTheme === 'forest' || backgroundTheme === 'marble';

  // Define minimal luxury bottom icons with descriptions
  const bottomIcons = [
    { icon: Sparkles, label: 'AI Hair Analysis', sub: '94.8% Accuracy' },
    { icon: MessageSquare, label: 'WhatsApp Hair Coach', sub: 'Direct Live Guide' },
    { icon: Calendar, label: '90 Days Transformation', sub: 'Guaranteed Results' },
    { icon: Share2, label: 'Affiliate Marketing', sub: '5K+ Hair Consultants' },
    { icon: Users, label: 'Community', sub: 'User-Led Care' },
    { icon: Cpu, label: 'Technology', sub: 'AI Computer Vision' },
    { icon: Leaf, label: 'Nature', sub: 'Supercritical CO2' },
    { icon: Award, label: 'Luxury', sub: 'Premium Aesthetics' }
  ];

  return (
    <div 
      id="presentation-cover-container" 
      className={`relative w-full aspect-[16/10] overflow-hidden p-6 sm:p-10 flex flex-col justify-between transition-all duration-700 shadow-2xl ${getBackgroundStyle()}`}
    >
      {/* Decorative Gold Foil Accent Corner Overlay from Editorial Aesthetic */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent -rotate-45 -translate-x-16 -translate-y-16 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial from-forest-light/25 to-transparent pointer-events-none" />
      
      {/* Subtle background plant watermark */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. TOP SECTION: Branding & Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center z-10"
      >
        <div className="flex flex-col items-center gap-1">
          {/* Luxurious Uncropped Gilded Logo Brand Mark Card */}
          <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-gold/30 flex items-center justify-center shadow-xl shadow-gold-glow bg-white p-2.5 mb-1 transition-transform duration-500 hover:scale-[1.03]">
            {/* Elegant luxury inner thin gold frame */}
            <div className="absolute inset-1.5 border border-gold/20 pointer-events-none z-10 rounded-lg" />
            <img 
              src={logoImg} 
              alt="Aaranya Official Brand Logo" 
              className="w-full h-full object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <p className={`font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-1 opacity-90 ${isDarkTheme ? 'text-beige-dark/80' : 'text-forest/80'}`}>
          {settings.tagline}
        </p>
        <div className="w-16 h-[1px] bg-gold/40 mt-3" />
      </motion.div>

      {/* 2. CENTER SECTION: Three Column Corporate Grid */}
      <div className="grid grid-cols-12 gap-6 items-center my-4 z-10 flex-1">
        
        {/* LEFT COLUMN: Confidence Beauty Campaign Visual (with rounded-t-full arch styling) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="col-span-3 flex flex-col items-center"
        >
          <div className="relative group w-full aspect-[3/4] rounded-t-full overflow-hidden border border-gold/30 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-gold/60 bg-gold-light/20">
            {/* Elegant luxury gold thin border line inside the arch */}
            <div className="absolute inset-2 border border-gold/20 rounded-t-full pointer-events-none z-10" />
            <img 
              src={womanImg} 
              alt="Confident Indian Woman beauty campaign" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
            {/* Gradient shadow for text readability */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 z-20">
              <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-gold font-semibold">Campaign Model</span>
              <p className="font-serif text-xs text-beige leading-tight font-medium mt-0.5">Confident Indian Woman</p>
            </div>
          </div>
          <p className={`text-[9px] tracking-widest uppercase mt-2 font-sans ${isDarkTheme ? 'text-beige/40' : 'text-forest/60'}`}>
            Beauty × Confidence
          </p>
        </motion.div>

        {/* CENTER COLUMN: Pitch Deck Main Proposal Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="col-span-6 flex flex-col items-center text-center px-4"
        >
          {/* Subtle vertical divider in center column to match editorial template */}
          <div className="w-[1px] h-10 bg-gold mb-4" />

          {/* Main Title Badge */}
          <span className="font-sans text-[10px] tracking-[0.3em] text-gold font-semibold uppercase mb-2">
            {settings.businessPlanTitle}
          </span>

          {/* Core Proposal Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4 leading-tight">
            {useGoldFoil ? (
              <span className="text-gold-foil drop-shadow-sm">
                {settings.businessPlanSubtitle}
              </span>
            ) : (
              <span className={isDarkTheme ? 'text-beige' : 'text-forest'}>
                {settings.businessPlanSubtitle}
              </span>
            )}
          </h2>

          <div className="w-12 h-[1px] bg-gold/60 mb-5" />

          {/* Underwriter Details: Prepared For Bank Loan */}
          <div className="w-full max-w-sm rounded-md border border-gold/20 bg-forest-dark/40 p-3 shadow-lg backdrop-blur-sm flex flex-col items-center">
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/85 font-semibold mb-1">
              {settings.preparedForLabel}
            </span>
            <span className={`font-serif text-xs tracking-wide mb-1 ${isDarkTheme ? 'text-beige/95' : 'text-forest/95'}`}>
              {settings.loanTitle}
            </span>
            <span className="font-serif text-base font-medium text-gold-light tracking-wide">
              {settings.loanAmount}
            </span>
          </div>

          {/* Confidential Growth Years */}
          <div className="mt-5 flex flex-col items-center gap-1">
            <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-red-400 font-semibold bg-red-950/20 px-3 py-1 rounded border border-red-500/10">
              {settings.confidentialLabel}
            </span>
            <span className={`font-mono text-[10px] tracking-[0.1em] mt-1 ${isDarkTheme ? 'text-beige/55' : 'text-forest/60'}`}>
              {settings.growthYears}
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Luxury Cosmetics Dropper Bottle Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="col-span-3 flex flex-col items-center"
        >
          <div className="relative group w-full aspect-[3/4] rounded-lg overflow-hidden border border-gold/30 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-gold/60">
            {/* Elegant luxury gold thin border line inside */}
            <div className="absolute inset-2 border border-gold/20 pointer-events-none z-10" />
            <img 
              src={productImg} 
              alt="Rosemary and Bhringraj Premium Hair Oil glass bottle" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
            {/* Gradient shadow for text readability */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 z-20">
              <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-gold font-semibold">Botanical Composition</span>
              <p className="font-serif text-xs text-beige leading-tight font-medium mt-0.5">CO₂ Rosemary Extract</p>
            </div>
          </div>
          <p className={`text-[9px] tracking-widest uppercase mt-2 font-sans ${isDarkTheme ? 'text-beige/40' : 'text-forest/60'}`}>
            Rosemary & Bhringraj
          </p>
        </motion.div>

      </div>

      {/* 3. BOTTOM SECTION: Minimal Luxury Icons Grid from Design HTML */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-10"
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-3.5" />
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 sm:gap-3.5 justify-items-center">
          {bottomIcons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center group cursor-help p-1 rounded transition-colors duration-300 hover:bg-gold/5 w-full text-center"
                title={item.sub}
              >
                {/* Custom minimalist geometric frames based on Editorial style sheet (rounded, square, diamond, etc.) */}
                <div className={`w-7 h-7 flex items-center justify-center bg-gold/5 group-hover:bg-gold/15 group-hover:border-gold transition-all duration-300 border border-gold/35 ${
                  idx % 4 === 0 ? 'rounded-full' : 
                  idx % 4 === 1 ? 'rounded-none' : 
                  idx % 4 === 2 ? 'rotate-45' : 'rounded-md'
                }`}>
                  <IconComponent className={`w-3.5 h-3.5 text-gold ${idx % 4 === 2 ? '-rotate-45' : ''}`} />
                </div>
                <span className={`text-[9px] font-sans font-medium tracking-wider mt-1.5 transition-colors duration-300 group-hover:text-gold-light ${isDarkTheme ? 'text-beige-dark/90' : 'text-forest/90'}`}>
                  {item.label.split(' ')[0]}
                </span>
                <span className="text-[7px] font-mono tracking-tighter text-gold/65 uppercase mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
