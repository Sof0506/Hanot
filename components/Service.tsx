import React from 'react'
import {motion} from "framer-motion"
import {service} from "../typings"
import Link from 'next/link';
import { urlFor } from '../purple-frog';
type Props = {
  service:service;

}

export default function Service({service}: Props) {

  
  return (
    <div className='relative h-screen flex overflow-hidden
     flex-col text-left md:flex-row max-w-full justify-evenly 
     mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[20px]
     text-gray-500 text-2xl'>Services</h3>
     <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
       {/*Projects */}
       {service?.map((srv,i)=>(
        <div className='w-screen flex-shrink-0 snap-center md:flex-col 
        space-y-5 items-center p-28 justify-center  md:p-44 h-screen'>
            <motion.img
            initial={{y:-300,opacity:0}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='h-16 w-16 mt-20 mx-auto'
            src={urlFor(srv.image).url()} />
        <div className='space-y-10 px-0 md:px-10 mx-auto '>
            <h4 className='text-xs md:text-xl lg:text-2xl font-semibold
             text-center'>
            <span className='underline text-xs md:text-xl lg:text-2xl decoration-[#F7AB0A]/50'>
              Service {i+1} of {service.length}:  {srv.servicename} </span>
                </h4>
                <div className='flex items-center space-x-2 justify-center'>
              
                
              <p>{srv.servicedescription}</p>
                  </div>
                
        </div>
        </div>

       ))}

     </div>

    </div>
  )
}