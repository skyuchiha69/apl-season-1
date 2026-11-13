import React from 'react';
import { useSeason } from '../../app/providers/SeasonProvider';
import { OwnersHero } from './components/OwnersHero';
import { OwnerDetailChapter } from './components/OwnerDetailChapter';
import { OwnersRivalryMatrix } from './components/OwnersRivalryMatrix';
import { OwnersBanterSection } from './components/OwnersBanterSection';
import { OwnersLegacyEpilogue } from './components/OwnersLegacyEpilogue';

export const OwnersPage: React.FC = () => {
  const { seasonData } = useSeason();

  // Define the 4 editorial owner chapters using verified historical facts
  const ownerChapters = [
    {
      id: 'dharm',
      name: 'Dharm',
      nickname: 'Green',
      roleTitle: 'Championship Architect',
      teamId: 'authors' as const,
      teamName: 'AUTHORS',
      accentColor: '#00E676',
      badge: 'APL Season 1 Champions',
      tournamentFinish: 'Champions (Won Final by 3 Wkts)',
      regularSeasonRecord: '3 Wins – 3 Losses (6 Pts)',
      regularSeasonRank: 'Tied 2nd (League Stage)',
      favoriteColor: 'Green',
      favoriteCricketer: 'Rohit Sharma',
      teamCaptain: {
        name: 'King',
        note: 'Championship-winning captain of Authors.',
      },
      narrativeOverview: [
        'Dharm masterminded Authors’ path through an intensely competitive Season 1 campaign. Navigating an even 3–3 regular-season run that left Authors tied for second place on 6 points, his side peaked at the defining moment of the tournament.',
        'In Semi-Final 2, Authors upset regular-season league-toppers Skyshot to punch their ticket to the decider. In the Grand Final against Champions, Authors completed the greatest chase in APL history—hunting down 226/7 in 19.2 overs with A. King’s heroic 108 off 54 to claim the inaugural championship crown.',
      ],
      keyMilestones: [
        'Guided Authors through an even 3–3 regular season to qualify for the playoffs.',
        'Eliminated regular-season table-toppers Skyshot in Semi-Final 2 to reach the championship match.',
        'Completed the record 226-run chase in the Grand Final against Champions (226/7 in 19.2 overs).',
        'Crowned Inaugural Ashes Premier League (APL) Season 1 Champions.',
        'Anchored his bowling attack with 5 verified tournament wickets, including 1/36 (4.0 ov) in the Grand Final.',
      ],
      inGameIdentity: {
        type: 'single' as const,
        title: 'In-Game Player Identity',
        detailsNote:
          'Dharm took the field as an official bowling all-rounder/bowler in the surviving match logs.',
        players: [
          {
            id: 'dharm',
            name: 'R. Dharm',
            role: 'Bowler • Owner',
            headlineStat: '5 Tournament Wickets',
            breakdown: '5 Total Tournament Wickets [2, 0, 1, 1, 0, 0, 0, 1] Across 8 Matches (Includes Grand Final: 1/36 (4.0 ov))',
          },
        ],
      },
    },
    {
      id: 'umang',
      name: 'Umang',
      nickname: 'UB',
      roleTitle: 'High-Powered Finalist',
      teamId: 'champions' as const,
      teamName: 'CHAMPIONS',
      accentColor: '#FF2E4D',
      badge: 'APL Season 1 Runners-Up',
      tournamentFinish: 'Runners-Up / Grand Finalists',
      regularSeasonRecord: '3 Wins – 3 Losses (6 Pts)',
      regularSeasonRank: 'Tied 2nd (League Stage)',
      favoriteColor: 'Red',
      favoriteCricketer: 'MS Dhoni',
      teamCaptain: {
        name: 'Stark',
        note: 'Top-order batsman and on-field captain of Champions.',
      },
      narrativeOverview: [
        'Umang constructed Champions as a high-octane powerhouse capable of setting imposing totals. Champions posted 225 runs in both of their playoff matches, establishing one of the most formidable scoring records of the entire tournament.',
        'In Semi-Final 1, Champions executed a thrilling 10-run defense of their 225 total against regular-season winners Skyshot (restricting them to 215/5). Champions surged into the Grand Final, posting 225/8 in a breathtaking final showcase before finishing as inaugural tournament runners-up.',
      ],
      keyMilestones: [
        'Propelled Champions to a 3–3 regular-season finish (6 points, tied second) to secure playoff qualification.',
        'Champions posted 225 runs in back-to-back playoff matches (225 in SF1 and 225/8 in the Grand Final).',
        'Engineered a dramatic 10-run defense in Semi-Final 1 against league-leaders Skyshot (defended 225 vs 215/5).',
        'Reached the Grand Final and secured the official APL Season 1 Runners-Up honors.',
        'Preserved as Champions franchise founder, owner, and tactical architect throughout the tournament.',
      ],
      inGameIdentity: {
        type: 'undocumented' as const,
        title: 'Archival Player Status',
        detailsNote:
          "Umang's individual in-game player identity and statistics are not documented in the surviving Season 1 archive. His verified role as Champions franchise owner and tactical architect is preserved here.",
      },
    },
    {
      id: 'shubham',
      name: 'Shubham',
      nickname: 'Sky',
      roleTitle: 'Regular-Season Pacesetter',
      teamId: 'skyshot' as const,
      teamName: 'SKYSHOT',
      accentColor: '#00D2FF',
      badge: 'Regular Season League Topper',
      tournamentFinish: 'Regular Season Topper • Playoff Semi-Finalist',
      regularSeasonRecord: '4 Wins – 2 Losses (8 Pts)',
      regularSeasonRank: '1st Place (League Stage Topper)',
      favoriteColor: 'Blue',
      favoriteCricketer: 'Jos Buttler',
      teamCaptain: {
        name: 'Shubham',
        note: 'On-field team captain and franchise owner of Skyshot.',
      },
      narrativeOverview: [
        'Shubham established Skyshot as the gold standard of regular-season play. Serving as both franchise owner and on-field team captain, he led Skyshot through the 12-match double-round-robin phase with four victories (8 points) to finish clear at the top of the league table.',
        'At the crease, Shubham anchored the top order with 134 tournament runs across 8 matches, including a match-winning half-century (51). Skyshot concluded the tournament as proud regular-season champions and playoff semi-finalists.',
      ],
      keyMilestones: [
        'Captained Skyshot to the top of the regular-season standings with 4 wins and 8 points (highest win rate in the league stage).',
        'Contributed 134 tournament runs across 8 matches as franchise owner and captain, including a high score of 51.',
        'Defeated eventual champions Authors twice during the regular season (Matches 6 & 12).',
        'Official finish verified as Regular-Season League Topper and Playoff Semi-Finalist.',
      ],
      inGameIdentity: {
        type: 'single' as const,
        title: 'In-Game Player Identity',
        detailsNote:
          'Shubham took the field for Skyshot as an official in-game top-order batsman and team captain.',
        players: [
          {
            id: 'shubham_bat',
            name: 'Shubham',
            role: 'Top-Order Batsman • Owner & Captain',
            headlineStat: '134 Runs (1 Fifty)',
            breakdown: 'Highest Score: 51 • Innings: [51, 0, 32, 20, 19, 12, 0, 0] Across 8 Matches',
          },
        ],
      },
    },
    {
      id: 'jay',
      name: 'Jay',
      nickname: 'Red',
      roleTitle: 'Record-Breaking Powerhouse',
      teamId: 'knights' as const,
      teamName: 'KNIGHTS',
      accentColor: '#F8FAFC',
      badge: 'All-Time Record Setter',
      tournamentFinish: 'League Stage (4th Place)',
      regularSeasonRecord: '2 Wins – 4 Losses (4 Pts)',
      regularSeasonRank: '4th Place (League Stage)',
      favoriteColor: 'Black',
      favoriteCricketer: 'Shubman Gill',
      teamCaptain: {
        name: 'Jay',
        note: 'Franchise owner, record-holder, and on-field captain of Knights.',
      },
      narrativeOverview: [
        'Jay powered Knights with breathtaking individual batting brilliance that defined the historical record book of APL Season 1. While Knights faced a challenging league campaign finishing fourth on 4 points, Jay produced the tournament’s most electrifying batting exhibitions.',
        'In Match 3 against Skyshot, Jay unleashed a monumental innings of 146 runs—the highest individual score in APL history—propelling Knights to an all-time tournament record team total of 291. His season aggregate of 245 runs cemented his status as the tournament’s premier record-breaking batsman.',
      ],
      keyMilestones: [
        'Scored the tournament’s all-time highest individual innings: 146 runs against Skyshot in Match 3.',
        'Propelled Knights to the all-time highest team score in APL history: 291 in Match 3.',
        'Amassed 245 total runs in 6 league matches.',
        'Scored the only recorded century for Knights in Season 1 (146 HS).',
        'Finished fourth in the regular season table with 2 wins (4 points), concluding in the league stage.',
      ],
      inGameIdentity: {
        type: 'single' as const,
        title: 'In-Game Player Identity',
        detailsNote:
          'Jay spearheaded the Knights batting lineup as an official in-game top-order batsman.',
        players: [
          {
            id: 'jay',
            name: 'Jay',
            role: 'Premier Batsman • Owner',
            headlineStat: '245 Runs (1 Century: 146 HS)',
            breakdown: 'Innings: [18, 146, 21, 36, 0, 24] in 6 League Matches • Record 291 Total',
          },
        ],
      },
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1512] text-[#EAE4D8] selection:bg-[#B99A5B]/20 selection:text-[#B99A5B]">
      {/* Sections A & B — Prologue & Franchise Alignment */}
      <OwnersHero teams={seasonData.teams} />

      {/* Section C — Four Owner Chapters */}
      <div className="divide-y divide-[#EAE4D8]/10">
        {ownerChapters.map((chapter) => (
          <OwnerDetailChapter
            key={chapter.id}
            owner={chapter}
            team={seasonData.teams[chapter.teamId]}
          />
        ))}
      </div>

      {/* Section D — Six-Pair Rivalry Matrix */}
      <OwnersRivalryMatrix season={seasonData} />

      {/* Section E — Rivalry Banter */}
      <OwnersBanterSection />

      {/* Section F — Legacy Epilogue */}
      <OwnersLegacyEpilogue />
    </main>
  );
};
