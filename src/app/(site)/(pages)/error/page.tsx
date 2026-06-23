import React from "react";
import Error from "@/components/Error";
import { siteConfig } from "@/config/site";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Something Went Wrong | ${siteConfig.brand.name}`,
  description: `An error occurred. Please try again or contact ${siteConfig.brand.email.general}.`,
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
