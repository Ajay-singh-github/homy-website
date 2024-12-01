import Plan from "@/components/Plan";
import axios from "axios";
import { useEffect, useState } from "react";

// Define the type for a Plan
interface PlanType {
  morningPrice: number;
  eveningPrice: number;
  type: string;
  description: string;
  features: string[];
}

const testPlans: PlanType[] = [
  {
    morningPrice: 12000,
    eveningPrice: 15000,
    type: "Homy Fusion",
    description:
      "A mix of global cuisines including Indian, Chinese, and Italian, with a party package for special occasions.",
    features: [
      "Multi cuisine",
      "6 dishes + 2 types of bread", 
      "Serves up to 4",
      "Party Package: 3 parties (Serves up to 12 people)",
      "Dietitian Consultation: Personalized meal plan based on your dietary needs"
    ],
  },
  {
    morningPrice: 21000,
    eveningPrice: 25000,
    type: "Homy Wellness",
    description:
      "Get meals tailored to your dietary needs, along with a dietitian consultation and party services.",
    features: [
      "Multi cuisine",
      "6 dishes + 2 types of bread", 
      "Serves up to 4",
      "Party Package: 3 parties (Serves up to 12 people)",
      "Dietitian Consultation: Personalized meal plan based on your dietary needs"
    ],
  },
];

// Define the type for the API response
interface PlansResponse {
  success: boolean;
  data: PlanType[];
}

const Plans = () => {
  const [plans, setPlans] = useState<PlanType[]>([]);

  const fetchPlans = async () => {
    try {
      const { data } = await axios.get<PlansResponse>(
        "https://13.202.22.147/api/v1/plans/get"
      );
      console.log(data);
      if (data.success) {
        setPlans(data.data);
      }
    } catch (error) {
      console.log(error);
      setPlans(testPlans);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="p-8 sm:p-16 lg:p-20 grid grid-rows-1 gap-8">
      <h2 className="secondaryFont font-bold text-[2rem] text-red-500">
        Plans
      </h2>
      <div className="flex flex-wrap gap-8">
        {plans.map((plan, index) => (
          <Plan
            key={index}
            morningPrice={plan.morningPrice}
            eveningPrice={plan.eveningPrice}
            title={plan.type}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;