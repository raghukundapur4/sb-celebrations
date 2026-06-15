import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import SectionHeading from './SectionHeading'
import LazyImage from './LazyImage'
import { homeBananaLeafGallery } from '../data/imageAssets'
import { fadeUp, staggerContainer } from '../utils/animations'

const featured = homeBananaLeafGallery.find((item) => item.featured)
const galleryItems = homeBananaLeafGallery.filter((item) => !item.featured)

export default function BananaLeafShowcase() {
  return (
    <section className="relative overflow-hidden bg-dark section-padding">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Event Catering"
          title="Banana Leaf Banquet Service"
          subtitle="From intimate housewarmings to grand wedding receptions — we serve vibrant curries, fragrant rice, and fresh accompaniments on traditional banana leaf for every celebration."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5"
        >
          {featured && (
            <motion.div
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 lg:col-span-7 lg:row-span-2"
            >
              <LazyImage
                src={featured.image}
                alt={featured.title}
                className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/25 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold tracking-wide text-white uppercase backdrop-blur-md">
                <Leaf size={14} className="text-secondary" />
                Signature Feast
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <h3 className="mb-2 font-heading text-2xl font-semibold text-white sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
                  {featured.caption}
                </p>
              </div>
            </motion.div>
          )}

          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-[1.25rem] ring-1 ring-white/10 ${
                index < 2 ? 'lg:col-span-5' : 'lg:col-span-6'
              }`}
            >
              <LazyImage
                src={item.image}
                alt={item.title}
                className="aspect-[16/10] transition-transform duration-700 group-hover:scale-105 lg:aspect-auto lg:h-full lg:min-h-[258px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
