import React from "react";
import { siteConfig } from "@/config/site";
import LegalPageLayout, {
  LegalSection,
  LegalContactBox,
} from "../Common/LegalPageLayout";

const { brand } = siteConfig;

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      breadcrumbTitle="Privacy Policy"
      breadcrumbPages={["Privacy Policy"]}
      badge="Legal"
      pageTitle="Privacy Policy"
      pageSubtitle={`How ${brand.name} collects, uses, and protects your personal information.`}
      headerAccent="mint"
    >
      <LegalSection title="Introduction">
        <p>
          {brand.name} is an Indian e-commerce company selling electronics, stationery,
          books, and garments to customers across India. We are committed to protecting
          your privacy and the security of your personal information.
        </p>
        <p>
          By using {brand.name}, you agree to the practices described in this policy. If
          you do not agree, please do not use our website.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We collect information that you provide directly and information collected automatically:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Personal Information:</strong> Name, email, phone, shipping and billing
            address when you place an order or create an account.
          </li>
          <li>
            <strong>Account Information:</strong> Login details and profile information if
            you register on {brand.name}.
          </li>
          <li>
            <strong>Transaction Information:</strong> Order details, payment method, and
            purchase history.
          </li>
          <li>
            <strong>Usage Information:</strong> Pages visited and interactions to improve
            your experience.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser, and device type for
            security and compatibility.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <ul className="list-disc space-y-2 pl-6">
          <li>To process orders, deliver products across India, and manage your account</li>
          <li>To contact you about orders, delivery, returns, and customer support</li>
          <li>To send offers and updates (only with your consent)</li>
          <li>To improve our website, product range, and service for Indian customers</li>
          <li>To detect and prevent fraud and protect our platform</li>
          <li>To comply with applicable Indian laws and our Terms and Conditions</li>
        </ul>
      </LegalSection>

      <LegalSection title="Information Sharing and Disclosure">
        <p>{brand.name} does not sell your personal information. We may share it only when:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Service Providers:</strong> With partners who help us operate our
            business in India—payment gateways, couriers, and support tools—under strict
            confidentiality.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by Indian law or valid
            government requests.
          </li>
          <li>
            <strong>Business Transfers:</strong> If our business or assets are merged or
            sold, subject to this policy.
          </li>
          <li>
            <strong>With Your Consent:</strong> When you have given clear permission.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We use technical and organizational measures to protect your data. Payments are
          processed through secure, compliant gateways. We do not store full card details on
          our servers.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and Tracking Technologies">
        <p>
          We use cookies to improve your experience on {brand.name}. You can manage cookies
          in your browser settings. For more detail, see our Cookie Policy.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights and Choices">
        <p>You may request access, correction, deletion, opt-out of marketing, or a portable copy of your data. Contact us using the details below.</p>
      </LegalSection>

      <LegalSection title="Children&apos;s Privacy">
        <p>
          {brand.name} is not directed at anyone under 18. We do not knowingly collect
          personal information from minors.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Links">
        <p>
          Our website may link to third-party sites. {brand.name} is not responsible for
          their privacy practices.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Privacy Policy">
        <p>
          We may update this policy from time to time. Changes will be posted on this page
          with an updated date.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p className="mb-4">For questions about this Privacy Policy, please contact us:</p>
        <LegalContactBox email={brand.email.privacy} />
      </LegalSection>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
