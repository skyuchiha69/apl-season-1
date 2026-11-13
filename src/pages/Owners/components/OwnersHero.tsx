import React from 'react';
import { Shield, Award, Swords, MessageSquareQuote, Compass } from 'lucide-react';
import { Team } from '../../../data/types';

interface OwnersHeroProps {
  teams: Record<string, Team>;
}

export const OwnersHero: React.FC<OwnersHeroProps> = ({ teams }) => {
  const owners = [
    {
      id: 'dharm',
      name: 'Dharm',
      nickname: 'Green',
      teamId: 'authors',
      teamName: teams.authors?.name || 'AUTHORS',
      accentColor: '#00E676',
      badge: 'Inaugural Champions',
      finish: 'CHAMPIONS • Won Final by 3 Wickets',
      regularSeason: '3W – 3L (Tied 2nd, 6 pts)',
      teamCaptain: 'King',
      captainNote: 'Official on-field captain King (A. King).',
      favoriteColor: 'Green',
      anchor: '#owner-dharm',
    },
    {
      id: 'umang',
      name: 'Umang',
      nickname: 'UB',
      teamId: 'champions',
      teamName: teams.champions?.name || 'CHAMPIONS',
      accentColor: '#FF2E4D',
      badge: 'Runners-Up',
      finish: 'RUNNERS-UP • Defended 225 in SF1',
      regularSeason: '3W – 3L (Tied 2nd, 6 pts)',
      teamCaptain: 'Stark',
      captainNote: 'Official on-field captain Stark (T. Stark).',
      favoriteColor: 'Red',
      anchor: '#owner-umang',
    },
    {
      id: 'shubham',
      name: 'Shubham',
      nickname: 'Sky',
      teamId: 'skyshot',
      teamName: teams.skyshot?.name || 'SKYSHOT',
      accentColor: '#00D2FF',
      badge: 'League Topper • Semi-Finalist',
      finish: 'SEMI-FINALIST • Regular Season 1st',
      regularSeason: '4W – 2L (1st Place, 8 pts)',
      teamCaptain: 'Shubham',
      captainNote: 'Official on-field captain and owner Shubham.',
      favoriteColor: 'Blue',
      anchor: '#owner-shubham',
    },
    {
      id: 'jay',
      name: 'Jay',
      nickname: 'Red',
      teamId: 'knights',
      teamName: teams.knights?.name || 'KNIGHTS',
      accentColor: '#F8FAFC',
      badge: 'Record Setters',
      finish: 'LEAGUE STAGE • 146 HS & 291 Total',
      regularSeason: '2W – 4L (4th Place, 4 pts)',
      teamCaptain: 'Jay',
      captainNote: 'Official on-field captain and owner Jay.',
      favoriteColor: 'Black',
      anchor: '#owner-jay',
    },
  ];

  return (
    <header className="relative pt-6 pb-12 border-b border-[#EAE4D8]/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B99A5B 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D2FF 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Documentary Archive • APL Season 1</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#87968B]">
            <span>15 Decided Fixtures</span>
            <span className="text-[#EAE4D8]/20">•</span>
            <span>4 Franchises</span>
            <span className="text-[#EAE4D8]/20">•</span>
            <span className="text-[#B99A5B]">1 Inaugural Champion</span>
          </div>
        </div>

        {/* Section A — Prologue Headline & Narrative */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#EAE4D8] tracking-tight mb-6">
            THE FOUR ARCHITECTS
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-[#87968B] leading-relaxed font-sans">
            <p>
              Before there were scorecards, records, and aggregate reconciliation ledgers, there was a living-room
              rivalry forged across Google Meet sessions and private cricket competition. Four cousins—
              <strong className="text-[#EAE4D8]"> Dharm</strong>,
              <strong className="text-[#EAE4D8]"> Umang</strong>,
              <strong className="text-[#EAE4D8]"> Shubham</strong>, and
              <strong className="text-[#EAE4D8]"> Jay</strong>—founded and commanded four distinct franchises to battle
              for the inaugural <strong className="text-[#EAE4D8]">Ashes Premier League (APL) Season 1</strong> crown.
            </p>
            <p>
              This chronicle preserves the authentic historical legacy of the tournament&apos;s four founders: their strategic
              visions, regular-season standings, playoff journeys, direct head-to-head records, and the spirited living-room
              banter that defined an unforgettable family competition.
            </p>
          </div>

          {/* Explicit Captain & Identity Protocol Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-lg bg-[#0E1626]/80 border border-[#B99A5B]/30 relative overflow-hidden">
            <div className="flex items-start gap-3.5">
              <Award className="w-5 h-5 text-[#B99A5B] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#87968B] leading-relaxed">
                <span className="font-semibold text-[#B99A5B] uppercase tracking-wider block font-mono text-xs mb-1">
                  Archival Identity Protocol • Team Captains &amp; Ownership
                </span>
                On-field tactical leadership and team captaincy were executed by the actual in-game captains—
                <strong className="text-[#EAE4D8]"> King</strong> (Authors),
                <strong className="text-[#EAE4D8]"> Stark</strong> (Champions),
                <strong className="text-[#EAE4D8]"> Shubham</strong> (Skyshot), and
                <strong className="text-[#EAE4D8]"> Jay</strong> (Knights).
                Professional international cricketers represent owner personal favorites and inspirations; all squad assembly,
                tactical decisions, and competitive matches were driven by the four cousin architects.
              </div>
            </div>
          </div>
        </div>

        {/* Section B — Franchise Alignment Strip */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#B99A5B]" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-[#B99A5B]">
                Franchise Alignment &amp; Executive Command
              </h2>
            </div>

            {/* Quick-jump navigation pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <a
                href="#rivalry-matrix"
                className="px-2.5 py-1 rounded bg-[#EAE4D8]/5 hover:bg-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] border border-[#EAE4D8]/10 transition-colors flex items-center gap-1.5"
              >
                <Swords className="w-3 h-3 text-[#B99A5B]" />
                <span>Rivalry Matrix</span>
              </a>
              <a
                href="#banter-room"
                className="px-2.5 py-1 rounded bg-[#EAE4D8]/5 hover:bg-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] border border-[#EAE4D8]/10 transition-colors flex items-center gap-1.5"
              >
                <MessageSquareQuote className="w-3 h-3 text-[#B99A5B]" />
                <span>Rivalry Banter</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {owners.map((owner) => (
              <a
                key={owner.id}
                href={owner.anchor}
                className="group relative p-5 rounded-lg bg-[#0E1626]/40 hover:bg-[#0E1626]/80 border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/25 transition-all duration-300 block"
              >
                {/* Accent top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-lg transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                  style={{ backgroundColor: owner.accentColor }}
                />

                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono text-[#87968B] uppercase tracking-wider block">
                      Owner &amp; Architect
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#EAE4D8] group-hover:text-white transition-colors">
                      {owner.name}{' '}
                      <span className="text-xs font-normal text-[#87968B]">({owner.nickname})</span>
                    </h3>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider"
                    style={{
                      color: owner.accentColor,
                      backgroundColor: `${owner.accentColor}15`,
                      border: `1px solid ${owner.accentColor}30`,
                    }}
                  >
                    {owner.teamName}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#87968B]">
                    <span>Tournament Finish:</span>
                    <span className="font-medium text-[#EAE4D8] text-right">{owner.finish}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#87968B]">
                    <span>League Record:</span>
                    <span className="font-mono text-[#EAE4D8]">{owner.regularSeason}</span>
                  </div>
                  <div className="pt-2 border-t border-[#EAE4D8]/10 flex items-center justify-between text-[#87968B]">
                    <span>Team Captain:</span>
                    <span className="text-[#B99A5B] font-medium">{owner.teamCaptain}</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 text-[11px] font-mono text-[#87968B] group-hover:text-[#B99A5B] flex items-center justify-end gap-1 transition-colors">
                  <span>View Chapter</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
