import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        alt="Hero background - Culinary experience"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Discover & Organize Your Inspiration
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Save and organize your favorite places, recipes, fashion ideas, and more. Turn inspiration into action.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/onboarding')}
              className="bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/10"
              onClick={() => navigate('/dashboard')}
            >
              View Dashboard
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;