import React from 'react';
import { Container } from '../../components/layout/Container';
import { PointsTableSection } from './components/PointsTableSection';
import { OrangeCapSection } from './components/OrangeCapSection';
import { PurpleCapSection } from './components/PurpleCapSection';
import { RecordsGrid } from './components/RecordsGrid';
import { ReconciliationLedger } from './components/ReconciliationLedger';
import { BarChart3, Shield, Flame, Target, Zap, Scale } from 'lucide-react';

export const StatsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090C0B] text-[#EAE4D8] selection:bg-[#B99A5B]/30">
      {/* Editorial Page Hero Header */}
      <section className="border-b border-[#EAE4D8]/10 pt-10 sm:pt-16 pb-8 sm:pb-12 bg-gradient-to-b from-[#0E1713] to-[#090C0B] relative overflow-hidden">
        {/* Subtle decorative atmosphere blur */}
        <div
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#B99A5B]/5 blur-[160px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 space-y-4">
          <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#B99A5B]">
            <BarChart3 className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
            <span>APL Season 1 • Official Statistics & Records Archive</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#EAE4D8] tracking-tight leading-[0.95]">
            The Numbers Behind The Legacy.
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-[#A69F92] font-sans leading-relaxed">
            The complete historical performance records of the inaugural Ashes Premier League. Every run, dismissal,
            and milestone recorded from the 12-match regular season through to the championship decider.
          </p>

          {/* Quick-Jump Section Navigation Strip */}
          <nav
            aria-label="Statistics Archive Sections"
            className="pt-4 flex flex-wrap gap-2 text-xs font-mono"
          >
            <a
              href="#standings"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Standings</span>
            </a>
            <a
              href="#orange-cap"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Orange Cap</span>
            </a>
            <a
              href="#purple-cap"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Target className="w-3.5 h-3.5 text-purple-400" />
              <span>Purple Cap</span>
            </a>
            <a
              href="#records"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Zap className="w-3.5 h-3.5 text-[#B99A5B]" />
              <span>Records</span>
            </a>
            <a
              href="#reconciliation"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#14201A] border border-[#EAE4D8]/10 text-[#87968B] hover:text-[#EAE4D8] hover:border-[#EAE4D8]/30 transition-all min-h-[44px]"
            >
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>Audit Ledger</span>
            </a>
          </nav>
        </Container>
      </section>

      {/* Main Content Sections */}
      <Container className="space-y-4">
        <PointsTableSection />
        <OrangeCapSection />
        <PurpleCapSection />
        <RecordsGrid />
        <ReconciliationLedger />
      </Container>
    </div>
  );
};

