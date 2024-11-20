import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogCard from '@/components/BlogCard';

interface Blog {
  id: string; // Updated to match the response
  title: string;
  author: string;
  role: string;
  image: string;
  description: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/blogs'); // Replace with your API URL
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to fetch blogs. Please try again later.');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-12">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-center text-4xl font-bold text-red-500 mb-12 secondaryFont">Daily Bites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id} // Ensure `id` matches your API response
            className="flex flex-col self-start cursor-pointer"
            onClick={() => navigate(`/blogs/${blog.id}`)} // Navigate to blog details
          >
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
