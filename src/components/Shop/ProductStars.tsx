import React from "react";

export function ProductStars({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  const normalized = Math.min(5, Math.max(0, rating));

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div
        className="flex items-center gap-0.5"
        aria-label={`${normalized} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-3.5 w-3.5 ${
              normalized >= i + 1 ? "text-green-600" : "text-ink/15"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs font-medium text-dark-4">
        {normalized.toFixed(1)} ({reviewCount})
      </span>
    </div>
  );
}

export function getProductBadgeLabel(item: {
  isNewArrival?: boolean;
  isBestSelling?: boolean;
  isTrending?: boolean;
}) {
  if (item.isNewArrival) return "New Arrival";
  if (item.isBestSelling) return "Best Seller";
  if (item.isTrending) return "Trending";
  return "Featured";
}

export function getDiscountPercent(price: number, discountedPrice: number) {
  if (price <= discountedPrice) return 0;
  return Math.round(((price - discountedPrice) / price) * 100);
}
