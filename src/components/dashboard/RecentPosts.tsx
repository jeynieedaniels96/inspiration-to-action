import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { recentPosts } from "@/data/dashboard-data";
import { toast } from "sonner";

export const RecentPosts = () => {
  const navigate = useNavigate();

  const handleBreakdown = (post: typeof recentPosts[0]) => {
    if (post.title === "Caramelized Shallot Pasta") {
      navigate("/food");
    } else {
      toast.success("Breaking down post into actionable steps...");
      console.log("Breaking down post:", post.id);
    }
  };

  return (
    <div>
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
                    onClick={() => handleBreakdown(post)}
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
  );
};