import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, Leaf } from 'lucide-react'

function CateringItemList({ items }) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: Math.min(index * 0.015, 0.4) }}
          className="flex items-start gap-3 rounded-xl border border-dark/5 bg-cream/40 px-4 py-3.5 transition-colors hover:border-primary/20 hover:bg-white"
        >
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-heading text-xs font-bold text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm font-medium leading-snug text-dark">{item.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default function MenuTabs({ categories, showGroupIntro = true }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id)
  const activeCategory = categories.find((cat) => cat.id === activeTab)
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0)

  return (
    <div>
      {showGroupIntro && (
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <ChefHat size={20} />
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-dark">Event Catering Menu</p>
              <p className="mt-1 text-sm text-dark/60">
                {categories.length} categories · {totalItems}+ dishes available for custom event packages
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-semibold text-accent">
            <Leaf size={14} className="text-primary" />
            100% Pure Vegetarian · Customizable per event
          </div>
        </div>
      )}

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === category.id
                ? 'text-black'
                : 'bg-white text-dark/70 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {activeTab === category.id && (
              <motion.span
                layoutId="menu-category-tab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-secondary shadow-md shadow-primary/20"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{category.name}</span>
            <span className="relative z-10 ml-1.5 text-xs opacity-70">({category.items.length})</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-dark/5 bg-white p-5 shadow-card sm:p-8"
          >
            <div className="mb-6 border-b border-dark/6 pb-5">
              <h3 className="font-heading text-2xl font-semibold text-dark">{activeCategory.name}</h3>
              {activeCategory.description && (
                <p className="mt-2 text-sm text-dark/55">{activeCategory.description}</p>
              )}
            </div>
            <CateringItemList items={activeCategory.items} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
