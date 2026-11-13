import React, { useState } from 'react';
import { rivalryCategories, BANTER_DISCLOSURE, BanterCategoryId } from '../../../content/banter';
import { MessageSquareQuote, AlertCircle } from 'lucide-react';

export const OwnersBanterSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<BanterCategoryId>('championship-gloating');

  const activeCategory =
    rivalryCategories.find((cat) => cat.id === activeCategoryId) || rivalryCategories[0];

  return (
    <section id="banter-room" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Living Room Chronicles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            RIVALRY ROOM BANTER
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            Every match produced fierce debate between Google Meet calls and post-match chats. These curated
            exchanges capture the playful brotherly banter, psychological warfare, and unvarnished reactions
            sparked by the verified events of Season 1.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6" role="tablist">
          {rivalryCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#B99A5B]/20 text-[#EAE4D8] border-[#B99A5B] font-bold shadow-sm'
                    : 'bg-[#0E1626]/40 text-[#87968B] border-[#EAE4D8]/10 hover:text-[#EAE4D8] hover:border-[#EAE4D8]/20'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Header Card */}
        <div className="mb-6 p-4 rounded-lg bg-[#0E1626]/60 border border-[#EAE4D8]/10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#B99A5B] uppercase">
                {activeCategory.badge}
              </span>
              <span className="text-[#EAE4D8]/20">•</span>
              <span className="text-xs text-[#EAE4D8] font-medium">{activeCategory.subtitle}</span>
            </div>
            <p className="text-xs text-[#87968B] font-sans">{activeCategory.matchContext}</p>
          </div>
          <span className="text-[11px] font-mono text-[#87968B]">
            {activeCategory.messages.length} Exchanges
          </span>
        </div>

        {/* Dialogue Stream */}
        <div className="space-y-4">
          {activeCategory.messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className="p-5 rounded-lg bg-[#0E1626]/80 border border-[#EAE4D8]/15 hover:border-[#EAE4D8]/25 transition-all relative overflow-hidden"
              >
                {/* Speaker Accent Border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: msg.teamColor }}
                />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-display font-bold text-[#EAE4D8]">
                      {msg.speakerName}
                    </span>
                    <span className="text-xs text-[#87968B] font-mono">
                      (&quot;{msg.speakerNickname}&quot;)
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider ml-1"
                      style={{
                        color: msg.teamColor,
                        backgroundColor: `${msg.teamColor}15`,
                        border: `1px solid ${msg.teamColor}30`,
                      }}
                    >
                      {msg.teamName}
                    </span>
                  </div>

                  {msg.verifiedContext && (
                    <span className="text-[11px] font-mono text-[#87968B] bg-[#090C0B]/60 px-2.5 py-1 rounded border border-[#EAE4D8]/10">
                      {msg.verifiedContext}
                    </span>
                  )}
                </div>

                {/* Message Body */}
                <blockquote className="text-sm sm:text-base text-[#EAE4D8]/90 font-sans italic leading-relaxed pl-2 border-l-2 border-[#EAE4D8]/10 my-2">
                  &ldquo;{msg.message}&rdquo;
                </blockquote>
              </div>
            );
          })}
        </div>

        {/* Mandatory Fictional Banter Disclosure Banner */}
        <div className="mt-8 p-4 rounded-lg bg-[#090C0B]/80 border border-[#B99A5B]/30 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#B99A5B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#87968B] leading-relaxed font-sans">
            <span className="font-mono font-semibold text-[#B99A5B] block mb-0.5">
              {BANTER_DISCLOSURE}
            </span>
            Dialogue entries are curated dramatizations reflecting verified historical tournament outcomes, final
            positions, and surviving statistics. They celebrate the playful camaraderie between cousins rather than
            transcribing real-time verbatim recordings.
          </div>
        </div>
      </div>
    </section>
  );
};
