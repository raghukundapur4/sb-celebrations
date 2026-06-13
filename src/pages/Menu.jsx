import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import MenuTabs from '../components/MenuTabs'
import CTASection from '../components/CTASection'
import { menuCategories } from '../data/menuData'
import { heroImages } from '../data/imageAssets'

const menuPageCategories = menuCategories.filter((cat) =>
  ['south-indian', 'north-indian', 'breakfast', 'live-counters', 'desserts', 'beverages'].includes(cat.id)
)

export default function Menu() {
  return (
    <>
      <Hero
        badge="Our Menu"
        title="A Culinary Journey Awaits"
        subtitle="Explore our extensive menu featuring authentic South Indian classics, North Indian favorites, live counters, and more."
        backgroundImage={heroImages.menu}
        fullScreen={false}
        secondaryCta={null}
        primaryCta={{ label: 'Request Custom Menu', to: '/contact' }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Explore"
            title="Browse By Category"
            subtitle="Select a category to discover our signature dishes and live counter offerings."
          />
          <MenuTabs categories={menuPageCategories} />
        </div>
      </section>

      <CTASection
        title="Need a Custom Menu For Your Event?"
        subtitle="Our chefs will craft a personalized menu based on your preferences, guest count, and event theme."
        buttonLabel="Plan Your Menu"
      />
    </>
  )
}
