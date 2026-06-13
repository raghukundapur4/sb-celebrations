import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LazyImage from './LazyImage'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-premium group overflow-hidden hover:-translate-y-2 hover:shadow-premium"
    >
      <div className="relative h-52 overflow-hidden">
        <LazyImage
          src={service.image}
          alt={service.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-heading text-xl font-semibold text-dark">
          {service.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-dark/60">
          {service.description}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary"
        >
          Learn More
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
