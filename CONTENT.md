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

- Name: **TODO (owner)**: confirm the display name to use on the site
- Tagline / one-line intro: **TODO (owner)**
- Current status: student at **McMaster University**. **TODO (owner)**: program and expected graduation
- Short bio (2–3 sentences): **TODO (owner)**
- Contact / links: GitHub https://github.com/Oralino. **TODO (owner)**: email to show publicly, LinkedIn, resume PDF

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

## Screenshots and media

Existing images that can be reused (copy into `src/assets/projects/<slug>/`, optimized):
- AI Game Recommender: `slideshow_plot_cluster_map.png`, `slideshow_plot_model_weights.png`, `slideshow_plot_breakdown_RIFT.png`
- MAGIC Gamma Classifier: `ROC_Comparison.png`, `CM_Random_Forest.png`, `CM_Fisher_Linear_Discriminant.png`, `Results.png`
- LoL Win Predictor: `ROC_Curve_Comparison.png`, `Confusion_Matrix_*.png`
- Engine Optimizer: UML diagram (currently a PDF; export an image if wanted)

**TODO (owner)**: app screenshots for PowerTray, TL Stat Calculator, Simple Video Editor, iLvl Upgrade Odds, Engine Optimizer, Match Tracker.
