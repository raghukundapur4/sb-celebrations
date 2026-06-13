import { motion } from 'framer-motion'
import { Check, Target, Eye, Heart } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import LazyImage from '../components/LazyImage'
import {
  missionVisionValues,
  timeline,
  trustPoints,
  siteConfig,
} from '../data/siteConfig'
import { heroImages, vegSouthIndianImages } from '../data/imageAssets'
import { fadeUp, staggerContainer } from '../utils/animations'

const iconMap = { Target, Eye, Heart }

export default function About() {
  return (
    <>
      <Hero
        badge="100% Pure Vegetarian"
        title="A Legacy of Culinary Excellence"
        subtitle="From a family kitchen to Hyderabad's most trusted 100% vegetarian catering brand."
        backgroundImage={heroImages.about}
        fullScreen={false}
        secondaryCta={null}
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Company Story"
                title="Rooted in Tradition, Refined for Today"
                align="left"
              />
              <p className="mb-4 text-base leading-relaxed text-dark/60">
                {siteConfig.name} began in {siteConfig.founded} as a passion project in a family kitchen, serving authentic
                South Indian vegetarian meals for neighborhood celebrations. Word of mouth about our flavorful
                recipes and warm hospitality quickly spread.
              </p>
              <p className="text-base leading-relaxed text-dark/60">
                Today, we cater over 100 events annually — from intimate housewarming ceremonies to grand
                1000-guest weddings. Our commitment remains unchanged: deliver food that honors tradition
                while exceeding modern expectations for presentation, hygiene, and service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl shadow-premium"
            >
              <LazyImage
                src={vegSouthIndianImages.dosaBananaLeaf}
                alt="South Indian catering preparation"
                className="aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Purpose"
            title="Mission, Vision & Values"
            subtitle="The principles that guide every dish we serve and every event we cater."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {missionVisionValues.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="card-premium p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-dark/60">{item.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Journey"
            title="Milestones Through the Years"
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-8 flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="mb-1 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-dark/60">{item.description}</p>
                </div>
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30">
                  {item.year.slice(2)}
                </div>
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Trust"
            title="Why Customers Trust Us"
            subtitle="Built on consistency, transparency, and a genuine love for hospitality."
          />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-dark/5 bg-light p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={16} />
                </span>
                <span className="text-sm font-medium text-dark">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Experience the ${siteConfig.name} Difference?`}
        subtitle="Let us bring our tradition of taste and trust to your next celebration."
      />
    </>
  )
}
