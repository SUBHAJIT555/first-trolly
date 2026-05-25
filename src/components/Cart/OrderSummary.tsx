import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal">
        <div className="border-b-2 border-ink bg-mint-pop px-5 py-4 sm:px-6">
          <p className="text-2xs font-bold uppercase tracking-widest text-ink">
            Summary
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-ink">Order Summary</h3>
        </div>

        <div className="px-5 py-6 sm:px-6">
          <div className="mb-4 flex items-center justify-between border-b-2 border-ink/10 pb-3">
            <p className="text-2xs font-bold uppercase tracking-wide text-dark-4">
              Product
            </p>
            <p className="text-2xs font-bold uppercase tracking-wide text-dark-4">
              Subtotal
            </p>
          </div>

          <div className="max-h-[220px] space-y-3 overflow-y-auto no-scrollbar">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3"
              >
                <p className="line-clamp-2 flex-1 text-sm font-medium text-ink">
                  {item.title}
                </p>
                <p className="shrink-0 text-sm font-extrabold text-ink">
                  ₹
                  {(item.discountedPrice * item.quantity).toLocaleString(
                    "en-IN"
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-brutal border-2 border-ink bg-cream px-4 py-3.5 shadow-brutal-sm">
            <p className="font-extrabold text-ink">Total</p>
            <p className="text-lg font-extrabold text-green-600">
              ₹{totalPrice.toLocaleString("en-IN")}
            </p>
          </div>

          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/shop"
            className="mt-3 flex w-full items-center justify-center rounded-brutal border-2 border-ink bg-white px-6 py-3 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-cream hover:shadow-none"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
