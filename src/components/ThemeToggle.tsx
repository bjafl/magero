import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
      aria-label="Bytt tema"
    >
      {resolvedTheme === 'dark' ? (
        <Sun size={16} className="text-[#C8DDB5]" />
      ) : (
        <Moon size={16} className="text-[#C8DDB5]" />
      )}
    </button>
  )
}
