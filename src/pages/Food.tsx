import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Food = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [hasCooked, setHasCooked] = useState(false);

  const mockRecipe = {
    title: "Creamy Garlic Shrimp Pasta",
    source: "Instagram Recipe",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    ingredients: [
      {
        name: "Shrimp",
        amount: "1 pound",
        marketplace: "Whole Foods Market",
        price: "$15.99",
        link: "https://www.wholefoodsmarket.com/seafood"
      },
      {
        name: "Fettuccine Pasta",
        amount: "1 pound",
        marketplace: "Trader Joe's",
        price: "$2.99",
        link: "https://www.traderjoes.com/pasta"
      },
      {
        name: "Heavy Cream",
        amount: "2 cups",
        marketplace: "Local Grocery",
        price: "$4.99",
        link: "https://www.safeway.com/dairy"
      },
      {
        name: "Garlic",
        amount: "6 cloves",
        marketplace: "Farmers Market",
        price: "$1.99",
        link: "https://www.localfarmersmarket.com"
      }
    ],
    steps: [
      "Clean and devein the shrimp",
      "Cook pasta according to package instructions",
      "Sauté garlic in olive oil until fragrant",
      "Add shrimp and cook until pink",
      "Pour in heavy cream and simmer",
      "Combine with pasta and season to taste",
      "Garnish with parsley and serve hot"
    ]
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      toast.success(`Dinner date scheduled for ${formattedDate}! 🗓️`);
      console.log("Date scheduled:", date);
    }
  };

  const handleCookingComplete = () => {
    setHasCooked(true);
    toast.success("Recipe saved to your collection! 🎉");
  };

  const handleIngredientClick = (link: string) => {
    window.open(link, '_blank');
    toast.info("Opening store website in a new tab 🛒");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="max-w-6xl mx-auto space-y-12">
        <section className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Recipe Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={mockRecipe.image}
                alt={mockRecipe.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{mockRecipe.title}</h3>
                <p className="text-gray-600">From: {mockRecipe.source}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-4">Step by Step Instructions</h4>
                <ol className="space-y-3">
                  {mockRecipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="font-medium text-primary">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Schedule Date Night 🗓️</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Pick your date night</DialogTitle>
                    </DialogHeader>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      className="rounded-md border"
                    />
                  </DialogContent>
                </Dialog>

                <Button
                  variant={hasCooked ? "ghost" : "default"}
                  onClick={handleCookingComplete}
                  disabled={hasCooked}
                >
                  {hasCooked ? "Saved to Collection! 🎉" : "Save Recipe"}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4">Shopping List & Where to Buy</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mockRecipe.ingredients.map((ingredient, index) => (
                <Card 
                  key={index} 
                  className="p-4 cursor-pointer hover:shadow-md transition-all"
                  onClick={() => handleIngredientClick(ingredient.link)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{ingredient.name}</p>
                      <p className="text-sm text-gray-600">{ingredient.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-medium">{ingredient.marketplace}</p>
                      <p className="text-sm text-gray-600">{ingredient.price}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Food;