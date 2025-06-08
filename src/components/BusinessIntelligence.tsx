
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, Calendar, Shield, Filter, Database, 
  Building, Clock, Mail, Download, BarChart3
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BusinessIntelligence = () => {
  const [reportSchedule, setReportSchedule] = useState('weekly');
  const [selectedTenant, setSelectedTenant] = useState('tenant1');
  const [filterType, setFilterType] = useState('date');
  const [dataQuality, setDataQuality] = useState(92);
  const { toast } = useToast();

  const scheduledReports = [
    { name: 'Weekly Sales Summary', frequency: 'Weekly', recipients: 'sales@company.com', nextRun: '2024-02-15' },
    { name: 'Monthly Revenue Report', frequency: 'Monthly', recipients: 'executives@company.com', nextRun: '2024-03-01' },
    { name: 'Daily KPI Dashboard', frequency: 'Daily', recipients: 'managers@company.com', nextRun: '2024-02-08' }
  ];

  const tenants = [
    { id: 'tenant1', name: 'Acme Corp', users: 45, storage: '2.3GB' },
    { id: 'tenant2', name: 'TechStart Inc', users: 12, storage: '890MB' },
    { id: 'tenant3', name: 'Enterprise Ltd', users: 156, storage: '8.7GB' }
  ];

  const dataLineage = [
    { source: 'Salesforce CRM', table: 'accounts', quality: 95, lastSync: '2 min ago' },
    { source: 'Google Analytics', table: 'sessions', quality: 88, lastSync: '5 min ago' },
    { source: 'Stripe Payments', table: 'transactions', quality: 97, lastSync: '1 min ago' },
    { source: 'HubSpot Marketing', table: 'campaigns', quality: 82, lastSync: '8 min ago' }
  ];

  const scheduleReport = () => {
    toast({
      title: "Report Scheduled",
      description: `Automated ${reportSchedule} report has been set up`,
    });
  };

  const switchTenant = () => {
    const tenant = tenants.find(t => t.id === selectedTenant);
    toast({
      title: "Tenant Switched",
      description: `Now viewing data for ${tenant?.name}`,
    });
  };

  const exportData = (format: string) => {
    toast({
      title: "Export Started",
      description: `Preparing ${format} export...`,
    });
  };

  const runDataQualityCheck = () => {
    setDataQuality(Math.floor(Math.random() * 20) + 80);
    toast({
      title: "Data Quality Check Complete",
      description: `Overall quality score: ${dataQuality}%`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Automated Report Generation */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-500" />
              <span>Automated Reports</span>
            </CardTitle>
            <CardDescription>Schedule and email reports automatically</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={reportSchedule} onValueChange={setReportSchedule}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={scheduleReport} className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {scheduledReports.map((report, index) => (
                <div key={index} className="p-2 border rounded-lg space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium">{report.name}</span>
                    <Badge variant="outline">{report.frequency}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div>📧 {report.recipients}</div>
                    <div>⏰ Next: {report.nextRun}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Governance */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-green-500" />
              <span>Data Governance</span>
            </CardTitle>
            <CardDescription>Track lineage and quality scores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Data Quality</span>
              <div className="flex items-center space-x-2">
                <Badge variant={dataQuality >= 90 ? 'default' : dataQuality >= 80 ? 'secondary' : 'destructive'}>
                  {dataQuality}%
                </Badge>
                <Button size="sm" variant="outline" onClick={runDataQualityCheck}>
                  <Shield className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Separator />
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {dataLineage.map((item, index) => (
                <div key={index} className="p-2 border rounded space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.source}</span>
                    <Badge variant={item.quality >= 90 ? 'default' : 'secondary'}>
                      {item.quality}%
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div>📊 {item.table}</div>
                    <div>🔄 {item.lastSync}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Multi-tenant Architecture */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building className="h-5 w-5 text-purple-500" />
              <span>Multi-tenant Management</span>
            </CardTitle>
            <CardDescription>Separate environments for different clients</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selectedTenant} onValueChange={setSelectedTenant}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tenants.map((tenant) => (
                  <SelectItem key={tenant.id} value={tenant.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{tenant.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {tenant.users} users
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={switchTenant} className="w-full">
              Switch Environment
            </Button>
            <div className="space-y-2">
              {tenants.map((tenant) => (
                <div key={tenant.id} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <div className="text-sm font-medium">{tenant.name}</div>
                    <div className="text-xs text-muted-foreground">{tenant.users} users • {tenant.storage}</div>
                  </div>
                  <Badge variant={tenant.id === selectedTenant ? 'default' : 'outline'}>
                    {tenant.id === selectedTenant ? 'Active' : 'Available'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advanced Filtering */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-orange-500" />
              <span>Advanced Filtering</span>
            </CardTitle>
            <CardDescription>Date ranges, drill-downs, cross-filtering</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date Range</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="region">Region</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="custom">Custom Filter</SelectItem>
              </SelectContent>
            </Select>
            
            {filterType === 'date' && (
              <div className="space-y-2">
                <Input type="date" defaultValue="2024-01-01" />
                <Input type="date" defaultValue="2024-02-07" />
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-2">
              <Button size="sm" variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                Last 7 days
              </Button>
              <Button size="sm" variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                Last 30 days
              </Button>
              <Button size="sm" variant="outline">
                <BarChart3 className="h-3 w-3 mr-1" />
                Drill Down
              </Button>
              <Button size="sm" variant="outline">
                <Filter className="h-3 w-3 mr-1" />
                Cross Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Export Options */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-indigo-500" />
              <span>Data Export Options</span>
            </CardTitle>
            <CardDescription>Export data in multiple formats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button onClick={() => exportData('PDF')} variant="outline" className="h-20 flex-col">
                <FileText className="h-6 w-6 mb-2" />
                <span>PDF Report</span>
              </Button>
              <Button onClick={() => exportData('Excel')} variant="outline" className="h-20 flex-col">
                <div className="text-green-600 text-xl mb-2">📊</div>
                <span>Excel Export</span>
              </Button>
              <Button onClick={() => exportData('PowerPoint')} variant="outline" className="h-20 flex-col">
                <div className="text-orange-600 text-xl mb-2">📋</div>
                <span>PowerPoint</span>
              </Button>
              <Button onClick={() => exportData('CSV')} variant="outline" className="h-20 flex-col">
                <div className="text-blue-600 text-xl mb-2">📄</div>
                <span>CSV Data</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessIntelligence;
