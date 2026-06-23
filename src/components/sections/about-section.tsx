import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { coreValues } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeader
          badge="About Us"
          title="A Legacy of Compassion & Change"
          description="Since 2026, Kiran Sanjivani Trust has been a beacon of hope for underserved communities across India."
          headingId="about-heading"
        />

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                  alt="Kiran Sanjivani Trust community work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-secondary p-6 shadow-lg sm:block">
                <p className="font-display text-3xl font-bold text-trust-green-dark">1+</p>
                <p className="text-sm font-medium text-trust-green-dark/80">Years of Impact</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-foreground">Our Story</h3>
                <p className="mt-3 leading-relaxed text-body">
                  Founded by Mrs. Kiran Mathpal, Kiran Sanjivani Trust began with a simple belief:
                  every person deserves access to education, healthcare, and dignity. What started
                  as a small community initiative has grown into a nationwide movement, partnering
                  with colleges, CSR organizations, and government bodies to create sustainable change.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-5">
                    <Target className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                    <h4 className="font-semibold text-neutral-900 dark:text-foreground">Mission</h4>
                    <p className="mt-2 text-sm text-body">
                      To empower marginalized communities through education, healthcare, and inclusive development programs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/30 bg-secondary/5">
                  <CardContent className="p-5">
                    <Eye className="mb-3 h-8 w-8 text-secondary" aria-hidden="true" />
                    <h4 className="font-semibold text-neutral-900 dark:text-foreground">Vision</h4>
                    <p className="mt-2 text-sm text-body">
                      An inclusive, healthy society where every individual has equal opportunity to thrive and contribute.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16">
          <AnimateOnScroll>
            <h3 className="mb-8 text-center font-display text-2xl font-bold text-neutral-900 dark:text-foreground">Core Values</h3>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <Card className="h-full text-center transition-transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <DynamicIcon name={value.icon} className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 dark:text-foreground">{value.title}</h4>
                    <p className="mt-2 text-sm text-body">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
