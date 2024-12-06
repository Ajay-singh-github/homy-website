import CooksGallery from '@/components/CooksGallery'
import GalleryLayout from '@/components/GalleryLayout'
// import gallery1 from "../assets/gallery1.png"
// import gallery2 from "../assets/gallery2.png"

// import gallery3 from "../assets/gallery3.png"
// import gallery4 from "../assets/gallery4.png"
// import gallery5 from "../assets/gallery5.png"
// import gallery6 from "../assets/gallery6.png"
// import gallery7 from "../assets/gallery7.png"
// import gallery8 from "../assets/gallery8.png"

import { useEffect, useState } from 'react'
import axios from 'axios'



  
const Gallery = () => {
  const [data,setData] = useState({
    title: "A Feast for Your Eyes",
    images: [
      {
        src: "gallery1",
        alt: "Noodle soup with garnish",
        className: "col-span-2 row-span-2"
      },
      {
        src:"gallery2",
        alt: "Curry with flatbread",
        className: "col-span-2"
      },
      {
        src:" gallery3",
        alt: "Stack of pancakes",
        className: "col-span-4"
      },
      {
        src: "4",
        alt: "Wrapped burrito",
        className: "col-span-2"
      },
      {
        src: "gallery5",
        alt: "Spiced rice dish",
        className: "col-span-2"
      },
      {
        src: "gallery6",
        alt: "Rice with fried egg",
        className: "col-span-2"
      },
      {
        src:"gallery7",
        alt: "Curry in pan",
        className: "col-span-2"
      },
      {
        src: "gallery8",
        alt: "Pasta salad",
        className: "col-span-4"
      }
    ]
  });
  const fetchImages = async () => {
    try {
      const { data: responseData } = await axios.get('https://thehomy.in/api/v1/images');

      // Limit to 8 images and map to retain layout
      const updatedImages = responseData.data.images.slice(0, 8).map((image:any, index:number) => ({
        src: image.imageUrl, // Using imageUrl from API
        alt: `Image ${index + 1}`, // Placeholder alt text
        className: data.images[index]?.className || "col-span-2" // Retain className from previous state or set default
      }));

      setData(prevData => ({
        ...prevData,
        images: updatedImages // Update images in state
      }));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(()=>{
    fetchImages()
  },[])
  return (
    <div className="p-8 sm:p-16 lg:p-20 grid grid-rows-1 gap-8">
        <CooksGallery/>
        <GalleryLayout title={data.title} images={data.images}/>
    </div>
  )
}

export default Gallery