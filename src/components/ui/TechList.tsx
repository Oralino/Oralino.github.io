const chip =
  'inline-flex h-6 items-center rounded-md border border-border bg-raised px-2 font-mono text-xs text-muted'

interface TechListProps {
  tech: string[]
  /** Show at most this many chips, then "+N" */
  max?: number
}

export default function TechList({ tech, max = tech.length }: TechListProps) {
  const shown = tech.slice(0, max)
  const hidden = tech.length - shown.length
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {shown.map((item) => (
        <li key={item} className={chip}>
          {item}
        </li>
      ))}
      {hidden > 0 && (
        <li className={chip}>
          +{hidden}
          <span className="sr-only"> more</span>
        </li>
      )}
    </ul>
  )
}
