import { homeImage, vegSouthIndianImages } from './imageAssets'

export const galleryImages = [
  {
    id: 1,
    src: homeImage,
    alt: 'Traditional vegetarian sadhya served on banana leaf',
    category: 'wedding',
    height: 'tall',
  },
  {
    id: 2,
    src: vegSouthIndianImages.dosaBananaLeaf,
    alt: 'Masala dosa with chutney and sambar on banana leaf',
    category: 'traditional',
    height: 'medium',
  },
  {
    id: 3,
    src: vegSouthIndianImages.idliChutney,
    alt: 'Idli with chutneys served on banana leaf',
    category: 'traditional',
    height: 'short',
  },
  {
    id: 4,
    src: homeImage,
    alt: 'Full vegetarian banana leaf feast for housewarming',
    category: 'housewarming',
    height: 'tall',
  },
  {
    id: 5,
    src: vegSouthIndianImages.leafMeal,
    alt: 'Festive vegetarian curries and rice on banana leaf',
    category: 'wedding',
    height: 'medium',
  },
  {
    id: 6,
    src: vegSouthIndianImages.idliSambar,
    alt: 'Idli and sambar vegetarian catering on banana leaf',
    category: 'corporate',
    height: 'short',
  },
  {
    id: 7,
    src: vegSouthIndianImages.dosaBananaLeaf,
    alt: 'Live dosa counter — pure vegetarian banana leaf service',
    category: 'corporate',
    height: 'medium',
  },
  {
    id: 8,
    src: vegSouthIndianImages.breakfastPlatter,
    alt: 'South Indian vegetarian breakfast catering spread',
    category: 'housewarming',
    height: 'tall',
  },
  {
    id: 9,
    src: vegSouthIndianImages.idliChutney,
    alt: 'Pooja ceremony idli with chutneys on banana leaf',
    category: 'traditional',
    height: 'short',
  },
  {
    id: 10,
    src: homeImage,
    alt: 'Wedding reception vegetarian sadhya on banana leaf',
    category: 'wedding',
    height: 'medium',
  },
  {
    id: 11,
    src: vegSouthIndianImages.leafMeal,
    alt: 'Colourful vegetarian side dishes on banana leaf',
    category: 'traditional',
    height: 'tall',
  },
  {
    id: 12,
    src: vegSouthIndianImages.breakfastPlatter,
    alt: 'Corporate event vegetarian breakfast banana leaf spread',
    category: 'corporate',
    height: 'short',
  },
]

export const galleryFilters = [
  { id: 'all', label: 'All Events' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'housewarming', label: 'Housewarming' },
  { id: 'traditional', label: 'Traditional Events' },
]
