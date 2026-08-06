'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiGo, SiPython, SiDocker, SiKubernetes,
  SiRedis, SiPostgresql, SiGithub, SiLinux,
} from 'react-icons/si'
import { Terminal } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

const dockItems = [
  { Icon: SiGo, label: 'Go', color: '#00ACD7' },
  { Icon: SiPython, label: 'Python', color: '#3776AB' },
  { Icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { Icon: SiKubernetes, label: 'Kubernetes', color: '#326CE5' },
  { Icon: SiRedis, label: 'Redis', color: '#FF4438' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiLinux, label: 'Linux', color: '#FCC624' },
  { Icon: SiGithub, label: 'GitHub', color: '#ffffff' },
  { Icon: Terminal, label: 'Terminal', color: '#4ade80' },
]

export default function IconDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const isMobile = useIsMobile()
  if (isMobile) return null
  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'center',
    }}>
      {dockItems.map((item, i) => (
        <div
          key={item.label}
          style={{ position: 'relative' }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                style={{
                  position: 'absolute',
                  right: '48px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'var(--color-black-3)',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: '8px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  color: 'var(--color-white)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.label}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Icon button */}
          <motion.div
            whileHover={{ scale: 1.2, x: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: hoveredIndex === i
                ? 'rgba(37,99,235,0.15)'
                : 'rgba(17,24,39,0.8)',
              border: '1px solid rgba(37,99,235,0.15)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
              transition: 'background 0.2s',
            }}
          >
            <item.Icon
              size={16}
              style={{
                color: hoveredIndex === i ? item.color : 'var(--color-muted)',
                transition: 'color 0.2s',
              }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  )
}