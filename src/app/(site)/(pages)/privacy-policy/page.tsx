import PrivacyPolicy from "@/components/PrivacyPolicy";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  description: `How ${siteConfig.brand.name} collects, uses, and protects your personal information.`,
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;
