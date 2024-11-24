import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Categories } from "@/components/dashboard/Categories";
import { RecentPosts } from "@/components/dashboard/RecentPosts";
import { Reminders } from "@/components/dashboard/Reminders";

const Dashboard = () => {
  const navigate = useNavigate();

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
        <Categories />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RecentPosts />
          </div>
          <div>
            <Reminders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;