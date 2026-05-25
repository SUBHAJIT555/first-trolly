import React from "react";
import { siteConfig } from "@/config/site";
import LegalPageLayout, {
  LegalSection,
  LegalContactBox,
} from "../Common/LegalPageLayout";

const { brand } = siteConfig;

const RefundPolicy = () => {
  return (
    <LegalPageLayout
      breadcrumbTitle="Refund Policy"
      breadcrumbPages={["Refund Policy"]}
      badge="Legal"
      pageTitle="Refund Policy"
      pageSubtitle={`${brand.name} easy 7-day returns and refunds for your peace of mind.`}
      headerAccent="mint"
    >
      <LegalSection title="Overview">
        <p>
          {brand.name} is an Indian e-commerce company selling electronics, stationery,
          books, and garments across India. If you are not satisfied with your purchase, we
          offer an easy 7-day return and refund policy.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility for Refunds">
        <ul className="list-disc space-y-2 pl-6">
          <li>Items must be returned within 7 days of delivery</li>
          <li>Items must be unused with tags attached (where applicable)</li>
          <li>Items must be in original packaging where possible</li>
          <li>You must provide your order number or proof of purchase</li>
          <li>Personalized or custom-made items may not be eligible</li>
        </ul>
      </LegalSection>

      <LegalSection title="How to Request a Refund">
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Contact us at {brand.email.support} or {brand.phone}
          </li>
          <li>Provide your order number and reason for the refund</li>
          <li>We will send a Return Authorization (RA) number and return address</li>
          <li>Pack the item(s) securely with the RA number included</li>
          <li>Ship to the address we provide</li>
        </ol>
      </LegalSection>

      <LegalSection title="Refund Processing">
        <ul className="list-disc space-y-2 pl-6">
          <li>We inspect returns within 3–5 business days of receipt</li>
          <li>Approved refunds are processed within 5–10 business days</li>
          <li>Refunds go to the original payment method (UPI, card, net banking, etc.)</li>
          <li>You will receive email/SMS confirmation once processed</li>
        </ul>
        <p className="mt-3">
          Delivery charges are non-refundable unless the return is due to our error or a
          defective/wrong product.
        </p>
      </LegalSection>

      <LegalSection title="Return Shipping">
        <p>
          You are responsible for return shipping unless the return is due to our mistake,
          a defective product, or a wrong item. For damaged or incorrect items, contact us
          within 48 hours for a prepaid return.
        </p>
      </LegalSection>

      <LegalSection title="Non-Refundable Items">
        <ul className="list-disc space-y-2 pl-6">
          <li>Used, damaged, or altered items</li>
          <li>Items without original tags or packaging where required</li>
          <li>Personalized or custom-made items</li>
          <li>Gift cards and certain promotional items</li>
          <li>Items returned after the 7-day window</li>
        </ul>
      </LegalSection>

      <LegalSection title="Exchanges">
        <p>
          We do not offer direct exchanges. Return the original product for a refund and
          place a new order for the item you want.
        </p>
      </LegalSection>

      <LegalSection title="Damaged or Defective Items">
        <p>
          Contact us within 48 hours of delivery with photos. We will arrange a replacement
          or full refund, including return shipping.
        </p>
      </LegalSection>

      <LegalSection title="Late or Missing Refunds">
        <p>
          Check your bank, UPI app, or card statement first. If you still have not received
          your refund, contact us at {brand.email.support}.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p className="mb-4">Questions about our Refund Policy?</p>
        <LegalContactBox email={brand.email.support} showBusinessHours />
      </LegalSection>
    </LegalPageLayout>
  );
};

export default RefundPolicy;
