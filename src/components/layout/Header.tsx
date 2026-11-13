import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';
import { useTheme } from '../../app/providers/ThemeProvider';
import { Trophy, Shield, Menu, X, Sparkles } from 'lucide-react';
import { TeamId } from '../../data/types';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentTheme, setTheme } = useTheme();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'The Four Cousins', path: '/owners' },
    { label: 'Teams', path: '/teams' },
    { label: 'Statistics', path: '/stats' },
    { label: 'Match Centre', path: '/matches' },
    { label: 'Hall of Fame', path: '/hall-of-fame' },
  ];

  const themeOptions: Array<{ id: 'neutral' | TeamId; label: string; color: string }> = [
    { id: 'neutral', label: 'League Gold', color: '#F5B800' },
    { id: 'authors', label: 'Authors', color: '#00E676' },
    { id: 'champions', label: 'Champions', color: '#FF2E4D' },
    { id: 'skyshot', label: 'Skyshot', color: '#00D2FF' },
    { id: 'knights', label: 'Knights', color: '#E2E8F0' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0B10]/95 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      {/* Top tournament status ribbon */}
      <div className="bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-blue-500/20 border-b border-white/5 py-1 text-xs">
        <Container className="flex items-center justify-between text-slate-300">
          <div className="flex items-center space-x-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-amber-300 tracking-wider uppercase text-[11px]">
              Inaugural Champions:
            </span>
            <span className="font-bold text-white tracking-wide">AUTHORS</span>
            <span className="hidden sm:inline text-slate-400">• Chased 226 in 19.2 ov</span>
          </div>

          {/* Quick Team Theme Switcher */}
          <div className="flex items-center space-x-1.5">
            <span className="hidden md:inline text-[10px] text-slate-400 uppercase tracking-widest mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Atmosphere:
            </span>
            {themeOptions.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={`Switch to ${t.label} theme`}
                className={`w-3.5 h-3.5 rounded-full transition-transform border ${
                  currentTheme === t.id
                    ? 'scale-125 ring-2 ring-white/50 border-white'
                    : 'opacity-70 hover:opacity-100 hover:scale-110 border-transparent'
                }`}
                style={{ backgroundColor: t.color }}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Main navigation header */}
      <Container className="py-3 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src="/assets/brand/apl-logo.png"
              alt="APL Ashes Premier League Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display text-2xl font-black text-white tracking-wider">
                APL
              </span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-400/30">
                S1
              </span>
            </div>
            <p className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase">
              The Legends Legacy
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm border border-white/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action badge */}
        <div className="hidden sm:flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-mono text-slate-300">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>4 Cousins • 4 Teams</span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0B10] border-b border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider ${
                location.pathname === link.path
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

