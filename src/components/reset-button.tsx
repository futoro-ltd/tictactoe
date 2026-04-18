"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResetButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function ResetButton({ onClick, disabled }: ResetButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center gap-2 px-6 py-3 rounded-xl font-medium",
        "bg-zinc-800 hover:bg-zinc-700",
        "transition-colors duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <RotateCcw className="w-5 h-5" />
      <span>Play Again</span>
    </motion.button>
  );
}