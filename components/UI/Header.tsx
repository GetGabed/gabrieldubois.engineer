import React from 'react'
import ThemeSwitch from '../Utils/ThemeSwitch'
import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {}


export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-4 flex flex-row justify-end z-20 overflow-hidden'>
            {/* sections */}
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                    rotateZ: 1200
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotateZ: 0
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row'>
                <Link href="/resume" className={`border-primary hover:bg-primary border-2 w-10 p-1.5 mr-4 rounded-full transition colors`}>
                    <ArrowDownTrayIcon />
                </Link>
                <ThemeSwitch />
            </motion.div>
        </header >
    )
}