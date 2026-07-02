<div align="center">

# Tic-Tac-Toe

**A modern, full-stack Tic-Tac-Toe game with real AI opponents.**

Built with React on the frontend and Python on the backend, featuring Player vs Player and Player vs AI modes across three difficulty levels — including a genuinely unbeatable Hard mode powered by Minimax.

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Python](https://img.shields.io/badge/Backend-Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/API-Flask-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)

</div>

<br>

## Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Game Modes](#game-modes)
- [AI Difficulty Levels](#ai-difficulty-levels)
- [Core Algorithms](#core-algorithms)
- [Game Flow](#game-flow)
- [Performance](#performance)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [License](#license)

<br>

## Features

| | |
|---|---|
| 🎯 | Play with a friend, locally, on the same board |
| 🤖 | Play against AI, with three distinct difficulty levels |
| 🏆 | Automatic winner detection across all win conditions |
| 🤝 | Draw detection when the board fills with no winner |
| 🔄 | One-click restart, no page reload needed |
| 📊 | Running scoreboard across matches |
| 📱 | Fully responsive, works on desktop and mobile |

<br>

## Tech Stack

**Frontend**
- React.js
- Vite
- CSS / Tailwind CSS
- Axios

**Backend**
- Python
- Flask (or FastAPI)
- REST API

<br>

## Project Structure

```
tic-tac-toe/
├── backend/
│   ├── app.py
│   ├── game.py
│   ├── routes.py
│   ├── ai.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

<br>

## Game Modes

### Player vs Player

Two players share the board, alternating turns as X and O.

```
1. Initialize empty board, current player = X
2. Loop until game ends:
     - Display board
     - Player selects a cell
     - If cell is occupied → reject move, ask again
     - Place symbol, check for a winner
     - If winner → display result, end game
     - If board full and no winner → declare draw, end game
     - Switch active player
```

### Player vs AI

The player takes X, the AI takes O.

```
1. Initialize board (Player = X, AI = O)
2. Loop until game ends:
     - Player moves → validate → update board → check winner/draw
     - If game not over → AI calculates and plays its move
     - Check winner/draw again
```

<br>

## AI Difficulty Levels

<table>
<tr><td width="90"><b>🟢 Easy</b></td><td>Picks a random empty cell. No strategy — great for beginners.</td></tr>
<tr><td><b>🟡 Medium</b></td><td>Rule-based: wins if it can, blocks the player if it must, otherwise plays randomly.</td></tr>
<tr><td><b>🔴 Hard</b></td><td>Uses the Minimax algorithm to always play optimally. Unbeatable at best play — you can tie it, never beat it.</td></tr>
</table>

**Medium logic:**
```
If AI can win this turn      → take the win
Else if player can win next  → block them
Else                          → play a random open cell
```

**Hard logic (Minimax):**
```
For every empty cell:
    Simulate AI move
    Recursively score the resulting position
    Undo the simulated move
Play the cell with the highest score
```

<br>

## Core Algorithms

**Winner detection** checks all 8 possible lines — 3 rows, 3 columns, and both diagonals — for three matching symbols.

**Draw detection** fires when the board has no empty cells left and no line has produced a winner.

<br>

## Game Flow

```
                    Choose Game Mode
                    ┌──────┴──────┐
                    ▼             ▼
              Play Friend     Play AI
                    │             │
                    ▼             ▼
              Player Move    Player Move
                    │             │
                    ▼             ▼
              Check Winner   Check Winner
                    │             │
                    ▼             ▼
               Switch Turn    AI Move
                    └──────┬──────┘
                           ▼
              Repeat until Winner or Draw
                           ▼
                    Display Result
                           ▼
                     Play Again?
```

<br>

## Performance

| Operation | Complexity |
|---|---|
| Winner check | O(1) |
| Draw check | O(1) |
| Easy AI | O(n) |
| Medium AI | O(n) |
| Hard AI (Minimax) | O(b^d) |

`b` = branching factor, `d` = search depth.

<br>

## Getting Started

### Requirements

| Frontend | Backend |
|---|---|
| Node.js 18+ | Python 3.10+ |
| npm | pip |

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Set up the backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Open the app

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 *(or your configured port)* |

<br>

## Roadmap

- [ ] Online multiplayer
- [ ] User authentication
- [ ] Player statistics
- [ ] Leaderboard
- [ ] Sound effects
- [ ] Dark / light theme toggle
- [ ] In-game chat
- [ ] Progressive Web App support

<br>

## License

Released under the **MIT License** — free to use, modify, and distribute for learning or personal projects.

<br>

<div align="center">

Built with React + Python

</div>
