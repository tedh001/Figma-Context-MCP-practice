# Figma Context MCP Practice

A React frontend project built with Vite, TypeScript, and Biome.js for practicing Figma Context MCP integration.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Biome.js** - Linting and formatting
- **Rollup** - Bundling (via Vite)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run check` - Run all Biome checks

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles (Tailwind)
├── public/             # Static assets
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── components.json     # shadcn/ui configuration
├── biome.json          # Biome.js configuration
└── package.json        # Dependencies and scripts
```

## Development

This project uses:
- **Vite** for fast development and building
- **TypeScript** for type safety
- **Tailwind CSS** for styling with utility classes
- **shadcn/ui** for pre-built, accessible components
- **Biome.js** for linting and formatting
- **React 18** with modern hooks and features

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Code Quality

The project uses Biome.js for:
- Code linting
- Code formatting
- Type checking (via TypeScript)

Run `npm run check` to perform all quality checks.
