import MilestoneCard from "@/components/MilestoneCard";

const Milestone = () => {
  return (
    <div className="w-full text-center max-w-5xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 gap-8 relative -top-[6rem]">
      <MilestoneCard data="4K+" title="People Registered" />
      <MilestoneCard data="800+" title="Verified & trained chefs" />
      <MilestoneCard data="3.5K+" title="Households served" />
    </div>
  );
};

export default Milestone;
