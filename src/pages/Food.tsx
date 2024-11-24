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
    title: "Caramelized Shallot Pasta",
    source: "Bon Appetit",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    ingredients: [
      {
        name: "Shallots",
        amount: "6 large",
        marketplace: "Whole Foods Market",
        price: "$3.99"
      },
      {
        name: "Pasta",
        amount: "1 pound",
        marketplace: "Local Grocery",
        price: "$2.99"
      },
      {
        name: "Garlic",
        amount: "4 cloves",
        marketplace: "Farmers Market",
        price: "$1.99"
      }
    ],
    steps: [
      "Slice shallots thinly and evenly",
      "Heat olive oil in a large pan over medium heat",
      "Add shallots and cook until caramelized (about 20 minutes)",
      "Add minced garlic and cook for 2 more minutes",
      "Cook pasta according to package instructions",
      "Combine pasta with caramelized shallots and garlic",
      "Season with salt and pepper to taste"
    ]
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      toast.success(`Reminder set for ${date.toLocaleDateString()}`);
    }
  };

  const handleCookingComplete = () => {
    setHasCooked(true);
    toast.success("Congratulations on cooking this recipe! 🎉");
  };

  const foodImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="max-w-6xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Food Gallery</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {foodImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover-scale">
                    <CardContent className="p-4">
                      <img
                        src={image}
                        alt={`Delicious food item ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Recipe Breakdown</h2>
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
                    <Button variant="outline">Schedule Cooking</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Pick a date to cook</DialogTitle>
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
                  {hasCooked ? "Recipe Completed! 🎉" : "I Made This!"}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4">Ingredients & Where to Buy</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mockRecipe.ingredients.map((ingredient, index) => (
                <Card key={index} className="p-4">
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