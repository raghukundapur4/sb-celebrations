import { motion } from 'framer-motion'
import { ChefHat, Leaf, Star, Users } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { whyChooseUs } from '../../data/siteConfig'
import { staggerContainer, fadeUp } from '../../utils/animations'

const iconMap = { ChefHat, Leaf, Star, Users }

export default function HomeFeatures() {
  return (
    <section className="section-padding bg-cream pattern-dots">
      <div className="container-custom">
        <SectionHeading
          badge="Why Choose Us"
          title="The SB Celebration's Difference"
          subtitle="Four pillars of excellence that make every event extraordinary — from kitchen to service."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-dark/5 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-premium"
              >
                <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-primary/8 transition-colors group-hover:text-primary/15">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 group-hover:from-accent group-hover:to-primary group-hover:text-black">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-dark/60">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
