/* eslint-disable no-unused-vars */
'use client'
// import { DarkMode, LightMode } from '@/data/svgImages'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  useEffect(() => {
    setMount(false)
    setTheme('light') // set default theme to light
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //   return mount ? (
  //     <div className="toggle-button fixed right-5 z-[10000000000] max-lg:bottom-2.5 lg:top-1/3">
  //       <button
  //         onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
  //         type="button"
  //         className="flex h-10 w-10 items-center justify-center rounded-md border border-paragraph/25 text-paragraph focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-borderColor-dark dark:text-white">
  //         <LightMode />
  //         <DarkMode />
  //       </button>
  //     </div>
  //   ) : null
}

export default ThemeSwitcher
