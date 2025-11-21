import { NavLink } from "@/components/NavLink";
import { 
  LayoutDashboard, 
  ClipboardList, 
  BookOpen, 
  DollarSign, 
  Calendar 
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Register", href: "/register", icon: ClipboardList },
  { name: "Subjects", href: "/subjects", icon: BookOpen },
  { name: "Fees", href: "/fees", icon: DollarSign },
  { name: "Schedule", href: "/schedule", icon: Calendar },
];

export const MobileNav = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="grid grid-cols-5 h-16">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
