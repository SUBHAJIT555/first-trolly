import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }: { title: string; pages: string[] }) => {
  return (
    <div className="border-b-2 border-ink/15 bg-cream pt-24 sm:pt-45 lg:pt-45 xl:pt-52">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h1 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            {title}
          </h1>

          <ul className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-dark-4">
            <li>
              <Link
                href="/"
                className="rounded-brutal border border-transparent px-1.5 py-0.5 transition-colors hover:border-ink/20 hover:text-green-600"
              >
                Home
              </Link>
            </li>
            {pages.length > 0 &&
              pages.map((page, key) => (
                <li key={key} className="flex items-center gap-1.5 capitalize">
                  <span className="text-ink/30" aria-hidden>
                    /
                  </span>
                  <span
                    className={
                      key === pages.length - 1
                        ? "rounded-brutal border-2 border-ink bg-sunny-yellow px-2 py-0.5 font-extrabold text-ink"
                        : ""
                    }
                  >
                    {page}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
