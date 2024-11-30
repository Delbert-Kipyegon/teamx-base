import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-primary text-text-light py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Team X</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:text-accent">About</Link></li>
            <li><Link href="#services" className="hover:text-accent">Services</Link></li>
            <li><Link href="#products" className="hover:text-accent">Products</Link></li>
            <li><Link href="#contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </nav>
        <Button variant="outline" className="bg-accent text-primary hover:bg-primary hover:text-text-light">Get Started</Button>
      </div>
    </header>
  )
}

