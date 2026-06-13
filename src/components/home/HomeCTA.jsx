import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { homeCta } from '../../data/homeData'
import { bananaLeafMealHD } from '../../data/imageAssets'
import { siteConfig } from '../../data/siteConfig'

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bananaLeafMealHD.traditionalFeast}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-emerald/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="section-badge-light mb-6 inline-flex">Get Started</span>
            <h2 className="heading-section mb-5 text-white">{homeCta.title}</h2>
            <p className="mb-10 text-base leading-relaxed text-white/75 sm:text-lg">{homeCta.subtitle}</p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to={homeCta.buttonTo} className="btn-primary">
                {homeCta.buttonLabel}
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="btn-outline"
              >
                <Phone size={16} />
                Call {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
