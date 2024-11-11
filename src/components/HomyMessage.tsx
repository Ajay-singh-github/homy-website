import Milestone from "@/components/Milestone";
import { Heart } from "lucide-react";
import chefCook from "../assets/chefPreparingFood.png"
import fryingPan from "../assets/cookingpan.png"
import cookedFood from "../assets/cookedBbq.png"
import {motion} from "framer-motion"

const HomyMessage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Milestone />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex gap-2">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
            <img
              src={chefCook}
              alt="Chef preparing food"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="h-full flex flex-col gap-2">
            <div className="h-[16rem] w-[14rem] relative aspect-video rounded-3xl overflow-hidden">
              <img
                src={fryingPan}
                alt="Shrimp dish with garnish"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-1/3 relative aspect-video rounded-3xl overflow-hidden">
              <img
                src={cookedFood}
                alt="Grilled meat platter"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        <motion.div className="space-y-8 max-w-[24rem] overflow-hidden"
        initial={{x:100,opacity:0,scale:0}}
        whileInView={{x:0,opacity:1,scale:1}}
        transition={{duration:0.6, ease:"easeOut"}}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We provide healthy food for your family{" "}
            <Heart className="inline-block h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-red-500 fill-current" />
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HomyMessage;
