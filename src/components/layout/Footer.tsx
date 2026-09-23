import { site } from '../../data/site.ts'
import Icon from '../ui/Icon.tsx'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="font-mono text-xs text-muted">
              {site.url.replace('https://', '')}
            </p>
          </div>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start link-ghost text-label font-medium focus-ring sm:self-auto"
          >
            <Icon name="github" />
            GitHub
            <Icon name="arrowUpRight" className="size-3.5" />
          </a>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · Built with React + Tailwind
        </p>
      </div>
    </footer>
  )
}
