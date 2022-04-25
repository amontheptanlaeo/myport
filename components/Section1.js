import React  from 'react'
import { motion } from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';
function Section1({myHome}) {
  return (
    <div ref={myHome} className='h-screen bg-black text-black flex justify-center items-center rounded-bl-[10rem] sm:rounded-bl-[20rem] md:rounded-bl-[45rem]  overflow-hidden mb-7 md:mb-10 transition-all duration-300 ease-linear shadow-2xl shadow-[#A5A1F1]'>
      <motion.div initial={{scale:1.5}} animate={{scale:1}} transition={{duration:1}}>
        <Player
              autoplay
              loop
              src='https://assets4.lottiefiles.com/packages/lf20_g3dzz0wz.json'
              //src="https://assets9.lottiefiles.com/packages/lf20_l4ny0jjm.json"
              // className='w-full h-full rotate-90 sm:rotate-180 md:rotate-0'
              className='w-[1650px] h-[1000px] sm:w-[2000px] sm:h-screen transition-all duration-300 ease-linear'
              >
          </Player>
      </motion.div>
      {/* <img className='object-cover w-screen h-screen rounded-bl-[50rem]' src='https://www.payakornber.com/wp-content/uploads/revslider/slider_8/video-bg.jpg'/> */}
      <motion.div initial={{scale:0}} drag dragConstraints={{top:0 , right:0 , left:0, bottom:0}} animate={{scale:1,y:[0,20,0]}} transition={{duration:1.2 }} className='absolute right-30 top-80 sm:right-32 flex justify-center items-center text-black bg-[#62BEF0] shadow-lg shadow-[#66d9a983]  cursor-grabbing rounded-3xl pl-10 pr-10 pt-5 pb-5 test font-bold transition-all duration-300 ease-linear'>
        <div>
          <h1 className='text-[12px] sm:text-[16px] text-black transition-all duration-300 ease-linear'><span className='text-[20px] sm:text-[20px] transition-all duration-300 ease-linear'>My</span> name is <span className='text-black'>Amonthep Tanlaeo</span></h1>
          <h1 className='text-[12px] sm:text-[16px] transition-all duration-300 ease-linear'>Graduated: <span className='text-black'>Kasetsart University</span></h1>
        </div>
      </motion.div>
    </div>
  )
}

export default Section1