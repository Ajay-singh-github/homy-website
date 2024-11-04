import CooksGallery from '@/components/CooksGallery'
import GalleryLayout from '@/components/GalleryLayout'
const data = {
    title: "A Feast for Your Eyes",
    images: [
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Noodle soup with garnish",
        className: "col-span-2 row-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Curry with flatbread",
        className: "col-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Stack of pancakes",
        className: "row-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Wrapped burrito",
        className: "col-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Spiced rice dish",
        className: "col-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Rice with fried egg",
        className: "col-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Curry in pan",
        className: "col-span-2"
      },
      {
        src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        alt: "Pasta salad",
        className: "col-span-4"
      }
    ]
  }
  
const Gallery = () => {
  return (
    <div className="p-16 lg:p-20 grid grid-rows-1 gap-8">
        <CooksGallery/>
        <GalleryLayout title={data.title} images={data.images}/>
    </div>
  )
}

export default Gallery