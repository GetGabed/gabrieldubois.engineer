import React, { ReactNode, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import BackHero from './BackHero'


interface LayoutProps {
    children: ReactNode
    indexColorChange: Function
    colorized?: string
    home?: string
}


const colors = ['red', 'blue', 'green', 'yellow']

function useStickyState(defaultValue: string | undefined, key: string): [string | undefined, (v: string) => void] {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    useEffect(() => {
        const stickyValue = localStorage.getItem(key)
        if (stickyValue !== null) {
            setValue(stickyValue)
        }

    }, [key, setValue])

    return [value, (v) => {
        localStorage.setItem(key, v)
        setValue(v)
    }]
}

export default function Layout({ children, indexColorChange, colorized, home }: LayoutProps) {
    const [color, setColor] = useStickyState(undefined, 'theme-color');


    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer footerColorChange={indexColorChange} colorized={colorized} />
            <BackHero home={home} />
        </>
    )
}