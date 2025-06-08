
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Users, 
  Globe, 
  Bell, 
  Database, 
  Palette, 
  Key, 
  Activity, 
  Zap, 
  Lock,
  Mail,
  Cloud,
  Settings2,
  Gauge,
  FileText,
  CreditCard,
  Code,
  Eye,
  UserCheck,
  Wifi,
  HardDrive,
  Cpu,
  BarChart3,
  Smartphone,
  Monitor,
  Languages,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Upload,
  Trash2,
  RotateCcw,
  Save
} from 'lucide-react';

const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    slack: false
  });

  const settingsCategories = [
    {
      id: 'general',
      label: 'General',
      icon: Settings2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 'users',
      label: 'Users & Access',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'integrations',
      label: 'Integrations',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'appearance',
      label: 'Appearance',
      icon: Palette,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      id: 'data',
      label: 'Data Management',
      icon: Database,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      id: 'performance',
      label: 'Performance',
      icon: Gauge,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'billing',
      label: 'Billing & Plans',
      icon: CreditCard,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 'developer',
      label: 'Developer Tools',
      icon: Code,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Enterprise Settings</h1>
        <p className="text-xl text-muted-foreground">Complete control over your business intelligence platform</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 lg:grid-cols-10 w-full h-auto p-2 bg-white/80 backdrop-blur-sm border shadow-lg">
          {settingsCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 ${
                  activeTab === category.id 
                    ? `${category.bgColor} ${category.color} ${category.borderColor} border-2 shadow-md` 
                    : 'hover:bg-slate-50'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-xs font-medium">{category.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Organization Settings
                </CardTitle>
                <CardDescription>Configure your organization's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Acme Corporation" />
                  </div>
                  <div>
                    <Label htmlFor="company-domain">Domain</Label>
                    <Input id="company-domain" placeholder="acme.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                      <SelectItem value="cet">CET</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable maintenance mode for system updates</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-blue-600" />
                  Localization
                </CardTitle>
                <CardDescription>Language and regional settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="language">Default Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="jpy">JPY (¥)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  Authentication & Access
                </CardTitle>
                <CardDescription>Configure security policies and access controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Single Sign-On (SSO)</Label>
                    <p className="text-sm text-muted-foreground">Enable SAML/OAuth integration</p>
                  </div>
                  <Switch />
                </div>
                <div>
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" placeholder="30" />
                </div>
                <div>
                  <Label htmlFor="password-policy">Password Policy</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="strong">Strong</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-red-600" />
                  Audit & Monitoring
                </CardTitle>
                <CardDescription>Track and monitor system activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Audit Logging</Label>
                    <p className="text-sm text-muted-foreground">Log all user activities</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Failed Login Alerts</Label>
                    <p className="text-sm text-muted-foreground">Alert on suspicious login attempts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label htmlFor="log-retention">Log Retention (days)</Label>
                  <Input id="log-retention" type="number" placeholder="90" />
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Export Security Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Users & Access */}
        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-green-600" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Total Users</span>
                  <Badge variant="secondary">247</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Active Users</span>
                  <Badge className="bg-green-100 text-green-800">239</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Pending Invites</span>
                  <Badge variant="outline">8</Badge>
                </div>
                <Button className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-green-600" />
                  Role Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Admin</span>
                    <Badge variant="destructive">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Manager</span>
                    <Badge className="bg-orange-100 text-orange-800">12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Analyst</span>
                    <Badge className="bg-blue-100 text-blue-800">45</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Viewer</span>
                    <Badge variant="secondary">187</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Configure Roles
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  User Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last 24h</span>
                    <span className="text-sm font-semibold text-green-600">156 logins</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This week</span>
                    <span className="text-sm font-semibold">1,247 sessions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. session</span>
                    <span className="text-sm font-semibold">2h 34m</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Slack', icon: '💬', status: 'Connected', color: 'green' },
              { name: 'Microsoft Teams', icon: '👥', status: 'Connected', color: 'green' },
              { name: 'Salesforce', icon: '☁️', status: 'Disconnected', color: 'red' },
              { name: 'Google Workspace', icon: '📧', status: 'Connected', color: 'green' },
              { name: 'Jira', icon: '🎯', status: 'Connected', color: 'green' },
              { name: 'AWS S3', icon: '☁️', status: 'Disconnected', color: 'red' }
            ].map((integration, index) => (
              <Card key={index} className="glass-card border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{integration.icon}</span>
                      <div>
                        <h3 className="font-semibold">{integration.name}</h3>
                        <Badge 
                          variant={integration.color === 'green' ? 'default' : 'destructive'}
                          className={integration.color === 'green' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {integration.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant={integration.status === 'Connected' ? 'outline' : 'default'}
                    className="w-full"
                  >
                    {integration.status === 'Connected' ? 'Configure' : 'Connect'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-600" />
                  Notification Channels
                </CardTitle>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-green-600" />
                    <div>
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Browser and mobile push alerts</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-purple-600" />
                    <div>
                      <Label>Slack Integration</Label>
                      <p className="text-sm text-muted-foreground">Send alerts to Slack channels</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications.slack}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, slack: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Alert Preferences
                </CardTitle>
                <CardDescription>Choose what events trigger notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'System outages and maintenance',
                  'Data processing errors',
                  'Security alerts and breaches',
                  'Performance threshold violations',
                  'User access changes',
                  'Backup completion status',
                  'API rate limit warnings',
                  'License usage alerts'
                ].map((alert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <Label className="text-sm">{alert}</Label>
                    <Switch defaultChecked={index < 4} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Performance */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-600" />
                  System Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">CPU Usage</span>
                    <span className="text-sm font-semibold text-emerald-600">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Memory</span>
                    <span className="text-sm font-semibold text-blue-600">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="text-sm font-semibold text-orange-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-600" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <Badge className="bg-green-100 text-green-800">127ms</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Uptime</span>
                  <Badge className="bg-green-100 text-green-800">99.9%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Error Rate</span>
                  <Badge className="bg-green-100 text-green-800">0.01%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Throughput</span>
                  <Badge variant="secondary">1.2K req/min</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-emerald-600" />
                  Cache & Storage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Redis Cache</Label>
                    <p className="text-sm text-muted-foreground">Enable distributed caching</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>CDN Acceleration</Label>
                    <p className="text-sm text-muted-foreground">Global content delivery</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Button variant="outline" className="w-full">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear Cache
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Data Management */}
        <TabsContent value="data" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-indigo-600" />
                  Data Sources
                </CardTitle>
                <CardDescription>Manage your data connections and sources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: 'PostgreSQL Production', status: 'Connected', type: 'Database' },
                    { name: 'AWS S3 Data Lake', status: 'Connected', type: 'Storage' },
                    { name: 'Snowflake DW', status: 'Syncing', type: 'Warehouse' },
                    { name: 'REST API Connector', status: 'Error', type: 'API' }
                  ].map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{source.name}</div>
                        <div className="text-sm text-muted-foreground">{source.type}</div>
                      </div>
                      <Badge 
                        variant={source.status === 'Connected' ? 'default' : source.status === 'Error' ? 'destructive' : 'secondary'}
                        className={source.status === 'Connected' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {source.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full">Add Data Source</Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Backup & Recovery
                </CardTitle>
                <CardDescription>Data protection and disaster recovery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automated Backups</Label>
                    <p className="text-sm text-muted-foreground">Daily incremental backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label htmlFor="retention">Retention Period (days)</Label>
                  <Input id="retention" type="number" placeholder="30" />
                </div>
                <div>
                  <Label>Last Backup</Label>
                  <p className="text-sm text-muted-foreground">Today at 3:00 AM UTC</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Restore
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-pink-600" />
                  Theme & Branding
                </CardTitle>
                <CardDescription>Customize the look and feel of your platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Theme Mode</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Primary Color</Label>
                  <div className="flex gap-2 mt-2">
                    {['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500', 'bg-red-500', 'bg-pink-500'].map((color, index) => (
                      <div key={index} className={`w-8 h-8 rounded-full ${color} cursor-pointer border-2 border-white shadow-md hover:scale-110 transition-transform`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="logo">Company Logo</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Drop your logo here or click to upload</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-pink-600" />
                  Layout & Navigation
                </CardTitle>
                <CardDescription>Configure interface layout and navigation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing and padding</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Sidebar Auto-collapse</Label>
                    <p className="text-sm text-muted-foreground">Auto-hide sidebar on small screens</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label>Dashboard Layout</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid Layout</SelectItem>
                      <SelectItem value="list">List Layout</SelectItem>
                      <SelectItem value="masonry">Masonry Layout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-yellow-600" />
                  Current Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-3xl font-bold text-yellow-600">$299<span className="text-sm text-muted-foreground">/month</span></p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Users</span>
                    <span className="text-sm font-semibold">247 / Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="text-sm font-semibold">1.2TB / 10TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">API Calls</span>
                    <span className="text-sm font-semibold">892K / 1M</span>
                  </div>
                </div>
                <Button className="w-full">Upgrade Plan</Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  Usage This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Data Processing</span>
                      <span className="text-sm font-semibold">$127.50</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Storage</span>
                      <span className="text-sm font-semibold">$45.00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">API Calls</span>
                      <span className="text-sm font-semibold">$22.75</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$195.25</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-yellow-600" />
                  Invoices & Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Next billing date</span>
                    <span className="text-sm font-semibold">Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Payment method</span>
                    <span className="text-sm font-semibold">•••• 4242</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoices
                  </Button>
                  <Button variant="outline" className="w-full">
                    Update Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Developer Tools */}
        <TabsContent value="developer" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-cyan-600" />
                  API Configuration
                </CardTitle>
                <CardDescription>Manage API keys and access tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Production API Key</div>
                      <div className="text-sm text-muted-foreground">••••••••••••••••1234</div>
                    </div>
                    <Button variant="outline" size="sm">Regenerate</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Development API Key</div>
                      <div className="text-sm text-muted-foreground">••••••••••••••••5678</div>
                    </div>
                    <Button variant="outline" size="sm">Regenerate</Button>
                  </div>
                </div>
                <Button className="w-full">Generate New API Key</Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-600" />
                  Development Environment
                </CardTitle>
                <CardDescription>Configure development tools and environments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Debug Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable detailed logging</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Sandbox Environment</Label>
                    <p className="text-sm text-muted-foreground">Isolated testing environment</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label>Webhook URL</Label>
                  <Input placeholder="https://your-app.com/webhook" />
                </div>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  View API Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-6 border-t">
        <Button variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset to Defaults
        </Button>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default SettingsPanel;
