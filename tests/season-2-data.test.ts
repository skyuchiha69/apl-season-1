import { describe, it, expect } from 'vitest';
import {
  season2Data,
  season1Data,
  getPointsTable,
  getOrangeCapLeaders,
  getPurpleCapLeaders,
  getCenturiesLeaders,
  getFiftiesLeaders,
  getHeadToHeadRecord,
  getPlayerById
} from '../src/data';

describe('APL Season 2 — S2-A Data Foundation & Integrity Tests', () => {
  describe('1. Squad Registries & Player Counts', () => {
    it('should contain exactly 48 registered squad members across all teams', () => {
      expect(season2Data.players.length).toBe(48);
    });

    it('should have exact team roster counts: Skyshot (12), Knights (12), Champions (11), Authors (13)', () => {
      expect(season2Data.teams.skyshot.squad.length).toBe(12);
      expect(season2Data.teams.knights.squad.length).toBe(12);
      expect(season2Data.teams.champions.squad.length).toBe(11);
      expect(season2Data.teams.authors.squad.length).toBe(13);
    });

    it('should preserve Gavi in Skyshot squad with role "unspecified" and unrecorded stats (no fabricated zeroes)', () => {
      const gavi = getPlayerById(season2Data, 'gavi');
      expect(gavi).toBeDefined();
      expect(gavi?.teamId).toBe('skyshot');
      expect(gavi?.role).toBe('unspecified');
      expect(gavi?.stats.runs).toBeUndefined();
      expect(gavi?.stats.wickets).toBeUndefined();
      expect(gavi?.stats.inningsRuns).toBeUndefined();
      expect(gavi?.stats.inningsWickets).toBeUndefined();
      expect(gavi?.stats.anomalyNote).toContain('Registered squad member in Season 2 SQUADS');
    });
  });

  describe('2. Player Identities & Captaincies', () => {
    it('should represent Tony as the canonical Champions player with Stark as an alias and exactly one player record', () => {
      const tony = getPlayerById(season2Data, 'tony');
      expect(tony).toBeDefined();
      expect(tony?.canonicalName).toBe('Tony');
      expect(tony?.isCaptain).toBe(true);
      expect(tony?.aliases).toContain('Stark');
      expect(tony?.stats.runs).toBe(117);

      // Verify no duplicate record exists for Stark
      const stark = getPlayerById(season2Data, 'stark');
      expect(stark).toBeUndefined();
    });

    it('should strictly isolate Shubham (owner/captain) and Sky (N. Sky bowler) without cross-alias pollution', () => {
      const shubham = getPlayerById(season2Data, 'shubham_bat');
      expect(shubham).toBeDefined();
      expect(shubham?.name).toBe('Shubham');
      expect(shubham?.isOwner).toBe(true);
      expect(shubham?.isCaptain).toBe(true);
      expect(shubham?.aliases).not.toContain('Sky'); // Sky strictly removed
      expect(shubham?.stats.runs).toBe(304);
      expect(shubham?.stats.centuries).toBe(1);

      const sky = getPlayerById(season2Data, 'sky');
      expect(sky).toBeDefined();
      expect(sky?.name).toBe('Sky');
      expect(sky?.canonicalName).toBe('N. Sky');
      expect(sky?.isOwner).toBe(false);
      expect(sky?.isCaptain).toBe(false);
      expect(sky?.stats.runs).toBe(61);
      expect(sky?.stats.wickets).toBe(4);
    });

    it('should identify the correct four official captains in Season 2', () => {
      expect(season2Data.teams.authors.captain.name).toBe('King');
      expect(season2Data.teams.knights.captain.name).toBe('Jay');
      expect(season2Data.teams.champions.captain.name).toBe('Tony');
      expect(season2Data.teams.skyshot.captain.name).toBe('Shubham');
    });
  });

  describe('3. Fixtures, Tie Handling & Standings Calculation', () => {
    it('should contain exactly 15 matches (12 league, 3 playoff)', () => {
      expect(season2Data.matches.length).toBe(15);
      const leagueMatches = season2Data.matches.filter((m) => m.stage === 'LEAGUE');
      const playoffMatches = season2Data.matches.filter((m) => m.stage !== 'LEAGUE');
      expect(leagueMatches.length).toBe(12);
      expect(playoffMatches.length).toBe(3);
    });

    it('should represent Match 2 as a tie without a winnerTeamId', () => {
      const m2 = season2Data.matches.find((m) => m.matchNumber === 2);
      expect(m2).toBeDefined();
      expect(m2?.isTie).toBe(true);
      if (m2 && m2.isTie) {
        expect(m2.tiedTeamIds).toEqual(['champions', 'skyshot']);
        expect((m2 as any).winnerTeamId).toBeUndefined();
      }
    });

    it('should derive league standings from fixtures using the 2/1/0 points system', () => {
      const standings = getPointsTable(season2Data);
      expect(standings.length).toBe(4);

      // Champions: 4W, 1T, 1L = 9 Pts (Position 1)
      expect(standings[0].teamId).toBe('champions');
      expect(standings[0].played).toBe(6);
      expect(standings[0].won).toBe(4);
      expect(standings[0].tied).toBe(1);
      expect(standings[0].lost).toBe(1);
      expect(standings[0].points).toBe(9);
      expect(standings[0].position).toBe(1);

      // Skyshot: 3W, 1T, 2L = 7 Pts (Position 2)
      expect(standings[1].teamId).toBe('skyshot');
      expect(standings[1].played).toBe(6);
      expect(standings[1].won).toBe(3);
      expect(standings[1].tied).toBe(1);
      expect(standings[1].lost).toBe(2);
      expect(standings[1].points).toBe(7);
      expect(standings[1].position).toBe(2);

      // Knights: 3W, 0T, 3L = 6 Pts (Position 3)
      expect(standings[2].teamId).toBe('knights');
      expect(standings[2].played).toBe(6);
      expect(standings[2].won).toBe(3);
      expect(standings[2].tied).toBe(0);
      expect(standings[2].lost).toBe(3);
      expect(standings[2].points).toBe(6);
      expect(standings[2].position).toBe(3);

      // Authors: 1W, 0T, 5L = 2 Pts (Position 4)
      expect(standings[3].teamId).toBe('authors');
      expect(standings[3].played).toBe(6);
      expect(standings[3].won).toBe(1);
      expect(standings[3].tied).toBe(0);
      expect(standings[3].lost).toBe(5);
      expect(standings[3].points).toBe(2);
      expect(standings[3].position).toBe(4);
    });

    it('should correctly record playoff stages and crown Skyshot as champion', () => {
      const qualifier = season2Data.matches.find((m) => m.stage === 'QUALIFIER');
      expect(qualifier?.homeTeamId).toBe('skyshot');
      expect(qualifier?.awayTeamId).toBe('champions');
      if (qualifier && !qualifier.isTie) {
        expect(qualifier.winnerTeamId).toBe('skyshot');
      }

      const semi = season2Data.matches.find((m) => m.stage === 'SEMI_FINAL');
      expect(semi?.homeTeamId).toBe('knights');
      expect(semi?.awayTeamId).toBe('champions');
      if (semi && !semi.isTie) {
        expect(semi.winnerTeamId).toBe('knights');
      }

      const finalMatch = season2Data.matches.find((m) => m.stage === 'FINAL');
      expect(finalMatch?.homeTeamId).toBe('knights');
      expect(finalMatch?.awayTeamId).toBe('skyshot');
      if (finalMatch && !finalMatch.isTie) {
        expect(finalMatch.winnerTeamId).toBe('skyshot');
      }

      expect(season2Data.championTeamId).toBe('skyshot');
      expect(season2Data.teams.skyshot.playoffResult).toBe('CHAMPIONS');
    });

    it('should correctly handle ties in head-to-head records', () => {
      const h2h = getHeadToHeadRecord(season2Data, 'champions', 'skyshot');
      expect(h2h.total).toBe(3); // 2 league matches + 1 qualifier
      expect(h2h.ties).toBe(1);
      expect(h2h.teamAWins).toBe(1); // M8
      expect(h2h.teamBWins).toBe(1); // Qualifier
    });
  });

  describe('4. Statistical Reconciliation & Discrepancies', () => {
    it('should preserve all 8 batting discrepancies with verbatim notation and deltas', () => {
      const recon = season2Data.reconciliation as any;
      expect(recon.battingDiscrepancies.length).toBe(8);

      const discrepancies = recon.battingDiscrepancies;
      const bruce = discrepancies.find((d: any) => d.playerId === 'bruce');
      expect(bruce.sequenceSum).toBe(300);
      expect(bruce.officialPrintedTotal).toBe(301);
      expect(bruce.delta).toBe(1);

      const gunther = discrepancies.find((d: any) => d.playerId === 'gunther');
      expect(gunther.sequenceSum).toBe(94);
      expect(gunther.officialPrintedTotal).toBe(72);
      expect(gunther.delta).toBe(-22);

      const overton = discrepancies.find((d: any) => d.playerId === 'overton');
      expect(overton.sequenceSum).toBe(76);
      expect(overton.officialPrintedTotal).toBe(69);
      expect(overton.delta).toBe(-7);

      const pointer = discrepancies.find((d: any) => d.playerId === 'pointer');
      expect(pointer.sequenceSum).toBe(373);
      expect(pointer.officialPrintedTotal).toBe(362);
      expect(pointer.delta).toBe(-11);

      const jacobs = discrepancies.find((d: any) => d.playerId === 'jacobs');
      expect(jacobs.sequenceSum).toBe(102);
      expect(jacobs.officialPrintedTotal).toBe(126);
      expect(jacobs.delta).toBe(24);

      const haan = discrepancies.find((d: any) => d.playerId === 'haan');
      expect(haan.sequenceSum).toBe(44);
      expect(haan.officialPrintedTotal).toBe(51);
      expect(haan.delta).toBe(7);

      const mario = discrepancies.find((d: any) => d.playerId === 'mario');
      expect(mario.sequenceSum).toBe(19);
      expect(mario.officialPrintedTotal).toBe(23);
      expect(mario.delta).toBe(4);

      const bumba = discrepancies.find((d: any) => d.playerId === 'bumba');
      expect(bumba.rawNotation).toBe('4 + 0 + 1 + 1 + = 7');
      expect(bumba.sequenceSum).toBe(6);
      expect(bumba.officialPrintedTotal).toBe(7);
      expect(bumba.delta).toBe(1);
    });

    it('should verify all 21 bowling lines match sequence sums with 0 discrepancies and sum to 117 wickets', () => {
      const bowlers = season2Data.players.filter((p) => p.stats.inningsWickets && p.stats.inningsWickets.length > 0);
      expect(bowlers.length).toBe(21);

      let totalCalculatedWickets = 0;
      bowlers.forEach((b) => {
        const sequenceSum = b.stats.inningsWickets!.reduce((sum, w) => sum + w, 0);
        expect(sequenceSum).toBe(b.stats.wickets); // Zero discrepancy per bowler
        totalCalculatedWickets += sequenceSum;
      });

      expect(totalCalculatedWickets).toBe(117);
      const recon = season2Data.reconciliation as any;
      expect(recon.totalBowlerWickets).toBe(117);
      expect(recon.bowlerWicketsDiscrepancies).toBe(0);
    });
  });

  describe('5. Cap Honors, Records & Shubham Milestone', () => {
    it('should correctly identify Orange Cap (Harvey 446) and Purple Cap (Silver 12)', () => {
      const orangeCap = getOrangeCapLeaders(season2Data, 5);
      expect(orangeCap[0].name).toBe('Harvey');
      expect(orangeCap[0].stats.runs).toBe(446);
      expect(orangeCap[1].name).toBe('Figarland');
      expect(orangeCap[1].stats.runs).toBe(433);
      expect(orangeCap[2].name).toBe('Pointer');
      expect(orangeCap[2].stats.runs).toBe(362);

      const purpleCap = getPurpleCapLeaders(season2Data, 5);
      expect(purpleCap[0].name).toBe('Silver');
      expect(purpleCap[0].stats.wickets).toBe(12);
      expect(purpleCap[1].name).toBe('Anakin');
      expect(purpleCap[1].stats.wickets).toBe(11);
    });

    it('should verify centuries leader (Figarland: 3) and total centuries count (7)', () => {
      const centuryLeaders = getCenturiesLeaders(season2Data);
      expect(centuryLeaders[0].name).toBe('Figarland');
      expect(centuryLeaders[0].stats.centuries).toBe(3);

      const totalCenturies = centuryLeaders.reduce((sum, p) => sum + (p.stats.centuries ?? 0), 0);
      expect(totalCenturies).toBe(7);
    });

    it('should verify fifties leaders (Jay & Red: 4 each) and total fifties count (34)', () => {
      const fiftyLeaders = getFiftiesLeaders(season2Data);
      expect(fiftyLeaders[0].stats.fifties).toBe(4);
      expect(fiftyLeaders[1].stats.fifties).toBe(4);

      const totalFifties = fiftyLeaders.reduce((sum, p) => sum + (p.stats.fifties ?? 0), 0);
      expect(totalFifties).toBe(34);
    });

    it('should record Shubham\'s century milestone with neutral title and exact stats', () => {
      const shubhamRecord = season2Data.records.find((r) => r.id === 's2-shubham-century');
      expect(shubhamRecord).toBeDefined();
      expect(shubhamRecord?.title).toBe('Season-high century — 114');
      expect(shubhamRecord?.value).toBe('114 Runs');
      expect(shubhamRecord?.holder).toBe('Shubham');
    });
  });

  describe('6. Season 1 Regression Protection', () => {
    it('should ensure Season 1 data, points table, and accounting remain completely untouched', () => {
      expect(season1Data.players.length).toBe(44);
      expect(season1Data.matches.length).toBe(15);

      const s1Table = getPointsTable(season1Data);
      expect(s1Table[0].teamId).toBe('skyshot');
      expect(s1Table[0].points).toBe(8);
      expect(s1Table[1].teamId).toBe('authors');
      expect(s1Table[1].points).toBe(6);
      expect(s1Table[2].teamId).toBe('champions');
      expect(s1Table[2].points).toBe(6);
      expect(s1Table[3].teamId).toBe('knights');
      expect(s1Table[3].points).toBe(4);

      const s1Recon = season1Data.reconciliation as any;
      expect(s1Recon.sourceInningsAggregate).toBe(5930);
      expect(s1Recon.winsmokeReconstruction).toBe(13);
      expect(s1Recon.officialRecordedBatterAggregate).toBe(5945);
      expect(s1Recon.officialRecordedBowlerWickets).toBe(101);
    });
  });
});
