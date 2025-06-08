
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plug, Calculator, GitBranch, Palette, Code, 
  Database, Download, History, Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TechnicalFeatures = () => {
  const [selectedConnector, setSelectedConnector] = useState('');
  const [customFormula, setCustomFormula] = useState('');
  const [reportVersion, setReportVersion] = useState('v1.0');
  const [brandColor, setBrandColor] = useState('#3b82f6');
  const { toast } = useToast();

  const connectors = [
    { id: 'shopify', name: 'Shopify', icon: '🛍️', status: 'active' },
    { id: 'hubspot', name: 'HubSpot', icon: '🎯', status: 'active' },
    { id: 'salesforce', name: 'Salesforce', icon: '☁️', status: 'available' },
    { id: 'stripe', name: 'Stripe', icon: '💳', status: 'active' },
    { id: 'google-analytics', name: 'Google Analytics', icon: '📊', status: 'available' },
    { id: 'mailchimp', name: 'MailChimp', icon: '📧', status: 'available' }
  ];

  const formulaTemplates = [
    { name: 'Customer Lifetime Value', formula: 'SUM(revenue) / COUNT(DISTINCT customers)' },
    { name: 'Conversion Rate', formula: '(conversions / visitors) * 100' },
    { name: 'Monthly Recurring Revenue', formula: 'SUM(subscription_value * active_months)' },
    { name: 'Churn Rate', formula: '(churned_customers / total_customers) * 100' }
  ];

  const reportVersions = [
    { version: 'v1.0', date: '2024-01-15', author: 'John Doe', changes: 'Initial report creation' },
    { version: 'v1.1', date: '2024-01-20', author: 'Jane Smith', changes: 'Added revenue breakdown' },
    { version: 'v1.2', date: '2024-01-25', author: 'Mike Johnson', changes: 'Updated data sources' },
    { version: 'v2.0', date: '2024-02-01', author: 'Sarah Wilson', changes: 'Major restructure' }
  ];

  const connectDataSource = () => {
    if (selectedConnector) {
      toast({
        title: "Data Source Connected",
        description: `Successfully connected to ${connectors.find(c => c.id === selectedConnector)?.name}`,
      });
    }
  };

  const saveFormula = () => {
    if (customFormula.trim()) {
      toast({
        title: "Custom Formula Saved",
        description: "Formula has been added to your calculation library",
      });
      setCustomFormula('');
    }
  };

  const revertToVersion = (version: string) => {
    setReportVersion(version);
    toast({
      title: "Version Restored",
      description: `Report reverted to ${version}`,
    });
  };

  const updateBranding = () => {
    toast({
      title: "Branding Updated",
      description: "White-label customization applied successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* One-Click Data Connectors */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plug className="h-5 w-5 text-green-500" />
              <span>Data Connectors</span>
            </CardTitle>
            <CardDescription>Pre-built integrations for popular tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selectedConnector} onValueChange={setSelectedConnector}>
              <SelectTrigger>
                <SelectValue placeholder="Select data source" />
              </SelectTrigger>
              <SelectContent>
                {connectors.map((connector) => (
                  <SelectItem key={connector.id} value={connector.id}>
                    <div className="flex items-center space-x-2">
                      <span>{connector.icon}</span>
                      <span>{connector.name}</span>
                      <Badge variant={connector.status === 'active' ? 'default' : 'outline'}>
                        {connector.status}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={connectDataSource} className="w-full">
              <Database className="h-4 w-4 mr-2" />
              Connect Data Source
            </Button>
            <div className="grid grid-cols-3 gap-2">
              {connectors.slice(0, 6).map((connector) => (
                <div key={connector.id} className="text-center p-2 border rounded-lg hover:bg-muted cursor-pointer">
                  <div className="text-lg">{connector.icon}</div>
                  <div className="text-xs font-medium">{connector.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Custom Calculation Engine */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              <span>Calculation Engine</span>
            </CardTitle>
            <CardDescription>Create complex custom formulas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={customFormula}
              onChange={(e) => setCustomFormula(e.target.value)}
              placeholder="Enter custom formula (e.g., SUM(revenue) / COUNT(customers))"
              className="min-h-20"
            />
            <Button onClick={saveFormula} className="w-full">
              <Zap className="h-4 w-4 mr-2" />
              Save Formula
            </Button>
            <div className="space-y-2">
              <span className="text-sm font-medium">Formula Templates:</span>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {formulaTemplates.map((template, index) => (
                  <div key={index} className="p-2 bg-muted rounded text-xs cursor-pointer hover:bg-muted/80"
                       onClick={() => setCustomFormula(template.formula)}>
                    <div className="font-medium">{template.name}</div>
                    <div className="text-muted-foreground">{template.formula}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Version Control */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GitBranch className="h-5 w-5 text-purple-500" />
              <span>Version Control</span>
            </CardTitle>
            <CardDescription>Track changes and revert reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Version:</span>
              <Badge>{reportVersion}</Badge>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {reportVersions.map((version) => (
                <div key={version.version} className="flex items-center justify-between p-2 border rounded">
                  <div>
                    <div className="text-sm font-medium">{version.version}</div>
                    <div className="text-xs text-muted-foreground">{version.date} by {version.author}</div>
                    <div className="text-xs">{version.changes}</div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => revertToVersion(version.version)}
                  >
                    <History className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* White-label Options */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-orange-500" />
              <span>White-label Customization</span>
            </CardTitle>
            <CardDescription>Rebrand the platform for your customers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Primary Brand Color</label>
              <div className="flex space-x-2">
                <Input
                  type="color"
                  value={brandColor}
                  onChange={(e) => setBrandColor(e.target.value)}
                  className="w-16 h-10"
                />
                <Input
                  value={brandColor}
                  onChange={(e) => setBrandColor(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Logo</label>
              <div className="border-2 border-dashed border-muted rounded-lg p-4 text-center">
                <div className="text-muted-foreground">
                  <Download className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Upload your logo</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Custom Domain</label>
              <Input placeholder="analytics.yourcompany.com" />
            </div>
            <Button onClick={updateBranding} className="w-full">
              <Code className="h-4 w-4 mr-2" />
              Apply Branding
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalFeatures;
