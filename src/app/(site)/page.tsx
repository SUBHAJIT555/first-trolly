import Home from "@/components/Home";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | Online Shopping for Electronics, Books, Stationery, and Garments`,
  description: `${siteConfig.brand.name} is India's trusted store for electronics, books, stationery, and garments. Enjoy honest prices, fast delivery, and support made for Indian shoppers.`,
};

export default function HomePage() {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <>
      <Home products={products} />
    </>
  );
}
