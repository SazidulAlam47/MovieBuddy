# 🎬 MovieExplorer

> A modern, responsive cinematic exploration platform built with **React 19**, **Vite**, **Tailwind CSS v4**, and the **TVMaze API**. Browse trending shows, discover randomized featured highlights, search titles dynamically, and inspect comprehensive show details in an interactive glassmorphic modal.

---

## 🌟 Key Features

### 🏠 1. Immersive Landing Page
- **Cinematic Hero Section:** High-resolution movie backdrop with dark navy linear gradients, engaging typography (`Fraunces` serif heading & `DM Sans` body), and direct Call-to-Action to the catalog.
- **Robot Mascot & Match Card:** Interactive glassmorphic bubble with companion mascot visuals.
- **Featured Spotlight:** Curated section showcasing **6 randomized shows** on every visit using an in-memory Fisher-Yates shuffle algorithm.
- **Interactive Details on Home:** Clicking *"See Details"* on any featured card opens the show modal directly from the home page.

### 🔍 2. Real-Time Movie Catalog & Search
- **Instant Search:** Dynamic search bar querying the live TVMaze API (`GET /search/shows?q=:query`).
- **One-Click Clear & Reset:** Dedicated clear button that resets instantly back to the full catalog without a page refresh.
- **Dynamic Result Counters:** Displays the active query and number of matching titles found.
- **Loading Skeletons:** Animated pulse placeholder grid while fetching data from the network.
- **Graceful Empty State:** Custom zero-results screen with an instant reset button.

### 🎴 3. Reusable Movie Cards
- **Poster with Fallback:** High-quality show posters with a built-in fallback placeholder if an image is missing or broken.
- **Rating Badge:** Formatted star score (⭐ `8.5`) positioned as an overlay pill.
- **Release Year:** Clean calendar pill displaying the premiere year.
- **Genre Tags:** Pill badges displaying primary show categories.
- **Interactive *"See Details"* Action:** Smooth hover-lift transition and responsive button triggering the detail modal.

### 🎞️ 4. Interactive Details Modal Overlay
- **Comprehensive Metadata:** Large show poster, title, status pill, star rating, release date, runtime, network/channel, language, and format type.
- **Clean Overview:** Displays stripped, clean summary text parsed safely from HTML via a dedicated `stripHtml` utility.
- **External Official Link:** Direct link out to the show's official website.
- **Multiple Dismissal Methods:**
  - Top-right circular close button `✕`
  - Bottom action bar `Close` button
  - Backdrop click (clicking outside the modal)
  - Keyboard `Escape` key listener
- **Scroll Lock:** Automatically locks body scroll when the modal is active to prevent background scrolling.

### 🎨 5. Dark Navy Glassmorphism Design System
- **Curated Palette:** Deep navy backgrounds (`#0b1226`, `#0d1630`, `#090e1f`), primary blue accents (`#1e4e9c`), and soft glow highlights.
- **Glass Effects:** Semi-transparent borders, backdrop blurs, and layered shadows.
- **Clean Focus States:** `focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400` ensures zero unwanted blue outline boxes on mouse clicks while maintaining keyboard accessibility.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) (`react`, `react-dom`) |
| **Bundler / Tooling** | [Vite 8](https://vitejs.dev/) (`@vitejs/plugin-react`) |
| **Routing** | [React Router v8](https://reactrouter.com/) (`react-router`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Icons** | [Lucide React](https://lucide.dev/) (`lucide-react`) |
| **Data Provider** | [TVMaze REST API](https://www.tvmaze.com/api) |
| **Typography** | Google Fonts (`Fraunces`, `DM Sans`, `Inter`) |

---

## 🏛️ Project Architecture & Directory Structure

The project follows a strict **One Component Per File**, **Zero Repetition (DRY)**, and **Domain-Driven Modular Structure**:

```text
src/
├── api/
│   ├── endpoints.js                  # Base URLs and endpoint builders
│   ├── fetchShows.js                 # Initial catalog fetch (GET /shows)
│   └── searchShows.js                # Search fetch (GET /search/shows?q=:query)
├── assets/
│   ├── hero-background.jpg           # Hero background banner
│   ├── match-poster.jpg              # Mascot card poster asset
│   └── robot.png                     # Mascot robot graphic
├── components/
│   ├── shared/
│   │   ├── Header.jsx                # Global navigation header orchestrator
│   │   └── Footer.jsx                # Global footer orchestrator
│   └── ui/
│       ├── header/
│       │   ├── HeaderLogo.jsx        # Brand name and film icon link
│       │   ├── DesktopNav.jsx        # Desktop nav list container
│       │   ├── DesktopNavItem.jsx    # Reusable single desktop nav link
│       │   ├── DesktopMenu.jsx       # Desktop action menu button
│       │   ├── MobileNav.jsx         # Mobile drawer nav list container
│       │   ├── MobileNavItem.jsx     # Reusable single mobile nav link
│       │   ├── MobileToggle.jsx      # Mobile hamburger/close button
│       │   └── MobileMenu.jsx        # Mobile slide-out drawer
│       ├── footer/
│       │   ├── FooterBrand.jsx       # Logo, description, and live status badge
│       │   ├── FooterNav.jsx         # Footer navigation container
│       │   ├── FooterColumn.jsx      # Reusable single navigation column
│       │   ├── FooterLinkItem.jsx    # Reusable internal/external link item
│       │   ├── FooterSocials.jsx     # Social links container
│       │   ├── FooterSocialItem.jsx  # Reusable social media icon link
│       │   ├── FooterNewsletter.jsx  # Glassmorphic newsletter signup form
│       │   └── FooterBottom.jsx      # Copyright text and legal links
│       ├── home/
│       │   ├── hero/
│       │   │   ├── HeroLeft.jsx      # Main heading, description, explore CTA
│       │   │   ├── HeroRight.jsx     # Mascot graphics container
│       │   │   └── MatchCard.jsx     # Glassmorphic match speech card
│       │   └── featured/
│       │       ├── FeaturedBadge.jsx # Spotlight pill badge
│       │       ├── FeaturedTitle.jsx # Section title and subtitle
│       │       ├── FeaturedAction.jsx# View all shows pill button
│       │       ├── FeaturedHeader.jsx# Header layout orchestrator
│       │       ├── FeaturedGrid.jsx  # 6-card grid mapping over MovieCard
│       │       ├── FeaturedSkeletonGrid.jsx # 6-card loading skeleton grid
│       │       └── FeaturedEmptyState.jsx   # Error fallback with retry button
│       └── movies/
│           ├── MovieCard.jsx         # Reusable movie card
│           ├── MoviePoster.jsx       # Image with broken/missing fallback
│           ├── MovieRating.jsx       # Star rating badge
│           ├── MovieSearch.jsx       # Search input with clear and search actions
│           ├── MovieHeader.jsx       # Title, subtitle, search bar, item counter
│           ├── MovieGrid.jsx         # Responsive movie cards catalog grid
│           ├── MovieSkeleton.jsx     # Single loading skeleton card
│           ├── MovieSkeletonGrid.jsx # Catalog skeleton loading grid
│           ├── MovieEmptyState.jsx   # Zero-results state with reset button
│           ├── MovieModal.jsx        # Show details modal orchestrator
│           └── modal/
│               ├── ModalCloseButton.jsx # Top circular close button
│               ├── ModalPoster.jsx   # Modal framed poster
│               ├── ModalHeader.jsx   # Title, rating badge, status pill
│               ├── ModalGenres.jsx   # Genres tag list
│               ├── ModalMeta.jsx     # Specs (date, runtime, network, language)
│               ├── ModalOverview.jsx # HTML-stripped summary text
│               └── ModalActions.jsx  # Official site link & close button
├── constants/
│   ├── common.js                     # Shared brand constants
│   ├── navLinks.js                   # Navigation routes & link metadata
│   └── footerData.js                 # Footer columns and social profiles
├── layouts/
│   └── MainLayout.jsx                # Layout wrapper (Header + Outlet + Footer)
├── pages/
│   ├── Home/
│   │   ├── Home.jsx                  # Landing page orchestrator
│   │   ├── Hero.jsx                  # Hero section orchestrator
│   │   └── FeaturedSection.jsx       # 6-show randomized spotlight orchestrator
│   └── Movies/
│       └── Movies.jsx                # Catalog and search page orchestrator
├── routes/
│   └── router.jsx                    # Client-side router configuration
└── utils/
    ├── getRandomItems.js             # Utility to sample N random items
    └── stripHtml.js                  # Utility to strip HTML tags from text
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (or `yarn` / `pnpm` / `bun`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SazidulAlam47/MovieBuddy.git
   cd MovieBuddy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **`dev`** | `npm run dev` | Starts the Vite development server with HMR. |
| **`build`** | `npm run build` | Compiles and optimizes assets for production in `dist/`. |
| **`lint`** | `npm run lint` | Runs ESLint across all source files. |
| **`preview`** | `npm run preview` | Locally serves the production build. |

---

## 🌐 API Reference

Data is retrieved from the free [TVMaze API](https://www.tvmaze.com/api):

- **All Shows:** `GET https://api.tvmaze.com/shows`
  - Fetches the primary catalog of television shows.
- **Search Shows:** `GET https://api.tvmaze.com/search/shows?q=:query`
  - Searches shows by title and returns matching results.

---

## 📄 License

This project is created for educational and demonstration purposes. All movie data and images are provided by [TVMaze](https://www.tvmaze.com/).
