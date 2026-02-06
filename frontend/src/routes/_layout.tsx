import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

import { Footer } from "@/components/Common/Footer"
import AppSidebar from "@/components/Sidebar/AppSidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      })
    }
  },
})

function Layout() {
  console.log("_layout.tsx Layout function executed!")
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b px-4 bg-background" style={{ backgroundColor: 'var(--background)', minHeight: '64px' }}>
          <SidebarTrigger className="-ml-1 text-muted-foreground" />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Input
              placeholder="请输入关键词搜索"
              className="max-w-[300px]"
              style={{ backgroundColor: 'var(--input)', border: '1px solid var(--border)' }}
            />
          </div>
        </header>
        <main className="flex-1 p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
