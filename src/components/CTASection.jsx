import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = "Let's Create an Unforgettable Event Together",
  subtitle = 'Tell us about your celebration and receive a personalized quote within 24 hours.',
  buttonLabel = 'Get Free Quote',
  buttonTo = '/contact',
  variant = 'dark',
}) {
  const isDark = variant === 'dark'

  return (
    <section className={`section-padding ${isDark ? 'bg-dark' : 'bg-primary/5'}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 ${
            isDark
              ? 'bg-gradient-to-br from-accent/80 via-dark to-dark border border-white/10'
              : 'bg-white border border-primary/10 shadow-premium'
          }`}
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className={`heading-section mb-4 ${isDark ? 'text-white' : 'text-dark'}`}>
              {title}
            </h2>
            <p className={`mb-8 text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-dark/60'}`}>
              {subtitle}
            </p>
            <Link to={buttonTo} className="btn-primary">
              {buttonLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
