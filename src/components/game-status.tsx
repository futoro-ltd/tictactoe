"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Player, Winner } from "@/lib/game-logic";

interface GameStatusProps {
  currentPlayer: Player;
  winner: Winner;
  isAIMakingMove: boolean;
}

export function GameStatus({ currentPlayer, winner, isAIMakingMove }: GameStatusProps) {
  if (winner) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-bold text-center"
      >
        {winner === "draw" ? (
          <span className="text-zinc-400">It&apos;s a Draw!</span>
        ) : (
          <span className={cn(winner === "X" ? "text-cyan-400" : "text-pink-500")}>
            {winner === "X" ? "You Win!" : "Computer Wins!"}
          </span>
        )}
      </motion.div>
    );
  }

  if (isAIMakingMove) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl sm:text-2xl text-zinc-400"
      >
        Computer is thinking...
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xl sm:text-2xl"
    >
      <span className="text-zinc-400">Your Turn</span>
      <span className="text-cyan-400 ml-2 font-bold">X</span>
    </motion.div>
  );
}