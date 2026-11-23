import React from 'react';
import { Container } from '../../../components/layout/Container';
import { Shield, Calendar, Award, Target } from 'lucide-react';
import { useSeasonOptional } from '../../../app/providers/SeasonProvider';

export const SeasonStatsStrip: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason1 = activeSeasonId === 'season-1';

  const stats = [
    {
      num: '04',
      label: 'Franchises',
      detail: 'Independently owned & drafted by cousins',
      icon: Shield,
    },
    {
      num: '15',
      label: 'Fixtures',
      detail: '12 League-stage matches + 3 Playoffs',
      icon: Calendar,
    },
    {
      num: isSeason1 ? '5,945' : '5,681',
      label: 'Official Recorded Batter Runs',
      detail: 'Official aggregate across all recorded innings',
      icon: Target,
      highlight: true,
    },
    {
      num: isSeason1 ? '101' : '117',
      label: 'Bowler Wickets',
      detail: isSeason1
        ? '100% verified dismissals recorded in dataset'
        : '100% verified dismissals across 21 recorded bowlers',
      icon: Award,
    },
  ];

  return (
    <section
      aria-label={
        isSeason1
          ? 'Season 1 Tournament Aggregate Statistics'
          : 'Season 2 Tournament Aggregate Statistics'
      }
      className="bg-[#0B1512] border-b border-[#EAE4D8]/10 py-6 sm:py-10"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`p-3.5 sm:p-0 rounded-lg sm:rounded-none bg-[#0E1713] sm:bg-transparent border border-[#EAE4D8]/8 sm:border-0 ${
                  idx > 0 ? 'sm:border-l sm:border-[#EAE4D8]/10 sm:pl-6 lg:pl-8' : ''
                } space-y-1.5 sm:space-y-2`}
              >
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#87968B]">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
                  <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.2em] font-medium truncate">
                    {s.label}
                  </span>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span
                    className={`font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                      s.highlight ? 'text-[#B99A5B]' : 'text-[#EAE4D8]'
                    }`}
                  >
                    {s.num}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#A69F92] font-sans leading-relaxed">
                  {s.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Archival Reconciliation Ledger Note */}
        <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-[#EAE4D8]/5 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#87968B] gap-1.5 sm:gap-2 leading-relaxed break-words">
          {isSeason1 ? (
            <>
              <span>
                STATISTICAL RECONCILIATION: 5,945 RECORDED BATTER RUNS (5,930 INNINGS + 13 RECONSTRUCTED + 2 UNATTRIBUTED AGGREGATE ADJUSTMENT)
              </span>
              <span className="text-[#B99A5B] shrink-0">MATHEMATICALLY BALANCED</span>
            </>
          ) : (
            <>
              <span>
                STATISTICAL RECONCILIATION: 5,681 RECORDED BATTER RUNS (8 BATTING DISCREPANCIES DOCUMENTED) • 117 BOWLER WICKETS (0 DISCREPANCIES)
              </span>
              <span className="text-[#B99A5B] shrink-0">AUDITED ARCHIVAL BALANCE</span>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

