import { googleReviewLinks, siteConfig } from './siteConfig'

export const testimonials = [
  {
    id: 1,
    name: 'Priya & Rajesh',
    event: 'Wedding Reception',
    rating: 5,
    review:
      `${siteConfig.name} made our wedding absolutely magical. The live dosa counter was a huge hit, and every dish was prepared with such care. Our guests are still talking about the food months later!`,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    googleReviewUrl: googleReviewLinks.reviewsUrl,
  },
  {
    id: 2,
    name: 'Suresh Reddy',
    event: 'Corporate Annual Meet',
    rating: 5,
    review:
      `We have used ${siteConfig.name} for three consecutive annual events. Their professionalism, punctuality, and menu quality are unmatched. The team handled 300+ guests flawlessly.`,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    googleReviewUrl: googleReviewLinks.reviewsUrl,
  },
  {
    id: 3,
    name: 'Lakshmi Devi',
    event: 'Housewarming Ceremony',
    rating: 5,
    review:
      'From menu planning to the final cleanup, everything was seamless. The traditional meal was authentic and delicious. Highly recommend for any family celebration.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    googleReviewUrl: googleReviewLinks.reviewsUrl,
  },
]
