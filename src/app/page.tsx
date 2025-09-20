"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

// -------------------------
// Card component (About Section)
function Card({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

// -------------------------
// BlogCard component
interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

function BlogCard({ id, title, description, image }: BlogCardProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="max-w-sm w-full h-full bg-gray-800 border border-gray-700 rounded-xl shadow-md flex flex-col hover:shadow-xl transition transform hover:-translate-y-1">
      <a href={`/blog/${id}/${slug}`}>
        <img className="rounded-t-xl w-full h-48 object-cover" src={image} alt={title} />
      </a>
      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-300">{description}</p>
        </div>
        <a
          href={`/blog/${id}/${slug}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-400 mt-auto transition"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
}

// -------------------------
export default function HomePage() {
  const carouselImages = [
    "https://picsum.photos/1200/500?random=1",
    "https://picsum.photos/1200/500?random=2",
    "https://picsum.photos/1200/500?random=3",
  ];

  const aboutData = [
    { 
      title: "Tentang Saya 1", 
      description: "Saya Ardhitya Danur Siswondo, mahasiswa D3 Teknik Informatika, tertarik dalam pengembangan web dan teknologi.", 
      image: "https://picsum.photos/400/300?random=1" 
    },
    { 
      title: "Tentang Saya 2", 
      description: "Saya senang belajar hal baru, terutama terkait pemrograman, desain UI/UX, dan proyek berbasis web.", 
      image: "https://picsum.photos/400/300?random=2" 
    },
    { 
      title: "Tentang Saya 3", 
      description: "Di luar dunia coding, saya juga menyukai kreativitas digital dan fotografi sebagai hobi.", 
      image: "https://picsum.photos/400/300?random=3" 
    },
  ];

  const blogs = [
    { id: "1945", title: "Indonesia Raya", description: "Lagu kebangsaan Indonesia.", image: "https://picsum.photos/400/300?random=4" },
    { id: "2024", title: "Teknologi AI", description: "Perkembangan AI di masa kini.", image: "https://picsum.photos/400/300?random=5" },
    { id: "1908", title: "Kebangkitan Nasional", description: "Peristiwa penting dalam sejarah Indonesia.", image: "https://picsum.photos/400/300?random=6" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg bg-gray-900">
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white">Welcome to Our Website</h3>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-300">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
          {aboutData.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-300">Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.description} image={blog.image} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-300">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 text-white bg-gray-700" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 text-white bg-gray-700" required />
              <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 text-white bg-gray-700" required />
              <button type="submit" className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition">Send Message</button>
            </form>

            <div className="bg-gray-800 shadow-lg rounded-xl p-8 space-y-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-indigo-300">Get in Touch</h3>
              <p className="text-gray-300">Jika ada pertanyaan, kritik, atau saran, silakan hubungi kami melalui form atau kontak berikut:</p>
              <ul className="space-y-2 text-gray-200">
                <li>📍 <span className="font-medium">Alamat:</span> Tanjung Sengkuang, Batu Ampar, Batam, Kepulauan Riau</li>
                <li>📧 <span className="font-medium">Email:</span> <a href="mailto:ardhityasiswondo@gmail.com" className="hover:underline">ardhityasiswondo@gmail.com</a></li>
                <li>📞 <span className="font-medium">Phone:</span> +62 813-6372-3553</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
