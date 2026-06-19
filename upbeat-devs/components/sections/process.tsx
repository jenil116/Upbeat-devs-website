"use client";

import { motion } from "framer-motion";
import {
  Search, ClipboardList, Palette, Code2,
  TestTube, Rocket, HeartHandshake,
} from "lucide-react";
import SectionHeader from "@/components/shared/section-header";
import { processSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Search, ClipboardList, Palette, Code2, TestTube, Rocket, HeartHandshake,
};

export default function Process() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="How We Bring Your Vision to Life"
          description="A proven, transparent process that keeps you informed and in control from discovery to launch."
        />

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-card border-2 border-border group-hover:border-primary-600 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-600/20">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed hidden lg:block">
                    {step.description}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed lg:hidden">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
