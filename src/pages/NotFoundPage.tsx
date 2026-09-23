import { Link, useLocation } from 'react-router'
import { useDocumentTitle } from '../hooks/useDocumentTitle.ts'

export default function NotFoundPage() {
  const { pathname } = useLocation()
  useDocumentTitle('Page not found')

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 px-4 py-16 sm:px-6 md:py-24">
      <h1 className="text-2xl font-semibold tracking-[-0.03em] sm:text-title">
        Page not found
      </h1>
      <p className="text-sm text-muted">
        Nothing lives at{' '}
        <code className="font-mono text-xs break-all text-text">
          {pathname}
        </code>
      </p>
      <Link
        to="/"
        className="text-sm font-medium text-accent underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to all projects
      </Link>
    </div>
  )
}
