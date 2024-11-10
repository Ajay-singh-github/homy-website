import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface MilestoneCardProps {
  title: string;
  data: string;
}

const MilestoneCard = ({
  title = "Meal Prep Tips for a Healthier Life",
  data = "3M+"
}: MilestoneCardProps) => {
  return (
    <Card className="w-full max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md overflow-hidden">
      <CardHeader className="space-y-2 p-4 sm:p-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight secondaryFont text-red-500 text-center sm:text-left">
          {data}
        </h2>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
          {title}
        </p>
      </CardContent>
    </Card>
  );
};

export default MilestoneCard;