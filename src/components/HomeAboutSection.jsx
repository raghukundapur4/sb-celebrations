import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import LazyImage from './LazyImage'
import { siteConfig } from '../data/siteConfig'
import { homeAbout } from '../data/homeData'
import { slideLeft, slideRight } from '../utils/animations'

export default function HomeAboutSection() {
  const yearsSince = new Date().getFullYear() - siteConfig.founded

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 hidden h-full w-full rounded-[2rem] border-2 border-primary/20 lg:block" />
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-premium">
              <LazyImage
                src={homeAbout.image}
                alt="Traditional banana leaf vegetarian feast"
                className="aspect-[4/5]"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 hidden overflow-hidden rounded-2xl border-4 border-white shadow-float sm:block sm:-right-8 sm:-bottom-8 sm:w-48 lg:w-56">
              <LazyImage
                src={homeAbout.secondaryImage}
                alt="Masala dosa served on banana leaf"
                className="aspect-square"
              />
            </div>
            <div className="absolute -top-4 -left-4 rounded-2xl bg-emerald px-6 py-5 text-white shadow-float sm:-top-6 sm:-left-6">
              <p className="font-heading text-4xl font-bold leading-none">{yearsSince}+</p>
              <p className="mt-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-badge">{homeAbout.badge}</span>
            <span className="section-accent-line mt-4 mb-5 block" />
            <h2 className="heading-section mb-5">{homeAbout.title}</h2>
            <p className="mb-8 text-base leading-relaxed text-dark/60">{homeAbout.description}</p>

            <div className="mb-8 rounded-2xl border border-emerald/10 bg-emerald/5 p-5">
              <h3 className="mb-4 font-heading text-xl font-semibold text-emerald">
                {homeAbout.yearsLabel}
              </h3>
              <ul className="space-y-3">
                {homeAbout.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium text-dark/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about" className="btn-outline-dark">
              Read More About Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
