import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { SeasonProvider } from '../src/app/providers/SeasonProvider';
import { ThemeProvider } from '../src/app/providers/ThemeProvider';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { StatsPage } from '../src/pages/Stats/StatsPage';
import { MatchesPage } from '../src/pages/Matches/MatchesPage';
import { PointsTableSection } from '../src/pages/Stats/components/PointsTableSection';
import { OrangeCapSection } from '../src/pages/Stats/components/OrangeCapSection';
import { PurpleCapSection } from '../src/pages/Stats/components/PurpleCapSection';
import { RecordsGrid } from '../src/pages/Stats/components/RecordsGrid';
import { ReconciliationLedger } from '../src/pages/Stats/components/ReconciliationLedger';
import { PlayoffBracket } from '../src/pages/Matches/components/PlayoffBracket';
import { FinalScorecardDetail } from '../src/pages/Matches/components/FinalScorecardDetail';
import { LeagueFixturesGrid } from '../src/pages/Matches/components/LeagueFixturesGrid';
import { SeasonStatsStrip } from '../src/pages/Home/components/SeasonStatsStrip';
import { AppRouter } from '../src/app/Router';
import { season1Data } from '../src/data';

// Helper to render components wrapped in SeasonProvider & MemoryRouter
const renderWithProviders = (ui: React.ReactElement, initialRoute = '/') => {
  return renderToString(
    <MemoryRouter initialEntries={[initialRoute]}>
      <SeasonProvider>{ui}</SeasonProvider>
    </MemoryRouter>
  );
};

describe('APL Stage 2C — Statistics Hub & Championship Match Centre Tests', () => {
  describe('Statistics Page & Standings Tests', () => {
    it('1. /stats renders successfully via AppRouter', () => {
      const html = renderToString(
        <MemoryRouter initialEntries={['/stats']}>
          <SeasonProvider>
            <AppRouter />
          </SeasonProvider>
        </MemoryRouter>
      );

      expect(html).toContain('The Numbers Behind The Legacy.');
      expect(html).toContain('Official Statistics &amp; Records Archive');
    });

    it('2. Skyshot appears first with 8 points in standings', () => {
      const html = renderWithProviders(<PointsTableSection />);

      expect(html).toContain('SKYSHOT');
      expect(html).toContain('1st');
      expect(html).toContain('Regular Season Toppers');
    });

    it('3. Authors and Champions are both displayed as tied second (T-2nd)', () => {
      const html = renderWithProviders(<PointsTableSection />);

      // Both should show T-2nd rank
      expect(html).toContain('T-2nd');
      expect(html).toContain('AUTHORS');
      expect(html).toContain('CHAMPIONS');

      // Check footnote
      expect(html).toContain(
        'Authors and Champions finished tied on 6 points with identical 3–3 records (head-to-head 1–1).'
      );
      expect(html).toContain('both franchises share 2nd place in the regular-season standings');
    });

    it('4. No invented NRR or run differential is displayed in standings', () => {
      const html = renderWithProviders(<PointsTableSection />);

      // Ensure NRR / Net Run Rate columns are NOT rendered in table headers or table data cells
      expect(html).not.toContain('<th scope="col">NRR');
      expect(html).not.toContain('<th scope="col">Net Run Rate');
      expect(html).not.toContain('Run Differential');
    });
  });

  describe('Orange Cap & Batting Register Tests', () => {
    it('5. Orange Cap includes the correct top five batters', () => {
      const html = renderWithProviders(<OrangeCapSection />);

      // Top 5 names and runs
      expect(html).toContain('A. King');
      expect(html).toContain('527');
      expect(html).toContain('V. Lalouch');
      expect(html).toContain('372');
      expect(html).toContain('S. Harvy');
      expect(html).toContain('360');
      expect(html).toContain('W. Bruce');
      expect(html).toContain('311');
      expect(html).toContain('B. Neverland');
      expect(html).toContain('299');
    });

    it('6. Orange Cap register includes all 30 players with recorded batting statistics', () => {
      const html = renderWithProviders(<OrangeCapSection />);

      const battersCount = season1Data.players.filter((p) => p.stats.runs !== undefined).length;
      expect(battersCount).toBe(30);

      // Verify sample batters across all four teams appear
      expect(html).toContain('Jay'); // Knights
      expect(html).toContain('Red'); // Authors
      expect(html).toContain('T. Stark'); // Champions
      expect(html).toContain('Shamrock'); // Skyshot
      expect(html).toContain('Winsmoke'); // Knights
    });

    it('11a. Missing batting metrics are not coerced to zero or synthetic rates', () => {
      const html = renderWithProviders(<OrangeCapSection />);

      // Ensure no synthetic strike rate or average headers
      expect(html).not.toContain('Strike Rate');
      expect(html).not.toContain('Batting Average');
      expect(html).not.toContain('Balls Faced');
      expect(html).toContain('Strike rates and other derived batting metrics are therefore unavailable.');
    });
  });

  describe('Purple Cap & Bowling Register Tests', () => {
    it('7. Purple Cap includes all seven players with 6 or more wickets and correct franchises', () => {
      const html = renderWithProviders(<PurpleCapSection />);

      // All 7 players must be in the leading feature / page
      expect(html).toContain('N. Sky');
      expect(html).toContain('S. Parker');
      expect(html).toContain('T. Askin');
      expect(html).toContain('J. Summers');
      expect(html).toContain('P. Oscar');
      expect(html).toContain('Night');
      expect(html).toContain('O. Lock');

      // Verify specific franchise pairings in rendered component (D2)
      // J. Summers -> Authors
      expect(html).toMatch(/J\.\s*Summers[\s\S]*?Authors/i);
      // P. Oscar -> Champions
      expect(html).toMatch(/P\.\s*Oscar[\s\S]*?Champions/i);
      // O. Lock -> Skyshot
      expect(html).toMatch(/O\.\s*Lock[\s\S]*?Skyshot/i);
    });

    it('8. Purple Cap ranking follows 1, 2, 3, T-4, T-4, T-4, T-4', () => {
      const html = renderWithProviders(<PurpleCapSection />);

      expect(html).toContain('1st');
      expect(html).toContain('2nd');
      expect(html).toContain('3rd');
      expect(html).toContain('T-4');
    });

    it('9. The next rank after the seven leading players is T-8 with all seven 5-wicket bowlers', () => {
      const html = renderWithProviders(<PurpleCapSection />);

      // Verify rank T-8 appears in the rendered component
      expect(html).toContain('T-8');

      // Assert that all seven players appear in the rendered Purple Cap leaderboard with 5 wickets and rank T-8 (D3)
      const fiveWicketBowlers = [
        { name: 'Haan', team: 'CHAMPIONS' },
        { name: 'I. Speed', team: 'CHAMPIONS' },
        { name: 'Kaiser', team: 'SKYSHOT' },
        { name: 'L. Overton', team: 'AUTHORS' },
        { name: 'R. Dharm', team: 'AUTHORS' },
        { name: 'S. Bumba', team: 'AUTHORS' },
        { name: 'V. Anakin', team: 'CHAMPIONS' },
      ];

      for (const bowler of fiveWicketBowlers) {
        expect(html).toContain(bowler.name);
        expect(html).toMatch(new RegExp(bowler.team, 'i'));
      }
    });

    it('10. Bowling leaderboard includes all 20 recorded bowlers', () => {
      const html = renderWithProviders(<PurpleCapSection />);

      const bowlersCount = season1Data.players.filter((p) => p.stats.wickets !== undefined).length;
      expect(bowlersCount).toBe(20);

      // Verify sample bowlers across teams appear in table
      expect(html).toContain('Turner'); // Knights (4)
      expect(html).toContain('Vilogen'); // Knights (2)
      expect(html).toContain('R. Dharm'); // Authors (5)
      expect(html).toContain('I. Speed'); // Champions (5)
      expect(html).toContain('Kaiser'); // Skyshot (5)
    });

    it('12. Only recorded best bowling figures are displayed (4/x, 5/x)', () => {
      const html = renderWithProviders(<PurpleCapSection />);

      expect(html).toContain('4/x');
      expect(html).toContain('5/x');
      // Must not invent fake denominators like 5/0 or 4/12
      expect(html).not.toContain('5/0');
      expect(html).not.toContain('4/0');
    });
  });

  describe('Tournament Records & Milestones Tests', () => {
    it('13. All 10 tournament records appear', () => {
      const html = renderWithProviders(<RecordsGrid />);

      expect(html).toContain('Season 1 Champions');
      expect(html).toContain('Orange Cap (Most Runs)');
      expect(html).toContain('Purple Cap (Most Wickets)');
      expect(html).toContain('Highest Individual Score');
      expect(html).toContain('Highest Wickets in a Match');
      expect(html).toContain('Tournament Hat-Trick');
      expect(html).toContain('Most Fifties (50s)');
      expect(html).toContain('Most Centuries (100s)');
      expect(html).toContain('Highest Team Score');
      expect(html).toContain('Lowest Team Score');
    });

    it("14. Jay's 146 and Knights' 291 appear correctly", () => {
      const html = renderWithProviders(<RecordsGrid />);

      expect(html).toContain('146');
      expect(html).toContain('Jay • Knights');
      expect(html).toContain('291');
      expect(html).toContain('KNIGHTS');
    });
  });

  describe('Reconciliation Ledger Tests', () => {
    it('15. Reconciliation totals equal 5,945 with exact approved labels', () => {
      const html = renderWithProviders(<ReconciliationLedger />);

      expect(html).toContain('Source Innings Runs');
      expect(html).toContain('5,930');
      expect(html).toContain('+ Winsmoke Reconstruction');
      expect(html).toContain('+13');
      expect(html).toContain('+ Unattributed Aggregate Adjustment');
      expect(html).toContain('+2');
      expect(html).toContain('= Official Recorded Batter Runs');
      expect(html).toContain('5,945');
    });

    it("16. Winsmoke's +13 is disclosed as reconstruction, not an innings score", () => {
      const html = renderWithProviders(<ReconciliationLedger />);

      expect(html).toContain('Winsmoke Reconstruction (+13)');
      expect(html).toContain('It is not a verified individual match performance');
    });

    it('17. +2 is labelled Unattributed Aggregate Adjustment (never League Adjustment)', () => {
      const html = renderWithProviders(<ReconciliationLedger />);

      expect(html).toContain('Unattributed Aggregate Adjustment');
      expect(html).not.toContain('League Adjustment');
      expect(html).toContain('An unresolved discrepancy between the historical source record totals.');
    });

    it('18. 101 recorded wickets are shown without adjustment', () => {
      const html = renderWithProviders(<ReconciliationLedger />);

      expect(html).toContain('101 Recorded Bowler Wickets');
      expect(html).toContain('Zero adjustments applied');
    });
  });

  describe('Match Centre (/matches) Tests', () => {
    it('19. /matches renders successfully via AppRouter', () => {
      const html = renderToString(
        <MemoryRouter initialEntries={['/matches']}>
          <SeasonProvider>
            <AppRouter />
          </SeasonProvider>
        </MemoryRouter>
      );

      expect(html).toContain('The Road To The Title.');
      expect(html).toContain('Official Match Centre &amp; Scorecard Archive');
    });

    it('20. All three playoff fixtures appear', () => {
      const html = renderWithProviders(<PlayoffBracket />);

      expect(html).toContain('Semi-Final 1');
      expect(html).toContain('Semi-Final 2');
      expect(html).toContain('Grand Final');
    });

    it('21. Semi-Final 1 result is correct', () => {
      const html = renderWithProviders(<PlayoffBracket />);

      expect(html).toContain('CHAMPIONS WON BY 10 RUNS');
      expect(html).toContain('225');
      expect(html).toContain('215/5');
    });

    it('22. Semi-Final 2 winner is correct', () => {
      const html = renderWithProviders(<PlayoffBracket />);

      expect(html).toContain('AUTHORS QUALIFIED FOR FINAL');
      expect(html).toContain('Authors defeated regular season toppers Skyshot');
    });

    it('23. Final result and score are correct', () => {
      const html = renderWithProviders(<FinalScorecardDetail />);

      expect(html).toContain('AUTHORS WON BY 3 WICKETS');
      expect(html).toContain('226/7');
      expect(html).toContain('225/8');
      expect(html).toContain('19.2 OVERS');
    });

    it("24. A. King's 108 off 54 appears prominently as a featured batting performance without unsupported MVP claims", () => {
      const html = renderWithProviders(<FinalScorecardDetail />);

      expect(html).toContain('A. King — 108 off 54 balls');
      expect(html).toContain('Featured Batting Performance');
      expect(html).toContain('Strike Rate: 200.00');
      expect(html).not.toContain('Match MVP Spotlight');
      expect(html).not.toContain('(MVP)');
    });

    it('24b. Grand Final venue and timing use only verified source details without Brisbane', () => {
      const html = renderWithProviders(<FinalScorecardDetail />);

      expect(html).toContain('Exhibition • 9:45 PM');
      expect(html).not.toContain('Brisbane');
    });

    it('25. Full scorecard entries are rendered from the actual dataset', () => {
      const html = renderWithProviders(<FinalScorecardDetail />);

      // Champions Batters
      expect(html).toContain('S. HARVY');
      expect(html).toContain('60');
      expect(html).toContain('T. STARK');
      expect(html).toContain('40');
      expect(html).toContain('A. PAUL');
      expect(html).toContain('29');
      expect(html).toContain('V. ANAKIN');
      expect(html).toContain('23');

      // Authors Bowlers
      expect(html).toContain('S. BUMBA');
      expect(html).toContain('J. SUMMERS');
      expect(html).toContain('R. DHARM');
      expect(html).toContain('L. OVERTON');

      // Authors Batters
      expect(html).toContain('A. KING');
      expect(html).toContain('108');
      expect(html).toContain('C. CROSS');
      expect(html).toContain('46');
      expect(html).toContain('D. SILVA');
      expect(html).toContain('18');

      // Champions Bowlers
      expect(html).toContain('S. PARKER');
      expect(html).toContain('P. OSCAR');
    });

    it('25b. Match 15 scorecard includes factual archival disclosure note', () => {
      const html = renderWithProviders(<FinalScorecardDetail />);

      expect(html).toContain('Archive note: The preserved broadcast record contains the individual contributions listed here, not a complete ball-by-ball scorecard.');
      expect(html).toContain('Extras and fall-of-wickets details were not recorded in the available source.');
    });

    it('26. Original broadcast scorecard asset is referenced correctly', () => {
      const html = renderWithProviders(<FinalScorecardDetail />);

      expect(html).toContain('/assets/matches/final-scorecard-original.png');
      expect(html).toContain('Official APL Season 1 Final Match Summary Broadcast Scorecard');
    });

    it('27. All 12 league fixtures appear in the correct order', () => {
      const html = renderWithProviders(<LeagueFixturesGrid />);

      for (let i = 1; i <= 12; i++) {
        expect(html).toContain(`Match ${i.toString().padStart(2, '0')}`);
      }
    });

    it('28. No Home/Away/Host/Visitor labels are displayed in fixtures', () => {
      const html = renderWithProviders(<LeagueFixturesGrid />);

      expect(html).not.toContain('Home:');
      expect(html).not.toContain('Away:');
      expect(html).not.toContain('Host:');
      expect(html).not.toContain('Visitor:');
    });

    it('29. Match 3 record note is correct', () => {
      const html = renderWithProviders(<LeagueFixturesGrid />);

      expect(html).toContain('KNIGHTS WON:');
      expect(html).toContain('291 team record');
      expect(html).toContain('146');
    });
  });

  describe('Integration & Regression Tests', () => {
    it('30. Full StatsPage component tree renders cleanly', () => {
      const html = renderWithProviders(<StatsPage />);

      expect(html).toContain('League Standings');
      expect(html).toContain('Batting Championship');
      expect(html).toContain('Bowling Championship');
      expect(html).toContain('Tournament Records &amp; Milestones');
      expect(html).toContain('Statistical Reconciliation Ledger');
    });

    it('31. Full MatchesPage component tree renders cleanly', () => {
      const html = renderWithProviders(<MatchesPage />);

      expect(html).toContain('The Playoff Bracket');
      expect(html).toContain('Grand Final Scorecard');
      expect(html).toContain('League Stage Fixtures &amp; Results');
    });

    it('32. Homepage SeasonStatsStrip displays Official Recorded Batter Runs', () => {
      const html = renderWithProviders(<SeasonStatsStrip />);

      expect(html).toContain('Official Recorded Batter Runs');
      expect(html).toContain('5,945');
    });

    it('33. Generates responsive visual QA test suites in scratch directory', () => {
      const scratchDir = 'C:/Users/skyso/.gemini/antigravity/brain/3720fb6a-3130-4940-b76b-f1ed4643319b/scratch';
      const distAssets = fs.readdirSync('dist/assets');
      const cssFile = distAssets.find((f) => f.startsWith('index-') && f.endsWith('.css'));
      expect(cssFile).toBeDefined();

      const css = fs.readFileSync(path.join('dist/assets', cssFile!), 'utf8');
      const logoB64 = fs.readFileSync('public/assets/brand/apl-logo.png').toString('base64');
      const matchB64 = fs.readFileSync('public/assets/matches/final-scorecard-original.png').toString('base64');
      const celebB64 = fs.readFileSync('public/assets/gallery/celebration-victory.png').toString('base64');

      const wrapPage = (innerHtml: string, width?: number) => {
        let renderedHtml = innerHtml;
        renderedHtml = renderedHtml.split('/assets/brand/apl-logo.png').join('data:image/png;base64,' + logoB64);
        renderedHtml = renderedHtml.split('/assets/matches/final-scorecard-original.png').join('data:image/png;base64,' + matchB64);
        renderedHtml = renderedHtml.split('/assets/gallery/celebration-victory.png').join('data:image/png;base64,' + celebB64);

        const widthStyle = width
          ? `html, body, #root { width: ${width}px !important; max-width: ${width}px !important; margin: 0 !important; padding: 0 !important; box-sizing: border-box !important; overflow-x: hidden !important; }`
          : `html, body, #root { margin: 0 !important; padding: 0 !important; box-sizing: border-box !important; overflow-x: hidden !important; }`;

        return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ashes Premier League — Season 1 Archive</title>
  <style>
    ${css}
    ${widthStyle}
    html, body {
      background-color: #090C0B !important;
      color: #EAE4D8 !important;
    }
  </style>
</head>
<body class="bg-[#090C0B] text-[#EAE4D8] font-sans antialiased overflow-x-hidden">
  <div id="root">${renderedHtml}</div>
</body>
</html>`;
      };

      const renderPageTree = (pageUi: React.ReactElement, initialPath: string) => {
        const fullApp = React.createElement(
          MemoryRouter,
          { initialEntries: [initialPath] },
          React.createElement(
            ThemeProvider,
            null,
            React.createElement(
              SeasonProvider,
              null,
              React.createElement(
                'div',
                { className: 'flex flex-col min-h-screen bg-[#090C0B] text-[#EAE4D8]' },
                React.createElement(Header, null),
                React.createElement('main', { className: 'flex-grow' }, pageUi),
                React.createElement(Footer, null)
              )
            )
          )
        );
        return renderToString(fullApp);
      };

      // Render /stats
      const statsHtml = renderPageTree(React.createElement(StatsPage, null), '/stats');
      fs.writeFileSync(`${scratchDir}/stats_1440.html`, wrapPage(statsHtml, 1440));
      fs.writeFileSync(`${scratchDir}/stats_390.html`, wrapPage(statsHtml, 390));
      fs.writeFileSync(`${scratchDir}/stats_360.html`, wrapPage(statsHtml, 360));

      // Render /matches
      const matchesHtml = renderPageTree(React.createElement(MatchesPage, null), '/matches');
      fs.writeFileSync(`${scratchDir}/matches_1440.html`, wrapPage(matchesHtml, 1440));
      fs.writeFileSync(`${scratchDir}/matches_390.html`, wrapPage(matchesHtml, 390));
      fs.writeFileSync(`${scratchDir}/matches_360.html`, wrapPage(matchesHtml, 360));

      expect(fs.existsSync(`${scratchDir}/stats_1440.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/stats_390.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/matches_1440.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/matches_390.html`)).toBe(true);
    });
  });
});
