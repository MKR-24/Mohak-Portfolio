'use client'

import dynamic from 'next/dynamic'

const ScrollRevealTextInner = dynamic(
  () => import('./ScrollRevealTextInner'),
  { ssr: false }
)

export default function ScrollRevealText({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <ScrollRevealTextInner className={className}>
      {children}
    </ScrollRevealTextInner>
  )
}