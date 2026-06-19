"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag, Zap, Store, Palette, Puzzle, Gauge,
  ArrowRightLeft, Globe, ShoppingCart, Wrench, TrendingUp, Search, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/section-header";
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

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Everything You Need to Succeed Online"
          description="From Shopify store setup to advanced e-commerce solutions, we offer a complete suite of web development services."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || ShoppingBag;
            const gradientClass = categoryColors[service.category] || "from-primary-600 to-primary-700";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group"
              >
                <div className="h-full p-6 bg-card border border-border rounded-2xl hover:border-primary-600/30 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 mt-4 text-primary-600 text-sm font-medium hover:gap-2 transition-all duration-200"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services" className="flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
