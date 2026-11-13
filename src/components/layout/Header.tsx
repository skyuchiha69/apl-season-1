import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';
import { useTheme } from '../../app/providers/ThemeProvider';
import { Menu, X } from 'lucide-react';
import { TeamId } from '../../data/types';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentTheme, setTheme } = useTheme();

  const navLinks = [
    { label: 'Chronicle', path: '/' },
    { label: 'The Four Cousins', path: '/owners' },
    { label: 'Franchises', path: '/teams' },
    { label: 'Records & Stats', path: '/stats' },
    { label: 'Match Centre', path: '/matches' },
    { label: 'Hall of Fame', path: '/hall-of-fame' },
  ];

  const themeOptions: Array<{ id: 'neutral' | TeamId; label: string; color: string }> = [
    { id: 'neutral', label: 'Archive Gold', color: '#B99A5B' },
    { id: 'authors', label: 'Authors', color: '#00E676' },
    { id: 'champions', label: 'Champions', color: '#FF2E4D' },
    { id: 'skyshot', label: 'Skyshot', color: '#00D2FF' },
    { id: 'knights', label: 'Knights', color: '#E2E8F0' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090C0B]/95 backdrop-blur-md border-b border-[#EAE4D8]/10 transition-colors duration-300">
      {/* Editorial Top Archival Masthead Bar */}
      <div className="border-b border-[#EAE4D8]/5 py-1 text-xs bg-[#0B1512]/60">
        <Container className="flex items-center justify-between text-[#87968B] font-mono text-[10px] sm:text-[11px] tracking-wider uppercase">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
            <span className="text-[#B99A5B] font-bold truncate">APL ARCHIVE</span>
            <span className="hidden xs:inline text-[#EAE4D8]/20">•</span>
            <span className="hidden xs:inline text-[#A69F92]">SEASON 01</span>
            <span className="hidden md:inline text-[#EAE4D8]/20">•</span>
            <span className="hidden md:inline text-[#EAE4D8]">
              CHAMPIONS: <strong className="text-emerald-400 font-semibold">AUTHORS</strong> (226/7 in 19.2 ov)
            </span>
          </div>

          {/* Restrained Theme Accent Palette Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <span className="hidden lg:inline text-[10px] text-[#87968B] tracking-widest uppercase mr-1">
              Atmosphere:
            </span>
            <div className="flex items-center space-x-1.5" role="radiogroup" aria-label="Franchise atmosphere">
              {themeOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  title={`Switch atmosphere to ${t.label}`}
                  aria-label={`Switch atmosphere to ${t.label}`}
                  className={`w-2.5 h-2.5 rounded-full transition-transform ${
                    currentTheme === t.id
                      ? 'scale-125 ring-2 ring-[#B99A5B] ring-offset-1 ring-offset-[#090C0B]'
                      : 'opacity-50 hover:opacity-100 hover:scale-110'
                  }`}
                  style={{ backgroundColor: t.color }}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Primary Publication Masthead Navigation */}
      <Container className="py-2.5 sm:py-3.5 flex items-center justify-between">
        {/* Brand Mark & Monogram */}
        <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none focus:ring-1 focus:ring-[#B99A5B] rounded shrink-0">
          <img
            src="/assets/brand/apl-logo.png"
            alt="APL Ashes Premier League Logo"
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-xl md:text-2xl font-black text-[#EAE4D8] tracking-wider leading-none">
              ASHES PREMIER LEAGUE
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#87968B] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-0.5 sm:mt-1">
              The Legends Legacy • Digital Archive
            </span>
          </div>
        </Link>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main publication navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.15em] font-sans font-semibold transition-colors relative py-1 focus:outline-none focus:ring-1 focus:ring-[#B99A5B] rounded px-1 ${
                  isActive
                    ? 'text-[#B99A5B]'
                    : 'text-[#A69F92] hover:text-[#EAE4D8]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#B99A5B]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Subtle Championship Commemoration Mark */}
        <div className="hidden sm:flex items-center pl-4 border-l border-[#EAE4D8]/10 text-right">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#87968B]">
            <span className="block text-[#EAE4D8] font-bold">15 MATCHES</span>
            <span>4 COUSINS</span>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle publication menu"
          className="lg:hidden p-2 rounded text-[#A69F92] hover:text-[#EAE4D8] hover:bg-[#EAE4D8]/5 focus:outline-none focus:ring-2 focus:ring-[#B99A5B] min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE4D8]/10 bg-[#0B1512] px-4 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest font-sans font-medium py-2 px-3 rounded transition-colors ${
                    isActive
                      ? 'bg-[#B99A5B]/15 text-[#B99A5B] font-bold border-l-2 border-[#B99A5B]'
                      : 'text-[#A69F92] hover:text-[#EAE4D8] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#EAE4D8]/10 text-[11px] font-mono text-[#87968B] flex items-center justify-between">
            <span>INAUGURAL CHAMPIONS: AUTHORS</span>
            <span className="text-[#B99A5B]">2024 ARCHIVE</span>
          </div>
        </div>
      )}
    </header>
  );
};
