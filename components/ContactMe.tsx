import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Marquee from './UI/Marquee'
import Link from 'next/link'

type Props = {}

function ContactMe({ }: Props) {
    return (
        <>
            <motion.div
                initial={{
                    x: 3000,
                    y: 300
                }}
                animate={{
                    x: 0,
                    y: 0
                }}
                transition={{
                    duration: 1.5
                }}> <Marquee color="red-500" title="Français English Español" />

            </motion.div >
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5
                }}
                className='h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row px-16 justify-evenly mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Contact Me</h3>
                <div className="flex flex-col space-y-10">
                    <h4 className='text-3xl md:text-4xl font-semibold clash-display text-center tracking-wide'>Opportunities, question, coffee chat... <br />Ask me about <span className='decoration-red-500/50 transition transition-colors hover:decoration-red-500 underline'>everything.</span></h4>
                    <div className="space-y-10">
                        <div className="flex items-center space-x-5 justify-center">
                            <EnvelopeIcon className='text-red-500 h-7 w-7 animate-pulse' />
                            <p className='sf-mono md:text-2xl'>gabrieldubois.eng@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-5 justify-center">
                            <MapPinIcon className='text-red-500 h-7 w-7 animate-pulse' />
                            <p className='sf-mono md:text-2xl'>Montreal, QC, Canada</p>
                        </div>
                        <form className='flex flex-col space-y-2 w-fit mx-auto'>
                            <div className='flex space-x-2'>
                                <input type="text" placeholder='Name' className='contactInput' />
                                <input type="email" placeholder='Email' className='contactInput' />
                            </div>
                            <input type="text" placeholder='Subject' className='contactInput' />
                            <textarea placeholder='Message' className='contactInput max-h-48' />
                            <button type='submit' className='bg-red-500 py-5 px-10 rounded-md text-white font-bold text-lg hover:bg-red-500/80 transition transition-colors'>Send Message</button>
                        </form>
                    </div>

                </div>
            </motion.div>
            <Link href="https://www.papareact.com">
                <p className='sf-mono text-sm text-gray-500 relative text-right right-2 bottom-4 opacity-50 hover:opacity-80 transition transition-colors'>Design inspired from Sonny Segha</p>
            </Link>
        </>
    )
}

export default ContactMe