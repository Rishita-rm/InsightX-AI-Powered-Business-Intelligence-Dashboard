import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Shield,
  Users,
  Database,
  Bell,
  Cpu,
  Cloud,
  Lock,
  Key,
  Webhook,
  Globe,
  Brain,
  FileText,
  Activity,
  Coins,
  Code,
  CheckCircle,
  AlertTriangle,
  Zap,
  Mail,
  Smartphone,
  Server,
  HardDrive,
  Palette,
  Languages,
  Clock,
  DollarSign,
  BarChart3,
  GitBranch,
  Search,
  Filter,
  Archive,
  RefreshCw,
  Eye,
  Layers,
  Network,
  Gauge,
  Target,
  Calendar,
  MapPin,
  Building,
  UserCog,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  Sparkles,
  Monitor,
  Camera,
  Star,
  ChevronRight,
  Verified,
} from "lucide-react";

const EnterpriseSettings = () => {
  const [activeCategory, setActiveCategory] = useState("core");

  const settingsCategories = [
    {
      id: "core",
      label: "Core System",
      icon: Settings,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      description: "Essential system configuration",
    },
    {
      id: "security",
      label: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      borderColor: "border-red-200",
      description: "Advanced security controls",
    },
    {
      id: "integration",
      label: "Integration & API",
      icon: Webhook,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      description: "External connections",
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      description: "Performance & scaling",
    },
    {
      id: "customization",
      label: "Customization",
      icon: Palette,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      description: "Branding & themes",
    },
    {
      id: "data",
      label: "Data Management",
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
      description: "Data governance",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      description: "Alert management",
    },
    {
      id: "ai",
      label: "AI & Automation",
      icon: Brain,
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50",
      borderColor: "border-cyan-200",
      description: "Machine learning",
    },
    {
      id: "billing",
      label: "Billing & Licensing",
      icon: Coins,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      description: "Enterprise controls",
    },
    {
      id: "developer",
      label: "Developer Tools",
      icon: Code,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      borderColor: "border-violet-200",
      description: "Development environment",
    },
    {
      id: "audit",
      label: "Audit & Compliance",
      icon: FileText,
      color: "from-slate-500 to-gray-500",
      bgColor: "bg-gradient-to-br from-slate-50 to-gray-50",
      borderColor: "border-slate-200",
      description: "Governance framework",
    },
  ];

  const renderCoreSystemSettings = () => (
    <div className="space-y-8">
      <Card className="glass-card hover:shadow-3xl transition-all duration-500 border-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        <CardHeader className="relative">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
              <UserCog className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                User & Access Management
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Complete user lifecycle and access control management
              </CardDescription>
            </div>
            <Badge className="ml-auto bg-yellow-100 text-yellow-700 border border-yellow-300">
              <Star className="w-3 h-3 mr-1" /> Premium
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Core Settings
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                    <Label htmlFor="auto-provisioning" className="font-medium">
                      Auto User Provisioning
                    </Label>
                    <Switch id="auto-provisioning" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                    <Label htmlFor="rbac-enabled" className="font-medium">
                      Role-Based Access Control
                    </Label>
                    <Switch id="rbac-enabled" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                    <Label htmlFor="mfa-required" className="font-medium">
                      Multi-Factor Authentication
                    </Label>
                    <Switch id="mfa-required" defaultChecked />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="session-timeout"
                    className="text-sm font-semibold"
                  >
                    Session Timeout (minutes)
                  </Label>
                  <Input
                    id="session-timeout"
                    defaultValue="30"
                    type="number"
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                <h4 className="font-semibold text-cyan-900 mb-4 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Configuration
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="password-policy"
                      className="text-sm font-semibold"
                    >
                      Password Policy
                    </Label>
                    <Select defaultValue="strong">
                      <SelectTrigger className="focus:ring-2 focus:ring-cyan-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="strong">Strong</SelectItem>
                        <SelectItem value="enterprise">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                    <Label htmlFor="sso-integration" className="font-medium">
                      SSO Integration
                    </Label>
                    <Switch id="sso-integration" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="api-key-expiry"
                      className="text-sm font-semibold"
                    >
                      API Key Expiry (days)
                    </Label>
                    <Input
                      id="api-key-expiry"
                      defaultValue="90"
                      type="number"
                      className="focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-8">
      <Card className="glass-card hover:shadow-3xl transition-all duration-500 border-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-rose-500"></div>
        <CardHeader className="relative">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 text-white shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Security Center
              </CardTitle>
              <CardDescription className="text-lg">
                Enterprise-grade security with 20+ years of best practices and
                compliance enforcement
              </CardDescription>
            </div>
            <Badge variant="destructive" className="ml-auto">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Critical
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100">
                <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Security Monitoring
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                    <Label htmlFor="audit-logging" className="font-medium">
                      Security Audit Logging
                    </Label>
                    <Switch id="audit-logging" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                    <Label htmlFor="threat-detection" className="font-medium">
                      Real-time Threat Detection
                    </Label>
                    <Switch id="threat-detection" defaultChecked />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="encryption-level"
                    className="text-sm font-semibold"
                  >
                    Data Encryption Level
                  </Label>
                  <Select defaultValue="aes256">
                    <SelectTrigger className="focus:ring-2 focus:ring-red-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aes128">AES-128</SelectItem>
                      <SelectItem value="aes256">AES-256</SelectItem>
                      <SelectItem value="rsa2048">RSA-2048</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100">
                <h4 className="font-semibold text-rose-900 mb-4 flex items-center">
                  <Archive className="w-4 h-4 mr-2" />
                  Data Protection
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="backup-frequency"
                      className="text-sm font-semibold"
                    >
                      Backup Frequency
                    </Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="focus:ring-2 focus:ring-rose-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="compliance-framework"
                      className="text-sm font-semibold"
                    >
                      Compliance Framework
                    </Label>
                    <Select defaultValue="gdpr">
                      <SelectTrigger className="focus:ring-2 focus:ring-rose-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gdpr">GDPR</SelectItem>
                        <SelectItem value="hipaa">HIPAA</SelectItem>
                        <SelectItem value="sox">SOX</SelectItem>
                        <SelectItem value="iso27001">ISO 27001</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="retention-period"
                      className="text-sm font-semibold"
                    >
                      Data Retention (months)
                    </Label>
                    <Input
                      id="retention-period"
                      defaultValue="24"
                      type="number"
                      className="focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderIntegrationSettings = () => (
    <div className="space-y-8">
      <Card className="border-purple-200 bg-purple-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Network className="w-6 h-6 text-purple-600" />
            <span>Connectivity Hub</span>
          </CardTitle>
          <CardDescription>
            Manage all external integrations and API connections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-endpoint">Webhook Endpoint</Label>
                <Input
                  id="webhook-endpoint"
                  placeholder="https://your-domain.com/webhooks"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="slack-integration">Slack Integration</Label>
                <Switch id="slack-integration" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="teams-integration">Microsoft Teams</Label>
                <Switch id="teams-integration" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate-limit">API Rate Limit (req/min)</Label>
                <Input id="rate-limit" defaultValue="1000" type="number" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="oauth-provider">OAuth 2.0 Provider</Label>
                <Select defaultValue="google">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="github">GitHub</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="db-connection">
                  Database Connection String
                </Label>
                <Input
                  id="db-connection"
                  placeholder="postgresql://..."
                  type="password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cloud-storage">Cloud Storage Provider</Label>
                <Select defaultValue="aws">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aws">AWS S3</SelectItem>
                    <SelectItem value="azure">Azure Blob</SelectItem>
                    <SelectItem value="gcp">Google Cloud Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderInfrastructureSettings = () => (
    <div className="space-y-8">
      <Card className="border-green-200 bg-green-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Gauge className="w-6 h-6 text-green-600" />
            <span>Infrastructure & Performance</span>
          </CardTitle>
          <CardDescription>
            System optimization and resource management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="resource-monitoring">Resource Monitoring</Label>
                <Switch id="resource-monitoring" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-scaling">Auto-scaling</Label>
                <Switch id="auto-scaling" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpu-threshold">CPU Threshold (%)</Label>
                <Input id="cpu-threshold" defaultValue="80" type="number" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cache-type">Caching Strategy</Label>
                <Select defaultValue="redis">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="redis">Redis</SelectItem>
                    <SelectItem value="memcached">Memcached</SelectItem>
                    <SelectItem value="local">Local Cache</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cdn-provider">CDN Provider</Label>
                <Select defaultValue="cloudflare">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cloudflare">Cloudflare</SelectItem>
                    <SelectItem value="aws">AWS CloudFront</SelectItem>
                    <SelectItem value="azure">Azure CDN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="memory-threshold">Memory Threshold (%)</Label>
                <Input id="memory-threshold" defaultValue="85" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="load-balancing">Load Balancing</Label>
                <Switch id="load-balancing" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCustomizationSettings = () => (
    <div className="space-y-8">
      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Building className="w-6 h-6 text-orange-600" />
            <span>Organization Settings</span>
          </CardTitle>
          <CardDescription>
            Branding, localization, and UI customization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Your Company Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Brand Color</Label>
                <Input id="primary-color" type="color" defaultValue="#3b82f6" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="custom-domain">Custom Domain</Label>
                <Input
                  id="custom-domain"
                  placeholder="dashboard.yourcompany.com"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="white-label">White Label Mode</Label>
                <Switch id="white-label" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">EST</SelectItem>
                    <SelectItem value="pst">PST</SelectItem>
                    <SelectItem value="cet">CET</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                    <SelectItem value="jpy">JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDataManagementSettings = () => (
    <div className="space-y-8">
      <Card className="border-indigo-200 bg-indigo-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Layers className="w-6 h-6 text-indigo-600" />
            <span>Data Governance</span>
          </CardTitle>
          <CardDescription>
            Comprehensive data quality and lifecycle management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="data-quality">Data Quality Rules</Label>
                <Switch id="data-quality" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="metadata-mgmt">Metadata Management</Label>
                <Switch id="metadata-mgmt" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="lineage-tracking">Data Lineage Tracking</Label>
                <Switch id="lineage-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schema-validation">
                  Schema Validation Level
                </Label>
                <Select defaultValue="strict">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="strict">Strict</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="archival-policy">Data Archival Policy</Label>
                <Select defaultValue="yearly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="import-format">Default Import Format</Label>
                <Select defaultValue="csv">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="parquet">Parquet</SelectItem>
                    <SelectItem value="avro">Avro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-transform">Auto Data Transformation</Label>
                <Switch id="auto-transform" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-8">
      <Card className="border-yellow-200 bg-yellow-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
            <span>Alert Management</span>
          </CardTitle>
          <CardDescription>
            Configure all notification channels and alert policies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="slack-alerts">Slack Alerts</Label>
                <Switch id="slack-alerts" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-provider">SMS Provider</Label>
                <Select defaultValue="twilio">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twilio">Twilio</SelectItem>
                    <SelectItem value="aws">AWS SNS</SelectItem>
                    <SelectItem value="sendgrid">SendGrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="escalation-time">
                  Escalation Time (minutes)
                </Label>
                <Input id="escalation-time" defaultValue="15" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maintenance-window">Maintenance Window</Label>
                <Select defaultValue="weekend">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily 2-4 AM</SelectItem>
                    <SelectItem value="weekend">Weekend</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="status-page">Public Status Page</Label>
                <Switch id="status-page" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAISettings = () => (
    <div className="space-y-8">
      <Card className="border-cyan-200 bg-cyan-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Sparkles className="w-6 h-6 text-cyan-600" />
            <span>AI & Automation</span>
          </CardTitle>
          <CardDescription>
            Advanced automation built from decades of enterprise R&D in AI and
            data science
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="ml-models">ML Model Training</Label>
                <Switch id="ml-models" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-workflows">Automated Workflows</Label>
                <Switch id="auto-workflows" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alert-threshold">
                  Intelligent Alert Threshold
                </Label>
                <Input
                  id="alert-threshold"
                  defaultValue="0.85"
                  type="number"
                  step="0.01"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="predictive-analytics">
                  Predictive Analytics
                </Label>
                <Switch id="predictive-analytics" defaultChecked />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="nlp-processing">
                  Natural Language Processing
                </Label>
                <Switch id="nlp-processing" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-discovery">Auto-discovery</Label>
                <Switch id="auto-discovery" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ai-confidence">AI Confidence Level</Label>
                <Select defaultValue="high">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (60%)</SelectItem>
                    <SelectItem value="medium">Medium (75%)</SelectItem>
                    <SelectItem value="high">High (90%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBillingSettings = () => (
    <div className="space-y-8">
      <Card className="border-emerald-200 bg-emerald-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            <span>Enterprise Controls</span>
          </CardTitle>
          <CardDescription>
            Subscription, usage monitoring, and license management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subscription-tier">Subscription Tier</Label>
                <Select defaultValue="enterprise">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="usage-monitoring">Usage Monitoring</Label>
                <Switch id="usage-monitoring" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cost-center">Default Cost Center</Label>
                <Input id="cost-center" placeholder="IT-001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-limit">User License Limit</Label>
                <Input id="user-limit" defaultValue="1000" type="number" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="feature-toggles">Feature Toggles</Label>
                <Switch id="feature-toggles" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storage-quota">Storage Quota (GB)</Label>
                <Input id="storage-quota" defaultValue="10000" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-quota">API Call Quota (monthly)</Label>
                <Input id="api-quota" defaultValue="1000000" type="number" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDeveloperSettings = () => (
    <div className="space-y-8">
      <Card className="border-violet-200 bg-violet-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <GitBranch className="w-6 h-6 text-violet-600" />
            <span>Development Environment</span>
          </CardTitle>
          <CardDescription>
            Development tools, testing, and deployment configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sandbox-env">Sandbox Environment</Label>
                <Switch id="sandbox-env" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="staging-env">Staging Environment</Label>
                <Switch id="staging-env" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-docs">API Documentation</Label>
                <Select defaultValue="swagger">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="swagger">Swagger/OpenAPI</SelectItem>
                    <SelectItem value="postman">Postman</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-deployment">Auto Deployment</Label>
                <Switch id="auto-deployment" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="version-control">Version Control</Label>
                <Select defaultValue="git">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="git">Git</SelectItem>
                    <SelectItem value="svn">SVN</SelectItem>
                    <SelectItem value="mercurial">Mercurial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="test-framework">Testing Framework</Label>
                <Select defaultValue="jest">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jest">Jest</SelectItem>
                    <SelectItem value="mocha">Mocha</SelectItem>
                    <SelectItem value="cypress">Cypress</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="debug-mode">Debug Mode</Label>
                <Switch id="debug-mode" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAuditSettings = () => (
    <div className="space-y-8">
      <Card className="border-slate-200 bg-slate-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Monitor className="w-6 h-6 text-slate-600" />
            <span>Governance Framework</span>
          </CardTitle>
          <CardDescription>
            Comprehensive audit trails and compliance management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="audit-trail">Audit Trail Logging</Label>
                <Switch id="audit-trail" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="compliance-reporting">
                  Compliance Reporting
                </Label>
                <Switch id="compliance-reporting" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="risk-assessment">
                  Risk Assessment Frequency
                </Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="policy-mgmt">Policy Management</Label>
                <Switch id="policy-mgmt" defaultChecked />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="change-mgmt">Change Management</Label>
                <Switch id="change-mgmt" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="approval-levels">Approval Levels</Label>
                <Select defaultValue="3">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Single Approval</SelectItem>
                    <SelectItem value="2">Dual Approval</SelectItem>
                    <SelectItem value="3">Triple Approval</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="audit-retention">
                  Audit Log Retention (years)
                </Label>
                <Input id="audit-retention" defaultValue="7" type="number" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case "core":
        return renderCoreSystemSettings();
      case "security":
        return renderSecuritySettings();
      case "integration":
        return renderIntegrationSettings();
      case "infrastructure":
        return renderInfrastructureSettings();
      case "customization":
        return renderCustomizationSettings();
      case "data":
        return renderDataManagementSettings();
      case "notifications":
        return renderNotificationSettings();
      case "ai":
        return renderAISettings();
      case "billing":
        return renderBillingSettings();
      case "developer":
        return renderDeveloperSettings();
      case "audit":
        return renderAuditSettings();
      default:
        return renderCoreSystemSettings();
    }
  };

  const activeConfig = settingsCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto p-8 relative z-10">
        <div className="mb-12 text-center relative">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl">
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
                Enterprise Settings
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                Comprehensive system configuration and management
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {settingsCategories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                activeCategory === category.id
                  ? `${category.borderColor} ${category.bgColor} shadow-xl`
                  : "border-gray-200 bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                    activeCategory === category.id
                      ? `bg-gradient-to-br ${category.color} text-white shadow-lg`
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3
                  className={`font-semibold text-sm mb-1 ${
                    activeCategory === category.id
                      ? "text-gray-900"
                      : "text-gray-700"
                  }`}
                >
                  {category.label}
                </h3>
                <p className="text-xs text-gray-500">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Category Header */}
        {activeConfig && (
          <div className="mb-8">
            <Card className="glass-card border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${activeConfig.color} text-white shadow-lg`}
                  >
                    <activeConfig.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {activeConfig.label}
                    </h2>
                    <p className="text-gray-600">{activeConfig.description}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Content Area */}
        <div className="space-y-8">
          {renderCategoryContent()}

          {/* Enhanced Save Actions */}
          <Card className="glass-card border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Verified className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Configuration Status
                    </h3>
                    <p className="text-sm text-gray-600">
                      All changes will be applied system-wide
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="px-8 py-3 font-semibold">
                    Cancel Changes
                  </Button>
                  <Button className="px-8 py-3 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Save Configuration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSettings;
