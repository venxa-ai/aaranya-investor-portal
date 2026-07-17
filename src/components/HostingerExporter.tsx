/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Server, 
  FileText,
  AlertCircle
} from 'lucide-react';

export default function HostingerExporter() {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'guide'>('preview');

  useEffect(() => {
    // Fetch the raw investor.html file we created in public directory
    fetch('/investor.html')
      .then(res => {
        if (!res.ok) throw new Error('Could not fetch template file');
        return res.text();
      })
      .then(text => {
        setHtmlCode(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading single file HTML:', err);
        setLoading(false);
      });
  }, []);

  const handleCopy = () => {
    if (!htmlCode) return;
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!htmlCode) return;
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl border border-gold/30 shadow-xl overflow-hidden font-sans text-forest">
      
      {/* HEADER SECTION (Luxury Brand Style) */}
      <div className="bg-forest text-beige px-6 py-6 sm:px-8 border-b border-gold/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
        
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] bg-gold/20 border border-gold/40 text-gold-light px-2.5 py-0.5 rounded font-mono uppercase tracking-widest">
              Single-File Portal Exporter
            </span>
            <span className="text-[10px] text-beige/60 font-mono">Target: Hostinger Shared Hosting</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white">
            Hostinger Single-File <span className="font-sans text-lg text-gold font-light">Investor Portal</span>
          </h3>
          <p className="text-xs text-beige-dark/70 font-sans tracking-wide mt-1">
            One-click download or copy of your fully self-contained HTML file (CSS/JS integrated) designed for immediate live deployment.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gold text-forest-dark font-medium text-xs rounded-lg hover:bg-gold-light transition-all active:scale-95 shadow-md"
            title="Download index.html file"
            disabled={loading}
          >
            <Download className="w-4 h-4" /> Download index.html
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-forest-light border border-gold/30 text-gold-light font-medium text-xs rounded-lg hover:bg-forest-light/80 transition-all active:scale-95 shadow-md"
            title="Copy entire code to clipboard"
            disabled={loading}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied Code!' : 'Copy Portal Code'}
          </button>
        </div>
      </div>

      {/* TABS SELECTOR */}
      <div className="flex bg-gray-light p-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'preview' 
              ? 'bg-forest text-gold-light shadow-sm' 
              : 'text-forest/70 hover:text-forest'
          }`}
        >
          Live Sandbox Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'code' 
              ? 'bg-forest text-gold-light shadow-sm' 
              : 'text-forest/70 hover:text-forest'
          }`}
        >
          Inspect HTML Source Code
        </button>
        <button
          onClick={() => setActiveTab('guide')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'guide' 
              ? 'bg-forest text-gold-light shadow-sm' 
              : 'text-forest/70 hover:text-forest'
          }`}
        >
          Hostinger Upload Guide
        </button>
      </div>

      {/* CONTENT AREA */}
      <div className="p-6 min-h-[500px] flex flex-col bg-cream/30">
        
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20 text-forest/50">
            <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin mb-4" />
            <span className="font-mono text-xs">Assembling self-contained modules...</span>
          </div>
        ) : (
          <>
            {activeTab === 'preview' && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-lg text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    Below is an interactive live-preview of the fully self-contained index.html which is ready for your Hostinger shared hosting account. Scroll inside the frame to test animations and layout responsiveness.
                  </p>
                </div>
                <div className="border border-gold/20 rounded-xl overflow-hidden shadow-inner bg-white flex-1 h-[600px]">
                  <iframe 
                    src="/investor.html" 
                    title="Self-Contained Investor Portal Preview" 
                    className="w-full h-full border-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs text-forest/60">
                  <span className="font-mono">index.html (Total length: {htmlCode.length.toLocaleString()} characters)</span>
                  <button 
                    onClick={handleCopy}
                    className="text-gold-dark hover:text-gold flex items-center gap-1 font-semibold"
                  >
                    {copied ? 'Copied!' : 'Copy Code Block'}
                  </button>
                </div>
                <pre className="bg-forest-dark text-emerald-400 p-4 rounded-xl overflow-x-auto text-[11px] font-mono leading-relaxed h-[500px] shadow-inner select-text">
                  <code>{htmlCode}</code>
                </pre>
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="flex-1 max-w-3xl mx-auto py-4 space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-gold/20">
                  <Server className="w-8 h-8 text-gold-dark" />
                  <div>
                    <h4 className="font-serif text-lg font-bold">Hostinger Live Setup Instructions</h4>
                    <p className="text-xs text-forest/60">Deploy your single-file luxury portal in less than 2 minutes.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-forest text-gold-light flex items-center justify-center font-mono text-xs font-bold shrink-0">1</div>
                    <div className="space-y-1">
                      <h5 className="font-sans text-sm font-semibold">Download index.html File</h5>
                      <p className="text-xs text-forest/75 leading-relaxed">
                        Click the <strong className="text-gold-dark">"Download index.html"</strong> button above. This will bundle all CSS styling, luxurious typography, embedded SVG icons, and reactive financial modules into one single, clean file onto your hard drive.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-forest text-gold-light flex items-center justify-center font-mono text-xs font-bold shrink-0">2</div>
                    <div className="space-y-1">
                      <h5 className="font-sans text-sm font-semibold">Log into Hostinger hPanel</h5>
                      <p className="text-xs text-forest/75 leading-relaxed">
                        Navigate to your Hostinger dashboard, log in, find your hosting plan, and click <strong className="text-forest">"File Manager"</strong> or connect via secure FTP/SFTP using your Hostinger credentials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-forest text-gold-light flex items-center justify-center font-mono text-xs font-bold shrink-0">3</div>
                    <div className="space-y-1">
                      <h5 className="font-sans text-sm font-semibold">Upload to public_html Folder</h5>
                      <p className="text-xs text-forest/75 leading-relaxed">
                        Open the <strong className="font-mono bg-gray-100 px-1 py-0.5 rounded">public_html</strong> directory. If there's an existing default `index.php` or `index.html` file provided by Hostinger, rename it or delete it. Then, drag and drop your downloaded <strong className="font-mono bg-gray-100 px-1 py-0.5 rounded">index.html</strong> file directly into <strong className="font-mono bg-gray-100 px-1 py-0.5 rounded">public_html</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-forest text-gold-light flex items-center justify-center font-mono text-xs font-bold shrink-0">4</div>
                    <div className="space-y-1">
                      <h5 className="font-sans text-sm font-semibold">Test Your Live URL</h5>
                      <p className="text-xs text-forest/75 leading-relaxed">
                        Type your domain name (e.g. <span className="text-gold-dark underline">www.aaranya.com</span>) in any browser. Your magnificent, interactive luxury investor portal is now fully live and accessible around the world!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-forest-light text-beige p-4 rounded-xl mt-6 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <strong className="text-gold-light">Why Single-File Delivery?</strong>
                    <p className="opacity-80 leading-relaxed">
                      This delivery style avoids complex Node compile steps, broken relative asset references, and stylesheet configuration errors. Everything is pre-bundled with extreme styling performance so it loads instantly even on Hostinger's standard shared servers.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
