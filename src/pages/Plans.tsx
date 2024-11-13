import Plan from "@/components/Plan";

const plans = [
  
  {
    price: 12000,
    title: "Homy Fusion",
    description:
      "A mix of global cuisines including Indian, Chinese, and Italian, with a party package for special occasions.",
    features: [
      { text: "North Indian + Multicuisine Food" },
      { text: "3 dishes + 1 type of bread" },
      { text: "Serves up to 4" },
      { text: "Party Package: 2 parties (Serves up to 10 people)" },
    ],
  },
  {
    price: 21000,
    title: "Homy Wellness",
    description:
      "Get meals tailored to your dietary needs, along with a dietitian consultation and party services.",
    features: [
      { text: "North Indian Food" },
      { text: "6 dishes + 2 types of bread" },
      { text: "Serves up to 4" },
      { text: "Party Package: 3 parties (Serves up to 12 people)" },
      {
        text: "Dietitian Consultation: Personalized meal plan based on your dietary needs",
      },
    ],
  },

];

const Plans = () => {
  return (
    <div className="p-8 sm:p-16 lg:p-20 grid grid-rows-1 gap-8">
      <h2 className="secondaryFont font-bold text-[2rem] text-red-500">Plans</h2>
      <div className="flex flex-wrap gap-8">
        {plans.map((plan, index) => (
          <Plan
            key={index} // Add a unique key for each element in the list
            price={plan.price}
            title={plan.title}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};
export default Plans;
