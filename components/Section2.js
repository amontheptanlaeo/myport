import React , { useRef , useEffect } from 'react'
import { motion } from "framer-motion"
// import Particles from "react-tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Section2({mySkill}) {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
  }, []);
  return (
    <div ref={mySkill} className='h-screen bg-black text-white flex justify-center items-center overflow-hidden flex-col rounded-tr-[10rem] sm:rounded-tr-[20rem] md:rounded-tr-[30rem]'>
    <div data-aos='fade-up' className='mb-20'>
        <h1 className='text-white text-[30px] font-bold tracking-wider sm:text-[50px]'>My Skill</h1>
    </div>
    <div className='flex justify-center items-center w-full'>
        <div data-aos='fade-down' className='m-auto'>
            <motion.img   animate={{y:[0,20,0]}} transition={{duration:1.5 , repeat:Infinity}}   className='cursor-pointer w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'/>
        </div>
        <div data-aos='fade-down' className='m-auto'>
            <motion.img    animate={{y:[0,20,0]}} transition={{duration:1.5 , repeat:Infinity}}   className='cursor-pointer w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2' src='https://camo.githubusercontent.com/c457309037aabdce151cc0e197d6db98234a31636ef41f2cc1c339832fe20de3/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f6c6f676f732f6e6578746a732d6c6f676f2e706e67'/>
        </div>
        <div data-aos='fade-down' className='m-auto'>
            <motion.img    animate={{y:[0,20,0]}} transition={{duration:1.5 , repeat:Infinity}}   className='cursor-pointer w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'/>
        </div>
        <div data-aos='fade-down' className='m-auto'>
            <motion.img    animate={{y:[0,20,0]}} transition={{duration:1.5 , repeat:Infinity}}   className='cursor-pointer w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2' src='https://www.svgrepo.com/show/303360/nodejs-logo.svg'/>
        </div>
    </div>
   
</div>
  )
}

export default Section2