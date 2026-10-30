import type { Project } from '../types/project.ts'
import aiBreakdown from '../assets/projects/ai-game-recommender/breakdown-rift.webp'
import aiWeights from '../assets/projects/ai-game-recommender/model-weights.webp'
import aion2Calculator from '../assets/projects/aion2-crafting-calculator/calculator.webp'
import clipperAddonsCard from '../assets/projects/clipper-for-youtube/addons-card.webp'
import clipperPanel from '../assets/projects/clipper-for-youtube/clip-panel.webp'
import daevaHome from '../assets/projects/daeva-kit/home.webp'
import daevaStopBar from '../assets/projects/daeva-kit/stop-bar.webp'
import daevaPingAlert from '../assets/projects/daeva-kit/ping-alert.webp'
import daevaSpellIcons from '../assets/projects/daeva-kit/spell-icons.webp'
import daevaPetsPanel from '../assets/projects/daeva-kit/pets-panel.webp'
import daevaRadar from '../assets/projects/daeva-kit/radar-page.webp'
import daevaWeather from '../assets/projects/daeva-kit/weather-page.webp'
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
import powertrayPip from '../assets/projects/powertray/pip-window.webp'
import powertrayTray from '../assets/projects/powertray/tray-menu.webp'
import videoEditorMain from '../assets/projects/simple-video-editor/main-window.webp'
import steamAdd from '../assets/projects/steam-backlog-manager/add-game.webp'
import steamDetails from '../assets/projects/steam-backlog-manager/game-details.webp'
import steamLibrary from '../assets/projects/steam-backlog-manager/library.webp'
import marketplaceTracker from '../assets/projects/tl-marketplace-trackers/potential-tracker.webp'
import tlStatDefVsCrit from '../assets/projects/tl-stat-calculator/def-vs-crit.webp'

// Mirrors CONTENT.md. Update CONTENT.md first, then this file.
// Private repos are listed without repo or release links (see CONTENT.md).

export const projects: Project[] = [
  // Personal projects
  {
    slug: 'daeva-kit',
    name: 'Daeva Kit',
    category: 'personal',
    summary:
      "Windows toolkit for AION 2 that reads the game's own network traffic for a minimap radar, ping meter, skill cooldowns and pet tracking.",
    overview:
      "A Windows toolkit for AION 2: one tray app with a page per tool. It reads the game client's own network traffic and the screen, then draws click-through overlays over the game: a radar that marks nearby cubes on the minimap with their distance and direction, markers on the world map, a ping meter with lag alerts, skill cooldown and buff icons, and a panel for the pet souls you're farming. It never sends or changes packets, touches the game's memory or automates input.",
    tech: [
      'Python',
      'Scapy',
      'Npcap',
      'NumPy',
      'mss',
      'Tkinter',
      'PyInstaller',
    ],
    featured: true,
    features: [
      "Read-only packet capture with Scapy and Npcap, decoding the game's LZ4-compressed messages; works through ping boosters like ExitLag via loopback capture",
      'Minimap radar with distance rings, a line to the nearest cube and toasts; finds the minimap on screen by itself and learns new spawn types from clips you mark in game',
      "Ping meter with the in-game ping, the network round-trip and the last minute's maximum, and lag alerts that say whether a spike came from the PC, the network or the server",
      "Skill cooldown and buff icons you place anywhere over the game, with key capture and snapping into rows; skill names and icons from NC's public character pages",
      "Pet panel with the souls the pet you're farming needs for its next level, and which monsters in view drop pet souls",
      'World map markers with a category filter, and a bar at the minimap with Stop, the ping, the weather from Open-Meteo and a button for the NotMeter DPS meter',
      'Tray app with a setup checklist, Start with Windows, a global Play / Stop hotkey and self-updates checked by size and SHA-256; overlays hidden from screen capture',
    ],
    images: [
      {
        src: daevaHome,
        width: 900,
        height: 640,
        alt: "Daeva Kit's Home page: a sidebar with Radar, Pets, Spells, World map, DPS meter, Ping meter and Weather; a green Play button; and a checklist with Npcap installed, Administrator yes, minimap set up and game found",
        caption: 'Home page with the before-playing checklist',
      },
      {
        src: daevaStopBar,
        width: 528,
        height: 67,
        alt: 'The bar at the minimap: a status dot, Stop, DPS, a 38 ms ping, 18°C with a cloudy weather icon, and a move handle',
        caption:
          'The bar at the minimap with the ping and weather (sample data)',
      },
      {
        src: daevaPingAlert,
        width: 433,
        height: 118,
        alt: 'Ping panel showing 1210 ms in red, NET 19 and MAX 1210, with a red alert: ping 1210 server, network 60, freeze 450, 3s ago',
        caption: 'A lag alert in the ping panel (sample data)',
      },
      {
        src: daevaSpellIcons,
        width: 310,
        height: 138,
        alt: 'Skill and buff icons over the game: two buff timers at 24 and 0.7 seconds above five skills on keys 1, 2, Q, E and S+F, three of them cooling down',
        caption: 'Skill cooldown and buff icons (sample data)',
      },
      {
        src: daevaPetsPanel,
        width: 329,
        height: 217,
        alt: 'Pets panel: a Cogni pet, 3 of its monsters in view, 41 of 75 souls with 34 to Lv3, and 4 more pets nearby',
        caption: 'Pets panel with the pet being farmed (sample data)',
      },
      {
        src: daevaRadar,
        width: 900,
        height: 640,
        alt: 'Radar page: the on/off switch and overlay options for radar style (disc or dots), distance rings, distance labels, the no-position hint and a toast for every new cube',
        caption: 'Radar settings',
      },
      {
        src: daevaWeather,
        width: 900,
        height: 640,
        alt: 'Weather page: the on/off switch, a sample place of Seoul, South Korea with Find my city and Change buttons, Celsius or Fahrenheit, and a switch to show it on the folded Stop bar',
        caption: 'Weather settings (sample place)',
      },
    ],
  },
  {
    slug: 'powertray',
    name: 'PowerTray',
    category: 'personal',
    summary:
      'Windows tray utility that switches to High Performance while games run and plays any game in a floating picture-in-picture window.',
    overview:
      "A Windows utility that sits in the system tray and switches Windows to the High Performance power plan while the games you choose are running, then back to Balanced when they close. It can also play any game, launcher or open window as a floating picture-in-picture player, like a browser's pop-out video: the game keeps running at full resolution on an invisible virtual monitor while a small always-on-top window shows it live and passes your mouse and keyboard through.",
    tech: [
      'Python',
      'CustomTkinter',
      'PyQt6',
      'pywin32',
      'psutil',
      'PyInstaller',
    ],
    featured: true,
    features: [
      'Watches the configured game processes with psutil and switches power plans through Windows powercfg',
      'Picture-in-picture for any game, launcher or open window: a live DWM thumbnail of the game, which runs on a virtual monitor from the bundled Virtual Display Driver',
      'Click into the PiP to play: the mouse and keyboard go to the game, and holding Alt gives the cursor back',
      "Switches a fullscreen game to windowed for the PiP and back afterwards, and remembers each program's PiP size",
      'Sidebar window with Home, Games, Launchers and Open windows pages; drag in .exe files or shortcuts, which keep their launch arguments',
      "Tray menu with the games' extracted icons, Launch in PiP and Steam Library, plus self-updates checked by size and SHA-256",
    ],
    images: [
      {
        src: powertrayMain,
        width: 1120,
        height: 807,
        alt: "PowerTray's Home page: a sidebar with Home, Games, Launchers, Open windows, Updates and Settings; the last played launcher with Launch and Launch PiP buttons; Balanced when no game is running and High performance when one is; and a PiP checklist with the Virtual Display Driver installed and the virtual monitor on at 3440x1440",
        caption:
          'Home page with the last played game, power plans and PiP checklist',
      },
      {
        src: powertrayPip,
        width: 2000,
        height: 815,
        alt: "PowerTray's window on the left showing High Performance while Wuthering Waves plays in a floating picture-in-picture window at the bottom right, both in front of a white canvas",
        caption:
          'A game playing in the picture-in-picture window, in front of other windows',
      },
      {
        src: powertrayTray,
        width: 440,
        height: 675,
        alt: 'Tray menu listing games and launchers with their icons, then Launch in PiP and PiP a running window submenus, Steam Library, Show Window and Exit',
        caption: 'Tray menu with Launch in PiP',
      },
    ],
  },
  {
    slug: 'aion2-crafting-calculator',
    name: 'Aion2 Crafting Calculator',
    category: 'personal',
    summary:
      "Windows desktop app for AION 2 that works out a craft's real cost and profit, reading market prices from the screen.",
    overview:
      "A Windows desktop app for AION 2 that works out what a craft really costs and whether it's worth doing. Pick a recipe and it lays out the whole combo chain tier by tier, using your in-game success chance and the 25% combo chance to work out how many crafts each tier needs. Press F10 on the in-game market and it reads the listed prices straight from the screen, then shows the total cost and the profit after the 10% market tax.",
    tech: [
      'Python',
      'PySide6',
      'RapidOCR',
      'NumPy',
      'SQLite',
      'PyInstaller',
      'pytest',
    ],
    repoUrl: 'https://github.com/Oralino/aion2-crafting-calculator',
    releaseUrl:
      'https://github.com/Oralino/aion2-crafting-calculator/releases/latest',
    features: [
      'Every craftable weapon, armour and accessory recipe with its full combo chain, with search that matches words in any order',
      'Crafts, successes and combos per tier from your success chance and the 25% combo chance, counting that failed crafts use up the item from the tier below',
      'Total cost, the value lost to failed and non-combo crafts, and profit after the 10% market tax, including the chance of the Splendent version at the top tier',
      "F10 market capture: OCR with RapidOCR and digit template matching reads each listed item's lowest price, and skips anything it can't read clearly instead of guessing",
      'Planned crafts per tier and already-bought Splendent pieces adjust the tiers below them',
      'Prices stored locally in SQLite; packaged as a Windows .exe with PyInstaller',
    ],
    images: [
      {
        src: aion2Calculator,
        width: 1716,
        height: 1437,
        alt: 'Star Dragon Lord Bow open in the calculator: four tiers from Asvata Bow to Star Dragon Lord Bow, each with its materials, OCR-captured prices, tier cost and lost value, and a summary showing a total cost of 47,439,246 Kinah',
        caption:
          'Four-tier combo chain for Star Dragon Lord Bow with captured market prices',
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
    featured: true,
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
