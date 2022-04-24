import React , { useRef , useEffect } from 'react'
import { motion } from "framer-motion"
// import Particles from "react-tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Section3({myAbout}) {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
  }, []);
  return (
    <div ref={myAbout} className='h-screen bg-black text-white mb-10 md:mb-20 flex justify-center items-center overflow-hidden flex-col rounded-tl-[5rem] sm:rounded-tl-[10rem] rounded-bl-[5rem] sm:rounded-bl-[10rem] transition-all duration-300 ease-linear ml-5 sm:ml-10 md:ml-20'>
    <div data-aos='fade-up' className='mb-20'>
        <h1 className='text-white text-[30px] font-bold tracking-wider sm:text-[50px] transition-all duration-300 ease-linear'>My Certificate</h1>
    </div>
    <div className='flex justify-center items-center w-full'>
        <div data-aos='flip-down' className='m-auto'>
            <motion.img   animate={{y:[0,20,0]}} transition={{duration:1.5 , repeat:Infinity}}   className='cursor-pointer w-[300px] sm:w-[400px] md:w-[550px] lg:w-[700px] bg-white flex justify-center items-center p-2 transition-all duration-300 ease-linear' src='/Images/Certificate.jpg'/>
        </div>
    </div>
   
</div>
  )
}

export default Section3