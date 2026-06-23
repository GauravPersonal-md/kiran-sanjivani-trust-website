import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding section-alt" aria-labelledby="contact-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Contact Us"
          title="Get in Touch"
          description="Whether you're a volunteer, donor, or partner — we'd love to hear from you."
          headingId="contact-heading"
        />

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-5 lg:gap-12">
          <AnimateOnScroll direction="left" className="md:col-span-1 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
                <Card key={item.label}>
                  <CardContent className="flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-body">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block font-medium transition-colors hover:text-primary">
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

            <div className="mt-4 overflow-hidden rounded-xl shadow-md sm:mt-6 lg:col-span-1">
              <iframe
                title="Kiran Sanjivani Trust location on Google Maps"
                src="https://maps.google.com/maps?q=29.3946958,79.0936166&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2} className="md:col-span-1 lg:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="font-display text-xl font-bold sm:text-2xl">Send Us a Message</h3>
                <p className="mt-2 text-sm text-body">
                  Fill out the form and we&apos;ll respond within 24 hours.
                </p>
                <ContactForm className="mt-6" />
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
