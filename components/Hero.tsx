import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from '../components/ BackgroundCircle'
import {me} from '../assets'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hi I am Taka from Japan",
            "React Develower | Web 3 Daaps Developer",
            "Social Designer",
            "Musician | Guitarist | Vocalist"],
            loop: true,
            delaySpeed:2000
    }) 
  return (
    <div className="text-[#a9a7a7] h-screen 
    flex flex-col space-y-8 
    items-center
    justify-center 
    text-center overflow-hidden">
      <BackgroundCircles/>
      <Image 
      src={me}
      alt="Picture of me"
      width={200}
      height={200}
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
    <div className="z-20">
     <h2 className="text-sm uppercase text-[#d8d4d4] tracking-[15px]"> Social Designer </h2> 
    <h1 className="text-3xl lg:text-4xl font-semibold px-10">
        <span className="text-[#c33a3a] mr-3">
            {text}
        </span>
        <Cursor cursorColor="#c33a3a" />
    </h1>

    <div className="pt-5">
      <Link href="#about">
      <button className="heroButton">About</button>
      </Link>
      <Link href="#experience">
      <button className="heroButton">Experience</button>
      </Link>
     <Link href="#skills">
     <button className="heroButton">Skills</button>
     </Link>
     <Link href="#project">
     <button className="heroButton">Projects</button>
     </Link>
     
    </div>

    </div>
    <div className="w-full absolute top-[30%] border border-[#f8f5f5] left-0 h-[500px] -skew-y-12 z-[-10]"/>
    <div className="w-full absolute top-[30%] border border-[#f8f5f5] left-0 h-[500px] skew-y-12 z-[-10]"/>    
    </div>
  )
}

export default Hero