
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
  Star
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
          <div className="animate-fade-in space-y-8 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Executive Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Enterprise Data Management
                      </h1>
                      <p className="text-lg text-slate-600 font-medium">
                        Centralized governance platform for enterprise-scale data operations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    12 Active Datasets
                  </Badge>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3 text-sm font-semibold shadow-lg">
                    <Database className="w-4 h-4 mr-2" />
                    Import New Dataset
                  </Button>
                </div>
              </div>
            </div>

            {/* Enterprise Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-8">
              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">+15%</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-slate-900">2.4TB</p>
                    <p className="text-sm font-medium text-slate-600">Total Data Volume</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">99.9%</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-slate-900">Excellent</p>
                    <p className="text-sm font-medium text-slate-600">Data Quality Score</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-slate-900">47</p>
                    <p className="text-sm font-medium text-slate-600">Connected Users</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">Real-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-slate-900">127k</p>
                    <p className="text-sm font-medium text-slate-600">Daily Queries</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Feature Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Enterprise Data Catalog</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Comprehensive dataset inventory with automated metadata management and enterprise-grade governance
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Automated schema detection & validation
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Advanced data lineage tracking
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Enterprise version control integration
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Explore Data Catalog
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Quality Assurance Suite</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Real-time data validation with AI-powered anomaly detection and comprehensive quality reporting
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Automated quality monitoring
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      ML-powered anomaly detection
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Real-time quality score tracking
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    View Quality Dashboard
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Governance Framework</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Enterprise compliance management with role-based access control and comprehensive audit trails
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Advanced role-based access control
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Comprehensive audit trail logging
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                      Automated compliance reporting
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Manage Governance
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'insights':
        return (
          <div className="animate-fade-in space-y-8 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Executive Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        AI-Powered Intelligence Platform
                      </h1>
                      <p className="text-lg text-slate-600 font-medium">
                        Advanced machine learning insights and predictive analytics for enterprise decision-making
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2 text-sm font-semibold">
                    <Zap className="w-4 h-4 mr-2" />
                    AI Models Active
                  </Badge>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-6 py-3 text-sm font-semibold shadow-lg">
                    <Brain className="w-4 h-4 mr-2" />
                    Generate New Insights
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Capabilities Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Predictive Analytics Engine</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Advanced machine learning models for forecasting, trend analysis, and strategic planning
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Model Accuracy</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">94.7%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Predictions Generated</span>
                      <span className="text-sm font-bold text-slate-900">15,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Active Models</span>
                      <span className="text-sm font-bold text-slate-900">12</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    View Predictions
                    <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Pattern Recognition System</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        Automated discovery of hidden patterns, anomalies, and business intelligence insights
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Patterns Detected</span>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-semibold">284</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Anomalies Found</span>
                      <span className="text-sm font-bold text-slate-900">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Confidence Score</span>
                      <span className="text-sm font-bold text-slate-900">97.2%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    Explore Patterns
                    <Star className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                <CardHeader className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">Smart Recommendations</CardTitle>
                      <CardDescription className="text-slate-600 font-medium leading-relaxed">
                        AI-driven business optimization insights and strategic recommendations for maximum ROI
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Active Recommendations</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold">23</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Implementation Rate</span>
                      <span className="text-sm font-bold text-slate-900">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">ROI Impact</span>
                      <span className="text-sm font-bold text-emerald-700">+24.5%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 font-semibold py-3 border-slate-300">
                    View Recommendations
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
