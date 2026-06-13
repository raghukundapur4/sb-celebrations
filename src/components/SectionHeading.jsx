import { motion } from 'framer-motion'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 flex flex-col gap-4 ${alignClass} ${className}`}
    >
      {badge && (
        <>
          <span className={light ? 'section-badge-light' : 'section-badge'}>{badge}</span>
          <span className={`section-accent-line ${light ? 'opacity-80' : ''}`} />
        </>
      )}
      <h2 className={`heading-section max-w-3xl ${light ? 'text-white' : 'text-dark'}`}>{title}</h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/75' : 'text-dark/55'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
