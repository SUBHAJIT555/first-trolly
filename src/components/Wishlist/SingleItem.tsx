"use client";

import React from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import Image from "next/image";

type WishlistItemProps = {
  item: {
    id: number;
    title: string;
    price: number;
    discountedPrice: number;
    quantity: number;
    status?: string;
    img?: string;
  };
};

const SingleItem = ({ item }: WishlistItemProps) => {
  const productImage = item.img?.trim() || null;
  const dispatch = useDispatch<AppDispatch>();
  const hasDiscount = item.price > item.discountedPrice;
  const inStock =
    item.status !== "out of stock" && item.status !== "unavailable";

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item.id));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        img: productImage || "",
        quantity: 1,
      })
    );
  };

  return (
    <article className="rounded-brutal-lg border-2 border-ink bg-white p-4 shadow-brutal-sm sm:p-5">
      <div className="flex gap-4 sm:gap-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-brutal border-2 border-ink bg-cream sm:h-24 sm:w-24">
          {productImage ? (
            <Image
              src={productImage}
              alt={item.title}
              width={96}
              height={96}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <span className="text-xs font-medium text-dark-4">No image</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-base font-extrabold leading-snug text-ink">
              {item.title}
            </h3>
            <button
              type="button"
              onClick={handleRemoveFromWishlist}
              aria-label="Remove from wishlist"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-white text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-red-light-4 hover:text-red-dark hover:shadow-none"
            >
              <svg className="h-4 w-4" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.45017 2.06252H12.5498C12.7482 2.06239 12.921 2.06228 13.0842 2.08834C13.7289 2.19129 14.2868 2.59338 14.5883 3.17244C14.6646 3.319 14.7192 3.48298 14.7818 3.6712L14.8841 3.97819C14.9014 4.03015 14.9064 4.04486 14.9105 4.05645C15.0711 4.50022 15.4873 4.80021 15.959 4.81217C15.9714 4.81248 15.9866 4.81254 16.0417 4.81254H18.7917C19.1714 4.81254 19.4792 5.12034 19.4792 5.50004C19.4792 5.87973 19.1714 6.18754 18.7917 6.18754H3.20825C2.82856 6.18754 2.52075 5.87973 2.52075 5.50004C2.52075 5.12034 2.82856 4.81254 3.20825 4.81254H5.95833C6.01337 4.81254 6.02856 4.81248 6.04097 4.81217C6.51273 4.80021 6.92892 4.50024 7.08944 4.05647C7.09366 4.0448 7.09852 4.03041 7.11592 3.97819L7.21823 3.67122C7.28083 3.48301 7.33538 3.319 7.41171 3.17244C7.71324 2.59339 8.27112 2.19129 8.91581 2.08834C9.079 2.06228 9.25181 2.06239 9.45017 2.06252ZM8.25739 4.81254C8.30461 4.71993 8.34645 4.6237 8.38245 4.52419C8.39338 4.49397 8.4041 4.4618 8.41787 4.42048L8.50936 4.14601C8.59293 3.8953 8.61217 3.84416 8.63126 3.8075C8.73177 3.61448 8.91773 3.48045 9.13263 3.44614C9.17345 3.43962 9.22803 3.43754 9.49232 3.43754H12.5077C12.772 3.43754 12.8265 3.43962 12.8674 3.44614C13.0823 3.48045 13.2682 3.61449 13.3687 3.8075C13.3878 3.84416 13.4071 3.89529 13.4906 4.14601L13.5821 4.42031L13.6176 4.52421C13.6535 4.62372 13.6954 4.71994 13.7426 4.81254H8.25739Z"
                  fill="currentColor"
                />
                <path
                  d="M5.42208 7.74597C5.39683 7.36711 5.06923 7.08047 4.69038 7.10572C4.31152 7.13098 4.02487 7.45858 4.05013 7.83743L4.47496 14.2099C4.55333 15.3857 4.61663 16.3355 4.76511 17.0808C4.91947 17.8557 5.18203 18.5029 5.72432 19.0103C6.26662 19.5176 6.92987 19.7365 7.7133 19.839C8.46682 19.9376 9.41871 19.9376 10.5971 19.9375H11.4028C12.5812 19.9376 13.5332 19.9376 14.2867 19.839C15.0701 19.7365 15.7334 19.5176 16.2757 19.0103C16.818 18.5029 17.0805 17.8557 17.2349 17.0808C17.3834 16.3355 17.4467 15.3857 17.525 14.2099L17.9499 7.83743C17.9751 7.45858 17.6885 7.13098 17.3096 7.10572C16.9308 7.08047 16.6032 7.36711 16.5779 7.74597L16.1563 14.0702C16.0739 15.3057 16.0152 16.1654 15.8864 16.8122C15.7614 17.4396 15.5869 17.7717 15.3363 18.0062C15.0857 18.2406 14.7427 18.3926 14.1084 18.4756C13.4544 18.5612 12.5927 18.5625 11.3545 18.5625H10.6455C9.40727 18.5625 8.54559 18.5612 7.89164 18.4756C7.25731 18.3926 6.91433 18.2406 6.6637 18.0062C6.41307 17.7717 6.2386 17.4396 6.11361 16.8122C5.98476 16.1654 5.92607 15.3057 5.8437 14.0702L5.42208 7.74597Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-4 border-t-2 border-ink/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xs font-bold uppercase tracking-wide text-dark-4">
                Price
              </p>
              <div className="mt-0.5 flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-extrabold text-green-600">
                  ₹{item.discountedPrice.toLocaleString("en-IN")}
                </span>
                {hasDiscount && (
                  <span className="text-xs font-medium text-dark-4 line-through">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="mb-2 text-2xs font-bold uppercase tracking-wide text-dark-4">
                Availability
              </p>
              <span
                className={`inline-flex items-center gap-1.5 rounded-brutal border-2 border-ink px-2.5 py-1 text-xs font-bold shadow-brutal-sm ${
                  inStock
                    ? "bg-mint-pop text-ink"
                    : "bg-red-light-4 text-red-dark"
                }`}
              >
                {inStock ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                    In Stock
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M10 5.83335C10.4602 5.83335 10.8333 6.20645 10.8333 6.66669C10.8333 7.12692 10.4602 7.50002 10 7.50002C9.53976 7.50002 9.16667 7.12692 9.16667 6.66669C9.16667 6.20645 9.53976 5.83335 10 5.83335Z" />
                      <path d="M10 14.7917C10.3452 14.7917 10.625 14.5119 10.625 14.1667V9.16669C10.625 8.82151 10.3452 8.54169 10 8.54169C9.65482 8.54169 9.375 8.82151 9.375 9.16669V14.1667C9.375 14.5119 9.65482 14.7917 10 14.7917Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04167 10C1.04167 5.05247 5.05245 1.04169 10 1.04169C14.9476 1.04169 18.9583 5.05247 18.9583 10C18.9583 14.9476 14.9476 18.9584 10 18.9584C5.05245 18.9584 1.04167 14.9476 1.04167 10ZM10 2.29169C5.74264 2.29169 2.29167 5.74267 2.29167 10C2.29167 14.2574 5.74264 17.7084 10 17.7084C14.2574 17.7084 17.7083 14.2574 17.7083 10C17.7083 5.74267 14.2574 2.29169 10 2.29169Z"
                      />
                    </svg>
                    Out of Stock
                  </>
                )}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!inStock}
              className="inline-flex shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-5 py-2.5 text-sm font-extrabold text-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal-sm sm:px-6"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleItem;
