import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { SeasonProvider } from '../src/app/providers/SeasonProvider';
import { AppRouter } from '../src/app/Router';
import { StatsPage } from '../src/pages/Stats/StatsPage';
import { PointsTableSection } from '../src/pages/Stats/components/PointsTableSection';
import { OrangeCapSection } from '../src/pages/Stats/components/OrangeCapSection';
import { PurpleCapSection } from '../src/pages/Stats/components/PurpleCapSection';
import { RecordsGrid } from '../src/pages/Stats/components/RecordsGrid';
import { ReconciliationLedger } from '../src/pages/Stats/components/ReconciliationLedger';

function renderWithSeason(ui: React.ReactElement, initialSeasonId: 'season-1' | 'season-2' = 'season-1') {
  return renderToString(
    <MemoryRouter>
      <SeasonProvider initialSeasonId={initialSeasonId}>
        {ui}
      </SeasonProvider>
    </MemoryRouter>
  );
}

describe('APL S2-B2 — Season 2 Stats & Records Integration Tests', () => {
  describe('1. Default Season Behavior on /stats', () => {
    it('should default to Season 1 when visiting /stats without an explicit season selection', () => {
      const html = renderToString(
        <MemoryRouter initialEntries={['/stats']}>
          <SeasonProvider>
            <AppRouter />
          </SeasonProvider>
        </MemoryRouter>
      );

      expect(html).toContain('APL Season 1 • Official Statistics &amp; Records Archive');
      expect(html).toContain('The Numbers Behind The Legacy.');
      expect(html).toContain('A. King');
      expect(html).toContain('527');
      expect(html).toContain('N. Sky');
      expect(html).toContain('12');
    });
  });

  describe('2. Season 1 Regression Preservation', () => {
    it('should keep Season 1 standings, caps, records, and 4-term reconciliation intact', () => {
      const pointsHtml = renderWithSeason(<PointsTableSection />, 'season-1');
      expect(pointsHtml).toContain('SKYSHOT');
      expect(pointsHtml).toContain('8');
      expect(pointsHtml).toContain('both franchises share 2nd place in the regular-season standings');

      const orangeHtml = renderWithSeason(<OrangeCapSection />, 'season-1');
      expect(orangeHtml).toContain('A. King');
      expect(orangeHtml).toContain('527');
      expect(orangeHtml).toContain('V. Lalouch');
      expect(orangeHtml).toContain('372');
      expect(orangeHtml).toContain('Complete Tournament Batting Register (30 Players)');

      const purpleHtml = renderWithSeason(<PurpleCapSection />, 'season-1');
      expect(purpleHtml).toContain('N. Sky');
      expect(purpleHtml).toContain('S. Parker');
      expect(purpleHtml).toContain('101 verified wickets');

      const recordsHtml = renderWithSeason(<RecordsGrid />, 'season-1');
      expect(recordsHtml).toContain('Jay • Knights');
      expect(recordsHtml).toContain('146');
      expect(recordsHtml).toContain('KNIGHTS');
      expect(recordsHtml).toContain('291');

      const reconHtml = renderWithSeason(<ReconciliationLedger />, 'season-1');
      expect(reconHtml).toContain('Source Innings Runs');
      expect(reconHtml).toContain('5,930');
      expect(reconHtml).toContain('+ Winsmoke Reconstruction');
      expect(reconHtml).toContain('+13');
      expect(reconHtml).toContain('+ Unattributed Aggregate Adjustment');
      expect(reconHtml).toContain('+2');
      expect(reconHtml).toContain('= Official Recorded Batter Runs');
      expect(reconHtml).toContain('5,945');
      expect(reconHtml).toContain('101 Recorded Bowler Wickets');
    });
  });

  describe('3. Season 2 Points Table & Regular Season Standings', () => {
    it('should display correct Season 2 regular season standings: Champions (9), Skyshot (7), Knights (6), Authors (2)', () => {
      const html = renderWithSeason(<PointsTableSection />, 'season-2');

      // Champions 1st with 9 points
      expect(html).toMatch(/1st[\s\S]*?Champions[\s\S]*?9/i);
      // Skyshot 2nd with 7 points
      expect(html).toMatch(/2nd[\s\S]*?Skyshot[\s\S]*?7/i);
      // Knights 3rd with 6 points
      expect(html).toMatch(/3rd[\s\S]*?Knights[\s\S]*?6/i);
      // Authors 4th with 2 points
      expect(html).toMatch(/4th[\s\S]*?Authors[\s\S]*?2/i);

      // Footnote explaining Match 2 tie and playoff deciders
      expect(html).toContain('Match 2 against Skyshot ending in a tie');
      expect(html).toContain('Champions topped the regular-season table with 9 points');
    });
  });

  describe('4. Points Table Tied Column', () => {
    it('should include the Tied column for both seasons, with 0s for S1 and 1s/0s for S2', () => {
      const s1Html = renderWithSeason(<PointsTableSection />, 'season-1');
      expect(s1Html).toContain('>Tied<');
      expect(s1Html).toContain('0</td>'); // All 4 teams in S1 had 0 ties

      const s2Html = renderWithSeason(<PointsTableSection />, 'season-2');
      expect(s2Html).toContain('>Tied<');
      // In Season 2, Champions and Skyshot tied Match 2
      expect(s2Html).toContain('1</td>'); // Tied count for Champions / Skyshot
    });
  });

  describe('5. Season 2 Orange Cap Leaderboard (Top 5)', () => {
    it('should display the verified top 5 Season 2 batters: Harvey (446), Figarland (433), Pointer (362), Red (352), Jay (322)', () => {
      const html = renderWithSeason(<OrangeCapSection />, 'season-2');

      expect(html).toContain('Harvey');
      expect(html).toContain('446');
      expect(html).toContain('Figarland');
      expect(html).toContain('433');
      expect(html).toContain('Pointer');
      expect(html).toContain('362');
      expect(html).toContain('Red');
      expect(html).toContain('352');
      expect(html).toContain('Jay');
      expect(html).toContain('322');
    });
  });

  describe('6. Gavi Unrecorded Runs Handling', () => {
    it('should exclude Gavi from ranked batters and display 47 registered batters without fabricated zeroes', () => {
      const html = renderWithSeason(<OrangeCapSection />, 'season-2');

      expect(html).toContain('Complete Tournament Batting Register (47 Players)');
      expect(html).toContain('Official recorded totals across all 47 tournament batters.');

      // Gavi must not appear in the ranked table
      expect(html).not.toMatch(/Gavi[\s\S]*?0\s*runs/i);
    });
  });

  describe('7. Season 2 Batting Reconciliation & Notation Discrepancies', () => {
    it('should disclose all 8 batting discrepancies and net variance of -3 runs', () => {
      const reconHtml = renderWithSeason(<ReconciliationLedger />, 'season-2');

      expect(reconHtml).toContain('Batting Notation Audit (8 Documented Archival Discrepancies)');
      expect(reconHtml).toContain('Net Variance: -3 Runs');
      expect(reconHtml).toContain('-3 runs');

      // Verify sample discrepancies
      expect(reconHtml).toContain('Bruce');
      expect(reconHtml).toContain('+1');
      expect(reconHtml).toContain('Gunther');
      expect(reconHtml).toContain('-22');
      expect(reconHtml).toContain('Pointer');
      expect(reconHtml).toContain('-11');
      expect(reconHtml).toContain('Jacobs');
      expect(reconHtml).toContain('+24');
      expect(reconHtml).toContain('Mario');
      expect(reconHtml).toContain('+4');

      // Disclose lossless preservation
      expect(reconHtml).toContain('Official printed tournament totals are preserved as primary archival records');
    });
  });

  describe('8. Season 2 Purple Cap Leaderboard (Top 5)', () => {
    it('should include the verified top wicket takers: Silver (12), Anakin (11), Overton (10), Dharm (10), Mario (7)', () => {
      const html = renderWithSeason(<PurpleCapSection />, 'season-2');

      expect(html).toContain('Silver');
      expect(html).toContain('12');
      expect(html).toContain('Anakin');
      expect(html).toContain('11');
      expect(html).toContain('Overton');
      expect(html).toContain('10');
      expect(html).toContain('Dharm');
      expect(html).toContain('10');
      expect(html).toContain('Mario');
      expect(html).toContain('7');
    });
  });

  describe('9. Season 2 Bowling Reconciliation (117 Wickets, 0 Discrepancies)', () => {
    it('should show 117 bowler dismissals across 21 bowlers with zero sequence discrepancies', () => {
      const reconHtml = renderWithSeason(<ReconciliationLedger />, 'season-2');

      expect(reconHtml).toContain('117 Recorded Bowler Wickets');
      expect(reconHtml).toContain('Zero Sequence Discrepancies');
      expect(reconHtml).toContain('21 Bowlers • 0 Adjustments Applied');

      const purpleHtml = renderWithSeason(<PurpleCapSection />, 'season-2');
      expect(purpleHtml).toContain('117 verified wickets');
      expect(purpleHtml).toContain('All 21 Bowlers');
    });
  });

  describe('10. Season 2 Tournament Records Grid', () => {
    it('should render all 10 Season 2 records and handle categories cleanly', () => {
      const html = renderWithSeason(<RecordsGrid />, 'season-2');

      expect(html).toContain('Orange Cap — Leading Run Scorer');
      expect(html).toContain('Purple Cap — Leading Wicket Taker');
      expect(html).toContain('Highest Individual Score in a Match');
      expect(html).toContain('Best Bowling in a Match');
      expect(html).toContain('Fastest Fifty of the Tournament');
      expect(html).toContain('Most Centuries in Season 2');
      expect(html).toContain('Most Fifties in Season 2');
      expect(html).toContain('Season-high century — 114');
      expect(html).toContain('Highest Team Total');
      expect(html).toContain('Lowest Team Total');

      // Category counts
      expect(html).toContain('All Records (10)');
      expect(html).toContain('Batting Feats (6)');
      expect(html).toContain('Bowling Hauls (2)');
      expect(html).toContain('Team Totals (2)');
      expect(html).toContain('Championship (0)');
    });
  });

  describe('11. Season 2 Spotlight Cards', () => {
    it('should display marquee spotlights: Pointer (161), Knights (319), Harvey (446), Silver (12)', () => {
      const html = renderWithSeason(<RecordsGrid />, 'season-2');

      expect(html).toContain('Pointer • Knights');
      expect(html).toContain('161');
      expect(html).toContain('KNIGHTS');
      expect(html).toContain('319');
      expect(html).toContain('Harvey • Champions');
      expect(html).toContain('446');
      expect(html).toContain('Silver • Champions');
      expect(html).toContain('12');
    });
  });

  describe('12. Sequential Multi-Season Rendering & Context Isolation', () => {
    it('should isolate season data cleanly without cross-season bleed when switching', () => {
      const s1Page = renderWithSeason(<StatsPage />, 'season-1');
      expect(s1Page).toContain('APL Season 1 • Official Statistics &amp; Records Archive');
      expect(s1Page).toContain('A. King');
      expect(s1Page).toContain('527');
      expect(s1Page).toContain('5,945');
      expect(s1Page).not.toContain('Harvey');
      expect(s1Page).not.toContain('Figarland');

      const s2Page = renderWithSeason(<StatsPage />, 'season-2');
      expect(s2Page).toContain('APL Season 2 • Official Statistics &amp; Records Archive');
      expect(s2Page).toContain('Harvey');
      expect(s2Page).toContain('446');
      expect(s2Page).toContain('Figarland');
      expect(s2Page).toContain('433');
      expect(s2Page).toContain('117 Recorded Bowler Wickets');
      expect(s2Page).not.toContain('5,945');
    });
  });
});
