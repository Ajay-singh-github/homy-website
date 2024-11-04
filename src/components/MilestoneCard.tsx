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
        <Card className="max-w-md overflow-hidden">
            <CardHeader className="space-y-2">
                <h2 className="text-[4rem] font-bold tracking-tight secondaryFont text-red-500">{data}</h2>
            </CardHeader>
            <CardContent className="">
                {title}
            </CardContent>
        </Card>
    );
};

export default MilestoneCard;
