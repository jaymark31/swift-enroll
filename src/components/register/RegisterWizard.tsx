import { useState } from "react";
import { mockStudent, mockSubjects, mockFees, mockSchedule } from "@/lib/mockData";
import { formatPeso } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

type Step = 0 | 1 | 2 | 3 | 4;

export const RegisterWizard = () => {
  const [step, setStep] = useState<Step>(0);

  const [personal, setPersonal] = useState({ name: mockStudent.name, email: mockStudent.email });
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSubject = (code: string) => {
    setSelected((prev) => (prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]));
  };

  const summaryUnits = selected.reduce((sum, code) => {
    const s = mockSubjects.find((m) => m.code === code);
    return sum + (s ? s.units : 0);
  }, 0);

  const handleSubmit = () => {
    // In a real app we'd POST to an API. Here we just simulate finalize.
    localStorage.setItem("registeredSubjects", JSON.stringify(selected));
    setStep(4);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="text-sm text-muted-foreground">Step {step + 1} of 5</div>
          <h3 className="text-xl font-semibold">
            {step === 0 && "Personal Info"}
            {step === 1 && "Select Subjects"}
            {step === 2 && "Fees & Summary"}
            {step === 3 && "Schedule Preview"}
            {step === 4 && "Complete"}
          </h3>
        </div>
      </div>

      {step === 0 && (
        <div className="bg-card p-4 rounded-lg border border-border">
          <label className="block mb-2 text-sm font-medium">Full name</label>
          <Input value={personal.name} onChange={(e) => setPersonal({ ...personal, name: e.target.value })} />
          <label className="block mt-4 mb-2 text-sm font-medium">Email</label>
          <Input value={personal.email} onChange={(e) => setPersonal({ ...personal, email: e.target.value })} />
        </div>
      )}

      {step === 1 && (
        <div className="bg-card p-4 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground mb-3">Choose subjects to register (click to toggle)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mockSubjects.map((s) => (
              <div
                key={s.code}
                onClick={() => toggleSubject(s.code)}
                className={`p-3 rounded cursor-pointer border ${
                  selected.includes(s.code) ? "border-primary/60 bg-primary/5" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{s.code} • {s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.time} • {s.instructor}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{s.units}u</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-card p-4 rounded-lg border border-border">
          <h4 className="font-medium">Fees Summary</h4>
          <p className="text-sm text-muted-foreground mt-2">Estimated fees based on selection.</p>

          <div className="mt-3">
            <div className="flex justify-between text-sm text-muted-foreground">
              <div>Selected units</div>
              <div>{summaryUnits} units</div>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <div>Estimated tuition</div>
              <div>{formatPeso(summaryUnits * 800)}</div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-card p-4 rounded-lg border border-border">
          <h4 className="font-medium">Schedule Preview</h4>
          <p className="text-sm text-muted-foreground mt-2">Potential schedule conflicts are shown below.</p>

          <ul className="mt-3 space-y-2 text-sm">
            {mockSchedule
              .filter((s) => selected.includes(s.subject))
              .map((s, i) => (
                <li key={i} className="flex justify-between">
                  <div>{s.day} • {s.time} • {s.subject}</div>
                  <div className="text-muted-foreground">{s.room}</div>
                </li>
              ))}
            {selected.length === 0 && <li className="text-muted-foreground">No subjects selected.</li>}
          </ul>
        </div>
      )}

      {step === 4 && (
        <div className="bg-card p-4 rounded-lg border border-border text-center">
          <h4 className="text-lg font-semibold">Registration Complete</h4>
          <p className="text-sm text-muted-foreground mt-2">You have registered for {selected.length} subject(s).</p>
        </div>
      )}

      <div className="flex items-center justify-between mt-2">
        <div>
          {step > 0 && step < 4 && (
            <Button variant="outline" onClick={() => setStep((s) => (s - 1) as Step)}>Back</Button>
          )}
        </div>

        <div className="flex gap-2">
          {step < 3 && (
            <Button onClick={() => setStep((s) => (s + 1) as Step)}>{step === 2 ? "Continue" : "Next"}</Button>
          )}

          {step === 3 && (
            <Button onClick={handleSubmit}>Confirm & Register</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterWizard;
