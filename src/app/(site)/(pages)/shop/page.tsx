import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Shop | ${siteConfig.brand.name}`,
  description: `Shop electronics, books, stationery, and garments at ${siteConfig.brand.name}. Honest prices, fast delivery across India.`,
};

const ShopWithSidebarPage = () => {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <main>
      <ShopWithSidebar products={products} />
    </main>
  );
};

export default ShopWithSidebarPage;
