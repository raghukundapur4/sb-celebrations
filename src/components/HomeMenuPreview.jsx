import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { homeMenuPreview } from '../data/homeData'

export default function HomeMenuPreview() {
  const [activeTab, setActiveTab] = useState(homeMenuPreview[0]?.id)
  const activeCategory = homeMenuPreview.find((cat) => cat.id === activeTab)

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            badge="Our Menu"
            title="Check Out Our Menu"
            subtitle="Explore our diverse culinary offerings crafted with traditional recipes and the freshest ingredients."
            align="left"
            className="mb-0"
          />
          <Link to="/menu" className="btn-secondary shrink-0">
            View Full Menu
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-dark/5 bg-white shadow-card">
          <div className="flex gap-1 overflow-x-auto border-b border-dark/6 bg-cream/50 p-2 scrollbar-hide sm:flex-wrap sm:overflow-visible">
            {homeMenuPreview.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative shrink-0 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                  activeTab === category.id
                    ? 'text-white'
                    : 'text-dark/60 hover:bg-white hover:text-emerald'
                }`}
              >
                {activeTab === category.id && (
                  <motion.span
                    layoutId="home-menu-tab"
                    className="absolute inset-0 rounded-xl bg-emerald shadow-md shadow-emerald/20"
                    transition={{ type: 'spring', bounce: 0.12, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {activeCategory.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="group flex items-center gap-3 rounded-xl border border-dark/5 bg-cream/40 px-4 py-4 transition-all hover:border-emerald/20 hover:bg-white hover:shadow-card"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald/10 font-heading text-sm font-bold text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-heading text-base font-semibold text-dark">{item}</h3>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
