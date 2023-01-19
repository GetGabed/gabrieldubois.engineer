import { useTheme } from "next-themes";
import Link from "next/link";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from "react";

const Header = ({color}) => {
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
                <Link className="logo font-bold text-xl" href="/">Gabe.</Link>
                <div className="flex items-center sf-mono">
                    <div className="flex justify-between">
                    <Link href="/about" className="flex menu-link"><p className={color}>01.</p><h1 className="ml-2 mr-6">About</h1></Link>
                    <Link href="/experience" className="flex menu-link"><p className={color}>02.</p><h1 className="ml-2 mr-6">Experience</h1></Link>
                    <Link href="/work" className="flex menu-link"><p className={color}>03.</p><h1 className="ml-2 mr-6">Work</h1></Link>
                    <Link href="/contact" className="flex menu-link"><p className={color}>04.</p><h1 className={`mx-2 mr-6 hover:`}>Contact</h1></Link>
                    </div>
                {renderThemeChanger()}
                </div>
            </div>
        </header>
    )
}

export default Header;