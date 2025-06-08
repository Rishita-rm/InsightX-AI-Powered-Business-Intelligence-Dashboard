
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, FileText, TrendingUp, MessageSquare, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const DataAnalytics = () => {
  const [uploadedData, setUploadedData] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [analysis, setAnalysis] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisType, setAnalysisType] = useState('insights');
  const [chatMessages, setChatMessages] = useState<Array<{role: string, content: string}>>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const [report, setReport] = useState<string>('');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportType, setReportType] = useState('executive');
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
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
          
          setUploadedData(data);
          toast({
            title: "File uploaded successfully",
            description: `Loaded ${data.length} records from ${file.name}`,
          });
        } catch (error) {
          toast({
            title: "Upload failed",
            description: "Could not parse the file. Please check the format.",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const analyzeData = async () => {
    if (!uploadedData.length) {
      toast({
        title: "No data to analyze",
        description: "Please upload a dataset first.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-data', {
        body: {
          data: uploadedData,
          analysisType,
          fileName
        }
      });

      if (error) throw error;
      
      setAnalysis(data.analysis);
      toast({
        title: "Analysis complete",
        description: "Your data has been analyzed successfully!",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "Could not analyze the data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || !uploadedData.length) return;

    const newMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, newMessage]);
    setChatInput('');
    setIsChatting(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-data', {
        body: {
          question: chatInput,
          dataContext: uploadedData.slice(0, 20),
          conversationHistory: chatMessages.slice(-10)
        }
      });

      if (error) throw error;
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.answer }]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Chat failed",
        description: "Could not process your question. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsChatting(false);
    }
  };

  const generateReport = async () => {
    if (!uploadedData.length) {
      toast({
        title: "No data for report",
        description: "Please upload a dataset first.",
        variant: "destructive",
      });
      return;
    }

    setIsGeneratingReport(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-report', {
        body: {
          data: uploadedData,
          reportType,
          fileName
        }
      });

      if (error) throw error;
      
      setReport(data.report);
      toast({
        title: "Report generated",
        description: "Your comprehensive report is ready!",
      });
    } catch (error) {
      console.error('Report generation error:', error);
      toast({
        title: "Report generation failed",
        description: "Could not generate the report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingReport(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold gradient-text">AI Data Analytics</h1>
        <p className="text-muted-foreground">Upload data and get AI-powered insights, predictions, and reports</p>
      </div>

      {/* File Upload */}
      <Card className="insight-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Data Upload</span>
          </CardTitle>
          <CardDescription>Upload CSV or JSON files for AI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="file"
            accept=".csv,.json"
            onChange={handleFileUpload}
            className="mb-4"
          />
          {uploadedData.length > 0 && (
            <Badge variant="outline" className="bg-success/10 text-success border-success">
              {uploadedData.length} records loaded from {fileName}
            </Badge>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Analysis */}
        <Card className="insight-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5" />
              <span>AI Analysis</span>
            </CardTitle>
            <CardDescription>Get intelligent insights from your data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={analysisType} onValueChange={setAnalysisType}>
              <SelectTrigger>
                <SelectValue placeholder="Select analysis type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="insights">Key Insights</SelectItem>
                <SelectItem value="predictive">Predictive Analytics</SelectItem>
                <SelectItem value="quality">Data Quality</SelectItem>
                <SelectItem value="summary">Executive Summary</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              onClick={analyzeData} 
              disabled={isAnalyzing || !uploadedData.length}
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Analyze Data
                </>
              )}
            </Button>

            {analysis && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Analysis Results:</h4>
                <div className="text-sm whitespace-pre-wrap">{analysis}</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Chat with Data */}
        <Card className="insight-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Chat with Your Data</span>
            </CardTitle>
            <CardDescription>Ask questions about your dataset</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-64 overflow-y-auto space-y-2 p-2 border rounded">
              {chatMessages.length === 0 ? (
                <p className="text-muted-foreground text-center">Start a conversation about your data...</p>
              ) : (
                chatMessages.map((message, index) => (
                  <div key={index} className={`p-2 rounded ${
                    message.role === 'user' 
                      ? 'bg-primary text-primary-foreground ml-8' 
                      : 'bg-muted mr-8'
                  }`}>
                    <div className="text-sm">{message.content}</div>
                  </div>
                ))
              )}
              {isChatting && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>AI is thinking...</span>
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about your data..."
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                disabled={!uploadedData.length}
              />
              <Button 
                onClick={sendChatMessage} 
                disabled={!chatInput.trim() || isChatting || !uploadedData.length}
              >
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Generation */}
      <Card className="insight-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>AI Report Generation</span>
          </CardTitle>
          <CardDescription>Generate comprehensive reports from your data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="executive">Executive Summary</SelectItem>
                <SelectItem value="technical">Technical Analysis</SelectItem>
                <SelectItem value="trends">Trends & Patterns</SelectItem>
                <SelectItem value="custom">Custom Report</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              onClick={generateReport} 
              disabled={isGeneratingReport || !uploadedData.length}
            >
              {isGeneratingReport ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </>
              )}
            </Button>
          </div>

          {report && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Generated Report:</h4>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">{report}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataAnalytics;
