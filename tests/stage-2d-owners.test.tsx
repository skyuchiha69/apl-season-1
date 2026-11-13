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
import { AppRouter } from '../src/app/Router';
import { OwnersPage } from '../src/pages/Owners/OwnersPage';
import { season1Data } from '../src/data/seasons/season1';
import { BANTER_DISCLOSURE } from '../src/content/banter';
import { getHeadToHeadRecord } from '../src/data/selectors';

const cleanHtml = (html: string) =>
  html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');

const renderWithProviders = (ui: React.ReactElement, initialRoute = '/owners') => {
  const raw = renderToString(
    <MemoryRouter initialEntries={[initialRoute]}>
      <ThemeProvider>
        <SeasonProvider>
          {ui}
        </SeasonProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
  return cleanHtml(raw);
};

const renderAppRoute = (route: string) => {
  const raw = renderToString(
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider>
        <SeasonProvider>
          <AppRouter />
        </SeasonProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
  return cleanHtml(raw);
};

describe('APL Stage 2D.2 — Owners Chronicle (/owners)', () => {
  it('1. should mount successfully via AppRouter at /owners', () => {
    const html = renderAppRoute('/owners');
    expect(html).toContain('THE FOUR ARCHITECTS');
    expect(html).toContain('Documentary Archive • APL Season 1');
  });

  it('2. should present all four cousin owners, their franchises, and honorary captain avatars', () => {
    const html = renderWithProviders(<OwnersPage />);

    // Four Cousin Owners
    expect(html).toContain('Dharm');
    expect(html).toContain('Green');
    expect(html).toContain('Umang');
    expect(html).toContain('UB');
    expect(html).toContain('Shubham');
    expect(html).toContain('Sky');
    expect(html).toContain('Jay');
    expect(html).toContain('Red');

    // Four Franchises
    expect(html).toContain('AUTHORS');
    expect(html).toContain('CHAMPIONS');
    expect(html).toContain('SKYSHOT');
    expect(html).toContain('KNIGHTS');

    // Honorary Captain Avatars
    expect(html).toContain('Rohit Sharma');
    expect(html).toContain('MS Dhoni');
    expect(html).toContain('Jos Buttler');
    expect(html).toContain('Shubman Gill');

    // Explicit Avatar Distinction
    expect(html).toContain('Archival Identity Protocol • Honorary Captain Avatars');
    expect(html).toContain('honorary in-game captain avatars');
    expect(html).toContain('Professional international players did not participate');
  });

  it('3. should verify Dharm chapter: 3-3 league, SF2 upset, 226 chase, and 5 tournament wickets (NEVER 10)', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('Championship Architect');
    expect(html).toContain('3 Wins – 3 Losses');
    expect(html).toContain('hunting down 226/7 in 19.2 overs');
    expect(html).toContain('A. King’s heroic 108 off 54');
    expect(html).toContain('5 Tournament Wickets');
    expect(html).toContain('1/36 in 4.0 ov (Grand Final)');
    expect(html).toContain('R. Dharm');

    // Historical Accuracy: Dharm has 5 wickets, NEVER 10
    expect(html).not.toContain('10 verified wickets');
  });

  it('4. should verify Umang chapter with verbatim neutral archival disclosure', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('High-Powered Finalist');
    expect(html).toContain('posted 225 runs in both of their playoff matches');
    expect(html).toContain('10-run defense of their 225 total against regular-season winners Skyshot');
    expect(html).toContain('Runners-Up / Grand Finalists');

    // Exact required disclosure
    const expectedUmangDisclosure =
      "Umang's individual in-game player identity and statistics are not documented in the surviving Season 1 archive. His verified role as Champions franchise owner and tactical architect is preserved here.";
    expect(html).toContain(expectedUmangDisclosure);
  });

  it('5. should verify Shubham chapter, dual gameplay characters, and no third-place claim for Skyshot', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('Regular-Season Pacesetter');
    expect(html).toContain('1st Place (League Stage Topper)');
    expect(html).toContain('4 Wins – 2 Losses (8 Pts)');
    expect(html).toContain('Purple Cap with 12 wickets');

    // Dual in-game characters
    expect(html).toContain('Dual In-Game Gameplay Characters');
    expect(html).toContain('134 Runs (1 Fifty)');
    expect(html).toContain('12 Wickets • Purple Cap Winner');
    expect(html).toContain('shubham_bat');
    expect(html).toContain('sky');

    // Skyshot is NEVER designated as 3rd Place
    expect(html).toContain('Regular Season Topper • Playoff Semi-Finalist');
    expect(html).not.toContain('3rd Place • APL');
    expect(html).not.toContain('3rd Place (League');
    expect(html).not.toContain('Third Place');
  });

  it('6. should verify Jay chapter: 146 highest score, 291 team total, 245 season runs, and league stage finish', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('Record-Breaking Powerhouse');
    expect(html).toContain('146 runs—the highest individual score in APL history');
    expect(html).toContain('all-time tournament record team total of 291');
    expect(html).toContain('245 total runs in 6 league matches');
    expect(html).toContain('4th Place (League Stage)');
    expect(html).toContain('League Stage (4th Place)');
  });

  it('7. should dynamically derive all six head-to-head records matching verified outcomes', () => {
    const dhUm = getHeadToHeadRecord(season1Data, 'authors', 'champions');
    expect(dhUm.total).toBe(3);
    expect(dhUm.teamAWins).toBe(2); // Authors 2
    expect(dhUm.teamBWins).toBe(1); // Champions 1

    const dhSky = getHeadToHeadRecord(season1Data, 'authors', 'skyshot');
    expect(dhSky.total).toBe(3);
    expect(dhSky.teamAWins).toBe(1); // Authors 1
    expect(dhSky.teamBWins).toBe(2); // Skyshot 2

    const dhJay = getHeadToHeadRecord(season1Data, 'authors', 'knights');
    expect(dhJay.total).toBe(2);
    expect(dhJay.teamAWins).toBe(2); // Authors 2
    expect(dhJay.teamBWins).toBe(0); // Knights 0

    const umSky = getHeadToHeadRecord(season1Data, 'champions', 'skyshot');
    expect(umSky.total).toBe(3);
    expect(umSky.teamAWins).toBe(2); // Champions 2
    expect(umSky.teamBWins).toBe(1); // Skyshot 1

    const umJay = getHeadToHeadRecord(season1Data, 'champions', 'knights');
    expect(umJay.total).toBe(2);
    expect(umJay.teamAWins).toBe(1); // Champions 1
    expect(umJay.teamBWins).toBe(1); // Knights 1

    const skyJay = getHeadToHeadRecord(season1Data, 'skyshot', 'knights');
    expect(skyJay.total).toBe(2);
    expect(skyJay.teamAWins).toBe(1); // Skyshot 1
    expect(skyJay.teamBWins).toBe(1); // Knights 1

    // Sum of all 6 pairings must equal 15
    const totalMatchCount =
      dhUm.total + dhSky.total + dhJay.total + umSky.total + umJay.total + skyJay.total;
    expect(totalMatchCount).toBe(15);
  });

  it('8. should account for all 15 decided fixtures exactly once in the rendered matrix', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('THE SIX-PAIR RIVALRY MATRIX');
    expect(html).toContain('15 / 15 Tournament Fixtures Accounted For');
    expect(html).toContain('Reconciled: 15 Fixtures');

    // Match numbers check
    expect(html).toContain('Match #1');
    expect(html).toContain('Match #2');
    expect(html).toContain('Match #3');
    expect(html).toContain('Match #4');
    expect(html).toContain('Match #5');
    expect(html).toContain('Match #6');
    expect(html).toContain('Match #7');
    expect(html).toContain('Match #8');
    expect(html).toContain('Match #9');
    expect(html).toContain('Match #10');
    expect(html).toContain('Match #11');
    expect(html).toContain('Match #12');
    expect(html).toContain('Match #13');
    expect(html).toContain('Match #14');
    expect(html).toContain('Match #15');
  });

  it('9. should disclose missing scorecards and preserve Match 4, 10, 13, 14, 15 records', () => {
    const html = renderWithProviders(<OwnersPage />);

    // Missing scorecard disclosure for league matches
    expect(html).toContain('Official result recorded; detailed scorecard not surviving in archive');

    // Match 14 qualification disclosure
    expect(html).toContain('Scorecard and run margin unrecorded; Authors victory officially verified');

    // Match 13 SF1 defense
    expect(html).toContain('CHAMPIONS 225 vs SKYSHOT 215/5 (20.0 ov)');
    expect(html).toContain('Champions won by 10 runs • Defended 225 to qualify for Grand Final');

    // Match 15 Final decider
    expect(html).toContain('CHAMPIONS 225/8');
    expect(html).toContain('AUTHORS 226/7');
    expect(html).toContain('Authors won by 3 wickets (Chased 226 in 19.2 ov)');
  });

  it('10. should render rivalry banter with the verbatim required disclaimer', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('RIVALRY ROOM BANTER');
    expect(html).toContain(BANTER_DISCLOSURE);
    expect(html).toContain('APL Editorial Banter • Fictional Rivalry Dialogue • Grounded in Verified Season 1 Outcomes.');
  });

  it('11. should render legacy epilogue with cross-links to /teams, /matches, and /stats', () => {
    const html = renderWithProviders(<OwnersPage />);

    expect(html).toContain('MORE THAN A LEAGUE: A LIVING ROOM DYNASTY');
    expect(html).toContain('5,945 official batter runs');
    expect(html).toContain('101 bowler wickets');
    expect(html).toContain('href="/teams"');
    expect(html).toContain('href="/matches"');
    expect(html).toContain('href="/stats"');
  });

  it('12. should generate responsive HTML files for visual QA capture across 4 breakpoints', () => {
    const viewports = [
      { name: '1440', width: 1440 },
      { name: '768', width: 768 },
      { name: '390', width: 390 },
      { name: '360', width: 360 },
    ];

    const rawApp = renderToString(
      <MemoryRouter initialEntries={['/owners']}>
        <ThemeProvider>
          <SeasonProvider>
            <div className="min-h-screen bg-[#0B1512] text-[#EAE4D8]">
              <Header />
              <AppRouter />
              <Footer />
            </div>
          </SeasonProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    const artifactDir = path.resolve(
      'C:/Users/skyso/.gemini/antigravity/brain/3720fb6a-3130-4940-b76b-f1ed4643319b'
    );

    const cssPath = path.resolve('src/styles/index.css');
    const rawCss = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

    for (const vp of viewports) {
      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>APL Season 1 — Owners Chronicle (${vp.name}px)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    ${rawCss}
    body { margin: 0; background-color: #0B1512; color: #EAE4D8; }
  </style>
</head>
<body style="width: ${vp.width}px; margin: 0 auto; min-height: 100vh;">
  ${rawApp}
</body>
</html>`;

      const targetPath = path.join(artifactDir, `owners-${vp.name}.html`);
      fs.writeFileSync(targetPath, fullHtml, 'utf8');
      expect(fs.existsSync(targetPath)).toBe(true);
    }
  });
});
