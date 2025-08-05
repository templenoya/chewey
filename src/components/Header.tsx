import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute top-0 right-0 p-8 z-10">
      <Link 
        href="/login"
        className="border border-black px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50 transition-colors cursor-pointer inline-block"
      >
        Investor Login
      </Link>
    </header>
  )
}