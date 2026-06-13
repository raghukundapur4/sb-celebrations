import HomeHero from '../components/home/HomeHero'
import HomeTrustBar from '../components/home/HomeTrustBar'
import HomeAboutSection from '../components/HomeAboutSection'
import HomeFeatures from '../components/home/HomeFeatures'
import BananaLeafShowcase from '../components/BananaLeafShowcase'
import CommitmentSection from '../components/CommitmentSection'
import HomeServicesSection from '../components/home/HomeServicesSection'
import HomeMenuPreview from '../components/HomeMenuPreview'
import SectionHeading from '../components/SectionHeading'
import TestimonialSlider from '../components/TestimonialSlider'
import HomeCTA from '../components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTrustBar />
      <HomeAboutSection />
      <HomeFeatures />
      <BananaLeafShowcase />
      <CommitmentSection />
      <HomeServicesSection />
      <HomeMenuPreview />

      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            badge="Client Testimonials"
            title="What Our Customers Say About Us"
            subtitle="Real stories from families and businesses who trusted us with their most important celebrations."
          />
          <TestimonialSlider />
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
