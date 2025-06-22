import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// 🔑 Replace with your OpenRouter API key
const openRouterApiKey = "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";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const data = Array.isArray(body.data) ? body.data : [];
    const analysisType = typeof body.analysisType === "string" ? body.analysisType : "insights";
    const fileName = typeof body.fileName === "string" ? body.fileName : "data.csv";

    console.log(`📊 Analyzing ${fileName} with type: ${analysisType}`);
    console.log(`📦 Records received: ${data.length}`);

    let prompt = "";
    switch (analysisType) {
      case "insights":
        prompt = `Analyze this dataset and provide key insights, trends, and patterns. Data from ${fileName}:\n\n${JSON.stringify(data.slice(0, 50))}`;
        break;
      case "predictive":
        prompt = `Based on historical data from ${fileName}, provide predictive insights:\n\n${JSON.stringify(data.slice(0, 50))}`;
        break;
      case "quality":
        prompt = `Analyze the data quality of this dataset. Identify missing values, outliers, inconsistencies, and cleaning suggestions:\n\n${JSON.stringify(data.slice(0, 20))}`;
        break;
      case "summary":
        prompt = `Create an executive summary of ${fileName}:\n\n${JSON.stringify(data.slice(0, 30))}`;
        break;
      default:
        prompt = `Provide general insights for ${fileName}:\n\n${JSON.stringify(data.slice(0, 50))}`;
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openRouterApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // You can also try others from OpenRouter
        messages: [
          {
            role: "system",
            content: "You are an expert data analyst. Return clear, actionable insights in bullet points with recommendations."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.3
      })
    });

    const ai = await response.json();
    console.log("AI Response:", JSON.stringify(ai, null, 2));
    const analysis = ai.choices?.[0]?.message?.content || "No response from model.";

    return new Response(JSON.stringify({
      analysis,
      analysisType,
      fileName,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });

  } catch (error) {
    console.error("❌ Error in analyze-data:", error);
    return new Response(JSON.stringify({
      error: error.message || "Unexpected error"
    }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }
});
