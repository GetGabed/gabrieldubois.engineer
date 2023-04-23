import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/UI/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-light dark:bg-dark snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Gabriel Dubois</title>
      </Head>

      <Layout>
        {/* {Hero} */}
        <section id='hero' className='snap-center'>
          <Hero />
        </section>
        {/* {About} */}
        <section id='about' className='snap-center'>
          <About />
        </section>

        {/* {Experience}} */}

        {/* {Skills} */}

        {/* {Projects} */}

        {/* {Contact ME} */}
      </Layout >

    </div>
  )
}

export default Home;