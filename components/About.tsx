import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-2-7xl mx-16 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>About</h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 1.1
                }} className='-mb-20 md:mb-0 flex-shrink-0 '>
                <video className="sm:rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[600px]" muted={true} autoPlay={true} loop={true} src="/VideoAI.mp4"></video>
            </motion.div>
            <motion.div
                initial={{
                    y: -200,
                    opacity: 0
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1.5
                }}
                className='space-y-10 px-0 md:px-10'>
                <h4 className='clash-display text-3xl font-semibold'>Ayo, Background Check 🤙</h4>
                <p className='text-justify sf-mono'>Hello! My name is Gabriel and I take     pleasure in developing features that will be used and appreciated by a handful of users. My passion for programming started in the mid 2010's as I was trying to understand how the applications, games and websites I've been exploring were made.<br /><br />
                    Since these days, I've had the opportunity to participate in many <Link href='#experience' className={`text-red-500 hover:border-b border-current`}>hackathons</Link>, work at a <Link href="https://www.ibwave.com" target="_blank" className={`text-red-500 hover:border-b border-current`}>wireless network global leader</Link>, an <Link href="https://www.genetec.com" target="_blank" className={`text-red-500 hover:border-b border-current`}>innovative security technology provider</Link>, and create meaningful <Link href='#project' className={`text-red-500 hover:border-b border-current`}>projects</Link> that improved my skills.</p>
            </motion.div>
        </div>
    )
}

export default About