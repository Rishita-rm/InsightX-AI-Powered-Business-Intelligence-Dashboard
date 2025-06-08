
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Globe, Network, BarChart3, MapPin, Layers, Play, Pause } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter } from 'recharts';

const AdvancedVisualizations = () => {
  const [selectedChart, setSelectedChart] = useState('3d');
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamData, setStreamData] = useState(generateStreamData());

  function generateStreamData() {
    return Array.from({ length: 20 }, (_, i) => ({
      name: `Point ${i + 1}`,
      value: Math.floor(Math.random() * 100),
      timestamp: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString()
    }));
  }

  const toggleStreaming = () => {
    setIsStreaming(!isStreaming);
    if (!isStreaming) {
      const interval = setInterval(() => {
        setStreamData(prev => [
          ...prev.slice(1),
          {
            name: `Point ${prev.length + 1}`,
            value: Math.floor(Math.random() * 100),
            timestamp: new Date().toLocaleTimeString()
          }
        ]);
      }, 2000);
      
      setTimeout(() => {
        clearInterval(interval);
        setIsStreaming(false);
      }, 30000);
    }
  };

  const geoData = [
    { city: "New York", lat: 40.7128, lng: -74.0060, value: 450, color: "#ff4444" },
    { city: "London", lat: 51.5074, lng: -0.1278, value: 320, color: "#44ff44" },
    { city: "Tokyo", lat: 35.6762, lng: 139.6503, value: 280, color: "#4444ff" },
    { city: "Sydney", lat: -33.8688, lng: 151.2093, value: 180, color: "#ffff44" }
  ];

  const networkData = [
    { id: "user1", group: "customers", connections: 15 },
    { id: "user2", group: "partners", connections: 8 },
    { id: "user3", group: "employees", connections: 25 },
    { id: "user4", group: "customers", connections: 12 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Advanced Visualizations</h3>
        <Select value={selectedChart} onValueChange={setSelectedChart}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3d">3D Charts</SelectItem>
            <SelectItem value="realtime">Real-time Streaming</SelectItem>
            <SelectItem value="geo">Geospatial Maps</SelectItem>
            <SelectItem value="network">Network Diagrams</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 3D Visualization */}
        {selectedChart === '3d' && (
          <Card className="lg:col-span-2 glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="h-5 w-5 text-purple-500" />
                <span>Interactive 3D Charts</span>
              </CardTitle>
              <CardDescription>Multi-dimensional data visualization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-200">
                <div className="text-center space-y-2">
                  <Layers className="h-12 w-12 mx-auto text-purple-400" />
                  <p className="text-purple-600 font-medium">3D Visualization Engine</p>
                  <p className="text-sm text-muted-foreground">Interactive cube, sphere, and surface plots</p>
                  <Badge className="bg-purple-100 text-purple-700">WebGL Powered</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Real-time Streaming */}
        {selectedChart === 'realtime' && (
          <Card className="lg:col-span-2 glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-green-500" />
                <span>Real-time Streaming Dashboard</span>
                <Badge variant={isStreaming ? "default" : "secondary"}>
                  {isStreaming ? "Live" : "Paused"}
                </Badge>
              </CardTitle>
              <CardDescription>Live data updates without refresh</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={toggleStreaming} className="w-full">
                {isStreaming ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Pause Stream
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start Stream
                  </>
                )}
              </Button>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={streamData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Geospatial Maps */}
        {selectedChart === 'geo' && (
          <Card className="lg:col-span-2 glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <span>Geospatial Analytics</span>
              </CardTitle>
              <CardDescription>Location-based analytics with heat maps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg relative overflow-hidden border-2 border-dashed border-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 mx-auto text-blue-400" />
                    <p className="text-blue-600 font-medium">Interactive World Map</p>
                    <p className="text-sm text-muted-foreground">Heat maps, choropleth, and marker clustering</p>
                  </div>
                </div>
                {geoData.map((point, index) => (
                  <div
                    key={index}
                    className="absolute w-3 h-3 rounded-full animate-pulse"
                    style={{
                      backgroundColor: point.color,
                      left: `${20 + index * 15}%`,
                      top: `${30 + index * 10}%`
                    }}
                    title={`${point.city}: ${point.value}`}
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {geoData.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: point.color }} />
                    <span className="text-sm">{point.city}: {point.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Network Diagrams */}
        {selectedChart === 'network' && (
          <Card className="lg:col-span-2 glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Network className="h-5 w-5 text-orange-500" />
                <span>Network & Relationship Diagrams</span>
              </CardTitle>
              <CardDescription>Visualize connections between data points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg relative overflow-hidden border-2 border-dashed border-orange-200">
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    {/* Connection lines */}
                    <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                    <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                    <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                    <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                  </svg>
                  {networkData.map((node, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white text-xs font-bold animate-pulse"
                      style={{
                        left: index % 2 === 0 ? "20%" : "70%",
                        top: index < 2 ? "20%" : "70%"
                      }}
                    >
                      {node.connections}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-orange-600 font-medium text-center">Interactive Network Graph</p>
                  <p className="text-xs text-muted-foreground text-center">Drag nodes, filter relationships, zoom & pan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdvancedVisualizations;
