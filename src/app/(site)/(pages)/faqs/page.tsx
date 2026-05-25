import FAQs from "@/components/FAQs";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `FAQs | ${siteConfig.brand.name}`,
  description: `Frequently asked questions about ${siteConfig.brand.name}—delivery, payments, returns, and more.`,
};

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;
