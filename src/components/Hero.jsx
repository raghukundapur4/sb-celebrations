import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '../utils/animations'

export default function Hero({
  badge,
  title,
  subtitle,
  backgroundImage,
  primaryCta = { label: 'Book Your Event', to: '/contact' },
  secondaryCta = { label: 'View Our Menu', to: '/menu' },
  fullScreen = true,
  overlay = true,
}) {
  return (
    <section className={`relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'min-h-[50vh]'}`}>
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {overlay && <div className="image-overlay" />}
      </div>

      <div className={`relative z-10 flex items-center ${fullScreen ? 'min-h-screen' : 'min-h-[50vh]'} section-padding pt-32`}>
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {badge && (
              <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-secondary backdrop-blur-sm">
                {badge}
              </span>
            )}
            <h1 className="heading-display mb-6 text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {subtitle}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              {primaryCta.external ? (
                <a href={primaryCta.to} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {primaryCta.label}
                  <ArrowRight size={16} />
                </a>
              ) : (
                <Link to={primaryCta.to} className="btn-primary">
                  {primaryCta.label}
                  <ArrowRight size={16} />
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to} className="btn-outline">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {fullScreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-2 w-1 rounded-full bg-white/80"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
