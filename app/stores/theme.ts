export const useThemeStore = defineStore('theme', () => {
    const theme = ref<Theme>('dark');
    
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
})


// export const useThemeStore = defineStore('theme', {
//   state: () => ({
//     theme: 'dark' as Theme,
//   }),

//   actions: {
//     setTheme(value: Theme) {
//       this.theme = value
//       document.documentElement.classList.toggle('dark', value === 'dark')
//       localStorage.setItem('theme', value)
//     },

//     toggleTheme() {
//       this.setTheme(this.theme === 'dark' ? 'light' : 'dark')
//     },

//     initTheme() {
//       const saved = localStorage.getItem('theme') as Theme | null
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

//       this.setTheme(saved ?? (prefersDark ? 'dark' : 'light'))
//     },
//   },
// })