import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
        return techs.map((t, i) => (
            <li className="mr-2" key={i}>
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
                whileInView={{ opacity: 1, y: 0 }}
                className='pacifico text-6xl space-y-4 z-10'>
                Hello,<br /> Projects Go Here
            </motion.div>
        </>
    )
}

export default MainProject