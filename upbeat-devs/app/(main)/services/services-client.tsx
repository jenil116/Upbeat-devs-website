"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag, Zap, Store, Palette, Puzzle, Gauge,
  ArrowRightLeft, Globe, ShoppingCart, Wrench, TrendingUp, Search,
  CheckCircle, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/section-header";
import CTABanner from "@/components/sections/cta-banner";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag, Zap, Store, Palette, Puzzle, Gauge,
  ArrowRightLeft, Globe, ShoppingCart, Wrench, TrendingUp, Search,
};

const categoryColors: Record<string, string> = {
  shopify: "from-primary-600 to-primary-700",
  wordpress: "from-sky-500 to-sky-600",
  woocommerce: "from-purple-500 to-purple-600",
  maintenance: "from-orange-500 to-orange-600",
  optimization: "from-accent-500 to-accent-600",
};

const categoryGroups = [
  { key: "shopify", label: "Shopify Services" },
  { key: "wordpress", label: "WordPress Development" },
  { key: "woocommerce", label: "WooCommerce Development" },
  { key: "optimization", label: "Optimization Services" },
  { key: "maintenance", label: "Maintenance" },
];

export default function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/20"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            End-to-end e-commerce development services to build, grow, and
            optimize your online business.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Services by Category */}
      {categoryGroups.map((group) => {
        const groupServices = services.filter((s) => s.category === group.key);
        if (!groupServices.length) return null;

        return (
          <section key={group.key} id={group.key} className="py-20 bg-background odd:bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                title={group.label}
                align="left"
                className="mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupServices.map((service, i) => {
                  const Icon = iconMap[service.icon] || ShoppingBag;
                  const gradientClass = categoryColors[service.category] || "from-primary-600 to-primary-700";

                  return (
                    <motion.div
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="p-8 bg-card border border-border rounded-2xl hover:border-primary-600/30 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300 group"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                          Get a Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
