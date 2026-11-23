import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SeasonProvider, useSeason, useSeasonOptional } from '../src/app/providers/SeasonProvider';
import { ThemeProvider } from '../src/app/providers/ThemeProvider';
import { MatchesPage } from '../src/pages/Matches/MatchesPage';
import { PlayoffBracket } from '../src/pages/Matches/components/PlayoffBracket';
import { FinalScorecardDetail } from '../src/pages/Matches/components/FinalScorecardDetail';
import { LeagueFixturesGrid } from '../src/pages/Matches/components/LeagueFixturesGrid';
import { HeroSection } from '../src/pages/Home/components/HeroSection';
import { SeasonStatsStrip } from '../src/pages/Home/components/SeasonStatsStrip';
import { ChampionshipFeature } from '../src/pages/Home/components/ChampionshipFeature';
import { FranchisesLineup } from '../src/pages/Home/components/FranchisesLineup';
import { AppRouter } from '../src/app/Router';
import { SeasonId } from '../src/data/types';

const cleanHtml = (html: string) => html.replace(/<!--[\s\S]*?-->/g, '');

const renderWithProviders = (
  ui: React.ReactElement,
  seasonId: SeasonId = 'season-1',
  route: string = '/matches'
) => {
  const raw = renderToString(
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider>
        <SeasonProvider initialSeasonId={seasonId}>
          {ui}
        </SeasonProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
  return cleanHtml(raw);
};

describe('APL S2-B3 — Match Center & Context Helper Integration Tests', () => {
  describe('1. SeasonProvider Helper Contracts', () => {
    it('useSeasonOptional should fall back cleanly to Season 1 when consumed outside SeasonProvider', () => {
      let capturedContext: ReturnType<typeof useSeasonOptional> | undefined;
      const TestConsumer = () => {
        capturedContext = useSeasonOptional();
        return <div>{capturedContext.activeSeasonId}</div>;
      };

      const html = renderToString(<TestConsumer />);
      expect(html).toContain('season-1');
      expect(capturedContext).toBeDefined();
      expect(capturedContext?.activeSeasonId).toBe('season-1');
      expect(capturedContext?.seasonData.seasonId).toBe('season-1');
      expect(capturedContext?.availableSeasonIds).toEqual(['season-1', 'season-2']);
    });

    it('useSeason should still throw an informative error when consumed outside SeasonProvider', () => {
      const TestConsumer = () => {
        useSeason();
        return null;
      };

      expect(() => renderToString(<TestConsumer />)).toThrow(
        'useSeason must be used within a SeasonProvider'
      );
    });
  });

  describe('2. Season 1 Match Center Regression Preservation', () => {
    it('should preserve Season 1 title and narrative copy on MatchesPage', () => {
      const html = renderWithProviders(<MatchesPage />, 'season-1');

      expect(html).toContain('APL Season 1 • Official Match Centre &amp; Scorecard Archive');
      expect(html).toContain('The Road To The Title.');
      expect(html).toContain('twelve hard-fought league rounds, the drama of the semi-final knockouts, and the unforgettable 226 chase');
      expect(html).toContain('Grand Final Scorecard');
      expect(html).toContain('12 League Fixtures');
    });

    it('should preserve Season 1 playoff bracket structure with SF1, SF2, and Grand Final', () => {
      const html = renderWithProviders(<PlayoffBracket />, 'season-1');

      expect(html).toContain('Semi-Final Round (Matches 13 &amp; 14)');
      expect(html).toContain('Match 13 • Semi-Final 1');
      expect(html).toContain('CHAMPIONS WON BY 10 RUNS');
      expect(html).toContain('225');
      expect(html).toContain('215/5');

      expect(html).toContain('Match 14 • Semi-Final 2');
      expect(html).toContain('AUTHORS QUALIFIED FOR FINAL');

      expect(html).toContain('Match 15 • Grand Final');
      expect(html).toContain('AUTHORS WON BY 3 WICKETS (4 BALLS REMAINING)');
      expect(html).toContain('226/7');
      expect(html).toContain('225/8');
    });

    it('should preserve Season 1 complete Grand Final scorecard with A. King century and broadcast asset', () => {
      const html = renderWithProviders(<FinalScorecardDetail />, 'season-1');

      expect(html).toContain('Grand Final Scorecard');
      expect(html).toContain('AUTHORS WON BY 3 WICKETS');
      expect(html).toContain('A. King — 108 off 54 balls');
      expect(html).toContain('Strike Rate: 200.00');
      expect(html).toContain('/assets/matches/final-scorecard-original.png');
      expect(html).toContain('Official APL Season 1 Final Match Summary Broadcast Scorecard');
    });

    it('should display the Season 1 Match 3 Jay 146 / Knights 291 record highlight', () => {
      const html = renderWithProviders(<LeagueFixturesGrid />, 'season-1');

      expect(html).toContain('Match 03');
      expect(html).toContain('KNIGHTS WON:');
      expect(html).toContain('291 team record');
      expect(html).toContain('146');
    });
  });

  describe('3. Season 2 Match Center Adaptations', () => {
    it('should render Season 2 title, narrative, and navigation copy on MatchesPage', () => {
      const html = renderWithProviders(<MatchesPage />, 'season-2');

      expect(html).toContain('APL Season 2 • Official Match Centre &amp; Fixture Archive');
      expect(html).toContain('The Road To The Title.');
      expect(html).toContain('twelve intense regular-season rounds, the qualifier and knockout playoffs, and Skyshot’s championship triumph');
      expect(html).toContain('Grand Final Outcome');
      expect(html).toContain('12 League Fixtures');
    });

    it('should render Season 2 playoff progression with Qualifier, Semi-Final, and Grand Final', () => {
      const html = renderWithProviders(<PlayoffBracket />, 'season-2');

      expect(html).toContain('Playoff Knockout Rounds (Matches 13 &amp; 14)');

      // Match 13: Qualifier (Skyshot def. Champions)
      expect(html).toContain('Match 13 • Qualifier');
      expect(html).toContain('SKYSHOT QUALIFIED FOR FINAL');
      expect(html).toContain('SKYSHOT');
      expect(html).toContain('Winner • To Final');
      expect(html).toContain('CHAMPIONS');
      expect(html).toContain('To Semi-Final');

      // Match 14: Semi-Final (Knights def. Champions)
      expect(html).toContain('Match 14 • Semi-Final');
      expect(html).toContain('KNIGHTS QUALIFIED FOR FINAL');
      expect(html).toContain('KNIGHTS');
      expect(html).toContain('Winner • To Final');
      expect(html).toContain('Eliminated');

      // Match 15: Grand Final (Skyshot def. Knights)
      expect(html).toContain('Match 15 • Grand Final');
      expect(html).toContain('SKYSHOT');
      expect(html).toContain('Won Grand Final');
      expect(html).toContain('KNIGHTS');
      expect(html).toContain('Finalist');
      expect(html).toContain('SKYSHOT WON • APL SEASON 2 CHAMPIONS');
    });

    it('should render #final-scorecard in Season 2 with verified outcome and explicit archival disclosure', () => {
      const html = renderWithProviders(<FinalScorecardDetail />, 'season-2');

      // Preserves required section ID and heading
      expect(html).toContain('id="final-scorecard"');
      expect(html).toContain('id="scorecard-heading"');
      expect(html).toContain('Grand Final Championship Outcome');

      // Verified Championship Outcome
      expect(html).toContain('SKYSHOT DEFEATED KNIGHTS');
      expect(html).toContain('Season 2 Champions');
      expect(html).toContain('Owner: Shubham');

      // Archival Disclosure: unrecorded scorecards clearly stated, zero synthetic runs
      expect(html).toContain('Archival Disclosure • Surviving Tournament Records:');
      expect(html).toContain('Official match-by-match innings scorecards, balls faced, boundaries hit, and individual bowling figures');
      expect(html).toContain('were not recorded in the surviving Season 2 tournament archive');
      expect(html).toContain('To preserve 100% archival integrity, no speculative runs or ball counts are invented');

      // Must not display Season 1 specific entities in Season 2 final scorecard
      expect(html).not.toContain('A. King — 108 off 54 balls');
      expect(html).not.toContain('final-scorecard-original.png');
    });

    it('should NOT render the Season 1 Match 3 Jay 146 record highlight in Season 2', () => {
      const html = renderWithProviders(<LeagueFixturesGrid />, 'season-2');

      expect(html).toContain('Match 03');
      expect(html).not.toContain('291 team record');
      expect(html).not.toContain('KNIGHTS WON:');
    });

    it('should display the Season 2 Match 2 tied fixture with neutral styling and no winner badge', () => {
      const html = renderWithProviders(<LeagueFixturesGrid />, 'season-2');

      // Match 02 is Champions vs Skyshot (Tied)
      expect(html).toContain('Match 02');
      expect(html).toContain('MATCH TIED');

      // Confirms all 12 fixtures are present
      for (let i = 1; i <= 12; i++) {
        expect(html).toContain(`Match ${i.toString().padStart(2, '0')}`);
      }

      // No Home/Away/Host/Visitor labels
      expect(html).not.toContain('Home:');
      expect(html).not.toContain('Away:');
      expect(html).not.toContain('Host:');
      expect(html).not.toContain('Visitor:');
    });
  });

  describe('4. Navigation Anchors & Multi-Season Context Switching', () => {
    it('should preserve all three primary navigation anchors on /matches in both seasons', () => {
      const s1Html = renderWithProviders(<MatchesPage />, 'season-1');
      expect(s1Html).toContain('id="playoff-bracket"');
      expect(s1Html).toContain('id="final-scorecard"');
      expect(s1Html).toContain('id="league-fixtures"');

      const s2Html = renderWithProviders(<MatchesPage />, 'season-2');
      expect(s2Html).toContain('id="playoff-bracket"');
      expect(s2Html).toContain('id="final-scorecard"');
      expect(s2Html).toContain('id="league-fixtures"');
    });

    it('should cleanly switch between seasons sequentially without cross-season bleed', () => {
      const s1 = renderWithProviders(<MatchesPage />, 'season-1');
      expect(s1).toContain('APL Season 1');
      expect(s1).toContain('CHAMPIONS WON BY 10 RUNS');
      expect(s1).not.toContain('APL Season 2');

      const s2 = renderWithProviders(<MatchesPage />, 'season-2');
      expect(s2).toContain('APL Season 2');
      expect(s2).toContain('SKYSHOT QUALIFIED FOR FINAL');
      expect(s2).not.toContain('CHAMPIONS WON BY 10 RUNS');

      const s1Again = renderWithProviders(<MatchesPage />, 'season-1');
      expect(s1Again).toContain('APL Season 1');
      expect(s1Again).toContain('CHAMPIONS WON BY 10 RUNS');
    });
  });

  describe('5. Season 2 Team Pages & Rosters (B4)', () => {
    const renderRoute = (route: string, seasonId: SeasonId = 'season-2') => {
      const raw = renderToString(
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider>
            <SeasonProvider initialSeasonId={seasonId}>
              <AppRouter />
            </SeasonProvider>
          </ThemeProvider>
        </MemoryRouter>
      );
      return cleanHtml(raw);
    };

    it('should render correct Season 2 regular-season standings on /teams', () => {
      const html = renderRoute('/teams', 'season-2');

      // Header indicates Season 2
      expect(html).toContain('Franchises Hub • Season 2 Archive');

      // Standings entries: Champions 9, Skyshot 7, Knights 6, Authors 2
      expect(html).toContain('4 Wins – 1 Loss – 1 Tie • 9 Pts');
      expect(html).toContain('3 Wins – 2 Losses – 1 Tie • 7 Pts');
      expect(html).toContain('3 Wins – 3 Losses • 6 Pts');
      expect(html).toContain('1 Win – 5 Losses • 2 Pts');

      // Match 2 tie footnote present in Season 2
      expect(html).toContain('Match 02 between Champions and Skyshot concluded in an official tie');
    });

    it('should award the Champions badge to Skyshot and Runner-Up to Knights in Season 2', () => {
      const html = renderRoute('/teams', 'season-2');

      // Skyshot is crowned tournament champions in Season 2
      expect(html).toContain('The Championship Winners');
      expect(html).toContain('2nd Place (7 pts, 3W–2L–1T)');

      // Knights are Grand Finalists in Season 2
      expect(html).toContain('The High-Ceiling Finalists');
      expect(html).toContain('3rd Place (6 pts, 3W–3L)');

      // Authors are league stage (4th) in Season 2
      expect(html).toContain('The Rebuilding Contenders');
      expect(html).toContain('4th Place (2 pts, 1W–5L)');

      // Team portals verify playoff finish banners
      const skyPortal = renderRoute('/teams/skyshot', 'season-2');
      expect(skyPortal).toContain('Season 2 Champions • Grand Final Winners');

      const kntPortal = renderRoute('/teams/knights', 'season-2');
      expect(kntPortal).toContain('Grand Finalists • Won Semi-Final Clash');

      const autPortal = renderRoute('/teams/authors', 'season-2');
      expect(autPortal).toContain('League Stage • 1 Win');
    });

    it('should preserve Season 1 standings and championship designation on /teams', () => {
      const html = renderRoute('/teams', 'season-1');

      expect(html).toContain('Franchises Hub • Season 1 Archive');
      expect(html).toContain('The Championship Strategists');
      expect(html).toContain('The High-Octane Finalists');
      expect(html).toContain('4 Wins – 2 Losses • 8 Pts');
      expect(html).toContain('3 Wins – 3 Losses • 6 Pts');
      expect(html).toContain('2 Wins – 4 Losses • 4 Pts');
      expect(html).toContain('Authors and Champions finished tied on 6 points');

      const s1AuthorsPortal = renderRoute('/teams/authors', 'season-1');
      expect(s1AuthorsPortal).toContain('Inaugural Champions • Chased 226 in Grand Final');
    });

    it('should display correct unequal squad counts in Season 2 team cards and rosters', () => {
      // Hub cards
      const hubHtml = renderRoute('/teams', 'season-2');
      expect(hubHtml).toContain('13 Verified Players'); // Authors
      expect(hubHtml).toContain('11 Verified Players'); // Champions
      expect(hubHtml).toContain('12 Verified Players'); // Skyshot & Knights

      // Authors portal (13 players)
      const authorsHtml = renderRoute('/teams/authors', 'season-2');
      expect(authorsHtml).toContain('Official Squad Roster • 13 Verified Players');
      expect(authorsHtml).toContain('The Authors Squad');

      // Champions portal (11 players)
      const championsHtml = renderRoute('/teams/champions', 'season-2');
      expect(championsHtml).toContain('Official Squad Roster • 11 Verified Players');
      expect(championsHtml).toContain('The Champions Squad');

      // Skyshot portal (12 players)
      const skyshotHtml = renderRoute('/teams/skyshot', 'season-2');
      expect(skyshotHtml).toContain('Official Squad Roster • 12 Verified Players');
      expect(skyshotHtml).toContain('The Skyshot Squad');

      // Knights portal (12 players)
      const knightsHtml = renderRoute('/teams/knights', 'season-2');
      expect(knightsHtml).toContain('Official Squad Roster • 12 Verified Players');
      expect(knightsHtml).toContain('The Knights Squad');
    });

    it('should dynamically derive franchise leading batters and bowlers in Season 2', () => {
      // Champions: Harvey (446 runs), Silver (12 wickets)
      const champHtml = renderRoute('/teams/champions', 'season-2');
      expect(champHtml).toContain('Harvey');
      expect(champHtml).toContain('446 Batter Runs');
      expect(champHtml).toContain('Silver');
      expect(champHtml).toContain('12 Wickets');

      // Skyshot: Figarland (433 runs), Overton (10 wickets)
      const skyHtml = renderRoute('/teams/skyshot', 'season-2');
      expect(skyHtml).toContain('Figarland');
      expect(skyHtml).toContain('433 Batter Runs');
      expect(skyHtml).toContain('Overton');
      expect(skyHtml).toContain('10 Wickets');

      // Knights: Pointer (362 runs), Dharm (10 wickets)
      const kntHtml = renderRoute('/teams/knights', 'season-2');
      expect(kntHtml).toContain('Pointer');
      expect(kntHtml).toContain('362 Batter Runs');
      expect(kntHtml).toContain('Dharm');
      expect(kntHtml).toContain('10 Wickets');

      // Authors: Silva (189 runs), Mario (7 wickets)
      const autHtml = renderRoute('/teams/authors', 'season-2');
      expect(autHtml).toContain('Silva');
      expect(autHtml).toContain('189 Batter Runs');
      expect(autHtml).toContain('Mario');
      expect(autHtml).toContain('7 Wickets');
    });

    it('should handle Umang (UB) appropriately without Season 1 missing-stats disclaimer in Season 2', () => {
      const s1Champ = renderRoute('/teams/champions', 'season-1');
      expect(s1Champ).toContain('individual in-game player identity and statistics are not documented in the surviving Season 1 archive');

      const s2Champ = renderRoute('/teams/champions', 'season-2');
      expect(s2Champ).toContain('Umang');
      expect(s2Champ).toContain('UB');
      expect(s2Champ).not.toContain('individual in-game player identity and statistics are not documented in the surviving Season 1 archive');
    });

    it('should display Gavi in Skyshot squad with unrecorded em-dashes and no fabricated zeros', () => {
      const skyHtml = renderRoute('/teams/skyshot', 'season-2');
      expect(skyHtml).toContain('Gavi');
      expect(skyHtml).toContain('Registered squad member in Season 2 SQUADS');
      expect(skyHtml).toContain('—'); // runs and wickets display em-dash
    });

    it('should label Season 2 Qualifier and Semi-Final correctly in TeamMatchHistory', () => {
      const skyHtml = renderRoute('/teams/skyshot', 'season-2');
      // Skyshot played Qualifier (Match 13) and Championship Final (Match 15)
      expect(skyHtml).toContain('Match 13');
      expect(skyHtml).toContain('Qualifier');
      expect(skyHtml).toContain('Match 15');
      expect(skyHtml).toContain('Championship Final');

      const kntHtml = renderRoute('/teams/knights', 'season-2');
      // Knights played Semi-Final (Match 14) and Championship Final (Match 15)
      expect(kntHtml).toContain('Match 14');
      expect(kntHtml).toContain('Semi-Final');
      expect(kntHtml).toContain('Match 15');
      expect(kntHtml).toContain('Championship Final');
    });

    it('should make TeamDetailPage 404 fallback season-aware', () => {
      const s1NotFound = renderRoute('/teams/unknown-team', 'season-1');
      expect(s1NotFound).toContain('Franchise Not Found');
      expect(s1NotFound).toContain('APL Season 1 archive');

      const s2NotFound = renderRoute('/teams/unknown-team', 'season-2');
      expect(s2NotFound).toContain('Franchise Not Found');
      expect(s2NotFound).toContain('APL Season 2 archive');
    });

    it('should cleanly switch between seasons on team pages without bleed', () => {
      const s1Authors = renderRoute('/teams/authors', 'season-1');
      expect(s1Authors).toContain('A. King');
      expect(s1Authors).toContain('527 Batter Runs');
      expect(s1Authors).toContain('Inaugural Champions • Chased 226 in Grand Final');
      expect(s1Authors).not.toContain('189 Batter Runs');

      const s2Authors = renderRoute('/teams/authors', 'season-2');
      expect(s2Authors).toContain('Silva');
      expect(s2Authors).toContain('189 Batter Runs');
      expect(s2Authors).not.toContain('527 Batter Runs');

      const s1Again = renderRoute('/teams/authors', 'season-1');
      expect(s1Again).toContain('527 Batter Runs');
      expect(s1Again).not.toContain('189 Batter Runs');
    });
  });

  describe('6. Season 2 Homepage & Editorial Experience (B5)', () => {
    const renderRoute = (route: string, seasonId: SeasonId = 'season-2') => {
      const raw = renderToString(
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider>
            <SeasonProvider initialSeasonId={seasonId}>
              <AppRouter />
            </SeasonProvider>
          </ThemeProvider>
        </MemoryRouter>
      );
      return cleanHtml(raw);
    };

    it('should adapt HeroSection to Season 2 while preserving Season 1 content', () => {
      // Season 2 Hero
      const s2Hero = renderWithProviders(<HeroSection />, 'season-2', '/');
      expect(s2Hero).toContain('Official Digital Archive • Season 02');
      expect(s2Hero).toContain('Season 2 Champions');
      expect(s2Hero).toContain('SKYSHOT');
      expect(s2Hero).toContain('managed by Shubham');
      expect(s2Hero).toContain('Defeated Knights in the Season 2 Grand Final to claim their inaugural APL title.');
      expect(s2Hero).toContain('CHAMPIONS');
      expect(s2Hero).toContain('MATCH 15 WIN');
      expect(s2Hero).toContain('5,681');
      expect(s2Hero).toContain('117');
      expect(s2Hero).toContain('Permanent Archive • Verified 2025');
      expect(s2Hero).toContain('alt="APL — Ashes Premier League: Season 2 The Legends Legacy Official Emblem"');

      // Season 1 Hero
      const s1Hero = renderWithProviders(<HeroSection />, 'season-1', '/');
      expect(s1Hero).toContain('Official Digital Archive • Season 01');
      expect(s1Hero).toContain('Inaugural Champions');
      expect(s1Hero).toContain('AUTHORS');
      expect(s1Hero).toContain('managed by Dharm');
      expect(s1Hero).toContain('Chased down 226 in 19.2 overs');
      expect(s1Hero).toContain('226 / 7');
      expect(s1Hero).toContain('19.2 OVERS');
      expect(s1Hero).toContain('5,945');
      expect(s1Hero).toContain('101');
      expect(s1Hero).toContain('Permanent Archive • Verified 2024');
    });

    it('should adapt SeasonStatsStrip aggregates and reconciliation message in Season 2', () => {
      // Season 2 Stats Strip
      const s2Strip = renderWithProviders(<SeasonStatsStrip />, 'season-2', '/');
      expect(s2Strip).toContain('aria-label="Season 2 Tournament Aggregate Statistics"');
      expect(s2Strip).toContain('04');
      expect(s2Strip).toContain('15');
      expect(s2Strip).toContain('5,681');
      expect(s2Strip).toContain('117');
      expect(s2Strip).toContain('100% verified dismissals across 21 recorded bowlers');
      expect(s2Strip).toContain('STATISTICAL RECONCILIATION: 5,681 RECORDED BATTER RUNS (8 BATTING DISCREPANCIES DOCUMENTED) • 117 BOWLER WICKETS (0 DISCREPANCIES)');
      expect(s2Strip).toContain('AUDITED ARCHIVAL BALANCE');

      // Season 1 Stats Strip
      const s1Strip = renderWithProviders(<SeasonStatsStrip />, 'season-1', '/');
      expect(s1Strip).toContain('aria-label="Season 1 Tournament Aggregate Statistics"');
      expect(s1Strip).toContain('5,945');
      expect(s1Strip).toContain('101');
      expect(s1Strip).toContain('STATISTICAL RECONCILIATION: 5,945 RECORDED BATTER RUNS (5,930 INNINGS + 13 RECONSTRUCTED + 2 UNATTRIBUTED AGGREGATE ADJUSTMENT)');
      expect(s1Strip).toContain('MATHEMATICALLY BALANCED');
    });

    it('should render Season 2 ChampionshipFeature with verified laurels and explicit archival disclosure', () => {
      // Season 2 Championship Feature
      const s2Feature = renderWithProviders(<ChampionshipFeature />, 'season-2', '/');
      expect(s2Feature).toContain('The Defining Climax • Season 2 Championship Final');
      expect(s2Feature).toContain('Skyshot&#x27;s Coronation.');
      expect(s2Feature).toContain('SKYSHOT WON • CHAMPIONS');
      expect(s2Feature).toContain('KNIGHTS');
      expect(s2Feature).toContain('RUNNERS-UP');
      expect(s2Feature).toContain('SKYSHOT');
      expect(s2Feature).toContain('Figarland (3 Centuries)');
      expect(s2Feature).toContain('102, 118, 102 (433 Runs)');
      expect(s2Feature).toContain('Shubham (Campaign High)');
      expect(s2Feature).toContain('114 Runs (304 Total)');
      expect(s2Feature).toContain('Official detailed ball-by-ball scorecards and dismissal metrics for Match 15 were unrecorded in the surviving score sheets.');
      expect(s2Feature).toContain('/assets/brand/apl-logo.png');
      expect(s2Feature).toContain('alt="Official APL Season 2 Master Brand Emblem celebrating Skyshot as Champions"');

      // Season 1 Championship Feature remains untouched
      const s1Feature = renderWithProviders(<ChampionshipFeature />, 'season-1', '/');
      expect(s1Feature).toContain('The 226 Chase.');
      expect(s1Feature).toContain('AUTHORS WON BY 3 WICKETS');
      expect(s1Feature).toContain('A. King (Match MVP)');
      expect(s1Feature).toContain('108 (54)');
      expect(s1Feature).toContain('/assets/matches/final-scorecard-original.png');
    });

    it('should spotlight Skyshot as champion and adapt team standings in FranchisesLineup for Season 2', () => {
      // Season 2 Lineup
      const s2Lineup = renderWithProviders(<FranchisesLineup />, 'season-2', '/');
      expect(s2Lineup).toContain('The Four Franchises.');
      expect(s2Lineup).toContain('1st Place • Season 2 Champions');
      expect(s2Lineup).toContain('SKYSHOT');
      expect(s2Lineup).toContain('Shubham (Sky)');
      expect(s2Lineup).toContain('2nd Place');
      expect(s2Lineup).toContain('The Grand Finalists');
      expect(s2Lineup).toContain('KNIGHTS');
      expect(s2Lineup).toContain('Jay');
      expect(s2Lineup).toContain('1st in League');
      expect(s2Lineup).toContain('The Regular Season Table Toppers');
      expect(s2Lineup).toContain('CHAMPIONS');
      expect(s2Lineup).toContain('Tony');
      expect(s2Lineup).toContain('4th Place');
      expect(s2Lineup).toContain('AUTHORS');
      expect(s2Lineup).toContain('King');
      expect(s2Lineup).toContain('Shubham (Skyshot), Jay (Knights), Tony (Champions), and King (Authors)');

      // Season 1 Lineup
      const s1Lineup = renderWithProviders(<FranchisesLineup />, 'season-1', '/');
      expect(s1Lineup).toContain('1st Place • Inaugural Champions');
      expect(s1Lineup).toContain('AUTHORS');
      expect(s1Lineup).toContain('Dharm');
      expect(s1Lineup).toContain('King (Authors), Stark (Champions), Shubham (Skyshot), and Jay (Knights)');
    });

    it('should render complete Season 2 HomePage via route with all semantic landmark IDs preserved', () => {
      const html = renderRoute('/', 'season-2');

      // Semantic anchor landmarks preserved
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

      // Season 2 content present
      expect(html).toContain('Official Digital Archive • Season 02');
      expect(html).toContain('5,681');
      expect(html).toContain('117');
      expect(html).toContain('Skyshot&#x27;s Coronation.');
    });

    it('should cleanly switch between seasons across the complete homepage without data bleed', () => {
      // 1. Render Season 1 Homepage
      const s1Home = renderRoute('/', 'season-1');
      expect(s1Home).toContain('Official Digital Archive • Season 01');
      expect(s1Home).toContain('5,945');
      expect(s1Home).toContain('The 226 Chase.');
      expect(s1Home).not.toContain('5,681');
      expect(s1Home).not.toContain('Skyshot&#x27;s Coronation.');

      // 2. Render Season 2 Homepage
      const s2Home = renderRoute('/', 'season-2');
      expect(s2Home).toContain('Official Digital Archive • Season 02');
      expect(s2Home).toContain('5,681');
      expect(s2Home).toContain('Skyshot&#x27;s Coronation.');
      expect(s2Home).not.toContain('5,945');
      expect(s2Home).not.toContain('The 226 Chase.');

      // 3. Return to Season 1 Homepage
      const s1Again = renderRoute('/', 'season-1');
      expect(s1Again).toContain('Official Digital Archive • Season 01');
      expect(s1Again).toContain('5,945');
      expect(s1Again).toContain('The 226 Chase.');
      expect(s1Again).not.toContain('5,681');
      expect(s1Again).not.toContain('Skyshot&#x27;s Coronation.');
    });
  });

  describe('7. Season 2 Owners Chronicle (/owners) (B6.1)', () => {
    const renderRoute = (route: string, seasonId: SeasonId = 'season-2') => {
      const raw = renderToString(
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider>
            <SeasonProvider initialSeasonId={seasonId}>
              <AppRouter />
            </SeasonProvider>
          </ThemeProvider>
        </MemoryRouter>
      );
      return cleanHtml(raw);
    };

    it('should adapt OwnersHero to Season 2 while preserving Season 1 overview and identity mapping', () => {
      // S1 Hero
      const s1 = renderRoute('/owners', 'season-1');
      expect(s1).toContain('Documentary Archive • APL Season 1');
      expect(s1).toContain('15 Decided Fixtures');
      expect(s1).toContain('1 Inaugural Champion');
      expect(s1).toContain('for the inaugural <strong class="text-[#EAE4D8]">Ashes Premier League (APL) Season 1</strong> crown');
      expect(s1).toContain('CHAMPIONS • Won Final by 3 Wickets');
      expect(s1).toContain('King</strong> (Authors)');
      expect(s1).toContain('Stark</strong> (Champions)');
      expect(s1).toContain('Shubham</strong> (Skyshot)');
      expect(s1).toContain('Jay</strong> (Knights)');

      // S2 Hero
      const s2 = renderRoute('/owners', 'season-2');
      expect(s2).toContain('Documentary Archive • APL Season 2');
      expect(s2).toContain('15 Fixtures (1 Tied)');
      expect(s2).toContain('1 Reigning Champion');
      expect(s2).toContain('to contest the <strong class="text-[#EAE4D8]">Ashes Premier League (APL) Season 2</strong> championship');
      expect(s2).toContain('CHAMPIONS • Won Final by 4 Wickets');
      expect(s2).toContain('King</strong> (Authors)');
      expect(s2).toContain('Tony</strong> (Champions)');
      expect(s2).toContain('Shubham</strong> (Skyshot)');
      expect(s2).toContain('Jay</strong> (Knights)');
      expect(s2).toContain('LEAGUE STAGE • 10 Wkts for Knights');
      expect(s2).toContain('RUNNERS-UP • Grand Finalists');
    });

    it('should render verified Season 2 owner documentary chapters and milestones', () => {
      const s2 = renderRoute('/owners', 'season-2');

      // Shubham: Season 2 Champion
      expect(s2).toContain('Championship Captain &amp; Owner');
      expect(s2).toContain('304 Runs (1 Century: 114 HS)');
      expect(s2).toContain('Innings: [38, 30, 36, 3, 10, 30, 43, 114]');
      expect(s2).toContain('Captained and owned Skyshot to the APL Season 2 Championship title');

      // Jay: Grand Finalist & 4 Fifties
      expect(s2).toContain('Grand Finalist Captain &amp; Owner');
      expect(s2).toContain('322 Runs (4 Fifties: 81 HS)');
      expect(s2).toContain('Innings: [67, 0, 13, 21, 71, 5, 64, 81]');
      expect(s2).toContain('Recorded 4 half-centuries [67, 71, 64, 81], tying the tournament record for most fifties in Season 2');

      // Dharm: Authors founder transferred to Knights with tournament best bowling
      expect(s2).toContain('Founding Architect &amp; Active Bowler');
      expect(s2).toContain('10 Tournament Wickets (Best Bowling: 4 Wkts)');
      expect(s2).toContain('10 Total Tournament Wickets [2, 4, 0, 1, 0, 0, 2, 1] across 8 matches • 38 Runs [6, 3, 6, 3, 4, 16, 0]');
      expect(s2).toContain('Recorded the tournament-best single match bowling spell of Season 2: 4 Wickets vs Champions');

      // Umang: Regular Season Topper (9 Pts)
      expect(s2).toContain('Regular-Season Mastermind');
      expect(s2).toContain('4 Wins – 1 Loss – 1 Tie (9 Pts)');
      expect(s2).toContain('Guided Champions to 1st place in the regular-season standings with 4 wins, 1 loss, 1 tie, and 9 points');
    });

    it('should disclose Umang undocumented in-game player status losslessly without fabricated zeros', () => {
      const s2 = renderRoute('/owners', 'season-2');
      expect(s2).toContain('Archival Player Status');
      expect(s2).toContain(
        "Umang&#x27;s individual in-game player identity and statistics are not documented in the surviving Season 2 archive."
      );
      expect(s2).not.toContain('0 Tournament Runs');
      expect(s2).not.toContain('0 Wickets Taken');
    });

    it('should render dynamic season record label in OwnerDetailChapter', () => {
      const s1 = renderRoute('/owners', 'season-1');
      expect(s1).toContain('Season 1 Record');
      expect(s1).not.toContain('Season 2 Record');

      const s2 = renderRoute('/owners', 'season-2');
      expect(s2).toContain('Season 2 Record');
    });

    it('should adapt OwnersRivalryMatrix to Season 2 with correct stage formatting, subtitles, and tie handling', () => {
      const s2 = renderRoute('/owners', 'season-2');
      expect(s2).toContain('Match 2 Tied Thriller &amp; Playoff Qualifier');
      expect(s2).toContain('319 Record Clash &amp; Playoff Semi-Final');
      expect(s2).toContain('The Grand Final Championship Decider');
      expect(s2).toContain('Qualifier');
      expect(s2).toContain('Semi-Final');
      expect(s2).toContain('Grand Final: Skyshot won by 4 wickets');
      expect(s2).toContain('Match Tied (1 Point Each)');
    });

    it('should adapt OwnersLegacyEpilogue aggregates and roll call to Season 2 while preserving Season 1', () => {
      // S1 Epilogue
      const s1 = renderRoute('/owners', 'season-1');
      expect(s1).toContain('5,945 official batter runs, 101 bowler wickets');
      expect(s1).toContain('record-shattering 146 by Jay');
      expect(s1).toContain('5,945-run reconciliation ledger');
      expect(s1).toContain('Dharm</span><span>(Authors)</span>');

      // S2 Epilogue
      const s2 = renderRoute('/owners', 'season-2');
      expect(s2).toContain('5,681 official batter runs, 117 bowler wickets');
      expect(s2).toContain('tournament-record 161 by Pointer');
      expect(s2).toContain('monumental 319 team total by Knights');
      expect(s2).toContain('5,681-run reconciliation ledger');
      expect(s2).toContain('Dharm</span><span>(Authors Founder • Knights)</span>');
      expect(s2).toContain('Shubham</span><span>(Skyshot • Champions)</span>');
      expect(s2).toContain('Jay</span><span>(Knights • Runners-Up)</span>');
    });

    it('should cleanly switch between seasons on /owners without narrative bleed', () => {
      // 1. Render Season 1
      const s1 = renderRoute('/owners', 'season-1');
      expect(s1).toContain('Documentary Archive • APL Season 1');
      expect(s1).toContain('5,945 official batter runs, 101 bowler wickets');
      expect(s1).toContain('Championship Architect');
      expect(s1).not.toContain('Documentary Archive • APL Season 2');
      expect(s1).not.toContain('5,681 official batter runs');
      expect(s1).not.toContain('Founding Architect &amp; Active Bowler');

      // 2. Render Season 2
      const s2 = renderRoute('/owners', 'season-2');
      expect(s2).toContain('Documentary Archive • APL Season 2');
      expect(s2).toContain('5,681 official batter runs, 117 bowler wickets');
      expect(s2).toContain('Founding Architect &amp; Active Bowler');
      expect(s2).not.toContain('Documentary Archive • APL Season 1');
      expect(s2).not.toContain('5,945 official batter runs');
      expect(s2).not.toContain('Championship Architect');

      // 3. Switch back to Season 1
      const s1Again = renderRoute('/owners', 'season-1');
      expect(s1Again).toContain('Documentary Archive • APL Season 1');
      expect(s1Again).toContain('5,945 official batter runs, 101 bowler wickets');
      expect(s1Again).not.toContain('5,681 official batter runs');
    });
  });

  describe('8. Season 2 Hall of Fame (/hall-of-fame) (B6.2)', () => {
    const renderRoute = (route: string, seasonId: SeasonId = 'season-2') => {
      const raw = renderToString(
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider>
            <SeasonProvider initialSeasonId={seasonId}>
              <AppRouter />
            </SeasonProvider>
          </ThemeProvider>
        </MemoryRouter>
      );
      return cleanHtml(raw);
    };

    it('should adapt HallOfFameHero to Season 2 with verified milestone counters while preserving Season 1', () => {
      // S1 Hero
      const s1 = renderRoute('/hall-of-fame', 'season-1');
      expect(s1).toContain('APL Season 1 • Official Archive Sanctuary');
      expect(s1).toContain('THE IMMORTALS');
      expect(s1).toContain('OF SEASON 1');
      expect(s1).toContain('Authors (226 Chase)');
      expect(s1).toContain('King (527) • Sky (12)');
      expect(s1).toContain('Across 5 Batsmen');
      expect(s1).toContain('S. Parker (Champions)');
      expect(s1).toContain('291');

      // S2 Hero
      const s2 = renderRoute('/hall-of-fame', 'season-2');
      expect(s2).toContain('APL Season 2 • Official Archive Sanctuary');
      expect(s2).toContain('THE IMMORTALS');
      expect(s2).toContain('OF SEASON 2');
      expect(s2).toContain('Skyshot (Final: 4 Wkts)');
      expect(s2).toContain('Harvey (446) • Silver (12)');
      expect(s2).toContain('Across 4 Batsmen');
      expect(s2).toContain('Dharm (Knights vs Champions)');
      expect(s2).toContain('319');
    });

    it('should adapt ChampionshipLaurels to Season 2 with Skyshot crowned, Knights resurgence, Champions cap sweep, and Authors transition', () => {
      const s2 = renderRoute('/hall-of-fame', 'season-2');

      expect(s2).toContain('THE FOUR PILLARS OF SEASON 2');

      // Skyshot
      expect(s2).toContain('APL SEASON 2 CHAMPIONS');
      expect(s2).toContain('SKYSHOT');
      expect(s2).toContain('Won by 4 Wickets');
      expect(s2).toContain('Shubham 114 Century');
      expect(s2).toContain('3–2–1 (7 Pts, 2nd Place)');

      // Knights
      expect(s2).toContain('RUNNERS-UP / FINALISTS');
      expect(s2).toContain('KNIGHTS');
      expect(s2).toContain('319 vs Champions');
      expect(s2).toContain('Pointer 161 Runs');

      // Champions
      expect(s2).toContain('LEAGUE STAGE TOPPERS');
      expect(s2).toContain('CHAMPIONS');
      expect(s2).toContain('Harvey (446 Runs)');
      expect(s2).toContain('Silver (12 Wickets)');
      expect(s2).toContain('4 Wins – 1 Loss – 1 Tie');

      // Authors
      expect(s2).toContain('REBUILDING DEFENDING CHAMPIONS');
      expect(s2).toContain('AUTHORS');
      expect(s2).toContain('Dharm (10 Wkts for Knights)');
      expect(s2).toContain('Dharm 4 Wkts');

      // Protocol Banner
      expect(s2).toContain('King, Tony, Shubham, Jay');
    });

    it('should adapt CaptainsOfGlory in Season 2 showcasing Champions double cap sweep (Harvey 446 & Silver 12)', () => {
      const s2 = renderRoute('/hall-of-fame', 'season-2');

      expect(s2).toContain('THE GOLDEN CAPS OF SEASON 2');

      // Orange Cap: Harvey
      expect(s2).toContain('Orange Cap Winner • Most Runs');
      expect(s2).toContain('Harvey');
      expect(s2).toContain('446');
      expect(s2).toContain('CHAMPIONS • Top-Order Batsman');
      expect(s2).toContain('2 Hundreds • 2 Fifties');
      expect(s2).toContain('HS: 112');
      expect(s2).toContain('Tournament High Score: 112');

      // Purple Cap: Silver
      expect(s2).toContain('Purple Cap Winner • Most Wickets');
      expect(s2).toContain('Silver');
      expect(s2).toContain('12');
      expect(s2).toContain('CHAMPIONS • Strike Bowler / All-Rounder');
      expect(s2).toContain('Wickets in All 8 Matches');
      expect(s2).toContain('Best Match Bowling: 3 Wkts');
      expect(s2).toContain('Wickets in All 8 Tournament Fixtures');

      // Archival Protocol
      expect(s2).toContain('Champions achieved the sole clean sweep of both seasonal individual cap honors in APL history');
    });

    it('should adapt TheCenturyClub to Season 2 displaying all seven recorded centuries led by Pointer 161', () => {
      const s2 = renderRoute('/hall-of-fame', 'season-2');

      expect(s2).toContain('The Hundred Club • 7 Historic Centuries');

      // Pointer: 161
      expect(s2).toContain('161');
      expect(s2).toContain('Pointer');
      expect(s2).toContain('KNIGHTS');
      expect(s2).toContain('All-Time Tournament High Score');

      // Figarland: 118, 102, 102
      expect(s2).toContain('118');
      expect(s2).toContain('102');
      expect(s2).toContain('Figarland');
      expect(s2).toContain('SKYSHOT');
      expect(s2).toContain('Most Centuries Record Holder (3)');

      // Shubham: 114
      expect(s2).toContain('114');
      expect(s2).toContain('Shubham');
      expect(s2).toContain('Championship Captain &amp; Owner Century');

      // Harvey: 112, 108
      expect(s2).toContain('112');
      expect(s2).toContain('108');
      expect(s2).toContain('Harvey');
      expect(s2).toContain('CHAMPIONS');

      // Negative assertions: balls faced protocol
      expect(s2).toContain('Balls faced are unrecorded in surviving Season 2 tournament ledgers');
    });

    it('should adapt HistoricBowlingHauls in Season 2 with Dharm 4-fer, Silver 12 wickets, and 117 total wickets', () => {
      const s2 = renderRoute('/hall-of-fame', 'season-2');

      expect(s2).toContain('HISTORIC BOWLING FEATS');

      // Dharm 4-fer
      expect(s2).toContain('Tournament-Best Match Bowling');
      expect(s2).toContain('Dharm');
      expect(s2).toContain('4 Wkts (4/x)');
      expect(s2).toContain('KNIGHTS');

      // Silver strike spell
      expect(s2).toContain('Purple Cap Strike Spell');
      expect(s2).toContain('Silver');
      expect(s2).toContain('3 Wkts (3/x)');

      // Overton anchor
      expect(s2).toContain('Championship Bowling Anchor');
      expect(s2).toContain('Overton');
      expect(s2).toContain('10 Wkts (4x 2w)');

      // Purple Cap Hierarchy Table
      expect(s2).toContain('Purple Cap Hierarchy &amp; Top Tournament Wicket-Takers');
      expect(s2).toContain('117 Total Verified Tournament Wickets');
      expect(s2).toContain('117 Total Bowler Wickets Reconciled');
    });

    it('should adapt ExtremeRecords to Season 2 featuring Knights 319 total, Skyshot 4-wicket final chase, and 113 lowest', () => {
      const s2 = renderRoute('/hall-of-fame', 'season-2');

      expect(s2).toContain('EXTREME BENCHMARKS OF SEASON 2');

      // 319 Highest Total
      expect(s2).toContain('HIGHEST TEAM TOTAL IN APL HISTORY');
      expect(s2).toContain('319');
      expect(s2).toContain('KNIGHTS');
      expect(s2).toContain('shattering their own previous tournament record of 291');

      // Championship Decider
      expect(s2).toContain('THE CHAMPIONSHIP DECIDER');
      expect(s2).toContain('Won by 4 Wkts');
      expect(s2).toContain('SKYSHOT');

      // 113 Lowest Total
      expect(s2).toContain('LOWEST TEAM TOTAL IN SEASON 2');
      expect(s2).toContain('113');
      expect(s2).toContain('Skyshot were restricted by Champions to 113');

      // Protocol note
      expect(s2).toContain('Knights’ 319 vs Champions stands as the all-time highest team score in APL history');
    });

    it('should cleanly switch between Season 1 and Season 2 on /hall-of-fame without narrative or statistical bleed', () => {
      // 1. Season 1
      const s1 = renderRoute('/hall-of-fame', 'season-1');
      expect(s1).toContain('OF SEASON 1');
      expect(s1).toContain('APL Season 1 • Official Archive Sanctuary');
      expect(s1).toContain('527');
      expect(s1).toContain('291');
      expect(s1).toContain('5,945-run audit ledger');
      expect(s1).not.toContain('OF SEASON 2');
      expect(s1).not.toContain('APL Season 2 • Official Archive Sanctuary');
      expect(s1).not.toContain('446');
      expect(s1).not.toContain('319');
      expect(s1).not.toContain('Pointer');

      // 2. Season 2
      const s2 = renderRoute('/hall-of-fame', 'season-2');
      expect(s2).toContain('OF SEASON 2');
      expect(s2).toContain('APL Season 2 • Official Archive Sanctuary');
      expect(s2).toContain('446');
      expect(s2).toContain('319');
      expect(s2).toContain('Pointer');
      expect(s2).toContain('161');
      expect(s2).toContain('5,681-run audit ledger');
      expect(s2).not.toContain('OF SEASON 1');
      expect(s2).not.toContain('APL Season 1 • Official Archive Sanctuary');
      expect(s2).not.toContain('527');
      expect(s2).not.toContain('226 Chase');

      // 3. Switch back to Season 1
      const s1Again = renderRoute('/hall-of-fame', 'season-1');
      expect(s1Again).toContain('OF SEASON 1');
      expect(s1Again).toContain('APL Season 1 • Official Archive Sanctuary');
      expect(s1Again).toContain('527');
      expect(s1Again).toContain('291');
      expect(s1Again).not.toContain('OF SEASON 2');
      expect(s1Again).not.toContain('446');
      expect(s1Again).not.toContain('Pointer');
    });
  });
});
