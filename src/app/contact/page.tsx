"use client";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-16 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Contact Us
          </h2>

          {/* Grid: Form + Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 
                             border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white 
                             focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 
                             border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white 
                             focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 
                             border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white 
                             focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white 
                           font-semibold rounded-lg transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center bg-white dark:bg-gray-800 
                            shadow-md rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Jika ada pertanyaan, kritik, atau saran, silakan hubungi kami
                melalui form atau kontak berikut:
              </p>
              <ul className="space-y-2">
                <li>
                  📍 <span className="font-medium">Alamat:</span> Bukit ayu lestari, Batam, Kepulauan Riau
                </li>
                <li>
                  📧 <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:arifahhusaini03@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    arifahhusaini03@gmail.com
                  </a>
                </li>
                <li>
                  📞 <span className="font-medium">Phone:</span> +62 857-9531-0609
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
