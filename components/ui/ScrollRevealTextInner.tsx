'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

export default function ScrollRevealText({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.3'],
  })

  const words = children.split(' ')

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <WordReveal
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}

function WordReveal({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
})  {
  const opacity = useTransform(progress, range, [0.15, 1])

  return (
    <motion.span style={{ opacity }}>
      {word}
    </motion.span>
  )
}