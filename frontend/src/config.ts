/**
 * 前端统一配置
 * API 地址可通过环境变量 VITE_API_URL 覆盖（见 frontend/.env）
 */
const DEFAULT_API_URL = "http://localhost:8000"

export const config = {
  /** 后端 API 根地址 */
  apiBaseUrl:
    typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL
      ? import.meta.env.VITE_API_URL
      : DEFAULT_API_URL,
} as const
