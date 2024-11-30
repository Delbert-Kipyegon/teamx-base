import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-text-light py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Team X</h3>
          <p>Nairobi, Kenya</p>
          <p>Innovating Solutions, Cultivating Talent</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="#services" className="hover:text-accent">Our Services</Link></li>
            <li><Link href="#products" className="hover:text-accent">Products</Link></li>
            <li><Link href="#contact" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <p>Email: info@teamx.com</p>
          <p>Phone: +254 123 456 789</p>
          <div className="mt-4 flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Team X. All rights reserved.</p>
      </div>
    </footer>
  )
}

