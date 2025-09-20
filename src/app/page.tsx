"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

// -------------------------
// Card component (About Section)
function Card({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white/10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform">
      <div className="flex flex-col md:flex-row">
        <img src={image} alt={title} className="md:w-1/3 w-full h-40 object-cover" />
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 text-teal-300">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
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
    <div className="bg-white/5 border border-gray-600 rounded-2xl shadow-md hover:shadow-2xl flex flex-col overflow-hidden">
      <a href={`/blog/${id}/${slug}`}>
        <img className="w-full h-40 object-cover" src={image} alt={title} />
      </a>
      <div className="flex flex-col flex-grow p-4">
        <h5 className="text-lg font-bold text-cyan-300">{title}</h5>
        <p className="text-gray-300 text-sm mb-3">{description}</p>
        <a
          href={`/blog/${id}/${slug}`}
          className="mt-auto self-start px-3 py-1 text-sm bg-teal-600 rounded-md text-white hover:bg-teal-700 transition"
        >
          Lihat Detail →
        </a>
      </div>
    </div>
  );
}

// -------------------------
export default function HomePage() {
  const carouselImages = [
    "https://picsum.photos/1200/500?random=7",
    "https://picsum.photos/1200/500?random=8",
    "https://picsum.photos/1200/500?random=9",
  ];

  // ✅ About Section → sekarang 4 card
  const aboutData = [
    { 
      title: "Introduction", 
      description: "Nama saya Arifah Husaini, mahasiswa D3 Teknik Informatika semester 3. Lagi belajar ngoding serius (kadang dibantu AI 😅).", 
      image: "https://picsum.photos/400/300?random=10" 
    },
    { 
      title: "Interests & Hobbies", 
      description: "Saya suka eksplorasi dunia pemrograman, desain, UI/UX, dan juga senang bermain dengan proyek kreatif digital.", 
      image: "https://picsum.photos/400/300?random=11" 
    },
    { 
      title: "Other Activities", 
      description: "Selain coding, saya hobi fotografi dan suka belajar hal baru untuk menambah skill.", 
      image: "https://picsum.photos/400/300?random=12" 
    },
    { 
      title: "Goals & Aspirations", 
      description: "Saya ingin menjadi seorang developer yang bisa menciptakan solusi bermanfaat serta membangun karir di bidang teknologi.", 
      image: "https://picsum.photos/400/300?random=19" 
    },
  ];

  const blogs = [
    { id: "101", title: "Kemerdekaan Indonesia", description: "Momen bersejarah yang melahirkan bangsa merdeka.", image: "https://picsum.photos/400/300?random=13" },
    { id: "102", title: "Tren Teknologi", description: "Bagaimana AI, IoT, dan blockchain membentuk masa depan.", image: "https://picsum.photos/400/300?random=14" },
    { id: "103", title: "Kebudayaan Nusantara", description: "Kaya akan tradisi, seni, dan keanekaragaman budaya.", image: "https://picsum.photos/400/300?random=15" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden bg-gray-900 rounded-2xl shadow-xl">
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute bottom-6 left-6 bg-black/60 px-4 py-2 rounded-lg">
              <h3 className="text-xl md:text-3xl font-semibold text-white">Slide {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-950">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-center text-teal-400">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20">
          {aboutData.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-800">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-center text-cyan-300">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.description} image={blog.image} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-green-400">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <form className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-5">
              <input type="text" placeholder="Nama" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-teal-400" required />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-teal-400" required />
              <textarea placeholder="Pesan" rows={5} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-teal-400" required />
              <button type="submit" className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">Kirim</button>
            </form>

            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col justify-center space-y-3">
              <h3 className="text-xl font-bold text-cyan-300">Kontak Langsung</h3>
              <p className="text-gray-300 text-sm">Jangan ragu untuk menghubungi saya melalui form atau kontak berikut:</p>
              <ul className="text-gray-200 text-sm space-y-2">
                <li>📍 Batam, Kepulauan Riau</li>
                <li>📧 <a href="mailto:arifahhusaini03@gmail.com" className="hover:underline">arifahhusaini03@gmail.com</a></li>
                <li>📞 +62 85795310609</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
