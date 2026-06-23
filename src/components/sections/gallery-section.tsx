"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const previewImages = galleryImages.slice(0, 8);

  return (
    <section id="gallery" className="section-padding bg-background" aria-labelledby="gallery-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Gallery"
          title="Moments of Impact"
          description="Capturing the spirit of community, compassion, and change across our programs."
          headingId="gallery-heading"
        />

        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
          {previewImages.map((image, i) => (
            <AnimateOnScroll key={image.src} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative block w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`View ${image.alt}`}
              >
                <div className="relative aspect-auto">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={i % 3 === 0 ? 800 : i % 3 === 1 ? 500 : 650}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
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

        <AnimateOnScroll className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </AnimateOnScroll>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {selectedImage?.alt ?? "Gallery image"}
          </DialogTitle>
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
                className="absolute right-2 top-2 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="mt-2 text-center text-sm text-white">{selectedImage.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
