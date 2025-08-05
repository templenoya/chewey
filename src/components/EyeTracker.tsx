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
      const leftDistance = Math.min(15, Math.sqrt(
        Math.pow(e.clientX - leftEyeCenterX, 2) + Math.pow(e.clientY - leftEyeCenterY, 2)
      ) / 10)
      
      // Calculate angles for right eye
      const rightAngle = Math.atan2(e.clientY - rightEyeCenterY, e.clientX - rightEyeCenterX)
      const rightDistance = Math.min(15, Math.sqrt(
        Math.pow(e.clientX - rightEyeCenterX, 2) + Math.pow(e.clientY - rightEyeCenterY, 2)
      ) / 10)

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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-20">
      <div className="flex items-center space-x-8">
        {/* Left Eye */}
        <div 
          ref={leftEyeRef}
          className="relative w-32 h-32 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center"
        >
          <div className="pupil w-12 h-12 bg-black rounded-full transition-transform duration-75 ease-out"></div>
        </div>
        
        {/* Right Eye */}
        <div 
          ref={rightEyeRef}
          className="relative w-32 h-32 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center"
        >
          <div className="pupil w-12 h-12 bg-black rounded-full transition-transform duration-75 ease-out"></div>
        </div>
      </div>
    </div>
  )
}