import About from "@/components/About";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.brand.name}`,
  description: `Learn about ${siteConfig.brand.name}—India's trusted store for electronics, books, stationery, and garments.`,
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
