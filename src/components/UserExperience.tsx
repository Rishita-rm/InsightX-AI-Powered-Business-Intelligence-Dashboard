
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  User, Bell, MessageCircle, Share2, Smartphone, 
  Palette, Moon, Sun, Loader2, Heart, Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserExperience = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [collaborativeMode, setCollaborativeMode] = useState(false);
  const [personalizedDash, setPersonalizedDash] = useState(true);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const widgets = [
    { id: 1, name: "Sales Overview", active: true, category: "Sales" },
    { id: 2, name: "Customer Analytics", active: true, category: "Customer" },
    { id: 3, name: "Revenue Trends", active: false, category: "Finance" },
    { id: 4, name: "Team Performance", active: true, category: "HR" },
    { id: 5, name: "Product Metrics", active: false, category: "Product" }
  ];

  const [userWidgets, setUserWidgets] = useState(widgets);

  const toggleWidget = (widgetId: number) => {
    setUserWidgets(prev => 
      prev.map(widget => 
        widget.id === widgetId 
          ? { ...widget, active: !widget.active }
          : widget
      )
    );
  };

  const sendNotification = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Smart Notification Sent",
        description: "Alert sent via Slack, Teams, and Email",
      });
      setIsLoading(false);
    }, 1500);
  };

  const shareInsight = () => {
    toast({
      title: "Insight Shared",
      description: "Dashboard link shared with team members",
    });
  };

  const addComment = () => {
    if (comment.trim()) {
      toast({
        title: "Comment Added",
        description: "Your insight has been added to the collaborative workspace",
      });
      setComment('');
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Personalized Dashboard */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-500" />
              <span>Personalized Dashboard</span>
            </CardTitle>
            <CardDescription>Customize your widget preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Enable Personalization</span>
              <Switch 
                checked={personalizedDash} 
                onCheckedChange={setPersonalizedDash}
              />
            </div>
            {personalizedDash && (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {userWidgets.map((widget) => (
                  <div key={widget.id} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{widget.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {widget.category}
                      </Badge>
                    </div>
                    <Switch 
                      checked={widget.active} 
                      onCheckedChange={() => toggleWidget(widget.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Smart Notifications */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-orange-500" />
              <span>Smart Notifications</span>
            </CardTitle>
            <CardDescription>Context-aware alerts across platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Enable Notifications</span>
              <Switch 
                checked={notifications} 
                onCheckedChange={setNotifications}
              />
            </div>
            {notifications && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800">📧 Email</Badge>
                  <Badge className="bg-purple-100 text-purple-800">💬 Slack</Badge>
                  <Badge className="bg-blue-100 text-blue-800">👥 Teams</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">📱 SMS</Badge>
                </div>
                <Button 
                  onClick={sendNotification} 
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Test Notification"
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Collaborative Features */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <span>Collaborative Features</span>
            </CardTitle>
            <CardDescription>Share insights and collaborate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Collaboration Mode</span>
              <Switch 
                checked={collaborativeMode} 
                onCheckedChange={setCollaborativeMode}
              />
            </div>
            {collaborativeMode && (
              <div className="space-y-3">
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add insight or comment..."
                  className="min-h-20"
                />
                <div className="flex space-x-2">
                  <Button onClick={addComment} size="sm" className="flex-1">
                    💬 Comment
                  </Button>
                  <Button onClick={shareInsight} size="sm" variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>3 team members active</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Visual Polish */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-purple-500" />
              <span>Visual Polish</span>
            </CardTitle>
            <CardDescription>Theme and appearance settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium flex items-center space-x-2">
                {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                <span>Dark Mode</span>
              </span>
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={setIsDarkMode}
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-sm font-medium">Custom Color Palette</span>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded bg-blue-500 cursor-pointer hover:scale-110 transition-transform" />
                <div className="w-8 h-8 rounded bg-green-500 cursor-pointer hover:scale-110 transition-transform" />
                <div className="w-8 h-8 rounded bg-purple-500 cursor-pointer hover:scale-110 transition-transform" />
                <div className="w-8 h-8 rounded bg-orange-500 cursor-pointer hover:scale-110 transition-transform" />
                <div className="w-8 h-8 rounded bg-red-500 cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium">Micro-interactions</span>
              <div className="flex space-x-2">
                <Button size="sm" className="hover-scale">
                  <Heart className="h-4 w-4 mr-1" />
                  Like
                </Button>
                <Button size="sm" variant="outline" className="hover-scale">
                  ⭐ Favorite
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Experience */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-indigo-500" />
              <span>Mobile-First Experience</span>
            </CardTitle>
            <CardDescription>Optimized for all devices with touch gestures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-16 h-24 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-16 bg-white rounded flex items-center justify-center text-xs">
                    📱
                  </div>
                </div>
                <p className="text-sm font-medium">Mobile Responsive</p>
                <p className="text-xs text-muted-foreground">Adaptive layouts</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-24 mx-auto bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                  👆
                </div>
                <p className="text-sm font-medium">Touch Gestures</p>
                <p className="text-xs text-muted-foreground">Swipe, pinch, zoom</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-24 mx-auto bg-gradient-to-b from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
                  ⚡
                </div>
                <p className="text-sm font-medium">Fast Loading</p>
                <p className="text-xs text-muted-foreground">Optimized performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserExperience;
