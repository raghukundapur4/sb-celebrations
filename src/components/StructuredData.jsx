import { siteConfig, googleReviewLinks } from '../data/siteConfig'
import { ogImage } from '../data/imageAssets'

export default function StructuredData() {
  const { rating, reviewCount } = siteConfig.googleReviews

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    sameAs: [googleReviewLinks.profileUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 624/3, 1st Cross, KEB Road, Ittamadu, Banashankari 3rd Stage',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560085',
      addressCountry: 'IN',
    },
    servesCuisine: ['South Indian', 'North Indian', 'Vegetarian'],
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Dietary',
      value: '100% Pure Vegetarian',
    },
    priceRange: '₹₹₹',
    foundingDate: '2010',
    image: ogImage,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(rating),
      reviewCount: String(reviewCount),
      bestRating: '5',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '21:00',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
