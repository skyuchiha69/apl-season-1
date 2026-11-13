import { SeasonRecord } from '../../types';

export const season1Records: SeasonRecord[] = [
  {
    id: 'rec-champion',
    title: 'Season 1 Champions',
    category: 'milestone',
    holder: 'AUTHORS',
    teamId: 'authors',
    value: 'Inaugural Champions',
    description: 'Defeated CHAMPIONS by 3 wickets in the final, chasing 226 in 19.2 overs.',
    isHistoric: true
  },
  {
    id: 'rec-highest-run',
    title: 'Orange Cap (Most Runs)',
    category: 'batting',
    holder: 'A. King',
    teamId: 'authors',
    value: 527,
    description: '527 runs in 8 matches including two centuries and three fifties.',
    isHistoric: true
  },
  {
    id: 'rec-highest-wicket',
    title: 'Purple Cap (Most Wickets)',
    category: 'bowling',
    holder: 'N. Sky',
    teamId: 'skyshot',
    value: 12,
    description: '12 wickets in 8 matches with multiple 4-wicket hauls.',
    isHistoric: true
  },
  {
    id: 'rec-highest-individual-score',
    title: 'Highest Individual Score',
    category: 'batting',
    holder: 'Jay',
    teamId: 'knights',
    value: 146,
    description: 'Monumental 146 runs in a single match against Skyshot.',
    isHistoric: true
  },
  {
    id: 'rec-best-bowling-match',
    title: 'Highest Wickets in a Match',
    category: 'bowling',
    holder: 'T. Askin & S. Parker',
    teamId: 'authors',
    value: 5,
    description: 'Both bowlers recorded sensational 5-wicket hauls during the season.',
    isHistoric: true
  },
  {
    id: 'rec-hat-trick',
    title: 'Tournament Hat-Trick',
    category: 'bowling',
    holder: 'S. Parker',
    teamId: 'champions',
    value: 1,
    description: 'The sole recorded hat-trick of Season 1, taken by Champions bowler Parker.',
    isHistoric: true
  },
  {
    id: 'rec-most-fifties',
    title: 'Most Fifties (50s)',
    category: 'batting',
    holder: 'S. Harvy',
    teamId: 'champions',
    value: 5,
    description: 'Remarkable consistency with 5 half-centuries in 8 matches.',
    isHistoric: true
  },
  {
    id: 'rec-most-centuries',
    title: 'Most Centuries (100s)',
    category: 'batting',
    holder: 'A. King',
    teamId: 'authors',
    value: 2,
    description: 'Two magnificent centuries: 105 in league play and 108 in the Championship Final.',
    isHistoric: true
  },
  {
    id: 'rec-highest-team-score',
    title: 'Highest Team Score',
    category: 'team',
    holder: 'KNIGHTS',
    teamId: 'knights',
    value: 291,
    description: 'Blistering team total of 291 against Skyshot.',
    isHistoric: true
  },
  {
    id: 'rec-lowest-team-score',
    title: 'Lowest Team Score',
    category: 'team',
    holder: 'KNIGHTS',
    teamId: 'knights',
    value: 122,
    description: 'Restricted to 122 against Champions.',
    isHistoric: true
  }
];

