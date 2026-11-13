import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { SeasonProvider } from './providers/SeasonProvider';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AppRouter } from './Router';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SeasonProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-[#0A0B10] text-slate-100">
            <Header />
            <main className="flex-grow">
              <AppRouter />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </SeasonProvider>
    </ThemeProvider>
  );
};

export default App;

