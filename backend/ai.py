"""
AI opponent logic. Three difficulty levels:
  easy   - random move
  medium - wins if it can, blocks if it must, otherwise random
  hard   - minimax, plays perfectly
"""

import random
from game import check_winner, get_empty_cells, is_draw


def easy_move(board):
    return random.choice(get_empty_cells(board))


def medium_move(board, ai_symbol, player_symbol):
    empty = get_empty_cells(board)

    # Take a winning move if there is one
    for i in empty:
        test = board[:]
        test[i] = ai_symbol
        if check_winner(test) == ai_symbol:
            return i

    # Otherwise block the player's winning move
    for i in empty:
        test = board[:]
        test[i] = player_symbol
        if check_winner(test) == player_symbol:
            return i

    return random.choice(empty)


def hard_move(board, ai_symbol, player_symbol):
    best_score = float("-inf")
    best_move = None

    for i in get_empty_cells(board):
        test = board[:]
        test[i] = ai_symbol
        score = _minimax(test, 0, False, ai_symbol, player_symbol)
        if score > best_score:
            best_score = score
            best_move = i

    return best_move


def _minimax(board, depth, is_maximizing, ai_symbol, player_symbol):
    winner = check_winner(board)
    if winner == ai_symbol:
        return 10 - depth
    if winner == player_symbol:
        return depth - 10
    if is_draw(board):
        return 0

    empty = get_empty_cells(board)

    if is_maximizing:
        best_score = float("-inf")
        for i in empty:
            test = board[:]
            test[i] = ai_symbol
            best_score = max(best_score, _minimax(test, depth + 1, False, ai_symbol, player_symbol))
        return best_score
    else:
        best_score = float("inf")
        for i in empty:
            test = board[:]
            test[i] = player_symbol
            best_score = min(best_score, _minimax(test, depth + 1, True, ai_symbol, player_symbol))
        return best_score


def get_ai_move(board, difficulty, ai_symbol="O", player_symbol="X"):
    if difficulty == "easy":
        return easy_move(board)
    if difficulty == "medium":
        return medium_move(board, ai_symbol, player_symbol)
    if difficulty == "hard":
        return hard_move(board, ai_symbol, player_symbol)
    raise ValueError(f"Unknown difficulty: {difficulty}")