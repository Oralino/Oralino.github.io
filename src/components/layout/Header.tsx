import { Link } from 'react-router'
import { site } from '../../data/site.ts'
import Icon from '../ui/Icon.tsx'
import ThemeToggle from './ThemeToggle.tsx'

const sections = [
  { hash: '#work', label: 'Work' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#coursework', label: 'Coursework' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg">
      <a
        href="#main"
        className="sr-only rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-fg focus-ring focus:not-sr-only focus:absolute focus:top-3 focus:left-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link to="/" className="rounded-md text-sm font-semibold focus-ring">
          {site.name}
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          <ul className="hidden items-center gap-5 pr-3 md:flex">
            {sections.map(({ hash, label }) => (
              <li key={hash}>
                <Link
                  to={{ pathname: '/', hash }}
                  className="link-ghost text-label font-medium focus-ring"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${site.name} on GitHub`}
            className="inline-flex h-10 items-center gap-2 link-ghost px-2 text-label font-medium focus-ring"
          >
            <Icon name="github" />
            <span className="hidden sm:inline" aria-hidden="true">
              GitHub
            </span>
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
