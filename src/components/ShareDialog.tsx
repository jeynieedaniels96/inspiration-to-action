import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, LinkedIn, Link2 } from "lucide-react";
import { toast } from "sonner";

interface ShareDialogProps {
  title: string;
  url: string;
}

const ShareDialog = ({ title, url }: ShareDialogProps) => {
  const shareOptions = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      onClick: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        toast.success("Opening Facebook share dialog");
      }
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      onClick: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        toast.success("Opening Twitter share dialog");
      }
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn className="h-5 w-5" />,
      onClick: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        toast.success("Opening LinkedIn share dialog");
      }
    },
    {
      name: "Copy Link",
      icon: <Link2 className="h-5 w-5" />,
      onClick: () => {
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      }
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="hover-scale">
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              variant="outline"
              className="w-full justify-start gap-2 hover-scale"
              onClick={option.onClick}
            >
              {option.icon}
              {option.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;