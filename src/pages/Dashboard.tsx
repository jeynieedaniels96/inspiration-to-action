import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Bell, Heart, Share2, Bookmark } from "lucide-react";
import { toast } from "sonner";

const inspirationalContent = [
  {
    id: 1,
    title: "Mediterranean Pasta Recipe",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    description: "Fresh and light pasta dish perfect for summer evenings",
    saves: 234,
    height: "h-[350px]"
  },
  {
    id: 2,
    title: "30-Day Fitness Challenge",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    description: "Transform your body with this comprehensive workout plan",
    saves: 456,
    height: "h-[450px]"
  },
  {
    id: 3,
    title: "DIY Home Decor",
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Beautiful and budget-friendly home decoration ideas",
    saves: 789,
    height: "h-[400px]"
  },
  {
    id: 4,
    title: "Mindful Morning Routine",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Start your day right with these mindful practices",
    saves: 321,
    height: "h-[380px]"
  },
  {
    id: 5,
    title: "Urban Photography Tips",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Capture stunning city shots with these pro tips",
    saves: 567,
    height: "h-[420px]"
  }
];

const Dashboard = () => {
  const handleSave = (id: number) => {
    toast.success("Saved to your collection!");
    console.log("Saved item:", id);
  };

  const handleShare = (id: number) => {
    toast.success("Link copied to clipboard!");
    console.log("Shared item:", id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search for inspiration..." 
              className="pl-10 bg-gray-100 border-none"
            />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {inspirationalContent.map((item) => (
            <Card 
              key={item.id} 
              className="break-inside-avoid mb-4 overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            >
              <div className={`relative ${item.height}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 group">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="rounded-full bg-white/90 hover:bg-white"
                      onClick={() => handleSave(item.id)}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full bg-white/90 hover:bg-white"
                      onClick={() => handleShare(item.id)}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    {item.saves}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;