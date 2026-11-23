import { Match } from '../../types';

export const season2Matches: Match[] = [
  // ==========================================
  // LEAGUE STAGE (Matches 1 to 12)
  // ==========================================
  {
    id: 1,
    matchNumber: 1,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'knights',
    winnerTeamId: 'knights',
    detailsKnown: false
  },
  {
    id: 2,
    matchNumber: 2,
    stage: 'LEAGUE',
    homeTeamId: 'champions',
    awayTeamId: 'skyshot',
    isTie: true,
    tiedTeamIds: ['champions', 'skyshot'],
    detailsKnown: false
  },
  {
    id: 3,
    matchNumber: 3,
    stage: 'LEAGUE',
    homeTeamId: 'knights',
    awayTeamId: 'champions',
    winnerTeamId: 'knights',
    detailsKnown: false
  },
  {
    id: 4,
    matchNumber: 4,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'authors',
    winnerTeamId: 'authors',
    detailsKnown: false
  },
  {
    id: 5,
    matchNumber: 5,
    stage: 'LEAGUE',
    homeTeamId: 'knights',
    awayTeamId: 'skyshot',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 6,
    matchNumber: 6,
    stage: 'LEAGUE',
    homeTeamId: 'champions',
    awayTeamId: 'authors',
    winnerTeamId: 'champions',
    detailsKnown: false
  },
  {
    id: 7,
    matchNumber: 7,
    stage: 'LEAGUE',
    homeTeamId: 'knights',
    awayTeamId: 'authors',
    winnerTeamId: 'knights',
    detailsKnown: false
  },
  {
    id: 8,
    matchNumber: 8,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'champions',
    winnerTeamId: 'champions',
    detailsKnown: false
  },
  {
    id: 9,
    matchNumber: 9,
    stage: 'LEAGUE',
    homeTeamId: 'champions',
    awayTeamId: 'knights',
    winnerTeamId: 'champions',
    detailsKnown: false
  },
  {
    id: 10,
    matchNumber: 10,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'skyshot',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 11,
    matchNumber: 11,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'knights',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 12,
    matchNumber: 12,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'champions',
    winnerTeamId: 'champions',
    detailsKnown: false
  },

  // ==========================================
  // PLAYOFF STAGE (Matches 13 to 15)
  // ==========================================
  {
    id: 13,
    matchNumber: 13,
    stage: 'QUALIFIER',
    homeTeamId: 'skyshot',
    awayTeamId: 'champions',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 14,
    matchNumber: 14,
    stage: 'SEMI_FINAL',
    homeTeamId: 'knights',
    awayTeamId: 'champions',
    winnerTeamId: 'knights',
    detailsKnown: false
  },
  {
    id: 15,
    matchNumber: 15,
    stage: 'FINAL',
    homeTeamId: 'knights',
    awayTeamId: 'skyshot',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  }
];
