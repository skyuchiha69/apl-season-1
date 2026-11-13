import React from 'react';
import { Zap, Award, Info, Calendar } from 'lucide-react';

export const TheCenturyClub: React.FC = () => {
  const centuries = [
    {
      id: 'jay-146',
      score: 146,
      playerName: 'Jay',
      teamId: 'knights',
      teamName: 'KNIGHTS',
      teamColor: '#F8FAFC',
      stage: 'Match #3 • League Stage',
      opponent: 'vs Skyshot',
      isRecord: true,
      recordLabel: 'All-Time Tournament High Score',
      ballsFacedNote: 'Balls faced unrecorded in surviving league log',
      description:
        'The single most explosive individual batting exhibition in APL history. Jay unleashed a monumental 146 runs against regular-season pacesetters Skyshot in Match 3, propelling Knights to an all-time tournament record team score of 291.',
    },
    {
      id: 'stark-112',
      score: 112,
      playerName: 'T. Stark',
      teamId: 'champions',
      teamName: 'CHAMPIONS',
      teamColor: '#FF2E4D',
      stage: 'APL Season 1 League Stage',
      opponent: '',
      isRecord: false,
      recordLabel: 'League Century',
      ballsFacedNote: 'Balls faced unrecorded in surviving league log',
      description:
        'Champions’ premier batsman struck an authoritative 112 runs during APL Season 1 league play, setting a high standard for Champions’ batting lineup and registering one of the six centuries of the tournament.',
    },
    {
      id: 'red-110',
      score: 110,
      playerName: 'Red',
      teamId: 'authors',
      teamName: 'AUTHORS',
      teamColor: '#00E676',
      stage: 'APL Season 1 League Stage',
      opponent: '',
      isRecord: false,
      recordLabel: 'Wicketkeeper Century',
      ballsFacedNote: 'Balls faced unrecorded in surviving league log',
      description:
        'Authors’ wicketkeeper-batsman delivered a masterclass during APL Season 1 league play, striking an authoritative 110 runs to anchor Authors’ batting order in the championship campaign.',
    },
    {
      id: 'king-108',
      score: 108,
      playerName: 'A. King',
      teamId: 'authors',
      teamName: 'AUTHORS',
      teamColor: '#00E676',
      stage: 'Match #15 • Grand Final',
      opponent: 'vs Champions',
      isRecord: true,
      recordLabel: 'Grand Final Match-Winning Century',
      ballsFacedNote: 'Verified: 108 runs from 54 balls faced',
      description:
        'The crowning innings of APL Season 1. Chasing a formidable target of 226 in the Grand Final, King stroked a majestic 108 from 54 deliveries to orchestrate Authors’ historic 226-run chase and claim the championship.',
    },
    {
      id: 'rogers-105',
      score: 105,
      playerName: 'Rogers',
      teamId: 'champions',
      teamName: 'CHAMPIONS',
      teamColor: '#FF2E4D',
      stage: 'APL Season 1 League Stage',
      opponent: '',
      isRecord: false,
      recordLabel: 'League Century',
      ballsFacedNote: 'Balls faced unrecorded in surviving league log',
      description:
        'Champions’ middle-order stroke-maker crafted a brilliant 105 runs during APL Season 1 league play, powering Champions to another imposing batting performance in the tournament.',
    },
    {
      id: 'king-105',
      score: 105,
      playerName: 'A. King',
      teamId: 'authors',
      teamName: 'AUTHORS',
      teamColor: '#00E676',
      stage: 'APL Season 1 League Stage',
      opponent: '',
      isRecord: false,
      recordLabel: 'Tournament Dual-Century Record',
      ballsFacedNote: 'Balls faced unrecorded in surviving league log',
      description:
        'Confirming his status as the premier batsman of Season 1, King produced a magnificent 105 runs in league play, making him the sole player in APL history with multiple centuries alongside his Grand Final 108.',
    },
  ];

  return (
    <section id="century-club" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 text-[#B99A5B]" />
            <span>The Hundred Club • 6 Historic Centuries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            THE CENTURY CLUB
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            Across 15 fiercely contested matches in APL Season 1, reaching three figures was an extraordinary feat achieved
            by only five batsmen. Exactly six centuries are preserved in the permanent league archive.
          </p>
        </div>

        {/* 6 Century Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {centuries.map((c) => (
            <div
              key={c.id}
              className={`rounded-xl p-6 bg-[#0E1626]/75 border ${
                c.isRecord ? 'border-amber-500/40' : 'border-[#EAE4D8]/10'
              } hover:border-[#B99A5B]/40 transition-all shadow-lg flex flex-col justify-between`}
            >
              <div>
                {/* Header Strip with Score & Badge */}
                <div className="flex items-start justify-between gap-2 border-b border-[#EAE4D8]/10 pb-4 mb-4">
                  <div>
                    <div className="text-4xl sm:text-5xl font-display font-black text-amber-400 tracking-tight leading-none">
                      {c.score}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#87968B] block mt-1">
                      Runs Scored
                    </span>
                  </div>
                  <div className="text-right">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-1"
                      style={{
                        backgroundColor: `${c.teamColor}15`,
                        color: c.teamColor,
                        border: `1px solid ${c.teamColor}30`,
                      }}
                    >
                      {c.teamName}
                    </span>
                    {c.opponent ? (
                      <div className="text-xs font-mono text-[#EAE4D8]">{c.opponent}</div>
                    ) : null}
                  </div>
                </div>

                {/* Player Name & Stage */}
                <div className="mb-3">
                  <h3 className="text-xl font-display font-black text-[#EAE4D8]">
                    {c.playerName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#87968B] mt-0.5">
                    <Calendar className="w-3 h-3 text-[#B99A5B]" />
                    <span>{c.stage}</span>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-xs text-[#A69F92] leading-relaxed font-sans mb-4">
                  {c.description}
                </p>
              </div>

              {/* Balls Faced & Record Footnote */}
              <div className="pt-3 border-t border-[#EAE4D8]/10 text-[11px] font-mono text-[#87968B] flex items-center justify-between">
                <span>{c.ballsFacedNote}</span>
                <span className={`${c.isRecord ? 'text-amber-400 font-bold' : 'text-[#87968B]'} flex items-center gap-1`}>
                  <Award className="w-3 h-3" /> {c.recordLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Integrity Note */}
        <div className="p-4 rounded-lg bg-[#090C0B]/60 border border-[#EAE4D8]/10 flex items-start gap-3 text-xs font-sans text-[#87968B] leading-relaxed">
          <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#EAE4D8] font-mono uppercase tracking-wider block mb-0.5">
              Balls Faced Archival Protocol
            </strong>
            Balls faced were preserved in official scorecards exclusively for the Grand Final (A. King: 108 runs from 54 balls). For regular-season league centuries (Jay, T. Stark, Red, Rogers, and King’s league hundred), only the official runs total survives in the tournament PDF ledger. In accordance with archival accuracy standards, strike rates and balls faced are not fabricated.
          </div>
        </div>
      </div>
    </section>
  );
};
