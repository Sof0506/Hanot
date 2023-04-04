import React from 'react'
import {motion} from "framer-motion"
import { urlFor } from '../purple-frog';
import { ProjectInfo } from '../typings';


type Props = {
  projectInfo:ProjectInfo;
}

export default function home({projectInfo}: Props) {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='relative flex flex-col h-screen mx-auto text-center md:text-left md:flex-row max-w-6xl justify-evenly items-center'
    >
      <h3 className='absolute hidden lg:inline-flex top-20 uppercase tracking-[20px] text-gray-400 text-sm lg:text-2xl'>
        Home
      </h3>
      {
        projectInfo?.map((info)=>(
          <div className='flex flex-col items-center md:flex-row'>
            <motion.img
              className='w-40 h-40 rounded-full md:w-72 md:h-72 mx-auto md:mx-0 md:mr-8'
              initial={{y:-100,opacity:0}}
              transition={{duration:1.5}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              src={urlFor(info?.projectImage).url()} 
            />
            <div className='flex flex-col items-center md:items-start'>
              
              <div className='mt-4 lg:ml-20'>
                <h4 className='text-xl mt-6 text-center md:text-left font-semibold'>
                  Hanut
                </h4>
                <p className='text-base text-justify w-[400px] p-2 border border-[#F7AB0A] h-40 mt-2 overflow-y-scroll mx-auto md:w-[500px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] text-center md:text-left'>
                  {info.backgroundInformation}
                </p>
              </div>
              <button className="mt-4 lg:ml-20 bg-green-300 hover:bg-green-600 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center md:mb-4 md:mt-0">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <h4 className="text-center md:text-left">Download</h4>
              </button>
            </div>
            
          </div>
        ))
      }
    </motion.div>
  )
}
