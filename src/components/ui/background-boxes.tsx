"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type BoxesProps = {
  className?: string;
  rows?: number;
  cols?: number;
  colors?: string[];
  lineClassName?: string;
};

const defaultColors = [
  "#93c5fd",
  "#5eead4",
  "#34d399",
  "#38bdf8",
  "#a5b4fc",
  "#c4b5fd",
  "#f0abfc",
  "#86efac",
];

export const BoxesCore = ({
  className,
  rows = 68,
  cols = 54,
  colors = defaultColors,
  lineClassName,
}: BoxesProps) => {
  const rowItems = React.useMemo(() => new Array(rows).fill(1), [rows]);
  const colItems = React.useMemo(() => new Array(cols).fill(1), [cols]);

  return (
    <div
      style={{
        transform:
          "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.72) rotate(0deg) translateZ(0)",
      }}
      className={cn(
        "pointer-events-auto absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      data-background-boxes
    >
      {rowItems.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className={cn("relative h-8 w-16 border-l border-sky-900/22 dark:border-cyan-200/12", lineClassName)}
        >
          {colItems.map((_, j) => {
            const color = colors[(i * 7 + j * 13) % colors.length];
            return (
              <motion.div
                key={`col-${i}-${j}`}
                whileHover={{
                  backgroundColor: color,
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2 },
                }}
                className={cn(
                  "relative h-8 w-16 border-r border-t border-sky-900/22 dark:border-cyan-200/12",
                  lineClassName,
                )}
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-sky-900/20 dark:text-cyan-200/14"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
