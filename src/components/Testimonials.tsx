import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import customer from "../assets/customer.png"
import { useState } from "react"

interface Testimonial {
    name: string
    rating: number
    comment: string
    image: string
  }
  
  const testimonials: Testimonial[] = [
    {
      name: "Vikram Singh",
      rating: 5,
      comment: "Chiefs make great food and the homy team is helpful whenever I have to make adjustment to chiefs timing according to my schedule",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjW8aIzk-MBtiVH7HI3s-NsmMBDIn32EOXy3q9QpezrnXLK7TCE=w120-h120-p-rp-mo-br100"
    },
    {
      name: "Dev Aryan Cilson",
      rating: 5,
      comment: "I tried 'The Homey' last date and it offers a fantastic cooking service that feels both personal and professional. Their chefs whip up delicious, customized meals with fresh ingredients and cater to any dietary needs. It's a real treat to have such great food delivered straight to your door, making every meal effortless and enjoyable. Highly Appreciated and Recommend too.",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXwW3zIk3DmaGOKfGmDaA-dF0ZpWy3oCvnkGPTCe_T9NjwsXDxt=w120-h120-p-rp-mo-br100"
    },
    {
      name: "Neeru Manchanda",
      rating: 4,
      comment: "Well manners Chef nd Homely food I enjoyed",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUr3wcDCvlNZn7zn-YD0dbDMumEtB4UyXqwFhPcHMjk6xCCFpk=w72-h72-p-rp-mo-br100"
    }
  ]
  
  function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 40; 

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

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
                    {isExpanded ? testimonial.comment : `${testimonial.comment.slice(0, maxLength)}...`}
                {testimonial.comment.length > maxLength && (
                    <button
                        onClick={handleToggle}
                        className="text-blue-500 hover:underline"
                    >
                        {isExpanded ? "Show Less" : "Read More"}
                    </button>
                )}
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