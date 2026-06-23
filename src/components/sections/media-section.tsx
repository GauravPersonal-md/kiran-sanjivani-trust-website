import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Play, Youtube } from "lucide-react";
import { youtubeVideos, instagramPosts, socialLinks } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function MediaSection() {
  const featuredVideo = youtubeVideos[0];
  const featuredPosts = instagramPosts.slice(0, 4);

  return (
    <section className="section-padding bg-background" aria-labelledby="media-heading">
      <div className="container-custom">
        <SectionHeader
          badge="Our Work Online"
          title="Watch & Follow Our Journey"
          description="See our programs in action through YouTube documentaries and daily Instagram updates from the field."
          headingId="media-heading"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <AnimateOnScroll direction="left">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.id}?rel=0`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <CardContent className="p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                  Featured on YouTube
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {featuredVideo.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-body">
                  {featuredVideo.description}
                </p>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link href="/media">
                    <Play className="h-4 w-4" />
                    Watch More Videos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.15}>
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  Latest on Instagram
                </div>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-body hover:text-primary"
                >
                  @kiransanjivanitrust
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {featuredPosts.map((post) => (
                  <a
                    key={post.id}
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-xl"
                    aria-label={post.caption}
                  >
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                  </a>
                ))}
              </div>
              <Button asChild variant="gold" size="lg" className="mt-5 w-full sm:w-auto">
                <Link href="/media">
                  Explore All Our Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
