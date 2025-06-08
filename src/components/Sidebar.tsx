
import { BarChart3, Database, FileText, Home, Settings, TrendingUp, Upload, Sparkles, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, gradient: "from-blue-500 to-cyan-500" },
    { id: "upload", label: "Upload Data", icon: Upload, gradient: "from-emerald-500 to-teal-500" },
    { id: "datasets", label: "Datasets", icon: Database, gradient: "from-purple-500 to-pink-500" },
    { id: "insights", label: "Insights", icon: TrendingUp, gradient: "from-amber-500 to-orange-500" },
    { id: "reports", label: "Reports", icon: FileText, gradient: "from-indigo-500 to-purple-500" },
    { id: "settings", label: "Settings", icon: Settings, gradient: "from-slate-500 to-slate-600" },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 shadow-2xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-emerald-600/10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />
      
      {/* Enhanced Header */}
      <div className="relative flex items-center space-x-4 p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000" />
          <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
            <BarChart3 className="h-7 w-7 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
              Insight
            </h1>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              X
            </span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <Zap className="w-3 h-3 text-blue-400 animate-bounce" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-slate-400 font-bold tracking-wider uppercase">
              AI-Powered BI
            </p>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Enhanced Navigation */}
      <nav className="flex-1 p-4 space-y-2 relative z-10">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <div key={item.id} className="relative group">
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm" />
              )}
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start space-x-3 h-12 text-left transition-all duration-300 relative group/button",
                  isActive 
                    ? "bg-gradient-to-r from-white/10 to-white/5 text-white shadow-lg border border-white/20" 
                    : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-white/5 hover:to-white/2"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/button:scale-110",
                  isActive 
                    ? `bg-gradient-to-br ${item.gradient} shadow-lg` 
                    : "bg-slate-700/50 group-hover/button:bg-gradient-to-br group-hover/button:" + item.gradient
                )}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold">{item.label}</span>
                {isActive && (
                  <div className="absolute right-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                )}
              </Button>
            </div>
          );
        })}
      </nav>
      
      {/* Enhanced Help Section */}
      <div className="p-4 border-t border-slate-700/50 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-5 backdrop-blur-xl border border-slate-700/50 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white">AI Assistant</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Need help? Our AI assistant is here to guide you through your data journey.
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Smart Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
