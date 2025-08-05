'use client'

import { useState } from 'react'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function PasswordInput({ value, onChange, placeholder }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="relative">
      <input
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-0 py-4 pr-12 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500 text-center"
        placeholder={placeholder}
        required
      />
      
      {/* Eye Toggle Button */}
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors focus:outline-none opacity-60 hover:opacity-100"
        aria-label={isVisible ? 'Hide password' : 'Show password'}
      >
        <div className="relative w-5 h-5">
          {/* Eye Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-5 h-3 border border-current rounded-full flex items-center justify-center">
              {/* Pupil */}
              <div 
                className={`w-1.5 h-1.5 bg-current rounded-full transition-all duration-200 ${
                  isVisible ? 'opacity-100' : 'opacity-70'
                }`}
              />
            </div>
          </div>
          
          {/* Slash line when password is hidden */}
          {!isVisible && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-px bg-current transform rotate-45"></div>
            </div>
          )}
        </div>
      </button>
    </div>
  )
}