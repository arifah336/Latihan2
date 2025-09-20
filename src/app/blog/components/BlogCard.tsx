interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function BlogCard({ id, title, description, image }: BlogCardProps) {
  // bikin slug dari title biar URL rapi (misal "Indonesia Raya" -> "indonesia-raya")
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="max-w-sm w-full h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a href={`/blog/${id}/${slug}`}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <a
          href={`/blog/${id}/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
                     bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
                     focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto"
        >
          Baca Selengkapnya
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
