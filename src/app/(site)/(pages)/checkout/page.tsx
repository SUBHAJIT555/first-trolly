import React from "react";
import Checkout from "@/components/Checkout";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Checkout | ${siteConfig.brand.name}`,
  description: `Complete your quote request at ${siteConfig.brand.name}. Secure checkout for your order.`,
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
