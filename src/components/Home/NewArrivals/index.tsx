"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cart-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import categoryData from "@/constants/categoryData";

interface NewArrivalProps {
  products: Product[];
}

const viewAllLinkClass =
  "inline-flex shrink-0 items-center gap-2 rounded-brutal border-2 border-ink bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none";

function getCategoryLabel(categoryId: number) {
  const category = categoryData.find((c) => c.id === categoryId);
  return category?.title ?? "Shop";
}

function getDiscountPercent(price: number, discountedPrice: number) {
  if (price <= discountedPrice) return 0;
  return Math.round(((price - discountedPrice) / price) * 100);
}

const NewArrivalCard = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlistReducer.items
  );
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);
  const isInWishlist = wishlistItems.some((w) => w.id === item.id);
  const isInCart = cartItems.some((c) => c.id === item.id);

  const discountPercent = getDiscountPercent(item.price, item.discountedPrice);
  const categoryLabel = getCategoryLabel(item.categoryId);

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeItemFromCart(item.id));
    } else {
      dispatch(addItemToCart({ ...item, quantity: 1 }));
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(
        addItemToWishlist({
          ...item,
          status: "available",
          quantity: 1,
        })
      );
    }
  };

  const openQuickView = () => {
    handleQuickViewUpdate();
    dispatch(updateproductDetails({ ...item }));
    openModal();
  };

  return (
    <article className="group flex h-full flex-col rounded-brutal-lg border-2 border-ink bg-white p-3 shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:p-4">
      {/* Image */}
      <div className="relative rounded-brutal border-2 border-ink bg-cream">
        {discountPercent > 0 && (
          <span className="absolute left-2 top-2 z-10 rounded-brutal border-2 border-ink bg-sunny-yellow px-2 py-0.5 text-2xs font-extrabold uppercase tracking-wide text-ink">
            {discountPercent}% off
          </span>
        )}

        <button
          type="button"
          onClick={openQuickView}
          className="group/img block w-full text-left"
          aria-label={`Quick view ${item.title}`}
        >
          <div className="flex min-h-[168px] items-center justify-center px-4 py-5 sm:min-h-[180px]">
            <Image
              src={item.img}
              alt={item.title}
              width={220}
              height={220}
              className="max-h-[140px] w-auto object-contain transition-transform duration-300 group-hover/img:scale-105 sm:max-h-[160px]"
            />
          </div>
        </button>
      </div>

      {/* Info */}
      <div className="mt-3.5 flex flex-1 flex-col">
        <span className="w-fit rounded-brutal border border-ink/20 bg-cream px-2 py-0.5 text-2xs font-bold uppercase tracking-wide text-dark-4">
          {categoryLabel}
        </span>

        <h3 className="mt-2 line-clamp-2 text-base font-extrabold leading-snug text-ink sm:text-lg">
          {item.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <p className="text-xl font-extrabold text-ink sm:text-2xl">
            ₹{item.discountedPrice.toLocaleString("en-IN")}
          </p>
          {discountPercent > 0 && (
            <p className="text-sm font-medium text-dark-4 line-through">
              ₹{item.price.toLocaleString("en-IN")}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={handleCartToggle}
            aria-label={isInCart ? "Remove from cart" : "Add to cart"}
            className={`min-h-[44px] flex-1 rounded-brutal border-2 border-ink px-3 text-xs font-extrabold uppercase tracking-wide transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:text-sm ${
              isInCart
                ? "bg-sunny-yellow text-ink shadow-brutal-sm hover:bg-sunny-yellow"
                : "bg-green-600 text-white shadow-brutal-sm hover:bg-green-700"
            }`}
          >
            {isInCart ? "In cart" : "Add to cart"}
          </button>

          <button
            type="button"
            onClick={handleWishlistToggle}
            aria-label={
              isInWishlist ? "Remove from wishlist" : "Add to wishlist"
            }
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-brutal border-2 border-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:h-[44px] sm:w-[44px] ${
              isInWishlist
                ? "bg-sunny-yellow text-ink"
                : "bg-white text-green-600 hover:bg-cream"
            }`}
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 16 16" aria-hidden>
              {isInWishlist ? (
                <path d="M8 13.5C8 13.5 2 9 2 5.5C2 3.5 3.5 2 5.5 2C6.5 2 7.5 2.5 8 3.5C8.5 2.5 9.5 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9 8 13.5 8 13.5Z" />
              ) : (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  d="M8 13.5C8 13.5 2 9 2 5.5C2 3.5 3.5 2 5.5 2C6.5 2 7.5 2.5 8 3.5C8.5 2.5 9.5 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9 8 13.5 8 13.5Z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

const NewArrival = ({ products }: NewArrivalProps) => {
  if (products.length === 0) return null;

  return (
    <section className="border-b-2 border-ink/10 bg-cream py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-mint-pop px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
              This week&apos;s picks
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
              New Arrivals
            </h2>
            <p className="mt-2 max-w-md text-sm font-medium text-dark-4">
              Fresh products landing now—tap to quick view or add straight to cart.
            </p>
          </div>

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

        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <NewArrivalCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
