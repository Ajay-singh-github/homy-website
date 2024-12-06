import regularSandwich from "../assets/regularSandwich.png";
import homySandwich from "../assets/homySandwich.png";
import { motion } from "framer-motion";
import arrow from "../assets/Arrow.svg";
const Nutrition = () => {
  const nutritionFacts = [
    { label: "Calories", regular: "450", homy: "300", unit: "kcal" },
    { label: "Carbs", regular: "50", homy: "30", unit: "g" },
    { label: "Total Fat", regular: "20", homy: "12", unit: "g" },
    { label: "Protein", regular: "12", homy: "20", unit: "g" },
    { label: "Sodium", regular: "800", homy: "300", unit: "g" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 mb-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-red-500 mb-4 secondaryFont">
          Homy Difference
        </h2>
        <p className="text-xl text-gray-600">
          See how Homy meals are crafted with your health in mind!
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1  md:grid-cols-[1fr_auto_1fr] gap-24 items-center">
          {/* Regular Sandwich */}
          <div className="text-center relative">
            <div className="relative w-full max-w-md mx-auto mb-4">
              <img
                src={regularSandwich}
                alt="Regular Sandwich"
                className="w-full h-auto object-cover"
              />
            </div>
            <img src={arrow} alt="arrow" className="absolute w-0 md:w-[14rem] invisible md:visible rotate-12 -top-10 -right-24" />
            <h3 className="text-xl font-semibold">Regular Sandwich</h3>
          </div>

          <motion.div
            className="space-y-6 mx-auto "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Nutrition Facts */}

            {nutritionFacts.map((fact, index) => (
              <div key={index} className="flex gap-2 items-center w-[18rem]">
                <div className="text-right min-w-[60px]">
                  {fact.regular}
                  {fact.unit}
                </div>
                <div className="bg-pink-50 text-center py-2 px-6 rounded-full w-full">
                  {fact.label}
                </div>
                <div className="min-w-[60px]">
                  {fact.homy}
                  {fact.unit}
                </div>
              </div>
            ))}
          </motion.div>
          {/* Homy Sandwich */}
          <div className="text-center relative">
            <div className="relative w-full max-w-md mx-auto mb-4">
              <img
                src={homySandwich}
                alt="Homy Sandwich"
                className="w-full h-auto"
              />
            </div>
            <img src={arrow} alt="arrow" className="absolute w-0 md:w-[14rem] invisible md:visible -top-10 -left-24" style={{ transform: 'rotate(25deg)' }} />

            <h3 className="text-xl font-semibold">Homy Sandwich</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
