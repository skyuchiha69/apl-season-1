import { Season2Reconciliation } from '../../types';

export const season2Reconciliation: Season2Reconciliation = {
  seasonId: 'season-2',
  totalBowlerWickets: 117,
  bowlerWicketsDiscrepancies: 0,
  battingDiscrepancies: [
    {
      playerId: 'bruce',
      playerName: 'Bruce',
      teamId: 'champions',
      sourcePage: 10,
      rawNotation: '40 + 19 + 70 + 24 + 51 + 3 + 71 + 22 = 301',
      recordedSequence: [40, 19, 70, 24, 51, 3, 71, 22],
      sequenceSum: 300,
      officialPrintedTotal: 301,
      delta: 1,
      notes: '8 recorded sequence terms sum to 300; official score sheet printed total is 301 (delta: +1).'
    },
    {
      playerId: 'gunther',
      playerName: 'Gunther',
      teamId: 'skyshot',
      sourcePage: 11,
      rawNotation: '0 + 31 + 6 + 0 + 22 + 10 + 25 = 72',
      recordedSequence: [0, 31, 6, 0, 22, 10, 25],
      sequenceSum: 94,
      officialPrintedTotal: 72,
      delta: -22,
      notes: '7 recorded sequence terms sum to 94; official score sheet printed total is 72 (delta: -22).'
    },
    {
      playerId: 'overton',
      playerName: 'Overton',
      teamId: 'skyshot',
      sourcePage: 11,
      rawNotation: '0 + 5 + 11 + 33 + 17 + 10 = 69',
      recordedSequence: [0, 5, 11, 33, 17, 10],
      sequenceSum: 76,
      officialPrintedTotal: 69,
      delta: -7,
      notes: '6 recorded sequence terms sum to 76; official score sheet printed total is 69 (delta: -7).'
    },
    {
      playerId: 'pointer',
      playerName: 'Pointer',
      teamId: 'knights',
      sourcePage: 12,
      rawNotation: '10 + 23 + 11 + 92 + 36 + 5 + 161 + 35 = 362',
      recordedSequence: [10, 23, 11, 92, 36, 5, 161, 35],
      sequenceSum: 373,
      officialPrintedTotal: 362,
      delta: -11,
      notes: '8 recorded sequence terms sum to 373; official total on Page 6 (Orange Cap) and Page 12 is 362 (delta: -11).'
    },
    {
      playerId: 'jacobs',
      playerName: 'Jacobs',
      teamId: 'knights',
      sourcePage: 12,
      rawNotation: '1 + 30 + 5 + 10 + 29 + 11 + 16 = 126',
      recordedSequence: [1, 30, 5, 10, 29, 11, 16],
      sequenceSum: 102,
      officialPrintedTotal: 126,
      delta: 24,
      notes: '7 recorded sequence terms sum to 102; official score sheet printed total is 126 (delta: +24).'
    },
    {
      playerId: 'haan',
      playerName: 'Haan',
      teamId: 'authors',
      sourcePage: 13,
      rawNotation: '1 + 9 + 24 + 7 + 3 = 51',
      recordedSequence: [1, 9, 24, 7, 3],
      sequenceSum: 44,
      officialPrintedTotal: 51,
      delta: 7,
      notes: '5 recorded sequence terms sum to 44; official score sheet printed total is 51 (delta: +7).'
    },
    {
      playerId: 'mario',
      playerName: 'Mario',
      teamId: 'authors',
      sourcePage: 13,
      rawNotation: '4 + 2 + 2 + 4 + 7 = 23',
      recordedSequence: [4, 2, 2, 4, 7],
      sequenceSum: 19,
      officialPrintedTotal: 23,
      delta: 4,
      notes: '5 recorded sequence terms sum to 19; official score sheet printed total is 23 (delta: +4).'
    },
    {
      playerId: 'bumba',
      playerName: 'Bumba',
      teamId: 'authors',
      sourcePage: 13,
      rawNotation: '4 + 0 + 1 + 1 + = 7',
      recordedSequence: [4, 0, 1, 1],
      sequenceSum: 6,
      officialPrintedTotal: 7,
      delta: 1,
      notes: 'Raw source string contains a trailing + before = 7. 4 recorded terms sum to 6; printed total is 7 (delta: +1).'
    }
  ],
  notes: 'All 21 bowling lines match sequence sums with 0 discrepancies across all 4 teams, totaling exactly 117 tournament wickets. The 8 batting discrepancies represent clerical recording variances in the surviving score sheets; both official printed totals and raw innings sequences are preserved losslessly.'
};
