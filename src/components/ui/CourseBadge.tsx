export default function CourseBadge({ code }: { code: string }) {
  return (
    <span
      aria-label={`Course ${code}`}
      className="inline-flex h-6 items-center rounded-md border border-border-strong px-2 font-mono text-xs font-medium text-text"
    >
      {code}
    </span>
  )
}
