import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        
        <main className="p-6 pb-24 lg:pb-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">Schedule</h1>
<<<<<<< HEAD

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h2 className="text-lg font-semibold mb-2">Upcoming Classes</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between bg-muted/10 p-3 rounded">
                      <div>
                        <p className="font-medium">Algorithms - Lecture</p>
                        <p className="text-sm text-muted-foreground">Mon • 10:00 — 11:30 • Room A1</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Week 5</div>
                    </li>
                    <li className="flex items-center justify-between bg-muted/10 p-3 rounded">
                      <div>
                        <p className="font-medium">Database Systems - Lab</p>
                        <p className="text-sm text-muted-foreground">Tue • 13:00 — 15:00 • Lab 3</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Week 5</div>
                    </li>
                    <li className="flex items-center justify-between bg-muted/10 p-3 rounded">
                      <div>
                        <p className="font-medium">Software Eng. - Seminar</p>
                        <p className="text-sm text-muted-foreground">Thu • 09:00 — 10:30 • Room B2</p>
                      </div>
                      <div className="text-sm text-muted-foreground">Week 5</div>
                    </li>
                  </ul>
                </div>
              </div>

              <aside className="col-span-1">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h3 className="text-sm font-medium mb-2">Today</h3>
                  <p className="text-sm text-muted-foreground">No classes scheduled for today.</p>
                  <hr className="my-3" />
                  <h3 className="text-sm font-medium mb-1">Next</h3>
                  <p className="text-sm">Algorithms • 10:00 — 11:30</p>
                </div>
              </aside>
            </section>
=======
>>>>>>> 22cd1cc6bf69d05bb6043d5fffb7fd988d70d96a
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
}
