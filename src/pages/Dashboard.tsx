import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Bell } from "lucide-react";

const categories = [
  { name: "Recipes", count: 12 },
  { name: "DIY Projects", count: 8 },
  { name: "Fitness Plans", count: 5 },
  { name: "Others", count: 3 }
];

const recentPosts = [
  {
    title: "Homemade Pizza Recipe",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    title: "30-Day Workout Plan",
    category: "Fitness Plans",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with Search */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search saved posts..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">{category.count}</p>
                <p className="text-sm text-gray-600">saved items</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Saves</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.category}</p>
                  <Button className="mt-4" variant="outline">
                    Break It Down
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;