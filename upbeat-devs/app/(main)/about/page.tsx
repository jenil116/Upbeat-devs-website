import type { Metadata } from "next";
import { Metadata as NextMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Stats from "@/components/sections/stats";
import CTABanner from "@/components/sections/cta-banner";
import { teamMembers } from "@/lib/data";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Upbeat Devs — a professional e-commerce development agency with 4+ years of experience helping businesses grow online with Shopify, WordPress, and custom solutions.",
  openGraph: {
    title: "About Upbeat Devs | E-commerce Development Agency",
    description:
      "Professional e-commerce development agency with 4+ years of experience. We help businesses grow online with Shopify, WordPress, and custom web solutions.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutClient />
      <Stats />
      <CTABanner />
    </>
  );
}
