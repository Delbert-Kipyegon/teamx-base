import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" rows={4} required />
          </div>
          <Button type="submit" className="w-full bg-primary text-text-light hover:bg-primary-dark">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

