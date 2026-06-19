import type { Metadata } from "next";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on Shopify development, WordPress, WooCommerce, e-commerce growth, SEO, and conversion rate optimization.",
  openGraph: {
    title: "Blog | Upbeat Devs",
    description:
      "Expert e-commerce insights, Shopify tips, WordPress guides, and web development resources from the Upbeat Devs team.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
