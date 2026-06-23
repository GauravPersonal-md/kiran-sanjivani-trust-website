import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name}. Reach us via email, phone, or our contact form for volunteer, donation, and partnership inquiries.`,
};

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Contact
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              We&apos;d Love to Hear From You
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Whether you&apos;re a volunteer, donor, CSR partner, or college — our team is here to help.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <AnimateOnScroll direction="left" className="lg:col-span-2">
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.label}>
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="mt-1 block font-medium hover:text-primary">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-medium">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 overflow-hidden rounded-xl shadow-md">
                <iframe
                  title="Kiran Sanjivani Trust location"
                  src="https://maps.google.com/maps?q=Connaught+Place+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2} className="lg:col-span-3">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold">Send a Message</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We typically respond within 24 hours on business days.
                  </p>
                  <ContactForm className="mt-6" />
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
