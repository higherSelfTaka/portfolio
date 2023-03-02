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

const Home: NextPage = () => {
  return (
    <div className="text-[#d8d4d4] h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0" >
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
     <section id="skills" className="snap-start">

      <Skills/>
     </section>

     {/* Project */}
     <section id="project" className="snap-start">
      <Project/>
     </section>

      {/* Contacrt */}
      <section id="contact" className="snap-start">
      <Contact/>
     </section>

    
    </div>
  )
}

export default Home
