import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Check } from 'lucide-react'



interface PricingCardProps {
    morningPrice: number
    eveningPrice: number
    title: string
    description: string
    features: string[]
}

const Plan = ({
    morningPrice = 8000,
    eveningPrice = 7000,
    title = "Homy Comfort",
    description = "Enjoy chef-prepared North Indian meals at home with 3 dishes per visit. Perfect for families of 4.",
    features = [
    ],
}: PricingCardProps) => {
  return (
    <Card className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white hover:scale-110 transition-all duration-200 shadow-lg">
      <CardHeader className="space-y-2 pb-2">
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold tracking-tight">{morningPrice}</span>
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              /morning
            </span>
          </div>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold tracking-tight">{eveningPrice}</span>
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              /evening
            </span>
          </div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight mt-4">
            {title}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-red-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Plan