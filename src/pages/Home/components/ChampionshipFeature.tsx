import React from 'react';
import { Container } from '../../../components/layout/Container';
import { Trophy, CheckCircle, Clock, Info, Shield } from 'lucide-react';
import { useSeasonOptional } from '../../../app/providers/SeasonProvider';

export const ChampionshipFeature: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason1 = activeSeasonId === 'season-1';

  if (!isSeason1) {
    return (
      <section
        id="championship-feature"
        aria-labelledby="championship-heading"
        className="py-10 sm:py-16 md:py-24 bg-[#090C0B] border-b border-[#EAE4D8]/10 relative overflow-hidden"
      >
        {/* Subtle deep cyan background wash for Skyshot's championship aura */}
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-950/15 blur-[180px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Editorial Section Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#EAE4D8]/10 pb-4 sm:pb-6 mb-8 sm:mb-12 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#B99A5B] uppercase font-semibold">
                <Trophy className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
                <span>The Defining Climax • Season 2 Championship Final</span>
              </div>
              <h2
                id="championship-heading"
                className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#EAE4D8] uppercase font-display leading-[0.95] tracking-tight"
              >
                Skyshot&apos;s Coronation.
              </h2>
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-[#87968B] uppercase tracking-wider text-left sm:text-right">
              <span>Match 15 • Grand Final</span>
              <span className="block text-[#EAE4D8] font-bold">Official Championship Decider</span>
            </div>
          </div>

          {/* The Official Match Summary Cardboard Spread */}
          <div className="rounded-xl bg-[#111815] border border-[#EAE4D8]/12 overflow-hidden shadow-2xl mb-8 sm:mb-12">
            {/* Top Live Broadcast Header Strip */}
            <div className="bg-[#141E1A] px-4 sm:px-6 py-3 sm:py-4 border-b border-[#EAE4D8]/10 flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
              <div className="flex items-center space-x-2.5 text-[#EAE4D8]">
                <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] sm:text-[11px] shrink-0">
                  Official Result
                </span>
                <span className="font-semibold text-xs sm:text-sm">SKYSHOT WON • CHAMPIONS</span>
                <span className="text-[#87968B] hidden md:inline">• Grand Final Victory</span>
              </div>
              <div className="text-[#87968B] flex items-center space-x-1.5 text-[11px]">
                <Clock className="w-3 h-3 text-[#B99A5B] shrink-0" />
                <span>Season 2 Decider • Playoff Final</span>
              </div>
            </div>

            {/* Teams Comparison Board */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#EAE4D8]/10 p-4 sm:p-6 lg:p-8">
              {/* Grand Finalists: KNIGHTS */}
              <div className="space-y-4 pb-5 md:pb-0 md:pr-8">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block">
                      Grand Finalists • Runners-Up
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#EAE4D8] tracking-wide">
                      KNIGHTS
                    </h3>
                    <span className="text-[11px] sm:text-xs text-[#87968B] font-sans block">
                      Owner: Jay • Capt: Jay
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-2xl sm:text-3xl font-black text-slate-300 tracking-tight leading-none">
                      RUNNERS-UP
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-[#87968B] block mt-1">
                      MATCH 15 FINALIST
                    </span>
                  </div>
                </div>

                {/* Notable Performers & Milestones */}
                <div className="space-y-1.5 pt-2 border-t border-[#EAE4D8]/5 text-xs font-mono text-[#A69F92]">
                  <div className="flex justify-between">
                    <span className="text-[#EAE4D8]">Semi-Final Victory</span>
                    <span className="text-[#B99A5B] font-bold">Defeated Champions (M14)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#EAE4D8]">Pointer (Record HS)</span>
                    <span className="text-[#B99A5B]">161 Runs</span>
                  </div>
                  <div className="flex justify-between text-[#87968B]">
                    <span>Dharm (Best Spell)</span>
                    <span>4 Wickets</span>
                  </div>
                </div>
              </div>

              {/* Champions: SKYSHOT */}
              <div className="space-y-4 pt-5 md:pt-0 md:pl-8">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                        Grand Final Winners
                      </span>
                      <span className="bg-cyan-400 text-black text-[9px] font-bold px-1.5 py-0.2 rounded font-mono uppercase">
                        Champions
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#EAE4D8] tracking-wide">
                      SKYSHOT
                    </h3>
                    <span className="text-[11px] sm:text-xs text-[#87968B] font-sans block">
                      Owner: Shubham (Sky) • Capt: Shubham
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-2xl sm:text-3xl font-black text-cyan-400 tracking-tight leading-none">
                      CHAMPIONS
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-cyan-300 font-bold block mt-1">
                      TITLE WINNERS
                    </span>
                  </div>
                </div>

                {/* Notable Performers & Milestones */}
                <div className="space-y-1.5 pt-2 border-t border-[#EAE4D8]/5 text-xs font-mono text-[#A69F92]">
                  <div className="flex justify-between">
                    <span className="text-cyan-300 font-bold">Playoff Sweep</span>
                    <span className="text-cyan-300 font-bold">Qualifier (M13) + Final (M15)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#EAE4D8]">Figarland (3 Centuries)</span>
                    <span className="text-[#B99A5B] font-bold">102, 118, 102 (433 Runs)</span>
                  </div>
                  <div className="flex justify-between text-[#87968B]">
                    <span>Shubham (Campaign High)</span>
                    <span>114 Runs (304 Total)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Analysis & Archival Asset Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-[#A69F92] font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
              <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#EAE4D8] uppercase tracking-wide">
                A Commanding Championship Campaign
              </h4>
              <p>
                After finishing second in the regular season with 7 points (3W–2L–1T), Shubham&apos;s Skyshot
                engineered a flawless postseason sweep. Skyshot defeated table-toppers Champions in the
                Qualifier (Match 13) to punch their ticket straight to the Grand Final, where they dispatched
                Jay&apos;s Knights in Match 15 to capture their inaugural Ashes Premier League title.
              </p>
              <p>
                Skyshot&apos;s triumph was built on blistering batting firepower, led by <strong>Figarland&apos;s</strong>{' '}
                tournament-record three centuries and owner-captain <strong>Shubham&apos;s</strong> campaign-best 114.
                Anchored by <strong>Overton&apos;s</strong> 10 wickets, the Royal Blue franchise crowned their championship era.
              </p>

              {/* Archival Disclosure */}
              <div className="pt-1 sm:pt-2">
                <div className="p-3.5 rounded-lg bg-[#111815] border border-[#EAE4D8]/10 space-y-1">
                  <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#B99A5B]">
                    <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B99A5B] shrink-0" />
                    <span className="uppercase tracking-wider font-semibold">Archival Record Disclosure</span>
                  </div>
                  <p className="text-[11px] text-[#87968B] font-sans leading-relaxed">
                    Official detailed ball-by-ball scorecards and dismissal metrics for Match 15 were unrecorded in the surviving score sheets. Grand Final victory and championship laurels are verified from official tournament records.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Emblem & Honors Showcase Plate (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden bg-[#111815] border border-[#EAE4D8]/15 shadow-2xl p-4 sm:p-6 group relative">
                {/* Corner Brass Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B99A5B]/40" aria-hidden="true" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B99A5B]/40" aria-hidden="true" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B99A5B]/40" aria-hidden="true" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B99A5B]/40" aria-hidden="true" />

                <div className="relative rounded-lg overflow-hidden bg-black/60 p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <img
                    src="/assets/brand/apl-logo.png"
                    alt="Official APL Season 2 Master Brand Emblem celebrating Skyshot as Champions"
                    className="max-h-36 sm:max-h-44 w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                      APL Season 2 Champions
                    </span>
                    <h5 className="font-display text-xl sm:text-2xl font-black text-[#EAE4D8] uppercase tracking-wide">
                      SKYSHOT
                    </h5>
                    <p className="text-[11px] font-mono text-[#87968B] uppercase tracking-wider">
                      Franchise Owner &amp; Captain: Shubham
                    </p>
                  </div>
                </div>

                <div className="pt-3 px-1 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#87968B] border-t border-[#EAE4D8]/10 mt-3">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>MATCH 15 FINAL SUMMARY</span>
                  </span>
                  <span className="text-[#B99A5B] font-bold">INAUGURAL TITLE</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="championship-feature"
      aria-labelledby="championship-heading"
      className="py-10 sm:py-16 md:py-24 bg-[#090C0B] border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      {/* Subtle deep green background wash for championship aura */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-950/15 blur-[180px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Editorial Section Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#EAE4D8]/10 pb-4 sm:pb-6 mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#B99A5B] uppercase font-semibold">
              <Trophy className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>The Defining Climax • Season 1 Championship Final</span>
            </div>
            <h2
              id="championship-heading"
              className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#EAE4D8] uppercase font-display leading-[0.95] tracking-tight"
            >
              The 226 Chase.
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-[#87968B] uppercase tracking-wider text-left sm:text-right">
            <span>Match 15 • Grand Final</span>
            <span className="block text-[#EAE4D8] font-bold">Brisbane Exhibition • 9:45 PM</span>
          </div>
        </div>

        {/* The Official Match Summary Cardboard Spread */}
        <div className="rounded-xl bg-[#111815] border border-[#EAE4D8]/12 overflow-hidden shadow-2xl mb-8 sm:mb-12">
          {/* Top Live Broadcast Header Strip */}
          <div className="bg-[#141E1A] px-4 sm:px-6 py-3 sm:py-4 border-b border-[#EAE4D8]/10 flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
            <div className="flex items-center space-x-2.5 text-[#EAE4D8]">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] sm:text-[11px] shrink-0">
                Official Result
              </span>
              <span className="font-semibold text-xs sm:text-sm">AUTHORS WON BY 3 WICKETS</span>
              <span className="text-[#87968B] hidden md:inline">• 4 balls remaining</span>
            </div>
            <div className="text-[#87968B] flex items-center space-x-1.5 text-[11px]">
              <Clock className="w-3 h-3 text-[#B99A5B] shrink-0" />
              <span>Championship Decider • 20 Overs Per Side</span>
            </div>
          </div>

          {/* Innings Comparison Scoreboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#EAE4D8]/10 p-4 sm:p-6 lg:p-8">
            {/* 1st Innings: CHAMPIONS */}
            <div className="space-y-4 pb-5 md:pb-0 md:pr-8">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-rose-400 font-bold block">
                    1st Innings • Batting First
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#EAE4D8] tracking-wide">
                    CHAMPIONS
                  </h3>
                  <span className="text-[11px] sm:text-xs text-[#87968B] font-sans block">Owner: Umang (UB) • Capt: Stark</span>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-rose-400 tracking-tight leading-none">
                    225<span className="text-lg sm:text-2xl text-[#87968B]">/8</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#87968B] block mt-1">20.0 OVERS</span>
                </div>
              </div>

              {/* Notable Innings Performers */}
              <div className="space-y-1.5 pt-2 border-t border-[#EAE4D8]/5 text-xs font-mono text-[#A69F92]">
                <div className="flex justify-between">
                  <span className="text-[#EAE4D8]">S. Harvy</span>
                  <span className="text-[#B99A5B] font-bold">60 (33)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#EAE4D8]">T. Stark</span>
                  <span>40 (16)</span>
                </div>
                <div className="flex justify-between text-[#87968B]">
                  <span>S. Bumba (Authors)</span>
                  <span>2/32 (4.0)</span>
                </div>
              </div>
            </div>

            {/* 2nd Innings: AUTHORS (Champions) */}
            <div className="space-y-4 pt-5 md:pt-0 md:pl-8">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                      2nd Innings • Chasing 226
                    </span>
                    <span className="bg-emerald-400 text-black text-[9px] font-bold px-1.5 py-0.2 rounded font-mono uppercase">
                      Winners
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#EAE4D8] tracking-wide">
                    AUTHORS
                  </h3>
                  <span className="text-[11px] sm:text-xs text-[#87968B] font-sans block">Owner: Dharm • Capt: King</span>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400 tracking-tight leading-none">
                    226<span className="text-lg sm:text-2xl text-[#87968B]">/7</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-emerald-300 font-bold block mt-1">19.2 OVERS</span>
                </div>
              </div>

              {/* Notable Innings Performers */}
              <div className="space-y-1.5 pt-2 border-t border-[#EAE4D8]/5 text-xs font-mono text-[#A69F92]">
                <div className="flex justify-between">
                  <span className="text-emerald-300 font-bold">A. King (Match MVP)</span>
                  <span className="text-emerald-300 font-bold">108 (54) [100]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#EAE4D8]">C. Cross</span>
                  <span className="text-[#B99A5B] font-bold">46 (23)</span>
                </div>
                <div className="flex justify-between text-[#87968B]">
                  <span>S. Parker (Champions)</span>
                  <span>2/30 (4.0)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Analysis & Authentic Broadcast Asset Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-[#A69F92] font-sans text-xs sm:text-sm lg:text-base leading-relaxed">
            <h4 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#EAE4D8] uppercase tracking-wide">
              The Century That Decided A League
            </h4>
            <p>
              Requiring 226 at over 11.3 runs per over against a ruthless Champions bowling lineup, Authors
              staged the highest successful run chase in APL history. 
            </p>
            <p>
              The chase was anchored by a masterclass from <strong>A. King</strong>, who struck 108 runs from 
              just 54 deliveries. Supported by <strong>C. Cross’s</strong> blistering 46 from 23 balls, Dharm’s 
              franchise kept their nerve even as wickets fell in the final overs, striking the winning runs with 
              four deliveries to spare.
            </p>
            
            <div className="pt-1 sm:pt-2">
              <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-[#B99A5B]">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B99A5B] shrink-0" />
                <span className="uppercase tracking-wider">Archival In-Game Broadcast Screenshot Preserved</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Broadcast Capture (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden bg-[#111815] border border-[#EAE4D8]/15 shadow-2xl p-2.5 sm:p-4 group">
              <div className="relative rounded-lg overflow-hidden bg-black aspect-[16/9]">
                <img
                  src="/assets/matches/final-scorecard-original.png"
                  alt="Official APL Season 1 Final Match Summary Scorecard showing Authors defeating Champions"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#EAE4D8]">
                  <span className="bg-emerald-500/90 text-black px-1.5 sm:px-2 py-0.5 rounded font-bold uppercase text-[9px] sm:text-[10px]">
                    Authentic Broadcast Screen
                  </span>
                  <span className="text-[#A69F92]">Final Scorecard Asset</span>
                </div>
              </div>
              <div className="pt-2.5 sm:pt-3 px-1 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#87968B]">
                <span>MATCH 15 FINAL SUMMARY</span>
                <span className="text-[#B99A5B]">APL RECORD CHASE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
