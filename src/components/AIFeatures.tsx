
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, TrendingUp, AlertTriangle, MessageSquare, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIFeatures = () => {
  const [naturalQuery, setNaturalQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [anomalies, setAnomalies] = useState<any[]>([]);
  const [predictions, setPredictions] = useState<any[]>([]);
  const { toast } = useToast();

  const processNaturalQuery = async () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      toast({
        title: "Query Processed",
        description: `Generated visualization for: "${naturalQuery}"`,
      });
      setIsProcessing(false);
    }, 2000);
  };

  const generateRecommendations = () => {
    const sampleRecommendations = [
      "Combine Sales and Marketing data for customer acquisition insights",
      "Merge Product and Support data to identify quality issues",
      "Connect Finance and Operations for cost optimization analysis",
      "Link HR and Performance data for employee satisfaction trends"
    ];
    setRecommendations(sampleRecommendations);
  };

  const detectAnomalies = () => {
    const sampleAnomalies = [
      { metric: "Sales Revenue", anomaly: "30% spike in Q3", severity: "high" },
      { metric: "User Signups", anomaly: "15% drop last week", severity: "medium" },
      { metric: "Server Response", anomaly: "2x slower than average", severity: "high" }
    ];
    setAnomalies(sampleAnomalies);
  };

  const generatePredictions = () => {
    const samplePredictions = [
      { metric: "Q4 Revenue", prediction: "$2.4M (+12%)", confidence: 85 },
      { metric: "Customer Churn", prediction: "8.3% (-2.1%)", confidence: 78 },
      { metric: "Market Growth", prediction: "15% YoY", confidence: 92 }
    ];
    setPredictions(samplePredictions);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Natural Language Queries */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <span>Natural Language Queries</span>
            </CardTitle>
            <CardDescription>Ask questions in plain English</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                value={naturalQuery}
                onChange={(e) => setNaturalQuery(e.target.value)}
                placeholder="Show me sales trends for Q3..."
                className="flex-1"
              />
              <Button 
                onClick={processNaturalQuery}
                disabled={isProcessing || !naturalQuery.trim()}
              >
                {isProcessing ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Ask AI"
                )}
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              Try: "Compare revenue by region", "Show customer retention rates", "What caused the sales spike?"
            </div>
          </CardContent>
        </Card>

        {/* Smart Recommendations */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <span>Smart Data Recommendations</span>
            </CardTitle>
            <CardDescription>AI suggests optimal data combinations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={generateRecommendations} className="w-full">
              <Brain className="h-4 w-4 mr-2" />
              Get Recommendations
            </Button>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-2 bg-muted rounded text-sm">
                  💡 {rec}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Anomaly Detection */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>Anomaly Detection</span>
            </CardTitle>
            <CardDescription>Automatically detect unusual patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={detectAnomalies} className="w-full">
              Scan for Anomalies
            </Button>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {anomalies.map((anomaly, index) => (
                <div key={index} className="p-2 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-sm">{anomaly.metric}</span>
                    <Badge variant={anomaly.severity === 'high' ? 'destructive' : 'secondary'}>
                      {anomaly.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{anomaly.anomaly}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Predictive Analytics */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Predictive Analytics</span>
            </CardTitle>
            <CardDescription>Forecast future trends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={generatePredictions} className="w-full">
              Generate Predictions
            </Button>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {predictions.map((prediction, index) => (
                <div key={index} className="p-2 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{prediction.metric}</span>
                    <Badge variant="outline">{prediction.confidence}% confidence</Badge>
                  </div>
                  <p className="text-lg font-bold text-primary">{prediction.prediction}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIFeatures;
