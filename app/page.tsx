import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedEvents from "@/components/featured-events"
import AboutSection from "@/components/about-section"
import LeadershipSection from "@/components/leadership-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedEvents />
      <AboutSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
