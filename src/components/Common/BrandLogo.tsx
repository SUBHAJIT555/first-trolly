import React from "react";

type BrandLogoSize = "sm" | "md" | "lg";

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
};

const sizeConfig: Record<
  BrandLogoSize,
  {
    wrap: string;
    iconBox: string;
    icon: string;
    first: string;
    trolly: string;
    highlight: string;
  }
> = {
  sm: {
    wrap: "gap-1.5",
    iconBox: "h-7 w-7 -rotate-6",
    icon: "h-[62%] w-[62%]",
    first: "text-[8px] tracking-[0.22em]",
    trolly: "text-[15px]",
    highlight: "h-1",
  },
  md: {
    wrap: "gap-2",
    iconBox: "h-9 w-9 -rotate-6",
    icon: "h-[62%] w-[62%]",
    first: "text-[10px] tracking-[0.24em]",
    trolly: "text-xl",
    highlight: "h-1.5",
  },
  lg: {
    wrap: "gap-2.5",
    iconBox: "h-10 w-10 -rotate-6",
    icon: "h-[62%] w-[62%]",
    first: "text-[11px] tracking-[0.26em]",
    trolly: "text-2xl",
    highlight: "h-1.5",
  },
};

function TrolleyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 13H6M1 17H7M2 21H5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M9 11L23 9L25 21L11 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M9 11L7 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="13" cy="25" r="2.5" fill="currentColor" />
      <circle cx="22" cy="24" r="2.5" fill="currentColor" />
      <path
        d="M16 13L18 16H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const BrandLogo = ({ size = "md", className = "" }: BrandLogoProps) => {
  const styles = sizeConfig[size];

  return (
    <span
      className={`group inline-flex items-center ${styles.wrap} ${className}`}
      aria-hidden
    >
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-sunny-yellow text-green-600 shadow-brutal-sm transition-transform duration-200 group-hover:rotate-0 ${styles.iconBox}`}
      >
        <TrolleyIcon className={styles.icon} />
      </span>

      <span className="flex flex-col leading-[0.9]">
        <span
          className={`font-extrabold uppercase text-ink/70 ${styles.first} -rotate-2`}
        >
          First
        </span>
        <span
          className={`relative inline-block font-black tracking-tighter text-green-600 ${styles.trolly} rotate-1`}
        >
          Trolly
          <span
            className={`absolute -bottom-0.5 left-0 w-full -skew-x-6 rounded-sm bg-mint-pop/75 ${styles.highlight}`}
            aria-hidden
          />
        </span>
      </span>
    </span>
  );
};

export default BrandLogo;
