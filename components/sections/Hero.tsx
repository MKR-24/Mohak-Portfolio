'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { counterItems, heroMarqueeItems } from '@/lib/constants'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import FloatingGeometry from '../ui/FloatingGeometry'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [hoveringPhoto, setHoveringPhoto] = useState(false)
  const isMobile =useIsMobile()
  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  // GSAP animates the text lines on page load
  useGSAP(() => {
    gsap.fromTo(
      '.hero-line',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3,
      }
    )
  }, { scope: containerRef })

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Stars background */}
      <div className="stars-bg" />

      {/* Purple radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* 3D Geometry */}
      <FloatingGeometry />
      {/* Main content grid */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '120px 48px 60px': '120px 48px 60px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr': '1fr 1fr',
        gap: isMobile ? '32px':'64px',
        alignItems: 'center',
        width: '100%',
      }}>

        {/* LEFT: Text content */}
        <div ref={textRef}>

          {/* Label */}
          <div className="hero-line" style={{ marginBottom: '20px' }}>
            {/* Typing greeting */}
            <div className="hero-line" style={{ marginBottom: '12px' }}>
            <TypeAnimation
                sequence={[
                'Hey, I am Mohak Rathod 🙋🏼‍♂️', 2000,
                'Hola, soy Mohak Rathod 🙋🏼‍♂️', 2000,
                'નમસ્તે, હું મોહક રાઠોડ છું 🙏🏼', 2000,
                'Bonjour, je suis Mohak Rathod 👋', 2000,
                'Hallo, ich bin Mohak Rathod 👋', 2000,
                '안녕하세요, 저는 Mohak Rathod입니다 🙇🏼‍♂️', 2000,
                'こんにちは、私はMohak Rathod です 🙇🏼‍♂️', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                fontSize: '18px',
                color: 'var(--color-muted)',
                fontFamily: 'var(--font-body)',
                }}
            />
            </div>
            <span className="label-pill">MS CS @ Arizona State University</span>
          </div>

          {/* Headline */}
          <div className="hero-line" style={{ marginBottom: '24px' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-2px',
            }}>
              I build systems
              <br />
              <span className="gradient-text">that scale</span>
            </h1>
          </div>

          {/* Subline */}
          <div className="hero-line" style={{ marginBottom: '36px' }}>
            <p style={{
              color: 'var(--color-muted)',
              fontSize: '18px',
              lineHeight: 1.7,
              maxWidth: '440px',
            }}>
              Distributed systems, AI engineering, and security research.
              Currently looking for Summer/Fall 2026 roles.
            </p>
          </div>
          {/* Bhagavad Gita quote */}
            <div className="hero-line" style={{
            borderLeft: '2px solid rgba(37,99,235,0.4)',
            paddingLeft: '16px',
            marginBottom: '36px',
            }}>
            <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                color: 'var(--color-blue-light)',
                marginBottom: '4px',
                letterSpacing: '0.3px',
            }}>
                કર્મ કર, ફળની ચિંતા ન કર
            </div>
            <div style={{
                fontSize: '13px',
                color: 'var(--color-muted)',
                fontStyle: 'italic',
                marginBottom: '2px',
            }}>
                &quot;Do the deed, not desire the fruit.&quot;
            </div>
            <div style={{
                fontSize: '11px',
                color: 'rgba(139,139,160,0.6)',
                letterSpacing: '1px',
            }}>
                — Bhagavad Gita
            </div>
            </div>
          {/* CTAs */}
          <div className="hero-line" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              View My Work <ArrowDown size={16} />
            </a>
            <a href="/resume-ats.pdf"
                download="Mohak_Rathod_Resume.pdf"
                className='btn-outline'
            >
                Resume ↓
                </a>
        
          </div>
        </div>

        {/* RIGHT: Photo reveal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{ position: 'relative', display: 'flex', justifyContent: isMobile ? 'center': 'flex-end' }}
        >
          {/* Hover hint */}
          <div style={{
            position: 'absolute',
            top: '-28px',
            right: 0,
            fontSize: '12px',
            color: 'var(--color-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--color-blue-light)',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            Hover to reveal
          </div>

          {/* Photo container */}
          <div
            onMouseEnter={() => setHoveringPhoto(true)}
            onMouseLeave={() => setHoveringPhoto(false)}
            style={{
              position: 'relative',
              width: isMobile ? '100%':'340px',
              height: isMobile ? '300px':'420px',
              cursor: 'pointer',
              borderRadius: '20px',
            }}
          >
            {/* Purple glow behind photo */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.3) 0%, transparent 70%)',
              borderRadius: '24px',
              zIndex: 0,
            }} />

            {/* Avatar image */}
            <Image
              src="/images/avatar.png"
              alt="Mohak 3D Avatar"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '20px',
                position:'absolute',
                inset:0,
                zIndex: 1,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                opacity: hoveringPhoto ? 1 : 0,
                transform: hoveringPhoto ? 'scale(1)' : 'scale(1.03)',
              }}
              priority
            />

            {/* Real photo */}
            <Image
              src="/images/mohak.png"
              alt="Mohak Rathod"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '20px',
                position:'absolute',
                inset:0,
                zIndex: 2,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                opacity: hoveringPhoto ? 0 : 1,
                transform: hoveringPhoto ? 'scale(0.97)' : 'scale(1)',
              }}
              priority
            />

            {/* Ring border */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              border: hoveringPhoto
                ? '2px solid var(--color-blue-light)'
                : '1px solid rgba(37,99,235,0.3)',
              zIndex: 3,
              transition: 'border 0.4s ease',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: isMobile ? '-8px': '-16px',
              left: isMobile ? '8px': '-16px',
              background: 'var(--color-black-3)',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: '12px',
              padding: isMobile ? '8px 12px':'12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: '24px' }}>🚀</span>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--color-muted)' }}>Currently</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>Building cool stuff</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Counter strip */}
      <div
        ref={counterRef}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '0 24px 40px' :'0 48px 60px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)': 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {counterItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={counterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="card-glow"
            style={{ borderRadius: '12px', padding: '20px', textAlign: 'center' }}
          >
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '32px',
              color: 'var(--color-white)',
              marginBottom: '4px',
            }}>
              {counterInView
                ? <CountUp end={item.value} suffix={item.suffix} duration={2} />
                : `0${item.suffix}`}
            </div>
            <div style={{ color: 'var(--color-muted)', fontSize: '13px' }}>
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee strip */}
      <div style={{
        borderTop: '1px solid rgba(37,99,235,0.15)',
        borderBottom: '1px solid rgba(37,99,235,0.15)',
        background: 'rgba(13,13,20,0.6)',
        padding: '14px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10,
      }}>
        <div className="marquee-track">
          {heroMarqueeItems.map((item, i) => (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '0 24px',
                color: 'var(--color-muted)',
                fontSize: '13px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: 'var(--color-blue-light)', fontSize: '10px' }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}