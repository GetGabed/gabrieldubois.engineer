import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className='w-16 bottom-0 sticky overflow-hidden'>
            <motion.div
                initial={{
                    y: 1000,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2
                }}
                className='pl-5 flex flex-col z-20' >
                <SocialIcon url="https://www.linkedin.com/in/gabriel-dubois-soen" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://www.youtube.com" fgColor='gray' bgColor='transparent' />
                <SocialIcon url="https://twitter.com/Adissuu_SOEN" fgColor='gray' bgColor='transparent' />
                <SocialIcon
                    className="cursor-pointer"
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
        </footer>
    )
}