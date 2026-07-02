<div align="center">

# Tic-Tac-Toe

**A clean Tic-Tac-Toe game with two ways to play.**

Built with React on the frontend and Python on the backend. Play locally with a friend, or go up against the AI.

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
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [License](#license)

<br>

## Features

| | |
|---|---|
| 🎯 | Play with a friend, locally, on the same board |
| 🤖 | Play against the AI, with three difficulty levels |
| 🏆 | Automatic winner detection |
| 🤝 | Draw detection when the board fills up |
| 🔄 | Restart the game with one click |
| 📊 | Scoreboard that tracks wins across rounds |
| 📱 | Responsive, works on desktop and mobile |

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

Two players share the board, taking turns as X and O.

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

| Level | How it plays |
|---|---|
| 🟢 Easy | Picks a random empty cell. No strategy, good for beginners or kids. |
| 🟡 Medium | Wins if it can, blocks you if it has to, otherwise plays randomly. |
| 🔴 Hard | Uses the Minimax algorithm to always play the optimal move. You can tie it, but you can't beat it. |

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

## How It Works

Both game modes share the same core rules: place three matching symbols in a row (across, down, or diagonally) to win. If the board fills up with no line completed, it's a draw.

Winner detection checks all 8 possible lines — 3 rows, 3 columns, and both diagonals — for three matching symbols.

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

- [ ] Sound effects
- [ ] Dark / light theme toggle
- [ ] Match history

<br>

## License

Released under the **MIT License** — free to use, modify, and distribute for learning or personal projects.

<br>

<div align="center">

Built with React + Python

</div>
