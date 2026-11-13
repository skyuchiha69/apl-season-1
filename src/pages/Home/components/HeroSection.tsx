import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ChevronDown, Users, Shield } from 'lucide-react';
import { Container } from '../../../components/layout/Container';

export const HeroSection: React.FC = () => {
  const scrollToLegacy = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const legacyEl = document.getElementById('legacy');
    if (legacyEl) {
      legacyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col justify-center items-center bg-stadium-night overflow-hidden pt-8 pb-16"
    >
      {/* Volumetric Floodlight Beams (Visual Foundation) */}
      <div
        className="absolute inset-0 pointer-events-none stadium-floodlight-beam animate-floodlight"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
        {/* Historical Archive Tournament Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 backdrop-blur-sm mb-6">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest font-mono">
            Official Archive • Season 01 Completed
          </span>
        </div>

        {/* Master APL Brand Mark */}
        <div className="relative mb-6 group">
          <div
            className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full scale-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            aria-hidden="true"
          />
          <img
            src="/assets/brand/apl-logo.png"
            alt="APL — Ashes Premier League: Season 1 The Legends Legacy Official Emblem"
            className="relative z-10 max-h-52 sm:max-h-64 md:max-h-72 w-auto object-contain mx-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            loading="eager"
          />
        </div>

        {/* Cinematic Headline */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-amber-400 uppercase font-display">
            Ashes Premier League • Season 01
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] uppercase font-display"
          >
            Four Teams. Four Cousins.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              One Legacy.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed pt-1">
            Every rivalry had a story. Every match became a memory. The permanent digital archive
            documenting four cousins competing for the inaugural APL championship.
          </p>
        </div>

        {/* Championship Honor Banner */}
        <div className="mt-8 w-full max-w-xl bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 border border-emerald-500/40 rounded-xl p-3.5 backdrop-blur-md flex items-center justify-center space-x-3 shadow-[0_10px_25px_-5px_rgba(0,230,118,0.2)]">
          <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="text-left sm:text-center text-xs">
            <span className="font-bold text-emerald-400 tracking-wider uppercase mr-2">
              Inaugural Champions:
            </span>
            <span className="font-extrabold text-white tracking-wide">AUTHORS</span>
            <span className="text-slate-300 ml-2 hidden sm:inline">
              (Chased 226 in 19.2 overs)
            </span>
          </div>
        </div>

        {/* Navigation-Ready Action Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA: Smooth scrolls to Legacy section */}
          <a
            href="#legacy"
            onClick={scrollToLegacy}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(245,184,0,0.3)] hover:shadow-[0_0_30px_rgba(245,184,0,0.5)] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#08090C]"
          >
            <span>Explore The Archive</span>
            <ChevronDown className="w-4 h-4" />
          </a>

          {/* Secondary CTA: Links to /owners (The Four Cousins) */}
          <Link
            to="/owners"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-display font-bold text-sm tracking-wider uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#08090C]"
          >
            <Users className="w-4 h-4 text-slate-300" />
            <span>Meet The Four Cousins</span>
          </Link>
        </div>

        {/* Visual Scroll Indicator */}
        <div className="mt-14 sm:mt-16">
          <button
            onClick={scrollToLegacy}
            aria-label="Scroll down to the legacy introduction"
            className="group flex flex-col items-center text-slate-400 hover:text-amber-400 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-full p-2"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-1">
              Scroll Down
            </span>
            <ChevronDown className="w-4 h-4 animate-subtle-bounce" />
          </button>
        </div>
      </Container>
    </section>
  );
};

