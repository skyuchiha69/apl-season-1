import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { getAggregateAccounting } from '../../../data/selectors';
import { Scale, CheckCircle2, Info } from 'lucide-react';

export const ReconciliationLedger: React.FC = () => {
  const { seasonData } = useSeason();
  const accounting = getAggregateAccounting(seasonData);

  return (
    <section
      id="reconciliation"
      aria-labelledby="reconciliation-heading"
      className="py-10 sm:py-16 relative overflow-hidden"
    >
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Scale className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>Audit Accounting & Statistical Transparency</span>
            </div>
            <h2
              id="reconciliation-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              Statistical Reconciliation Ledger
            </h2>
          </div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Mathematically Balanced</span>
          </div>
        </div>

        {/* The Mathematical Ledger Board */}
        <div className="rounded-xl border border-[#EAE4D8]/12 bg-[#0E1713] p-5 sm:p-8 space-y-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {/* Term 1 */}
            <div className="p-4 rounded-lg bg-[#14201A] border border-[#EAE4D8]/8 space-y-1">
              <span className="text-[10px] font-mono text-[#87968B] uppercase tracking-wider block">
                Source Innings Runs
              </span>
              <div className="font-display text-3xl sm:text-4xl font-black text-[#EAE4D8]">
                {accounting.sourceInningsAggregate.toLocaleString()}
              </div>
              <span className="text-[11px] font-sans text-[#87968B] block">
                Sum of all printed player innings
              </span>
            </div>

            {/* Term 2 */}
            <div className="p-4 rounded-lg bg-[#14201A] border border-amber-500/20 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                + Winsmoke Reconstruction
              </span>
              <div className="font-display text-3xl sm:text-4xl font-black text-amber-400">
                +{accounting.winsmokeReconstruction}
              </div>
              <span className="text-[11px] font-sans text-[#87968B] block">
                Reconstructed unprinted 6th match score
              </span>
            </div>

            {/* Term 3 */}
            <div className="p-4 rounded-lg bg-[#14201A] border border-[#B99A5B]/20 space-y-1">
              <span className="text-[10px] font-mono text-[#B99A5B] uppercase tracking-wider block">
                + Unattributed Aggregate Adjustment
              </span>
              <div className="font-display text-3xl sm:text-4xl font-black text-[#B99A5B]">
                +{accounting.remainingAggregateAdjustment}
              </div>
              <span className="text-[11px] font-sans text-[#87968B] block">
                Unresolved source discrepancy
              </span>
            </div>

            {/* Total */}
            <div className="p-4 rounded-lg bg-emerald-950/20 border-2 border-emerald-500/40 space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block">
                = Official Recorded Batter Runs
              </span>
              <div className="font-display text-3xl sm:text-4xl font-black text-emerald-300">
                {accounting.officialRecordedBatterAggregate.toLocaleString()}
              </div>
              <span className="text-[11px] font-sans text-emerald-400/80 font-mono block">
                100% Authoritative Aggregate
              </span>
            </div>
          </div>

          {/* Bowler Wickets Statement */}
          <div className="pt-4 border-t border-[#EAE4D8]/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#87968B] gap-2">
            <div>
              <span className="text-[#EAE4D8] font-bold">TOTAL BOWLER DISMISSALS: </span>
              <span className="font-display text-base font-black text-emerald-400">
                {`${accounting.totalBowlerWickets} Recorded Bowler Wickets`}
              </span>
            </div>
            <span className="text-[#87968B]">
              Zero adjustments applied • 100% verified across 4 franchise squads (Authors: 28, Champions: 29, Skyshot: 31, Knights: 13)
            </span>
          </div>
        </div>

        {/* Detailed Archival Footnotes */}
        <div className="space-y-3">
          <div className="rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 p-4 text-xs font-sans text-[#A69F92] flex items-start space-x-3 leading-relaxed">
            <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-semibold text-[#EAE4D8] font-mono text-[11px] uppercase tracking-wider">
                Footnote 1 • Winsmoke Reconstruction (+13)
              </p>
              <p>
                Knights' official printed total is 119 runs, while the five printed innings sum to 106. The 13-run difference
                represents a reconstructed unprinted sixth-match score. It is not a verified individual match performance
                and must not be inserted into the innings sequence.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 p-4 text-xs font-sans text-[#A69F92] flex items-start space-x-3 leading-relaxed">
            <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-semibold text-[#EAE4D8] font-mono text-[11px] uppercase tracking-wider">
                Footnote 2 • Unattributed Aggregate Adjustment (+2)
              </p>
              <p>
                An unresolved discrepancy between the historical source record totals. It has not been assigned to any player,
                team, match, or innings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
