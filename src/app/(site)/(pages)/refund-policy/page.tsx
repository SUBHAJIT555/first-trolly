import RefundPolicy from "@/components/RefundPolicy";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Refund Policy | ${siteConfig.brand.name}`,
  description: `${siteConfig.brand.name} refund and return policy. Easy 7-day returns for your peace of mind.`,
};

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;
