import { Match } from '../../types';

export const season1Matches: Match[] = [
  // ================= LEAGUE STAGE (12 MATCHES) =================
  {
    id: 1,
    matchNumber: 1,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'knights',
    winnerTeamId: 'authors',
    detailsKnown: false
  },
  {
    id: 2,
    matchNumber: 2,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'champions',
    winnerTeamId: 'champions',
    detailsKnown: false
  },
  {
    id: 3,
    matchNumber: 3,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'knights',
    winnerTeamId: 'knights',
    detailsKnown: false
  },
  {
    id: 4,
    matchNumber: 4,
    stage: 'LEAGUE',
    homeTeamId: 'champions',
    awayTeamId: 'authors',
    winnerTeamId: 'authors',
    detailsKnown: false
  },
  {
    id: 5,
    matchNumber: 5,
    stage: 'LEAGUE',
    homeTeamId: 'champions',
    awayTeamId: 'knights',
    winnerTeamId: 'champions',
    detailsKnown: false
  },
  {
    id: 6,
    matchNumber: 6,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'skyshot',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 7,
    matchNumber: 7,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'knights',
    winnerTeamId: 'authors',
    detailsKnown: false
  },
  {
    id: 8,
    matchNumber: 8,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'champions',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 9,
    matchNumber: 9,
    stage: 'LEAGUE',
    homeTeamId: 'knights',
    awayTeamId: 'skyshot',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },
  {
    id: 10,
    matchNumber: 10,
    stage: 'LEAGUE',
    homeTeamId: 'authors',
    awayTeamId: 'champions',
    winnerTeamId: 'champions',
    detailsKnown: false
  },
  {
    id: 11,
    matchNumber: 11,
    stage: 'LEAGUE',
    homeTeamId: 'knights',
    awayTeamId: 'champions',
    winnerTeamId: 'knights',
    detailsKnown: false
  },
  {
    id: 12,
    matchNumber: 12,
    stage: 'LEAGUE',
    homeTeamId: 'skyshot',
    awayTeamId: 'authors',
    winnerTeamId: 'skyshot',
    detailsKnown: false
  },

  // ================= PLAYOFFS (3 MATCHES) =================
  {
    id: 13,
    matchNumber: 13,
    stage: 'SEMI_FINAL_1',
    homeTeamId: 'skyshot',
    awayTeamId: 'champions',
    winnerTeamId: 'champions',
    margin: 'by 10 runs',
    tossInfo: 'CHAMPIONS won the toss and elected to BAT',
    detailsKnown: true,
    secondInnings: {
      teamId: 'skyshot',
      runs: 215, // estimated from 10-run margin against Champions
      wickets: 5,
      overs: 20.0,
      batting: [
        { playerId: 'neverland', playerName: 'B. Neverland', runs: 17, balls: 6, dismissal: 'c&b I. Speed' },
        { playerId: 'lalouch', playerName: 'V. Lelouch', runs: 56, balls: 35, dismissal: 'run out (PAUL)' },
        { playerId: 'shamrock', playerName: 'V. Shamrock', runs: 71, balls: 30, dismissal: 'run out (OSCAR)' }
      ],
      bowling: []
    }
  },
  {
    id: 14,
    matchNumber: 14,
    stage: 'SEMI_FINAL_2',
    homeTeamId: 'skyshot',
    awayTeamId: 'authors',
    winnerTeamId: 'authors',
    margin: 'AUTHORS qualified for Final',
    detailsKnown: false
  },
  {
    id: 15,
    matchNumber: 15,
    stage: 'FINAL',
    homeTeamId: 'authors',
    awayTeamId: 'champions',
    winnerTeamId: 'authors',
    margin: 'by 3 wickets',
    tossInfo: 'CHAMPION won the toss and elected to BAT (20 OVERS, Exhibition, 9:45pm)',
    detailsKnown: true,
    screenshotUrl: '/assets/matches/final-scorecard-original.png',
    firstInnings: {
      teamId: 'champions',
      runs: 225,
      wickets: 8,
      overs: 20.0,
      batting: [
        { playerId: 'harvy', playerName: 'S. HARVY', runs: 60, balls: 33 },
        { playerId: 'stark', playerName: 'T. STARK', runs: 40, balls: 16 },
        { playerId: 'paul', playerName: 'A. PAUL', runs: 29, balls: 14 },
        { playerId: 'anakin', playerName: 'V. ANAKIN', runs: 23, balls: 16 }
      ],
      bowling: [
        { playerId: 'bumba', playerName: 'S. BUMBA', overs: 4.0, runsConceded: 32, wickets: 2 },
        { playerId: 'summers', playerName: 'J. SUMMERS', overs: 4.0, runsConceded: 36, wickets: 2 },
        { playerId: 'dharm', playerName: 'R. DHARM', overs: 4.0, runsConceded: 36, wickets: 1 },
        { playerId: 'overton', playerName: 'L. OVERTON', overs: 4.0, runsConceded: 56, wickets: 1 }
      ]
    },
    secondInnings: {
      teamId: 'authors',
      runs: 226,
      wickets: 7,
      overs: 19.2,
      batting: [
        { playerId: 'king', playerName: 'A. KING', runs: 108, balls: 54 },
        { playerId: 'cross', playerName: 'C. CROSS', runs: 46, balls: 23 },
        { playerId: 'overton', playerName: 'L. OVERTON', runs: 20, balls: 17 },
        { playerId: 'silva', playerName: 'D. SILVA', runs: 18, balls: 9 }
      ],
      bowling: [
        { playerId: 'parker', playerName: 'S. PARKER', overs: 4.0, runsConceded: 30, wickets: 2 },
        { playerId: 'oscar', playerName: 'P. OSCAR', overs: 4.0, runsConceded: 25, wickets: 1 }
      ]
    }
  }
];

