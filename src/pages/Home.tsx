import Cuisines from "@/components/Cuisines";
import HeroSection from "@/components/HeroSection";
import HomyCeleberation from "@/components/HomyCeleberation";
import HomyMessage from "@/components/HomyMessage";
import HomyWorks from "@/components/HomyWorks";
import Nutrition from "@/components/Nutrition";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="font w-full">
      <HeroSection />
      <Services />
      <Nutrition />
      <HomyWorks />
      <HomyMessage />
      <HomyCeleberation />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <Testimonials />
      </motion.div>
      <Cuisines />
      <div className="sm:h-[50vh] min-h-fit p-8 secondaryFont text-center text-[4rem]">
        <motion.h1
          initial={{ x: 100, opacity: 0, scale: 0 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          From Kitchen to Plate,{" "}
        </motion.h1>
        <motion.h1
        className="text-red-500"
          initial={{ x: -100, opacity: 0, scale: 0 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >Just the Way You Like It!</motion.h1>
      </div>
    </div>
  );
};

export default Home;
