import React from "react";
import Breadcrumb from "./Breadcrumb";
import { siteConfig } from "@/config/site";

const { brand } = siteConfig;

type LegalPageLayoutProps = {
  breadcrumbTitle: string;
  breadcrumbPages: string[];
  badge: string;
  pageTitle: string;
  pageSubtitle: string;
  headerAccent?: "sunny" | "mint";
  children: React.ReactNode;
};

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="mb-3 text-lg font-extrabold text-ink sm:text-xl">{title}</h3>
      <div className="space-y-3 text-sm font-medium leading-relaxed text-dark-4 sm:text-[15px] [&_strong]:font-bold [&_strong]:text-ink [&_li]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function LegalContactBox({
  email,
  showBusinessHours = false,
}: {
  email: string;
  showBusinessHours?: boolean;
}) {
  return (
    <div className="rounded-brutal border-2 border-ink bg-cream p-5 text-sm font-medium text-dark-4 shadow-brutal-sm sm:p-6">
      <p>
        <span className="font-bold text-ink">Email:</span>{" "}
        <a href={`mailto:${email}`} className="font-bold text-green-600 hover:text-green-700">
          {email}
        </a>
      </p>
      <p className="mt-2">
        <span className="font-bold text-ink">Phone:</span>{" "}
        <a
          href={`tel:${brand.phone.replace(/\s/g, "")}`}
          className="font-bold text-green-600 hover:text-green-700"
        >
          {brand.phone}
        </a>
      </p>
      <p className="mt-2">
        <span className="font-bold text-ink">Address:</span> {brand.address.full}
      </p>
      {showBusinessHours && (
        <p className="mt-2">
          <span className="font-bold text-ink">Business Hours:</span>{" "}
          {brand.businessHours}
        </p>
      )}
    </div>
  );
}

export default function LegalPageLayout({
  breadcrumbTitle,
  breadcrumbPages,
  badge,
  pageTitle,
  pageSubtitle,
  headerAccent = "sunny",
  children,
}: LegalPageLayoutProps) {
  const headerBg = headerAccent === "mint" ? "bg-mint-pop" : "bg-sunny-yellow";
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Breadcrumb title={breadcrumbTitle} pages={breadcrumbPages} />

      <section className="bg-cream py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-mint-pop px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              {badge}
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
              {pageTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-medium text-dark-4 sm:text-base">
              {pageSubtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal">
            <div
              className={`border-b-2 border-ink px-5 py-4 sm:px-8 sm:py-5 ${headerBg}`}
            >
              <p className="text-2xs font-bold uppercase tracking-widest text-ink">
                {brand.name}
              </p>
              <p className="mt-1 text-sm font-medium text-dark-3">Official legal document</p>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">{children}</div>

            <div className="border-t-2 border-ink bg-cream px-5 py-4 sm:px-8">
              <p className="text-sm font-medium text-dark-4">
                <span className="font-bold text-ink">Last Updated:</span> {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
