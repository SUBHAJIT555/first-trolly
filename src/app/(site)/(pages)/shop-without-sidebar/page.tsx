import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop | Supreme Cart",
  description: "Shop electronics, books, stationery, and garments at Supreme Cart. Honest prices, fast delivery across India.",
  // other metadata
};

const ShopWithoutSidebarPage = () => {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <main>
      <ShopWithoutSidebar products={products} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
