'use client'

import { useIsMobile } from "@/hooks/useIsMobile"
export default function Footer() {
  const isMobile=useIsMobile()
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'var(--color-black)',
      padding: isMobile ? '24px 20px':'32px 48px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection:isMobile?'column':'row',
        alignItems: isMobile ? 'flex-start': 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '12px' :'0',
        color: 'var(--color-muted)',
        fontSize: '13px',
      }}>
       <span style={{
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: '16px',
  color: 'var(--color-white)',
  display: 'inline-flex',
  alignItems: 'center',
}}>
        <span style={{ fontFamily: 'serif', lineHeight: 1 }}>મોહ</span>
        <span>ak</span>
        <span style={{ color: 'var(--color-blue-light)' }}>.</span>
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