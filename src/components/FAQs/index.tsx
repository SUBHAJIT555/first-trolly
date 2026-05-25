"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const { brand } = siteConfig;

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: `What does ${brand.name} sell?`,
      answer: `${brand.name} is an Indian online store selling electronics (mobile accessories, smart gadgets, computer accessories, home electronics), books, stationery, and garments for men, women, and kids. We focus on honest pricing and great value for Indian customers.`,
    },
    {
      question: "Do you deliver across India?",
      answer:
        "Yes. We ship to all states and union territories in India. Delivery times vary by location—usually 3–7 business days. Free delivery is available on orders above ₹499.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI, debit and credit cards (Visa, MasterCard, RuPay), net banking, and other popular Indian payment options. All payments are processed securely.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 7-day easy return policy. Items should be unused and in original packaging with tags. For full details, visit our Refund Policy or Terms and Conditions page.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After your order is shipped, you'll get an email and SMS with a tracking link. You can track your order on our website or on the courier partner's site using that link.",
    },
    {
      question: "Can I cancel or change my order?",
      answer:
        "You can cancel or change your order before it is shipped. Contact our support as soon as possible with your order number so we can try to update it.",
    },
    {
      question: "What if I receive a damaged or wrong item?",
      answer:
        "If you receive a damaged or incorrect product, contact us within 48 hours with your order number and photos. We will arrange a replacement or refund as per our policy.",
    },
    {
      question: `What kind of prices does ${brand.name} offer?`,
      answer: `${brand.name} focuses on value for Indian customers. We offer honest prices on electronics, books, stationery, and garments—with regular offers and great deals.`,
    },
    {
      question: `How do I contact ${brand.name}?`,
      answer: `Reach us by email at ${brand.email.general}, phone at ${brand.phone}, or the contact form on our website. We're here to help during ${brand.businessHours}.`,
    },
    {
      question: "Do you have offers or discounts?",
      answer:
        "We run regular promotions and seasonal sales. Check the homepage and product pages for current offers. You can also subscribe to our newsletter for updates on deals and new arrivals.",
    },
    {
      question: `Is my data safe with ${brand.name}?`,
      answer:
        "We take privacy seriously. Your personal and payment information is protected. For full details on how we collect, use, and protect your data, see our Privacy Policy and Cookie Policy.",
    },
    {
      question: `Where is ${brand.name} based?`,
      answer: `${brand.name} is an Indian brand. Our registered address is ${brand.address.full}. For business hours and contact details, visit our Contact page.`,
    },
  ];

  return (
    <>
      <Breadcrumb title={"FAQs"} pages={["FAQs"]} />

      <section className="bg-cream py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-mint-pop px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              Help center
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-medium text-dark-4 sm:text-base">
              Find answers about {brand.name} products, shipping, returns, and more.
              Can&apos;t find what you need?{" "}
              <Link href="/contact" className="font-bold text-green-600 hover:text-green-700">
                Contact us
              </Link>
              .
            </p>
          </div>

          <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal">
            <div className="border-b-2 border-ink bg-sunny-yellow px-5 py-4 sm:px-8 sm:py-5">
              <p className="text-2xs font-bold uppercase tracking-widest text-ink">
                {brand.name}
              </p>
              <p className="mt-1 text-sm font-medium text-dark-3">
                {faqs.length} questions answered below
              </p>
            </div>

            <div className="space-y-3 p-4 sm:space-y-4 sm:p-6 lg:p-8">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-brutal border-2 border-ink transition-all duration-150 ${
                      isOpen
                        ? "bg-cream shadow-brutal-sm"
                        : "bg-white shadow-brutal-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className={`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors duration-150 sm:p-5 ${
                        isOpen ? "bg-mint-pop/40" : "hover:bg-cream"
                      }`}
                    >
                      <span className="pr-2 text-sm font-extrabold leading-snug text-ink sm:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-white text-ink shadow-brutal-sm transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-sunny-yellow" : ""
                        }`}
                        aria-hidden
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t-2 border-ink/10 px-4 pb-4 sm:px-5 sm:pb-5">
                        <p className="pt-3 text-sm font-medium leading-relaxed text-dark-4 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-t-2 border-ink bg-cream px-5 py-6 sm:px-8 sm:py-8">
              <div className="rounded-brutal-lg border-2 border-ink bg-white p-5 shadow-brutal-sm sm:p-6">
                <h3 className="text-lg font-extrabold text-ink sm:text-xl">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm font-medium text-dark-4">
                  Our customer service team is ready to help during{" "}
                  {brand.businessHours}.
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-dark-4 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                  <a
                    href={`mailto:${brand.email.support}`}
                    className="font-bold text-green-600 hover:text-green-700"
                  >
                    {brand.email.support}
                  </a>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="font-bold text-green-600 hover:text-green-700"
                  >
                    {brand.phone}
                  </a>
                  <span>{brand.address.full}</span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-6 py-3 text-sm font-extrabold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={`mailto:${brand.email.support}`}
                    className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-white px-6 py-3 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
