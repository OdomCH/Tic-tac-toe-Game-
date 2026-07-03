import { useEffect, useState } from "react";
import Board from "./components/Board.jsx";
import ModeSelect from "./components/ModeSelect.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import { getAiMove } from "./services/api.js";
import { checkWinner, isDraw, emptyBoard } from "./services/gameLogic.js";

export default function App() {
  const [board, setBoard] = useState(emptyBoard());
  const [mode, setMode] = useState("friend");
  const [difficulty, setDifficulty] = useState("medium");
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [aiThinking, setAiThinking] = useState(false);
  const [aiError, setAiError] = useState(null);

  const { winner, line: winningLine } = checkWinner(board);
  const draw = isDraw(board);
  const gameOver = Boolean(winner) || draw;

  // Whenever the board changes and it's the AI's turn, ask the backend for its move.
  useEffect(() => {
    if (mode !== "ai" || currentPlayer !== "O" || gameOver) return;

    let cancelled = false;
    setAiThinking(true);
    setAiError(null);

    const timer = setTimeout(async () => {
      try {
        const result = await getAiMove(board, difficulty, "O", "X");
        if (!cancelled) {
          setBoard(result.board);
          setCurrentPlayer("X");
        }
      } catch (err) {
        if (!cancelled) {
          setAiError(
            "Couldn't reach the AI. Make sure the Flask backend is running on localhost:5000.",
          );
        }
      } finally {
        if (!cancelled) setAiThinking(false);
      }
    }, 450); // small pause so the AI's move doesn't feel instant

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, currentPlayer, mode, gameOver]);

  // Tally the score once a game ends.
  useEffect(() => {
    if (winner) {
      setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
    } else if (draw) {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner, draw]);

  function handleCellClick(index) {
    if (gameOver || board[index] || aiThinking) return;
    if (mode === "ai" && currentPlayer !== "X") return;

    const next = [...board];
    next[index] = currentPlayer;
    setBoard(next);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function handleRestart() {
    setBoard(emptyBoard());
    setCurrentPlayer("X");
    setAiError(null);
  }

  function handleModeChange(newMode) {
    setMode(newMode);
    handleRestart();
  }

  function statusText() {
    if (aiError) return aiError;
    if (winner)
      return mode === "ai" && winner === "O" ? "AI wins" : `${winner} wins`;
    if (draw) return "It's a draw";
    if (aiThinking) return "AI is thinking...";
    if (mode === "ai") return currentPlayer === "X" ? "Your turn" : "AI's turn";
    return `${currentPlayer}'s turn`;
  }

  return (
    <div className="app">
      <div className="scanlines" aria-hidden="true" />

      <div className="card">
        <h1 className="title">
          TIC <span className="title-dot">·</span> TAC{" "}
          <span className="title-dot">·</span> TOE
        </h1>

        <ModeSelect
          mode={mode}
          setMode={handleModeChange}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          disabled={aiThinking}
        />

        <Scoreboard scores={scores} mode={mode} />

        <Board
          board={board}
          onCellClick={handleCellClick}
          disabled={
            gameOver || aiThinking || (mode === "ai" && currentPlayer !== "X")
          }
          winningLine={winningLine}
        />

        <div className={`status ${aiError ? "status--error" : ""}`}>
          {statusText()}
        </div>

        <button className="restart-btn" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}
