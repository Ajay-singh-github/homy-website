import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
interface Chef {
    name: string
    rating: number
    cuisines: string[]
    image: string
  }
const CookCard = ({ chef }: { chef: Chef }) => {
  return (
    <Card className="relative h-fit overflow-hidden rounded-lg bg-black text-white">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={chef.image}
          alt={chef.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 space-y-2">
          <h3 className="text-2xl font-bold">{chef.name}</h3>
          <div className="flex items-center gap-1">
            <span className="text-xl">{chef.rating}</span>
            <Star className="w-4 h-4 fill-current text-yellow-500" />
          </div>
          <div className="flex flex-wrap gap-2">
            {chef.cuisines.map((cuisine) => (
              <Badge
                key={cuisine}
                variant="outline"
                className="rounded-full border-white/20 bg-black/50 text-white"
              >
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CookCard