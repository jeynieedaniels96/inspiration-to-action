import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Food & Recipes",
    description: "Discover culinary inspirations",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    path: "/food"
  },
  {
    id: 2,
    title: "Travel Destinations",
    description: "Explore amazing places",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    path: "/travel"
  },
  {
    id: 3,
    title: "Fashion & Style",
    description: "Stay trendy and inspired",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    path: "/fashion"
  },
  {
    id: 4,
    title: "Restaurants",
    description: "Find your next favorite spot",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    path: "/food"
  }
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-display font-bold mb-4">
          Explore Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover and save inspiration across different categories. Create collections that matter to you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => navigate(category.path)}
            className="cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10" />
              <img 
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;