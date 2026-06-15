import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Phone } from 'lucide-react'
import { homeHero } from '../../data/homeData'
import { bananaLeafMealHD } from '../../data/imageAssets'
import { siteConfig } from '../../data/siteConfig'
import { fadeUp } from '../../utils/animations'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient">
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-48 -left-32 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center section-padding pb-32 pt-28 lg:pb-40">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <span className="section-badge-light mb-6 inline-flex">{homeHero.badge}</span>
              <h1 className="heading-display mb-6 text-white">
                Experience{' '}
                <span className="text-gradient italic">Traditional Taste</span>
                <br />
                With Professional Catering
              </h1>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {homeHero.subtitle}
              </p>

              <div className="mb-10 flex flex-wrap gap-4">
                <Link to={homeHero.primaryCta.to} className="btn-primary">
                  {homeHero.primaryCta.label}
                  <ArrowRight size={16} />
                </Link>
                <Link to={homeHero.secondaryCta.to} className="btn-outline">
                  {homeHero.secondaryCta.label}
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
                  <Leaf size={15} className="text-secondary" />
                  <span className="text-xs font-semibold text-white/90">{siteConfig.vegBadge}</span>
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  <Phone size={15} className="text-secondary" />
                  {siteConfig.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-[2rem] shadow-float ring-1 ring-white/20">
                <img
                  src={bananaLeafMealHD.hero}
                  alt="Traditional South Indian sadhya served on banana leaf"
                  className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-white p-4 shadow-float sm:-left-8 sm:p-5"
              >
                <p className="font-heading text-3xl font-bold text-primary">
                  {siteConfig.googleReviews.rating}
                  <span className="text-secondary">★</span>
                </p>
                <p className="text-xs font-medium text-dark/55">
                  {siteConfig.googleReviews.reviewCount}+ Google Reviews
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-3 hidden overflow-hidden rounded-2xl border-4 border-white/90 shadow-float sm:block sm:h-28 sm:w-28 lg:h-36 lg:w-36"
              >
                <img
                  src={bananaLeafMealHD.heroInset}
                  alt="Idli with chutneys served on banana leaf"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <div className="absolute -right-2 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-dashed border-primary/40 lg:block" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L60 65C120 50 240 20 360 15C480 10 600 30 720 35C840 40 960 30 1080 25C1200 20 1320 20 1380 20L1440 20V80H0Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  )
}
