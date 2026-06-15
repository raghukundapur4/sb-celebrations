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
        title="Our Catering in Pictures"
        subtitle="Banana leaf feasts, full banquet spreads, and traditional vegetarian catering from weddings to corporate events."
        backgroundImage={heroImages.gallery}
        fullScreen={false}
        secondaryCta={null}
        primaryCta={{ label: 'Book Your Event', to: '/contact' }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Gallery"
            title="Banana Leaf Catering Gallery"
            subtitle="Every image reflects our signature style — full vegetarian spreads and traditional banana leaf service for events."
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
