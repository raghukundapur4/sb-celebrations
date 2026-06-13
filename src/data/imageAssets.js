const unsplash = (photoId, width = 800) =>
  `https://images.unsplash.com/${photoId}?w=${width}&q=80`

const unsplashHD = (photoId, width = 1920) =>
  `https://images.unsplash.com/${photoId}?w=${width}&q=92&auto=format&fit=crop`

export const bananaLeafMealHD = {
  hero: unsplashHD('photo-1596797038530-2c107229654b', 2400),
  traditionalFeast: unsplashHD('photo-1596797038530-2c107229654b'),
  dosaOnLeaf: unsplashHD('photo-1743615467204-8fdaa85ff2db'),
  leafSpread: unsplashHD('photo-1742281095650-dd3c50c08772'),
  southIndianBanquet: unsplashHD('photo-1742281258189-3b933879867a'),
  weddingSpread: unsplashHD('photo-1742281257687-092746ad6021'),
}

export const homeBananaLeafGallery = [
  {
    title: 'Traditional Banana Leaf Feast',
    image: bananaLeafMealHD.traditionalFeast,
    caption: 'Authentic South Indian meal served fresh on banana leaf',
    featured: true,
  },
  {
    title: 'Masala Dosa on Leaf',
    image: bananaLeafMealHD.dosaOnLeaf,
    caption: 'Crispy dosa with chutney and sambar on banana leaf',
  },
  {
    title: 'Festive Leaf Spread',
    image: bananaLeafMealHD.leafSpread,
    caption: 'Colorful curries, rice and accompaniments for celebrations',
  },
  {
    title: 'Wedding Banquet',
    image: bananaLeafMealHD.weddingSpread,
    caption: 'Grand vegetarian spread for weddings and large gatherings',
  },
  {
    title: 'South Indian Thali',
    image: bananaLeafMealHD.southIndianBanquet,
    caption: 'Complete thali with traditional sides and fresh preparations',
  },
]

export const vegSouthIndianImages = {
  masalaDosa: unsplash('photo-1589302168068-964664d93dc0'),
  dosaBananaLeaf: unsplash('photo-1743615467204-8fdaa85ff2db'),
  idliSambar: unsplash('photo-1741376509047-66dae5df90f9'),
  idliChutney: unsplash('photo-1741376509109-e9edd6f24f5f'),
  vegThali: unsplash('photo-1742281258189-3b933879867a'),
  thaliSpread: unsplash('photo-1742281257687-092746ad6021'),
  riceVariety: unsplash('photo-1742281257707-0c7f7e5ca9c6'),
  bananaLeafMeal: unsplash('photo-1596797038530-2c107229654b'),
  leafMeal: unsplash('photo-1742281095650-dd3c50c08772'),
  breakfastPlatter: unsplash('photo-1742281095661-29de44440bb6'),
  southIndianPlate: unsplash('photo-1743674453123-93356ade2891'),
  mealTray: unsplash('photo-1711153419402-336ee48f2138'),
  woodenTableMeal: unsplash('photo-1725167260486-255a40ce00e3'),
  vegStreetFood: unsplash('photo-1764699486769-fc9a8b03130a'),
  sweets: unsplash('photo-1587241328411-58a9bae7154f'),
  chaat: unsplash('photo-1601050690597-df0568f70950'),
  filterCoffee: unsplash('photo-1495474472287-4d71bcdd2085'),
}

export const vegMealShowcase = [
  {
    title: 'Masala Dosa',
    image: vegSouthIndianImages.masalaDosa,
    caption: 'Golden crispy dosa with coconut chutney and sambar',
  },
  {
    title: 'Idli & Sambar',
    image: vegSouthIndianImages.idliSambar,
    caption: 'Soft steamed idlis in aromatic lentil sambar',
  },
  {
    title: 'Tamil Veg Thali',
    image: vegSouthIndianImages.vegThali,
    caption: 'Traditional vegetarian lunch thali with curries and rice',
  },
  {
    title: 'Banana Leaf Feast',
    image: vegSouthIndianImages.bananaLeafMeal,
    caption: 'Authentic South Indian meal served on fresh banana leaf',
  },
  {
    title: 'Idli with Chutneys',
    image: vegSouthIndianImages.idliChutney,
    caption: 'Fluffy idlis with coconut, tomato and mint chutneys',
  },
  {
    title: 'Dosa on Banana Leaf',
    image: vegSouthIndianImages.dosaBananaLeaf,
    caption: 'Masala dosa plated on banana leaf with classic sides',
  },
  {
    title: 'Full Veg Spread',
    image: vegSouthIndianImages.thaliSpread,
    caption: 'Complete vegetarian thali with rice, dal and sides',
  },
  {
    title: 'South Indian Breakfast',
    image: vegSouthIndianImages.breakfastPlatter,
    caption: 'Hearty morning platters with idli, dosa and filter coffee',
  },
]

export const heroImages = {
  home: bananaLeafMealHD.hero,
  about: unsplash('photo-1742281258189-3b933879867a', 1920),
  services: unsplash('photo-1742281257687-092746ad6021', 1920),
  menu: unsplash('photo-1741376509047-66dae5df90f9', 1920),
  gallery: unsplash('photo-1741376509109-e9edd6f24f5f', 1920),
  contact: unsplash('photo-1742281257707-0c7f7e5ca9c6', 1920),
}

export const ogImage = unsplash('photo-1743615467204-8fdaa85ff2db', 1200)
