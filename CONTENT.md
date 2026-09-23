# CONTENT.md

Source of truth for **what the site says**: projects, descriptions and copy. `DESIGN.md` covers how it
looks; `CLAUDE.md` covers how it's built. The site reads this content from `src/data/projects.ts`;
update this file first, then mirror the change there.

Currently in `src/data/projects.ts`: every project below with a **public** repo. Private ones are not
listed yet (decision pending in `TASKS.md`).

Rules:
- Pull project descriptions from each project's README and code. Never invent features, metrics or results.
- Only link a repo if it is public. Private repos can be listed without a repo link, or omitted.
- Never embed or reproduce assignment spec PDFs, lecture slides or exam material (they belong to the
  instructors). Exam work is never published.
- Items marked **TODO (owner)** need input from Oralino; don't fill them with guesses.

## About

The site shows **projects only**. No personal details: no real name, email, phone, location, work
history, education details or resume. Employers get the resume through the application itself.
The owner's resume is kept locally in the git-ignored `private/` folder as a reference; never commit,
serve or quote personal details from it.

- Display name: **Oralino** (GitHub handle; confirmed by owner)
- Tagline / one-line intro: **TODO (owner)**. Project-focused, e.g. what kinds of things Oralino builds
  (Windows utilities, game tools, ML projects, web apps); no personal details
- Links: GitHub https://github.com/Oralino (the only contact link)

## Personal projects

Source folders live in `C:\Documents\Script\`.

| Project | Local folder | Repo | Summary |
|---|---|---|---|
| PowerTray | `../PowerTray` | https://github.com/Oralino/PowerTrayOptimizer | Windows tray utility that switches to the High Performance power plan while games run, then back to Balanced when they close |
| TL Stat Calculator | `../TLStatCalculator` | https://github.com/Oralino/TL-Stat-Calculator | Desktop app for Throne & Liberty combat formulas, hidden stat thresholds and gear trade-offs |
| Simple Video Editor | `../VideoEditor` | https://github.com/Oralino/SimpleVideoEditor | Video trimming and audio mixing tool with drag-and-drop, hardware-accelerated encoding and dual-track volume controls |
| iLvl Upgrade Odds | `../iLvl Upgrade Odds` | https://github.com/Oralino/iLvl-Upgrade-Odds | Desktop app showing the upgrade and failure chance for one attempt at raising an item's level |
| TL Marketplace Trackers | `../Python Test Scrappers` | https://github.com/Oralino/ThroneAndLibertyMarketPlaceTrackers | Python scrapers for the Throne & Liberty marketplace |
| TNL API Scrapper | `../TNLPotentialScrapper` | https://github.com/Oralino/TNL-API-Scrapper | Node.js scraper for Throne & Liberty data |

Not yet on GitHub (confirm before including): `Daily Job Search Agent`, `job_search_agent`.

Featured on the home page: PowerTray, Simple Video Editor, Steam Backlog Manager.

## Coursework (McMaster University)

Source folders live in `C:\Documents\McMaster\`. Show these in a separate "Coursework" section, tagged
with the course code, and label them as course projects.

Visibility policy: **course projects are public, assignments are private** (exception: 4WP3-Assignment2
stays public by choice).

| Project | Course | Local folder | Repo | Visibility | Summary |
|---|---|---|---|---|---|
| AI Game Recommender | 4AI3 (Artificial Intelligence) | `McMaster/4AI3/Project/GameRecommender` | https://github.com/Oralino/4AI3-GameRecommender | public | Hybrid Steam game recommender combining content-based, sentence-embedding and collaborative models, with Steam library import |
| MAGIC Gamma Classifier | 4DA3 (Data Analytics) | `McMaster/4DA3/Project` | https://github.com/Oralino/4DA3-MAGIC-Gamma-Classifier | public | Fisher's Linear Discriminant vs Random Forest on the UCI MAGIC Gamma Telescope dataset, with confusion matrices and ROC/AUC |
| LoL Win Predictor | 4DM3 (Data Mining) | `McMaster/4DM3/Course Project` | https://github.com/Oralino/4DM3-LoL-Win-Predictor | public | kNN, logistic regression and AdaBoost implemented from scratch to predict ranked League of Legends matches from 10-minute stats |
| Parallel Name Sort | 4CC3 (Concurrent Computing) | `McMaster/4CC3/Project/Project` | https://github.com/Oralino/4CC3-Parallel-Name-Sort | public | Depth-limited parallel quicksort of 100,000 names using Parallel.Invoke |
| Engine Optimizer | 4SA3 (Software Architecture) | `McMaster/4SA3/Project/Project 1` | https://github.com/Oralino/4SA3-Project1 | public | MVC desktop app for editing game Engine.ini tweaks per GPU, using an object-pooled MongoDB connection, Google Maps Places lookup and Strategy-pattern JSON/INI export |
| Steam Backlog Manager | 4WP3 (Web Programming) | `McMaster/4WP3/Project 1/Project 1` | https://github.com/Oralino/4WP3-Project1 | public | Server-rendered CRUD app for tracking a game backlog |
| Match Tracker | 4WP3 | `McMaster/4WP3/Project 2/Project 2` | https://github.com/Oralino/4WP3-Project2 | public | REST API with a React Native client for logging game matches (character, kills, KDA) |
| Pokédex | 4WP3 | `McMaster/4WP3/Assignments/Assignment 2` | https://github.com/Oralino/4WP3-Assignment2 | public | Express server and frontend that fetches and displays Pokémon data |
| Remember Your Landmarks | 4WP3 | `McMaster/4WP3/Assignments/Assignment 1` | https://github.com/Oralino/4WP3-Assignment-1 | private | Vanilla HTML/CSS/JS Google Maps app for saving landmarks with photos, descriptions and coordinates |
| Drug Info App | 4WP3 | `McMaster/4WP3/Assignments/Assignment 3/assignment4` | https://github.com/Oralino/4WP3-Assignment3 | private | Next.js + Tailwind CRUD app backed by json-server |
| Dining Philosophers | 4CC3 | `McMaster/4CC3/Assignment` | https://github.com/Oralino/4CC3-Dining-Philosophers | private | C# threaded dining philosophers simulation with live state display and deadlock detection |
| 4AI3 Assignments | 4AI3 | `McMaster/4AI3` | https://github.com/Oralino/4AI3-Assignments | private | Jupyter notebook assignments |

## Project detail copy

Overview and feature list for each detail page, written from the repo's README, or from the code
where there was no README. Figures are the projects' own printed results. Mirrored in
`src/data/projects.ts`.

**PowerTray**: A lightweight Windows utility that sits in the system tray and watches for the games you choose. When one starts, it switches Windows to the High Performance power plan; when it closes, it switches back to Balanced. A dashboard manages the game list, launchers that shouldn't trigger a switch, and which power plans to use.
- Multi-threaded monitoring of configured game processes with psutil
- Switches between Balanced and High Performance power plans through Windows powercfg
- Drag-and-drop executable management, configurable power plans and Windows startup integration
- Real-time tray status indicators
- Extracts executable icons through the Win32 API
- Parses Steam appmanifest files to launch installed Steam games by app ID

**TL Stat Calculator**: A desktop calculator for Throne and Liberty's combat formulas. Each tab covers one mechanic, such as evasion, critical hits, heavy attacks, skill damage or crowd control, and turns your stats and the enemy's into an actual percentage chance or damage number. A trade-off tab compares two gear loadouts to show which one saves more HP against critical hits.
- Evasion, critical hit and heavy attack chance from your stats against the enemy's
- Final critical and heavy damage after boosts and resistances
- Net skill damage modifier from Skill Damage Boost against Skill Damage Resistance
- Defense changes shown as actual incoming damage reduction
- Option A vs Option B loadout comparison against incoming critical hits
- Status effect and crowd control hit and miss probabilities

**Simple Video Editor**: A desktop tool for trimming clips and mixing their audio without opening a full editor. It previews video with VLC, exports through FFmpeg, and can fetch a video straight from a YouTube URL. Game and mic audio are balanced separately, and exports either copy the video stream as is or re-encode it on the GPU.
- Video trimming with timeline preview and resolution scaling
- Asynchronous processing with encoding progress tracking and cancellation cleanup
- Multi-track audio mixing and stream passthrough
- Hardware-accelerated encoding through NVIDIA NVENC, AMD AMF and Intel QSV
- Drag-and-drop video loading and YouTube fetching through yt-dlp
- Configurable export settings and dependency validation for VLC and FFmpeg

**iLvl Upgrade Odds**: A desktop app that shows the odds of a single item-level upgrade attempt. Pick an item type and current item level to see the chance of upgrading, the chance of failing, and the odds of every possible jump up to +5 levels. The odds come from a public Google Sheet; the app ships with a built-in copy and can update from the sheet.
- Upgrade and failure chance for one attempt; an attempt never lowers the item level
- Odds of every outcome, from staying at the same level to +5 levels
- Averages: levels gained per attempt, attempts per +1 iLvl and attempts until any upgrade
- Weapon, armor and accessory odds side by side
- Failure-chance chart across iLvl 51–90; click the chart to jump to a level
- Updates from the source Google Sheet, with a built-in copy for offline use

**TL Marketplace Trackers**: Python experiments for reading Throne and Liberty marketplace prices without logging into the game. Playwright loads the tracker sites in a browser and captures their JSON responses; two PyQt6 desktop apps show the prices in a filterable table, and a FastAPI version serves the same data as an API for a Node.js front end.
- Captures JSON from the sites' network responses with Playwright instead of parsing HTML
- Finds the main dataset by searching the nested JSON for its largest list
- PyQt6 desktop tables with live refresh and filtering
- FastAPI endpoint backed by a background scrape loop

**TNL API Scrapper**: A Node.js service that keeps an up-to-date copy of Throne and Liberty potential-item prices and serves it as JSON. Playwright opens the tracker site with a saved browser session and captures the site's own API response; Express serves the cleaned-up data, refreshed every five minutes.
- First run opens a visible browser to log in; later runs reuse the saved session headlessly
- Captures the site's API response instead of scraping the page
- Keeps only each item's name, kind, listing counts and floor price
- Refreshes in the background every 5 minutes, with a pending status until the first scrape finishes

**AI Game Recommender (4AI3)**: A desktop app that recommends Steam games based on the games you already play. It blends content-based matching on game metadata, semantic matching with sentence embeddings, and collaborative filtering on player playtime, and shows how much each model contributed to every suggestion.
- Search games with autocomplete, or import a library from Steam by SteamID64
- Content-based model on game metadata (TF-IDF)
- Semantic model using all-MiniLM-L6-v2 sentence embeddings
- Collaborative filtering on user playtime data
- Per-game breakdown of each model's contribution
- CustomTkinter dark-mode interface with game cards

**MAGIC Gamma Classifier (4DA3)**: Classifies events from the UCI MAGIC Gamma Telescope dataset as gamma-ray signal or hadron background, comparing Fisher's Linear Discriminant with a Random Forest. The Random Forest reached 87.8% accuracy (AUC 0.93) against 78.7% (AUC 0.84), at the cost of a much longer training time.
- Standardizes the 10 image features with a 75/25 train/test split
- Trains Fisher Linear Discriminant Analysis and Random Forest classifiers
- Reports accuracy, training and testing time, and confusion matrices
- ROC curve and AUC comparison

**LoL Win Predictor (4DM3)**: Predicts whether the blue team wins a high-Diamond ranked League of Legends match using only stats from the first 10 minutes. k-nearest neighbours, logistic regression and AdaBoost are implemented from scratch and compared on accuracy, speed and cross-validation; kNN and logistic regression both reach an AUC of 0.80.
- kNN, logistic regression and AdaBoost written by hand with NumPy
- Feature normalization and cross-validation
- Accuracy and training/testing time comparison
- Confusion matrices and a ROC curve comparison

**Parallel Name Sort (4CC3)**: A C# console app that sorts 100,000 names by last name, then first name. The quicksort runs its recursive partitions in parallel with Parallel.Invoke up to a depth based on the CPU core count, then falls back to sequential sorting, and times the run with Stopwatch.

**Engine Optimizer (4SA3)**: A Tkinter desktop app for keeping game Engine.ini tweaks organized by game and GPU. It is structured as MVC, stores profiles in MongoDB through an Object Pool that reuses connections, and uses the Strategy pattern to export a profile as JSON or raw INI.
- Save, load and delete a profile per game with its GPU and Engine.ini tweaks
- Import and export .ini files, with an expanded editor for long configs
- MongoDB storage through an Object Pool that reuses client connections
- Strategy-pattern exporters for JSON and raw INI
- Google Maps Places search for nearby PC shops

**Steam Backlog Manager (4WP3)**: A server-rendered web app for tracking a game backlog: what you're playing, what you've finished and what's next. Express handles the routes, SQLite stores each game's status, playtime and rating, and Mustache templates render the pages with Bootstrap.
- Add, view, edit and delete games with their status, playtime and personal rating
- Sort the library by title, rating or playtime
- MVC structure: Express routes, SQLite model and Mustache views in separate modules
- Backend validation with the form re-rendered showing the error

**Match Tracker (4WP3)**: A mobile and web app for logging game matches, with a React Native (Expo) client and an Express and SQLite REST API. Matches are grouped into collapsible folders by game, and each one records the character played, kills and KDA.
- Collapsible folders that group match history by game
- Create, view, edit and delete matches through the REST API
- Native alert dialogs on iOS and Android, browser confirmations on the web, chosen with Platform.OS
- Clear one game's matches with parallel Promise.all requests, or wipe all data
- Input validation on the client and parameterized SQL queries on the server

**Pokédex (4WP3)**: A small Express app that looks up any Pokémon through PokéAPI. The front end sends the search to the server, which returns the sprite, height and weight, plus the Pokédex entry and wild encounter locations when those options are ticked.
- Express route that calls PokéAPI with axios
- Optional species lookup for the first English Pokédex entry
- Optional encounter lookup for up to three wild locations
- Clear error message when a Pokémon doesn't exist

## Screenshots and media

Existing images that can be reused (copy into `src/assets/projects/<slug>/`, optimized):
- AI Game Recommender: `slideshow_plot_cluster_map.png`, `slideshow_plot_model_weights.png`, `slideshow_plot_breakdown_RIFT.png`
- MAGIC Gamma Classifier: `ROC_Comparison.png`, `CM_Random_Forest.png`, `CM_Fisher_Linear_Discriminant.png`, `Results.png`
- LoL Win Predictor: `ROC_Curve_Comparison.png`, `Confusion_Matrix_*.png`
- Engine Optimizer: UML diagram (currently a PDF; export an image if wanted)

In use (WebP in `src/assets/projects/<slug>/`):
- PowerTray: main window, tray menu, plan picker (from the repo README)
- Simple Video Editor: main window (from the repo README)
- Steam Backlog Manager: library, game details, add game (captured from a local run at 1440×900)
- AI Game Recommender, MAGIC Gamma Classifier, LoL Win Predictor: plots listed above

**TODO (owner)**: app screenshots for TL Stat Calculator, iLvl Upgrade Odds, Engine Optimizer, Match Tracker.
