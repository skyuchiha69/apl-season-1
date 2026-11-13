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
import { HallOfFamePage } from '../src/pages/HallOfFame/HallOfFamePage';

const cleanHtml = (html: string) =>
  html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');

const renderWithProviders = (ui: React.ReactElement, initialRoute = '/hall-of-fame') => {
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

describe('APL Stage 2D.3 — Hall of Fame (/hall-of-fame)', () => {
  it('1. should mount successfully via AppRouter at /hall-of-fame', () => {
    const html = renderAppRoute('/hall-of-fame');
    expect(html).toContain('THE IMMORTALS');
    expect(html).toContain('OF SEASON 1');
    expect(html).toContain('APL Season 1 • Official Archive Sanctuary');
  });

  it('2. should verify Hero masthead, milestone counters, and working anchor navigation', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    // Masthead & counters
    expect(html).toContain('THE IMMORTALS');
    expect(html).toContain('Championship Crown');
    expect(html).toContain('Golden Cap Winners');
    expect(html).toContain('Historic Centuries');
    expect(html).toContain('Tournament Hat-Trick');
    expect(html).toContain('Record Team Total');
    expect(html).toContain('291');

    // Anchor jump links
    expect(html).toContain('href="#championship-laurels"');
    expect(html).toContain('href="#golden-caps"');
    expect(html).toContain('href="#century-club"');
    expect(html).toContain('href="#historic-bowling"');
    expect(html).toContain('href="#extreme-records"');
  });

  it('3. should verify Championship Laurels with verified franchise honors and avatar distinction', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    // Authors: Inaugural Champions
    expect(html).toContain('INAUGURAL CHAMPIONS');
    expect(html).toContain('AUTHORS');
    expect(html).toContain('Dharm');
    expect(html).toContain('Green');
    expect(html).toContain('Won by 3 Wickets');
    expect(html).toContain('226/7 (19.2 ov)');

    // Champions: Runners-Up / Finalists
    expect(html).toContain('RUNNERS-UP / FINALISTS');
    expect(html).toContain('CHAMPIONS');
    expect(html).toContain('Umang');
    expect(html).toContain('UB');
    expect(html).toContain('225/8 (20.0 ov)');
    expect(html).toContain('Defended 225 (Won by 10 runs)');

    // Skyshot: League Stage Toppers (NEVER 3rd place)
    expect(html).toContain('LEAGUE STAGE TOPPERS');
    expect(html).toContain('SKYSHOT');
    expect(html).toContain('Shubham');
    expect(html).toContain('Sky');
    expect(html).toContain('1st Place (8 Pts)');
    expect(html).toContain('4 Wins – 2 Losses');
    expect(html).toContain('Semi-Finalist');

    // Knights: Record Setters
    expect(html).toContain('ALL-TIME RECORD SETTERS');
    expect(html).toContain('KNIGHTS');
    expect(html).toContain('Jay');
    expect(html).toContain('Red');
    expect(html).toContain('291 (vs Skyshot, Match 3)');
    expect(html).toContain('146 (Jay, Match 3)');
    expect(html).toContain('4th Place (2–4, 4 Pts)');

    // Explicit Avatar Protocol
    expect(html).toContain('Archival Identity Protocol • In-Game Honorary Captain Avatars');
    expect(html).toContain('Professional international cricketers');
    expect(html).toContain('did not participate');
  });

  it('4. should verify Golden Caps monuments for Orange Cap (A. King, 527) and Purple Cap (N. Sky, 12)', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    // Orange Cap
    expect(html).toContain('Orange Cap Winner • Most Runs');
    expect(html).toContain('A. King');
    expect(html).toContain('527');
    expect(html).toContain('8 Matches');
    expect(html).toContain('2 Hundreds • 3 Fifties');
    expect(html).toContain('HS: 108');
    expect(html).toContain('Grand Final Decider: 108 (54 balls)');

    // Purple Cap
    expect(html).toContain('Purple Cap Winner • Most Wickets');
    expect(html).toContain('N. Sky');
    expect(html).toContain('12');
    expect(html).toContain('Two 4-Wicket Hauls');
    expect(html).toContain('Best Match Bowling: 4/x');
    expect(html).toContain('12 Tournament Wickets');

    // Archival Cap Protocol
    expect(html).toContain('Archival Integrity Protocol • Official Statistical Cap Honors');
  });

  it('5. should display all six recorded centuries including both distinct A. King entries', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    expect(html).toContain('THE CENTURY CLUB');

    // Century 1: Jay 146
    expect(html).toContain('146');
    expect(html).toContain('Jay');
    expect(html).toContain('KNIGHTS');
    expect(html).toContain('All-Time Tournament High Score');
    expect(html).toContain('Match #3 • League Stage');
    expect(html).toContain('vs Skyshot');

    // Century 2: T. Stark 112 (verified score, franchise & league stage; unsupported match reference omitted)
    expect(html).toContain('112');
    expect(html).toContain('T. Stark');
    expect(html).toContain('CHAMPIONS');

    // Century 3: Red 110 (verified score, franchise & league stage; unsupported match reference omitted)
    expect(html).toContain('110');
    expect(html).toContain('Red');
    expect(html).toContain('AUTHORS');
    expect(html).toContain('Wicketkeeper Century');

    // Century 4: A. King 108 (verified Grand Final scorecard: 108 runs from 54 balls)
    expect(html).toContain('108');
    expect(html).toContain('A. King');
    expect(html).toContain('AUTHORS');
    expect(html).toContain('Grand Final Match-Winning Century');
    expect(html).toContain('Verified: 108 runs from 54 balls faced');
    expect(html).toContain('Match #15 • Grand Final');
    expect(html).toContain('vs Champions');

    // Century 5: Rogers 105 (verified score, franchise & league stage; unsupported match reference omitted)
    expect(html).toContain('105');
    expect(html).toContain('Rogers');
    expect(html).toContain('CHAMPIONS');

    // Century 6: A. King 105 (separate verified league century; dual-century record holder)
    expect(html).toContain('Tournament Dual-Century Record');

    // Archival Protocol for Balls Faced
    expect(html).toContain('Balls Faced Archival Protocol');
  });

  it('6. should verify Historic Bowling: Parker hat-trick, Askin & Parker 5/x, and complete T-4 tie', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    expect(html).toContain('HISTORIC BOWLING FEATS');

    // Parker's Hat-Trick
    expect(html).toContain('The Tournament Hat-Trick');
    expect(html).toContain('S. Parker');
    expect(html).toContain('Hat-Trick (1)');
    expect(html).toContain('specific delivery mechanics and dismissal victims unrecorded');

    // Askin 5-fer
    expect(html).toContain('T. Askin');
    expect(html).toContain('5/x (Match 1)');

    // Parker 5-fer
    expect(html).toContain('5/x (Match 4)');

    // N. Sky Multiple 4-fers
    expect(html).toContain('Multiple 4-Wicket Hauls');
    expect(html).toContain('4/x & 4/x');

    // Purple Cap Hierarchy Table & All Four T-4 Bowlers (6 wickets each)
    expect(html).toContain('Purple Cap Hierarchy & The Four-Way T-4 Tie');
    expect(html).toContain('J. Summers');
    expect(html).toContain('P. Oscar');
    expect(html).toContain('Night');
    expect(html).toContain('O. Lock');
    expect(html).toContain('All 4 T-4 Bowlers Fully Reconciled');
  });

  it('7. should verify Extreme Records: Knights 291, The Championship Chase 226/7, and Knights 122', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    expect(html).toContain('EXTREME BENCHMARKS OF SEASON 1');

    // 291 Record Total
    expect(html).toContain('HIGHEST TEAM TOTAL IN APL HISTORY');
    expect(html).toContain('291');
    expect(html).toContain('KNIGHTS');
    expect(html).toContain('vs Skyshot');

    // The Championship Chase
    expect(html).toContain('THE CHAMPIONSHIP CHASE');
    expect(html).toContain('226/7');
    expect(html).toContain('In 19.2 Overs (Target: 226)');
    expect(html).toContain('The Championship Chase Historical Designation');

    // 122 Lowest Total
    expect(html).toContain('LOWEST TEAM TOTAL IN APL HISTORY');
    expect(html).toContain('122');
    expect(html).toContain('KNIGHTS');
    expect(html).toContain('vs Champions');
    // Ensure Knights 122 is not linked to false fixture Match 4
    expect(html).not.toContain('Match #4 • League Stage');
    expect(html).not.toContain('Match 4: Champions restricted Knights');
  });

  it('8. should uphold all mandatory negative assertions against unsupported claims', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    // No MVP or Player of the Tournament claims
    expect(html).not.toContain('Tournament MVP');
    expect(html).not.toContain('Player of the Tournament');
    expect(html).not.toContain('Man of the Series');

    // No official Player of the Match trophy claim for King
    expect(html).not.toContain('Player of the Match Trophy');
    expect(html).not.toContain('Official Player of the Match');
    expect(html).not.toContain('Man of the Match');

    // No 3rd place designation for Skyshot
    expect(html).not.toContain('3rd Place • APL');
    expect(html).not.toContain('3rd Place (League');
    expect(html).not.toContain('third-place');
    expect(html).not.toContain('Third Place');

    // No Net Run Rate claims
    expect(html).not.toContain('+NRR');
    expect(html).not.toContain('-NRR');
    expect(html).not.toContain('Net Run Rate');
    expect(html).not.toContain('net run rate');

    // No tournament-wide superlative claim for the final chase
    expect(html).not.toContain('Greatest Successful Run Chase in tournament history');
    expect(html).not.toContain('Greatest Successful Run Chase in APL history');

    // Historical accuracy: No unsupported century match-stage associations
    expect(html).not.toContain('Match #1 • League Stage');
    expect(html).not.toContain('Match #5 • League Stage');
    expect(html).not.toContain('Match #4 • League Stage');
    expect(html).not.toContain('Match #7 • League Stage');

    // Historical accuracy: No unsupported century descriptors
    expect(html).not.toContain('Opening Match Century');
    expect(html).not.toContain('opening-round century');
    expect(html).not.toContain('Powerplay Century');
    expect(html).not.toContain('powerplay');
    expect(html).not.toContain('Powerplay');

    // Historical accuracy: No unsupported official-award exclusivity claims
    expect(html).not.toContain('sole official seasonal individual statistical awards');
    expect(html).not.toContain('two verified official individual seasonal awards');

    // Historical accuracy: Knights 122 has no false fixture reference
    expect(html).not.toContain('Match 4: Champions restricted Knights to 122 all out');
    expect(html).not.toContain('dismantled by Champions’ bowling attack in Match 4');
  });

  it('9. should render commemorative epilogue with working cross-archive links', () => {
    const html = renderWithProviders(<HallOfFamePage />);

    expect(html).toContain('A Living Room Dynasty Preserved Forever');
    expect(html).toContain('href="/teams"');
    expect(html).toContain('href="/owners"');
    expect(html).toContain('href="/matches"');
    expect(html).toContain('href="/stats"');
  });

  it('10. should generate responsive HTML files for visual QA capture across 4 breakpoints', () => {
    const viewports = [
      { name: '1440', width: 1440 },
      { name: '768', width: 768 },
      { name: '390', width: 390 },
      { name: '360', width: 360 },
    ];

    const rawApp = renderToString(
      <MemoryRouter initialEntries={['/hall-of-fame']}>
        <ThemeProvider>
          <SeasonProvider>
            <div className="min-h-screen bg-[#090C0B] text-[#EAE4D8]">
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
  <title>APL Season 1 — Hall of Fame (${vp.name}px)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    ${rawCss}
    body { margin: 0; background-color: #090C0B; color: #EAE4D8; }
  </style>
</head>
<body style="width: ${vp.width}px; margin: 0 auto; min-height: 100vh;">
  ${rawApp}
</body>
</html>`;

      const targetPath = path.join(artifactDir, `hall-of-fame-${vp.name}.html`);
      fs.writeFileSync(targetPath, fullHtml, 'utf8');
      expect(fs.existsSync(targetPath)).toBe(true);
    }
  });
});

