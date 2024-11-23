import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Travel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <h1 className="text-3xl font-bold mb-6">Travel Collection</h1>
      <p className="text-gray-600">Your saved travel plans and inspiration will appear here.</p>
    </div>
  );
};

export default Travel;