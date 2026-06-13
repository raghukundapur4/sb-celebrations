import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LazyImage from './LazyImage'
import Lightbox from './Lightbox'

const heightClasses = {
  short: 'row-span-1',
  medium: 'row-span-2',
  tall: 'row-span-3',
}

export default function GalleryGrid({
  images,
  showFilters = false,
  filters = [],
  columns = 3,
  limit,
}) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredImages = useMemo(() => {
    let result = images
    if (showFilters && activeFilter !== 'all') {
      result = result.filter((img) => img.category === activeFilter)
    }
    if (limit) {
      result = result.slice(0, limit)
    }
    return result
  }, [images, activeFilter, showFilters, limit])

  const handleNavigate = (direction) => {
    setLightboxIndex((prev) => {
      const next = prev + direction
      if (next < 0) return filteredImages.length - 1
      if (next >= filteredImages.length) return 0
      return next
    })
  }

  const gridCols =
    columns === 4
      ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4'
      : 'columns-1 sm:columns-2 lg:columns-3'

  return (
    <>
      {showFilters && filters.length > 0 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-dark/70 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className={gridCols}>
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`mb-4 break-inside-avoid ${heightClasses[image.height] || ''}`}
            >
              <button
                onClick={() => setLightboxIndex(index)}
                className="group relative w-full overflow-hidden rounded-2xl"
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="aspect-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-dark/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">{image.alt}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={handleNavigate}
      />
    </>
  )
}
