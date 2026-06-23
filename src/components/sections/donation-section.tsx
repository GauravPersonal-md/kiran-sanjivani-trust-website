import Link from "next/link";
import { Building, Heart, ShieldCheck } from "lucide-react";
import { donationDetails, donationImpacts } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { DonationQrImage } from "@/components/shared/donation-qr-image";
import { Button } from "@/components/ui/button";

export function DonationSection() {
  const { upi, bank } = donationDetails;

  return (
    <section
      id="donate"
      className="relative overflow-hidden section-padding"
      aria-labelledby="donate-heading"
    >
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Support Our Mission"
          title="Your Donation Creates Real Change"
          description="Every contribution directly funds programs that transform lives in underserved communities."
          light
          headingId="donate-heading"
        />

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          <AnimateOnScroll direction="left">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {donationImpacts.map((item) => (
                <div
                  key={item.amount}
                  className="rounded-2xl border border-white/20 bg-white p-4 shadow-xl shadow-black/10 transition-transform hover:-translate-y-1 sm:p-5"
                >
                  <p className="font-display text-xl font-bold text-primary sm:text-2xl">{item.amount}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.impact}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <ShieldCheck className="h-8 w-8 shrink-0 text-secondary" aria-hidden="true" />
              <p className="text-sm text-white/90">
                100% transparent. Eligible for 80G tax exemption. Every rupee is tracked and reported.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl shadow-black/20">
              <div className="bg-primary px-4 py-4 sm:px-6 sm:py-5 md:px-8">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Make a Donation</h3>
                <p className="mt-1 text-sm text-white/75">UPI scan or bank transfer</p>
              </div>

              <div className="space-y-5 p-4 sm:space-y-6 sm:p-6 md:p-8">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                  <DonationQrImage size="md" />
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      UPI ID
                    </p>
                    <p className="mt-1 font-mono text-base font-bold text-foreground sm:text-lg">
                      {upi.id}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{upi.payeeName}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Scan QR or pay via any UPI app
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted/40 p-5 text-sm">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{bank.accountName}</p>
                      <p className="text-muted-foreground">{bank.bankName}</p>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <p>
                      <span className="text-muted-foreground">Account: </span>
                      <span className="font-mono font-medium">{bank.accountNumber}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">IFSC: </span>
                      <span className="font-mono font-medium">{bank.ifsc}</span>
                    </p>
                    <p className="sm:col-span-2">
                      <span className="text-muted-foreground">Branch: </span>
                      {bank.branch}
                    </p>
                  </div>
                </div>

                <Button asChild variant="gold" size="lg" className="w-full">
                  <Link href="/donate">
                    <Heart className="h-5 w-5" />
                    View Full Donation Details
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
