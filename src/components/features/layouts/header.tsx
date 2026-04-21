import { Separator } from "@/components/ui/separator";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeModeToggle } from "@/components/themes/theme-mode-toggle";
import { NotificationCenter } from "@/components/features/notifications/notification-center";
import ProfileDropdown from "@/components/features/porfiles/profile-dropdown";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function Header() {
  return (
    <header className="flex justify-between h-16 shrink-0 items-center border-b bg-background px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumbs />


      </div>
      <div className="flex items-center gap-2">
        <ThemeModeToggle />
        <NotificationCenter />
        <ProfileDropdown />
      </div>
    </header>
  );
}