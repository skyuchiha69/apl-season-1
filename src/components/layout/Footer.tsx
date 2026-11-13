import React from 'react';
import { Container } from './Container';
import { Trophy, Award, Shield, FileText } from 'lucide-react';
import { season1Reconciliation } from '../../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080C] border-t border-white/10 pt-12 pb-8 mt-20 text-slate-400 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: League Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/brand/apl-logo.png"
                alt="APL Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h4 className="font-display text-lg font-bold text-white tracking-wider">
                  ASHES PREMIER LEAGUE
                </h4>
                <p className="text-xs text-amber-400 font-semibold tracking-widest uppercase">
                  Season 1: The Legends Legacy
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              The permanent interactive digital archive of APL Season 1. Created, owned, and contested
              by four cousins across 15 high-stakes PC cricket matches, culminating in the Authors’
              historic 226 chase in the final.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 font-mono">
                4 Teams
              </span>
              <span className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 font-mono">
                15 Matches
              </span>
              <span className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 font-mono">
                5,945 Runs
              </span>
              <span className="text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 font-mono">
                101 Wickets
              </span>
            </div>
          </div>

          {/* Col 2: The Four Cousins */}
          <div className="space-y-2">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" /> The Four Cousins
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <span className="text-blue-400 font-semibold">Shubham (Sky)</span> — SKYSHOT
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
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Season 1 Honors
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <span className="text-amber-300">Champions:</span> AUTHORS
              </li>
              <li>
                <span className="text-amber-400">Orange Cap:</span> A. King (527 runs)
              </li>
              <li>
                <span className="text-purple-400">Purple Cap:</span> N. Sky (12 wickets)
              </li>
              <li>
                <span className="text-cyan-400">Highest Score:</span> Jay (146 runs)
              </li>
            </ul>
          </div>
        </div>

        {/* Audit & Historical Methodology Disclosure */}
        <div className="pt-6 pb-4 border-b border-white/5 text-[11px] text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Historical Data Integrity & Reconciliation Disclosure:</span>
          </div>
          <p className="leading-relaxed">
            All statistics, scores, player rosters, and match results are strictly derived from the official 15-page
            APL Season 1 PDF archive. Individual printed scores total {season1Reconciliation.sourceInningsAggregate} runs.
            An authorized historical reconciliation attributes {season1Reconciliation.winsmokeReconstruction} runs to
            Winsmoke’s unprinted 6th match score (reconciling his printed 5-match sum of 106 with his official total of 119)
            alongside an unresolved {season1Reconciliation.remainingAggregateAdjustment}-run aggregate adjustment to
            reach the official recorded batter total of {season1Reconciliation.officialRecordedBatterAggregate} runs.
            Bowler wickets total exactly {season1Reconciliation.officialRecordedBowlerWickets} with zero adjustments.
          </p>
        </div>

        {/* Bottom copyright & tribute */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Ashes Premier League (APL). All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-400" /> Built with pride for the Legends Legacy.
          </p>
        </div>
      </Container>
    </footer>
  );
};

