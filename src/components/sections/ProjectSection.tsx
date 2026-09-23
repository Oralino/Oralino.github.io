import type { ReactNode } from 'react'

interface ProjectSectionProps {
  id: string
  title: string
  count: string
  children: ReactNode
}

/** A home page section: anchor target, h2 with a mono count on the right, then its content. */
export default function ProjectSection({
  id,
  title,
  count,
  children,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-12 sm:px-6 md:py-16"
    >
      <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h2
          id={`${id}-title`}
          className="text-2xl font-semibold tracking-tight"
        >
          {title}
        </h2>
        <p className="font-mono text-xs text-muted tabular-nums">{count}</p>
      </div>
      {children}
    </section>
  )
}
