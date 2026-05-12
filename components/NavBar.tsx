'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(10,15,30,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(37,99,235,0.2)'
            : '1px solid transparent',
        }}
      >
        {/* Scroll progress bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--color-blue-dark), var(--color-blue-light))',
          transition: 'width 0.1s linear',
          zIndex: 100,
        }} />

        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '20px',
            color: 'var(--color-white)',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
        Mohak<span style={{ color: 'var(--color-blue-light)' }}>.</span>
        </a>

        {/* Desktop nav - hidden on mobile */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                style={{
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
              >
                {name}
              </a>
            ))}
          </nav>
        )}

        {/* Desktop buttons - hidden on mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="/resume-ats.pdf"
              download="Mohak_Rathod_Resume.pdf"
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Resume ↓
            </a>
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              {"Let's Connect"}
            </a>
          </div>
        )}

        {/* Mobile hamburger - shown on mobile */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              zIndex: 49,
              background: 'rgba(10,15,30,0.98)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(37,99,235,0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: 'var(--color-white)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {name}
              </a>
            ))}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              paddingTop: '8px',
              borderTop: '1px solid rgba(37,99,235,0.2)',
            }}>
              <a
                href="/resume-ats.pdf"
                download="Mohak_Rathod_Resume.pdf"
                className="btn-outline"
                style={{ textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}
              >
                Resume ↓
              </a>
              <a
                href="#contact"
                className="btn-primary"
                style={{ textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}
              >
                {"Let's Connect"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}