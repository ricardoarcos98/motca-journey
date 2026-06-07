"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export function LayoutTextFlip({
  words,
  duration = 2400,
  className,
  wordClassName,
}: {
  words: string[];
  duration?: number;
  className?: string;
  wordClassName?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const longestWord = useMemo(
    () => words.reduce((longest, word) => (word.length > longest.length ? word : longest), words[0] ?? ""),
    [words],
  );

  useEffect(() => {
    if (words.length <= 1) return;
    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % words.length);
    }, duration);

    return () => window.clearInterval(interval);
  }, [duration, words.length]);

  return (
    <motion.span
      layout
      aria-live="polite"
      className={cn(
        "relative inline-grid max-w-full overflow-hidden rounded-lg border border-motca-green/30 bg-white/82 px-3 py-1.5 align-baseline text-[0.64em] leading-none text-motca-green shadow-lg shadow-motca-green/10 ring-1 ring-motca-green/12 backdrop-blur-md dark:bg-card/72 dark:shadow-motca-green/5 sm:text-[0.66em]",
        className,
      )}
      style={{
        minWidth: `${Math.max(longestWord.length * 0.52, 5.5)}em`,
      }}
    >
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap px-1">
        {longestWord}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[currentIndex]}
          initial={{ y: "-85%", filter: "blur(10px)", opacity: 0 }}
          animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
          exit={{ y: "85%", filter: "blur(10px)", opacity: 0 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className={cn("col-start-1 row-start-1 justify-self-center whitespace-nowrap px-1", wordClassName)}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
