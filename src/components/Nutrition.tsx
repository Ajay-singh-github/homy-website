import regularSandwich from "../assets/regularSandwich.png";
import homySandwich from "../assets/homySandwich.png";
import { motion } from "framer-motion";
const Nutrition = () => {
  const nutritionFacts = [
    { label: "Calories", regular: "450", homy: "320", unit: "kcal" },
    { label: "Carbs", regular: "50", homy: "40", unit: "g" },
    { label: "Total Fat", regular: "20", homy: "12", unit: "g" },
    { label: "Protein", regular: "12", homy: "18", unit: "g" },
    { label: "Sodium", regular: "800", homy: "500", unit: "g" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-red-500 mb-4 secondaryFont">
          The Homy Difference
        </h2>
        <p className="text-xl text-gray-600">
          See how Homy meals are crafted with your health in mind!
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1  md:grid-cols-[1fr_auto_1fr] gap-16 items-center">
          {/* Regular Sandwich */}
          <div
            className="text-center"
          >
            <div className="relative w-full max-w-md mx-auto mb-4">
              <img
                src={regularSandwich}
                alt="Regular Sandwich"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold">Regular Sandwich</h3>
          </div>

          <motion.div
            className="space-y-6 mx-auto "
            initial={{  y: 100, opacity: 0 }}
            whileInView={{  y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Nutrition Facts */}

            {nutritionFacts.map((fact, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center w-[12rem]"
              >
                <div className="bg-pink-50 text-center py-2 px-6 rounded-full w-full">
                  {fact.label}
                </div>
                <div className="flex justify-between items-center gap-16">
                  <span className="text-right min-w-[60px]">
                    {fact.regular}
                    {fact.unit}
                  </span>
                  <span className="min-w-[60px]">
                    {fact.homy}
                    {fact.unit}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Homy Sandwich */}
          <div
            className="text-center"
          >
            <div className="relative w-full max-w-md mx-auto mb-4">
              <img
                src={homySandwich}
                alt="Homy Sandwich"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold">Homy Sandwich</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
