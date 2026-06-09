'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/lib/constants'
import Image from 'next/image'
import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import WordsReveal from '../ui/WordsReveal'
import ScrollRevealText from '../ui/ScrollRevealText'

const CARD_OFFSET = 28

function ProjectCard({
  project,
  index,
  total,
}: {
  project: typeof projects[0]
  index: number
  total: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={cardRef}
      style={{
        height: isMobile ? 'auto' : '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: `${80 + index * CARD_OFFSET}px`,
        marginBottom: isMobile ? '24px' : '0',
      }}
    >
      <motion.div
        ref={inViewRef}
        style={{ scale }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div style={{
          borderRadius: '20px',
          border: '1px solid rgba(37,99,235,0.2)',
          background: 'var(--color-black-3)',
          overflow: 'hidden',
          width: 'min(1000px, 90vw)',
          transition: 'border-color 0.3s ease',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '55% 45%',
          }}>

            {/* Image side */}
            <div style={{
              position: 'relative',
              height: isMobile ? '240px' : '480px',
              overflow: 'hidden',
            }}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '64px' }}>⚙️</span>
                </div>
              )}

              {/* Overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(37,99,235,0.88)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </motion.div>

              {/* Impact badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                padding: '6px 14px',
                fontSize: '12px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 3,
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  display: 'inline-block',
                }} />
                {project.impact}
              </div>

              {/* Card number */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                fontFamily: 'var(--font-display)',
                fontSize: '64px',
                fontWeight: 800,
                color: 'rgba(255,255,255,0.06)',
                lineHeight: 1,
                zIndex: 1,
                userSelect: 'none',
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Content side */}
            <div style={{
              padding: isMobile ? '24px 20px' : '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--color-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '12px',
                }}>
                  {project.type}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: isMobile ? '22px' : '28px',
                  color: 'var(--color-white)',
                  marginBottom: '8px',
                  lineHeight: 1.1,
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'var(--color-blue-light)',
                  fontSize: '14px',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}>
                  {project.subtitle}
                </p>
                <p style={{
                  color: 'var(--color-muted)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}>
                  {project.desc}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '24px',
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.6)',
                        background: 'rgba(255,255,255,0.05)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
                  {project.duration}
                </span>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: 'var(--color-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = 'var(--color-white)'
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = 'var(--color-muted)'
                    }}
                  >
                    <GitBranch size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: 'var(--color-blue-light)',
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackedProjects() {
  const isMobile = useIsMobile()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? '60px 24px' : '96px 48px',
        background: 'var(--color-black)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
        >
          <span className="label-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Work
          </span>
          <WordsReveal className="section-title">Recent Projects</WordsReveal>
          <ScrollRevealText>
            A selection of systems I&apos;ve built — distributed infrastructure to AI pipelines.
            </ScrollRevealText>
        </motion.div>

        {/* Stacked cards */}
        <div style={{ position: 'relative' }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '80px' }}
        >
          <a
            href="https://github.com/MKR-24"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <GitBranch size={16} /> View all on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}