import React from 'react';
import { Container } from '../../../components/layout/Container';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

export const LegacySection: React.FC = () => {
  return (
    <section
      id="legacy"
      aria-labelledby="legacy-heading"
      className="py-10 sm:py-16 md:py-24 bg-[#090C0B] border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#B99A5B] uppercase font-semibold">
              <Heart className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>The Origin &amp; Heritage</span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h2
                id="legacy-heading"
                className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#EAE4D8] uppercase font-display leading-[0.95] tracking-tight"
              >
                It Was Never Just A Game.
              </h2>
              <p className="font-mono text-[10px] sm:text-xs sm:text-sm text-[#87968B] uppercase tracking-wider">
                Four Cousins • Four Franchises • One Living Room Championship
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-[#A69F92] font-sans leading-relaxed">
              <p>
                What began as late-night PC cricket matches between four cousins—
                <strong className="text-cyan-400 font-semibold">Shubham</strong>,{' '}
                <strong className="text-slate-200 font-semibold">Jay</strong>,{' '}
                <strong className="text-emerald-400 font-semibold">Dharm</strong>, and{' '}
                <strong className="text-rose-400 font-semibold">Umang</strong>—transformed into a full
                championship tournament: the <strong>Ashes Premier League (APL)</strong>.
              </p>
              <p>
                Each cousin took command of a franchise, drafted their 11-player squad, appointed their team captain,
                and competed across 12 relentless double-round-robin fixtures.
                Every ball and boundary was contested over Google Meet screen shares, filled with tactical bowling changes,
                high-stakes banter, and unforgettable cousin rivalries.
              </p>
              <p>
                Season 1 culminated in one of the most remarkable finishes in digital cricket history: Authors
                chasing down 226 in 19.2 overs to seal the inaugural title by 3 wickets. This website preserves
                every run, every wicket, and every memory exactly as it unfolded.
              </p>
            </div>

            {/* Archival Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 rounded-lg bg-[#111815] border border-[#EAE4D8]/10 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#EAE4D8] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>15 Matches Contested</span>
                </div>
                <p className="text-[11px] font-sans text-[#87968B]">
                  12 League fixtures + 3 high-stakes Playoffs fully archived.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#111815] border border-[#EAE4D8]/10 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#EAE4D8] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#B99A5B]" />
                  <span>44 Total Players</span>
                </div>
                <p className="text-[11px] font-sans text-[#87968B]">
                  11 players per squad with complete individual scorecards.
                </p>
              </div>
            </div>
          </div>

          {/* Framed Authentic Celebration Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden bg-[#111815] border border-[#EAE4D8]/15 shadow-2xl p-2.5 sm:p-4 group">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B99A5B]/40" aria-hidden="true" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B99A5B]/40" aria-hidden="true" />

              <div className="relative rounded-lg overflow-hidden bg-black aspect-[16/8.5]">
                <img
                  src="/assets/gallery/celebration-victory.png"
                  alt="Authors batsmen raising bats in victory celebration after winning the APL Season 1 Championship Final"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#EAE4D8]">
                  <span className="bg-emerald-500/90 text-black px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                    Match 15: Grand Final
                  </span>
                  <span className="text-[#87968B]">Codemasters Broadcast</span>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-3.5 px-1 space-y-2">
                <p className="text-xs text-[#A69F92] font-sans leading-relaxed">
                  Authors batsmen raise their bats under stadium lights following the winning runs in the
                  Championship Final against Champions.
                </p>
                <div className="pt-2 border-t border-[#EAE4D8]/10 flex items-center justify-between text-[11px] font-mono text-[#87968B]">
                  <span className="flex items-center gap-1 text-[#B99A5B]">
                    <Award className="w-3.5 h-3.5" /> Authentic In-Game Capture
                  </span>
                  <span>Season 1 Archive</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
