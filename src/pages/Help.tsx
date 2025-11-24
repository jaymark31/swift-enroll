import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";

export default function Help() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        
        <main className="p-6 pb-24 lg:pb-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">Help & Support</h1>
<<<<<<< HEAD

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="text-lg font-semibold">Contact</h2>
                <p className="text-sm text-muted-foreground mt-2">Email: support@smartenroll.edu</p>
                <p className="text-sm text-muted-foreground">Phone: +1 (555) 123-4567</p>
                <div className="mt-4">
                  <a className="text-primary" href="mailto:support@smartenroll.edu">Send an email</a>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium">FAQ</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li><strong>How do I register for a subject?</strong> Use the Register page to add subjects.</li>
                  <li><strong>Where can I view my timetable?</strong> Check the Schedule page for upcoming classes.</li>
                </ul>
              </div>
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
