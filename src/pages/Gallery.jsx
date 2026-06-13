import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import GalleryGrid from '../components/GalleryGrid'
import CTASection from '../components/CTASection'
import { galleryImages, galleryFilters } from '../data/galleryData'
import { heroImages } from '../data/imageAssets'
import { siteConfig } from '../data/siteConfig'

export default function Gallery() {
  return (
    <>
      <Hero
        badge="Portfolio"
        title="Celebrations We've Catered"
        subtitle="Browse our collection of weddings, corporate events, housewarming ceremonies, and traditional celebrations."
        backgroundImage={heroImages.gallery}
        fullScreen={false}
        secondaryCta={null}
        primaryCta={{ label: 'Book Your Event', to: '/contact' }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Gallery"
            title="Our Work in Pictures"
            subtitle="Filter by event type to explore relevant catering experiences."
          />
          <GalleryGrid
            images={galleryImages}
            showFilters
            filters={galleryFilters}
            columns={4}
          />
        </div>
      </section>

      <CTASection
        title="Want Your Event Featured Here?"
        subtitle={`Book ${siteConfig.name} and let us create picture-perfect moments for your celebration.`}
      />
    </>
  )
}
