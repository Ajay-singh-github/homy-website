import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import customer from "../assets/customer.png"

interface Testimonial {
    name: string
    rating: number
    comment: string
    image: string
  }
  
  const testimonials: Testimonial[] = [
    {
      name: "Wade Warren",
      rating: 4.75,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: customer
    },
    {
      name: "Wade Warren",
      rating: 4.75,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: customer
    },
    {
      name: "Wade Warren",
      rating: 4.75,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: customer
    }
  ]
  
  function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
      <Card className="bg-zinc-900 border-none">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-amber-200">
              <img
                src={testimonial.image}
                alt={testimonial.name}
            
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">{testimonial.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                <span className="text-white">{testimonial.rating}</span>
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
const Testimonials = () => {
  return (
    <div className="container mx-auto px-2 py-16">
      <h2 className="text-4xl font-bold text-center text-red-500 italic mb-12 secondaryFont">
        Our Happy Customers
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="text-white" /> */}
        {/* <CarouselNext className="text-white" /> */}
      </Carousel>
    </div>
  )
}

export default Testimonials