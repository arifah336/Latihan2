import Navbar from "../components/Navbar";
import BlogCard from "./components/BlogCard";

const blogs = [
  { 
    id: "1945", 
    title: "Indonesia Raya", 
    description: "Lagu kebangsaan Indonesia.", 
    image: "https://flowbite.com/docs/images/blog/image-1.jpg" 
  },
  { 
    id: "2024", 
    title: "Teknologi AI", 
    description: "Perkembangan AI di masa kini.", 
    image: "https://flowbite.com/docs/images/blog/image-2.jpg" 
  },
  { 
    id: "1908", 
    title: "Kebangkitan Nasional", 
    description: "Peristiwa penting dalam sejarah Indonesia.", 
    image: "https://flowbite.com/docs/images/blog/image-3.jpg" 
  },
  { 
    id: "1998", 
    title: "Reformasi", 
    description: "Gerakan reformasi Indonesia.", 
    image: "https://flowbite.com/docs/images/blog/image-4.jpg" 
  },
  { 
    id: "2020", 
    title: "Pandemi COVID-19", 
    description: "Dampak pandemi di seluruh dunia.", 
    image: "https://picsum.photos/400/300?random=5" 
  },
  { 
    id: "2025", 
    title: "Visi Indonesia Emas", 
    description: "Harapan Indonesia di tahun 2045.", 
    image: "https://picsum.photos/400/300?random=6" 
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard 
            key={blog.id} 
            id={blog.id} 
            title={blog.title} 
            description={blog.description} 
            image={blog.image}
          />
        ))}
      </div>
    </>
  );
}
