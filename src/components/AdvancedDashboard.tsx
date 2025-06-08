
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, BarChart3, User, Wrench, Building, 
  Lock, Sparkles, Zap, TrendingUp 
} from "lucide-react";
import AIFeatures from './AIFeatures';
import AdvancedVisualizations from './AdvancedVisualizations';
import UserExperience from './UserExperience';
import TechnicalFeatures from './TechnicalFeatures';
import BusinessIntelligence from './BusinessIntelligence';

const AdvancedDashboard = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const featureStats = {
    ai: { count: 4, implemented: 4, status: "Fully Operational" },
    viz: { count: 4, implemented: 4, status: "Real-time Ready" },
    ux: { count: 5, implemented: 5, status: "Optimized" },
    tech: { count: 4, implemented: 4, status: "Enterprise Ready" },
    bi: { count: 5, implemented: 5, status: "Production Ready" },
    security: { count: 8, implemented: 8, status: "Compliant" }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">
          🚀 Enterprise-Grade Analytics Platform
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Powered by cutting-edge AI, advanced visualizations, and enterprise security features
        </p>
        <div className="flex justify-center space-x-4">
          <Badge className="bg-green-100 text-green-800">
            <Sparkles className="h-3 w-3 mr-1" />
            30+ Advanced Features
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Zap className="h-3 w-3 mr-1" />
            AI-Powered
          </Badge>
          <Badge className="bg-purple-100 text-purple-800">
            <TrendingUp className="h-3 w-3 mr-1" />
            Real-time Analytics
          </Badge>
        </div>
      </div>

      {/* Feature Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Brain className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="font-bold text-lg">{featureStats.ai.count}</div>
            <div className="text-sm text-muted-foreground">AI Features</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <BarChart3 className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="font-bold text-lg">{featureStats.viz.count}</div>
            <div className="text-sm text-muted-foreground">Viz Types</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <User className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="font-bold text-lg">{featureStats.ux.count}</div>
            <div className="text-sm text-muted-foreground">UX Features</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Wrench className="h-8 w-8 mx-auto mb-2 text-orange-500" />
            <div className="font-bold text-lg">{featureStats.tech.count}</div>
            <div className="text-sm text-muted-foreground">Tech Tools</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Building className="h-8 w-8 mx-auto mb-2 text-indigo-500" />
            <div className="font-bold text-lg">{featureStats.bi.count}</div>
            <div className="text-sm text-muted-foreground">BI Features</div>
          </CardContent>
        </Card>
        <Card className="glass-card text-center">
          <CardContent className="p-4">
            <Lock className="h-8 w-8 mx-auto mb-2 text-red-500" />
            <div className="font-bold text-lg">{featureStats.security.count}</div>
            <div className="text-sm text-muted-foreground">Security</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Feature Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="ai" className="flex items-center space-x-2">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">AI Features</span>
          </TabsTrigger>
          <TabsTrigger value="viz" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Visualizations</span>
          </TabsTrigger>
          <TabsTrigger value="ux" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">User Experience</span>
          </TabsTrigger>
          <TabsTrigger value="tech" className="flex items-center space-x-2">
            <Wrench className="h-4 w-4" />
            <span className="hidden sm:inline">Technical</span>
          </TabsTrigger>
          <TabsTrigger value="bi" className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span className="hidden sm:inline">Business Intel</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai">
          <AIFeatures />
        </TabsContent>

        <TabsContent value="viz">
          <AdvancedVisualizations />
        </TabsContent>

        <TabsContent value="ux">
          <UserExperience />
        </TabsContent>

        <TabsContent value="tech">
          <TechnicalFeatures />
        </TabsContent>

        <TabsContent value="bi">
          <BusinessIntelligence />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedDashboard;
