import React from "react";
import Cart from "@/components/Cart";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Your Cart | ${siteConfig.brand.name}`,
  description: `View your cart at ${siteConfig.brand.name}. Complete your order with secure checkout.`,
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
