'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const row1 = [
  '/images/project1.png',
  '/images/project2.png',
  '/images/project3.png',
  '/images/project4.png',
  '/images/project1.png',
  '/images/project2.png',
  '/images/project3.png',
  '/images/project4.png',
]

const row2 = [
  '/images/project3.png',
  '/images/project4.png',
  '/images/project1.png',
  '/images/project2.png',
  '/images/project3.png',
  '/images/project4.png',
  '/images/project1.png',
  '/images/project2.png',
]

function ProjectTile({ src }: { src: string }) {
  return (
    <div style={{
      width: '320px',
      height: '200px',
      borderRadius: '16px',
      overflow: 'hidden',
      flexShrink: 0,
      border: '1px solid rgba(37,99,235,0.2)',
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img
        src={src}
        alt="Project"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}

export default function ScrollingRows() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], ['-5%', '-20%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-20%', '-5%'])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--color-black)',
        padding: '60px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(37,99,235,0.1)',
        borderBottom: '1px solid rgba(37,99,235,0.1)',
      }}
    >
      {/* Row 1 — moves left */}
      <motion.div
        style={{
          x: x1,
          display: 'flex',
          gap: '16px',
          marginBottom: '16px',
          width: 'max-content',
        }}
      >
        {row1.map((src, i) => (
          <ProjectTile key={i} src={src} />
        ))}
      </motion.div>

      {/* Row 2 — moves right */}
      <motion.div
        style={{
          x: x2,
          display: 'flex',
          gap: '16px',
          width: 'max-content',
        }}
      >
        {row2.map((src, i) => (
          <ProjectTile key={i} src={src} />
        ))}
      </motion.div>
    </div>
  )
}