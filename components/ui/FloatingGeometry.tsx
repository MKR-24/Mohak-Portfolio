'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

function Shape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.12
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.08
  })

  return (
    <Icosahedron ref={meshRef} args={[1.4, 1]}>
      <MeshDistortMaterial
        color="#2563EB"
        wireframe
        distort={0.3}
        speed={1.5}
        opacity={0.5}
        transparent
      />
    </Icosahedron>
  )
}

export default function FloatingGeometry() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      height: '700px',
      zIndex: 1,
      pointerEvents: 'none',
      opacity: 0.7,
    }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Shape />
      </Canvas>
    </div>
  )
}