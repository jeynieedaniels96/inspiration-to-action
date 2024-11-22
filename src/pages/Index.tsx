import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, ArrowRight, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="py-6 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold">TaskFlow</h1>
          <Button variant="outline" className="hover-scale">
            Get Started
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center max-w-4xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 inline-block">
            Transform Your Ideas
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Turn Social Media Saves into Actionable Tasks
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your saved posts into organized, step-by-step tasks. Make your inspiration actionable.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              Create Task <PlusCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="mt-24 grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="glass-card p-6 hover-scale cursor-pointer"
              onClick={() => navigate(feature.route)}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

const features = [
  {
    title: "Travel",
    description: "Organize your travel inspiration and create detailed itineraries from saved posts.",
    icon: <Bookmark className="h-6 w-6 text-primary" />,
    route: "/travel"
  },
  {
    title: "Food",
    description: "Transform saved recipes into step-by-step cooking instructions.",
    icon: <ArrowRight className="h-6 w-6 text-primary" />,
    route: "/food"
  },
  {
    title: "Fashion",
    description: "Organize your style inspiration and create outfit collections.",
    icon: <PlusCircle className="h-6 w-6 text-primary" />,
    route: "/fashion"
  },
];

export default Index;