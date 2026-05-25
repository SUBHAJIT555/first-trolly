"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";
import categoryData from "@/constants/categoryData";
import { getCategoryTheme } from "../Home/Categories/SingleItem";

const { brand } = siteConfig;

const stats = [
  { value: "₹499+", label: "Free delivery threshold", accent: "bg-sunny-yellow" },
  { value: "7 days", label: "Easy return window", accent: "bg-mint-pop" },
  { value: "Pan-India", label: "Delivery coverage", accent: "bg-white" },
  { value: "UPI & cards", label: "Secure checkout", accent: "bg-cream" },
];

const whyChoose = [
  {
    title: "Quality guaranteed",
    description:
      "Every product is curated for Indian homes—electronics, stationery, books, and garments that meet our standards.",
  },
  {
    title: "Honest pricing",
    description:
      "No inflated markups. Fair value on everyday essentials, with clear discounts where they apply.",
  },
  {
    title: "Easy returns",
    description:
      "A simple 7-day return process designed for peace of mind when you shop online.",
  },
  {
    title: "Nationwide delivery",
    description:
      "We ship across India with reliable partners so your order reaches you on time.",
  },
  {
    title: "Secure payments",
    description:
      "Pay safely with UPI, cards, and trusted methods. Your data stays protected.",
  },
  {
    title: "Human support",
    description:
      "Real help when you need it—questions about orders, products, or returns.",
  },
];

const trustFeatures = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "On orders ₹499 and above",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Easy Returns",
    description: "Simple 7-day return policy",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Secure Pay",
    description: "UPI, cards, and more",
  },
];

const values = [
  "Made for India",
  "Quality & value",
  "Transparent pricing",
  "Trusted delivery",
];

const primaryBtnClass =
  "inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-8 py-3.5 text-sm font-extrabold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none";

const secondaryBtnClass =
  "inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-white px-8 py-3.5 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none";

const viewAllLinkClass =
  "inline-flex shrink-0 items-center gap-2 rounded-brutal border-2 border-ink bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-600 hover:shadow-none";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-brutal border-2 border-ink bg-sunny-yellow px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
      {children}
    </span>
  );
}

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" pages={["about"]} />

      <div className="bg-cream">
        {/* Hero */}
        <section className="border-b-2 border-ink/10 py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-xl">
                <SectionBadge>Our story</SectionBadge>
                <h1 className="mt-4 text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
                  Shopping made simple for every Indian home
                </h1>
                <p className="mt-5 text-base font-medium leading-relaxed text-dark-4 sm:text-lg">
                  {brand.name} is a homegrown store for electronics, books,
                  stationery, and garments—honest prices, dependable delivery,
                  and service that puts customers first.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/shop" className={primaryBtnClass}>
                    Explore shop
                  </Link>
                  <Link href="/contact" className={secondaryBtnClass}>
                    Get in touch
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-brutal-lg border-2 border-ink bg-white p-6 shadow-brutal sm:p-8">
                  <div className="relative mx-auto aspect-square max-h-[320px] w-full max-w-[280px] rounded-brutal border-2 border-ink bg-cream sm:max-h-[360px] sm:max-w-[320px]">
                    <Image
                      src="/images/HomePageImages/1.webp"
                      alt={`${brand.name} products`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 280px, 320px"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 rounded-brutal border-2 border-ink bg-mint-pop px-4 py-3 shadow-brutal-sm sm:left-6">
                  <p className="text-2xs font-bold uppercase tracking-widest text-ink">
                    Trusted in India
                  </p>
                  <p className="mt-0.5 text-sm font-extrabold text-ink">
                    Quality you can count on
                  </p>
                </div>
                <div className="absolute -right-2 top-6 rounded-brutal border-2 border-ink bg-sunny-yellow px-3 py-2 text-2xs font-extrabold uppercase tracking-wide text-ink shadow-brutal-sm sm:right-0">
                  Since day one
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b-2 border-ink/10 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-brutal-lg border-2 border-ink px-4 py-5 text-center shadow-brutal-sm sm:px-6 sm:py-6 ${item.accent}`}
                >
                  <p className="text-xl font-extrabold text-ink sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-dark-4 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story + mission + values */}
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <SectionBadge>Who we are</SectionBadge>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl">
                Built in India, for Indian shoppers
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
              <article className="rounded-brutal-lg border-2 border-ink bg-white p-6 shadow-brutal-sm sm:p-8 lg:col-span-7 lg:p-10">
                <h3 className="text-lg font-extrabold text-ink sm:text-xl">
                  Our story
                </h3>
                <div className="mt-5 space-y-4 text-sm font-medium leading-relaxed text-dark-4 sm:text-base">
                  <p>
                    {brand.name} started with one goal: give Indian customers a
                    trusted place to shop everyday essentials at honest prices.
                    We began small, focused on quality over hype, and grew by
                    earning trust order by order.
                  </p>
                  <p>
                    From mobile accessories and smart gadgets to books,
                    stationery, and apparel—we work with reliable suppliers
                    and pick products that fit Indian homes and budgets.
                  </p>
                  <p>
                    Today we serve shoppers across the country with dependable
                    delivery, easy returns, secure payments, and support when
                    you need a real answer.
                  </p>
                </div>
              </article>

              <div className="flex flex-col gap-5 lg:col-span-5 lg:gap-6">
                <article className="flex flex-1 flex-col rounded-brutal-lg border-2 border-ink bg-ink p-6 text-white shadow-brutal sm:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-brutal border-2 border-ink bg-sunny-yellow text-ink shadow-brutal-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-extrabold">Our mission</h3>
                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-white/80 sm:text-base">
                    To be India&apos;s trusted everyday store—quality products,
                    fair prices, safe payments, and service that always puts
                    customers first.
                  </p>
                </article>

                <article className="rounded-brutal-lg border-2 border-ink bg-white p-6 shadow-brutal-sm sm:p-8">
                  <h3 className="text-lg font-extrabold text-ink">Our values</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {values.map((value) => (
                      <li
                        key={value}
                        className="rounded-brutal border-2 border-ink bg-mint-pop px-3.5 py-1.5 text-sm font-bold text-ink shadow-brutal-sm"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-y-2 border-ink/10 bg-white py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionBadge>What we sell</SectionBadge>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
                  Everything under one roof
                </h2>
                <p className="mt-2 max-w-lg text-sm font-medium text-dark-4 sm:text-base">
                  Six categories curated for work, study, home, and wardrobe.
                </p>
              </div>
              <Link href="/shop" className={viewAllLinkClass}>
                Browse all
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryData.map((cat) => {
                const theme = getCategoryTheme(cat.id);

                return (
                  <Link
                    key={cat.id}
                    href={`/shop?category=${cat.slug}`}
                    className={`group flex gap-4 rounded-brutal-lg border-2 border-ink p-4 shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:p-5 ${theme.bg}`}
                  >
                    <div
                      className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-brutal border-2 border-ink sm:h-24 sm:w-24 ${theme.imageBg}`}
                    >
                      <Image
                        src={cat.img}
                        alt={cat.title}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span
                        className={`inline-flex rounded-brutal border border-ink/20 px-2 py-0.5 text-2xs font-bold uppercase tracking-wide ${theme.badge}`}
                      >
                        {cat.badge}
                      </span>
                      <h3 className="mt-1 font-extrabold text-ink group-hover:text-green-600">
                        {cat.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm font-medium text-dark-4">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionBadge>Why us</SectionBadge>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl">
                  Why choose {brand.name}?
                </h2>
                <p className="mt-3 text-sm font-medium text-dark-4 sm:text-base">
                  More than a catalog—a shopping experience designed around
                  trust, value, and convenience.
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {whyChoose.map((item, index) => (
                  <li
                    key={item.title}
                    className="rounded-brutal-lg border-2 border-ink bg-white p-5 shadow-brutal-sm sm:p-6"
                  >
                    <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-brutal border-2 border-ink bg-sunny-yellow px-2 text-sm font-extrabold text-ink shadow-brutal-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-dark-4">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trust promise */}
        <section className="pb-12 sm:pb-14 lg:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-ink shadow-brutal">
              <div className="border-b-2 border-ink bg-sunny-yellow px-6 py-4 sm:px-8">
                <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
                  The {brand.name} promise
                </h2>
              </div>
              <div className="grid gap-6 px-6 py-8 sm:grid-cols-3 sm:gap-8 sm:px-8 sm:py-10 lg:px-10">
                {trustFeatures.map((item) => (
                  <div key={item.title} className="flex gap-4 sm:flex-col sm:gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-green-600 shadow-brutal-sm">
                      <Image
                        src={item.img}
                        alt=""
                        width={22}
                        height={22}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-sunny-yellow">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-xs font-medium leading-relaxed text-white/75 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t-2 border-ink/10 pb-16 pt-4 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal">
              <div className="border-b-2 border-ink bg-mint-pop px-6 py-4 sm:px-8">
                <SectionBadge>Reach out</SectionBadge>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
                  We&apos;d love to hear from you
                </h2>
              </div>

              <div className="relative p-6 sm:p-8 lg:p-10">
                <p className="max-w-xl text-sm font-medium text-dark-4 sm:text-base">
                  Questions, feedback, or partnership ideas—our team is here to
                  help Indian shoppers every day.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <a
                    href={`mailto:${brand.email.general}`}
                    className="rounded-brutal border-2 border-ink bg-cream p-4 shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  >
                    <p className="text-2xs font-bold uppercase tracking-widest text-ink">
                      Email
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-green-600">
                      {brand.email.general}
                    </p>
                  </a>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="rounded-brutal border-2 border-ink bg-cream p-4 shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  >
                    <p className="text-2xs font-bold uppercase tracking-widest text-ink">
                      Phone
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-green-600">
                      {brand.phone}
                    </p>
                  </a>
                  <div className="rounded-brutal border-2 border-ink bg-sunny-yellow p-4 shadow-brutal-sm">
                    <p className="text-2xs font-bold uppercase tracking-widest text-ink">
                      Visit
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-ink">
                      {brand.address.full}
                    </p>
                    <p className="mt-1 text-sm font-medium text-dark-4">
                      {brand.businessHours}
                    </p>
                  </div>
                </div>

                <Link href="/contact" className={`mt-8 ${primaryBtnClass}`}>
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
