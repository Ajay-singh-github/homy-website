import { Card } from "@/components/ui/card";
import cuisine from "../assets/cuisines.png";

interface CuisineType {
  name: string;
  className?: string;
}

const cuisines: CuisineType[] = [
  { name: "Indian", className: "col-start-1 sm:col-start-2" },
  { name: "Italian", className: "col-start-2 sm:col-start-3" },
  { name: "Chinese", className: "col-start-3 sm:col-start-4" },
  { name: "Mexican", className: "col-start-1 sm:col-start-2" },
  { name: "Thai", className: "col-start-2 sm:col-start-3" },
  { name: "Japanese", className: "col-start-3 sm:col-start-4" },
  { name: "French", className: "col-start-1  sm:col-start-2" },
  { name: "and many more", className: "col-start-2 col-span-2 sm:col-start-3" },
]

const Cuisines = () => {
  return (
    <div className="relative min-h-[600px] h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 w-[32rem] mx-auto">
        <img
          src={cuisine}
          alt="Food preparation"
          className="opacity-20 h-auto w-full max-w-full object-contain"
        />
      </div>

      <div className="container h-full  mx-auto px-4 py-8 relative z-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-red-500 italic text-center mb-16 secondaryFont">
          Experience a World of Flavors
        </h2>

        {/* Cuisine Grid */}
        <div className="max-w-4xl mx-auto">
          {/* From Indian classics label */}
          <div className="absolute left-4 md:left-0 top-[30%] transform -translate-y-1/2">
            <Card className="bg-red-50 text-red-500 px-4 py-2 text-sm">
              From Indian classics
            </Card>
            <div className="h-px w-16 bg-red-200 absolute top-1/2 -right-16 dotted-line" />
          </div>

          {/* To international cuisines label */}
          <div className="absolute right-4 md:right-0 -bottom-[30px] sm:bottom-[2px] transform -translate-y-1/2">
            <div className="h-px w-16 bg-red-200 absolute top-1/2 -left-16 dotted-line" />
            <Card className="bg-red-50 text-red-500 px-4 py-2 text-sm">
              to international cuisines
            </Card>
          </div>

          {/* Cuisine Cards Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 w-full">
            {cuisines.map((cuisine, index) => (
              <Card
                key={index}
                className={`bg-white w-full shadow-lg hover:shadow-xl transition-shadow 
                  p-2 sm:px-6 sm:py-3 text-center ${cuisine.className}`}
              >
                {cuisine.name}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for dotted lines */}
      {/* <style jsx>{`
        .dotted-line {
          background-image: linear-gradient(to right, rgb(239 68 68) 50%, transparent 50%);
          background-size: 8px 1px;
          background-repeat: repeat-x;
        }
      `}</style> */}
    </div>
  );
};

export default Cuisines;
