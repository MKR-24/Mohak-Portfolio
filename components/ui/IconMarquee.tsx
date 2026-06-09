'use client'

import {
  SiGo, SiPython, SiTypescript, SiReact, SiNextdotjs,
  SiDocker, SiKubernetes, SiRedis, SiPostgresql,
  SiTerraform, SiGraphql, SiPytorch, SiGithub,
} from 'react-icons/si'

const icons = [
  { Icon: SiGo, name: 'Go', color: '#00ACD7' },
  { Icon: SiPython, name: 'Python', color: '#3776AB' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
  { Icon: SiRedis, name: 'Redis', color: '#FF4438' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiTerraform, name: 'Terraform', color: '#7B42BC' },
  { Icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
  { Icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
  { Icon: SiGithub, name: 'GitHub', color: '#ffffff' },
]

// Duplicate for seamless loop
const items = [...icons, ...icons]

export default function IconMarquee() {
  return (
    <div style={{
      borderTop: '1px solid rgba(37,99,235,0.15)',
      borderBottom: '1px solid rgba(37,99,235,0.15)',
      background: 'rgba(13,13,20,0.6)',
      padding: '14px 0',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 30s linear infinite',
      }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 28px',
              color: 'var(--color-muted)',
              fontSize: '13px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.color = item.color
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.color = 'var(--color-muted)'
            }}
          >
            <item.Icon
              size={18}
              style={{ color: item.color, opacity: 0.7 }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}