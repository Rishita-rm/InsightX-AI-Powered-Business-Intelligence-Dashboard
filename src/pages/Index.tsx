
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import DataUpload from '@/components/DataUpload';
import DataAnalytics from '@/components/DataAnalytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Brain, 
  FileText, 
  Settings, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3,
  Zap,
  Target,
  Globe,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Activity,
  Layers,
  Search,
  Filter,
  Download,
  Share2,
  Eye,
  Clock,
  Sparkles,
  Cpu,
  Network,
  PieChart,
  LineChart,
  BarChart2,
  Radar,
  TrendingDown
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <DataUpload />;
      case 'analytics':
        return <DataAnalytics />;
      case 'datasets':
        return (
          <div className="animate-fade-in space-y-10 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
            {/* Creative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Premium Executive Header */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/60 p-10 rounded-3xl shadow-2xl mx-6 mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-indigo-50 rounded-3xl"></div>
              <div className="relative flex items-center justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
                        Enterprise Data Ecosystem
                      </h1>
                      <p className="text-xl text-slate-600 font-medium mt-2">
                        Next-generation data governance platform with AI-powered insights and enterprise-scale operations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 px-5 py-2 text-sm font-bold shadow-lg">
                      <Activity className="w-4 h-4 mr-2" />
                      System Operational
                    </Badge>
                    <div className="text-sm text-slate-500 font-medium">99.9% Uptime</div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-800 text-white px-8 py-4 text-base font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <Database className="w-5 h-5 mr-3" />
                    Launch Data Explorer
                  </Button>
                </div>
              </div>
            </div>

            {/* Advanced Metrics Grid with Creative Design */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
              {[
                { icon: Database, label: "Data Volume", value: "2.4TB", change: "+15%", color: "blue", gradient: "from-blue-500 to-cyan-600" },
                { icon: Shield, label: "Quality Score", value: "99.9%", change: "Excellent", color: "emerald", gradient: "from-emerald-500 to-teal-600" },
                { icon: Users, label: "Active Users", value: "847", change: "+23%", color: "amber", gradient: "from-amber-500 to-orange-600" },
                { icon: BarChart3, label: "Daily Queries", value: "127k", change: "Real-time", color: "violet", gradient: "from-violet-500 to-purple-600" }
              ].map((metric, index) => (
                <Card key={index} className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent group-hover:via-blue-500 transition-all duration-500"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <metric.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="outline" className={`bg-${metric.color}-50 text-${metric.color}-700 border-${metric.color}-200 font-bold px-3 py-1`}>
                        {metric.change}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="text-4xl font-black text-slate-900 group-hover:text-blue-900 transition-colors">{metric.value}</p>
                      <p className="text-sm font-semibold text-slate-600 group-hover:text-slate-700 transition-colors">{metric.label}</p>
                    </div>
                    <div className="mt-4 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transform translate-x-0 group-hover:translate-x-1 transition-transform duration-1000`} style={{width: '85%'}}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Premium Feature Cards with Advanced Design */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6">
              {[
                {
                  icon: Database,
                  title: "Enterprise Data Catalog",
                  description: "Comprehensive dataset inventory with automated metadata management and enterprise-grade governance",
                  features: ["Automated schema detection & validation", "Advanced data lineage tracking", "Enterprise version control integration"],
                  gradient: "from-blue-500 to-indigo-600",
                  bgGradient: "from-blue-50 to-indigo-50",
                  buttonText: "Explore Data Catalog",
                  stats: { datasets: "1,247", sources: "23", quality: "99.2%" }
                },
                {
                  icon: Shield,
                  title: "Quality Assurance Suite",
                  description: "Real-time data validation with AI-powered anomaly detection and comprehensive quality reporting",
                  features: ["Automated quality monitoring", "ML-powered anomaly detection", "Real-time quality score tracking"],
                  gradient: "from-emerald-500 to-teal-600",
                  bgGradient: "from-emerald-50 to-teal-50",
                  buttonText: "View Quality Dashboard",
                  stats: { checks: "45k", anomalies: "12", accuracy: "99.7%" }
                },
                {
                  icon: Globe,
                  title: "Governance Framework",
                  description: "Enterprise compliance management with role-based access control and comprehensive audit trails",
                  features: ["Advanced role-based access control", "Comprehensive audit trail logging", "Automated compliance reporting"],
                  gradient: "from-amber-500 to-orange-600",
                  bgGradient: "from-amber-50 to-orange-50",
                  buttonText: "Manage Governance",
                  stats: { policies: "67", audits: "2.3k", compliance: "100%" }
                }
              ].map((feature, index) => (
                <Card key={index} className="group relative bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden">
                  {/* Creative Header Gradient */}
                  <div className={`h-3 bg-gradient-to-r ${feature.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
                  
                  <CardHeader className="p-8 relative">
                    <div className="flex items-start space-x-5">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">{feature.title}</CardTitle>
                        <CardDescription className="text-slate-600 font-medium leading-relaxed text-base">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8 space-y-8 relative">
                    {/* Stats Mini Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(feature.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center border border-slate-200/60 group-hover:bg-white transition-all duration-300">
                          <div className="text-lg font-black text-slate-900">{value}</div>
                          <div className="text-xs font-semibold text-slate-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {feature.features.map((item, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button variant="outline" className={`w-full group-hover:bg-gradient-to-r group-hover:${feature.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-500 font-bold py-4 text-base border-2 border-slate-300 group-hover:shadow-xl`}>
                      {feature.buttonText}
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Data Explorer Preview Section */}
            <div className="mx-6 mb-6">
              <Card className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-4xl border-0 overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
                }}></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Data Explorer Preview</h3>
                      <p className="text-blue-200 text-lg">Real-time insights and interactive data visualization</p>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button className="bg-white text-slate-900 hover:bg-slate-100">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Launch Explorer
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { icon: PieChart, label: "Distribution Analysis", value: "12 Active" },
                      { icon: LineChart, label: "Trend Analysis", value: "Real-time" },
                      { icon: BarChart2, label: "Comparative Studies", value: "8 Reports" },
                      { icon: Radar, label: "Multi-dimensional", value: "Advanced" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                        <item.icon className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                        <div className="text-lg font-bold mb-1">{item.value}</div>
                        <div className="text-sm text-blue-200">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'insights':
        return (
          <div className="animate-fade-in space-y-10 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
            {/* Creative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-violet-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Premium Executive Header */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/60 p-10 rounded-3xl shadow-2xl mx-6 mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-transparent to-purple-50 rounded-3xl"></div>
              <div className="relative flex items-center justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                        AI Intelligence Platform
                      </h1>
                      <p className="text-xl text-slate-600 font-medium mt-2">
                        Advanced machine learning insights and predictive analytics for enterprise decision-making
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-200 px-5 py-2 text-sm font-bold shadow-lg">
                      <Cpu className="w-4 h-4 mr-2 animate-pulse" />
                      AI Models Active
                    </Badge>
                    <div className="text-sm text-slate-500 font-medium">12 Running</div>
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-800 text-white px-8 py-4 text-base font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <Sparkles className="w-5 h-5 mr-3" />
                    Generate Insights
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Performance Dashboard */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
              {[
                { icon: Brain, label: "Model Accuracy", value: "94.7%", trend: "+2.3%", color: "indigo", chart: "trending-up" },
                { icon: Target, label: "Predictions", value: "15.8k", trend: "+127%", color: "purple", chart: "trending-up" },
                { icon: Network, label: "Data Points", value: "2.4M", trend: "+45%", color: "blue", chart: "trending-up" },
                { icon: Zap, label: "Processing Speed", value: "0.2s", trend: "-15%", color: "emerald", chart: "trending-down" }
              ].map((metric, index) => (
                <Card key={index} className="group relative bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 group-hover:to-indigo-50 transition-all duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${metric.color}-500 to-${metric.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <metric.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center space-x-1 text-sm font-bold ${metric.chart === 'trending-up' ? 'text-emerald-600' : 'text-blue-600'}`}>
                          {metric.chart === 'trending-up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span>{metric.trend}</span>
                        </div>
                        <div className="text-xs text-slate-500 font-medium">vs last month</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 relative">
                    <div className="space-y-3">
                      <p className="text-4xl font-black text-slate-900 group-hover:text-indigo-900 transition-colors">{metric.value}</p>
                      <p className="text-sm font-semibold text-slate-600 group-hover:text-slate-700 transition-colors">{metric.label}</p>
                    </div>
                    
                    {/* Mini Chart Visualization */}
                    <div className="mt-4 flex items-end space-x-1 h-8">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 bg-gradient-to-t from-${metric.color}-200 to-${metric.color}-400 rounded-sm group-hover:from-${metric.color}-300 group-hover:to-${metric.color}-500 transition-all duration-300`}
                          style={{ 
                            height: `${Math.random() * 70 + 30}%`,
                            animationDelay: `${i * 100}ms`
                          }}
                        ></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Capabilities Showcase */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-6">
              {[
                {
                  icon: Brain,
                  title: "Predictive Analytics Engine",
                  description: "Advanced machine learning models for forecasting, trend analysis, and strategic planning",
                  stats: { accuracy: "94.7%", predictions: "15,847", models: "12" },
                  gradient: "from-indigo-500 to-purple-600",
                  bgGradient: "from-indigo-50 to-purple-50",
                  features: ["Real-time prediction generation", "Multi-dimensional trend analysis", "Automated model optimization"],
                  buttonText: "View Predictions"
                },
                {
                  icon: Target,
                  title: "Pattern Recognition System",
                  description: "Automated discovery of hidden patterns, anomalies, and business intelligence insights",
                  stats: { patterns: "284", anomalies: "7", confidence: "97.2%" },
                  gradient: "from-blue-500 to-cyan-600",
                  bgGradient: "from-blue-50 to-cyan-50",
                  features: ["Deep pattern analysis", "Anomaly detection alerts", "Behavioral insight generation"],
                  buttonText: "Explore Patterns"
                },
                {
                  icon: Zap,
                  title: "Smart Recommendations",
                  description: "AI-driven business optimization insights and strategic recommendations for maximum ROI",
                  stats: { recommendations: "23", implementation: "78%", roi: "+24.5%" },
                  gradient: "from-emerald-500 to-teal-600",
                  bgGradient: "from-emerald-50 to-teal-50",
                  features: ["Strategic optimization suggestions", "ROI impact analysis", "Automated action planning"],
                  buttonText: "View Recommendations"
                }
              ].map((capability, index) => (
                <Card key={index} className="group relative bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden">
                  {/* Animated Header */}
                  <div className={`h-3 bg-gradient-to-r ${capability.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                  </div>
                  
                  {/* Background Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.bgGradient} opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
                  
                  <CardHeader className="p-8 relative">
                    <div className="flex items-start space-x-5">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-2xl`}>
                          <capability.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Sparkles className="w-3 h-3 text-indigo-600 animate-pulse" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">{capability.title}</CardTitle>
                        <CardDescription className="text-slate-600 font-medium leading-relaxed text-base">
                          {capability.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8 space-y-8 relative">
                    {/* Performance Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(capability.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center border border-slate-200/60 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                          <div className="text-xl font-black text-slate-900 mb-1">{value}</div>
                          <div className="text-xs font-semibold text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" className={`w-full group-hover:bg-gradient-to-r group-hover:${capability.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-500 font-bold py-4 text-base border-2 border-slate-300 group-hover:shadow-2xl transform group-hover:scale-105`}>
                      {capability.buttonText}
                      <Star className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Model Performance Visualization */}
            <div className="mx-6 mb-6">
              <Card className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white shadow-4xl border-0 overflow-hidden">
                <div className="absolute inset-0 opacity-40" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 30 0 L 0 0 0 30' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
                }}></div>
                <CardContent className="p-10 relative">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 flex items-center">
                        <Brain className="w-8 h-8 mr-3 text-indigo-300" />
                        AI Model Performance Center
                      </h3>
                      <p className="text-indigo-200 text-lg">Real-time monitoring and advanced analytics for all AI models</p>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Activity className="w-4 h-4 mr-2" />
                        Live Monitor
                      </Button>
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700">
                        <Zap className="w-4 h-4 mr-2" />
                        Optimize Models
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { icon: Brain, label: "Neural Networks", status: "Optimized", performance: "99.2%" },
                      { icon: Target, label: "Classification", status: "Training", performance: "94.7%" },
                      { icon: Network, label: "Deep Learning", status: "Active", performance: "96.8%" },
                      { icon: Cpu, label: "Ensemble Models", status: "Deployed", performance: "97.3%" }
                    ].map((model, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-500 group border border-white/10">
                        <model.icon className="w-10 h-10 mx-auto mb-4 text-indigo-300 group-hover:text-white transition-colors group-hover:scale-110 transform duration-300" />
                        <div className="text-xl font-bold mb-2">{model.performance}</div>
                        <div className="text-sm text-indigo-200 mb-2">{model.label}</div>
                        <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {model.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="animate-fade-in space-y-8 min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            {/* Executive Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Enterprise Reporting Suite
                      </h1>
                      <p className="text-lg text-slate-600 font-medium">
                        Comprehensive business intelligence and analytics reporting for executive decision-making
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200 px-4 py-2 text-sm font-semibold">
                    <FileText className="w-4 h-4 mr-2" />
                    47 Active Reports
                  </Badge>
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white px-6 py-3 text-sm font-semibold shadow-lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Create New Report
                  </Button>
                </div>
              </div>
            </div>

            {/* Report Categories Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Executive Dashboard</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        High-level KPIs, strategic business metrics, and executive-level performance indicators
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Monthly Reports</span>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-semibold">12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">KPIs Tracked</span>
                      <span className="text-sm font-bold text-slate-900">28</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Automation Level</span>
                      <span className="text-sm font-bold text-emerald-700">100%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    View Executive Reports
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Technical Analysis Reports</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Detailed statistical analysis, data deep-dives, and comprehensive technical documentation
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Analytical Reports</span>
                      <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold">18</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Data Sources</span>
                      <span className="text-sm font-bold text-slate-900">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Processing Time</span>
                      <span className="text-sm font-bold text-slate-900">Less than 2min</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Access Technical Reports
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Custom Report Builder</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Tailored reports based on specific business requirements with advanced customization options
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Custom Templates</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">17</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Scheduled Reports</span>
                      <span className="text-sm font-bold text-slate-900">32</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Export Formats</span>
                      <span className="text-sm font-bold text-slate-900">6</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Build Custom Report
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="animate-fade-in space-y-8 min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
            {/* Executive Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        System Configuration Center
                      </h1>
                      <p className="text-lg text-slate-600 font-medium">
                        Advanced enterprise settings and comprehensive system management console
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-semibold">
                    <Shield className="w-4 h-4 mr-2" />
                    System Secure
                  </Badge>
                  <Button className="bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white px-6 py-3 text-sm font-semibold shadow-lg">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced Configuration
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Categories Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">User Management Center</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Comprehensive account management, role assignments, and enterprise permission control
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Active Users</span>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-semibold">124</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Role Groups</span>
                      <span className="text-sm font-bold text-slate-900">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">SSO Integration</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">Active</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Manage Users
                    <Users className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">API Integration Hub</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        External connections, webhook management, and comprehensive API configuration center
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Active Connections</span>
                      <Badge className="bg-amber-50 text-amber-700 border-amber-200 font-semibold">15</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">API Keys</span>
                      <span className="text-sm font-bold text-slate-900">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Rate Limit</span>
                      <span className="text-sm font-bold text-slate-900">10k/min</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Configure APIs
                    <Globe className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-red-500 to-rose-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Lock className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Security & Compliance</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Advanced access control, comprehensive audit logging, and enterprise compliance management
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Security Score</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">A+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Audit Events</span>
                      <span className="text-sm font-bold text-slate-900">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Compliance</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">SOC2</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-red-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Security Settings
                    <Lock className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
