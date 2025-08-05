'use client'

import { useEffect, useRef } from 'react'

export default function EyeTracker() {
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const leftEye = leftEyeRef.current
      const rightEye = rightEyeRef.current
      
      if (!leftEye || !rightEye) return

      // Calculate eye positions
      const leftEyeRect = leftEye.getBoundingClientRect()
      const rightEyeRect = rightEye.getBoundingClientRect()
      
      const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2
      const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2
      
      const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2
      const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2

      // Calculate angles for left eye
      const leftAngle = Math.atan2(e.clientY - leftEyeCenterY, e.clientX - leftEyeCenterX)
      const leftDistance = Math.min(10, Math.sqrt(
        Math.pow(e.clientX - leftEyeCenterX, 2) + Math.pow(e.clientY - leftEyeCenterY, 2)
      ) / 15)
      
      // Calculate angles for right eye
      const rightAngle = Math.atan2(e.clientY - rightEyeCenterY, e.clientX - rightEyeCenterX)
      const rightDistance = Math.min(10, Math.sqrt(
        Math.pow(e.clientX - rightEyeCenterX, 2) + Math.pow(e.clientY - rightEyeCenterY, 2)
      ) / 15)

      // Move pupils
      const leftPupil = leftEye.querySelector('.pupil') as HTMLElement
      const rightPupil = rightEye.querySelector('.pupil') as HTMLElement
      
      if (leftPupil) {
        leftPupil.style.transform = `translate(${Math.cos(leftAngle) * leftDistance}px, ${Math.sin(leftAngle) * leftDistance}px)`
      }
      
      if (rightPupil) {
        rightPupil.style.transform = `translate(${Math.cos(rightAngle) * rightDistance}px, ${Math.sin(rightAngle) * rightDistance}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Left Eye - Top Left */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center opacity-60">
        <div 
          ref={leftEyeRef}
          className="relative w-12 h-8 border-2 border-white rounded-full flex items-center justify-center overflow-hidden"
          style={{ borderRadius: '50px' }}
        >
          <div className="pupil w-4 h-4 bg-gray-800 rounded-full transition-transform duration-100 ease-out"></div>
        </div>
      </div>
      
      {/* Right Eye - Top Right */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center opacity-60">
        <div 
          ref={rightEyeRef}
          className="relative w-12 h-8 border-2 border-white rounded-full flex items-center justify-center overflow-hidden"
          style={{ borderRadius: '50px' }}
        >
          <div className="pupil w-4 h-4 bg-gray-800 rounded-full transition-transform duration-100 ease-out"></div>
        </div>
      </div>
    </div>
  )
}