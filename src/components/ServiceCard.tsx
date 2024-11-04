import { Card, CardContent } from "@/components/ui/card"
interface Service {
    title: string
    description: string
    icon: React.ReactNode
  }
const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="border rounded-2xl">
      <CardContent className="pt-6 text-center px-6">
        <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
          <div className="text-red-500">
            {service.icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {service.title}
        </h3>
        <p className="text-muted-foreground">
          {service.description}
        </p>
      </CardContent>
    </Card>
  )
}

export default ServiceCard