'use client'

import { useEffect, useRef } from 'react'

export default function EyeTracker() {
  const eyeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const eye = eyeRef.current
      
      if (!eye) return

      // Calculate eye position
      const eyeRect = eye.getBoundingClientRect()
      const eyeCenterX = eyeRect.left + eyeRect.width / 2
      const eyeCenterY = eyeRect.top + eyeRect.height / 2

      // Calculate angle and distance
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)
      const distance = Math.min(8, Math.sqrt(
        Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2)
      ) / 20)

      // Move pupil
      const pupil = eye.querySelector('.pupil') as HTMLElement
      
      if (pupil) {
        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      {/* Single Centered Eye */}
      <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center opacity-40">
        <div className="relative w-20 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <div 
            ref={eyeRef}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="pupil w-6 h-6 bg-gray-900 rounded-full transition-transform duration-75 ease-out"></div>
          </div>
        </div>
      </div>
    </div>
  )
}