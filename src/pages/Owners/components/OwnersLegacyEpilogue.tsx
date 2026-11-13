import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart3, Calendar, ArrowRight, Heart } from 'lucide-react';

export const OwnersLegacyEpilogue: React.FC = () => {
  return (
    <footer className="py-16 lg:py-20 relative overflow-hidden bg-[#090C0B]/90 border-t border-[#EAE4D8]/10">
      {/* Background ambient gold glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B99A5B 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Emblem & Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest">
          <Heart className="w-3.5 h-3.5 text-[#FF2E4D]" />
          <span>Epilogue • The Shared Family Legacy</span>
        </div>

        {/* Narrative Title & Reflection */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#EAE4D8] tracking-tight">
            MORE THAN A LEAGUE: A LIVING ROOM DYNASTY
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#87968B] leading-relaxed font-sans">
            APL Season 1 began as a private family experiment—four cousins connected over Google Meet, each backing
            their handpicked squad to claim bragging rights. What emerged was a fiercely contested, unforgettable
            historical tournament that produced 5,945 official batter runs, 101 bowler wickets, a record-shattering 146 by Jay,
            a high-octane 225 defense by Umang, dominant regular-season pacesetting by Shubham, and a legendary 226 chase
            by Dharm to crown Authors the inaugural champions.
          </p>
          <p className="max-w-2xl mx-auto text-sm text-[#87968B] font-sans">
            Every match, run, and wicket recorded in this archive remains a permanent testament to the sportsmanship,
            fierce banter, and unbreakable family bond of the four founding architects.
          </p>
        </div>

        {/* Four Cousins Roll Call Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#87968B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E676]" />
            <span className="text-[#EAE4D8] font-bold">Dharm</span>
            <span>(Authors)</span>
          </div>
          <span className="text-[#EAE4D8]/20">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF2E4D]" />
            <span className="text-[#EAE4D8] font-bold">Umang</span>
            <span>(Champions)</span>
          </div>
          <span className="text-[#EAE4D8]/20">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
            <span className="text-[#EAE4D8] font-bold">Shubham</span>
            <span>(Skyshot)</span>
          </div>
          <span className="text-[#EAE4D8]/20">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F8FAFC]" />
            <span className="text-[#EAE4D8] font-bold">Jay</span>
            <span>(Knights)</span>
          </div>
        </div>

        {/* Archive Exploration Navigation CTAs */}
        <div className="pt-8 border-t border-[#EAE4D8]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <Link
            to="/teams"
            className="group p-4 rounded-lg bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all block"
          >
            <div className="flex items-center justify-between text-[#B99A5B] mb-1.5">
              <Shield className="w-4 h-4" />
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
              Franchises Hub
            </div>
            <p className="text-xs text-[#87968B] mt-1 font-sans">
              Inspect the four team portals, rosters, and franchise performance archives.
            </p>
          </Link>

          <Link
            to="/matches"
            className="group p-4 rounded-lg bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all block"
          >
            <div className="flex items-center justify-between text-[#B99A5B] mb-1.5">
              <Calendar className="w-4 h-4" />
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
              Championship Match Centre
            </div>
            <p className="text-xs text-[#87968B] mt-1 font-sans">
              Review all 15 tournament fixtures and the preserved Grand Final scorecard.
            </p>
          </Link>

          <Link
            to="/stats"
            className="group p-4 rounded-lg bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all block"
          >
            <div className="flex items-center justify-between text-[#B99A5B] mb-1.5">
              <BarChart3 className="w-4 h-4" />
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
              Statistics Hub
            </div>
            <p className="text-xs text-[#87968B] mt-1 font-sans">
              Examine the Orange Cap, Purple Cap, and 5,945-run reconciliation ledger.
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};
