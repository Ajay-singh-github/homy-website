import CookCard from "@/components/CookCard";
import cook from "../assets/cook.jpeg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Chef {
  name: string;
  rating: number;
  cuisines: string[];
  image: string;
}

const chefs: Chef[] = [
  {
    name: "Andrew",
    rating: 4.3,
    cuisines: ["Italian", "Indian", "Mexican", "Chinese"],
    image: cook,
  },
  {
    name: "Sarah",
    rating: 4.5,
    cuisines: ["French", "Japanese", "Thai"],
    image: cook,
  },
  {
    name: "Michael",
    rating: 4.7,
    cuisines: ["Mediterranean", "Greek", "Turkish"],
    image: cook,
  },
  {
    name: "Emma",
    rating: 4.4,
    cuisines: ["Korean", "Vietnamese", "Chinese"],
    image: cook,
  },
];
const CooksGallery = () => {
  return (
    <div>
      <h1 className="text-center secondaryFont text-4xl font-bold italic text-red-500 mb-8">
      Meet Our Cooks
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto px-8"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {chefs.map((chef, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <CookCard chef={chef} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
    </div>
  );
};

export default CooksGallery;
