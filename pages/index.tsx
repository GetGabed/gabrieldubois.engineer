import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/UI/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-light dark:bg-dark snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Head>
        <title>Gabriel Dubois</title>
      </Head>

      <Layout>
        <section id='hero' className='snap-center'>
          <Hero />
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