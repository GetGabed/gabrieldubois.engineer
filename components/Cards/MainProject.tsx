import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

type Props = {
    image: string;
    title: string;
    techs: string[];
    description?: string;
    github?: string;
    link: string;
    color?: string;
}


function MainProject({ image, title, description, github, link = '#projects', techs, color }: Props) {
    const showAllTechs = () => {
        return techs.map((t, name) => (
            <li className="mr-2" key={name}>
                {t}
            </li>
        ));
    };

    return (
        <>
            <motion.div
                initial={{
                    y: -200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, y: 0 }}
                className='space-y-4 z-10 md:pl-[13vw] lg:pl-[20vw] snap-start flex-shrink-0 w-screen'>
                <a href="#" className="group relative mx-[10vw] block bg-black">
                    <img
                        loading='lazy'
                        alt="Project"
                        src={image}
                        className="absolute inset-0 h-full w-full object-cover rounded-lg opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative px-4 pb-4 sm:p-6 lg:p-8 md:hidden">
                        <div className='bg-black-100/60 w-fit rounded-lg p-2 -ml-4 sm:ml-0'>
                            <p className="text-sm font-medium uppercase tracking-widest text-red-500">
                                Featured Project
                            </p>

                            <p className="text-xl clash-display font-medium font-bold text-white sm:text-2xl">{title}</p>
                        </div>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm sf-mono text-white">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="hidden md:inline-block mx-auto">
                    <div className="mt-12  flex justify-center items-center">
                        <div className="flex justify-center -ml-8">
                            <Link href={link} className={link == 'work' ? "cursor-default z-0 " : 'z-0'}>
                                <img
                                    loading='lazy'
                                    src={image} className="object-contain min-w-[400px] max-w-[1000px] w-[40vw] duration-500 -mr-12 rounded-lg " alt={''} />
                            </Link>
                        </div>
                        <div className="clash-display -ml-[10vw] lg:-ml-[5vw] z-10">
                            <div>
                                <h1 className={` text-2xl font-medium text-right ${color}`}>{title}</h1>
                                <ul className={`flex justify-end -mr-2 mb-4 font-normal`}>
                                    {showAllTechs()}
                                </ul>
                                <div className="bg-black-100/80 dark:bg-gray-900/80 w-[35vw] min-w-[400px] pt-4 px-4 pb-2 rounded-xl shadow-xl">
                                    <p className="text-white sf-mono mb-4 text-sm text-justify leading-relaxed">{description} </p>
                                    <div className="flex flex-1 justify-end items-center ">
                                        {github ? (
                                            <Link href={github} className="hover:mr-1 duration-500" >
                                                <i className={`devicon-github-original text-3xl text-white font-medium transition-colors ml-4 ${color}`} />
                                            </Link>
                                        ) : ""}
                                        {link ? (
                                            <Link href={link} className="hover:-mt-2 duration-500" target="_blank">
                                                <ArrowUpRightIcon className={`border-b border-solid hover:text-white hover:border-white transition-colors ml-4 w-7 ${color}`} />
                                            </Link>
                                        ) : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default MainProject

