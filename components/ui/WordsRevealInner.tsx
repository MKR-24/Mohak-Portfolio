'use client'

import { useRef, useSyncExternalStore } from 'react'
import { motion, useInView } from 'framer-motion'

function subscribe() { return () => {} }

export default function WordsReveal({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  const words = children.split(' ')

  if (!mounted) {
    return (
      <div ref={ref} style={{ opacity: 0 }}>
        <span className={className}>{children}</span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}
    >
      {words.map((word, i) => (
        <div
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block' }}
        >
          <motion.span
            className={className}
            initial={{ y: '100%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  )
}