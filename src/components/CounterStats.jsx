import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ value, suffix, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-dark/60">{label}</p>
    </motion.div>
  )
}

export default function CounterStats({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat) => (
        <Counter
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </div>
  )
}
