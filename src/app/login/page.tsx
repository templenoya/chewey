'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    <div className="min-h-screen bg-white flex items-center justify-center px-8 relative overflow-hidden">
      {/* Eye Tracker Component */}
      <EyeTracker />
      
      {/* Login Form */}
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-normal text-black mb-4">
            INVESTOR LOGIN
          </h1>
          <div className="w-32 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light">
            Highland Capital Partners
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isLoading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-black transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}