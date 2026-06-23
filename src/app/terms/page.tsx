import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="page-content pt-28">
      <div className="container-custom mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
        <p className="mt-6 text-muted-foreground">
          By using the {siteConfig.name} website, you agree to the following terms and conditions.
        </p>
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Use of Website</h2>
          <p className="text-muted-foreground">
            This website is provided for informational purposes about our NGO programs,
            volunteer opportunities, and donation channels. Content may be updated without notice.
          </p>
          <h2 className="text-xl font-semibold">Donations</h2>
          <p className="text-muted-foreground">
            All donations are voluntary and non-refundable unless required by applicable law.
            Donation receipts and 80G certificates are issued upon verification of payment.
          </p>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            Questions about these terms may be directed to {siteConfig.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
