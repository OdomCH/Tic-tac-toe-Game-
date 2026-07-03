export default function Scoreboard({ scores, mode }) {
  return (
    <div className="scoreboard">
      <div className="score score--x">
        <span className="score-label">X</span>
        <span className="score-value">{scores.X}</span>
      </div>
      <div className="score score--draw">
        <span className="score-label">Draws</span>
        <span className="score-value">{scores.draws}</span>
      </div>
      <div className="score score--o">
        <span className="score-label">{mode === "ai" ? "AI" : "O"}</span>
        <span className="score-value">{scores.O}</span>
      </div>
    </div>
  );
}