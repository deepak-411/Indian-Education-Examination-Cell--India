'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, FileText, Home, Settings, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  isAdmin: boolean;
}

export function DashboardSidebar({ isAdmin }: DashboardSidebarProps) {
  const pathname = usePathname();

  const menuItems = isAdmin
    ? [
        { href: "/dashboard/admin", label: "Dashboard", icon: Home },
        { href: "/dashboard/admin/requests", label: "Requests", icon: Bell },
        { href: "/dashboard/admin/papers", label: "All Papers", icon: FileText },
        { href: "/dashboard/admin/organizations", label: "Organizations", icon: Users },
      ]
    : [
        { href: "/dashboard", label: "Dashboard", icon: Home },
        { href: "/dashboard/my-papers", label: "My Papers", icon: FileText },
      ];

  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Logo className="size-8 shrink-0" />
          <div className="flex flex-col">
            <span className="font-headline font-bold text-lg leading-tight">IEEC</span>
            <span className="text-xs text-muted-foreground leading-tight">{isAdmin ? "Admin" : "Institution"}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: "right", align: "center" }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard/settings" legacyBehavior passHref>
              <SidebarMenuButton 
                isActive={pathname === "/dashboard/settings"}
                tooltip={{ children: "Settings", side: "right", align: "center" }}>
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
