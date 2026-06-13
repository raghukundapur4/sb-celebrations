import { bananaLeafMealHD } from './imageAssets'

export const homeHero = {
  badge: 'Welcome To SB Celebration\'s',
  title: 'Experience Traditional Taste With Professional Catering Services',
  subtitle:
    'Delicious, freshly prepared vegetarian meals crafted with traditional recipes and quality ingredients. We specialize in weddings, housewarming ceremonies, corporate functions, and special occasions — ensuring exceptional taste, professional service, and memorable dining for every guest.',
  primaryCta: { label: 'Book Your Event', to: '/contact' },
  secondaryCta: { label: 'View Our Menu', to: '/menu' },
}

export const homeAbout = {
  badge: 'Who We Are',
  title: 'Quality Catering For Special Occasions',
  description:
    'SB Celebration\'s offers authentic vegetarian cuisine prepared with fresh ingredients and traditional recipes. We serve weddings, housewarmings, corporate events, and family functions with hygienic preparation and reliable service to make every celebration memorable.',
  yearsLabel: '15+ Years Of Trusted Catering Service',
  features: [
    'Fresh Ingredients & Traditional Recipes.',
    'Customized Menus For Every Event.',
    'Professional & Hygienic Service.',
  ],
  image: bananaLeafMealHD.traditionalFeast,
  secondaryImage: bananaLeafMealHD.dosaOnLeaf,
}

export const homeCommitment = {
  title: 'Delicious Food Crafted With Care And Commitment',
  description:
    'We believe every meal served at your event should reflect quality, tradition, and attention to detail. We carefully select fresh ingredients, follow authentic preparation methods, and maintain high hygiene standards to deliver a dining experience that satisfies every guest.',
  stats: [
    { label: 'Exceptional Taste', value: 95 },
    { label: 'Menu Variety & Flexibility', value: 90 },
  ],
  images: [bananaLeafMealHD.leafSpread, bananaLeafMealHD.southIndianBanquet],
}

export const homeMenuPreview = [
  {
    id: 'south-indian',
    name: 'South Indian Main Course',
    items: [
      'Steamed Rice',
      'Bisibele Bath',
      'Sambar & Rasam',
      'Majjige Huli',
      'Avial & Poriyal',
      'Curd Rice & Traditional Accompaniments',
    ],
  },
  {
    id: 'north-indian',
    name: 'North Indian Main Course',
    items: [
      'Veg Biryani',
      'Butter Naan & Tandoori Roti',
      'Paneer Butter Masala',
      'Malai Kofta',
      'Dal Tadka & Raita',
    ],
  },
  {
    id: 'live-counters',
    name: 'Live Counters',
    items: ['Dosa Counter', 'Chaat Counter', 'Pav Bhaji', 'Jalebi Live', 'Ice Cream Live'],
  },
  {
    id: 'sweets',
    name: 'Traditional Sweets & Desserts',
    items: ['Gulab Jamun', 'Mysore Pak', 'Holige / Obbattu', 'Payasam Varieties', 'Rasmalai'],
  },
]

export const homeCta = {
  title: 'Planning a Special Event? Let Us Serve the Perfect Feast!',
  subtitle:
    'From grand weddings to intimate celebrations, SB Celebration\'s delivers authentic flavors, elegant presentation, and flawless service to make your event truly unforgettable.',
  buttonLabel: 'Book Your Event Today',
  buttonTo: '/contact',
}
