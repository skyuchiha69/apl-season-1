import React from 'react';
import { Trophy, Shield, Info } from 'lucide-react';

export const ChampionshipLaurels: React.FC = () => {
  const laurels = [
    {
      id: 'authors',
      status: 'INAUGURAL CHAMPIONS',
      badge: 'APL Season 1 Title Holder',
      accentColor: '#00E676',
      bgGradient: 'from-[#0A1A12] via-[#09140E] to-[#090C0B]',
      borderColor: 'border-[#00E676]/30',
      teamName: 'AUTHORS',
      ownerName: 'Dharm',
      ownerNickname: 'Green',
      captainAvatar: 'Rohit Sharma',
      keyFeat: 'Chased 226/7 in 19.2 overs to win Grand Final by 3 wickets',
      narrative:
        'Guided by franchise founder and bowler Dharm, Authors navigated an even 3–3 regular season before peaking in the postseason. After eliminating table-toppers Skyshot in Semi-Final 2, Authors achieved the defining chase of Season 1—hunting down 226 against Champions with four deliveries remaining to claim the inaugural APL title.',
      metrics: [
        { label: 'Final Result', value: 'Won by 3 Wickets' },
        { label: 'Championship Chase', value: '226/7 (19.2 ov)' },
        { label: 'Regular Season', value: '3–3 (6 Pts, Tied 2nd)' },
        { label: 'Key Batter Knock', value: 'A. King 108 (54b)' },
      ],
    },
    {
      id: 'champions',
      status: 'RUNNERS-UP / FINALISTS',
      badge: 'Grand Finalist • Playoff Powerhouse',
      accentColor: '#FF2E4D',
      bgGradient: 'from-[#1A0A0E] via-[#14090C] to-[#090C0B]',
      borderColor: 'border-[#FF2E4D]/30',
      teamName: 'CHAMPIONS',
      ownerName: 'Umang',
      ownerNickname: 'UB',
      captainAvatar: 'MS Dhoni',
      keyFeat: 'Posted 225 runs in back-to-back playoff fixtures',
      narrative:
        'Tactically constructed by Umang, Champions established themselves as the tournament’s premier high-scoring machine. Champions posted 225 runs in both playoff matches: defending 225 by 10 runs in Semi-Final 1 to knock out regular-season leaders Skyshot, then posting 225/8 in a thrilling Grand Final.',
      metrics: [
        { label: 'Final Finish', value: 'Runners-Up' },
        { label: 'Semi-Final 1', value: 'Defended 225 (Won by 10 runs)' },
        { label: 'Grand Final Total', value: '225/8 (20.0 ov)' },
        { label: 'Regular Season', value: '3–3 (6 Pts, Tied 2nd)' },
      ],
    },
    {
      id: 'skyshot',
      status: 'LEAGUE STAGE TOPPERS',
      badge: '1st in League • Playoff Semi-Finalist',
      accentColor: '#00D2FF',
      bgGradient: 'from-[#0A161A] via-[#091014] to-[#090C0B]',
      borderColor: 'border-[#00D2FF]/30',
      teamName: 'SKYSHOT',
      ownerName: 'Shubham',
      ownerNickname: 'Sky',
      captainAvatar: 'Jos Buttler',
      keyFeat: 'Topped the 12-match regular season with 4 wins and 8 points',
      narrative:
        'Spearheaded by Shubham, Skyshot dominated the double-round-robin regular season, finishing clear at the summit of the league table with four victories. While their campaign concluded in the semi-finals, Skyshot set the gold standard of league consistency and secured the tournament Purple Cap via N. Sky.',
      metrics: [
        { label: 'League Finish', value: '1st Place (8 Pts)' },
        { label: 'League Record', value: '4 Wins – 2 Losses' },
        { label: 'Playoff Stage', value: 'Semi-Finalist' },
        { label: 'Season Purple Cap', value: 'N. Sky (12 Wickets)' },
      ],
    },
    {
      id: 'knights',
      status: 'ALL-TIME RECORD SETTERS',
      badge: 'Historic 291 Total & 146 High Score',
      accentColor: '#F8FAFC',
      bgGradient: 'from-[#141618] via-[#0E1012] to-[#090C0B]',
      borderColor: 'border-[#F8FAFC]/25',
      teamName: 'KNIGHTS',
      ownerName: 'Jay',
      ownerNickname: 'Red',
      captainAvatar: 'Shubman Gill',
      keyFeat: 'Highest individual score (146) and team total (291) in APL history',
      narrative:
        'Spearheaded by franchise owner and premier batsman Jay, Knights delivered the most electrifying individual batting masterclass of Season 1. In Match 3 against Skyshot, Jay smashed an all-time tournament record 146 runs, propelling Knights to an immortal 291 team score before concluding their campaign in the league stage.',
      metrics: [
        { label: 'Record Total', value: '291 (vs Skyshot, Match 3)' },
        { label: 'Record Individual', value: '146 (Jay, Match 3)' },
        { label: 'League Finish', value: '4th Place (2–4, 4 Pts)' },
        { label: 'Season Aggregate', value: 'Jay (245 Runs in 6 Matches)' },
      ],
    },
  ];

  return (
    <section id="championship-laurels" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Season Honors & Franchise Laurels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            THE FOUR PILLARS OF SEASON 1
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            Every franchise in APL Season 1 carved its permanent mark into the league chronicle. From Authors’ historic
            championship chase to Knights’ record-breaking scoring exhibition, these four franchises anchored the
            inaugural tournament.
          </p>
        </div>

        {/* Four Franchise Laurel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {laurels.map((l) => (
            <div
              key={l.id}
              className={`rounded-xl p-6 sm:p-7 bg-gradient-to-br ${l.bgGradient} border ${l.borderColor} shadow-xl relative overflow-hidden transition-all`}
            >
              {/* Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE4D8]/10 pb-4 mb-4">
                <div>
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase block"
                    style={{ color: l.accentColor }}
                  >
                    {l.status}
                  </span>
                  <h3 className="text-2xl font-display font-black text-[#EAE4D8] tracking-tight mt-0.5">
                    {l.teamName}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090C0B]/60 border border-[#EAE4D8]/10 text-[11px] font-mono text-[#EAE4D8]">
                    <Shield className="w-3 h-3 text-[#B99A5B]" />
                    <span>Owner: <strong>{l.ownerName}</strong> ({l.ownerNickname})</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#87968B] mt-1">
                    Honorary Captain Avatar: {l.captainAvatar}
                  </div>
                </div>
              </div>

              {/* Key Headline Feat */}
              <div className="p-3 rounded-lg bg-[#090C0B]/50 border border-[#EAE4D8]/10 mb-4 font-mono text-xs text-[#EAE4D8]">
                <strong className="text-[#B99A5B]">Historical Mark:</strong> {l.keyFeat}
              </div>

              {/* Editorial Narrative */}
              <p className="text-sm text-[#A69F92] leading-relaxed font-sans mb-5">
                {l.narrative}
              </p>

              {/* 4 Metric Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-[#EAE4D8]/10 text-xs font-mono">
                {l.metrics.map((m) => (
                  <div key={m.label} className="p-2.5 rounded bg-[#0E1626]/50 border border-[#EAE4D8]/5">
                    <span className="text-[#87968B] text-[10px] uppercase tracking-wider block">
                      {m.label}
                    </span>
                    <span className="text-[#EAE4D8] font-bold text-xs mt-0.5 block truncate">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Archival Identity Protocol Disclosure */}
        <div className="p-4 rounded-lg bg-[#090C0B]/60 border border-[#EAE4D8]/10 flex items-start gap-3 text-xs font-sans text-[#87968B] leading-relaxed">
          <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#EAE4D8] font-mono uppercase tracking-wider block mb-0.5">
              Archival Identity Protocol • In-Game Honorary Captain Avatars
            </strong>
            The four APL franchises were solely owned, managed, and contested by the four real-life cousins (Dharm, Umang, Shubham, Jay). Professional international cricketers (Rohit Sharma, MS Dhoni, Jos Buttler, Shubman Gill) were selected strictly as honorary in-game digital avatar representations and did not participate in the private tournament.
          </div>
        </div>
      </div>
    </section>
  );
};
