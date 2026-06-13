import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

export default function BrandLogo({
  className = '',
  imageClassName = 'h-11 w-auto sm:h-12',
  showText = false,
  textClassName = '',
  subtitleClassName = '',
}) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <img
        src={logoSrc}
        alt={siteConfig.name}
        className={`object-contain transition-transform duration-300 group-hover:scale-[1.02] ${imageClassName}`}
      />
      {showText && (
        <div className={textClassName}>
          <p className="font-heading text-lg font-semibold leading-tight">{siteConfig.name}</p>
          <p className={`text-xs ${subtitleClassName}`}>{siteConfig.serviceLine}</p>
        </div>
      )}
    </Link>
  )
}
