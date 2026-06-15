const logoFiles = {
  full: `${import.meta.env.BASE_URL}logo.png`,
  mark: `${import.meta.env.BASE_URL}logo-mark.png`,
}

export default function LogoSvg({
  className = 'h-16 w-auto',
  variant = 'full',
  title = "SB Celebration's",
}) {
  const src = logoFiles[variant === 'mark' ? 'mark' : 'full']

  return (
    <img
      src={src}
      alt={title}
      className={className}
      width={variant === 'mark' ? 414 : 414}
      height={variant === 'mark' ? 341 : 474}
      decoding="async"
    />
  )
}
