import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import Marquee from '@/components/Marquee'
import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {

  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("Software Engineer")
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["red", "green", "blue", "purple"];
  const titles = ["Software Engineer", "Student", "Game Programmer", "Dreamer"];
  
  useEffect(() => {
    const storedColor = localStorage.getItem('color');
    const storedTitle = localStorage.getItem('title');
    if (storedColor) {
      setColor(JSON.parse(storedColor));
      setTitle(JSON.parse(storedTitle));
    }
  }, []);

  function changeColor(newIndex) {
    setCurrentIndex(newIndex);
    setColor(colors[newIndex]);
    setTitle(titles[newIndex]);
    localStorage.setItem('color', JSON.stringify(colors[newIndex]));
    localStorage.setItem('title', JSON.stringify(titles[newIndex]));
  }


  return (
    <>
      <Layout>

        <div className="flex flex-col items-center hero">


          <div className="flex">
            <ArrowLeftCircleIcon className={`w-10 cursor-pointer ${color}`} onClick={() => changeColor((currentIndex - 1 + colors.length) % colors.length)} />
          <h1 className="hero-p text-6xl text-current unselectable">Hello, my name is Gabriel</h1>
            <ArrowRightCircleIcon className={`w-10 cursor-pointer ${color}`} onClick={() => changeColor((currentIndex + 1) % colors.length)} />
          </div>
            <Hero title={title} color={color} />
          <div className='hero-link'>
            <div className="mt-1 flex items-center">
            <ArrowUturnRightIcon className='w-6 mr-2'></ArrowUturnRightIcon>
            <Link className='text-2xl unselectable' href="/about">Learn more</Link>
          </div>
            <hr className='underline-link'/>
            </div>
          

        </div>
        <Marquee color={color} title={title}></Marquee>
      </Layout>
    </>
  )
}
