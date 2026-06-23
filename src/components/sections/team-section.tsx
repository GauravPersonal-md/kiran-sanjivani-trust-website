import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TeamSection() {
  const { founder } = teamMembers;

  return (
    <section className="section-padding bg-background" aria-labelledby="team-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Our Team"
          title="The People Behind the Mission"
          description="Dedicated leaders, trustees, and volunteers driving change every day."
          headingId="team-heading"
        />

        <AnimateOnScroll>
          <Card className="mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
            <div>
  <Image
    src={founder.image}
    alt={founder.name}
    width={500}
    height={700}
    className="w-full h-auto rounded-xl"
  />
</div>
              <CardContent className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                  Founder & Chairperson
                </span>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{founder.name}</h3>
                <p className="mt-4 leading-relaxed text-body">{founder.bio}</p>
                <div className="mt-6 flex gap-3">
                  {founder.social.YoutubeIcon && (
                    <a href={founder.social.YoutubeIcon} aria-label={`${founder.name} on Youtube`} className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {founder.social.Instagram && (
                    <a href={founder.social.Instagram} aria-label={`${founder.name} on Twitter`} className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </AnimateOnScroll>

        {/* Trustees 
        
        <h3 className="mb-6 font-display text-2xl font-bold">Board of Trustees</h3>
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustees.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.1}>
              <Card className="text-center transition-transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
                  </div>
                  <h4 className="mt-4 font-semibold">{member.name}</h4>
                  <p className="text-sm text-secondary">{member.role}</p>
                  <p className="mt-2 text-sm text-body">{member.bio}</p>
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} aria-label={`${member.name} on LinkedIn`} className="mt-3 inline-flex rounded-lg bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <h3 className="mb-6 font-display text-2xl font-bold">Volunteer Leaders</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.08}>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-body">{member.role}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
*/}
        <AnimateOnScroll className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Meet the Full Team</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
