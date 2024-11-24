import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Share2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const OnboardingSteps = [
  {
    title: "Save Your Ideas",
    description: "Connect your social media accounts to access all your saved posts in one place"
  },
  {
    title: "Break It Down",
    description: "Our AI automatically breaks down recipes, DIY projects, and more into simple steps"
  },
  {
    title: "Make It Happen",
    description: "Get shopping lists, reminders, and track your progress as you complete projects"
  }
];

const SocialConnections = [
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    color: "hover:bg-pink-100"
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    color: "hover:bg-blue-100"
  },
  {
    name: "Pinterest",
    icon: <Share2 className="h-5 w-5" />,
    color: "hover:bg-red-100"
  }
];

const Onboarding = () => {
  const navigate = useNavigate();

  const handleSocialConnect = (platform: string) => {
    console.log(`Connecting to ${platform}`);
    toast.success(`Connected to ${platform}!`);
  };

  const handleComplete = () => {
    console.log("Onboarding completed");
    toast.success("Welcome! Let's get started!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to SavedIdeas</h1>
        
        {/* Introduction Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {OnboardingSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Connections */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Connect Your Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {SocialConnections.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className={`w-full justify-start gap-2 ${platform.color}`}
                onClick={() => handleSocialConnect(platform.name)}
              >
                {platform.icon}
                Connect {platform.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Button 
            size="lg"
            onClick={handleComplete}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;