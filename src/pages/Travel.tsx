import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Travel = () => {
  const navigate = useNavigate();

  const mockRecipe = {
    title: "Caramelized Shallot Pasta",
    source: "Bon Appetit",
    image: "https://assets.bonappetit.com/photos/5e8cbe1ec735340008c5e83b/16:9/w_2560%2Cc_limit/Basically-Caramelized-Shallot-Pasta.jpg",
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
    ]
  };

  const moodboardImages = [
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Moodboard Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Travel Moodboard</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {moodboardImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="hover-scale">
                    <CardContent className="p-4">
                      <img
                        src={image}
                        alt={`Beautiful travel destination ${index + 1}`}
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

        {/* Recipe Breakdown Demo */}
        <section className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Recipe Breakdown Demo</h2>
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
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Ingredients & Where to Buy</h4>
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

export default Travel;