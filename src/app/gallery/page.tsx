import type { Metadata } from "next";
import { GalleryPageClient } from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Kiran Sanjivani Trust events, community activities, and impact programs across India.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
