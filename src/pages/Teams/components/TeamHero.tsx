import React from 'react';
import { Link } from 'react-router-dom';
import { Team } from '../../../data/types';
import { Trophy, Shield, UserCheck, Award, ArrowLeft } from 'lucide-react';

interface TeamHeroProps {
  team: Team;
}

export const TeamHero: React.FC<TeamHeroProps> = ({ team }) => {
  const isChampion = team.id === 'authors';
  const isFinalist = team.id === 'champions';
  const isSkyshot = team.id === 'skyshot';
  const isKnights = team.id === 'knights';

  // Dynamic theme colors
  const primaryColor = team.theme.primaryColor;

  // Regular season rank display
  const regularSeasonRank =
    team.id === 'skyshot'
      ? '1st Place • Regular Season Toppers'
      : team.id === 'authors' || team.id === 'champions'
      ? 'T-2nd • Tied Second (Shared Standings)'
      : '4th Place • League Stage';

  // Playoff finish banner
  const playoffBanner =
    team.id === 'authors'
      ? 'Inaugural Champions • Chased 226 in Grand Final'
      : team.id === 'champions'
      ? 'Grand Finalists • Defended 225 in Semi-Final 1'
      : team.id === 'skyshot'
      ? 'Semi-Finalist • Regular Season Leaders'
      : 'League Stage • All-Time Record Setters (291 Total & 146 Individual)';

  return (
    <div className="relative pt-6 pb-10 border-b border-[#EAE4D8]/10 overflow-hidden">
      {/* Background ambient franchise glow */}
      <div
        className="absolute top-0 right-1/4 w-[450px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: primaryColor }}
        aria-hidden="true"
      />

      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/teams"
          className="inline-flex items-center space-x-2 text-xs font-mono text-[#87968B] hover:text-[#B99A5B] transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Franchises Hub</span>
        </Link>
      </div>

      {/* Hero Header Strip */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#EAE4D8]/10">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="px-2.5 py-0.5 rounded text-xs font-mono font-bold tracking-widest uppercase border"
              style={{
                color: primaryColor,
                backgroundColor: `${primaryColor}15`,
                borderColor: `${primaryColor}40`,
              }}
            >
              {team.shortName}
            </span>
            <span className="text-[#87968B] text-xs font-mono tracking-wider uppercase">• APL SEASON 1</span>
            {isChampion && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#B99A5B]/20 text-[#B99A5B] border border-[#B99A5B]/40 uppercase">
                <Trophy className="w-3 h-3 text-[#B99A5B]" />
                <span>Tournament Champions</span>
              </span>
            )}
            {isFinalist && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase">
                <Award className="w-3 h-3 text-rose-300" />
                <span>Grand Finalists</span>
              </span>
            )}
            {isSkyshot && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                <Award className="w-3 h-3 text-cyan-300" />
                <span>League Toppers</span>
              </span>
            )}
            {isKnights && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-400/20 text-slate-200 border border-slate-400/40 uppercase">
                <Shield className="w-3 h-3 text-slate-200" />
                <span>Record Holders</span>
              </span>
            )}
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#EAE4D8]"
            style={{ textShadow: `0 0 35px ${primaryColor}30` }}
          >
            {team.name}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#A69F92]">
            <div>
              <span className="text-[#87968B] uppercase">Regular Season: </span>
              <strong className="text-[#EAE4D8]">{team.leagueRecord.won}W – {team.leagueRecord.lost}L</strong>
              <span className="text-[#B99A5B] ml-1.5 font-semibold">({regularSeasonRank})</span>
            </div>
            <span className="hidden sm:inline text-[#EAE4D8]/20">•</span>
            <div>
              <span className="text-[#87968B] uppercase">Playoff Finish: </span>
              <strong className="text-emerald-400">{playoffBanner}</strong>
            </div>
          </div>
        </div>

        {/* Tactical Note / Franchise Philosophy */}
        <div className="lg:max-w-md p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-xs font-sans text-[#A69F92] leading-relaxed shadow-lg">
          <p className="font-mono text-[10px] text-[#B99A5B] uppercase tracking-widest font-semibold mb-1">
            Tactical Signature
          </p>
          <p>{team.owner.note}</p>
        </div>
      </div>

      {/* Leadership Distinction Module — Owner & Team Captain */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Cousin Owner Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/15 relative overflow-hidden group hover:border-[#B99A5B]/40 transition-colors">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE4D8]/10 mb-3">
            <div className="flex items-center space-x-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#B99A5B] font-semibold">
                Franchise Owner &amp; Strategist
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#87968B] uppercase">Real-Life Architect</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#EAE4D8]">
                {team.owner.name}
              </h2>
              <span className="text-xs font-mono text-[#B99A5B] font-semibold">
                ({team.owner.nickname})
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1 text-[#87968B]">
              <div>
                <span className="block text-[10px] text-[#87968B] uppercase">Franchise Role:</span>
                <span className="text-[#EAE4D8] font-semibold">
                  {team.id === 'champions'
                    ? 'Franchise Owner & Tactical Architect'
                    : 'Franchise Owner & Player'}
                </span>
              </div>
              <div>
                <span className="block text-[10px] text-[#87968B] uppercase">Signature Accent:</span>
                <span className="text-[#EAE4D8] font-semibold">{team.owner.favouriteColor}</span>
              </div>
            </div>

            {/* Special transparent disclosure for Umang (Option A) */}
            {team.id === 'champions' && (
              <div className="mt-2.5 p-2.5 rounded bg-[#15231C] border border-[#B99A5B]/30 text-[11px] font-sans text-[#A69F92] leading-relaxed">
                <span className="font-semibold text-[#B99A5B] font-mono uppercase text-[10px] block mb-0.5">
                  Archival Lore Note
                </span>
                Umang&apos;s individual in-game player identity and statistics are not documented in the surviving Season 1 archive. His verified role as Champions franchise owner and tactical architect is preserved here.
              </div>
            )}
          </div>
        </div>

        {/* Actual Team Captain Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/15 relative overflow-hidden group hover:border-[#EAE4D8]/30 transition-colors">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE4D8]/10 mb-3">
            <div className="flex items-center space-x-2">
              <UserCheck className="w-3.5 h-3.5 text-[#B99A5B]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#B99A5B] font-semibold">
                Team Captain
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#87968B] uppercase">On-Field Leader</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#EAE4D8]">
                {team.captain.name}
              </h2>
              <span className="text-xs font-mono text-[#B99A5B]">
                (Official Captain)
              </span>
            </div>

            <p className="text-xs font-sans text-[#A69F92] leading-relaxed">
              Official on-field captain for <strong className="text-[#EAE4D8]">{team.name}</strong> during APL Season 1, leading tactical executions and in-game decisions.
            </p>

            <div className="pt-1 text-[11px] font-mono text-[#87968B]">
              <span>Owner&apos;s Favorite Cricketer: </span>
              <span className="text-[#EAE4D8] font-semibold">
                {team.owner.favouriteCricketer} (Personal Preference)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
