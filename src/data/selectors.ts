import { SeasonData, TeamId, Player, Match, AggregateReconciliation, Season2Reconciliation } from './types';

export interface StandingsRow {
  teamId: TeamId;
  teamName: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  points: number;
  position: number;
  playoffStatus: string;
}

export function getPointsTable(season: SeasonData): StandingsRow[] {
  const standings: Record<TeamId, { played: number; won: number; lost: number; tied: number; points: number }> = {
    authors: { played: 0, won: 0, lost: 0, tied: 0, points: 0 },
    champions: { played: 0, won: 0, lost: 0, tied: 0, points: 0 },
    skyshot: { played: 0, won: 0, lost: 0, tied: 0, points: 0 },
    knights: { played: 0, won: 0, lost: 0, tied: 0, points: 0 },
  };

  // Only count LEAGUE stage matches
  const leagueMatches = season.matches.filter((m) => m.stage === 'LEAGUE');
  leagueMatches.forEach((m) => {
    standings[m.homeTeamId].played += 1;
    standings[m.awayTeamId].played += 1;

    if (m.isTie) {
      standings[m.homeTeamId].tied += 1;
      standings[m.homeTeamId].points += 1;
      standings[m.awayTeamId].tied += 1;
      standings[m.awayTeamId].points += 1;
    } else {
      standings[m.winnerTeamId].won += 1;
      standings[m.winnerTeamId].points += 2;

      const loserId = m.winnerTeamId === m.homeTeamId ? m.awayTeamId : m.homeTeamId;
      standings[loserId].lost += 1;
    }
  });

  const sorted = Object.entries(standings)
    .map(([teamId, data]) => ({
      teamId: teamId as TeamId,
      teamName: season.teams[teamId as TeamId].name,
      ...data,
      position: 1,
      playoffStatus: season.teams[teamId as TeamId].playoffResult
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.won !== a.won) return b.won - a.won;
      return a.teamName.localeCompare(b.teamName);
    });

  // Assign positions
  sorted.forEach((row, idx) => {
    row.position = idx + 1;
  });

  return sorted;
}

export function getOrangeCapLeaders(season: SeasonData, limit = 5): Player[] {
  return season.players
    .filter((p) => (p.stats.runs ?? 0) > 0)
    .sort((a, b) => (b.stats.runs ?? 0) - (a.stats.runs ?? 0))
    .slice(0, limit);
}

export function getPurpleCapLeaders(season: SeasonData, limit = 5): Player[] {
  return season.players
    .filter((p) => (p.stats.wickets ?? 0) > 0)
    .sort((a, b) => (b.stats.wickets ?? 0) - (a.stats.wickets ?? 0))
    .slice(0, limit);
}

export function getCenturiesLeaders(season: SeasonData): Player[] {
  return season.players
    .filter((p) => (p.stats.centuries ?? 0) > 0)
    .sort((a, b) => (b.stats.centuries ?? 0) - (a.stats.centuries ?? 0));
}

export function getFiftiesLeaders(season: SeasonData): Player[] {
  return season.players
    .filter((p) => (p.stats.fifties ?? 0) > 0)
    .sort((a, b) => (b.stats.fifties ?? 0) - (a.stats.fifties ?? 0));
}

export function getTeamById(season: SeasonData, teamId: TeamId) {
  return season.teams[teamId];
}

export function getPlayerById(season: SeasonData, playerId: string) {
  return season.players.find((p) => p.id === playerId);
}

export function getMatchesByStage(season: SeasonData, stage: Match['stage']) {
  return season.matches.filter((m) => m.stage === stage);
}

export function getHeadToHeadRecord(season: SeasonData, teamA: TeamId, teamB: TeamId) {
  const matches = season.matches.filter(
    (m) =>
      (m.homeTeamId === teamA && m.awayTeamId === teamB) ||
      (m.homeTeamId === teamB && m.awayTeamId === teamA)
  );

  let teamAWins = 0;
  let teamBWins = 0;
  let ties = 0;

  matches.forEach((m) => {
    if (m.isTie) {
      ties += 1;
    } else if (m.winnerTeamId === teamA) {
      teamAWins += 1;
    } else if (m.winnerTeamId === teamB) {
      teamBWins += 1;
    }
  });

  return {
    total: matches.length,
    teamAWins,
    teamBWins,
    ties,
    matches
  };
}

export function getAggregateAccounting(season: SeasonData) {
  const totalBatterRunsOfficial = season.players.reduce(
    (sum, p) => sum + (p.stats.runs ?? 0),
    0
  );

  const rawInningsSum = season.players.reduce((sum, p) => {
    if (!p.stats.inningsRuns) return sum;
    return sum + p.stats.inningsRuns.reduce((s, r) => s + r, 0);
  }, 0);

  const totalBowlerWickets = season.players.reduce(
    (sum, p) => sum + (p.stats.wickets ?? 0),
    0
  );

  if (season.seasonId === 'season-1') {
    const recon = season.reconciliation as AggregateReconciliation;
    return {
      sourceInningsAggregate: recon.sourceInningsAggregate, // 5930
      rawInningsSum, // 5931
      winsmokeReconstruction: recon.winsmokeReconstruction, // 13
      remainingAggregateAdjustment: recon.remainingAggregateAdjustment, // 2
      totalBatterRunsOfficial, // 5945
      officialRecordedBatterAggregate: recon.officialRecordedBatterAggregate, // 5945
      reconciledSum:
        recon.sourceInningsAggregate +
        recon.winsmokeReconstruction +
        recon.remainingAggregateAdjustment, // 5945
      totalBowlerWickets // 101
    };
  }

  // Season 2 and future seasons
  const recon = season.reconciliation as Season2Reconciliation;
  return {
    sourceInningsAggregate: rawInningsSum,
    rawInningsSum,
    winsmokeReconstruction: 0,
    remainingAggregateAdjustment: 0,
    totalBatterRunsOfficial,
    officialRecordedBatterAggregate: totalBatterRunsOfficial,
    reconciledSum: totalBatterRunsOfficial,
    totalBowlerWickets: recon?.totalBowlerWickets ?? totalBowlerWickets
  };
}
