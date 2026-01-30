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

const SidebarOptions = [
  {
    title:'Dashboard',
    icon: LayoutDashboard,
    path:'#'
  },
  {
    title:'My Learning',
    icon: Book,
    path:'/workspace/my-courses'
  },
  {
    title:'Explore COurses',
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
                <Link href={item.path}>
                <item.icon />
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