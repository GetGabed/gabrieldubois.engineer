import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Marquee from '@/components/Marquee'

export default function Home() {

  const [color, setColor] = useState("red");
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["red", "green", "blue", "purple"];

  function changeColor(newIndex) {
    setCurrentIndex(newIndex);
    setColor(colors[newIndex]);
  }

  return (
    <>
      <Layout>

        <div className="flex justify-center">
          <ArrowLeftCircleIcon className='w-10 cursor-pointer' onClick={() => changeColor((currentIndex - 1 + colors.length) % colors.length)}> Previous</ArrowLeftCircleIcon>
          <ArrowRightCircleIcon className='w-10 cursor-pointer' onClick={() => changeColor((currentIndex + 1) % colors.length)}>Next</ArrowRightCircleIcon>
        </div>
        <Marquee color={color} title="G@mer"></Marquee>
      </Layout>
    </>
  )
}
