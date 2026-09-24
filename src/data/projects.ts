import type { Project } from '../types/project.ts'
import aiBreakdown from '../assets/projects/ai-game-recommender/breakdown-rift.webp'
import aiWeights from '../assets/projects/ai-game-recommender/model-weights.webp'
import clipperAddonsCard from '../assets/projects/clipper-for-youtube/addons-card.webp'
import clipperPanel from '../assets/projects/clipper-for-youtube/clip-panel.webp'
import engineMain from '../assets/projects/engine-optimizer/main-window.webp'
import ilvlDashboard from '../assets/projects/ilvl-upgrade-odds/dashboard.webp'
import lolRoc from '../assets/projects/lol-win-predictor/roc-comparison.webp'
import magicResults from '../assets/projects/magic-gamma-classifier/results.webp'
import magicRoc from '../assets/projects/magic-gamma-classifier/roc-comparison.webp'
import matchDetails from '../assets/projects/match-tracker/match-details.webp'
import matchHistory from '../assets/projects/match-tracker/match-history.webp'
import parallelConsole from '../assets/projects/parallel-name-sort/console-output.webp'
import pokedexNotFound from '../assets/projects/pokedex/not-found.webp'
import pokedexResult from '../assets/projects/pokedex/search-result.webp'
import powertrayMain from '../assets/projects/powertray/main-window.webp'
import powertrayPlans from '../assets/projects/powertray/plan-picker.webp'
import powertrayTray from '../assets/projects/powertray/tray-menu.webp'
import videoEditorMain from '../assets/projects/simple-video-editor/main-window.webp'
import steamAdd from '../assets/projects/steam-backlog-manager/add-game.webp'
import steamDetails from '../assets/projects/steam-backlog-manager/game-details.webp'
import steamLibrary from '../assets/projects/steam-backlog-manager/library.webp'
import marketplaceTracker from '../assets/projects/tl-marketplace-trackers/potential-tracker.webp'
import tlStatDefVsCrit from '../assets/projects/tl-stat-calculator/def-vs-crit.webp'

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
    overview:
      "A lightweight Windows utility that sits in the system tray and watches for the games you choose. When one starts, it switches Windows to the High Performance power plan; when it closes, it switches back to Balanced. A dashboard manages the game list, launchers that shouldn't trigger a switch, and which power plans to use.",
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
    images: [
      {
        src: powertrayMain,
        width: 1147,
        height: 787,
        alt: 'PowerTray main window: current plan Balanced, a Run at Windows Startup toggle, and lists of high-performance games and game launchers',
        caption: 'Main window with the game and launcher lists',
      },
      {
        src: powertrayTray,
        width: 322,
        height: 517,
        alt: 'Tray menu listing configured games and launchers with their icons, plus Steam Library, Show Window and Exit',
        caption: 'Tray menu with extracted game icons',
      },
      {
        src: powertrayPlans,
        width: 450,
        height: 311,
        alt: 'Select Power Plans dialog with dropdowns for the Balanced and High Performance plans',
        caption: 'Choosing which power plans to switch between',
      },
    ],
  },
  {
    slug: 'clipper-for-youtube',
    name: 'Clipper for YouTube',
    category: 'personal',
    summary:
      'Firefox and Chrome extension that clips part of a YouTube video and saves it as an MP4.',
    overview:
      "A browser extension for Firefox and Chrome that clips part of a YouTube video and saves it as an MP4 to share. It adds a Clip button to the YouTube player: set a start and end time, preview the clip, and save it at the quality you're watching. Everything happens in the browser, with no accounts or servers.",
    tech: ['TypeScript', 'React', 'WXT', 'Mediabunny', 'Vitest'],
    repoUrl: 'https://github.com/Oralino/youtube-clipper',
    releaseUrl: 'https://github.com/Oralino/youtube-clipper/releases/latest',
    features: [
      'A Clip button in the YouTube player controls, also available from the toolbar icon',
      'Start and end times typed in or taken from the current playback position',
      'Preview the clip before saving',
      "Records the playing video with MediaRecorder at a bitrate matched to its resolution, so the clip keeps the quality you're watching",
      "Converts to MP4 in the background with Mediabunny when the browser can't record MP4 directly",
      'Firefox and Chrome builds from one Manifest V3 codebase, with no data collection; unit-tested with Vitest',
    ],
    images: [
      {
        src: clipperPanel,
        width: 446,
        height: 520,
        alt: 'The Create clip panel over a YouTube video: Start 0:10 and End 0:21 with Use current time buttons, an optional file name, and Preview and Save video buttons',
        caption: 'Setting the start and end of a clip',
      },
      {
        src: clipperAddonsCard,
        width: 828,
        height: 72,
        alt: "Clipper for YouTube in Firefox's add-ons manager, switched on",
        caption: "Installed in Firefox's add-ons manager",
      },
    ],
  },
  {
    slug: 'tl-stat-calculator',
    name: 'TL Stat Calculator',
    category: 'personal',
    summary:
      'Desktop app for Throne & Liberty combat formulas, hidden stat thresholds and gear trade-offs.',
    overview:
      "A desktop calculator for Throne and Liberty's combat formulas. Each tab covers one mechanic, such as evasion, critical hits, heavy attacks, skill damage or crowd control, and turns your stats and the enemy's into an actual percentage chance or damage number. A trade-off tab compares two gear loadouts to show which one saves more HP against critical hits.",
    tech: ['Python', 'Tkinter'],
    repoUrl: 'https://github.com/Oralino/TL-Stat-Calculator',
    releaseUrl: 'https://github.com/Oralino/TL-Stat-Calculator/releases/latest',
    features: [
      "Evasion, critical hit and heavy attack chance from your stats against the enemy's",
      'Final critical and heavy damage after boosts and resistances',
      'Net skill damage modifier from Skill Damage Boost against Skill Damage Resistance',
      'Defense changes shown as actual incoming damage reduction',
      'Option A vs Option B loadout comparison against incoming critical hits',
      'Status effect and crowd control hit and miss probabilities',
    ],
    images: [
      {
        src: tlStatDefVsCrit,
        width: 1042,
        height: 579,
        alt: 'Def vs Crit Res tab comparing two loadouts: 3000 Defense with 20% Crit Res takes 5000.0, 2400 Defense with 35% Crit Res takes 5010.9, verdict Option A saves 10.9 more HP',
        caption: 'Comparing two gear loadouts against a critical hit',
      },
    ],
  },
  {
    slug: 'simple-video-editor',
    name: 'Simple Video Editor',
    category: 'personal',
    summary:
      'Video trimming and audio mixing tool with drag-and-drop, hardware-accelerated encoding and dual-track volume controls.',
    overview:
      'A desktop tool for trimming clips and mixing their audio without opening a full editor. It previews video with VLC, exports through FFmpeg, and can fetch a video straight from a YouTube URL. Game and mic audio are balanced separately, and exports either copy the video stream as is or re-encode it on the GPU.',
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
    images: [
      {
        src: videoEditorMain,
        width: 1497,
        height: 1156,
        alt: 'Video editor window: video preview with start and end trim controls, YouTube URL field, audio volume sliders, resolution and NVENC encoder dropdowns, and export settings',
        caption: 'Trim, mix and export from one window',
      },
    ],
  },
  {
    slug: 'ilvl-upgrade-odds',
    name: 'iLvl Upgrade Odds',
    category: 'personal',
    summary:
      "Desktop app showing the upgrade and failure chance for one attempt at raising an item's level.",
    overview:
      'A desktop app that shows the odds of a single item-level upgrade attempt. Pick an item type and current item level to see the chance of upgrading, the chance of failing, and the odds of every possible jump up to +5 levels. The odds come from a public Google Sheet; the app ships with a built-in copy and can update from the sheet.',
    tech: ['Python', 'Tkinter', 'PyInstaller'],
    repoUrl: 'https://github.com/Oralino/iLvl-Upgrade-Odds',
    releaseUrl: 'https://github.com/Oralino/iLvl-Upgrade-Odds/releases/latest',
    features: [
      'Upgrade and failure chance for one attempt; an attempt never lowers the item level',
      'Odds of every outcome, from staying at the same level to +5 levels',
      'Averages: levels gained per attempt, attempts per +1 iLvl and attempts until any upgrade',
      'Weapon, armor and accessory odds side by side',
      'Failure-chance chart across iLvl 51–90; click the chart to jump to a level',
      'Updates from the source Google Sheet, with a built-in copy for offline use',
    ],
    images: [
      {
        src: ilvlDashboard,
        width: 927,
        height: 1204,
        alt: 'iLvl Upgrade Odds dashboard for an accessory at iLvl 85: 42.08% upgrade chance, 57.92% failure chance, every possible result, other item types and a failure-chance chart by item level',
        caption: 'Accessory at iLvl 85, with the failure curve across levels',
      },
    ],
  },
  {
    slug: 'tl-marketplace-trackers',
    name: 'TL Marketplace Trackers',
    category: 'personal',
    summary: 'Python scrapers for the Throne & Liberty marketplace.',
    overview:
      'Python experiments for reading Throne and Liberty marketplace prices without logging into the game. Playwright loads the tracker sites in a browser and captures their JSON responses; two PyQt6 desktop apps show the prices in a filterable table, and a FastAPI version serves the same data as an API for a Node.js front end.',
    tech: ['Python', 'Playwright', 'FastAPI', 'PyQt6'],
    repoUrl: 'https://github.com/Oralino/ThroneAndLibertyMarketPlaceTrackers',
    features: [
      "Captures JSON from the sites' network responses with Playwright instead of parsing HTML",
      'Finds the main dataset by searching the nested JSON for its largest list',
      'PyQt6 desktop tables with live refresh and filtering',
      'FastAPI endpoint backed by a background scrape loop',
    ],
    images: [
      {
        src: marketplaceTracker,
        width: 1238,
        height: 785,
        alt: 'Potential Tracker window: searchable table of potential items with kind, listed status, floor price and listing count',
        caption: 'Potential Tracker with live prices',
      },
    ],
  },
  {
    slug: 'tnl-api-scrapper',
    name: 'TNL API Scrapper',
    category: 'personal',
    summary: 'Node.js scraper for Throne & Liberty data.',
    overview:
      "A Node.js service that keeps an up-to-date copy of Throne and Liberty potential-item prices and serves it as JSON. Playwright opens the tracker site with a saved browser session and captures the site's own API response; Express serves the cleaned-up data, refreshed every five minutes.",
    tech: ['Node.js', 'Express', 'Playwright'],
    repoUrl: 'https://github.com/Oralino/TNL-API-Scrapper',
    features: [
      'First run opens a visible browser to log in; later runs reuse the saved session headlessly',
      "Captures the site's API response instead of scraping the page",
      "Keeps only each item's name, kind, listing counts and floor price",
      'Refreshes in the background every 5 minutes, with a pending status until the first scrape finishes',
    ],
  },

  // Coursework (McMaster University)
  {
    slug: 'ai-game-recommender',
    name: 'AI Game Recommender',
    category: 'coursework',
    course: '4AI3',
    summary:
      'Hybrid Steam game recommender combining content-based, sentence-embedding and collaborative models, with Steam library import.',
    overview:
      'A desktop app that recommends Steam games based on the games you already play. It blends content-based matching on game metadata, semantic matching with sentence embeddings, and collaborative filtering on player playtime, and shows how much each model contributed to every suggestion.',
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
    features: [
      'Search games with autocomplete, or import a library from Steam by SteamID64',
      'Content-based model on game metadata (TF-IDF)',
      'Semantic model using all-MiniLM-L6-v2 sentence embeddings',
      'Collaborative filtering on user playtime data',
      "Per-game breakdown of each model's contribution",
      'CustomTkinter dark-mode interface with game cards',
    ],
  },
  {
    slug: 'magic-gamma-classifier',
    name: 'MAGIC Gamma Classifier',
    category: 'coursework',
    course: '4DA3',
    summary:
      "Fisher's Linear Discriminant vs Random Forest on the UCI MAGIC Gamma Telescope dataset, with confusion matrices and ROC/AUC.",
    overview:
      "Classifies events from the UCI MAGIC Gamma Telescope dataset as gamma-ray signal or hadron background, comparing Fisher's Linear Discriminant with a Random Forest. The Random Forest reached 87.8% accuracy (AUC 0.93) against 78.7% (AUC 0.84), at the cost of a much longer training time.",
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
    features: [
      'Standardizes the 10 image features with a 75/25 train/test split',
      'Trains Fisher Linear Discriminant Analysis and Random Forest classifiers',
      'Reports accuracy, training and testing time, and confusion matrices',
      'ROC curve and AUC comparison',
    ],
  },
  {
    slug: 'lol-win-predictor',
    name: 'LoL Win Predictor',
    category: 'coursework',
    course: '4DM3',
    summary:
      'kNN, logistic regression and AdaBoost implemented from scratch to predict ranked League of Legends matches from 10-minute stats.',
    overview:
      'Predicts whether the blue team wins a high-Diamond ranked League of Legends match using only stats from the first 10 minutes. k-nearest neighbours, logistic regression and AdaBoost are implemented from scratch and compared on accuracy, speed and cross-validation; kNN and logistic regression both reach an AUC of 0.80.',
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
    features: [
      'kNN, logistic regression and AdaBoost written by hand with NumPy',
      'Feature normalization and cross-validation',
      'Accuracy and training/testing time comparison',
      'Confusion matrices and a ROC curve comparison',
    ],
  },
  {
    slug: 'parallel-name-sort',
    name: 'Parallel Name Sort',
    category: 'coursework',
    course: '4CC3',
    summary:
      'Depth-limited parallel quicksort of 100,000 names using Parallel.Invoke.',
    overview:
      'A C# console app that sorts 100,000 names by last name, then first name. The quicksort runs its recursive partitions in parallel with Parallel.Invoke up to a depth based on the CPU core count, then falls back to sequential sorting, and times the run with Stopwatch.',
    tech: ['C#', '.NET', 'Task Parallel Library'],
    repoUrl: 'https://github.com/Oralino/4CC3-Parallel-Name-Sort',
    images: [
      {
        src: parallelConsole,
        width: 650,
        height: 439,
        alt: 'Console output: 99,929 names read, 16 cores with a maximum parallel depth of 8, sorted in 18 milliseconds, then the first 10 sorted names',
        caption: 'Sorting 99,929 names in 18 ms on 16 cores',
      },
    ],
  },
  {
    slug: 'engine-optimizer',
    name: 'Engine Optimizer',
    category: 'coursework',
    course: '4SA3',
    summary:
      'MVC desktop app for editing game Engine.ini tweaks per GPU, using an object-pooled MongoDB connection, Google Maps Places lookup and Strategy-pattern JSON/INI export.',
    overview:
      'A Tkinter desktop app for keeping game Engine.ini tweaks organized by game and GPU. It is structured as MVC, stores profiles in MongoDB through an Object Pool that reuses connections, and uses the Strategy pattern to export a profile as JSON or raw INI.',
    tech: ['Python', 'Tkinter', 'MongoDB', 'Google Maps API'],
    repoUrl: 'https://github.com/Oralino/4SA3-Project1',
    features: [
      'Save, load and delete a profile per game with its GPU and Engine.ini tweaks',
      'Import and export .ini files, with an expanded editor for long configs',
      'MongoDB storage through an Object Pool that reuses client connections',
      'Strategy-pattern exporters for JSON and raw INI',
      'Google Maps Places search for nearby PC shops',
    ],
    images: [
      {
        src: engineMain,
        width: 602,
        height: 719,
        alt: 'Engine Optimizer window with a Palworld profile for an RTX 4070, Engine.ini tweaks, file and profile buttons, and a list of saved profiles',
        caption: 'Editor with a sample profile loaded',
      },
    ],
  },
  {
    slug: 'steam-backlog-manager',
    name: 'Steam Backlog Manager',
    category: 'coursework',
    course: '4WP3',
    summary: 'Server-rendered CRUD app for tracking a game backlog.',
    overview:
      "A server-rendered web app for tracking a game backlog: what you're playing, what you've finished and what's next. Express handles the routes, SQLite stores each game's status, playtime and rating, and Mustache templates render the pages with Bootstrap.",
    tech: ['Node.js', 'Express', 'Mustache', 'SQLite', 'Bootstrap'],
    repoUrl: 'https://github.com/Oralino/4WP3-Project1',
    featured: true,
    images: [
      {
        src: steamLibrary,
        width: 1440,
        height: 900,
        alt: 'Game library page: cards for each game with status, playtime and rating, sort buttons for title, rating and playtime, and Details, Edit and Delete actions',
        caption: 'Library view with sorting',
      },
      {
        src: steamDetails,
        width: 640,
        height: 357,
        alt: 'Details page for Throne and Liberty: status In Progress, 45.5 hours played, rating 8 out of 10, date added',
        caption: 'Game details',
      },
      {
        src: steamAdd,
        width: 640,
        height: 566,
        alt: 'Add a New Game form with title, playtime, status and rating fields',
        caption: 'Adding a game',
      },
    ],
    features: [
      'Add, view, edit and delete games with their status, playtime and personal rating',
      'Sort the library by title, rating or playtime',
      'MVC structure: Express routes, SQLite model and Mustache views in separate modules',
      'Backend validation with the form re-rendered showing the error',
    ],
  },
  {
    slug: 'match-tracker',
    name: 'Match Tracker',
    category: 'coursework',
    course: '4WP3',
    summary:
      'REST API with a React Native client for logging game matches (character, kills, KDA).',
    overview:
      'A mobile and web app for logging game matches, with a React Native (Expo) client and an Express and SQLite REST API. Matches are grouped into collapsible folders by game, and each one records the character played, kills and KDA.',
    tech: ['React Native', 'Expo', 'Express', 'SQLite'],
    repoUrl: 'https://github.com/Oralino/4WP3-Project2',
    features: [
      'Collapsible folders that group match history by game',
      'Create, view, edit and delete matches through the REST API',
      'Native alert dialogs on iOS and Android, browser confirmations on the web, chosen with Platform.OS',
      "Clear one game's matches with parallel Promise.all requests, or wipe all data",
      'Input validation on the client and parameterized SQL queries on the server',
    ],
    images: [
      {
        src: matchHistory,
        width: 517,
        height: 1142,
        alt: 'Match History screen with a collapsible League of Legends folder and buttons to log a new match or clear all data',
        caption: 'Match history grouped by game',
      },
      {
        src: matchDetails,
        width: 507,
        height: 1142,
        alt: 'Match Details form with game title, character played, kills and KDA ratio fields',
        caption: 'Logging a match',
      },
    ],
  },
  {
    slug: 'pokedex',
    name: 'Pokédex',
    category: 'coursework',
    course: '4WP3',
    summary:
      'Express server and frontend that fetches and displays Pokémon data.',
    overview:
      'A small Express app that looks up any Pokémon through PokéAPI. The front end sends the search to the server, which returns the sprite, height and weight, plus the Pokédex entry and wild encounter locations when those options are ticked.',
    tech: ['Node.js', 'Express', 'axios'],
    repoUrl: 'https://github.com/Oralino/4WP3-Assignment2',
    features: [
      'Express route that calls PokéAPI with axios',
      'Optional species lookup for the first English Pokédex entry',
      'Optional encounter lookup for up to three wild locations',
      "Clear error message when a Pokémon doesn't exist",
    ],
    images: [
      {
        src: pokedexResult,
        width: 660,
        height: 940,
        alt: 'Pokémon Explorer showing Charizard (#6) with its sprite, height, weight, Pokédex entry and three encounter locations',
        caption: 'Search with species and location data',
      },
      {
        src: pokedexNotFound,
        width: 660,
        height: 554,
        alt: 'Pokémon Explorer showing "Pokemon not found! Check your spelling." for an invalid name',
        caption: 'Error message for an unknown Pokémon',
      },
    ],
  },
]
