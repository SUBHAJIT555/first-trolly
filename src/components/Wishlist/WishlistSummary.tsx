"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cart-slice";

const WishlistSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const totalValue = wishlistItems.reduce(
    (sum, item) => sum + item.discountedPrice,
    0
  );
  const inStockCount = wishlistItems.filter(
    (item) =>
      item.status !== "out of stock" && item.status !== "unavailable"
  ).length;

  const handleAddAllToCart = () => {
    wishlistItems.forEach((item) => {
      const inStock =
        item.status !== "out of stock" && item.status !== "unavailable";
      if (inStock) {
        dispatch(
          addItemToCart({
            ...item,
            img: item.img || "",
            quantity: 1,
          })
        );
      }
    });
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal">
        <div className="border-b-2 border-ink bg-sunny-yellow px-5 py-4 sm:px-6">
          <p className="text-2xs font-bold uppercase tracking-widest text-ink">
            Overview
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-ink">Wishlist Summary</h3>
        </div>

        <div className="px-5 py-6 sm:px-6">
          <div className="space-y-3 border-b-2 border-ink/10 pb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-dark-4">Saved items</span>
              <span className="font-extrabold text-ink">{wishlistItems.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-dark-4">In stock</span>
              <span className="font-extrabold text-ink">{inStockCount}</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-brutal border-2 border-ink bg-cream px-4 py-3.5 shadow-brutal-sm">
            <p className="font-extrabold text-ink">Total value</p>
            <p className="text-lg font-extrabold text-green-600">
              ₹{totalValue.toLocaleString("en-IN")}
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddAllToCart}
            disabled={inStockCount === 0}
            className="mt-6 flex w-full items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal"
          >
            Add All to Cart
          </button>

          <Link
            href="/shop"
            className="mt-3 flex w-full items-center justify-center rounded-brutal border-2 border-ink bg-white px-6 py-3 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none"
          >
            Continue Shopping
          </Link>

          <Link
            href="/cart"
            className="mt-3 flex w-full items-center justify-center rounded-brutal border-2 border-ink bg-mint-pop px-6 py-3 text-sm font-extrabold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            View Cart →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistSummary;
