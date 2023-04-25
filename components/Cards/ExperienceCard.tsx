import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import profile from '../../public/Profile.png'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-dark-light hover:opacity-100 opacity-40 cursor-grabbing transition-opacity duration-200 overflow-hidden'>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1.1
                }}
                viewport={{ once: true }}>
                <Image src={profile} alt={'temp work image'} className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
            </motion.div>
            <div className='px-0 md:px-10 unselectable'>
                <h4 className='text-4xl text-red-500 pacifico font-light'>Developer</h4>
                <p className='font-bold ubuntu text-2xl mt-1'>Gabriel Company</p>
                <div className='flex space-x-2 my-2'>
                    <Image src={profile} alt='tech used' className='h-10 w-10 rounded-full' />
                    <Image src={profile} alt='tech used' className='h-10 w-10 rounded-full' />
                    <Image src={profile} alt='tech used' className='h-10 w-10 rounded-full' />
                </div>
                <p className='uppercase sf-mono py-5 text-red-500'>Dec 2023 - Present</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard