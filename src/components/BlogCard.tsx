import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface BlogCardProps {
    title: string;
    author: string;
    role: string;
    image: string;
    description: string;
}

const BlogCard = ({
    title = "Meal Prep Tips for a Healthier Life",
    author = "Saanvi Biradar",
    role = "Head Chef",
    image = "/placeholder.svg?height=200&width=400",
    description = "Prepping meals ahead can be a game-changer for busy weeks. With the Homy Comfort plan, get fresh ingredients and easy-to-follow recipes that take the stress out of cooking. Discover how simple steps like organizing ingredients and planning your meals can keep you consistent and energized all week."
}: BlogCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100; 

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card className="max-w-md overflow-hidden">
            <CardHeader className="space-y-2 p-6">
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                <div className="flex items-center space-x-1 text-sm">
                    <span className="text-red-500">{author}</span>
                    <span className="text-muted-foreground">{role}</span>
                </div>
            </CardHeader>
            <div className="relative aspect-[4/3] w-full">
                <img
                    alt="Blog post image"
                    className="object-cover fill-inherit"
                    src={image}
                />
            </div>
            <CardContent className="p-6">
                <p className="text-muted-foreground">
                    {isExpanded ? description : `${description.slice(0, maxLength)}...`}
                </p>
                {description.length > maxLength && (
                    <button
                        onClick={handleToggle}
                        className="text-blue-500 hover:underline"
                    >
                        {isExpanded ? "Show Less" : "Read More"}
                    </button>
                )}
            </CardContent>
        </Card>
    );
};

export default BlogCard;
