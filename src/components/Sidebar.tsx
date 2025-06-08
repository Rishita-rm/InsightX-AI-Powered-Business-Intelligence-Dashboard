
import { BarChart3, Database, FileText, Home, Settings, TrendingUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "upload", label: "Upload Data", icon: Upload },
    { id: "datasets", label: "Datasets", icon: Database },
    { id: "insights", label: "Insights", icon: TrendingUp },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center space-x-2 p-6 border-b border-sidebar-border">
        <BarChart3 className="h-8 w-8 text-sidebar-primary" />
        <div>
          <h1 className="text-xl font-bold text-sidebar-foreground">InsightX</h1>
          <p className="text-sm text-sidebar-foreground/70">AI-Powered BI</p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start space-x-3 h-11",
                activeTab === item.id 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="rounded-lg bg-gradient-to-r from-sidebar-primary to-accent p-4 text-sidebar-primary-foreground">
          <h3 className="font-medium mb-1">Need Help?</h3>
          <p className="text-sm opacity-90 mb-2">Check our documentation</p>
          <Button size="sm" variant="secondary" className="w-full">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
