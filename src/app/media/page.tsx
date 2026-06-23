/*
import type { Metadata } from "next";
import { MediaPageClient } from "./media-client";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Watch Kiran Sanjivani Trust impact videos on YouTube and follow our field updates on Instagram — health camps, education drives, and community programs.",
};

export default function MediaPage() {
  return <MediaPageClient />;
}
*/
import { redirect } from "next/navigation";

export default function MediaPage() {
  redirect("/");
}
