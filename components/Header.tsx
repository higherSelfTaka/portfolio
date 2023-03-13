import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {logon} from '../assets'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">

              <Image
                     className="rounded-full mr-12"
                    src={logon}
                    width={50}
                    height={50}
                    alt=""/>  

        {/* Social icoms */}
        <SocialIcon 
        url="https://youtube.com/@economic_abuses_Japan"
        fgColor="#d8d4d4"
        bgColor='transparent'
        />
         <SocialIcon 
        url="https://twitter.com/NpmMore"
        fgColor="#d8d4d4"
        bgColor='transparent'
        />
         <SocialIcon 
        url="https://github.com/higherSelfTaka/"
        fgColor="#d8d4d4"
        bgColor='transparent'
        />
      </motion.div>
      
      <motion.div 
       initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{duration:1}}
      className="flex flex-row items-center ">
        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor='#d8d4d4'
        bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#d8d4d4]">Reach me Out</p>

      </motion.div>
    </header>
  )
}

export default Header
