import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  ClipboardList, 
  BookOpen, 
  DollarSign, 
  Calendar, 
  HelpCircle,
  GraduationCap 
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Register", href: "/register", icon: ClipboardList },
  { name: "Subjects", href: "/subjects", icon: BookOpen },
  { name: "Fees", href: "/fees", icon: DollarSign },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Help", href: "/help", icon: HelpCircle },
];

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-card border-r border-border">
      <div className="flex items-center gap-2 h-16 px-6 border-b border-border">
        <GraduationCap className="h-8 w-8 text-primary" />
        <span className="font-semibold text-lg">SmartEnroll</span>
      </div>
      
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            activeClassName="bg-primary/10 text-primary font-medium"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
