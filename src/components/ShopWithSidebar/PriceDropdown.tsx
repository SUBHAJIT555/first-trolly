import { useState, useEffect, useRef } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface PriceDropdownProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

function PriceAmountDisplay({ id, value }: { id: string; value: number }) {
  return (
    <div className="inline-flex min-w-0 max-w-[48%] overflow-hidden rounded-brutal border-2 border-ink bg-white shadow-brutal-sm">
      <span className="flex shrink-0 items-center justify-center border-r-2 border-ink bg-sunny-yellow px-2.5 py-1.5 text-sm font-bold leading-none text-ink">
        ₹
      </span>
      <span
        id={id}
        className="flex min-w-0 flex-1 items-center justify-center bg-cream px-2.5 py-1.5 text-sm font-extrabold tabular-nums leading-none text-ink sm:px-3"
      >
        {value.toLocaleString("en-IN")}
      </span>
    </div>
  );
}

const PriceDropdown = ({ minPrice, maxPrice, onPriceChange }: PriceDropdownProps) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState({
    from: minPrice,
    to: maxPrice,
  });
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSelectedPrice({
      from: minPrice,
      to: maxPrice,
    });
  }, [minPrice, maxPrice]);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal-sm">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="flex cursor-pointer items-center justify-between border-b-2 border-ink bg-mint-pop px-5 py-3.5"
      >
        <p className="text-2xs font-bold uppercase tracking-widest text-ink">
          Price
        </p>
        <button
          type="button"
          onClick={() => setToggleDropdown(!toggleDropdown)}
          id="price-dropdown-btn"
          aria-label="button for price dropdown"
          className={`text-ink ease-out duration-200 ${
            toggleDropdown && "rotate-180"
          }`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
            />
          </svg>
        </button>
      </div>

      <div className={`px-5 py-4 ${toggleDropdown ? "block" : "hidden"}`}>
        <div id="pricingOne">
          <div className="price-range">
            <RangeSlider
              id="range-slider-gradient"
              className="margin-lg"
              min={0}
              max={10000}
              step={100}
              value={[selectedPrice.from, selectedPrice.to]}
              onInput={(e) => {
                const newPrice = {
                  from: Math.floor(e[0]),
                  to: Math.ceil(e[1]),
                };
                setSelectedPrice(newPrice);

                if (debounceTimerRef.current) {
                  clearTimeout(debounceTimerRef.current);
                }

                debounceTimerRef.current = setTimeout(() => {
                  onPriceChange(newPrice.from, newPrice.to);
                }, 500);
              }}
            />

            <div className="price-amount flex items-center justify-between gap-2 pt-4">
              <PriceAmountDisplay id="minAmount" value={selectedPrice.from} />
              <PriceAmountDisplay id="maxAmount" value={selectedPrice.to} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
