import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import SectionHeading from './SectionHeading'
import LazyImage from './LazyImage'
import { vegMealShowcase } from '../data/imageAssets'
import { staggerContainer, fadeUp } from '../utils/animations'

export default function VegMealsShowcase() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-light">
      <div className="container-custom">
        <SectionHeading
          badge="100% Pure Vegetarian"
          title="Authentic South Indian Veg Meals"
          subtitle="Every dish is prepared in our fully vegetarian kitchen — from crispy dosas and fluffy idlis to traditional thali spreads on banana leaf."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {vegMealShowcase.map((meal) => (
            <motion.div
              key={meal.title}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={meal.image}
                  alt={meal.title}
                  className="aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  <Leaf size={12} />
                  Pure Veg
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-heading text-lg font-semibold text-dark">
                  {meal.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark/60">{meal.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
