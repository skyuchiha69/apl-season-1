import React, { useState } from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Award, Zap, Shield, Flame, Target, Trophy } from 'lucide-react';

export const RecordsGrid: React.FC = () => {
  const { seasonData } = useSeason();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'batting' | 'bowling' | 'team' | 'milestone'>('all');

  const records = seasonData.records;

  const filteredRecords = selectedCategory === 'all'
    ? records
    : records.filter((r) => r.category === selectedCategory);

  // Category counts
  const categories: { id: 'all' | 'batting' | 'bowling' | 'team' | 'milestone'; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Records (10)', icon: Award },
    { id: 'batting', label: 'Batting Feats', icon: Flame },
    { id: 'bowling', label: 'Bowling Hauls', icon: Target },
    { id: 'team', label: 'Team Totals', icon: Shield },
    { id: 'milestone', label: 'Championship', icon: Trophy },
  ];

  return (
    <section
      id="records"
      aria-labelledby="records-heading"
      className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Zap className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>Historic Season 1 Archive</span>
            </div>
            <h2
              id="records-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              Tournament Records & Milestones
            </h2>
          </div>
          <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
            Verified benchmark achievements across all 15 tournament matches.
          </p>
        </div>

        {/* Prominent Spotlights for Marquee Historic Records */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Jay's 146 */}
          <div className="rounded-xl p-5 bg-gradient-to-br from-[#1A1410] to-[#101416] border border-amber-500/40 shadow-xl relative overflow-hidden">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
              Historic Individual High
            </span>
            <div className="font-display text-4xl lg:text-5xl font-black text-amber-400 tracking-tight leading-none">
              146
            </div>
            <h3 className="font-display font-black text-lg text-[#EAE4D8] mt-2">
              Jay • Knights
            </h3>
            <p className="text-xs text-[#A69F92] font-sans mt-1 leading-relaxed">
              Monumental 146 in Match 3 against Skyshot — highest individual score in APL history.
            </p>
          </div>

          {/* Knights' 291 */}
          <div className="rounded-xl p-5 bg-gradient-to-br from-[#12161E] to-[#0E1318] border border-slate-400/40 shadow-xl relative overflow-hidden">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 font-bold block mb-1">
              Record Team Total
            </span>
            <div className="font-display text-4xl lg:text-5xl font-black text-slate-200 tracking-tight leading-none">
              291
            </div>
            <h3 className="font-display font-black text-lg text-[#EAE4D8] mt-2">
              KNIGHTS
            </h3>
            <p className="text-xs text-[#A69F92] font-sans mt-1 leading-relaxed">
              Blistering team total posted against Skyshot in Match 3.
            </p>
          </div>

          {/* King's 527 */}
          <div className="rounded-xl p-5 bg-gradient-to-br from-[#0D1D16] to-[#0A1410] border border-emerald-500/40 shadow-xl relative overflow-hidden">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              Orange Cap Aggregate
            </span>
            <div className="font-display text-4xl lg:text-5xl font-black text-emerald-400 tracking-tight leading-none">
              527
            </div>
            <h3 className="font-display font-black text-lg text-[#EAE4D8] mt-2">
              A. King • Authors
            </h3>
            <p className="text-xs text-[#A69F92] font-sans mt-1 leading-relaxed">
              Tournament aggregate runs in 8 matches, with 2 centuries including 108 in the Grand Final.
            </p>
          </div>

          {/* Sky's 12 */}
          <div className="rounded-xl p-5 bg-gradient-to-br from-[#0F1B24] to-[#0A1218] border border-cyan-500/40 shadow-xl relative overflow-hidden">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              Purple Cap Aggregate
            </span>
            <div className="font-display text-4xl lg:text-5xl font-black text-cyan-400 tracking-tight leading-none">
              12
            </div>
            <h3 className="font-display font-black text-lg text-[#EAE4D8] mt-2">
              N. Sky • Skyshot
            </h3>
            <p className="text-xs text-[#A69F92] font-sans mt-1 leading-relaxed">
              Tournament aggregate wickets with multiple 4-wicket hauls for the regular season toppers.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2" role="tablist" aria-label="Filter tournament records by category">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all min-h-[44px] ${
                  isSelected
                    ? 'bg-[#B99A5B] text-black font-black shadow-lg shadow-[#B99A5B]/20'
                    : 'bg-[#0E1713] text-[#87968B] border border-[#EAE4D8]/10 hover:text-[#EAE4D8] hover:border-[#EAE4D8]/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* All Verified Records Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecords.map((rec) => {
            const team = seasonData.teams[rec.teamId];

            let franchiseBadge = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
            if (rec.teamId === 'authors') franchiseBadge = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
            else if (rec.teamId === 'champions') franchiseBadge = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
            else if (rec.teamId === 'knights') franchiseBadge = 'bg-slate-500/20 text-slate-300 border-slate-500/30';

            return (
              <div
                key={rec.id}
                className="rounded-xl p-5 bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#18261F] text-[#87968B]">
                      {rec.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${franchiseBadge}`}>
                      {team.name}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-lg text-[#EAE4D8] tracking-wide">
                      {rec.title}
                    </h3>
                    <p className="font-mono text-sm text-[#B99A5B] font-semibold mt-0.5">
                      Holder: {rec.holder}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE4D8]/10">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase text-[#87968B] tracking-wider">Record Value</span>
                    <span className="font-display text-2xl font-black text-[#EAE4D8]">
                      {rec.value}
                    </span>
                  </div>
                  <p className="text-xs text-[#A69F92] font-sans mt-2 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

