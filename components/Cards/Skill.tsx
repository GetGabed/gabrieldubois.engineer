import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    iconName?: string;
}

function Skill({ directionLeft, iconName }: Props) {
    return (
        <motion.div
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1, ease: [0.25, 0.67, 0.83, 0.17] }}
            whileInView={{ opacity: 1, x: 0 }}
            className='group relative flex bg-gray-400 dark:bg-dark-light rounded-full'>
            <i className={`${iconName} rounded-full border border-2 border-red-500 text-6xl text-center p-4 xl:p-5 object-cover w-24 h-24 xl:text-[5.3rem] xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out`} />
        </motion.div>
    )
}

export default Skill