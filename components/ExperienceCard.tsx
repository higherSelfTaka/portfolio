import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#f8f7f7] p-10 hover:opacity-100 opacity-50 
    cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img 
      initial={{
        y:-100,
        opacity:0,
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}

      className="w-32 h-32 rounded-[8px]  xl:w-[80px] xl:h-[80px] object-contain object-center"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/MBIA-Logo.svg/1280px-MBIA-Logo.svg.png"
      alt=""
     />

    <div className="px-0 md:px-10 hover:text-[#727070]">
        <h4 className="text-4xl font-light ">
            CEO of Nirvana Consultant 
        </h4>
        <p className="font-bold text-2xl mt-1">Nirvan Consultant KK</p>
        <div className="flex space-x-2 my-2">
            {/* tech used */}
            <img 
            className="h-8 w-8 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            />
             <img 
            className="h-8 w-8 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            />
             <img 
            className="h-8 w-8 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... -Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>IT management for Japanese authentic dolls industry</li>
            <li>Non Profit Organization Consulting</li>
            <li>Corporate Website Developments</li>
            <li>Call Center Execusion and Development</li>
            <li>Inbound Traval Branding and Consultancy</li>

        </ul>
    </div>
    </article>
  )
}

export default ExperienceCard