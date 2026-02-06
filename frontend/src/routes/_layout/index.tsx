import { createFileRoute } from "@tanstack/react-router"

import useAuth from "@/hooks/useAuth"
import { Input } from "@/components/ui/input"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "Dashboard - FastAPI Cloud",
      },
    ],
  }),
})

function Dashboard() {
  const { user: currentUser } = useAuth()

  return (
    <div className="space-y-6">
      {/* 顶部搜索栏 - 只改了这个文件 */}
      <div className="border-b pb-4">
        <Input
          placeholder="请输入关键词搜索"
          className="max-w-sm"
        />
      </div>
      <div>
        <h1 className="text-2xl truncate max-w-sm">
          Hi, {currentUser?.full_name || currentUser?.email} 👋
        </h1>
        <p className="text-muted-foreground">
          Welcome back, nice to see you again!!!
        </p>
      </div>
    </div>
  )
}
