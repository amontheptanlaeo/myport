import Head from 'next/head'
import { Navbar , Section1 , Section2 , Section3 , Section4 , Section5 , Section6} from '../components'
import React , { useRef }  from 'react'

export default function Home() {
  const myHome = useRef(null)
  const mySkill = useRef(null)
  const myAbout = useRef(null)
  const myContact = useRef(null)
  const myCrypto = useRef(null)
  // const myProject = useRef(null)
  return (
    <div>
      <Head>
        <title>Amonthep Portfolio</title>
        <meta name="description" content="Amonthep tanlaeo - portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar mySkill={mySkill} myAbout={myAbout} myContact={myContact} myHome={myHome} myCrypto={myCrypto}/>
      <Section1 myHome={myHome}/>
      <Section2 mySkill={mySkill}/>
      <Section3 myAbout={myAbout}/>
      <Section4 myContact={myContact}/>
      <Section5 myCrypto={myCrypto}/>
      {/* <Section6 myProject={myProject}/> */}
  </div>
  
  )
}
