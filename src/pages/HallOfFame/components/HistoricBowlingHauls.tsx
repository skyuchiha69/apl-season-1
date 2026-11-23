import React from 'react';
import { Target, Award, Info, Sparkles } from 'lucide-react';
import { useSeasonOptional } from '../../../app/providers/SeasonProvider';

export const HistoricBowlingHauls: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason2 = activeSeasonId === 'season-2';

  const premierHaulsSeason1 = [
    {
      id: 'parker-hat-trick',
      title: 'The Tournament Hat-Trick',
      bowler: 'S. Parker',
      teamName: 'CHAMPIONS',
      teamColor: '#FF2E4D',
      figures: 'Hat-Trick (1)',
      context: 'Season 1 League Fixture',
      isHatTrick: true,
      description:
        'The sole recorded hat-trick of APL Season 1. Parker etched his name into tournament folklore by claiming three wickets in three consecutive deliveries during league play for Champions.',
      disclosure: 'Official record verified; specific delivery mechanics and dismissal victims unrecorded in archive',
    },
    {
      id: 'askin-5-fer',
      title: '5-Wicket Match Haul',
      bowler: 'T. Askin',
      teamName: 'AUTHORS',
      teamColor: '#00E676',
      figures: '5/x (Match 1)',
      context: 'Match #1 vs Champions',
      isHatTrick: false,
      description:
        'A destructive opening-round spell that tore through the opposition batting lineup. Askin claimed five wickets in Match 1 to establish the benchmark for individual match bowling in the inaugural season.',
      disclosure: 'Figures recorded as 5/x; exact runs conceded unrecorded in surviving match log',
    },
    {
      id: 'parker-5-fer',
      title: '5-Wicket Match Haul',
      bowler: 'S. Parker',
      teamName: 'CHAMPIONS',
      teamColor: '#FF2E4D',
      figures: '5/x (Match 4)',
      context: 'Match #4 vs Knights',
      isHatTrick: false,
      description:
        'Champions’ strike bowler produced his second historic milestone of the season in Match 4, taking five wickets against Knights to share the tournament record for highest wickets in a single match.',
      disclosure: 'Figures recorded as 5/x; exact runs conceded unrecorded in surviving match log',
    },
    {
      id: 'sky-hauls',
      title: 'Multiple 4-Wicket Hauls',
      bowler: 'N. Sky',
      teamName: 'SKYSHOT',
      teamColor: '#00D2FF',
      figures: '4/x & 4/x',
      context: 'Matches #3 & #5 (League Stage)',
      isHatTrick: false,
      description:
        'Purple Cap winner N. Sky demonstrated unmatched wicket-taking consistency, capturing four wickets in a match on two separate occasions during Skyshot’s table-topping league campaign.',
      disclosure: 'Two 4-wicket hauls [1, 0, 4, 1, 4, 0, 1, 1]; runs conceded per haul unrecorded',
    },
  ];

  const premierHaulsSeason2 = [
    {
      id: 'dharm-4-fer',
      title: 'Tournament-Best Match Bowling',
      bowler: 'Dharm',
      teamName: 'KNIGHTS',
      teamColor: '#F8FAFC',
      figures: '4 Wkts (4/x)',
      context: 'Match vs Champions',
      isHatTrick: false,
      description:
        'The premier individual bowling performance of APL Season 2. Authors’ founding owner Dharm, playing on loan for Knights, tore through Champions with 4 wickets—the highest individual wickets haul in a single match in Season 2.',
      disclosure: 'Official record verified as 4 wickets in a match; runs conceded unrecorded in surviving archive',
    },
    {
      id: 'silver-strike',
      title: 'Purple Cap Strike Spell',
      bowler: 'Silver',
      teamName: 'CHAMPIONS',
      teamColor: '#FF2E4D',
      figures: '3 Wkts (3/x)',
      context: 'Match #6 vs Skyshot',
      isHatTrick: false,
      description:
        'Purple Cap winner Silver spearheaded Champions’ bowling attack with a crucial 3-wicket haul against eventual champions Skyshot, taking wickets in every single match of the campaign (12 wickets total).',
      disclosure: 'Tournament-best 3 wickets in match; wickets taken in all 8 appearances [1, 1, 1, 2, 2, 3, 1, 1]',
    },
    {
      id: 'anakin-spell',
      title: '3-Wicket Match Haul',
      bowler: 'Anakin',
      teamName: 'CHAMPIONS',
      teamColor: '#FF2E4D',
      figures: '3 Wkts (3/x)',
      context: 'Match #2 vs Skyshot',
      isHatTrick: false,
      description:
        'Champions’ premier strike all-rounder captured 3 wickets in the historic tied match against Skyshot, finishing as the second-highest wicket-taker of the season with 11 total wickets.',
      disclosure: 'Figures recorded as 3 wickets; 11 total wickets across 8 matches [1, 3, 2, 2, 2, 0, 1, 0]',
    },
    {
      id: 'overton-anchor',
      title: 'Championship Bowling Anchor',
      bowler: 'Overton',
      teamName: 'SKYSHOT',
      teamColor: '#00D2FF',
      figures: '10 Wkts (4x 2w)',
      context: 'APL Season 2 Campaign',
      isHatTrick: false,
      description:
        'Skyshot’s bowling spearhead anchored their championship march, capturing 10 wickets across eight matches including four distinct 2-wicket hauls in the league stage and playoffs.',
      disclosure: 'Figures recorded as 10 total wickets [0, 1, 2, 1, 2, 2, 2, 0]; runs conceded unrecorded',
    },
  ];

  const purpleCapRosterSeason1 = [
    { rank: '1', name: 'N. Sky', team: 'SKYSHOT', teamColor: '#00D2FF', wickets: 12, note: 'Purple Cap Winner • Two 4-Wicket Hauls (4/x)' },
    { rank: '2', name: 'S. Parker', team: 'CHAMPIONS', teamColor: '#FF2E4D', wickets: 8, note: 'Tournament Hat-Trick • 5-Wicket Haul (5/x)' },
    { rank: '3', name: 'T. Askin', team: 'AUTHORS', teamColor: '#00E676', wickets: 7, note: '5-Wicket Haul in Match 1 (5/x)' },
    { rank: 'T-4', name: 'J. Summers', team: 'AUTHORS', teamColor: '#00E676', wickets: 6, note: 'Tied 4th • Key Final Bowler (2/36 in 4.0 ov)' },
    { rank: 'T-4', name: 'P. Oscar', team: 'CHAMPIONS', teamColor: '#FF2E4D', wickets: 6, note: 'Tied 4th • Final Bowler (1/25 in 4.0 ov)' },
    { rank: 'T-4', name: 'Night', team: 'SKYSHOT', teamColor: '#00D2FF', wickets: 6, note: 'Tied 4th • Strike Bowler for Regular-Season Winners' },
    { rank: 'T-4', name: 'O. Lock', team: 'SKYSHOT', teamColor: '#00D2FF', wickets: 6, note: 'Tied 4th • Pace Spearhead for Skyshot' },
  ];

  const purpleCapRosterSeason2 = [
    { rank: '1', name: 'Silver', team: 'CHAMPIONS', teamColor: '#FF2E4D', wickets: 12, note: 'Purple Cap Winner • Wickets in All 8 Matches • Best: 3 Wkts' },
    { rank: '2', name: 'Anakin', team: 'CHAMPIONS', teamColor: '#FF2E4D', wickets: 11, note: 'Runner-Up Purple Cap • 3-Wicket Haul vs Skyshot' },
    { rank: 'T-3', name: 'Dharm', team: 'KNIGHTS', teamColor: '#F8FAFC', wickets: 10, note: 'Tournament-Best Spell: 4 Wkts vs Champions • Authors Founder' },
    { rank: 'T-3', name: 'Overton', team: 'SKYSHOT', teamColor: '#00D2FF', wickets: 10, note: 'Championship Bowling Anchor • Four 2-Wicket Hauls' },
    { rank: 'T-5', name: 'Turner', team: 'SKYSHOT', teamColor: '#00D2FF', wickets: 7, note: 'Tied 5th • Frontline Seamer for Champions Skyshot' },
    { rank: 'T-5', name: 'Kaiser', team: 'SKYSHOT', teamColor: '#00D2FF', wickets: 7, note: 'Tied 5th • 3 Wickets vs Champions in Match 2' },
    { rank: 'T-5', name: 'Mario', team: 'AUTHORS', teamColor: '#00E676', wickets: 7, note: 'Tied 5th • Authors Leading Wicket-Taker (3 Wkts in M2)' },
    { rank: 'T-8', name: 'Parker', team: 'KNIGHTS', teamColor: '#F8FAFC', wickets: 6, note: 'Tied 8th • Key Seamer for Finalists Knights' },
    { rank: 'T-8', name: 'Askin', team: 'KNIGHTS', teamColor: '#F8FAFC', wickets: 6, note: 'Tied 8th • Frontline Bowler for Knights' },
  ];

  const premierHauls = isSeason2 ? premierHaulsSeason2 : premierHaulsSeason1;
  const purpleCapRoster = isSeason2 ? purpleCapRosterSeason2 : purpleCapRosterSeason1;

  return (
    <section id="historic-bowling" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <Target className="w-3.5 h-3.5 text-[#B99A5B]" />
            <span>Bowling Milestones &amp; Season Wickets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            HISTORIC BOWLING FEATS
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            {isSeason2
              ? 'Across 15 matches, 117 wickets were claimed by bowlers in Season 2. These headline performances memorialize Dharm’s tournament-best 4-wicket haul, Silver’s Purple Cap triumph, and the complete Season 2 bowling hierarchy.'
              : 'Across 15 matches, 101 wickets were claimed by bowlers in Season 1. These headline performances memorialize the tournament’s sole hat-trick, the two monumental five-wicket hauls, and the complete Purple Cap hierarchy.'}
          </p>
        </div>

        {/* Premier Bowling Feats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {premierHauls.map((h) => (
            <div
              key={h.id}
              className={`rounded-xl p-6 bg-[#0E1626]/75 border ${
                h.isHatTrick ? 'border-[#FF2E4D]/40 shadow-rose-950/20' : 'border-[#EAE4D8]/10'
              } shadow-lg relative overflow-hidden flex flex-col justify-between`}
            >
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-[#EAE4D8]/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${h.teamColor}15`,
                        color: h.teamColor,
                        border: `1px solid ${h.teamColor}30`,
                      }}
                    >
                      {h.teamName}
                    </span>
                    <span className="text-xs font-mono text-[#87968B]">{h.context}</span>
                  </div>
                  <span className="text-sm font-display font-black text-amber-400">
                    {h.figures}
                  </span>
                </div>

                {/* Bowler Name & Title */}
                <div className="mb-3">
                  <div className="text-xs font-mono text-[#B99A5B] uppercase tracking-wider">
                    {h.title}
                  </div>
                  <h3 className="text-2xl font-display font-black text-[#EAE4D8] mt-0.5">
                    {h.bowler}
                  </h3>
                </div>

                {/* Narrative */}
                <p className="text-sm text-[#A69F92] leading-relaxed font-sans mb-4">
                  {h.description}
                </p>
              </div>

              {/* Archival Disclosure */}
              <div className="pt-3 border-t border-[#EAE4D8]/10 text-[11px] font-mono text-[#87968B] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                <span>{h.disclosure}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Purple Cap Hierarchy Table */}
        <div className="rounded-xl bg-[#0E1626]/60 border border-[#EAE4D8]/10 overflow-hidden shadow-xl mb-8">
          <div className="p-5 border-b border-[#EAE4D8]/10 bg-[#090C0B]/60 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#B99A5B] uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Roll of Honor • Top Tournament Bowlers</span>
              </div>
              <h3 className="text-lg font-display font-bold text-[#EAE4D8] mt-0.5">
                {isSeason2 ? 'Purple Cap Hierarchy & Top Tournament Wicket-Takers' : 'Purple Cap Hierarchy & The Four-Way T-4 Tie'}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#87968B]">
              {isSeason2 ? '117 Total Verified Tournament Wickets' : '101 Total Verified Tournament Wickets'}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#090C0B]/40 text-[#87968B] uppercase tracking-wider border-b border-[#EAE4D8]/5 text-[11px]">
                <tr>
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">Bowler</th>
                  <th className="py-3 px-4">Franchise</th>
                  <th className="py-3 px-4 text-center">Wickets</th>
                  <th className="py-3 px-4">Key Feat / Match Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE4D8]/5 text-[#EAE4D8]">
                {purpleCapRoster.map((b) => (
                  <tr
                    key={b.name}
                    className={`hover:bg-[#14201A]/50 transition-colors ${
                      b.rank === '1' ? 'bg-purple-950/20 font-semibold' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4">
                      {b.rank === '1' ? (
                        <span className="inline-flex items-center gap-1 text-purple-400 font-bold">
                          <Award className="w-3.5 h-3.5" /> #1
                        </span>
                      ) : b.rank.startsWith('T-') ? (
                        <span className="text-amber-400 font-bold">{b.rank}</span>
                      ) : (
                        <span className="text-[#87968B]">#{b.rank}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-sm text-[#EAE4D8]">
                      {b.name}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${b.teamColor}15`,
                          color: b.teamColor,
                          border: `1px solid ${b.teamColor}30`,
                        }}
                      >
                        {b.team}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center text-sm font-bold">
                      <span className={b.rank === '1' ? 'text-purple-400 text-base' : 'text-[#EAE4D8]'}>
                        {b.wickets}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#87968B] text-xs">
                      {b.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-[#090C0B]/40 border-t border-[#EAE4D8]/5 text-[11px] font-mono text-[#87968B] flex items-center justify-between">
            {isSeason2 ? (
              <>
                <span>Also noted: Haan (Authors) — 5 wickets • Speed (Champions) — 4 wickets • Sky (Skyshot) — 4 wickets • Lock (Skyshot) — 4 wickets</span>
                <span className="text-purple-400 font-bold">117 Total Bowler Wickets Reconciled</span>
              </>
            ) : (
              <>
                <span>Also noted: R. Dharm (Authors) — 5 wickets [2, 0, 1, 1, 0, 0, 0, 1] • I. Speed (Champions) — 5 wickets</span>
                <span className="text-purple-400 font-bold">All 4 T-4 Bowlers Fully Reconciled</span>
              </>
            )}
          </div>
        </div>

        {/* Archival Integrity Protocol Disclosure */}
        <div className="p-4 rounded-lg bg-[#090C0B]/60 border border-[#EAE4D8]/10 flex items-start gap-3 text-xs font-sans text-[#87968B] leading-relaxed">
          <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#EAE4D8] font-mono uppercase tracking-wider block mb-0.5">
              Bowling Metrics Archival Disclosure
            </strong>
            {isSeason2
              ? 'The official Season 2 scorecards record wickets taken for all matches, but detailed runs conceded per bowler are not preserved in the surviving tournament ledger. Consequently, overall tournament bowling economy rates and bowling averages are unrecorded and not fabricated. Dharm\'s tournament-best match bowling haul is preserved with verified figures of 4 wickets.'
              : 'The official Season 1 scorecards record wickets taken for all matches, but detailed runs conceded and balls bowled were recorded only for the Grand Final (Match 15). Consequently, overall tournament bowling economy rates and bowling averages are unrecorded and not fabricated. Both 5-wicket hauls (T. Askin in Match 1 and S. Parker in Match 4) are preserved with verified figures of 5/x.'}
          </div>
        </div>
      </div>
    </section>
  );
};
