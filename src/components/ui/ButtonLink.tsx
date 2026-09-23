import type { ReactNode } from 'react'
import Icon, { type IconName } from './Icon.tsx'

const base =
  'inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors duration-150 ease-out focus-ring'

const variants = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover',
  secondary: 'border border-border-strong text-text hover:bg-raised',
}

interface ButtonLinkProps {
  href: string
  variant?: keyof typeof variants
  icon?: IconName
  children: ReactNode
}

/** External link styled as a button; ends with the external-arrow icon (DESIGN.md → Buttons). */
export default function ButtonLink({
  href,
  variant = 'primary',
  icon,
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      {icon && <Icon name={icon} />}
      {children}
      <Icon name="arrowUpRight" className="size-3.5" />
    </a>
  )
}
