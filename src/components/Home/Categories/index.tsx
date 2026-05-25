"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import categoriesData from "@/constants/categoryData";
import SingleItem from "./SingleItem";

const viewAllLinkClass =
  "inline-flex shrink-0 items-center gap-2 rounded-brutal border-2 border-ink bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none";

const Categories = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const marqueeItems = useMemo(
    () => [...categoriesData, ...categoriesData],
    []
  );

  const handleCardEnter = useCallback((id: number) => {
    setIsPaused(true);
    setHoveredId(id);
  }, []);

  const handleMarqueeLeave = useCallback(() => {
    setIsPaused(false);
    setHoveredId(null);
  }, []);

  const isInteracting = hoveredId !== null;

  return (
    <section className="border-b-2 border-ink/10 bg-cream py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0 flex-1">
            <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-sunny-yellow px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              Shop by department
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
              Browse Categories
            </h2>
            <p className="mt-2 max-w-md text-sm font-medium text-dark-4 lg:hidden">
              Swipe through departments and tap to shop.
            </p>
            <p className="mt-2 hidden max-w-md text-sm font-medium text-dark-4 lg:block">
              Hover a category to pause and explore.
            </p>
          </div>

          <Link href="/shop" className={`${viewAllLinkClass} hidden sm:inline-flex`}>
            View all
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile slider */}
        <div className="categories-mobile-slider -mx-4 px-4 sm:-mx-6 sm:px-6 lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={14}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            className="!pb-10"
          >
            {categoriesData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto !w-[230px] xsm:!w-[250px]">
                <SingleItem item={item} variant="mobile" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop marquee */}
        <div
          className="relative hidden lg:block"
          onMouseLeave={handleMarqueeLeave}
        >
          <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white p-4 shadow-brutal-sm">
            <div
              className={`categories-marquee-track gap-5 py-2 ${
                isPaused ? "is-paused" : ""
              }`}
            >
              {marqueeItems.map((item, index) => {
                const isFocused = hoveredId === item.id;
                const isDimmed = isInteracting && !isFocused;

                return (
                  <div
                    key={`${item.id}-${index}`}
                    className={`w-[360px] shrink-0 transition-all duration-300 ease-out xl:w-[380px] ${
                      isFocused
                        ? "z-20 scale-[1.03] opacity-100"
                        : isDimmed
                          ? "z-0 scale-[0.98] opacity-40"
                          : "z-0 scale-100 opacity-100"
                    }`}
                    onMouseEnter={() => handleCardEnter(item.id)}
                  >
                    <SingleItem item={item} variant="desktop" isFocused={isFocused} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link href="/shop" className={viewAllLinkClass}>
            View all
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
