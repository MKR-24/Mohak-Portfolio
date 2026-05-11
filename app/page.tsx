import NavBar  from "@/components/NavBar"

export default function Home() {
  return (
  <main className="min-h-screen">
    <NavBar/>
    <div style={{
      minHeight:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <h1 className="section-title gradient-text">Phase-3 Working</h1>
    </div>

  </main>
  )
}