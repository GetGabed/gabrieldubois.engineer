import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import profile from '../../public/Profile.png'

type Props = {
    image: string;
    title: string;
    techs: string[];
    bullets: string[];
    company: string;
    date: string;
}

function ExperienceCard({ company, title, image, date, techs, bullets }: Props) {
    const showAllTechs = () => {
        return techs.map((t, name) => (
            <li className="mr" key={name}>
                <i className={`${t} text-white`} />
            </li>
        ));
    };
    const showAllBullets = () => {
        return bullets.map((b, name) => (
            <li className="mr-2" key={name}>
                {b}
            </li>
        ));
    };
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-dark-light hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
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
                <img loading='lazy' src={image} alt={'Past experience'} className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
            </motion.div>
            <div className='px-0 md:px-10 unselectable'>
                <h4 className='text-4xl text-primary pacifico font-light'>{title}</h4>
                <p className='font-bold ubuntu text-white text-2xl mt-1'>{company}</p>
                <div className='flex list-none space-x-2 mt-2'>
                    {showAllTechs()}
                </div>
                <p className='uppercase sf-mono py-3 text-primary'>{date}</p>
                <ul className='list-disc text-white sf-mono space-y-3 ml-5 text-sm'>
                    {showAllBullets()}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard