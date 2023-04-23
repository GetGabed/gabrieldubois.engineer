import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundSquares from './UI/BackgroundSquares'
import profile from "../public/Profile.png"
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Gabriel Dubois",
            "I'm a Full Stack Developer",],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundSquares />
            <Image className='relative object-cover border border-red-500 border-opacity-60 h-32 w-32 mx-auto' src={profile} alt={'Gabriel Dubois'} />
            <div className='z-20'>
                <h2 className='text-sm pb-2 clash-display uppercase text-current tracking-[15px]'>Software Engineer</h2>

                <h1 className='clash-display text-5xl lg:text-6xl px-10 font-semibold'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorStyle='_' cursorColor='#da0808' />
                </h1>

                <div>
                    <Link href="#about" >
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero