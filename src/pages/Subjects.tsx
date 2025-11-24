import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";

export default function Subjects() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        
        <main className="p-6 pb-24 lg:pb-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">Subjects</h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="font-semibold">Algorithms</h2>
                <p className="text-sm text-muted-foreground">Introduction to algorithms and complexity.</p>
                <div className="mt-3 text-sm text-muted-foreground">Credits: 3</div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="font-semibold">Database Systems</h2>
                <p className="text-sm text-muted-foreground">Relational databases, SQL, and transactions.</p>
                <div className="mt-3 text-sm text-muted-foreground">Credits: 3</div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="font-semibold">Software Engineering</h2>
                <p className="text-sm text-muted-foreground">Software development life cycle and practices.</p>
                <div className="mt-3 text-sm text-muted-foreground">Credits: 2</div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="font-semibold">Operating Systems</h2>
                <p className="text-sm text-muted-foreground">Processes, threads, and resource management.</p>
                <div className="mt-3 text-sm text-muted-foreground">Credits: 3</div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="font-semibold">Networks</h2>
                <p className="text-sm text-muted-foreground">Computer networking fundamentals.</p>
                <div className="mt-3 text-sm text-muted-foreground">Credits: 2</div>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
}
