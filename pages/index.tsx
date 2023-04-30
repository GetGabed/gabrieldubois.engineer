import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/UI/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import { useEffect, useState } from 'react'

const colors = ['red', 'blue', 'green', 'yellow']

function useStickyState(defaultValue: string | undefined, key: string): [string | undefined, (v: string) => void] {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    const stickyValue = localStorage.getItem(key)
    if (stickyValue !== null) {
      setValue(stickyValue)
    }
  }, [key, setValue])

  return [value, (v) => {
    localStorage.setItem(key, v)
    setValue(v)
  }]
}

const Home: NextPage = () => {
  const [color, setColor] = useStickyState(undefined, 'theme-color');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div className={['h-screen bg-light dark:bg-dark snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-gray-400/20 scrollbar-thumb-primary scrollbar-thumb-opacity-80 scrollbar-thin', `theme-${color}`].join(' ')}>
      <Head>
        <title>Gabriel Dubois</title>
      </Head>

      <Layout indexColorChange={handleColorChange} colorized={color} home='#hero'>
        <section id='hero' className='snap-center'>
          <Hero colorizeded={color} />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='experience' className='snap-center'>
          <WorkExperience />
        </section>

        <section id='skills' className='snap-center'>
          <Skills />
        </section>

        <section id='projects' className='snap-center'>
          <Projects />
        </section>

        <section id='contact' className='snap-center'>
          <ContactMe />
        </section>

      </Layout >
    </div>

  )
}

export default Home;