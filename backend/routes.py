from flask import Blueprint, request, jsonify
from game import is_valid_move, get_game_status
from ai import get_ai_move

api = Blueprint("api", __name__)


@api.route("/api/new-game", methods=["POST"])
def new_game():
    return jsonify({"board": [None] * 9})


@api.route("/api/move", methods=["POST"])
def make_move():
    data = request.get_json() or {}
    board = data.get("board")
    index = data.get("index")
    player = data.get("player", "X")

    if board is None or index is None:
        return jsonify({"error": "board and index are required"}), 400

    if not is_valid_move(board, index):
        return jsonify({"error": "invalid move"}), 400

    board[index] = player
    status = get_game_status(board)

    return jsonify({
        "board": board,
        "status": status["status"],
        "winner": status["winner"],
    })


@api.route("/api/ai-move", methods=["POST"])
def ai_move():
    data = request.get_json() or {}
    board = data.get("board")
    difficulty = data.get("difficulty", "medium")
    ai_symbol = data.get("aiSymbol", "O")
    player_symbol = data.get("playerSymbol", "X")

    if board is None:
        return jsonify({"error": "board is required"}), 400

    if get_game_status(board)["status"] != "in_progress":
        return jsonify({"error": "game is already over"}), 400

    index = get_ai_move(board, difficulty, ai_symbol, player_symbol)
    board[index] = ai_symbol
    status = get_game_status(board)

    return jsonify({
        "board": board,
        "move": index,
        "status": status["status"],
        "winner": status["winner"],
    })