import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
interface Chef {
    name: string
    cuisines: string[]
    profilePicture: string
  }
const CookCard = ({ chef }: { chef: Chef }) => {
  return (
    <Card className="relative h-fit overflow-hidden rounded-lg bg-black text-white">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={chef.profilePicture}
          alt={chef.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 space-y-2">
          <h3 className="text-2xl font-bold">{chef.name}</h3>
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