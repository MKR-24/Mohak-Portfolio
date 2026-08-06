'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
  { text: 'Ciao', lang: 'Italian' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'Hallo', lang: 'German' },
  { text: 'નમસ્તે', lang: 'Gujarati' },
  { text: 'Welcome', lang: 'English' },
]

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex(i => i + 1), 600)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDone(true)
        setTimeout(onComplete, 600)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [index, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--color-black)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 10vw, 120px)',
                fontWeight: 800,
                color: 'var(--color-white)',
                letterSpacing: '-2px',
                lineHeight: 1,
              }}
            >
              {greetings[index].text}
            </motion.div>
          </AnimatePresence>

        

          {/* Progress bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            background: 'var(--color-blue)',
            transition: 'width 0.4s linear',
            width: `${((index + 1) / greetings.length) * 100}%`,
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}