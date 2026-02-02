'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroupContent
} from "@/components/ui/sidebar"
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { Button } from "@mui/material";
import { Book, Compass, LayoutDashboard, PencilRulerIcon, UserCircle2Icon, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

const SidebarOptions = [
  {
    title:'Dashboard',
    icon: LayoutDashboard,
    path:'/workspace'
  },
  {
    title:'My Learning',
    icon: Book,
    path:'/workspace/my-courses'
  },
  {
    title:'Explore Courses',
    icon: Compass,
    path:'/workspace/explore'
  },
  {
    title:'AI Tools',
    icon: PencilRulerIcon,
    path:'/workspace/ai-tools'
  },
  {
    title:'Billing',
    icon: WalletCards,
    path:'/workspace/billing'
  },
  {
    title:'Profile',
    icon: UserCircle2Icon,
    path:'/workspace/profile'
  },
]
export function AppSidebar() {

  const path=usePathname();
  return (
    <Sidebar>
      <SidebarHeader className={'p-4'}>
      <ViewSidebarIcon  />
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
        <Button>Create New Course</Button>
          </SidebarGroup>
          <SidebarGroup>

        <SidebarGroupContent>
          <SidebarMenu>
            {SidebarOptions.map((item,index)=>(
              <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                <Link href={item.path} className={`text-[17px] ${path.includes(item.path) && 'text-primary bg-purple-300'}`}  >
                <item.icon className="h-7 w-7" />
                <span>{item.title}</span>
                </Link>
                  </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>

          </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}