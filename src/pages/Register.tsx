import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Register() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        
        <main className="p-6 pb-24 lg:pb-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            <div>
              <h1 className="text-3xl font-bold">Course Registration</h1>
              <p className="text-muted-foreground mt-1">Complete your enrollment for Spring 2025</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Registration Wizard</CardTitle>
                <CardDescription>Multi-step registration flow coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This section will include a 5-step wizard for course registration including personal info,
                  subject selection, fees summary, schedule preview, and final review.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
}
