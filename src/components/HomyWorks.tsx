import playstore from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
import line from "../assets/line.svg";
import { Link } from "react-router-dom";
import homyWorks from "../assets/homyWorkImg.jpeg";
import iphone from "../assets/iphone.png";
import {motion} from "framer-motion"

const HomyWorks = () => {
  return (
    <div
      className=" w-full bg-cover bg-center bg-no-repeat flex items-center justify-between relative min-h-[600px] overflow-hidden"
      style={{
        backgroundImage: `url(${homyWorks})`,
      }}
    >
      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Image on the left */}
      <motion.div className="relative hidden md:flex h-[48rem] w-auto items-center justify-center p-12"
      initial={{  y: 100, opacity: 0 }}
      whileInView={{  y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        <img src={iphone} alt="homy" className="h-full w-auto object-contain" />
      </motion.div>

      {/* Content on the right */}
      <div className="flex flex-col md:w-1/2 text-white gap-6 p-4 md:mr-10 relative">
        <h2 className="text-[3rem] font-bold w-[16rem]">How Homy Works?</h2>
        <p className="font-bold w-full max-w-sm">
          From selecting your preferred cooking service plan to customizing your
          meal options, see how easy it is to enhance your culinary journey with
          Homy.
        </p>
        <div className="flex items-center gap-4">
          <Link to="#" className="block">
            <img
              src={playstore}
              alt="Get it on Google Play"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
          </Link>
          <Link to="#" className="block">
            <img
              src={appStore}
              alt="Download on the App Store"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>
      
      {/* Decorative line */}
      <img src={line} alt="" className="absolute w-[8rem] md:w-1/5 right-0 top-1/3 hidden sm:block" />
    </div>
  );
};

export default HomyWorks;
