import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { getMatchesByStage } from '../../../data/selectors';
import { Calendar, CheckCircle2, Zap } from 'lucide-react';

export const LeagueFixturesGrid: React.FC = () => {
  const { seasonData } = useSeason();
  const leagueMatches = getMatchesByStage(seasonData, 'LEAGUE');

  return (
    <section
      id="league-fixtures"
      aria-labelledby="fixtures-heading"
      className="py-10 sm:py-16 relative overflow-hidden"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>12 Regular Season Fixtures</span>
            </div>
            <h2
              id="fixtures-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              League Stage Fixtures & Results
            </h2>
          </div>
          <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
            Complete schedule of all 12 league-stage encounters.
          </p>
        </div>

        {/* 12-Match Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leagueMatches.map((m) => {
            const teamA = seasonData.teams[m.homeTeamId];
            const teamB = seasonData.teams[m.awayTeamId];
            const winner = seasonData.teams[m.winnerTeamId];
            const isMatch3 = m.matchNumber === 3;

            let winnerAccent = 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
            if (m.winnerTeamId === 'authors') winnerAccent = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
            else if (m.winnerTeamId === 'champions') winnerAccent = 'text-rose-400 bg-rose-500/10 border-rose-500/30';
            else if (m.winnerTeamId === 'knights') winnerAccent = 'text-slate-300 bg-slate-500/10 border-slate-500/30';

            return (
              <div
                key={m.id}
                className={`rounded-xl p-4 sm:p-5 bg-[#0E1713] border transition-all flex flex-col justify-between ${
                  isMatch3
                    ? 'border-amber-500/50 shadow-amber-950/20 shadow-lg'
                    : 'border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#87968B] font-bold">
                      {`Match ${m.matchNumber.toString().padStart(2, '0')}`}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#87968B]">
                      League Stage
                    </span>
                  </div>

                  {/* Neutral Fixture Display: Team A vs Team B */}
                  <div className="space-y-1.5 py-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display font-bold text-base ${
                          m.winnerTeamId === teamA.id ? 'text-[#EAE4D8] font-black' : 'text-[#87968B]'
                        }`}
                      >
                        {teamA.name}
                      </span>
                      {m.winnerTeamId === teamA.id && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-label="Winner" />
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-[#87968B] uppercase">vs</div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display font-bold text-base ${
                          m.winnerTeamId === teamB.id ? 'text-[#EAE4D8] font-black' : 'text-[#87968B]'
                        }`}
                      >
                        {teamB.name}
                      </span>
                      {m.winnerTeamId === teamB.id && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-label="Winner" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Outcome & Record Highlights */}
                <div className="mt-4 pt-3 border-t border-[#EAE4D8]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-[#87968B]">Verified Result</span>
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${winnerAccent}`}>
                      {winner.name} won
                    </span>
                  </div>

                  {isMatch3 && (
                    <div className="p-2 rounded bg-amber-950/20 border border-amber-500/30 text-[11px] font-sans text-amber-300/90 leading-snug flex items-start space-x-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>KNIGHTS WON:</strong> Jay's 146 and Knights' 291 team record.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
