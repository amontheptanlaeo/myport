import Head from 'next/head'
import Image from 'next/image'
import { Navbar , Section1 , Section2 } from '../components'
import React , { useRef }  from 'react'

export default function Home() {
  const myHome = useRef(null)
  const mySkill = useRef(null)
  const myAbout = useRef(null)
  const myContact = useRef(null)
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar mySkill={mySkill} myAbout={myAbout} myContact={myContact} myHome={myHome} />
      <Section1 myHome={myHome}/>
      <Section2 mySkill={mySkill}/>
  </div>
  
  )
}
