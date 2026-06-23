"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig, stats } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container-custom relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-24 sm:pb-28 sm:pt-28 md:pb-32 md:pt-32 lg:pt-36">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full glass-hero px-3 py-1.5 text-xs font-medium text-white sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                Registered NGO since {siteConfig.founded}
              </span>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-[1.75rem] font-bold leading-tight text-white xs:text-3xl sm:text-4xl md:text-[2.25rem] lg:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              {siteConfig.tagline}
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl"
            >
              Join thousands of changemakers transforming communities through education,
              healthcare, and inclusive development across India.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Button
                asChild
                variant="glass-hero"
                size="lg"
                className="h-12 w-full border-white/40 sm:w-auto md:h-11 lg:h-12"
              >
                <Link href="/volunteer">
                  Become a Volunteer
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="gold"
                size="lg"
                className="h-12 w-full sm:w-auto md:h-11 lg:h-12"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative mx-auto aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:max-h-none">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=1000&fit=crop"
                alt="Volunteers helping community members"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 0vw, (max-width: 1024px) 45vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trust-green-dark/60 to-transparent" />
            </div>
            {/* Our Work section disabled for now
            <Link
              href="/media"
              className="glass-hero absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-xl p-3 transition-transform hover:scale-105 sm:bottom-4 sm:left-4 sm:p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-12 sm:w-12">
                <Play className="h-4 w-4 text-white sm:h-5 sm:w-5" fill="currentColor" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Watch Our Story</p>
                <p className="text-xs text-white/70">Impact videos & updates</p>
              </div>
            </Link>
            */}
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-4 lg:mt-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-hero rounded-xl p-3 text-center sm:rounded-2xl sm:p-4 md:p-5 lg:p-6"
            >
              <p className="font-display text-xl font-bold tabular-nums text-secondary sm:text-2xl md:text-3xl lg:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-[10px] font-medium leading-tight text-white/80 sm:text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}
