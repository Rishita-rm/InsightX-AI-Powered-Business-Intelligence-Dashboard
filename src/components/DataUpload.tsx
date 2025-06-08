
import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Database, Sparkles, CheckCircle, Brain, Cloud, Zap, TrendingUp, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const DataUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [aiInsights, setAiInsights] = useState<string>('');
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name, file.size, file.type);
      setUploadedFile(file);
      simulateUploadWithAI(file);
    }
  }, []);

  const simulateUploadWithAI = async (file: File) => {
    setIsProcessing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          processWithAI(file);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const processWithAI = async (file: File) => {
    try {
      // Parse file content
      const text = await file.text();
      let data: any[] = [];
      
      if (file.name.endsWith('.json')) {
        data = JSON.parse(text);
      } else if (file.name.endsWith('.csv')) {
        const lines = text.split('\n');
        const headers = lines[0].split(',');
        data = lines.slice(1).map(line => {
          const values = line.split(',');
          const obj: any = {};
          headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim();
          });
          return obj;
        }).filter(obj => Object.values(obj).some(val => val));
      }

      // Get AI insights
      const { data: aiData, error } = await supabase.functions.invoke('analyze-data', {
        body: {
          data: data.slice(0, 50),
          analysisType: 'quality',
          fileName: file.name
        }
      });

      if (!error && aiData) {
        setAiInsights(aiData.analysis);
      }

      setIsProcessing(false);
      setAnalysisComplete(true);
      toast({
        title: "Upload & Analysis Complete",
        description: "Your data has been processed and analyzed with AI!",
      });
    } catch (error) {
      console.error('AI processing error:', error);
      setIsProcessing(false);
      setAnalysisComplete(true);
      toast({
        title: "Upload Complete",
        description: "File uploaded successfully, but AI analysis failed.",
      });
    }
  };

  const uploadSteps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Support for CSV, Excel, and JSON formats",
      active: !uploadedFile,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "AI Processing",
      description: "Automated data cleaning and validation",
      active: isProcessing,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Generate Insights",
      description: "Create charts and discover patterns",
      active: analysisComplete,
      color: "from-emerald-500 to-teal-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 space-y-8">
      {/* Enhanced Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl" />
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-4">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Upload Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your raw data into actionable insights with our AI-powered analytics platform. 
              Upload, process, and analyze your datasets with enterprise-grade security.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Process Steps */}
      <div className="relative">
        <div className="flex justify-between items-center mb-8 relative">
          {/* Connection Lines */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -z-10" />
          
          {uploadSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.active;
            const isComplete = analysisComplete && index < 2;
            
            return (
              <div key={index} className="flex flex-col items-center space-y-3 flex-1 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 transform ${
                  isActive 
                    ? `bg-gradient-to-br ${step.color} border-transparent text-white shadow-lg scale-110` 
                    : isComplete
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg'
                    : 'border-border bg-background hover:shadow-md'
                }`}>
                  {isComplete ? (
                    <CheckCircle className="h-7 w-7" />
                  ) : (
                    <Icon className="h-7 w-7" />
                  )}
                </div>
                <div className="text-center max-w-32">
                  <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Enhanced File Upload */}
        <Card className="group hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-xl border-white/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-4">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Upload className="h-5 w-5 text-white" />
              </div>
              <span>Smart File Upload</span>
            </CardTitle>
            <CardDescription className="text-base">
              Drag & drop or browse files • Multiple formats supported • Up to 50MB
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="relative border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:bg-primary/5 group-hover:shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                    Choose files
                  </span>
                  <span className="text-muted-foreground"> or drag and drop here</span>
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls,.json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['CSV', 'XLSX', 'XLS', 'JSON'].map((format) => (
                    <span key={format} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {uploadedFile && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                {isProcessing && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Processing...</span>
                      <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Enhanced AI Insights */}
        <Card className="group hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-xl border-white/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 pb-4">
            <CardTitle className="flex items-center space-x-3 text-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span>AI Insights Engine</span>
            </CardTitle>
            <CardDescription className="text-base">
              Advanced machine learning analysis of your data patterns and quality
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {aiInsights ? (
              <div className="space-y-4 animate-fade-in">
                <div className="p-5 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-5 w-5 text-violet-600" />
                    <h4 className="font-semibold text-violet-900">AI Analysis Results</h4>
                  </div>
                  <p className="text-sm text-violet-800 whitespace-pre-wrap leading-relaxed">{aiInsights}</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Detailed Analytics
                </Button>
              </div>
            ) : uploadedFile ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center animate-pulse">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">
                    {isProcessing ? "AI analyzing your data..." : "Ready for AI analysis"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our AI will identify patterns, anomalies, and insights
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl flex items-center justify-center">
                  <Database className="h-8 w-8 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-muted-foreground">Upload data to begin</p>
                  <p className="text-sm text-muted-foreground">
                    Get instant AI-powered insights and recommendations
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Enhanced API Integration */}
      <Card className="bg-white/70 backdrop-blur-xl border-white/20 shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 pb-4">
          <CardTitle className="flex items-center space-x-3 text-xl">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Database className="h-5 w-5 text-white" />
            </div>
            <span>API Data Integration</span>
          </CardTitle>
          <CardDescription className="text-base">
            Connect to external data sources and APIs for real-time data synchronization
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-url" className="text-sm font-medium">API Endpoint URL</Label>
                <Input 
                  id="api-url" 
                  placeholder="https://api.example.com/data" 
                  className="bg-white/50 border-white/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key" className="text-sm font-medium">API Key (Optional)</Label>
                <Input 
                  id="api-key" 
                  type="password" 
                  placeholder="Your API key" 
                  className="bg-white/50 border-white/20"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-headers" className="text-sm font-medium">Custom Headers (JSON)</Label>
                <Textarea 
                  id="api-headers" 
                  placeholder='{"Authorization": "Bearer token", "Content-Type": "application/json"}'
                  className="min-h-[120px] bg-white/50 border-white/20"
                />
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg">
            <Database className="h-4 w-4 mr-2" />
            Connect API Endpoint
          </Button>
        </CardContent>
      </Card>

      {/* Enhanced Recent Uploads */}
      <Card className="bg-white/70 backdrop-blur-xl border-white/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Recent Data Processing</CardTitle>
          <CardDescription className="text-base">Your recently processed datasets with AI analysis status</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {[
              { 
                name: "sales_data_2024.csv", 
                size: "2.3 MB", 
                status: "AI Analyzed", 
                insights: "Strong Q3 growth patterns detected • 23% revenue increase", 
                time: "2 hours ago",
                statusColor: "emerald"
              },
              { 
                name: "customer_analytics.xlsx", 
                size: "5.1 MB", 
                status: "Processing", 
                insights: "Analysis in progress... ETA 3 minutes", 
                time: "1 day ago",
                statusColor: "amber"
              },
              { 
                name: "marketing_metrics.json", 
                size: "890 KB", 
                status: "AI Analyzed", 
                insights: "High conversion in digital channels • ROI improvement", 
                time: "3 days ago",
                statusColor: "emerald"
              },
            ].map((file, index) => (
              <div key={index} className="group p-5 border rounded-xl hover:bg-muted/30 transition-all duration-200 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-foreground">{file.name}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          file.statusColor === "emerald" 
                            ? "bg-emerald-100 text-emerald-700" 
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {file.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{file.size} • {file.time}</p>
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-violet-500" />
                        <p className="text-sm text-violet-700 font-medium">{file.insights}</p>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataUpload;
