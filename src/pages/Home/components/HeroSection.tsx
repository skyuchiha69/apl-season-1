import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Trophy, ChevronRight } from 'lucide-react';
import { Container } from '../../../components/layout/Container';
import { useSeasonOptional } from '../../../app/providers/SeasonProvider';

export const HeroSection: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason1 = activeSeasonId === 'season-1';

  const scrollToChampionship = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('championship-feature');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center bg-editorial-forest overflow-hidden py-10 sm:py-16 lg:py-20 lg:min-h-[660px] border-b border-[#EAE4D8]/10"
    >
      {/* Deep atmospheric lighting & subtle background graphic texture */}
      <div
        className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[#B99A5B]/5 blur-[160px] rounded-full pointer-events-none animate-atmospheric"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-emerald-950/20 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full">
        {/* Asymmetrical 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Main Editorial Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            {/* Archival Eyebrow Tag */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <span className="h-[1px] w-6 sm:w-8 bg-[#B99A5B] shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#B99A5B] font-semibold">
                {isSeason1
                  ? 'Official Digital Archive • Season 01'
                  : 'Official Digital Archive • Season 02'}
              </span>
            </div>

            {/* Oversized Condensed Display Headline */}
            <div className="space-y-1">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#EAE4D8] uppercase font-display leading-[0.95] tracking-tight"
              >
                Four Teams.
                <span className="block text-[#B99A5B]">One Legacy.</span>
              </h1>
            </div>

            {/* Editorial Lead Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A69F92] font-sans leading-relaxed max-w-xl">
              {isSeason1
                ? 'What began as late-night PC cricket matches between four cousins transformed into a full fifteen-match championship. Four drafted squads, four fierce franchise rivalries, and an unforgettable chase of 226 on championship night.'
                : 'The second edition of the Ashes Premier League brought higher stakes, the historic first tied match in league history, and a commanding playoff sweep by Skyshot to lift their inaugural championship trophy.'}
            </p>

            {/* Championship Feature Callout Strip */}
            <div className="p-3.5 sm:p-5 rounded-lg bg-[#111815] border border-[#EAE4D8]/10 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#87968B] uppercase tracking-wider">
                    <Trophy className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                    <span>{isSeason1 ? 'Inaugural Champions' : 'Season 2 Champions'}</span>
                  </div>
                  <p className="font-display text-lg sm:text-xl font-bold text-[#EAE4D8] tracking-wide">
                    {isSeason1 ? (
                      <>
                        AUTHORS{' '}
                        <span className="text-[#87968B] font-sans text-xs sm:text-sm font-normal">
                          managed by Dharm
                        </span>
                      </>
                    ) : (
                      <>
                        SKYSHOT{' '}
                        <span className="text-[#87968B] font-sans text-xs sm:text-sm font-normal">
                          managed by Shubham
                        </span>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-[#A69F92] font-sans leading-relaxed">
                    {isSeason1
                      ? 'Chased down 226 in 19.2 overs in the Championship Final against Champions.'
                      : 'Defeated Knights in the Season 2 Grand Final to claim their inaugural APL title.'}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between border-t border-[#EAE4D8]/5 pt-2 sm:border-0 sm:pt-1 text-right font-mono text-xs text-[#B99A5B] shrink-0">
                  {isSeason1 ? (
                    <>
                      <span className="font-bold sm:block">226 / 7</span>
                      <span className="text-[10px] text-[#87968B] sm:block">19.2 OVERS</span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold sm:block text-xs sm:text-sm">CHAMPIONS</span>
                      <span className="text-[10px] text-[#87968B] sm:block">MATCH 15 WIN</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Editorial Action Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#championship-feature"
                onClick={scrollToChampionship}
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded bg-[#B99A5B] hover:bg-[#D4BA7E] text-[#090C0B] font-display font-bold text-xs sm:text-sm tracking-widest uppercase transition-colors shadow-lg shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#B99A5B] focus:ring-offset-2 focus:ring-offset-[#090C0B] min-h-[44px]"
              >
                <span>Read The Chronicle</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <Link
                to="/owners"
                className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded border border-[#EAE4D8]/20 hover:border-[#EAE4D8]/40 hover:bg-[#EAE4D8]/5 text-[#EAE4D8] font-sans font-medium text-xs tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-[#B99A5B] min-h-[44px]"
              >
                <span>Meet The Four Cousins</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#B99A5B]" />
              </Link>
            </div>
          </div>

          {/* Authentic Emblem & Archival Plate Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md p-5 sm:p-8 rounded-xl bg-gradient-to-b from-[#111815] to-[#0D1411] border border-[#EAE4D8]/10 shadow-2xl">
              {/* Corner Editorial Brass Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B99A5B]/40" aria-hidden="true" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B99A5B]/40" aria-hidden="true" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B99A5B]/40" aria-hidden="true" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B99A5B]/40" aria-hidden="true" />

              {/* Master Brand Emblem */}
              <div className="relative py-3 sm:py-4 flex justify-center">
                <img
                  src="/assets/brand/apl-logo.png"
                  alt={
                    isSeason1
                      ? 'APL — Ashes Premier League: Season 1 The Legends Legacy Official Emblem'
                      : 'APL — Ashes Premier League: Season 2 The Legends Legacy Official Emblem'
                  }
                  className="max-h-48 sm:max-h-72 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Archival Ledger Strip */}
              <div className="mt-3 pt-3 sm:mt-4 sm:pt-4 border-t border-[#EAE4D8]/10 grid grid-cols-3 gap-2 text-center font-mono">
                <div>
                  <span className="block text-xs font-bold text-[#EAE4D8]">15</span>
                  <span className="text-[10px] text-[#87968B] uppercase">Matches</span>
                </div>
                <div className="border-x border-[#EAE4D8]/10">
                  <span className="block text-xs font-bold text-[#B99A5B]">
                    {isSeason1 ? '5,945' : '5,681'}
                  </span>
                  <span className="text-[10px] text-[#87968B] uppercase">Batter Runs</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#EAE4D8]">
                    {isSeason1 ? '101' : '117'}
                  </span>
                  <span className="text-[10px] text-[#87968B] uppercase">Wickets</span>
                </div>
              </div>

              <div className="mt-2.5 sm:mt-3 text-center">
                <span className="inline-block text-[9px] sm:text-[10px] font-mono tracking-widest text-[#87968B] uppercase">
                  {isSeason1
                    ? 'Permanent Archive • Verified 2024'
                    : 'Permanent Archive • Verified 2025'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
