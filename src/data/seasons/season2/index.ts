import { SeasonData, TeamId, Team } from '../../types';
import { season2Teams } from './teams';
import { season2Players } from './players';
import { season2Matches } from './matches';
import { season2Records } from './records';
import { season2Reconciliation } from './reconciliation';

// Assemble teams with their respective squads
const populatedTeams: Record<TeamId, Team> = { ...season2Teams };

Object.keys(populatedTeams).forEach((teamKey) => {
  const tid = teamKey as TeamId;
  populatedTeams[tid] = {
    ...populatedTeams[tid],
    squad: season2Players.filter((p) => p.teamId === tid)
  };
});

export const season2Data: SeasonData = {
  seasonId: 'season-2',
  name: 'APL Season 2',
  subtitle: 'The Legends Legacy',
  year: 2025,
  championTeamId: 'skyshot',
  teams: populatedTeams,
  players: season2Players,
  matches: season2Matches,
  records: season2Records,
  reconciliation: season2Reconciliation
};

export {
  season2Teams,
  season2Players,
  season2Matches,
  season2Records,
  season2Reconciliation
};
