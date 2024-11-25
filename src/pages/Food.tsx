import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
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
        name: "Large Shrimp",
        amount: "1 pound",
        notes: "Look for 'deveined' shrimp to save prep time. Deveining means removing the dark vein (digestive tract) from the back of the shrimp.",
        marketplace: "Whole Foods Market",
        price: "$15.99",
        link: "https://www.wholefoodsmarket.com/seafood",
        alternatives: "Can use prawns or even chicken if seafood isn't available"
      },
      {
        name: "Fettuccine Pasta",
        amount: "1 pound",
        notes: "Regular wheat pasta",
        marketplace: "Trader Joe's",
        price: "$2.99",
        link: "https://www.traderjoes.com/pasta",
        alternatives: "Any long pasta works: linguine, spaghetti, or gluten-free options"
      },
      {
        name: "Heavy Cream",
        amount: "2 cups",
        notes: "Full-fat cream for best results",
        marketplace: "Local Grocery",
        price: "$4.99",
        link: "https://www.safeway.com/dairy",
        alternatives: "Half-and-half or coconut cream for dairy-free option"
      },
      {
        name: "Garlic",
        amount: "6 cloves",
        notes: "Fresh garlic preferred",
        marketplace: "Farmers Market",
        price: "$1.99",
        link: "https://www.localfarmersmarket.com",
        alternatives: "Minced garlic from jar (use 1 tablespoon)"
      }
    ],
    steps: [
      {
        instruction: "Clean and devein the shrimp",
        time: "10-15 minutes",
        details: "If shrimp isn't already deveined (dark vein removed), use a small knife to make a shallow cut along the back of each shrimp and remove the dark vein. Rinse under cold water.",
        tips: "Buy already deveined shrimp to save time. If shrimp is frozen, thaw in cold water for 15-20 minutes first."
      },
      {
        instruction: "Cook pasta according to package instructions",
        time: "10-12 minutes",
        details: "Bring a large pot of water to boil, add salt (should taste like sea water), then add pasta.",
        tips: "Save 1 cup of pasta water before draining - this helps create a silkier sauce"
      },
      {
        instruction: "Sauté garlic in olive oil until fragrant",
        time: "2-3 minutes",
        details: "Heat olive oil in a large pan over medium heat. Add minced garlic, stirring constantly to prevent burning.",
        tips: "If garlic starts browning too quickly, lower the heat"
      },
      {
        instruction: "Cook shrimp until pink",
        time: "4-5 minutes",
        details: "Add shrimp to the garlic pan. Cook until they turn pink and curl into a loose 'C' shape.",
        tips: "Don't overcook! Shrimp will become tough and rubbery if cooked too long"
      },
      {
        instruction: "Make the cream sauce",
        time: "5-7 minutes",
        details: "Pour in heavy cream, bring to a gentle simmer. Add salt, pepper, and optionally parmesan cheese.",
        tips: "If sauce is too thick, add reserved pasta water a little at a time"
      },
      {
        instruction: "Combine and serve",
        time: "2-3 minutes",
        details: "Add cooked pasta to the pan with the sauce, toss until well coated. Garnish with parsley if desired.",
        tips: "Serve immediately while the sauce is hot and creamy"
      }
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
      toast.success(`Date night scheduled for ${formattedDate}! 🗓️`);
      console.log("Date scheduled:", date);
    }
  };

  const handleCookingComplete = () => {
    setHasCooked(true);
    toast.success("Recipe saved to your collection! 🎉");
  };

  const handleIngredientClick = (link: string, name: string) => {
    window.open(link, '_blank');
    toast.info(`Opening ${name} shopping page in a new tab 🛒`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="max-w-6xl mx-auto space-y-12">
        <section className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">{mockRecipe.title}</h2>
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
                <h4 className="font-semibold text-lg mb-4">Detailed Instructions</h4>
                <ol className="space-y-6">
                  {mockRecipe.steps.map((step, index) => (
                    <li key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex gap-3">
                        <span className="font-medium text-primary">{index + 1}.</span>
                        <div className="space-y-2">
                          <p className="font-medium">{step.instruction}</p>
                          <p className="text-sm text-gray-600">{step.details}</p>
                          <div className="flex gap-4 text-sm">
                            <span className="text-primary">⏱️ {step.time}</span>
                            <span className="text-gray-500">💡 Tip: {step.tips}</span>
                          </div>
                        </div>
                      </div>
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
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
              {mockRecipe.ingredients.map((ingredient, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-md transition-all"
                  onClick={() => handleIngredientClick(ingredient.link, ingredient.name)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{ingredient.name}</p>
                          <p className="text-sm text-gray-600">{ingredient.amount}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-primary font-medium">{ingredient.marketplace}</p>
                          <p className="text-sm text-gray-600">{ingredient.price}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{ingredient.notes}</p>
                      <p className="text-sm text-gray-500 italic">Alternative: {ingredient.alternatives}</p>
                    </div>
                  </CardContent>
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