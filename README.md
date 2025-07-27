# Figma Context MCP Practice

A React frontend project built with Vite, TypeScript, and Biome.js for practicing Figma Context MCP integration.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Biome.js** - Linting and formatting
- **Rollup** - Bundling (via Vite)

## Prerequisites

- **Node.js 24.4.1** (specified in `.nvmrc`)
- npm, yarn, or pnpm

### Using nvm (Node Version Manager)

If you're using nvm, you can automatically switch to the correct Node.js version:

```bash
nvm use
```

Or install the specific version if not already installed:

```bash
nvm install 24.4.1
nvm use 24.4.1
```

## Getting Started

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
│   ├── App.tsx          # Main application component
│   ├── App.css          # Component styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node tools
├── biome.json           # Biome.js configuration
├── .nvmrc              # Node.js version specification
└── package.json         # Dependencies and scripts
```

## Development

This project uses:
- **Vite** for fast development and building
- **TypeScript** for type safety
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

## Node.js Version

This project requires Node.js version 24.4.1 as specified in the `.nvmrc` file. Make sure you're using the correct version to avoid compatibility issues. 