import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
<<<<<<< HEAD

export function formatPeso(amount: number) {
  try {
    return new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(amount);
  } catch (e) {
    return `₱${amount.toFixed(2)}`;
  }
}
=======
>>>>>>> 22cd1cc6bf69d05bb6043d5fffb7fd988d70d96a
