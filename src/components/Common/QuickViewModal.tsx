"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { useModalContext } from "@/app/context/QuickViewModalContext";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";

function ModalStars({ rating }: { rating: number }) {
  const normalized = Math.min(5, Math.max(0, rating));

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            normalized >= i + 1 ? "text-sunny-yellow" : "text-ink/20"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const brutalBtn =
  "flex h-10 w-10 items-center justify-center rounded-brutal border-2 border-ink bg-white text-lg font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0 disabled:hover:translate-y-0";

const QuickViewModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isModalOpen, closeModal } = useModalContext();
  const { openPreviewModal } = usePreviewSlider();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch<AppDispatch>();
  const product = useAppSelector((state) => state.quickViewReducer.value);
  const wishlistItems = useAppSelector(
    (state) => state.wishlistReducer.items
  );
  const isInWishlist = wishlistItems.some((w) => w.id === product.id);

  const handleCloseModal = useCallback(() => {
    closeModal();
    const params = new URLSearchParams(searchParams.toString());
    params.delete("productId");
    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.replace(newUrl, { scroll: false });
  }, [searchParams, router, pathname, closeModal]);

  const badgeLabel = product.isNewArrival
    ? "New Arrival"
    : product.isBestSelling
      ? "Best Seller"
      : product.isTrending
        ? "Trending"
        : null;

  const badgeStyle = product.isNewArrival
    ? "bg-mint-pop text-ink"
    : product.isBestSelling
      ? "bg-sunny-yellow text-ink"
      : "bg-green-600 text-white";

  const handlePreviewSlider = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(updateproductDetails(product));
    openPreviewModal();
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...product,
        quantity,
      })
    );
    handleCloseModal();
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeItemFromWishlist(product.id));
    } else {
      dispatch(
        addItemToWishlist({
          ...product,
          status: "available",
          quantity: 1,
        })
      );
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(".modal-content")) {
        handleCloseModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
      setQuantity(1);
    };
  }, [isModalOpen, handleCloseModal]);

  if (!isModalOpen) {
    return null;
  }

  const rating = product.rating ?? 4.5;
  const reviewCount = product.reviews ?? 0;
  const hasDiscount = product.price > product.discountedPrice;

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center overflow-y-auto bg-ink/50 px-4 py-8 sm:px-8 sm:py-12">
      <div className="modal-content relative w-full max-w-[1000px] overflow-hidden rounded-brutal-lg border-2 border-ink bg-cream shadow-brutal">
        <button
          type="button"
          onClick={handleCloseModal}
          aria-label="Close quick view"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-brutal border-2 border-ink bg-sunny-yellow text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:right-5 sm:top-5"
        >
          <svg width="18" height="18" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3108 13L19.2291 8.08167C19.5866 7.72417 19.5866 7.12833 19.2291 6.77083C19.0543 6.59895 18.8189 6.50262 18.5737 6.50262C18.3285 6.50262 18.0932 6.59895 17.9183 6.77083L13 11.6892L8.08164 6.77083C7.90679 6.59895 7.67142 6.50262 7.42623 6.50262C7.18104 6.50262 6.94566 6.59895 6.77081 6.77083C6.41331 7.12833 6.41331 7.72417 6.77081 8.08167L11.6891 13L6.77081 17.9183C6.41331 18.2758 6.41331 18.8717 6.77081 19.2292C7.12831 19.5867 7.72414 19.5867 8.08164 19.2292L13 14.3108L17.9183 19.2292C18.2758 19.5867 18.8716 19.5867 19.2291 19.2292C19.5866 18.8717 19.5866 18.2758 19.2291 17.9183L14.3108 13Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image panel */}
          <div className="relative w-full shrink-0 border-b-2 border-ink lg:w-[46%] lg:border-b-0 lg:border-r-2">
            <div className="relative flex min-h-[300px] items-center justify-center bg-white p-8 sm:min-h-[380px] lg:min-h-[480px]">
              <button
                type="button"
                onClick={handlePreviewSlider}
                aria-label="View full screen"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-brutal border-2 border-ink bg-white text-green-600 shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-sunny-yellow hover:shadow-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 10a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4" />
                  <path d="M3 7v-2a2 2 0 0 1 2 -2h2" />
                  <path d="M3 17v2a2 2 0 0 0 2 2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M17 21h2a2 2 0 0 0 2 -2v-2" />
                </svg>
              </button>

              {product?.img && (
                <div className="relative z-1 rounded-brutal border-2 border-ink bg-cream p-6">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={360}
                    height={360}
                    className="max-h-[260px] w-auto object-contain sm:max-h-[300px] lg:max-h-[340px]"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Details panel */}
          <div className="flex flex-1 flex-col bg-cream p-6 sm:p-8 lg:p-9 lg:pr-10">
            {badgeLabel && (
              <span
                className={`mb-4 inline-flex w-fit rounded-brutal border-2 border-ink px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-brutal-sm ${badgeStyle}`}
              >
                {badgeLabel}
              </span>
            )}

            <h2 className="text-xl font-extrabold leading-snug text-ink sm:text-2xl">
              {product.title}
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-2 rounded-brutal border-2 border-ink bg-white px-3 py-1.5 shadow-brutal-sm">
                <ModalStars rating={rating} />
                <span className="text-sm font-medium text-dark-4">
                  <span className="font-extrabold text-ink">
                    {rating.toFixed(1)}
                  </span>{" "}
                  ({reviewCount} reviews)
                </span>
              </div>

              {product.inStock !== false ? (
                <span className="inline-flex items-center gap-1.5 rounded-brutal border-2 border-ink bg-mint-pop px-3 py-1.5 text-sm font-bold text-ink shadow-brutal-sm">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                      d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                      fill="currentColor"
                    />
                  </svg>
                  In Stock
                </span>
              ) : (
                <span className="rounded-brutal border-2 border-ink bg-red-light-4 px-3 py-1.5 text-sm font-bold text-red-dark">
                  Out of Stock
                </span>
              )}
            </div>

            <p className="mt-5 text-sm font-medium leading-relaxed text-dark-3">
              {product.description ||
                "Premium quality product with excellent features and durability."}
            </p>

            {/* Price & quantity */}
            <div className="mt-6 rounded-brutal border-2 border-ink bg-white p-4 shadow-brutal-sm sm:p-5">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-dark-4">
                    Price
                  </p>
                  <p className="text-2xl font-extrabold text-green-600 sm:text-3xl">
                    ₹{product.discountedPrice.toLocaleString("en-IN")}
                  </p>
                  {hasDiscount && (
                    <p className="mt-0.5 text-sm font-medium text-dark-4 line-through">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-dark-4">
                    Quantity
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      aria-label="Decrease quantity"
                      disabled={quantity <= 1}
                      className={brutalBtn}
                    >
                      −
                    </button>
                    <span className="flex h-10 min-w-[52px] items-center justify-center rounded-brutal border-2 border-ink bg-sunny-yellow px-3 text-sm font-extrabold text-ink shadow-brutal-sm">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className={brutalBtn}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                disabled={product.inStock === false}
                onClick={handleAddToCart}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 sm:min-w-[200px] sm:flex-none"
              >
                Add to cart
              </button>

              <button
                type="button"
                onClick={handleWishlistToggle}
                className={`inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-brutal border-2 border-ink px-6 py-3 text-sm font-extrabold shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:flex-none ${
                  isInWishlist
                    ? "bg-sunny-yellow text-ink"
                    : "bg-white text-green-600 hover:bg-cream"
                }`}
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.68698 3.68688C3.30449 4.31882 2.29169 5.82191 2.29169 7.6143C2.29169 9.44546 3.04103 10.8569 4.11526 12.0665C5.00062 13.0635 6.07238 13.8897 7.11763 14.6956C7.36588 14.8869 7.61265 15.0772 7.85506 15.2683C8.29342 15.6139 8.68445 15.9172 9.06136 16.1374C9.43847 16.3578 9.74202 16.4584 10 16.4584C10.258 16.4584 10.5616 16.3578 10.9387 16.1374C11.3156 15.9172 11.7066 15.6139 12.145 15.2683C12.3874 15.0772 12.6342 14.8869 12.8824 14.6956C13.9277 13.8897 14.9994 13.0635 15.8848 12.0665C16.959 10.8569 17.7084 9.44546 17.7084 7.6143C17.7084 5.82191 16.6955 4.31882 15.3131 3.68688C13.97 3.07295 12.1653 3.23553 10.4503 5.01733C10.3325 5.13974 10.1699 5.20891 10 5.20891C9.83012 5.20891 9.66754 5.13974 9.54972 5.01733C7.83474 3.23553 6.03008 3.07295 4.68698 3.68688ZM10 3.71573C8.07331 1.99192 5.91582 1.75077 4.16732 2.55002C2.32061 3.39415 1.04169 5.35424 1.04169 7.6143C1.04169 9.83557 1.9671 11.5301 3.18062 12.8966C4.15241 13.9908 5.34187 14.9067 6.39237 15.7155C6.63051 15.8989 6.8615 16.0767 7.0812 16.2499C7.50807 16.5864 7.96631 16.9453 8.43071 17.2166C8.8949 17.4879 9.42469 17.7084 10 17.7084C10.5754 17.7084 11.1051 17.4879 11.5693 17.2166C12.0337 16.9453 12.492 16.5864 12.9188 16.2499C13.1385 16.0767 13.3695 15.8989 13.6077 15.7155C14.6582 14.9067 15.8476 13.9908 16.8194 12.8966C18.0329 11.5301 18.9584 9.83557 18.9584 7.6143C18.9584 5.35424 17.6794 3.39415 15.8327 2.55002C14.0842 1.75077 11.9267 1.99192 10 3.71573Z"
                  />
                </svg>
                {isInWishlist ? "In wishlist" : "Add to wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
