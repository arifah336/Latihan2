import Navbar from "../components/Navbar";
import Card from "./components/Card";

export default function AboutPage() {
  const cardData = [
    {
      title: "Tentang Saya 1",
      description: "Saya seorang pengembang web yang antusias dalam belajar teknologi baru dan membuat proyek yang bermanfaat.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      title: "Tentang Saya 2",
      description: "Saya menyukai pemrograman, desain UI/UX, dan selalu berusaha meningkatkan kemampuan saya setiap hari.",
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
    },
    {
      title: "Tentang Saya 3",
      description: "Selain coding, saya juga tertarik pada fotografi dan kreativitas digital sebagai hobi dan inspirasi proyek.",
      image: "https://flowbite.com/docs/images/blog/image-3.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}
