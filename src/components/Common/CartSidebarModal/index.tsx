"use client";

import React, { useEffect } from "react";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";
import Link from "next/link";
import EmptyCart from "./EmptyCart";

const CartSidebarModal = () => {
  const { isCartModalOpen, closeCartModal } = useCartModalContext();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(".modal-content")) {
        closeCartModal();
      }
    }

    if (isCartModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isCartModalOpen, closeCartModal]);

  return (
    <div
      className={`fixed inset-0 z-99999 ease-linear duration-300 ${
        isCartModalOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isCartModalOpen}
    >
      <div
        className={`absolute inset-0 bg-ink/45 transition-opacity duration-300 ${
          isCartModalOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCartModal}
        aria-hidden
      />

      <div
        className={`modal-content absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col border-l-2 border-ink bg-cream shadow-brutal transition-transform duration-300 sm:max-w-[440px] ${
          isCartModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="shrink-0 border-b-2 border-ink bg-sunny-yellow px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-brutal border-2 border-ink bg-white px-3 py-1 text-xs font-extrabold text-ink shadow-brutal-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-green-600"
                  aria-hidden
                >
                  <path d="M15.5433 9.5172C15.829 9.21725 15.8174 8.74252 15.5174 8.45686C15.2175 8.17119 14.7428 8.18277 14.4571 8.48272L12.1431 10.9125L11.5433 10.2827C11.2576 9.98277 10.7829 9.97119 10.483 10.2569C10.183 10.5425 10.1714 11.0173 10.4571 11.3172L11.6 12.5172C11.7415 12.6658 11.9378 12.75 12.1431 12.75C12.3483 12.75 12.5446 12.6658 12.6862 12.5172L15.5433 9.5172Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.29266 2.7512C1.43005 2.36044 1.8582 2.15503 2.24896 2.29242L2.55036 2.39838C3.16689 2.61511 3.69052 2.79919 4.10261 3.00139C4.54324 3.21759 4.92109 3.48393 5.20527 3.89979C5.48725 4.31243 5.60367 4.76515 5.6574 5.26153C5.66124 5.29706 5.6648 5.33321 5.66809 5.36996L17.1203 5.36996C17.9389 5.36995 18.7735 5.36993 19.4606 5.44674C19.8103 5.48584 20.1569 5.54814 20.4634 5.65583C20.7639 5.76141 21.0942 5.93432 21.3292 6.23974C21.711 6.73613 21.7777 7.31414 21.7416 7.90034C21.7071 8.45845 21.5686 9.15234 21.4039 9.97723L21.3935 10.0295L21.3925 10.0341L20.8836 12.5033C20.7339 13.2298 20.6079 13.841 20.4455 14.3231C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1226 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2598 4.20828 11.2125 4.20828 9.75996V7.03832C4.20828 6.29837 4.20726 5.80316 4.16611 5.42295C4.12678 5.0596 4.05708 4.87818 3.96682 4.74609C3.87876 4.61723 3.74509 4.4968 3.44186 4.34802C3.11902 4.18961 2.68026 4.03406 2.01266 3.79934L1.75145 3.7075C1.36068 3.57012 1.15527 3.14197 1.29266 2.7512ZM5.70828 6.86996L5.70828 9.75996C5.70828 11.249 5.72628 12.1578 5.83744 12.8068C5.93933 13.4018 6.11202 13.7324 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4592 19.2623 12.9389 19.4237 12.156L19.9225 9.73591L19.9229 9.73369C20.1005 8.84376 20.217 8.2515 20.2444 7.80793C20.2704 7.38648 20.2043 7.23927 20.1429 7.15786C20.1367 7.15259 20.0931 7.11565 19.9661 7.07101C19.8107 7.01639 19.5895 6.97049 19.2939 6.93745C18.6991 6.87096 17.9454 6.86996 17.089 6.86996H5.70828Z"
                  />
                </svg>
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </span>
              <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                Your Cart
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCartModal}
              aria-label="Close cart"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-white text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-5 no-scrollbar sm:px-6">
          {cartItems.length > 0 ? (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <SingleItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="shrink-0 border-t-2 border-ink bg-white px-5 py-5 sm:px-6">
            <div className="mb-4 flex items-center justify-between gap-4 rounded-brutal border-2 border-ink bg-cream px-4 py-3.5 shadow-brutal-sm">
              <p className="text-sm font-extrabold uppercase tracking-wide text-ink">
                Subtotal
              </p>
              <p className="text-lg font-extrabold text-green-600">
                ₹{totalPrice.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                onClick={() => closeCartModal()}
                href="/cart"
                className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-white px-4 py-3 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none"
              >
                View Cart
              </Link>
              <Link
                onClick={() => closeCartModal()}
                href="/checkout"
                className="inline-flex items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-4 py-3 text-sm font-extrabold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebarModal;
