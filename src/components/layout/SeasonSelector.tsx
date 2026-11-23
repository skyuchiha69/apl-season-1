import React from 'react';
import { useSeason } from '../../app/providers/SeasonProvider';
import { SeasonId } from '../../data/types';

interface SeasonSelectorProps {
  className?: string;
  variant?: 'masthead' | 'drawer';
}

interface SeasonOption {
  id: SeasonId;
  shortLabel: string;
  fullLabel: string;
}

const seasons: SeasonOption[] = [
  { id: 'season-1', shortLabel: 'S1', fullLabel: 'Season 1' },
  { id: 'season-2', shortLabel: 'S2', fullLabel: 'Season 2' },
];

export const SeasonSelector: React.FC<SeasonSelectorProps> = ({
  className = '',
  variant = 'masthead'
}) => {
  const { activeSeasonId, setSeasonId } = useSeason();

  if (variant === 'drawer') {
    return (
      <div
        role="group"
        aria-label="Tournament Season Selection"
        className={`inline-flex items-center p-1 rounded-lg bg-[#14201A] border border-[#EAE4D8]/15 ${className}`}
      >
        {seasons.map((s) => {
          const isActive = activeSeasonId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              data-testid={`season-selector-${s.id}`}
              data-season={s.id}
              aria-pressed={isActive}
              aria-label={`Select ${s.fullLabel}`}
              onClick={() => setSeasonId(s.id)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-all min-h-[40px] focus:outline-none focus:ring-1 focus:ring-[#B99A5B] ${
                isActive
                  ? 'bg-[#B99A5B] text-[#090C0B] shadow-md'
                  : 'text-[#87968B] hover:text-[#EAE4D8] hover:bg-[#EAE4D8]/5'
              }`}
            >
              {s.fullLabel}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Tournament Season Selection"
      className={`inline-flex items-center p-0.5 rounded bg-[#14201A] border border-[#EAE4D8]/15 ${className}`}
    >
      {seasons.map((s) => {
        const isActive = activeSeasonId === s.id;
        return (
          <button
            key={s.id}
            type="button"
            data-testid={`season-selector-${s.id}`}
            data-season={s.id}
            aria-pressed={isActive}
            aria-label={`Select ${s.fullLabel}`}
            onClick={() => setSeasonId(s.id)}
            className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase rounded transition-all focus:outline-none focus:ring-1 focus:ring-[#B99A5B] min-h-[26px] ${
              isActive
                ? 'bg-[#B99A5B] text-[#090C0B] shadow-sm'
                : 'text-[#87968B] hover:text-[#EAE4D8] hover:bg-[#EAE4D8]/5'
            }`}
          >
            <span className="inline sm:hidden">{s.shortLabel}</span>
            <span className="hidden sm:inline">{s.fullLabel}</span>
          </button>
        );
      })}
    </div>
  );
};
