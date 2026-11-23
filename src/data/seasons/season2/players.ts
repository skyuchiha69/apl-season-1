import { Player } from '../../types';

export const season2Players: Player[] = [
  // ==========================================
  // SKYSHOT (12 Registered Squad Members)
  // ==========================================
  {
    id: 'lelouch',
    name: 'Lelouch',
    canonicalName: 'Lelouch',
    aliases: ['Lalouch'],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 261,
      inningsRuns: [70, 9, 65, 10, 0, 17, 41, 49],
      fifties: 2,
      centuries: 0,
      highestScore: 70
    }
  },
  {
    id: 'figarland',
    name: 'Figarland',
    canonicalName: 'Figarland',
    aliases: [],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 433,
      inningsRuns: [102, 0, 118, 37, 51, 102, 23, 0],
      fifties: 1,
      centuries: 3,
      highestScore: 118
    }
  },
  {
    id: 'white',
    name: 'White',
    canonicalName: 'White',
    aliases: [],
    teamId: 'skyshot',
    role: 'batsman',
    stats: {
      runs: 147,
      inningsRuns: [1, 26, 30, 0, 28, 4, 48, 10],
      fifties: 0,
      centuries: 0,
      highestScore: 48
    }
  },
  {
    id: 'shubham_bat',
    name: 'Shubham',
    canonicalName: 'Shubham',
    aliases: ['Shubham (C)'],
    teamId: 'skyshot',
    role: 'batsman',
    isOwner: true,
    isCaptain: true,
    stats: {
      runs: 304,
      inningsRuns: [38, 30, 36, 3, 10, 30, 43, 114],
      fifties: 0,
      centuries: 1,
      highestScore: 114
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
      runs: 158,
      inningsRuns: [27, 29, 4, 31, 18, 42, 7],
      fifties: 0,
      centuries: 0,
      highestScore: 42
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
      runs: 72,
      inningsRuns: [0, 31, 6, 0, 22, 10, 25],
      hasDiscrepancy: true,
      anomalyNote: '7 recorded terms sum to 94; printed total is 72 (delta: -22).'
    }
  },
  {
    id: 'overton',
    name: 'Overton',
    canonicalName: 'Overton',
    aliases: [],
    teamId: 'skyshot',
    role: 'all-rounder',
    stats: {
      runs: 69,
      inningsRuns: [0, 5, 11, 33, 17, 10],
      wickets: 10,
      inningsWickets: [0, 1, 2, 1, 2, 2, 2, 0],
      hasDiscrepancy: true,
      anomalyNote: '6 recorded batting terms sum to 76; printed total is 69 (delta: -7).'
    }
  },
  {
    id: 'turner',
    name: 'Turner',
    canonicalName: 'Turner',
    aliases: [],
    teamId: 'skyshot',
    role: 'all-rounder',
    stats: {
      runs: 35,
      inningsRuns: [0, 0, 0, 28, 0, 7],
      wickets: 7,
      inningsWickets: [1, 1, 1, 0, 1, 1, 0, 2]
    }
  },
  {
    id: 'sky',
    name: 'Sky',
    canonicalName: 'N. Sky',
    aliases: ['N. Sky'],
    teamId: 'skyshot',
    role: 'all-rounder',
    isOwner: false,
    isCaptain: false,
    stats: {
      runs: 61,
      inningsRuns: [0, 4, 28, 28, 0, 1],
      wickets: 4,
      inningsWickets: [1, 0, 2, 0, 0, 0, 0, 1]
    }
  },
  {
    id: 'lock',
    name: 'Lock',
    canonicalName: 'Lock',
    aliases: [],
    teamId: 'skyshot',
    role: 'all-rounder',
    stats: {
      runs: 13,
      inningsRuns: [0, 3, 8, 2],
      wickets: 4,
      inningsWickets: [0, 0, 0, 0, 0, 2, 0, 2]
    }
  },
  {
    id: 'kaiser',
    name: 'Kaiser',
    canonicalName: 'Kaiser',
    aliases: [],
    teamId: 'skyshot',
    role: 'all-rounder',
    stats: {
      runs: 8,
      inningsRuns: [0, 0, 1, 7],
      wickets: 7,
      inningsWickets: [1, 3, 1, 0, 0, 1, 0, 1]
    }
  },
  {
    id: 'gavi',
    name: 'Gavi',
    canonicalName: 'Gavi',
    aliases: [],
    teamId: 'skyshot',
    role: 'unspecified',
    stats: {
      anomalyNote: 'Registered squad member in Season 2 SQUADS (Page 2). Individual batting and bowling statistics unrecorded in source score sheets.'
    }
  },

  // ==========================================
  // KNIGHTS (12 Registered Squad Members)
  // ==========================================
  {
    id: 'jay',
    name: 'Jay',
    canonicalName: 'Jay',
    aliases: ['Jay . C'],
    teamId: 'knights',
    role: 'batsman',
    isOwner: true,
    isCaptain: true,
    stats: {
      runs: 322,
      inningsRuns: [67, 0, 13, 21, 71, 5, 64, 81],
      fifties: 4,
      centuries: 0,
      highestScore: 81
    }
  },
  {
    id: 'pointer',
    name: 'Pointer',
    canonicalName: 'Pointer',
    aliases: [],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 362,
      inningsRuns: [10, 23, 11, 92, 36, 5, 161, 35],
      fifties: 1,
      centuries: 1,
      highestScore: 161,
      hasDiscrepancy: true,
      anomalyNote: '8 recorded terms sum to 373; official total on Page 6 and Page 12 is 362 (delta: -11).'
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
      runs: 243,
      inningsRuns: [4, 4, 51, 29, 17, 83, 55, 0],
      fifties: 3,
      centuries: 0,
      highestScore: 83
    }
  },
  {
    id: 'bridge',
    name: 'Bridge',
    canonicalName: 'Bridge',
    aliases: ['Bridege'],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 257,
      inningsRuns: [45, 89, 81, 1, 12, 4, 8, 17],
      fifties: 2,
      centuries: 0,
      highestScore: 89
    }
  },
  {
    id: 'jacobs',
    name: 'Jacobs',
    canonicalName: 'Jacobs',
    aliases: [],
    teamId: 'knights',
    role: 'batsman',
    stats: {
      runs: 126,
      inningsRuns: [1, 30, 5, 10, 29, 11, 16],
      hasDiscrepancy: true,
      anomalyNote: '7 recorded terms sum to 102; printed total is 126 (delta: +24).'
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
      runs: 100,
      inningsRuns: [12, 19, 39, 9, 21, 0, 0],
      fifties: 0,
      centuries: 0,
      highestScore: 39
    }
  },
  {
    id: 'winsmoke',
    name: 'Winsmoke',
    canonicalName: 'Winsmoke',
    aliases: [],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 145,
      inningsRuns: [29, 49, 18, 17, 12, 10, 10],
      wickets: 4,
      inningsWickets: [1, 0, 0, 0, 1, 0, 1, 1]
    }
  },
  {
    id: 'dharm',
    name: 'Dharm',
    canonicalName: 'Dharm',
    aliases: [],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 38,
      inningsRuns: [6, 3, 6, 3, 4, 16, 0],
      wickets: 10,
      inningsWickets: [2, 4, 0, 1, 0, 0, 2, 1],
      bestBowling: '4 Wickets'
    }
  },
  {
    id: 'parker',
    name: 'Parker',
    canonicalName: 'Parker',
    aliases: [],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 4,
      inningsRuns: [0, 0, 0, 4, 0],
      wickets: 6,
      inningsWickets: [2, 0, 1, 1, 1, 1]
    }
  },
  {
    id: 'english',
    name: 'English',
    canonicalName: 'English',
    aliases: [],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 24,
      inningsRuns: [20, 4],
      wickets: 1,
      inningsWickets: [1, 0]
    }
  },
  {
    id: 'vilogen',
    name: 'Vilogen',
    canonicalName: 'Vilogen',
    aliases: [],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 35,
      inningsRuns: [1, 7, 0, 5, 11, 0, 11],
      wickets: 4,
      inningsWickets: [1, 0, 0, 1, 0, 1, 1, 0]
    }
  },
  {
    id: 'askin',
    name: 'Askin',
    canonicalName: 'Askin',
    aliases: [],
    teamId: 'knights',
    role: 'all-rounder',
    stats: {
      runs: 22,
      inningsRuns: [6, 4, 6, 0, 0, 0, 6],
      wickets: 6,
      inningsWickets: [2, 1, 0, 1, 0, 1, 1, 0]
    }
  },

  // ==========================================
  // CHAMPIONS (11 Registered Squad Members)
  // ==========================================
  {
    id: 'red',
    name: 'Red',
    canonicalName: 'Red',
    aliases: [],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 352,
      inningsRuns: [23, 78, 22, 28, 51, 64, 35, 51],
      fifties: 4,
      centuries: 0,
      highestScore: 78
    }
  },
  {
    id: 'harvey',
    name: 'Harvey',
    canonicalName: 'Harvey',
    aliases: [],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 446,
      inningsRuns: [6, 34, 108, 54, 42, 56, 34, 112],
      fifties: 2,
      centuries: 2,
      highestScore: 112
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
      runs: 275,
      inningsRuns: [60, 5, 55, 4, 34, 34, 62, 21],
      fifties: 3,
      centuries: 0,
      highestScore: 62
    }
  },
  {
    id: 'bruce',
    name: 'Bruce',
    canonicalName: 'Bruce',
    aliases: [],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 301,
      inningsRuns: [40, 19, 70, 24, 51, 3, 71, 22],
      fifties: 3,
      centuries: 0,
      highestScore: 71,
      hasDiscrepancy: true,
      anomalyNote: '8 recorded terms sum to 300; printed total is 301 (delta: +1).'
    }
  },
  {
    id: 'cross',
    name: 'Cross',
    canonicalName: 'Cross',
    aliases: [],
    teamId: 'champions',
    role: 'batsman',
    stats: {
      runs: 117,
      inningsRuns: [53, 0, 27, 12, 8, 17],
      fifties: 1,
      centuries: 0,
      highestScore: 53
    }
  },
  {
    id: 'tony',
    name: 'Tony',
    canonicalName: 'Tony',
    aliases: ['Stark', 'T. Stark', 'Tony Stark'],
    teamId: 'champions',
    role: 'batsman',
    isCaptain: true,
    stats: {
      runs: 117,
      inningsRuns: [21, 9, 41, 46],
      fifties: 0,
      centuries: 0,
      highestScore: 46
    }
  },
  {
    id: 'anakin',
    name: 'Anakin',
    canonicalName: 'Anakin',
    aliases: [],
    teamId: 'champions',
    role: 'all-rounder',
    stats: {
      runs: 76,
      inningsRuns: [0, 56, 8, 12],
      fifties: 1,
      centuries: 0,
      highestScore: 56,
      wickets: 11,
      inningsWickets: [1, 3, 2, 2, 2, 0, 1, 0]
    }
  },
  {
    id: 'night',
    name: 'Night',
    canonicalName: 'Night',
    aliases: ['Nights'],
    teamId: 'champions',
    role: 'all-rounder',
    stats: {
      runs: 17,
      inningsRuns: [0, 10, 7],
      wickets: 4,
      inningsWickets: [0, 0, 0, 0, 2, 0, 1, 1]
    }
  },
  {
    id: 'silver',
    name: 'Silver',
    canonicalName: 'Silver',
    aliases: [],
    teamId: 'champions',
    role: 'all-rounder',
    stats: {
      runs: 6,
      inningsRuns: [0, 0, 6],
      wickets: 12,
      inningsWickets: [1, 1, 1, 2, 2, 3, 1, 1]
    }
  },
  {
    id: 'oscar',
    name: 'Oscar',
    canonicalName: 'Oscar',
    aliases: [],
    teamId: 'champions',
    role: 'all-rounder',
    stats: {
      runs: 11,
      inningsRuns: [0, 11],
      wickets: 3,
      inningsWickets: [0, 1, 1, 0, 1, 0, 0, 0]
    }
  },
  {
    id: 'speed',
    name: 'Speed',
    canonicalName: 'Speed',
    aliases: [],
    teamId: 'champions',
    role: 'all-rounder',
    stats: {
      runs: 6,
      inningsRuns: [0, 6],
      wickets: 4,
      inningsWickets: [0, 1, 0, 1, 0, 1, 0, 1]
    }
  },

  // ==========================================
  // AUTHORS (13 Registered Squad Members)
  // ==========================================
  {
    id: 'king',
    name: 'King',
    canonicalName: 'King',
    aliases: ['King . C'],
    teamId: 'authors',
    role: 'batsman',
    isCaptain: true,
    stats: {
      runs: 57,
      inningsRuns: [22, 0, 4, 8, 19, 4],
      fifties: 0,
      centuries: 0,
      highestScore: 22
    }
  },
  {
    id: 'neverland',
    name: 'Neverland',
    canonicalName: 'Neverland',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 128,
      inningsRuns: [0, 16, 26, 12, 37, 37],
      fifties: 0,
      centuries: 0,
      highestScore: 37
    }
  },
  {
    id: 'shamrock',
    name: 'Shamrock',
    canonicalName: 'Shamrock',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 179,
      inningsRuns: [22, 39, 41, 51, 17, 9],
      fifties: 1,
      centuries: 0,
      highestScore: 51
    }
  },
  {
    id: 'pinkman',
    name: 'Pinkman',
    canonicalName: 'Pinkman',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 122,
      inningsRuns: [18, 11, 17, 52, 24],
      fifties: 1,
      centuries: 0,
      highestScore: 52
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
      runs: 178,
      inningsRuns: [32, 59, 1, 13, 52, 21],
      fifties: 2,
      centuries: 0,
      highestScore: 59
    }
  },
  {
    id: 'silva',
    name: 'Silva',
    canonicalName: 'Silva',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 189,
      inningsRuns: [36, 17, 60, 4, 56, 16],
      fifties: 2,
      centuries: 0,
      highestScore: 60
    }
  },
  {
    id: 'shiva',
    name: 'Shiva',
    canonicalName: 'Shiva',
    aliases: [],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 94,
      inningsRuns: [5, 24, 12, 0, 0, 53],
      fifties: 1,
      centuries: 0,
      highestScore: 53,
      wickets: 3,
      inningsWickets: [1, 0, 0, 1, 1, 0]
    }
  },
  {
    id: 'summers',
    name: 'Summers',
    canonicalName: 'Summers',
    aliases: [],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 55,
      inningsRuns: [22, 0, 8, 6, 13, 6],
      wickets: 3,
      inningsWickets: [0, 1, 0, 1, 1, 0]
    }
  },
  {
    id: 'haan',
    name: 'Haan',
    canonicalName: 'Haan',
    aliases: [],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 51,
      inningsRuns: [1, 9, 24, 7, 3],
      wickets: 5,
      inningsWickets: [1, 1, 0, 1, 2, 0],
      hasDiscrepancy: true,
      anomalyNote: '5 recorded batting terms sum to 44; printed total is 51 (delta: +7).'
    }
  },
  {
    id: 'mario',
    name: 'Mario',
    canonicalName: 'Mario',
    aliases: [],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 23,
      inningsRuns: [4, 2, 2, 4, 7],
      wickets: 7,
      inningsWickets: [1, 3, 2, 0, 1, 0],
      hasDiscrepancy: true,
      anomalyNote: '5 recorded batting terms sum to 19; printed total is 23 (delta: +4).'
    }
  },
  {
    id: 'bumba',
    name: 'Bumba',
    canonicalName: 'Bumba',
    aliases: [],
    teamId: 'authors',
    role: 'all-rounder',
    stats: {
      runs: 7,
      inningsRuns: [4, 0, 1, 1],
      wickets: 2,
      inningsWickets: [1, 0, 0, 0, 1, 0],
      hasDiscrepancy: true,
      anomalyNote: '4 recorded batting terms sum to 6; printed total is 7 (delta: +1). Raw notation: "4 + 0 + 1 + 1 + = 7".'
    }
  },
  {
    id: 'paul',
    name: 'Paul',
    canonicalName: 'Paul',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 4,
      inningsRuns: [4],
      fifties: 0,
      centuries: 0,
      highestScore: 4
    }
  },
  {
    id: 'hummings',
    name: 'Hummings',
    canonicalName: 'Hummings',
    aliases: [],
    teamId: 'authors',
    role: 'batsman',
    stats: {
      runs: 5,
      inningsRuns: [5],
      fifties: 0,
      centuries: 0,
      highestScore: 5
    }
  }
];
