import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Plus } from "lucide-react";
import { reminders } from "@/data/dashboard-data";

export const Reminders = () => {
  return (
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
  );
};