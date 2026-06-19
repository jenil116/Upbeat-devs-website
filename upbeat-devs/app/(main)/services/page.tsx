import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive Shopify, WordPress, WooCommerce, and e-commerce development services. From store setup to speed optimization, SEO, and CRO.",
  openGraph: {
    title: "E-commerce Development Services | Upbeat Devs",
    description:
      "Full-service e-commerce development including Shopify, WordPress, WooCommerce, speed optimization, and conversion rate optimization.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
