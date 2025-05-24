
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Car, Users, TrendingUp, MapPin, Clock, DollarSign, Settings, Bell, Search } from "lucide-react";

const Index = () => {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,247",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Active Vehicles",
      value: "89",
      change: "+3%",
      icon: Car,
      color: "text-green-600"
    },
    {
      title: "Total Users",
      value: "2,156",
      change: "+8%",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Revenue",
      value: "$45,230",
      change: "+15%",
      icon: DollarSign,
      color: "text-yellow-600"
    }
  ];

  const recentBookings = [
    {
      id: "#VB-001",
      customer: "John Smith",
      vehicle: "Toyota Camry",
      date: "2024-05-25",
      status: "Active",
      amount: "$250"
    },
    {
      id: "#VB-002",
      customer: "Sarah Johnson",
      vehicle: "Honda Civic",
      date: "2024-05-24",
      status: "Completed",
      amount: "$180"
    },
    {
      id: "#VB-003",
      customer: "Mike Davis",
      vehicle: "BMW X5",
      date: "2024-05-24",
      status: "Pending",
      amount: "$450"
    },
    {
      id: "#VB-004",
      customer: "Emily Wilson",
      vehicle: "Mercedes C-Class",
      date: "2024-05-23",
      status: "Active",
      amount: "$320"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  VehicleAdmin
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h2>
          <p className="text-gray-600">Here's what's happening with your vehicle booking platform today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-md border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Bookings
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardTitle>
                <CardDescription>Latest vehicle booking activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {booking.customer.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{booking.customer}</p>
                          <p className="text-sm text-gray-600">{booking.vehicle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {booking.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{booking.amount}</p>
                        <p className="text-sm text-gray-600">{booking.id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your platform efficiently</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" size="lg">
                  <Car className="mr-2 h-4 w-4" />
                  Add New Vehicle
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <MapPin className="mr-2 h-4 w-4" />
                  Track Vehicles
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="h-8 w-8" />
                  <Badge className="bg-white/20 text-white">Live</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">System Status</h3>
                <p className="text-blue-100 text-sm mb-4">All systems operational</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Server Uptime</span>
                    <span>99.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Sessions</span>
                    <span>156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <span>120ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fleet Overview */}
        <div className="mt-8">
          <Card className="bg-white/70 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle>Fleet Overview</CardTitle>
              <CardDescription>Current status of your vehicle fleet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                  <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-green-900">Available</h4>
                  <p className="text-2xl font-bold text-green-700">42</p>
                  <p className="text-sm text-green-600">Ready for booking</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-900">In Use</h4>
                  <p className="text-2xl font-bold text-blue-700">38</p>
                  <p className="text-sm text-blue-600">Currently booked</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="h-12 w-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-yellow-900">Maintenance</h4>
                  <p className="text-2xl font-bold text-yellow-700">9</p>
                  <p className="text-sm text-yellow-600">Under service</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
