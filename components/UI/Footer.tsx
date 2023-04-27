import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import HoverSocialIcons from './HoverSocialIcons'

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
                <HoverSocialIcons url="https://www.linkedin.com/in/gabriel-dubois-soen" />
                <HoverSocialIcons url="https://www.youtube.com" />
                <HoverSocialIcons url="https://twitter.com/Adissuu_SOEN" />
                <HoverSocialIcons
                    network='email'
                    url='#contact'
                    target=''
                />
            </motion.div>
        </footer>
    )
}