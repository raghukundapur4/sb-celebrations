import { Link } from 'react-router-dom'
import { Phone, MapPin, Share2, Video, Camera, Star, ExternalLink, MessageCircle } from 'lucide-react'
import { googleReviewLinks, navLinks, siteConfig } from '../data/siteConfig'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6">
                <BrandLogo
                  imageClassName="h-14 w-auto max-w-[280px] brightness-110"
                  showText={false}
                />
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Premium 100% vegetarian catering and wedding planning in Bengaluru — crafting memorable feasts for weddings, corporate events, and traditional celebrations.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/60 transition-colors hover:text-secondary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-white">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MessageCircle size={16} className="mt-0.5 shrink-0 text-[#25D366]" />
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <Star size={16} className="mt-0.5 shrink-0 text-primary" />
                  <a
                    href={googleReviewLinks.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    Google Reviews ({siteConfig.googleReviews.rating}★)
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                  aria-label="Instagram"
                >
                  <Camera size={18} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                  aria-label="Facebook"
                >
                  <Share2 size={18} />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                  aria-label="YouTube"
                >
                  <Video size={18} />
                </a>
              </div>
              <p className="mt-6 text-sm text-white/40">
                Open daily: 8:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Crafted with passion for every celebration
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
