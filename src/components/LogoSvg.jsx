const logoFiles = {
  full: `${import.meta.env.BASE_URL}logo.svg`,
  mark: `${import.meta.env.BASE_URL}logo-mark.svg`,
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
      width={392}
      height={variant === 'mark' ? 280 : 360}
      decoding="async"
    />
  )
}
