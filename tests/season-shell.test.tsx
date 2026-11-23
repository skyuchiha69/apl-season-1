import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { SeasonProvider, useSeason } from '../src/app/providers/SeasonProvider';
import { ThemeProvider } from '../src/app/providers/ThemeProvider';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { SeasonSelector } from '../src/components/layout/SeasonSelector';
import { season1Data } from '../src/data';

describe('APL S2-B1 — Season Selector & Application Shell Tests', () => {
  describe('1. useSeason() Context Contract & Default State', () => {
    it('should select Season 1 by default and provide Season 1 data', () => {
      let capturedContext: ReturnType<typeof useSeason> | undefined;

      const Consumer = () => {
        capturedContext = useSeason();
        return <div>{capturedContext.activeSeasonId}</div>;
      };

      renderToString(
        <SeasonProvider>
          <Consumer />
        </SeasonProvider>
      );

      expect(capturedContext).toBeDefined();
      expect(capturedContext?.activeSeasonId).toBe('season-1');
      expect(capturedContext?.seasonData.seasonId).toBe('season-1');
      expect(capturedContext?.seasonData.year).toBe(2024);
      expect(capturedContext?.seasonData).toBe(season1Data);
    });

    it('should expose availableSeasonIds containing all registered seasons', () => {
      let capturedContext: ReturnType<typeof useSeason> | undefined;

      const Consumer = () => {
        capturedContext = useSeason();
        return null;
      };

      renderToString(
        <SeasonProvider>
          <Consumer />
        </SeasonProvider>
      );

      expect(capturedContext?.availableSeasonIds).toEqual(['season-1', 'season-2']);
    });

    it('should expose a callable setSeasonId updater function in context', () => {
      let capturedContext: ReturnType<typeof useSeason> | undefined;

      const Consumer = () => {
        capturedContext = useSeason();
        return null;
      };

      renderToString(
        <SeasonProvider>
          <Consumer />
        </SeasonProvider>
      );

      expect(typeof capturedContext?.setSeasonId).toBe('function');
      // Calling setSeasonId contract directly should execute safely without runtime error
      expect(() => capturedContext?.setSeasonId('season-2')).not.toThrow();
    });

    it('should throw an informative error when useSeason is consumed outside SeasonProvider', () => {
      const StandaloneConsumer = () => {
        useSeason();
        return null;
      };

      expect(() => renderToString(<StandaloneConsumer />)).toThrow(
        'useSeason must be used within a SeasonProvider'
      );
    });
  });

  describe('2. SeasonSelector Markup & Accessible Controls', () => {
    it('should render both registered season buttons with accessible group and aria-label in masthead variant', () => {
      const html = renderToString(
        <SeasonProvider>
          <SeasonSelector variant="masthead" />
        </SeasonProvider>
      );

      expect(html).toContain('role="group"');
      expect(html).toContain('aria-label="Tournament Season Selection"');
      expect(html).toContain('data-season="season-1"');
      expect(html).toContain('data-season="season-2"');
      expect(html).toContain('aria-label="Select Season 1"');
      expect(html).toContain('aria-label="Select Season 2"');

      // Responsive label spans (mobile short, desktop full)
      expect(html).toContain('>S1<');
      expect(html).toContain('>Season 1<');
      expect(html).toContain('>S2<');
      expect(html).toContain('>Season 2<');
    });

    it('should reflect active/inactive state via aria-pressed attributes in masthead variant', () => {
      // Default (Season 1 active)
      const s1Html = renderToString(
        <SeasonProvider initialSeasonId="season-1">
          <SeasonSelector variant="masthead" />
        </SeasonProvider>
      );
      expect(s1Html).toMatch(/data-season="season-1"[^>]*aria-pressed="true"/);
      expect(s1Html).toMatch(/data-season="season-2"[^>]*aria-pressed="false"/);

      // Initialized with Season 2 active
      const s2Html = renderToString(
        <SeasonProvider initialSeasonId="season-2">
          <SeasonSelector variant="masthead" />
        </SeasonProvider>
      );
      expect(s2Html).toMatch(/data-season="season-1"[^>]*aria-pressed="false"/);
      expect(s2Html).toMatch(/data-season="season-2"[^>]*aria-pressed="true"/);
    });

    it('should render drawer variant with accessible touch targets (min-h-[40px]) and proper full labels', () => {
      const html = renderToString(
        <SeasonProvider initialSeasonId="season-2">
          <SeasonSelector variant="drawer" />
        </SeasonProvider>
      );

      expect(html).toContain('role="group"');
      expect(html).toContain('min-h-[40px]');
      expect(html).toMatch(/data-season="season-2"[^>]*aria-pressed="true"/);
      expect(html).toMatch(/data-season="season-1"[^>]*aria-pressed="false"/);
      expect(html).toContain('data-testid="season-selector-season-1"');
      expect(html).toContain('data-testid="season-selector-season-2"');
    });
  });

  describe('3. Header Season Adaptability', () => {
    it('should render Season 1 champion information in Header when Season 1 is active', () => {
      const html = renderToString(
        <ThemeProvider>
          <SeasonProvider initialSeasonId="season-1">
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </SeasonProvider>
        </ThemeProvider>
      );

      expect(html).toContain('AUTHORS');
      expect(html).toContain('226/7 in 19.2 ov');
      expect(html).not.toContain('Won Final vs Knights');
    });

    it('should render Season 2 champion information in Header when Season 2 is active', () => {
      const html = renderToString(
        <ThemeProvider>
          <SeasonProvider initialSeasonId="season-2">
            <MemoryRouter>
              <Header />
            </MemoryRouter>
          </SeasonProvider>
        </ThemeProvider>
      );

      expect(html).toContain('SKYSHOT');
      expect(html).toContain('Won Final vs Knights');
      expect(html).not.toContain('226/7 in 19.2 ov');
    });
  });

  describe('4. Footer Season Adaptability & Structure', () => {
    it('should render Season 1 content with 4-column grid, The Four Cousins, and verified S1 honors', () => {
      const html = renderToString(
        <SeasonProvider initialSeasonId="season-1">
          <Footer />
        </SeasonProvider>
      );

      // 4-column grid for Season 1
      expect(html).toContain('md:grid-cols-4');
      expect(html).not.toContain('md:grid-cols-3');

      // League identity & subtitle
      expect(html).toContain('Season 1: The Legends Legacy');
      expect(html).toContain('historic 226 chase in the final');
      expect(html).toContain('5,945 Batter Runs');
      expect(html).toContain('101 Wickets');

      // Col 2: The Four Cousins must be present for Season 1
      expect(html).toContain('The Four Cousins');
      expect(html).toContain('Shubham (Sky)</span> — SKYSHOT');
      expect(html).toContain('Jay (Red)</span> — KNIGHTS');
      expect(html).toContain('Dharm (Green)</span> — AUTHORS (Champions)');
      expect(html).toContain('Umang (UB)</span> — CHAMPIONS');

      // Col 3: Season 1 Honors
      expect(html).toContain('Season 1 Honors');
      expect(html).toContain('A. King (527 runs)');
      expect(html).toContain('N. Sky (12 wickets)');
      expect(html).toContain('Jay (146 runs)');

      // Disclosure
      expect(html).toContain('official 15-page APL Season 1 PDF archive');
      expect(html).toContain('Winsmoke’s unprinted 6th match score');
    });

    it('should render Season 2 content with 3-column grid, verified S2 honors, and omit The Four Cousins entirely', () => {
      const html = renderToString(
        <SeasonProvider initialSeasonId="season-2">
          <Footer />
        </SeasonProvider>
      );

      // 3-column grid for Season 2 to eliminate empty dead space
      expect(html).toContain('md:grid-cols-3');
      expect(html).not.toContain('md:grid-cols-4');

      // League identity & subtitle
      expect(html).toContain('Season 2: The Legends Legacy');
      expect(html).toContain('Skyshot’s championship victory');
      expect(html).toContain('117 Bowler Wickets');
      expect(html).toContain('8 Batting Discrepancies');
      expect(html).not.toContain('5,945 Batter Runs');

      // Col 2: The Four Cousins must NOT be rendered for Season 2
      expect(html).not.toContain('The Four Cousins');
      expect(html).not.toContain('Shubham (Sky)');
      expect(html).not.toContain('Jay (Red)');
      expect(html).not.toContain('Dharm (Green)');
      expect(html).not.toContain('Umang (UB)');

      // Col 3: Season 2 Honors
      expect(html).toContain('Season 2 Honors');
      expect(html).toContain('SKYSHOT');
      expect(html).toContain('KNIGHTS');
      expect(html).toContain('Harvey (446 runs)');
      expect(html).toContain('Silver (12 wickets)');
      expect(html).toContain('Pointer (161 runs)');

      // Disclosure
      expect(html).toContain('official 21-page APL Season 2 PDF archive');
      expect(html).toContain('117 recorded wickets across 21 bowlers');
      expect(html).toContain('net difference of -3 runs');
      expect(html).not.toContain('+1');
    });
  });

  describe('5. Deterministic Server-Rendered Multi-Season Isolation', () => {
    // Note: The repository test environment operates in Node.js (SSR) without a simulated
    // browser DOM or React Testing Library. This test validates deterministic multi-season
    // context isolation and bidirectional shell adaptability without state pollution across renders.
    it('should render distinct season representations deterministically across sequential server renders', () => {
      // 1. Initial Season 1 render
      const s1Html = renderToString(
        <ThemeProvider>
          <SeasonProvider initialSeasonId="season-1">
            <MemoryRouter>
              <Header />
              <Footer />
            </MemoryRouter>
          </SeasonProvider>
        </ThemeProvider>
      );
      expect(s1Html).toContain('CHAMPIONS: <strong class="text-emerald-400 font-semibold">AUTHORS</strong>');
      expect(s1Html).toContain('Season 1: The Legends Legacy');
      expect(s1Html).toContain('Dharm (Green)</span> — AUTHORS (Champions)');

      // 2. Season 2 render
      const s2Html = renderToString(
        <ThemeProvider>
          <SeasonProvider initialSeasonId="season-2">
            <MemoryRouter>
              <Header />
              <Footer />
            </MemoryRouter>
          </SeasonProvider>
        </ThemeProvider>
      );
      expect(s2Html).toContain('CHAMPIONS: <strong class="text-cyan-400 font-semibold">SKYSHOT</strong>');
      expect(s2Html).toContain('Season 2: The Legends Legacy');
      expect(s2Html).toContain('Harvey (446 runs)');
      expect(s2Html).toContain('Silver (12 wickets)');
      expect(s2Html).toContain('Pointer (161 runs)');
      // In Season 2 Footer, cousin franchise claims must not exist
      expect(s2Html).not.toContain('SKYSHOT (Champions)');
      expect(s2Html).not.toContain('KNIGHTS (Runners-Up)');

      // 3. Bidirectional restoration of Season 1 render (verifies zero state contamination)
      const s1RestoredHtml = renderToString(
        <ThemeProvider>
          <SeasonProvider initialSeasonId="season-1">
            <MemoryRouter>
              <Header />
              <Footer />
            </MemoryRouter>
          </SeasonProvider>
        </ThemeProvider>
      );
      expect(s1RestoredHtml).toContain('CHAMPIONS: <strong class="text-emerald-400 font-semibold">AUTHORS</strong>');
      expect(s1RestoredHtml).toContain('Season 1: The Legends Legacy');
      expect(s1RestoredHtml).toContain('Dharm (Green)</span> — AUTHORS (Champions)');
    });
  });
});


