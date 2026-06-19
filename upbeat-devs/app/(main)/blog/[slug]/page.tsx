import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import CTABanner from "@/components/sections/cta-banner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 400 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Article Header */}
      <section className="relative pt-32 pb-12 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Badge variant="accent" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 prose-strong:text-foreground">
              <p className="lead text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

              <h2>Introduction</h2>
              <p>
                In today&apos;s competitive e-commerce landscape, staying ahead requires a deep
                understanding of the latest trends, tools, and strategies. This article explores
                key insights that can help you grow your online business and outperform the competition.
              </p>

              <h2>Key Points to Consider</h2>
              <p>
                When approaching {post.title.toLowerCase()}, there are several critical factors
                to keep in mind:
              </p>
              <ul>
                <li>Understanding your target audience and their needs</li>
                <li>Implementing data-driven decisions based on analytics</li>
                <li>Continuously testing and optimizing your approach</li>
                <li>Staying up-to-date with platform changes and best practices</li>
                <li>Measuring ROI and adjusting strategy accordingly</li>
              </ul>

              <h2>Best Practices</h2>
              <p>
                Success in e-commerce requires a systematic approach. Start by auditing your
                current setup and identifying areas for improvement. Focus on the highest-impact
                changes first, and build from there.
              </p>
              <p>
                Remember that what works for one store may not work for another. Always test
                changes with your specific audience and use data to validate your decisions.
              </p>

              <h2>Conclusion</h2>
              <p>
                By implementing these strategies and continuously refining your approach, you
                can build a stronger, more profitable online presence. The key is to start
                with the fundamentals and build up from there.
              </p>
              <p>
                If you need help implementing any of these strategies for your Shopify or
                WordPress store, our team at Upbeat Devs is here to help. Get in touch for
                a free consultation.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-10 pt-8 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-primary-600/5 rounded-2xl border border-primary-600/10 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Need Help With Your E-commerce Store?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team of experts can help you implement these strategies and more.
                Get a free consultation today.
              </p>
              <Button asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Post Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-8 border-t border-border">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="group p-5 border border-border rounded-xl hover:border-primary-600/30 hover:shadow-lg transition-all duration-200">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <ArrowLeft className="w-3 h-3" /> Previous Article
                  </span>
                  <p className="font-semibold text-foreground group-hover:text-primary-600 transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group p-5 border border-border rounded-xl hover:border-primary-600/30 hover:shadow-lg transition-all duration-200 sm:text-right ml-auto w-full">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground mb-2 sm:justify-end">
                    Next Article <ArrowRight className="w-3 h-3" />
                  </span>
                  <p className="font-semibold text-foreground group-hover:text-primary-600 transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* JSON-LD for blog post */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Upbeat Devs",
            },
            datePublished: post.date,
          }),
        }}
      />

      <CTABanner />
    </>
  );
}
