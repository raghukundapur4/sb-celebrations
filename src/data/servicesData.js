import { vegSouthIndianImages } from './imageAssets'

export const services = [
  {
    id: 'wedding',
    title: 'Wedding Catering',
    description:
      'Elegant multi-course feasts for your special day with traditional South Indian spreads, live counters, and impeccable service.',
    image: vegSouthIndianImages.vegThali,
    features: ['Custom menu planning', 'Live dosa & chaat counters', 'Dedicated wedding coordinator'],
  },
  {
    id: 'housewarming',
    title: 'Housewarming Catering',
    description:
      'Warm, welcoming meals for griha pravesham and housewarming ceremonies with authentic home-style flavors.',
    image: vegSouthIndianImages.idliChutney,
    features: ['Traditional meal service', 'Compact to large gatherings', 'Timely delivery'],
  },
  {
    id: 'corporate',
    title: 'Corporate Catering',
    description:
      'Professional catering for conferences, office celebrations, and business events with premium presentation.',
    image: vegSouthIndianImages.idliSambar,
    features: ['Buffet & plated service', 'Dietary accommodations', 'Punctual corporate setup'],
  },
  {
    id: 'birthday',
    title: 'Birthday Catering',
    description:
      'Delightful spreads for birthday celebrations with kid-friendly options, sweets, and themed menu choices.',
    image: vegSouthIndianImages.sweets,
    features: ['Custom cake coordination', 'Fun live counters', 'Flexible guest counts'],
  },
  {
    id: 'religious',
    title: 'Upanayanam & Pooja Events',
    description:
      'Sacred ceremony catering with sattvic preparations, traditional thali service, and respectful presentation.',
    image: vegSouthIndianImages.bananaLeafMeal,
    features: ['Sattvic menu options', 'Traditional serving style', 'Ceremony-appropriate timing'],
  },
  {
    id: 'outdoor',
    title: 'Outdoor Catering',
    description:
      'Full-service outdoor event catering with portable kitchen setup, weather-ready logistics, and premium menus.',
    image: vegSouthIndianImages.dosaBananaLeaf,
    features: ['On-site kitchen setup', 'Large capacity service', 'Garden & venue catering'],
  },
]

export const packages = [
  {
    name: 'Silver Package',
    price: 'From ₹350/person',
    description: 'Perfect for intimate gatherings with essential South Indian favorites.',
    includes: ['2 main courses', '1 live counter', 'Dessert & beverages', 'Basic service staff'],
  },
  {
    name: 'Gold Package',
    price: 'From ₹550/person',
    description: 'Ideal for weddings and housewarming events with expanded menu variety.',
    includes: ['4 main courses', '2 live counters', 'Premium sweets', 'Dedicated coordinator'],
    featured: true,
  },
  {
    name: 'Platinum Package',
    price: 'From ₹850/person',
    description: 'Ultimate luxury experience with full customization and premium presentation.',
    includes: ['Unlimited menu selection', '3+ live counters', 'Premium dessert bar', 'Full event team'],
  },
]
