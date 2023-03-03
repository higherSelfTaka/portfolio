import React from 'react'
import {motion} from 'framer-motion'
import {tech} from '../constants'
import Image, { StaticImageData } from 'next/image'

type Props = {
    directionLeft?:boolean;
}

type Technology = {
  name:string,
  src: StaticImageData,
  proficiency:string,
}

function Skill({directionLeft}: Props) {
 
 const technology: Technology[]=tech
 
  return (


   
<>
{technology.map((item, i)=>(
  <div className="group relative flex cursor-pointer" key={i}>
        <Image
        // initial={{
        //     x:directionLeft ? -200 :200,
        //     opacity:0,
        // }}
        // transition={{duration:1}}
        // whileInView={{opacity:1, x:0}}
        alt=""
        width={200}
        height={200}
        src={item.src}
        className="rounded-full border border-gray-300 object-contain w-20 h-20 xl:w-32 xl:h-32 md:w-28 md:h-28
        filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 easse-in-out
         group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-[#c33a3a] opacity-100">{item.proficiency}</p>
            <p className="text-xl font-bold text-[#c33a3a] opacity-100">{item.name}</p>
            </div>
            
        </div>
    </div>
))}
</>
    
    
  )
}

export default Skill