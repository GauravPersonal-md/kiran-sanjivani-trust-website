"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Moments of Impact
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Explore photos from our events, community activities, and programs across India.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filtered.map((image, i) => (
              <AnimateOnScroll key={image.src} delay={i * 0.03} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group relative block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={i % 3 === 0 ? 800 : i % 3 === 1 ? 500 : 650}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                    {image.category}
                  </span>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{selectedImage?.alt ?? "Gallery image"}</DialogTitle>
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-full rounded-xl object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-2 top-2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="mt-2 text-center text-sm">{selectedImage.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
