'use client'

import { useState } from 'react'
import WelcomeScreen from '@/components/ui/WelcomeScreen'
import NavBar from '@/components/NavBar'
import Hero from '@/components/sections/Hero'
import DomainCards from '@/components/sections/DomainCards'
import StackedProjects from '@/components/sections/StackedProjects'
import ScrollingRows from '@/components/ui/ScrollingRows'
import Research from '@/components/sections/Research'
import Books from '@/components/sections/Books'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import IconDock from '@/components/ui/IconDock'

export default function Home() {
  const [welcomed, setWelcomed] = useState(false)

  return (
    <main className="min-h-screen">
      <WelcomeScreen onComplete={() => setWelcomed(true)} />
      <div style={{
        opacity: welcomed ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}>
        <IconDock />
        <NavBar />
        <Hero />
        <ScrollingRows />
        <DomainCards />
        <StackedProjects />
        <Research />
        <Books />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}