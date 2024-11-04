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
        src: "/placeholder.svg?height=400&width=400",
        alt: "Noodle soup with garnish",
        className: "col-span-2 row-span-2"
      },
      {
        src: "/placeholder.svg?height=300&width=400",
        alt: "Curry with flatbread",
        className: "col-span-2"
      },
      {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Stack of pancakes",
        className: "row-span-2"
      },
      {
        src: "/placeholder.svg?height=300&width=400",
        alt: "Wrapped burrito",
        className: "col-span-2"
      },
      {
        src: "/placeholder.svg?height=300&width=400",
        alt: "Spiced rice dish",
        className: "col-span-2"
      },
      {
        src: "/placeholder.svg?height=300&width=400",
        alt: "Rice with fried egg",
        className: "col-span-2"
      },
      {
        src: "/placeholder.svg?height=300&width=400",
        alt: "Curry in pan",
        className: "col-span-2"
      },
      {
        src: "/placeholder.svg?height=300&width=400",
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
          <div
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
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default GalleryLayout;
