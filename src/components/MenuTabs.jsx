import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '../data/menuData'

export default function MenuTabs({ categories = menuCategories }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id)

  const activeCategory = categories.find((cat) => cat.id === activeTab)

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              activeTab === category.id
                ? 'text-white'
                : 'bg-white text-dark/70 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {activeTab === category.id && (
              <motion.span
                layoutId="menu-tab"
                className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/25"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeCategory.description && (
              <p className="mb-8 text-center text-dark/60">{activeCategory.description}</p>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeCategory.items?.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card-premium group p-5 hover:-translate-y-1 hover:shadow-premium"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-dark">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-dark/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
