import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <section className="bg-cream pb-10 pt-24 sm:pb-14 sm:pt-45 lg:pb-18 lg:pt-30 xl:pt-52">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="mb-5 inline-flex items-center rounded-brutal border-2 border-ink bg-sunny-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              Welcome to {siteConfig.brand.name}
            </span>

            <h1 className="text-[1.85rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.85rem] lg:leading-[1.05]">
              Everything you need,{" "}
              <span className="relative inline-block">
                all in one place
                <span
                  className="absolute -bottom-1 left-0 h-3 w-full -rotate-1 rounded-sm bg-mint-pop/60"
                  aria-hidden
                />
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-dark-3 sm:text-lg">
              Electronics, books, stationery, and garments—honest prices, fast
              delivery, and quality you can trust for everyday shopping.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-8 py-3.5 text-sm font-bold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none active:shadow-none"
              >
                Shop now
              </Link>
              <Link
                href="/shop"
                aria-label="Browse shop"
                className="inline-flex h-12 w-12 items-center justify-center rounded-brutal border-2 border-ink bg-white text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-sunny-yellow hover:shadow-none active:shadow-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 15L15 5M15 5H8M15 5V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              {[
                { label: "Free shipping", value: "₹499+" },
                { label: "Easy returns", value: "7 days" },
                { label: "Secure pay", value: "UPI & cards" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-brutal border-2 border-ink bg-white px-4 py-2.5 shadow-brutal-sm"
                >
                  <p className="text-2xs font-bold uppercase tracking-wide text-dark-4">
                    {item.label}
                  </p>
                  <p className="text-sm font-extrabold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              <div className="rounded-brutal-lg border-2 border-ink bg-white p-6 shadow-brutal sm:p-8">
                <span className="mb-5 inline-flex rounded-brutal border-2 border-ink bg-green-600 px-3 py-1 text-2xs font-bold uppercase tracking-wide text-white">
                  New arrivals
                </span>

                <div className="relative aspect-square w-full rounded-brutal bg-cream">
                  <Image
                    src="/images/HomePageImages/1.webp"
                    alt={`${siteConfig.brand.name} products`}
                    fill
                    className="object-contain p-4"
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroFeature />
      </div>
    </section>
  );
};

export default Hero;
