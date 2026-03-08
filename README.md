# CyberShield Phishing Awareness — Angular App

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run``

```bash
# Install dependencies
npm install

# Start development server
npm start
# → Open http://localhost:4200
```

### Build for Production

```bash
npm run build:prod
# Output: dist/cybershield-phishing/
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── intro/           # Animated door intro screen
│   │   ├── navbar/          # Fixed navigation bar
│   │   ├── home/            # Home page with hero + stats
│   │   ├── workshop/        # Workshop page
│   │   ├── trainingen/      # Training viewer (10 slides)
│   │   ├── training-slide/  # Individual slide renderer
│   │   └── contact/         # Contact form
│   ├── services/
│   │   └── training.service.ts  # Training data + image access
│   ├── app.component.ts     # Root with intro gate
│   ├── app.config.ts        # Angular providers
│   └── app.routes.ts        # Router config
├── assets/
│   └── images.ts            # Base64 embedded images (from PowerPoint)
├── index.html
├── main.ts
└── styles.css               # Global design tokens + shared styles
```

## Architecture Notes

- **Standalone components** (Angular 17) — no NgModules needed
- **Lazy-loaded routes** — each page loads on demand
- **Hash routing** — works without server-side config
- **Images embedded as base64** in `src/assets/images.ts` (extracted from PowerPoint)
- **TrainingService** holds all 10 training slide data
