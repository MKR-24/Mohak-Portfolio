'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSyncExternalStore } from 'react'

const TECH_TEXT = 'GO · PYTHON · DISTRIBUTED SYSTEMS · SECURITY · AI · NEXT.JS · KUBERNETES · '

function subscribe() { return () => {} }

export default function CircularPhoto({
  size = 320,
  isMobile = false,
}: {
  size?: number
  isMobile?: boolean
}) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const actualSize = isMobile ? 260 : size

  if (!mounted) return null

  return (
    <div style={{
      position: 'relative',
      width: actualSize,
      height: actualSize,
      flexShrink: 0,
    }}>
      {/* Rotating text ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
        }}
      >
        <svg
          viewBox={`0 0 ${actualSize} ${actualSize}`}
          width={actualSize}
          height={actualSize}
        >
          <defs>
            <path
              id="textCircle"
              d={`M ${actualSize / 2}, ${actualSize / 2} m -${actualSize / 2 - 12},0 a ${actualSize / 2 - 12},${actualSize / 2 - 12} 0 1,1 ${(actualSize / 2 - 12) * 2},0 a ${actualSize / 2 - 12},${actualSize / 2 - 12} 0 1,1 -${(actualSize / 2 - 12) * 2},0`}
            />
          </defs>
          <text
            style={{
              fontSize: '10px',
              fill: 'rgba(96,165,250,0.6)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              letterSpacing: '2px',
            }}
          >
            <textPath href="#textCircle">
              {TECH_TEXT.repeat(3)}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Photo circle */}
      <div style={{
        position: 'absolute',
        inset: '20px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid rgba(37,99,235,0.4)',
        boxShadow: '0 0 0 8px rgba(37,99,235,0.06), 0 0 60px rgba(37,99,235,0.2)',
        zIndex: 1,
      }}>
        <Image
          src="/images/mohak.png"
          alt="Mohak Rathod"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center 20%',
          }}
          priority
        />
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: isMobile ? '0px' : '-8px',
          left: isMobile ? '8px' : '-16px',
          background: 'var(--color-black-3)',
          border: '1px solid rgba(37,99,235,0.3)',
          borderRadius: '12px',
          padding: isMobile ? '8px 12px' : '12px 16px',
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

      {/* Click hint */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '-8px',
        fontSize: '11px',
        color: 'var(--color-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        zIndex: 10,
        whiteSpace: 'nowrap',
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--color-blue-light)',
          display: 'inline-block',
        }} />
        Click to know more
      </div>
    </div>
  )
}