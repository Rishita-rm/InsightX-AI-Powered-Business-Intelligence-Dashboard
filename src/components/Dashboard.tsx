
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadialBarChart, RadialBar } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Activity, ArrowUpRight, ArrowDownRight, Eye, Zap, Clock, Award, Briefcase, Globe, BarChart3, PieChart as PieChartIcon, Sparkles, Brain, Shield, Rocket } from "lucide-react";

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
      bgGradient: "from-emerald-400 via-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      glowColor: "shadow-emerald-500/25"
    },
    {
      title: "Active Customers",
      value: "12,584",
      change: "+8.2%",
      changeValue: "+956",
      trend: "up",
      icon: Users,
      period: "vs last month",
      bgGradient: "from-blue-400 via-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      glowColor: "shadow-blue-500/25"
    },
    {
      title: "Conversion Rate",
      value: "4.87%",
      change: "+0.4%",
      changeValue: "+0.4pp",
      trend: "up",
      icon: Target,
      period: "vs last month",
      bgGradient: "from-purple-400 via-purple-500 to-purple-600",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      glowColor: "shadow-purple-500/25"
    },
    {
      title: "Avg. Session Duration",
      value: "3m 24s",
      change: "-2.1%",
      changeValue: "-4s",
      trend: "down",
      icon: Clock,
      period: "vs last week",
      bgGradient: "from-amber-400 via-amber-500 to-amber-600",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      glowColor: "shadow-amber-500/25"
    },
  ];

  const quickActions = [
    { title: "AI Analytics", icon: Brain, color: "from-violet-500 to-purple-600", textColor: "text-violet-600" },
    { title: "Live Reports", icon: BarChart3, color: "from-blue-500 to-cyan-600", textColor: "text-blue-600" },
    { title: "Export Data", icon: Globe, color: "from-emerald-500 to-teal-600", textColor: "text-emerald-600" },
    { title: "Smart Insights", icon: Sparkles, color: "from-amber-500 to-orange-600", textColor: "text-amber-600" },
  ];

  const recentActivity = [
    { action: "AI discovered new revenue pattern", time: "2 minutes ago", type: "ai", status: "success", icon: Brain },
    { action: "Q3 performance report generated", time: "1 hour ago", type: "report", status: "completed", icon: BarChart3 },
    { action: "Real-time dashboard synchronized", time: "3 hours ago", type: "sync", status: "success", icon: Zap },
    { action: "Team collaboration session started", time: "5 hours ago", type: "collaboration", status: "active", icon: Users },
    { action: "Automated backup completed", time: "1 day ago", type: "backup", status: "success", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,200,255,0.1),rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="relative z-10 p-6 space-y-8">
        {/* Revolutionary Header Design */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative bg-white/80 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-pulse shadow-lg" />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                      Business Intelligence Dashboard
                    </h1>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-1.5 text-sm font-semibold shadow-lg">
                        <Zap className="w-4 h-4 mr-2" />
                        AI-Powered
                      </Badge>
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1.5 text-sm font-semibold shadow-lg">
                        <Shield className="w-4 h-4 mr-2" />
                        Enterprise Ready
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
                  Transform your data into actionable insights with our next-generation analytics platform. 
                  Powered by artificial intelligence and designed for the modern enterprise.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    size="lg"
                    className={`bg-gradient-to-r ${action.color} text-white border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-6 py-3`}
                  >
                    <action.icon className="w-5 h-5 mr-2" />
                    {action.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Metrics Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.trend === "up";
            return (
              <Card key={index} className={`group relative overflow-hidden bg-white/80 backdrop-blur-2xl border-white/30 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 ${metric.glowColor} hover:shadow-2xl`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgGradient} opacity-0 group-hover:opacity-10 transition-all duration-700`} />
                
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-1000" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-1000" />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                        {metric.title}
                      </CardTitle>
                      <div className="text-3xl font-bold text-slate-900 group-hover:scale-105 transition-transform duration-300">
                        {metric.value}
                      </div>
                    </div>
                    <div className={`w-16 h-16 ${metric.iconBg} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <Icon className={`w-8 h-8 ${metric.iconColor} relative z-10`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                        isPositive ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"
                      }`}>
                        {isPositive ? (
                          <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-bold ${
                          isPositive ? "text-emerald-600" : "text-red-500"
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {metric.changeValue}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs text-slate-600 bg-slate-50/80 border-slate-200">
                      {metric.period}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revolutionary Charts Section */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-12">
          <Card className="lg:col-span-8 bg-white/80 backdrop-blur-2xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="pb-6 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-t-xl" />
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    Revenue Analytics
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs">
                      Live Data
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-medium text-base">
                    Real-time performance metrics with AI-powered trend analysis and predictive insights
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 font-semibold">
                    6 Months
                  </Badge>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Eye className="w-4 h-4 mr-2" />
                    Deep Dive
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.8} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#64748b"
                    fontSize={12}
                    fontWeight={600}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#64748b"
                    fontSize={12}
                    fontWeight={600}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value/1000}K`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      borderRadius: '16px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(20px)'
                    }}
                    formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'sales' ? 'Revenue' : 'Profit']}
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#3b82f6"
                    strokeWidth={4}
                    fill="url(#salesGradient)"
                    dot={{ fill: '#3b82f6', strokeWidth: 3, r: 8 }}
                    activeDot={{ r: 10, fill: '#3b82f6', stroke: '#ffffff', strokeWidth: 3 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#8b5cf6"
                    strokeWidth={4}
                    fill="url(#profitGradient)"
                    dot={{ fill: '#8b5cf6', strokeWidth: 3, r: 8 }}
                    activeDot={{ r: 10, fill: '#8b5cf6', stroke: '#ffffff', strokeWidth: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 bg-white/80 backdrop-blur-2xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="pb-6 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-xl" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <PieChartIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Market Distribution</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">Real-time sector analysis</CardDescription>
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
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={8}
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
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {categoryData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 transition-all duration-300 group/item border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-5 h-5 rounded-full shadow-lg group-hover/item:scale-110 transition-transform duration-300" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-bold text-slate-700 group-hover/item:text-slate-900 transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                      <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                        {item.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Performance and Activity sections */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <Card className="lg:col-span-1 bg-white/80 backdrop-blur-2xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Performance Score</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">Quarterly benchmarks</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="90%" data={performanceData}>
                  <RadialBar dataKey="value" cornerRadius={15} fill="#8884d8" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Performance']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-white/80 backdrop-blur-2xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-xl" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-900">Smart Activity Feed</CardTitle>
                    <CardDescription className="text-slate-600 font-medium">AI-powered insights and system updates</CardDescription>
                  </div>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-slate-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group/activity border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover/activity:scale-110 transition-all duration-300 ${
                        activity.status === 'success' ? 'bg-gradient-to-br from-emerald-500 to-teal-500' : 
                        activity.status === 'completed' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 
                        activity.status === 'active' ? 'bg-gradient-to-br from-amber-500 to-orange-500' : 
                        'bg-gradient-to-br from-slate-500 to-slate-600'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 group-hover/activity:text-blue-600 transition-colors leading-relaxed">
                          {activity.action}
                        </p>
                        <p className="text-xs text-slate-500 font-semibold mt-1">{activity.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          className={`text-xs font-bold capitalize shadow-sm ${
                            activity.status === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                            activity.status === 'completed' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                            activity.status === 'active' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                            'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {activity.status}
                        </Badge>
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover/activity:opacity-100 transition-all duration-300 hover:bg-blue-50">
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
