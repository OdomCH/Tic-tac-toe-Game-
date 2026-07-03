const DIFFICULTIES = ["easy", "medium", "hard"];

export default function ModeSelect({ mode, setMode, difficulty, setDifficulty, disabled }) {
  return (
    <div className="mode-select">
      <div className="pill-group" role="group" aria-label="Game mode">
        <button
          className={`pill ${mode === "friend" ? "pill--active" : ""}`}
          onClick={() => setMode("friend")}
          disabled={disabled}
        >
          Friend
        </button>
        <button
          className={`pill ${mode === "ai" ? "pill--active" : ""}`}
          onClick={() => setMode("ai")}
          disabled={disabled}
        >
          AI
        </button>
      </div>

      {mode === "ai" && (
        <div className="pill-group pill-group--difficulty" role="group" aria-label="AI difficulty">
          {DIFFICULTIES.map((level) => (
            <button
              key={level}
              className={`pill pill--sm ${difficulty === level ? "pill--active" : ""}`}
              onClick={() => setDifficulty(level)}
              disabled={disabled}
            >
              {level}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}