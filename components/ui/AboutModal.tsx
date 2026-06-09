'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, GraduationCap, Briefcase, Music } from 'lucide-react'

export default function AboutModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 100,
            }}
          />

          {/* Modal */}
         <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                marginTop: '-42.5vh',
                marginLeft: 'min(-340px, -45vw)',
                width: 'min(680px, 90vw)',
                maxHeight: '85vh',
                overflowY: 'auto',
                background: 'var(--color-black-2)',
                border: '1px solid rgba(37,99,235,0.2)',
                borderRadius: '24px',
                padding: '48px',
                zIndex: 101,
            }}
            className="noise-card"
            >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--color-black-3)',
                border: '1px solid rgba(37,99,235,0.2)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                color: 'var(--color-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <span className="label-pill" style={{ marginBottom: '12px', display: 'inline-block' }}>
                About Me
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-white)',
                marginBottom: '16px',
                lineHeight: 1.1,
              }}>
                Hey, I&apos;m Mohak 👋
              </h2>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '16px',
                lineHeight: 1.7,
              }}>
                From the streets of Mumbai to the labs of Arizona State University — I&apos;ve always been
                fascinated by data: how it moves, how it scales, and how it can be shaped into products
                that matter. I don&apos;t just write code — I build systems that solve real problems across
                distributed infrastructure, AI pipelines, and security.
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(37,99,235,0.15)', marginBottom: '32px' }} />

            {/* Info grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>

              {/* Location */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={18} style={{ color: 'var(--color-blue-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    From
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--color-white)', fontWeight: 500 }}>
                    Mumbai, India → Tempe, Arizona
                  </div>
                </div>
              </div>

              {/* Education */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <GraduationCap size={18} style={{ color: 'var(--color-blue-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Education
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--color-white)', fontWeight: 500, marginBottom: '4px' }}>
                    MS Computer Science — Arizona State University
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                    BTech CSE (IoT, Cybersecurity & Blockchain) · 4.0 GPA
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Briefcase size={18} style={{ color: 'var(--color-blue-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Experience
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--color-white)', fontWeight: 500, marginBottom: '4px' }}>
                    SOC Analyst Intern — Atos Eviden
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                    2 summers · Threat detection, incident response, security monitoring
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(37,99,235,0.1)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Music size={18} style={{ color: 'var(--color-blue-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Beyond the Screen
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--color-white)', fontWeight: 500, marginBottom: '4px' }}>
                    Music & Nature
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                    You&apos;ll find me with headphones on exploring trails — the best ideas come away from the keyboard.
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(37,99,235,0.15)', marginBottom: '32px' }} />

            {/* What drives me */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-white)',
                marginBottom: '12px',
              }}>
                What drives me
              </h3>
              <p style={{
                color: 'var(--color-muted)',
                fontSize: '15px',
                lineHeight: 1.7,
              }}>
                I&apos;m drawn to the intersection of data, systems, and product. Whether it&apos;s building
                a rate limiter that handles 3,000 req/s, training ML pipelines for threat detection,
                or publishing research on AI-powered security — I care about work that ships and scales.
                Currently looking to bring that mindset to a team building something ambitious.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary"
              style={{ display: 'inline-flex', justifyContent: 'center' }}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}