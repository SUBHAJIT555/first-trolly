import React from "react";
import { siteConfig } from "@/config/site";
import LegalPageLayout, {
  LegalSection,
  LegalContactBox,
} from "../Common/LegalPageLayout";

const { brand } = siteConfig;

const TermsOfUse = () => {
  return (
    <LegalPageLayout
      breadcrumbTitle="Terms and Conditions"
      breadcrumbPages={["Terms and Conditions"]}
      badge="Legal"
      pageTitle="Terms and Conditions"
      pageSubtitle={`Rules for using ${brand.name} and our services across India.`}
      headerAccent="sunny"
    >
      <LegalSection title="Acceptance of Terms">
        <p>
          Welcome to {brand.name}. We are an Indian e-commerce company selling electronics,
          stationery, books, and garments across India. By using {brand.name}, you agree to
          these Terms, our Privacy Policy, and Cookie Policy.
        </p>
      </LegalSection>

      <LegalSection title="Use of Our Website">
        <p>You may use {brand.name} for personal, non-commercial shopping only. You may not:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Copy, modify, or misuse any content or software on the website</li>
          <li>Use the site for unauthorized commercial resale</li>
          <li>Attempt to reverse engineer or interfere with the website or its security</li>
          <li>Use the site in any way that is illegal or harms {brand.name} or other users</li>
        </ul>
      </LegalSection>

      <LegalSection title="Account Registration">
        <p>When creating an account, you agree to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and promptly update your account information</li>
          <li>Maintain the security of your password</li>
          <li>Accept responsibility for activities under your account</li>
          <li>Notify us immediately of any unauthorized use</li>
        </ul>
      </LegalSection>

      <LegalSection title="Products, Pricing, and Availability">
        <p>
          We sell electronics, stationery, books, and garments. Prices are in Indian Rupees
          (₹) and may change. Product availability is subject to stock. We may correct errors
          at any time.
        </p>
      </LegalSection>

      <LegalSection title="Orders and Payment">
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide correct delivery and payment details</li>
          <li>We may refuse or cancel orders (fraud, pricing error, or stock issues)</li>
          <li>You agree to pay all charges for orders placed using your account</li>
        </ul>
      </LegalSection>

      <LegalSection title="Prohibited Uses">
        <ul className="list-disc space-y-2 pl-6">
          <li>Breaking applicable Indian laws or regulations</li>
          <li>Sending spam without our written consent</li>
          <li>Impersonating {brand.name}, our staff, or any other user</li>
          <li>Fraudulent, harmful, or rights-infringing activity</li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          The {brand.name} website and its content are owned by us and protected by
          copyright and other intellectual property laws.
        </p>
      </LegalSection>

      <LegalSection title="Returns and Refunds">
        <p>
          We offer a 7-day return policy on eligible items. See our Refund Policy for full
          details.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of Warranties">
        <p>
          Our website and services are provided &quot;as is.&quot; To the extent permitted
          by law, {brand.name} does not guarantee uninterrupted or error-free operation.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {brand.name} shall not be liable for
          indirect or consequential damages. Our total liability shall not exceed the amount
          you paid for the order in question, or ₹1,000, whichever is lower.
        </p>
      </LegalSection>

      <LegalSection title="Indemnification">
        <p>
          You agree to indemnify {brand.name} against claims arising from your use of the
          website or violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          We may terminate or suspend your account at our discretion, including for breach
          of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms are governed by the laws of India. Disputes shall be subject to the
          exclusive jurisdiction of courts in India.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use after changes means you
          accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p className="mb-4">For questions about these Terms and Conditions:</p>
        <LegalContactBox email={brand.email.legal} showBusinessHours />
      </LegalSection>
    </LegalPageLayout>
  );
};

export default TermsOfUse;
