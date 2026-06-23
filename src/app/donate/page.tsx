import type { Metadata } from "next";
import Link from "next/link";
import { Building, Heart, Shield, Receipt } from "lucide-react";
import { donationDetails, donationImpacts, siteConfig } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { DonationQrImage } from "@/components/shared/donation-qr-image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${siteConfig.name} with a tax-deductible donation. Your contribution funds education, healthcare, and community development programs.`,
};

const trustPoints = [
  {
    icon: Shield,
    title: "100% Transparent",
    description: "Every rupee is tracked and reported in our annual transparency report.",
  },
  {
    icon: Receipt,
    title: "Tax Benefits",
    description: "Eligible for 80G tax exemption under Income Tax Act.",
  },
  {
    icon: Heart,
    title: "Direct Impact",
    description: "85% of donations go directly to program delivery and beneficiaries.",
  },
];

export default function DonatePage() {
  const { upi, bank } = donationDetails;

  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Donate
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Invest in a Better Tomorrow
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Your generosity fuels education, healthcare, and empowerment programs
              that transform lives across India.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Your Impact"
            description="See exactly how your donation makes a difference."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {donationImpacts.map((item, i) => (
              <AnimateOnScroll key={item.amount} delay={i * 0.1}>
                <Card className="h-full border-primary/20 bg-primary/5 text-center transition-transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <p className="font-display text-3xl font-bold text-primary">{item.amount}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{item.impact}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <Card className="h-full shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold">Donate via UPI</h2>
                  <p className="mt-2 text-muted-foreground">Scan the QR code or use the UPI ID below</p>

                  <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
                    <DonationQrImage size="lg" />
                    <div>
                      <p className="text-sm text-muted-foreground">UPI ID</p>
                      <p className="font-mono text-xl font-bold">{upi.id}</p>
                      <p className="mt-4 text-sm text-muted-foreground">Payee Name</p>
                      <p className="font-semibold">{upi.payeeName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2}>
              <Card className="h-full shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold">Bank Transfer</h2>
                  <p className="mt-2 text-muted-foreground">For larger donations or corporate transfers</p>

                  <div className="mt-8 space-y-4 rounded-xl bg-muted p-6">
                    <div className="flex items-start gap-3">
                      <Building className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{bank.accountName}</p>
                        <p className="text-sm text-muted-foreground">{bank.bankName}</p>
                      </div>
                    </div>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <p className="text-muted-foreground">Account Number</p>
                        <p className="font-mono font-semibold">{bank.accountNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">IFSC Code</p>
                        <p className="font-mono font-semibold">{bank.ifsc}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Account Type</p>
                        <p className="font-semibold">{bank.accountType}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Branch</p>
                        <p className="font-semibold">{bank.branch}</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    Email transaction details to {siteConfig.email} for receipt and 80G certificate.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {trustPoints.map((point, i) => (
              <AnimateOnScroll key={point.title} delay={i * 0.1}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <point.icon className="mx-auto mb-4 h-10 w-10 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold">{point.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center">
            <Button asChild variant="gold" size="xl">
              <Link href="/contact">
                <Heart className="h-5 w-5" />
                Contact for Corporate Partnerships
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
