import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsPanel from "@/components/SettingsPanel";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Activity,
  Calendar,
  Clock,
  Download,
  Upload,
  Filter,
  Search,
  RefreshCw,
  Settings,
  Star,
  Zap,
  Shield,
  Globe,
  Lightbulb,
  Bookmark,
  Award,
  Briefcase,
  Presentation,
  TableProperties,
  ChartNoAxesCombined,
  BarChart4,
  LineChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  TrendingDown,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  Bell,
  Calendar as CalendarIcon,
  FileText,
  Gauge,
  Database,
  Cloud,
  Lock,
  Palette,
  Code,
  CreditCard,
  Key,
  Mail,
  Smartphone,
  Monitor
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const navigationSections = [
    {
      id: 'dashboard',
      label: 'Analytics Dashboard',
      icon: BarChart3,
      description: 'Real-time business intelligence and KPIs'
    },
    {
      id: 'reports',
      label: 'Executive Reports',
      icon: Presentation,
      description: 'Strategic insights and performance analytics'
    },
    {
      id: 'settings',
      label: 'Enterprise Settings',
      icon: Settings,
      description: 'Complete system configuration and management'
    }
  ];

  if (activeSection === 'settings') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('dashboard')}
              className="mr-4"
            >
              ← Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold gradient-text">Enterprise Settings</h1>
          </div>
          <SettingsPanel />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold gradient-text">DataVault Pro</h1>
              <nav className="hidden lg:flex space-x-1">
                {navigationSections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center space-x-2 px-4 py-2 ${
                        activeSection === section.id 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'hover:bg-blue-50'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{section.label}</span>
                    </Button>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow-md">
                <Zap className="w-4 h-4" />
                <span>Powered by Advanced AI Analytics</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="hero-text">Revolutionary</span>
                <br />
                <span className="gradient-text">Business Intelligence</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transform your data into actionable insights with our enterprise-grade analytics platform. 
                Real-time dashboards, predictive analytics, and seamless integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="btn-gradient px-8 py-4 text-lg">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Explore Analytics
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  View Demo
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Revenue", value: "$2.4M", change: "+12.5%", icon: DollarSign, trend: "up", color: "text-green-600" },
                { title: "Active Users", value: "45.2K", change: "+8.1%", icon: Users, trend: "up", color: "text-blue-600" },
                { title: "Conversion Rate", value: "3.24%", change: "-2.1%", icon: Target, trend: "down", color: "text-red-600" },
                { title: "Performance Score", value: "94.7", change: "+5.3%", icon: Activity, trend: "up", color: "text-purple-600" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
                return (
                  <Card key={index} className="metric-card group hover:shadow-3xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${stat.color === 'text-green-600' ? 'bg-green-100' : stat.color === 'text-blue-600' ? 'bg-blue-100' : stat.color === 'text-red-600' ? 'bg-red-100' : 'bg-purple-100'}`}>
                          <IconComponent className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="flex items-center gap-1">
                          <TrendIcon className="w-3 h-3" />
                          {stat.change}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <Card className="chart-container">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold flex items-center gap-2">
                        <LineChart className="w-6 h-6 text-blue-600" />
                        Revenue Analytics
                      </CardTitle>
                      <CardDescription>Monthly revenue trends and forecasting</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-center">
                        <BarChart4 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-lg font-semibold text-slate-600">Interactive Revenue Chart</p>
                        <p className="text-sm text-muted-foreground">Real-time data visualization coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <Card className="chart-container">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-green-600" />
                      Top Performing Segments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Enterprise", value: "45%", color: "bg-blue-500" },
                        { name: "SMB", value: "30%", color: "bg-green-500" },
                        { name: "Startup", value: "25%", color: "bg-purple-500" }
                      ].map((segment, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${segment.color}`}></div>
                            <span className="font-medium">{segment.name}</span>
                          </div>
                          <span className="font-bold text-lg">{segment.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="chart-container">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-orange-600" />
                      Real-time Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { action: "New user registration", time: "2 min ago", type: "success" },
                        { action: "Report generated", time: "5 min ago", type: "info" },
                        { action: "Data sync completed", time: "8 min ago", type: "success" },
                        { action: "Alert triggered", time: "12 min ago", type: "warning" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'success' ? 'bg-green-500' : 
                            activity.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                          }`}></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade encryption, SSO integration, and comprehensive audit trails",
                  features: ["256-bit encryption", "SAML/OAuth", "Audit logs", "Compliance ready"]
                },
                {
                  icon: Zap,
                  title: "Real-time Processing",
                  description: "Process millions of data points in real-time with sub-second latency",
                  features: ["Live dashboards", "Instant alerts", "Streaming data", "Auto-scaling"]
                },
                {
                  icon: Globe,
                  title: "Global Infrastructure",
                  description: "99.9% uptime with global CDN and multi-region deployment",
                  features: ["Global CDN", "Auto-failover", "Load balancing", "24/7 monitoring"]
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="metric-card group">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground mb-6">{feature.description}</p>
                          <div className="space-y-2">
                            {feature.features.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                <span className="text-sm text-slate-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Reports Section */}
        {activeSection === 'reports' && (
          <div className="space-y-8">
            {/* Reports Hero */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 p-12 text-white shadow-3xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-6">
                      <div className="flex flex-col items-center space-y-2">
                        <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 px-5 py-2 text-sm font-bold shadow-lg">
                          <Presentation className="w-4 h-4 mr-2" />
                          127 Active Reports
                        </Badge>
                        <div className="text-sm text-slate-500 font-medium">Live Updates</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 px-5 py-2 text-sm font-bold shadow-lg">
                          <Eye className="w-4 h-4 mr-2" />
                          2.3M Views
                        </Badge>
                        <div className="text-sm text-slate-500 font-medium">This Month</div>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-5 py-2 text-sm font-bold shadow-lg">
                          <Download className="w-4 h-4 mr-2" />
                          45K Downloads
                        </Badge>
                        <div className="text-sm text-slate-500 font-medium">Last Week</div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Executive
                        <br />
                        <span className="text-orange-200">Intelligence</span>
                      </h2>
                      <p className="text-xl text-orange-100 leading-relaxed mb-8">
                        Transform complex data into executive-ready insights. Our AI-powered reporting engine 
                        delivers strategic intelligence that drives decision-making at the highest levels.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-xl">
                        <Presentation className="w-5 h-5 mr-2" />
                        Generate Report
                      </Button>
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Reports
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { title: "Revenue Growth", value: "+24.5%", trend: "up", color: "emerald" },
                        { title: "Market Share", value: "34.2%", trend: "up", color: "blue" },
                        { title: "Customer Sat.", value: "4.8/5", trend: "up", color: "purple" },
                        { title: "Cost Efficiency", value: "+18.7%", trend: "up", color: "orange" }
                      ].map((metric, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                          <div className="text-center space-y-3">
                            <div className="text-3xl font-bold text-white">{metric.value}</div>
                            <div className="text-sm text-orange-200 font-medium">{metric.title}</div>
                            <div className="flex justify-center">
                              <TrendingUp className="w-5 h-5 text-green-300" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Reports Grid */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-4xl font-bold mb-3 flex items-center">
                      <Presentation className="w-10 h-10 mr-4 text-orange-300" />
                      Executive Reporting Command Center
                    </h3>
                    <p className="text-orange-200 text-xl">Real-time business intelligence, executive insights, and strategic decision support</p>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-6 py-3">
                      <Filter className="w-5 h-5 mr-2" />
                      Advanced Filters
                    </Button>
                    <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-6 py-3">
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Refresh Data
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Executive Dashboard",
                    description: "Real-time KPIs and strategic metrics for C-level executives",
                    metrics: ["Revenue Performance", "Market Analysis", "Strategic Goals", "Risk Assessment"],
                    icon: BarChart3,
                    gradient: "from-blue-500 to-cyan-500",
                    bgGradient: "from-blue-50 to-cyan-50",
                    status: "Live",
                    viewers: "23",
                    lastUpdate: "2 min ago"
                  },
                  {
                    title: "Financial Intelligence",
                    description: "Comprehensive financial analysis and forecasting reports",
                    metrics: ["P&L Analysis", "Cash Flow", "Budget vs Actual", "ROI Tracking"],
                    icon: DollarSign,
                    gradient: "from-green-500 to-emerald-500",
                    bgGradient: "from-green-50 to-emerald-50",
                    status: "Scheduled",
                    viewers: "45",
                    lastUpdate: "15 min ago"
                  },
                  {
                    title: "Operations Analytics",
                    description: "Operational efficiency and performance optimization insights",
                    metrics: ["Productivity Metrics", "Resource Utilization", "Process Efficiency", "Quality Scores"],
                    icon: Activity,
                    gradient: "from-purple-500 to-pink-500",
                    bgGradient: "from-purple-50 to-pink-50",
                    status: "Processing",
                    viewers: "18",
                    lastUpdate: "5 min ago"
                  },
                  {
                    title: "Customer Intelligence",
                    description: "Deep customer insights and behavioral analytics",
                    metrics: ["Customer Journey", "Satisfaction Scores", "Churn Analysis", "Lifetime Value"],
                    icon: Users,
                    gradient: "from-orange-500 to-red-500",
                    bgGradient: "from-orange-50 to-red-50",
                    status: "Live",
                    viewers: "67",
                    lastUpdate: "1 min ago"
                  },
                  {
                    title: "Market Intelligence",
                    description: "Competitive analysis and market trend reporting",
                    metrics: ["Market Share", "Competitor Analysis", "Trend Forecasting", "Opportunity Mapping"],
                    icon: TrendingUp,
                    gradient: "from-indigo-500 to-purple-500",
                    bgGradient: "from-indigo-50 to-purple-50",
                    status: "Live",
                    viewers: "34",
                    lastUpdate: "3 min ago"
                  },
                  {
                    title: "Risk & Compliance",
                    description: "Enterprise risk management and regulatory compliance",
                    metrics: ["Risk Assessment", "Compliance Status", "Audit Reports", "Governance Metrics"],
                    icon: Shield,
                    gradient: "from-red-500 to-pink-500",
                    bgGradient: "from-red-50 to-pink-50",
                    status: "Scheduled",
                    viewers: "12",
                    lastUpdate: "30 min ago"
                  }
                ].map((report, index) => {
                  const IconComponent = report.icon;
                  return (
                    <Card key={index} className="group relative overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-1 border-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${report.bgGradient} opacity-50`}></div>
                      <div className="relative z-10">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${report.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge 
                                variant={report.status === 'Live' ? 'default' : report.status === 'Processing' ? 'secondary' : 'outline'}
                                className={`px-3 py-1 text-xs font-bold shadow-md ${
                                  report.status === 'Live' ? 'bg-green-100 text-green-700 animate-pulse' : 
                                  report.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 
                                  'bg-orange-100 text-orange-700'
                                }`}
                              >
                                {report.status}
                              </Badge>
                              <div className="flex items-center space-x-2 text-xs text-slate-500">
                                <Eye className="w-3 h-3" />
                                <span>{report.viewers}</span>
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                            {report.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600 leading-relaxed">
                            {report.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-slate-700">Key Metrics</span>
                              <span className="text-xs text-slate-500">Updated {report.lastUpdate}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {report.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="bg-white/80 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 border border-slate-100 hover:border-blue-200 transition-colors">
                                  {metric}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Button className={`flex-1 bg-gradient-to-r ${report.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Report
                            </Button>
                            <Button variant="outline" className="bg-white/80 hover:bg-white border-slate-200 hover:border-blue-300 transition-all duration-300">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
