import React from "react";

const Discount = () => {
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal-sm">
          <div className="border-b-2 border-ink bg-sunny-yellow px-5 py-4 sm:px-6">
            <h3 className="font-extrabold text-ink">Have a discount code?</h3>
            <p className="mt-1 text-sm font-medium text-dark-3">
              Apply your coupon at checkout
            </p>
          </div>

          <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-stretch sm:px-6 sm:py-6">
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="Enter coupon code"
              className="min-w-0 flex-1 rounded-brutal border-2 border-ink bg-white px-4 py-3 text-sm font-medium text-ink outline-none placeholder:text-dark-5 focus:translate-x-0.5 focus:translate-y-0.5 sm:py-3.5"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-brutal border-2 border-ink bg-ink px-6 py-3 text-sm font-extrabold text-white shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:px-8"
            >
              Apply Code
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
