import React from 'react';
import { Award, Trophy, Flame, Target, Zap, Shield, ChevronDown } from 'lucide-react';

export const HallOfFameHero: React.FC = () => {
  const milestoneCounters = [
    { label: 'Championship Crown', value: '1', sub: 'Authors (226 Chase)', color: '#00E676' },
    { label: 'Golden Cap Winners', value: '2', sub: 'King (527) • Sky (12)', color: '#B99A5B' },
    { label: 'Historic Centuries', value: '6', sub: 'Across 5 Batsmen', color: '#F59E0B' },
    { label: 'Tournament Hat-Trick', value: '1', sub: 'S. Parker (Champions)', color: '#FF2E4D' },
    { label: 'Record Team Total', value: '291', sub: 'Knights vs Skyshot', color: '#F8FAFC' },
  ];

  const quickNav = [
    { label: 'Championship Laurels', href: '#championship-laurels', icon: Trophy, color: '#00E676' },
    { label: 'Golden Caps', href: '#golden-caps', icon: Flame, color: '#B99A5B' },
    { label: 'Century Club', href: '#century-club', icon: Zap, color: '#F59E0B' },
    { label: 'Historic Bowling', href: '#historic-bowling', icon: Target, color: '#FF2E4D' },
    { label: 'Extreme Records', href: '#extreme-records', icon: Shield, color: '#F8FAFC' },
  ];

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#EAE4D8]/10 overflow-hidden bg-gradient-to-b from-[#090C0B] via-[#0D1512] to-[#090C0B]">
      {/* Decorative Archival Atmosphere */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B99A5B]/10 via-[#00E676]/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Archival Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111815] border border-[#B99A5B]/30 text-[#B99A5B] text-xs font-mono uppercase tracking-widest shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#B99A5B]" />
            <span>APL Season 1 • Official Archive Sanctuary</span>
          </div>
          <span className="text-[#87968B] text-xs font-mono hidden sm:inline">•</span>
          <span className="text-[#87968B] text-xs font-mono tracking-wider">
            Permanent Roll of Honor
          </span>
        </div>

        {/* Headline & Editorial Subtitle */}
        <div className="max-w-4xl space-y-4 mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-[#EAE4D8] tracking-tight uppercase leading-[0.95]">
            THE IMMORTALS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B99A5B] via-[#EAE4D8] to-[#B99A5B]">
              OF SEASON 1
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#A69F92] leading-relaxed font-sans max-w-3xl">
            The official memorial of the inaugural Ashes Premier League campaign. Enshrining the championship-winning
            dynasty, Orange and Purple Cap titans, the exclusive Century Club, and the immortal bowling feats that forged
            the competitive benchmark of private cousin cricket.
          </p>
        </div>

        {/* Milestone Counters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {milestoneCounters.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl bg-[#0E1626]/70 border border-[#EAE4D8]/10 hover:border-[#B99A5B]/40 transition-all shadow-md group"
            >
              <div
                className="text-3xl sm:text-4xl font-display font-black tracking-tight"
                style={{ color: m.color }}
              >
                {m.value}
              </div>
              <div className="text-xs font-display font-bold text-[#EAE4D8] mt-1 group-hover:text-white transition-colors">
                {m.label}
              </div>
              <div className="text-[11px] font-mono text-[#87968B] mt-0.5 truncate">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Functional Anchor Jump Strip */}
        <nav
          aria-label="Hall of Fame Chapters"
          className="pt-2 border-t border-[#EAE4D8]/10 flex flex-wrap gap-2 text-xs font-mono"
        >
          {quickNav.map((n) => {
            const Icon = n.icon;
            return (
              <a
                key={n.href}
                href={n.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#B99A5B]/40 transition-all"
              >
                <Icon className="w-3.5 h-3.5" style={{ color: n.color }} />
                <span>{n.label}</span>
                <ChevronDown className="w-3 h-3 text-[#87968B]/60" />
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

