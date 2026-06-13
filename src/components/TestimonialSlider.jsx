import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonialData'
import GoogleReviewsCTA from './GoogleReviewsCTA'
import 'swiper/css'
import 'swiper/css/pagination'

export default function TestimonialSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex h-full flex-col rounded-2xl border border-dark/5 bg-white p-7 shadow-card transition-shadow hover:shadow-premium">
              <Quote size={36} className="mb-5 text-primary/25" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-dark/70 sm:text-base">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-dark/6 pt-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-base font-semibold text-dark">{testimonial.name}</p>
                  <p className="text-xs text-dark/50">{testimonial.event}</p>
                </div>
              </div>
              <a
                href={testimonial.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-accent"
              >
                View on Google
                <ExternalLink size={12} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <GoogleReviewsCTA className="mt-8" />
    </motion.div>
  )
}
