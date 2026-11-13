import { Player } from '../../types';

export const season1Players: Player[] = [
  // ================= AUTHORS (11 PLAYERS) =================
  {
    id: 'king',
    name: 'A. King',
    canonicalName: 'A. King',
    aliases: ['King'],
    teamId: 'authors',
    role: 'batsman',
    isCaptain: true,
    stats: {
      runs: 527,
      inningsRuns: [94, 81, 71, 40, 3, 25, 105, 108],
      fifties: 3,
      centuries: 2,
      highestScore: 108,
      ballsFacedFinal: 54,
    }
  },
  {
    id: 'red',
    name: 'Red',
    canonicalName: 'Red',
    aliases: ['Red (wk)'],
    teamId: 'authors',
    role: 'wicket-keeper',
    stats: {
      runs: 295,
      inningsRuns: [61, 16, 6, 82, 110, 6, 8, 6],
      fifties: 2,
      centuries: 1,
      highestScore: 110
    }
  },
  {
    id: 'cross',
    name: 'C. Cross',
    canonicalName: 'C. Cross',
    aliases: ['Cross'],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 280,
      inningsRuns: [41, 18, 5, 0, 64, 49, 57, 46],
      fifties: 2,
      centuries: 0,
      highestScore: 64,
      ballsFacedFinal: 23
    }
  },
  {
    id: 'silva',
    name: 'D. Silva',
    canonicalName: 'D. Silva',
    aliases: ['Silva'],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 104,
      inningsRuns: [8, 8, 20, 16, 0, 12, 22, 18],
      fifties: 0,
      centuries: 0,
      highestScore: 22,
      ballsFacedFinal: 9
    }
  },
  {
    id: 'white',
    name: 'White',
    canonicalName: 'White',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 177,
      inningsRuns: [25, 28, 30, 0, 62, 15, 17, 0],
      fifties: 1,
      centuries: 0,
      highestScore: 62
    }
  },
  {
    id: 'bigway',
    name: 'Bigway',
    canonicalName: 'Bigway',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 125,
      inningsRuns: [22, 40, 27, 0, 0, 31, 0, 5],
      fifties: 0,
      centuries: 0,
      highestScore: 40
    }
  },
  {
    id: 'overton',
    name: 'L. Overton',
    canonicalName: 'L. Overton',
    aliases: ['Overton'],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 138,
      inningsRuns: [46, 0, 57, 0, 4, 11, 0, 20],
      fifties: 1,
      centuries: 0,
      highestScore: 57,
      wickets: 5,
      inningsWickets: [1, 0, 0, 1, 0, 1, 1, 1],
      ballsFacedFinal: 17,
      oversFinal: 4.0,
      runsConcededFinal: 56,
      wicketsFinal: 1
    }
  },
  {
    id: 'summers',
    name: 'J. Summers',
    canonicalName: 'J. Summers',
    aliases: ['Summers'],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 17,
      inningsRuns: [4, 0, 0, 0, 1, 2, 0, 9],
      fifties: 0,
      centuries: 0,
      highestScore: 9,
      wickets: 6,
      inningsWickets: [1, 1, 1, 1, 0, 0, 0, 2],
      oversFinal: 4.0,
      runsConcededFinal: 36,
      wicketsFinal: 2,
      anomalyNote: 'Official recorded total is 17 (printed innings sequence 4+0+0+0+1+2+0+9 sums to 16).'
    }
  },
  {
    id: 'dharm',
    name: 'R. Dharm',
    canonicalName: 'R. Dharm',
    aliases: ['Dharm'],
    teamId: 'authors',
    role: 'bowler',
    isOwner: true,
    stats: {
      wickets: 5,
      inningsWickets: [2, 0, 1, 1, 0, 0, 0, 1],
      oversFinal: 4.0,
      runsConcededFinal: 36,
      wicketsFinal: 1
    }
  },
  {
    id: 'bumba',
    name: 'S. Bumba',
    canonicalName: 'S. Bumba',
    aliases: ['Bumba'],
    teamId: 'authors',
    role: 'bowler',
    stats: {
      wickets: 5,
      inningsWickets: [0, 0, 0, 0, 0, 1, 2, 2],
      oversFinal: 4.0,
      runsConcededFinal: 32,
      wicketsFinal: 2
    }
  },
  {
    id: 'askin',
    name: 'T. Askin',
    canonicalName: 'T. Askin',
    aliases: ['Askin'],
    teamId: 'authors',
    role: 'bowler',
    stats: {
      wickets: 7,
      inningsWickets: [5, 1, 0, 0, 1, 0, 0, 0],
      bestBowling: '5/x'
    }
  },

  // ================= CHAMPIONS (11 PLAYERS) =================
  {
    id: 'stark',
    name: 'T. Stark',
    canonicalName: 'T. Stark',
    aliases: ['Stark'],
    teamId: 'champions',
    role: 'batsman',
    isCaptain: true,
    stats: {
      runs: 228,
      inningsRuns: [112, 0, 2, 8, 28, 24, 14, 40],
      fifties: 0,
      centuries: 1,
      highestScore: 112,
      ballsFacedFinal: 16
    }
  },
  {
    id: 'rogers',
    name: 'Rogers',
    canonicalName: 'Rogers',
    aliases: [],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 224,
      inningsRuns: [51, 0, 3, 11, 4, 41, 105, 9],
      fifties: 1,
      centuries: 1,
      highestScore: 105
    }
  },
  {
    id: 'harvy',
    name: 'S. Harvy',
    canonicalName: 'S. Harvy',
    aliases: ['Harvy'],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 360,
      inningsRuns: [16, 38, 54, 58, 69, 8, 57, 60],
      fifties: 5,
      centuries: 0,
      highestScore: 69,
      ballsFacedFinal: 33
    }
  },
  {
    id: 'bruce',
    name: 'W. Bruce',
    canonicalName: 'W. Bruce',
    aliases: ['Bruce'],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 311,
      inningsRuns: [82, 26, 24, 89, 34, 38, 9, 9],
      fifties: 2,
      centuries: 0,
      highestScore: 89
    }
  },
  {
    id: 'pinkman',
    name: 'Pinkman',
    canonicalName: 'Pinkman',
    aliases: [],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 178,
      inningsRuns: [44, 0, 0, 27, 40, 42, 10, 15],
      fifties: 0,
      centuries: 0,
      highestScore: 44
    }
  },
  {
    id: 'paul',
    name: 'A. Paul',
    canonicalName: 'A. Paul',
    aliases: ['Paul'],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 135,
      inningsRuns: [36, 0, 0, 26, 37, 7, 29],
      fifties: 0,
      centuries: 0,
      highestScore: 37,
      ballsFacedFinal: 14,
      anomalyNote: 'Printed with 7 innings in source (sum = 135); 1 match was Did Not Bat.'
    }
  },
  {
    id: 'anakin',
    name: 'V. Anakin',
    canonicalName: 'V. Anakin',
    aliases: ['Anakin'],
    teamId: 'champions',
    role: 'all-rounder',
    stats: {
      runs: 126,
      inningsRuns: [0, 0, 36, 5, 31, 1, 30, 23],
      fifties: 0,
      centuries: 0,
      highestScore: 36,
      wickets: 5,
      inningsWickets: [2, 0, 1, 0, 0, 2, 0, 0],
      ballsFacedFinal: 16
    }
  },
  {
    id: 'haan',
    name: 'Haan',
    canonicalName: 'Haan',
    aliases: [],
    teamId: 'champions',
    role: 'bowler',
    stats: {
      wickets: 5,
      inningsWickets: [2, 0, 0, 1, 2, 0, 0, 0]
    }
  },
  {
    id: 'oscar',
    name: 'P. Oscar',
    canonicalName: 'P. Oscar',
    aliases: ['Oscar'],
    teamId: 'champions',
    role: 'bowler',
    stats: {
      wickets: 6,
      inningsWickets: [2, 1, 0, 1, 1, 0, 0, 1],
      oversFinal: 4.0,
      runsConcededFinal: 25,
      wicketsFinal: 1
    }
  },
  {
    id: 'parker',
    name: 'S. Parker',
    canonicalName: 'S. Parker',
    aliases: ['Parker'],
    teamId: 'champions',
    role: 'bowler',
    stats: {
      wickets: 8,
      inningsWickets: [0, 0, 5, 0, 0, 0, 1, 2],
      bestBowling: '5/x',
      oversFinal: 4.0,
      runsConcededFinal: 30,
      wicketsFinal: 2
    }
  },
  {
    id: 'speed',
    name: 'I. Speed',
    canonicalName: 'I. Speed',
    aliases: ['Speed'],
    teamId: 'champions',
    role: 'bowler',
    stats: {
      wickets: 5,
      inningsWickets: [1, 1, 1, 0, 0, 0, 2, 0]
    }
  },

  // ================= SKYSHOT (11 PLAYERS) =================
  {
    id: 'lalouch',
    name: 'V. Lalouch',
    canonicalName: 'V. Lalouch',
    aliases: ['Lalouch', 'Lelouch'],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 372,
      inningsRuns: [20, 68, 16, 18, 24, 56, 92, 78],
      fifties: 4,
      centuries: 0,
      highestScore: 92
    }
  },
  {
    id: 'neverland',
    name: 'B. Neverland',
    canonicalName: 'B. Neverland',
    aliases: ['Neverland', 'Nevarland'],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 299,
      inningsRuns: [73, 0, 94, 56, 61, 17, 0, 0],
      fifties: 4,
      centuries: 0,
      highestScore: 94,
      anomalyNote: 'Official recorded total is 299 in Orange Cap & runs leaderboard (printed terms sum to 301).'
    }
  },
  {
    id: 'shamrock',
    name: 'Shamrock',
    canonicalName: 'Shamrock',
    aliases: [],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 285,
      inningsRuns: [61, 15, 10, 35, 13, 71, 54, 26],
      fifties: 3,
      centuries: 0,
      highestScore: 71
    }
  },
  {
    id: 'diaz',
    name: 'Diaz',
    canonicalName: 'Diaz',
    aliases: [],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 221,
      inningsRuns: [18, 0, 17, 30, 62, 0, 16, 78],
      fifties: 2,
      centuries: 0,
      highestScore: 78
    }
  },
  {
    id: 'gunther',
    name: 'Gunther',
    canonicalName: 'Gunther',
    aliases: [],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 161,
      inningsRuns: [49, 0, 0, 50, 16, 12, 14, 20],
      fifties: 1,
      centuries: 0,
      highestScore: 50
    }
  },
  {
    id: 'shubham_bat',
    name: 'Shubham',
    canonicalName: 'Shubham',
    aliases: [],
    teamId: 'skyshot',
    role: 'batsman',
    isOwner: true,
    isCaptain: true,
    stats: {
      runs: 134,
      inningsRuns: [51, 0, 32, 20, 19, 12, 0, 0],
      fifties: 1,
      centuries: 0,
      highestScore: 51
    }
  },
  {
    id: 'shiva',
    name: 'Shiva',
    canonicalName: 'Shiva',
    aliases: [],
    teamId: 'skyshot',
    role: 'all-rounder',
    stats: {
      runs: 92,
      inningsRuns: [27, 0, 11, 0, 24, 30, 0, 0],
      fifties: 0,
      centuries: 0,
      highestScore: 30,
      wickets: 2,
      inningsWickets: [0, 0, 1, 0, 1, 0, 0, 0]
    }
  },
  {
    id: 'sky',
    name: 'N. Sky',
    canonicalName: 'N. Sky',
    aliases: ['Sky'],
    teamId: 'skyshot',
    role: 'all-rounder',
    stats: {
      runs: 23,
      inningsRuns: [0, 0, 20, 0, 0, 3, 0, 0],
      fifties: 0,
      centuries: 0,
      highestScore: 20,
      wickets: 12,
      inningsWickets: [1, 0, 4, 1, 4, 0, 1, 1],
      bestBowling: '4/x'
    }
  },
  {
    id: 'night',
    name: 'Night',
    canonicalName: 'Night',
    aliases: [],
    teamId: 'skyshot',
    role: 'bowler',
    stats: {
      wickets: 6,
      inningsWickets: [1, 1, 1, 1, 0, 0, 1, 1]
    }
  },
  {
    id: 'lock',
    name: 'O. Lock',
    canonicalName: 'O. Lock',
    aliases: ['Lock'],
    teamId: 'skyshot',
    role: 'bowler',
    stats: {
      wickets: 6,
      inningsWickets: [1, 0, 1, 1, 2, 1, 0, 0]
    }
  },
  {
    id: 'kaiser',
    name: 'Kaiser',
    canonicalName: 'Kaiser',
    aliases: [],
    teamId: 'skyshot',
    role: 'bowler',
    stats: {
      wickets: 5,
      inningsWickets: [0, 0, 2, 1, 0, 1, 0, 1]
    }
  },

  // ================= KNIGHTS (11 PLAYERS) =================
  {
    id: 'pointer',
    name: 'Pointer',
    canonicalName: 'Pointer',
    aliases: [],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 155,
      inningsRuns: [20, 0, 3, 48, 62, 20],
      fifties: 1,
      centuries: 0,
      highestScore: 62,
      anomalyNote: 'Official recorded total is 155 (printed sequence 20+0+3+48+62+20 sums to 153).'
    }
  },
  {
    id: 'blackwood',
    name: 'Blackwood',
    canonicalName: 'Blackwood',
    aliases: [],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 148,
      inningsRuns: [43, 40, 3, 1, 33, 28],
      fifties: 0,
      centuries: 0,
      highestScore: 43
    }
  },
  {
    id: 'jay',
    name: 'Jay',
    canonicalName: 'Jay',
    aliases: ['Red'],
    teamId: 'knights',
    role: 'batsman',
    isOwner: true,
    isCaptain: true,
    stats: {
      runs: 245,
      inningsRuns: [18, 146, 21, 36, 0, 24],
      fifties: 0,
      centuries: 1,
      highestScore: 146
    }
  },
  {
    id: 'bridge',
    name: 'Bridge',
    canonicalName: 'Bridge',
    aliases: [],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 137,
      inningsRuns: [13, 35, 43, 0, 30, 16],
      fifties: 0,
      centuries: 0,
      highestScore: 43
    }
  },
  {
    id: 'fiagarland',
    name: 'Fiagarland',
    canonicalName: 'Fiagarland',
    aliases: ['Garland', 'Figrland'],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 163,
      inningsRuns: [38, 7, 7, 26, 25, 60],
      fifties: 1,
      centuries: 0,
      highestScore: 60
    }
  },
  {
    id: 'ackerman',
    name: 'Ackerman',
    canonicalName: 'Ackerman',
    aliases: [],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 166,
      inningsRuns: [45, 24, 6, 0, 5, 86],
      fifties: 1,
      centuries: 0,
      highestScore: 86
    }
  },
  {
    id: 'winsmoke',
    name: 'Winsmoke',
    canonicalName: 'Winsmoke',
    aliases: ['Vinsmoke'],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 119,
      inningsRuns: [45, 10, 0, 19, 32],
      wickets: 4,
      inningsWickets: [0, 0, 2, 0, 1, 1],
      fifties: 0,
      centuries: 0,
      highestScore: 45,
      reconstruction: {
        sourceRuns: 119,
        sourceInningsRuns: [45, 10, 0, 19, 32],
        sourceInningsSum: 106,
        reconstructedAdjustment: 13,
        reconciledInningsSum: 119,
        displayedReconciledRuns: 119,
        isReconstructed: true,
        reconstructionNote: 'Knights played 6 matches; 5 scores were printed (summing to 106). Reconstructed missing 6th innings: 13 runs (119 official - 106 innings sum = 13).'
      }
    }
  },
  {
    id: 'turner',
    name: 'Turner',
    canonicalName: 'Turner',
    aliases: [],
    teamId: 'knights',
    role: 'bowler',
    stats: {
      wickets: 4,
      inningsWickets: [1, 0, 1, 0, 2, 0]
    }
  },
  {
    id: 'hummings',
    name: 'Hummings',
    canonicalName: 'Hummings',
    aliases: ['Hummimgs'],
    teamId: 'knights',
    role: 'bowler',
    stats: {
      wickets: 0,
      inningsWickets: [0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'vilogen',
    name: 'Vilogen',
    canonicalName: 'Vilogen',
    aliases: [],
    teamId: 'knights',
    role: 'bowler',
    stats: {
      wickets: 2,
      inningsWickets: [0, 0, 2, 0, 0, 0]
    }
  },
  {
    id: 'english',
    name: 'English',
    canonicalName: 'English',
    aliases: [],
    teamId: 'knights',
    role: 'bowler',
    stats: {
      wickets: 3,
      inningsWickets: [0, 0, 1, 0, 1, 1]
    }
  }
];

