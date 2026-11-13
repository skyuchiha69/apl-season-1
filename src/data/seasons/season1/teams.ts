import { Team, TeamId } from '../../types';

export const season1Teams: Record<TeamId, Team> = {
  authors: {
    id: 'authors',
    name: 'AUTHORS',
    shortName: 'AUTH',
    owner: {
      id: 'dharm',
      name: 'Dharm',
      nickname: 'Green',
      teamId: 'authors',
      favouriteColor: 'Green',
      favouriteCricketer: 'Rohit Sharma',
      note: 'The tactician behind the inaugural champions. Masterminded the dramatic 226 chase in the final to seal APL Season 1 glory.'
    },
    captain: {
      name: 'King',
      realLifeCounterpart: 'A. King',
      teamId: 'authors'
    },
    theme: {
      primaryColor: '#00E676',
      secondaryColor: '#062E19',
      accentColor: '#F5B800',
      glowColor: 'rgba(0, 230, 118, 0.25)',
      surfaceColor: '#0B1C14',
      borderColor: 'rgba(0, 230, 118, 0.35)'
    },
    squad: [], // Will be populated in index.ts with player references
    leagueRecord: {
      played: 6,
      won: 3,
      lost: 3,
      points: 6,
      position: 2
    },
    playoffResult: 'CHAMPIONS'
  },
  champions: {
    id: 'champions',
    name: 'CHAMPIONS',
    shortName: 'CHAMP',
    owner: {
      id: 'umang',
      name: 'Umang',
      nickname: 'UB',
      teamId: 'champions',
      favouriteColor: 'Red',
      favouriteCricketer: 'MS Dhoni',
      note: 'Fierce competitor who propelled Champions straight to the final with a sensational 10-run defense in Semi-Final 1.'
    },
    captain: {
      name: 'Stark',
      realLifeCounterpart: 'T. Stark',
      teamId: 'champions'
    },
    theme: {
      primaryColor: '#FF2E4D',
      secondaryColor: '#3B000C',
      accentColor: '#FFAA00',
      glowColor: 'rgba(255, 46, 77, 0.25)',
      surfaceColor: '#1C0F14',
      borderColor: 'rgba(255, 46, 77, 0.35)'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 3,
      lost: 3,
      points: 6,
      position: 3
    },
    playoffResult: 'RUNNERS_UP'
  },
  skyshot: {
    id: 'skyshot',
    name: 'SKYSHOT',
    shortName: 'SKY',
    owner: {
      id: 'shubham',
      name: 'Shubham',
      nickname: 'Sky',
      teamId: 'skyshot',
      favouriteColor: 'Blue',
      favouriteCricketer: 'Jos Buttler',
      note: 'Dominant league topper who captained Skyshot to 4 regular-season wins and 1st place in the standings. Set the tournament benchmark from match one.'
    },
    captain: {
      name: 'Shubham',
      realLifeCounterpart: 'Shubham',
      teamId: 'skyshot'
    },
    theme: {
      primaryColor: '#00D2FF',
      secondaryColor: '#0A192F',
      accentColor: '#38BDF8',
      glowColor: 'rgba(0, 210, 255, 0.25)',
      surfaceColor: '#0E1626',
      borderColor: 'rgba(0, 210, 255, 0.35)'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 4,
      lost: 2,
      points: 8,
      position: 1
    },
    playoffResult: 'SEMI_FINALIST'
  },
  knights: {
    id: 'knights',
    name: 'KNIGHTS',
    shortName: 'KNGT',
    owner: {
      id: 'jay',
      name: 'Jay',
      nickname: 'Red',
      teamId: 'knights',
      favouriteColor: 'Black',
      favouriteCricketer: 'Shubman Gill',
      note: 'Architect of the tournament’s highest individual score (146) and the record team total of 291 against Skyshot.'
    },
    captain: {
      name: 'Jay',
      realLifeCounterpart: 'Jay',
      teamId: 'knights'
    },
    theme: {
      primaryColor: '#F8FAFC',
      secondaryColor: '#0F172A',
      accentColor: '#94A3B8',
      glowColor: 'rgba(248, 250, 252, 0.2)',
      surfaceColor: '#14171F',
      borderColor: 'rgba(248, 250, 252, 0.25)'
    },
    squad: [],
    leagueRecord: {
      played: 6,
      won: 2,
      lost: 4,
      points: 4,
      position: 4
    },
    playoffResult: 'LEAGUE_STAGE'
  }
};

