/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Search, 
  Printer, 
  TrendingUp, 
  Users, 
  Settings, 
  ShieldAlert, 
  ChevronRight, 
  BookOpen, 
  Layers, 
  HelpCircle,
  Sparkles,
  Award,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { AARANYA_DPR_DATA, DPRSection } from '../dprData';

interface DetailedProjectReportProps {
  onAskCopilot: (text: string) => void;
}

export default function DetailedProjectReport({ onAskCopilot }: DetailedProjectReportProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>('executive-summary');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = ['All', 'Strategic', 'Market', 'Operational', 'Financial', 'Risk'];

  // Filter sections by category and search query
  const filteredSections = useMemo(() => {
    return AARANYA_DPR_DATA.filter(section => {
      const matchesCategory = selectedCategory === 'All' || section.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (section.bulletPoints && section.bulletPoints.some(bp => bp.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeSection = useMemo(() => {
    return AARANYA_DPR_DATA.find(s => s.id === activeSectionId) || AARANYA_DPR_DATA[0];
  }, [activeSectionId]);

  const handlePrint = () => {
    window.print();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strategic': return <BookOpen className="w-4 h-4 text-amber-600" />;
      case 'Market': return <Users className="w-4 h-4 text-blue-600" />;
      case 'Operational': return <Settings className="w-4 h-4 text-emerald-600" />;
      case 'Financial': return <TrendingUp className="w-4 h-4 text-amber-700" />;
      case 'Risk': return <ShieldAlert className="w-4 h-4 text-rose-600" />;
      default: return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gold/30 shadow-xl overflow-hidden font-sans text-forest">
      
      {/* HEADER SECTION (McKinsey Corporate Style) */}
      <div className="bg-forest text-beige px-6 py-6 sm:px-8 border-b border-gold/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
        
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] bg-gold/20 border border-gold/40 text-gold-light px-2.5 py-0.5 rounded font-mono uppercase tracking-widest">
              DPR Underwriting Dossier
            </span>
            <span className="text-[10px] text-beige/60 font-mono">ID: AR-2026-BANK-DPR</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white">
            Detailed Project Report <span className="font-sans text-lg text-gold font-light">& Proposal</span>
          </h3>
          <p className="text-xs text-beige-dark/70 font-sans tracking-wide mt-1">
            Formally curated for banking appraisal, private underwriters, and nationalized loans (₹50 Lakhs limit).
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gold text-forest-dark font-medium text-xs rounded-lg hover:bg-gold-light transition-all active:scale-95 shadow-md"
            title="Open standard browser print view of this dossier"
          >
            <Printer className="w-4 h-4" /> Print / PDF Dossier
          </button>
        </div>
      </div>

      {/* SEARCH AND CATEGORY FILTER BAR */}
      <div className="bg-[#FAF9F6] border-b border-gold/20 px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-medium tracking-wider uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-forest text-beige font-semibold shadow-sm'
                  : 'bg-white hover:bg-gold/5 text-forest/70 border border-gold/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Search Box */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-forest/40" />
          <input
            type="text"
            placeholder="Search report database..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gold/25 rounded-md pl-9 pr-3 py-1.5 text-xs text-forest focus:outline-none focus:border-gold placeholder:text-forest/30"
          />
        </div>
      </div>

      {/* MAIN LAYOUT: SPLIT SIDEBAR INDEX & CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        
        {/* LEFT SIDEBAR INDEX (4/12 Width) */}
        <div className="col-span-1 md:col-span-4 border-r border-gold/20 bg-[#FAF9F6] overflow-y-auto max-h-[550px] p-4 space-y-2">
          <div className="text-[10px] font-mono tracking-wider text-forest/50 uppercase px-2 mb-2">
            Document Structure ({filteredSections.length} sections found)
          </div>
          
          {filteredSections.map(section => {
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all flex gap-3 items-start group ${
                  isActive 
                    ? 'bg-white border-gold text-forest shadow-md font-medium' 
                    : 'bg-transparent border-transparent hover:bg-white hover:border-gold/20 text-forest/75'
                }`}
              >
                <div className={`mt-0.5 p-1 rounded-md ${isActive ? 'bg-gold/15' : 'bg-gold/5'}`}>
                  {getCategoryIcon(section.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-serif leading-snug truncate ${isActive ? 'text-forest font-bold' : 'text-forest/90'}`}>
                      {section.title}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 text-gold/60 transition-transform ${isActive ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100'}`} />
                  </div>
                  <p className="text-[9px] text-forest/50 font-sans tracking-wide truncate mt-0.5">
                    {section.subtitle}
                  </p>
                </div>
              </button>
            );
          })}

          {filteredSections.length === 0 && (
            <div className="p-8 text-center text-xs text-forest/40 italic">
              No matching report sections found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR CONTENT (8/12 Width) */}
        <div className="col-span-1 md:col-span-8 p-6 sm:p-8 bg-white overflow-y-auto max-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Category tag & prompt helper */}
              <div className="flex justify-between items-center flex-wrap gap-2 border-b border-gold/15 pb-4">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest bg-gold/10 text-gold-dark border border-gold/25 px-2.5 py-0.5 rounded-full">
                    {activeSection.category} Category
                  </span>
                  <p className="text-[10px] text-forest/40 font-mono mt-1">Section Reference: AAR-DPR-#{activeSection.id.toUpperCase()}</p>
                </div>
                
                <button
                  onClick={() => onAskCopilot(`Please summarize and detail the '${activeSection.title}' section of the Detailed Project Report for a bank loan underwriter.`)}
                  className="text-[9px] font-mono tracking-wider text-gold-dark hover:text-gold uppercase bg-gold/5 hover:bg-gold/15 px-3 py-1.5 rounded-md border border-gold/20 transition-all flex items-center gap-1 active:scale-95"
                >
                  <Sparkles className="w-3 h-3 text-gold" /> Ask AI to Appraise Section
                </button>
              </div>

              {/* Title Header */}
              <div>
                <h4 className="font-serif text-2xl font-light text-forest tracking-wide">
                  {activeSection.title}
                </h4>
                <p className="text-xs text-gold-dark font-medium italic mt-1 tracking-wide uppercase font-sans">
                  {activeSection.subtitle}
                </p>
              </div>

              {/* Narrative Content */}
              <div className="space-y-4 text-xs text-forest/80 leading-relaxed font-sans">
                {activeSection.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Tables (If Any) */}
              {activeSection.tables && activeSection.tables.map((table, tIdx) => (
                <div key={tIdx} className="my-6 overflow-x-auto border border-gold/20 rounded-xl shadow-sm">
                  <table className="w-full text-[11px] text-left border-collapse bg-white">
                    <thead>
                      <tr className="bg-forest text-beige border-b border-gold/30">
                        {table.headers.map((hdr, hIdx) => (
                          <th key={hIdx} className="px-3.5 py-2.5 font-serif font-light tracking-wider text-[10px] uppercase">
                            {hdr}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gold/10 font-sans text-forest/90">
                      {table.rows.map((row, rIdx) => (
                        <tr 
                          key={rIdx} 
                          className={`transition-colors hover:bg-gold/5 ${
                            rIdx % 2 === 1 ? 'bg-[#FAF9F6]/40' : 'bg-white'
                          } ${row[0] && row[0].includes("Total") ? "font-semibold bg-gold/10 border-t border-gold/40" : ""}`}
                        >
                          {row.map((val, cIdx) => (
                            <td key={cIdx} className="px-3.5 py-2.5 border-b border-gold/5">
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {table.caption && (
                    <div className="bg-[#FAF9F6] border-t border-gold/10 px-3.5 py-1.5 text-[9px] text-forest/50 italic font-mono text-center">
                      {table.caption}
                    </div>
                  )}
                </div>
              ))}

              {/* Bullet Points (If Any) */}
              {activeSection.bulletPoints && (
                <div className="bg-[#FAF9F6]/50 border border-gold/15 p-4 rounded-xl space-y-2.5">
                  <div className="text-[10px] font-mono tracking-wider text-forest/60 uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-gold" /> Key Core Provisions
                  </div>
                  <ul className="space-y-2">
                    {activeSection.bulletPoints.map((bp, bpIdx) => {
                      const splitBp = bp.split(':');
                      const title = splitBp[0];
                      const rest = splitBp.slice(1).join(':');
                      return (
                        <li key={bpIdx} className="text-xs text-forest/85 flex items-start gap-2">
                          <span className="text-gold font-bold mt-1 shrink-0">•</span>
                          <div>
                            {rest ? (
                              <>
                                <strong className="text-forest font-semibold">{title}:</strong>
                                <span>{rest}</span>
                              </>
                            ) : (
                              <span>{bp}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Strategic Insights / Underwriter Tips */}
              {activeSection.insights && (
                <div className="bg-rose-950/5 border border-rose-900/10 p-4 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-serif text-[11px] font-bold text-rose-950 uppercase tracking-wider">
                      Underwriter Risk Assessment Tip
                    </span>
                    {activeSection.insights.map((insight, insIdx) => (
                      <p key={insIdx} className="text-xs text-forest/75 leading-relaxed font-sans">
                        {insight}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Prompt Help Box */}
              <div className="border border-gold/10 p-3.5 rounded-lg bg-gold/5 flex justify-between items-center flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-[10px] text-forest/60 font-sans">
                    Have underwriting or collateral queries regarding this specific phase?
                  </span>
                </div>
                <button
                  onClick={() => onAskCopilot(`Analyze this specific phase: ${activeSection.title}. Please provide a standard Goldman Sachs structured SWOT or debt risk breakdown.`)}
                  className="text-[9px] font-mono text-forest bg-white border border-gold/30 hover:border-gold/60 px-3 py-1 rounded shadow-sm hover:bg-gold/5 shrink-0 transition-all active:scale-95"
                >
                  Examine Section
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* FOOTER CONFIDENTIALITY */}
      <div className="bg-[#FAF9F6] border-t border-gold/25 px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans text-forest/60 gap-2">
        <span className="font-mono">Compiled by McKinsey, Goldman Sachs & Indian FMCG Experts</span>
        <span className="font-bold text-gold-dark uppercase tracking-widest text-[9px]">CONFIDENTIAL BANK PROPOSAL DOSSIER</span>
        <span className="font-mono">Page Reference: Aaranya™ Corp AR-2026</span>
      </div>

    </div>
  );
}
