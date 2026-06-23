import React from "react";
import MailSuccess from "@/components/MailSuccess";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Order Confirmed | ${siteConfig.brand.name}`,
  description: `Thank you for your order. ${siteConfig.brand.name} will process and deliver it soon.`,
};

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;
