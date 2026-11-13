import React from 'react';
import { Flame, Target, Info, Sparkles } from 'lucide-react';

export const CaptainsOfGlory: React.FC = () => {
  return (
    <section id="golden-caps" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B99A5B]" />
            <span>Individual Major Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            THE GOLDEN CAPS OF SEASON 1
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            The two supreme individual performance honors of the inaugural tournament. Across eight matches from the
            opening day through the championship decider, these two titans set the statistical benchmark of APL Season 1.
          </p>
        </div>

        {/* Two Monumental Golden Cap Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* ORANGE CAP: A. KING */}
          <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-[#1C1309] via-[#120F0B] to-[#090C0B] border border-amber-500/40 shadow-2xl relative overflow-hidden">
            {/* Top Cap Ribbon */}
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Orange Cap Winner • Most Runs</span>
              </div>
              <span className="text-xs font-mono text-[#87968B]">Official Season 1 Honor</span>
            </div>

            {/* Giant Stat Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end mb-6">
              <div className="sm:col-span-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#87968B] mb-1">
                  Tournament Aggregate Runs
                </div>
                <div className="text-5xl sm:text-6xl font-display font-black text-amber-400 tracking-tight leading-none">
                  527
                </div>
                <h3 className="text-2xl font-display font-black text-[#EAE4D8] mt-2">
                  A. King
                </h3>
                <div className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                  AUTHORS • Top-Order Batsman
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#090C0B]/60 border border-amber-500/20 text-right">
                <div className="text-[10px] font-mono text-[#87968B] uppercase">Matches Contested</div>
                <div className="text-xl font-bold font-mono text-[#EAE4D8]">8 Matches</div>
                <div className="text-[10px] font-mono text-amber-400 mt-1">2 Hundreds • 3 Fifties</div>
              </div>
            </div>

            {/* Editorial Narrative */}
            <p className="text-sm text-[#A69F92] leading-relaxed font-sans mb-6">
              A. King produced the most dominant run-scoring campaign in APL history. Amassing 527 runs across eight matches,
              King surpassed all tournament peers with three half-centuries and two magnificent centuries: 105 in league play
              and a match-defining 108 off 54 balls in the Grand Final to anchor Authors’ historic 226 chase.
            </p>

            {/* Innings Sequence Visual */}
            <div className="p-4 rounded-xl bg-[#090C0B]/50 border border-[#EAE4D8]/10 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#87968B] mb-2">
                <span>Recorded Innings Sequence (8 Matches):</span>
                <span className="text-amber-400 font-bold">HS: 108</span>
              </div>
              <div className="grid grid-cols-8 gap-1.5 text-center font-mono text-xs">
                {[
                  { r: 94, t: '50' },
                  { r: 81, t: '50' },
                  { r: 71, t: '50' },
                  { r: 40, t: '' },
                  { r: 3, t: '' },
                  { r: 25, t: '' },
                  { r: 105, t: '100' },
                  { r: 108, t: '100' },
                ].map((inn, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      inn.t === '100'
                        ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold'
                        : inn.t === '50'
                        ? 'bg-[#14201A] border border-emerald-500/30 text-emerald-300 font-semibold'
                        : 'bg-[#0E1626]/60 border border-[#EAE4D8]/10 text-[#EAE4D8]'
                    }`}
                  >
                    <div className="text-[9px] text-[#87968B] block">M{idx + 1}</div>
                    <div className="text-xs mt-0.5">{inn.r}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-2 text-[10px] font-mono text-[#87968B]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-amber-500/40 border border-amber-500"></span> Century (100+)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-emerald-500/30 border border-emerald-500"></span> Fifty (50+)
                </span>
              </div>
            </div>

            {/* Archival Milestone Note */}
            <div className="pt-4 border-t border-amber-500/20 text-xs font-mono text-[#87968B] flex items-center justify-between">
              <span>Grand Final Decider: 108 (54 balls)</span>
              <span className="text-amber-400 font-bold">527 Tournament Total</span>
            </div>
          </div>

          {/* PURPLE CAP: N. SKY */}
          <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-[#120B1C] via-[#0D0A14] to-[#090C0B] border border-purple-500/40 shadow-2xl relative overflow-hidden">
            {/* Top Cap Ribbon */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Target className="w-3.5 h-3.5 text-purple-400" />
                <span>Purple Cap Winner • Most Wickets</span>
              </div>
              <span className="text-xs font-mono text-[#87968B]">Official Season 1 Honor</span>
            </div>

            {/* Giant Stat Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end mb-6">
              <div className="sm:col-span-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#87968B] mb-1">
                  Tournament Total Wickets
                </div>
                <div className="text-5xl sm:text-6xl font-display font-black text-purple-400 tracking-tight leading-none">
                  12
                </div>
                <h3 className="text-2xl font-display font-black text-[#EAE4D8] mt-2">
                  N. Sky
                </h3>
                <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                  SKYSHOT • All-Rounder / Strike Bowler
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#090C0B]/60 border border-purple-500/20 text-right">
                <div className="text-[10px] font-mono text-[#87968B] uppercase">Matches Contested</div>
                <div className="text-xl font-bold font-mono text-[#EAE4D8]">8 Matches</div>
                <div className="text-[10px] font-mono text-purple-400 mt-1">Two 4-Wicket Hauls</div>
              </div>
            </div>

            {/* Editorial Narrative */}
            <p className="text-sm text-[#A69F92] leading-relaxed font-sans mb-6">
              Representing the bowling persona of cousin owner Shubham, N. Sky dominated the tournament wickets ledger
              from wire to wire. Capturing 12 wickets across eight appearances, Sky recorded two separate four-wicket hauls
              to power Skyshot to the top of the regular-season table and secure the definitive Season 1 Purple Cap.
            </p>

            {/* Wickets Sequence Visual */}
            <div className="p-4 rounded-xl bg-[#090C0B]/50 border border-[#EAE4D8]/10 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#87968B] mb-2">
                <span>Recorded Wickets Sequence (8 Matches):</span>
                <span className="text-purple-400 font-bold">Best Match Bowling: 4/x</span>
              </div>
              <div className="grid grid-cols-8 gap-1.5 text-center font-mono text-xs">
                {[
                  { w: 1, t: '' },
                  { w: 0, t: '' },
                  { w: 4, t: '4w' },
                  { w: 1, t: '' },
                  { w: 4, t: '4w' },
                  { w: 0, t: '' },
                  { w: 1, t: '' },
                  { w: 1, t: '' },
                ].map((inn, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      inn.t === '4w'
                        ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300 font-bold'
                        : inn.w > 0
                        ? 'bg-[#14201A] border border-cyan-500/30 text-cyan-300 font-semibold'
                        : 'bg-[#0E1626]/60 border border-[#EAE4D8]/10 text-[#87968B]'
                    }`}
                  >
                    <div className="text-[9px] text-[#87968B] block">M{idx + 1}</div>
                    <div className="text-xs mt-0.5">{inn.w}w</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-2 text-[10px] font-mono text-[#87968B]">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-purple-500/30 border border-purple-500"></span> 4-Wicket Haul (4w)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-cyan-500/30 border border-cyan-500"></span> Wicket Taken
                </span>
              </div>
            </div>

            {/* Archival Milestone Note */}
            <div className="pt-4 border-t border-purple-500/20 text-xs font-mono text-[#87968B] flex items-center justify-between">
              <span>Multiple 4-Wicket Hauls (Achieved Twice)</span>
              <span className="text-purple-400 font-bold">12 Tournament Wickets</span>
            </div>
          </div>
        </div>

        {/* Archival Integrity Protocol Disclosure */}
        <div className="p-4 rounded-lg bg-[#090C0B]/60 border border-[#EAE4D8]/10 flex items-start gap-3 text-xs font-sans text-[#87968B] leading-relaxed">
          <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#EAE4D8] font-mono uppercase tracking-wider block mb-0.5">
              Archival Integrity Protocol • Official Statistical Cap Honors
            </strong>
            The Orange Cap (527 runs by A. King) and Purple Cap (12 wickets by N. Sky) represent the documented Golden Cap honors preserved in the APL Season 1 archive. The archive records no unofficial overall series player award, and A. King’s 108 in the final is documented as a featured batting milestone rather than a formal post-match Player of the Match trophy.
          </div>
        </div>
      </div>
    </section>
  );
};
