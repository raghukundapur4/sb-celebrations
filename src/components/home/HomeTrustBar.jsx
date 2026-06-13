import { motion } from 'framer-motion'
import { Award, CalendarHeart, Star, UtensilsCrossed } from 'lucide-react'
import { siteConfig, stats } from '../../data/siteConfig'
import { staggerContainer, fadeUp } from '../../utils/animations'

const icons = [CalendarHeart, UtensilsCrossed, Award, Star]

export default function HomeTrustBar() {
  return (
    <section className="relative z-20 -mt-16 pb-4 sm:-mt-20">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-3 rounded-3xl border border-dark/5 bg-white p-4 shadow-premium sm:grid-cols-4 sm:gap-0 sm:p-0 lg:rounded-[2rem]"
        >
          {stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className={`flex flex-col items-center px-4 py-5 text-center sm:py-8 ${
                  index < stats.length - 1 ? 'sm:border-r sm:border-dark/6' : ''
                }`}
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald/8 text-emerald">
                  <Icon size={20} />
                </div>
                <p className="font-heading text-2xl font-bold text-dark sm:text-3xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-xs font-medium text-dark/50 sm:text-sm">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <p className="mt-4 text-center text-xs text-dark/40">
          Trusted by families across South India since {siteConfig.founded}
        </p>
      </div>
    </section>
  )
}
