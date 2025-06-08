
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
          <div className="animate-fade-in space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold text-foreground">Dataset Management</h1>
                  <p className="text-lg text-muted-foreground">Centralized data governance and schema management platform</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    12 Active Datasets
                  </Badge>
                  <Button className="premium-gradient text-white">
                    <Database className="w-4 h-4 mr-2" />
                    Import Dataset
                  </Button>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
              <Card className="metric-card border-0 enterprise-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Database className="h-8 w-8 text-primary" />
                    <Badge variant="outline">+15%</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">2.4TB</p>
                    <p className="text-sm text-muted-foreground">Total Data Volume</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="metric-card border-0 enterprise-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Shield className="h-8 w-8 text-chart-accent" />
                    <Badge variant="outline" className="bg-success/10 text-success">99.9%</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">Excellent</p>
                    <p className="text-sm text-muted-foreground">Data Quality Score</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="metric-card border-0 enterprise-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Users className="h-8 w-8 text-chart-warning" />
                    <Badge variant="outline">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">47</p>
                    <p className="text-sm text-muted-foreground">Connected Users</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="metric-card border-0 enterprise-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <BarChart3 className="h-8 w-8 text-chart-secondary" />
                    <Badge variant="outline">Real-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">127k</p>
                    <p className="text-sm text-muted-foreground">Daily Queries</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Features */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Data Catalog</CardTitle>
                      <CardDescription>Comprehensive dataset inventory and metadata management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Automated schema detection
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Data lineage tracking
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Version control integration
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore Catalog
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-accent/10 group-hover:bg-chart-accent/20 transition-colors">
                      <Shield className="h-6 w-6 text-chart-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Quality Monitoring</CardTitle>
                      <CardDescription>Real-time data validation and quality assessment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Automated quality checks
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Anomaly detection
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Quality score tracking
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-accent group-hover:text-white transition-colors">
                    View Quality Reports
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-warning/10 group-hover:bg-chart-warning/20 transition-colors">
                      <Globe className="h-6 w-6 text-chart-warning" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Data Governance</CardTitle>
                      <CardDescription>Compliance and access control management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Role-based access control
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Audit trail logging
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Compliance reporting
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-warning group-hover:text-white transition-colors">
                    Manage Governance
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'insights':
        return (
          <div className="animate-fade-in space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold text-foreground">AI-Powered Insights</h1>
                  <p className="text-lg text-muted-foreground">Advanced analytics and machine learning insights platform</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-chart-secondary/10 text-chart-secondary border-chart-secondary/20">
                    <Zap className="w-3 h-3 mr-1" />
                    AI Active
                  </Badge>
                  <Button className="premium-gradient text-white">
                    <Brain className="w-4 h-4 mr-2" />
                    Generate Insights
                  </Button>
                </div>
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-secondary/10 group-hover:bg-chart-secondary/20 transition-colors">
                      <Brain className="h-6 w-6 text-chart-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Predictive Analytics</CardTitle>
                      <CardDescription>Machine learning models for forecasting and trend analysis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Model Accuracy</span>
                      <Badge className="bg-success/10 text-success">94.7%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Predictions Made</span>
                      <span className="text-sm font-medium text-foreground">15,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Models</span>
                      <span className="text-sm font-medium text-foreground">12</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-secondary group-hover:text-white transition-colors">
                    View Predictions
                    <TrendingUp className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Pattern Recognition</CardTitle>
                      <CardDescription>Automated discovery of hidden patterns and anomalies</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Patterns Detected</span>
                      <Badge className="bg-chart-primary/10 text-chart-primary">284</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Anomalies Found</span>
                      <span className="text-sm font-medium text-foreground">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Confidence Score</span>
                      <span className="text-sm font-medium text-foreground">97.2%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore Patterns
                    <Star className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-accent/10 group-hover:bg-chart-accent/20 transition-colors">
                      <Zap className="h-6 w-6 text-chart-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Smart Recommendations</CardTitle>
                      <CardDescription>AI-driven insights for business optimization and strategy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Recommendations</span>
                      <Badge className="bg-chart-accent/10 text-chart-accent">23</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Implementation Rate</span>
                      <span className="text-sm font-medium text-foreground">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">ROI Impact</span>
                      <span className="text-sm font-medium text-success">+24.5%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-accent group-hover:text-white transition-colors">
                    View Recommendations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="animate-fade-in space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold text-foreground">Enterprise Reports</h1>
                  <p className="text-lg text-muted-foreground">Comprehensive reporting and analytics dashboard</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-chart-warning/10 text-chart-warning border-chart-warning/20">
                    <FileText className="w-3 h-3 mr-1" />
                    47 Reports
                  </Badge>
                  <Button className="premium-gradient text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    Create Report
                  </Button>
                </div>
              </div>
            </div>

            {/* Report Categories */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Executive Dashboard</CardTitle>
                      <CardDescription>High-level KPIs and strategic business metrics</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Monthly Reports</span>
                      <Badge>12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">KPIs Tracked</span>
                      <span className="text-sm font-medium text-foreground">28</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Automation Level</span>
                      <span className="text-sm font-medium text-success">100%</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Executive Reports
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-secondary/10 group-hover:bg-chart-secondary/20 transition-colors">
                      <Brain className="h-6 w-6 text-chart-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Technical Analysis</CardTitle>
                      <CardDescription>Detailed statistical analysis and data deep-dives</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Analytical Reports</span>
                      <Badge>18</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Data Sources</span>
                      <span className="text-sm font-medium text-foreground">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Processing Time</span>
                      <span className="text-sm font-medium text-foreground">< 2min</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-secondary group-hover:text-white transition-colors">
                    Access Technical Reports
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-accent/10 group-hover:bg-chart-accent/20 transition-colors">
                      <Target className="h-6 w-6 text-chart-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Custom Reports</CardTitle>
                      <CardDescription>Tailored reports based on specific business requirements</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Custom Templates</span>
                      <Badge>17</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Scheduled Reports</span>
                      <span className="text-sm font-medium text-foreground">32</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Export Formats</span>
                      <span className="text-sm font-medium text-foreground">6</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-accent group-hover:text-white transition-colors">
                    Build Custom Report
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="animate-fade-in space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold text-foreground">System Configuration</h1>
                  <p className="text-lg text-muted-foreground">Advanced settings and enterprise management console</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <Shield className="w-3 h-3 mr-1" />
                    Secure
                  </Badge>
                  <Button className="premium-gradient text-white">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced Config
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Categories */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">User Management</CardTitle>
                      <CardDescription>Account preferences, roles, and permission management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Users</span>
                      <Badge>124</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Role Groups</span>
                      <span className="text-sm font-medium text-foreground">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">SSO Integration</span>
                      <Badge className="bg-success/10 text-success">Active</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Manage Users
                    <Users className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-warning/10 group-hover:bg-chart-warning/20 transition-colors">
                      <Globe className="h-6 w-6 text-chart-warning" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">API Integration</CardTitle>
                      <CardDescription>External connections, webhooks, and API management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Connections</span>
                      <Badge>15</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">API Keys</span>
                      <span className="text-sm font-medium text-foreground">7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Rate Limit</span>
                      <span className="text-sm font-medium text-foreground">10k/min</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-warning group-hover:text-white transition-colors">
                    Configure APIs
                    <Globe className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card enterprise-shadow smooth-transition hover:shadow-2xl group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-chart-danger/10 group-hover:bg-chart-danger/20 transition-colors">
                      <Lock className="h-6 w-6 text-chart-danger" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Security & Compliance</CardTitle>
                      <CardDescription>Access control, audit logs, and compliance settings</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Security Score</span>
                      <Badge className="bg-success/10 text-success">A+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Audit Events</span>
                      <span className="text-sm font-medium text-foreground">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Compliance</span>
                      <Badge className="bg-success/10 text-success">SOC2</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-chart-danger group-hover:text-white transition-colors">
                    Security Settings
                    <Lock className="w-4 h-4 ml-2" />
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
