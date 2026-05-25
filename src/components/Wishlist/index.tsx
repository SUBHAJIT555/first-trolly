"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { removeAllItemsFromWishlist } from "@/redux/features/wishlist-slice";
import SingleItem from "./SingleItem";
import WishlistSummary from "./WishlistSummary";

export const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const handleClearWishlist = () => {
    dispatch(removeAllItemsFromWishlist());
  };

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />

      {wishlistItems.length > 0 ? (
        <section className="bg-cream py-12 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
              <div>
                <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-mint-pop px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
                  Saved for later
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
                  Your Wishlist
                </h2>
                <p className="mt-2 text-sm font-medium text-dark-4">
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1 ? "item" : "items"} saved
                </p>
              </div>
              <button
                type="button"
                onClick={handleClearWishlist}
                className="rounded-brutal border-2 border-ink bg-white px-4 py-2 text-sm font-bold text-red-dark shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-red-light-4 hover:shadow-none"
              >
                Clear wishlist
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-4">
                  {wishlistItems.map((item) => (
                    <SingleItem item={item} key={item.id} />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <WishlistSummary />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
            <div className="rounded-brutal-lg border-2 border-dashed border-ink/30 bg-white px-6 py-12 shadow-brutal-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-brutal border-2 border-ink bg-mint-pop text-red-dark shadow-brutal-sm">
                <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M10 16.4584C10 16.4584 3.33333 11.875 3.33333 7.29169C3.33333 5.41669 4.79167 3.95835 6.66667 3.95835C7.91667 3.95835 9.04167 4.58335 10 5.62502C10.9583 4.58335 12.0833 3.95835 13.3333 3.95835C15.2083 3.95835 16.6667 5.41669 16.6667 7.29169C16.6667 11.875 10 16.4584 10 16.4584Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-extrabold text-ink">
                Your wishlist is empty
              </h3>
              <p className="mb-8 text-sm font-medium text-dark-4">
                Save products you love and come back anytime.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-8 py-3 text-sm font-extrabold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none"
              >
                Browse Shop
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
