const unsplash = (photoId, width = 800) =>
  `https://images.unsplash.com/${photoId}?w=${width}&q=80&auto=format&fit=crop`

const unsplashHD = (photoId, width = 1920) =>
  `https://images.unsplash.com/${photoId}?w=${width}&q=92&auto=format&fit=crop`

export const homeImage = `${import.meta.env.BASE_URL}home-image.jpg`

const galleryImage = (filename) => `${import.meta.env.BASE_URL}gallery/${filename}`

// Curated South Indian banana-leaf & full catering spread photography
const cateringPhotos = {
  traditionalFeast: 'photo-1596797038530-2c107229654b',
  dosaOnLeaf: 'photo-1743615467204-8fdaa85ff2db',
  leafSpread: 'photo-1742281095650-dd3c50c08772',
  southIndianBanquet: 'photo-1742281258189-3b933879867a',
  weddingSpread: 'photo-1742281257687-092746ad6021',
  riceAndCurries: 'photo-1742281257707-0c7f7e5ca9c6',
  breakfastSpread: 'photo-1742281095661-29de44440bb6',
  idliOnLeaf: 'photo-1741376509109-e9edd6f24f5f',
  idliSambarLeaf: 'photo-1741376509047-66dae5df90f9',
  bananaLeafCloseup: 'photo-1707529332935-bfa3925f15ac',
  bananaLeafTable: 'photo-1707528904076-6dbefcfe9b4d',
  bananaLeafPlatter: 'photo-1680359870490-d49895a285dd',
}

export const bananaLeafMealHD = {
  hero: homeImage,
  heroInset: unsplashHD(cateringPhotos.idliOnLeaf),
  traditionalFeast: unsplashHD(cateringPhotos.leafSpread),
  dosaOnLeaf: unsplashHD(cateringPhotos.dosaOnLeaf),
  leafSpread: unsplashHD(cateringPhotos.leafSpread),
  southIndianBanquet: homeImage,
  weddingSpread: unsplashHD(cateringPhotos.leafSpread),
}

export const homeBananaLeafGallery = [
  {
    title: 'Traditional Banana Leaf Feast',
    image: homeImage,
    caption: 'Full vegetarian sadhya served on fresh banana leaf for weddings',
    featured: true,
  },
  {
    title: 'Masala Dosa on Leaf',
    image: bananaLeafMealHD.dosaOnLeaf,
    caption: 'Live dosa counter with banana leaf plating and traditional sides',
  },
  {
    title: 'Festive Catering Spread',
    image: bananaLeafMealHD.leafSpread,
    caption: 'Colourful vegetarian curries, rice and accompaniments for celebrations',
  },
  {
    title: 'Idli on Banana Leaf',
    image: unsplashHD(cateringPhotos.idliOnLeaf),
    caption: 'Steamed idlis with chutneys served on banana leaf for ceremonies',
  },
  {
    title: 'Vegetarian Breakfast Service',
    image: unsplashHD(cateringPhotos.breakfastSpread),
    caption: 'Morning event spreads with idli, dosa and traditional breakfast items',
  },
]

export const vegSouthIndianImages = {
  masalaDosa: unsplash(cateringPhotos.dosaOnLeaf),
  dosaBananaLeaf: unsplash(cateringPhotos.dosaOnLeaf),
  idliSambar: unsplash(cateringPhotos.idliSambarLeaf),
  idliChutney: unsplash(cateringPhotos.idliOnLeaf),
  vegThali: homeImage,
  thaliSpread: homeImage,
  riceVariety: unsplash(cateringPhotos.leafSpread),
  bananaLeafMeal: homeImage,
  leafMeal: unsplash(cateringPhotos.leafSpread),
  breakfastPlatter: unsplash(cateringPhotos.breakfastSpread),
  southIndianPlate: homeImage,
  mealTray: homeImage,
  woodenTableMeal: homeImage,
  vegStreetFood: unsplash(cateringPhotos.leafSpread),
  sweets: homeImage,
  chaat: unsplash(cateringPhotos.breakfastSpread),
  filterCoffee: unsplash(cateringPhotos.breakfastSpread),
}

export const vegMealShowcase = [
  {
    title: 'Banana Leaf Wedding Feast',
    image: vegSouthIndianImages.bananaLeafMeal,
    caption: 'Full vegetarian banquet served on banana leaf for grand celebrations',
  },
  {
    title: 'Masala Dosa on Leaf',
    image: vegSouthIndianImages.dosaBananaLeaf,
    caption: 'Live dosa counter with traditional chutney and sambar on banana leaf',
  },
  {
    title: 'Idli on Banana Leaf',
    image: vegSouthIndianImages.idliChutney,
    caption: 'Steamed idlis with assorted chutneys served on fresh banana leaf',
  },
  {
    title: 'South Indian Catering Thali',
    image: vegSouthIndianImages.vegThali,
    caption: 'Complete vegetarian thali spread for weddings and ceremonies',
  },
  {
    title: 'Festive Leaf Spread',
    image: vegSouthIndianImages.leafMeal,
    caption: 'Traditional curries and rice arranged for housewarming events',
  },
  {
    title: 'Wedding Banquet Spread',
    image: vegSouthIndianImages.thaliSpread,
    caption: 'Premium vegetarian catering spread for large wedding gatherings',
  },
  {
    title: 'Rice & Curry Service',
    image: vegSouthIndianImages.riceVariety,
    caption: 'Flavoured rice and accompaniments for corporate and family events',
  },
  {
    title: 'Breakfast Catering',
    image: vegSouthIndianImages.breakfastPlatter,
    caption: 'Morning event spreads with idli, dosa and traditional breakfast items',
  },
]

export const heroImages = {
  home: homeImage,
  about: homeImage,
  menu: homeImage,
  gallery: galleryImage('banana-leaf-feast-service.jpg'),
  contact: homeImage,
}

export const galleryPhotos = {
  cateringTeam: galleryImage('catering-team.jpg'),
  sweetsBarfiLaddu: galleryImage('sweets-barfi-laddu.jpg'),
  yellowRiceLeafCups: galleryImage('yellow-rice-leaf-cups.jpg'),
  yellowSweetsTrays: galleryImage('yellow-sweets-trays.jpg'),
  fruitSaladCups: galleryImage('fruit-salad-cups.jpg'),
  bananaLeafFeastService: galleryImage('banana-leaf-feast-service.jpg'),
  masalaDosaGriddle: galleryImage('masala-dosa-griddle.jpg'),
  chocolateSaffronRolls: galleryImage('chocolate-saffron-rolls.jpg'),
  rabadiPaan: galleryImage('rabadi-paan.jpg'),
  mangoPaan: galleryImage('mango-paan.jpg'),
  fruitSkewers: galleryImage('fruit-skewers.jpg'),
  creamDessertClayBowls: galleryImage('cream-dessert-clay-bowls.jpg'),
  mirchiBajji: galleryImage('mirchi-bajji.jpg'),
  kebabSticks: galleryImage('kebab-sticks.jpg'),
  fruitCupsDisplay: galleryImage('fruit-cups-display.jpg'),
  fruitCupsCloseup: galleryImage('fruit-cups-closeup.jpg'),
  fruitCupsVariety: galleryImage('fruit-cups-variety.jpg'),
  sesameConeSnacks: galleryImage('sesame-cone-snacks.jpg'),
  spicedOkra: galleryImage('spiced-okra.jpg'),
  malaiRollClayPots: galleryImage('malai-roll-clay-pots.jpg'),
  sesameConeSnacksBatch: galleryImage('sesame-cone-snacks-batch.jpg'),
  decoratedFlowerSweets: galleryImage('decorated-flower-sweets.jpg'),
}

export const ogImage = homeImage
