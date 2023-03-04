import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Link from 'next/link'
import { up1, up2 } from '../assets'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="text-[#d8d4d4] h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-[#c33a3a]/40 scrollbar-thumb-[#c33a3a]/80" >
      <Head>
        <title>Taka's Portfolio</title>
      </Head>

      {/* Haeder */}
      <Header/>

     {/* Hero */}
     <section id="hero" className="snap-start" >
      <Hero/>
     </section >
     {/* About */}
     <section id="about" className="snap-center">
      <About/>
     </section>

     {/* Experience */}
      <section id="experience" className="snap-center">
      <Experience/>
     </section>

     
     {/* Skill */}
     {/* <section id="skills" className="snap-start">

      <Skills/>
     </section> */}

     {/* Project */}
     <section id="project" className="snap-start">
      <Project/>
     </section>

      {/* Contacrt */}
      <section id="contact" className="snap-start">
      <Contact/>
     </section>

     <Link href="#hero">
     <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <Image 
        alt=""
        className="h-10 w-10 rounded-full filter grascale hover:grayscale-0 cursor-pointer"
        width={15} height={15}
        src={up1}/>
      </div>
     </footer>
     
     </Link>

    
    </div>
  )
}

export default Home
