
import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Database, Sparkles, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DataUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name, file.size, file.type);
      setUploadedFile(file);
      simulateUpload();
    }
  }, []);

  const simulateUpload = () => {
    setIsProcessing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setAnalysisComplete(true);
          toast({
            title: "Upload Complete",
            description: "Your data has been processed and analyzed successfully!",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const uploadSteps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Support for CSV, Excel, and JSON formats",
      active: !uploadedFile,
    },
    {
      icon: Sparkles,
      title: "AI Processing",
      description: "Automated data cleaning and validation",
      active: isProcessing,
    },
    {
      icon: Database,
      title: "Generate Insights",
      description: "Create charts and discover patterns",
      active: analysisComplete,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold gradient-text">Upload Data</h1>
        <p className="text-muted-foreground">Upload your dataset to get started with AI-powered analysis</p>
      </div>

      {/* Process Steps */}
      <div className="flex justify-between items-center mb-8">
        {uploadSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex flex-col items-center space-y-2 flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                step.active 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : analysisComplete || index === 0
                  ? 'bg-success border-success text-background'
                  : 'border-muted bg-muted'
              }`}>
                {analysisComplete && index < 2 ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  <Icon className="h-6 w-6" />
                )}
              </div>
              <div className="text-center">
                <h3 className="font-medium text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
              {index < uploadSteps.length - 1 && (
                <div className="hidden md:block w-full h-px bg-border absolute top-6 left-1/2 transform translate-x-1/2" />
              )}
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* File Upload */}
        <Card className="insight-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>File Upload</span>
            </CardTitle>
            <CardDescription>
              Upload CSV, Excel, or JSON files up to 50MB
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <div className="space-y-2">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-primary hover:text-primary/80">Choose a file</span> or drag and drop
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls,.json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <p className="text-xs text-muted-foreground">
                  Supported formats: CSV, XLSX, XLS, JSON
                </p>
              </div>
            </div>

            {uploadedFile && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm font-medium">{uploadedFile.name}</span>
                </div>
                {isProcessing && (
                  <div className="space-y-2">
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-xs text-muted-foreground">Processing... {uploadProgress}%</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* API Integration */}
        <Card className="insight-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>API Integration</span>
            </CardTitle>
            <CardDescription>
              Connect to external data sources via API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-url">API Endpoint URL</Label>
              <Input id="api-url" placeholder="https://api.example.com/data" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key (Optional)</Label>
              <Input id="api-key" type="password" placeholder="Your API key" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-headers">Custom Headers (JSON)</Label>
              <Textarea 
                id="api-headers" 
                placeholder='{"Authorization": "Bearer token", "Content-Type": "application/json"}'
                className="min-h-[80px]"
              />
            </div>
            <Button className="w-full" variant="outline">
              <Database className="h-4 w-4 mr-2" />
              Connect API
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Uploads */}
      <Card className="insight-card">
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your recently processed datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "sales_data_2024.csv", size: "2.3 MB", status: "Processed", time: "2 hours ago" },
              { name: "customer_analytics.xlsx", size: "5.1 MB", status: "Processing", time: "1 day ago" },
              { name: "marketing_metrics.json", size: "890 KB", status: "Processed", time: "3 days ago" },
            ].map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{file.size} • {file.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    file.status === "Processed" 
                      ? "bg-success/10 text-success" 
                      : "bg-warning/10 text-warning"
                  }`}>
                    {file.status}
                  </span>
                  <Button size="sm" variant="ghost">
                    View
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
