import React from 'react'
import {motion} from 'framer-motion'
import {companies} from '../constants'
import Image from 'next/image'

type Company = {
  name:string,
  src: string,
  location:string,
  role:string,
  start:string,
  end:string,
  dot1:string,
  dot2:string,
  dot3:string,
  dot4:string,
  intro:string
}
type Props = {

}

function ExperienceCard({} : Props) {

  const com : Company[]=companies

  return (

    <>
    {com.map((item,i)=>(
      <article key={i} className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#f7f2f2] p-10 hover:opacity-100 opacity-50 
      cursor-pointer transition-opacity duration-200 overflow-hidden">
        {/* <Image
         initial={{
          y:-100,
           opacity:0,
         }}
         transition={{duration:1.2}}
       whileInView={{opacity:1, y:0}}
         viewport={{once:true}}
  
        className="w-32 h-32 rounded-[8px]  xl:w-[150px] xl:h-[150px] object-contain object-center"
        src={item.src}
        alt=""
       /> */}
  
      <div className="px-0 md:px-10 text-[#6c6c6c] hover:text-[#e6b3b3] ">
          <h4 className="text-3xl font-light ">
             {item.role}
          </h4>
          <p className="font-bold text-xl mt-1">{item.name}</p>
          <div className="flex space-x-2 my-2">
              {/* tech used */}
              {/* <Image
              alt=""
              className="h-8 w-8 rounded-full"
              src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
              />
               <Image 
               alt=""
              className="h-8 w-8 rounded-full"
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              />
               <Image 
               alt=""
              className="h-8 w-8 rounded-full"
              src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
              /> */}
          </div>
          <p className="uppercase py-2 text-gray-400 ">(Location: {item.location}) Started :{item.start} - Ended : {item.end} </p>
          
          <p className="py-2 text-text-gray-400">{item.intro}</p>

          <ul className="list-disc space-y-2 ml-5 text-sm">
              <li>{item.dot1}</li>
              <li>{item.dot2}</li>
              <li>{item.dot3}</li>
              <li>{item.dot4}</li>
           
  
          </ul>
      </div>
      </article>
    ))}

  

    </>
  )
}

export default ExperienceCard