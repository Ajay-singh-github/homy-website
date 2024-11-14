import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Check } from 'lucide-react'
interface PricingFeature {
    text: string
  }
  
  interface PricingCardProps {
    price: number
    title: string
    description: string
    features: PricingFeature[]
  }
const Plan = ({
    price = 7000,
    title = "Homy Comfort",
    description = "Enjoy chef-prepared North Indian meals at home with 3 dishes per visit. Perfect for families of 4.",
    features = [
      { text: "North Indian Food" },
      { text: "3 dishes + 1 type of bread" },
      { text: "Serves upto 4" },
    ],
  }: PricingCardProps) => {
  return (
    <Card className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white hover:scale-110 transition-all duration-200 shadow-lg">
      <CardHeader className="space-y-2 pb-2">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className="ml-1 text-sm font-normal text-muted-foreground">
            /month
          </span>
        </div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-red-500" />
              <span className="text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Plan