import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"

import gallery3 from "../assets/gallery3.png"
import gallery4 from "../assets/gallery4.png"
import gallery5 from "../assets/gallery5.png"
import gallery6 from "../assets/gallery6.png"
import gallery7 from "../assets/gallery7.png"
import gallery8 from "../assets/gallery8.png"

import {motion} from "framer-motion"

interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}

interface ImageGalleryProps {
  title?: string;
  images: GalleryImage[];
}
const GalleryLayout = ({
    title = "A Feast for Your Eyes",
    images = [
      {
        src: gallery1,
        alt: "Noodle soup with garnish",
        className: "col-span-2 row-span-2"
      },
      {
        src:gallery2,
        alt: "Curry with flatbread",
        className: "col-span-2"
      },
      {
        src: gallery3,
        alt: "Stack of pancakes",
        className: "row-span-2"
      },
      {
        src: gallery4,
        alt: "Wrapped burrito",
        className: "col-span-2"
      },
      {
        src: gallery5,
        alt: "Spiced rice dish",
        className: "col-span-2"
      },
      {
        src: gallery6,
        alt: "Rice with fried egg",
        className: "col-span-2"
      },
      {
        src:gallery7,
        alt: "Curry in pan",
        className: "col-span-2"
      },
      {
        src: gallery8,
        alt: "Pasta salad",
        className: "col-span-4"
      }
    ]
  }: ImageGalleryProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center secondaryFont text-4xl font-bold italic text-red-500 mb-8">
        {title}
      </h1>
      <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto ">
        {images.map((image, index) => (
          <motion.div
          initial={{y:index%2?100:-100,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.7,ease:"easeOut"}}
          key={index}
          className={`relative overflow-hidden rounded-2xl ${image.className}`}
        >
          <div className="relative w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryLayout;
