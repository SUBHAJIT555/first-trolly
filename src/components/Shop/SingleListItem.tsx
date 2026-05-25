"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cart-slice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import categoryData from "@/constants/categoryData";
import { ProductStars, getDiscountPercent } from "./ProductStars";

function getCategoryLabel(categoryId: number) {
  const category = categoryData.find((c) => c.id === categoryId);
  return category?.title ?? "Shop";
}

const SingleListItem = ({ item }: { item: Product }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
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

  const openQuickView = () => {
    dispatch(updateQuickView({ ...item }));
    dispatch(updateproductDetails({ ...item }));
    const params = new URLSearchParams(searchParams.toString());
    params.set("productId", item.id.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    openModal();
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

  return (
    <article className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white p-4 shadow-brutal-sm sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6">
        <div className="relative shrink-0 sm:w-[220px]">
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
              <div className="flex min-h-[160px] items-center justify-center px-4 py-5 sm:min-h-[180px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={180}
                  height={180}
                  className="max-h-[130px] w-auto object-contain transition-transform duration-300 group-hover/img:scale-105 sm:max-h-[150px]"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div>
            <span className="w-fit rounded-brutal border border-ink/20 bg-cream px-2 py-0.5 text-2xs font-bold uppercase tracking-wide text-dark-4">
              {categoryLabel}
            </span>
            <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-snug text-ink sm:text-xl">
              {item.title}
            </h3>
            <div className="mt-2">
              <ProductStars rating={item.rating} reviewCount={item.reviews} />
            </div>
            <div className="mt-3 flex flex-wrap items-baseline gap-2">
              <p className="text-xl font-extrabold text-ink sm:text-2xl">
                ₹{item.discountedPrice.toLocaleString("en-IN")}
              </p>
              {discountPercent > 0 && (
                <p className="text-sm font-medium text-dark-4 line-through">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openQuickView}
              className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none"
            >
              Quick View
            </button>
            <button
              type="button"
              onClick={handleCartToggle}
              className={`inline-flex min-h-[44px] items-center justify-center rounded-brutal border-2 border-ink px-5 text-xs font-extrabold uppercase tracking-wide transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:text-sm ${
                isInCart
                  ? "bg-sunny-yellow text-ink shadow-brutal-sm"
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
      </div>
    </article>
  );
};

export default SingleListItem;
