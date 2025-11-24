import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterWizard from "@/components/register/RegisterWizard";

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
                <CardDescription>Follow the steps to complete course enrollment</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterWizard />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
}
