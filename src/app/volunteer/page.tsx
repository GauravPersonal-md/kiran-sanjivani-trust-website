import type { Metadata } from "next";
import Image from "next/image";
import { volunteerBenefits, siteConfig } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { VolunteerForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Volunteer",
  description: `Join ${siteConfig.name} as a volunteer. Gain certificates, leadership experience, and make a real difference in communities across India.`,
};

export default function VolunteerPage() {
  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Volunteer
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Be the Change You Wish to See
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Join 10+ volunteers making a difference. Whether you have a few hours
              or want to lead a project — there&apos;s a place for you at KST.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Why Volunteer With Us?"
            description="More than service — an opportunity to grow, lead, and transform lives."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {volunteerBenefits.map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} delay={i * 0.1}>
                <Card className="h-full text-center transition-transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <DynamicIcon name={benefit.icon} className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold">How It Works</h2>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Apply Online", desc: "Fill out the registration form with your interests and availability." },
                    { step: "02", title: "Orientation", desc: "Attend a welcome session to learn about our programs and values." },
                    { step: "03", title: "Get Assigned", desc: "We match you with projects based on your skills and passion." },
                    { step: "04", title: "Make Impact", desc: "Start volunteering and receive certificates for your contributions." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-trust-green-dark">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop"
                    alt="Volunteers"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Volunteer Registration</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Start your journey with Kiran Sanjivani Trust today.
                  </p>
                </CardHeader>
                <CardContent>
                  <VolunteerForm />
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
