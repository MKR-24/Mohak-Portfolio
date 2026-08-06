'use client'

import { useEffect } from 'react'

export default function ConsolePrint() {
  useEffect(() => {
    console.log(
      '%c Mohak Rathod %c',
      'background:#2563EB;color:#fff;padding:4px 12px;border-radius:4px;font-weight:bold;font-size:14px',
      ''
    )
    console.log(
      '%cmohakrathod.vercel.app',
      'color:#60A5FA;font-weight:bold;font-size:12px'
    )
    console.log(
      '%c\n👋 Hey developer, nice to meet you!\nIf you\'re inspecting this, you\'re already my kind of person.\n\n📬 Let\'s connect → mohak0678@gmail.com\n🐙 GitHub → github.com/MKR-24\n💼 LinkedIn → linkedin.com/in/mohak-rathod\n',
      'color:#6B7280;font-size:12px;line-height:1.8'
    )
    console.log(
      '%c Built with Next.js · TypeScript · Framer Motion · Three.js ',
      'background:#111827;color:#374151;padding:2px 8px;border-radius:4px;font-size:11px'
    )
  }, [])

  return null
}