import { SeasonData, TeamId, Team } from '../../types';
import { season1Teams } from './teams';
import { season1Players } from './players';
import { season1Matches } from './matches';
import { season1Records } from './records';
import { season1Reconciliation } from './reconciliation';

// Assemble teams with their respective squads
const populatedTeams: Record<TeamId, Team> = { ...season1Teams };

Object.keys(populatedTeams).forEach((teamKey) => {
  const tid = teamKey as TeamId;
  populatedTeams[tid] = {
    ...populatedTeams[tid],
    squad: season1Players.filter((p) => p.teamId === tid)
  };
});

export const season1Data: SeasonData = {
  seasonId: 'season-1',
  name: 'APL Season 1',
  subtitle: 'The Legends Legacy',
  year: 2024,
  championTeamId: 'authors',
  teams: populatedTeams,
  players: season1Players,
  matches: season1Matches,
  records: season1Records,
  reconciliation: season1Reconciliation
};

export {
  season1Teams,
  season1Players,
  season1Matches,
  season1Records,
  season1Reconciliation
};

