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

  return (
    <div className={`flex items-center gap-0 px-2 py-2 rounded-lg transition-all duration-200 ease-in-out justify-start`} style={{ gap: state === "expanded" ? "0.75rem" : "0", paddingTop: state === "expanded" ? "1rem" : "0.5rem", paddingBottom: state === "expanded" ? "1rem" : "0.5rem" }}>
      <div className="shrink-0">
        <Image
          src="/cloud-plus-logo.png"
          alt="Cloud Plus Logo"
          width={40}
          height={40}
          className={`dark:invert rounded-md transition-all duration-200 ease-in-out ${state === "expanded" ? "w-10 h-10" : "w-5 h-5"}`}
          loading="eager"
        />
      </div>
      <div
        className={`grid flex-1 text-left text-sm leading-tight transition-all duration-200 ease-in-out ${
          state === "collapsed"
            ? "invisible max-w-0 overflow-hidden opacity-0"
            : "visible max-w-full opacity-100"
        }`}
      >
        <span className="truncate font-bold text-foreground">Cloud+</span>
        <span className="truncate text-xs text-muted-foreground font-medium">Media</span>
      </div>
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
