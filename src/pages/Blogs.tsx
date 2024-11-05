import BlogCard from '@/components/BlogCard';
import blog from "../assets/blogs.jpeg"

// Sample blog data
const blogData = [
  {
    title: "Meal Prep Tips for a Healthier Life",
    author: "Saanvi Biradar",
    role: "Head Chef",
    image: blog,
    description: "Prepping meals ahead can be a game-changer for busy weeks. With the Homy Comfort plan, get fresh ingredients and easy-to-follow recipes that take the stress out of cooking. Discover how simple steps like organizing ingredients and planning your meals can keep you consistent and energized all week."
  },
  {
    title: "Quick and Easy Breakfast Ideas",
    author: "Alex Johnson",
    role: "Nutritionist",
    image: blog,
    description: "Start your day right with these quick and nutritious breakfast ideas. Perfect for busy mornings, these recipes will fuel your body and mind for the day ahead."
  },
  {
    title: "Vegetarian Dishes That Pack a Protein Punch",
    author: "Emma Lee",
    role: "Dietitian",
    image: blog,
    description: "Discover delicious vegetarian meals that are high in protein. These recipes prove that you don't need meat to meet your protein needs and stay satisfied."
  },
  {
    title: "Meal Prep Tips for a Healthier Life",
    author: "Saanvi Biradar",
    role: "Head Chef",
    image:blog,
    description: "Prepping meals ahead can be a game-changer for busy weeks. With the Homy Comfort plan, get fresh ingredients and easy-to-follow recipes that take the stress out of cooking. Discover how simple steps like organizing ingredients and planning your meals can keep you consistent and energized all week."
  },
  {
    title: "Quick and Easy Breakfast Ideas",
    author: "Alex Johnson",
    role: "Nutritionist",
    image: blog,
    description: "Start your day right with these quick and nutritious breakfast ideas. Perfect for busy mornings, these recipes will fuel your body and mind for the day ahead."
  },
  {
    title: "Vegetarian Dishes That Pack a Protein Punch",
    author: "Emma Lee",
    role: "Dietitian",
    image: blog,
    description: "Discover delicious vegetarian meals that are high in protein. These recipes prove that you don't need meat to meet your protein needs and stay satisfied."
  },
  
  // Add more blog data as needed
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-center text-4xl font-bold text-red-500 mb-12 secondaryFont">Daily Bites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <div key={index} className="flex flex-col self-start">
            <BlogCard
              title={blog.title}
              author={blog.author}
              role={blog.role}
              image={blog.image}
              description={blog.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
