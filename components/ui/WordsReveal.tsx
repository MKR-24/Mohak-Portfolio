'use client'

import dynamic from 'next/dynamic'

const WordsRevealInner = dynamic(
  () => import('./WordsRevealInner'),
  { ssr: false }
)

export default function WordsReveal({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) {
  return (
    <WordsRevealInner className={className} delay={delay}>
      {children}
    </WordsRevealInner>
  )
}