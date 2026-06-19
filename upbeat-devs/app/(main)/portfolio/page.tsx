import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful Shopify, WordPress, and WooCommerce projects. See how we've helped brands grow online.",
  openGraph: {
    title: "Portfolio | Upbeat Devs",
    description:
      "Browse our portfolio of e-commerce projects including Shopify, Shopify Plus, WordPress, and WooCommerce stores.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
