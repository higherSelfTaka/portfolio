import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Project({}: Props) {

    const  projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto
    items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c33a3a] text-xl">
            Project
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
         scrollbar scrollbar-thin scrollbar-track-[#ffffff]/40 scrollbar-thumb-[#c33a3a]/80">

            {/* project */}
            {projects.map((proj, i)=>(
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen " >
                    <motion.img 
                     initial={{
                        y:-300,
                        opacity:0,
                     }}
                     transition={{duration:1.2}}
                     whileInView={{opacity:1, y:0}}
                     viewport={{once:true}}
                    src="" 
                    alt=""/>

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-2xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} : </span>
                         {" "} Projects
                        </h4>
                        <p className="text-md text-center md:text-left">
                            I am currently working on SNS solution for the philanthropic project which saves the victims of various
                            abuses in Japan including sexual harassments, rapes, economic abuses and domestic violences. The project primary 
                            objective is to provide psychological care for people with any psychosis triggered by abuses such as PTSD, CPTSD, depression
                            and schizopherenia 
                        </p>
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