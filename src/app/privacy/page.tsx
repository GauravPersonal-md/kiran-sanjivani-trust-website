import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="page-content pt-28">
      <div className="container-custom mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground">
          {siteConfig.name} is committed to protecting your privacy. This policy outlines
          how we collect, use, and safeguard personal information submitted through our
          website forms and donation channels.
        </p>
        <div className="prose prose-neutral mt-8 space-y-4 dark:prose-invert">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect information you voluntarily provide, including name, email, phone number,
            and messages submitted through contact and volunteer forms.
          </p>
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p className="text-muted-foreground">
            Your information is used solely to respond to inquiries, process volunteer applications,
            acknowledge donations, and communicate about our programs.
          </p>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            For privacy-related questions, contact us at {siteConfig.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
