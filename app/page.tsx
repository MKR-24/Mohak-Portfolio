export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <span className="purple-pill"> I am Mohak, I build</span>
      <h1 className="section-title gradient-text">Full Stack Apps</h1>
      <p style={{ color: 'var(--color-muted)' }}>
        Body text in DM Sans
      </p>
      <button className="btn-primary">Primary Button</button>
      <button className="btn-outline">Outline Button</button>
    </main>
  )
}