'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { projects } from '@/lib/constants'
import Image from 'next/image'
import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function FeaturedProject({ project }: { project: typeof projects[0] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        borderRadius: '20px',
        border: '1px solid rgba(37,99,235,0.2)',
        background: 'var(--color-black-3)',
        overflow: 'hidden',
        marginBottom: '24px',
        transition: 'border-color 0.3s ease',
      }}
      whileHover={{ borderColor: 'rgba(37,99,235,0.5)' }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '60% 40%',
      }}>
        {/* Image side */}
        <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }} className="project-img-wrap">
          {/* Placeholder when no image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #1a1a28 0%, #0d0d14 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '64px' }}>⚙️</span>
          </div>

          {/* View project overlay */}
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
        </div>

        {/* Content side */}
        <div style={{
          padding: '40px 36px',
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
              fontSize: '28px',
              color: 'var(--color-white)',
              marginBottom: '8px',
              lineHeight: 1.1,
            }}>
              {project.title}
            </h3>
            <p style={{
              color: 'var(--color-blue-light)',
              fontSize: '14px',
              marginBottom: '20px',
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
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
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
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
    </motion.div>
  )
}

function SmallProject({ project, delay }: { project: typeof projects[0], delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (

    <motion.div
    
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(37,99,235,0.2)',
        background: 'var(--color-black-3)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      whileHover={{
        borderColor: 'rgba(37,99,235,0.5)',
        y: -4,
        boxShadow: '0 20px 60px rgba(37,99,235,0.12)',
      }}
    >

      {/* Image placeholder */}
      <div style={{
        position: 'relative',
        height: '200px',
        background: 'linear-gradient(135deg, #1a1a28 0%, #0d0d14 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <span style={{ fontSize: '48px' }}>
          {project.tags[0] === 'Go' ? '⚙️' :
           project.tags[0] === 'Python' ? '🧠' :
           project.tags[0] === 'Web3' ? '🔗' : '📊'}
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(37,99,235,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '13px', padding: '10px 20px' }}
          >
            View Project <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <div style={{
          fontSize: '10px',
          color: 'var(--color-muted)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '8px',
        }}>
          {project.type}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '18px',
          color: 'var(--color-white)',
          marginBottom: '8px',
        }}>
          {project.title}
        </h3>
        <p style={{
          color: 'var(--color-muted)',
          fontSize: '13px',
          lineHeight: 1.6,
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                padding: '3px 10px',
                borderRadius: '100px',
                border: `1px solid ${project.accent}40`,
                color: project.accent,
                background: `${project.accent}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{
          display: 'flex',
          gap: '16px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              color: 'var(--color-muted)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
          >
            <GitBranch size={13} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '12px',
              color: project.accent,
              textDecoration: 'none',
            }}
          >
            <ExternalLink size={13} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: '96px 48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '48px' }}
        >
          <span className="label-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Work
          </span>
          <h2 className="section-title">Recent Projects</h2>
        </motion.div>

        {/* Featured projects */}
        {featured.map(p => (
          <FeaturedProject key={p.id} project={p} />
        ))}

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '8px',
        }}>
          {rest.map((p, i) => (
            <SmallProject key={p.id} project={p} delay={i * 0.15} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
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