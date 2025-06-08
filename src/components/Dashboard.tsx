
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadialBarChart, RadialBar } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Activity, ArrowUpRight, ArrowDownRight, Eye, Zap, Clock, Award, Briefcase, Globe, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const Dashboard = () => {
  // Enhanced mock data for demonstration
  const salesData = [
    { month: 'Jan', sales: 65000, profit: 28000, growth: 12, customers: 1200 },
    { month: 'Feb', sales: 78000, profit: 35000, growth: 18, customers: 1400 },
    { month: 'Mar', sales: 92000, profit: 42000, growth: 15, customers: 1650 },
    { month: 'Apr', sales: 85000, profit: 38000, growth: 8, customers: 1580 },
    { month: 'May', sales: 105000, profit: 52000, growth: 22, customers: 1820 },
    { month: 'Jun', sales: 118000, profit: 61000, growth: 25, customers: 2100 },
  ];

  const categoryData = [
    { name: 'Technology', value: 42, color: '#3b82f6', trend: '+12%' },
    { name: 'Healthcare', value: 28, color: '#8b5cf6', trend: '+8%' },
    { name: 'Finance', value: 18, color: '#10b981', trend: '+15%' },
    { name: 'Retail', value: 12, color: '#f59e0b', trend: '+5%' },
  ];

  const performanceData = [
    { name: 'Q1', value: 85, fill: '#3b82f6' },
    { name: 'Q2', value: 92, fill: '#8b5cf6' },
    { name: 'Q3', value: 78, fill: '#10b981' },
    { name: 'Q4', value: 96, fill: '#f59e0b' },
  ];

  const metrics = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      changeValue: "+$284K",
      trend: "up",
      icon: DollarSign,
      period: "vs last quarter",
      bgGradient: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Active Customers",
      value: "12,584",
      change: "+8.2%",
      changeValue: "+956",
      trend: "up",
      icon: Users,
      period: "vs last month",
      bgGradient: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      title: "Conversion Rate",
      value: "4.87%",
      change: "+0.4%",
      changeValue: "+0.4pp",
      trend: "up",
      icon: Target,
      period: "vs last month",
      bgGradient: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Avg. Session Duration",
      value: "3m 24s",
      change: "-2.1%",
      changeValue: "-4s",
      trend: "down",
      icon: Clock,
      period: "vs last week",
      bgGradient: "from-amber-500 to-amber-600",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    },
  ];

  const quickActions = [
    { title: "Generate Report", icon: BarChart3, color: "blue" },
    { title: "View Analytics", icon: Eye, color: "emerald" },
    { title: "Export Data", icon: Globe, color: "purple" },
    { title: "Settings", icon: Target, color: "amber" },
  ];

  const recentActivity = [
    { action: "New dataset uploaded", time: "2 minutes ago", type: "upload", status: "success" },
    { action: "Monthly report generated", time: "1 hour ago", type: "report", status: "completed" },
    { action: "API integration completed", time: "3 hours ago", type: "integration", status: "success" },
    { action: "Dashboard shared with team", time: "5 hours ago", type: "share", status: "pending" },
    { action: "Data backup completed", time: "1 day ago", type: "backup", status: "success" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 space-y-8">
      {/* Enhanced Header Section with Brand */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl" />
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h1 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                      InsightX
                    </h1>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1 text-sm font-bold">
                      Pro
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-1">
                    Business Intelligence Dashboard
                  </h2>
                  <p className="text-lg text-slate-600 font-medium">
                    Advanced analytics and real-time business insights powered by AI
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-semibold">
                  <Zap className="w-4 h-4 mr-2" />
                  Live Data
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  Last updated: 2 min ago
                </Badge>
              </div>
              <div className="flex gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    className="bg-white/50 hover:bg-white/80 transition-all duration-300 border-slate-200/60"
                  >
                    <action.icon className="w-4 h-4 mr-2" />
                    {action.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.trend === "up";
          return (
            <Card key={index} className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      {metric.title}
                    </CardTitle>
                    <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
                  </div>
                  <div className={`w-14 h-14 ${metric.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${metric.iconColor}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isPositive ? (
                      <ArrowUpRight className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`text-sm font-bold ${
                      isPositive ? "text-emerald-600" : "text-red-500"
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      ({metric.changeValue})
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs text-slate-600 bg-slate-50">
                    {metric.period}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-12">
        <Card className="lg:col-span-8 bg-white/70 backdrop-blur-xl border-white/20 shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  Revenue Analytics
                </CardTitle>
                <CardDescription className="text-slate-600 font-medium">
                  Monthly performance with comprehensive growth indicators and trend analysis
                </CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 font-semibold">6 Months</Badge>
                <Button size="sm" variant="outline" className="bg-white/50">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                <XAxis 
                  dataKey="month" 
                  stroke="#64748b"
                  fontSize={12}
                  fontWeight={500}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                  fontWeight={500}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}K`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '12px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    backdropFilter: 'blur(10px)'
                  }}
                  formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'sales' ? 'Revenue' : 'Profit']}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="url(#salesGradient)"
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#3b82f6' }}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fill="url(#profitGradient)"
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#8b5cf6' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4 bg-white/70 backdrop-blur-xl border-white/20 shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <PieChartIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-slate-900">Market Distribution</CardTitle>
                <CardDescription className="text-slate-600">Revenue by sector</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={85}
                  paddingAngle={6}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Market Share']}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-slate-50/50 hover:bg-slate-100/50 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full shadow-sm" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                    <Badge variant="outline" className="text-xs text-emerald-600 bg-emerald-50 border-emerald-200">
                      {item.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-1 bg-white/70 backdrop-blur-xl border-white/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-slate-900">Performance</CardTitle>
                <CardDescription className="text-slate-600">Quarterly overview</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={performanceData}>
                <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Performance']}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-white/70 backdrop-blur-xl border-white/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Recent Activity</CardTitle>
                  <CardDescription className="text-slate-600">Latest system updates and user actions</CardDescription>
                </div>
              </div>
              <Button size="sm" variant="outline" className="bg-white/50">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-100/50 transition-all duration-200 group">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    activity.status === 'success' ? 'bg-emerald-500' : 
                    activity.status === 'completed' ? 'bg-blue-500' : 
                    activity.status === 'pending' ? 'bg-amber-500' : 'bg-slate-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {activity.action}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">{activity.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs capitalize ${
                        activity.status === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        activity.status === 'completed' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                        activity.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
