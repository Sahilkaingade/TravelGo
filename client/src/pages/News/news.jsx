import React, { useState, useMemo } from "react";
import { FiUser, FiCalendar, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
import contactbg from "../../assets/contact-bg.jpg";

const articles = [
  {
    id: 1,
    category: "Destinations",
    title: "Top 10 Hidden Gems in Southeast Asia for 2025",
    description:
      "Discover breathtaking destinations off the beaten path that promise unforgettable adventures.",
    author: "Sarah Chen",
    date: "Aug 7",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=70",
  },
  {
    id: 2,
    category: "Travel Tips",
    title: "How to Travel Europe on a Budget: Complete Guide",
    description:
      "Essential tips and tricks to explore Europe without breaking the bank.",
    author: "Marco Rodriguez",
    date: "Aug 6",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=70",
  },
  {
    id: 3,
    category: "Deals",
    title: "Last-Minute Flight Deals: Save Up to 60% This Week",
    description: "Amazing flight deals to popular destinations worldwide.",
    author: "Travel Deals Team",
    date: "Aug 5",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=70",
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "Digital Nomad Hotspots: Best Cities for Remote Work",
    description: "Explore the top destinations for digital nomads.",
    author: "Alex Thompson",
    date: "Aug 3",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=70",
  },
  {
    id: 5,
    category: "Sustainability",
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    description:
      "Learn practical ways to travel responsibly and make a positive impact.",
    author: "Emma Green",
    date: "Aug 2",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=70",
  },
  {
    id: 6,
    category: "Culture",
    title: "Food Tourism: Culinary Adventures Around the World",
    description:
      "Embark on a gastronomic journey through the world’s most delicious destinations.",
    author: "David Kim",
    date: "Aug 1",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=70",
  },
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filteredArticles = useMemo(() => {
    return selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="scroll-smooth">
      {/* Banner */}
      <motion.div
        style={{ backgroundImage: `url(${contactbg})` }}
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          News & Insights
        </h1>
      </motion.div>

      {/* News Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Travel News & Insights
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest travel trends, tips, and destinations.
            </p>
          </div>
        </div>

        {/* Featured Article */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Featured Article
            </span>
            <h3 className="text-3xl font-bold mt-4">
              The Ultimate Guide to Solo Female Travel in 2025
            </h3>
            <p className="text-gray-600 mt-3">
              Safety tips, inspiring destinations, and empowering advice for solo
              women travelers.
            </p>
            <div className="flex flex-wrap items-center text-gray-500 text-sm mt-4 space-x-4">
              <span className="flex items-center">
                <FiUser className="mr-1" /> Jessica Martinez
              </span>
              <span className="flex items-center">
                <FiCalendar className="mr-1" /> Aug 8, 2025
              </span>
              <span className="flex items-center">
                <FiClock className="mr-1" /> 12 min read
              </span>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition">
                Read Full Article
              </button>
              <button className="border border-gray-300 px-5 py-2 rounded-md shadow hover:bg-gray-100 transition">
                Save for Later
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80"
              alt="Solo Travel"
              className="rounded-xl shadow-lg object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Browse by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full border text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
            >
              <img
                src={article.img}
                alt={article.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase text-blue-600">
                  {article.category}
                </span>
                <h4 className="text-lg font-bold mt-2">{article.title}</h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center text-gray-500 text-xs mt-4 space-x-4">
                  <span className="flex items-center">
                    <FiUser className="mr-1" /> {article.author}
                  </span>
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" /> {article.date}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="mr-1" /> {article.readTime}
                  </span>
                </div>
                <button className="mt-4 text-blue-600 text-sm font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
