"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { GameBoard } from "@/components/game-board";
import { GameStatus } from "@/components/game-status";
import { ResetButton } from "@/components/reset-button";
import {
  type GameState,
  type Player,
  type Winner,
  checkWinner,
  getAIMove,
  getInitialBoard,
} from "@/lib/game-logic";

const PLAYER: Player = "X";
const AI: Player = "O";

export default function Home() {
  const [board, setBoard] = useState<GameState>(getInitialBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>(PLAYER);
  const [winner, setWinner] = useState<Winner>(null);
  const [isAIMakingMove, setIsAIMakingMove] = useState(false);

  const handleCellClick = useCallback(
    (index: number) => {
      if (board[index] || winner || currentPlayer !== PLAYER || isAIMakingMove) {
        return;
      }

      const newBoard = [...board];
      newBoard[index] = PLAYER;
      setBoard(newBoard);

      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        return;
      }

      setCurrentPlayer(AI);
      setIsAIMakingMove(true);
    },
    [board, winner, currentPlayer, isAIMakingMove]
  );

  useEffect(() => {
    if (currentPlayer !== AI || winner) {
      return;
    }

    setIsAIMakingMove(true);

    const timer = setTimeout(() => {
      const aiMoveIndex = getAIMove(board);
      if (aiMoveIndex !== undefined) {
        const newBoard = [...board];
        newBoard[aiMoveIndex] = AI;
        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
          setWinner(gameWinner);
        } else {
          setCurrentPlayer(PLAYER);
        }
      }
      setIsAIMakingMove(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [currentPlayer, winner, board]);

  const handleReset = () => {
    setBoard(getInitialBoard());
    setCurrentPlayer(PLAYER);
    setWinner(null);
    setIsAIMakingMove(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-bold mb-8 text-center"
      >
        <span className="text-cyan-400">Tic</span>
        <span className="text-zinc-600">-</span>
        <span className="text-pink-500">Tac</span>
        <span className="text-zinc-600">-</span>
        <span className="text-cyan-400">Toe</span>
      </motion.h1>

      <GameStatus
        currentPlayer={currentPlayer}
        winner={winner}
        isAIMakingMove={isAIMakingMove}
      />

      <div className="my-8">
        <GameBoard
          board={board}
          onCellClick={handleCellClick}
          currentPlayer={currentPlayer}
          disabled={isAIMakingMove || winner !== null}
        />
      </div>

      <ResetButton onClick={handleReset} disabled={false} />
    </div>
  );
}