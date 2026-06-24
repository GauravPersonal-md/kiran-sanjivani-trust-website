import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { coreValues, teamMembers, siteConfig } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Card, CardContent } from "@/components/ui/card";
import founderImg from "@/images/founder.jpg";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our story, mission, vision, core values, and leadership team driving change since ${siteConfig.founded}.`,
};

export default function AboutPage() {
  const { founder } = teamMembers;

  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our Story of Hope & Impact
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Since {siteConfig.founded}, {siteConfig.name} has been transforming lives
              across India through compassionate action and sustainable development.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                  alt="Community volunteers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={0.2}>
              <h2 className="font-display text-3xl font-bold">Who We Are</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Kiran Sanjivani Trust was born from a vision to create an inclusive society
                where every individual — regardless of background, ability, or circumstance —
                has access to education, healthcare, and opportunity. Founded by Kiran Mathpal,
                our organization has grown from a grassroots initiative to a nationally recognized NGO.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We partner with colleges, corporate CSR teams, government agencies, and international
                organizations to deliver programs that create measurable, lasting change in
                underserved communities across India.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <Card className="h-full border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <Target className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="font-display text-2xl font-bold">Our Mission</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    To empower marginalized communities through comprehensive education, accessible
                    healthcare, women empowerment, and inclusive development programs that build
                    self-reliance and dignity.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <Card className="h-full border-secondary/30 bg-secondary/5">
                <CardContent className="p-8">
                  <Eye className="mb-4 h-10 w-10 text-secondary" />
                  <h3 className="font-display text-2xl font-bold">Our Vision</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    An inclusive, healthy society where every individual has equal opportunity
                    to learn, grow, and contribute — free from barriers of poverty, disability,
                    or discrimination.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>

          <div className="mt-16">
            <SectionHeader title="Core Values" description="The principles that guide everything we do." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, i) => (
                <AnimateOnScroll key={value.title} delay={i * 0.1}>
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <DynamicIcon name={value.icon} className="h-7 w-7 text-primary" />
                      </div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <SectionHeader title="Leadership Team" description="Meet the people driving our mission forward." />
            <AnimateOnScroll>
              <Card className="mb-8 overflow-hidden">
                <div className="grid md:grid-cols-2">
                <div className="flex justify-center">
  <Image
    src={founderImg}
    alt={founder.name}
    width={500}
    height={700}
    className="w-full h-auto rounded-xl"
  />
</div>
                  <CardContent className="flex flex-col justify-center p-8">
                    <span className="text-sm font-semibold uppercase text-secondary">Founder</span>
                    <h3 className="font-display text-3xl font-bold">{founder.name}</h3>
                    <p className="mt-4 text-muted-foreground">{founder.bio}</p>
                  </CardContent>
                </div>
              </Card>
            </AnimateOnScroll>
  
          </div>
        </div>
      </section>
    </>
  );
}
