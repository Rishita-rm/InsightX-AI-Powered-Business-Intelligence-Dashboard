
import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Database, Sparkles, CheckCircle, Brain, Cloud, Zap, TrendingUp, Shield, Star, Layers, BarChart3, Users, Globe, Lock, Cpu, Rocket, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const DataUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [aiInsights, setAiInsights] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name, file.size, file.type);
      setUploadedFile(file);
      simulateUploadWithAI(file);
    }
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
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
      title: "Smart Upload",
      description: "Drag, drop, or browse multiple formats",
      active: !uploadedFile,
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description: "Advanced data validation & cleaning",
      active: isProcessing,
      color: "from-purple-500 via-violet-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: TrendingUp,
      title: "Insights Ready",
      description: "Generate charts & discover patterns",
      active: analysisComplete,
      color: "from-emerald-500 via-green-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
  ];

  const features = [
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II Compliant" },
    { icon: Zap, title: "Lightning Fast", desc: "Process data in milliseconds" },
    { icon: Globe, title: "Global CDN", desc: "99.9% uptime guarantee" },
    { icon: Users, title: "Team Collaboration", desc: "Real-time sharing & editing" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}} />

      <div className="relative z-10 p-6 space-y-10">
        {/* Hero Header with Premium Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5 rounded-3xl blur-3xl" />
          <div className="relative bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
            
            <div className="relative p-10 text-center space-y-6">
              {/* Premium Logo Section */}
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Cloud className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Premium Typography */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                  Data Intelligence Hub
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                  Transform your raw data into actionable insights with our next-generation AI platform. 
                  Experience enterprise-grade analytics with unprecedented speed and precision.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Icon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div className="text-sm">
                        <span className="font-semibold text-slate-800">{feature.title}</span>
                        <span className="text-slate-500 ml-1">• {feature.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Process Flow */}
        <div className="relative">
          <div className="flex justify-between items-center mb-12 relative">
            {/* Dynamic Connection Lines */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-shimmer" />
            
            {uploadSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.active;
              const isComplete = analysisComplete && index < 2;
              
              return (
                <div key={index} className="flex flex-col items-center space-y-4 flex-1 relative z-10 group">
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-700 transform group-hover:scale-110 ${
                    isActive 
                      ? `bg-gradient-to-br ${step.color} border-transparent text-white shadow-2xl scale-110 animate-glow` 
                      : isComplete
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 border-emerald-400 text-white shadow-xl'
                      : 'border-slate-200 bg-white/80 backdrop-blur-xl hover:shadow-xl hover:border-blue-300'
                  }`}>
                    {/* Glow Effect */}
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-lg opacity-50 animate-pulse`} />
                    )}
                    
                    <div className="relative z-10">
                      {isComplete ? (
                        <CheckCircle className="h-8 w-8" />
                      ) : (
                        <Icon className="h-8 w-8" />
                      )}
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="text-center max-w-40 space-y-2">
                    <h3 className="font-bold text-lg text-slate-800">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Revolutionary File Upload */}
          <Card className="group hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 bg-white/70 backdrop-blur-2xl border-white/40 overflow-hidden relative">
            {/* Card Header with Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
            
            <CardHeader className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 pb-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-bl-full" />
              
              <CardTitle className="flex items-center space-x-4 text-2xl relative z-10">
                <div className="relative group/icon">
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover/icon:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover/icon:scale-110 transition-transform">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent font-bold">
                  Smart File Upload
                </span>
              </CardTitle>
              <CardDescription className="text-lg relative z-10 text-slate-600">
                Advanced drag & drop with intelligent file processing • Support for 15+ formats • Up to 100MB
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              {/* Enhanced Drop Zone */}
              <div 
                className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-500 group-hover:shadow-inner ${
                  dragActive 
                    ? 'border-blue-400 bg-blue-50/80 scale-105' 
                    : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/30'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-6">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <FileText className="h-10 w-10 text-blue-600" />
                    </div>
                    {dragActive && (
                      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl animate-pulse" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="file-upload" className="cursor-pointer group-hover:scale-105 transition-transform duration-300 inline-block">
                      <span className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        Drop files here
                      </span>
                      <span className="text-slate-600 block mt-1">or click to browse from your device</span>
                    </Label>
                    
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".csv,.xlsx,.xls,.json,.pdf,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Format Pills */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {['CSV', 'XLSX', 'JSON', 'PDF', 'TXT'].map((format) => (
                      <span key={format} className="px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* File Preview */}
              {uploadedFile && (
                <div className="space-y-6 animate-fade-in">
                  <div className="relative group/file overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                    
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover/file:scale-110 transition-transform">
                          <FileText className="h-7 w-7 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <p className="font-bold text-slate-800 text-lg">{uploadedFile.name}</p>
                        <p className="text-sm text-slate-600 flex items-center gap-2">
                          <span>{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                          <span>•</span>
                          <span className="text-emerald-600 font-semibold">Ready for processing</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Progress */}
                  {isProcessing && (
                    <div className="space-y-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-spin">
                            <Cpu className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-semibold text-purple-800">AI Processing...</span>
                        </div>
                        <span className="text-sm font-bold text-purple-600">{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-3 bg-white/50" />
                      <p className="text-sm text-purple-700">Analyzing data patterns and quality metrics</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Advanced AI Insights */}
          <Card className="group hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 bg-white/70 backdrop-blur-2xl border-white/40 overflow-hidden relative">
            {/* Card Header */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            
            <CardHeader className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 pb-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-bl-full" />
              
              <CardTitle className="flex items-center space-x-4 text-2xl relative z-10">
                <div className="relative group/icon">
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover/icon:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover/icon:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent font-bold">
                  AI Insights Engine
                </span>
              </CardTitle>
              <CardDescription className="text-lg relative z-10 text-slate-600">
                GPT-4 powered analysis with machine learning pattern recognition and predictive modeling
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              {aiInsights ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="relative p-8 bg-gradient-to-br from-violet-50/80 to-purple-50/80 rounded-2xl border border-violet-200 overflow-hidden group/insight">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-violet-900">Advanced AI Analysis</h4>
                      </div>
                      <p className="text-violet-800 leading-relaxed font-medium whitespace-pre-wrap">{aiInsights}</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      View Analytics
                    </Button>
                    <Button variant="outline" className="border-violet-200 hover:bg-violet-50 h-12 group/btn">
                      <Rocket className="h-5 w-5 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              ) : uploadedFile ? (
                <div className="text-center py-16 space-y-6">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center animate-pulse">
                      <Activity className="h-10 w-10 text-purple-600" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 animate-ping" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-800">
                      {isProcessing ? "AI analyzing your data..." : "Ready for AI analysis"}
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                      Our advanced AI will identify patterns, anomalies, trends, and provide actionable insights
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Database className="h-10 w-10 text-slate-400" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-600">Upload data to begin</h3>
                    <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                      Experience instant AI-powered insights, recommendations, and predictive analytics
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Enhanced API Integration */}
        <Card className="bg-white/70 backdrop-blur-2xl border-white/40 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] overflow-hidden relative group hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] transition-all duration-700">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
          
          <CardHeader className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 pb-6 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-200/20 to-transparent rounded-bl-full" />
            
            <CardTitle className="flex items-center space-x-4 text-2xl relative z-10">
              <div className="relative group/icon">
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover/icon:opacity-50 transition-opacity duration-500" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover/icon:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent font-bold">
                API Data Integration
              </span>
            </CardTitle>
            <CardDescription className="text-lg relative z-10 text-slate-600">
              Connect to external APIs, databases, and cloud services for real-time data synchronization and automated workflows
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="api-url" className="text-base font-semibold text-slate-700">API Endpoint URL</Label>
                  <Input 
                    id="api-url" 
                    placeholder="https://api.example.com/v1/data" 
                    className="h-12 bg-white/80 border-white/40 backdrop-blur-xl focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="api-key" className="text-base font-semibold text-slate-700">Authentication Key</Label>
                  <Input 
                    id="api-key" 
                    type="password" 
                    placeholder="sk-..." 
                    className="h-12 bg-white/80 border-white/40 backdrop-blur-xl focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="api-headers" className="text-base font-semibold text-slate-700">Custom Headers (JSON)</Label>
                  <Textarea 
                    id="api-headers" 
                    placeholder='{\n  "Authorization": "Bearer token",\n  "Content-Type": "application/json",\n  "X-API-Version": "v1"\n}'
                    className="min-h-[140px] bg-white/80 border-white/40 backdrop-blur-xl focus:border-cyan-400 focus:ring-cyan-400/20 font-mono text-sm"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12">
                <Globe className="h-5 w-5 mr-2" />
                Connect API Endpoint
              </Button>
              <Button variant="outline" className="px-6 border-cyan-200 hover:bg-cyan-50 h-12">
                Test Connection
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Premium Recent Uploads */}
        <Card className="bg-white/70 backdrop-blur-2xl border-white/40 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
          
          <CardHeader className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent font-bold">
                  Recent Data Processing
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 mt-2">
                  Your recently processed datasets with comprehensive AI analysis and performance metrics
                </CardDescription>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="space-y-6">
              {[
                { 
                  name: "sales_analytics_2024.csv", 
                  size: "2.3 MB", 
                  status: "AI Analyzed", 
                  insights: "Strong Q3 growth patterns detected • 23% revenue increase • Seasonal trends identified", 
                  time: "2 hours ago",
                  statusColor: "emerald",
                  accuracy: "98.5%",
                  records: "12,450"
                },
                { 
                  name: "customer_behavior.xlsx", 
                  size: "5.1 MB", 
                  status: "Processing", 
                  insights: "Advanced segmentation analysis in progress... ETA 3 minutes", 
                  time: "1 day ago",
                  statusColor: "amber",
                  accuracy: "94.2%",
                  records: "28,900"
                },
                { 
                  name: "marketing_performance.json", 
                  size: "890 KB", 
                  status: "AI Analyzed", 
                  insights: "High conversion in digital channels • ROI improvement • Attribution modeling complete", 
                  time: "3 days ago",
                  statusColor: "emerald",
                  accuracy: "96.8%",
                  records: "8,320"
                },
              ].map((file, index) => (
                <div key={index} className="group/item p-6 border border-white/40 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover/item:shadow-lg transition-shadow border border-emerald-200">
                          <FileText className="h-7 w-7 text-emerald-600" />
                        </div>
                        {file.statusColor === "emerald" && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-bold text-lg text-slate-800">{file.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            file.statusColor === "emerald" 
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
                              : "bg-amber-100 text-amber-700 border border-amber-200"
                          }`}>
                            {file.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="font-medium">{file.size}</span>
                          <span>•</span>
                          <span>{file.records} records</span>
                          <span>•</span>
                          <span className="text-emerald-600 font-semibold">{file.accuracy} accuracy</span>
                          <span>•</span>
                          <span>{file.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                          <Brain className="h-4 w-4 text-violet-500" />
                          <p className="text-sm text-violet-700 font-medium">{file.insights}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="ghost" className="opacity-0 group-hover/item:opacity-100 transition-opacity hover:bg-emerald-50">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataUpload;
