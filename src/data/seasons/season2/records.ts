import { SeasonRecord } from '../../types';

export const season2Records: SeasonRecord[] = [
  // Cap Honors
  {
    id: 's2-orange-cap',
    title: 'Orange Cap — Leading Run Scorer',
    category: 'batting',
    holder: 'Harvey',
    teamId: 'champions',
    value: '446 Runs',
    description: 'Tournament top run scorer across 8 matches (including centuries of 108 and 112).',
    isHistoric: true
  },
  {
    id: 's2-purple-cap',
    title: 'Purple Cap — Leading Wicket Taker',
    category: 'bowling',
    holder: 'Silver',
    teamId: 'champions',
    value: '12 Wickets',
    description: 'Tournament leading wicket taker across 8 matches for Champions.',
    isHistoric: true
  },

  // Tournament Individual Extremes
  {
    id: 's2-highest-score-innings',
    title: 'Highest Individual Score in a Match',
    category: 'batting',
    holder: 'Pointer',
    teamId: 'knights',
    value: '161 Runs',
    description: 'Tournament record individual innings scored by Pointer for Knights.',
    isHistoric: true
  },
  {
    id: 's2-best-bowling-innings',
    title: 'Best Bowling in a Match',
    category: 'bowling',
    holder: 'Dharm',
    teamId: 'knights',
    value: '4 Wickets',
    description: 'Tournament-best bowling spell captured by Dharm for Knights.',
    isHistoric: true
  },
  {
    id: 's2-fastest-fifty',
    title: 'Fastest Fifty of the Tournament',
    category: 'batting',
    holder: 'Anakin',
    teamId: 'champions',
    value: '15 Balls',
    description: 'Blistering half-century struck off just 15 balls by Anakin.',
    isHistoric: true
  },

  // Milestone Leaders
  {
    id: 's2-most-centuries',
    title: 'Most Centuries in Season 2',
    category: 'batting',
    holder: 'Figarland',
    teamId: 'skyshot',
    value: '3 Centuries',
    description: 'Three centuries scored by Figarland (102, 118, 102) for Skyshot.',
    isHistoric: true
  },
  {
    id: 's2-most-fifties',
    title: 'Most Fifties in Season 2',
    category: 'batting',
    holder: 'Jay & Red',
    teamId: 'knights',
    value: '4 Fifties Each',
    description: 'Jay (Knights: 67, 71, 64, 81) and Red (Champions: 78, 51, 64, 51) tied with 4 fifties each.',
    isHistoric: true
  },

  // Shubham's Milestone
  {
    id: 's2-shubham-century',
    title: 'Season-high century — 114',
    category: 'batting',
    holder: 'Shubham',
    teamId: 'skyshot',
    value: '114 Runs',
    description: 'Recorded in sequence entry #8 of Skyshot\'s championship campaign (304 tournament runs total).',
    isHistoric: true
  },

  // Team Extremes
  {
    id: 's2-highest-team-total',
    title: 'Highest Team Total',
    category: 'team',
    holder: 'Knights',
    teamId: 'knights',
    value: '319 Runs',
    description: 'Massive tournament high team score recorded by Knights vs Champions.',
    isHistoric: true
  },
  {
    id: 's2-lowest-team-total',
    title: 'Lowest Team Total',
    category: 'team',
    holder: 'Skyshot',
    teamId: 'skyshot',
    value: '113 Runs',
    description: 'Lowest team total recorded by Skyshot vs Champions.',
    isHistoric: false
  }
];
