import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const text = fs.readFileSync(path.join(__dirname, '../menu.md'), 'utf8')
const lines = text.split('\n')

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bDhal\b/g, 'Dhal')
    .replace(/\bIdli\b/g, 'Idli')
    .replace(/\bDosa\b/g, 'Dosa')
}

const ITEM_SPLIT =
  /\s+(?=(?:FALUDA|GULKAND|CHOCOLATE|PISTACHIO|KIWI|FRUIT|BUTTERSCOTCH|FRESH|ARABIAN|GRAPE MINT|KESAR BADAM|BADAM MILK|DRY FRUIT|JALAPEÑO|MUSHROOM|CORN CHEESE|MIX VEG|MINT CHEESE|CRISPY PANEER|PANEER TIKKA|BABYCORN|FRENCH FRIES|POTATO WEDGES|KIMIYA|COFFEE BURFY|MINI ANGOOR|MINI CASHEW|MINI FLAVORED|CHEESE PINEAPPLE|TOMOTO SOUP|VEG CLEAR|FRENCH ONION|CREAM OF|WATERMELON COLD|CUCUMBER COLD|CREAM RASGULLA|MANGO RASGULLA|STRAWBERRY RASGULLA|LICHI RASGULLA|CREAM CHUM|PENI CHUM|RUSK CREAM|ROSE CHUM|KESAR CHUM|CHOCOLATE CHUM|MADKA KESAR|PINEAPPLE MALAI|PAPPAYA PAN|STRAWBERRY PETA|MANGO PETA|ORANGE PETA|GLASS SANDWICH|PETA SANDWICH|PAPPAYA ROLL|NAVARTHNA PETA|MANGO MALAI|LICHI FLOT|TAWA MIX|KAAJU DIAMOND|KAAJU PISTACHIO|KAAJU ALMOND|KAAJU STRAWBERRY|KAAJU PINEAPPLE|KAAJU MANGO|KAAJU WATERMELON|KAAJU SAMOSA|KAAJU JAMOON|KAAJU FLOWER|KESAR CHAMPAKALI|STRAWBERRY CHAMPAKALI|ROSE CHAMPAKALI|LICHI GULLA|STRAWBERRY GULLA|MANGO GULLA|KHEER KADAM|KAJU PINEAPPLE|ALMOND BURFY|SWEET ALMOND|ALMOND DIAMOND|ALMOND PISTACHIO|ALMOND STRAWBERRY|ALMOND CUBE|ALMOND KAAJU|ALMOND MANGO|TIRANGA ALMOND|STRAWBERRY KHEER|MANGO KHEER|KESAR KHEER|ANGoor MALAI|RABADI TOAST|RASMADHURI|PISTACHIO DIAMOND|PISTACHIO BADAM|PISTACHIO CUBE|PISTACHIO STRAWBERRY|PISTACHIO CASHEW|PISTACHIO VANILLA|DRY FRUIT DELIGHT|DRY FRUITS SANDWICH|ANJOOR DRY|DRY FRUIT ROLL|DRY FRUIT DIAMOND|COCONUT HOLIGE|DHAL HOLIGE|CARROT HOLIGE|KADLEBELE HOLIGE|KOVA HOLIGE|KASHI HALWA HOLIGE|FIG HOLIGE|DATES HOLIGE|GULKAND HOLIGE|50 50|PINEAPPLE HOLIGE|ALMOND HOLIGE|SAJJIGE HOLIGE|JAMOON HOLIGE|CHOCO CHIP|CHOCOLATE VENILA|BRU COFFEE|CATERERS GULKAND|BOONDI BURFY|HORLICKS BURFY|BOOST BURFY|FIG BURFY|KOVA DRY|MANGO BURFY|STRAWBERRY BURFY|VENILA BURFY|MILK BURFY|TIRANGA|CARROT HALWA|KASHI HALWA|ALMOND HALWA|FIG HALWA|MOONGDAL HALWA|DRY FRUIT HALWA|SOREKAI HALWA|TAWA HALWA|BEETROOT HALWA|JACKFRUIT HALWA|CHAINA GRASS|BOMBAY HALWA|PISTACHIO HALWA|SHAVIGE PAYASA|BASMATI RICE|SABBAKI PAYASA|SHAVIGE \+|SABBAKI \+|SABBAKKI \+|DRY FRUITS PAYASA|DATES PAYASA|MOONGDAL PAYASA|JACKFRUIT PAYASA|BROKEN WHEAT|MACARONI PAYASA|STRAWBERRY PAYASA|LICHI PAYASA|RAWA PAYASA|ALMOND PAYASA|KESAR PENI|PUDI PENI|CHIROTI LAADU|MOTHICHOOR LAADU|SPECIAL GHEE|TIRUPATI LAADU|DRY FRUITS LAADU|RAVA LAADU|CHANDRAHARA|BHADSHAHA|BADAMPURI|CHANDRAKALA|MYSOREPAK|SPECIAL MYSORE|MILK MYSORE|HORLICS MYSORE|DRY JAMOON|GULAB JAMOON|KOVA JAMOON|JAHANGIR|JILEBI|PINEAPPLE JILEBI|GRAPE JILEBI|STRAWBERRY JILEBI|JACKFRUIT JILEBI|SOANPAPDI|GANESHA KADABU|SUKKINA HUNDE|KAJJAYA|BASUNDI|LICHI BASUNDI|PINEAPPLE BASUNDI|STEAMED COCONUT|PANEER GHEE|SCHEZWAN PANEER|CATERERS PANEER|PANEER CHILLI|PANEER MANCHURIAN|PANEER 65|PANEER PEPPER|PANEER PUDINA|TAWA SUBJI|PANEER KABAB|GOBI MANCHURIAN|GOBI 65|GOBI CHILLI|GOBI PEPPER|MASHROOM GHEE|MASHROOM CHILLI|MASHROOM MANCHURIAN|MASHROOM 65|MASHROOM PEPPER|MINT MASHROOM|SCHEZWAN MASHROOM|BABY CORN LOLLIPOP|BABY CORN MANCHURIAN|BABY CORN PEPPER|BABY CORN CHILLI|MINT BABY|CHILLI BAJJI|CHEESE CHILLI|RAW BANANA BAJJI|ALOO BAJJI|HIREKAI BAJJI|CAPSICUM BAJJI|VEG ALOO|ALOO BONDA|ONION PAKODA|MADDUR VADA|MASALA VADA|UDDINA VADA|DAHI VADA|DRY NUTS|MANGLORE BAJJI|RAW BANANA RAWA|BADANEKAI RAWA|GREEN LEAVES|CORN BONDA|RAW JACK|ALOO KABAB|HARABARA KEBEB|BABY CORN BAJJI|VEG KATLET|CHEESE BALLS|CATERERS PANEER|VEG SPRING|ALOO CHILL|LADY FINGER|RAW JACKFRUIT|MASALA DOSA|VEG BALL|ALOO MANCHURIAN|SET DOSA|CHUTNEY PUDI|SPANISH MANCHURIAN|SUVARNA GADDE|SAMOSA TAWA|MIX VEG DOSA|NEER DOSA|KAALI DOSA|SAGU MASALA|CARROT DOSA|RAGI DOSA|PANEER DOSA|MULBAGILU DOSA|AKKI ROTI|TAWA NAAN|NAAN|RAGI ROTTI|MOON ROTI|JOLADA ROTI|MEETI CHAPATI|CHAPATI|POORI|PALAK POORI|BEETROOT POORI|MINT POORI|RAGI MUDDE|BILI HOLIGE|ALOO HOLIGE|BUTTER GARLIC|CORIANDER NAAN|ROOMALI ROTI|PALAK ROOMALI|MINT ROOMALI|BEETROOT ROOMALI|KULCHA|CARROT KULCHA|CORIANDER KULCHA|BUTTER GARLIC KULCHA|PALAK KULCHA|PULKA|BUTTER PULKA|ALOO PARATA|PANEER PARATA|CHANNA BATHURA|METHI ROTI|COIN PAOTA|SILVAN PAROTA|VERITIES STUFFED|RICE IDLI|SABBAKI IDLI|RAW IDLI|TATTE IDLI|CATERERS AVREKAI|KOTTE IDLI|CUP IDLI|BUTTON IDLI|CARROT IDLI|CORN IDLI|STEAMED SPICY|ONION CUCUMBER|ONION TOMOTO|BOONDI RAITA|PINEAPPLE RAITA|VEG RAITA|FRUITS RAITA|DHAL MAKNI|DHAL FRY|DHAL TADKA|DHAL PALAK|CHANNA MASALA|CHANNA PEAS|PANEER BUTTER|NAWABI PANEER|PALAK PANEER|VEG PANEER|PANEER KADAI|PANEER BURGI|PANEER MALAI|COCONUT CHUTNEY|TOORDAL CHUTNEY|MALAI KOFTA|MINT CHUTNEY|VEG KOFTA|TOMOTO CHUTNEY|MASHROOM KOFTA|ONION CHUTNEY|PANEER KOFTA|CORIANDER CHUTNEY|ALOO KOFTA|CURRY LEAF CHUTNEY|TONDEKAI CHUTNEY|SWEET PUMPKIN CHUTNEY|UCCHELLU CHUTNEY|MASHROOM KADAI|SHENGA CHUTNEY|MASHROOM CAPSICUM|MASHROOM PANEER|CATERER MASHROOM|MASHROOM CORN|VEG DHUM|MUSHROOM BIRIYANI|MADKA DHUM|VEG HYDRABADI DHUM|MENTYA PULAV|VEG PULAV|PALAK PULAV|PUDINA PULAV|GHEE RICE|JEERA RICE|PALAK CORN|PEAS CORN|NAVARATHNA PULAV|CORN DHUM|DRY FRUITS BIRIYANI|MUTTER PANEER|VEG ANDI|CAPSICUM DHUM|PEAS PULAV|BISIBELEBATH|LIME CHITRANNA|PULIYOGARE|CASHEW & VEG|RAW MANGO CHITRANNA|TOMOTO RICE|COCONUT RICE|DOUBLE BEANS|VANGEEBATH|ALSANDE HUSLI|CHANNA HUSLI|BEETROOT PALYA|BENDI PEPPER|VEG KOLHAPURI|VEG KADAI|VEG HYDRABADI|VEG MALAI KURMA|VEG CAPSICUM|CORIANDER CURRY|CAPSICUM MASALA|CORN PALAK|ALOO BUTTER|DHUM ALOO|MYSORE RASAM|HOLIGE RASAM|MADRAS RASAM|LIME RASAM|JEERA RASAM|PEPPER RASAM|RAW MANGO RASAM|BEETROOT RASAM|APPEMIDI RASAM|PINEAPPLE GOJJU|CAPSICUM GIJJU|GRAPES GOJJU|MANGO GOJJU|MAJJIGE HULI|WHITE RICE|CURD RICE|SANDIGE HULI|VEGETABLE HULI|CATERERS VEGETABLE|BEANS PALYA|MIX VEG PALYA|BENDY FRY|ALOO FINGER|ALOO  & CAPSICUM|TONDEKAI & CASHEW|TONDEKAI FRY|GORIKAI PALYA|KALULI|BENDEKAI MAJJIGE|SOUTH INDIAN SIDES|CURDS|BUTTER MILK|MANGO PICKLE|MIX VEG PICKLE|GREEN VEG|GREEN MANGO|LEMON PICKLE|CAPSICUM PICKLE|CARROT PICKLE|HESRUKAL HUSLI|BLACK CHANNA|PEPPER PAPAD|PLAIN PAPAD|RICE PAPAD|MASALA PAPAD|SANDIGE HARALU|SANDIGE MAJJIGE|MENASINAKAI|SABBAKI SANDIGE|STICK PAPAD|FRIEMS|IDLI \/ VADA|RAWA IDLI \/|SABBAKKI IDLI \/|MASALA IDLI \/|TATTE IDLI \/|KHARABHAT \/|SHAVIGEBHAT GOJJU|AVALAKKI|KHARA PONGAL|SWEET PONGAL|CARROT HALWA KASHI|POORI \/|SET DOSA|MASALA DOSA PADDU|VEG NOODLES|SCHEZWAN NOODLES|HAKKA NOODLES|SINGAPORIAN|VEG FRIED|MUSHROOM FRIED|SCHEZWAN FRIED|PANEER FRIED|MIX BAJJI|MANGLORE BAJJI|PALAK CORN FRIED|BONDA SOUP|ONION PAKODA|SHAVIGEBHAT \/|CHOW CHOW|MADDUR VADA \/|RAWA VANGEEBATH|RAVA VADA|PENNE PASTA|MACARONI PASTA|PIZZA|VEG CUTLET|VEG SAMOSA|CORN SAMOSA|TOMATO RED|WHITE SAUCE|PINK SAUCE|COFFEE \/ TEA|GREEN TEA \/|BADAM MILK|MOONGDAL KOSAMBARI|SPROUTS KOSAMBARI|PENUT MASALA|SWEET CORN \+|DRY FRUIT KOSAMBRI|JACKFRUIT STUFF|PANEER STUFF|ALOO CHANNA|FRESH FRUIT|FRESH VEG|MADKA KESAR KULFY|STICK KULFY|GUDBUD|HOT CHOCOLATE|ROASTED ALMOND|RAJBHOG|PIZZA DRY|DIP IN ICE|BENNE GULKAND|GOLDEN CHERRY|CASSATA 2|FRIED ICE|POP CORN|RUSSIAN SALAD|COLESLAW|MAXICAN SALAD|MACARONI  PASTA|CUCUMBER SALAD|STONE ICE|SHAHI KUSH|GUAVA|CUP \/ SLICE|VENILLA|STRAWBERRY|TUTTYFRUTTY|AMERICAN VENILLA|PINEAPPLE|KESAR|BUTTERSCOTCH|GULKAND|NUTS AND FRUIT|CHOCOLATE MANGO|CHOCO CHIP|COFFEE|CATERERS WATERMELON|SAMOSA MASALA|KACHORI MASALA|KATLET|PAV BAJJI|VADAPAV|DAHI PAPDI|PALAK PATTA|PALAK CHAT|LICHY BLACK|BANARAS BEEDA|SWEET PAAN|DATES PAAN|MOGAI PAN|FIRE PAN|BANGARPET CHATS|PANI POORI|MASALA POORI|BHEL POORI|GHEE BHEL|RING BHEL|CORN BHEL|SEV POORI|TIKKI POORI|DAHI POORI|DAHI BOONDI|CCM MASALA|MOONGDAL MASALA|TOMOTO SLICE|POTOTO TWISER|BANANA TWISTER|POP CORN|COTTON CANDY|CRUSHED ICE|AMERICAN STEAM|CHOCOLATE FOUNTAIN|CLOTH BAG|FANCY BAG|BISLERY|KINLEY|AQUAFINA|APPLE PINEAPPLE|SAPOTA GRAPE|PAPPAYA WATERMELON|AUSTRALIA GRAPE|KIWI PEARS|FIG LITCHI|STRAWBERRY KASHMIR|RED GUAVA|CHERRY))/i

function parseBoldLine(line) {
  const items = []
  const blocks = [...line.matchAll(/\*\*([^*]+)\*\*/g)].map((m) => m[1])
  for (let block of blocks) {
    block = block.replace(/~~[^~]*~~/g, ' ').replace(/\s+/g, ' ').trim()
    if (!block) continue

    const slashSplit = block.split(/\s*\/\s*/)
    for (const part of slashSplit) {
      const trimmed = part.trim()
      if (trimmed.length < 3) continue
      const parts = trimmed.split(ITEM_SPLIT).filter(Boolean)
      for (const p of parts) {
        const t = p.trim()
        if (t.length > 2) items.push(titleCase(t))
      }
    }
  }
  return items
}

const sections = [
  ['welcome-drinks', 'Welcome Drinks', [5]],
  ['welcome-starters', 'Welcome Starters', [7, 9, 11, 13]],
  ['sweet-with-stick', 'Sweet With Stick', [17]],
  ['soups', 'Soups', [21, 23]],
  ['cold-soups', 'Cold Soups', [27]],
  ['malai-sweets', 'Malai Sweets', [33, 35]],
  ['kaju-burfy-sweets', 'Kaju Burfy Sweets', [37]],
  ['champakali-gulla', 'Champakali & Gulla', [39, 41, 43, 45, 47]],
  ['kheer-kadam-almond', 'Kheer Kadam & Almond Sweets', [51, 53, 55]],
  ['pistachio-burfy-sweets', 'Pistachio Burfy Sweets', [57]],
  ['dry-fruit-sweets', 'Special Dry Fruit Sweets', [61]],
  ['holige', 'Holige', [63]],
  ['kova-burfy', 'Special Kova Burfy', [69, 71, 73, 75, 77]],
  ['halwa', 'Halwa', [79]],
  ['payasam', 'Payasam', [85]],
  ['south-indian-sweets', 'South Indian Sweets', [87, 89, 91, 93]],
  ['paneer-starters', 'Paneer Starters', [95, 97]],
  ['gobi-starters', 'Gobi Starters', [99, 101]],
  ['mushroom-starters', 'Mushroom Starters', [107, 109]],
  ['baby-corn-starters', 'Baby Corn Starters', [111]],
  ['south-indian-starters', 'South Indian Starters', [115, 117, 119, 121, 123]],
  ['dry-starters', 'Dry Starters', [127, 129, 131, 133]],
  ['south-indian-breads-dosa', 'South Indian Breads (Dosa)', [137, 141, 143, 145, 147, 149, 151, 153, 155, 157]],
  ['north-indian-breads', 'North Indian Breads', [161, 163, 165, 167, 169]],
  ['idli', 'Idli', [173, 175]],
  ['raita', 'Raita', [179]],
  ['channa-dhal-gravy', 'Channa & Dhal Gravy', [185]],
  ['paneer-gravy', 'Paneer Gravy', [189]],
  ['chutney-kofta', 'Chutney & Kofta', [191, 193]],
  ['mushroom-gravy', 'Mushroom Gravy', [195]],
  ['flavored-rice', 'Flavored Rice & Biryani', [199, 201, 209, 211, 215, 217, 219, 221, 225, 227, 229, 231, 233]],
  ['veg-gravy', 'Veg Gravy', [205, 207]],
  ['rasam', 'Rasam', [237]],
  ['gojju-huli', 'Gojju & Huli', [243, 245, 247, 249, 251]],
  ['palya-subji', 'Palya & Subji', [253, 255, 257, 261]],
  ['pickles', 'Pickles', [263]],
  ['papad', 'Papad', [271]],
  ['breakfast', 'Breakfast', [273, 275, 277]],
  ['chinese', 'Chinese', [281]],
  ['snacks', 'Snacks', [285, 287, 289, 291]],
  ['italian', 'Italian', [295, 297]],
  ['sauces', 'Sauces', [301]],
  ['hot-beverages', 'Hot Beverages', [305]],
  ['salads', 'Salads & Kosambari', [311]],
  ['special-icecream', 'Special Ice Cream', [313, 315]],
  ['overseas-salad', 'Overseas Salad', [319]],
  ['ice-creams', 'Ice Creams', [325, 327]],
  ['bombay-chat', 'Bombay Chat', [331, 333, 335, 337, 347]],
  ['beeda', 'Beeda & Paan', [343, 345]],
  ['kids-counter', "Kid's Counter", [363, 365]],
  ['tamboola', 'Tamboola', [369]],
  ['packaged-water', 'Packaged Water', [357, 359]],
  ['fruits', 'Fruits', [377, 381, 383]],
]

const manualOverrides = {
  'welcome-drinks': [
    'Faluda Rose Milk', 'Faluda Badam Milk', 'Gulkand Milk Shake', 'Faluda Venila Shake',
    'Faluda Mango Shake', 'Faluda Lichi Shake', 'Faluda Strawberry Shake', 'Chocolate Milk Shake',
    'Pistachio Milk Shake', 'Kiwi Milk Shake', 'Fruit Punch', 'Fruit Milk Punch',
    'Butterscotch Shake', 'Fresh Sugar Cane Juice', 'Arabian Pulp', 'Grape Mint Lime Cold',
    'Kesar Badam Milk Hot', 'Badam Milk', 'Fresh Tender Coconut',
  ],
}

const menuCategories = sections.map(([id, name, lineNums]) => {
  const items = manualOverrides[id] ?? (() => {
    const parsed = []
    for (const n of lineNums) {
      parsed.push(...parseBoldLine(lines[n - 1] || ''))
    }
    return [...new Set(parsed)]
  })()
  return {
    id,
    name,
    description: 'Select from our catering menu for weddings, receptions, corporate events, and private celebrations.',
    items: items.map((itemName) => ({ name: itemName })),
  }
}).filter((c) => c.items.length > 0)

const menuGroups = [
  {
    id: 'welcome',
    name: 'Welcome & Drinks',
    categoryIds: ['welcome-drinks', 'welcome-starters', 'sweet-with-stick', 'hot-beverages', 'packaged-water'],
  },
  {
    id: 'soups-salads',
    name: 'Soups & Salads',
    categoryIds: ['soups', 'cold-soups', 'salads', 'overseas-salad'],
  },
  {
    id: 'starters',
    name: 'Starters',
    categoryIds: [
      'paneer-starters', 'gobi-starters', 'mushroom-starters', 'baby-corn-starters',
      'south-indian-starters', 'dry-starters',
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    categoryIds: [
      'channa-dhal-gravy', 'paneer-gravy', 'chutney-kofta', 'mushroom-gravy',
      'veg-gravy', 'flavored-rice', 'rasam', 'gojju-huli', 'palya-subji',
    ],
  },
  {
    id: 'breads-rice',
    name: 'Breads, Idli & Rice',
    categoryIds: [
      'south-indian-breads-dosa', 'north-indian-breads', 'idli', 'raita',
    ],
  },
  {
    id: 'breakfast-snacks',
    name: 'Breakfast & Snacks',
    categoryIds: ['breakfast', 'snacks', 'papad', 'pickles', 'sauces'],
  },
  {
    id: 'chinese-italian',
    name: 'Chinese & Italian',
    categoryIds: ['chinese', 'italian'],
  },
  {
    id: 'sweets',
    name: 'Sweets & Mithai',
    categoryIds: [
      'malai-sweets', 'kaju-burfy-sweets', 'champakali-gulla', 'kheer-kadam-almond',
      'pistachio-burfy-sweets', 'dry-fruit-sweets', 'holige', 'kova-burfy', 'halwa',
      'payasam', 'south-indian-sweets',
    ],
  },
  {
    id: 'desserts-live',
    name: 'Desserts & Live Counters',
    categoryIds: [
      'special-icecream', 'ice-creams', 'bombay-chat', 'beeda', 'kids-counter',
    ],
  },
  {
    id: 'accompaniments',
    name: 'Accompaniments',
    categoryIds: ['tamboola', 'fruits'],
  },
]

const homePreviewIds = [
  'welcome-drinks',
  'paneer-starters',
  'flavored-rice',
  'south-indian-breads-dosa',
  'malai-sweets',
  'bombay-chat',
]

const output = `// Auto-generated from menu.md — run: node scripts/parse-menu.mjs

export const menuCategories = ${JSON.stringify(menuCategories, null, 2)}

export const menuGroups = ${JSON.stringify(menuGroups, null, 2)}

export const homeMenuPreview = menuCategories
  .filter((cat) => ${JSON.stringify(homePreviewIds)}.includes(cat.id))
  .map((cat) => ({
    id: cat.id,
    name: cat.name,
    items: cat.items.slice(0, 12).map((item) => item.name),
  }))

export function getMenuCategoriesByGroup(groupId) {
  const group = menuGroups.find((g) => g.id === groupId)
  if (!group) return menuCategories
  return menuCategories.filter((cat) => group.categoryIds.includes(cat.id))
}
`

fs.writeFileSync(path.join(__dirname, '../src/data/menuData.js'), output)
console.log(`Generated ${menuCategories.length} categories with ${menuCategories.reduce((a, c) => a + c.items.length, 0)} items`)
