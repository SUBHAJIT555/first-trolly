import React from "react";
import { siteConfig } from "@/config/site";
import LegalPageLayout, {
  LegalSection,
  LegalContactBox,
} from "../Common/LegalPageLayout";

const { brand } = siteConfig;

const CookiePolicy = () => {
  return (
    <LegalPageLayout
      breadcrumbTitle="Cookie Policy"
      breadcrumbPages={["Cookie Policy"]}
      badge="Legal"
      pageTitle="Cookie Policy"
      pageSubtitle={`How ${brand.name} uses cookies and similar technologies on our website.`}
      headerAccent="sunny"
    >
      <LegalSection title="Introduction">
        <p>
          {brand.name} is an Indian e-commerce company selling electronics, stationery,
          books, and garments across India. This Cookie Policy explains what cookies we use,
          why we use them, and how you can manage your choices.
        </p>
        <p>
          Read this together with our Privacy Policy. By using {brand.name}, you agree to
          the use of cookies as described here unless you change your browser settings.
        </p>
      </LegalSection>

      <LegalSection title="What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They
          help remember preferences, keep you signed in, and improve your experience.
        </p>
      </LegalSection>

      <LegalSection title="Types of Cookies We Use">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Strictly Necessary:</strong> Required for the site to work (cart,
            login, security).
          </li>
          <li>
            <strong>Functional:</strong> Remember your choices such as language or region.
          </li>
          <li>
            <strong>Analytics and Performance:</strong> Help us understand how visitors
            use our site.
          </li>
          <li>
            <strong>Marketing (with consent):</strong> May show relevant offers where
            permitted by law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Cookies">
        <ul className="list-disc space-y-2 pl-6">
          <li>Keep you signed in and manage your account</li>
          <li>Remember your cart and wishlist</li>
          <li>Process and remember your preferences</li>
          <li>Understand how our website is used so we can improve it</li>
          <li>Help secure our site and prevent fraud</li>
        </ul>
      </LegalSection>

      <LegalSection title="Session and Persistent Cookies">
        <p>
          <strong>Session cookies</strong> are deleted when you close your browser.{" "}
          <strong>Persistent cookies</strong> stay on your device until they expire or you
          delete them.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Cookies">
        <p>
          Some cookies are placed by third parties we work with—payment gateways, analytics,
          or advertising partners. We do not control third-party cookies.
        </p>
      </LegalSection>

      <LegalSection title="How to Manage Cookies">
        <p>
          You can control or delete cookies through your browser settings. Blocking cookies
          may affect features such as staying logged in or saving your cart.
        </p>
      </LegalSection>

      <LegalSection title="Updates to This Cookie Policy">
        <p>
          We may update this policy from time to time. Continued use of our website after
          changes means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p className="mb-4">Questions about our use of cookies? Contact us:</p>
        <LegalContactBox email={brand.email.privacy} />
      </LegalSection>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
