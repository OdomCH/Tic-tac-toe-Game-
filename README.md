# 🎮 Tic-Tac-Toe Game

A modern web-based **Tic-Tac-Toe** game built with **React** (Frontend) and **Python** (Backend). The game supports both **Player vs Player** and **Player vs AI** modes with multiple AI difficulty levels.

---

# 📌 Features

- 🎯 Play with a Friend (2 Players)
- 🤖 Play against AI
- 🟢 Easy AI (Random Moves)
- 🟡 Medium AI (Rule-Based)
- 🔴 Hard AI (Minimax Algorithm)
- 🏆 Winner Detection
- 🤝 Draw Detection
- 🔄 Restart Game
- 📊 Scoreboard
- 📱 Responsive User Interface

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- CSS / Tailwind CSS
- Axios

## Backend

- Python
- Flask (or FastAPI)
- REST API

---

# 📂 Project Structure

```text
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
│   │
│   └── package.json
│
└── README.md
```

---

# 🎮 Game Modes

## 1. Play with Friend

Two players take turns placing **X** and **O** on the board.

### Algorithm

```text
START

Initialize Board

Current Player = X

WHILE game not finished

    Display Board

    Player selects a cell

    IF cell is empty
        Place player's symbol
    ELSE
        Show Invalid Move
        Continue
    END IF

    Check Winner

    IF winner exists
        Display Winner
        END GAME
    END IF

    Check Draw

    IF board is full
        Display Draw
        END GAME
    END IF

    Switch Player

END WHILE
```

---

## 2. Play with AI

The player competes against the computer.

### Algorithm

```text
START

Initialize Board

Player = X
AI = O

WHILE game not finished

    Player makes a move

    Validate move

    Update board

    Check Winner

    IF player wins
        END GAME
    END IF

    Check Draw

    IF draw
        END GAME
    END IF

    AI calculates best move

    AI places O

    Check Winner

    IF AI wins
        END GAME
    END IF

END WHILE
```

---

# 🤖 AI Difficulty Levels

## 🟢 Easy

The AI randomly selects an empty cell.

### Algorithm

```text
Find all empty cells

Randomly choose one

Place O
```

---

## 🟡 Medium

The AI follows simple game rules.

Priority:

1. Win if possible
2. Block the player's winning move
3. Choose a random available cell

### Algorithm

```text
IF AI can win
    Make winning move

ELSE IF Player can win
    Block player

ELSE
    Random move
```

---

## 🔴 Hard

The AI uses the **Minimax Algorithm** to make the optimal move.

### Algorithm

```text
FOR every empty cell

    Simulate AI move

    Calculate score using Minimax

    Undo move

Choose move with highest score
```

---

# 🏆 Winner Detection Algorithm

The game checks all possible winning combinations.

- 3 Rows
- 3 Columns
- Main Diagonal
- Anti-Diagonal

### Algorithm

```text
Check all rows

Check all columns

Check main diagonal

Check anti-diagonal

IF any line contains same symbol

    Winner Found

ELSE

    Continue Game
```

---

# 🤝 Draw Detection Algorithm

A draw occurs when the board is full and no player has won.

### Algorithm

```text
IF board has no empty cells

AND

No winner exists

Draw
```

---

# 🔄 Game Flow

```text
START

        │
        ▼

Choose Game Mode

        │
        ├──────────────┐
        │              │
        ▼              ▼

Play Friend      Play AI

        │              │
        ▼              ▼

Player Move   Player Move

        │              │
        ▼              ▼

Check Winner  Check Winner

        │              │
        ▼              ▼

Switch Turn    AI Move

        │              │
        └──────┬───────┘
               ▼

Repeat Until Winner or Draw

               │
               ▼

Display Result

               │
               ▼

Play Again?

               │
               ▼

END
```

---

# 📈 Time Complexity

| Algorithm | Complexity |
|-----------|------------|
| Winner Check | O(1) |
| Draw Check | O(1) |
| Easy AI | O(n) |
| Medium AI | O(n) |
| Hard AI (Minimax) | O(bᵈ) |

Where:

- **b** = branching factor
- **d** = search depth

---

# 🚀 Future Improvements

- 🌐 Online Multiplayer
- 🔐 User Authentication
- 📊 Player Statistics
- 🏅 Leaderboard
- 🎵 Sound Effects
- 🎨 Themes (Dark/Light Mode)
- 💬 In-game Chat
- 📱 Progressive Web App (PWA)

---

# 📸 Screens

- Home Page
- Mode Selection
- Play with Friend
- Play with AI
- Winner Screen

---

# 👨‍💻 Author

Developed using:

- **Frontend:** React.js
- **Backend:** Python (Flask/FastAPI)
- **Language:** JavaScript & Python

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for learning and educational purposes.
