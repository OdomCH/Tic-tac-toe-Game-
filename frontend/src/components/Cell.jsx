export default function Cell({ value, index, onClick, disabled, isWinning }) {
  return (
    <button
      className={`cell ${isWinning ? "cell--winning" : ""}`}
      onClick={() => onClick(index)}
      disabled={disabled || value !== null}
      aria-label={value ? `Cell ${index + 1}: ${value}` : `Cell ${index + 1}: empty`}
    >
      {value === "X" && (
        <svg viewBox="0 0 100 100" className="mark mark--x">
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="80" y1="20" x2="20" y2="80" />
        </svg>
      )}
      {value === "O" && (
        <svg viewBox="0 0 100 100" className="mark mark--o">
          <circle cx="50" cy="50" r="32" />
        </svg>
      )}
    </button>
  );
}