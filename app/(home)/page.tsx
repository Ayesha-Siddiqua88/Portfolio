import React from 'react'
import Navbar from './components/Navbar' 
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Education from './components/Education'
export default function page() {
  return (
    <div className='min-h-screen bg-black  overflow-hidden '>
      <div className='dark:bg-black dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
      <div className='max-w-7xl mx-auto p-5'>
        <Navbar/>
        <HeroSection/>
        
      </div>
      <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left0-0 xl:-bottom-14 w-full'>

      </div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
      <Skills/>
      <Education/>
      <Projects/>
      <Footer/>
      </div>
    
    </div>
  )
}
