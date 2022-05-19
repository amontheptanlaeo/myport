import React , { useRef , useEffect } from 'react'
import { motion } from "framer-motion"
// import Particles from "react-tsparticles";
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Section5({myCrypto}) {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
  }, []);
  return (
    <div ref={myCrypto} className='h-screen bg-black text-white mb-7 md:mb-10 flex justify-center items-center overflow-hidden flex-col rounded-tl-[5rem] sm:rounded-tl-[10rem] rounded-bl-[5rem] sm:rounded-bl-[10rem] transition-all duration-300 ease-linear ml-2 sm:ml-5 shadow-2xl shadow-[#EBCF55]'>
    <div data-aos='fade-up' className='mb-10'>
        <h1 className='text-white text-[30px] font-bold tracking-wider sm:text-[50px] transition-all duration-300 ease-linear'>My Crypto</h1>
    </div>
    <div data-aos='fade-up' className='mb-10'>
        <p className='text-white text-[15px] font-bold tracking-wider sm:text-[30px] transition-all duration-300 ease-linear'>POOPOO (POOP)</p>
    </div>
    <div data-aos='fade-up' className='mb-10'>
        <Link href='https://poocoin.app/tokens/0xf182c2fe6f1db155ffff841660456d6685136b6b'><a target='_blank'><p className='text-blue-300 cursor-pointer hover:tracking-[0.1rem] text-[10px] font-bold tracking-wider sm:text-[20px] transition-all duration-300 ease-linear'>0xf182c2fe6f1db155ffff841660456d6685136b6b</p></a></Link>
    </div>
    <div data-aos='fade-up' className='mb-10'>
        <p className='text-white text-[15px] font-bold tracking-wider sm:text-[30px] transition-all duration-300 ease-linear'>NutToken (NUTTO)</p>
    </div>
    <div data-aos='fade-up' className='mb-10'>
        <Link href='https://poocoin.app/tokens/0x2f36a4b753facc1788e87dfd79ddc8857fe49bcd'><a target='_blank'><p className='text-blue-300 cursor-pointer hover:tracking-[0.1rem] text-[10px] font-bold tracking-wider sm:text-[20px] transition-all duration-300 ease-linear'>0x2f36a4b753facc1788e87dfd79ddc8857fe49bcd</p></a></Link>
    </div>

    <motion.div data-aos='fade-down' >
        <Player
              autoplay
              loop
              src='https://assets5.lottiefiles.com/packages/lf20_y2j3e9ze.json'
              className='w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] transition-all duration-300 ease-linear'
              >
          </Player>
      </motion.div>
  </div>
  )
}

export default Section5