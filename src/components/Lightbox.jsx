import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import LazyImage from './LazyImage'

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    if (currentIndex === null) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(-1)
      if (e.key === 'ArrowRight') onNavigate(1)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [currentIndex, onClose, onNavigate])

  if (currentIndex === null || !images[currentIndex]) return null

  const image = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(-1)
          }}
          className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <LazyImage
            src={image.src}
            alt={image.alt}
            className="max-h-[85vh] w-auto"
          />
          <p className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-dark/80 to-transparent p-4 text-sm text-white/80">
            {image.alt}
          </p>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(1)
          }}
          className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
