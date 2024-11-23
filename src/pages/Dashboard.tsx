import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Bell, ArrowRight, Clock, Plus, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Recipes",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    count: 12
  },
  {
    id: 2,
    title: "DIY Projects",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    count: 8
  },
  {
    id: 3,
    title: "Fitness Plans",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    count: 15
  },
  {
    id: 4,
    title: "Others",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    count: 5
  }
];

const recentPosts = [
  {
    id: 1,
    title: "30-Minute Pasta Recipe",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    savedAt: "2 hours ago"
  },
  {
    id: 2,
    title: "Home Office Setup Guide",
    category: "DIY Projects",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    savedAt: "5 hours ago"
  },
  {
    id: 3,
    title: "Morning Workout Routine",
    category: "Fitness Plans",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    savedAt: "1 day ago"
  }
];

const reminders = [
  {
    id: 1,
    title: "Start meal prep",
    time: "Today, 6:00 PM",
    category: "Recipes"
  },
  {
    id: 2,
    title: "Morning workout",
    time: "Tomorrow, 7:00 AM",
    category: "Fitness Plans"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleBreakdown = (postId: number) => {
    toast.success("Breaking down post into actionable steps...");
    console.log("Breaking down post:", postId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/')}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Button>
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search saved posts..." 
                className="pl-10 bg-gray-100 border-none"
              />
            </div>
          </div>
          <Button variant="outline" size="icon" className="rounded-full relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Recent Saves</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id} className="p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex gap-4">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold mb-1">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {post.category} • Saved {post.savedAt}
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleBreakdown(post.id)}
                          className="hover-scale"
                        >
                          Break It Down
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Reminders */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Reminders</h2>
              <Button variant="ghost" size="sm" className="hover-scale">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>
            <ScrollArea className="h-[400px] rounded-lg border bg-white p-4">
              <div className="space-y-4">
                {reminders.map((reminder) => (
                  <Card key={reminder.id} className="p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{reminder.title}</h4>
                        <p className="text-sm text-gray-500">{reminder.time}</p>
                        <p className="text-xs text-gray-400 mt-1">{reminder.category}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;