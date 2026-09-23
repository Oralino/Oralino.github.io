import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const query = '(prefers-color-scheme: dark)'

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem('theme')
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

// The initial class is set by the inline script in index.html, so read it back from <html>.
function currentTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    const root = document.documentElement
    if (root.classList.contains('dark') === (theme === 'dark')) return
    // The swap is instant (DESIGN.md → Motion): suspend colour transitions for one frame.
    root.classList.add('theme-switching')
    root.classList.toggle('dark', theme === 'dark')
    const frame = requestAnimationFrame(() =>
      root.classList.remove('theme-switching'),
    )
    return () => {
      cancelAnimationFrame(frame)
      root.classList.remove('theme-switching')
    }
  }, [theme])

  // Follow the OS setting until the visitor picks a theme manually.
  useEffect(() => {
    const media = matchMedia(query)
    const onChange = () => {
      if (!readStored()) setTheme(media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage unavailable (private mode): the choice lasts for this page view only.
    }
    setTheme(next)
  }

  return { theme, toggle }
}
