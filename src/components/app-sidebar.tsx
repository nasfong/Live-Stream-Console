"use client"

import * as React from "react"
import Image from "next/image"

import { NavUser } from "@/components/nav-user"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, FrameIcon, PieChartIcon, MapIcon, LayoutDashboard } from "lucide-react"
import { NavMainWithSub } from "@/components/nav-main-with-sub"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/vercel.svg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
  ],
  navMainWithSub: [
    {
      title: "Live Stream",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      defaultOpen: true,
      items: [
        {
          title: "Rooms",
          url: "/dashboard/rooms",
        },
        {
          title: "Analytics",
          url: "/dashboard/live-stream/analytics",
        },
        {
          title: "Plan",
          url: "/dashboard/live-stream/plan",
        },
      ],
    },
    {
      title: "Streaming",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: [
        {
          title: "Streaming List",
          url: "/dashboard/streaming",
        },
        {
          title: "Analytics",
          url: "/dashboard/streaming/analytics",
        },
        {
          title: "Plan",
          url: "/dashboard/streaming/plan",
        },
      ],
    },
    {
      title: "Sabay Meeting",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: [],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}

function SidebarHeaderContent() {
  const { state } = useSidebar()
  const isExpanded = state === "expanded"

  return (
    <div className={`flex items-center ${isExpanded ? "gap-3 px-2 py-4" : "gap-0 px-2 py-2 justify-center"} rounded-lg`}>
      <div className="shrink-0">
        <Image
          src="/cloud-plus-logo.png"
          alt="Cloud Plus Logo"
          width={40}
          height={40}
          className={`dark:invert rounded-md ${isExpanded ? "w-10 h-10" : "w-8 h-8"}`}
          loading="eager"
        />
      </div>
      {isExpanded && (
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold text-foreground leading-tight">Cloud+</span>
          <span className="text-xs text-muted-foreground font-medium">Media</span>
        </div>
      )}
    </div>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeaderContent />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMainWithSub items={data.navMainWithSub} />

        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
