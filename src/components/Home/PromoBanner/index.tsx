import React from "react";
import Image from "next/image";
import Link from "next/link";

const shopBtnClass =
  "inline-flex items-center gap-2 rounded-brutal border-2 border-ink bg-green-600 px-5 py-2.5 text-custom-sm font-extrabold text-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none";

const arrowIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M3 7H11M11 7L8 4M11 7L8 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PromoBanner = () => {
  return (
    <section className="border-b-2 border-ink/10 bg-cream py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured promo */}
          <div className="group relative overflow-hidden rounded-brutal-lg border-2 border-ink bg-sunny-yellow shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none lg:col-span-7">
            <div className="relative flex min-h-[160px] items-center justify-between gap-4 p-5 sm:min-h-[172px] sm:p-6">
              <div className="min-w-0 flex-1">
                <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-green-600 px-2.5 py-0.5 text-2xs font-extrabold uppercase tracking-wide text-white">
                  Up to 30% off
                </span>
                <h2 className="mb-2 text-lg font-extrabold leading-snug text-ink sm:text-xl">
                  Electronics, Books &amp; More
                </h2>
                <p className="mb-4 line-clamp-2 max-w-md text-custom-sm font-medium text-dark-3">
                  Mobile accessories, gadgets, books, stationery &amp; fashion —
                  delivered across India.
                </p>
                <Link href="/shop" className={shopBtnClass}>
                  Shop Now
                  {arrowIcon}
                </Link>
              </div>

              <div className="relative hidden shrink-0 sm:block">
                <div className="rounded-brutal border-2 border-ink bg-white p-3 shadow-brutal-sm">
                  <Image
                    src="/images/HomePageImages/6.webp"
                    alt="Electronics and gadgets"
                    width={130}
                    height={130}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary promos */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Link
              href="/shop"
              className="group relative flex min-h-[128px] items-center overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:min-h-[140px] lg:min-h-0 lg:flex-1"
            >
              <div className="rounded-brutal border-2 border-ink bg-cream p-2 shadow-brutal-sm m-4 shrink-0 sm:m-5">
                <Image
                  src="/images/HomePageImages/7.webp"
                  alt="Books and stationery"
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 py-4 pr-4 sm:pr-5">
                <span className="rounded-brutal border border-ink/20 bg-mint-pop px-2 py-0.5 text-2xs font-bold uppercase tracking-wide text-ink">
                  Books &amp; Stationery
                </span>
                <h3 className="mt-2 text-base font-extrabold text-ink sm:text-lg">
                  Office Essentials
                </h3>
                <p className="mt-1 text-custom-sm font-extrabold text-green-600">
                  Flat 20% off
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-custom-xs font-bold text-ink">
                  Shop now
                  {arrowIcon}
                </span>
              </div>
            </Link>

            <Link
              href="/shop"
              className="group relative flex min-h-[128px] items-center overflow-hidden rounded-brutal-lg border-2 border-ink bg-mint-pop shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:min-h-[140px] lg:min-h-0 lg:flex-1"
            >
              <div className="min-w-0 flex-1 py-4 pl-4 sm:pl-5">
                <span className="rounded-brutal border border-ink/20 bg-white px-2 py-0.5 text-2xs font-bold uppercase tracking-wide text-ink">
                  Men, Women &amp; Kids
                </span>
                <h3 className="mt-2 text-base font-extrabold text-ink sm:text-lg">
                  Family Fashion
                </h3>
                <p className="mt-1 text-custom-sm font-extrabold text-ink">
                  Up to <span className="text-green-600">40%</span> off
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-custom-xs font-bold text-ink">
                  Shop now
                  {arrowIcon}
                </span>
              </div>
              <div className="rounded-brutal border-2 border-ink bg-white p-2 shadow-brutal-sm m-4 shrink-0 sm:m-5">
                <Image
                  src="/images/HomePageImages/5.webp"
                  alt="Fashion apparel"
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
