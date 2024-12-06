import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

interface Blog {
    id: string;
    title: string;
    author: string;
    role: string;
    image: any;
    description: string;
    body: {
      content: Array<{
        content: Array<{
          value: string;
          nodeType: string;
        }>;
        nodeType: string;
      }>;
    };
  }

const BlogDetail = () => {
  const { id } = useParams(); // Fetch the blog ID from the URL
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://thehomy.in/api/v1/blogs/${id}`
        ); // Replace with your API URL
        console.log(response.data)
        setBlog(response.data);
      } catch (err) {
        setError("Failed to load the blog. Please try again later.");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading blog...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-12">{error}</div>;
  }

  if (!blog) {
    return (
      <div className="text-center text-gray-500 py-12">No blog found.</div>
    );
  }

  return (
    <Card className="mb-8 max-w-2lg">
      <CardHeader className="text-center">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="mt-2 text-gray-600">
          By <span className="font-semibold">{blog.author}</span> - {blog.role}
        </p>
      </CardHeader>
      <CardContent>
      <img
  src={blog.image}
  alt={blog.title}
  className="w-full h-auto max-h-[20rem] lg:max-h-[25rem] rounded-lg shadow-md object-cover mb-4"
/>
        <div className="text-gray-700 text-lg">{blog.description}</div>
        <div className="text-gray-800">
          {blog.body.content.map((section, index) => (
            <div key={index} className="mb-6">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph.value}
                </p>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDetail;
