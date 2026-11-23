import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { getPointsTable } from '../../../data/selectors';
import { Trophy, Award, Shield, AlertCircle } from 'lucide-react';

export const PointsTableSection: React.FC = () => {
  const { seasonData, activeSeasonId } = useSeason();
  const isSeason1 = activeSeasonId === 'season-1';
  const rawTable = getPointsTable(seasonData);

  // Standings ranks and badges
  const standingsWithTies = rawTable.map((row) => {
    let displayRank = `${row.position}`;
    let isTied = false;
    let badgeText = '';

    if (isSeason1) {
      if (row.teamId === 'skyshot') {
        displayRank = '1st';
        badgeText = 'Regular Season Toppers';
      } else if (row.teamId === 'authors' || row.teamId === 'champions') {
        displayRank = 'T-2nd';
        isTied = true;
        badgeText =
          row.teamId === 'authors'
            ? 'Playoff Qualifier • Eventual Champions'
            : 'Playoff Qualifier • Finalists';
      } else if (row.teamId === 'knights') {
        displayRank = '4th';
        badgeText = 'League Stage';
      }
    } else {
      if (row.teamId === 'champions') {
        displayRank = '1st';
        badgeText = 'Regular Season Table Toppers';
      } else if (row.teamId === 'skyshot') {
        displayRank = '2nd';
        badgeText = 'Playoff Qualifier • Eventual Champions';
      } else if (row.teamId === 'knights') {
        displayRank = '3rd';
        badgeText = 'Playoff Semi-Finalist • Finalists';
      } else if (row.teamId === 'authors') {
        displayRank = '4th';
        badgeText = 'League Stage';
      }
    }

    return {
      ...row,
      displayRank,
      isTied,
      badgeText,
    };
  });

  return (
    <section
      id="standings"
      aria-labelledby="standings-heading"
      className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>Official 12-Match Regular Season</span>
            </div>
            <h2
              id="standings-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              League Standings
            </h2>
          </div>
          <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
            Regular season points table strictly excludes post-season playoff results.
          </p>
        </div>

        {/* Responsive Table Container with Horizontal Scroll */}
        <div className="rounded-xl border border-[#EAE4D8]/10 bg-[#0E1713] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <caption className="sr-only">
                {isSeason1
                  ? 'APL Season 1 Regular Season League Standings Table'
                  : 'APL Season 2 Regular Season League Standings Table'}
              </caption>
              <thead>
                <tr className="bg-[#14201A] border-b border-[#EAE4D8]/10 text-[10px] sm:text-xs font-mono text-[#B99A5B] uppercase tracking-wider">
                  <th scope="col" className="py-3 px-4 w-16 text-center">Pos</th>
                  <th scope="col" className="py-3 px-4">Franchise</th>
                  <th scope="col" className="py-3 px-4 text-center">Played</th>
                  <th scope="col" className="py-3 px-4 text-center">Won</th>
                  <th scope="col" className="py-3 px-4 text-center">Tied</th>
                  <th scope="col" className="py-3 px-4 text-center">Lost</th>
                  <th scope="col" className="py-3 px-4 text-center font-bold text-[#EAE4D8]">Points</th>
                  <th scope="col" className="py-3 px-4 text-right">League Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE4D8]/5 text-xs sm:text-sm font-sans">
                {standingsWithTies.map((team) => {
                  const isAuthors = team.teamId === 'authors';
                  const isSkyshot = team.teamId === 'skyshot';
                  const isChampions = team.teamId === 'champions';
                  const isKnights = team.teamId === 'knights';

                  let teamAccent = 'text-[#EAE4D8]';
                  let bgHighlight = '';
                  if (isSkyshot) {
                    teamAccent = 'text-cyan-400';
                    bgHighlight = 'bg-cyan-950/10';
                  } else if (isAuthors) {
                    teamAccent = 'text-emerald-400';
                    bgHighlight = 'bg-emerald-950/10';
                  } else if (isChampions) {
                    teamAccent = 'text-rose-400';
                    bgHighlight = 'bg-rose-950/10';
                  } else if (isKnights) {
                    teamAccent = 'text-slate-300';
                  }

                  const isTournamentChampion =
                    (isSeason1 && isAuthors) || (!isSeason1 && isSkyshot);
                  const isTableTopper =
                    (isSeason1 && isSkyshot) || (!isSeason1 && isChampions);

                  return (
                    <tr
                      key={team.teamId}
                      className={`hover:bg-[#15231C] transition-colors ${bgHighlight}`}
                    >
                      {/* Position */}
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-[#EAE4D8]">
                        <span
                          className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-xs ${
                            isTableTopper
                              ? isSeason1
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : team.isTied
                              ? 'bg-[#B99A5B]/20 text-[#B99A5B] border border-[#B99A5B]/30'
                              : 'text-[#87968B]'
                          }`}
                        >
                          {team.displayRank}
                        </span>
                      </td>

                      {/* Team Name */}
                      <td className="py-3.5 px-4 font-display font-bold tracking-wide">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm sm:text-base ${teamAccent}`}>
                            {team.teamName}
                          </span>
                          {isTournamentChampion && (
                            <span
                              title="Tournament Champions via Playoffs"
                              className="inline-flex items-center space-x-1 text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase"
                            >
                              <Trophy className="w-2.5 h-2.5" />
                              <span>Champions</span>
                            </span>
                          )}
                          {isTableTopper && (
                            <span
                              title="Regular Season Table Toppers"
                              className={`inline-flex items-center space-x-1 text-[9px] font-mono px-1.5 py-0.2 rounded uppercase border ${
                                isSeason1
                                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                                  : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                              }`}
                            >
                              <Award className="w-2.5 h-2.5" />
                              <span>Toppers</span>
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Played */}
                      <td className="py-3.5 px-4 text-center font-mono text-[#A69F92]">{team.played}</td>

                      {/* Won */}
                      <td className="py-3.5 px-4 text-center font-mono text-emerald-400 font-semibold">{team.won}</td>

                      {/* Tied */}
                      <td className="py-3.5 px-4 text-center font-mono text-[#B99A5B] font-semibold">{team.tied}</td>

                      {/* Lost */}
                      <td className="py-3.5 px-4 text-center font-mono text-rose-400/90">{team.lost}</td>

                      {/* Points */}
                      <td className="py-3.5 px-4 text-center font-mono font-black text-base sm:text-lg text-[#EAE4D8]">
                        {team.points}
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 text-right font-mono text-[11px] sm:text-xs text-[#87968B]">
                        {team.badgeText}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Editorial Footnote */}
        <div className="rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 p-3.5 sm:p-4 text-xs font-sans text-[#A69F92] flex items-start space-x-3 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
          {isSeason1 ? (
            <div className="space-y-1">
              <p className="font-semibold text-[#EAE4D8] font-mono text-[11px] uppercase tracking-wider">
                Official Regular-Season Standings Footnote
              </p>
              <p>
                Authors and Champions finished tied on 6 points with identical 3–3 records (head-to-head 1–1).
                With no official league Net Run Rate recorded, both franchises share 2nd place in the regular-season
                standings. Authors subsequently secured the championship title through the post-season playoffs.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="font-semibold text-[#EAE4D8] font-mono text-[11px] uppercase tracking-wider">
                Official Regular-Season Standings Footnote
              </p>
              <p>
                Champions topped the regular-season table with 9 points (4 wins, 1 tie, 1 loss), with Match 2 against
                Skyshot ending in a tie. Skyshot (7 points) and Knights (6 points) qualified for the post-season playoffs,
                where Skyshot ultimately clinched the Season 2 championship title.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

