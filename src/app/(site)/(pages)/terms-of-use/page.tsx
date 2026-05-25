import TermsOfUse from "@/components/TermsOfUse";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${siteConfig.brand.name}`,
  description: `Terms and conditions for using ${siteConfig.brand.name} website and services.`,
};

const TermsOfUsePage = () => {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
};

export default TermsOfUsePage;
