# Eastern Musical Regiment Frontend (Nextjs)
Official frontend application for the Eastern Musical Regiment website, built with **Next.js** using the **Atomic Design** component architecture.

## Overview
This project is a responsive web application designed and developed for **Eastern Musical Regiment**.
Key goals of the project:
- Clear content hierarchy
- High performance and SEO friendliness
- Maintainable and scalable frontend architecture
- Smooth user experience across devices

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:**  Tailwind CSS
- **Component Architecture:** Atomic Design
- **State & UI Logic:** React
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Testing:** Jest, React Testing Library (RTL)

## Project Structure
```txt
src/
├── app/                              # Next.js App Router pages and layouts
├── components/
│   ├── atoms/                        # Basic UI elements (Button, Logo, etc.)
│   ├── molecules/                    # Combined UI units (NavItem, etc.)
│   ├── organisms/                    # Section-level components (Hero, Sections)
│   └── _templates/                   # Page-level composition
│ 
├── hooks/                            # Custom React hooks 
├── libs/                             # Utility functions (variants.ts - for framer animations, 
|                                       strapi data fetch logic, and types)
└── jest.setup.ts                     # Jest setup file
```

## Prerequisites
- Node.js >= 18 (tested Node 22)
- npm

## Installation
```bash
npm install
```

## Local Dev Server
```bash
npm run dev
```
- App will be available at `http://localhost:3000`

## Environment Variables
- Create a `.env.local` file in the root directory
- The file must at least have the variable below
    - `NEXT_PUBLIC_STRAPI_URL`

## Running Tests
- Use the command below to run the tests
    ```bash
    npm test
    ```


## Development Notes
- Section navigation uses both programmatic scrolling and hash navigation for consistent UX
- Components are written to be reusable and composable
- After any change or update to the code, run the tests locally before committing your changes.


## Deployment
- The project is deployed via Vercel at the [url](https://easternmusicalregiment.vercel.app/).
- The videos used are uploaded to [Youtube](https://www.youtube.com/) and integrated in the app via iframes

#### Typical deployment flow:
- Push changes to the main branch
- CI/CD automatically builds and deploys the application
    - CI uses Github Actions to run test on push or pull requests (PRs) to the `main` branch
    - Vercel handles CD (no explicit setup needed now)

## Image & Asset Credits
- Some visual assets used in this project are sourced from Unsplash and Pixabay, and are used in accordance with their license.
- Detailed credits can be found in:
    - CREDITS.md

## Ownership & Maintenance
- Client: Eastern Musical Regiment
- Developer: Emmanuel Afrifa
- Repository Access: Restricted
For updates or maintenance, contact the developer directly.