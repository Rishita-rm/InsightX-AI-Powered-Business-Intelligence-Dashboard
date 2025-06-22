import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Brain, Download, Loader2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { supabase } from "@/lib/supabase";

const DataAnalytics = () => {
  const [uploadedData, setUploadedData] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [analysis, setAnalysis] = useState<string>("");
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisType, setAnalysisType] = useState("insights");
  const [scheduleEmail, setScheduleEmail] = useState(false);
  const { toast } = useToast();
  const exportRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split("\n");
        const headers = lines[0].split(",");
        const data = lines
          .slice(1)
          .map((line) => {
            const values = line.split(",");
            const obj: any = {};
            headers.forEach((header, i) => {
              obj[header.trim()] = values[i]?.trim();
            });
            return obj;
          })
          .filter((obj) => Object.values(obj).some(Boolean));

        setUploadedData(data);
        toast({
          title: "File uploaded",
          description: `${data.length} records loaded.`,
        });
      } catch {
        toast({
          title: "Upload error",
          description: "Failed to parse file.",
          variant: "destructive",
        });
      }
    };
    reader.readAsText(file);
  };

  const analyzeData = async () => {
    const saveInsightToDB = async (prompt: string, output: string) => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        toast({
          title: "Error",
          description: "User not authenticated",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase.from("insights").insert([
        {
          user_id: user.id,
          input_text: prompt,
          generated_text: output,
        },
      ]);

      if (error) {
        toast({
          title: "DB Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "✅ Insight Saved",
          description: "Insight successfully stored in Supabase",
        });
      }
    };

    if (!uploadedData.length) return;
    setIsAnalyzing(true);

    const prompt = `Analyze the uploaded dataset and return ${analysisType} insights.`;
    setAiPrompt(prompt);

    try {
      // Wait 2 seconds for UI purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      if (!token) {
        toast({
          title: "Auth Error",
          description: "No access token found. Please login again.",
          variant: "destructive",
        });
        setIsAnalyzing(false);
        return;
      }

      const res = await fetch(
        "https://etwbofsmxyxuayrhdxen.supabase.co/functions/v1/analyze-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            data: uploadedData,
            fileName,
            analysisType,
          }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Analysis failed");
      }

      setAnalysis(result.analysis);
      await saveInsightToDB(prompt, result.analysis);

      toast({
        title: "AI Analysis Complete",
        description: "Insights generated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong during analysis.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const downloadPDF = async () => {
    if (!exportRef.current) return;

    const canvas = await html2canvas(exportRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("InsightX_Report.pdf");
  };

  const handleScheduleEmail = () => {
    if (scheduleEmail) {
      toast({
        title: "📬 Email Scheduled",
        description: "You will receive weekly reports (mocked)",
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>📤 Upload Dataset</CardTitle>
          <CardDescription>CSV or Excel supported</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={handleFileUpload} />
          {uploadedData.length > 0 && (
            <p className="text-sm text-green-600 mt-2">
              {uploadedData.length} records loaded
            </p>
          )}
        </CardContent>
      </Card>

      {/* AI Insights */}
      <div ref={exportRef}>
        <Card>
          <CardHeader>
            <CardTitle>🧠 Generate Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={analysisType} onValueChange={setAnalysisType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="insights">Key Insights</SelectItem>
                <SelectItem value="summary">Executive Summary</SelectItem>
                <SelectItem value="quality">Data Quality</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={analyzeData} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" /> Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" /> Generate Insights
                </>
              )}
            </Button>

            {aiPrompt && (
              <Textarea
                readOnly
                value={`📝 Prompt:\n${aiPrompt}`}
                className="text-xs bg-muted"
              />
            )}
            {analysis && (
              <Textarea
                readOnly
                value={analysis}
                className="text-sm bg-background"
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Export / Email */}
      <Card>
        <CardHeader>
          <CardTitle>📄 Export & Schedule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button onClick={downloadPDF} disabled={!analysis}>
            <Download className="h-4 w-4 mr-2" /> Download Report PDF
          </Button>

          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={scheduleEmail}
              onChange={() => setScheduleEmail(!scheduleEmail)}
              onClick={handleScheduleEmail}
            />
            <span className="text-sm text-muted-foreground">
              Weekly report (Monday 9 AM)
            </span>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataAnalytics;
