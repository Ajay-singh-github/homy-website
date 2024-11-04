import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import line from "../assets/line.svg";
import celebration from "../assets/celebrations.jpeg";

const HomyCelebration = () => {
  return (
    <div
      className="relative min-h-[600px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${celebration})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      <img src={line} alt="" className="absolute -left-[14rem] top-[12rem] -scale-x-100" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Elevate Your Celebrations
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Make your special occasions unforgettable with our party service. Whether it's a birthday, anniversary, or any gathering, our skilled chefs will prepare a customized menu that delights your guests.
          </p>
          <Button
            asChild
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-full text-lg"
          >
            <Link to="/plans">View Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomyCelebration;
