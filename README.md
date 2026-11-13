# Ashes Premier League (APL)
## Season 1: The Legends Legacy

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-2.1-729b1b.svg)](https://vitest.dev/)
[![Data Integrity](https://img.shields.io/badge/Data_Integrity-100%25_Verified-success.svg)](./tests/data-integrity.test.ts)

A broadcast-grade interactive digital archive and web experience commemorating **Season 1: The Legends Legacy** of the **Ashes Premier League (APL)**.

---

## 🏆 The APL Story

What originated as competitive cricket matches between four cousins grew into a structured championship tournament: the **Ashes Premier League**. Across 12 intense league-stage fixtures and 3 high-stakes playoff clashes, four franchises contested the inaugural championship crown.

The tournament culminated in an unforgettable Championship Final where **AUTHORS** successfully chased down a formidable target of 226 in 19.2 overs, claiming the inaugural APL Season 1 trophy by 3 wickets.

This web application serves as the permanent digital archive of the league, preserving every ball, run, wicket, scorecard, and individual milestone.

---

## ⚔️ The Four Franchises & Ownership

Each franchise was independently founded, drafted, and tactically managed by one of the four cousins:

| Franchise | Owner | Primary Color | Selected Captain Identity |
| :--- | :--- | :--- | :--- |
| **AUTHORS** 🏆 *(Inaugural Champions)* | **Dharm** | Forest Green (`#00E676`) | Rohit Sharma |
| **CHAMPIONS** *(Finalists)* | **Umang (UB)** | Crimson Red (`#FF3366`) | MS Dhoni |
| **SKYSHOT** | **Shubham (Sky)** | Royal Blue (`#00E5FF`) | Jos Buttler |
| **KNIGHTS** | **Jay** | Steel Silver (`#E0E0E0`) | Shubman Gill |

### ⚠️ Distinct Identity Architecture
> **Important Historical Context**:  
> In the APL tournament architecture, the four cousins are the strategic team owners, roster managers, and match competitors. International professional cricketers (such as Rohit Sharma, MS Dhoni, Jos Buttler, and Shubman Gill) serve as **symbolic captain avatars and digital franchise emblems** selected by each owner, not as literal tournament participants.

---

## 📊 Tournament Structure & Data Integrity

Season 1 encompassed 15 complete fixtures:
- **12 League Fixtures**: Double round-robin format between all four franchises.
- **3 Playoff Fixtures**: Semi-Final 1, Semi-Final 2, and the Championship Final.

### Authoritative Aggregate Reconciliation
To guarantee absolute archival integrity, the statistical engine enforces strict reconciliation accounting against the original tournament records:

- **Official League Batter Runs Aggregate**: **5,945 runs**
  - Raw innings sum: 5,930 runs
  - Documented Winsmoke innings reconstruction (+13 runs): 5,943 runs
  - Explicit league-level reconciliation entry (+2 runs): 5,945 runs
- **Official League Bowler Wickets Aggregate**: **101 wickets** (100% balanced across all dismissals)
- **Mathematical Integrity Validation**: 10 automated test suites validate Orange Cap rankings, Purple Cap totals, team point tables, and head-to-head records on every build.

Detailed mathematical reconciliation accounting is openly documented in [`src/data/seasons/season1/reconciliation.ts`](./src/data/seasons/season1/reconciliation.ts).

---

## 💻 Technology Stack

- **UI Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build System**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom stadium floodlight gradients and team dynamic theme variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Testing**: [Vitest](https://vitest.dev/) unit and integration test suite

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` (version 9.0 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/skyuchiha69/apl-season-1.git
   cd apl-season-1
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run type-check` | Runs TypeScript compiler (`tsc --noEmit`) to verify types across the codebase. |
| `npm run test` | Executes the Vitest test runner across data integrity and component suites. |
| `npm run build` | Compiles TypeScript and builds production-optimized static assets into `dist/`. |
| `npm run preview` | Locally serves the production build from `dist/` for verification. |

---

## 🛡️ Archival & Privacy Notice

This repository contains the authorized public digital archive of APL Season 1. Private personal webcam captures and original planning scans are excluded from public distribution to respect participant privacy while fully preserving authentic digital scores, statistics, and in-game 3D captures.

---

## 📄 License

This project is a personal archive and is licensed for non-commercial historical preservation. All franchise logos, designs, and historical records are copyright © APL (Ashes Premier League).

