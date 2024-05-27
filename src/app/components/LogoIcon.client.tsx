'use client'

type Props = { fill?: string }

const LogoIcon: React.FC<Props> = ({ fill }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={fill}>
      <circle cx="2" cy="2" r="2" />
      <circle cx="8" cy="2" r="2" />
      <circle cx="14" cy="2" r="2" />
      <circle cx="2" cy="8" r="2" />
      <circle cx="8" cy="8" r="2" />
      <circle cx="14" cy="8" r="2" />
      <circle cx="2" cy="14" r="2" />
      <circle cx="8" cy="14" r="2" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  )
}

export { LogoIcon }
