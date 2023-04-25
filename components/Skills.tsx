import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Cards/Skill'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5
            }}
            className='min-h-screen flex relative overflow-hidden flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:mx-16 justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Skills</h3>

            <div className='grid grid-cols-4 gap-5'>
                <Skill iconName='devicon-javascript-plain colored' />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>

    )
}

export default Skills