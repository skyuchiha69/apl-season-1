import React, { useState } from 'react';
import { Container } from '../../../components/layout/Container';
import { MessageSquareQuote, Flame, CheckCircle, Info } from 'lucide-react';
import { rivalryCategories, BANTER_DISCLOSURE, BanterCategoryId } from '../../../content/banter';

interface RivalryRoomSectionProps {
  initialCategory?: BanterCategoryId;
}

export const RivalryRoomSection: React.FC<RivalryRoomSectionProps> = ({
  initialCategory = 'all-out-war',
}) => {
  const [activeCategory, setActiveCategory] = useState<BanterCategoryId>(initialCategory);

  const currentCategory = rivalryCategories.find((cat) => cat.id === activeCategory) || rivalryCategories[0];

  return (
    <section
      id="rivalry-room"
      aria-labelledby="rivalry-heading"
      className="py-10 sm:py-16 md:py-24 bg-[#090C0B] border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF2E4D]/5 blur-[180px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EAE4D8]/10 pb-4 sm:pb-6 mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#FF2E4D] uppercase font-semibold">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF2E4D] shrink-0" aria-hidden="true" />
              <span>Living Room Warfare • 4 Cousins Banter</span>
            </div>
            <h2
              id="rivalry-heading"
              className="text-2xl sm:text-4xl lg:text-6xl font-black text-[#EAE4D8] uppercase font-display leading-[0.95] tracking-tight"
            >
              The Rivalry Room.
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-[#87968B] uppercase tracking-wider text-left md:text-right leading-tight">
            <span>High-Stakes Rivalry • Google Meet Lore</span>
            <span className="block text-[#EAE4D8] font-bold mt-0.5">4 Debate Chambers • 15 Matches</span>
          </div>
        </div>

        {/* Mobile Swipe / Tap Navigation Hint */}
        <div className="flex md:hidden items-center justify-between px-0.5 mb-2.5 text-[10px] font-mono text-[#87968B] uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-[#B99A5B]">
            <span>Active:</span>
            <strong className="text-[#EAE4D8]">{currentCategory.title}</strong>
          </span>
          <span>Swipe or tap tabs</span>
        </div>

        {/* Category Navigation Tabs (Horizontally scrollable on mobile, 4-col grid on desktop) */}
        <div className="w-full max-w-full min-w-0 overflow-x-auto scrollbar-none pb-2 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label="Rivalry Room Categories"
            className="flex md:grid md:grid-cols-4 gap-2.5 sm:gap-4 w-max md:w-full"
          >
            {rivalryCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-[220px] sm:w-[240px] md:w-auto flex-shrink-0 md:flex-shrink text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between min-h-[44px] ${
                    isActive
                      ? 'bg-[#141E1A] border-[#B99A5B] shadow-lg shadow-[#B99A5B]/15 ring-1 ring-[#B99A5B]/30'
                      : 'bg-[#111815] border-[#EAE4D8]/10 hover:border-[#EAE4D8]/20 hover:bg-[#141917]'
                  }`}
                >
                  <div>
                    <span
                      className={`inline-block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1.5 sm:mb-2 ${
                        isActive ? 'bg-[#B99A5B]/20 text-[#B99A5B]' : 'bg-black/30 text-[#87968B]'
                      }`}
                    >
                      {category.badge}
                    </span>
                    <h4
                      className={`font-display text-sm sm:text-base font-bold uppercase tracking-wide leading-tight ${
                        isActive ? 'text-[#EAE4D8]' : 'text-[#A69F92]'
                      }`}
                    >
                      {category.title}
                    </h4>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-sans text-[#87968B] mt-1.5 sm:mt-2 block truncate">
                    {category.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chamber Context Strip */}
        <div
          id={`panel-${currentCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentCategory.id}`}
          className="bg-[#111815] border border-[#EAE4D8]/10 rounded-xl p-3.5 sm:p-5 mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono">
            <div className="flex items-start space-x-2 text-[#EAE4D8]">
              <MessageSquareQuote className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-bold uppercase tracking-wider">{currentCategory.title}:</span>{' '}
                <span className="text-[#A69F92]">{currentCategory.subtitle}</span>
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#B99A5B] flex items-start gap-1.5 font-semibold leading-relaxed break-words">
              <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>{currentCategory.matchContext}</span>
            </div>
          </div>
        </div>

        {/* Dialogue Stream */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
          {currentCategory.messages.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#0D1310] border border-[#EAE4D8]/10 p-3.5 sm:p-5 lg:p-6 transition-colors hover:border-[#EAE4D8]/20 relative overflow-hidden"
            >
              {/* Left team accent vertical indicator */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5"
                style={{ backgroundColor: item.teamColor }}
                aria-hidden="true"
              />

              <div className="pl-2.5 sm:pl-4 space-y-2.5 sm:space-y-3 min-w-0">
                {/* Speaker Identity Header */}
                <div className="flex items-center justify-between gap-2 border-b border-[#EAE4D8]/5 pb-2">
                  <div className="flex items-center space-x-2 sm:space-x-2.5 min-w-0">
                    <span
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-display font-black text-xs text-black shrink-0"
                      style={{ backgroundColor: item.teamColor }}
                    >
                      {item.speakerName.charAt(0)}
                    </span>
                    <div className="flex items-baseline gap-1 sm:gap-1.5 min-w-0">
                      <span className="font-display font-bold text-sm sm:text-base text-[#EAE4D8] tracking-wide truncate">
                        {item.speakerName}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs text-[#B99A5B] shrink-0">"{item.speakerNickname}"</span>
                    </div>
                  </div>

                  <span
                    className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shrink-0"
                    style={{
                      backgroundColor: `${item.teamColor}15`,
                      color: item.teamColor,
                      border: `1px solid ${item.teamColor}40`,
                    }}
                  >
                    {item.teamName}
                  </span>
                </div>

                {/* Editorial Dialogue Message */}
                <p className="text-xs sm:text-sm lg:text-base text-[#EAE4D8] font-sans leading-relaxed italic">
                  "{item.message}"
                </p>

                {/* Contextual Verified Score Anchor */}
                {item.verifiedContext && (
                  <div className="pt-1.5 sm:pt-2 flex items-start gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#87968B] leading-relaxed break-words">
                    <span className="text-[#B99A5B] font-semibold shrink-0">Verified Fact:</span>
                    <span>{item.verifiedContext}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Fictional Dialogue & Editorial Disclosure Banner */}
        <div className="rounded-xl bg-[#111815] border border-[#B99A5B]/30 p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-start gap-2.5 text-[#B99A5B]">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="font-semibold tracking-wide text-[11px] sm:text-xs leading-relaxed">{BANTER_DISCLOSURE}</span>
          </div>
          <span className="hidden lg:inline text-[11px] text-[#87968B] shrink-0">
            Season 1 Living Room Archive
          </span>
        </div>
      </Container>
    </section>
  );
};
