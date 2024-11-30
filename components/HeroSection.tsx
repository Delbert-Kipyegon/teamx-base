import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="bg-primary text-text-light py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Team X</h1>
        <p className="text-xl md:text-2xl mb-8">By Students, for Students</p>
        <p className="text-lg md:text-xl mb-12">Innovating Solutions, Cultivating Talent</p>
        <Button className="bg-accent text-primary hover:bg-primary-dark hover:text-text-light text-lg px-8 py-3">Learn More</Button>
      </div>
    </section>
  )
}

