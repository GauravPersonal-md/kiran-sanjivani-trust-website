/*
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { projects, siteConfig } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore active and completed projects by ${siteConfig.name} in education, healthcare, women empowerment, and community development.`,
};

export default function ProjectsPage() {
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Our Projects
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Programs That Create Lasting Change
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              From digital classrooms to mobile health clinics — discover how we&apos;re
              transforming communities across India.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Active & Completed Projects"
            description={`${projects.length} initiatives across ${categories.length} impact areas.`}
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.id} delay={i * 0.08}>
                <Card className="group h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Ongoing"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-trust-green-dark"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                      <Users className="h-4 w-4 text-secondary" aria-hidden="true" />
                      {project.beneficiaries} beneficiaries
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-16 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Partner With Us</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              CSR partners, colleges, and government organizations — let&apos;s create impact together.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
  */
import { redirect } from "next/navigation";

export default function ProjectsPage() {
  redirect("/");
}
