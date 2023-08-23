import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HoverSocialIcons from './HoverSocialIcons'
import { RadioGroup } from '@headlessui/react'
import ColorPicker from './ColorPicker'

type Props = {
    footerColorChange: Function
    colorized?: string
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


export default function Footer({ footerColorChange, colorized }: Props) {
    const [color, setColor] = useStickyState(undefined, 'theme-color');




    return (
        <footer className={`w-56 bottom-0 sticky overflow-hidden`}>
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

                <ColorPicker onColorChange={footerColorChange} />
                <HoverSocialIcons color={colorized} url="https://www.linkedin.com/in/gabriel-dubois-soen" />
                <HoverSocialIcons color={colorized} url="https://www.youtube.com" />
                <HoverSocialIcons color={colorized} url="https://twitter.com/Adissuu_SOEN" />
                <HoverSocialIcons color={colorized}
                    network='email'
                    url='#contact'
                    target=''
                />

            </motion.div>
        </footer>
    )
}