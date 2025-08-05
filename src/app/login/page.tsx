'use client'

import { useState } from 'react'
import EyeTracker from '@/components/EyeTracker'
import PasswordInput from '@/components/PasswordInput'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Secret credentials
    if (username === 'highland' && password === 'entrepreneur2024') {
      // Simulate loading
      setTimeout(() => {
        alert('🎉 Welcome, Highland Investor! Access granted.')
        setIsLoading(false)
        router.push('/')
      }, 1500)
    } else {
      setTimeout(() => {
        setError('Invalid credentials. Try highland / entrepreneur2024')
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-8 relative overflow-hidden">
      {/* Eye Tracker Component */}
      <EyeTracker />
      
      {/* Login Form */}
      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-2xl font-light text-white mb-8 tracking-widest">
            ACCESS
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-white text-white placeholder-gray-500 text-center"
              placeholder="·"
              required
            />
          </div>

          <div>
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder="·"
            />
          </div>

          {error && (
            <div className="text-red-400 text-xs text-center opacity-75">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-transparent border border-gray-600 text-white py-3 px-4 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed font-light text-sm tracking-wider"
          >
            {isLoading ? '···' : 'ENTER'}
          </button>
        </form>
      </div>
    </div>
  )
}