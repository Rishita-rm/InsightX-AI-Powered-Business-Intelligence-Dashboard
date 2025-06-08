
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Camera
} from "lucide-react";

const EnterpriseSettings = () => {
  const [activeCategory, setActiveCategory] = useState('core');

  const settingsCategories = [
    { id: 'core', label: 'Core System', icon: Settings },
    { id: 'security', label: 'Security & Compliance', icon: Shield },
    { id: 'integration', label: 'Integration & API', icon: Webhook },
    { id: 'infrastructure', label: 'Infrastructure', icon: Server },
    { id: 'customization', label: 'Customization', icon: Palette },
    { id: 'data', label: 'Data Management', icon: Database },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'ai', label: 'AI & Automation', icon: Brain },
    { id: 'billing', label: 'Billing & Licensing', icon: Coins },
    { id: 'developer', label: 'Developer Tools', icon: Code },
    { id: 'audit', label: 'Audit & Compliance', icon: FileText }
  ];

  const renderCoreSystemSettings = () => (
    <div className="space-y-8">
      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <UserCog className="w-6 h-6 text-blue-600" />
            <span>User & Access Management</span>
          </CardTitle>
          <CardDescription>Complete user lifecycle and access control management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-provisioning">Auto User Provisioning</Label>
                <Switch id="auto-provisioning" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="rbac-enabled">Role-Based Access Control</Label>
                <Switch id="rbac-enabled" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="mfa-required">Multi-Factor Authentication</Label>
                <Switch id="mfa-required" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" defaultValue="30" type="number" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <Select defaultValue="strong">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="strong">Strong</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sso-integration">SSO Integration</Label>
                <Switch id="sso-integration" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key-expiry">API Key Expiry (days)</Label>
                <Input id="api-key-expiry" defaultValue="90" type="number" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-8">
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-red-600" />
            <span>Security Center</span>
          </CardTitle>
          <CardDescription>Advanced security monitoring and threat protection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="audit-logging">Security Audit Logging</Label>
                <Switch id="audit-logging" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="threat-detection">Real-time Threat Detection</Label>
                <Switch id="threat-detection" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="encryption-level">Data Encryption Level</Label>
                <Select defaultValue="aes256">
                  <SelectTrigger>
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
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Backup Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger>
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
                <Label htmlFor="compliance-framework">Compliance Framework</Label>
                <Select defaultValue="gdpr">
                  <SelectTrigger>
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
                <Label htmlFor="retention-period">Data Retention (months)</Label>
                <Input id="retention-period" defaultValue="24" type="number" />
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
          <CardDescription>Manage all external integrations and API connections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-endpoint">Webhook Endpoint</Label>
                <Input id="webhook-endpoint" placeholder="https://your-domain.com/webhooks" />
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
                <Label htmlFor="db-connection">Database Connection String</Label>
                <Input id="db-connection" placeholder="postgresql://..." type="password" />
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
          <CardDescription>System optimization and resource management</CardDescription>
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
          <CardDescription>Branding, localization, and UI customization</CardDescription>
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
                <Input id="custom-domain" placeholder="dashboard.yourcompany.com" />
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
          <CardDescription>Comprehensive data quality and lifecycle management</CardDescription>
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
                <Label htmlFor="schema-validation">Schema Validation Level</Label>
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
          <CardDescription>Configure all notification channels and alert policies</CardDescription>
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
                <Label htmlFor="escalation-time">Escalation Time (minutes)</Label>
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
          <CardDescription>Machine learning and intelligent automation configuration</CardDescription>
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
                <Label htmlFor="alert-threshold">Intelligent Alert Threshold</Label>
                <Input id="alert-threshold" defaultValue="0.85" type="number" step="0.01" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="predictive-analytics">Predictive Analytics</Label>
                <Switch id="predictive-analytics" defaultChecked />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="nlp-processing">Natural Language Processing</Label>
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
          <CardDescription>Subscription, usage monitoring, and license management</CardDescription>
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
          <CardDescription>Development tools, testing, and deployment configuration</CardDescription>
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
          <CardDescription>Comprehensive audit trails and compliance management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="audit-trail">Audit Trail Logging</Label>
                <Switch id="audit-trail" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="compliance-reporting">Compliance Reporting</Label>
                <Switch id="compliance-reporting" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="risk-assessment">Risk Assessment Frequency</Label>
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
                <Label htmlFor="audit-retention">Audit Log Retention (years)</Label>
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
      case 'core': return renderCoreSystemSettings();
      case 'security': return renderSecuritySettings();
      case 'integration': return renderIntegrationSettings();
      case 'infrastructure': return renderInfrastructureSettings();
      case 'customization': return renderCustomizationSettings();
      case 'data': return renderDataManagementSettings();
      case 'notifications': return renderNotificationSettings();
      case 'ai': return renderAISettings();
      case 'billing': return renderBillingSettings();
      case 'developer': return renderDeveloperSettings();
      case 'audit': return renderAuditSettings();
      default: return renderCoreSystemSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Enterprise Settings</h1>
          <p className="text-lg text-slate-600">Comprehensive system configuration and management</p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4 mb-8">
          {settingsCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center space-y-2 h-auto py-4 px-3 text-center ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              <category.icon className="w-6 h-6" />
              <span className="text-xs font-medium leading-tight">{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          {renderCategoryContent()}
          
          {/* Save Actions */}
          <div className="flex justify-end space-x-4 pt-8 border-t">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSettings;
