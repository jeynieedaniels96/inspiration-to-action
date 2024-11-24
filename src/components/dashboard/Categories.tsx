import { Card } from "@/components/ui/card";
import { categories } from "@/data/dashboard-data";

export const Categories = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="group relative overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="absolute inset-0">
              <img 
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            </div>
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-white/80">{category.count} items</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};