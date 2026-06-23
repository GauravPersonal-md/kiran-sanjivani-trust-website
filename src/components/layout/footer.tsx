import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, footerLinks, socialLinks } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { SiteLogoLink } from "@/components/shared/site-logo";

const socialIcons = [
  { href: socialLinks.instagram, icon: Instagram, label: "Instagram" },
  { href: socialLinks.youtube, icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-trust-green-dark text-white" role="contentinfo">
      <div className="container-custom py-12 sm:py-14 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <SiteLogoLink
              isLight
              textClassName="text-white"
              subtextClassName="text-white/70"
            />
            <p className="text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Registered NGO since {siteConfig.founded}.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-secondary hover:text-trust-green-dark"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/70 transition-colors hover:text-secondary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 text-sm text-white/70 transition-colors hover:text-secondary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Made with compassion for a better tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
