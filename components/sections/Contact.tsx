'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type FormState = {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
  e.preventDefault()
  setStatus('sending')
  try {
    const res = await fetch('https://formspree.io/f/mojryvbg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } else {
      setStatus('error')
    }
  } catch {
    setStatus('error')
  }
}

 const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/MKR-24',
    handle: '@MKR-24',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mohak-rathod',
    handle: 'Mohak Rathod',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:mohak0678@gmail.com',
    handle: 'mohak0678@gmail.com',
  },
]

  return (
    <section
      id="contact"
      style={{
        padding: '96px 48px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-black-2)',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
    
      <div
        ref={ref}
        style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}>

          {/* Left: heading + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="purple-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Contact
            </span>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Let&apos;s build something{' '}
              <span className="gradient-text">together</span>
            </h2>
            <p style={{
              color: 'var(--color-muted)',
              fontSize: '16px',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '400px',
            }}>
              Open to full-time roles, research collaborations, and interesting
              projects. Based in Tempe, AZ. I will reply within 24 hours.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget.querySelector('.handle') as HTMLElement
                    if (el) el.style.color = 'var(--color-purple-light)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget.querySelector('.handle') as HTMLElement
                    if (el) el.style.color = 'var(--color-white)'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: '1px solid rgba(124,58,237,0.2)',
                    background: 'var(--color-black-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'border-color 0.2s',
                  }}>
                    <Icon size={18} style={{ color: 'var(--color-muted)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '2px' }}>
                      {label}
                    </div>
                    <div className="handle" style={{
                      fontSize: '14px',
                      color: 'var(--color-white)',
                      fontWeight: 500,
                      transition: 'color 0.2s',
                    }}>
                      {handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '40px',
              padding: '10px 16px',
              borderRadius: '10px',
              border: '1px solid rgba(124,58,237,0.2)',
              background: 'var(--color-black-3)',
              fontSize: '13px',
              color: 'var(--color-muted)',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                display: 'inline-block',
                boxShadow: '0 0 8px #4ade80',
              }} />
              Available for opportunities · Tempe, AZ
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div style={{
              background: 'var(--color-black-3)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '20px',
              padding: '40px',
            }}>
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '48px 0',
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '22px',
                    marginBottom: '8px',
                  }}>
                    Message sent!
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '14px' }}>
                    I will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '11px',
                        color: 'var(--color-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        marginBottom: '8px',
                        fontWeight: 500,
                      }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          background: 'var(--color-black-2)',
                          border: '1px solid rgba(124,58,237,0.2)',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: 'var(--color-white)',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '11px',
                        color: 'var(--color-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        marginBottom: '8px',
                        fontWeight: 500,
                      }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          background: 'var(--color-black-2)',
                          border: '1px solid rgba(124,58,237,0.2)',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: 'var(--color-white)',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '11px',
                      color: 'var(--color-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '8px',
                      fontWeight: 500,
                    }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you working on?"
                      value={form.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        background: 'var(--color-black-2)',
                        border: '1px solid rgba(124,58,237,0.2)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        color: 'var(--color-white)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'none',
                        transition: 'border-color 0.2s',
                        fontFamily: 'var(--font-body)',
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--color-purple)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{
                      justifyContent: 'center',
                      opacity: status === 'sending' ? 0.7 : 1,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : (
                      <>Send Message <Send size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}