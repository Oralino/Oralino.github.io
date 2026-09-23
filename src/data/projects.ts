import type { Project } from '../types/project.ts'
import aiBreakdown from '../assets/projects/ai-game-recommender/breakdown-rift.webp'
import aiWeights from '../assets/projects/ai-game-recommender/model-weights.webp'
import lolRoc from '../assets/projects/lol-win-predictor/roc-comparison.webp'
import magicResults from '../assets/projects/magic-gamma-classifier/results.webp'
import magicRoc from '../assets/projects/magic-gamma-classifier/roc-comparison.webp'

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
    releaseUrl: 'https://github.com/Oralino/PowerTrayOptimizer/releases/latest',
    featured: true,
    features: [
      'Multi-threaded monitoring of configured game processes with psutil',
      'Switches between Balanced and High Performance power plans through Windows powercfg',
      'Drag-and-drop executable management, configurable power plans and Windows startup integration',
      'Real-time tray status indicators',
      'Extracts executable icons through the Win32 API',
      'Parses Steam appmanifest files to launch installed Steam games by app ID',
    ],
  },
  {
    slug: 'tl-stat-calculator',
    name: 'TL Stat Calculator',
    category: 'personal',
    summary:
      'Desktop app for Throne & Liberty combat formulas, hidden stat thresholds and gear trade-offs.',
    tech: ['Python', 'Tkinter'],
    repoUrl: 'https://github.com/Oralino/TL-Stat-Calculator',
    releaseUrl: 'https://github.com/Oralino/TL-Stat-Calculator/releases/latest',
  },
  {
    slug: 'simple-video-editor',
    name: 'Simple Video Editor',
    category: 'personal',
    summary:
      'Video trimming and audio mixing tool with drag-and-drop, hardware-accelerated encoding and dual-track volume controls.',
    tech: ['Python', 'CustomTkinter', 'FFmpeg', 'VLC'],
    repoUrl: 'https://github.com/Oralino/SimpleVideoEditor',
    releaseUrl: 'https://github.com/Oralino/SimpleVideoEditor/releases/latest',
    featured: true,
    features: [
      'Video trimming with timeline preview and resolution scaling',
      'Asynchronous processing with encoding progress tracking and cancellation cleanup',
      'Multi-track audio mixing and stream passthrough',
      'Hardware-accelerated encoding through NVIDIA NVENC, AMD AMF and Intel QSV',
      'Drag-and-drop video loading and YouTube fetching through yt-dlp',
      'Configurable export settings and dependency validation for VLC and FFmpeg',
    ],
  },
  {
    slug: 'ilvl-upgrade-odds',
    name: 'iLvl Upgrade Odds',
    category: 'personal',
    summary:
      "Desktop app showing the upgrade and failure chance for one attempt at raising an item's level.",
    tech: ['Python', 'Tkinter', 'PyInstaller'],
    repoUrl: 'https://github.com/Oralino/iLvl-Upgrade-Odds',
    releaseUrl: 'https://github.com/Oralino/iLvl-Upgrade-Odds/releases/latest',
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
    images: [
      {
        src: aiBreakdown,
        width: 1600,
        height: 1067,
        alt: 'Bar chart of the recommendation breakdown for RIFT: cluster and collaborative match 100%, semantic match 66.5%, content match 62.1%',
        caption: 'Why one game was recommended, per model',
      },
      {
        src: aiWeights,
        width: 1200,
        height: 1200,
        alt: 'Pie chart of the hybrid model weights: semantic match 35%, content match 30%, collaborative match 25%, cluster boost 10%',
        caption: 'Fixed contribution weights of the hybrid model',
      },
    ],
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
    images: [
      {
        src: magicRoc,
        width: 800,
        height: 600,
        alt: 'ROC curves: Random Forest AUC 0.93 vs Fisher Linear Discriminant AUC 0.84',
        caption: 'ROC comparison',
      },
      {
        src: magicResults,
        width: 549,
        height: 370,
        alt: 'Console output: Fisher Linear Discriminant accuracy 0.7868, Random Forest accuracy 0.8780, with training times and confusion matrices',
        caption: 'Accuracy, timing and confusion matrices for both models',
      },
    ],
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
    images: [
      {
        src: lolRoc,
        width: 800,
        height: 600,
        alt: 'ROC curves for match outcome prediction: kNN AUC 0.80, logistic regression AUC 0.80, AdaBoost AUC 0.73',
        caption: 'ROC comparison of the three from-scratch models',
      },
    ],
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
    tech: ['Node.js', 'Express', 'Mustache', 'SQLite', 'Bootstrap'],
    repoUrl: 'https://github.com/Oralino/4WP3-Project1',
    featured: true,
    features: [
      'Full-stack MVC app with Node.js and Express, storing games, playtime hours and metadata in SQLite',
      'Mustache and Bootstrap templates for adding games, updating completion state and showing priority badges',
      'Controller-model routing that keeps business logic separate, with backend validation',
    ],
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
