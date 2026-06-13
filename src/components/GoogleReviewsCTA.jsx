import { ExternalLink, Star } from 'lucide-react'
import { googleReviewLinks, siteConfig } from '../data/siteConfig'

function GoogleIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export default function GoogleReviewsCTA({ variant = 'light', className = '' }) {
  const { rating, reviewCount } = siteConfig.googleReviews
  const isDark = variant === 'dark'

  return (
    <div
      className={`flex flex-col items-center gap-5 rounded-2xl border p-6 text-center sm:flex-row sm:text-left ${
        isDark
          ? 'border-white/10 bg-white/5'
          : 'border-primary/10 bg-white shadow-card'
      } ${className}`}
    >
      <div className="flex items-center gap-4">
        <GoogleIcon className="h-10 w-10 shrink-0" />
        <div>
          <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-dark'}`}>
            Rated {rating} on Google
          </p>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className={
                    index < Math.round(rating)
                      ? 'fill-secondary text-secondary'
                      : isDark
                        ? 'text-white/20'
                        : 'text-dark/15'
                  }
                />
              ))}
            </div>
            <span className={`text-xs ${isDark ? 'text-white/60' : 'text-dark/50'}`}>
              {reviewCount}+ verified reviews
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row">
        <a
          href={googleReviewLinks.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
            isDark
              ? 'bg-white text-dark hover:bg-white/90'
              : 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90'
          }`}
        >
          Read Google Reviews
          <ExternalLink size={14} />
        </a>
        <a
          href={googleReviewLinks.writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
            isDark
              ? 'border-white/20 text-white hover:bg-white/10'
              : 'border-primary/20 text-primary hover:bg-primary/5'
          }`}
        >
          Write a Review
        </a>
      </div>
    </div>
  )
}
