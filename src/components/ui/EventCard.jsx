import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventCard = () => {
  return (
    <section className="bg-gradient-to-r dark:from-blue-950 dark:to-purple-950 font-sans">
      <div className="container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto group shadow-[0_25px_60px_15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-100 dark:from-blue-900 dark:to-blue-800 opacity-0 "></div>
          <div className="relative z-10">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl font-medium mb-2">Annual Tech Symposium 2024</CardTitle>
                  <CardDescription className="text-lg">
                    Join us for a day of cutting-edge technology talks, workshops, and networking opportunities.
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="text-sm">Featured Event</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>September 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Main Auditorium, College Campus</span>
                  </div>
                </div>
                <div className="relative h-48 md:h-full">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Tech Symposium" 
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg">Register Now</Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventCard;