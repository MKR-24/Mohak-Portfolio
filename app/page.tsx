import NavBar  from "@/components/NavBar"
import Hero from "@/components/sections/Hero"
import DomainCards from "@/components/sections/DomainCards"
import Research from "@/components/sections/Research"
import Books from "@/components/sections/Books"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import StackedProjects from '@/components/sections/StackedProjects'
import ScrollingRows from '@/components/ui/ScrollingRows'
import IconDock from '@/components/ui/IconDock'



export default function Home() {
  return (
  <main className="min-h-screen">
    <IconDock/>
    <NavBar/>
    <Hero/>
    <DomainCards/>
    <ScrollingRows/>
    <StackedProjects/>
    <Research/>
    <Books/>
    <Contact/>
    <Footer />
  </main>
  )
}