import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function ServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      description: "From idea to execution, we specialize in creating bespoke software tailored to the unique needs of each client. Whether it's web, mobile, or desktop applications, our solutions are designed to be scalable, secure, and user-friendly."
    },
    {
      title: "IT Consultancy",
      description: "We offer comprehensive IT consulting services, helping businesses to navigate the complex technology landscape and align their IT strategies with business objectives."
    },
    {
      title: "Student Mentorship",
      description: "We are deeply committed to mentoring students, integrating them into real-world projects to provide valuable hands-on experience. Our approach combines the dynamism of fresh talent with the wisdom of industry veterans."
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

