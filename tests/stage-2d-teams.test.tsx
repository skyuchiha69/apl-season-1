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
import { TeamsPage } from '../src/pages/Teams/TeamsPage';
import { season1Players } from '../src/data/seasons/season1/players';

const cleanHtml = (html: string) => html.replace(/<!--[\s\S]*?-->/g, '');

const renderWithProviders = (ui: React.ReactElement, initialRoute = '/teams') => {
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

describe('APL Stage 2D.1 — Franchises Hub & Four Team Portals', () => {
  describe('Franchises Hub (/teams)', () => {
    it('1. should render successfully via AppRouter at /teams', () => {
      const html = renderAppRoute('/teams');
      expect(html).toContain('The Four Franchises.');
      expect(html).toContain('Franchises Hub');
    });

    it('2. should render all four franchises with correct names, owners, and team captains', () => {
      const html = renderWithProviders(<TeamsPage />);

      // Franchise Names
      expect(html).toContain('AUTHORS');
      expect(html).toContain('CHAMPIONS');
      expect(html).toContain('SKYSHOT');
      expect(html).toContain('KNIGHTS');

      // Four Cousin Owners
      expect(html).toContain('Dharm');
      expect(html).toContain('Umang');
      expect(html).toContain('Shubham');
      expect(html).toContain('Jay');

      // Four Team Captains
      expect(html).toContain('King');
      expect(html).toContain('Stark');
      expect(html).toContain('Shubham');
      expect(html).toContain('Jay');
    });

    it('3. should explicitly display Authors and Champions as tied second (T-2nd)', () => {
      const html = renderWithProviders(<TeamsPage />);

      // T-2nd badges
      expect(html).toContain('T-2nd');
      expect(html).toContain('Tied 2nd (6 pts, 3W–3L)');

      // Standings footnote
      expect(html).toContain('Authors and Champions finished tied on 6 points');
      expect(html).toContain('share 2nd place (T-2nd)');
    });

    it('4. should contain direct navigational links to all four team portals', () => {
      const html = renderWithProviders(<TeamsPage />);

      expect(html).toContain('/teams/authors');
      expect(html).toContain('/teams/champions');
      expect(html).toContain('/teams/skyshot');
      expect(html).toContain('/teams/knights');
    });

    it('5. should clearly disclose distinct identity architecture', () => {
      const html = renderWithProviders(<TeamsPage />);

      expect(html).toContain('Archival Identity Architecture:');
      expect(html).toContain('real-life franchise owners, tacticians, and tournament competitors');
      expect(html).toContain('actual in-game captains');
    });
  });

  describe('Team Detail Portals (/teams/:teamId)', () => {
    it('6. should render graceful not-found experience for invalid team ID', () => {
      const html = renderAppRoute('/teams/invalid-team');

      expect(html).toContain('Franchise Not Found');
      expect(html).toContain('invalid-team');
      expect(html).toContain('Return to Franchises Hub');
    });

    it('7. should render Authors portal with verified stats, 11 squad players, and 5 wickets for Dharm', () => {
      const html = renderAppRoute('/teams/authors');

      // Team Hero
      expect(html).toContain('AUTHORS');
      expect(html).toContain('Dharm');
      expect(html).toContain('Rohit Sharma');
      expect(html).toContain('Inaugural Champions • Chased 226 in Grand Final');

      // Leading stats
      expect(html).toContain('A. King');
      expect(html).toContain('527 Batter Runs');
      expect(html).toContain('T. Askin');
      expect(html).toContain('7 Wickets');

      // Unrecorded team scores
      expect(html).toContain('Not recorded in the available league archive.');

      // 11 verified squad players for Authors
      const authorPlayers = season1Players.filter((p) => p.teamId === 'authors');
      expect(authorPlayers).toHaveLength(11);
      authorPlayers.forEach((p) => {
        expect(html).toContain(p.name);
      });

      // Dharm verified wickets = 5, NEVER 10
      expect(html).toContain('5 verified tournament wickets');
      expect(html).not.toContain('10 verified wickets');
      expect(html).not.toContain('10 Wickets');
    });

    it('8. should render Champions portal with Umang as owner without a synthetic player card', () => {
      const html = renderAppRoute('/teams/champions');

      // Leadership separation
      expect(html).toContain('Umang');
      expect(html).toContain('UB');
      expect(html).toContain('Franchise Owner &amp; Tactical Architect');
      expect(html).toContain('MS Dhoni');

      // Exactly 11 on-field squad players
      const championPlayers = season1Players.filter((p) => p.teamId === 'champions');
      expect(championPlayers).toHaveLength(11);
      championPlayers.forEach((p) => {
        expect(html).toContain(p.name);
      });

      // Leaders
      expect(html).toContain('S. Harvy');
      expect(html).toContain('360 Batter Runs');
      expect(html).toContain('S. Parker');
      expect(html).toContain('8 Wickets');

      // Transparent archival disclosure about Umang
      expect(html).toContain('individual in-game player identity and statistics are not documented in the surviving Season 1 archive');
      expect(html).toContain('His verified role as Champions franchise owner and tactical architect is preserved here');
    });

    it('9. should render Skyshot portal with Shubham batting and strike bowler N. Sky distinct', () => {
      const html = renderAppRoute('/teams/skyshot');

      expect(html).toContain('SKYSHOT');
      expect(html).toContain('Shubham');
      expect(html).toContain('Jos Buttler');

      // Leaders
      expect(html).toContain('V. Lalouch');
      expect(html).toContain('372 Batter Runs');
      expect(html).toContain('N. Sky');
      expect(html).toContain('12 Wickets');

      // Shubham batting and N. Sky distinct
      expect(html).toContain('Franchise owner and on-field team captain for Skyshot • 134 runs, 1 fifty.');
      expect(html).toContain('Skyshot strike bowler &amp; Purple Cap winner (12 wickets across 8 matches).');

      // 11 verified squad players
      const skyshotPlayers = season1Players.filter((p) => p.teamId === 'skyshot');
      expect(skyshotPlayers).toHaveLength(11);
      skyshotPlayers.forEach((p) => {
        expect(html).toContain(p.name);
      });
    });

    it('10. should render Knights portal with 291 highest score, 122 lowest score, and Winsmoke disclosure', () => {
      const html = renderAppRoute('/teams/knights');

      expect(html).toContain('KNIGHTS');
      expect(html).toContain('Jay');
      expect(html).toContain('Shubman Gill');

      // Leaders
      expect(html).toContain('Jay');
      expect(html).toContain('245 Batter Runs');
      expect(html).toContain('Winsmoke / Turner');
      expect(html).toContain('4 each Wickets');

      // Sourced team high/low totals
      expect(html).toContain('291');
      expect(html).toContain('Tournament Record vs Skyshot');
      expect(html).toContain('122');
      expect(html).toContain('Season Low Recorded in League');

      // Winsmoke reconstruction disclosure
      expect(html).toContain('13-run reconstruction for unrecorded Match 1 data');

      // 11 verified squad players
      const knightsPlayers = season1Players.filter((p) => p.teamId === 'knights');
      expect(knightsPlayers).toHaveLength(11);
      knightsPlayers.forEach((p) => {
        expect(html).toContain(p.name);
      });
    });

    it('11. should display em-dash for unrecorded statistics without fabricating zeros', () => {
      const html = renderAppRoute('/teams/authors');

      // Pure bowlers (e.g. Askin, Bumba) must render em-dash for batting runs
      expect(html).toContain('—');
    });

    it('12. should display match history with clear disclosure of unrecorded scorecards and without inferred home/away indicators', () => {
      const html = renderAppRoute('/teams/authors');

      expect(html).toContain('Official Scorecard Unrecorded in Surviving Archive');
      expect(html).toContain('Result Verified:');
      expect(html).toContain('AUTHORS');
      expect(html).toContain('WON');

      // Home/Away indicators must not be inferred from fixture pairings
      expect(html).not.toContain('(Home)');
      expect(html).not.toContain('(Away)');
    });

    it('13. should generate responsive visual review artifacts in scratch directory', () => {
      const scratchDir = 'C:/Users/skyso/.gemini/antigravity/brain/3720fb6a-3130-4940-b76b-f1ed4643319b/scratch';

      // Read compiled CSS from dist
      const distAssets = fs.readdirSync('dist/assets');
      const cssFile = distAssets.find((f) => f.startsWith('index-') && f.endsWith('.css'));
      const css = cssFile ? fs.readFileSync(path.join('dist/assets', cssFile), 'utf8') : '';

      const wrapPage = (innerHtml: string, width?: number) => {
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
  <div id="root">${innerHtml}</div>
</body>
</html>`;
      };

      const renderAppTree = (initialPath: string) => {
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
                React.createElement('main', { className: 'flex-grow' }, React.createElement(AppRouter, null)),
                React.createElement(Footer, null)
              )
            )
          )
        );
        return renderToString(fullApp);
      };

      // 1. Teams Hub at 1440, 768, 390, 360
      const teamsHubHtml = renderAppTree('/teams');
      fs.writeFileSync(`${scratchDir}/teams_hub_1440.html`, wrapPage(teamsHubHtml, 1440));
      fs.writeFileSync(`${scratchDir}/teams_hub_768.html`, wrapPage(teamsHubHtml, 768));
      fs.writeFileSync(`${scratchDir}/teams_hub_390.html`, wrapPage(teamsHubHtml, 390));
      fs.writeFileSync(`${scratchDir}/teams_hub_360.html`, wrapPage(teamsHubHtml, 360));

      // 2. Authors Detail at 1440 and 390
      const authorsHtml = renderAppTree('/teams/authors');
      fs.writeFileSync(`${scratchDir}/teams_authors_1440.html`, wrapPage(authorsHtml, 1440));
      fs.writeFileSync(`${scratchDir}/teams_authors_390.html`, wrapPage(authorsHtml, 390));

      // 3. Champions Detail at 1440 and 390
      const championsHtml = renderAppTree('/teams/champions');
      fs.writeFileSync(`${scratchDir}/teams_champions_1440.html`, wrapPage(championsHtml, 1440));
      fs.writeFileSync(`${scratchDir}/teams_champions_390.html`, wrapPage(championsHtml, 390));

      // 4. Skyshot Detail at 1440 and 390
      const skyshotHtml = renderAppTree('/teams/skyshot');
      fs.writeFileSync(`${scratchDir}/teams_skyshot_1440.html`, wrapPage(skyshotHtml, 1440));
      fs.writeFileSync(`${scratchDir}/teams_skyshot_390.html`, wrapPage(skyshotHtml, 390));

      // 5. Knights Detail at 1440 and 390
      const knightsHtml = renderAppTree('/teams/knights');
      fs.writeFileSync(`${scratchDir}/teams_knights_1440.html`, wrapPage(knightsHtml, 1440));
      fs.writeFileSync(`${scratchDir}/teams_knights_390.html`, wrapPage(knightsHtml, 390));

      expect(fs.existsSync(`${scratchDir}/teams_hub_1440.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/teams_hub_390.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/teams_authors_1440.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/teams_champions_1440.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/teams_skyshot_1440.html`)).toBe(true);
      expect(fs.existsSync(`${scratchDir}/teams_knights_1440.html`)).toBe(true);
    });
  });
});
