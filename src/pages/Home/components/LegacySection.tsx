import React from 'react';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../../../components/layout/Container';

export const LegacySection: React.FC = () => {
  return (
    <section
      id="legacy"
      aria-labelledby="legacy-heading"
      className="relative py-20 md:py-28 bg-[#0B0D14] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs font-bold tracking-widest uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Origin &amp; Heritage</span>
            </div>

            <div className="space-y-3">
              <h2
                id="legacy-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display leading-[1.1]"
              >
                It Was Never Just A Game.
              </h2>
              <p className="text-amber-400 font-display text-sm sm:text-base font-bold tracking-wider uppercase">
                Four Cousins • Four Franchises • One Championship Trophy
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                What began as late-night PC cricket matches between four cousins—
                <strong className="text-blue-400 font-semibold">Shubham</strong>,{' '}
                <strong className="text-slate-200 font-semibold">Jay</strong>,{' '}
                <strong className="text-emerald-400 font-semibold">Dharm</strong>, and{' '}
                <strong className="text-rose-400 font-semibold">Umang</strong>—transformed into a full
                championship tournament: the <strong>Ashes Premier League (APL)</strong>.
              </p>
              <p>
                Each cousin took ownership of a franchise, selected an international icon as their
                captain identity, drafted their 11-player squad, and battled across 12 relentless
                league fixtures. Every match was contested via Google Meet screen shares, filled with
                tactical bowling changes, big-game tension, and unforgettable cousin rivalries.
              </p>
              <p>
                Season 1 culminated in one of the most remarkable finishes in league history: Authors
                successfully chasing down a monumental target of 226 in 19.2 overs to seal the
                inaugural title by 3 wickets. This website preserves every run, every wicket, and
                every memory exactly as it happened.
              </p>
            </div>

            {/* Verified Tournament Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">15 Matches Contested</span>
                  <span className="text-slate-400">12 League fixtures + 3 high-stakes Playoffs</span>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">44 Total Players</span>
                  <span className="text-slate-400">11 players per squad, fully documented</span>
                </div>
              </div>
            </div>
          </div>

          {/* Framed Authentic Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Golden Glow Border */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"
                aria-hidden="true"
              />

              {/* Framed Container */}
              <div className="relative stadium-card-gold rounded-xl p-3 sm:p-4 overflow-hidden">
                <div className="relative rounded-lg overflow-hidden bg-black/60 border border-white/10 aspect-[16/8.2]">
                  <img
                    src="/assets/gallery/celebration-victory.png"
                    alt="Authors batsmen raising bats in victory celebration after winning the APL Season 1 Championship Final"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle broadcast gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="bg-emerald-500/80 text-black font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                      Match 15: Final
                    </span>
                    <span className="text-slate-300 drop-shadow">Codemasters Broadcast</span>
                  </div>
                </div>

                {/* Photo Caption & Authenticity Badge */}
                <div className="pt-3.5 pb-1 px-1">
                  <p className="text-xs text-slate-300 font-medium leading-snug">
                    Authors batsmen raise their bats under stadium lights following the winning runs in
                    the Championship Final against Champions.
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2 font-mono">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Award className="w-3.5 h-3.5" /> Authentic In-Game Capture
                    </span>
                    <span>Season 1 Archive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
