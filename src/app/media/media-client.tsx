"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Heart, Instagram, Play, Youtube } from "lucide-react";
import {
  instagramPosts,
  socialLinks,
  socialProfiles,
  youtubeVideos,
} from "@/lib/constants";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MediaPageClient() {
  const [activeVideo, setActiveVideo] = useState(youtubeVideos[0]);

  return (
    <>
      <section className="page-hero text-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              See Our Impact in Action
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Watch our documentaries, event highlights, and field updates on YouTube and Instagram.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="lg">
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  Subscribe on YouTube
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary"
              >
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="youtube" className="w-full">
            <TabsList className="mx-auto mb-10 grid h-auto w-full max-w-md grid-cols-2">
              <TabsTrigger value="youtube" className="gap-2 py-2.5">
                <Youtube className="h-4 w-4" />
                YouTube
              </TabsTrigger>
              <TabsTrigger value="instagram" className="gap-2 py-2.5">
                <Instagram className="h-4 w-4" />
                Instagram
              </TabsTrigger>
            </TabsList>

            <TabsContent value="youtube">
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <AnimateOnScroll>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0`}
                        title={activeVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h2 className="font-display text-xl font-semibold">{activeVideo.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{activeVideo.description}</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {activeVideo.views} views · {activeVideo.duration}
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                  <Card className="h-full bg-primary/5">
                    <CardContent className="flex h-full flex-col justify-center p-6">
                      <Youtube className="mb-3 h-10 w-10 text-primary" aria-hidden="true" />
                      <h3 className="font-display text-2xl font-bold">{socialProfiles.youtube.handle}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {socialProfiles.youtube.subscribers} subscribers
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {socialProfiles.youtube.description}
                      </p>
                      <Button asChild className="mt-5 w-fit" variant="default">
                        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                          Visit Channel
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {youtubeVideos.map((video, i) => (
                  <AnimateOnScroll key={video.id} delay={i * 0.05}>
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      aria-pressed={activeVideo.id === video.id}
                      aria-label={`Play ${video.title}`}
                      className={`group w-full overflow-hidden rounded-xl border text-left transition-all hover:-translate-y-1 hover:shadow-lg ${
                        activeVideo.id === video.id
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border"
                      }`}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-trust-green-dark shadow-lg">
                            <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-0.5 text-xs text-white">
                          {video.duration}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-2 font-semibold">{video.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{video.views} views</p>
                      </div>
                    </button>
                  </AnimateOnScroll>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="instagram">
              <AnimateOnScroll className="mb-8">
                <Card className="overflow-hidden border-pink-500/20 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5">
                  <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg">
                        <Instagram className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold">{socialProfiles.instagram.handle}</h2>
                        <p className="mt-1 max-w-lg text-sm text-muted-foreground">
                          {socialProfiles.instagram.description}
                        </p>
                      </div>
                    </div>
                    <Button asChild variant="default" className="shrink-0">
                      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        Follow on Instagram
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
                {instagramPosts.map((post, i) => (
                  <AnimateOnScroll key={post.id} delay={i * 0.04}>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`View Instagram post: ${post.caption}`}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={post.image}
                          alt={post.caption}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="line-clamp-2 text-xs text-white">{post.caption}</p>
                          <div className="mt-2 flex items-center gap-3 text-xs text-white/90">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                              {post.likes}
                            </span>
                            <span className="rounded-full bg-white/20 px-2 py-0.5">{post.category}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll className="mt-10 text-center">
                <p className="text-sm text-muted-foreground">
                  Tap any photo to view more on our Instagram profile
                </p>
                <Button asChild variant="outline" size="lg" className="mt-4">
                  <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    View Full Profile
                  </Link>
                </Button>
              </AnimateOnScroll>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
