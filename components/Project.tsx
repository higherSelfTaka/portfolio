import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {project} from '../constants'

type Props = {}

type Project ={
    name:string,
    completion:string,
    front:string,
    back:string,
    deal:string,
    short:string,
    description:string
}

function Project({}: Props) {

    //const  projects = [1, 2, 3, 4, 5];
    const projects : Project[] = project
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto
    items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c33a3a] text-xl">
            Tech-Project
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
         scrollbar scrollbar-thin scrollbar-track-[#ffffff]/40 scrollbar-thumb-[#c33a3a]/80">

            {/* project */}
            {projects.map((proj, i)=>(
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen " key={i} >
                    {/* <motion.Image
                      initial={{
                         y:-300,
                         opacity:0,
                     }}
                    transition={{duration:1.2}}
                     whileInView={{opacity:1, y:0}}
                     viewport={{once:true}}
                    src="" 
                    width={100}
                    height={100}
                    alt=""/> */}

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-2xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} : </span>
                         {" "} {proj.name}
                        </h4>
                        <h4 className="text-xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50"> Fontend : {proj.front} </span> |
                            <span className="underline decoration-[#F7AB0A]/50"> Backend : {proj.back} </span>
                        </h4>
                        <div className="text-md text-center md:text-left">
                            {proj.short}
                            <p className="text-[14px] text-center md:text-left">
                            {proj.description}
                        </p>
                        </div>
                       
                    </div>
                </div>
            ))}
        </div>

        {/* <div className="w-full absolute top-[30%] bg-[#c33a3a]/10 left-0 h-[500px] -skew-y-12"/> */}
        <div className="w-full absolute top-[30%] border border-[#d0cbcb] left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}

export default Project