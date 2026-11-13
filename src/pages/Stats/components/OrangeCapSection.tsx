import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Flame, Award, AlertCircle } from 'lucide-react';

export const OrangeCapSection: React.FC = () => {
  const { seasonData } = useSeason();

  // Filter only players with recorded batting runs (exactly 30 verified batters)
  const batters = seasonData.players
    .filter((p) => p.stats.runs !== undefined)
    .sort((a, b) => (b.stats.runs ?? 0) - (a.stats.runs ?? 0));

  // Compute competition rankings with proper tie handling
  let currentRank = 1;
  const rankedBatters = batters.map((player, index) => {
    if (index > 0 && player.stats.runs === batters[index - 1].stats.runs) {
      // Tied with previous
    } else {
      currentRank = index + 1;
    }
    const isTied =
      (index > 0 && player.stats.runs === batters[index - 1].stats.runs) ||
      (index < batters.length - 1 && player.stats.runs === batters[index + 1].stats.runs);

    return {
      player,
      displayRank: isTied ? `T-${currentRank}` : `${currentRank}`,
      rankNumber: currentRank,
    };
  });

  const topFive = rankedBatters.slice(0, 5);

  return (
    <section
      id="orange-cap"
      aria-labelledby="orange-cap-heading"
      className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>Orange Cap Leaderboard • Most Runs</span>
            </div>
            <h2
              id="orange-cap-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              Batting Championship
            </h2>
          </div>
          <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
            Official recorded totals across all 30 tournament batters.
          </p>
        </div>

        {/* Top 5 Editorial Podium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {topFive.map(({ player, displayRank }, idx) => {
            const isWinner = idx === 0;
            const team = seasonData.teams[player.teamId];

            let franchiseColor = 'text-cyan-400 border-cyan-500/30';
            if (player.teamId === 'authors') franchiseColor = 'text-emerald-400 border-emerald-500/30';
            else if (player.teamId === 'champions') franchiseColor = 'text-rose-400 border-rose-500/30';
            else if (player.teamId === 'knights') franchiseColor = 'text-slate-300 border-slate-500/30';

            return (
              <div
                key={player.id}
                className={`rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden transition-all ${
                  isWinner
                    ? 'bg-gradient-to-b from-[#1C170E] to-[#111915] border-2 border-amber-500/50 shadow-amber-950/20 shadow-xl'
                    : 'bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20'
                }`}
              >
                {isWinner && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-black font-mono font-bold text-[9px] px-2 py-0.5 rounded-bl uppercase tracking-wider flex items-center space-x-1">
                    <Award className="w-2.5 h-2.5" />
                    <span>Orange Cap</span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span
                      className={`font-black text-sm px-2 py-0.5 rounded ${
                        isWinner
                          ? 'bg-amber-400 text-black'
                          : 'bg-[#18261F] text-[#EAE4D8] border border-[#EAE4D8]/10'
                      }`}
                    >
                      {displayRank}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${franchiseColor}`}>
                      {team.name}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl text-[#EAE4D8] tracking-wide">
                      {player.canonicalName}
                    </h3>
                    <p className="text-[11px] font-sans text-[#87968B] capitalize">{player.role}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE4D8]/10 flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase text-[#87968B] tracking-wider">Runs</span>
                  <span
                    className={`font-display text-2xl sm:text-3xl font-black ${
                      isWinner ? 'text-amber-400' : 'text-[#EAE4D8]'
                    }`}
                  >
                    {player.stats.runs}
                  </span>
                </div>

                <div className="mt-2 pt-2 border-t border-[#EAE4D8]/5 grid grid-cols-3 text-center text-[10px] font-mono text-[#87968B]">
                  <div>
                    <span className="block text-[#EAE4D8] font-bold">{player.stats.highestScore ?? '—'}</span>
                    <span>HS</span>
                  </div>
                  <div>
                    <span className="block text-[#EAE4D8] font-bold">{player.stats.fifties ?? '—'}</span>
                    <span>50s</span>
                  </div>
                  <div>
                    <span className="block text-[#EAE4D8] font-bold">{player.stats.centuries ?? '—'}</span>
                    <span>100s</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete 30-Player Leaderboard Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#87968B]">
            <span className="uppercase tracking-wider">Complete Tournament Batting Register (30 Players)</span>
            <span>Scroll horizontally on mobile →</span>
          </div>

          <div className="rounded-xl border border-[#EAE4D8]/10 bg-[#0E1713] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <caption className="sr-only">APL Season 1 Complete Batting Leaderboard</caption>
                <thead>
                  <tr className="bg-[#14201A] border-b border-[#EAE4D8]/10 text-[10px] sm:text-xs font-mono text-[#B99A5B] uppercase tracking-wider">
                    <th scope="col" className="py-3 px-4 w-14 text-center">Rank</th>
                    <th scope="col" className="py-3 px-4">Player</th>
                    <th scope="col" className="py-3 px-4">Franchise</th>
                    <th scope="col" className="py-3 px-4 text-center">Innings</th>
                    <th scope="col" className="py-3 px-4 text-center">Highest Score</th>
                    <th scope="col" className="py-3 px-4 text-center">50s</th>
                    <th scope="col" className="py-3 px-4 text-center">100s</th>
                    <th scope="col" className="py-3 px-4 text-right font-bold text-[#EAE4D8]">Total Runs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4D8]/5 text-xs sm:text-sm font-sans">
                  {rankedBatters.map(({ player, displayRank }, idx) => {
                    const isOrangeCap = idx === 0;
                    const isReconstructed = player.stats.reconstruction?.isReconstructed;

                    return (
                      <tr
                        key={player.id}
                        className={`hover:bg-[#15231C] transition-colors ${
                          isOrangeCap ? 'bg-amber-950/15' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-center font-mono font-bold text-[#87968B]">
                          <span
                            className={
                              isOrangeCap
                                ? 'text-amber-400 font-black'
                                : idx < 5
                                ? 'text-[#EAE4D8]'
                                : ''
                            }
                          >
                            {displayRank}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold text-[#EAE4D8]">
                          <div className="flex items-center space-x-1.5">
                            <span>{player.canonicalName}</span>
                            {isOrangeCap && (
                              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-label="Orange Cap Winner" />
                            )}
                            {isReconstructed && (
                              <span
                                title="Reconstructed 6th match score in aggregate"
                                className="text-[9px] font-mono px-1 py-0.2 bg-[#B99A5B]/20 text-[#B99A5B] rounded"
                              >
                                *Recon
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono text-xs uppercase text-[#87968B]">
                          {seasonData.teams[player.teamId].name}
                        </td>
                        <td className="py-3 px-4 text-center font-mono text-[#A69F92]">
                          {player.stats.inningsRuns?.length ?? '—'}
                        </td>
                        <td className="py-3 px-4 text-center font-mono text-[#EAE4D8] font-bold">
                          {player.stats.highestScore ?? '—'}
                        </td>
                        <td className="py-3 px-4 text-center font-mono text-[#A69F92]">
                          {player.stats.fifties ?? '—'}
                        </td>
                        <td className="py-3 px-4 text-center font-mono text-[#A69F92]">
                          {player.stats.centuries ?? '—'}
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-black text-sm sm:text-base text-[#EAE4D8]">
                          <span className={isOrangeCap ? 'text-amber-400' : ''}>{player.stats.runs}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Missing-Data Disclosure Note */}
        <div className="rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 p-3.5 sm:p-4 text-xs font-sans text-[#A69F92] flex items-start space-x-3 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold text-[#EAE4D8] font-mono text-[11px] uppercase tracking-wider">
              Archival Batting Data Integrity Note
            </p>
            <p>
              Ball-by-ball data and balls faced were not recorded for regular-season matches. Strike rates and other
              derived batting metrics are therefore unavailable. Missing values are preserved as unrecorded rather
              than coerced to zero. Winsmoke's reconstructed +13 runs represents an unprinted 6th match score in
              aggregate accounting and is not presented as an individual verified innings performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

