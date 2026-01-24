import React from 'react'
import WorkspaceProvider from './provider'
import { SidebarInset, SidebarRail } from '@/components/ui/sidebar'

const WorkspaceLayout = ({ children }) => {
  return (
    <WorkspaceProvider>
      {/* Optional rail to toggle on desktop by clicking near edge */}
      <SidebarRail />
      <SidebarInset>
        {children}
      </SidebarInset>
    </WorkspaceProvider>
  )
}

export default WorkspaceLayout
