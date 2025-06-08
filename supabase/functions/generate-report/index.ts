
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
    const { data, reportType, fileName, customPrompt } = await req.json();
    
    console.log(`Generating ${reportType} report for ${fileName}`);

    let prompt = '';
    switch (reportType) {
      case 'executive':
        prompt = `Create a professional executive summary report for the dataset from ${fileName}. Include key findings, trends, recommendations, and strategic insights. Format as a structured business report.`;
        break;
      case 'technical':
        prompt = `Generate a detailed technical analysis report for ${fileName}. Include statistical analysis, data quality assessment, methodology, and technical recommendations.`;
        break;
      case 'trends':
        prompt = `Analyze trends and patterns in the data from ${fileName}. Identify seasonal patterns, growth trends, anomalies, and future projections.`;
        break;
      case 'custom':
        prompt = customPrompt || `Analyze the dataset from ${fileName} and provide comprehensive insights.`;
        break;
      default:
        prompt = `Create a comprehensive analysis report for the dataset from ${fileName}.`;
    }

    const fullPrompt = `${prompt}\n\nDataset sample:\n${JSON.stringify(data.slice(0, 100))}\n\nFormat the report with clear sections, bullet points, and actionable recommendations.`;

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
            content: 'You are an expert business analyst and report writer. Create professional, well-structured reports with clear sections, insights, and recommendations.' 
          },
          { role: 'user', content: fullPrompt }
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    const aiResponse = await response.json();
    const report = aiResponse.choices[0].message.content;

    return new Response(JSON.stringify({ 
      report,
      reportType,
      fileName,
      generatedAt: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-report function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
