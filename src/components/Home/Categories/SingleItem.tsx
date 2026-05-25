import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

export const cardThemes = [
  { bg: "bg-sunny-yellow", imageBg: "bg-white", badge: "bg-green-600 text-white" },
  { bg: "bg-mint-pop", imageBg: "bg-white", badge: "bg-ink text-white" },
  { bg: "bg-white", imageBg: "bg-cream", badge: "bg-green-600 text-white" },
  { bg: "bg-cream", imageBg: "bg-white", badge: "bg-ink text-white" },
] as const;

export function getCategoryTheme(id: number) {
  return cardThemes[(id - 1) % cardThemes.length];
}

interface SingleItemProps {
  item: Category;
  isFocused?: boolean;
  variant?: "desktop" | "mobile";
}

const ExploreButton = () => (
  <>
    Explore
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

const SingleItem = ({
  item,
  isFocused = false,
  variant = "desktop",
}: SingleItemProps) => {
  const theme = getCategoryTheme(item.id);

  const cardBase = `group flex w-full flex-col overflow-hidden rounded-brutal-lg border-2 border-ink transition-all duration-200 ${theme.bg} ${
    isFocused
      ? "shadow-brutal -translate-y-1"
      : "shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
  }`;

  if (variant === "mobile") {
    return (
      <Link href={`/shop?category=${item.slug}`} className={cardBase}>
        <div
          className={`mx-4 mt-4 flex h-[120px] items-center justify-center rounded-brutal border-2 border-ink ${theme.imageBg}`}
        >
          <Image
            src={item.img}
            alt={item.title}
            width={110}
            height={96}
            className="h-auto max-h-[100px] w-auto object-contain transition-transform duration-200 group-active:scale-105"
          />
        </div>

        <div className="flex flex-col gap-3 p-4 pt-3">
          {item.badge && (
            <span
              className={`w-fit rounded-brutal border-2 border-ink px-2 py-0.5 text-2xs font-bold uppercase tracking-wide ${theme.badge}`}
            >
              {item.badge}
            </span>
          )}
          <h3 className="line-clamp-2 text-base font-extrabold leading-snug text-ink">
            {item.title}
          </h3>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-brutal border-2 border-ink bg-white px-3 py-2 text-xs font-bold text-ink shadow-brutal-sm">
            <ExploreButton />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/shop?category=${item.slug}`} className={`${cardBase} h-[220px] lg:h-[240px]`}>
      <div className="flex h-full">
        <div className="flex min-w-0 flex-1 flex-col justify-between p-5 lg:p-6">
          {item.badge && (
            <span
              className={`mb-2 w-fit rounded-brutal border-2 border-ink px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wide ${theme.badge}`}
            >
              {item.badge}
            </span>
          )}
          <h3 className="text-xl font-extrabold leading-tight text-ink lg:text-2xl">
            {item.title}
          </h3>
          <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-brutal border-2 border-ink bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none">
            <ExploreButton />
          </span>
        </div>

        <div
          className={`m-4 ml-0 flex w-[42%] shrink-0 items-center justify-center rounded-brutal border-2 border-ink ${theme.imageBg} lg:w-[44%]`}
        >
          <Image
            src={item.img}
            alt={item.title}
            width={150}
            height={130}
            className={`h-auto max-h-[140px] w-auto max-w-[130px] object-contain transition-transform duration-300 lg:max-w-[150px] ${
              isFocused ? "scale-110" : "group-hover:scale-105"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
