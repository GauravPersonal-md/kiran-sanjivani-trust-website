import type { Metadata } from "next";
import { siteConfig, stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Transparency Report",
};

export default function TransparencyPage() {
  return (
    <section className="page-content pt-28">
      <div className="container-custom mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Transparency Report</h1>
        <p className="mt-6 text-muted-foreground">
          {siteConfig.name} is committed to full transparency in our operations,
          funding, and program outcomes.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border bg-card p-6 text-center">
              <p className="font-display text-3xl font-bold text-primary">
                {stat.value.toLocaleString()}{stat.suffix}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Fund Allocation</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>85% — Direct program delivery and beneficiary support</li>
            <li>10% — Administration and operational costs</li>
            <li>5% — Fundraising and awareness activities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
