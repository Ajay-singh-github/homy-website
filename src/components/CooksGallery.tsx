import CookCard from "@/components/CookCard";
import cook from "../assets/cook.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const CooksGallery = () => {
  const [chefs, setChefs] = useState([
    {
      name: "Andrew",
      cuisines: ["Italian", "Indian", "Mexican", "Chinese"],
      profilePicture: cook,
    },
    {
      name: "Sarah",

      cuisines: ["French", "Japanese", "Thai"],
      profilePicture: cook,
    },
    {
      name: "Michael",

      cuisines: ["Mediterranean", "Greek", "Turkish"],
      profilePicture: cook,
    },
    {
      name: "Emma",

      cuisines: ["Korean", "Vietnamese", "Chinese"],
      profilePicture: cook,
    },
  ]);
  const fetchChefs = async () => {
    try {
      const { data } = await axios.get("https://thehomy.in/api/v1/chef/images");
      setChefs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchChefs();
  }, []);
  return (
    <div>
      <h1 className="text-center secondaryFont text-4xl font-bold italic text-red-500 mb-8">
        Meet Our Chefs
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto px-4"
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
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-full text-white md:-left-4" />

        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-red-500 p-2 rounded-full text-white md:-right-4" />
      </Carousel>
    </div>
  );
};

export default CooksGallery;
