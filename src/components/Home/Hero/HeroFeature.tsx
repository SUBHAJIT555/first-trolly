import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "On orders ₹499 and above",
    accent: "bg-mint-pop",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Easy Returns",
    description: "Simple 7-day return policy",
    accent: "bg-sunny-yellow",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Secure Pay",
    description: "UPI, cards, and more",
    accent: "bg-green-600",
  },
];

const HeroFeature = () => {
  return (
    <div className="mt-10 sm:mt-12 lg:mt-14">
      <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal">
        <div className="border-b-2 border-ink bg-sunny-yellow px-6 py-4 sm:px-8">
          <h2 className="text-lg font-extrabold text-ink sm:text-xl">
            Built for families. Stocked for you.
          </h2>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-3 sm:gap-5 sm:p-6">
          {featureData.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-brutal border-2 border-ink bg-cream p-4 shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:flex-col sm:items-start sm:gap-3"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-brutal border-2 border-ink ${item.accent} shadow-brutal-sm`}
              >
                <Image
                  src={item.img}
                  alt=""
                  width={22}
                  height={22}
                  className={item.accent === "bg-green-600" ? "brightness-0 invert" : ""}
                />
              </div>
              <div>
                <p className="text-sm font-extrabold text-ink">{item.title}</p>
                <p className="mt-1 text-xs font-medium leading-relaxed text-dark-4 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;
