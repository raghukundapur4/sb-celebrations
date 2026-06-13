import { useEffect } from 'react'
import { siteConfig } from '../data/siteConfig'

const brand = siteConfig.name
const serviceLine = siteConfig.serviceLine

const pageMeta = {
  '/': {
    title: `${brand} | ${serviceLine}`,
    description: siteConfig.description,
  },
  '/about': {
    title: `About Us | ${brand}`,
    description: `Discover the story, mission, and values behind ${brand} — ${serviceLine.toLowerCase()} since ${siteConfig.founded}.`,
  },
  '/services': {
    title: `Catering Services | ${brand}`,
    description:
      'Wedding, corporate, housewarming, birthday, religious events and outdoor catering with custom packages.',
  },
  '/menu': {
    title: `Menu | ${brand}`,
    description:
      'Explore our South Indian, North Indian, breakfast, live counters, sweets, desserts, beverages and chaat menus.',
  },
  '/gallery': {
    title: `Gallery | ${brand}`,
    description: 'Browse our portfolio of weddings, corporate events, housewarming and traditional celebrations.',
  },
  '/contact': {
    title: `Contact Us | ${brand}`,
    description: 'Get in touch for a free consultation and quote for your next celebration.',
  },
}

export default function SEO({ pathname }) {
  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']
    document.title = meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', meta.description)
  }, [pathname])

  return null
}
