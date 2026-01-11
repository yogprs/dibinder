export type Theme = 'light' | 'dark'

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'light')

  const setTheme = (value: Theme) => {
    theme.value = value
    document.documentElement.classList.toggle('dark', value === 'dark')
    localStorage.setItem('theme', value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    const saved = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setTheme(saved ?? (prefersDark ? 'dark' : 'light'))
  }

  return {
    theme,
    toggleTheme,
    initTheme,
  }
}
