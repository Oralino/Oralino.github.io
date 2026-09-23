import { useTheme } from '../../hooks/useTheme.ts'
import Icon from '../ui/Icon.tsx'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className="inline-flex size-10 items-center justify-center link-ghost focus-ring"
    >
      <Icon name={next === 'dark' ? 'moon' : 'sun'} />
    </button>
  )
}
