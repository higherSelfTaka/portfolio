import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import {companies} from '../constants'


type Props = {

}



function Experience({}: Props) {


 
   
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative overflow-hidden 
    flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
       <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c33a3a] text-xl">
        Experience
       </h3>

       {/* <div className="w-full flex space-x-5 overflow-w-scroll p-10 snap-x snap-mandatory"> */}
       <div className="w-full flex space-x-5 overflow-x-scroll p-7 snap-x snap-mandatory
        scrollbar scrollbar-track-[#ffffff]/40 scrollbar-thumb-[#c33a3a]/80
       ">
     
      <ExperienceCard />
    
       
       
       </div>

    </motion.div>
  )
}

export default Experience