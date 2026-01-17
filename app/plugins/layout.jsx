import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>)
};

export default layout;
