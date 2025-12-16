import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";
import Link from "next/link";
import { Logo } from "./logo";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="sm:hidden" />
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2">
           <Logo className="size-8 rounded-full" />
           <span className="font-headline text-xl font-bold text-primary">
                IEEC
            </span>
        </div>
      </div>
      <div className="relative flex items-center gap-4 md:grow-0">
        <UserNav />
      </div>
    </header>
  );
}
