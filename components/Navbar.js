import React , { useState , useEffect }  from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
function Navbar({mySkill , myAbout , myContact , myHome , myCrypto}) {

  const [isOpen , setIsOpen] = useState(false)

  useEffect(() => {
    const re = () =>{
      if(window.innerWidth > 640){
       setIsOpen(false)
      }
    }

    window.addEventListener('resize', re)

    return () => {
      window.removeEventListener('resize', re)
    }
   
  },[]);



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
    <div className={`w-full bg-none ${isOpen ? 'h-screen items-start pt-[1.55rem] absolute':'h-20 items-center'} flex justify-between px-14  font-bold text-white text-[20px] absolute top-0 z-[9999] overflow-hidden `}>
        <motion.h1 initial={{x:-200}} animate={{ x: 0 }} transition={{ duration: 1 }} className='cursor-pointer hover:tracking-widest transition-all duration-100 ease-linear'>Amonthep</motion.h1>
        <motion.button initial={{x:200}} animate={{ x: 0 }} transition={{ duration: 1 }} className={`${isOpen ? 'pt-1':''} sm:hidden w-9 scale-150 flex justify-center`} onClick={()=>setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </motion.button>
        <div className={` ${isOpen ? 'right-0 fixed block':'right-[-700px] hidden'} sm:hidden w-full top-0 bg-[#E4778C] h-screen flex justify-center items-center flex-col gap-10 transition-all duration-300 ease-linear`}>
            <div className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]' onClick={()=>setIsOpen(!isOpen)}>X</div>
            <p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]' onClick={() => {
              myHome.current.scrollIntoView() 
              setIsOpen(!isOpen)}} >Home</p>
            <p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]' onClick={() => {
              mySkill.current.scrollIntoView()
              setIsOpen(!isOpen)}}>Skill</p>
            <p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]'onClick={() =>{ 
              myAbout.current.scrollIntoView()
              setIsOpen(!isOpen)
              }}>Certificate</p>
               <p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]'onClick={() =>{ 
              myContact.current.scrollIntoView()
              setIsOpen(!isOpen)
              }}>About</p>
            <p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]'onClick={() => {
              myCrypto.current.scrollIntoView()
              setIsOpen(!isOpen)
              }}>Coin</p>
              {/* <p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]'onClick={() => {
              myProject.current.scrollIntoView()
              setIsOpen(!isOpen)
              }}>Web3</p> */}
              <Link href={'https://github.com/amontheptanlaeo'} tar><a target='_blank'><p className='cursor-pointer transition-all duration-100 ease-linear hover:text-[#fff] text-[#fff]'onClick={() => {
              setIsOpen(!isOpen)
              }}>Github</p></a></Link>
        </div>
        <motion.ul variants={container}
            initial="hidden"
            animate="visible" className='gap-6 hidden sm:flex'>
            <motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#64C1ED] hover:border-[#64C1ED] text-[16px] md:text-[20px]' onClick={() => myHome.current.scrollIntoView()}>Home</motion.li>
            <motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#E4778C] hover:border-[#E4778C] text-[16px] md:text-[20px]'  onClick={() => mySkill.current.scrollIntoView() }>Skill</motion.li>
            <motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#7CE4BB] hover:border-[#7CE4BB] text-[16px] md:text-[20px]' onClick={() => myAbout.current.scrollIntoView()}>Certificate</motion.li>
            <motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#BF3C21] hover:border-[#BF3C21] text-[16px] md:text-[20px]'onClick={() => myContact.current.scrollIntoView()}>About</motion.li>
            <motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#EBCD51] hover:border-[#EBCD51] text-[16px] md:text-[20px]'onClick={() => myCrypto.current.scrollIntoView()}>Coin</motion.li>
            {/* <motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#64C1ED] hover:border-[#64C1ED] text-[16px] md:text-[20px]'onClick={() => myProject.current.scrollIntoView()}>Web3</motion.li> */}
            <Link href={'https://github.com/amontheptanlaeo'} tar><a target='_blank'><motion.li variants={item} className='cursor-pointer p-3 hover:border-b-2 transition-all duration-100 ease-linear hover:py-2 hover:text-[#A39EEF] hover:border-[#A39EEF] text-[16px] md:text-[20px]'>Github</motion.li></a></Link>
        </motion.ul>
    </div>
  )
}

export default Navbar