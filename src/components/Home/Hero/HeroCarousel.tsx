"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export const heroSlides = [
  {
    badge: "Shopping Stack",
    badgeAccent: "One place for everything",
    title: "Electronics, Stationery, Books & Garments",
    description:
      "Discover gadgets, study essentials, books, and apparel—all in one place. Top quality, honest prices, made for India.",
    cta: "Shop Now",
    href: "/shop",
    image: "/images/HomePageImages/1.webp",
    imageAlt: "Electronics and gadgets",
  },
  {
    badge: "40% Off",
    badgeAccent: "Limited time sale",
    title: "Electronics, Books, Stationery & More",
    description:
      "Keep shopping hassle-free with Apna Market. Electronics, stationery, and much more—delivered with care.",
    cta: "Explore Deals",
    href: "/shop",
    image: "/images/HomePageImages/2.webp",
    imageAlt: "Sale collection",
  },
];

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel hero-carousel-editorial h-full w-full"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={slide.title}>
          <div className="grid min-h-[480px] lg:min-h-[520px] lg:grid-cols-[1fr_1.05fr]">
            {/* Dark editorial panel */}
            <div className="relative flex flex-col justify-between bg-neutral-900 px-6 pb-16 pt-10 sm:px-10 sm:pb-18 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-14">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-white/40">
                    0{index + 1} / 0{heroSlides.length}
                  </span>
                  <span className="h-px flex-1 max-w-[60px] bg-white/15" />
                  <span className="rounded-full border border-orange-600/40 bg-orange-600/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-600">
                    {slide.badge}
                  </span>
                </div>

                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/50">
                  {slide.badgeAccent}
                </p>

                <h1 className="max-w-md text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.35rem]">
                  {slide.title}
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60 sm:text-[15px]">
                  {slide.description}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-0">
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-orange-700 active:scale-[0.98]"
                >
                  {slide.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                {/* <Link
                  href="/shop"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Browse categories →
                </Link> */}
              </div>
            </div>

            {/* Product stage */}
            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-1 to-orange-600/5 px-6 py-10 sm:px-10">
              <div
                className="pointer-events-none absolute -right-20 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-neutral-200/60"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full border border-dashed border-neutral-300/80"
                aria-hidden
              />
              <div className="relative z-10 w-full max-w-[340px] lg:max-w-[400px]">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={400}
                  height={400}
                  className="h-auto w-full object-contain drop-shadow-2xl"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
