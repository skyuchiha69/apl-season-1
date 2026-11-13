import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { CousinsSection } from '../src/pages/Home/components/CousinsSection';
import { RivalryRoomSection } from '../src/pages/Home/components/RivalryRoomSection';
import {
  rivalryCategories,
  BANTER_DISCLOSURE,
  BanterCategoryId,
} from '../src/content/banter';

describe('APL Stage 2B — Four Cousins & Rivalry Room Unit & Integration Tests', () => {
  describe('Banter Content Data Integrity (src/content/banter.ts)', () => {
    it('should define exactly 4 rivalry categories with verified factual grounding', () => {
      expect(rivalryCategories).toHaveLength(4);

      const categoryIds: BanterCategoryId[] = [
        'all-out-war',
        'playoff-salt',
        '146-paradox',
        'championship-gloating',
      ];

      categoryIds.forEach((id) => {
        const cat = rivalryCategories.find((c) => c.id === id);
        expect(cat).toBeDefined();
        expect(cat?.title).toBeTruthy();
        expect(cat?.subtitle).toBeTruthy();
        expect(cat?.badge).toBeTruthy();
        expect(cat?.matchContext).toBeTruthy();
        expect(cat?.messages.length).toBeGreaterThanOrEqual(4);
      });
    });

    it('should include the mandatory editorial disclosure verbatim', () => {
      expect(BANTER_DISCLOSURE).toBe(
        'APL Editorial Banter • Fictional Rivalry Dialogue • Grounded in Verified Season 1 Outcomes.'
      );
    });

    it('should ground dialogue in verified tournament outcomes and accurate match numbering', () => {
      // Category 1: All-out War mentions 12-match league stage & Skyshot topping table
      const aow = rivalryCategories.find((c) => c.id === 'all-out-war')!;
      expect(aow.matchContext).toContain('Skyshot topped the 12-match regular season');
      expect(aow.messages.some((m) => m.message.includes('twelve rounds') || m.message.includes('Match 6'))).toBe(true);

      // Category 2: Playoff Salt mentions SF1 (10-run margin) and SF2
      const salt = rivalryCategories.find((c) => c.id === 'playoff-salt')!;
      expect(salt.matchContext).toContain('Match 13 (SF1): Champions 225 vs Skyshot 215');
      expect(salt.matchContext).toContain('Match 14 (SF2)');
      expect(salt.messages.some((m) => m.message.includes('Ten runs') || m.message.includes('Lelouch'))).toBe(true);

      // Category 3: The 146 Paradox accurately attributes Jay 146 and Knights 291 to Match 3 vs Skyshot
      const p146 = rivalryCategories.find((c) => c.id === '146-paradox')!;
      expect(p146.matchContext).toContain('Jay scored 146 in Match 3');
      expect(p146.matchContext).toContain('Knights posted 291');
      expect(p146.messages.some((m) => m.speakerName === 'Jay' && m.message.includes('146'))).toBe(true);

      // Category 4: Championship Gloating refers to Authors 226 chase against Champions 225
      const cg = rivalryCategories.find((c) => c.id === 'championship-gloating')!;
      expect(cg.matchContext).toContain('Match 15 (Grand Final): Champions 225/8 in 20.0 ov; Authors 226/7 in 19.2 ov');
      expect(cg.messages.some((m) => m.message.includes('Chasing 226') && m.message.includes('King'))).toBe(true);
    });
  });

  describe('CousinsSection Component', () => {
    it('should render section with semantic landmarks and correct IDs', () => {
      const html = renderToString(
        <MemoryRouter>
          <CousinsSection />
        </MemoryRouter>
      );

      expect(html).toContain('id="four-cousins"');
      expect(html).toContain('id="cousins-heading"');
      expect(html).toContain('The Four Cousins.');
    });

    it('should present all four cousins as both owners and players', () => {
      const html = renderToString(
        <MemoryRouter>
          <CousinsSection />
        </MemoryRouter>
      );

      // Names and nicknames
      expect(html).toContain('Dharm');
      expect(html).toContain('Green');
      expect(html).toContain('Umang');
      expect(html).toContain('UB');
      expect(html).toContain('Shubham');
      expect(html).toContain('Sky');
      expect(html).toContain('Jay');
      expect(html).toContain('Red');

      // Dual roles highlighted
      expect(html).toContain('Franchise Owner &amp; Championship Bowler');
      expect(html).toContain('Franchise Owner &amp; Battle-Hardened Player');
      expect(html).toContain('Franchise Owner &amp; Dual-Threat All-Rounder');
      expect(html).toContain('Franchise Owner &amp; Premier Record Batsman');
    });

    it('should explicitly separate honorary international captain avatars with a disclaimer banner', () => {
      const html = renderToString(
        <MemoryRouter>
          <CousinsSection />
        </MemoryRouter>
      );

      // Captain avatars
      expect(html).toContain('Rohit Sharma');
      expect(html).toContain('MS Dhoni');
      expect(html).toContain('Jos Buttler');
      expect(html).toContain('Shubman Gill');

      // Architecture disclaimer
      expect(html).toContain('Dual Identity &amp; Honorary Avatar Architecture:');
      expect(html).toContain('honorary digital captain avatars');
      expect(html).toContain('did not literally participate');
    });

    it('should display verified tournament player stats for each cousin', () => {
      const html = renderToString(
        <MemoryRouter>
          <CousinsSection />
        </MemoryRouter>
      );

      // Dharm
      expect(html).toContain('5 Wickets');
      expect(html).toContain('226/7 in 19.2 ov');

      // Umang
      expect(html).toContain('Defended 225 (Won by 10)');
      expect(html).toContain('225/8 in 20.0 ov');

      // Shubham
      expect(html).toContain('12 Wickets (No. 1)');
      expect(html).toContain('134 Runs');

      // Jay
      expect(html).toContain('146 Runs (Match 3)');
      expect(html).toContain('291 Total vs Skyshot');
    });
  });

  describe('RivalryRoomSection Component', () => {
    it('should render section with semantic tablist and tabs for all 4 categories', () => {
      const html = renderToString(
        <MemoryRouter>
          <RivalryRoomSection />
        </MemoryRouter>
      );

      expect(html).toContain('id="rivalry-room"');
      expect(html).toContain('id="rivalry-heading"');
      expect(html).toContain('The Rivalry Room.');
      expect(html).toContain('role="tablist"');

      // Tabs
      expect(html).toContain('id="tab-all-out-war"');
      expect(html).toContain('id="tab-playoff-salt"');
      expect(html).toContain('id="tab-146-paradox"');
      expect(html).toContain('id="tab-championship-gloating"');

      expect(html).toContain('ALL-OUT WAR');
      expect(html).toContain('THE PLAYOFF SALT');
      expect(html).toContain('THE 146 PARADOX');
      expect(html).toContain('CHAMPIONSHIP GLOATING');
    });

    it('should render dialogue stream with speakers, team badges, and verified context anchors', () => {
      const html = renderToString(
        <MemoryRouter>
          <RivalryRoomSection />
        </MemoryRouter>
      );

      // Active category defaults to 'all-out-war' in server render
      expect(html).toContain('Shubham');
      expect(html).toContain('Sky');
      expect(html).toContain('SKYSHOT');
      expect(html).toContain('Verified Fact:');
      expect(html).toContain('Match 6: Authors vs Skyshot');
    });

    it('should render the mandatory banter disclosure verbatim at the bottom of the section', () => {
      const html = renderToString(
        <MemoryRouter>
          <RivalryRoomSection />
        </MemoryRouter>
      );

      expect(html).toContain(
        'APL Editorial Banter • Fictional Rivalry Dialogue • Grounded in Verified Season 1 Outcomes.'
      );
    });
  });
});
