import { useState } from 'react'

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-primary/10 to-secondary/10" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  )
}
