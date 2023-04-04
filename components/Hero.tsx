import Link from 'next/link';
import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import { ProjectInfo } from "../typings";
import { urlFor } from '@/purple-frog';
import {motion} from "framer-motion"

type Props = {
    ProjectInfo:ProjectInfo;
}

export default function Hero({ProjectInfo}: Props) {
    const [text,count]=useTypewriter({
        words:[`Shop intelligently and securely with Hanut app, `,
        'Elevate your shopping experience with Hanut app',
        'Your one-stop-shop for all your needs, introducing Hanut'],
        loop:true,
        delaySpeed:2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
        <div className='mt-28'>
        <BackgroundCircles/>
        </div>
      
{
    ProjectInfo.map((info)=>(
<motion.img
            initial={{y:-300,opacity:0}}
            transition={{duration:1.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='h-16 w-16 lg:h-44 lg:w-44 mx-auto rounded-full'
            src={urlFor(info.projectImage).url()} />    ))
}
    
        
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 
            tracking-[20px]'>{}</h2>
        <h1 className='text-xl lg:text-2xl font-semibold px-10'>
        <span className='mr-3 '>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        
        </div>
        <div className='pt-1 flex space-x-6 '>
            <Link href="#home">
            <button className='heroButton'>Home</button>
            </Link>
            
            <Link href="#team">
            <button className='heroButton'>About us</button>
            </Link>
            <Link href="#service">
            <button className='heroButton'>Services</button>
            </Link>
            <Link href="#loginsignup">
            <button className='heroButton'>Signup</button>
            </Link>
           
        </div>
        
       

    </div>
  )
}