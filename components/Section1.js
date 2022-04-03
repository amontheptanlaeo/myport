import React from 'react'
import { motion } from "framer-motion"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function Section1() {
  return (
    <div className='h-screen bg-black text-white flex justify-center items-center rounded-bl-[50rem] overflow-hidden'>
      <motion.div initial={{scale:0.2}} animate={{scale:1 , rotate:360}} transition={{duration:1}}>
        <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_l4ny0jjm.json"
              // className='w-full h-full rotate-90 sm:rotate-180 md:rotate-0'
              className=' w-screen h-screen rounded-bl-[50rem]'
              >
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
      </motion.div>
     
      {/* <img className='object-cover w-screen h-screen rounded-bl-[50rem]' src='https://www.payakornber.com/wp-content/uploads/revslider/slider_8/video-bg.jpg'/> */}
      <motion.div animate={{y:[0,20,0]}} transition={{duration:2.5 , repeat:Infinity}} className='absolute right-32 flex justify-center items-center text-white bg-[#C56D0C] rounded-3xl pl-10 pr-10 pt-5 pb-5'>
        <h1>Amonthep Tanlaeo</h1>
      </motion.div>
    </div>
  )
}

export default Section1