import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-gray-800">
          Highland Capital Partners
        </div>
      </div>
      <nav>
        <Button variant="outline" asChild>
          <Link href="/login">
            Investor Login
          </Link>
        </Button>
      </nav>
    </header>
  )
}