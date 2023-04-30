import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './Cards/ExperienceCard'

type Props = {}

function WorkExperience({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5
            }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-16 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Experience</h3>


            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory snap-x scrollbar scrollbar-gray-400/20 scrollbar-thumb-primary/80 scrollbar-thin'>
                <ExperienceCard title='Software Developer' company='Genetec' date='May 2023 - Present' bullets={["Worked on the internet of Things team"]} image="/companies/genetec.png" techs={["devicon-csharp-plain"]} />
                <ExperienceCard title='Software Developer' company='iBwave' date='Sept 2022 - Dec 2022' bullets={["Designed automated tests to monitor the health of the Unity and Angular solutions", "Created API call methods that send project properties and verify their content", "Reported and fixed critical security issues from the client-side by creating a verification on the server-side.", "Developed features optimizing the navigation of the solution", "Applied Agile and Scrum methodologies for project management"]} image="/companies/ibwave.png" techs={["devicon-angularjs-plain", "devicon-typescript-plain", "devicon-csharp-plain", "devicon-selenium-original"]} />
            </div>
        </motion.div>
    )
}

export default WorkExperience