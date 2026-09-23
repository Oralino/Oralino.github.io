import type { Project } from '../types/project.ts'

// Mirrors CONTENT.md. Update CONTENT.md first, then this file.
// Private repos are intentionally not listed yet (see TASKS.md).

export const projects: Project[] = [
  // Personal projects
  {
    slug: 'powertray',
    name: 'PowerTray',
    category: 'personal',
    summary:
      'Windows tray utility that switches to the High Performance power plan while games run, then back to Balanced when they close.',
    tech: ['Python', 'PyQt6', 'CustomTkinter', 'psutil', 'PyInstaller'],
    repoUrl: 'https://github.com/Oralino/PowerTrayOptimizer',
  },
  {
    slug: 'tl-stat-calculator',
    name: 'TL Stat Calculator',
    category: 'personal',
    summary:
      'Desktop app for Throne & Liberty combat formulas, hidden stat thresholds and gear trade-offs.',
    tech: ['Python', 'Tkinter'],
    repoUrl: 'https://github.com/Oralino/TL-Stat-Calculator',
  },
  {
    slug: 'simple-video-editor',
    name: 'Simple Video Editor',
    category: 'personal',
    summary:
      'Video trimming and audio mixing tool with drag-and-drop, hardware-accelerated encoding and dual-track volume controls.',
    tech: ['Python', 'CustomTkinter', 'FFmpeg', 'VLC'],
    repoUrl: 'https://github.com/Oralino/SimpleVideoEditor',
  },
  {
    slug: 'ilvl-upgrade-odds',
    name: 'iLvl Upgrade Odds',
    category: 'personal',
    summary:
      "Desktop app showing the upgrade and failure chance for one attempt at raising an item's level.",
    tech: ['Python', 'Tkinter', 'PyInstaller'],
    repoUrl: 'https://github.com/Oralino/iLvl-Upgrade-Odds',
  },
  {
    slug: 'tl-marketplace-trackers',
    name: 'TL Marketplace Trackers',
    category: 'personal',
    summary: 'Python scrapers for the Throne & Liberty marketplace.',
    tech: ['Python', 'Playwright', 'FastAPI', 'PyQt6'],
    repoUrl: 'https://github.com/Oralino/ThroneAndLibertyMarketPlaceTrackers',
  },
  {
    slug: 'tnl-api-scrapper',
    name: 'TNL API Scrapper',
    category: 'personal',
    summary: 'Node.js scraper for Throne & Liberty data.',
    tech: ['Node.js', 'Express', 'Playwright'],
    repoUrl: 'https://github.com/Oralino/TNL-API-Scrapper',
  },

  // Coursework (McMaster University)
  {
    slug: 'ai-game-recommender',
    name: 'AI Game Recommender',
    category: 'coursework',
    course: '4AI3',
    summary:
      'Hybrid Steam game recommender combining content-based, sentence-embedding and collaborative models, with Steam library import.',
    tech: [
      'Python',
      'scikit-learn',
      'sentence-transformers',
      'pandas',
      'CustomTkinter',
      'Steam Web API',
    ],
    repoUrl: 'https://github.com/Oralino/4AI3-GameRecommender',
  },
  {
    slug: 'magic-gamma-classifier',
    name: 'MAGIC Gamma Classifier',
    category: 'coursework',
    course: '4DA3',
    summary:
      "Fisher's Linear Discriminant vs Random Forest on the UCI MAGIC Gamma Telescope dataset, with confusion matrices and ROC/AUC.",
    tech: ['Python', 'scikit-learn', 'pandas', 'matplotlib', 'seaborn'],
    repoUrl: 'https://github.com/Oralino/4DA3-MAGIC-Gamma-Classifier',
  },
  {
    slug: 'lol-win-predictor',
    name: 'LoL Win Predictor',
    category: 'coursework',
    course: '4DM3',
    summary:
      'kNN, logistic regression and AdaBoost implemented from scratch to predict ranked League of Legends matches from 10-minute stats.',
    tech: ['Python', 'NumPy', 'matplotlib'],
    repoUrl: 'https://github.com/Oralino/4DM3-LoL-Win-Predictor',
  },
  {
    slug: 'parallel-name-sort',
    name: 'Parallel Name Sort',
    category: 'coursework',
    course: '4CC3',
    summary:
      'Depth-limited parallel quicksort of 100,000 names using Parallel.Invoke.',
    tech: ['C#', '.NET', 'Task Parallel Library'],
    repoUrl: 'https://github.com/Oralino/4CC3-Parallel-Name-Sort',
  },
  {
    slug: 'engine-optimizer',
    name: 'Engine Optimizer',
    category: 'coursework',
    course: '4SA3',
    summary:
      'MVC desktop app for editing game Engine.ini tweaks per GPU, using an object-pooled MongoDB connection, Google Maps Places lookup and Strategy-pattern JSON/INI export.',
    tech: ['Python', 'Tkinter', 'MongoDB', 'Google Maps API'],
    repoUrl: 'https://github.com/Oralino/4SA3-Project1',
  },
  {
    slug: 'steam-backlog-manager',
    name: 'Steam Backlog Manager',
    category: 'coursework',
    course: '4WP3',
    summary: 'Server-rendered CRUD app for tracking a game backlog.',
    tech: ['Node.js', 'Express', 'Mustache', 'SQLite'],
    repoUrl: 'https://github.com/Oralino/4WP3-Project1',
  },
  {
    slug: 'match-tracker',
    name: 'Match Tracker',
    category: 'coursework',
    course: '4WP3',
    summary:
      'REST API with a React Native client for logging game matches (character, kills, KDA).',
    tech: ['React Native', 'Expo', 'Express', 'SQLite'],
    repoUrl: 'https://github.com/Oralino/4WP3-Project2',
  },
  {
    slug: 'pokedex',
    name: 'Pokédex',
    category: 'coursework',
    course: '4WP3',
    summary:
      'Express server and frontend that fetches and displays Pokémon data.',
    tech: ['Node.js', 'Express', 'axios'],
    repoUrl: 'https://github.com/Oralino/4WP3-Assignment2',
  },
]
