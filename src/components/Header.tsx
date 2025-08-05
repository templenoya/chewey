import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-gray-800">
          Highland Capital Partners
        </div>
      </div>
      <nav>
        <Link 
          href="/login"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          Investor Login
        </Link>
      </nav>
    </header>
  )
}