import NavBar  from "@/components/NavBar"
import Hero from "@/components/sections/Hero"
import DomainCards from "@/components/sections/DomainCards"
import Projects from "@/components/sections/Projects"
import Research from "@/components/sections/Research"
import Books from "@/components/sections/Books"

export default function Home() {
  return (
  <main className="min-h-screen">
    <NavBar/>
    <Hero/>
    <DomainCards/>
    <Projects/>
    <Research/>
    <Books/>
  </main>
  )
}