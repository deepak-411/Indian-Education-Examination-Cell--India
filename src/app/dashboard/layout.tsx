import { cookies } from "next/headers";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  
  // A simple way to simulate role-based sidebar, would be replaced by real auth
  const isAdmin = true; // For demonstration, we'll assume the user is an admin to show all links.

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <DashboardSidebar isAdmin={isAdmin} />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 group-data-[collapsible=icon]:sm:pl-14 group-data-[collapsible=offcanvas]:sm:pl-0 transition-all duration-200 ease-linear">
            <DashboardHeader />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              {children}
            </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
