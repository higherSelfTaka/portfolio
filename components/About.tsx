import React from 'react'
import {motion} from 'framer-motion' 
import Image from 'next/image'
import me from '../assets/me.png'

type Props = {}

function About({}: Props) {
  return (
<div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c33a3a] text-xl">
        About
    </h3>
   
    <Image 
        // initial={{
        //     x:-200,
        //     opacity:0,
        // }}
        // transition={{
        //     duration:1.2
        // }}
        // whileInView={{ opacity:1, x:0}}
        // viewport={{once:true}}
      src="data:image/jpeg;base64,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"
      alt="Picture of me"
      className="-mb-20 md:mb-0 flex-shrink-0 w-46 h-46 rounded-full object-cover
      md:rounded-lg md:w-64 md:h-95 xl:w-[250px] xl:h-[250px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
            Here is my <span className="underline decoration-[#c33a3a]">little</span>  background
            </h4>
            <p className="text-[#9c9999] text-sm">
            I have been experienced a social alienation in Japan due to the political and religious complications and went though all different types of harassments from the current system of Japan which has been socially distorted and culturally modified from original authentic and traditional convention and values. I am from an old family of Japanese. Many Japanese are now confronted with various type of segregation in the society and they has been forced to be impoverished or kicked out from the main stream in every scenes,  including media, politics and businesses since Koizumi cabinet founded in 2006.  
            Though my experience, I decided to break shell out of my comfort zone and speak up! This channel objective is to help victims of abuses such as economic abuses, gaslighting, sexual harassments & abuse, child abuse and corporate coercive controls by providing crowdfunding for good causes and facilitate the solidarity among victims of abuses 


            </p>
      </div>
</div>

  )
}

export default About