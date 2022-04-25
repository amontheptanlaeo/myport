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
    <div ref={mySkill} className='h-screen bg-black text-white flex justify-center items-center overflow-hidden  mb-7 md:mb-10 flex-col rounded-tr-[5rem] rounded-br-[5rem] sm:rounded-tr-[10rem] sm:rounded-br-[10rem] transition-all duration-300 ease-linear mr-2 sm:mr-5 hadow-2xl shadow-[#53B8EC]'>
    <div data-aos='fade-up' className='mb-20'>
        <h1 className='text-white text-[30px] font-bold tracking-wider sm:text-[50px] transition-all duration-300 ease-linear'>My Skill</h1>
    </div>
    <div className='flex justify-evenly items-center w-full mb-20'>
        <div data-aos='fade-down' >
            <motion.img   animate={{y:[0,30,0]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#53B8EC] transition-all duration-300 ease-linear object-contain' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'/>
        </div>
        <div data-aos='fade-down' >
            <motion.img    animate={{y:[30,0,30]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#EA86A0] transition-all duration-300 ease-linear object-contain' src='https://camo.githubusercontent.com/c457309037aabdce151cc0e197d6db98234a31636ef41f2cc1c339832fe20de3/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f6c6f676f732f6e6578746a732d6c6f676f2e706e67'/>
        </div>
        <div data-aos='fade-down' >
            <motion.img    animate={{y:[0,30,0]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#79E3B8] transition-all duration-300 ease-linear object-contain' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'/>
        </div>
        <div data-aos='fade-down' >
            <motion.img    animate={{y:[30,0,30]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#EBCF55] transition-all duration-300 ease-linear object-contain' src='https://www.svgrepo.com/show/303360/nodejs-logo.svg'/>
        </div>
    </div>
    <div className='flex justify-evenly items-center w-full'>
        <div data-aos='fade-up' >
            <motion.img    animate={{y:[30,0,30]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#EBCF55] transition-all duration-300 ease-linear object-contain' src='https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png'/>
        </div>
        <div data-aos='fade-up' >
            <motion.img   animate={{y:[0,30,0]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#53B8EC] transition-all duration-300 ease-linear object-cover' src='https://sites.google.com/site/unitytanapol/_/rsrc/1475545723120/home/0.jpg'/>
        </div>
        <div data-aos='fade-up' >
            <motion.img    animate={{y:[30,0,30]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#EA86A0] transition-all duration-300 ease-linear object-contain' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png'/>
        </div>
        <div data-aos='fade-up' >
            <motion.img    animate={{y:[0,30,0]}} transition={{duration:2 , repeat:Infinity}}   className='cursor-pointer w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white flex justify-center items-center p-2 shadow-xl shadow-[#79E3B8] transition-all duration-300 ease-linear object-contain' src='https://www.codebee.co.th/labs/wp-content/uploads/2017/03/firebase-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.png'/>
        </div>
      
    </div>
   
</div>
  )
}

export default Section2