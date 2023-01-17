import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import Marquee from '@/components/Marquee'
import Hero from '@/components/Hero'

export default function Home() {

  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("Software Engineer")
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["red", "green", "blue", "purple"];
  const titles = ["Software Engineer", "Student", "Game Programmer", "Dreamer"];

  function changeColor(newIndex) {
    setCurrentIndex(newIndex);
    setColor(colors[newIndex]);
    setTitle(titles[newIndex]);
  }

  return (
    <>
      <Layout>

        <div className="flex flex-col items-center hero">

          <h1 className="hero-p text-6xl text-current">Hello, the name's Gabriel</h1>

          <div className="flex">
            <ArrowLeftCircleIcon className={`w-10 cursor-pointer ${color}`} onClick={() => changeColor((currentIndex - 1 + colors.length) % colors.length)} />
            <Hero title={title} color={color} />
            <ArrowRightCircleIcon className={`w-10 cursor-pointer ${color}`} onClick={() => changeColor((currentIndex + 1) % colors.length)} />
          </div>
          <div className="mt-1 flex items-center hero-link hover:border-b border-current">
            <ArrowUturnRightIcon className='w-6 mr-2'></ArrowUturnRightIcon>
            <h1 className='text-2xl'>Learn more about the product that I am</h1>
          </div>

        </div>
        <Marquee color={color} title={title}></Marquee>
      </Layout>
    </>
  )
}
