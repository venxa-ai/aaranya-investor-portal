/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  SlidersHorizontal, 
  Sparkles, 
  Download, 
  Printer, 
  Eye, 
  Paintbrush, 
  BadgeIndianRupee 
} from 'lucide-react';
import { CoverSettings } from '../types';

interface CustomizerPanelProps {
  settings: CoverSettings;
  onUpdateSettings: (newSettings: Partial<CoverSettings>) => void;
  useGoldFoil: boolean;
  onToggleGoldFoil: () => void;
  backgroundTheme: 'forest' | 'beige' | 'marble';
  onChangeTheme: (theme: 'forest' | 'beige' | 'marble') => void;
  onReset: () => void;
  onFullscreenCover: () => void;
}

export default function CustomizerPanel({
  settings,
  onUpdateSettings,
  useGoldFoil,
  onToggleGoldFoil,
  backgroundTheme,
  onChangeTheme,
  onReset,
  onFullscreenCover
}: CustomizerPanelProps) {

  const handlePrint = () => {
    // Elegant printing workflow: triggers a print overlay styled through CSS media queries
    window.print();
  };

  return (
    <div className="bg-forest-dark border border-gold/15 rounded-xl p-6 shadow-2xl text-beige flex flex-col gap-6">
      
      {/* Title */}
      <div className="border-b border-gold/10 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gold" />
          <h4 className="font-serif text-sm font-semibold tracking-wide text-gold-light">
            Cover Customizer Panel
          </h4>
        </div>
        <button 
          onClick={onReset}
          className="text-[9px] font-mono tracking-widest text-gold/60 hover:text-gold uppercase bg-gold/5 px-2 py-1 rounded border border-gold/10"
        >
          Reset Defaults
        </button>
      </div>

      {/* Theme Selection */}
      <div className="space-y-2">
        <span className="font-sans text-[10px] tracking-wider uppercase text-gold font-semibold flex items-center gap-1.5">
          <Paintbrush className="w-3.5 h-3.5" /> Select Cover Theme Backdrop:
        </span>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onChangeTheme('forest')}
            className={`px-3 py-2 rounded text-xs font-medium border transition-all ${
              backgroundTheme === 'forest'
                ? 'bg-forest border-gold text-gold-light shadow-gold-glow'
                : 'bg-forest/10 border-gold/10 hover:border-gold/30 text-beige/70'
            }`}
          >
            Forest Green
          </button>
          <button
            onClick={() => onChangeTheme('marble')}
            className={`px-3 py-2 rounded text-xs font-medium border transition-all ${
              backgroundTheme === 'marble'
                ? 'bg-marble-texture bg-cover border-gold text-gold-light shadow-gold-glow'
                : 'bg-forest/10 border-gold/10 hover:border-gold/30 text-beige/70'
            }`}
          >
            Luxury Marble
          </button>
          <button
            onClick={() => onChangeTheme('beige')}
            className={`px-3 py-2 rounded text-xs font-medium border transition-all ${
              backgroundTheme === 'beige'
                ? 'bg-beige border-gold text-forest'
                : 'bg-forest/10 border-gold/10 hover:border-gold/30 text-beige/70'
            }`}
          >
            Soft Beige
          </button>
        </div>
      </div>

      {/* Gold Foil Accent Toggle */}
      <div className="flex items-center justify-between bg-forest/30 border border-gold/10 p-3.5 rounded-lg">
        <div className="flex flex-col">
          <span className="font-serif text-xs font-medium text-beige flex items-center gap-1">
            Matte Gold Foil Accentuation <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          </span>
          <p className="text-[10px] text-beige/40 font-sans">Apply luxury metallic gold styling to key titles</p>
        </div>
        <button
          onClick={onToggleGoldFoil}
          className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
            useGoldFoil ? 'bg-gold' : 'bg-forest-light'
          }`}
        >
          <div className={`bg-forest-dark w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            useGoldFoil ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </button>
      </div>

      {/* Editable Fields Grid */}
      <div className="space-y-4">
        <span className="font-sans text-[10px] tracking-wider uppercase text-gold font-semibold flex items-center gap-1.5">
          <BadgeIndianRupee className="w-3.5 h-3.5" /> Edit Proposal Specifics:
        </span>

        {/* Brand Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Brand Label</label>
            <input
              type="text"
              value={settings.brandName}
              onChange={(e) => onUpdateSettings({ brandName: e.target.value })}
              className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Tagline Statement</label>
            <input
              type="text"
              value={settings.tagline}
              onChange={(e) => onUpdateSettings({ tagline: e.target.value })}
              className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50"
            />
          </div>
        </div>

        {/* Business Plan Header & Sub */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Category Badge</label>
            <input
              type="text"
              value={settings.businessPlanTitle}
              onChange={(e) => onUpdateSettings({ businessPlanTitle: e.target.value })}
              className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Cover Headline</label>
            <input
              type="text"
              value={settings.businessPlanSubtitle}
              onChange={(e) => onUpdateSettings({ businessPlanSubtitle: e.target.value })}
              className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50"
            />
          </div>
        </div>

        {/* Bank & Expansion Loan details */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Capital Proposal Tier</label>
          <input
            type="text"
            value={settings.loanAmount}
            onChange={(e) => onUpdateSettings({ loanAmount: e.target.value })}
            className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50 font-semibold text-gold-light"
          />
        </div>

        {/* Period Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Security Label</label>
            <input
              type="text"
              value={settings.confidentialLabel}
              onChange={(e) => onUpdateSettings({ confidentialLabel: e.target.value })}
              className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-mono tracking-wider text-beige/45 uppercase">Target Years</label>
            <input
              type="text"
              value={settings.growthYears}
              onChange={(e) => onUpdateSettings({ growthYears: e.target.value })}
              className="bg-forest/20 border border-gold/15 rounded px-2.5 py-1.5 text-xs text-beige focus:outline-none focus:border-gold/50"
            />
          </div>
        </div>
      </div>

      {/* Document Action Triggers */}
      <div className="border-t border-gold/10 pt-4 space-y-2">
        <button
          onClick={onFullscreenCover}
          className="w-full bg-gold/10 hover:bg-gold/20 text-gold-light border border-gold/30 rounded-lg py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Eye className="w-4 h-4" /> Preview Presentation Cover Fullscreen
        </button>
        
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handlePrint}
            className="bg-forest hover:bg-forest-light text-beige border border-gold/20 rounded-lg py-2 text-xs font-medium flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" /> Print / Export PDF
          </button>
          
          <button
            onClick={() => alert("Corporate Presentation files compiled! Check matching PDF downloads.")}
            className="bg-gold-gradient hover:opacity-90 text-forest-dark rounded-lg py-2 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" /> Download Pack
          </button>
        </div>
      </div>

      {/* Printing Notice Helper */}
      <span className="text-[8px] font-mono text-beige/35 text-center block">
        Print styling auto-optimizes for standard A4 landscape dimensions.
      </span>

    </div>
  );
}
