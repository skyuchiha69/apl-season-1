import React from 'react';
import { Link } from 'react-router-dom';
import { useSeasonOptional } from '../../app/providers/SeasonProvider';
import { HallOfFameHero } from './components/HallOfFameHero';
import { ChampionshipLaurels } from './components/ChampionshipLaurels';
import { CaptainsOfGlory } from './components/CaptainsOfGlory';
import { TheCenturyClub } from './components/TheCenturyClub';
import { HistoricBowlingHauls } from './components/HistoricBowlingHauls';
import { ExtremeRecords } from './components/ExtremeRecords';
import { Award, ArrowRight, Shield, Calendar, BarChart3, Users } from 'lucide-react';

export const HallOfFamePage: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason2 = activeSeasonId === 'season-2';

  return (
    <main className="min-h-screen bg-[#090C0B] text-[#EAE4D8] selection:bg-[#B99A5B]/20 selection:text-[#B99A5B]">
      {/* 1. Hero & Archival Milestone Counters */}
      <HallOfFameHero />

      {/* 2. The Championship Crown & Four Pillars */}
      <ChampionshipLaurels />

      {/* 3. The Golden Caps (Orange & Purple Immortals) */}
      <CaptainsOfGlory />

      {/* 4. The Century Club (6 or 7 Historic Hundreds) */}
      <TheCenturyClub />

      {/* 5. Historic Bowling Feats (Hauls & Purple Cap Hierarchy) */}
      <HistoricBowlingHauls />

      {/* 6. Extreme Records (Scoring Benchmarks & Extremes) */}
      <ExtremeRecords />

      {/* 7. Commemorative Epilogue & Archive Navigation */}
      <section className="py-16 lg:py-20 border-t border-[#EAE4D8]/10 bg-gradient-to-b from-[#090C0B] to-[#060807]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex p-3 rounded-full bg-[#111815] border border-[#B99A5B]/30 text-[#B99A5B] shadow-lg">
            <Award className="w-8 h-8 text-[#B99A5B]" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#EAE4D8] uppercase tracking-tight">
              A Living Room Dynasty Preserved Forever
            </h2>
            <p className="text-sm text-[#A69F92] leading-relaxed font-sans">
              {isSeason2
                ? 'From living room shouting matches to private digital scorecards, APL Season 2 elevated the competitive spirit of four cousins across 15 intense fixtures. These records celebrate Skyshot’s championship crown, Champions’ Golden Cap sweep, and the permanent milestones of Season 2.'
                : 'From living room shouting matches to private digital scorecards, APL Season 1 captured the competitive spirit of four cousins who refused to treat cricket as just a game. These records remain the permanent historical foundation of the Legends Legacy.'}
            </p>
          </div>

          {/* Cross-Link Portal Cards */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
            <Link
              to="/teams"
              className="p-4 rounded-xl bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all group block"
            >
              <div className="flex items-center justify-between text-[#B99A5B] mb-2">
                <Shield className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
                Franchises Hub
              </div>
              <p className="text-xs text-[#87968B] mt-1 font-sans">
                Explore the four team portals, rosters, and match histories.
              </p>
            </Link>

            <Link
              to="/owners"
              className="p-4 rounded-xl bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all group block"
            >
              <div className="flex items-center justify-between text-[#B99A5B] mb-2">
                <Users className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
                The Four Cousins
              </div>
              <p className="text-xs text-[#87968B] mt-1 font-sans">
                Review the owners documentary chapters and rivalry matrix.
              </p>
            </Link>

            <Link
              to="/matches"
              className="p-4 rounded-xl bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all group block"
            >
              <div className="flex items-center justify-between text-[#B99A5B] mb-2">
                <Calendar className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
                Match Centre
              </div>
              <p className="text-xs text-[#87968B] mt-1 font-sans">
                Inspect all 15 fixtures and the Grand Final scorecard.
              </p>
            </Link>

            <Link
              to="/stats"
              className="p-4 rounded-xl bg-[#0E1626]/60 hover:bg-[#0E1626]/90 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all group block"
            >
              <div className="flex items-center justify-between text-[#B99A5B] mb-2">
                <BarChart3 className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-sm font-display font-bold text-[#EAE4D8] group-hover:text-white">
                Statistics Hub
              </div>
              <p className="text-xs text-[#87968B] mt-1 font-sans">
                {isSeason2
                  ? 'Review the points table and the 5,681-run audit ledger.'
                  : 'Review the points table and the 5,945-run audit ledger.'}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

