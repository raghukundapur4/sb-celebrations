import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import LogoSvg from './LogoSvg'

export default function BrandLogo({
  className = '',
  imageClassName = 'h-11 w-auto sm:h-12',
  variant = 'mark',
  showText = false,
  light = false,
}) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <LogoSvg
        className={`shrink-0 transition-transform duration-300 group-hover:scale-[1.02] ${imageClassName}`}
        variant={variant === 'full' ? 'full' : 'mark'}
        title={siteConfig.name}
      />
      {showText && (
        <div className="hidden min-w-0 sm:block">
          <p
            className={`truncate font-heading text-base font-semibold leading-tight lg:text-lg ${
              light ? 'text-white' : 'text-dark'
            }`}
          >
            {siteConfig.name}
          </p>
          <p className={`truncate text-xs ${light ? 'text-white/60' : 'text-dark/50'}`}>
            {siteConfig.serviceLine}
          </p>
        </div>
      )}
    </Link>
  )
}
