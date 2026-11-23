import { TeamId, Team } from '../../types';

export const season2Teams: Record<TeamId, Team> = {
  authors: {
    id: 'authors',
    name: 'Authors',
    shortName: 'AUT',
    owner: {
      id: 'dharm',
      name: 'Dharm',
      nickname: 'Green',
      teamId: 'authors',
      favouriteColor: '#00E676',
      favouriteCricketer: 'Virat Kohli',
      note: 'Founding franchise owner (Season 1 Champions). Transferred as active player to Knights for Season 2.'
    },
    captain: {
      name: 'King',
      realLifeCounterpart: 'A. King',
      teamId: 'authors',
      playerId: 'king'
    },
    theme: {
      primaryColor: '#00E676',
      secondaryColor: '#00B0FF',
      accentColor: '#00E676',
      glowColor: 'rgba(0, 230, 118, 0.4)',
      surfaceColor: '#0A1A12',
      borderColor: '#00E67633'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 1,
      lost: 5,
      tied: 0,
      points: 2,
      position: 4
    },
    playoffResult: 'LEAGUE_STAGE'
  },
  knights: {
    id: 'knights',
    name: 'Knights',
    shortName: 'KNT',
    owner: {
      id: 'jay',
      name: 'Jay',
      nickname: 'Red',
      teamId: 'knights',
      favouriteColor: '#E2E8F0',
      favouriteCricketer: 'Rohit Sharma',
      note: 'Franchise owner and on-field team captain.'
    },
    captain: {
      name: 'Jay',
      realLifeCounterpart: 'Jay',
      teamId: 'knights',
      playerId: 'jay'
    },
    theme: {
      primaryColor: '#94A3B8',
      secondaryColor: '#E2E8F0',
      accentColor: '#CBD5E1',
      glowColor: 'rgba(148, 163, 184, 0.4)',
      surfaceColor: '#0F172A',
      borderColor: '#94A3B833'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 3,
      lost: 3,
      tied: 0,
      points: 6,
      position: 3
    },
    playoffResult: 'RUNNERS_UP'
  },
  champions: {
    id: 'champions',
    name: 'Champions',
    shortName: 'CMP',
    owner: {
      id: 'umang',
      name: 'Umang',
      nickname: 'UB',
      teamId: 'champions',
      favouriteColor: '#FF2E4D',
      favouriteCricketer: 'MS Dhoni',
      note: 'Franchise owner.'
    },
    captain: {
      name: 'Tony',
      realLifeCounterpart: 'Tony Stark',
      teamId: 'champions',
      playerId: 'tony'
    },
    theme: {
      primaryColor: '#FF2E4D',
      secondaryColor: '#FF9100',
      accentColor: '#FF2E4D',
      glowColor: 'rgba(255, 46, 77, 0.4)',
      surfaceColor: '#1A0A0E',
      borderColor: '#FF2E4D33'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 4,
      lost: 1,
      tied: 1,
      points: 9,
      position: 1
    },
    playoffResult: 'SEMI_FINALIST'
  },
  skyshot: {
    id: 'skyshot',
    name: 'Skyshot',
    shortName: 'SKY',
    owner: {
      id: 'shubham',
      name: 'Shubham',
      nickname: 'Sky',
      teamId: 'skyshot',
      favouriteColor: '#00D2FF',
      favouriteCricketer: 'AB de Villiers',
      note: 'Franchise owner, team captain, and Season 2 Champion.'
    },
    captain: {
      name: 'Shubham',
      realLifeCounterpart: 'Shubham',
      teamId: 'skyshot',
      playerId: 'shubham_bat'
    },
    theme: {
      primaryColor: '#00D2FF',
      secondaryColor: '#7C4DFF',
      accentColor: '#00D2FF',
      glowColor: 'rgba(0, 210, 255, 0.4)',
      surfaceColor: '#0A121A',
      borderColor: '#00D2FF33'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 3,
      lost: 2,
      tied: 1,
      points: 7,
      position: 2
    },
    playoffResult: 'CHAMPIONS'
  }
};
