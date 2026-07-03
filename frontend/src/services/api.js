import axios from "axios";

const BASE_URL = "http://localhost:5000";

/**
 * Asks the backend for the AI's move given the current board.
 * Returns the updated board, the index the AI played, and the game status.
 */
export async function getAiMove(board, difficulty, aiSymbol = "O", playerSymbol = "X") {
  const response = await axios.post(`${BASE_URL}/api/ai-move`, {
    board,
    difficulty,
    aiSymbol,
    playerSymbol,
  });
  return response.data;
}