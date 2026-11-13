import React from 'react';
import { Container } from '../../../components/layout/Container';
import { Users, Shield, Target, UserCheck } from 'lucide-react';
import { TeamId } from '../../../data/types';

interface CousinProfile {
  id: string;
  name: string;
  nickname: string;
  teamId: TeamId;
  teamName: string;
  teamBadge: string;
  teamAccent: string;
  seasonFinish: string;
  ownerPlayerRole: string;
  playerStats: {
    label: string;
    value: string;
  }[];
  captainIdentity: {
    name: string;
    roleNote: string;
  };
  narrative: string;
  tacticalSignature: string;
}

const cousinsData: CousinProfile[] = [
  {
    id: 'dharm',
    name: 'Dharm',
    nickname: 'Green',
    teamId: 'authors',
    teamName: 'AUTHORS',
    teamBadge: 'Inaugural Champions',
    teamAccent: '#00E676',
    seasonFinish: '1st Place • APL Champions',
    ownerPlayerRole: 'Franchise Owner & Championship Bowler',
    playerStats: [
      { label: 'Role', value: 'Bowler / Skipper' },
      { label: 'Season Wickets', value: '5 Wickets' },
      { label: 'Final Bowling', value: '1/36 (4.0 ov)' },
      { label: 'Key Chase', value: '226/7 in 19.2 ov' },
    ],
    captainIdentity: {
      name: 'Rohit Sharma',
      roleNote: 'Honorary Captain Avatar • Selected by Dharm for calculated batting aggression and ice-cold tactical composure.',
    },
    narrative:
      'The tactical mastermind behind Authors’ historic championship run. Dharm anchored his bowling attack with 5 verified tournament wickets and constructed a batting order capable of chasing down 226 in the Grand Final decider.',
    tacticalSignature: 'Calculated chase temperament and decisive bowling rotations under high Google Meet pressure.',
  },
  {
    id: 'umang',
    name: 'Umang',
    nickname: 'UB',
    teamId: 'champions',
    teamName: 'CHAMPIONS',
    teamBadge: 'Grand Finalists',
    teamAccent: '#FF2E4D',
    seasonFinish: '2nd Place • Runners-Up',
    ownerPlayerRole: 'Franchise Owner & Battle-Hardened Player',
    playerStats: [
      { label: 'Role', value: 'Tactical Leader' },
      { label: 'SF1 Defense', value: 'Defended 225 (Won by 10)' },
      { label: 'Final Total', value: '225/8 in 20.0 ov' },
      { label: 'Squad Fifties', value: '8 Team 50s' },
    ],
    captainIdentity: {
      name: 'MS Dhoni',
      roleNote: 'Honorary Captain Avatar • Selected by Umang for legendary match-finishing acumen and fearless big-match pressure.',
    },
    narrative:
      'A ferocious on-field competitor whose Champions team set the standard for high-octane batting totals. Umang steered his squad through a 10-run defense in Semi-Final 1 and delivered a monstrous 225 in the final.',
    tacticalSignature: 'Unrelenting top-order power hitting and disciplined death-overs fielding pressure.',
  },
  {
    id: 'shubham',
    name: 'Shubham',
    nickname: 'Sky',
    teamId: 'skyshot',
    teamName: 'SKYSHOT',
    teamBadge: 'Regular Season Toppers',
    teamAccent: '#00D2FF',
    seasonFinish: '3rd Place • League Leaders (8 pts)',
    ownerPlayerRole: 'Franchise Owner & Dual-Threat All-Rounder',
    playerStats: [
      { label: 'Role', value: 'Top-Order / All-Rounder' },
      { label: 'Purple Cap', value: '12 Wickets (No. 1)' },
      { label: 'Batter Runs', value: '134 Runs' },
      { label: 'League Record', value: '4 Wins (1st)' },
    ],
    captainIdentity: {
      name: 'Jos Buttler',
      roleNote: 'Honorary Captain Avatar • Selected by Shubham for explosive 360-degree shotmaking and modern white-ball dynamism.',
    },
    narrative:
      'The dominant regular-season pacesetter. As owner and star player, Shubham clinched the tournament Purple Cap with 12 wickets and notched 134 batter runs, steering Skyshot to four league wins and first place.',
    tacticalSignature: 'Dominant net run rate aggression, dual-threat all-round performance, and tactical bowling variations.',
  },
  {
    id: 'jay',
    name: 'Jay',
    nickname: 'Red',
    teamId: 'knights',
    teamName: 'KNIGHTS',
    teamBadge: 'Record Breaker',
    teamAccent: '#E2E8F0',
    seasonFinish: '4th Place • Individual Record Holder',
    ownerPlayerRole: 'Franchise Owner & Premier Record Batsman',
    playerStats: [
      { label: 'Role', value: 'Star Batsman' },
      { label: 'Tournament Record', value: '146 Runs (Match 3)' },
      { label: 'Team Record', value: '291 Total vs Skyshot' },
      { label: 'Season Runs', value: '245 Runs' },
    ],
    captainIdentity: {
      name: 'Shubman Gill',
      roleNote: 'Honorary Captain Avatar • Selected by Jay for classical strokeplay, timing, and textbook high-impact stroke execution.',
    },
    narrative:
      'Author of the greatest individual batting masterclass in APL history. Jay decimated Skyshot with an astonishing 146 runs in Match 3, driving Knights to the league-record total of 291 in a single innings.',
    tacticalSignature: 'High-risk, monumental ceiling batting assaults that produced the tournament’s all-time record score.',
  },
];

export const CousinsSection: React.FC = () => {
  return (
    <section
      id="four-cousins"
      aria-labelledby="cousins-heading"
      className="py-10 sm:py-16 md:py-24 bg-[#0B1512]/90 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#B99A5B]/5 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-950/20 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EAE4D8]/10 pb-4 sm:pb-6 mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#B99A5B] uppercase font-semibold">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>The Architects • Owners & Players</span>
            </div>
            <h2
              id="cousins-heading"
              className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#EAE4D8] uppercase font-display leading-[0.95] tracking-tight"
            >
              The Four Cousins.
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-[#87968B] uppercase tracking-wider text-left md:text-right leading-tight">
            <span>Four Living Rooms • One PC Cricket Championship</span>
            <span className="block text-[#EAE4D8] font-bold mt-0.5">15 Fixtures • 44 Drafted Players</span>
          </div>
        </div>

        {/* Identity Architecture Disclaimer Banner */}
        <div className="bg-[#111815] border border-[#B99A5B]/30 rounded-xl p-3.5 sm:p-5 mb-6 sm:mb-10 text-xs sm:text-sm text-[#A69F92] flex items-start gap-2.5 sm:gap-3.5 leading-relaxed">
          <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-mono text-xs text-[#EAE4D8] font-semibold uppercase tracking-wider">
              Dual Identity & Honorary Avatar Architecture:
            </p>
            <p className="text-[11px] sm:text-xs sm:text-sm leading-relaxed">
              The four cousins—<strong>Shubham</strong>, <strong>Jay</strong>, <strong>Dharm</strong>, and{' '}
              <strong>Umang</strong>—are the real-life strategic franchise owners, managers, and active in-game players who
              drafted every squad and contested every ball. Selected international cricket icons (Rohit Sharma, MS Dhoni,
              Jos Buttler, Shubman Gill) serve strictly as <em>honorary digital captain avatars</em> chosen by each cousin,
              and did not literally participate in the tournament.
            </p>
          </div>
        </div>

        {/* 2x2 Editorial Cousins Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {cousinsData.map((cousin) => (
            <div
              key={cousin.id}
              className="rounded-xl bg-[#090C0B] border border-[#EAE4D8]/12 p-4 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#EAE4D8]/25 transition-all duration-300 relative group overflow-hidden"
              style={{
                boxShadow: `0 10px 30px -15px ${cousin.teamAccent}20`,
              }}
            >
              {/* Corner accent border line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: cousin.teamAccent }}
                aria-hidden="true"
              />

              <div className="space-y-4 sm:space-y-6">
                {/* Header: Name, Nickname, Franchise & Finish */}
                <div className="border-b border-[#EAE4D8]/10 pb-3 sm:pb-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] tracking-tight">
                        {cousin.name}
                      </h3>
                      <span className="font-mono text-[11px] sm:text-xs px-2 py-0.5 rounded bg-[#111815] border border-[#EAE4D8]/15 text-[#B99A5B] font-bold">
                        "{cousin.nickname}"
                      </span>
                    </div>

                    <span
                      className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shrink-0"
                      style={{
                        backgroundColor: `${cousin.teamAccent}15`,
                        color: cousin.teamAccent,
                        border: `1px solid ${cousin.teamAccent}40`,
                      }}
                    >
                      {cousin.teamName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#87968B] gap-2">
                    <span className="uppercase tracking-wider truncate">{cousin.ownerPlayerRole}</span>
                    <span className="text-[#B99A5B] font-semibold sm:font-normal shrink-0">{cousin.seasonFinish}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-[#A69F92] leading-relaxed font-sans">{cousin.narrative}</p>

                {/* Verified Tournament Player Stats Grid */}
                <div className="bg-[#111815] border border-[#EAE4D8]/10 rounded-lg p-3 sm:p-4">
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                    <span>Verified Season 1 Player Contributions</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs font-mono">
                    {cousin.playerStats.map((stat, idx) => (
                      <div key={idx} className="space-y-0.5 min-w-0">
                        <span className="text-[#87968B] text-[9px] sm:text-[10px] uppercase block truncate">{stat.label}</span>
                        <span className="text-[#EAE4D8] font-bold text-[11px] sm:text-xs block leading-tight break-words">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Captain Avatar Card */}
                <div className="bg-[#0D1310] border border-[#EAE4D8]/10 rounded-lg p-3 sm:p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono gap-2">
                    <span className="text-[#87968B] uppercase tracking-wider flex items-center gap-1.5 text-[10px] sm:text-xs">
                      <Shield className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" />
                      Captain Identity
                    </span>
                    <span className="text-[#B99A5B] font-bold text-[11px] sm:text-xs shrink-0">{cousin.captainIdentity.name}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#87968B] leading-relaxed font-sans">
                    {cousin.captainIdentity.roleNote}
                  </p>
                </div>
              </div>

              {/* Tactical Signature Footer */}
              <div className="pt-3 mt-4 sm:pt-4 sm:mt-6 border-t border-[#EAE4D8]/5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[11px] font-mono text-[#87968B]">
                <span className="uppercase tracking-wider shrink-0 text-[10px] sm:text-[11px]">Tactical Signature:</span>
                <span className="text-[#EAE4D8] text-left sm:text-right text-[11px] sm:text-xs leading-relaxed" title={cousin.tacticalSignature}>
                  {cousin.tacticalSignature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
