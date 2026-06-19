"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/shared/section-header";
import { portfolioProjects } from "@/lib/data";

const featured = portfolioProjects.filter((p) => p.featured).slice(0, 4);

const categoryLabel: Record<string, string> = {
  shopify: "Shopify",
  "shopify-plus": "Shopify Plus",
  wordpress: "WordPress",
  woocommerce: "WooCommerce",
};

export default function PortfolioPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Recent Projects We're Proud Of"
          description="A selection of our recent work showcasing our expertise across Shopify, WordPress, and e-commerce development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden border border-border hover:border-primary-600/30 hover:shadow-2xl hover:shadow-primary-600/5 transition-all duration-300 bg-card"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" className="backdrop-blur-sm">
                    {categoryLabel[project.category] || project.category}
                  </Badge>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-600 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 text-gray-800 group-hover:text-white" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio" className="flex items-center gap-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
