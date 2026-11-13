import { describe, it, expect } from 'vitest';
import {
  season1Data,
  getPointsTable,
  getOrangeCapLeaders,
  getPurpleCapLeaders,
  getAggregateAccounting,
  getPlayerById
} from '../src/data';

describe('APL Season 1 — Authoritative Data Integrity Test Suite', () => {
  it('should verify team counts and 11 players per team', () => {
    const teams = Object.values(season1Data.teams);
    expect(teams.length).toBe(4);

    expect(season1Data.teams.authors.squad.length).toBe(11);
    expect(season1Data.teams.champions.squad.length).toBe(11);
    expect(season1Data.teams.skyshot.squad.length).toBe(11);
    expect(season1Data.teams.knights.squad.length).toBe(11);

    expect(season1Data.players.length).toBe(44);
  });

  it('should verify total matches: 12 league + 3 playoffs = 15 total', () => {
    expect(season1Data.matches.length).toBe(15);
    const leagueMatches = season1Data.matches.filter((m) => m.stage === 'LEAGUE');
    const playoffMatches = season1Data.matches.filter((m) => m.stage !== 'LEAGUE');
    expect(leagueMatches.length).toBe(12);
    expect(playoffMatches.length).toBe(3);
  });

  it('should calculate the exact official league points table', () => {
    const table = getPointsTable(season1Data);

    expect(table.length).toBe(4);

    // 1st Place: SKYSHOT (4W, 2L, 8 pts)
    const skyshot = table.find((t) => t.teamId === 'skyshot')!;
    expect(skyshot.played).toBe(6);
    expect(skyshot.won).toBe(4);
    expect(skyshot.lost).toBe(2);
    expect(skyshot.points).toBe(8);
    expect(skyshot.position).toBe(1);

    // 2nd Place: AUTHORS (3W, 3L, 6 pts)
    const authors = table.find((t) => t.teamId === 'authors')!;
    expect(authors.played).toBe(6);
    expect(authors.won).toBe(3);
    expect(authors.lost).toBe(3);
    expect(authors.points).toBe(6);

    // 3rd Place: CHAMPIONS (3W, 3L, 6 pts)
    const champions = table.find((t) => t.teamId === 'champions')!;
    expect(champions.played).toBe(6);
    expect(champions.won).toBe(3);
    expect(champions.lost).toBe(3);
    expect(champions.points).toBe(6);

    // 4th Place: KNIGHTS (2W, 4L, 4 pts)
    const knights = table.find((t) => t.teamId === 'knights')!;
    expect(knights.played).toBe(6);
    expect(knights.won).toBe(2);
    expect(knights.lost).toBe(4);
    expect(knights.points).toBe(4);
    expect(knights.position).toBe(4);
  });

  it('should verify C. Cross batting record: 8 innings summing to exactly 280 runs', () => {
    const cross = getPlayerById(season1Data, 'cross');
    expect(cross).toBeDefined();
    expect(cross?.stats.runs).toBe(280);
    expect(cross?.stats.inningsRuns).toEqual([41, 18, 5, 0, 64, 49, 57, 46]);
    const sum = cross!.stats.inningsRuns!.reduce((a, b) => a + b, 0);
    expect(sum).toBe(280);
  });

  it('should verify Winsmoke reconstruction math strictly according to authorization', () => {
    const winsmoke = getPlayerById(season1Data, 'winsmoke');
    expect(winsmoke).toBeDefined();

    // Official displayed runs must remain 119
    expect(winsmoke?.stats.runs).toBe(119);

    // Original 5 innings
    expect(winsmoke?.stats.inningsRuns).toEqual([45, 10, 0, 19, 32]);
    const fiveInningsSum = winsmoke!.stats.inningsRuns!.reduce((a, b) => a + b, 0);
    expect(fiveInningsSum).toBe(106);

    // Reconstructed metadata
    const recon = winsmoke?.stats.reconstruction;
    expect(recon).toBeDefined();
    expect(recon?.sourceRuns).toBe(119);
    expect(recon?.sourceInningsSum).toBe(106);
    expect(recon?.reconstructedAdjustment).toBe(13); // 119 - 106 = 13
    expect(recon?.reconciledInningsSum).toBe(119);
    expect(recon?.displayedReconciledRuns).toBe(119);
    expect(recon?.isReconstructed).toBe(true);

    // Ensure no other player has reconstruction flag
    const otherReconstructed = season1Data.players.filter(
      (p) => p.id !== 'winsmoke' && p.stats.reconstruction?.isReconstructed
    );
    expect(otherReconstructed.length).toBe(0);
  });

  it('should verify aggregate accounting: 5930 + 13 + 2 = 5945 runs', () => {
    const accounting = getAggregateAccounting(season1Data);

    // Baseline source innings aggregate
    expect(accounting.sourceInningsAggregate).toBe(5930);

    // Authorized reconciliation components
    expect(accounting.winsmokeReconstruction).toBe(13);
    expect(accounting.remainingAggregateAdjustment).toBe(2);

    // Reconciled aggregate: 5930 + 13 + 2 = 5945
    expect(accounting.reconciledSum).toBe(5945);

    // Official sum of player stats.runs
    expect(accounting.totalBatterRunsOfficial).toBe(5945);
    expect(accounting.officialRecordedBatterAggregate).toBe(5945);
  });

  it('should verify total bowling wickets: exactly 101 with zero adjustments', () => {
    const accounting = getAggregateAccounting(season1Data);
    expect(accounting.totalBowlerWickets).toBe(101);

    // Check team breakdown
    const authorsWickets = season1Data.teams.authors.squad.reduce(
      (s, p) => s + (p.stats.wickets ?? 0),
      0
    );
    const skyshotWickets = season1Data.teams.skyshot.squad.reduce(
      (s, p) => s + (p.stats.wickets ?? 0),
      0
    );
    const championsWickets = season1Data.teams.champions.squad.reduce(
      (s, p) => s + (p.stats.wickets ?? 0),
      0
    );
    const knightsWickets = season1Data.teams.knights.squad.reduce(
      (s, p) => s + (p.stats.wickets ?? 0),
      0
    );

    expect(authorsWickets).toBe(28);
    expect(skyshotWickets).toBe(31);
    expect(championsWickets).toBe(29);
    expect(knightsWickets).toBe(13);
    expect(authorsWickets + skyshotWickets + championsWickets + knightsWickets).toBe(101);
  });

  it('should verify Orange Cap Top 5 leaderboard based on official printed totals', () => {
    const orangeCap = getOrangeCapLeaders(season1Data, 5);
    expect(orangeCap.length).toBe(5);

    expect(orangeCap[0].canonicalName).toBe('A. King');
    expect(orangeCap[0].stats.runs).toBe(527);

    expect(orangeCap[1].canonicalName).toBe('V. Lalouch');
    expect(orangeCap[1].stats.runs).toBe(372);

    expect(orangeCap[2].canonicalName).toBe('S. Harvy');
    expect(orangeCap[2].stats.runs).toBe(360);

    expect(orangeCap[3].canonicalName).toBe('W. Bruce');
    expect(orangeCap[3].stats.runs).toBe(311);

    expect(orangeCap[4].canonicalName).toBe('B. Neverland');
    expect(orangeCap[4].stats.runs).toBe(299);
  });

  it('should verify Purple Cap Top 5 leaderboard based on official printed totals', () => {
    const purpleCap = getPurpleCapLeaders(season1Data, 5);
    expect(purpleCap.length).toBe(5);

    expect(purpleCap[0].canonicalName).toBe('N. Sky');
    expect(purpleCap[0].stats.wickets).toBe(12);

    expect(purpleCap[1].canonicalName).toBe('S. Parker');
    expect(purpleCap[1].stats.wickets).toBe(8);

    expect(purpleCap[2].canonicalName).toBe('T. Askin');
    expect(purpleCap[2].stats.wickets).toBe(7);

    // Lock and Oscar tied at 6 wickets
    expect(purpleCap[3].stats.wickets).toBe(6);
    expect(purpleCap[4].stats.wickets).toBe(6);
  });

  it('should verify the Championship Final outcome and scorecard data', () => {
    const finalMatch = season1Data.matches.find((m) => m.stage === 'FINAL')!;
    expect(finalMatch).toBeDefined();
    expect(finalMatch.winnerTeamId).toBe('authors');
    expect(finalMatch.margin).toBe('by 3 wickets');

    // First Innings (Champions)
    expect(finalMatch.firstInnings?.runs).toBe(225);
    expect(finalMatch.firstInnings?.wickets).toBe(8);
    expect(finalMatch.firstInnings?.overs).toBe(20.0);

    // Second Innings (Authors)
    expect(finalMatch.secondInnings?.runs).toBe(226);
    expect(finalMatch.secondInnings?.wickets).toBe(7);
    expect(finalMatch.secondInnings?.overs).toBe(19.2);

    // A. King 108 in the final
    const kingFinal = finalMatch.secondInnings?.batting.find((b) => b.playerId === 'king');
    expect(kingFinal?.runs).toBe(108);
    expect(kingFinal?.balls).toBe(54);
  });
});
