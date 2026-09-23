import { useEffect } from 'react'
import { site } from '../data/site.ts'

/** Sets the tab title to "<title> · Oralino", or just "Oralino" when no title is given. */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name
  }, [title])
}
