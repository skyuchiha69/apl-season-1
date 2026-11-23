import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Trophy, CheckCircle, ArrowRight } from 'lucide-react';

export const PlayoffBracket: React.FC = () => {
  const { seasonData, activeSeasonId } = useSeason();
  const isSeason1 = activeSeasonId === 'season-1';
  const sf1 = seasonData.matches.find((m) => m.stage === 'SEMI_FINAL_1');
  const finalMatch = seasonData.matches.find((m) => m.stage === 'FINAL');

  return (
    <section
      id="playoff-bracket"
      aria-labelledby="playoff-heading"
      className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Trophy className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>Championship Knockout Pathway</span>
            </div>
            <h2
              id="playoff-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              The Playoff Bracket
            </h2>
          </div>
          <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
            {isSeason1
              ? 'Semi-Final progression and the championship decider.'
              : 'Qualifier, semi-final knockout, and championship decider.'}
          </p>
        </div>

        {/* Visual Playoff Progression Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: Preliminary Playoff Rounds (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-[#87968B] uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#B99A5B]" />
              <span>
                {isSeason1
                  ? 'Semi-Final Round (Matches 13 & 14)'
                  : 'Playoff Knockout Rounds (Matches 13 & 14)'}
              </span>
            </div>

            {/* Match 13 */}
            {isSeason1 ? (
              <div className="rounded-xl p-5 bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20 transition-all space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B99A5B] font-bold">Match 13 • Semi-Final 1</span>
                  <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                    CHAMPIONS WON BY 10 RUNS
                  </span>
                </div>

                <div className="space-y-2 pt-1 border-t border-[#EAE4D8]/5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#EAE4D8]">CHAMPIONS</span>
                    <span className="font-mono font-bold text-rose-400 text-sm">225</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#87968B]">SKYSHOT</span>
                    <span className="font-mono font-bold text-[#87968B] text-sm">215/5 (20.0 ov)</span>
                  </div>
                </div>

                <p className="text-xs text-[#A69F92] font-sans pt-2 border-t border-[#EAE4D8]/5 leading-relaxed">
                  {sf1?.tossInfo ?? 'CHAMPIONS won the toss and elected to BAT'}. Champions defended 225 behind
                  tight death bowling despite Lelouch (56 off 35) and Shamrock (71 off 30) launching a valiant chase.
                </p>
              </div>
            ) : (
              <div className="rounded-xl p-5 bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20 transition-all space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B99A5B] font-bold">Match 13 • Qualifier</span>
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                    SKYSHOT QUALIFIED FOR FINAL
                  </span>
                </div>

                <div className="space-y-2 pt-1 border-t border-[#EAE4D8]/5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#EAE4D8]">SKYSHOT</span>
                    <span className="font-mono font-bold text-cyan-400 text-xs uppercase">Winner • To Final</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#87968B]">CHAMPIONS</span>
                    <span className="font-mono text-xs text-[#87968B]">To Semi-Final</span>
                  </div>
                </div>

                <p className="text-xs text-[#A69F92] font-sans pt-2 border-t border-[#EAE4D8]/5 leading-relaxed">
                  Regular-season runners-up Skyshot defeated table-toppers Champions in the playoff qualifier to secure direct passage to the Grand Final.
                  <em> (Official innings score unrecorded in surviving archives).</em>
                </p>
              </div>
            )}

            {/* Match 14 */}
            {isSeason1 ? (
              <div className="rounded-xl p-5 bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20 transition-all space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B99A5B] font-bold">Match 14 • Semi-Final 2</span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                    AUTHORS QUALIFIED FOR FINAL
                  </span>
                </div>

                <div className="space-y-2 pt-1 border-t border-[#EAE4D8]/5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#EAE4D8]">AUTHORS</span>
                    <span className="font-mono font-bold text-emerald-400 text-xs uppercase">Winner</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#87968B]">SKYSHOT</span>
                    <span className="font-mono text-xs text-[#87968B]">Eliminated</span>
                  </div>
                </div>

                <p className="text-xs text-[#A69F92] font-sans pt-2 border-t border-[#EAE4D8]/5 leading-relaxed">
                  Authors defeated regular season toppers Skyshot to clinch their place in the Grand Final.
                  <em> (Detailed innings scorecard was unrecorded in archival documents).</em>
                </p>
              </div>
            ) : (
              <div className="rounded-xl p-5 bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20 transition-all space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B99A5B] font-bold">Match 14 • Semi-Final</span>
                  <span className="bg-slate-400/20 text-slate-200 border border-slate-400/30 px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                    KNIGHTS QUALIFIED FOR FINAL
                  </span>
                </div>

                <div className="space-y-2 pt-1 border-t border-[#EAE4D8]/5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#EAE4D8]">KNIGHTS</span>
                    <span className="font-mono font-bold text-slate-300 text-xs uppercase">Winner • To Final</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-base text-[#87968B]">CHAMPIONS</span>
                    <span className="font-mono text-xs text-[#87968B]">Eliminated</span>
                  </div>
                </div>

                <p className="text-xs text-[#A69F92] font-sans pt-2 border-t border-[#EAE4D8]/5 leading-relaxed">
                  Knights defeated Champions in the semi-final eliminator to clinch the second Grand Final berth, ending Champions’ campaign.
                  <em> (Official innings score unrecorded in surviving archives).</em>
                </p>
              </div>
            )}
          </div>

          {/* Column 2: Grand Final Climax (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="text-xs font-mono text-[#87968B] uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Championship Grand Final (Match 15)</span>
            </div>

            {isSeason1 ? (
              <div className="rounded-xl p-6 sm:p-7 bg-gradient-to-b from-[#131D18] to-[#0D1511] border-2 border-emerald-500/40 shadow-2xl space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-emerald-300 font-bold tracking-widest uppercase">
                      Match 15 • Grand Final
                    </span>
                    <span className="bg-emerald-500 text-black font-mono font-bold px-2 py-0.5 rounded uppercase text-[10px]">
                      Champions
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-lg bg-[#0E1713]/80 border border-emerald-500/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                            Championship Winner
                          </span>
                          <h3 className="font-display font-black text-2xl text-[#EAE4D8] tracking-wide">
                            AUTHORS
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-3xl font-black text-emerald-400">
                            {finalMatch?.secondInnings?.runs ?? 226}/{finalMatch?.secondInnings?.wickets ?? 7}
                          </div>
                          <span className="font-mono text-[10px] text-emerald-300 block">
                            {finalMatch?.secondInnings?.overs ?? 19.2} OVERS
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0E1713]/50 border border-[#EAE4D8]/8">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#87968B] uppercase tracking-wider block">
                            Runners-Up
                          </span>
                          <h4 className="font-display font-black text-xl text-[#A69F92] tracking-wide">
                            CHAMPIONS
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-2xl font-black text-rose-400/90">
                            {finalMatch?.firstInnings?.runs ?? 225}/{finalMatch?.firstInnings?.wickets ?? 8}
                          </div>
                          <span className="font-mono text-[10px] text-[#87968B] block">
                            {finalMatch?.firstInnings?.overs ?? 20.0} OVERS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-emerald-500/20">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold">AUTHORS WON BY 3 WICKETS (4 BALLS REMAINING)</span>
                  </div>
                  <p className="text-xs text-[#A69F92] font-sans leading-relaxed">
                    Anchored by A. King's heroic 108 (54), Authors successfully chased down 226 in 19.2 overs,
                    making cricket history in the highest run chase ever staged in the APL.
                  </p>
                  <div>
                    <a
                      href="#final-scorecard"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#B99A5B] hover:text-[#D4BA7E] uppercase tracking-wider font-semibold"
                    >
                      <span>View Comprehensive Final Scorecard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl p-6 sm:p-7 bg-gradient-to-b from-[#101E22] to-[#0A1316] border-2 border-cyan-500/40 shadow-2xl space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-cyan-300 font-bold tracking-widest uppercase">
                      Match 15 • Grand Final
                    </span>
                    <span className="bg-cyan-400 text-black font-mono font-bold px-2 py-0.5 rounded uppercase text-[10px]">
                      Champions
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-lg bg-[#0E1713]/80 border border-cyan-500/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                            Championship Winner
                          </span>
                          <h3 className="font-display font-black text-2xl text-[#EAE4D8] tracking-wide">
                            SKYSHOT
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono font-bold text-xs uppercase">
                            Won Grand Final
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0E1713]/50 border border-[#EAE4D8]/8">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#87968B] uppercase tracking-wider block">
                            Runners-Up
                          </span>
                          <h4 className="font-display font-black text-xl text-[#A69F92] tracking-wide">
                            KNIGHTS
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="px-2.5 py-1 rounded bg-slate-500/20 text-slate-300 border border-slate-500/30 font-mono text-xs uppercase">
                            Finalist
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-cyan-500/20">
                  <div className="flex items-center space-x-2 text-xs font-mono text-cyan-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-bold">SKYSHOT WON • APL SEASON 2 CHAMPIONS</span>
                  </div>
                  <p className="text-xs text-[#A69F92] font-sans leading-relaxed">
                    Skyshot defeated Knights in Match 15 to capture their maiden Ashes Premier League championship title,
                    concluding an outstanding 15-match season.
                  </p>
                  <div>
                    <a
                      href="#final-scorecard"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#B99A5B] hover:text-[#D4BA7E] uppercase tracking-wider font-semibold"
                    >
                      <span>View Grand Final Outcome &amp; Disclosure</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
