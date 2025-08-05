import { Card, CardContent } from './ui/card'

const stats = [
  { number: '200', label: 'Exits' },
  { number: '50+', label: 'IPOs' },
  { number: '40', label: 'Unicorns' },
  { number: '$7B', label: 'Assets Under Management' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}