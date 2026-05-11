import NavBar  from "@/components/NavBar"
import Hero from "@/components/sections/Hero"
import DomainCards from "@/components/sections/DomainCards"
import Projects from "@/components/sections/Projects"

export default function Home() {
  return (
  <main className="min-h-screen">
    <NavBar/>
    <Hero/>
    <DomainCards/>
    <Projects/>
  </main>
  )
}