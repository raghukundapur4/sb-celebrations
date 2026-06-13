import { motion } from 'framer-motion'
import { ChefHat, Leaf, Star, Users } from 'lucide-react'
import { whyChooseUs } from '../data/siteConfig'
import { staggerContainer, fadeUp } from '../utils/animations'

const iconMap = {
  ChefHat,
  Leaf,
  Star,
  Users,
}

export default function WhyChooseUs() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {whyChooseUs.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="card-premium group p-6 text-center hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/20 hover:shadow-glow"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Icon size={24} />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-dark">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-dark/60">{item.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
