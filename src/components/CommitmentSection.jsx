import { motion } from 'framer-motion'
import LazyImage from './LazyImage'
import { homeCommitment } from '../data/homeData'
import { slideLeft, slideRight } from '../utils/animations'

function ProgressBar({ label, value, delay = 0 }) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="mb-2.5 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-dark">{label}</span>
        <span className="font-heading text-xl font-bold text-emerald">{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-dark/6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
          className="progress-bar-fill h-full rounded-full"
        />
      </div>
    </div>
  )
}

export default function CommitmentSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="section-badge">Our Commitment</span>
            <span className="section-accent-line mt-4 mb-5 block" />
            <h2 className="heading-section mb-5">{homeCommitment.title}</h2>
            <p className="mb-10 text-base leading-relaxed text-dark/60">{homeCommitment.description}</p>
            {homeCommitment.stats.map((stat, index) => (
              <ProgressBar key={stat.label} label={stat.label} value={stat.value} delay={index * 0.15} />
            ))}
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="overflow-hidden rounded-[1.5rem] shadow-card">
                <LazyImage
                  src={homeCommitment.images[0]}
                  alt="Festive banana leaf meal spread"
                  className="aspect-[3/4]"
                />
              </div>
              <div className="overflow-hidden rounded-[1.5rem] pt-10 shadow-card">
                <LazyImage
                  src={homeCommitment.images[1]}
                  alt="South Indian banana leaf thali banquet"
                  className="aspect-[3/4]"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 z-10 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald to-emerald-light font-heading text-xl font-bold text-white shadow-float">
              SB
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
