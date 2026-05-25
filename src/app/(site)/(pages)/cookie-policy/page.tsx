import CookiePolicy from "@/components/CookiePolicy";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.brand.name}`,
  description: `Cookie Policy for ${siteConfig.brand.name} — how we use cookies and similar technologies.`,
};

const CookiePolicyPage = () => {
  return (
    <main>
      <CookiePolicy />
    </main>
  );
};

export default CookiePolicyPage;
