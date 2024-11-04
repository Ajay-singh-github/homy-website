import ServiceCard from '@/components/ServiceCard'
import { Calendar, ChefHat, IceCreamBowl, Smile } from 'lucide-react'
interface Service {
    title: string
    description: string
    icon: React.ReactNode
  }
  
const services: Service[] = [
    {
      title: "Personalized meal plans",
      description: "In the new era of technology we look in the future with certainty and pride for our life.",
      icon: <IceCreamBowl className="h-6 w-6" />
    },
    {
      title: "Book a Chef",
      description: "Choose a professional chef to prepare meals at your home according to your schedule",
      icon: <ChefHat className="h-6 w-6" />
    },
    {
      title: "Home-Cooked Meals",
      description: "Enjoy freshly prepared meals right in your kitchen, made by your personal chef",
      icon: <Smile className="h-6 w-6" />
    },
    {
      title: "Meal Planner",
      description: "Plan your meals ahead by scheduling what dishes you want for each day",
      icon: <Calendar className="h-6 w-6" />
    }
  ]

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16 mb-12">
    <h2 className="text-4xl secondaryFont font-bold text-center text-red-500 italic my-12">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
  )
}

export default Services