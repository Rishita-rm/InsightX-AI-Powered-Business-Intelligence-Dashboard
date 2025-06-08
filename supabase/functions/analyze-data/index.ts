
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { data, analysisType, fileName } = await req.json();
    
    console.log(`Analyzing ${fileName} with type: ${analysisType}`);

    let prompt = '';
    switch (analysisType) {
      case 'insights':
        prompt = `Analyze this dataset and provide key insights, trends, and patterns. Data from ${fileName}:\n\n${JSON.stringify(data.slice(0, 50))}`;
        break;
      case 'predictive':
        prompt = `Based on this historical data from ${fileName}, provide predictive analytics and forecasting insights:\n\n${JSON.stringify(data.slice(0, 50))}`;
        break;
      case 'quality':
        prompt = `Analyze the data quality of this dataset from ${fileName}. Identify missing values, outliers, inconsistencies, and provide cleaning recommendations:\n\n${JSON.stringify(data.slice(0, 20))}`;
        break;
      case 'summary':
        prompt = `Create a comprehensive executive summary of this dataset from ${fileName}:\n\n${JSON.stringify(data.slice(0, 30))}`;
        break;
      default:
        prompt = `Provide general analysis and insights for this dataset from ${fileName}:\n\n${JSON.stringify(data.slice(0, 50))}`;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert data analyst. Provide clear, actionable insights in a structured format with bullet points and recommendations.' 
          },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1000,
        temperature: 0.3,
      }),
    });

    const aiResponse = await response.json();
    const analysis = aiResponse.choices[0].message.content;

    return new Response(JSON.stringify({ 
      analysis,
      fileName,
      analysisType,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-data function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
