import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { VolunteerSection } from "@/components/sections/volunteer-section";
import { GallerySection } from "@/components/sections/gallery-section";
// import { MediaSection } from "@/components/sections/media-section";
import { TeamSection } from "@/components/sections/team-section";
import { DonationSection } from "@/components/sections/donation-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VolunteerSection />
      <GallerySection />
      {/* <MediaSection /> */}
      <TeamSection />
      <DonationSection />
      <ContactSection />
    </>
  );
}
