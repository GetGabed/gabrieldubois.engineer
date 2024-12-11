
"use client";
import React from 'react'
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import Link from 'next/link';
import { 
    IconBrandGithub, 
    IconBrandLinkedin, 
    IconMail, 
    IconPinnedFilled, 
    IconLanguage,
    IconCar4wdFilled,
    IconCoffee,
    IconTrendingUp,
    IconStack3
} from '@tabler/icons-react';
import Ping from './ui/Ping';

const people = [
  {
    id: 1,
    name: "Gabe",
    designation: "0xCyberArchitect",
    image:
      "/../../../public/PFP.jpeg",
  },
]

function Profile() {
  return (
    <div className='border border-[#a2a7fb] p-6 rounded-md w-full frosted-glass'>
        <div className="flex justify-between">
            <div className="flex gap-2">
                <AnimatedTooltip items={people} />
                <div className="flex flex-col h-full justify-between">
                    <div className="flex gap-2">
                        <div className="p-1 animate-pulse bg-green-500 rounded-full h-1 w-1 self-center mb-1"/>
                        <p className='text-slate-400 inline-block align-bottom'>Available for work</p>
                    </div>
                    <h1 className='unset text-3xl league'>Gabriel Dubois</h1>
                    <p className='align-bottom text-xl text-primary '>Software Engineer</p>
                    {/* <div className="flex -ml-2">
                        <IconPinned className='w-6' stroke={1.5}/>
                    </div> */}
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-row justify-end m-0 gap-2 self-start">
                <Link href="mailto:gabrieldubois.eng@gmail.com" target='_blank' className='rounded-[10px] p-2 border border-gray-700 hover:border-primary group'>
                    <IconMail className='group-hover:text-primary'/>
                </Link>
                <Link href="https://github.com/Adissuu" target='_blank' className='rounded-[10px] p-2 border border-gray-700 hover:border-primary group'>
                    <IconBrandGithub className='group-hover:text-primary'/>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-dubois-soen/" target='_blank' className='rounded-[10px] p-2 border border-gray-700 hover:border-primary group'>
                    <IconBrandLinkedin className='group-hover:text-primary'/>
                </Link>
            </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
            <Ping Icon={<IconPinnedFilled className='text-primary w-[20px] h-[20px]' stroke={1.5}/>} text='Canada'/>
            <Ping Icon={<IconLanguage className='text-primary w-[20px] h-[20px]' stroke={1.5}/>} text='English, French & Spanish'/>
            <Ping Icon={<IconCar4wdFilled className='text-primary w-[20px] h-[20px]' stroke={1.5}/>} text='Formula 1 Enjoyer'/>
            <Ping Icon={<IconCoffee className='text-primary w-[20px] h-[20px]' stroke={1.5}/>} text='Just Coffee.'/>
            <Ping Icon={<IconTrendingUp className='text-primary w-[20px] h-[20px]' stroke={1.5}/>} text='10x Incoming'/>
            <Ping Icon={<IconStack3 className='text-primary w-[20px] h-[20px]' stroke={1.5}/>} text='Full-Stack'/>

        </div>
    </div>
  )
}

export default Profile


