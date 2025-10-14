import { Navigation } from "@/components/navigation"
import { ParallaxHero } from "@/components/parallax-hero"
import { FeaturedWork } from "@/components/featured-work"
import { GalleryGrid } from "@/components/gallery-grid"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ParallaxHero />
      <AnimatedSection delay={0.2}>
        <FeaturedWork />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <GalleryGrid />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
