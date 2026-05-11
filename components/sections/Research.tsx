'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { research } from '@/lib/constants'
import { ExternalLink, FileText, Clock } from 'lucide-react'

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    'Published': { bg: 'rgba(74,222,128,0.1)', color: '#4ade80' },
    'In Review': { bg: 'rgba(251,191,36,0.1)', color: '#fbbf24' },
    'In Publication': { bg: 'rgba(167,139,250,0.1)', color: '#a78bfa' },
  }
  const style = colors[status] ?? colors['In Review']

  return (
    <span style={{
      fontSize: '11px',
      fontWeight: 600,
      padding: '4px 12px',
      borderRadius: '100px',
      background: style.bg,
      color: style.color,
      letterSpacing: '0.5px',
    }}>
      {status}
    </span>
  )
}

export default function Research() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="research"
      style={{
        padding: '96px 48px',
        background: 'var(--color-black-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
        >
          <span className="purple-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Research
          </span>
          <h2 className="section-title">Published Work</h2>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '16px',
            marginTop: '12px',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}>
            3 papers across cybersecurity, blockchain, and AI — one published, two in review.
          </p>
        </motion.div>

        {/* Papers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {research.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-glow"
              style={{
                borderRadius: '16px',
                padding: '32px 36px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                alignItems: 'start',
              }}
              whileHover={{
                borderColor: 'rgba(124,58,237,0.5)',
                boxShadow: '0 0 30px rgba(124,58,237,0.08)',
              }}
            >
              {/* Left: paper info */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '14px',
                  flexWrap: 'wrap',
                }}>
                  <StatusBadge status={paper.status} />
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    color: 'var(--color-muted)',
                  }}>
                    <Clock size={12} />
                    {paper.period}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--color-white)',
                  lineHeight: 1.3,
                  marginBottom: '12px',
                }}>
                  {paper.title}
                </h3>

                <p style={{
                  color: 'var(--color-muted)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                  maxWidth: '640px',
                }}>
                  {paper.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {paper.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        padding: '3px 10px',
                        borderRadius: '100px',
                        border: '1px solid rgba(124,58,237,0.25)',
                        color: 'var(--color-purple-light)',
                        background: 'rgba(124,58,237,0.06)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: icon + DOI link */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '4px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(124,58,237,0.1)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FileText size={20} style={{ color: 'var(--color-purple-light)' }} />
                </div>

                {paper.doi ? (
                <a
                    href={paper.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '12px',
                      color: 'var(--color-purple-light)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-purple-light)'}
                  >
                    <ExternalLink size={12} /> DOI
                  </a>
                ) : (
                  <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>
                    Coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}