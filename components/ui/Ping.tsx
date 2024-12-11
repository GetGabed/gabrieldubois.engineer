import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    readonly Icon: React.ReactNode,
    readonly text: string,
}

function Ping({Icon, text}: Props) {
  return (
    <motion.div className='flex gap-1 py-1 pl-1 pr-2 border border-primary rounded-lg'
    whileHover={{ scale: 1.1 }}>
        {Icon}
        <span className='self-end h-[20px]'>{text}</span>
    </motion.div>
  )
}

export default Ping