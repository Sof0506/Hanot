import React from 'react'
import {motion} from "framer-motion"
import { team } from '../typings'
import { urlFor } from '../purple-frog';



type Props = {
  team:team; 
}

export default function Team({team}: Props) {
  
  return (
    <div className='relative h-screen flex overflow-hidden
     flex-col text-left md:flex-row max-w-full justify-evenly 
     mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[20px]
     text-gray-500 text-2xl'>team</h3>
     <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
       {/*Projects */}
       {team?.map((member,i)=>(
        <div className='w-screen snap-x flex-shrink-0 snap-center md:flex-col 
        space-y-5 items-center p-28 justify-center  md:p-44 h-screen'>
            <motion.img
            initial={{y:-300,opacity:0}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='h-16 w-16 mt-20 mx-auto'
            src={urlFor(member.image).url()} />
        <div className='space-y-10 px-0 md:px-10 mx-auto '>
            <h4 className='text-xs md:text-xl lg:text-2xl font-semibold
             text-center'>
            <span className='underline text-xs md:text-xl lg:text-2xl decoration-[#F7AB0A]/50'>
              Member {i+1} of {team.length}:   {member.fullname}</span>
             
              <p>{member.role}</p>
                </h4>
        </div>
        </div>

       ))}

     </div>

     <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10
      left-0 h-[300px] -skew-y-12'>

     </div>

    </div>
  )
}