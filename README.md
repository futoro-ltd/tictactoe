# Tic Tac Toe

A modern Tic Tac Toe game built with Next.js, featuring Player vs Computer gameplay with an AI opponent.

```
This code was made entirely using vibe coding via OpenCode (using the Big Pickle model). Only the prompts and this message block where directly made by human hand!

The purpose of this project is to test whether we can detect if the contents were vibe coded from another project that we have created.
```

## How to Run

```bash
cd tictactoe
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **PvE Mode**: You play as X, the computer plays as O
- **Smart AI**: Uses a priority-based AI that:
  1. Takes winning moves
  2. Blocks your winning moves
  3. Prefers the center
  4. Prefers corners
  5. Random fallback
- **Animated**: Smooth animations using Framer Motion
- **Responsive**: Works on mobile and desktop

## Built with Vibe Coding

This app was created using **Vibe Coding** - an AI-assisted development approach where the human provides high-level intent and the AI handles the implementation details.

### What is Vibe Coding?

Vibe Coding is a development paradigm where you:
1. Describe what you want in natural language
2. Let the AI interpret and implement
3. Iterate on the results through feedback

Unlike traditional prompting where you specify every detail, vibe coding focuses on describing the vibe/feeling you want and trusting the AI to make good decisions.

### Prompts Used

Here are the prompts that built this project:

**Initial Setup:**
> Make a tic tac toe game in this folder

Asked for game mode (PvE) and styling (rich & animated)

**Bug Fix:**
> The screen just says 'Computer is thinking...' and doesn't do anything after i first place an X

**Difficulty Increase:**
> It's very easy for me to win

**Extras:**
> Can you add a .gitignore file
> Can you make a README.md file with an explaination of this app, how it was made using Vibe coding, and the prompts I used to get this far

## Tech Stack

- **Next.js 15** - App Router, React 19
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Project Structure

```
src/
├── app/
│   ├── page.tsx         # Main game page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── game-board.tsx   # 3x3 grid
│   ├── cell.tsx         # Individual cell
│   ├── game-status.tsx  # Turn/winner display
│   └── reset-button.tsx # Play again button
└── lib/
    ├── game-logic.ts     # Win detection, AI
    └── utils.ts         # cn() utility
```

## License

MIT