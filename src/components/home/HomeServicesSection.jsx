import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import LazyImage from '../LazyImage'
import { services } from '../../data/servicesData'

const featuredServices = services.slice(0, 3)

export default function HomeServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            badge="Our Services"
            title="Premium Catering For Every Occasion"
            subtitle="From intimate family functions to grand celebrations — authentic vegetarian cuisine with flawless service."
            align="left"
            className="mb-0"
          />
          <Link to="/contact" className="btn-secondary shrink-0">
            Book Your Event
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[1.75rem] bg-cream shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className="relative h-56 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
                <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 font-heading text-lg font-bold text-primary shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="mb-3 font-heading text-2xl font-semibold text-dark">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-dark/60">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                >
                  Book This Service
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
