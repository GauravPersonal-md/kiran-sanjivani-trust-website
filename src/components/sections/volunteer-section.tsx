import Link from "next/link";
import Image from "next/image";
import { volunteerBenefits } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { VolunteerForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="section-padding bg-background" aria-labelledby="volunteer-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Volunteer With Us"
          title="Why Volunteer With Kiran Sanjivani Trust?"
          description="Join a community of passionate changemakers and gain meaningful experience while creating lasting impact."
          headingId="volunteer-heading"
        />

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {volunteerBenefits.map((benefit, i) => (
                <AnimateOnScroll key={benefit.title} delay={i * 0.1}>
                  <Card className="h-full">
                    <CardContent className="p-5">
                      <DynamicIcon name={benefit.icon} className="mb-3 h-8 w-8 text-primary" />
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="mt-2 text-sm text-body">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.4} className="mt-8">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop"
                  alt="Volunteers working together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll direction="right" delay={0.2}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Volunteer Registration
                </CardTitle>
                <p className="text-sm text-body">
                  Fill out the form below and our team will reach out within 48 hours.
                </p>
              </CardHeader>
              <CardContent>
                <VolunteerForm />
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/volunteer">Learn More About Volunteering</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
