import CooksGallery from '@/components/CooksGallery'
import GalleryLayout from '@/components/GalleryLayout'
import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"

import gallery3 from "../assets/gallery3.png"
import gallery4 from "../assets/gallery4.png"
import gallery5 from "../assets/gallery5.png"
import gallery6 from "../assets/gallery6.png"
import gallery7 from "../assets/gallery7.png"
import gallery8 from "../assets/gallery8.png"
const data = {
    title: "A Feast for Your Eyes",
    images: [
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
        className: "col-span-4"
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
  }
  
const Gallery = () => {
  return (
    <div className="p-8 sm:p-16 lg:p-20 grid grid-rows-1 gap-8">
        <CooksGallery/>
        <GalleryLayout title={data.title} images={data.images}/>
    </div>
  )
}

export default Gallery