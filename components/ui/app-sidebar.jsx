import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const projects = [
  { title: "Physics Notes", url: "#", icon: Home },
  { title: "Chemistry AI", url: "#", icon: Inbox },
  { title: "Math Solver", url: "#", icon: Calendar },
]

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col">
      {/* Top Brand */}
      <div className="px-4 py-4 text-lg font-semibold border-b">
        Dark Matter
      </div>

      {/* Middle Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton asChild>
                    <a href={project.url}>
                      <project.icon className="h-4 w-4" />
                      <span>{project.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom User */}
      <SidebarFooter className="border-t p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User className="h-4 w-4" />
              <span>Account</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
