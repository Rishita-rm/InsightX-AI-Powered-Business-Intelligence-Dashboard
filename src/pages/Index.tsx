
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "@/components/Dashboard";
import DataUpload from "@/components/DataUpload";
import DataAnalytics from "@/components/DataAnalytics";
import EnterpriseSettings from "@/components/EnterpriseSettings";
import AdvancedDashboard from "@/components/AdvancedDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Business Intelligence Platform
          </h1>
          <p className="text-lg text-muted-foreground">
            Transform your data into actionable insights with AI-powered analytics
          </p>
        </div>
        
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="upload">Data Upload</TabsTrigger>
            <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
            <TabsTrigger value="settings">Enterprise Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="upload">
            <DataUpload />
          </TabsContent>
          
          <TabsContent value="analytics">
            <DataAnalytics />
          </TabsContent>

          <TabsContent value="advanced">
            <AdvancedDashboard />
          </TabsContent>
          
          <TabsContent value="settings">
            <EnterpriseSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
