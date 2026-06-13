import { getGoogleReviewLinks } from '../utils/googleReviews'

export const siteConfig = {
  name: "SB Celebration's",
  serviceLine: 'Caterers & Wedding Planners',
  tagline: 'Crafting Memorable Feasts For Every Celebration',
  vegBadge: '100% Pure Vegetarian',
  description:
    '100% pure vegetarian catering and wedding planning for weddings, housewarming ceremonies, corporate events, poojas and family celebrations in Bengaluru.',
  phone: '+91 97310 09044',
  whatsapp: '919731009044',
  email: '',
  website: 'https://sbcelebrations.com',
  address:
    'No 624/3, 1st Cross, KEB Road, Ittamadu, Banashankari 3rd Stage, Bengaluru, Karnataka 560085',
  addressShort: 'No 624/3, 1st Cross, KEB Road, Ittamadu, Banashankari 3rd Stage',
  logo: '/logo.png',
  founded: 2010,
  googleReviews: {
    // Paste your real Google Maps links here when available.
    placeId: '',
    profileUrl: '',
    writeReviewUrl: '',
    reviewsUrl: '',
    rating: 4.9,
    reviewCount: 500,
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.842!2d78.407!3d17.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzU1LjIiTiA3OMKwMjQnMjUuMiJF!5e0!3m2!1sen!2sin!4v1700000000000',
}

export const googleReviewLinks = getGoogleReviewLinks({
  ...siteConfig.googleReviews,
  placeName: siteConfig.name,
  address: siteConfig.address,
})

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export const whyChooseUs = [
  {
    icon: 'ChefHat',
    title: 'Authentic Recipes',
    description: 'Time-honored South Indian recipes crafted with culinary expertise passed down through generations.',
  },
  {
    icon: 'Leaf',
    title: '100% Vegetarian Kitchen',
    description: 'A fully vegetarian kitchen with no meat or fish — only fresh vegetables, grains, and authentic spices.',
  },
  {
    icon: 'Star',
    title: 'Professional Team',
    description: 'Experienced chefs and service staff ensuring flawless execution at every event.',
  },
  {
    icon: 'Users',
    title: '1000+ Events Catered',
    description: 'Trusted by families and corporations for over a decade of memorable celebrations.',
  },
]

export const aboutFeatures = [
  '100% Pure Vegetarian',
  'Fresh Ingredients',
  'Hygienic Preparation',
  'Custom Menus',
  'Timely Service',
]

export const stats = [
  { value: 1000, suffix: '+', label: 'Events Catered' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Menu Categories' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
]

export const missionVisionValues = [
  {
    title: 'Our Mission',
    description:
      'To deliver exceptional vegetarian catering experiences that honor tradition while embracing modern presentation and service excellence.',
    icon: 'Target',
  },
  {
    title: 'Our Vision',
    description:
      'To be the most trusted premium catering brand in South India, celebrated for authenticity, hygiene, and unforgettable hospitality.',
    icon: 'Eye',
  },
  {
    title: 'Our Values',
    description:
      'Integrity in sourcing, respect for tradition, attention to detail, and a genuine commitment to making every guest feel valued.',
    icon: 'Heart',
  },
]

export const timeline = [
  { year: '2010', title: 'Humble Beginnings', description: 'Started as a family kitchen serving local community events.' },
  { year: '2014', title: 'First Major Wedding', description: 'Catered our first 500-guest wedding, establishing our reputation.' },
  { year: '2017', title: 'Corporate Expansion', description: 'Launched dedicated corporate catering division for businesses.' },
  { year: '2020', title: 'Live Counter Innovation', description: 'Introduced premium live counters and interactive food stations.' },
  { year: '2024', title: 'Regional Recognition', description: 'Recognized as a leading premium vegetarian catering brand.' },
]

export const trustPoints = [
  'ISO-compliant kitchen practices',
  'Trained and uniformed service staff',
  'Transparent pricing with no hidden costs',
  'Dedicated event coordinator for every booking',
  'Flexible menu customization',
  'On-time setup and service guarantee',
]

export const eventTypes = [
  'Wedding',
  'Housewarming',
  'Corporate Event',
  'Birthday',
  'Pooja / Religious',
  'Other',
]
