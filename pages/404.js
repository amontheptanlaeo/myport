import React  from 'react'
import { motion } from "framer-motion"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function NotFound404() {
  return (
    <div className='h-screen bg-[#242135] transition-all duration-300 ease-linear overflow-hidden'>
    <motion.div initial={{scale:2}} animate={{scale:1}} transition={{duration:1}}>
      <Player
            autoplay
            loop
            src='https://assets5.lottiefiles.com/packages/lf20_q2pevjuc.json'
            className=' w-screen h-screen'
            >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </motion.div>
  </div>
  )
}

export default NotFound404