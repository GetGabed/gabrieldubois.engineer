import React from 'react'
import MainProject from './Cards/MainProject'
import { motion } from 'framer-motion'

type Props = {}

function Projects({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-gray-400/20 scrollbar-thumb-primary/80 scrollbar-thin pb-10">
                <MainProject
                    image="/projects/CoursesDB.png"
                    title="CoursesDB"
                    techs={["NextJS", "MongoDB", "Express", "NodeJS"]}
                    description="A fullstack application created for the purpose of giving the opportunity to students to share and read summaries of courses they are or will be taking. Everyone can create an account, and when given the right, can also write a post."
                    // color={color}
                    github="https://github.com/Adissuu/CoursesDB" link={''} />
                <MainProject
                    image="/projects/pokedex.png"
                    title="PokéAPI"
                    techs={["React", "Axios", "Router", "Framer motion"]}
                    description="A project that a huge amount of developers works on at one point or another. This time, I had the chance to greatly learn about Axios and everything related to API calls."
                    // color={color}
                    github="https://github.com/Adissuu/Pokedex-api"
                    link="https://adissuu.github.io/Pokedex-api/#/" />

            </div>

            {/* Background */}
            <div className='w-full absolute top-[30%] bg-primary opacity-10 left-0 h-[350px] -skew-y-[16deg]'></div><div className='w-full absolute top-[30%] bg-primary opacity-10 left-0 h-[350px] skew-y-[16deg]'></div>


        </motion.div>
    )
}

export default Projects