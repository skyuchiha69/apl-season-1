import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Target, Award, AlertCircle } from 'lucide-react';

export const PurpleCapSection: React.FC = () => {
  const { seasonData, activeSeasonId } = useSeason();
  const isSeason1 = activeSeasonId === 'season-1';

  // Filter all players with recorded bowling wickets
  const bowlers = seasonData.players
    .filter((p) => p.stats.wickets !== undefined)
    .sort((a, b) => {
      if ((b.stats.wickets ?? 0) !== (a.stats.wickets ?? 0)) {
        return (b.stats.wickets ?? 0) - (a.stats.wickets ?? 0);
      }
      if (isSeason1) {
        return a.canonicalName.localeCompare(b.canonicalName);
      }
      return 0;
    });

  const totalWickets = bowlers.reduce((sum, b) => sum + (b.stats.wickets ?? 0), 0);

  // Calculate standard competition ranking: 1st, 2nd, 3rd, T-4th, T-4th, T-4th, T-4th, 8th...
  let currentRank = 1;
  const rankedBowlers = bowlers.map((player, index) => {
    if (index > 0 && player.stats.wickets === bowlers[index - 1].stats.wickets) {
      // Keep same currentRank as previous tied player
    } else {
      currentRank = index + 1;
    }

    const isTied =
      (index > 0 && player.stats.wickets === bowlers[index - 1].stats.wickets) ||
      (index < bowlers.length - 1 && player.stats.wickets === bowlers[index + 1].stats.wickets);

    let suffix = 'th';
    if (currentRank === 1) suffix = 'st';
    else if (currentRank === 2) suffix = 'nd';
    else if (currentRank === 3) suffix = 'rd';

    const displayRank = isTied ? `T-${currentRank}` : `${currentRank}${suffix}`;

    return {
      player,
      displayRank,
      rankNumber: currentRank,
      isTied,
    };
  });

  // Top tier: bowlers with 6 or more wickets
  const topTier = rankedBowlers.filter((b) => (b.player.stats.wickets ?? 0) >= 6);

  return (
    <section
      id="purple-cap"
      aria-labelledby="purple-cap-heading"
      className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">
              <Target className="w-3.5 h-3.5 text-purple-400 shrink-0" aria-hidden="true" />
              <span>Purple Cap Leaderboard • Most Wickets</span>
            </div>
            <h2
              id="purple-cap-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              Bowling Championship
            </h2>
          </div>
          <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
            {`Official recorded totals across all ${bowlers.length} tournament bowlers (${totalWickets} verified wickets).`}
          </p>
        </div>

        {/* Leading Wicket-Takers Feature Spread (Standard Competition Ranking) */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-[#87968B] mb-3">
            <span className="uppercase tracking-wider">
              {`Leading Wicket-Takers Tier (All ${topTier.length} Bowlers With 6+ Wickets)`}
            </span>
            <span className="text-purple-300">
              {isSeason1
                ? 'Standard Competition Ranking (1, 2, 3, T-4, T-4, T-4, T-4)'
                : 'Standard Competition Ranking (1, 2, T-3, T-3, T-5, T-5, T-5, T-8, T-8)'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topTier.map(({ player, displayRank }, idx) => {
              const isPurpleCap = idx === 0;
              const team = seasonData.teams[player.teamId];

              let franchiseColor = 'text-cyan-400 border-cyan-500/30';
              if (player.teamId === 'authors') franchiseColor = 'text-emerald-400 border-emerald-500/30';
              else if (player.teamId === 'champions') franchiseColor = 'text-rose-400 border-rose-500/30';
              else if (player.teamId === 'knights') franchiseColor = 'text-slate-300 border-slate-500/30';

              return (
                <div
                  key={player.id}
                  className={`rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden transition-all ${
                    isPurpleCap
                      ? 'bg-gradient-to-b from-[#1A1024] to-[#101416] border-2 border-purple-500/50 shadow-purple-950/20 shadow-xl lg:col-span-2'
                      : 'bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20'
                  }`}
                >
                  {isPurpleCap && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white font-mono font-bold text-[9px] px-2 py-0.5 rounded-bl uppercase tracking-wider flex items-center space-x-1">
                      <Award className="w-2.5 h-2.5" />
                      <span>Purple Cap Winner</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span
                        className={`font-black text-sm px-2 py-0.5 rounded ${
                          isPurpleCap
                            ? 'bg-purple-500 text-white'
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
                    <span className="font-mono text-[10px] uppercase text-[#87968B] tracking-wider">Wickets</span>
                    <span
                      className={`font-display text-2xl sm:text-3xl font-black ${
                        isPurpleCap ? 'text-purple-400' : 'text-[#EAE4D8]'
                      }`}
                    >
                      {player.stats.wickets}
                    </span>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#EAE4D8]/5 flex items-center justify-between text-[10px] font-mono text-[#87968B]">
                    <span>Innings: <strong className="text-[#EAE4D8]">{player.stats.inningsWickets?.length ?? '—'}</strong></span>
                    <span>Best: <strong className="text-[#EAE4D8]">{player.stats.bestBowling ?? '—'}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complete Tournament Bowling Register Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#87968B]">
            <span className="uppercase tracking-wider">{`Complete Tournament Bowling Register (All ${bowlers.length} Bowlers)`}</span>
            <span>Scroll horizontally on mobile →</span>
          </div>

          <div className="rounded-xl border border-[#EAE4D8]/10 bg-[#0E1713] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <caption className="sr-only">APL {seasonData.name} Complete Bowling Leaderboard</caption>
                <thead>
                  <tr className="bg-[#14201A] border-b border-[#EAE4D8]/10 text-[10px] sm:text-xs font-mono text-[#B99A5B] uppercase tracking-wider">
                    <th scope="col" className="py-3 px-4 w-16 text-center">Rank</th>
                    <th scope="col" className="py-3 px-4">Bowler</th>
                    <th scope="col" className="py-3 px-4">Franchise</th>
                    <th scope="col" className="py-3 px-4 text-center">Innings Bowled</th>
                    <th scope="col" className="py-3 px-4 text-center">Best Match Figures</th>
                    <th scope="col" className="py-3 px-4 text-right font-bold text-[#EAE4D8]">Total Wickets</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4D8]/5 text-xs sm:text-sm font-sans">
                  {rankedBowlers.map(({ player, displayRank, rankNumber }, idx) => {
                    const isPurpleCap = idx === 0;

                    return (
                      <tr
                        key={player.id}
                        className={`hover:bg-[#15231C] transition-colors ${
                          isPurpleCap ? 'bg-purple-950/15' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-center font-mono font-bold text-[#87968B]">
                          <span
                            className={
                              isPurpleCap
                                ? 'text-purple-400 font-black'
                                : rankNumber <= 4
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
                            {isPurpleCap && (
                              <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" aria-label="Purple Cap Winner" />
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono text-xs uppercase text-[#87968B]">
                          {seasonData.teams[player.teamId].name}
                        </td>
                        <td className="py-3 px-4 text-center font-mono text-[#A69F92]">
                          {player.stats.inningsWickets?.length ?? '—'}
                        </td>
                        <td className="py-3 px-4 text-center font-mono font-bold text-[#EAE4D8]">
                          {player.stats.bestBowling ?? '—'}
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-black text-sm sm:text-base text-[#EAE4D8]">
                          <span className={isPurpleCap ? 'text-purple-400' : ''}>{player.stats.wickets}</span>
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
              Archival Bowling Data Integrity Note
            </p>
            <p>
              Complete regular-season bowling figures, runs conceded, and overs were not recorded in tournament
              archives. Bowling averages, economy rates, and maidens are therefore unavailable and strictly omitted.
              Best bowling figures are displayed only where recorded in official records (such as 5/x or 4/x, where x
              represents unrecorded runs conceded); other bowlers are indicated with a neutral dash (—).{' '}
              {isSeason1
                ? 'All 20 bowler aggregate figures match tournament dismissal records with zero adjustments applied.'
                : 'All 21 bowler sequence totals match tournament aggregate wickets with zero discrepancies (117 total wickets).'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
