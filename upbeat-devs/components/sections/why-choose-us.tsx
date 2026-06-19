"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Smartphone, Search, HeartHandshake, ShoppingCart } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";

const reasons = [
  {
    icon: Trophy,
    title: "4+ Years Experience",
    description: "Proven track record with 100+ successful e-commerce projects across multiple industries.",
    color: "text-yellow-500 bg-yellow-500/10",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Specialists",
    description: "We focus exclusively on e-commerce — Shopify, WooCommerce, and beyond.",
    color: "text-primary-600 bg-primary-600/10",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient processes and dedicated teams ensure your project ships on time, every time.",
    color: "text-orange-500 bg-orange-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Every solution is built mobile-first — because that's where your customers are.",
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    icon: Search,
    title: "SEO Friendly Solutions",
    description: "Built with SEO best practices from day one for better organic visibility and rankings.",
    color: "text-accent-500 bg-accent-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't disappear after launch — our team is here for maintenance and continued growth.",
    color: "text-rose-500 bg-rose-500/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Your E-commerce Growth Partners"
          description="We combine technical expertise with business understanding to deliver solutions that drive real results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary-600/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
