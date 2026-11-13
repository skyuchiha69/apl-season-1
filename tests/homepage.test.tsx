import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from '../src/pages/Home/components/HeroSection';
import { SeasonStatsStrip } from '../src/pages/Home/components/SeasonStatsStrip';
import { ChampionshipFeature } from '../src/pages/Home/components/ChampionshipFeature';
import { FranchisesLineup } from '../src/pages/Home/components/FranchisesLineup';
import { LegacySection } from '../src/pages/Home/components/LegacySection';
import { HomePage } from '../src/pages/Home/HomePage';

describe('APL Visual Identity & Editorial Homepage Tests', () => {
  it('should render the Editorial Hero section with asymmetric headline and APL logo', () => {
    const html = renderToString(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    // Editorial Headline check
    expect(html).toContain('Four Teams.');
    expect(html).toContain('One Legacy.');

    // Subtitle / Tournament check
    expect(html).toContain('Official Digital Archive • Season 01');

    // APL Logo asset check with accessible alt text
    expect(html).toContain('/assets/brand/apl-logo.png');
    expect(html).toContain('alt="APL — Ashes Premier League: Season 1 The Legends Legacy Official Emblem"');

    // Championship callout check
    expect(html).toContain('Inaugural Champions');
    expect(html).toContain('AUTHORS');
    expect(html).toContain('Chased down 226 in 19.2 overs');

    // Action links check
    expect(html).toContain('Read The Chronicle');
    expect(html).toContain('Meet The Four Cousins');
  });

  it('should render the Season Statistics Strip with official aggregates', () => {
    const html = renderToString(
      <MemoryRouter>
        <SeasonStatsStrip />
      </MemoryRouter>
    );

    expect(html).toContain('04');
    expect(html).toContain('Franchises');
    expect(html).toContain('15');
    expect(html).toContain('Fixtures');
    expect(html).toContain('5,945');
    expect(html).toContain('Official Recorded Batter Runs');
    expect(html).toContain('101');
    expect(html).toContain('Bowler Wickets');
  });

  it('should render the Championship Feature with the 226 chase details', () => {
    const html = renderToString(
      <MemoryRouter>
        <ChampionshipFeature />
      </MemoryRouter>
    );

    expect(html).toContain('The 226 Chase.');
    expect(html).toContain('CHAMPIONS');
    expect(html).toContain('225');
    expect(html).toContain('AUTHORS');
    expect(html).toContain('226');
    expect(html).toContain('AUTHORS WON BY 3 WICKETS');
    expect(html).toContain('A. King (Match MVP)');
    expect(html).toContain('108 (54)');
    expect(html).toContain('/assets/matches/final-scorecard-original.png');
  });

  it('should render the Four Franchises Lineup with cousin owners and captain identities', () => {
    const html = renderToString(
      <MemoryRouter>
        <FranchisesLineup />
      </MemoryRouter>
    );

    expect(html).toContain('The Four Franchises.');
    // Check all four teams
    expect(html).toContain('AUTHORS');
    expect(html).toContain('CHAMPIONS');
    expect(html).toContain('SKYSHOT');
    expect(html).toContain('KNIGHTS');

    // Check all four cousin owners
    expect(html).toContain('Dharm');
    expect(html).toContain('Umang (UB)');
    expect(html).toContain('Shubham (Sky)');
    expect(html).toContain('Jay');

    // Check captain identities
    expect(html).toContain('Rohit Sharma');
    expect(html).toContain('MS Dhoni');
    expect(html).toContain('Jos Buttler');
    expect(html).toContain('Shubman Gill');
  });

  it('should render the Legacy section with the origin narrative and victory asset', () => {
    const html = renderToString(
      <MemoryRouter>
        <LegacySection />
      </MemoryRouter>
    );

    // Headline check
    expect(html).toContain('It Was Never Just A Game.');
    expect(html).toContain('The Origin &amp; Heritage');

    // All four cousins mentioned
    expect(html).toContain('Shubham');
    expect(html).toContain('Jay');
    expect(html).toContain('Dharm');
    expect(html).toContain('Umang');

    // Authentic celebration asset check
    expect(html).toContain('/assets/gallery/celebration-victory.png');
    expect(html).toContain('alt="Authors batsmen raising bats in victory celebration after winning the APL Season 1 Championship Final"');

    // Verified pillars check
    expect(html).toContain('15 Matches Contested');
    expect(html).toContain('44 Total Players');
    expect(html).toContain('Authentic In-Game Capture');
  });

  it('should render the complete HomePage root component containing all editorial sections', () => {
    const html = renderToString(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(html).toContain('id="hero-heading"');
    expect(html).toContain('id="championship-feature"');
    expect(html).toContain('id="championship-heading"');
    expect(html).toContain('id="franchises"');
    expect(html).toContain('id="franchises-heading"');
    expect(html).toContain('id="four-cousins"');
    expect(html).toContain('id="cousins-heading"');
    expect(html).toContain('id="rivalry-room"');
    expect(html).toContain('id="rivalry-heading"');
    expect(html).toContain('id="legacy"');
    expect(html).toContain('id="legacy-heading"');
  });
});
