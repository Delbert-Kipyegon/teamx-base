import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function ProductsSection() {
  const products = [
    {
      name: "Diabuddy",
      description: "A USSD AI chatbot on Diabetes Information."
    },
    {
      name: "LocaleConnect",
      description: "A hyperlocal news solution powered by AI and geolocation."
    },
    {
      name: "SupportSync",
      description: "A wholesome solution for Disabled People with USSD Emergency Alerts, Blogs and Articles and Geolocation finder using IoT."
    },
    {
      name: "FarmAI",
      description: "A farmer's mobile application for suggesting better farming methods depending on the weather and location."
    }
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

