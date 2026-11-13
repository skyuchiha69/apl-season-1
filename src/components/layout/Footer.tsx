import React from 'react';
import { Container } from './Container';
import { Trophy, Award, Shield, FileText } from 'lucide-react';
import { season1Reconciliation } from '../../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090C0B] border-t border-[#EAE4D8]/10 pt-14 pb-10 text-[#87968B] text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#EAE4D8]/10">
          {/* Col 1: League Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/brand/apl-logo.png"
                alt="APL Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h4 className="font-display text-lg font-bold text-[#EAE4D8] tracking-wider">
                  ASHES PREMIER LEAGUE
                </h4>
                <p className="text-xs text-[#B99A5B] font-semibold tracking-widest uppercase font-mono">
                  Season 1: The Legends Legacy
                </p>
              </div>
            </div>
            <p className="text-xs text-[#A69F92] leading-relaxed max-w-lg font-sans">
              The permanent interactive digital archive of APL Season 1. Created, owned, and contested
              by four cousins across 15 high-stakes PC cricket matches, culminating in the Authors’
              historic 226 chase in the final.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="bg-[#111815] border border-[#EAE4D8]/10 px-2.5 py-0.5 rounded text-[#EAE4D8]">
                4 Franchises
              </span>
              <span className="bg-[#111815] border border-[#EAE4D8]/10 px-2.5 py-0.5 rounded text-[#EAE4D8]">
                15 Matches
              </span>
              <span className="bg-[#111815] border border-[#EAE4D8]/10 px-2.5 py-0.5 rounded text-[#B99A5B]">
                5,945 Batter Runs
              </span>
              <span className="bg-[#111815] border border-[#EAE4D8]/10 px-2.5 py-0.5 rounded text-[#EAE4D8]">
                101 Wickets
              </span>
            </div>
          </div>

          {/* Col 2: The Four Cousins */}
          <div className="space-y-2">
            <h5 className="font-display text-xs font-bold text-[#EAE4D8] uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#B99A5B]" /> The Four Cousins
            </h5>
            <ul className="space-y-1.5 text-xs text-[#A69F92] font-mono">
              <li>
                <span className="text-cyan-400 font-semibold">Shubham (Sky)</span> — SKYSHOT
              </li>
              <li>
                <span className="text-slate-300 font-semibold">Jay (Red)</span> — KNIGHTS
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">Dharm (Green)</span> — AUTHORS (Champions)
              </li>
              <li>
                <span className="text-rose-400 font-semibold">Umang (UB)</span> — CHAMPIONS
              </li>
            </ul>
          </div>

          {/* Col 3: Season Honors */}
          <div className="space-y-2">
            <h5 className="font-display text-xs font-bold text-[#EAE4D8] uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#B99A5B]" /> Season 1 Honors
            </h5>
            <ul className="space-y-1.5 text-xs text-[#A69F92] font-mono">
              <li>
                <span className="text-[#87968B]">Champions:</span> <strong className="text-emerald-400">AUTHORS</strong>
              </li>
              <li>
                <span className="text-[#87968B]">Orange Cap:</span> <span className="text-[#B99A5B] font-bold">A. King (527 runs)</span>
              </li>
              <li>
                <span className="text-[#87968B]">Purple Cap:</span> <span className="text-purple-300">N. Sky (12 wickets)</span>
              </li>
              <li>
                <span className="text-[#87968B]">Highest Score:</span> <span className="text-[#EAE4D8]">Jay (146 runs)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Audit & Historical Methodology Disclosure */}
        <div className="pt-6 pb-4 border-b border-[#EAE4D8]/5 text-[11px] text-[#87968B] space-y-1 font-sans">
          <div className="flex items-center gap-1.5 text-[#EAE4D8] font-semibold font-mono">
            <FileText className="w-3.5 h-3.5 text-[#B99A5B]" />
            <span>Historical Data Integrity & Reconciliation Disclosure:</span>
          </div>
          <p className="leading-relaxed">
            All statistics, scores, player rosters, and match results are strictly derived from the official 15-page
            APL Season 1 PDF archive. Individual printed scores total {season1Reconciliation.sourceInningsAggregate} runs.
            An authorized historical reconciliation attributes {season1Reconciliation.winsmokeReconstruction} runs to
            Winsmoke’s unprinted 6th match score alongside an unresolved {season1Reconciliation.remainingAggregateAdjustment}-run
            aggregate adjustment to reach the official recorded batter total of {season1Reconciliation.officialRecordedBatterAggregate} runs.
            Bowler wickets total exactly {season1Reconciliation.officialRecordedBowlerWickets} with zero adjustments.
          </p>
        </div>

        {/* Bottom copyright & tribute */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#87968B] gap-2 font-mono">
          <p>© {new Date().getFullYear()} Ashes Premier League (APL). All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#A69F92]">
            <Award className="w-3.5 h-3.5 text-[#B99A5B]" /> Preserving the Legends Legacy archive.
          </p>
        </div>
      </Container>
    </footer>
  );
};
