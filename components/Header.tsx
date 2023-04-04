import React from "react";
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import Link from "next/link";
type Props = {
  socials:Social[];
}

export default function Header({socials}: Props) {
  console.log("Social media URLs: ", socials.map(social => social.url));

  return (
    <header className="sticky top-0 p-2 z-20 flex items-start shadow-md w-full justify-between mx-auto max-w-7xl xl:items-center">
       
      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale:0.5,
        
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,

      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
        {/*Social */}
        
      </motion.div>
      <Link href="#contact">
      <motion.div 
      initial={{
        x:400,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{duration:1.5}}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        {
    socials.map((social)=>(
        <SocialIcon       
        key={social._id}
        url={social.url}
        fgColor="gray"
        bgColor="transparent"
      />
      ))
}
        <p className="uppercase hidden md:inline-flex text-sm
         text-gray-400">Contact us</p>
      </motion.div>
      </Link>
     
      
    </header>
  );
}
