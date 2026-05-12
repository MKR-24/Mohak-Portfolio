'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { books } from '@/lib/constants'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'

function BookSpine({
  title,
  author,
  cover,
  accent,
}: {
  title: string
  author: string
  cover: string
  accent: string
}) {
  return (
    <motion.div
      whileHover={{ y: -20, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        position: 'relative',
        width: '80px',
        height: '120px',
        flexShrink: 0,
        cursor: 'pointer',
        borderRadius: '4px 8px 8px 4px',
        overflow: 'visible',
      }}
    >
      {/* Book cover */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '4px 8px 8px 4px',
        overflow: 'hidden',
        boxShadow: '4px 4px 12px rgba(0,0,0,0.5), inset -2px 0 4px rgba(0,0,0,0.3)',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Image
          src={cover}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        {/* Fallback gradient if image fails */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px',
          zIndex: -1,
        }}>
          <span style={{
            fontSize: '9px',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 600,
            lineHeight: 1.3,
            fontFamily: 'var(--font-display)',
          }}>
            {title}
          </span>
        </div>
      </div>

      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileHover={{ opacity: 1, y: 0 }}
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 12px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--color-black-4)',
          border: '1px solid rgba(37,99,235,0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          width: '160px',
          pointerEvents: 'none',
          zIndex: 50,
        }}
      >
        <div style={{
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--color-white)',
          marginBottom: '3px',
          lineHeight: 1.3,
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '10px',
          color: 'var(--color-muted)',
        }}>
          {author}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ReadingBook({
  title,
  author,
  cover,
  progress,
  accent,
}: {
  title: string
  author: string
  cover: string
  progress: number
  accent: string
}) {
  return (
    <motion.div
      whileHover={{ y: -20, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        position: 'relative',
        width: '80px',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      {/* Book */}
      <div style={{
        width: '80px',
        height: '120px',
        borderRadius: '4px 8px 8px 4px',
        overflow: 'hidden',
        boxShadow: '4px 4px 12px rgba(0,0,0,0.5)',
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Image
          src={cover}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: accent,
          zIndex: -1,
        }} />
      </div>

      {/* Progress bar below book */}
      <div style={{
        marginTop: '8px',
        height: '3px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'var(--color-blue-light)',
            borderRadius: '2px',
          }}
        />
      </div>
      <div style={{
        fontSize: '9px',
        color: 'var(--color-muted)',
        textAlign: 'center',
        marginTop: '4px',
      }}>
        {progress}%
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileHover={{ opacity: 1, y: 0 }}
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 24px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--color-black-4)',
          border: '1px solid rgba(37,99,235,0.3)',
          borderRadius: '10px',
          padding: '10px 14px',
          width: '160px',
          pointerEvents: 'none',
          zIndex: 50,
        }}
      >
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-white)', marginBottom: '3px', lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: '10px', color: 'var(--color-muted)' }}>{author}</div>
      </motion.div>
    </motion.div>
  )
}

const completedAccents = [
  'linear-gradient(135deg, #1a1a2e, #16213e)',
  'linear-gradient(135deg, #0f3460, #533483)',
  'linear-gradient(135deg, #2c003e, #53354a)',
]

const readingAccents = [
  'linear-gradient(135deg, #1a2a1a, #2d4a2d)',
  'linear-gradient(135deg, #1a1a2e, #2d2d5e)',
  'linear-gradient(135deg, #2a1a1a, #4a2d2d)',
]

const willReadAccents = [
  'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
  'linear-gradient(135deg, #1a1520, #2d2540)',
  'linear-gradient(135deg, #1a1a15, #2d2d20)',
]

function Shelf({ label, labelColor, children }: {
  label: string
  labelColor: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Shelf label */}
      <div style={{
        fontSize: '11px',
        fontWeight: 600,
        color: labelColor,
        textTransform: 'uppercase',
        letterSpacing: '3px',
        marginBottom: '16px',
        paddingLeft: '8px',
      }}>
        {label}
      </div>

      {/* Books sitting on shelf */}
      <div style={{
        position: 'relative',
        paddingBottom: '12px',
      }}>
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end',
          padding: '16px 20px',
          background: 'var(--color-black-3)',
          borderRadius: '12px 12px 0 0',
          border: '1px solid rgba(255,255,255,0.05)',
          borderBottom: 'none',
          minHeight: '160px',
          overflowX: 'auto',
        }}>
          {children}
        </div>

        {/* Shelf plank */}
        <div style={{
          height: '12px',
          background: 'linear-gradient(180deg, #2a2a3a 0%, #1a1a28 100%)',
          borderRadius: '0 0 4px 4px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderTop: '2px solid rgba(255,255,255,0.1)',
        }} />
      </div>
    </div>
  )
}

export default function Books() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isMobile=useIsMobile()
  return (
    <section
      id="books"
      style={{ padding: isMobile ? '60px 24px': '96px 48px', position: 'relative' }}
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
            Reading List
          </span>
          <h2 className="section-title">Books on my shelf</h2>
          <p style={{
            color: 'var(--color-muted)',
            fontSize: '16px',
            marginTop: '12px',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}>
            What I read shapes how I think. A dev who only codes gets stuck.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Currently Reading shelf */}
          <Shelf label="Currently Reading" labelColor="#60A5FA">
            {books.reading.map((book, i) => (
              <ReadingBook
                key={book.title}
                title={book.title}
                author={book.author}
                cover={book.cover}
                progress={book.progress ?? 0}
                accent={readingAccents[i % readingAccents.length]}
              />
            ))}
          </Shelf>

          {/* Completed shelf */}
          <Shelf label="Completed" labelColor="#4ade80">
            {books.completed.map((book, i) => (
              <BookSpine
                key={book.title}
                title={book.title}
                author={book.author}
                cover={book.cover}
                accent={completedAccents[i % completedAccents.length]}
              />
            ))}
          </Shelf>

          {/* Will Read shelf */}
          <Shelf label="Will Read" labelColor="#fbbf24">
            {books.willRead.map((book, i) => (
              <BookSpine
                key={book.title}
                title={book.title}
                author={book.author}
                cover={book.cover}
                accent={willReadAccents[i % willReadAccents.length]}
              />
            ))}
          </Shelf>
        </motion.div>
      </div>
    </section>
  )
}