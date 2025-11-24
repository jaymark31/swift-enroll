import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
<<<<<<< HEAD
import { formatPeso } from "@/lib/utils";
import { useState } from "react";
import { mockFees } from "@/lib/mockData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function Fees() {
  const [invoices, setInvoices] = useState(() => mockFees.slice());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [targetInvoiceId, setTargetInvoiceId] = useState<string | null>(null);

  const outstanding = invoices.filter((i) => i.status !== "Paid");
  const outstandingTotal = outstanding.reduce((s, i) => s + i.amount, 0);

  const openPay = (invoiceId?: string) => {
    const id = invoiceId ?? (outstanding[0] && outstanding[0].invoiceId) ?? null;
    setTargetInvoiceId(id);
    setDialogOpen(true);
  };

  const confirmPay = () => {
    if (!targetInvoiceId) return;
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.invoiceId === targetInvoiceId
          ? { ...inv, status: "Paid", paidDate: new Date().toISOString().slice(0, 10) }
          : inv,
      ),
    );
    setDialogOpen(false);
    toast({ title: "Payment successful", description: "Your payment has been recorded.", });
  };

  const targetInvoice = invoices.find((i) => i.invoiceId === targetInvoiceId) ?? outstanding[0];

=======

export default function Fees() {
>>>>>>> 22cd1cc6bf69d05bb6043d5fffb7fd988d70d96a
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        
        <main className="p-6 pb-24 lg:pb-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">Fees</h1>
<<<<<<< HEAD

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h2 className="text-lg font-semibold">Outstanding Balance</h2>
                <p className="text-3xl font-bold mt-2">{formatPeso(outstandingTotal)}</p>
                <p className="text-sm text-muted-foreground mt-2">{outstanding.length > 0 ? `Next due: ${outstanding[0].dueDate}` : "No outstanding invoices"}</p>
                <div className="mt-4">
                  <Button variant="default" onClick={() => openPay()} disabled={outstanding.length === 0}>
                    Pay Now
                  </Button>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-medium">Recent Transactions</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {invoices.map((inv) => (
                    <li key={inv.invoiceId} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{inv.description}</div>
                        <div className="text-xs text-muted-foreground">{inv.dueDate} • {inv.invoiceId}</div>
                      </div>
                      <div className="text-right">
                        <div>{formatPeso(inv.amount)}</div>
                        <div className="text-xs text-muted-foreground">{inv.status}{inv.paidDate ? ` • ${inv.paidDate}` : ""}</div>
                        {inv.status !== "Paid" && (
                          <Button variant="ghost" size="sm" onClick={() => openPay(inv.invoiceId)}>Pay</Button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="text-center">
                  <DialogTitle className="text-center">Confirm Payment</DialogTitle>
                  <DialogDescription className="text-center">Confirm payment for the selected invoice.</DialogDescription>
                </DialogHeader>

                <div className="mt-4 text-center">
                  {targetInvoice ? (
                    <div className="space-y-3">
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-sm text-muted-foreground">Invoice</div>
                        <div className="font-medium">{targetInvoice.invoiceId}</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-sm text-muted-foreground">Amount</div>
                        <div className="font-medium text-lg">{formatPeso(targetInvoice.amount)}</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-sm text-muted-foreground">Due</div>
                        <div className="font-medium">{targetInvoice.dueDate}</div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No invoice selected.</p>
                  )}
                </div>

                <DialogFooter className="mt-6 gap-2 flex justify-center sm:justify-center">
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                  <Button onClick={confirmPay} disabled={!targetInvoice}>Confirm Payment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
=======
>>>>>>> 22cd1cc6bf69d05bb6043d5fffb7fd988d70d96a
          </div>
        </main>
      </div>
      
      <MobileNav />
    </div>
  );
}
