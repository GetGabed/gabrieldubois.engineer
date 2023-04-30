import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundSquares from './UI/BackgroundSquares'
import profile from "../public/Profile.png"
import Link from 'next/link'

type Props = {
    colorizeded?: string
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

function Hero({ colorizeded }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Gabriel Dubois",
            "I'm a Full Stack Developer",
            "That's what everyone says...",
            "But I happen to also be entertaining",
            "...Sometimes."],
        loop: true,
        delaySpeed: 2000,
    })
    const [color, setColor] = useStickyState(undefined, 'theme-color');
    const [colorized, setColorized] = useState('rgba(239, 68, 68)')

    useEffect(() => {
        switch (colorizeded) {
            case "yellow":
                setColorized("#FBBF24")
                break;
            case "green":
                setColorized("#10B981")
                break;
            case "blue":
                setColorized("#3B82F6")
                break;
            case "red":
                setColorized('rgba(239, 68, 68)')
                break;
            default:
                break;

        }
    });


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundSquares />
            <Image className={`relative object-cover border border-primary border-opacity-60 h-32 w-32 mx-auto`} src={profile} alt={'Gabriel Dubois'} />
            <div className='z-20'>
                <h2 className='text-sm pb-2 clash-display uppercase text-current tracking-[15px]'>Software Engineer</h2>

                <h1 className='clash-display text-5xl lg:text-6xl px-10 font-semibold'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorStyle='_' cursorColor={colorized} />
                </h1>

                <div>
                    <Link href="#about" >
                        <button className='heroButton hover:text-primary'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton hover:text-primary'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className={`heroButton hover:text-primary`}>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton hover:text-primary'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero