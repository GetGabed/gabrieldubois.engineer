import { useTheme } from "next-themes";
import Link from "next/link";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from "react";

const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme == 'system' ? systemTheme : theme;

        if (currentTheme == 'dark') {
            return (
                <button className="w-10 p-1.5 bg-white rounded-full text-black-100 transition rotate-180 duration-300" role="button" onClick={() => setTheme('light')}>
                    <SunIcon />
                </button>

            )
        }
        else {
            return (
                <button className="w-10 p-1.5 rotate-12 bg-black-100 rounded-full text-white transition duration-300" onClick={() => setTheme('dark')}>
                    <MoonIcon />
                </button>
            )
        }
    }

    return (
        <header>
            <div className="flex justify-between p-6 items-center">
                <Link className="font-bold text-xl" href="/">Gabe.</Link>
                {renderThemeChanger()}
            </div>
        </header>
    )
}

export default Header;