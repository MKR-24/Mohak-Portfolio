'use client'


export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'var(--color-black)',
      padding: '32px 48px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'var(--color-muted)',
        fontSize: '13px',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-white)', fontSize: '16px' }}>
          Mohak<span style={{ color: 'var(--color-purple-light)' }}>.</span>
        </span>
        <span>Designed & built by Mohak Rathod · {new Date().getFullYear()}</span>
        <a
          href="https://github.com/MKR-24/mohak-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
        >
          View source
        </a>
      </div>
    </footer>
  )
}