import React from "react"
import { Input } from "@/components/ui/input"

export default function AppLayout({ children }) {
  console.log("Layout loaded")
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", flex: 1 }}>
      <div
        style={{
          padding: "16px",
          borderBottom: "1px solid var(--border, #eee)",
          flexShrink: 0,
        }}
      >
        <Input
          placeholder="请输入关键词搜索"
          style={{ maxWidth: "300px" }}
          className="app-layout-search"
        />
      </div>
      <div style={{ padding: "24px", flex: 1 }}>{children}</div>
    </div>
  )
}
