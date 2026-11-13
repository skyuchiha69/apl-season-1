import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from '../src/pages/Home/components/HeroSection';
import { LegacySection } from '../src/pages/Home/components/LegacySection';
import { HomePage } from '../src/pages/Home/HomePage';

describe('APL Milestone 2A — Hero & Legacy Section Component Tests', () => {
  it('should render the Hero section with the exact headline and APL logo', () => {
    const html = renderToString(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    // Headline check
    expect(html).toContain('Four Teams. Four Cousins.');
    expect(html).toContain('One Legacy.');

    // Subtitle / Tournament check
    expect(html).toContain('Ashes Premier League • Season 01');
    expect(html).toContain('Official Archive • Season 01 Completed');

    // APL Logo asset check with accessible alt text
    expect(html).toContain('/assets/brand/apl-logo.png');
    expect(html).toContain('alt="APL — Ashes Premier League: Season 1 The Legends Legacy Official Emblem"');

    // Championship callout check
    expect(html).toContain('Inaugural Champions:');
    expect(html).toContain('AUTHORS');
    expect(html).toContain('Chased 226 in 19.2 overs');

    // Navigation links check
    expect(html).toContain('href="#legacy"');
    expect(html).toContain('Explore The Archive');
    expect(html).toContain('href="/owners"');
    expect(html).toContain('Meet The Four Cousins');
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

  it('should render the HomePage root component containing both Hero and Legacy sections', () => {
    const html = renderToString(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(html).toContain('id="hero-heading"');
    expect(html).toContain('id="legacy"');
    expect(html).toContain('id="legacy-heading"');
  });
});
