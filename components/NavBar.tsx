'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

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
        padding: '20px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5,5,8,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(124,58,237,0.2)'
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
        background: 'linear-gradient(90deg, var(--color-purple-dark), var(--color-purple-light))',
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
        }}
      >
        <span style={{ fontFamily: 'serif' }}>મોહ</span>ak
        <span style={{ color: 'var(--color-purple-light)' }}>.</span>
      </a>

      {/* Desktop nav links */}
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

      {/* Right side buttons */}
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
    </motion.header>
  )
}