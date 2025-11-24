import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDashboardStats, mockSchedule, mockFees, mockStudent } from "@/lib/mockData";
import { BookOpen, GraduationCap, DollarSign, Clock, ArrowRight, Calendar, Receipt, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const navigate = useNavigate();
  const { totalCredits, currentGPA, balanceDue, nextClass } = mockDashboardStats;

  const upcomingClasses = mockSchedule.slice(0, 3);
  const totalFees = mockFees.reduce((sum, fee) => sum + fee.amount, 0);
  const paidFees = mockFees
    .filter(fee => fee.status === "Paid")
    .reduce((sum, fee) => sum + fee.amount, 0);
  const feePercentage = (paidFees / totalFees) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        
        <main className="p-6 pb-24 lg:pb-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {mockStudent.name.split(' ')[0]}!</h1>
              <p className="text-muted-foreground mt-1">
                {mockStudent.program} · Year {mockStudent.year} · {mockStudent.semester}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Enrolled Credits"
                value={totalCredits}
                subtitle="of 18 max credits"
                icon={BookOpen}
                trend={{ value: "+3 this semester", positive: true }}
              />
              <MetricCard
                title="Current GPA"
                value={currentGPA.toFixed(2)}
                subtitle="Keep up the great work!"
                icon={GraduationCap}
                trend={{ value: "+0.15 from last sem", positive: true }}
              />
              <MetricCard
                title="Balance Due"
                value={`$${balanceDue.toLocaleString()}`}
                subtitle="Due Feb 15, 2025"
                icon={DollarSign}
              />
              <MetricCard
                title="Next Class"
                value={nextClass.time}
                subtitle={nextClass.subject}
                icon={Clock}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Get started with common tasks</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <Button 
                    onClick={() => navigate("/register")}
                    className="h-auto py-6 flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">Start Registration</span>
                    </div>
                    <span className="text-xs opacity-90">Add courses for Spring 2025</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                  
                  <Button 
                    onClick={() => navigate("/fees")}
                    variant="secondary"
                    className="h-auto py-6 flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Receipt className="h-5 w-5" />
                      <span className="font-semibold">View Invoices</span>
                    </div>
                    <span className="text-xs opacity-90">Check payment status</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                  
                  <Button 
                    onClick={() => navigate("/schedule")}
                    variant="outline"
                    className="h-auto py-6 flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-semibold">View Schedule</span>
                    </div>
                    <span className="text-xs opacity-90">Weekly timetable</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="h-auto py-6 flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">Contact Advisor</span>
                    </div>
                    <span className="text-xs opacity-90">Get academic support</span>
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fee Overview</CardTitle>
                  <CardDescription>Payment progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Total Fees</span>
                      <span className="font-medium">${totalFees.toLocaleString()}</span>
                    </div>
                    <Progress value={feePercentage} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary">{feePercentage.toFixed(0)}% Paid</span>
                      <span className="text-muted-foreground">${paidFees.toLocaleString()} paid</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t">
                    {mockFees.slice(0, 2).map((fee) => (
                      <div key={fee.invoiceId} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{fee.invoiceId}</p>
                          <p className="text-xs text-muted-foreground">{fee.description}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          fee.status === "Paid" 
                            ? "bg-primary/10 text-primary" 
                            : fee.status === "Due"
                            ? "bg-accent/10 text-accent"
                            : "bg-destructive/10 text-destructive"
                        }`}>
                          {fee.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => navigate("/fees")} 
                    variant="outline" 
                    className="w-full"
                  >
                    View All Invoices
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
                <CardDescription>Your schedule for the next few days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((cls, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                        <span className="text-xs font-medium text-primary">{cls.day.slice(0, 3)}</span>
                        <span className="text-lg font-bold text-primary">
                          {cls.time.split('-')[0].split(':')[0]}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold">{cls.subject}</h4>
                        <p className="text-sm text-muted-foreground">{cls.time}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm font-medium">{cls.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => navigate("/schedule")}
                  variant="outline" 
                  className="w-full mt-4"
                >
                  View Full Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
}
