"""
Core game logic for Tic-Tac-Toe.
The board is a flat list of 9 items, each either "X", "O", or None.

Board positions:
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8
"""

WIN_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   # rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   # columns
    [0, 4, 8], [2, 4, 6],              # diagonals
]


def check_winner(board):
    """Returns 'X' or 'O' if there's a winner, otherwise None."""
    for a, b, c in WIN_COMBINATIONS:
        if board[a] and board[a] == board[b] == board[c]:
            return board[a]
    return None


def is_draw(board):
    """Board is full and nobody has won."""
    return all(cell is not None for cell in board) and check_winner(board) is None


def is_valid_move(board, index):
    return isinstance(index, int) and 0 <= index < 9 and board[index] is None


def get_empty_cells(board):
    return [i for i, cell in enumerate(board) if cell is None]


def get_game_status(board):
    """Returns a dict describing where the game stands."""
    winner = check_winner(board)
    if winner:
        return {"status": "win", "winner": winner}
    if is_draw(board):
        return {"status": "draw", "winner": None}
    return {"status": "in_progress", "winner": None}    