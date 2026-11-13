import React from 'react';
import { Container } from '../../components/layout/Container';
import { PlayoffBracket } from './components/PlayoffBracket';
import { FinalScorecardDetail } from './components/FinalScorecardDetail';
import { LeagueFixturesGrid } from './components/LeagueFixturesGrid';
import { Calendar, Trophy, FileText, Layers } from 'lucide-react';

export const MatchesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090C0B] text-[#EAE4D8] selection:bg-[#B99A5B]/30">
      {/* Editorial Page Hero Header */}
      <section className="border-b border-[#EAE4D8]/10 pt-10 sm:pt-16 pb-8 sm:pb-12 bg-gradient-to-b from-[#0E1713] to-[#090C0B] relative overflow-hidden">
        {/* Subtle decorative atmosphere blur */}
        <div
          className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-emerald-950/15 blur-[160px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 space-y-4">
          <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#B99A5B]">
            <Calendar className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
            <span>APL Season 1 • Official Match Centre & Scorecard Archive</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#EAE4D8] tracking-tight leading-[0.95]">
            The Road To The Title.
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-[#A69F92] font-sans leading-relaxed">
            The full chronological tournament chronicle: twelve hard-fought league rounds, the drama of the
            semi-final knockouts, and the unforgettable 226 chase in the Grand Final.
          </p>

          {/* Quick-Jump Section Navigation Strip */}
          <nav
            aria-label="Match Centre Sections"
            className="pt-4 flex flex-wrap gap-2 text-xs font-mono"
          >
            <a
              href="#playoff-bracket"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Trophy className="w-3.5 h-3.5 text-emerald-400" />
              <span>Playoff Bracket</span>
            </a>
            <a
              href="#final-scorecard"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <FileText className="w-3.5 h-3.5 text-[#B99A5B]" />
              <span>Grand Final Scorecard</span>
            </a>
            <a
              href="#league-fixtures"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>12 League Fixtures</span>
            </a>
          </nav>
        </Container>
      </section>

      {/* Main Content Sections */}
      <Container className="space-y-4">
        <PlayoffBracket />
        <FinalScorecardDetail />
        <LeagueFixturesGrid />
      </Container>
    </div>
  );
};

