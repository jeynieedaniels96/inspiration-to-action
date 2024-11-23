import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShareDialog from "@/components/ShareDialog";

const Index = () => {
  const navigate = useNavigate();

  const inspirationalContent = [
    {
      id: 1,
      title: "Travel Planning Made Easy",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      description: "Transform your travel inspiration into detailed itineraries",
      category: "Travel"
    },
    {
      id: 2,
      title: "Recipe Collections",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      description: "Organize and plan your cooking adventures",
      category: "Food"
    },
    {
      id: 3,
      title: "Style Inspiration",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Create your perfect wardrobe with organized fashion ideas",
      category: "Fashion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 text-white text-sm font-medium mb-6 inline-block">
                Transform Your Ideas
              </span>
              <h1 className="text-4xl sm:text-6xl font-display font-bold mb-6 text-white">
                Turn Inspiration Into Action
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Transform your saved posts into organized, step-by-step tasks. Make your inspiration actionable.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="hover-scale bg-primary"
                  onClick={() => navigate('/onboarding')}
                >
                  Get Started <PlusCircle className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale text-white border-white hover:bg-white/10"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">
            Organize Your Digital Life
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether it's travel plans, recipes, or fashion inspiration, we help you turn your saved content into actionable plans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {inspirationalContent.map((content) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card 
                className="overflow-hidden hover-scale cursor-pointer glass-card"
                onClick={() => navigate(`/${content.category.toLowerCase()}`)}
              >
                <div className="relative h-64">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <ShareDialog 
                      title={`Check out ${content.title} on TaskFlow!`}
                      url={window.location.origin + '/' + content.category.toLowerCase()}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-600">
                    {content.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;