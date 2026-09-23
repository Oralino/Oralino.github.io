import type { ReactNode } from 'react'

export interface SpecItem {
  label: string
  value: ReactNode
}

/** Labelled rows: mono label + value. Shared by the hero and the project detail aside. */
export default function SpecList({ items }: { items: SpecItem[] }) {
  return (
    <dl className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-2">
      {items.map(({ label, value }) => (
        <div key={label} className="contents">
          <dt className="pt-0.5 font-mono text-xs text-muted">{label}</dt>
          <dd className="min-w-0 text-sm text-text">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
