"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export type ScrollingTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
  rating: number;
  /** Stable index so card color stays the same across scroll duplicates */
  themeIndex: number;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: ScrollingTestimonial[];
  duration?: number;
};

const cardThemes = [
  "bg-white",
  "bg-sunny-yellow",
  "bg-mint-pop",
] as const;

type CardTheme = (typeof cardThemes)[number];

function getStarColors(theme: CardTheme) {
  if (theme === "bg-white") {
    return { filled: "text-green-600", empty: "text-ink/20" };
  }
  return { filled: "text-ink", empty: "text-ink/30" };
}

function TestimonialStars({
  rating,
  theme,
}: {
  rating: number;
  theme: CardTheme;
}) {
  const normalized = Math.min(5, Math.max(0, rating));
  const { filled, empty } = getStarColors(theme);

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${normalized} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            normalized >= i + 1 ? filled : empty
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                translateY: "-50%",
              }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[0, 1].map((loopIndex) => (
          <React.Fragment key={loopIndex}>
            {testimonials.map((item, i) => {
              const theme =
                cardThemes[item.themeIndex % cardThemes.length];

              return (
                <article
                  key={`${loopIndex}-${item.name}-${i}`}
                  className={`w-full max-w-xs rounded-brutal-lg border-2 border-ink p-5 shadow-brutal-sm sm:p-6 ${theme}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <TestimonialStars rating={item.rating} theme={theme} />
                    <span className="rounded-brutal border-2 border-ink bg-green-600 px-2 py-0.5 text-xs font-extrabold text-white">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-dark-3">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t-2 border-ink/10 pt-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-brutal border-2 border-ink bg-white shadow-brutal-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <p className="truncate text-sm font-extrabold text-ink">
                        {item.name}
                      </p>
                      <p className="truncate text-xs font-medium text-dark-4">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
