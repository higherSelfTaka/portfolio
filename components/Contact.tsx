import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

type Props = {}

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly 
    mx-auto items-center">


        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c33a3a] text-xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-2xl font-semibold text-center">
                Here is my contact form ! {" "}
                <span className="decoration-[#F7ab0a]/50 underline">Let's discuss</span>
            </h4>

            <div className="space-y-2">
                <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#c33a3a] h-6 w-6 animate-pulse"/>
                <p className="text-sm">+81(0)8022231212</p>

                </div>

                <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#c33a3a] h-6 w-6 animate-pulse"/>
                <p className="text-sm">haratakayasu09060071672@gmail.com</p>

                </div>

                <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#c33a3a] h-6 w-6 animate-pulse"/>
                <p className="text-sm">Address : anywhere on the globe</p>

                </div>
             
            </div>

          <form className="flex flex-col space-y-2 w-fit mx-auto bg-[#ebe7e7] px-2 pt-2 pb-2" >
            <div className="flex space-x-1">
                <input placeholder="Name" className="contactInput" type="text"/>
                <input placeholder="Email" className="contactInput" type="email"/>
            </div>
               <input placeholder="Subject" className="contactInput" type="text"/>
               <textarea placeholder="Messages"  className="contactInput"/>
           <button type="submit" className="bg-[#f7ab0a] py-2 px-5 rounded-md text-white font-bold">Submit</button>
          </form>


        </div>

    </div>
  )
}

export default Contact