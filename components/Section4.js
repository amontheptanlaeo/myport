import React , { useRef , useEffect } from 'react'
import { motion } from "framer-motion"
// import Particles from "react-tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Section4({myContact}) {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
  }, []);
  return (
    <div ref={myContact} className='h-screen bg-black text-white mb-7 md:mb-10 flex justify-center items-center overflow-hidden flex-col rounded-tr-[5rem] sm:rounded-tr-[10rem] rounded-br-[5rem] sm:rounded-br-[10rem] transition-all duration-300 ease-linear mr-2 sm:mr-5 shadow-2xl shadow-[#EA88AF]'>
      <div data-aos='fade-up' className='mb-20'>
          <h1 className='text-white text-[30px] font-bold tracking-wider sm:text-[50px] transition-all duration-300 ease-linear'>My Infomation</h1>
      </div>
      <div className='flex justify-center items-center w-full mb-20'>
          <div data-aos='flip-left' className='m-auto'>
              <motion.img   animate={{y:[0,20,0]}} transition={{duration:1.5 , repeat:Infinity}}   className='cursor-pointer w-[150px]  h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover object-center rounded-full bg-[#fff] flex justify-center items-center p-2 transition-all duration-300 ease-linear' src='/Images/Me.jpg'/>
          </div>
      </div>
      <div data-aos='flip-right' className='mb-20 bg-[#fff] p-5 rounded-lg cursor-default shadow-2xl shadow-[#41B799]'>
          <p className='text-black text-[12px] font-bold tracking-wider sm:text-[20px] md:text-[25px] transition-all duration-300 ease-linear'><span className='text-black'>{'Graduated =>'}</span> (Kasetsart University)</p>
          <p className='text-black text-[12px] font-bold tracking-wider sm:text-[20px] md:text-[25px] transition-all duration-300 ease-linear'><span className='text-black'>{'Field of Study =>'}</span> (Computer Science)</p>
          <p className='text-black text-[12px] font-bold tracking-wider sm:text-[20px] md:text-[25px] transition-all duration-300 ease-linear'><span className='text-black'>{'GPA =>'}</span> (3.32)</p>
          <p className='text-black text-[12px] font-bold tracking-wider sm:text-[20px] md:text-[25px] transition-all duration-300 ease-linear'><span className='text-black'>{'Email =>'}</span> (Amontheptanlaeo111@gmail.com)</p>
      </div>
  </div>
  )
}

export default Section4