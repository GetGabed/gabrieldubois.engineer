import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const currentTheme = theme;

    if (currentTheme == 'dark') {
        return (
            <button className="w-10 p-1.5 bg-white rounded-full text-black-100 transition rotate-180 hover:-rotate-12 duration-300" role="button" onClick={() => setTheme('light')}>
                <SunIcon />
            </button>

        )
    }
    else {
        return (
            <button className="w-10 p-1.5 rotate-12 bg-black-100 rounded-full text-white transition hover:-rotate-12 duration-300" onClick={() => setTheme('dark')}>
                <MoonIcon />
            </button>
        )
    }
}

export default ThemeSwitch