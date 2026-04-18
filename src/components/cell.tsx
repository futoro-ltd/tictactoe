"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CellValue } from "@/lib/game-logic";

interface CellProps {
  value: CellValue;
  onClick: () => void;
  disabled: boolean;
}

export function Cell({ value, onClick, disabled }: CellProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-24 h-24 sm:w-28 sm:h-28 rounded-xl text-4xl sm:text-5xl font-bold flex items-center justify-center",
        "transition-all duration-200",
        "bg-zinc-900/80 border-2 border-zinc-800",
        "hover:border-zinc-600 hover:bg-zinc-800/80",
        "active:scale-95",
        "disabled:hover:border-zinc-800 disabled:hover:bg-zinc-900/80 disabled:active:scale-100",
        value && "cursor-default"
      )}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      animate={value ? { scale: [0.5, 1.1, 1] } : undefined}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: value ? 1 : 0, scale: value ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className={cn("font-bold", value === "X" ? "text-cyan-400" : "text-pink-500")}
      >
        {value}
      </motion.span>
    </motion.button>
  );
}