'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { domainCards } from '@/lib/constants'
import { useIsMobile } from '@/hooks/useIsMobile'

const rotations = [-20, -10, 0, 10, 20]
const translateY = [20, 8, 0, 8, 20]

export default function DomainCards() {
  const [activeCard, setActiveCard] = useState(2)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const isMobile = useIsMobile()
  const active = domainCards[activeCard]
  const translateX = isMobile ? [-80,-40,0,40,80]:[-130, -65, 0, 65, 130]

  return (
    <section
      id="domains"
      ref={ref}
      style={{
        position: 'relative',
        padding: isMobile ? '60px 24px':'96px 48px',
        overflow: 'hidden',
        background: 'var(--color-black-2)',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(,58,237,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="label-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Expertise
          </span>
          <h2 className="section-title">What I bring to a product</h2>
        </motion.div>

        {/* Card fan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            height: '320px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {domainCards.map((card, i) => {
            const isActive = i === activeCard
            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCard(i)}
                animate={{
                  rotate: isActive ? 0 : rotations[i],
                  x: isActive ? 0 : translateX[i],
                  y: isActive ? -20 : translateY[i],
                  scale: isActive ? 1.05 : 0.9,
                  zIndex: isActive ? 10 : 5 - Math.abs(i - activeCard),
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                whileHover={!isActive ? { y: translateY[i] - 12, scale: 0.93 } : {}}
                style={{
                position: 'absolute',
                width: '180px',
                height: '260px',
                borderRadius: '20px',
                border: isActive
                    ? '2px solid rgba(96,165,250,0.8)'
                    : '1px solid rgba(37,99,235,0.4)',
                background: isActive
                    ? 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)'
                    : 'var(--color-black-3)',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 20px',
                cursor: isActive ? 'default' : 'grab',
                userSelect: 'none',
                boxShadow: isActive
                    ? '0 0 30px rgba(37,99,235,0.4), 0 0 60px rgba(37,99,235,0.15)'
                    : '0 4px 20px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                }}
              >
                <span style={{ fontSize: '32px', marginBottom: '12px' }}>
                  {card.icon}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: 'var(--color-white)',
                  lineHeight: 1.3,
                }}>
                  {card.title}
                </h3>
                {/* Shine streak */}
                {isActive && (
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '60%',
                    height: '200%',
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
                    transform: 'rotate(15deg)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }} />
                )}
                {/* Only show skills preview on active card */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}
                  >
                    {card.skills.slice(0, 3).map(skill => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '10px',
                          background: 'rgba(255,255,255,0.15)',
                          borderRadius: '100px',
                          padding: '3px 8px',
                          color: 'rgba(255,255,255,0.85)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )
          })}

          {/* Pick a card hint */}
          <div style={{
            position: 'absolute',
            bottom: '-32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--color-muted)',
            fontSize: '13px',
            whiteSpace: 'nowrap',
          }}>
            Pick a card
            <span style={{ color: 'var(--color-blue-light)' }}>↓</span>
          </div>
        </motion.div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="card-glow"
            style={{
              borderRadius: '20px',
              padding: isMobile ? '24px':'40px',
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr':'1fr auto',
              gap: isMobile ? '24px':'40px',
              alignItems: 'start',
            }}
          >
            {/* Left: description and skills */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '36px' }}>{active.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: 'var(--color-white)',
                }}>
                  {active.title}
                </h3>
              </div>

              <p style={{
                color: 'var(--color-muted)',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '24px',
                maxWidth: '560px',
              }}>
                {active.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {active.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '13px',
                      padding: '6px 14px',
                      borderRadius: '100px',
                      border: '1px solid rgba(37,99,235,0.35)',
                      color: 'var(--color-blue-light)',
                      background: 'rgba(37,99,235,0.08)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: related projects */}
            <div style={{ minWidth: '200px' }}>
              <div style={{
                fontSize: '11px',
                color: 'var(--color-muted)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 500,
                marginBottom: '16px',
              }}>
                Related Projects
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {active.projects.map(p => (
                  <div
                    key={p}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'rgba(248,246,255,0.8)',
                    }}
                  >
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--color-blue-light)',
                      flexShrink: 0,
                    }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}