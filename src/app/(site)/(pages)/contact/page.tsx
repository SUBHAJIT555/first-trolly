import Contact from "@/components/Contact";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.brand.name}`,
  description: `Get in touch with ${siteConfig.brand.name}. We're here to help with your orders and questions.`,
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
