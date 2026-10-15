import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const applyTheme = (dark: boolean) => {
  const htmlElement = document.documentElement
  if (dark) {
    htmlElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    htmlElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark)
  applyTheme(isDark)
  return isDark
}

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme)

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground cursor-pointer flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  )
}

export default ThemeToggle
