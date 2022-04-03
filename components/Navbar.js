import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
function Navbar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className='w-full bg-none h-20 flex justify-between px-14 items-center font-bold text-white text-[20px] absolute top-0 z-[9999]'>
        <motion.h1 initial={{x:-200}} animate={{ x: 0 }} transition={{ duration: 1 }} className='cursor-pointer'>Amonthep 👽</motion.h1>
        <button className='sm:hidden w-9 hover:scale-150 flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </button>
        
        <motion.ul variants={container}
    initial="hidden"
    animate="visible" className='gap-6 hidden sm:flex'>
            <Link href={'/Homne'}><motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-orange-500 hover:border-orange-500 text-[16px] md:text-[20px]'>Home</motion.li></Link>
            <Link href={'/Homne'}><motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-orange-500 hover:border-orange-500 text-[16px] md:text-[20px]'>Skill</motion.li></Link>
            <Link href={'/Homne'}><motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-orange-500 hover:border-orange-500 text-[16px] md:text-[20px]'>About</motion.li></Link>
            <Link href={'/Homne'}><motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-orange-500 hover:border-orange-500 text-[16px] md:text-[20px]'>Contact</motion.li></Link>
        </motion.ul>
    </div>
  )
}

export default Navbar