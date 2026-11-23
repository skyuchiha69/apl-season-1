import React from 'react';
import { Shield, TrendingUp, TrendingDown, Info, Trophy } from 'lucide-react';
import { useSeasonOptional } from '../../../app/providers/SeasonProvider';

export const ExtremeRecords: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason2 = activeSeasonId === 'season-2';

  const extremesSeason1 = [
    {
      id: 'high-team-total',
      category: 'HIGHEST TEAM TOTAL IN APL HISTORY',
      value: '291',
      unit: 'Runs in 20.0 Overs',
      teamName: 'KNIGHTS',
      teamColor: '#F8FAFC',
      opponent: 'vs Skyshot',
      stage: 'Match #3 • League Stage',
      icon: TrendingUp,
      accentColor: '#F8FAFC',
      description:
        'The most destructive team innings in APL history. Propelled by Jay’s record-breaking 146 runs, Knights posted 291 against Skyshot in Match 3—a monumental benchmark that stands as the all-time highest team score in the APL archive.',
      contextNote: 'Match 3: Knights defeated Skyshot • All-time APL record total',
    },
    {
      id: 'championship-chase',
      category: 'THE CHAMPIONSHIP CHASE',
      value: '226/7',
      unit: 'In 19.2 Overs (Target: 226)',
      teamName: 'AUTHORS',
      teamColor: '#00E676',
      opponent: 'vs Champions (225/8)',
      stage: 'Match #15 • Grand Final Decider',
      icon: Trophy,
      accentColor: '#00E676',
      description:
        'The defining run chase of APL Season 1. Confronting Champions’ commanding 225/8 total in the Grand Final, Authors completed a breathtaking 226 chase behind A. King’s 108 off 54 balls to win by 3 wickets with four balls to spare.',
      contextNote: 'Match 15 Final: Authors chased 226/7 in 19.2 ov to win title by 3 wickets',
    },
    {
      id: 'lowest-team-total',
      category: 'LOWEST TEAM TOTAL IN APL HISTORY',
      value: '122',
      unit: 'All Out in League Play',
      teamName: 'KNIGHTS',
      teamColor: '#F8FAFC',
      opponent: 'vs Champions',
      stage: 'APL Season 1 League Stage',
      icon: TrendingDown,
      accentColor: '#FF2E4D',
      description:
        'The stark contrast of tournament cricket. Knights were restricted by Champions to 122 in league play—the lowest team total recorded in the APL Season 1 archive.',
      contextNote: 'League Stage: Champions restricted Knights to 122 • Lowest Season 1 total',
    },
  ];

  const extremesSeason2 = [
    {
      id: 'high-team-total',
      category: 'HIGHEST TEAM TOTAL IN APL HISTORY',
      value: '319',
      unit: 'Runs in 20.0 Overs',
      teamName: 'KNIGHTS',
      teamColor: '#F8FAFC',
      opponent: 'vs Champions',
      stage: 'Season 2 League Clash',
      icon: TrendingUp,
      accentColor: '#F8FAFC',
      description:
        'The highest team score ever recorded in APL competition. In an explosive batting masterclass against Champions, Knights smashed 319 runs—shattering their own previous tournament record of 291 from Season 1.',
      contextNote: 'Season 2: Knights posted 319 vs Champions • All-time APL record total',
    },
    {
      id: 'championship-decider',
      category: 'THE CHAMPIONSHIP DECIDER',
      value: 'Won by 4 Wkts',
      unit: 'Grand Final Run Chase',
      teamName: 'SKYSHOT',
      teamColor: '#00D2FF',
      opponent: 'vs Knights',
      stage: 'Season 2 Grand Final',
      icon: Trophy,
      accentColor: '#00D2FF',
      description:
        'The crowning match of APL Season 2. In the championship decider against Knights, Skyshot executed a triumphant run chase to win by 4 wickets and secure their maiden APL championship crown.',
      contextNote: 'Season 2 Grand Final: Skyshot defeated Knights by 4 wickets to claim the title',
    },
    {
      id: 'lowest-team-total',
      category: 'LOWEST TEAM TOTAL IN SEASON 2',
      value: '113',
      unit: 'All Out in League Play',
      teamName: 'SKYSHOT',
      teamColor: '#00D2FF',
      opponent: 'vs Champions',
      stage: 'Season 2 League Stage',
      icon: TrendingDown,
      accentColor: '#FF2E4D',
      description:
        'The stark volatility of tournament cricket. Eventual champions Skyshot were restricted by Champions to 113 in league play—the lowest team score recorded in the APL Season 2 archive.',
      contextNote: 'League Stage: Champions restricted Skyshot to 113 • Lowest Season 2 total',
    },
  ];

  const extremes = isSeason2 ? extremesSeason2 : extremesSeason1;

  return (
    <section id="extreme-records" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-[#B99A5B]" />
            <span>Team Benchmarks &amp; Polar Extremes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            {isSeason2 ? 'EXTREME BENCHMARKS OF SEASON 2' : 'EXTREME BENCHMARKS OF SEASON 1'}
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            {isSeason2
              ? 'From the pinnacle of record-breaking run-scoring to high-stakes playoff clashes and bowling collapses, these team totals define the outer boundaries of APL Season 2 competitive cricket.'
              : 'From the pinnacle of attacking run-scoring to high-pressure finals chasing and bowling suffocations, these team totals define the outer boundaries of APL Season 1 competitive cricket.'}
          </p>
        </div>

        {/* 3 Extreme Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {extremes.map((e) => {
            const Icon = e.icon;
            return (
              <div
                key={e.id}
                className="rounded-xl p-6 sm:p-7 bg-[#0E1626]/75 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between border-b border-[#EAE4D8]/10 pb-3 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B99A5B] font-bold">
                      {e.category}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: e.accentColor }} />
                  </div>

                  {/* Giant Stat Display */}
                  <div className="my-2">
                    <div
                      className="text-5xl sm:text-6xl font-display font-black tracking-tight leading-none"
                      style={{ color: e.accentColor }}
                    >
                      {e.value}
                    </div>
                    <div className="text-xs font-mono text-[#87968B] mt-1">
                      {e.unit}
                    </div>
                  </div>

                  {/* Team & Opponent Strip */}
                  <div className="flex items-center gap-2 my-4">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${e.teamColor}15`,
                        color: e.teamColor,
                        border: `1px solid ${e.teamColor}30`,
                      }}
                    >
                      {e.teamName}
                    </span>
                    <span className="text-xs font-mono text-[#EAE4D8]">{e.opponent}</span>
                  </div>

                  {/* Stage */}
                  <div className="text-xs font-mono text-[#87968B] mb-3">
                    {e.stage}
                  </div>

                  {/* Narrative */}
                  <p className="text-xs sm:text-sm text-[#A69F92] leading-relaxed font-sans mb-4">
                    {e.description}
                  </p>
                </div>

                {/* Context Footnote */}
                <div className="pt-3 border-t border-[#EAE4D8]/10 text-[11px] font-mono text-[#87968B]">
                  {e.contextNote}
                </div>
              </div>
            );
          })}
        </div>

        {/* Archival Integrity Protocol Disclosure */}
        <div className="p-4 rounded-lg bg-[#090C0B]/60 border border-[#EAE4D8]/10 flex items-start gap-3 text-xs font-sans text-[#87968B] leading-relaxed">
          <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#EAE4D8] font-mono uppercase tracking-wider block mb-0.5">
              {isSeason2 ? 'Season 2 Team Scoring Records Historical Designation' : 'The Championship Chase Historical Designation'}
            </strong>
            {isSeason2
              ? 'Knights’ 319 vs Champions stands as the all-time highest team score in APL history, surpassing their Season 1 benchmark of 291. Skyshot’s 4-wicket Grand Final victory is verified as the official championship-deciding fixture of Season 2.'
              : 'Authors’ 226/7 in 19.2 overs to chase down Champions’ 225 in Match 15 is officially designated as The Championship Chase. Because complete second-innings run-chase progression logs are not preserved for all preliminary regular-season matches (Matches 1–12), the archive does not claim this was tournament-wide the "greatest successful chase in tournament history." It is preserved strictly as the verified Grand Final chase that decided the inaugural APL title.'}
          </div>
        </div>
      </div>
    </section>
  );
};
