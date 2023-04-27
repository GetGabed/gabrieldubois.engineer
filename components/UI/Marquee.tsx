import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    color: string,
    title: string
}

function Marquee({ color, title }: Props) {
    return (
        <motion.div
            className="relative w-full z-0 -left-4 top-[48vh]">
            <div className={`marquee rotate-6 border-b-2 border-t-2 text-${color}`}>
                <div className="marquee-content scroll">
                    <h1 className="unselectable">{title}</h1>
                    <h1 className="unselectable">{title}</h1>
                    <h1 className="unselectable">{title}</h1>
                </div>
                <div className="marquee-content scroll">
                    <h1 className="unselectable">{title}</h1>
                    <h1 className="unselectable">{title}</h1>
                    <h1 className="unselectable">{title}</h1>
                </div>
            </div>
        </motion.div>
    )
}

export default Marquee