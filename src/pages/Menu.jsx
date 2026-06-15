import { useState } from 'react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import MenuTabs from '../components/MenuTabs'
import CTASection from '../components/CTASection'
import { menuGroups, getMenuCategoriesByGroup } from '../data/menuData'
import { heroImages } from '../data/imageAssets'

export default function Menu() {
  const [activeGroup, setActiveGroup] = useState(menuGroups[0]?.id)
  const activeCategories = getMenuCategoriesByGroup(activeGroup)

  return (
    <>
      <Hero
        badge="Catering Menu"
        title="Complete Vegetarian Catering Menu"
        subtitle="Browse our full event catering menu — from welcome drinks and live counters to traditional sweets and banquet spreads. Every package is customized for your guest count and celebration."
        backgroundImage={heroImages.menu}
        fullScreen={false}
        secondaryCta={null}
        primaryCta={{ label: 'Plan Your Event Menu', to: '/contact' }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Event Packages"
            title="Choose Your Menu Categories"
            subtitle="We offer flexible catering packages for weddings, housewarming ceremonies, corporate events, birthday parties, and traditional celebrations. Select a section below to explore available dishes."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {menuGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeGroup === group.id
                    ? 'border-primary bg-primary text-black shadow-md shadow-primary/25'
                    : 'border-dark/10 bg-white text-dark/70 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {group.name}
              </button>
            ))}
          </div>

          <MenuTabs categories={activeCategories} showGroupIntro={false} />
        </div>
      </section>

      <CTASection
        title="Need a Customized Catering Package?"
        subtitle="Share your event type, guest count, and preferences — our team will design a personalized menu with live counters, service staff, and complete banquet setup."
        buttonLabel="Request Menu Consultation"
      />
    </>
  )
}
