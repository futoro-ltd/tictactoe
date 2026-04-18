export type Player = "X" | "O";
export type CellValue = Player | null;
export type GameState = CellValue[];
export type Winner = Player | "draw" | null;

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: GameState): Winner {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  if (board.every((cell) => cell !== null)) {
    return "draw";
  }
  return null;
}

export function getAvailableMoves(board: GameState): number[] {
  return board.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);
}

export function getAIMove(board: GameState): number {
  const available = getAvailableMoves(board);
  if (available.length === 0) return -1;

  for (const index of available) {
    const testBoard = [...board];
    testBoard[index] = "O";
    if (checkWinner(testBoard) === "O") return index;
  }

  for (const index of available) {
    const testBoard = [...board];
    testBoard[index] = "X";
    if (checkWinner(testBoard) === "X") return index;
  }

  if (available.includes(4)) return 4;

  const corners = [0, 2, 6, 8];
  const availableCorners = available.filter(i => corners.includes(i));
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

export function getInitialBoard(): GameState {
  return Array(9).fill(null);
}