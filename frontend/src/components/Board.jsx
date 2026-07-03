import Cell from "./Cell.jsx";

// Start/end coordinates (in a 0-300 grid) for each possible winning line,
// used to draw the glowing strike-through line.
const LINE_COORDS = {
  "0,1,2": [20, 50, 280, 50],
  "3,4,5": [20, 150, 280, 150],
  "6,7,8": [20, 250, 280, 250],
  "0,3,6": [50, 20, 50, 280],
  "1,4,7": [150, 20, 150, 280],
  "2,5,8": [250, 20, 250, 280],
  "0,4,8": [25, 25, 275, 275],
  "2,4,6": [275, 25, 25, 275],
};

export default function Board({ board, onCellClick, disabled, winningLine }) {
  const lineKey = winningLine ? winningLine.join(",") : null;
  const coords = lineKey ? LINE_COORDS[lineKey] : null;

  return (
    <div className="board-wrap">
      <div className="board">
        {board.map((value, i) => (
          <Cell
            key={i}
            index={i}
            value={value}
            onClick={onCellClick}
            disabled={disabled}
            isWinning={winningLine?.includes(i)}
          />
        ))}
      </div>
      {coords && (
        <svg className="win-line" viewBox="0 0 300 300">
          <line x1={coords[0]} y1={coords[1]} x2={coords[2]} y2={coords[3]} />
        </svg>
      )}
    </div>
  );
}