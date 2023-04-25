import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ContactMe({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5
            }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full mx-16 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Contact Me</h3>
        </motion.div>
    )
}

export default ContactMe