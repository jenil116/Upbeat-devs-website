"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Award, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/section-header";
import { teamMembers } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses of all sizes with cutting-edge e-commerce solutions that drive sustainable growth and deliver exceptional customer experiences.",
    color: "text-primary-600 bg-primary-600/10",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted e-commerce development partner for growing brands, known for quality, transparency, and measurable business impact.",
    color: "text-accent-500 bg-accent-500/10",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Quality over quantity, transparency in everything we do, client success as our own success, and continuous innovation in our craft.",
    color: "text-rose-500 bg-rose-500/10",
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/20"
            >
              About Upbeat Devs
            </motion.span>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              We Build{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                E-commerce
              </span>{" "}
              That Converts
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-xl text-white/70 leading-relaxed"
            >
              Upbeat Devs is a remote-first web development agency with 4+ years
              of experience helping businesses build, optimize, and scale their
              online presence.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600/10 text-primary-600 text-sm font-semibold mb-4 border border-primary-600/20">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                4+ Years of Building{" "}
                <span className="text-primary-600">Winning</span> Online Stores
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Upbeat Devs was founded with a simple but powerful mission: to
                  help businesses succeed online. What started as a freelance
                  operation quickly grew into a full-service e-commerce
                  development agency as word spread about the quality and results
                  we deliver.
                </p>
                <p>
                  Over the past 4+ years, we&apos;ve worked with e-commerce
                  entrepreneurs, small businesses, and growing brands across
                  industries — from fashion and beauty to tech and food. Our
                  deep focus on Shopify and WordPress has made us specialists
                  rather than generalists.
                </p>
                <p>
                  Today, we&apos;re a team of passionate developers, designers, and
                  e-commerce strategists who care about one thing above all:
                  your success. Every project we take on is treated as if it
                  were our own business.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                {[
                  { value: "4+", label: "Years Experience" },
                  { value: "100+", label: "Projects Done" },
                  { value: "50+", label: "Happy Clients" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-primary-600">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Upbeat Devs Team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="font-bold text-lg">99% Satisfaction</div>
                    <div className="text-white/80 text-sm">Client Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Foundation"
            title="What Drives Us Every Day"
            description="Our mission, vision, and values guide every decision we make and every project we build."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary-600/20 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${v.color}`}>
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Team"
            title="Meet the People Behind the Work"
            description="A talented team of developers, designers, and strategists dedicated to your success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
