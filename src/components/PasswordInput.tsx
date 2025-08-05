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
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
        placeholder={placeholder}
        required
      />
      
      {/* Eye Toggle Button */}
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors focus:outline-none"
        aria-label={isVisible ? 'Hide password' : 'Show password'}
      >
        <div className="relative w-6 h-6">
          {/* Eye Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-6 h-4 border-2 border-current rounded-full flex items-center justify-center">
              {/* Pupil */}
              <div 
                className={`w-2 h-2 bg-current rounded-full transition-all duration-200 ${
                  isVisible ? 'opacity-100' : 'opacity-70'
                }`}
              />
            </div>
          </div>
          
          {/* Slash line when password is hidden */}
          {!isVisible && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-0.5 bg-current transform rotate-45"></div>
            </div>
          )}
        </div>
      </button>
    </div>
  )
}