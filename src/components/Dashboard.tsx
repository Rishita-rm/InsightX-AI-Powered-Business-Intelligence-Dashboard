
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Dashboard = () => {
  // Enhanced mock data for demonstration
  const salesData = [
    { month: 'Jan', sales: 65000, profit: 28000, growth: 12 },
    { month: 'Feb', sales: 78000, profit: 35000, growth: 18 },
    { month: 'Mar', sales: 92000, profit: 42000, growth: 15 },
    { month: 'Apr', sales: 85000, profit: 38000, growth: 8 },
    { month: 'May', sales: 105000, profit: 52000, growth: 22 },
    { month: 'Jun', sales: 118000, profit: 61000, growth: 25 },
  ];

  const categoryData = [
    { name: 'Technology', value: 42, color: 'hsl(var(--chart-primary))' },
    { name: 'Healthcare', value: 28, color: 'hsl(var(--chart-secondary))' },
    { name: 'Finance', value: 18, color: 'hsl(var(--chart-accent))' },
    { name: 'Retail', value: 12, color: 'hsl(var(--chart-warning))' },
  ];

  const metrics = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      changeValue: "+$284K",
      trend: "up",
      icon: DollarSign,
      period: "vs last quarter"
    },
    {
      title: "Active Customers",
      value: "12,584",
      change: "+8.2%",
      changeValue: "+956",
      trend: "up",
      icon: Users,
      period: "vs last month"
    },
    {
      title: "Conversion Rate",
      value: "4.87%",
      change: "+0.4%",
      changeValue: "+0.4pp",
      trend: "up",
      icon: Target,
      period: "vs last month"
    },
    {
      title: "Avg. Session Duration",
      value: "3m 24s",
      change: "-2.1%",
      changeValue: "-4s",
      trend: "down",
      icon: Activity,
      period: "vs last week"
    },
  ];

  const recentActivity = [
    { action: "New dataset uploaded", time: "2 minutes ago", type: "upload" },
    { action: "Monthly report generated", time: "1 hour ago", type: "report" },
    { action: "API integration completed", time: "3 hours ago", type: "integration" },
    { action: "Dashboard shared with team", time: "5 hours ago", type: "share" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold gradient-text">Business Intelligence</h1>
          <p className="text-lg text-muted-foreground">Real-time insights and analytics dashboard</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-success border-success/20 bg-success/10">
            Live Data
          </Badge>
          <Badge variant="outline">Last updated: 2 min ago</Badge>
        </div>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.trend === "up";
          return (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-gradient-to-br from-card via-card to-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {metric.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                </div>
                <div className="rounded-full bg-primary/10 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {isPositive ? (
                      <ArrowUpRight className="h-4 w-4 text-success" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm font-semibold ${
                      isPositive ? "text-success" : "text-destructive"
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({metric.changeValue})
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{metric.period}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* Main Revenue Chart */}
        <Card className="lg:col-span-2 border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-semibold">Revenue Analytics</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-1">
                  Monthly performance with growth indicators
                </CardDescription>
              </div>
              <Badge variant="secondary">6 Months</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-accent))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-accent))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}K`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'sales' ? 'Revenue' : 'Profit']}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="hsl(var(--chart-primary))"
                  strokeWidth={3}
                  fill="url(#salesGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="hsl(var(--chart-accent))"
                  strokeWidth={3}
                  fill="url(#profitGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Market Distribution */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Market Share</CardTitle>
            <CardDescription>Revenue distribution by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Share']}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics Bar Chart */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">Monthly Performance Overview</CardTitle>
              <CardDescription>Comprehensive breakdown of key business metrics</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded bg-chart-primary" />
                <span>Revenue</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded bg-chart-accent" />
                <span>Profit</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={salesData} barGap={10}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value/1000}K`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'sales' ? 'Revenue' : 'Profit']}
              />
              <Bar 
                dataKey="sales" 
                fill="hsl(var(--chart-primary))" 
                radius={[4, 4, 0, 0]}
                opacity={0.9}
              />
              <Bar 
                dataKey="profit" 
                fill="hsl(var(--chart-accent))" 
                radius={[4, 4, 0, 0]}
                opacity={0.9}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activity Panel */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
          <CardDescription>Latest system updates and user actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
