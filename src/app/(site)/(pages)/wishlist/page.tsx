import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Wishlist | ${siteConfig.brand.name}`,
  description: `Your wishlist at ${siteConfig.brand.name}. Save items and buy when you're ready.`,
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
