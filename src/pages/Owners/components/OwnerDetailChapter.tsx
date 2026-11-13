import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User, Award, ArrowRight, Info, Target } from 'lucide-react';
import { Team } from '../../../data/types';

interface OwnerChapterData {
  id: string;
  name: string;
  nickname: string;
  roleTitle: string;
  teamId: 'authors' | 'champions' | 'skyshot' | 'knights';
  teamName: string;
  accentColor: string;
  badge: string;
  tournamentFinish: string;
  regularSeasonRecord: string;
  regularSeasonRank: string;
  favoriteColor: string;
  favoriteCricketer: string;
  teamCaptain: {
    name: string;
    note: string;
  };
  narrativeOverview: string[];
  keyMilestones: string[];
  inGameIdentity: {
    type: 'single' | 'dual' | 'undocumented';
    title: string;
    detailsNote?: string;
    players?: Array<{
      id: string;
      name: string;
      role: string;
      headlineStat: string;
      breakdown: string;
    }>;
  };
}

interface OwnerDetailChapterProps {
  owner: OwnerChapterData;
  team?: Team;
}

export const OwnerDetailChapter: React.FC<OwnerDetailChapterProps> = ({ owner }) => {
  return (
    <article
      id={`owner-${owner.id}`}
      className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background subtle color wash */}
      <div
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ backgroundColor: owner.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header: Number & Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider"
              style={{
                color: owner.accentColor,
                backgroundColor: `${owner.accentColor}15`,
                border: `1px solid ${owner.accentColor}30`,
              }}
            >
              {owner.teamName} ARCHIVE
            </span>
            <span className="text-xs font-mono text-[#87968B] uppercase tracking-widest">
              {owner.roleTitle}
            </span>
          </div>

          <Link
            to={`/teams/${owner.teamId}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B99A5B] hover:text-[#EAE4D8] transition-colors group"
          >
            <span>Explore {owner.teamName} Franchise Portal</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Grid: Left Column (Narrative & Milestones) vs Right Column (Identity Cards & Avatars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-2">
                {owner.name}{' '}
                <span className="text-xl sm:text-2xl font-normal text-[#87968B]">
                  (&quot;{owner.nickname}&quot;)
                </span>
              </h2>
              <p className="text-sm font-mono text-[#B99A5B] uppercase tracking-wider">
                Founder, Owner &amp; Architect of {owner.teamName}
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base text-[#87968B] leading-relaxed font-sans">
              {owner.narrativeOverview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Verified Tournament Milestones */}
            <div className="p-5 rounded-lg bg-[#0E1626]/60 border border-[#EAE4D8]/10 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#B99A5B] flex items-center gap-2">
                <Target className="w-3.5 h-3.5" />
                <span>Verified Historical Milestones</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#87968B]">
                {owner.keyMilestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: owner.accentColor }}
                    />
                    <span className="leading-snug text-[#EAE4D8]/90">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: In-Game Identity & Executive Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dossier Card */}
            <div className="p-5 rounded-lg bg-[#0E1626]/80 border border-[#EAE4D8]/15 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE4D8]/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#87968B] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#B99A5B]" />
                  <span>Executive Dossier</span>
                </span>
                <span className="text-xs font-mono text-[#B99A5B]">{owner.badge}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#87968B] block text-[11px] mb-0.5">Regular Season:</span>
                  <span className="text-[#EAE4D8] font-medium">{owner.regularSeasonRank}</span>
                  <div className="text-[11px] text-[#87968B]">{owner.regularSeasonRecord}</div>
                </div>
                <div>
                  <span className="text-[#87968B] block text-[11px] mb-0.5">Tournament Finish:</span>
                  <span className="text-[#EAE4D8] font-medium">{owner.tournamentFinish}</span>
                </div>
                <div>
                  <span className="text-[#87968B] block text-[11px] mb-0.5">Favorite Color:</span>
                  <span className="text-[#EAE4D8] capitalize">{owner.favoriteColor}</span>
                </div>
                <div>
                  <span className="text-[#87968B] block text-[11px] mb-0.5">Cricket Idol:</span>
                  <span className="text-[#EAE4D8]">{owner.favoriteCricketer}</span>
                </div>
              </div>

              {/* Team Captain Box */}
              <div className="pt-3 border-t border-[#EAE4D8]/10">
                <div className="flex items-start gap-2.5 p-3 rounded bg-[#090C0B]/60 border border-[#EAE4D8]/10 text-xs">
                  <Award className="w-4 h-4 text-[#B99A5B] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-[11px] text-[#87968B] uppercase tracking-wider mb-0.5">
                      Team Captain
                    </div>
                    <div className="font-semibold text-[#EAE4D8]">{owner.teamCaptain.name}</div>
                    <p className="text-[11px] text-[#87968B] mt-1 leading-normal font-sans">
                      {owner.teamCaptain.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Game Player Records Box */}
            <div className="p-5 rounded-lg bg-[#0E1626]/80 border border-[#EAE4D8]/15 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE4D8]/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B99A5B] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{owner.inGameIdentity.title}</span>
                </span>
                <span className="text-[11px] font-mono text-[#87968B]">Season 1 Record</span>
              </div>

              {/* Case 1: Undocumented (Umang) */}
              {owner.inGameIdentity.type === 'undocumented' && (
                <div className="p-3.5 rounded bg-[#090C0B]/80 border border-[#B99A5B]/30 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-[#B99A5B] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-[#87968B] leading-relaxed font-sans">
                      {owner.inGameIdentity.detailsNote}
                    </p>
                  </div>
                </div>
              )}

              {/* Case 2: Dual Player Characters (Shubham) */}
              {owner.inGameIdentity.type === 'dual' && (
                <div className="space-y-3">
                  {owner.inGameIdentity.detailsNote && (
                    <p className="text-xs text-[#87968B] leading-relaxed font-sans bg-[#090C0B]/50 p-2.5 rounded border border-[#EAE4D8]/10">
                      {owner.inGameIdentity.detailsNote}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {owner.inGameIdentity.players?.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 rounded bg-[#090C0B]/60 border border-[#EAE4D8]/10 space-y-1 text-xs"
                      >
                        <div className="flex items-center justify-between font-mono">
                          <span className="font-bold text-[#EAE4D8]">{p.name}</span>
                          <span className="text-[10px] text-[#00D2FF] uppercase">{p.role}</span>
                        </div>
                        <div className="text-[10px] font-mono text-[#87968B]">
                          Archive ID: <code className="text-[#EAE4D8] bg-[#090C0B] px-1 py-0.5 rounded">{p.id}</code>
                        </div>
                        <div className="text-sm font-bold font-mono text-[#EAE4D8] pt-1">
                          {p.headlineStat}
                        </div>
                        <div className="text-[11px] text-[#87968B] font-mono">{p.breakdown}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case 3: Single Player Character (Dharm, Jay) */}
              {owner.inGameIdentity.type === 'single' && owner.inGameIdentity.players && (
                <div className="space-y-3">
                  {owner.inGameIdentity.detailsNote && (
                    <p className="text-xs text-[#87968B] leading-relaxed font-sans">
                      {owner.inGameIdentity.detailsNote}
                    </p>
                  )}
                  {owner.inGameIdentity.players.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded bg-[#090C0B]/60 border border-[#EAE4D8]/10 space-y-1.5"
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-bold text-[#EAE4D8]">{p.name}</span>
                        <span
                          className="text-[10px] uppercase font-semibold"
                          style={{ color: owner.accentColor }}
                        >
                          {p.role}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-[#87968B]">
                        Archive ID: <code className="text-[#EAE4D8] bg-[#090C0B] px-1 py-0.5 rounded">{p.id}</code>
                      </div>
                      <div className="text-base font-bold font-mono text-[#EAE4D8]">
                        {p.headlineStat}
                      </div>
                      <div className="text-xs text-[#87968B] font-mono">{p.breakdown}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
