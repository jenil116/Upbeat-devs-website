import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Upbeat Devs for your Shopify, WordPress, or e-commerce project. Free consultation available.",
  openGraph: {
    title: "Contact Upbeat Devs | Free E-commerce Consultation",
    description:
      "Ready to grow your online store? Contact us for a free consultation on your Shopify, WordPress, or e-commerce project.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
