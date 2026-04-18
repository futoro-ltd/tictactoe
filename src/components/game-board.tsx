"use client";

import { motion } from "framer-motion";
import { Cell } from "./cell";
import type { GameState, Player } from "@/lib/game-logic";

interface GameBoardProps {
  board: GameState;
  onCellClick: (index: number) => void;
  currentPlayer: Player;
  disabled: boolean;
}

export function GameBoard({ board, onCellClick, currentPlayer, disabled }: GameBoardProps) {
  return (
    <motion.div
      className="grid grid-cols-3 gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
          disabled={disabled || value !== null}
        />
      ))}
    </motion.div>
  );
}